---
title: PharmaConnect Enterprise Healthcare Platform
summary: "A full-stack healthcare platform for ordering medicine and booking doctor appointments, with a React frontend, Spring Boot REST APIs and JWT-secured access. Delivered 99.9% uptime and 92% test coverage."
status: shipped
order: 2
stack: [React, Spring Boot, MySQL, AWS, Jenkins, JWT]
repo: https://github.com/dinesh-din/Pharma-Connect
---

## Overview

PharmaConnect brings two everyday healthcare tasks into one platform: ordering medicine and scheduling doctor appointments. A React frontend talks to Spring Boot REST APIs backed by MySQL, and the whole system is deployed on AWS and shipped through Jenkins pipelines.

## What it does

- **Medicine ordering:** users browse and order medicine online.
- **Doctor appointments:** users schedule appointments with doctors.
- **Secure access:** sign-in is protected with **JWT authentication** and **role-based access control (RBAC)**, so each type of user only sees what they should.

## How it's built

- **Client:** a **React** single-page app (`PharmaCareClient`).
- **Server:** a **Spring Boot** REST API (`PharmaCareServer`) with data stored in **MySQL**.
- **Delivery:** **Jenkins** pipeline configuration (`jenkins/`) automates builds and deployment to **AWS**.

## Results

- **99.9% uptime**
- **92% test coverage**

The full source is on [GitHub](https://github.com/dinesh-din/Pharma-Connect).