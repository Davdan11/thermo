const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '../src/lib/data/fixtures/brands/all-auto-datasets.json');
let data = JSON.parse(fs.readFileSync(file, 'utf8'));

let count = 0;
for (const brandSlug in data) {
  for (const series of data[brandSlug].series) {
    // Current name might be "Série commerciale à vérifier - MODEL" or "Série MODEL" or "Oterra"
    // We want to transform it to: "[Brand] [MarketingName] [Capacity] BTU"
    
    // To do this properly, we need to know the capacity.
    // In all-auto-datasets.json, the series object doesn't have capacity directly,
    // it's in the performance profiles. But we can just use the model number or look it up.
    if (series.name.includes("Série commerciale")) {
      count++;
    }
  }
}
console.log(`Found ${count} generic names to fix.`);
