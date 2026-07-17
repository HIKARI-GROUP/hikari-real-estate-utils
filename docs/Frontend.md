# Frontend

> React 18 + Vite + Tailwind CSS with a token-based design system.

## Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Vite | Build tool & dev server |
| Tailwind CSS 3 | Utility-first styling |
| shadcn/ui | Component primitives |
| Lucide React | Icons |
| Framer Motion | Animations |
| Recharts | Data visualization |

## Design Tokens

All colors, fonts, and spacing are CSS custom properties in `src/index.css`, mapped to Tailwind in `tailwind.config.js`:

```jsx
<div className="bg-background text-foreground font-sans">
  <button className="bg-primary text-primary-foreground">Click</button>
</div>
```

## Component Conventions

- One component per file, exported as default
- Files under 50 lines — split when larger
- Use `@/` alias for imports
- shadcn/ui components in `@/components/ui/`

## State Management

- React hooks (`useState`, `useEffect`, `useCallback`)
- React Query for server state (`@tanstack/react-query`)
- Context for global state (`AuthProvider`, `HikariDataProvider`)

## Routing

React Router v6 with protected routes:
```jsx
<Route element={<ProtectedRoute />}>
  <Route path="/dashboard" element={<Dashboard />} />
</Route>
```
