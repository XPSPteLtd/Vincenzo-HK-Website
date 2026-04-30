import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, 'dist');
const indexFile = path.join(distDir, 'index.html');

if (!fs.existsSync(indexFile)) {
  console.error('index.html not found in dist/');
  process.exit(1);
}

const html = fs.readFileSync(indexFile, 'utf-8');

const routes = [
  '/',
  '/menu',
  '/contact',
  '/pizza-wan-chai-hong-kong',
  '/reservations',
  '/our-story',
  '/faq',
  '/group-dining',
  '/what-is-neapolitan-pizza',
  '/contemporary-neapolitan-pizza-hong-kong',
  '/why-we-cut-pizza-with-scissors',
  '/best-pizza-for-sharing-hong-kong',
  '/vincenzo-capuano-story'
];

const baseUrl = 'https://vincenzocapuano.hk';

// Remove any existing canonical tag to prevent duplicates
const baseHtml = html.replace(/<link\s+rel="canonical"[^>]*>/i, '');

routes.forEach(route => {
  const isRoot = route === '/';
  const routeDir = isRoot ? distDir : path.join(distDir, route.substring(1));

  if (!isRoot && !fs.existsSync(routeDir)) {
    fs.mkdirSync(routeDir, { recursive: true });
  }

  const canonicalUrl = `${baseUrl}${route === '/' ? '/' : route}`; // Keep exact paths

  // Inject the correct canonical tag
  const newHtml = baseHtml.replace(
    /<\/title>/i,
    `</title>\n    <link rel="canonical" href="${canonicalUrl}" />`
  );

  const outFile = path.join(routeDir, 'index.html');
  fs.writeFileSync(outFile, newHtml);
  console.log(`Generated ${outFile} with canonical ${canonicalUrl}`);
});

// Notify Bing IndexNow
const indexNowKey = 'b80d5e01376b4531a02a4770859569de';
const urlList = routes.map(r => `${baseUrl}${r}`);

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
  .then(res => console.log(`IndexNow: ${res.status} ${res.statusText}`))
  .catch(err => console.warn(`IndexNow failed: ${err.message}`));
