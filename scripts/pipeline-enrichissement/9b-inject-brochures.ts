/**
 * Pipeline 9b — Injection des brochureUrl dans les fixtures de marques (v2)
 * 
 * Lit le brochure-map.json et met à jour les fichiers TypeScript
 * des fixtures pour ajouter le champ brochureUrl à TOUTES les séries correspondantes.
 */

import fs from "fs-extra";
import path from "path";

const BROCHURE_MAP_PATH = path.join(process.cwd(), "src/lib/data/fixtures/documents/brochure-map.json");
const BRANDS_DIR = path.join(process.cwd(), "src/lib/data/fixtures/brands_generated");

function slugify(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function findBrandFile(brandSlugFromCsv: string): string | null {
  const files = fs.readdirSync(BRANDS_DIR).filter(f => f.endsWith(".ts") && f !== "index.ts");
  const exact = `${brandSlugFromCsv}.ts`;
  if (files.includes(exact)) return exact;
  for (const file of files) {
    const fileSlug = file.replace(".ts", "");
    if (fileSlug.includes(brandSlugFromCsv) || brandSlugFromCsv.includes(fileSlug)) {
      return file;
    }
  }
  return null;
}

async function main() {
  console.log("🔗 Pipeline 9b v2 — Injection des brochureUrl (toutes séries)");
  console.log("=".repeat(60));

  const brochureMap: Record<string, Record<string, string>> = JSON.parse(
    fs.readFileSync(BROCHURE_MAP_PATH, "utf-8")
  );

  let totalInjected = 0;
  let totalSkipped = 0;
  let totalUnmatched = 0;

  for (const [brandSlug, seriesMap] of Object.entries(brochureMap)) {
    if (Object.keys(seriesMap).length === 0) continue;
    
    const brandFile = findBrandFile(brandSlug);
    if (!brandFile) {
      console.log(`⚠️  ${brandSlug}: Fichier fixture introuvable`);
      totalUnmatched += Object.keys(seriesMap).length;
      continue;
    }
    
    const brandPath = path.join(BRANDS_DIR, brandFile);
    let content = fs.readFileSync(brandPath, "utf-8");
    
    // Parse the JSON-like structure to find series blocks
    // Each series has a "name" and an "imageUrl" field
    // We want to inject brochureUrl right after imageUrl for matching series
    
    let brandInjected = 0;

    for (const [serieSlug, pdfPath] of Object.entries(seriesMap)) {
      // Find all series in the fixture content
      // Strategy: find series names and see if any match our serieSlug
      const seriesRegex = /"name":\s*"([^"]+)"/g;
      let match;
      const allNames: Array<{ name: string; pos: number }> = [];
      
      while ((match = seriesRegex.exec(content)) !== null) {
        allNames.push({ name: match[1], pos: match.index });
      }
      
      for (const entry of allNames) {
        const nameSlug = slugify(entry.name);
        
        // Check for match
        const matches = 
          nameSlug === serieSlug ||
          nameSlug.includes(serieSlug) ||
          serieSlug.includes(nameSlug) ||
          (serieSlug.split("-")[0].length > 2 && nameSlug.startsWith(serieSlug.split("-")[0]));
        
        if (!matches) continue;
        
        // Check if this series already has brochureUrl 
        // Look in the ~500 chars after this name for brochureUrl
        const chunk = content.substring(entry.pos, entry.pos + 500);
        if (chunk.includes("brochureUrl")) {
          totalSkipped++;
          continue;
        }
        
        // Find "imageUrl" after this name (within a reasonable range)
        const imageUrlPos = content.indexOf('"imageUrl"', entry.pos);
        if (imageUrlPos === -1 || imageUrlPos > entry.pos + 500) continue;
        
        // Find the end of the imageUrl line
        const lineEnd = content.indexOf("\n", imageUrlPos);
        if (lineEnd === -1) continue;
        
        // Get indent
        const lineStart = content.lastIndexOf("\n", imageUrlPos) + 1;
        const currentLine = content.substring(lineStart, lineEnd);
        const indentMatch = currentLine.match(/^(\s*)/);
        const indent = indentMatch ? indentMatch[1] : "      ";
        
        // Inject brochureUrl
        const injection = `\n${indent}"brochureUrl": "${pdfPath}",`;
        content = content.substring(0, lineEnd) + injection + content.substring(lineEnd);
        brandInjected++;
        totalInjected++;
        
        // Only match one series per serieSlug entry
        break;
      }
    }
    
    if (brandInjected > 0) {
      fs.writeFileSync(brandPath, content);
      console.log(`✅ ${brandFile}: ${brandInjected} brochureUrl injectées`);
    } else if (Object.keys(seriesMap).length > 0) {
      console.log(`⚪ ${brandFile}: aucune nouvelle correspondance`);
    }
  }

  console.log("\n" + "=".repeat(60));
  console.log("✨ RAPPORT");
  console.log(`   brochureUrl ajoutées: ${totalInjected}`);
  console.log(`   Déjà présentes:      ${totalSkipped}`);
  console.log(`   Non matchées:        ${totalUnmatched}`);
}

main().catch(console.error);
