# API

> HIKARI APIs are exposed via Base44 backend functions.

## Invocation

```javascript
import { base44 } from '@/api/base44Client';
const response = await base44.functions.invoke('myFunction', { param: 'value' });
const data = response.data; // Axios response — data is in .data
```

## Conventions

- All params passed via payload (not URL params)
- Single endpoint per function (`/`)
- Return `Response.json()` objects
- Use proper HTTP status codes (200, 401, 403, 500)

## Error Format

```json
{ "error": "Human-readable error message" }
```
