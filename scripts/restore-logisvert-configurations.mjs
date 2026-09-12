#!/usr/bin/env node
/** Restore indoor-unit and furnace identifiers from an official LogisVert CSV. */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { readLogisVertCsv } from "./lib/logisvert-csv.mjs";

const csvPath = process.argv[2];
if (!csvPath) {
  throw new Error("Usage: node scripts/restore-logisvert-configurations.mjs <official.csv>");
}

const jsonPath = resolve("src/lib/subsidies/logisvert-official-amounts.json");
const register = JSON.parse(readFileSync(jsonPath, "utf8"));
// D\u00E9coupage RFC 4180 : un champ entre guillemets peut contenir \u00AB ; \u00BB ou une tabulation.
const rows = readLogisVertCsv(readFileSync(resolve(csvPath), "utf8"));

let matched = 0;
let indoorRestored = 0;
let furnaceRestored = 0;
for (const row of rows) {
  const entry = register[row.ahri];
  if (!entry) continue;
  matched++;
  const indoor = row.modele_interieur;
  const furnace = row.fournaise;
  if (indoor) {
    entry.im = indoor;
    indoorRestored++;
  }
  if (furnace) {
    entry.f = furnace;
    furnaceRestored++;
  }
}

writeFileSync(jsonPath, JSON.stringify(register));
console.log(JSON.stringify({ records: Object.keys(register).length, matched, indoorRestored, furnaceRestored }));
