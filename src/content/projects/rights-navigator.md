---
title: California Rights Navigator
summary: "An AI helper for people without a lawyer: upload a confusing document such as a health insurance denial letter, check it against California rules, and get a draft response that cites the law. Early prototype that runs fully on local models."
status: in-progress
order: 0
featured: true
private: true
stack: [Python, FastAPI, LangGraph, Ollama, PostgreSQL, pgvector, Spring Boot, Docker]
layers:
  AI and workflow: [LangGraph, Ollama, Qwen 2.5 7B, nomic-embed-text]
  Backend: [Python, FastAPI, Spring Boot (Java 17), Maven]
  Data and retrieval: [PostgreSQL 16, pgvector, Hybrid search (vector + full-text)]
  Quality: [pytest, Evaluation harness, 14 fictional test letters]
  DevOps: [Docker Compose, GitHub (private)]
problem: "Insurance denials, leases and benefit notices are hard to read, and most people cannot afford a lawyer to explain their options and deadlines."
approach: "A pipeline reads the letter, works out which appeal system applies, retrieves the right California statutes, drafts a cited letter, and checks every statement with code before it is shown."
next: "Grow the statute set, add case files and deadline tracking in Spring Boot, get an attorney review, and add privacy protections before any real user."
---

## Overview

California Rights Navigator helps a person who has received a confusing document understand it, check it against California rules, and draft a response that cites the law. The first module covers **health insurance denial appeals**. Later modules are planned for tenant rights, benefits eligibility, and plain-language summaries of policies and leases.

Everything runs locally on **Ollama**, so there are no API costs and no document leaves the machine.

> **Status:** an early prototype for development and testing. It is not legal advice and it is not ready for real users. Every draft must be read and checked by a person.

## What it does today

Upload a denial letter (PDF, .txt or .md) and the service:

1. **Reads the letter** and extracts the key facts (reason for denial, category, reference number) with a local model, backed by keyword fallbacks.
2. **Decides which appeal system applies**: DMHC-regulated plan, CDI-regulated plan, Medi-Cal, Medicare, a self-funded employer plan (ERISA), or "needs confirmation". California's Independent Medical Review only applies to some of these, so for the others the service stops and explains what to do instead of drafting a misleading letter.
3. **Drafts a cited grievance letter** for DMHC and CDI plans: it finds the relevant California statutes, writes the legal basis, checks every statement against the statute text, and removes anything it cannot verify.

![Flow diagram: upload, intake, plan-type gate, retrieve, grade, draft, verify, finalize](/images/projects/rights-navigator-flow.svg)

## How it stays honest

The model only writes the legal-basis bullets. Code decides everything else, and a bullet that fails a check is repaired or removed, never shown as verified.

| Check | What it catches |
|---|---|
| Citation required | Statements with no source, or a source that does not exist |
| Numbers must be in the cited text | Invented deadlines |
| Time-limit wording | A deadline counted from the wrong event |
| Exact quotes must be present | Fabricated quotations |
| Third person only | A letter addressed to "you" when it is written to the insurer |
| Exceptions and lists flagged | "unless..." and "all of the following..." bullets get a reviewer warning |
| Statute's own sentence attached | Every number comes with the sentence it came from |

These checks catch fabricated citations, invented numbers and common wording mistakes. They cannot prove a paraphrase is legally correct, which is why an evaluation set and human review exist.

## Testing the AI

I built an evaluation harness with **14 fictional letters** and their expected outcomes. It checks routing, category detection and the required rules in each draft, and a live mode runs the full pipeline against the local model and database.

The first live baseline (14 letters, 3 runs each) passed 33 of 42. Routing and stop cases were 100%. The failures traced to a retrieval gap and a model-set flag, and both were fixed afterwards. Each new run is recorded so quality cannot slip unnoticed.

## Architecture

- **AI service (Python):** FastAPI endpoints for intake, appeal drafting and a retrieval test; a LangGraph workflow for retrieve, grade, draft, verify, repair and finalize; hybrid search over statute text in PostgreSQL with pgvector.
- **Platform (Spring Boot, Java 17):** the gateway to the AI service, with authentication, case files and deadline tracking planned.
- **Local-first:** Docker Compose for the database, Ollama for the models.

## What comes before real users

Attorney review of the routing rules and corpus, user accounts and an audit log, privacy protections (PII redaction, encryption, retention), OCR for scanned letters, a simple web front end, plain-language explanations, and Spanish and other California languages.
