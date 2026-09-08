/**
 * Corrige les systemType "other" dans all-auto-datasets.json
 * en utilisant le champ `t` des données LogisVert (C = central gainable, M = mural).
 *
 * Usage : node scripts/fix-system-types.mjs [--dry-run]
 */
import fs from "node:fs";
import path from "node:path";

const DATASETS = path.join(process.cwd(), "src/lib/data/fixtures/brands/all-auto-datasets.json");
const LOGISVERT = path.join(process.cwd(), "src/lib/subsidies/logisvert-official-amounts.json");
const dryRun = process.argv.includes("--dry-run");

const norm = (s) => (s ?? "").toLowerCase().replace(/[^a-z0-9]/g, "");

const logisvert = JSON.parse(fs.readFileSync(LOGISVERT, "utf8"));
const typesByModel = new Map();
for (const entry of Object.values(logisvert)) {
  if (!entry.m || !entry.t) continue;
  const key = norm(entry.m);
  if (!typesByModel.has(key)) typesByModel.set(key, new Set());
  typesByModel.get(key).add(entry.t);
}

const datasets = JSON.parse(fs.readFileSync(DATASETS, "utf8"));

const stats = { models: 0, toWall: 0, toCentral: 0, mixed: 0, unresolved: 0, series: 0 };

function classify(model) {
  const types = typesByModel.get(norm(model.modelNumber));
  if (!types || types.size === 0) return null;
  const hasM = types.has("M");
  const hasC = types.has("C");
  if (hasM && hasC) return "mixed";
  if (hasM) return "wall-single";
  if (hasC) return "central-ducted";
  return null;
}

function setCategories(model, ductless, ducted) {
  const cats = new Set(model.categories ?? []);
  if (ductless) cats.add("ductless");
  if (ducted) cats.add("ducted");
  model.categories = [...cats];
}

for (const dataset of Object.values(datasets)) {
  const modelTypesBySeries = new Map();

  for (const model of dataset.models) {
    if (model.systemType === "other") {
      stats.models++;
      const result = classify(model);
      if (result === "wall-single") {
        model.systemType = "wall-single";
        setCategories(model, true, false);
        stats.toWall++;
      } else if (result === "central-ducted") {
        model.systemType = "central-ducted";
        setCategories(model, false, true);
        stats.toCentral++;
      } else if (result === "mixed") {
        // Même unité extérieure certifiée avec des unités murales et gainables :
        // on la classe murale (l'usage dominant) et on conserve la compatibilité gainable.
        model.systemType = "wall-single";
        setCategories(model, true, true);
        stats.mixed++;
      } else {
        stats.unresolved++;
      }
    }
    if (!modelTypesBySeries.has(model.seriesId)) modelTypesBySeries.set(model.seriesId, new Set());
    modelTypesBySeries.get(model.seriesId).add(model.systemType);
  }

  for (const series of dataset.series) {
    if (series.systemType !== "other") continue;
    const types = modelTypesBySeries.get(series.id);
    if (!types || types.size !== 1) continue;
    const [only] = [...types];
    if (only === "other") continue;
    series.systemType = only;
    stats.series++;
  }
}

console.log(dryRun ? "[dry-run] " : "", JSON.stringify(stats, null, 2));

if (!dryRun) {
  fs.writeFileSync(DATASETS, JSON.stringify(datasets, null, 2));
  console.log(`Écrit : ${DATASETS}`);
}
