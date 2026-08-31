import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import path from "node:path";
import { readSheet } from "read-excel-file/node";
import type {
  CatalogProduct,
  CertifiedPairing,
  Enrichment,
  NumberRange,
  ThermoCatalog,
  WarrantyPolicy,
} from "./types.ts";

type RawRow = Record<string, unknown>;

const normalizeHeader = (value: unknown) => String(value ?? "").replace(/^\uFEFF/, "").trim();
const text = (value: unknown) => {
  if (value === null || value === undefined) return "";
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  if (typeof value === "object" && "text" in value) return String((value as { text: unknown }).text ?? "").trim();
  if (typeof value === "object" && "result" in value) return String((value as { result: unknown }).result ?? "").trim();
  return String(value).trim();
};
const number = (value: unknown): number | undefined => {
  if (value === null || value === undefined || value === "") return undefined;
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : undefined;
};
const yearOf = (value: unknown): number | undefined => {
  if (value instanceof Date) return value.getUTCFullYear();
  const match = text(value).match(/^(\d{4})/);
  return match ? Number(match[1]) : undefined;
};
const normalize = (value: string) => value.trim().toLocaleLowerCase("fr-CA");
const unique = (values: string[]) => [...new Set(values.filter(Boolean))].sort((a, b) => a.localeCompare(b));
const splitValues = (value: unknown) => unique(text(value).split(/[;,]/).map((item) => item.trim()));
const stableId = (value: string) => createHash("sha256").update(value).digest("hex").slice(0, 20);

function asRange(minValue: unknown, maxValue: unknown): NumberRange | undefined {
  const min = number(minValue);
  const max = number(maxValue);
  if (min === undefined && max === undefined) return undefined;
  return { min: min ?? max!, max: max ?? min! };
}

function mergeRange(current: NumberRange | undefined, incoming: NumberRange | undefined): NumberRange | undefined {
  if (!incoming) return current;
  if (!current) return incoming;
  return { min: Math.min(current.min, incoming.min), max: Math.max(current.max, incoming.max) };
}

function rowsFromSheet(sheetRows: unknown[][], headerRowNumber: number): RawRow[] {
  const headers = (sheetRows[headerRowNumber - 1] ?? []).map(normalizeHeader);
  const rows: RawRow[] = [];
  for (let rowNumber = headerRowNumber; rowNumber < sheetRows.length; rowNumber += 1) {
    const row = sheetRows[rowNumber] ?? [];
    const record: RawRow = {};
    let populated = false;
    headers.forEach((header, index) => {
      if (!header) return;
      const value = row[index];
      record[header] = value;
      if (value !== null && value !== undefined && value !== "") populated = true;
    });
    if (populated) rows.push(record);
  }
  return rows;
}

function parseWarranties(rows: RawRow[]): Map<string, WarrantyPolicy[]> {
  const byBrand = new Map<string, WarrantyPolicy[]>();
  for (const row of rows) {
    const brand = text(row.brand);
    if (!brand) continue;
    const policy: WarrantyPolicy = {
      scope: text(row.series_scope),
      marketScope: text(row.market_scope),
      partsYears: number(row.parts_years),
      compressorYears: number(row.compressor_years),
      labourYears: number(row.labor_years),
      coverage: text(row.coverage),
      registrationConditions: text(row.registration_conditions),
      limitations: text(row.limitations),
      confidence: text(row.confidence),
      sourceUrl: text(row.source_url),
      verifiedOn: text(row.verified_on),
    };
    const key = normalize(brand);
    byBrand.set(key, [...(byBrand.get(key) ?? []), policy]);
  }
  return byBrand;
}

interface EnrichmentRule extends Enrichment {
  brand: string;
  series: string;
  patterns: string[];
}

