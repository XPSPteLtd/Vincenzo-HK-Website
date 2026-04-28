
import fs from 'fs';

const content = fs.readFileSync('e:/hk/Vincenzo-HK-Website/menuData.ts', 'utf-8');

// Simple regex to extract name and image
// name: "NAME",
// image: NO_IMAGE or "URL",

const itemRegex = /\{[\s\S]*?id:\s*"([^"]+)"[\s\S]*?name:\s*"([^"]+)"[\s\S]*?image:\s*(NO_IMAGE|"[^"]+")/g;

let match;
const items = [];
while ((match = itemRegex.exec(content)) !== null) {
    items.push({
        id: match[1],
        name: match[2],
        hasImage: match[3] !== 'NO_IMAGE'
    });
}

console.log(JSON.stringify(items, null, 2));
