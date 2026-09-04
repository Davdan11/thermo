import fs from "fs";
import path from "path";

// A simple script to match our catalogue with the official NRCan CSV database

const DATASETS_FILE = path.join(process.cwd(), "src/lib/data/fixtures/brands/all-auto-datasets.json");
const NRCAN_CSV_FILE = path.join(process.cwd(), "src/lib/data/fixtures/nrcan-database.csv");

export async function runNrcanMatcher() {
  console.log("==========================================");
  console.log(" [NRCan] Starting Official Data Enrichment");
  console.log("==========================================");

  if (!fs.existsSync(NRCAN_CSV_FILE)) {
    console.error("Error: nrcan-database.csv not found! Please download it from NRCan.");
    return;
  }

  console.log("Loading NRCan CSV database...");
  const csvContent = fs.readFileSync(NRCAN_CSV_FILE, "utf8");
  const lines = csvContent.split("\n").filter(l => l.trim().length > 0);
  
  // Basic CSV parsing
  const headers = lines[0].split(",");
  const nrcanData = lines.slice(1).map(line => {
    const cols = line.split(",");
    return {
      brand: cols[0]?.trim(),
      outdoorModel: cols[1]?.trim(),
      indoorModel: cols[2]?.trim(),
      seer2: parseFloat(cols[4]),
      hspf2: parseFloat(cols[5]),
      capacity5F: parseFloat(cols[7]),
      capacity17F: parseFloat(cols[8]),
      minTemp: parseInt(cols[9], 10)
    };
  });

  console.log(`Loaded ${nrcanData.length} records from NRCan.`);
  console.log("Loading local datasets...");
  const datasets = JSON.parse(fs.readFileSync(DATASETS_FILE, "utf8"));
  let matchedCount = 0;

  for (const [brandSlug, dataset] of Object.entries(datasets)) {
    const d = dataset as any;
    
    for (const config of d.configurations) {
      // Find models for this config
      const outdoorUnit = d.outdoorUnits.find((u: any) => u.id === config.outdoorUnitId);
      const indoorUnit = d.indoorUnits.find((u: any) => u.id === config.indoorUnitId);
      
      if (!outdoorUnit || !outdoorUnit.modelNumber) continue;

      // Match against NRCan data (simplified matching logic for POC)
      const match = nrcanData.find(row => 
        row.outdoorModel === outdoorUnit.modelNumber ||
        // Sometimes NRCan models have asterisks
        outdoorUnit.modelNumber.startsWith(row.outdoorModel?.replace(/\*/g, '') || "XXXXX")
      );

      if (match) {
        let modified = false;
        
        // Update Min Temp
        if (config.minHeatingTempC !== match.minTemp && !isNaN(match.minTemp)) {
          config.minHeatingTempC = match.minTemp;
          modified = true;
        }

        // Update Performance Profile
        let perf = d.performanceProfiles.find((p: any) => p.configurationId === config.id);
        if (!perf) {
          perf = {
            id: `perf-${config.id}`,
            configurationId: config.id,
          };
          d.performanceProfiles.push(perf);
        }

        if (!isNaN(match.capacity5F) && perf.heatingCapacity5FMaxBtu !== match.capacity5F) {
          perf.heatingCapacity5FMaxBtu = match.capacity5F;
          modified = true;
        }
        
        if (!isNaN(match.capacity17F) && perf.heatingCapacity17FMaxBtu !== match.capacity17F) {
          perf.heatingCapacity17FMaxBtu = match.capacity17F;
          modified = true;
        }

        if (modified) {
          console.log(`[+] MATCHED: ${d.brand.name} ${outdoorUnit.modelNumber} -> 5F: ${match.capacity5F} BTU, Temp: ${match.minTemp}°C`);
          matchedCount++;
        }
      }
    }
  }

  if (matchedCount > 0) {
    fs.writeFileSync(DATASETS_FILE, JSON.stringify(datasets, null, 2));
    console.log(`\nSuccess! Updated ${matchedCount} configurations with official NRCan data.`);
  } else {
    console.log("\nNo matches found or data already up to date.");
  }
}

if (require.main === module) {
  runNrcanMatcher().catch(console.error);
}
