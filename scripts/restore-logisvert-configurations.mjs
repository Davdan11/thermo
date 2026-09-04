#!/usr/bin/env node
/** Restore indoor-unit and furnace identifiers from an official LogisVert CSV. */
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const csvPath = process.argv[2];
if (!csvPath) {
  throw new Error("Usage: node scripts/restore-logisvert-configurations.mjs <official.csv>");
}

const jsonPath = resolve("src/lib/subsidies/logisvert-official-amounts.json");
const register = JSON.parse(readFileSync(jsonPath, "utf8"));
const lines = readFileSync(resolve(csvPath), "utf8").split(/\r?\n/);
const header = lines.shift()?.split(";") ?? [];
const column = Object.fromEntries(header.map((name, index) => [name.replace(/^\uFEFF/, ""), index]));

let matched = 0;
let indoorRestored = 0;
let furnaceRestored = 0;
for (const line of lines) {
  if (!line) continue;
  const cells = line.split(";");
  const ahri = cells[column.ahri]?.trim();
  const entry = register[ahri];
  if (!entry) continue;
  matched++;
  const indoor = cells[column.modele_interieur]?.trim();
  const furnace = cells[column.fournaise]?.trim();
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
