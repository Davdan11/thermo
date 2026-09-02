import { registry } from "./src/lib/data/registry";
const series = registry.series.filter(s => s.brandId === 'daikin');
console.log("Series:");
series.forEach(s => console.log(s.id, s.slug, s.name));
const models = registry.models.filter(m => m.brandId === 'daikin' && m.seriesId === 'daikin-atmosphera');
console.log("Models for atmosphera:");
models.forEach(m => console.log(m.id, m.status, m.isActive2026));
