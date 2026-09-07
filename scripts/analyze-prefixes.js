const fs = require('fs');
const datasets = JSON.parse(fs.readFileSync('src/lib/data/fixtures/brands/all-auto-datasets.json', 'utf8'));

const prefixes = {};

for (const brand in datasets) {
  const models = datasets[brand].models;
  for (const m of models) {
    if (!m.modelNumber) continue;
    // Extract everything up to the first number, or the first 4 chars
    let match = m.modelNumber.match(/^[A-Za-z]+[0-9]+/);
    let prefix = match ? match[0] : m.modelNumber.substring(0, 4);
    
    // Remove the BTU capacity part if it's in the prefix (e.g. ACIQ09 -> ACIQ)
    prefix = prefix.replace(/(09|12|15|18|24|30|36|42|48|60)$/, '');
    
    if (!prefixes[brand]) prefixes[brand] = new Set();
    prefixes[brand].add(prefix);
  }
}

let totalPrefixes = 0;
for (const brand in prefixes) {
  totalPrefixes += prefixes[brand].size;
}
console.log(`Total unique model prefixes across all brands: ${totalPrefixes}`);
