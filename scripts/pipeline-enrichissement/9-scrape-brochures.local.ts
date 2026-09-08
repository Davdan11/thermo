/**
 * Pipeline 9 — Téléchargement des brochures manufacturiers
 * 
 * Étape 1: Télécharger tous les PDFs uniques sur notre serveur
 * Étape 2: Générer le mapping série→brochure pour le front-end
 */

import fs from "fs-extra";
import path from "path";
import https from "https";
import http from "http";

const PDF_MAPPING = path.join(process.cwd(), "src/lib/data/fixtures/documents/pdf-mapping.json");
const PUBLIC_DOCS = path.join(process.cwd(), "public/documents/brochures");
const REPORT_PATH = path.join(process.cwd(), "src/lib/data/fixtures/documents/enrichment-report.json");
const BROCHURE_MAP_PATH = path.join(process.cwd(), "src/lib/data/fixtures/documents/brochure-map.json");

function slugify(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function downloadFile(url: string, dest: string): Promise<boolean> {
  return new Promise((resolve) => {
    if (fs.existsSync(dest) && fs.statSync(dest).size > 500) {
      resolve(true);
      return;
    }
    
    const doDownload = (downloadUrl: string, redirectCount = 0) => {
      if (redirectCount > 5) { resolve(false); return; }
      const protocol = downloadUrl.startsWith("https") ? https : http;
      
      try {
        const req = protocol.get(downloadUrl, { 
          timeout: 20000,
          headers: { "User-Agent": "Mozilla/5.0 (compatible; ThermopompeBot/1.0)" }
        }, (response) => {
          if ((response.statusCode === 301 || response.statusCode === 302) && response.headers.location) {
            doDownload(response.headers.location, redirectCount + 1);
            return;
          }
          if (response.statusCode !== 200) {
            resolve(false);
            return;
          }
          const file = fs.createWriteStream(dest);
          response.pipe(file);
          file.on("finish", () => { file.close(); resolve(true); });
          file.on("error", () => { file.close(); resolve(false); });
        });
        req.on("error", () => resolve(false));
        req.on("timeout", () => { req.destroy(); resolve(false); });
      } catch {
        resolve(false);
      }
    };
    
    doDownload(url);
  });
}

async function main() {
  console.log("🚀 Pipeline 9 — Téléchargement des brochures manufacturiers");
  console.log("=".repeat(60));

  const mapping: Record<string, Array<{
    serie: string; model: string; url: string; confidence: string; doc_type: string
  }>> = JSON.parse(fs.readFileSync(PDF_MAPPING, "utf-8"));

  fs.ensureDirSync(PUBLIC_DOCS);

  let totalUnique = 0, downloaded = 0, failed = 0, skippedDup = 0;
  
  // This will be our final mapping: brandSlug → serieSlug → brochurePath
  const brochureMap: Record<string, Record<string, string>> = {};

  for (const [brand, pdfs] of Object.entries(mapping)) {
    const brandSlug = slugify(brand);
    const brandDocDir = path.join(PUBLIC_DOCS, brandSlug);
    fs.ensureDirSync(brandDocDir);
    
    if (!brochureMap[brandSlug]) brochureMap[brandSlug] = {};
    
    console.log(`\n📦 ${brand} (${pdfs.length} entrées)`);
    
    const seenUrls = new Set<string>();

    for (const pdf of pdfs) {
      // Deduplicate by URL
      if (seenUrls.has(pdf.url)) {
        skippedDup++;
        // Still add the mapping for this serie
        const serieSlug = slugify(pdf.serie || pdf.model || "unknown");
        const existingFile = Object.values(brochureMap[brandSlug])[0];
        if (existingFile) brochureMap[brandSlug][serieSlug] = existingFile;
        continue;
      }
      seenUrls.add(pdf.url);
      
      totalUnique++;
      const serieSlug = slugify(pdf.serie || pdf.model || "unknown");
      const pdfFilename = `${serieSlug}.pdf`;
      const destPdf = path.join(brandDocDir, pdfFilename);
      
      process.stdout.write(`  📥 ${(pdf.serie || pdf.model).substring(0, 30).padEnd(32)}... `);
      const success = await downloadFile(pdf.url, destPdf);
      
      if (!success) {
        console.log("❌");
        failed++;
        continue;
      }
      
      const sizeKb = (fs.statSync(destPdf).size / 1024).toFixed(0);
      downloaded++;
      console.log(`✅ ${sizeKb} KB`);
      
      // Add to mapping
      const publicPath = `/documents/brochures/${brandSlug}/${pdfFilename}`;
      brochureMap[brandSlug][serieSlug] = publicPath;
    }
  }

  // Save brochure map
  fs.writeFileSync(BROCHURE_MAP_PATH, JSON.stringify(brochureMap, null, 2));
  
  // Save report
  const report = {
    timestamp: new Date().toISOString(),
    totalUniquePdfs: totalUnique,
    downloaded,
    failed,
    skippedDuplicates: skippedDup,
    brandsProcessed: Object.keys(mapping).length,
    brochureMapPath: BROCHURE_MAP_PATH,
  };
  fs.writeFileSync(REPORT_PATH, JSON.stringify(report, null, 2));
  
  console.log("\n" + "=".repeat(60));
  console.log("✨ RAPPORT FINAL");
  console.log(`   PDFs uniques:     ${totalUnique}`);
  console.log(`   Téléchargés:      ${downloaded}`);
  console.log(`   Doublons sautés:  ${skippedDup}`);
  console.log(`   Échecs:           ${failed}`);
  console.log(`   Mapping sauvé:    ${BROCHURE_MAP_PATH}`);
}

main().catch(console.error);
