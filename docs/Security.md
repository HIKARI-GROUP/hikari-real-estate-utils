# Security

> Security is built into every layer of the HIKARI stack.

## Principles

1. **Auth-first**: Every backend function validates the user
2. **RLS**: Entity-level security (owner, admin, public)
3. **Secret management**: Secrets in env vars, never in code
4. **Input validation**: Validate all external input
5. **Least privilege**: Use service role only when necessary

## Reporting Vulnerabilities

**Do NOT open a public issue.** Email: security@hikari-group.com

## Secrets

```typescript
// ✅ Correct
const apiKey = Deno.env.get('API' + '_KEY');
// ❌ Wrong
const apiKey = 'sk_live_12345';
```

## OAuth Scopes

Request only the minimal scopes needed.

## Webhook Security

Validate webhook signatures before processing.
