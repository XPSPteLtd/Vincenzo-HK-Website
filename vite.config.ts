import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
        {
          name: 'dynamic-canonical',
          transformIndexHtml(html, ctx) {
            // For dev server, we can get the requested URL
            const reqUrl = ctx.originalUrl || '/';
            const pathname = reqUrl.split('?')[0];
            const isDev = !!ctx.server;
            const host = isDev ? 'http://localhost:3000' : 'https://vincenzocapuano.hk';
            const canonicalUrl = `${host}${pathname}`;

            // Remove any existing canonical tag to prevent duplicates
            let newHtml = html.replace(/<link rel="canonical"[^>]*>/i, '');
            
            return newHtml.replace(
              /<\/title>/i,
              `</title>\n  <link rel="canonical" href="${canonicalUrl}" />`
            );
          }
        }
      ],
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
