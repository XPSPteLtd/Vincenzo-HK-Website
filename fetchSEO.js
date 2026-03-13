import fs from 'fs';
import https from 'https';

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
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', err => reject(err));
  });
};

async function processUrls() {
  const articles = [];
  
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    console.log(`Fetching ${url}...`);
    try {
      const html = await fetchUrl(url);
      
      // Basic extraction
      let titleMatch = html.match(/<title>(.*?)<\/title>/);
      let title = titleMatch ? titleMatch[1].split('-')[0].trim() : `Page ${i+1}`;
      
      // Try to find main content
      let content = [];
      const pMatches = [...html.matchAll(/<p[^>]*>(.*?)<\/p>/g)];
      
      for (const match of pMatches) {
        let text = match[1].replace(/<[^>]*>?/gm, '').trim();
        // Decode common HTML entities
        text = text.replace(/&#8211;/g, '-').replace(/&#8217;/g, "'").replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&');
        if (text.length > 50 && !text.includes('Copyright') && !text.includes('All rights reserved')) {
          // Adapt for Hong Kong
          text = text.replace(/Singapore/gi, 'Hong Kong');
          content.push(text);
        }
      }
      
      // Deduplicate paragraphs
      content = [...new Set(content)].slice(0, 4); // Take max 4 paragraphs
      
      if (content.length === 0) {
         content.push(`Experience the world-class taste of Vincenzo Capuano here in Hong Kong. We bring authentic Neapolitan pizza crafted with passion and precision directly to you.`);
      }

      // Generate a clean ID from the title
      const id = url.split('/').filter(Boolean).pop() || 'home';

      articles.push({
        id,
        title: title.replace(/Singapore/gi, 'Hong Kong'),
        content
      });
      
    } catch (e) {
      console.error(`Error fetching ${url}:`, e.message);
    }
  }

  const fileContent = `export interface SEOArticle {
  id: string;
  title: string;
  content: string[];
}

export const seoArticles: SEOArticle[] = ${JSON.stringify(articles, null, 2)};
`;

  fs.writeFileSync('C:/Users/ssen5/Downloads/Vincenzo-HK-Website-main/Vincenzo-HK-Website-main/components/seoData.ts', fileContent);
  console.log('Saved to seoData.ts');
}

processUrls();
