---
title: Autonomous Research Assistant
summary: A LangGraph agent that plans a question, researches it in parallel across the web and local PDFs, critiques its own findings, and writes a cited report.
status: in-progress
order: 5
stack: [Python, LangGraph, FastAPI, Chroma, Claude, LangSmith]
---

## The problem

Answering a research question well means breaking it down, checking more than one source, and noticing what is missing. A single prompt does none of that reliably.

## How it works

- **Planner** splits the question into sub-questions with a structured (Pydantic) plan.
- **Researchers** run in parallel, one per sub-question, using web search and RAG over uploaded PDFs.
- **Critic** looks for gaps and weak sources, and loops back to research when needed.
- **Human approval** pauses the graph so the outline can be approved or edited.
- **Writer** drafts the final report with citations.

## What I'm learning

State machines for agents, checkpointing and resumable runs, evaluating citation accuracy, and tracing with LangSmith.
