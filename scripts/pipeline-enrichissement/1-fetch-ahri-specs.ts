import fs from "fs";
import path from "path";
import * as cheerio from "cheerio";

const DATASETS_FILE = path.join(process.cwd(), "src/lib/data/fixtures/brands/all-auto-datasets.json");

// Define delay helper
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function scrapeAhriData(brandName: string, modelNumber: string) {
  const query = `${brandName} ${modelNumber} "minimum operating temperature" OR "heating capacity at 5F"`;
  const url = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`;
  
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    });
    
    const html = await res.text();
    const $ = cheerio.load(html);
    const text = $('.result__snippet').text().toLowerCase();
    
    let minTemp: number | null = null;
    let btu5F: number | null = null;
    let btu17F: number | null = null;

    // Very basic regex extraction for temperatures
    const tempMatch = text.match(/(-30|-25|-22|-15|-13|-5|5)[\s]*(?:°f|f)/i);
    if (tempMatch) {
      minTemp = parseInt(tempMatch[1], 10);
    } else if (text.includes("cold climate") || text.includes("hyper heat")) {
      minTemp = -22; // Safe assumption for hyper heat
    }

    // Match BTU at 5F
    const btu5Match = text.match(/([\d,]+)[\s]*btu[\s]*(?:at|@)[\s]*5f/i);
    if (btu5Match) {
      btu5F = parseInt(btu5Match[1].replace(/,/g, ''), 10);
    }

    // Match BTU at 17F
    const btu17Match = text.match(/([\d,]+)[\s]*btu[\s]*(?:at|@)[\s]*17f/i);
    if (btu17Match) {
      btu17F = parseInt(btu17Match[1].replace(/,/g, ''), 10);
    }

    return { minTemp, btu5F, btu17F };
  } catch (e: any) {
    console.error(`Error scraping ${modelNumber}:`, e.message);
    return { minTemp: null, btu5F: null, btu17F: null };
  }
}

export async function runAhriEnrichment() {
  throw new Error(
    "Collecte désactivée: les extraits DuckDuckGo ne constituent pas une fiche AHRI " +
    "et la valeur -22 °F ne doit jamais être supposée à partir de 'cold climate' ou 'hyper heat'."
  );
  console.log("Loading datasets for AHRI enrichment...");
  const datasets = JSON.parse(fs.readFileSync(DATASETS_FILE, "utf8"));
  let modifiedCount = 0;

  for (const [brandSlug, dataset] of Object.entries(datasets)) {
    const d = dataset as any;
    
    // We process configurations (as specs are tied to them)
    for (const config of d.configurations) {
      // Find outdoor unit
      const outdoorUnit = d.outdoorUnits.find((u: any) => u.id === config.outdoorUnitId);
      if (!outdoorUnit || !outdoorUnit.modelNumber) continue;
      
      // If minHeatingTempC is already set, skip
      if (config.minHeatingTempC !== undefined && config.minHeatingTempC !== null) continue;

      console.log(`[AHRI] Scraping ${d.brand.name} - ${outdoorUnit.modelNumber}`);
      const data = await scrapeAhriData(d.brand.name, outdoorUnit.modelNumber);
      
      let modified = false;
      if (data.minTemp !== null) {
        // Convert F to C approximately
        const c = Math.round((data.minTemp - 32) * (5/9));
        config.minHeatingTempC = c;
        console.log(`  -> Min Temp: ${data.minTemp}F (${c}C)`);
        modified = true;
      }
      
      // Performance profile
      if (data.btu5F !== null || data.btu17F !== null) {
        let perf = d.performanceProfiles.find((p: any) => p.configurationId === config.id);
        if (!perf) {
          perf = {
            id: `perf-${config.id}`,
            configurationId: config.id,
            heatingCapacity5FMaxBtu: null,
            heatingCapacity17FMaxBtu: null
          };
          d.performanceProfiles.push(perf);
        }
        
        if (data.btu5F !== null && !perf.heatingCapacity5FMaxBtu) {
          perf.heatingCapacity5FMaxBtu = data.btu5F;
          console.log(`  -> 5F BTU: ${data.btu5F}`);
          modified = true;
        }
        if (data.btu17F !== null && !perf.heatingCapacity17FMaxBtu) {
          perf.heatingCapacity17FMaxBtu = data.btu17F;
          console.log(`  -> 17F BTU: ${data.btu17F}`);
          modified = true;
        }
      }

      if (modified) {
        modifiedCount++;
        if (modifiedCount % 10 === 0) {
          fs.writeFileSync(DATASETS_FILE, JSON.stringify(datasets, null, 2));
          console.log("  [SAVED PROGRESS]");
        }
      }
      
      await delay(1500); // 1.5s delay
    }
  }

  if (modifiedCount > 0) {
    fs.writeFileSync(DATASETS_FILE, JSON.stringify(datasets, null, 2));
    console.log(`\nAHRI Enrichment finished. Updated ${modifiedCount} configurations.`);
  } else {
    console.log(`\nNo new AHRI data to scrape.`);
  }
}

// If run directly
if (require.main === module) {
  runAhriEnrichment().catch(console.error);
}
