/* ==================================================================
   Montants LogisVert officiels — liste en vigueur d'Hydro-Québec

   Source : fichier quotidien des thermopompes certifiées ENERGY STAR que
   lit l'outil de recherche d'Hydro-Québec (propriétaire d'une habitation
   existante), produit par scripts/scrape-logisvert.mjs ; enrichi par
   ENERGY STAR (série, SEER2, HSPF2, COP) par numéro AHRI exact.

   Les montants sont ceux de la liste, jamais recalculés :
   - a   : « Subvention » (colonne TTG_AF_EffAlone) ;
   - bml : « Bonification – Multilogements » (TTG_Ext5 − TTG_AF_EffAlone),
           seulement pour les combinaisons admissibles à cette bonification.
   Une unité extérieure absente de la liste n'a aucun montant : rien n'est
   estimé à sa place.
   ================================================================== */

import { readFileSync } from "node:fs";
import { join } from "node:path";
import { getLogisVertListInfo } from "./logisvert-meta";
import { partagerTextes } from "../data/partager-textes";

// Lu sur le disque à l'exécution, jamais importé : un import d'un JSON de plus de 60 Mo fait exploser la mémoire du
// vérificateur de types, et resterait figé dans le code compilé. Le robot de nuit remplace ce fichier dans la version
// servie puis redémarre le serveur (scripts/publier-donnees.sh). Textes identiques partagés : 250 → 92 Mo en mémoire.
const officialData = partagerTextes(
  JSON.parse(readFileSync(join(process.cwd(), "src/lib/subsidies/logisvert-official-amounts.json"), "utf8")) as Record<string, unknown>,
);

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
  /** « Subvention » LogisVert en $ (TTG_AF_EffAlone), montant de la liste officielle */
  logisVertDollars: number;
  /**
   * « Bonification – Multilogements » en $ (TTG_Ext5 − TTG_AF_EffAlone), présente seulement si la combinaison y est
   * admissible. Elle s'ajoute à la subvention uniquement dans un multilogement admissible (zone de précarité
   * énergétique, construit en 1995 ou avant…) ; jamais pour une maison.
   */
  bonificationMultilogements?: number;
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
    bonificationMultilogements: typeof e.bml === "number" && e.bml > 0 ? e.bml : undefined,
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
 * Entrée LogisVert d'une fiche du catalogue : numéro de l'unité extérieure, sinon numéro du modèle.
 * Une fiche absente de la liste en vigueur (logisVertListed = false, voir scripts/build-catalogue.mjs)
 * n'a jamais de montant, même si la recherche approchée trouvait un numéro voisin.
 * Seul point d'entrée des pages pour le montant d'une fiche : aucune estimation en l'absence de montant.
 */
export function logisVertDeLaFiche(
  model: { modelNumber: string; logisVertListed?: boolean },
  brandName: string,
  outdoorModelNumber?: string | null,
): LogisVertOfficialEntry | null {
  if (model.logisVertListed === false) return null;
  return (outdoorModelNumber ? lookupLogisVertFuzzy(outdoorModelNumber, brandName) : null) ?? lookupLogisVertFuzzy(model.modelNumber, brandName);
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
  const key = normalizeModel(outdoorModel);
  const results: LogisVertOfficialEntry[] = [];

  // Index normalisé construit depuis la liste elle-même (même clé que logisvert-model-index.json, écrit pour les scripts).
  for (const ahri of getNormIndex().map.get(key) ?? []) {
    const entry = data[ahri];
    if (entry) results.push(toEntry(ahri, entry as Record<string, unknown>));
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
  const info = getLogisVertListInfo();
  statsCache = {
    count: info.count ?? amounts.length,
    max: amounts[amounts.length - 1] ?? 0,
    median: amounts.length ? amounts[Math.floor(amounts.length / 2)] : 0,
    buckets: [
      { label: "Moins de 1 000 $", share: share(0, 1000) },
      { label: "1 000 à 2 999 $", share: share(1000, 3000) },
      { label: "3 000 à 4 999 $", share: share(3000, 5000) },
      { label: "5 000 $ et plus", share: share(5000, Infinity) },
    ],
    listDate: info.listDate,
    checkedDate: info.checkedDate,
  };
  return statsCache;
}
