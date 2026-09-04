const fs = require('fs');
const datasets = JSON.parse(fs.readFileSync('src/lib/data/fixtures/brands/all-auto-datasets.json', 'utf8'));

const brandCounts = [];
for (const brand in datasets) {
  brandCounts.push({ brand, count: datasets[brand].models.length });
}
brandCounts.sort((a,b) => b.count - a.count);
console.log(brandCounts.slice(0, 30));
