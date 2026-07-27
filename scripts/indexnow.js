// Submit the site's URLs to Bing IndexNow.
//
// Deliberately NOT part of `npm run build`. Hostinger builds on its own server
// and publishes afterwards, so a ping fired during the build tells Bing to
// recrawl content that is not live yet — it would re-index the previous
// version. CI runs this only after confirming the new build is actually being
// served (see .github/workflows/main.yml).
//
// Usage: node scripts/indexnow.js [--dry-run]

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const distDir = path.resolve(__dirname, '..', 'dist');
const baseUrl = 'https://vincenzocapuano.hk';
const indexNowKey = 'b80d5e01376b4531a02a4770859569de';
const dryRun = process.argv.includes('--dry-run');

if (!fs.existsSync(path.join(distDir, 'index.html'))) {
  console.error('[indexnow] dist/index.html not found — run the build first.');
  process.exit(1);
}

// Derive URLs from what was built, so new routes are submitted automatically.
const routes = ['/'];
for (const entry of fs.readdirSync(distDir, { withFileTypes: true })) {
  if (entry.isDirectory() && fs.existsSync(path.join(distDir, entry.name, 'index.html'))) {
    routes.push(`/${entry.name}`);
  }
}
routes.sort();
const urlList = routes.map(r => `${baseUrl}${r === '/' ? '/' : r}`);

// IndexNow verifies ownership by fetching the key file and comparing its body
// to the key. An empty file is what produced "403 Forbidden" previously.
const keyFile = path.join(distDir, `${indexNowKey}.txt`);
const keyBody = fs.existsSync(keyFile) ? fs.readFileSync(keyFile, 'utf-8').trim() : '';
if (keyBody !== indexNowKey) {
  console.error(
    `[indexnow] aborted: dist/${indexNowKey}.txt must contain "${indexNowKey}" ` +
    `(found ${keyBody === '' ? 'an empty file' : `"${keyBody}"`})`
  );
  process.exit(1);
}

if (dryRun) {
  console.log(`[indexnow] dry run — would submit ${urlList.length} URLs:`);
  urlList.forEach(u => console.log(`  ${u}`));
  process.exit(0);
}

console.log(`[indexnow] submitting ${urlList.length} URLs`);

const res = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    host: 'vincenzocapuano.hk',
    key: indexNowKey,
    keyLocation: `${baseUrl}/${indexNowKey}.txt`,
    urlList,
  }),
}).catch(err => {
  // Never fail a deploy over a search-engine ping.
  console.warn(`[indexnow] request failed: ${err.message}`);
  process.exit(0);
});

console.log(`[indexnow] ${res.status} ${res.statusText}`);
if (res.status === 403) {
  console.warn(
    `[indexnow] 403 means Bing could not verify ${baseUrl}/${indexNowKey}.txt — ` +
    `check that the key file is reachable and DNS points at the live host.`
  );
}
