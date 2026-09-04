#!/usr/bin/env npx tsx
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { allAutoDatasets } from "../src/lib/data/fixtures/brands/_all-auto";

const outputPath = resolve("src/lib/data/fixtures/brands/all-auto-datasets.json");

console.log("Compiling allAutoDatasets to JSON...");
const data = JSON.stringify(allAutoDatasets, null, 2);
writeFileSync(outputPath, data, "utf-8");
console.log(`Successfully compiled to ${outputPath}`);
