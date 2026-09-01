/* ==================================================================
   LogisVert Official Amounts — Real data from government AHRI database
   
   Source: thermopompes_quebec_canada_2011_2026.xlsx
   (ENERGY STAR Certified Heat Pumps — NRCan / EPA)
   
   The amounts are calculated using the OFFICIAL LogisVert formula:
   - Cold Climate:    120 $ per 1,000 BTU/h at -8°C (17°F)
   - ENERGY STAR:      50 $ per 1,000 BTU/h at -8°C (17°F)
   - Maximum cap:   6,700 $
   
   Using CERTIFIED heating capacity at -8°C from AHRI data.
   ================================================================== */

import officialData from "./logisvert-official-amounts.json";

/**
 * Entry from the official LogisVert amounts database.
 */
export interface LogisVertOfficialEntry {
  /** Brand name */
  brand: string;
  /** Outdoor model number */
  outdoorModel: string;
  /** LogisVert subsidy amount in $ */
  logisVertDollars: number;
  /** Certified heating capacity at -8°C (17°F) in BTU/h */
  heatingBtu17F: number;
  /** Certified heating capacity at -15°C (5°F) in BTU/h */
  heatingBtu5F: number;
  /** Cooling capacity in BTU/h */
  coolingBtu: number;
  /** Whether cold-climate certified */
  coldClimate: boolean;
  /** System type: "C" = central, "M" = mini/multi */
  systemType: "C" | "M";
  /** HSPF2 rating */
  hspf2: number;
}

const data = officialData as Record<string, {
  b: string; m: string; a: number; h: number; h5: number;
  c: number; cc: boolean; t: string; p: number;
}>;

/**
 * Look up the official LogisVert amount for an outdoor model number.
 * Returns null if the model is not found in the database.
 */
export function lookupLogisVert(outdoorModel: string): LogisVertOfficialEntry | null {
  const key = outdoorModel.toLowerCase().replace(/[^a-z0-9]/g, "");
  const entry = data[key];
  if (!entry) return null;

  return {
    brand: entry.b,
    outdoorModel: entry.m,
    logisVertDollars: entry.a,
    heatingBtu17F: entry.h,
    heatingBtu5F: entry.h5,
    coolingBtu: entry.c,
    coldClimate: entry.cc,
    systemType: entry.t as "C" | "M",
    hspf2: entry.p,
  };
}

/**
 * Look up LogisVert by trying multiple model number variations.
 * Useful when the exact model format may vary (wildcards, suffixes, etc.)
 */
export function lookupLogisVertFuzzy(modelNumber: string, brand?: string): LogisVertOfficialEntry | null {
  // Try exact match first
  const exact = lookupLogisVert(modelNumber);
  if (exact) return exact;

  // Normalize and try
  const norm = modelNumber.toLowerCase().replace(/[^a-z0-9]/g, "");
  
  // Try partial match — find entries that start with the normalized model
  for (const [key, entry] of Object.entries(data)) {
    if (key.startsWith(norm) || norm.startsWith(key)) {
      // If brand filter provided, check it matches
      if (brand && !entry.b.toLowerCase().includes(brand.toLowerCase())) continue;
      return {
        brand: entry.b,
        outdoorModel: entry.m,
        logisVertDollars: entry.a,
        heatingBtu17F: entry.h,
        heatingBtu5F: entry.h5,
        coolingBtu: entry.c,
        coldClimate: entry.cc,
        systemType: entry.t as "C" | "M",
        hspf2: entry.p,
      };
    }
  }

  return null;
}

/**
 * Get all LogisVert entries for a brand.
 */
export function getLogisVertByBrand(brandName: string): LogisVertOfficialEntry[] {
  const norm = brandName.toLowerCase();
  const results: LogisVertOfficialEntry[] = [];

  for (const entry of Object.values(data)) {
    if (entry.b.toLowerCase() === norm) {
      results.push({
        brand: entry.b,
        outdoorModel: entry.m,
        logisVertDollars: entry.a,
        heatingBtu17F: entry.h,
        heatingBtu5F: entry.h5,
        coolingBtu: entry.c,
        coldClimate: entry.cc,
        systemType: entry.t as "C" | "M",
        hspf2: entry.p,
      });
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
 * Get total count of models in the official database.
 */
export function getOfficialModelCount(): number {
  return Object.keys(data).length;
}
