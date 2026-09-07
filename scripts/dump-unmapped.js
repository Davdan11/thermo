const fs = require('fs');
const datasets = JSON.parse(fs.readFileSync('src/lib/data/fixtures/brands/all-auto-datasets.json', 'utf8'));

const prefixes = {};

for (const brand in datasets) {
  const models = datasets[brand].models;
  for (const m of models) {
    if (!m.name) continue;
    
    // Check if the name looks like a generic code (all caps, numbers, etc.)
    // E.g. "1HVAC ACIQ 9000 BTU"
    const parts = m.name.split(' ');
    // Remove brand and BTU
    const middleParts = parts.slice(1, -2);
    const seriesName = middleParts.join(' ');
    
    // If the series name is just a short alphanumeric code, it's probably unmapped
    if (/^[A-Z0-9-]{3,10}$/.test(seriesName)) {
      if (!prefixes[brand]) prefixes[brand] = new Set();
      prefixes[brand].add(seriesName);
    }
  }
}

let out = [];
for (const brand in prefixes) {
  out.push(`${brand}: ${Array.from(prefixes[brand]).join(', ')}`);
}
console.log(out.slice(0, 40).join('\n'));
