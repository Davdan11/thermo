/**
 * Generate a COMPACT LogisVert lookup table.
 * Includes series names for searchability alongside model numbers.
 * 
 * Keyed by normalized outdoor model → { amount, btu17F, series, ... }
 */
import XLSX from "xlsx";
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const XLSX_PATH = path.join(__dirname, "..", "thermopompes_quebec_canada_2011_2026.xlsx");
const OUTPUT_PATH = path.join(__dirname, "..", "src", "lib", "subsidies", "logisvert-official-amounts.json");

const RATE_CC = 120;
const RATE_STD = 50;
const MAX = 6700;

const wb = XLSX.readFile(XLSX_PATH);

// Build lookup keyed by normalized outdoor model
const entries = {};

for (const sheetName of ["Modeles_centraux", "Modeles_mini_multizone"]) {
  const sheet = wb.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet);
  const sysType = sheetName === "Modeles_centraux" ? "C" : "M";

  for (const row of data) {
    const brand = (row["﻿brand"] || row["brand"] || "").toString().trim();
    const series = (row["series"] || "").toString().trim();
    const outdoorModel = (row["outdoor_model"] || "").toString().trim();
    if (!outdoorModel) continue;

    const cc = row["cold_climate_any"] === "Yes";
    const btu17F = parseFloat(row["heating_capacity_17f_btu_h_max"]) || 0;
    const btu5F = parseFloat(row["heating_capacity_5f_btu_h_max"]) || 0;
    const cooling = parseFloat(row["cooling_capacity_btu_h_max"]) || 0;
    const hspf2 = parseFloat(row["hspf2_max"]) || 0;
    const seer2 = parseFloat(row["seer2_max"]) || 0;

    if (btu17F <= 0) continue;

    const rate = cc ? RATE_CC : RATE_STD;
    const amt = Math.min(Math.floor(btu17F / 1000) * rate, MAX);

    // Key: normalize outdoor model for matching
    const key = outdoorModel.toLowerCase().replace(/[^a-z0-9]/g, "");

    // Keep highest subsidy amount per outdoor model
    if (!entries[key] || entries[key].a < amt) {
      entries[key] = {
        b: brand,         // brand
        s: series,        // series name (e.g. "ATMOSPHERA", "AURORA")
        m: outdoorModel,  // outdoor model number
        a: amt,           // logisvert amount $
        h: btu17F,        // heating BTU at -8°C (17°F)
        h5: btu5F,        // heating BTU at -15°C (5°F)  
        c: cooling,       // cooling capacity BTU
        cc: cc,           // cold climate certified
        t: sysType,       // C=central, M=mini/multi
        p: hspf2,         // HSPF2
        e: seer2,         // SEER2
      };
    }
  }
}

// Write compact JSON
writeFileSync(OUTPUT_PATH, JSON.stringify(entries));

const size = (Buffer.byteLength(JSON.stringify(entries)) / 1024).toFixed(0);
console.log(`✅ ${Object.keys(entries).length} outdoor models → ${size} KB`);

// Sample: show Daikin entries
const daikinEntries = Object.values(entries).filter(e => e.b === "Daikin");
console.log(`\nDaikin models: ${daikinEntries.length}`);
const daikinSeries = [...new Set(daikinEntries.map(e => e.s))];
console.log("Daikin series:", daikinSeries);
