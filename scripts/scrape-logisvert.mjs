#!/usr/bin/env node
/* ==================================================================
   scrape-logisvert.mjs
   
   Downloads the OFFICIAL LogisVert CSV from Hydro-Québec's website
   and generates logisvert-official-amounts.json with REAL subsidy
   amounts (not calculated — straight from HQ).
   
   Source: hydroquebec.com/themes/mieux-consommer/recherche-themopompes-efficaces/data/
   
   Usage: node scripts/scrape-logisvert.mjs [--check] [--csv <copie locale .csv.gz>]
   ================================================================== */

import { readFileSync, writeFileSync, existsSync } from "fs";
import { createHash } from "crypto";
import { gunzipSync } from "zlib";
import { basename, dirname, join } from "path";
import { fileURLToPath } from "url";
import { buildHqEntries, readLogisVertCsv } from "./lib/logisvert-csv.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUTPUT_PATH = join(__dirname, "../src/lib/subsidies/logisvert-official-amounts.json");

const HQ_BASE = "https://www.hydroquebec.com/themes/mieux-consommer/recherche-themopompes-efficaces/data";
const HQ_FILES_INDEX = `${HQ_BASE}/liste-fichiers.json`;

// ENERGY STAR API for enrichment (AHRI → specs like SEER2, HSPF2, series name)
const ES_API = "https://data.energystar.gov/resource/83eb-xbyy.json";

async function main() {
  console.log("🔄 Scraping LogisVert official data from Hydro-Québec...\n");

  // ── Step 1: Find the CSV file ─────────────────────────────────────
  // --csv <proprio-maison-fr-JJ-MM-AAAA.csv.gz> : copie locale d'un fichier officiel
  // (même nom que sur le site d'HQ) pour régénérer à partir d'une liste précise.
  const csvArg = process.argv.indexOf("--csv");
  const localCsv = csvArg >= 0 ? process.argv[csvArg + 1] : null;
  if (csvArg >= 0 && !localCsv) throw new Error("--csv attend le chemin d'un fichier .csv.gz d'Hydro-Québec");
  let latestCsv;
  let gzBuffer;
  if (localCsv) {
    latestCsv = basename(localCsv);
    gzBuffer = readFileSync(localCsv);
    console.log(`📥 Local copy of ${latestCsv}: ${localCsv}`);
  } else {
    console.log("📋 Fetching file index from HQ...");
    const indexRes = await fetch(HQ_FILES_INDEX);
    if (!indexRes.ok) throw new Error(`Failed to fetch file index: ${indexRes.status}`);
    const filesIndex = await indexRes.json();

    // Get the latest CSV file for "proprio-maison" (residential owners)
    const proprioMaison = filesIndex[0]["proprio-maison"];
    const csvFiles = proprioMaison.fr.csv;
    latestCsv = csvFiles[csvFiles.length - 1].file;
    console.log(`   Latest CSV: ${latestCsv}`);

    // ── Step 2: Download the CSV ────────────────────────────────────
    console.log("📥 Downloading CSV from HQ...");
    const csvRes = await fetch(`${HQ_BASE}/${latestCsv}`);
    if (!csvRes.ok) throw new Error(`Failed to download CSV: ${csvRes.status}`);
    gzBuffer = Buffer.from(await csvRes.arrayBuffer());
  }
  const csvUrl = `${HQ_BASE}/${latestCsv}`;
  const sourceSha256 = createHash("sha256").update(gzBuffer).digest("hex");
  const metaPathEarly = join(__dirname, "../src/lib/subsidies/logisvert-metadata.json");
  // Mode --check (robot quotidien) : compare l'empreinte du fichier HQ avec celle de la liste en place.
  // Sortie 0 = inchangée, 3 = nouvelle liste à intégrer.
  if (process.argv.includes("--check")) {
    const prev = existsSync(metaPathEarly) ? JSON.parse(readFileSync(metaPathEarly, "utf8")) : {};
    const same = prev.sourceSha256 === sourceSha256;
    console.log(same ? `   Liste inchangée (${sourceSha256.slice(0, 12)}…)` : `   Nouvelle liste : ${sourceSha256.slice(0, 12)}… (en place : ${(prev.sourceSha256 ?? "aucune").slice(0, 12)})`);
    process.exit(same ? 0 : 3);
  }
  const csvText = gunzipSync(gzBuffer).toString("utf8");

  // ── Step 3: Parse CSV → entries keyed by AHRI ─────────────────────
  // CSV RFC 4180 à « ; » : un champ entre guillemets peut contenir « ; » ou une
  // tabulation (ex. "EA(C;U)1P24A+TDR+TXV"). Découpage et colonnes (lues par leur
  // nom) : scripts/lib/logisvert-csv.mjs. Une ligne décalée fait échouer le script.
  console.log("🔍 Parsing HQ data...");
  const rows = readLogisVertCsv(csvText);
  console.log(`   Rows: ${rows.length}`);
  const hqEntries = buildHqEntries(rows);
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
      f: entry.f,
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
      // Keep the broad HQ/ENERGY STAR family only. "Mini-Split" does not prove
      // wall-mounted or single-zone; that distinction requires a product sheet.
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

  // ── Step 5b: Garde-fou — rien n'est écrit si un montant est invraisemblable ──
  // Le maximum officiel est de 7 560 $ (liste du 17-07-2025). Un montant plus élevé
  // vient presque toujours d'une puissance (BTU/h) lue dans la colonne du montant.
  // À relever seulement si Hydro-Québec augmente réellement ses aides.
  const MAX_PLAUSIBLE_AMOUNT = 15000;
  const suspects = Object.entries(result).filter(([, e]) => !(e.a > 0 && e.a <= MAX_PLAUSIBLE_AMOUNT));
  if (suspects.length) {
    throw new Error(`${suspects.length} montant(s) hors de 1 à ${MAX_PLAUSIBLE_AMOUNT} $, ex. ${suspects.slice(0, 3).map(([k, e]) => `AHRI ${k} ${e.b} ${e.m} = ${e.a} $`).join(" ; ")}`);
  }

  // ── Step 6: Write output ──────────────────────────────────────────
  writeFileSync(OUTPUT_PATH, JSON.stringify(result, null, 0));
  
  // Also write model index for quick lookup by outdoor model
  const indexPath = join(__dirname, "../src/lib/subsidies/logisvert-model-index.json");
  writeFileSync(indexPath, JSON.stringify(modelIndex, null, 0));
  
  // Write metadata
  const metaPath = join(__dirname, "../src/lib/subsidies/logisvert-metadata.json");
  const now = new Date().toISOString();
  writeFileSync(metaPath, JSON.stringify({
    updatedAt: now,
    sourceFile: latestCsv,
    sourceUrl: csvUrl,
    sourceSha256,
    count: Object.keys(result).length
  }, null, 2));
  
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
  console.log(`   Min amount: ${aides.reduce((x, y) => Math.min(x, y), Infinity)} $`);
  console.log(`   Max amount: ${aides.reduce((x, y) => Math.max(x, y), 0)} $`);
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
