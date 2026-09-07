import fs from "fs";
import path from "path";
import * as cheerio from "cheerio";

const DATASETS_FILE = path.join(process.cwd(), "src/lib/data/fixtures/brands/all-auto-datasets.json");

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function scrapeWarranty(brandName: string, modelNumber: string) {
  const query = `${brandName} ${modelNumber} warranty years parts compressor`;
  const url = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`;
  
  try {
    const res = await fetch(url, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    });
    
    const html = await res.text();
    const $ = cheerio.load(html);
    const text = $('.result__snippet').text().toLowerCase();
    
    let parts: number | null = null;
    let comp: number | null = null;
    
    if (text.includes("12 ans") || text.includes("12-year") || text.includes("12 year")) {
      parts = 12; comp = 12;
    } else if (text.includes("10 ans") || text.includes("10-year") || text.includes("10 year")) {
      parts = 10; comp = 10;
    } else if (text.includes("5 ans") || text.includes("5-year") || text.includes("5 year")) {
      parts = 5;
    }
    
    return { parts, comp };
  } catch (e: any) {
    console.error(`Error scraping warranty for ${modelNumber}:`, e.message);
    return { parts: null, comp: null };
  }
}

export async function runManufacturerEnrichment() {
  throw new Error(
    "Collecte désactivée: une garantie ne peut pas être déduite d'un extrait DuckDuckGo. " +
    "Une politique officielle du fabricant et son territoire sont requis."
  );
  console.log("Loading datasets for Manufacturer enrichment...");
  const datasets = JSON.parse(fs.readFileSync(DATASETS_FILE, "utf8"));
  let modifiedCount = 0;

  for (const [brandSlug, dataset] of Object.entries(datasets)) {
    const d = dataset as any;
    
    for (const model of d.models) {
      // Check if warranty exists for this model
      const existingWarranty = d.warranties.find((w: any) => w.modelId === model.id);
      if (existingWarranty) continue;

      console.log(`[MANUFACTURER] Scraping Warranty ${d.brand.name} - ${model.name}`);
      const data = await scrapeWarranty(d.brand.name, model.name);
      
      if (data.parts !== null) {
        d.warranties.push({
          id: `war-${model.id}`,
          modelId: model.id,
          partsYears: data.parts,
          compressorYears: data.comp ?? data.parts,
          laborYears: 0,
          requiresRegistration: true,
          description: `Garantie standard ${data.parts} ans (scrapée)`,
          sourceId: "src-scraping"
        });
        
        console.log(`  -> Parts: ${data.parts}, Comp: ${data.comp ?? data.parts}`);
        modifiedCount++;
        
        if (modifiedCount % 10 === 0) {
          fs.writeFileSync(DATASETS_FILE, JSON.stringify(datasets, null, 2));
          console.log("  [SAVED PROGRESS]");
        }
      }
      
      await delay(1500);
    }
  }

  if (modifiedCount > 0) {
    fs.writeFileSync(DATASETS_FILE, JSON.stringify(datasets, null, 2));
    console.log(`\nManufacturer Enrichment finished. Updated ${modifiedCount} models.`);
  } else {
    console.log(`\nNo new warranties to scrape.`);
  }
}

if (require.main === module) {
  runManufacturerEnrichment().catch(console.error);
}
