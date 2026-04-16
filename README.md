# AI Pattern Library · KI-Muster-Bibliothek

**Best Practices for AI-Intensive Backend Systems · Best Practices für KI-intensive Backend-Systeme**

> 🇬🇧 [English](#english) · 🇩🇪 [Deutsch](#deutsch)

---

## English

### What is this?

An opinionated, production-focused reference for **software engineers and architects** building AI-intensive backend systems. No introductory material, no theory — concrete patterns with complete Python code, clear trade-offs, and decision rules drawn from real-world deployments.

Every pattern follows a consistent schema:

```
Problem → Solution → Complete Python code → When to use / When not to use → Trade-offs
```

### Who is it for?

| Role | What you'll find |
|---|---|
| **Software Engineer** implementing AI components | Production-proven implementations for RAG, structured generation, prompt security, caching, concurrency |
| **Software Architect** designing AI systems | Capability-to-use-case mapping, governance profiles, resilience patterns, decision frameworks |

> **Not the right resource for:** first steps with LLMs, introduction to Python, general machine learning theory.

### Contents

The library covers **19 sections** with **82 patterns**, **71 complete Python code examples**, and **83 Mermaid architecture diagrams**.

| Section | Focus |
|---|---|
| **1. Business Patterns** | 14 AI capability patterns with governance profiles (HitL, GDPR, determinism) |
| **2. AI & LLM Patterns** | Map-Reduce, Evidence+Source, Recall-First, HyDE, Closed Taxonomy, Multi-Stage Pipeline |
| **3. Data Processing** | Rich Chunk Metadata, Pass-by-Reference, Structural Text Deconstruction |
| **4. Security** | Prompt Injection Defense (4-layer), Output Guardrails, PII Redaction (Presidio) |
| **5. Concurrency** | Sliding Window Executor, Thread-Safe Rate Limiter, Per-Model Throttling |
| **6. RAG** | Failure-Isolated Indexing, Domain-Specific Chunk Types |
| **7. Workflow Engine & Resilience** | Durable Workflows (Temporal), LLM Gateway |
| **8. Infrastructure** | Two-Layer Docker Compose, Secrets Management |
| **9. Observability** | Full OTel Stack (Prometheus + Loki + Tempo + Grafana) |
| **10. Code Organization** | uv Workspace Monorepo, Living Service READMEs |
| **11. Prompt Engineering** | Positive/Negative Examples, Structured Constraints, Domain Context, Edge Cases, Prefill |
| **12. Evals & Testing** | LLM-as-Judge, Golden Dataset Regression, Behavioral Testing, Automated Eval Pipeline |
| **13. Caching** | Exact Hash Cache, Semantic Cache, Embedding Cache, Cache Invalidation |
| **14. Structured Generation** | Tool Use / Function Calling, Instructor / Schema-First, Schema Design, Streaming |
| **15. Agent Patterns** | ReAct Loop, Tool Registry, Human-in-the-Loop Checkpoints, Agent Memory, Agent Evaluation |
| **16. Advanced RAG** | Hybrid RAG (BM25 + pgvector + RRF), Adaptive Query Boosting, Query Expansion, Model Priority Chain, Token Budget, Cross-Encoder Reranking, HNSW Tuning |
| **17. LLM Robustness** | Response Validator + Auto-Repair, Validation Feedback Loop, Confidence Scorer, Circuit Breaker, Fallback Hierarchy, Fail-Fast, LLM Metrics |
| **19. LLM Cost Management** | Cost Tracking (Prometheus), Model Routing by Cost, Per-User Budget Limits (Redis) |
| **20. Multi-Tenancy** | Tenant Isolation (ContextVar + Qdrant filters), Tenant-Specific Prompt Management |

### Foundation Patterns — Start Here

These 8 patterns should be in place before the first production deployment. They are hard to retrofit and prevent the most common production failures:

| Priority | Pattern | Why first |
|---|---|---|
| 🔴 1 | **LLM Gateway** (7.2) | Prevents provider lock-in from day one |
| 🔴 2 | **Structured Generation / Instructor** (14.2) | Free JSON parsing breaks in production |
| 🔴 3 | **Prompt Injection + PII Redaction** (4.1/4.2) | Most common security vulnerabilities |
| 🟡 4 | **Exact Hash Caching** (13.1) | Saves 40–70% of LLM costs during development |
| 🟡 5 | **Observability Stack** (9.1) | LLM debugging without traces is guesswork |
| 🟡 6 | **Sliding Window Executor** (5.1) | Prevents rate-limit storms on parallel calls |
| 🟢 7 | **Evidence + Source Pattern** (2.2) | Every extraction needs an auditable source |
| 🟢 8 | **Golden Dataset + Regression Tests** (12.2) | Safe prompt deployment requires a baseline |

### Technology Stack

Python 3.11+ · Anthropic SDK · OpenAI SDK · instructor · PostgreSQL + pgvector · Qdrant · Redis · Temporal · OpenTelemetry · Prometheus · Grafana/Loki/Tempo · Pydantic v2 · Docker Compose

### Pattern Evaluation Framework

Every pattern is rated across 6 dimensions:

| | Attribute | Favorable 🟢 | Critical 🔴 |
|---|---|---|---|
| 🔄 | **Learning** | Static, predictable | Requires active retraining |
| 🎯 | **Determinism** | Reproducible, auditable | Non-deterministic, HitL required |
| 🔍 | **Explainability** | Fully traceable (XAI High) | Black box (XAI Low) |
| 👤 | **Human-in-the-Loop** | Optional | Mandatory for critical outputs |
| 🔒 | **GDPR Risk** | No personal data | DPIA mandatory |
| 📊 | **Data Requirement** | LLM prompting sufficient | Thousands of examples needed |

### Files

| File | Description |
|---|---|
| [`KI-Design-Patterns-EN.md`](./KI-Design-Patterns-EN.md) | English version (this translation) |
| [`KI-Design-Patterns-v2.md`](./KI-Design-Patterns-v2.md) | German original (Deutsche Version) |

### Changelog

| Version | Date | Changes |
|---|---|---|
| 1.2 | 2026-04 | English translation; Sections 19 (Cost Management) + 20 (Multi-Tenancy) added; Section 18 (General Backend Patterns) removed; PII Redaction (4.2) added; Cross-Encoder Reranking (16.8) + HNSW Tuning (16.9) |
| 1.1 | 2026-04 | Role-based navigation, tech stack table, quick-start guide, system architecture diagram, difficulty levels, anti-pattern callouts |
| 1.0 | 2026-01 | Initial release — 18 sections, 14 business patterns, 39+ technical patterns |

### Scope & Versioning

Patterns focus on Python 3.11+, Anthropic/OpenAI SDK, PostgreSQL+pgvector, Qdrant, Redis and Temporal. Not covered: fine-tuning, Kubernetes deployment, A/B testing of models, legal advice. As of April 2026 — architecture patterns are more stable than specific API calls.

---

## Deutsch

### Was ist das?

Ein meinungsstarkes, produktionsorientiertes Nachschlagewerk für **Software-Ingenieure und Architekten**, die KI-intensive Backend-Systeme bauen. Keine Einführung, keine Theorie — konkrete Muster mit vollständigem Python-Code, klaren Trade-offs und Entscheidungsregeln aus echten Deployments.

Jedes Muster folgt einem einheitlichen Schema:

```
Problem → Lösung → Vollständiger Python-Code → Wann einsetzen / Wann nicht → Trade-offs
```

### Für wen?

| Rolle | Was du findest |
|---|---|
| **Software-Ingenieur**, der KI-Komponenten implementiert | Produktionserprobte Implementierungen für RAG, Structured Generation, Prompt-Sicherheit, Caching, Concurrency |
| **Software-Architekt**, der KI-Systeme entwirft | Fähigkeit-zu-Use-Case-Mapping, Governance-Profile, Resilienzmuster, Entscheidungsframeworks |

> **Nicht das richtige Dokument für:** erste Schritte mit LLMs, Einführung in Python, allgemeines Machine-Learning-Theorie.

### Inhalt

Die Bibliothek umfasst **19 Sektionen** mit **82 Mustern**, **71 vollständigen Python-Code-Beispielen** und **83 Mermaid-Architekturdiagrammen**.

| Sektion | Schwerpunkt |
|---|---|
| **1. Business-Muster** | 14 KI-Fähigkeitsmuster mit Governance-Profilen (HitL, DSGVO, Determinismus) |
| **2. KI & LLM-Muster** | Map-Reduce, Evidence+Source, Recall-First, HyDE, Closed Taxonomy, Multi-Stage Pipeline |
| **3. Datenverarbeitung** | Rich Chunk Metadata, Pass-by-Reference, Structural Text Deconstruction |
| **4. Sicherheit** | Prompt-Injection-Defense (4-schichtig), Output Guardrails, PII-Redaktion (Presidio) |
| **5. Concurrency** | Sliding Window Executor, Thread-Safe Rate Limiter, Per-Model Throttling |
| **6. RAG** | Failure-Isolated Indexing, Domain-Specific Chunk Types |
| **7. Workflow-Engine & Resilienz** | Durable Workflows (Temporal), LLM Gateway |
| **8. Infrastruktur** | Two-Layer Docker Compose, Secrets Management |
| **9. Observability** | Vollständiger OTel-Stack (Prometheus + Loki + Tempo + Grafana) |
| **10. Code-Organisation** | uv Workspace Monorepo, Living Service READMEs |
| **11. Prompt Engineering** | Positiv-/Negativbeispiele, Strukturierte Constraints, Domain Context, Edge Cases, Prefill |
| **12. Evals & Testing** | LLM-as-Judge, Golden Dataset Regression, Behavioral Testing, Automated Eval Pipeline |
| **13. Caching** | Exact Hash Cache, Semantisches Caching, Embedding Cache, Cache Invalidation |
| **14. Structured Generation** | Tool Use / Function Calling, Instructor / Schema-First, Schema Design, Streaming |
| **15. Agent-Muster** | ReAct Loop, Tool Registry, Human-in-the-Loop Checkpoints, Agent Memory, Agent Evaluation |
| **16. Erweiterte RAG-Muster** | Hybrid-RAG (BM25 + pgvector + RRF), Adaptive Query Boosting, Query Expansion, Model Priority-Chain, Token Budget, Cross-Encoder Reranking, HNSW Tuning |
| **17. LLM-Robustheit** | Response Validator + Auto-Repair, Validation Feedback Loop, Confidence Scorer, Circuit Breaker, Fallback Hierarchy, Fail-Fast, LLM Metrics |
| **19. LLM-Kosten-Management** | Cost Tracking (Prometheus), Model Routing nach Kosten, Per-User Budget Limits (Redis) |
| **20. Multi-Tenancy** | Tenant-Isolierung (ContextVar + Qdrant-Filter), Tenant-spezifisches Prompt-Management |

### Fundament-Muster — Hier anfangen

Diese 8 Muster sollten vor dem ersten Produktions-Deployment implementiert sein. Sie sind schwer nachzurüsten und verhindern die häufigsten Produktionsprobleme:

| Priorität | Muster | Warum zuerst |
|---|---|---|
| 🔴 1 | **LLM Gateway** (7.2) | Verhindert Provider-Lock-in ab Tag 1 |
| 🔴 2 | **Structured Generation / Instructor** (14.2) | Freies JSON-Parsing bricht in Produktion |
| 🔴 3 | **Prompt Injection + PII-Redaktion** (4.1/4.2) | Häufigste Sicherheitslücken |
| 🟡 4 | **Exaktes Hash-Caching** (13.1) | Spart 40–70 % LLM-Kosten in der Entwicklung |
| 🟡 5 | **Observability-Stack** (9.1) | LLM-Debugging ohne Traces ist Raten |
| 🟡 6 | **Sliding Window Executor** (5.1) | Verhindert Rate-Limit-Stürme bei parallelen Calls |
| 🟢 7 | **Evidence + Source Pattern** (2.2) | Jede Extraktion braucht eine auditierbare Quelle |
| 🟢 8 | **Golden Dataset + Regression Tests** (12.2) | Sicheres Prompt-Deployment braucht eine Baseline |

### Technologie-Stack

Python 3.11+ · Anthropic SDK · OpenAI SDK · instructor · PostgreSQL + pgvector · Qdrant · Redis · Temporal · OpenTelemetry · Prometheus · Grafana/Loki/Tempo · Pydantic v2 · Docker Compose

### Dateien

| Datei | Beschreibung |
|---|---|
| [`KI-Design-Patterns-EN.md`](./KI-Design-Patterns-EN.md) | Englische Version |
| [`KI-Design-Patterns-v2.md`](./KI-Design-Patterns-v2.md) | Deutsche Originalversion |

### Changelog

| Version | Datum | Änderungen |
|---|---|---|
| 1.2 | 2026-04 | Englische Übersetzung; Sektionen 19 (Kosten-Management) + 20 (Multi-Tenancy) ergänzt; Sektion 18 (Allgemeine Backend-Muster) entfernt; PII-Redaktion (4.2) ergänzt; Cross-Encoder Reranking (16.8) + HNSW Tuning (16.9) |
| 1.1 | 2026-04 | Rollenbasierte Navigation, Tech-Stack-Tabelle, Quick-Start-Leitfaden, Systemarchitektur-Diagramm, Schwierigkeitsgrade, Anti-Pattern-Callouts |
| 1.0 | 2026-01 | Erstveröffentlichung — 18 Sektionen, 14 Business-Muster, 39+ technische Muster |

### Scope & Versionierung

Die Muster fokussieren auf Python 3.11+, Anthropic/OpenAI SDK, PostgreSQL+pgvector, Qdrant, Redis und Temporal. Nicht behandelt: Fine-Tuning, Kubernetes-Deployment, A/B-Tests von Modellen, Rechtsberatung. Stand April 2026 — Architektur-Muster sind stabiler als konkrete API-Calls.

---

© amkat.de 2026
