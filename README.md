# 🚀 Frontend Core Template

## 📌 Overview

This is a **React frontend core template** designed for scalability and reuse across different projects.

It provides a clean foundation with:

- Centralized routing system
- Layout separation (public / protected)
- JWT-based authentication
- Permission-based authorization
- Feature-based structure

---

## 🧠 Core Idea

The system is **domain-agnostic** — it does NOT depend on roles like teacher, student, admin.

Instead, it uses a generic model:

- `role: string`
- `permissions: string[]`

Permissions follow the format:

```text
<resource>.<action>
```

Example:

```text
sample.view
sample.create
```

---

## 🔐 Authorization

- Authentication is handled via JWT token
- Token is decoded on the frontend
- Permissions are used to:
  - Protect routes
  - Control access

> Backend is responsible for real security

---

## 🧭 Routing

- Routes are defined in a centralized config
- Support:
  - Layout wrapping
  - Protected routes
  - Permission checks

- Feature modules can define their own routes

---

## 🧱 Structure (Simplified)

```text
src/
  routes/
  features/
  hooks/
  utils/
  constants/
```

---

## 🎯 Goal

Provide a **clean, scalable, and reusable foundation** for building modern web applications.
