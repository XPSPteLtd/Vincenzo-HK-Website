
const fs = require('fs');

const menuPath = 'e:/hk/Vincenzo-HK-Website/menuData.ts';
const content = fs.readFileSync(menuPath, 'utf-8');

const itemRegex = /\{[\s\S]*?id:\s*"([^"]+)"[\s\S]*?name:\s*"([^"]+)"[\s\S]*?image:\s*(NO_IMAGE|"[^"]+")/g;
let items = [];
let match;
while ((match = itemRegex.exec(content)) !== null) {
    items.push({
        id: match[1],
        name: match[2],
        image: match[3]
    });
}

const withImage = items.filter(i => i.image !== 'NO_IMAGE');
const withoutImage = items.filter(i => i.image === 'NO_IMAGE');

const batch1Count = 50;
const batch2Count = 37;
const totalProvided = batch1Count + batch2Count;

// Find items that were replaced by new URLs (containing 'drive-download')
const replaced = withImage.filter(i => i.image.includes('drive-download'));
const keptInternal = withImage.filter(i => !i.image.includes('drive-download'));

console.log(JSON.stringify({
    totalMenuSize: items.length,
    totalWithImages: withImage.length,
    totalStillMissing: withoutImage.length,
    providedImages: totalProvided,
    successfulUpdates: replaced.length,
    keptInternalCount: keptInternal.length,
    missingItems: withoutImage.map(i => i.name),
    replacedItems: replaced.map(i => i.name)
}, null, 2));
