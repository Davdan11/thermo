import fs from "fs";
import path from "path";

const dataPath = path.join(__dirname, "../lib/data/generated_catalog.json");
const outDir = path.join(__dirname, "../lib/data/fixtures/brands");

interface FlatProduct {
  id: string; 
  brand: string;
  series: string;
  systemType: string;
  models: {
    outdoor: string;
    indoor: string;
  };
  specs: {
    coolingCapacityBTU: number;
    seer2: number | null;
    hspf2: number | null;
    heatingCapacity5F: number | null;
    cop5F: number | null;
    refrigerant: string;
  };
  certifications: {
    energyStar: boolean;
    neep: boolean;
  };
  warranty: {
    parts: number;
    compressor: number;
    labor: number;
  };
}

function cleanSlug(s: string) {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Whitelist of active 2026 commercial ranges
const ACTIVE_2026_WHITELIST = new Set([
  // Daikin
  "daikin-oterra-wall-single",
  "daikin-skyair-central",
  "daikin-skyair-multi-zone",
  "daikin-fit-central",
  "daikin-fit-multi-zone",
  "daikin-dz9vc-central",
  // Mitsubishi
  "mitsubishi-electric-zuba-central",
  "mitsubishi-electric-m-series-wall-single",
  "mitsubishi-electric-m-series-multi-zone",
  "mitsubishi-electric-p-series-wall-single",
  // Senville
  "senville-sen-series-wall-single",
  "senville-sena-series-wall-single",
  "senville-sena-series-multi-zone",
  "senville-aura-wall-single",
  "senville-aura-multi-zone",
  "senville-lets-wall-single",
  "senville-sendc-central",
  "senville-sen-central",
  // Midea
  "midea-all-easy-pro-wall-single",
  "midea-dlcmra-multi-zone",
  "midea-dlcmrb-multi-zone",
  "midea-evox-central",
  // Moovair
  "moovair-m19-wall-single",
  "moovair-m23-wall-single",
  "moovair-m25-wall-single",
  "moovair-m20-multi-zone",
  "moovair-central-central",
  // Tosot
  "tosot-apex-wall-single",
  "tosot-apex-multi-zone",
  "tosot-central-central",
  // Zephyr
  "zephyr-central-central",
  "zephyr-wall-single",
  // Sharp
  "sharp-z-series-wall-single",
  // Bosch
  "bosch-ids-light-central",
  "bosch-ids-plus-central",
  "bosch-ids-premium-central",
  "bosch-ids-premium-connected-central",
  "bosch-ids-edge-central",
  "bosch-ids-edge-multi-zone",
  "bosch-climate-5000-wall-single",
  "bosch-climate-5000-multi-zone",
  // Gree
  "gree-flec-wall-single",
  "gree-flec-multi-zone",
  "gree-multi-pro-multi-zone",
  "gree-multi-ultra-multi-zone",
  // LG
  "lg-prestige-wall-single",
  "lg-artcool-wall-single",
  // Napoleon
  "napoleon-ns18-central",
]);

const SYSTEM_TYPE_MAP: Record<string, string> = {
  "Central": "central-ducted",
  "Mural": "wall-single",
  "Multizone": "multi-zone"
};

function run() {
  if (!fs.existsSync(dataPath)) {
    console.error(`Cannot find data file at ${dataPath}`);
    return;
  }

  const data: FlatProduct[] = JSON.parse(fs.readFileSync(dataPath, "utf-8"));

  const brandsMap = new Map<string, FlatProduct[]>();
  for (const p of data) {
    let b = cleanSlug(p.brand);
    if (b === 'aux') b = 'aux-brand';
    if (!brandsMap.has(b)) brandsMap.set(b, []);
    brandsMap.get(b)!.push(p);
  }

  for (const [brandSlug, products] of brandsMap.entries()) {
    const brandName = products[0].brand;

    let tsCode = `import type { BrandDataset } from "../../types";\n\n`;
    tsCode += `export const ${brandSlug.replace(/-/g, "")}Dataset: BrandDataset = {\n`;
    tsCode += `  brand: {\n`;
    tsCode += `    id: "${brandSlug}",\n`;
    tsCode += `    slug: "${brandSlug}",\n`;
    tsCode += `    name: "${brandName}",\n`;
    tsCode += `    description: "Catalogue officiel issu de la base de données gouvernementale.",\n`;
    tsCode += `    activeInQuebec: true,\n`;
    tsCode += `    status: "published",\n`;
    tsCode += `    createdAt: "2024-01-01T00:00:00Z",\n`;
    tsCode += `    updatedAt: "2024-01-01T00:00:00Z",\n`;
    tsCode += `  },\n`;

    const commercialRangesMap = new Map<string, FlatProduct[]>();
    for (const p of products) {
      const typeEnum = SYSTEM_TYPE_MAP[p.systemType] || "central-ducted";
      const rangeSlug = cleanSlug(`${brandName}-${p.series}-${typeEnum}`);
      if (!commercialRangesMap.has(rangeSlug)) commercialRangesMap.set(rangeSlug, []);
      commercialRangesMap.get(rangeSlug)!.push(p);
    }

    const seriesStrings: string[] = [];
    const modelsStrings: string[] = [];
    const outdoorUnitsStrings: string[] = [];
    const indoorUnitsStrings: string[] = [];
    const configurationsStrings: string[] = [];
    const performanceProfilesStrings: string[] = [];

    const seenOutdoor = new Set<string>();
    const seenIndoor = new Set<string>();
    const seenSeries = new Set<string>();

    for (const [rangeSlug, rangeProducts] of commercialRangesMap.entries()) {
      const pFirst = rangeProducts[0];
      const seriesName = pFirst.series || "Standard";
      const typeEnum = SYSTEM_TYPE_MAP[pFirst.systemType] || "central-ducted";
      const seriesSlug = cleanSlug(`${brandName}-${seriesName}`);
      
      const isActive2026 = ACTIVE_2026_WHITELIST.has(rangeSlug) || ACTIVE_2026_WHITELIST.has(seriesSlug);
      
      let minCool = Infinity, maxCool = -Infinity;
      let minHeat5F = Infinity, maxHeat5F = -Infinity;
      let minSeer2 = Infinity, maxSeer2 = -Infinity;
      let minHspf2 = Infinity, maxHspf2 = -Infinity;
      let minCop5F = Infinity, maxCop5F = -Infinity;

      for (const rp of rangeProducts) {
        if (rp.specs.coolingCapacityBTU) {
          if (rp.specs.coolingCapacityBTU < minCool) minCool = rp.specs.coolingCapacityBTU;
          if (rp.specs.coolingCapacityBTU > maxCool) maxCool = rp.specs.coolingCapacityBTU;
        }
        if (rp.specs.heatingCapacity5F) {
          if (rp.specs.heatingCapacity5F < minHeat5F) minHeat5F = rp.specs.heatingCapacity5F;
          if (rp.specs.heatingCapacity5F > maxHeat5F) maxHeat5F = rp.specs.heatingCapacity5F;
        }
        if (rp.specs.seer2) {
          if (rp.specs.seer2 < minSeer2) minSeer2 = rp.specs.seer2;
          if (rp.specs.seer2 > maxSeer2) maxSeer2 = rp.specs.seer2;
        }
        if (rp.specs.hspf2) {
          if (rp.specs.hspf2 < minHspf2) minHspf2 = rp.specs.hspf2;
          if (rp.specs.hspf2 > maxHspf2) maxHspf2 = rp.specs.hspf2;
        }
        if (rp.specs.cop5F) {
          if (rp.specs.cop5F < minCop5F) minCop5F = rp.specs.cop5F;
          if (rp.specs.cop5F > maxCop5F) maxCop5F = rp.specs.cop5F;
        }
      }

      if (!seenSeries.has(seriesSlug)) {
        seriesStrings.push(`    {
      id: "${seriesSlug}",
      slug: "${seriesSlug}",
      name: "${seriesName}",
      brandId: "${brandSlug}",
      systemType: "${typeEnum}",
      categories: ["cold-climate"],
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }`);
        seenSeries.add(seriesSlug);
      }

      modelsStrings.push(`    {
      id: "${rangeSlug}",
      slug: "${rangeSlug}",
      name: "${seriesName}",
      seriesId: "${seriesSlug}",
      brandId: "${brandSlug}",
      modelNumber: "${seriesName}",
      normalizedModelNumber: "${cleanSlug(seriesName)}",
      isActive2026: ${isActive2026},
      thermomatchEligible: ${isActive2026},
      coolingCapacityMinBtu: ${minCool === Infinity ? "null" : minCool},
      coolingCapacityMaxBtu: ${maxCool === -Infinity ? "null" : maxCool},
      heatingCapacity5FMinBtu: ${minHeat5F === Infinity ? "null" : minHeat5F},
      heatingCapacity5FMaxBtu: ${maxHeat5F === -Infinity ? "null" : maxHeat5F},
      seer2Min: ${minSeer2 === Infinity ? "null" : minSeer2},
      seer2Max: ${maxSeer2 === -Infinity ? "null" : maxSeer2},
      hspf2Min: ${minHspf2 === Infinity ? "null" : minHspf2},
      hspf2Max: ${maxHspf2 === -Infinity ? "null" : maxHspf2},
      cop5FMin: ${minCop5F === Infinity ? "null" : minCop5F},
      cop5FMax: ${maxCop5F === -Infinity ? "null" : maxCop5F},
      systemType: "${typeEnum}",
      categories: [${isActive2026 ? '"cold-climate"' : '""'}].filter(Boolean) as any,
      status: "published",
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }`);

      let cIdx = 0;
      for (const rp of rangeProducts) {
        cIdx++;
        // Sanitize newlines and quotes before interpolation
        const safeOutdoor = rp.models.outdoor.replace(/[\\x00-\\x1F\\x7F-\\x9F]/g, ' ').replace(/"/g, '\\"');
        const safeIndoor = rp.models.indoor ? rp.models.indoor.replace(/[\\x00-\\x1F\\x7F-\\x9F]/g, ' ').replace(/"/g, '\\"') : null;

        const ouId = cleanSlug(`${brandSlug}-${safeOutdoor}`);
        const iuId = safeIndoor ? cleanSlug(`${brandSlug}-${safeIndoor}`) : null;
        
        if (!seenOutdoor.has(ouId)) {
          outdoorUnitsStrings.push(`    {
      id: "${ouId}",
      modelNumber: "${safeOutdoor}",
      brandId: "${brandSlug}",
      refrigerant: ${rp.specs.refrigerant ? `"${rp.specs.refrigerant}"` : "null"} as any,
    }`);
          seenOutdoor.add(ouId);
        }

        if (iuId && safeIndoor && !seenIndoor.has(iuId)) {
          indoorUnitsStrings.push(`    {
      id: "${iuId}",
      modelNumber: "${safeIndoor}",
      brandId: "${brandSlug}",
      type: "${typeEnum}",
    }`);
          seenIndoor.add(iuId);
        }

        const configId = `${rangeSlug}-cfg-${cIdx}`;
        configurationsStrings.push(`    {
      id: "${configId}",
      slug: "${configId}",
      modelId: "${rangeSlug}",
      outdoorUnitId: "${ouId}",
      indoorUnitId: ${iuId ? `"${iuId}"` : "null"},
      coolingCapacityMinBtu: ${rp.specs.coolingCapacityBTU || "null"},
      coolingCapacityMaxBtu: ${rp.specs.coolingCapacityBTU || "null"},
      seer2: ${rp.specs.seer2 || "null"},
      hspf2: ${rp.specs.hspf2 || "null"},
      createdAt: "2024-01-01T00:00:00Z",
      updatedAt: "2024-01-01T00:00:00Z",
    }`);

        if (rp.specs.heatingCapacity5F) {
          performanceProfilesStrings.push(`    {
      configurationId: "${configId}",
      dataPoints: [
        {
          outdoorTempC: -15,
          heatingCapacityBtu: ${rp.specs.heatingCapacity5F},
          cop: ${rp.specs.cop5F || "null"},
          confidence: "verified",
        }
      ]
    }`);
        }
      }
    }

    tsCode += `  series: [\n${seriesStrings.join(",\n")}\n  ],\n`;
    tsCode += `  models: [\n${modelsStrings.join(",\n")}\n  ],\n`;
    tsCode += `  outdoorUnits: [\n${outdoorUnitsStrings.join(",\n")}\n  ],\n`;
    tsCode += `  indoorUnits: [\n${indoorUnitsStrings.join(",\n")}\n  ],\n`;
    tsCode += `  configurations: [\n${configurationsStrings.join(",\n")}\n  ],\n`;
    tsCode += `  performanceProfiles: [\n${performanceProfilesStrings.join(",\n")}\n  ],\n`;
    tsCode += `  certifications: [],\n`;
    tsCode += `  warranties: [],\n`;
    tsCode += `  priceObservations: [],\n`;
    tsCode += `  sources: [],\n`;
    tsCode += `  editorial: [],\n`;
    tsCode += `};\n`;

    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }
    fs.writeFileSync(path.join(outDir, `${brandSlug}-auto.ts`), tsCode);
  }
  
  console.log("Successfully generated commercial catalog.");
}

run();
