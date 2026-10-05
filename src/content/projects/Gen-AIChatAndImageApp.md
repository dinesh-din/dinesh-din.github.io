---
title: Gen AI Chat and Image App
summary: "A generative AI web app that combines conversational chat with image features, built as a React client and a Spring Boot server on Spring AI and the OpenAI APIs."
status: shipped
order: 1
stack: [React, Spring Boot, Spring AI, OpenAI APIs, Node.js]
repo: https://github.com/dinesh-din/Gen-AI-Chat-and-Image
---

## Overview

A full-stack generative AI application with two sides: a chat experience and image features. A **React** client talks to a server that calls the **OpenAI APIs** through **Spring AI**, so the AI logic stays on the backend and the browser never touches the API key.

## How it's built

- **Client:** a **React** app in the `client` folder.
- **Server:** a **Spring Boot** service in the `server` folder, using **Spring AI** to call the **OpenAI APIs**.
- **Tooling:** **Node.js** for the frontend toolchain.

The full source is on [GitHub](https://github.com/dinesh-din/Gen-AI-Chat-and-Image).