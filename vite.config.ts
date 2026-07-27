import path from 'path';
import { defineConfig, loadEnv, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { execSync } from 'child_process';
import { readFileSync, mkdirSync, writeFileSync } from 'fs';
import { pageSEO } from './seo-data';

const SITE = 'https://vincenzocapuano.hk';

// sitemap.xml is generated from pageSEO so it can never drift from what is
// actually built. It previously lagged by four live pages (/blog and three
// landing pages) because it was maintained by hand.
// Routes not listed here fall back to DEFAULT_SITEMAP_META.
const DEFAULT_SITEMAP_META = { changefreq: 'monthly', priority: '0.7' };
const SITEMAP_META: Record<string, { changefreq: string; priority: string }> = {
  '/': { changefreq: 'weekly', priority: '1.0' },
  '/menu': { changefreq: 'weekly', priority: '0.9' },
  '/reservations': { changefreq: 'monthly', priority: '0.9' },
  '/pizza-wan-chai-hong-kong': { changefreq: 'monthly', priority: '0.9' },
  '/best-restaurant-wan-chai': { changefreq: 'monthly', priority: '0.8' },
  '/pizza-near-me-hong-kong': { changefreq: 'monthly', priority: '0.8' },
  '/our-story': { changefreq: 'monthly', priority: '0.8' },
  '/faq': { changefreq: 'monthly', priority: '0.8' },
  '/best-neapolitan-pizza-hong-kong': { changefreq: 'monthly', priority: '0.8' },
  '/best-pizza-restaurants-hong-kong': { changefreq: 'monthly', priority: '0.8' },
  '/vincenzo-capuano-hong-kong-review': { changefreq: 'monthly', priority: '0.8' },
  '/blog': { changefreq: 'weekly', priority: '0.8' },
  '/contact': { changefreq: 'monthly', priority: '0.7' },
  '/group-dining': { changefreq: 'monthly', priority: '0.7' },
  '/vincenzo-capuano-story': { changefreq: 'yearly', priority: '0.7' },
  '/what-is-neapolitan-pizza': { changefreq: 'yearly', priority: '0.7' },
  '/contemporary-neapolitan-pizza-hong-kong': { changefreq: 'yearly', priority: '0.7' },
  '/why-we-cut-pizza-with-scissors': { changefreq: 'yearly', priority: '0.6' },
  '/best-pizza-for-sharing-hong-kong': { changefreq: 'yearly', priority: '0.6' },
};

// Commit the site was built from. Lets a deploy be identified from the live
// HTML, so CI can confirm a build is actually serving before pinging IndexNow.
function buildCommit(): string {
  try {
    return execSync('git rev-parse HEAD', { stdio: ['ignore', 'pipe', 'ignore'] })
      .toString().trim();
  } catch {
    return '';
  }
}

// lastmod tracks the commit date rather than "now", so rebuilding without
// changes does not advertise every page as freshly updated.
function lastmodDate(): string {
  try {
    return execSync('git log -1 --format=%cs', { stdio: ['ignore', 'pipe', 'ignore'] })
      .toString().trim() || new Date().toISOString().slice(0, 10);
  } catch {
    return new Date().toISOString().slice(0, 10);
  }
}

function esc(s: string) {
  return s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function setMetaContent(html: string, attrName: string, attrValue: string, content: string): string {
  // Handles: <meta name="X" content="..."> and <meta property="X" content="...">
  const re = new RegExp(`(<meta\\s+${attrName}="${attrValue}"\\s+content=")[^"]*(")`);
  return html.replace(re, `$1${esc(content)}$2`);
}

function setLinkHref(html: string, rel: string, extra: string, href: string): string {
  const re = new RegExp(`(<link\\s+rel="${rel}"\\s+${extra}\\s+href=")[^"]*(")`);
  return html.replace(re, `$1${esc(href)}$2`);
}

function prerenderPlugin(): Plugin {
  return {
    name: 'prerender-routes',
    apply: 'build',
    closeBundle() {
      let template = readFileSync('dist/index.html', 'utf-8');

      const commit = buildCommit();
      if (commit) {
        template = template.replace(
          '</head>',
          `<meta name="build-commit" content="${commit}" /></head>`
        );
      }

      for (const [route, seo] of Object.entries(pageSEO)) {
        const { title, desc, keywords } = seo.en;
        const url = route === '/' ? `${SITE}/` : `${SITE}${route}`;

        let html = template;

        // Title
        html = html.replace(/<title>[^<]*<\/title>/i, `<title>${esc(title)}</title>`);

        // Meta name tags
        html = setMetaContent(html, 'name', 'description', desc);
        html = setMetaContent(html, 'name', 'keywords', keywords);

        // Open Graph
        html = setMetaContent(html, 'property', 'og:title', title);
        html = setMetaContent(html, 'property', 'og:description', desc);
        html = setMetaContent(html, 'property', 'og:url', url);

        // Twitter
        html = setMetaContent(html, 'property', 'twitter:title', title);
        html = setMetaContent(html, 'property', 'twitter:description', desc);
        html = setMetaContent(html, 'property', 'twitter:url', url);

        // Canonical — all pages get their own canonical
        html = html.replace(
          /(<link\s+rel="canonical"\s+href=")[^"]*(")/i,
          `$1${esc(url)}$2`
        );

        // hreflang — en + zh-HK point to this page; x-default stays at root
        html = setLinkHref(html, 'alternate', 'hreflang="en"', url);
        html = setLinkHref(html, 'alternate', 'hreflang="zh-HK"', url);
        html = setLinkHref(html, 'alternate', 'hreflang="x-default"', `${SITE}/`);

        // Page-specific JSON-LD (injected before </head>)
        if (seo.schema) {
          const tag = `<script type="application/ld+json">${JSON.stringify(seo.schema)}</script>`;
          html = html.replace('</head>', `${tag}</head>`);
        }

        if (route === '/') {
          writeFileSync('dist/index.html', html);
        } else {
          mkdirSync(`dist${route}`, { recursive: true });
          writeFileSync(`dist${route}/index.html`, html);
        }

        console.log(`[prerender] ${route}`);
      }

      const lastmod = lastmodDate();
      const urls = Object.keys(pageSEO).map(route => {
        const meta = SITEMAP_META[route] ?? DEFAULT_SITEMAP_META;
        const loc = route === '/' ? `${SITE}/` : `${SITE}${route}`;
        return [
          '  <url>',
          `    <loc>${loc}</loc>`,
          `    <lastmod>${lastmod}</lastmod>`,
          `    <changefreq>${meta.changefreq}</changefreq>`,
          `    <priority>${meta.priority}</priority>`,
          '  </url>',
        ].join('\n');
      });

      writeFileSync(
        'dist/sitemap.xml',
        `<?xml version="1.0" encoding="UTF-8"?>\n` +
        `<!-- Generated at build time from pageSEO in seo-data.ts. Do not edit by hand. -->\n` +
        `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
        `${urls.join('\n')}\n` +
        `</urlset>\n`
      );
      console.log(`[sitemap] ${urls.length} URLs, lastmod ${lastmod}`);
    },
  };
}

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react(), prerenderPlugin()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
