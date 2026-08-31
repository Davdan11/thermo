import assert from "node:assert/strict";
import fs from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { estimateDesignHeatLoadBtuH, runThermoMatch } from "../src/engine.ts";
import type { MatchInput, ThermoCatalog } from "../src/types.ts";

const baseInput: MatchInput = {
  selectionYear: 2026,
  heatedAreaFt2: 1_600,
  climateZone: "7A",
  homeType: "detached",
  constructionPeriod: "1981_2000",
  insulation: "standard",
  distribution: "ducts",
  requestedZones: 1,
  goal: "balanced",
  backupHeatAvailable: true,
};

async function realCatalog(): Promise<ThermoCatalog> {
  const file = path.resolve("data/catalog-2026.json");
  return JSON.parse(await fs.readFile(file, "utf8")) as ThermoCatalog;
}

test("utilise exactement la charge F280 lorsqu’elle est fournie", () => {
  assert.equal(estimateDesignHeatLoadBtuH({ ...baseInput, designHeatLoadBtuH: 43_600 }), 44_000);
});

test("refuse un catalogue d’une autre année", async () => {
  const catalog = await realCatalog();
  assert.throws(() => runThermoMatch({ ...baseInput, selectionYear: 2025 }, catalog), /catalogue chargé est 2026/);
});

test("retourne des modèles réels 2026 issus du catalogue Excel", async () => {
  const catalog = await realCatalog();
  const result = runThermoMatch({ ...baseInput, designHeatLoadBtuH: 42_000 }, catalog);
  assert.ok(result.results.length > 0);
  assert.ok(result.results.every((item) => item.product.selectionYear === 2026));
  assert.ok(result.results.every((item) => item.product.sourceUrl.startsWith("http")));
  assert.ok(result.results.every((item) => item.product.outdoorModel.length > 0));
});

test("le top 3 est diversifié par marque par défaut", async () => {
  const catalog = await realCatalog();
  const result = runThermoMatch({ ...baseInput, designHeatLoadBtuH: 42_000 }, catalog);
  const brands = result.results.map((item) => item.product.brand.toLocaleLowerCase("fr-CA"));
  assert.equal(new Set(brands).size, brands.length);
});

test("respecte les marques permises et exclues", async () => {
  const catalog = await realCatalog();
  const brand = catalog.products.find((product) => product.systemType === "central" && product.heatingCapacity5FBtuH)?.brand;
  assert.ok(brand);
  const preferred = runThermoMatch(baseInput, catalog, { allowedBrands: [brand], maxPerBrand: 3 });
  assert.ok(preferred.results.every((item) => item.product.brand === brand));
  const excluded = runThermoMatch(baseInput, catalog, { excludedBrands: [brand] });
  assert.ok(excluded.results.every((item) => item.product.brand !== brand));
});

test("ne fabrique aucun résultat lorsqu’aucun modèle n’est admissible", async () => {
  const catalog = await realCatalog();
  const result = runThermoMatch(baseInput, catalog, { allowedBrands: ["MARQUE QUI N’EXISTE PAS"] });
  assert.deepEqual(result.results, []);
  assert.match(result.warnings.at(-1) ?? "", /ne force pas de faux résultat/);
});
