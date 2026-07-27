<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Vincenzo Capuano Hong Kong

Static Vite + React site for [vincenzocapuano.hk](https://vincenzocapuano.hk),
with per-route pre-rendered HTML for SEO.

## Run Locally

**Prerequisites:** Node.js 22

1. Install dependencies:
   `npm install --legacy-peer-deps`
2. Set `GEMINI_API_KEY` in `.env.local` to your Gemini API key
3. Run the app:
   `npm run dev`

## Build

```bash
npm run build      # -> dist/ (pre-renders every route in seo-data.ts)
npm run preview    # serve the build locally
npm run package    # build + zip dist/ for manual upload
```

## Deploy

Hosted on **Hostinger** (static files in `public_html/`). See
[DEPLOY.md](DEPLOY.md) for setup, deployment and verification steps.

Routing, HTTPS, redirects, caching and compression are configured in
[public/.htaccess](public/.htaccess), which Vite copies into `dist/` on build.
