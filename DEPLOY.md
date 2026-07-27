# Deploying to Hostinger

Static Vite/React SPA with pre-rendered HTML for each SEO route.

- Domain: `https://vincenzocapuano.hk` (bare domain, no `www`)
- Source branch: `main`
- Build command: `npm run build`
- **Publish/output directory: `dist`**

## How it works

Hostinger's build pipeline clones the repo, runs `npm install` and
`npm run build` in `.builds/source/repository/`, and publishes the output
directory. No GitHub Actions deployment is involved — push to `main` and
Hostinger rebuilds.

```
push to main ──► Hostinger: npm install → npm run build ──► publishes dist/
```

`.github/workflows/main.yml` builds the same way but **does not deploy**. It
exists to (1) catch a broken build as a failed check rather than as a failed
Hostinger deployment that leaves the live site on stale files, and (2) ping Bing
IndexNow once the new build is confirmed live.

### Why IndexNow is not part of the build

Hostinger builds *then* publishes. A ping fired during the build tells Bing to
recrawl content that is not live yet, so it re-indexes the previous version of
every page. Instead the build stamps the commit into every page:

```html
<meta name="build-commit" content="<sha>" />
```

CI polls the live site until that matches its own commit, then runs
`npm run indexnow`. If it times out (auto-deploy off, or a slow deploy) the job
warns and skips the ping rather than failing.

### sitemap.xml is generated

Written by the prerender plugin from `pageSEO`, so it can never drift from what
was built — it previously lagged by four live pages. `lastmod` follows the
commit date, so rebuilding without changes does not advertise every page as
freshly updated. CI asserts the URL count matches the prerendered route count.
**Do not edit `sitemap.xml` by hand**; add the route to `seo-data.ts` instead,
and give it a priority in `SITEMAP_META` in `vite.config.ts` if the default
(`monthly`/`0.7`) is wrong.

## 1. One-time setup

### Hostinger (hPanel)

1. **Domain** — `vincenzocapuano.hk`.
2. **Git / deployment**:
   - Branch: `main`
   - Build command: `npm run build`
   - **Output directory: `dist`** ← the single most important setting. Pointed at
     the repo root, the server would serve `App.tsx` and an `index.html` whose
     only script tag is `<script src="index.tsx">`, and the site renders blank.
   - Node version: 22 (matches CI; `npm install --legacy-peer-deps` may be needed
     if the install step errors on peer deps)
3. **Auto-deployment** — if the repo was connected via GitHub OAuth, merges to
   `main` deploy automatically and there is nothing to configure. If it was added
   by repository URL, use the *Auto Deployment* button and add the webhook URL in
   GitHub → *Settings* → *Webhooks*. Either way the webhook only controls *when*
   Hostinger rebuilds — without it, click **Redeploy** in hPanel.
4. **DNS** — repoint from Firebase at your registrar; keep TTL ~300s until
   verified. Leave `MX`/`TXT` records (email, Search Console) untouched.
5. **SSL** — *Security* → *SSL* → install Let's Encrypt, wait for *Active*.
6. **Force HTTPS** — leave hPanel's toggle **off**; `.htaccess` handles it.

### GitHub

No secrets required. Nothing to configure.

## 2. Verify after deploying

Run these in order — the first one is the one that actually catches a broken
deploy:

```bash
# .htaccess survived the publish step. If this 404s, EVERY route below breaks.
curl -sI https://vincenzocapuano.hk/menu | head -1              # 200
curl -sI https://vincenzocapuano.hk/menu/ | grep -i location    # 301 -> /menu
curl -sI http://vincenzocapuano.hk/ | grep -i location          # 301 -> https
curl -sI https://www.vincenzocapuano.hk/ | grep -i location     # 301 -> bare domain
curl -s  https://vincenzocapuano.hk/menu | grep -o '<title>.*</title>'
curl -s  https://vincenzocapuano.hk/b80d5e01376b4531a02a4770859569de.txt  # the key
```

