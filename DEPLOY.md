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
exists so a broken build shows up as a failed check rather than as a failed
Hostinger deployment that leaves the live site on stale files.

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
- **IndexNow** (`postbuild.js`) pings Bing on every build. The key file
  `public/b80d5e01376b4531a02a4770859569de.txt` must **contain the key as its
  body** — it was empty, which is what produced `IndexNow: 403 Forbidden`.
  Expect 403s to continue until DNS points at Hostinger and Bing can fetch
  `https://vincenzocapuano.hk/b80d5e01376b4531a02a4770859569de.txt`.
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
