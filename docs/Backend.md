# Backend

> HIKARI backend services run on Deno Deploy via Base44 functions.

## Structure

```
base44/functions/
├── functionName/
│   └── entry.ts      # Deno.serve() handler
└── ...
```

## Function Anatomy

```typescript
import { createClientFromRequest } from 'npm:@base44/sdk@0.8.38';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const user = await base44.auth.me();
    if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });
    const data = await base44.entities.MyEntity.list();
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});
```

## Key Patterns

- **Auth-first**: Every function validates `base44.auth.me()` before processing
- **Service role**: Use `base44.asServiceRole` only for admin/system operations
- **Error handling**: try/catch with proper HTTP status codes
- **No module-level side effects**: All init inside the handler

## External APIs

Use Web `fetch()` — not Axios — for external API calls.

## Secrets

- Read with `Deno.env.get(secretEnvVar)` where secretEnvVar is your variable
- Set in dashboard → Settings → Environment Variables
- Never commit secrets to code
