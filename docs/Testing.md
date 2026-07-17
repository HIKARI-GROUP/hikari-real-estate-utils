# Testing

> HIKARI follows the test pyramid: unit > integration > E2E.

## Stack

| Tool | Level | Purpose |
|---|---|---|
| Vitest | Unit | Functions, utilities, hooks |
| React Testing Library | Component | Component rendering & interaction |
| Playwright | E2E | Full user flows |

## Running Tests

```bash
npm test              # Run all tests
npm run test:watch    # Watch mode
npm run test:coverage # Coverage report
```

## Coverage Goals

| Layer | Target |
|---|---|
| Utilities | 100% |
| Hooks | 90%+ |
| Components | 80%+ |
| E2E | Critical paths |

## Example

```typescript
import { describe, it, expect } from 'vitest';
describe('grossRentalYield', () => {
  it('calculates yield correctly', () => {
    expect(grossRentalYield({ monthlyRent: 1200, price: 200000 })).toBe(7.2);
  });
});
```
