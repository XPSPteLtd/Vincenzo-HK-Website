// Post-build: notify Bing IndexNow about the routes that were just built.
//
// This file used to also write per-route index.html files. It no longer does:
// the prerender plugin in vite.config.ts already generates every route from
// pageSEO with its own title, description, keywords, OG/Twitter tags, canonical,
// hreflang and JSON-LD. This script ran afterwards and overwrote 13 of those
// with a copy of the homepage, so /menu, /faq and 11 others all shipped the
// homepage title and description. Prerendering lives in vite.config.ts only.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const distDir = path.resolve(__dirname, 'dist');
const baseUrl = 'https://vincenzocapuano.hk';
const indexNowKey = 'b80d5e01376b4531a02a4770859569de';

if (!fs.existsSync(path.join(distDir, 'index.html'))) {
  console.error('index.html not found in dist/ — did the build run?');
  process.exit(1);
}

// Derive the URL list from what was actually built, so routes added to
// pageSEO are submitted automatically instead of needing a second list here.
const routes = ['/'];
for (const entry of fs.readdirSync(distDir, { withFileTypes: true })) {
  if (entry.isDirectory() && fs.existsSync(path.join(distDir, entry.name, 'index.html'))) {
    routes.push(`/${entry.name}`);
  }
}
routes.sort();

// IndexNow verifies ownership by fetching the key file and comparing its body
// to the key. An empty file is what produced "403 Forbidden" previously.
const keyFile = path.join(distDir, `${indexNowKey}.txt`);
const keyFileBody = fs.existsSync(keyFile) ? fs.readFileSync(keyFile, 'utf-8').trim() : '';
if (keyFileBody !== indexNowKey) {
  console.warn(
    `[indexnow] skipped: dist/${indexNowKey}.txt must contain "${indexNowKey}" ` +
    `(found ${keyFileBody === '' ? 'an empty file' : `"${keyFileBody}"`})`
  );
  process.exit(0);
}

const urlList = routes.map(r => `${baseUrl}${r === '/' ? '/' : r}`);
console.log(`[indexnow] submitting ${urlList.length} URLs`);

fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    host: 'vincenzocapuano.hk',
    key: indexNowKey,
    keyLocation: `${baseUrl}/${indexNowKey}.txt`,
    urlList,
  }),
})
  .then(res => {
    console.log(`[indexnow] ${res.status} ${res.statusText}`);
    if (res.status === 403) {
      console.warn(
        `[indexnow] 403 means Bing could not verify ${baseUrl}/${indexNowKey}.txt — ` +
        `expected until DNS points at the live host.`
      );
    }
  })
  // Never fail the build over a search-engine ping.
  .catch(err => console.warn(`[indexnow] request failed: ${err.message}`));
