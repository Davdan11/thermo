#!/usr/bin/env node
/**
 * generate-all-brands-from-hq.mjs
 * 
 * Reads the HQ LogisVert data (176K+ entries) and generates -auto.ts files
 * for EVERY brand. ALL models are marked isActive2026: true.
 * 
 * Usage: node scripts/generate-all-brands-from-hq.mjs
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const HQ_DATA_PATH = join(__dirname, "../src/lib/subsidies/logisvert-official-amounts.json");
const OUT_DIR = join(__dirname, "../src/lib/data/fixtures/brands");

function cleanSlug(s) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function escStr(s) {
  return (s || "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/[\x00-\x1F\x7F-\x9F]/g, " ").trim();
}

// Infer system type from HQ entry
function inferSystemType(entry) {
  if (entry.t === "C") return "central-ducted";
  if (entry.t === "M") return "wall-single";
  // Heuristic: if furnace present → central
  if (entry.f && entry.f.length > 1) return "central-ducted";
  // If indoor model is short or missing → central
  if (!entry.im || entry.im.length < 3) return "central-ducted";
  return "wall-single";
}

function main() {
  console.log("🔄 Generating ALL brand files from HQ LogisVert data...\n");

  const hqData = JSON.parse(readFileSync(HQ_DATA_PATH, "utf8"));
  const entries = Object.entries(hqData);
  console.log(`   Total HQ entries: ${entries.length}`);

  // ── Step 1: Group by brand ─────────────────────────────────────────
  const brandMap = new Map(); // brandName → { entries: [...] }

  for (const [ahri, entry] of entries) {
    const brand = (entry.b || "").trim();
    if (!brand) continue;

    if (!brandMap.has(brand)) brandMap.set(brand, []);
    brandMap.get(brand).push({ ahri, ...entry });
  }

  console.log(`   Unique brands: ${brandMap.size}`);

  // ── Step 2: For each brand, generate an -auto.ts file ──────────────
  const stats = { brands: 0, series: 0, models: 0, configs: 0, outdoors: 0 };
  const registryImports = [];

  // Keep track of existing manual files so we don't overwrite them
  const existingManual = new Set(
    readdirSync(OUT_DIR)
      .filter(f => f.endsWith(".ts") && !f.includes("-auto"))
      .map(f => f.replace(".ts", ""))
  );

  for (const [brandName, brandEntries] of brandMap.entries()) {
    let brandSlug = cleanSlug(brandName);
    // Handle reserved words
    if (brandSlug === "aux") brandSlug = "aux-brand";
    if (brandSlug === "new") brandSlug = "new-brand";

    // ── Group by series + system type → "commercial range" ──
    const rangesMap = new Map(); // rangeSlug → { seriesName, systemType, entries: [] }

    for (const entry of brandEntries) {
      const seriesName = entry.s || "Standard";
      const systemType = inferSystemType(entry);
      const rangeSlug = cleanSlug(`${brandSlug}-${seriesName}-${systemType}`);

      if (!rangesMap.has(rangeSlug)) {
        rangesMap.set(rangeSlug, {
          seriesName,
          systemType,
          entries: [],
        });
      }
      rangesMap.get(rangeSlug).entries.push(entry);
    }

    // ── Build TS code ──
    const varName = brandSlug.replace(/-/g, "") + "Dataset";
    const seriesArr = [];
    const modelsArr = [];
    const outdoorArr = [];
    const indoorArr = [];
    const configArr = [];
    const perfArr = [];

    const seenSeries = new Set();
    const seenOutdoor = new Set();
    const seenIndoor = new Set();

    for (const [rangeSlug, range] of rangesMap.entries()) {
      const { seriesName, systemType, entries: rangeEntries } = range;
      const seriesSlug = cleanSlug(`${brandSlug}-${seriesName}`);

      // Compute min/max specs
      let minCool = Infinity, maxCool = -Infinity;
      let minHeat17 = Infinity, maxHeat17 = -Infinity;
      let minSeer2 = Infinity, maxSeer2 = -Infinity;
      let minHspf2 = Infinity, maxHspf2 = -Infinity;
      let minCop5 = Infinity, maxCop5 = -Infinity;
      let anyCold = false;
      let anyHR = false;

      for (const e of rangeEntries) {
        if (e.c) { minCool = Math.min(minCool, e.c); maxCool = Math.max(maxCool, e.c); }
        if (e.h17) { minHeat17 = Math.min(minHeat17, e.h17); maxHeat17 = Math.max(maxHeat17, e.h17); }
        if (e.seer2) { minSeer2 = Math.min(minSeer2, e.seer2); maxSeer2 = Math.max(maxSeer2, e.seer2); }
        if (e.hspf2) { minHspf2 = Math.min(minHspf2, e.hspf2); maxHspf2 = Math.max(maxHspf2, e.hspf2); }
        if (e.cop5) { minCop5 = Math.min(minCop5, e.cop5); maxCop5 = Math.max(maxCop5, e.cop5); }
        if (e.cc) anyCold = true;
        if (e.hr) anyHR = true;
      }

      const categories = [];
      if (anyCold) categories.push('"cold-climate"');
      else categories.push('"conventional"');
      if (systemType === "wall-single") categories.push('"ductless"', '"single-zone"');
      else if (systemType === "central-ducted") categories.push('"ducted"');

      // Series
      if (!seenSeries.has(seriesSlug)) {
        seenSeries.add(seriesSlug);
        seriesArr.push(`    {
      id: "${seriesSlug}",
      slug: "${seriesSlug}",
      name: "${escStr(seriesName)}",
      brandId: "${brandSlug}",
      systemType: "${systemType}",
      categories: [${categories.join(", ")}],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }`);
        stats.series++;
      }

      // Model (one per range)
      modelsArr.push(`    {
      id: "${rangeSlug}",
      slug: "${rangeSlug}",
      name: "${escStr(seriesName)}",
      seriesId: "${seriesSlug}",
      brandId: "${brandSlug}",
      modelNumber: "${escStr(seriesName)}",
      normalizedModelNumber: "${cleanSlug(seriesName)}",
      isActive2026: true,
      thermomatchEligible: true,
      coolingCapacityMinBtu: ${minCool === Infinity ? "null" : minCool},
      coolingCapacityMaxBtu: ${maxCool === -Infinity ? "null" : maxCool},
      heatingCapacity5FMinBtu: ${minHeat17 === Infinity ? "null" : minHeat17},
      heatingCapacity5FMaxBtu: ${maxHeat17 === -Infinity ? "null" : maxHeat17},
      seer2Min: ${minSeer2 === Infinity ? "null" : minSeer2},
      seer2Max: ${maxSeer2 === -Infinity ? "null" : maxSeer2},
      hspf2Min: ${minHspf2 === Infinity ? "null" : minHspf2},
      hspf2Max: ${maxHspf2 === -Infinity ? "null" : maxHspf2},
      cop5FMin: ${minCop5 === Infinity ? "null" : minCop5},
      cop5FMax: ${maxCop5 === -Infinity ? "null" : maxCop5},
      systemType: "${systemType}",
      categories: [${categories.join(", ")}],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }`);
      stats.models++;

      // Configurations (one per unique outdoor+indoor combination)
      let cIdx = 0;
      for (const e of rangeEntries) {
        cIdx++;
        const safeOutdoor = escStr(e.m);
        const safeIndoor = escStr(e.im);
        if (!safeOutdoor) continue;

        const ouId = cleanSlug(`${brandSlug}-${safeOutdoor}`);
        const iuId = safeIndoor ? cleanSlug(`${brandSlug}-${safeIndoor}`) : null;

        // Outdoor unit
        if (!seenOutdoor.has(ouId)) {
          seenOutdoor.add(ouId);
          // Find refrigerant from ES data if available
          const refrig = e.refrig || null;
          outdoorArr.push(`    {
      id: "${ouId}",
      modelNumber: "${safeOutdoor}",
      brandId: "${brandSlug}",
      refrigerant: ${refrig ? `"${refrig}"` : "null"} as any,
    }`);
          stats.outdoors++;
        }

        // Indoor unit
        if (iuId && safeIndoor && !seenIndoor.has(iuId)) {
          seenIndoor.add(iuId);
          indoorArr.push(`    {
      id: "${iuId}",
      modelNumber: "${safeIndoor}",
      brandId: "${brandSlug}",
      type: "${systemType}",
    }`);
        }

        // Configuration
        const configId = `${rangeSlug}-cfg-${cIdx}`;
        const isCold = anyCold || e.cc;
        const minTemp = isCold ? -25 : -20;

        configArr.push(`    {
      id: "${configId}",
      slug: "${configId}",
      modelId: "${rangeSlug}",
      outdoorUnitId: "${ouId}",
      indoorUnitId: ${iuId ? `"${iuId}"` : "null"},
      coolingCapacityMinBtu: ${e.c || e.hn || "null"},
      coolingCapacityMaxBtu: ${e.c || e.hn || "null"},
      seer2: ${e.seer2 || "null"},
      hspf2: ${e.hspf2 || "null"},
      minHeatingTempC: ${minTemp},
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }`);
        stats.configs++;

        // Performance profile
        if (e.h17) {
          perfArr.push(`    {
      configurationId: "${configId}",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: ${e.h17},
          cop: ${e.cop5 || "null"},
          confidence: "verified",
        }
      ]
    }`);
        }
      }
    }

    // ── Assemble the TS file ──
    let ts = `import type { BrandDataset } from "../../types";\n\n`;
    ts += `export const ${varName}: BrandDataset = {\n`;
    ts += `  brand: {\n`;
    ts += `    id: "${brandSlug}",\n`;
    ts += `    slug: "${brandSlug}",\n`;
    ts += `    name: "${escStr(brandName)}",\n`;
    ts += `    description: "Catalogue officiel issu de la base de données Hydro-Québec LogisVert.",\n`;
    ts += `    activeInQuebec: true,\n`;
    ts += `    status: "published",\n`;
    ts += `    createdAt: "2024-01-01T00:00:00Z",\n`;
    ts += `    updatedAt: "2024-01-01T00:00:00Z",\n`;
    ts += `  },\n`;
    ts += `  series: [\n${seriesArr.join(",\n")}\n  ],\n`;
    ts += `  models: [\n${modelsArr.join(",\n")}\n  ],\n`;
    ts += `  outdoorUnits: [\n${outdoorArr.join(",\n")}\n  ],\n`;
    ts += `  indoorUnits: [\n${indoorArr.join(",\n")}\n  ],\n`;
    ts += `  configurations: [\n${configArr.join(",\n")}\n  ],\n`;
    ts += `  performanceProfiles: [\n${perfArr.join(",\n")}\n  ],\n`;
    ts += `  certifications: [],\n`;
    ts += `  warranties: [],\n`;
    ts += `  priceObservations: [],\n`;
    ts += `  sources: [],\n`;
    ts += `  editorial: [],\n`;
    ts += `};\n`;

    // Write file
    const outPath = join(OUT_DIR, `${brandSlug}-auto.ts`);
    writeFileSync(outPath, ts);
    stats.brands++;

    // Track for registry imports
    registryImports.push({
      slug: brandSlug,
      varName,
      hasManual: existingManual.has(brandSlug),
    });
  }

  console.log(`\n✅ Generated ${stats.brands} brand files!`);
  console.log(`   📊 ${stats.series} series, ${stats.models} models, ${stats.configs} configs, ${stats.outdoors} outdoor units`);

  // ── Step 3: Generate registry import snippet ──────────────────────
  const importLines = [];
  const datasetLines = [];

  // Sort by slug for deterministic output
  registryImports.sort((a, b) => a.slug.localeCompare(b.slug));

  for (const imp of registryImports) {
    importLines.push(`import { ${imp.varName} as ${imp.slug.replace(/-/g, "")}Auto } from "./fixtures/brands/${imp.slug}-auto";`);
    if (imp.hasManual) {
      // Will be merged with manual
    } else {
      datasetLines.push(`  ${imp.slug.replace(/-/g, "")}Auto,`);
    }
  }

  const snippetPath = join(__dirname, "../src/lib/data/_registry-imports.generated.txt");
  const snippet = `// ── AUTO-GENERATED IMPORTS ──\n// Paste these into registry.ts\n\n${importLines.join("\n")}\n\n// ── DATASETS (brands without manual files) ──\n// Add to the allDatasets array:\n${datasetLines.join("\n")}\n`;
  writeFileSync(snippetPath, snippet);

  console.log(`\n📝 Registry import snippet saved to: ${snippetPath}`);
  console.log(`   ${registryImports.filter(i => i.hasManual).length} brands have manual files (will be merged)`);
  console.log(`   ${registryImports.filter(i => !i.hasManual).length} brands are auto-only (new!)`);
}

main();
