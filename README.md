<img width="966" height="741" alt="image" src="https://github.com/user-attachments/assets/7c81ecae-bce5-41a6-957c-315815b2d0c4" />

<img width="536" height="450" alt="Screenshot 2026-05-16 181646" src="https://github.com/user-attachments/assets/9e7f5cc4-c896-4a9e-8ba9-5273e85d9754" />
<img width="938" height="1010" alt="Screenshot 2026-05-16 182612" src="https://github.com/user-attachments/assets/6737355f-b496-492a-9044-deef98c69589" />
# Backend Services Assignment

This repository contains solutions for backend-focused system design and optimization tasks. The project was implemented using Node.js and Express.js with emphasis on clean API integration, modular structure, optimization logic, and scalable backend design concepts.

---

# Project Structure

```txt
backend-services/
│
├── vehicle_scheduling/
│   ├── src/
│   ├── screenshots/
│   └── README.md
│
└── notification_system/
    ├── backend/
    ├── priority_inbox/
    ├── screenshots/
    └── notification_system_design.md
```

---

# Vehicle Maintenance Scheduler

## Overview

The Vehicle Maintenance Scheduler service optimizes maintenance task selection for depots with limited mechanic hours. The objective is to maximize operational impact while staying within available maintenance capacity.

The implementation uses a Dynamic Programming approach based on the classic 0/1 Knapsack Optimization problem.

---

## Features

- Protected API integration using Bearer token authentication
- Depot and vehicle task retrieval
- Maintenance optimization using Dynamic Programming
- REST API endpoint for scheduling
- Modular backend architecture
- Error handling and response validation

---

## Tech Stack

- Node.js
- Express.js
- Axios
- JavaScript

---

## Optimization Logic

The scheduling problem was modeled as:

- Duration → Weight
- Impact → Value
- Mechanic Hours → Capacity

Dynamic Programming was used to compute the optimal set of maintenance tasks that maximize total impact.

---

## API Endpoint

### Get Optimized Schedule

```http
GET /api/schedule/:depotId
```

### Example

```http
http://localhost:3000/api/schedule/1
```

---

# Notification System

## Overview

The Notification System section focuses on scalable backend system design concepts including:

- Notification storage
- Priority ranking
- Realtime delivery
- Queue-based processing
- Database indexing
- Scalability considerations

---

## Included Components

### Notification System Design
Covers staged backend architecture decisions including:
- API design
- Database schema
- Indexing strategy
- Scaling approaches
- Queue processing
- Priority inbox logic

### Priority Inbox
Implements notification prioritization based on:
- Notification type
- Timestamp
- Weighted ranking logic

---

# Running the Project

## Install Dependencies

```bash
npm install
```

## Start Vehicle Scheduling Service

```bash
node src/app.js
```

---

# Screenshots

Relevant API outputs, Postman requests, and implementation screenshots are included inside the `screenshots` folders.

---

# Notes

The project focuses on backend engineering fundamentals including:
- API integration
- Authentication
- Optimization algorithms
- System design thinking
- Scalable backend patterns
- Modular code organization
