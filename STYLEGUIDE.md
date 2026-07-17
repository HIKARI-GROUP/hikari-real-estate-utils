# HIKARI Style Guide

> Coding conventions for consistent, maintainable code.

## Naming

| Element | Convention | Example |
|---|---|---|
| Variables | camelCase | `const totalPrice = ...` |
| Functions | camelCase | `function calculateYield() {}` |
| Components | PascalCase | `function StatCard() {}` |
| Files (components) | PascalCase | `StatCard.jsx` |
| Files (utilities) | kebab-case | `lead-scoring.js` |
| Constants | UPPER_SNAKE | `const MAX_RETRIES = 3` |
| Types/Interfaces | PascalCase | `interface Property {}` |

## Git Conventions

- Branch: `feature/description`, `fix/description`, `docs/description`
- Commit: Conventional Commits (`feat:`, `fix:`, `docs:`, `refactor:`)
- PR: small, focused, with description + checklist

## React Conventions

- Functional components only
- Hooks at top level (never in conditions/loops)
- Destructure props
- One component per file
- Use `@/` alias for imports

## TypeScript Conventions

- Use interfaces for object shapes
- Use types for unions/intersections
- Avoid `any` — use `unknown` if type is truly unknown

## CSS/Tailwind Conventions

- Use design tokens (`bg-background`, `text-foreground`)
- No inline styles (except dynamic values)
- Literal class strings (no dynamic concatenation)
- Dark mode by default

## API Conventions

- RESTful naming
- JSON responses
- Proper HTTP status codes
- Error format: `{ "error": "message" }`

## AI Conventions

- Clear, specific prompts
- Structured output (JSON schema)
- Human validation for critical decisions
- Log all LLM interactions
