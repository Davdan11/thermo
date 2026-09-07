const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '../src/lib/data/fixtures/brands/all-auto-datasets.json');
let data = JSON.parse(fs.readFileSync(file, 'utf8'));

let count = 0;
for (const brandSlug in data) {
  for (const series of data[brandSlug].series) {
    if (series.name.includes("Série commerciale à vérifier")) {
      const parts = series.name.split(" — ");
      if (parts.length > 1) {
        series.name = `Série ${parts[1]}`;
      } else {
        series.name = "Série Standard";
      }
      count++;
    }
    if (series.name.includes(" [DEV]")) {
      series.name = series.name.replace(" [DEV]", "");
      count++;
    }
  }
}
fs.writeFileSync(file, JSON.stringify(data, null, 2));
console.log(`Fixed ${count} series names.`);
