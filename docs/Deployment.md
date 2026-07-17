# Deployment

> HIKARI deploys on Deno Deploy (backend) and Base44 hosting (frontend).

## Frontend

```bash
npm run build      # Production build
npm run preview    # Preview production build
```

Base44 auto-deploys on push to main.

## Backend Functions

Functions auto-deploy when saved in the Base44 dashboard or via git sync.

## Environment Variables

| Variable | Purpose |
|---|---|
| `STRIPE_SECRET_KEY` | Stripe API |
| `STRIPE_PUBLISHABLE_KEY` | Stripe frontend |
| `STRIPE_WEBHOOK_SECRET` | Webhook validation |
| `BASE44_APP_ID` | App identifier |

## Custom Domains

Configure in Base44 dashboard → Settings → Custom Domain.
