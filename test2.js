const fs = require('fs');
const datasets = JSON.parse(fs.readFileSync('src/lib/data/fixtures/brands/all-auto-datasets.json', 'utf8'));
const keys = Object.keys(datasets['1hvac']);
console.log("Keys in dataset:", keys);
const d = datasets['1hvac'];
if (d.series && d.series.length > 0) {
  console.log("Configs count:", d.configurations ? d.configurations.length : "NO CONFIGURATIONS");
}
