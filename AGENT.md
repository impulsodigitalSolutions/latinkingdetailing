# Agent Instructions & Workflow Rules

## 1. Git Commit & Push Policy (STRICT)

> **CRITICAL MANDATE**: NEVER execute `git commit` or `git push` without explicit, unambiguous permission from the user.

- **No Unauthorized Commits**: Even after completing a task, fixing a bug, or passing builds/tests, do NOT run `git commit` or create git commits unless the user explicitly requested it in their prompt.
- **No Unauthorized Pushes**: NEVER run `git push`, `git push origin <branch>`, or any push command to remote repositories without direct and explicit user authorization.
- **Permitted Git Commands**:
  - Read-only status checks are permitted: `git status`, `git diff`, `git log`, `git branch`.
  - Do NOT stage (`git add`) or commit changes unless explicitly directed.
- **Workflow Protocol**:
  1. Implement changes, edits, or additions requested by the user.
  2. Verify quality locally (e.g., `npm run build`, type-checks, linters).
  3. Report the outcome, list modified files, and summarize changes clearly.
  4. Ask or wait for the user's explicit confirmation before running any git commit or push.

---

## 2. Project Guidelines & Context

- **Framework**: Next.js (App Router with Turbopack).
- **Design Standard**: Anti-AI-slop and Hallmark design system (Space Grotesk headings, Plus Jakarta Sans body, JetBrains Mono accents, zero gratuitous shadows/slop).
- **Brand Authenticity**:
  - Latin King Detailing, based at 426 Flixton Road, Flixton, Urmston, Manchester M41 6QT.
  - Authentic customer work, genuine vehicle photos, and real Google reviews only.

