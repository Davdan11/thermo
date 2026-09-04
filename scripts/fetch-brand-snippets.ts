import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as cheerio from 'cheerio';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const HQ_DATA_PATH = path.join(__dirname, "../src/lib/subsidies/logisvert-official-amounts.json");
const OUT_FILE = path.join(__dirname, "brand-snippets.json");

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchSnippet(query: string): Promise<string> {
  const url = `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`;
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    const html = await res.text();
    const $ = cheerio.load(html);
    return $('.result__snippet').text() || "";
  } catch (e: any) {
    console.error(`Error for query: ${query}`, e.message);
    return "";
  }
}

async function main() {
  console.log("Loading HQ data...");
  const hqData = JSON.parse(fs.readFileSync(HQ_DATA_PATH, "utf8"));
  
  const brands = new Set<string>();
  for (const entry of Object.values(hqData) as any[]) {
    if (entry.b) {
      const b = entry.b.trim();
      // Skip some really obscure generic ones or those already mapped manually
      if (b && b.length > 2) {
        brands.add(b);
      }
    }
  }

  const brandList = Array.from(brands);
  console.log(`Found ${brandList.length} unique brands.`);

  const results: Record<string, { warrantySnippet: string, seriesSnippet: string }> = {};

  // For speed, let's just do top 50 brands by count of models to ensure we get the important ones,
  // or we can do all of them. The user wants ALL.
  const brandCounts: Record<string, number> = {};
  for (const entry of Object.values(hqData) as any[]) {
    const b = (entry.b || "").trim();
    if (b) {
      brandCounts[b] = (brandCounts[b] || 0) + 1;
    }
  }

  // Sort brands by popularity (number of models) to prioritize important ones
  brandList.sort((a, b) => brandCounts[b] - brandCounts[a]);

  // Just to be safe with DDG rate limits, let's process them all but with a small delay
  for (let i = 0; i < brandList.length; i++) {
    const b = brandList[i];
    console.log(`[${i+1}/${brandList.length}] Fetching data for ${b} (Models: ${brandCounts[b]})...`);
    
    const warrantySnippet = await fetchSnippet(`${b} heat pump warranty years parts compressor`);
    await delay(1000);
    const seriesSnippet = await fetchSnippet(`${b} heat pump series models brochure`);
    await delay(1000);
    
    results[b] = { warrantySnippet, seriesSnippet };
    
    // Save incrementally
    fs.writeFileSync(OUT_FILE, JSON.stringify(results, null, 2));
  }
  
  console.log("Done fetching snippets!");
}

main();
