
const fs = require('fs');
const content = fs.readFileSync('e:/hk/Vincenzo-HK-Website/menuData.ts', 'utf-8');
const itemsRaw = content.match(/\{[\s\S]*?id:\s*"[^"]+"[\s\S]*?\}/g);
if (itemsRaw) {
    itemsRaw.forEach(m => {
        const nameMatch = m.match(/name:\s*"([^"]+)"/);
        const nameZhMatch = m.match(/nameZh:\s*"([^"]+)"/);
        const descZhMatch = m.match(/descriptionZh:\s*"([^"]+)"/);
        if (nameMatch) {
            if (!nameZhMatch || !descZhMatch) {
                console.log(`Missing: ${nameMatch[1]} (nameZh: ${!!nameZhMatch}, descZh: ${!!descZhMatch})`);
            }
        }
    });
}
