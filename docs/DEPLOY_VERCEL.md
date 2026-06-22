# Vercel Deployment Guide

Deploy the Shreeya Maliye portfolio to Vercel in minutes.

## Option 1: Vercel Dashboard (Easiest)

1. Push this repository to GitHub.
2. Go to [vercel.com](https://vercel.com) and sign in.
3. Click **Add New Project** → Import your GitHub repository.
4. Vercel auto-detects Vite. Default settings work:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
5. Click **Deploy**.

`vercel.json` is already configured for SPA routing.

## Option 2: Vercel CLI

```bash
npm install -g vercel
npm run build
vercel
```

For production:

```bash
vercel --prod
```

## Environment Variables

No environment variables are required for the static portfolio.

## Custom Domain

1. In Vercel project → **Settings** → **Domains**
2. Add your domain (e.g. `shreeyamaliye.dev`)
3. Update DNS records as instructed by Vercel

## GitHub Actions Integration

Add these secrets to your GitHub repository:

| Secret | How to get it |
|--------|---------------|
| `VERCEL_TOKEN` | Vercel → Settings → Tokens |
| `VERCEL_ORG_ID` | Project Settings → General |
| `VERCEL_PROJECT_ID` | Project Settings → General |

The workflow in `.github/workflows/deploy.yml` deploys automatically on push to `main`.

## Troubleshooting

| Issue | Fix |
|-------|-----|
| 404 on refresh | Ensure `vercel.json` rewrites are present |
| Build fails | Run `npm run build` locally first |
| Slow deploy | Enable Vercel caching; build output is ~500KB |
