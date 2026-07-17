# Environment

> Local development environment setup.

## .env File

```env
# Stripe
STRIPE_PUBLISHABLE_KEY=pk_test_xxx
# Base44
VITE_BASE44_APP_ID=your_app_id
```

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `STRIPE_PUBLISHABLE_KEY` | Yes | Stripe frontend key |
| `VITE_BASE44_APP_ID` | Yes | Base44 app ID |
| `STRIPE_SECRET_KEY` | Backend | Stripe API key |
| `STRIPE_WEBHOOK_SECRET` | Backend | Webhook signature |

## Local vs Production

```bash
npm run dev      # Local development
npm run build    # Production build
npm run preview  # Preview production build
```

Backend secrets are set in the Base44 dashboard → Settings → Environment Variables. They are NOT in the `.env` file.
