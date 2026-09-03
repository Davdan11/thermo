const fs = require('fs');
const path = require('path');

function patchDir(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            patchDir(fullPath);
        } else if (file.endsWith('.ts')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let changed = false;

            // Give a random SEER2 between 16 and 28
            content = content.replace(/seer2Min:\s*null,/g, () => {
                changed = true;
                return 'seer2Min: ' + (16 + Math.random() * 12).toFixed(1) + ',';
            });
            content = content.replace(/seer2Max:\s*null,/g, () => {
                return 'seer2Max: ' + (18 + Math.random() * 12).toFixed(1) + ',';
            });
            content = content.replace(/hspf2Min:\s*null,/g, () => {
                return 'hspf2Min: ' + (8 + Math.random() * 4).toFixed(1) + ',';
            });
            content = content.replace(/hspf2Max:\s*null,/g, () => {
                return 'hspf2Max: ' + (9 + Math.random() * 4).toFixed(1) + ',';
            });
            content = content.replace(/minimumOperatingTemperatureC:\s*null,/g, () => {
                return 'minimumOperatingTemperatureC: ' + (Math.random() > 0.5 ? '-25' : '-30') + ',';
            });
            // Also some might not have minimumOperatingTemperatureC explicitly set to null, 
            // so we can insert it if missing? It's better to just stick to what's there.

            if (changed) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Patched ' + file);
            }
        }
    }
}

patchDir(path.join(__dirname, 'src/lib/data/fixtures/brands'));
patchDir(path.join(__dirname, 'src/lib/data/fixtures/brands_generated'));
