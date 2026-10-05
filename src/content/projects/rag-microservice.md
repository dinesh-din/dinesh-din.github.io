---
title: AI-Powered RAG Microservice
summary: "A Retrieval-Augmented Generation microservice on Spring AI, OpenAI and pgvector that cut inference latency by 40% and supports 10K+ concurrent users."
status: shipped
order: 1
stack: [Spring Boot, Spring AI, OpenAI APIs, pgvector, Kafka, Docker]
---

## Overview

A microservice that answers questions grounded in your own data. It retrieves relevant context with semantic search and passes it to an OpenAI model through Spring AI, so answers stay tied to real source material instead of the model's memory.

## What I built

- Designed the RAG pipeline with **Spring AI**, using **OpenAI APIs** for generation.
- Implemented **semantic search over pgvector**, storing embeddings in PostgreSQL.
- Packaged the service with **Docker** and wired in **Kafka** for the messaging side of the system.
- Tuned the retrieval and inference path to cut latency.

## Results

- **40% lower inference latency**
- Supports **10K+ concurrent users**

> Add the details that make this stand out: an architecture diagram, how Kafka fits in, your chunking and embedding choices, and what you changed to get the 40% latency win.
