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


/* ------------------------------------------------------------------
   Index normalisé (numéro extérieur → AHRI[]) et clés triées, construits
   une seule fois à la première recherche. Avant, chaque recherche qui
   ratait l'index balayait les 176 000 entrées avec une regex : plusieurs
   secondes par page dès qu'on affichait tout le catalogue.
   ------------------------------------------------------------------ */
const normalizeModel = (v: string) => v.toLowerCase().replace(/[^a-z0-9]/g, "");
let normIndex: { map: Map<string, string[]>; keys: string[] } | null = null;
function getNormIndex() {
  if (normIndex) return normIndex;
  const map = new Map<string, string[]>();
  for (const ahri in data) {
    if (!Object.prototype.hasOwnProperty.call(data, ahri)) continue;
    const key = normalizeModel(((data[ahri] as Record<string, unknown>).m as string) || "");
    if (!key) continue;
    const list = map.get(key);
    if (list) list.push(ahri);
    else map.set(key, [ahri]);
  }
  normIndex = { map, keys: [...map.keys()].sort() };
  return normIndex;
}
/** Première position de `keys` dont la valeur est ≥ `needle` (recherche binaire). */
function lowerBound(keys: string[], needle: string): number {
  let lo = 0, hi = keys.length;
  while (lo < hi) { const mid = (lo + hi) >> 1; if (keys[mid] < needle) lo = mid + 1; else hi = mid; }
  return lo;
}
/**
 * Numéros d'entrée qui correspondent à `norm` : exact, ou l'un est le préfixe de l'autre
 * (les fixtures manuelles donnent parfois un numéro tronqué ou une variante).
 * Exact d'abord, puis les plus longs préfixes.
 */
function candidateKeys(norm: string): string[] {
  const { map, keys } = getNormIndex();
  const out: string[] = [];
  if (map.has(norm)) out.push(norm);
  // Entrées dont le numéro commence par `norm`
  for (let i = lowerBound(keys, norm); i < keys.length && keys[i].startsWith(norm); i++) if (keys[i] !== norm) out.push(keys[i]);
  // Entrées qui sont un préfixe de `norm` (au moins 4 caractères pour éviter les faux amis)
  for (let len = norm.length - 1; len >= 4; len--) { const k = norm.slice(0, len); if (map.has(k)) out.push(k); }
  return out;
}

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
  const key = normalizeModel(outdoorModel);
  if (!key) return null;
  const { map } = getNormIndex();
  let best: LogisVertOfficialEntry | null = null;
  for (const k of candidateKeys(key)) {
    for (const ahri of map.get(k) ?? []) {
      const e = toEntry(ahri, data[ahri]);
      if (!best || e.logisVertDollars > best.logisVertDollars) best = e;
    }
    if (best && k === key) break; // une correspondance exacte prime sur les préfixes
  }
  return best;
}

/**
 * Fuzzy lookup — tries multiple variations.
 */
export function lookupLogisVertFuzzy(modelNumber: string, brand?: string): LogisVertOfficialEntry | null {
  const exact = lookupLogisVert(modelNumber);
  if (exact) return exact;
  const norm = normalizeModel(modelNumber);
  if (!norm) return null;
  const { map } = getNormIndex();
  const brandLc = brand?.toLowerCase();
  for (const k of candidateKeys(norm)) {
    for (const ahri of map.get(k) ?? []) {
      const e = data[ahri] as Record<string, unknown>;
      if (brandLc && !((e.b as string) || "").toLowerCase().includes(brandLc)) continue;
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

/* ------------------------------------------------------------------
   Statistiques de la liste officielle (section des aides de l'accueil) :
   montant le plus élevé, médiane, part des jumelages par tranche de
   montant, nombre de jumelages et dates tirées des métadonnées.
   ------------------------------------------------------------------ */
export interface LogisVertStats {
  count: number;
  max: number;
  median: number;
  buckets: Array<{ label: string; share: number }>;
  listDate: string | null;
  checkedDate: string | null;
}

let statsCache: LogisVertStats | null = null;

export function getLogisVertStats(): LogisVertStats {
  if (statsCache) return statsCache;
  const entries = Object.keys(data).map((ahri) => toEntry(ahri, data[ahri] as Record<string, unknown>));
  // Ligne mal découpée du CSV d'Hydro-Québec (guillemet parasite dans un champ texte) : colonnes décalées,
  // montant impossible (ex. 39 000 $). On l'écarte des statistiques.
  const clean = (e: LogisVertOfficialEntry) => ![e.brand, e.outdoorModel, e.indoorModel].some((t) => typeof t === "string" && t.includes('"'));
  const amounts = entries
    .filter(clean)
    .map((e) => e?.logisVertDollars)
    .filter((n): n is number => typeof n === "number" && n > 0)
    .sort((a, b) => a - b);
  const total = amounts.length || 1;
  const share = (lo: number, hi: number) => amounts.filter((n) => n >= lo && n < hi).length / total;
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const meta = require("./logisvert-metadata.json") as { updatedAt?: string; sourceFile?: string; count?: number };
  const dm = String(meta.sourceFile ?? "").match(/(\d{2})-(\d{2})-(\d{4})/);
  const frDate = (d: Date, timeZone: string) => d.toLocaleDateString("fr-CA", { day: "numeric", month: "long", year: "numeric", timeZone });
  statsCache = {
    count: typeof meta.count === "number" ? meta.count : amounts.length,
    max: amounts[amounts.length - 1] ?? 0,
    median: amounts.length ? amounts[Math.floor(amounts.length / 2)] : 0,
    buckets: [
      { label: "Moins de 1 000 $", share: share(0, 1000) },
      { label: "1 000 à 2 999 $", share: share(1000, 3000) },
      { label: "3 000 à 4 999 $", share: share(3000, 5000) },
      { label: "5 000 $ et plus", share: share(5000, Infinity) },
    ],
    listDate: dm ? frDate(new Date(Date.UTC(+dm[3], +dm[2] - 1, +dm[1], 12)), "UTC") : null,
    checkedDate: meta.updatedAt ? frDate(new Date(meta.updatedAt), "America/Toronto") : null,
  };
  return statsCache;
}
