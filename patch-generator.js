const fs = require('fs');

const file = 'scripts/generate-all-brands-from-hq.mjs';
let content = fs.readFileSync(file, 'utf8');

// Insert the marketing dict logic
const importLogic = `
import { existsSync } from "node:fs";
const MARKETING_DICT_FILE = resolve("src/lib/data/fixtures/marketing-names.json");
let marketingDict = {};
if (existsSync(MARKETING_DICT_FILE)) {
  marketingDict = JSON.parse(readFileSync(MARKETING_DICT_FILE, "utf8"));
}
`;

// Replace the fallback logic
const oldLogic = `      let seriesName = entry.s || "Série commerciale à vérifier";
      const cleanS = cleanSlug(seriesName);
      if (brandMetadata[brandName.toLowerCase()]?.seriesAliases?.[cleanS]) {
        seriesName = brandMetadata[brandName.toLowerCase()].seriesAliases[cleanS];
      } else {
        // Fallback cleanup: remove 'series' or 'serie' from the end
        seriesName = seriesName.replace(/\\s+series$/i, "").replace(/\\s+s[ée]rie$/i, "");
      }`;

const newLogic = `      const modelNum = entry.m;
      let seriesName = entry.s ? entry.s.trim() : "";
      
      const brandDict = marketingDict[brandSlug] || {};
      let marketingMatched = false;
      for (const prefix of Object.keys(brandDict)) {
          if (modelNum.startsWith(prefix)) {
              seriesName = brandDict[prefix];
              marketingMatched = true;
              break;
          }
      }

      if (!marketingMatched && (!seriesName || seriesName.toLowerCase().includes("vérifier") || seriesName.toLowerCase().includes("standard"))) {
         const parts = modelNum.split(/[-_ ]/);
         if (parts.length > 1) {
            seriesName = parts[0];
         } else {
            const matchChars = modelNum.match(/^[A-Z0-9]{3,5}/);
            seriesName = matchChars ? matchChars[0] : modelNum.substring(0,4);
         }
      }

      seriesName = seriesName.replace(/\\b(?:series|série)\\b/ig, "").trim();
      
      let capacityStr = "";
      const capacity = entry.c || entry.hn || entry.h17 || 0;
      if (capacity > 0) {
        let capK = Math.round(capacity / 1000);
        if (capK >= 6 && capK <= 60) capacityStr = capK + "000 BTU";
      }
      if (!capacityStr) {
        const btuMatch = modelNum.match(/(09|12|15|18|24|30|36|42|48|60)/);
        if (btuMatch) capacityStr = btuMatch[1] + "000 BTU";
      }
      
      if (seriesName === modelNum) seriesName = "";
      let newName = (brandName + " " + seriesName + " " + capacityStr).replace(/\\s+/g, " ").trim();
      if (!newName || newName === brandName) newName = brandName + " " + modelNum;
      
      seriesName = newName; // We assign this to seriesName because that's what the script uses to name the product
`;

// Also add readFileSync import if missing
if (!content.includes('import { existsSync }')) {
    content = content.replace('import { readFileSync, writeFileSync', 'import { readFileSync, writeFileSync, existsSync');
}

// insert dict loading
content = content.replace('const autoDatasets = {};', 'const autoDatasets = {};\n' + importLogic);

content = content.replace(oldLogic, newLogic);
fs.writeFileSync(file, content);
console.log("Patched generate-all-brands-from-hq.mjs");
