const fs = require('fs');
const datasets = JSON.parse(fs.readFileSync('src/lib/data/fixtures/brands/all-auto-datasets.json', 'utf8'));
const d = datasets['1hvac'];
console.log("First config:", d.configurations[0]);
console.log("First series ID:", d.series[0].id);
