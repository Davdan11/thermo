#!/usr/bin/env node
/* ==================================================================
   scrape-logisvert.mjs
   
   Downloads the OFFICIAL LogisVert CSV from Hydro-Québec's website
   and generates logisvert-official-amounts.json with REAL subsidy
   amounts (not calculated — straight from HQ).
   
   Source: hydroquebec.com/themes/mieux-consommer/recherche-themopompes-efficaces/data/
   
   Usage: node scripts/scrape-logisvert.mjs
   ================================================================== */

import { readFileSync, writeFileSync } from "fs";
import { gunzipSync } from "zlib";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = join(__dirname, "../src/lib/subsidies/logisvert-official-amounts.json");

const HQ_BASE = "https://www.hydroquebec.com/themes/mieux-consommer/recherche-themopompes-efficaces/data";
const HQ_FILES_INDEX = `${HQ_BASE}/liste-fichiers.json`;

// ENERGY STAR API for enrichment (AHRI → specs like SEER2, HSPF2, series name)
const ES_API = "https://data.energystar.gov/resource/83eb-xbyy.json";

async function main() {
  console.log("🔄 Scraping LogisVert official data from Hydro-Québec...\n");

  // ── Step 1: Find the latest CSV file ──────────────────────────────
  console.log("📋 Fetching file index from HQ...");
  const indexRes = await fetch(HQ_FILES_INDEX);
  if (!indexRes.ok) throw new Error(`Failed to fetch file index: ${indexRes.status}`);
  const filesIndex = await indexRes.json();

  // Get the latest CSV file for "proprio-maison" (residential owners)
  const proprioMaison = filesIndex[0]["proprio-maison"];
  const csvFiles = proprioMaison.fr.csv;
  const latestCsv = csvFiles[csvFiles.length - 1].file;
  console.log(`   Latest CSV: ${latestCsv}`);

  // ── Step 2: Download and decompress the CSV ───────────────────────
  console.log("📥 Downloading CSV from HQ...");
  const csvUrl = `${HQ_BASE}/${latestCsv}`;
  const csvRes = await fetch(csvUrl);
  if (!csvRes.ok) throw new Error(`Failed to download CSV: ${csvRes.status}`);
  
  const gzBuffer = Buffer.from(await csvRes.arrayBuffer());
  const csvText = gunzipSync(gzBuffer).toString("utf8");
  const lines = csvText.split("\n").filter(l => l.trim());
  console.log(`   Total lines: ${lines.length - 1}`);

  // ── Step 3: Parse CSV → entries keyed by AHRI ─────────────────────
  console.log("🔍 Parsing HQ data...");
  const header = lines[0].split(";");
  console.log(`   Columns: ${header.join(", ")}`);

  // ahri;marque;modele_exterieur;modele_interieur;fournaise;puissance_nominale;puissance_moins_8;aide_financiere_a;aide_financiere_b;haut_rendement
  const hqEntries = new Map();
  for (let i = 1; i < lines.length; i++) {
    const cols = lines[i].split(";");
    const ahri = (cols[0] || "").trim();
    if (!ahri || ahri === "ahri") continue;

    const aide = parseFloat(cols[7]) || 0;
    if (aide <= 0) continue;

    // Keep the entry with highest aide if duplicate AHRI
    const existing = hqEntries.get(ahri);
    if (existing && existing.a >= aide) continue;

    hqEntries.set(ahri, {
      ahri,
      b: (cols[1] || "").trim().replace(/\r/g, ""),           // brand
      m: (cols[2] || "").trim().replace(/\r/g, ""),            // outdoor model
      im: (cols[3] || "").trim().replace(/\r/g, ""),           // indoor model
      f: (cols[4] || "").trim().replace(/\r/g, ""),            // furnace
      hn: parseInt(cols[5]) || 0,                               // puissance nominale
      h17: parseInt(cols[6]) || 0,                              // puissance @ -8°C
      a: aide,                                                  // REAL LogisVert amount
      ab: parseFloat(cols[8]) || 0,                             // aide_financiere_b
      hr: (cols[9] || "").trim().replace(/\r/g, "").toUpperCase().startsWith("OUI"),
    });
  }

  console.log(`   Unique AHRI entries: ${hqEntries.size}`);

  // ── Step 4: Enrich with ENERGY STAR data (series, SEER2, cold climate) ──
  console.log("🌟 Enriching with ENERGY STAR data (batches)...");
  
  // Build a set of AHRI numbers to look up
  const ahriNumbers = [...hqEntries.keys()];
  const esData = new Map();
  
  // Fetch in batches of 1000 via Socrata API
  const BATCH_SIZE = 50000;
  const total = await fetchESCount();
  console.log(`   ENERGY STAR total Canada entries: ${total}`);
  
  for (let offset = 0; offset < total; offset += BATCH_SIZE) {
    process.stdout.write(`   Fetching ES batch ${offset}–${offset + BATCH_SIZE}...`);
    const url = `${ES_API}?$where=markets%20like%20'%25Canada%25'&$limit=${BATCH_SIZE}&$offset=${offset}&$select=ahri_reference_number,model_number,series_name,seer2_btu_wh,hspf2_btu_wh,cold_climate,product_type,cop_at_5_f,heating_capacity_at_5_f_btu_h,cooling_capacity_btu_h,eer2_btu_wh`;
    try {
      const res = await fetch(url);
      if (!res.ok) { console.log(` SKIP (${res.status})`); continue; }
      const rows = await res.json();
      for (const row of rows) {
        if (row.ahri_reference_number) {
          esData.set(row.ahri_reference_number, row);
        }
      }
      console.log(` ${rows.length} rows`);
    } catch (e) {
      console.log(` ERROR: ${e.message}`);
    }
  }
  console.log(`   ENERGY STAR enrichment entries: ${esData.size}`);

  // ── Step 4b: Build model-based index from ENERGY STAR for second-pass matching ──
  console.log("🔗 Building ENERGY STAR model index for second-pass matching...");
  const esModelIndex = new Map(); // normalized outdoor model → ES entry
  for (const [, row] of esData) {
    if (row.model_number) {
      const norm = row.model_number.toLowerCase().replace(/[^a-z0-9]/g, "").replace(/\*$/, "");
      if (!esModelIndex.has(norm)) esModelIndex.set(norm, row);
    }
  }
  console.log(`   ES model index: ${esModelIndex.size} unique models`);

  // ── Step 5: Merge and build final JSON ────────────────────────────
  console.log("📦 Building final JSON...");
  
  const result = {};
  const modelIndex = {};  // outdoor model → AHRI numbers
  let enriched = 0;
  let enrichedByModel = 0;
  let typeFromFurnace = 0;
  
  for (const [ahri, entry] of hqEntries) {
    // Try AHRI match first, then model match
    let es = esData.get(ahri);
    
    if (!es) {
      // Second pass: try matching by outdoor model number
      const normModel = entry.m.toLowerCase().replace(/[^a-z0-9]/g, "").replace(/\*$/, "");
      es = esModelIndex.get(normModel);
      if (es) enrichedByModel++;
    }
    
    const final = {
      b: entry.b,
      m: entry.m,
      im: entry.im,
      a: entry.a,            // REAL HQ amount
      h17: entry.h17,        // BTU @ -8°C
      hn: entry.hn,          // nominal
      hr: entry.hr,          // haut rendement
    };

    // Detect type from HQ furnace column
    // If furnace model is present → it's a central/ducted system
    if (entry.f && entry.f.length > 1) {
      final.t = "C";
      typeFromFurnace++;
    }

    // Enrich with ES data if available
    if (es) {
      enriched++;
      if (es.series_name) final.s = es.series_name;
      if (es.seer2_btu_wh) final.seer2 = parseFloat(es.seer2_btu_wh);
      if (es.hspf2_btu_wh) final.hspf2 = parseFloat(es.hspf2_btu_wh);
      if (es.cold_climate) final.cc = es.cold_climate === "Yes";
      if (es.cop_at_5_f) final.cop5 = parseFloat(es.cop_at_5_f);
      if (es.heating_capacity_at_5_f_btu_h) final.h5 = parseInt(es.heating_capacity_at_5_f_btu_h);
      if (es.cooling_capacity_btu_h) final.c = parseInt(es.cooling_capacity_btu_h);
      if (es.product_type && !final.t) final.t = es.product_type.includes("Mini") ? "M" : "C";
    }

    // If still no type, infer from model naming conventions
    if (!final.t) {
      const m = entry.m.toUpperCase();
      // Common mini-split outdoor model prefixes
      if (/^(MSZ|MUZ|MXZ|RXM|RXS|RXL|FTX|ASU|AOU|WH|CS|CU|GWH|SEN|VIR|ACQ|DERA)/.test(m)) {
        final.t = "M";
      }
      // If has indoor model but no furnace → likely mini-split
      else if ((!entry.f || entry.f.length < 2) && entry.im && entry.im.length > 2) {
        final.t = "M";
      }
    }

    result[ahri] = final;

    // Build model index
    const normModel = entry.m.toLowerCase().replace(/[^a-z0-9]/g, "");
    if (normModel) {
      if (!modelIndex[normModel]) modelIndex[normModel] = [];
      modelIndex[normModel].push(ahri);
    }
  }

  console.log(`   Enriched with ENERGY STAR (AHRI match): ${enriched - enrichedByModel}/${hqEntries.size}`);
  console.log(`   Enriched with ENERGY STAR (model match): ${enrichedByModel}`);
  console.log(`   Type detected from furnace column: ${typeFromFurnace}`);
  console.log(`   Total enriched: ${enriched}/${hqEntries.size}`);

  // ── Step 6: Write output ──────────────────────────────────────────
  writeFileSync(OUTPUT_PATH, JSON.stringify(result, null, 0));
  
  // Also write model index for quick lookup by outdoor model
  const indexPath = join(__dirname, "../src/lib/subsidies/logisvert-model-index.json");
  writeFileSync(indexPath, JSON.stringify(modelIndex, null, 0));
  
  const sizeKB = Math.round(readFileSync(OUTPUT_PATH).length / 1024);
  const indexSizeKB = Math.round(readFileSync(indexPath).length / 1024);
  
  console.log(`\n✅ Done!`);
  console.log(`   📄 ${OUTPUT_PATH} (${sizeKB} KB) — ${Object.keys(result).length} entries`);
  console.log(`   📄 ${indexPath} (${indexSizeKB} KB) — ${Object.keys(modelIndex).length} unique models`);
  console.log(`   📅 Source: HQ CSV "${latestCsv}"`);
  console.log(`   💰 Amounts: REAL LogisVert values from Hydro-Québec`);

  // Stats
  const aides = Object.values(result).map(e => e.a);
  const brands = [...new Set(Object.values(result).map(e => e.b))];
  console.log(`\n📊 Stats:`);
  console.log(`   Brands: ${brands.length}`);
  console.log(`   Min amount: ${Math.min(...aides.slice(0, 10000))} $`);
  console.log(`   Max amount: ${Math.max(...aides.slice(0, 10000))} $`);
}

async function fetchESCount() {
  try {
    const res = await fetch(`${ES_API}?$select=count(*)&$where=markets%20like%20'%25Canada%25'`);
    const json = await res.json();
    return parseInt(json[0].count) || 0;
  } catch {
    return 300000; // fallback estimate
  }
}

main().catch(e => {
  console.error("❌ Error:", e.message);
  process.exit(1);
});
