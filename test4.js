const fs = require('fs');
const datasets = JSON.parse(fs.readFileSync('src/lib/data/fixtures/brands/all-auto-datasets.json', 'utf8'));
const d = datasets['1hvac'];
console.log("First model:", d.models[0]);