function parseMaxZones(note: string): number | undefined {
  const match = note.match(/(?:jusqu['’]à|up to)\s+(\d+)\s+(?:unités|units|zones)/i);
  return match ? Number(match[1]) : undefined;
}

function parseEnrichment(rows: RawRow[]): EnrichmentRule[] {
  return rows.flatMap((row) => {
    const brand = text(row.brand);
    if (!brand) return [];
    const note = text(row.note);
    return [{
      brand,
      series: text(row.series),
      patterns: text(row.model_pattern).split(";").map((item) => item.trim()).filter(Boolean),
      minHeatingOutdoorC: number(row.min_heating_outdoor_c),
      remoteMaxSetpointC: number(row.remote_max_setpoint_c),
      factoryChargeOz: number(row.factory_charge_oz),
      refrigerant: text(row.refrigerant) || undefined,
      maxZones: parseMaxZones(note),
      note,
      confidence: text(row.confidence),
      sourceUrl: text(row.source_url),
    }];
  });
}

function matchesPattern(value: string, pattern: string): boolean {
  const escaped = pattern.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
  return new RegExp(escaped, "i").test(value);
}

function findEnrichment(product: CatalogProduct, rules: EnrichmentRule[]): Enrichment | undefined {
  const brand = normalize(product.brand);
  const rule = rules.find((candidate) => {
    if (normalize(candidate.brand) !== brand) return false;
    if (candidate.patterns.length) return candidate.patterns.some((pattern) => matchesPattern(product.outdoorModel, pattern));
    return candidate.series && normalize(product.series).includes(normalize(candidate.series));
  });
  if (!rule) return undefined;
  const { brand: _brand, series: _series, patterns: _patterns, ...enrichment } = rule;
  return enrichment;
}

function pairingFromRow(row: RawRow): CertifiedPairing {
  return {
    indoorModel: text(row.indoor_model),
    heatingCapacity5FBtuH: asRange(row.heating_capacity_5f_btu_h_min, row.heating_capacity_5f_btu_h_max),
    cop5F: asRange(row.cop_5f_min, row.cop_5f_max),
    seer2: asRange(row.seer2_min, row.seer2_max),
    hspf2: asRange(row.hspf2_min, row.hspf2_max),
    ahriReferenceCount: number(row.ahri_reference_count) ?? 0,
  };
}

function addModelRows(
  products: Map<string, CatalogProduct>,
  rows: RawRow[],
  systemType: CatalogProduct["systemType"],
  selectionYear: number,
) {
  let selected = 0;
  for (const row of rows) {
    if (yearOf(row.last_market_date) !== selectionYear) continue;
    selected += 1;
    const brand = text(row.brand);
    const series = text(row.series);
    const outdoorModel = text(row.outdoor_model);
    if (!brand || !outdoorModel) continue;
    const commercialKey = [normalize(brand), normalize(series), normalize(outdoorModel), systemType].join("|");
    const pairing = pairingFromRow(row);
    const existing = products.get(commercialKey);
    if (existing) {
      existing.pairings.push(pairing);
      existing.heatingCapacity5FBtuH = mergeRange(existing.heatingCapacity5FBtuH, pairing.heatingCapacity5FBtuH);
      existing.cop5F = mergeRange(existing.cop5F, pairing.cop5F);
      existing.seer2 = mergeRange(existing.seer2, pairing.seer2);
      existing.hspf2 = mergeRange(existing.hspf2, pairing.hspf2);
      existing.refrigerants = unique([...existing.refrigerants, ...splitValues(row.refrigerant_types)]);
      existing.compressorStaging = unique([...existing.compressorStaging, ...splitValues(row.compressor_staging)]);
      existing.connectedCapable = unique([...existing.connectedCapable, ...splitValues(row.connected_capable)]);
      continue;
    }

    products.set(commercialKey, {
      id: stableId(commercialKey),
      commercialKey,
      brand,
      series,
      systemType,
      outdoorModel,
      coldClimate: /^yes|oui|true|1$/i.test(text(row.cold_climate_any)),
      heatingCapacity5FBtuH: pairing.heatingCapacity5FBtuH,
      cop5F: pairing.cop5F,
      seer2: pairing.seer2,
      hspf2: pairing.hspf2,
      refrigerants: splitValues(row.refrigerant_types),
      compressorStaging: splitValues(row.compressor_staging),
      connectedCapable: splitValues(row.connected_capable),
      firstMarketDate: text(row.first_market_date),
      lastMarketDate: text(row.last_market_date),
      selectionYear,
      sourceUrl: text(row.source_url),
      pairings: [pairing],
      warranties: [],
      zoneCompatibility: "unknown",
    });
  }
  return selected;
}

export async function importThermoCatalogFromExcel(
  workbookPath: string,
  selectionYear = 2026,
): Promise<ThermoCatalog> {
  let centralSheet: unknown[][];
  let ductlessSheet: unknown[][];
  try {
    centralSheet = await readSheet(workbookPath, "Modeles_centraux") as unknown[][];
    ductlessSheet = await readSheet(workbookPath, "Modeles_mini_multizone") as unknown[][];
  } catch (error) {
    throw new Error("Le classeur doit contenir Modeles_centraux et Modeles_mini_multizone.", { cause: error });
  }

  const centralRows = rowsFromSheet(centralSheet, 1);
  const ductlessRows = rowsFromSheet(ductlessSheet, 1);
  const warrantySheet = await readSheet(workbookPath, "Garanties") as unknown[][];
  const enrichmentSheet = await readSheet(workbookPath, "Enrichissement_manuel") as unknown[][];
  const warranties = parseWarranties(rowsFromSheet(warrantySheet, 3));
  const enrichmentRules = parseEnrichment(rowsFromSheet(enrichmentSheet, 3));

  const byKey = new Map<string, CatalogProduct>();
  const selectedCentral = addModelRows(byKey, centralRows, "central", selectionYear);
  const selectedDuctless = addModelRows(byKey, ductlessRows, "ductless", selectionYear);
  const products = [...byKey.values()];
  for (const product of products) {
    product.pairings.sort((a, b) => a.indoorModel.localeCompare(b.indoorModel));
    product.warranties = warranties.get(normalize(product.brand)) ?? [];
    product.enrichment = findEnrichment(product, enrichmentRules);
    if (product.systemType === "ductless" && product.enrichment?.maxZones) product.zoneCompatibility = "multi";
  }
  products.sort((a, b) => a.commercialKey.localeCompare(b.commercialKey));

  return {
    manifest: {
      schemaVersion: "thermomatch-catalog-1",
      selectionYear,
      selectionRule: "last_market_date_year",
      sourceWorkbook: path.basename(workbookPath),
      importedAt: new Date().toISOString(),
      sourceRows: centralRows.length + ductlessRows.length,
      selectedPairingRows: selectedCentral + selectedDuctless,
      productCount: products.length,
      brandCount: new Set(products.map((product) => normalize(product.brand))).size,
      warnings: [
        `Sélection stricte : last_market_date doit être en ${selectionYear}.`,
        "La présence dans le classeur ENERGY STAR ne remplace pas une confirmation d’inventaire chez le distributeur.",
        "Les limites de zones, températures et garanties restent inconnues quand aucune donnée manuelle vérifiée ne correspond.",
      ],
    },
    products,
  };
}

function cliArg(name: string): string | undefined {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : undefined;
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(new URL(import.meta.url).pathname.replace(/^\/(.:)/, "$1"))) {
  const input = cliArg("--input");
  const output = cliArg("--output") ?? "data/catalog-2026.json";
  const year = Number(cliArg("--year") ?? 2026);
  if (!input) throw new Error("Usage: npm run catalog:import -- --input fichier.xlsx --year 2026 --output data/catalog-2026.json");
  const catalog = await importThermoCatalogFromExcel(input, year);
  await fs.mkdir(path.dirname(output), { recursive: true });
  await fs.writeFile(output, JSON.stringify(catalog));
  console.log(JSON.stringify(catalog.manifest, null, 2));
}
