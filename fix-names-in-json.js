const fs = require('fs');
const file = 'src/lib/data/fixtures/brands/all-auto-datasets.json';
const datasets = JSON.parse(fs.readFileSync(file, 'utf8'));

for (const brandSlug in datasets) {
  const brandName = datasets[brandSlug].brand.name;
  // some brand names have quotes in them like "MAXI AIR CENTRAL "
  const cleanBrandName = brandName.replace(/["']/g, "").trim();
  
  for (const model of datasets[brandSlug].models) {
    if (model.name) {
      let currentName = model.name;
      
      // Remove any leading brand names, quotes, and whitespace
      const brandRegex = new RegExp(`^"?\\s*${cleanBrandName}\\s*"?\\s*`, 'i');
      
      // Run it in a loop just in case it was prepended multiple times
      while (brandRegex.test(currentName)) {
        currentName = currentName.replace(brandRegex, '').trim();
      }
      
      // If the name has quotes at the start, remove them
      currentName = currentName.replace(/^["'\s]+/, '').replace(/["'\s]+$/, '');
      
      model.name = currentName;
    }
  }
}

fs.writeFileSync(file, JSON.stringify(datasets, null, 2));
console.log("Fully cleaned all-auto-datasets.json names");
