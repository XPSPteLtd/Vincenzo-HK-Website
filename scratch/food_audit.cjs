
const fs = require('fs');

const menuPath = 'e:/hk/Vincenzo-HK-Website/menuData.ts';
const content = fs.readFileSync(menuPath, 'utf-8');

const itemRegex = /\{[\s\S]*?id:\s*"([^"]+)"[\s\S]*?name:\s*"([^"]+)"[\s\S]*?mainCategory:\s*"([^"]+)"[\s\S]*?image:\s*(NO_IMAGE|"[^"]+")/g;
let items = [];
let match;
while ((match = itemRegex.exec(content)) !== null) {
    items.push({
        id: match[1],
        name: match[2],
        mainCategory: match[3],
        image: match[4]
    });
}

const foodItems = items.filter(i => i.mainCategory === 'Ala-carte');
const beverages = items.filter(i => i.mainCategory === 'Beverages');

const foodWithImage = foodItems.filter(i => i.image !== 'NO_IMAGE');
const foodWithoutImage = foodItems.filter(i => i.image === 'NO_IMAGE');

const foodReplaced = foodWithImage.filter(i => i.image.includes('drive-download'));
const foodKeptInternal = foodWithImage.filter(i => !i.image.includes('drive-download'));

console.log(JSON.stringify({
    stats: {
        totalFoodItems: foodItems.length,
        totalFoodWithImages: foodWithImage.length,
        totalFoodMissingImages: foodWithoutImage.length,
        successfullyUpdatedFromNewList: foodReplaced.length,
        keptOriginalInternalImages: foodKeptInternal.length
    },
    lists: {
        updatedFoodItems: foodReplaced.map(i => i.name),
        missingFoodItems: foodWithoutImage.map(i => i.name),
        keptInternalItems: foodKeptInternal.map(i => i.name)
    }
}, null, 2));
