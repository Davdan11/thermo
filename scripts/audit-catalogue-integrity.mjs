#!/usr/bin/env node
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const sourcePath = resolve("src/lib/subsidies/logisvert-official-amounts.json");
const fixturesPath = resolve("src/lib/data/fixtures/brands");
const outputPath = resolve(process.argv[2] || "catalogue-integrity-audit.json");
const source = JSON.parse(readFileSync(sourcePath, "utf8"));
const records = Object.entries(source);
const autoFiles = readdirSync(fixturesPath).filter((name) => name.endsWith("-auto.ts") && !name.startsWith("_"));
const generatedText = autoFiles.map((name) => readFileSync(join(fixturesPath, name), "utf8")).join("\n");

const unique = (field) => new Set(records.filter(([, row]) => row[field]).map(([, row]) => `${row.b}|${row[field]}`)).size;
const missing = (field) => records.reduce((count, [, row]) => count + (row[field] ? 0 : 1), 0);
const countText = (needle) => generatedText.split(needle).length - 1;

const report = {
  generatedAt: new Date().toISOString(),
  source: {
    path: sourcePath,
    logisVertRecords: records.length,
    normalizedBrands: new Set(autoFiles.map((name) => name.replace(/-auto\.ts$/, ""))).size,
    outdoorModels: unique("m"),
    indoorModels: unique("im"),
    furnaceModels: unique("f"),
    commercialSeries: unique("s"),
  },
  generated: {
    files: autoFiles.length,
    ahriReferences: countText('referenceNumber: "'),
    configurationsWithUnknownMinimumTemperature: countText("minHeatingTempC: null"),
    performancePointsAt17F: countText("outdoorTempC: -8.3"),
    fabricatedDefaultWarrantyRecords: countText('type: "standard"'),
    modelsFalselyMarkedActive2026: countText("isActive2026: true"),
  },
  sourceMissingByConfiguration: {
    indoorModel: missing("im"),
    furnaceModel: missing("f"),
    commercialSeries: missing("s"),
    seer2: missing("seer2"),
    hspf2: missing("hspf2"),
    eer2: missing("eer2"),
    copAt5F: missing("cop5"),
    heatingCapacityAt5F: missing("h5"),
    heatingCapacityAt17F: missing("h17"),
  },
  notPublishedByLogisVert: [
    "warranty", "product_image", "refrigerant", "minimum_operating_temperature",
    "sound_level", "cfm", "dimensions", "wifi", "feature_list", "brochure_url"
  ],
  qualityPolicy: {
    noInventedDefaults: true,
    unavailableFactsRemainNull: true,
    commercialAvailabilityRequiresManufacturerEvidence: true,
    warrantyRequiresManufacturerEvidencePerModel: true,
  },
};

writeFileSync(outputPath, JSON.stringify(report, null, 2));
console.log(JSON.stringify(report, null, 2));
