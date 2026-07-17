# Coding Standards

> Consistent code is maintainable code.

## Naming

| Element | Convention | Example |
|---|---|---|
| Variables | camelCase | `const totalPrice = ...` |
| Functions | camelCase | `function calculateYield() {}` |
| Components | PascalCase | `function StatCard() {}` |
| Files (components) | PascalCase | `StatCard.jsx` |
| Constants | UPPER_SNAKE | `const MAX_RETRIES = 3` |

## React

- Functional components only, hooks at top level
- One component per file, exported as default
- Use `@/` alias for imports

## Styling

- Tailwind utility classes — no inline styles
- Design tokens via CSS custom properties
- Literal class strings — no dynamic concatenation

## Commit Messages

Conventional Commits: `feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`
