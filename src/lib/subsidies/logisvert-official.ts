/* ==================================================================
   LogisVert Official Amounts — REAL data from Hydro-Québec
   
   Source: hydroquebec.com CSV (updated regularly by HQ)
   Enriched with: ENERGY STAR API (series, SEER2, HSPF2, COP)
   
   The amounts are the OFFICIAL LogisVert subsidy values,
   NOT calculated — taken directly from HQ's published data.
   ================================================================== */

import { readFileSync } from "node:fs";
import { join } from "node:path";

// Chargé par fs plutôt qu'importé : un import TypeScript d'un JSON de 34 Mo fait
// exploser la mémoire du vérificateur de types et du lanceur de tests.
const officialData = JSON.parse(readFileSync(join(process.cwd(), "src/lib/subsidies/logisvert-official-amounts.json"), "utf8")) as Record<string, unknown>;

let modelIndex: Record<string, string[]> | null = null;
try {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  modelIndex = require("./logisvert-model-index.json");
} catch {
  modelIndex = null;
}

/**
 * Entry from the official LogisVert amounts database.
 */
export interface LogisVertOfficialEntry {
  /** AHRI reference number */
  ahri: string;
  /** Brand name */
  brand: string;
  /** Series name (from ENERGY STAR) */
  series?: string;
  /** Outdoor model number */
  outdoorModel: string;
  /** Indoor model number */
  indoorModel?: string;
  /** LogisVert subsidy amount in $ — REAL amount from HQ */
  logisVertDollars: number;
  /** Certified heating capacity at -8°C in BTU/h */
  heatingBtu17F: number;
  /** Certified heating capacity at -15°C (5°F) in BTU/h */
  heatingBtu5F?: number;
  /** Cooling capacity in BTU/h */
  coolingBtu?: number;
  /** Nominal heating capacity in BTU/h */
  nominalBtu?: number;
  /** Whether cold-climate certified */
  coldClimate: boolean;
  /** Whether high-efficiency (haut rendement) */
  highEfficiency: boolean;
  /** System type: "C" = central, "M" = mini/multi */
  systemType?: "C" | "M";
  /** SEER2 rating */
  seer2?: number;
  /** HSPF2 rating */
  hspf2?: number;
  /** COP at -15°C (5°F) */
  cop5?: number;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const data = officialData as Record<string, any>;

function toEntry(ahri: string, e: Record<string, unknown>): LogisVertOfficialEntry {
  return {
    ahri,
    brand: (e.b as string) || "",
    series: e.s as string | undefined,
    outdoorModel: (e.m as string) || "",
    indoorModel: e.im as string | undefined,
    logisVertDollars: (e.a as number) || 0,
    heatingBtu17F: (e.h17 as number) || 0,
    heatingBtu5F: e.h5 as number | undefined,
    coolingBtu: e.c as number | undefined,
    nominalBtu: e.hn as number | undefined,
    coldClimate: !!(e.cc ?? e.hr),
    highEfficiency: !!(e.hr),
    systemType: e.t as "C" | "M" | undefined,
    seer2: e.seer2 as number | undefined,
    hspf2: (e.hspf2 ?? e.p) as number | undefined,
    cop5: e.cop5 as number | undefined,
  };
}

/**
 * Look up by AHRI reference number — the most precise lookup.
 */
export function lookupByAHRI(ahriNumber: string): LogisVertOfficialEntry | null {
  const entry = data[ahriNumber];
  if (!entry) return null;
  return toEntry(ahriNumber, entry);
}

/**
 * Look up the official LogisVert amount for an outdoor model number.
 * Returns the BEST match (highest subsidy) if multiple AHRI entries exist.
 */
export function lookupLogisVert(outdoorModel: string): LogisVertOfficialEntry | null {
  const key = outdoorModel.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Try model index first (fast lookup)
  if (modelIndex && modelIndex[key]) {
    const ahriIds = modelIndex[key];
    let best: LogisVertOfficialEntry | null = null;
    for (const ahri of ahriIds) {
      const entry = data[ahri];
      if (entry) {
        const e = toEntry(ahri, entry);
        if (!best || e.logisVertDollars > best.logisVertDollars) best = e;
      }
    }
    if (best) return best;
  }

  // Fallback: scan all entries (for backward compat)
  let best: LogisVertOfficialEntry | null = null;
  for (const ahri in data) {
    if (!Object.prototype.hasOwnProperty.call(data, ahri)) continue;
    const entry = data[ahri] as Record<string, unknown>;
    const eModel = ((entry.m as string) || "").toLowerCase().replace(/[^a-z0-9]/g, "");
    if (eModel === key || eModel.startsWith(key) || key.startsWith(eModel)) {
      const e = toEntry(ahri, entry);
      if (!best || e.logisVertDollars > best.logisVertDollars) best = e;
    }
  }
  return best;
}

/**
 * Fuzzy lookup — tries multiple variations.
 */
export function lookupLogisVertFuzzy(modelNumber: string, brand?: string): LogisVertOfficialEntry | null {
  const exact = lookupLogisVert(modelNumber);
  if (exact) return exact;

  const norm = modelNumber.toLowerCase().replace(/[^a-z0-9]/g, "");

  for (const ahri in data) {
    if (!Object.prototype.hasOwnProperty.call(data, ahri)) continue;
    const e = data[ahri] as Record<string, unknown>;
    const eModel = ((e.m as string) || "").toLowerCase().replace(/[^a-z0-9]/g, "");
    if (eModel.startsWith(norm) || norm.startsWith(eModel)) {
      if (brand && !(e.b as string || "").toLowerCase().includes(brand.toLowerCase())) continue;
      return toEntry(ahri, e);
    }
  }

  return null;
}

/**
 * Search LogisVert by query string (brand, model, or series).
 */
export function searchLogisVert(query: string, limit = 20): LogisVertOfficialEntry[] {
  const q = query.toLowerCase().replace(/[^a-z0-9 ]/g, "").trim();
  if (!q) return [];

  const results: LogisVertOfficialEntry[] = [];
  const words = q.split(/\s+/);

  for (const ahri in data) {
    if (!Object.prototype.hasOwnProperty.call(data, ahri)) continue;
    const e = data[ahri] as Record<string, unknown>;
    const searchable = [
      (e.b as string) || "",
      (e.m as string) || "",
      (e.s as string) || "",
      (e.im as string) || "",
    ].join(" ").toLowerCase();

    if (words.every(w => searchable.includes(w))) {
      results.push(toEntry(ahri, e));
      if (results.length >= limit * 3) break; // gather more, then sort+trim
    }
  }

  return results
    .sort((a, b) => b.logisVertDollars - a.logisVertDollars)
    .slice(0, limit);
}

/**
 * Get all LogisVert entries for a brand.
 */
export function getLogisVertByBrand(brandName: string): LogisVertOfficialEntry[] {
  const norm = brandName.toLowerCase();
  const results: LogisVertOfficialEntry[] = [];

  for (const ahri in data) {
    if (!Object.prototype.hasOwnProperty.call(data, ahri)) continue;
    const e = data[ahri] as Record<string, unknown>;
    if (((e.b as string) || "").toLowerCase() === norm) {
      results.push(toEntry(ahri, e));
    }
  }

  return results.sort((a, b) => b.logisVertDollars - a.logisVertDollars);
}

/**
 * Get the maximum LogisVert amount across all models for a brand.
 */
export function getMaxLogisVertForBrand(brandName: string): number {
  const entries = getLogisVertByBrand(brandName);
  return entries.length > 0 ? entries[0].logisVertDollars : 0;
}

/**
 * Get all unique LogisVert entries for an outdoor model (different indoor combos).
 */
export function getLogisVertVariants(outdoorModel: string): LogisVertOfficialEntry[] {
  const key = outdoorModel.toLowerCase().replace(/[^a-z0-9]/g, "");
  const results: LogisVertOfficialEntry[] = [];

  // Use model index
  if (modelIndex && modelIndex[key]) {
    for (const ahri of modelIndex[key]) {
      const entry = data[ahri];
      if (entry) results.push(toEntry(ahri, entry as Record<string, unknown>));
    }
  }

  return results.sort((a, b) => b.logisVertDollars - a.logisVertDollars);
}

/**
 * Get total count of models in the official database.
 */
export function getOfficialModelCount(): number {
  return Object.keys(data).length;
}

/**
 * Get a range string like "1 032 $ – 1 920 $" for a model with variants.
 */
export function getLogisVertRange(outdoorModel: string): string | null {
  const variants = getLogisVertVariants(outdoorModel);
  if (variants.length === 0) return null;
  
  const amounts = variants.map(v => v.logisVertDollars);
  const min = Math.min(...amounts);
  const max = Math.max(...amounts);
  
  const fmt = (n: number) => n.toLocaleString("fr-CA") + " $";
  
  if (min === max) return fmt(max);
  return `${fmt(min)} – ${fmt(max)}`;
}
