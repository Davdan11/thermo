const fs = require('fs');
const datasets = JSON.parse(fs.readFileSync('src/lib/data/fixtures/brands/all-auto-datasets.json', 'utf8'));
const series = datasets['1hvac'].series[0];
console.log(series.name);
