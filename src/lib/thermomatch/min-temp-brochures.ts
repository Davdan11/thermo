/* ==================================================================
   Température extérieure minimale de chauffage relevée dans les
   brochures et fiches techniques des fabricants (PDF du dépôt).

   Données : src/lib/data/min-heating-temps.json — une ligne par unité
   extérieure, avec la source (PDF du dépôt, ou adresse https d'un document
   ou d'une page officielle du fabricant), la page et la citation exacte.
   Aucune valeur n'est déduite : seuls les chiffres imprimés dans le
   document sont retenus (°F convertis en °C, arrondis à l'entier).

   Sources « secondaires » (champ sourceType) : un distributeur ou un
   détaillant qui reproduit la fiche du fabricant pour ce numéro exact.
   Elles ne servent que si aucune source officielle ne vise la machine,
   et l'affichage le dit (« Selon la fiche technique du fabricant,
   reproduite par un distributeur »).

   Résolveur unique : resolveMinHeatingTemp (catalogue d'abord, puis la
   table). Serveur seulement : il embarque la table ; les composants
   client reçoivent la valeur résolue (voir min-temp-source.ts).
   ================================================================== */
import rawEntries from "@/lib/data/min-heating-temps.json";
import type { MinTempSourceType, ResolvedMinHeatingTemp } from "./min-temp-source";

export interface MinHeatingTempEntry {
  outdoorModel: string;
  brand: string;
  series?: string;
  minHeatingTempC: number;
  sourceFile: string;
  page?: number;
  quote: string;
  /** Relevé web (2026-09-14) : « modele » si le document nomme ce numéro, « serie » s'il ne vise que la série. */
  confidence?: "modele" | "serie";
  note?: string;
  /** Absent = « officiel ». « secondaire » : distributeur ou détaillant qui reproduit la fiche du fabricant (note et confidence exigées). */
  sourceType?: MinTempSourceType;
}

const ENTRIES = rawEntries as MinHeatingTempEntry[];

/** Nature de la source d'une ligne : absente = « officiel ». */
export const sourceTypeOf = (entry: Pick<MinHeatingTempEntry, "sourceType">): MinTempSourceType => entry.sourceType ?? "officiel";

/** Longueur minimale (caractères utiles) pour accepter un numéro identique vendu sous une autre marque. */
const MIN_LENGTH_ANY_BRAND = 8;

/**
 * Numéro de modèle normalisé : majuscules, sans espaces ni tirets ni parenthèses,
 * « * » conservé comme joker. Ce qui suit un « + » (accessoire, ex. « +TIC2025-0016 ») est ignoré.
 */
export function normalizeModelNumber(value: string | null | undefined): string {
  if (!value) return "";
  return value.split("+")[0].toUpperCase().replace(/[^A-Z0-9*]/g, "");
}

/** Marque normalisée : minuscules, sans accents ni ponctuation (« Mitsubishi Electric » → « mitsubishielectric »). */
export function normalizeBrand(value: string | null | undefined): string {
  if (!value) return "";
  return value.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");
}

/** Numéro sans jokers. */
const literal = (normalized: string) => normalized.replace(/\*/g, "");
/** Un « * » vaut zéro ou un caractère (convention des tables du registre : « 4HP17L42P-**A », « MSHEA09C2AN* »). */
const toPattern = (normalized: string) => new RegExp(`^${normalized.replace(/\*/g, "[A-Z0-9]?")}$`);

/* ---- Index précalculés au chargement du module ---- */
const BY_LITERAL = new Map<string, MinHeatingTempEntry[]>();
const WILDCARD_ENTRIES: Array<{ pattern: RegExp; entry: MinHeatingTempEntry }> = [];
for (const entry of ENTRIES) {
  const n = normalizeModelNumber(entry.outdoorModel);
  if (!n) continue;
  const key = literal(n);
  const list = BY_LITERAL.get(key);
  if (list) list.push(entry);
  else BY_LITERAL.set(key, [entry]);
  if (n.includes("*")) WILDCARD_ENTRIES.push({ pattern: toPattern(n), entry });
}
const LOOKUP_CACHE = new Map<string, MinHeatingTempEntry[]>();

