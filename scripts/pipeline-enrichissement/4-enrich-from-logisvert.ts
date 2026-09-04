import fs from "fs";
import path from "path";

const DATASETS_FILE = path.join(process.cwd(), "src/lib/data/fixtures/brands/all-auto-datasets.json");
const LOGISVERT_FILE = path.join(process.cwd(), "src/lib/subsidies/logisvert-official-amounts.json");

export async function runLogisvertEnrichment() {
  console.log("Loading datasets...");
  const datasets = JSON.parse(fs.readFileSync(DATASETS_FILE, "utf8"));
  
  console.log("Loading LogisVert official data...");
  const logisvertData = JSON.parse(fs.readFileSync(LOGISVERT_FILE, "utf8"));
  const logisvertRecords = Object.values(logisvertData) as any[];

  let updatedCount = 0;

  for (const [brandSlug, dataset] of Object.entries(datasets)) {
    const d = dataset as any;

    for (const config of d.configurations) {
      const outdoorUnit = d.outdoorUnits.find((u: any) => u.id === config.outdoorUnitId);
      const indoorUnit = d.indoorUnits.find((u: any) => u.id === config.indoorUnitId);
      if (!outdoorUnit || !outdoorUnit.modelNumber) continue;

      // Find best match in LogisVert
      const match = logisvertRecords.find(r => 
        r.m === outdoorUnit.modelNumber && 
        (!indoorUnit || !r.im || r.im === indoorUnit.modelNumber)
      );

      if (match) {
        let perf = d.performanceProfiles.find((p: any) => p.configurationId === config.id);
        if (!perf) {
          perf = { id: `perf-${config.id}`, configurationId: config.id };
          d.performanceProfiles.push(perf);
        }

        let modified = false;
        
        if (match.h5 && perf.heatingCapacity5FMaxBtu !== match.h5) {
          perf.heatingCapacity5FMaxBtu = match.h5;
          modified = true;
        }
        if (match.h17 && perf.heatingCapacity17FMaxBtu !== match.h17) {
          perf.heatingCapacity17FMaxBtu = match.h17;
          modified = true;
        }
        if (match.cop5 && perf.copAt5F !== match.cop5) {
          perf.copAt5F = match.cop5;
          modified = true;
        }
        if (match.seer2 && perf.seer2 !== match.seer2) {
          perf.seer2 = match.seer2;
          modified = true;
        }
        if (match.hspf2 && perf.hspf2 !== match.hspf2) {
          perf.hspf2 = match.hspf2;
          modified = true;
        }
        if (match.cc && config.minHeatingTempC === null) {
            // cc means Cold Climate. Often -30C or -25C, but policy says no invented defaults.
            // If they want us to fetch from NRCan, I will try to fetch the CSV.
        }

        if (modified) {
          updatedCount++;
        }
      }
    }
  }

  if (updatedCount > 0) {
    fs.writeFileSync(DATASETS_FILE, JSON.stringify(datasets, null, 2));
    console.log(`Updated ${updatedCount} configurations with exact LogisVert AHRI specs.`);
  } else {
    console.log("No new LogisVert specs to update.");
  }
}

if (require.main === module) {
  runLogisvertEnrichment().catch(console.error);
}
