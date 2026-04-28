import path from 'path';
import { defineConfig, loadEnv, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { readFileSync, mkdirSync, writeFileSync } from 'fs';
import { pageSEO } from './seo-data';

const SITE = 'https://vincenzocapuano.hk';

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
      const template = readFileSync('dist/index.html', 'utf-8');

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
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
