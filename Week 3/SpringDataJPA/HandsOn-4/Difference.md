# Hands-on 4: Difference between JPA, Hibernate, and Spring Data JPA

---

## 🔹 Java Persistence API (JPA)
- JPA is a **Java Specification** (JSR 338) for accessing, persisting, and managing data between Java objects and relational databases.
- It provides an abstraction layer but does **not include any implementation**.
- **Hibernate** is one of the most commonly used implementations of the JPA specification.

---

## 🔹 Hibernate
- Hibernate is an **ORM (Object-Relational Mapping) tool**.
- It provides a concrete implementation of the JPA specification.
- Handles mapping Java classes to database tables and provides HQL (Hibernate Query Language).
- Requires more boilerplate code for session and transaction management compared to Spring Data JPA.

---

## 🔹 Spring Data JPA
- **Spring Data JPA** is not a JPA implementation itself.
- It provides a **higher-level abstraction** over an implementation like Hibernate.
- It helps eliminate boilerplate code by generating common CRUD methods automatically.
- It **manages transactions** and **integrates tightly with Spring Boot**.
- You define just a repository interface, and Spring will generate the implementation automatically at runtime.
