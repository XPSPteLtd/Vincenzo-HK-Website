import fs from 'fs';
import https from 'https';
import * as cheerio from 'cheerio';

const urls = [
  "https://vincenzocapuano.sg/",
  "https://vincenzocapuano.sg/best-pizzeria-singapore/",
  "https://vincenzocapuano.sg/contemporary-pizza/",
  "https://vincenzocapuano.sg/menu/",
  "https://vincenzocapuano.sg/napoli-pizza/",
  "https://vincenzocapuano.sg/top-italian-pizzeria/",
  "https://vincenzocapuano.sg/featured-in-media/",
  "https://vincenzocapuano.sg/worlds-top-pizzeria-in-singapore/",
  "https://vincenzocapuano.sg/best-italian-pizza-in-singapore/",
  "https://vincenzocapuano.sg/celebrity-chef-pizza-in-singapore/",
  "https://vincenzocapuano.sg/best-singapore-pizza-place/",
  "https://vincenzocapuano.sg/10523-2/",
  "https://vincenzocapuano.sg/10528-2/",
  "https://vincenzocapuano.sg/best-pizza-restaurant-in-singapore/",
  "https://vincenzocapuano.sg/best-pizza-in-singapore/",
  "https://vincenzocapuano.sg/pet-friendly-dining-in-singapore/",
  "https://vincenzocapuano.sg/order-pizza-online-in-singapore/"
];

const fetchUrl = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', err => reject(err));
  });
};

function cleanText(text) {
  return text.trim().replace(/Singapore/gi, 'Hong Kong').replace(/&#8211;/g, '-').replace(/&#8217;/g, "'").replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&');
}

async function processUrls() {
  const articles = [];
  
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    console.log(`Fetching ${url}...`);
    try {
      const html = await fetchUrl(url);
      const $ = cheerio.load(html);
      
      let title = $('title').text().split('-')[0].trim().replace(/Singapore/gi, 'Hong Kong');
      if (!title) title = `Page ${i+1}`;
      
      const blocks = [];
      const id = url.split('/').filter(Boolean).pop() || 'home';

      // Attempt to find the main content area (Elementor post content, article, or main)
      let $contentArea = $('.elementor-element.elementor-widget-theme-post-content');
      if ($contentArea.length === 0) $contentArea = $('article');
      if ($contentArea.length === 0) $contentArea = $('main');
      if ($contentArea.length === 0) $contentArea = $('body');

      // Extract specific block elements inside the content area
      $contentArea.find('h1, h2, h3, h4, h5, h6, p, img, ul, ol').each((idx, el) => {
        const tag = el.name.toLowerCase();
        
        if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tag)) {
          const text = cleanText($(el).text());
          if (text.length > 2 && text.length < 200 && !text.includes('Menu')) {
            blocks.push({ type: 'heading', level: parseInt(tag.replace('h', '')), content: text });
          }
        } else if (tag === 'p') {
          const text = cleanText($(el).text());
          if (text.length > 20 && !text.includes('Copyright') && !text.includes('All rights reserved')) {
            blocks.push({ type: 'text', content: text });
          }
        } else if (tag === 'img') {
          const src = $(el).attr('src') || $(el).attr('data-src');
          const alt = cleanText($(el).attr('alt') || title);
          if (src && src.startsWith('http') && !src.includes('logo') && !src.includes('icon')) {
            blocks.push({ type: 'image', src: src, alt: alt });
          }
        } else if (tag === 'ul' || tag === 'ol') {
           const items = [];
           $(el).find('li').each((liIdx, liEl) => {
              const text = cleanText($(liEl).text());
              if (text.length > 2) items.push(text);
           });
           if (items.length > 0) blocks.push({ type: 'list', items: items, ordered: tag === 'ol' });
        }
      });
      
      // Deduplicate consecutive identical blocks
      const deduplicatedBlocks = blocks.filter((block, idx, arr) => {
         if (idx === 0) return true;
         const prev = arr[idx - 1];
         return JSON.stringify(block) !== JSON.stringify(prev);
      });

      // Filter out overly repetitive elements
      let cleanBlocks = [];
      const seenText = new Set();
      
      for (const block of deduplicatedBlocks) {
         if (block.type === 'image') {
            cleanBlocks.push(block);
         } else if (block.content && typeof block.content === 'string') {
            if (!seenText.has(block.content)) {
               seenText.add(block.content);
               cleanBlocks.push(block);
            }
         } else if (block.type === 'list') {
            cleanBlocks.push(block);
         }
      }

      // If incredibly empty, add basic SEO fallback text
      if (cleanBlocks.filter(b => b.type === 'text' || b.type === 'heading').length < 2) {
          cleanBlocks.push({ type: 'heading', level: 2, content: `Discover ${title}` });
          cleanBlocks.push({ type: 'text', content: `Experience the world-class taste of Vincenzo Capuano here in Hong Kong. We bring authentic Neapolitan pizza crafted with passion and precision directly to you.` });
      }

      articles.push({ id, title, blocks: cleanBlocks });
      
    } catch (e) {
      console.error(`Error fetching ${url}:`, e.message);
    }
  }

  const fileContent = `export type SEOBlock = 
  | { type: 'heading'; level: number; content: string }
  | { type: 'text'; content: string }
  | { type: 'image'; src: string; alt: string }
  | { type: 'list'; items: string[]; ordered: boolean };

export interface SEOArticle {
  id: string;
  title: string;
  blocks: SEOBlock[];
}

export const seoArticles: SEOArticle[] = ${JSON.stringify(articles, null, 2)};
`;

  fs.writeFileSync('C:/Users/ssen5/Downloads/Vincenzo-HK-Website-main/Vincenzo-HK-Website-main/components/seoData.ts', fileContent);
  console.log('Saved to seoData.ts with detailed HTML structure extraction!');
}

processUrls();