> [!IMPORTANT]
> **Confirm `.htaccess` is published.** Some build pipelines drop dotfiles when
> copying the output directory. If `/menu` 404s but `/` works, that is the cause —
> the file is present in `dist/` (CI asserts it) but was not published. Fallback:
> upload it into `public_html` once via File Manager (*Settings → Show hidden
> files*); it changes rarely.

Then in a browser: deep-link to `/faq`, navigate in-app to `/menu/pizze`, and
hard-refresh — both must render rather than 404.

## 3. What `.htaccess` does

Lives in [public/.htaccess](public/.htaccess) so Vite copies it into `dist/` on
every build. It replaces what Firebase Hosting did for free:

| Concern | Firebase | Hostinger (`.htaccess`) |
| --- | --- | --- |
| SPA fallback | `rewrites` → `/index.html` | section 1f |
| Pre-rendered routes | automatic | section 1e — internal rewrite, no redirect |
| HTTPS | automatic | section 1a |
| `www` → bare domain | domain config | section 1b |
| Trailing slashes | `cleanUrls` | section 1d — 301 `/menu/` → `/menu` |
| Dotfile blocking | n/a | section 1c |
| Compression | automatic | section 2 (gzip/brotli) |
| Cache headers | automatic | section 3 |

Details worth knowing:

- **`DirectorySlash Off` is required.** Without it Apache 301s `/menu` → `/menu/`,
  contradicting every canonical tag and `sitemap.xml` entry.
- **`AddOutputFilterByType` needs `mod_filter`**, not `mod_deflate` — guarding it
  on the wrong module makes Apache 500 on *every* request. Keep the nesting as-is.
- **Unknown URLs return `200` with the SPA shell**, not a hard `404`, matching the
  previous Firebase behaviour. React Router renders the `NotFound` page.

## 4. Notes & gotchas

- **`GEMINI_API_KEY` is not needed.** Its only consumer is `fetchGoogleReviews()`
  in `services/aiService.ts`, called only by `<Testimonials/>` — commented out at
  `App.tsx:256`. Rollup tree-shakes `@google/genai` out entirely.
  If re-enabled: the key would be publicly readable in the shipped JS
  (`vite.config.ts` `define` inlines it), and the prompt asks Gemini to invent
  5-star reviews for *"Vincenzo Capuano **Singapore**"* — wrong city, and
  AI-generated text rendered as genuine Google reviews with star ratings.
- **IndexNow** runs from CI after the deploy is verified, not from the build.
  Submit manually with `npm run indexnow` (add `-- --dry-run` to list the URLs
  without sending). The key file
  `public/b80d5e01376b4531a02a4770859569de.txt` must **contain the key as its
  body**; it was empty until 2026-07-27, so no verification ever succeeded. The
  script now refuses to send rather than repeat that silently.
  A `403 UserForbiddedToAccessSite` means Bing has not verified ownership yet,
  *not* that the request is malformed — it clears once Bing re-fetches the key
  file. Verified correct on 2026-07-27: the file returns 200, `text/plain`,
  32 bytes, over a valid certificate. If 403 persists beyond ~24h, rotate to a
  new key (rename the `.txt` in `public/` and update `indexNowKey` in
  `scripts/indexnow.js`).
- **Google does not use IndexNow.** Google indexing comes from `sitemap.xml` and
  crawling, so the generated sitemap is what matters there — submit it once in
  Search Console (`vincenzocapuano.hk` is already verified via the
  `google-site-verification` meta tag in `index.html`).
- **Rollback**: `git revert` on `main` and let Hostinger rebuild, or redeploy an
  earlier commit from the hPanel deployment panel.
- **Manual fallback** if the pipeline is ever unavailable:
  `npm run package` builds and zips `dist/` for File Manager upload.

## 5. Testing `.htaccess` locally

The rules were verified against real Apache 2.4 (macOS ships it at
`/usr/sbin/httpd`). Serve `dist/` with `AllowOverride All`, then:

```bash
curl -H "X-Forwarded-Proto: https" -sI http://localhost:8099/menu
```

Send `X-Forwarded-Proto: https` or the HTTPS redirect fires on every request.
