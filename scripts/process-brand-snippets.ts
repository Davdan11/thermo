import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SNIPPETS_FILE = path.join(__dirname, "brand-snippets.json");
const METADATA_FILE = path.join(__dirname, "brand-metadata.json");

function processSnippets() {
  const data = JSON.parse(fs.readFileSync(SNIPPETS_FILE, "utf8"));
  const metadata: Record<string, any> = {};

  // Standard aliases we KNOW are true (manual overrides for bad AHRI names)
  const seriesAliases: Record<string, Record<string, string>> = {
    "quebec-vair": {
      "ne-t52-series": "Boréal",
      "ne-series": "Nordic",
      "ne-t52-series-wall-single-12000": "Boréal 12k",
    }
  };

  for (const [brand, snippets] of Object.entries(data)) {
    const s = (snippets as any).warrantySnippet.toLowerCase();
    
    let parts = 10;
    let comp = 10;
    
    // Simple extraction logic
    if (s.includes("12 ans") || s.includes("12-year") || s.includes("12 year")) {
      parts = 12; comp = 12;
    } else if (s.includes("5 ans") || s.includes("5-year") || s.includes("5 year")) {
      parts = 5; 
      if (s.includes("7 year") || s.includes("7-year")) comp = 7;
      else comp = 5;
    } else if (brand.toUpperCase() === "QUEBEC VAIR" || brand.toUpperCase() === "DAIKIN") {
      parts = 12; comp = 12;
    }

    metadata[brand.toLowerCase()] = {
      warranties: {
        parts,
        compressor: comp
      },
      seriesAliases: seriesAliases[brand.toLowerCase().replace(/[\s_]+/g, "-")] || {}
    };
  }

  fs.writeFileSync(METADATA_FILE, JSON.stringify(metadata, null, 2));
  console.log("Generated brand-metadata.json");
}

processSnippets();
