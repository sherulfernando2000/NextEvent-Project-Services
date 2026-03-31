# 🚀 NextEvent Project Services

**Domain Microservices Layer for the NextEvent Ecosystem**

This repository contains the core **business/domain microservices** of the NextEvent platform.  
It is managed using **Git Submodules** and deployed as part of a unified microservices architecture.

---

## 👤 Student Information

- **Student Name:** Sherul Dhanushka Fernando
- **Student Number:** 2301691014
- **Slack Handle:** Sherul Dhanushka
- **GCP Project ID:** project-0ae0d75b-3979-4ebf-be9

---

## 📝 Project Description

This repository represents the **Services Layer** of the NextEvent system.

It contains independent microservices responsible for handling core business logic such as:

- 🎟 Event Management
- 👥 Participant Management
- 📝 Registration Management

Each service is developed as a **Spring Boot microservice** and can run independently or as part of the full ecosystem.

---

## 🧩 Microservices (Submodules)

| Service | Repository | Description |
|---------|------------|-------------|
| Event Service | service-event | Manages events creation, updates, and retrieval |
| Participant Service | service-participant | Handles participant data and operations |
| Registration Service | service-registration | Manages event registrations and relationships |

---

## 🛠 Technology Stack

| Technology | Version / Detail |
|------------|-----------------|
| Java | 25 |
| Spring Boot | 4.0.3 |
| Spring Cloud | 2025.1.0 |
| Maven | Build Tool |
| PM2 | Process Manager (GCP deployment) |
| CI/CD | GitHub Actions + Google Cloud SDK |

---


