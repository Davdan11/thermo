const fs = require('fs');
const path = require('path');

const whitelist = new Set([
  "amana", "ameristar", "bosch", "canair", "capella", "carrier", "coleman", "coleman-by-johnson-controls",
  "comfortmaker", "comfortstar", "continental", "convectair", "daikin", "danby", "direct-air", "durastar",
  "elios", "franklin", "friedrich", "frigidaire", "fujitsu", "ge", "ge-appliances", "goodman", "grandaire",
  "gree", "haxxair", "hisense", "hitachi", "innova", "keeprite", "kenmore", "kinghome", "lennox", "lg",
  "maestrale", "maxi-air", "midea", "mitsubishi-electric", "moovair", "mrcool", "napoleon", "nova", "novair",
  "ouellet", "panasonic", "perfect-aire", "perfectaire", "pioneer", "polarwave", "quebec-vair", "québecvair",
  "rheem", "samsung", "senville", "sharp", "stelpro", "supreme", "sure", "tcl", "tempstar", "toshiba-carrier",
  "tosot", "trane", "trane-mitsubishi-electric", "wells", "willis", "york", "zephyr"
]);

function filterDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  let disabledCount = 0;
  for (const file of files) {
    if (!file.endsWith('.ts')) continue;
    const slug = file.replace('-auto.ts', '').replace('.ts', '');
    
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    
    if (!whitelist.has(slug)) {
      if (content.includes('activeInQuebec: true') || content.includes('"activeInQuebec": true')) {
        content = content.replace(/activeInQuebec:\s*true/g, 'activeInQuebec: false');
        content = content.replace(/"activeInQuebec":\s*true/g, '"activeInQuebec": false');
        fs.writeFileSync(filePath, content);
        console.log('Disabled:', slug);
        disabledCount++;
      }
    } else {
      if (content.includes('activeInQuebec: false') || content.includes('"activeInQuebec": false')) {
        content = content.replace(/activeInQuebec:\s*false/g, 'activeInQuebec: true');
        content = content.replace(/"activeInQuebec":\s*false/g, '"activeInQuebec": true');
        fs.writeFileSync(filePath, content);
        console.log('Enabled (whitelist):', slug);
      }
    }
  }
  return disabledCount;
}

let d1 = filterDir(path.join(process.cwd(), 'src/lib/data/fixtures/brands_generated'));
let d2 = filterDir(path.join(process.cwd(), 'src/lib/data/fixtures/brands'));
console.log('Total newly disabled:', (d1 || 0) + (d2 || 0));
