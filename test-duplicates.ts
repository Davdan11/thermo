import { registry } from "./src/lib/data/registry";

const models = registry.getAllModels();
const series = registry.getAllSeries();

const seenModelKeys = new Set();
let duplicates = 0;

for (const m of models) {
  const key = `${m.brandId}-${m.seriesId}-${m.modelNumber}`;
  if (seenModelKeys.has(key)) {
    console.log(`Duplicate model: ${key}`);
    duplicates++;
  } else {
    seenModelKeys.add(key);
  }
}

console.log(`Total models: ${models.length}`);
console.log(`Duplicates: ${duplicates}`);
