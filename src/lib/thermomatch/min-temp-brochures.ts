/* ==================================================================
   Température extérieure minimale de chauffage relevée dans les
   brochures et fiches techniques des fabricants (PDF du dépôt).

   Données : src/lib/data/min-heating-temps.json — une ligne par unité
   extérieure, avec le fichier source, la page et la citation exacte.
   Aucune valeur n'est déduite : seuls les chiffres imprimés dans le
   document sont retenus (°F convertis en °C, arrondis à l'entier).
   ================================================================== */
import rawEntries from "@/lib/data/min-heating-temps.json";

export interface MinHeatingTempEntry {
  outdoorModel: string;
  brand: string;
  series?: string;
  minHeatingTempC: number;
  sourceFile: string;
  page?: number;
  quote: string;
}

const ENTRIES = rawEntries as MinHeatingTempEntry[];

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
