const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'components');
const files = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(componentsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  const lines = content.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.includes('font-display') || line.includes('font-serif')) {
      if (line.includes('uppercase')) {
        lines[i] = line.replace('uppercase', 'capitalize');
        changed = true;
      } else if (!line.includes('capitalize')) {
        if (line.includes('font-display')) {
          lines[i] = line.replace('font-display', 'font-display capitalize');
        } else if (line.includes('font-serif')) {
          lines[i] = line.replace('font-serif', 'font-serif capitalize');
        }
        changed = true;
      }
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, lines.join('\n'));
    console.log(`Updated ${file}`);
  }
}
