import fs from "fs";
import path from "path";

const DATASETS_FILE = path.join(process.cwd(), "src/lib/data/fixtures/brands/all-auto-datasets.json");
const LOGISVERT_FILE = path.join(process.cwd(), "src/lib/subsidies/logisvert-official-amounts.json");
const MARKETING_DICT_FILE = path.join(process.cwd(), "src/lib/data/fixtures/marketing-names.json");

export async function renameAllModels() {
  const datasets = JSON.parse(fs.readFileSync(DATASETS_FILE, "utf8"));
  const logisvertData = JSON.parse(fs.readFileSync(LOGISVERT_FILE, "utf8"));
  const logisvertRecords = Object.values(logisvertData);
  let marketingDict: Record<string, Record<string, string>> = {};
  
  if (fs.existsSync(MARKETING_DICT_FILE)) {
      marketingDict = JSON.parse(fs.readFileSync(MARKETING_DICT_FILE, "utf8"));
  }

  let updatedCount = 0;

  for (const [brandSlug, dataset] of Object.entries(datasets)) {
    const d = dataset as any;
    const brandName = d.brand.name;
    const brandDict = marketingDict[brandSlug] || {};

    for (const model of d.models) {
      const modelNum = model.modelNumber;
      if (!modelNum) continue;

      const match = logisvertRecords.find((r: any) => r.m === modelNum);
      
      let realSeriesName = "";
      let capacity = model.nominalCapacityBtu || 0;

      if (match) {
        if (match.s && match.s.trim() !== "") {
          realSeriesName = match.s.trim();
        }
        if (capacity === 0) {
          capacity = match.c || match.hn || match.h17 || 0;
        }
      }

      // Check against marketing dictionary first
      let marketingMatched = false;
      for (const [prefix, marketingName] of Object.entries(brandDict)) {
          if (modelNum.startsWith(prefix)) {
              realSeriesName = marketingName;
              marketingMatched = true;
              break;
          }
      }

      // If no valid series name, extract from model
      if (!marketingMatched && (!realSeriesName || realSeriesName.toLowerCase().includes("vérifier") || realSeriesName.toLowerCase().includes("standard"))) {
         const parts = modelNum.split(/[-_ ]/);
         if (parts.length > 1) {
            realSeriesName = parts[0];
         } else {
            const matchChars = modelNum.match(/^[A-Z0-9]{3,5}/);
            realSeriesName = matchChars ? matchChars[0] : modelNum.substring(0,4);
         }
      }

      realSeriesName = realSeriesName.replace(/\b(?:series|série)\b/ig, "").trim();

      let capacityStr = "";
      if (capacity > 0) {
        let capK = Math.round(capacity / 1000);
        if (capK >= 6 && capK <= 60) {
           capacityStr = `${capK}000 BTU`;
        }
      }
      
      if (!capacityStr) {
        const btuMatch = modelNum.match(/(09|12|15|18|24|30|36|42|48|60)/);
        if (btuMatch) {
           capacityStr = `${btuMatch[1]}000 BTU`;
        }
      }

      if (realSeriesName === modelNum) {
          realSeriesName = "";
      }

      let newName = `${realSeriesName} ${capacityStr}`.replace(/\s+/g, " ").trim();
      
      if (!newName) {
          newName = `${modelNum}`;
      }

      if (model.name !== newName) {
        model.name = newName;
        updatedCount++;
      }
    }
  }

  if (updatedCount > 0) {
    fs.writeFileSync(DATASETS_FILE, JSON.stringify(datasets, null, 2));
    console.log(`Successfully mapped and renamed ${updatedCount} models using the marketing dictionary!`);
  } else {
    console.log("No models needed renaming.");
  }
}

if (require.main === module) {
  renameAllModels().catch(console.error);
}
