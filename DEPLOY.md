# Deploying to Hostinger

The site is a static Vite/React SPA with pre-rendered HTML for each SEO route.
There is **no server-side runtime** — Hostinger only serves files from
`public_html/`.

- Domain: `https://vincenzocapuano.hk` (bare domain, no `www`)
- Build output: `dist/`
- Live branch: **`deploy`** (built output) — `main` holds source only

---

## How it works

> [!IMPORTANT]
> **Hostinger's Git integration does not run a build step.** It clones the branch
> you give it directly into `public_html`. If you point it at `main`, the server
> ends up hosting `App.tsx`, `package.json` and an `index.html` that references
> `/index.tsx` — the site will not render.

So the pipeline splits in two:

```
push to main ──► GitHub Actions: npm run build ──► commits dist/ to `deploy` branch
                                                          │
                                    Hostinger webhook ◄────┘
                                    git pull into public_html
```

`main` stays clean source. `deploy` contains only the built site, with
`index.html` and `.htaccess` at its root — exactly what `public_html` needs.

## 1. One-time setup

### GitHub

**No secrets required.** Run the workflow once from the *Actions* tab
(**Run workflow**) to create the `deploy` branch — Hostinger cannot be configured
until that branch exists.

(`vite.config.ts` can inline a `GEMINI_API_KEY`, but nothing in the shipped site
uses it — see *Notes* below.)

### Hostinger (hPanel)

1. **Domain** — *Websites* → add `vincenzocapuano.hk`, document root `public_html`.
2. **Git** — *Advanced* → *GIT*:
   - Repository: this repo's URL
   - **Branch: `deploy`** ← not `main`
   - Install path: leave empty (deploys to `public_html` root)
3. **Auto-deployment** — on the same page, copy the webhook URL and add it in
   GitHub under *Settings → Webhooks* (content type `application/json`, push
   events). Hostinger then pulls automatically whenever Actions updates `deploy`.
4. **DNS** — repoint from Firebase at your registrar; keep TTL ~300s until
   verified. Leave `MX`/`TXT` records (email, Search Console) untouched.
5. **SSL** — *Security* → *SSL* → install Let's Encrypt, wait for *Active*.
6. **Force HTTPS** — leave hPanel's toggle **off**; `.htaccess` handles it.

## 2. Deploying

Merge to `main`. Actions builds and pushes to `deploy`; the webhook makes
Hostinger pull. Nothing manual.

To deploy without a code change, run the workflow manually from the Actions tab.

**Fallback — manual upload** (if Git deploy is unavailable):

```bash
npm run package     # build + create vincenzo-hk-site.zip
```

Upload and extract it in `public_html` via File Manager. Enable *Settings → Show
hidden files* first, or `.htaccess` won't be visible and every route except `/`
will 404.

## 3. Verify after deploying

```bash
curl -sI https://vincenzocapuano.hk/menu | head -1              # 200
curl -sI https://vincenzocapuano.hk/menu/ | grep -i location    # 301 -> /menu
curl -sI http://vincenzocapuano.hk/ | grep -i location          # 301 -> https
curl -sI https://www.vincenzocapuano.hk/ | grep -i location     # 301 -> bare domain
curl -sI https://vincenzocapuano.hk/.git/config | head -1       # 404  <- must not leak
curl -s  https://vincenzocapuano.hk/menu | grep -o '<title>.*</title>'
```

Then in a browser: deep-link to `/faq`, navigate in-app to `/menu/pizze`, and
hard-refresh — both must render rather than 404.

## 4. What `.htaccess` does

Lives in [public/.htaccess](public/.htaccess) so Vite copies it into `dist/` on
every build. It replaces what Firebase Hosting did for free:

| Concern | Firebase | Hostinger (`.htaccess`) |
| --- | --- | --- |
| SPA fallback | `rewrites` → `/index.html` | section 1f |
| Pre-rendered routes | automatic | section 1e — internal rewrite, no redirect |
| HTTPS | automatic | section 1a |
| `www` → bare domain | domain config | section 1b |
| Trailing slashes | `cleanUrls` | section 1d — 301 `/menu/` → `/menu` |
| `.git` / dotfile blocking | n/a (no repo in web root) | section 1c |
| Compression | automatic | section 2 (gzip/brotli) |
| Cache headers | automatic | section 3 |

Details worth knowing:

- **`DirectorySlash Off` is required.** Without it Apache 301s `/menu` → `/menu/`,
  contradicting every canonical tag and `sitemap.xml` entry.
- **Section 1c is a security control, not tidiness.** Hostinger clones the repo
  into `public_html`, so `.git/` sits inside the web root; unblocked, it exposes
  the full repository. Verified: `/.git/config`, `/.git/HEAD` and `/.env` all
  return 404 while `/.well-known/` stays reachable for SSL renewal.
- **`AddOutputFilterByType` needs `mod_filter`**, not `mod_deflate` — guarding it
  on the wrong module makes Apache 500 on *every* request. Keep the nesting as-is.
- **Unknown URLs return `200` with the SPA shell**, not a hard `404`, matching the
  previous Firebase behaviour. React Router renders the `NotFound` page.

## 5. Notes & gotchas

- **The `deploy` branch keeps linear history on purpose.** Hostinger runs
  `git pull`; a force-pushed orphan branch would break it with *"refusing to
  merge unrelated histories"*. Don't rewrite that branch by hand.
- **`GEMINI_API_KEY` is not needed to build or run the site.** Its only consumer
  is `fetchGoogleReviews()` in `services/aiService.ts`, called only by
  `<Testimonials/>` — which is commented out at `App.tsx:256`. Rollup therefore
  tree-shakes `@google/genai` out completely (`GoogleGenAI` and `generateContent`
  appear nowhere in `dist/assets/*.js`).
  If it is ever re-enabled, two things need attention first: the key would be
  **publicly readable in the shipped JS** (`vite.config.ts` `define` inlines it),
  and the prompt asks Gemini to invent 5-star reviews for *"Vincenzo Capuano
  **Singapore**"* — wrong city, and AI-generated text rendered as genuine Google
  reviews with star ratings.
- **`npm run build` pings Bing IndexNow** (`postbuild.js`) against the live
  domain, at build time rather than after the pull lands. Harmless.
- **`b80d5e01376b4531a02a4770859569de.txt`** is the IndexNow verification key and
  must stay publicly reachable at the site root.
- **Rollback**: `git revert` on `main` and let the pipeline run, or in hPanel's
  GIT panel deploy an earlier commit of `deploy`.

## 6. Testing `.htaccess` locally

The rules were verified against real Apache 2.4 (macOS ships it at
`/usr/sbin/httpd`). Serve `dist/` with `AllowOverride All`, then:

```bash
curl -H "X-Forwarded-Proto: https" -sI http://localhost:8099/menu
```

Send `X-Forwarded-Proto: https` or the HTTPS redirect fires on every request.
