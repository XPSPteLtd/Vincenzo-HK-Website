
const fs = require('fs');
const path = require('path');

const menuPath = 'e:/hk/Vincenzo-HK-Website/menuData.ts';
let content = fs.readFileSync(menuPath, 'utf-8');

const urls = [
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Abbraccio%20e%20mama.jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Aglio%20E%20olio%20(Close%20up)(1).jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Aglio%20e%20Olio%20(Close%20up).jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Aglio%20e%20Olio.jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Arrabiata.jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Bellaria.jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Bruschetta%20(Close%20up).jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Bruschetta.jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Burrata%20Classica%20(300g).jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Burrata%20Classica%20(Close%20up).jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Burrata%20Classica%20300g%20(Close%20up).jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Burrata%20Pesca%20e%20Arancia%20(Close%20up).jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Burrata%20Pesca%20e%20arancia%20(125g).jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Burrata%20Pesca%20e%20arancia%20(close%20up)%202.jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Calzone%20al%20Forno%20(inside%20close%20up).jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Calzone%20al%20Forno.jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Carbonara%20(close%20up)%201.jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Carbonara%20(close%20up)%202.jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Carbonara.jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Cavolo%20Melone%20(close%20up).jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Cavolo%20Melone.jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Centro%20Calabria.jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Chocolate%20Tartlet.jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Come%20una%20Capricciosa.jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Creme%20Brulee.jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Diavola%20Alla%20nonno%20enzo.jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Domeniche%20Lontano.jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Don%20Egidio%20(Close%20up).jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Don%20Egidio.jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Don%20Vincenzo.jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Filetto%20di%20Manzo%20(close%20up).jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Filetto%20di%20Manzo.jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Focaccia.jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Gambero%20Alla%20Marinara.jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Gambero%20alla%20marinara%20(close%20up).jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Gelato%20Vaniglia.jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Gnocchi%20(close%20up).jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Gnocchi.jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Graffe.jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Guanciale%20di%20Manzo%20(close%20up)%202.jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Guanciale%20di%20Manzo.jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Guanciale%20di%20manzo%20(close%20up).jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Holy%20Wings%20(Close%20up).jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Holy%20Wings.jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Lasagna%20al%20Forno.jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Maiale%20Iberico%20(Close%20up).jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Maiale%20Iberico.jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Margarita%20(Cart%20wheel).jpg",
    "https://storage.googleapis.com/xps-assets/gotti's%20assets%20/BRAND%20ASSETS/vincenzo%20h%26k/drive-download-20260414T111937Z-3-001/Margarita%20Cartwheel%20(Closeup).jpg"
];

function normalize(name) {
    return name.toLowerCase().replace(/[^a-z0-9]/g, '');
}

function getItemInfo(url) {
    const filename = decodeURIComponent(url.split('/').pop());
    const basename = filename.replace(/\.(jpg|jpeg|png|webp)$/i, '');
    const isCloseUp = basename.toLowerCase().includes('close up') || basename.toLowerCase().includes('closeup') || basename.toLowerCase().includes('inside');
    const size = basename.match(/\((125g|300g|3000g)\)/i)?.[1] || '';
    
    let cleanName = basename.replace(/\(.*?\)/g, '').replace(/close up/gi, '').trim();
    return { url, original: basename, clean: cleanName, isCloseUp, size, normalized: normalize(cleanName) };
}

const fileInfos = urls.map(getItemInfo);

const itemRegex = /\{[\s\S]*?id:\s*"([^"]+)"[\s\S]*?name:\s*"([^"]+)"[\s\S]*?image:\s*(NO_IMAGE|"[^"]+")/g;
let items = [];
let match;
while ((match = itemRegex.exec(content)) !== null) {
    items.push({
        id: match[1],
        name: match[2],
        currentImage: match[3],
        fullText: match[0],
        startIndex: match.index
    });
}

const report = { replaced: [], missing: [], kept: [] };

for (const item of items) {
    const itemNormalized = normalize(item.name.replace(/\d+G/i, '').trim());
    const itemSizeMatch = item.name.match(/(\d+G)/i);
    const itemSize = itemSizeMatch ? itemSizeMatch[1].toLowerCase() : '';

    let candidates = fileInfos.filter(f => {
        if (f.normalized === itemNormalized) return true;
        if (itemNormalized === normalize('Aglio e Olio con Gamberi') && f.normalized === normalize('Aglio e Olio')) return true;
        if (itemNormalized === normalize('Margherita') && f.normalized === normalize('Margarita')) return true;
        if (itemNormalized === normalize('Margherita con Bufala') && f.normalized === normalize('Margarita con Bufala')) return true;
        return false;
    });

    if (itemSize) {
        const sizeMatches = candidates.filter(f => f.size && f.size.toLowerCase() === itemSize);
        if (sizeMatches.length > 0) candidates = sizeMatches;
    }

    if (candidates.length > 0) {
        let best = candidates.find(f => !f.isCloseUp);
        if (!best) best = candidates[0];

        const newImageStr = `"${best.url}"`;
        content = content.replace(item.fullText, item.fullText.replace(/image:\s*(NO_IMAGE|"[^"]+")/, `image: ${newImageStr}`));
        report.replaced.push({ id: item.id, name: item.name, image: best.url, type: best.isCloseUp ? 'Close-up' : 'Normal' });
    } else {
        if (item.currentImage === 'NO_IMAGE') {
            report.missing.push({ id: item.id, name: item.name });
        } else {
            report.kept.push({ id: item.id, name: item.name, image: item.currentImage });
        }
    }
}

fs.writeFileSync(menuPath, content);
console.log(JSON.stringify(report, null, 2));
