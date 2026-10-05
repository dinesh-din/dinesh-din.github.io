---
title: Autonomous Coding Agent
summary: "An agent that picks an unsolved coding problem every day, writes a solution with tests, and commits it to a repository without human intervention. Built in Python with Claude, Chroma and FastAPI, with no agent framework."
status: shipped
order: 4
stack: [Python, Claude, FastAPI, Chroma, SQLite, GitHub Actions]
repo: https://github.com/dinesh-din/coding-agent
---

## Overview

A bot that practices coding on its own. Each day it chooses an unsolved problem, generates a solution along with tests, and commits the result to a repository, with no one in the loop.

## How it works

The core loop runs in a fixed sequence: select a problem, retrieve context, generate the solution with **Claude**, write the files, store embeddings, then make a guarded commit and push.

## Highlights

- **RAG for consistency:** solved problems are embedded in a local **Chroma** vector store, so new solutions match the existing style and duplicates are avoided.
- **Hand-rolled agent loop:** built deliberately without LangChain or a similar framework, to show exactly how the agent loop works.
- **Safety guardrails:** dry-run mode is the default, diff size is limited, and changes can go through a pull request instead of straight to `main`.
- **Full audit trail:** a **SQLite** database logs every run, and the history is available through an API.
- **Two ways to run it:** a scheduled **GitHub Actions** workflow (recommended), or a **FastAPI** server with **APScheduler**.

## Stack

Python, the Anthropic API (Claude), FastAPI, APScheduler, Chroma, SQLite, GitHub Actions, and pytest for the generated tests.

The full source is on [GitHub](https://github.com/dinesh-din/coding-agent).