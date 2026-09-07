import fs from "fs";
import path from "path";

const DATASETS_FILE = path.join(process.cwd(), "src/lib/data/fixtures/brands/all-auto-datasets.json");

interface WarrantyInfo {
  compressor: number;
  parts: number;
  labor?: number;
}

const warrantyMap: Record<string, WarrantyInfo> = {
  "daikin": { compressor: 12, parts: 12 },
  "mitsubishi-electric": { compressor: 10, parts: 10 },
  "fujitsu": { compressor: 10, parts: 10 },
  "moovair": { compressor: 10, parts: 10 },
  "gree": { compressor: 10, parts: 10 },
  "panasonic": { compressor: 10, parts: 10 },
  "lennox": { compressor: 10, parts: 10 },
  "carrier": { compressor: 10, parts: 10 },
  "trane": { compressor: 10, parts: 10 },
  "senville": { compressor: 7, parts: 5 },
  "tosot": { compressor: 7, parts: 5 },
  "direct-air": { compressor: 7, parts: 5 },
};

const DEFAULT_WARRANTY: WarrantyInfo = { compressor: 5, parts: 5 };

async function main() {
  const data = fs.readFileSync(DATASETS_FILE, "utf8");
  const datasets = JSON.parse(data);

  let injectedCount = 0;

  for (const brandSlug in datasets) {
    const brandData = datasets[brandSlug];
    const warrantyRule = warrantyMap[brandSlug] || DEFAULT_WARRANTY;

    // We will inject warranties for each model
    for (const model of brandData.models) {
      const partsWarranty = {
        id: `${model.id}-w-parts`,
        modelId: model.id,
        type: "parts",
        durationYears: warrantyRule.parts,
        requiresRegistration: true, // Typical standard
        provider: "manufacturer",
        confidence: "estimated",
      };

      const compressorWarranty = {
        id: `${model.id}-w-comp`,
        modelId: model.id,
        type: "compressor",
        durationYears: warrantyRule.compressor,
        requiresRegistration: true,
        provider: "manufacturer",
        confidence: "estimated",
      };

      // Replace or initialize warranties array on the dataset
      if (!brandData.warranties) brandData.warranties = [];
      
      // Keep track of the warranties at the brandDataset level
      brandData.warranties.push(partsWarranty);
      brandData.warranties.push(compressorWarranty);
      
      injectedCount += 2;
    }
  }

  fs.writeFileSync(DATASETS_FILE, JSON.stringify(datasets, null, 2));
  console.log(`✅ Successfully injected ${injectedCount} warranties across all brands.`);
}

main().catch(console.error);
