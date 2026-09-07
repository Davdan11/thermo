import { registry } from "./src/lib/data/registry";

const daikin = registry.brands.find(b => b.slug === "daikin");
if (daikin) {
  const models = registry.models.filter(m => m.brandId === daikin.id);
  const sigs = new Map();
  for (const m of models) {
    const key = `${m.seriesId}-${m.nominalCapacityBtu}`;
    if (sigs.has(key)) {
      console.log(`Duplicate found! Series: ${m.seriesId}, Cap: ${m.nominalCapacityBtu}, Model1: ${sigs.get(key).modelNumber}, Model2: ${m.modelNumber}, IDs: ${sigs.get(key).id} / ${m.id}`);
    } else {
      sigs.set(key, m);
    }
  }
}