function entriesForModel(outdoorModel: string | null | undefined): MinHeatingTempEntry[] {
  const n = normalizeModelNumber(outdoorModel);
  const key = literal(n);
  if (key.length < 4) return [];
  const cached = LOOKUP_CACHE.get(n);
  if (cached) return cached;

  let found = BY_LITERAL.get(key) ?? [];
  if (found.length === 0) {
    const hits = new Set<MinHeatingTempEntry>();
    // Joker côté brochure (« DH7VSA2410A* »)
    for (const { pattern, entry } of WILDCARD_ENTRIES) if (pattern.test(key)) hits.add(entry);
    // Joker côté registre (« MSHEA09C2AN* », « 4HP17L42P-**A »)
    if (n.includes("*")) {
      const pattern = toPattern(n);
      for (const [k, list] of BY_LITERAL) if (pattern.test(k)) for (const e of list) hits.add(e);
    }
    found = [...hits];
  }
  LOOKUP_CACHE.set(n, found);
  return found;
}

/** Ligne de brochure retenue pour cette unité extérieure (source et citation), ou null. */
export function minHeatingTempEntryFromBrochures(input: {
  outdoorModel?: string | null;
  brand?: string | null;
}): MinHeatingTempEntry | null {
  const candidates = entriesForModel(input.outdoorModel);
  if (candidates.length === 0) return null;

  let pool = candidates;
  const brand = normalizeBrand(input.brand);
  if (brand) {
    const sameBrand = candidates.filter((e) => normalizeBrand(e.brand) === brand);
    if (sameBrand.length > 0) pool = sameBrand;
    // Même numéro sous une autre marque (machine rebadgée) : accepté seulement pour un numéro long, peu ambigu.
    else if (literal(normalizeModelNumber(input.outdoorModel)).length < MIN_LENGTH_ANY_BRAND) return null;
  }

  // Une source officielle prime : une reproduction par un distributeur ne sert qu'à défaut.
  const official = pool.filter((e) => sourceTypeOf(e) === "officiel");
  if (official.length > 0) pool = official;

  // Deux documents en désaccord : on ne tranche pas.
  const values = new Set(pool.map((e) => e.minHeatingTempC));
  return values.size === 1 ? pool[0] : null;
}

/**
 * Température extérieure minimale de chauffage (°C) publiée par le fabricant pour cette unité extérieure,
 * ou null si aucune brochure du dépôt ne l'imprime.
 */
export function minHeatingTempFromBrochures(input: {
  outdoorModel?: string | null;
  brand?: string | null;
}): number | null {
  return minHeatingTempEntryFromBrochures(input)?.minHeatingTempC ?? null;
}

/**
 * Résolveur unique de la température minimale de chauffage d'une machine (fiche produit, comparateur,
 * ThermoMatch, courriels, données structurées) :
 * 1. la valeur du catalogue (configuration du registre), source officielle ;
 * 2. sinon, la ligne de min-heating-temps.json retenue pour ce numéro et cette marque ;
 * 3. sinon null — jamais de valeur déduite.
 */
export function resolveMinHeatingTemp(input: {
  /** configuration.minHeatingTempC (ou la plus basse des configurations du modèle). */
  catalogC?: number | null;
  outdoorModel?: string | null;
  brand?: string | null;
}): ResolvedMinHeatingTemp | null {
  const catalogC = input.catalogC;
  if (typeof catalogC === "number" && Number.isFinite(catalogC)) {
    return { valueC: catalogC, sourceType: "officiel", origin: "catalogue", sourceFile: null, page: null, quote: null, confidence: null };
  }
  const entry = minHeatingTempEntryFromBrochures({ outdoorModel: input.outdoorModel, brand: input.brand });
  if (!entry) return null;
  return {
    valueC: entry.minHeatingTempC,
    sourceType: sourceTypeOf(entry),
    origin: "document",
    sourceFile: entry.sourceFile,
    page: entry.page ?? null,
    quote: entry.quote,
    confidence: entry.confidence ?? null,
  };
}
