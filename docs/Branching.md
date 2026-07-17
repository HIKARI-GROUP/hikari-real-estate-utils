# Branching Strategy

> HIKARI uses GitHub Flow — simple, feature-branch based.

## Branch Naming

```
feature/add-comparison-chart
fix/dvf-timeout-error
hotfix/auth-redirect
docs/api-reference
refactor/scoring-engine
```

## Rules

1. `main` is always deployable
2. Never commit directly to `main`
3. Branch from `main`, PR back to `main`
4. Delete branches after merge
5. Keep branches short-lived (days, not weeks)

## Merge Strategy

- **Squash & merge** for feature branches
- **Rebase** before merge to keep history clean
- **No merge commits** on main
