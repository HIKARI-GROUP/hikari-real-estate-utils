# Git Workflow

> HIKARI uses a simplified GitHub Flow.

## Branching

```
main          ← Production-ready code
feature/*     ← New features
fix/*         ← Bug fixes
hotfix/*     ← Urgent production fixes
docs/*        ← Documentation only
```

## Process

```mermaid
graph TD
    A[Fork repo] --> B[Create branch]
    B --> C[Code + commit]
    C --> D[Push to fork]
    D --> E[Open PR]
    E --> F[Code review]
    F --> G{Approved?}
    G -->|Yes| H[Merge to main]
    G -->|No| C
```

## Commit Convention

```
feat: add ROI calculator component
fix: resolve auth redirect loop
docs: add API documentation
refactor: extract DVF fetch logic
test: add yield calculation tests
```

## PR Rules

- Keep PRs small and focused
- Include tests for new features
- Update documentation
- Ensure CI passes
