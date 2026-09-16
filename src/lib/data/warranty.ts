/* ==================================================================
   Garanties du fabricant — relevés sourcés

   Règle : on n'affiche une durée que si elle vient d'un document du
   fabricant, relevé dans `warranties-sourced.json` avec sa citation et
   son adresse. Aucune valeur par défaut, aucune moyenne, aucun repli :
   sans relevé, `resolveWarranty` retourne null et la page dit que la
   garantie n'est pas vérifiée.

   Correspondance entre une fiche et un relevé, du plus précis au plus
   large (le premier niveau qui répond gagne) :

   1. « modele »  — le relevé nomme ce numéro exact (`models`).
   2. numéro      — le numéro de la fiche commence par un préfixe du
                    relevé (`modelPrefixes`) ou correspond à un motif
                    (`modelPatterns`, où « * » remplace n'importe quelle
                    suite de caractères). Le certificat vise une famille
                    de numéros : « BMS500…D », « DIRM-…DA25-… ».
                    Entre deux relevés, celui dont la partie fixe est la
                    plus longue gagne (« 27VNA0 » avant « 27VNA »).
   3. série       — le nom de série de la fiche, normalisé (sans
                    accents, sans « série », sans ponctuation), figure
                    dans `seriesNames`.
   4. « marque »  — un relevé de marque sans aucune clé de numéro ni de
                    série couvre toutes les fiches de la marque.

   `exceptModels` et `exceptSeries` retirent une fiche d'un relevé (le
   certificat Daikin des Cirra multizones exclut le 2MX18AXVJU, qui a
   son propre certificat à 10 ans).

   À égalité de niveau et de précision, on garde la garantie la plus
   prudente : la durée des pièces la plus courte, puis celle du
   compresseur. Deux documents qui se contredisent ne font jamais
   gagner le plus généreux.
   ================================================================== */

import sourced from "./warranties-sourced.json";

/* ------------------------------------------------------------------
   Types
   ------------------------------------------------------------------ */

/** Durées d'un relevé quand l'appareil n'est pas enregistré auprès du fabricant. */
export interface WarrantyWithoutRegistration {
  partsYears?: number | null;
  compressorYears?: number | null;
}

export interface WarrantyRecord {
  /** Nom de marque du catalogue (« Mitsubishi Electric », « Direct AIR »). */
  brand: string;
  /** Portée du document : un modèle, une série ou toute la marque. */
  scope: "modele" | "serie" | "marque";
  /** Libellé court de la portée, pour l'affichage. */
  label: string;
  /** Portée telle qu'elle est écrite dans le document, avec ses numéros. */
  scopeText: string | null;
  /** Numéros exacts visés (portée « modele »). */
  models?: string[];
  /** Le numéro de la fiche commence par l'un de ces préfixes. */
  modelPrefixes: string[];
  /** Motifs de numéro, « * » = n'importe quelle suite de caractères. */
  modelPatterns: string[];
  /** Numéros que ce relevé ne couvre pas. */
  exceptModels: string[];
  /** Noms de série du catalogue couverts par ce relevé. */
  seriesNames: string[];
  /** Séries que ce relevé ne couvre pas. */
  exceptSeries: string[];
  partsYears: number;
  compressorYears: number | null;
  /** 0 = le document dit que la main-d'œuvre n'est pas couverte ; null = inconnu. */
  laborYears: number | null;
  registrationRequired: boolean;
  registrationDays: number | null;
  withoutRegistration: WarrantyWithoutRegistration | null;
  /** Le document dit que l'enregistrement n'est pas exigé au Québec. */
  quebecNoRegistration: boolean;
  conditions: string | null;
  /** Pays visé par le document. */
  country: "CA" | "US";
  sourceFile: string;
  page: number | null;
  quote: string;
  /** « secondaire » : document reproduit par un distributeur ou hébergé hors du site du fabricant. */
  sourceType: "officiel" | "secondaire";
  note: string | null;
}

/** Niveau auquel le relevé a été rattaché à la fiche. */
export type WarrantyMatch = "modele" | "numero" | "serie" | "marque";

export interface ResolvedWarranty {
  record: WarrantyRecord;
  matchedBy: WarrantyMatch;
}

/** Fiche à résoudre : marque, série affichée et numéro de l'unité extérieure. */
export interface WarrantyLookup {
  brand: string;
  seriesName?: string | null;
  modelNumber: string;
}

/* Le JSON est une table de données, pas un type : on le lit sous la forme déclarée ici. */
export const WARRANTY_RECORDS = sourced as unknown as WarrantyRecord[];

/* ------------------------------------------------------------------
   Normalisation
   ------------------------------------------------------------------ */

/** Numéro de modèle comparable : majuscules, sans tiret, barre oblique ni parenthèse. */
export function normalizeModelNumber(value: string | null | undefined): string {
  return String(value ?? "").toUpperCase().replace(/[^A-Z0-9]/g, "");
}

/** Nom de série comparable : minuscules, sans accent, sans « série », sans ponctuation. */
export function normalizeSeriesName(value: string | null | undefined): string {
  return String(value ?? "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/\b(serie|series)\b/g, " ")
    .replace(/[^a-z0-9]/g, "");
}

/* ------------------------------------------------------------------
   Index par marque
   ------------------------------------------------------------------ */

let byBrand: Map<string, WarrantyRecord[]> | null = null;

function recordsForBrand(brand: string): WarrantyRecord[] {
  if (!byBrand) {
    byBrand = new Map();
    for (const r of WARRANTY_RECORDS) {
      const key = normalizeSeriesName(r.brand);
      const list = byBrand.get(key);
      if (list) list.push(r);
      else byBrand.set(key, [r]);
    }
  }
  return byBrand.get(normalizeSeriesName(brand)) ?? [];
}

/** Un relevé sans aucune clé de numéro ni de série couvre toute la marque. */
function hasNoKey(r: WarrantyRecord): boolean {
  return !(r.models?.length || r.modelPrefixes.length || r.modelPatterns.length || r.seriesNames.length);
}

function patternMatches(pattern: string, num: string): boolean {
  const source = pattern.split("*").map((chunk) => normalizeModelNumber(chunk)).join("[A-Z0-9]*");
  return new RegExp(`^${source}$`).test(num);
}

const LEVELS: Record<WarrantyMatch, number> = { modele: 1, numero: 2, serie: 3, marque: 4 };

interface Candidate {
  record: WarrantyRecord;
  matchedBy: WarrantyMatch;
  /** Nombre de caractères fixes de la clé : départage deux préfixes qui visent la même fiche. */
  precision: number;
}

function candidateFor(r: WarrantyRecord, lookup: WarrantyLookup): Candidate | null {
  const num = normalizeModelNumber(lookup.modelNumber);
  const serie = normalizeSeriesName(lookup.seriesName);
  if (!num && !serie) return null;

  if (num && r.exceptModels.some((m) => normalizeModelNumber(m) === num)) return null;
  if (serie && r.exceptSeries.some((s) => normalizeSeriesName(s) === serie)) return null;

  if (num && r.models?.some((m) => normalizeModelNumber(m) === num)) {
    return { record: r, matchedBy: "modele", precision: num.length };
  }

  let precision: number | null = null;
  if (num) {
    for (const p of r.modelPrefixes) {
      const np = normalizeModelNumber(p);
      if (np.length >= 2 && num.startsWith(np)) precision = Math.max(precision ?? 0, np.length);
    }
    for (const p of r.modelPatterns) {
      if (patternMatches(p, num)) precision = Math.max(precision ?? 0, normalizeModelNumber(p).length);
    }
  }
  if (precision != null) return { record: r, matchedBy: "numero", precision };

  if (serie && r.seriesNames.some((s) => normalizeSeriesName(s) === serie)) {
    return { record: r, matchedBy: "serie", precision: serie.length };
  }

  if (r.scope === "marque" && hasNoKey(r)) return { record: r, matchedBy: "marque", precision: 0 };
  return null;
}

/** La plus prudente de deux garanties : pièces les plus courtes, puis compresseur. */
function plusPrudente(a: WarrantyRecord, b: WarrantyRecord): number {
  return a.partsYears - b.partsYears || (a.compressorYears ?? Number.MAX_SAFE_INTEGER) - (b.compressorYears ?? Number.MAX_SAFE_INTEGER);
}

/**
 * Garantie relevée pour une fiche, ou null si aucun document ne la couvre.
 * Ne jamais remplacer ce null par une valeur par défaut : la page doit dire qu'elle ne sait pas.
 */
export function resolveWarranty(lookup: WarrantyLookup): ResolvedWarranty | null {
  const candidates: Candidate[] = [];
  for (const r of recordsForBrand(lookup.brand)) {
    const c = candidateFor(r, lookup);
    if (c) candidates.push(c);
  }
  if (candidates.length === 0) return null;

  const level = Math.min(...candidates.map((c) => LEVELS[c.matchedBy]));
  let best = candidates.filter((c) => LEVELS[c.matchedBy] === level);
  const precision = Math.max(...best.map((c) => c.precision));
  best = best.filter((c) => c.precision === precision);
  best.sort((a, b) => plusPrudente(a.record, b.record));
  return { record: best[0].record, matchedBy: best[0].matchedBy };
}

/* ------------------------------------------------------------------
   Affichage — mêmes phrases partout (fiche, cartes, comparateur)
   ------------------------------------------------------------------ */

/** Phrase affichée quand aucun document ne couvre la fiche. */
export const WARRANTY_UNVERIFIED = "Garantie non vérifiée par nous : voir le certificat du fabricant";
/** Version courte, pour une carte ou une cellule de tableau. */
export const WARRANTY_UNVERIFIED_SHORT = "Non vérifiée";

const years = (n: number): string => `${n} ${n > 1 ? "ans" : "an"}`;

/** Libellé court d'une carte de catalogue : « 10 ans pièces · 10 ans compresseur ». */
export function warrantyShortLabel(resolved: ResolvedWarranty | null): string {
  if (!resolved) return WARRANTY_UNVERIFIED_SHORT;
  const { partsYears, compressorYears } = resolved.record;
  if (compressorYears == null) return `${years(partsYears)} pièces`;
  if (compressorYears === partsYears) return `${years(partsYears)} pièces et compresseur`;
  return `${years(partsYears)} pièces · ${years(compressorYears)} compresseur`;
}

/** Ce que le document dit de l'enregistrement, ou null s'il n'en parle pas. */
export function warrantyRegistrationLabel(r: WarrantyRecord): string | null {
  if (!r.registrationRequired) return null;
  return r.registrationDays != null
    ? `Enregistrement exigé dans les ${r.registrationDays} jours`
    : "Enregistrement exigé";
}

/** Durées sans enregistrement, ou null si le document n'en donne pas. */
export function warrantyWithoutRegistrationLabel(r: WarrantyRecord): string | null {
  const w = r.withoutRegistration;
  if (!w) return null;
  const bouts: string[] = [];
  if (w.partsYears != null) bouts.push(`${years(w.partsYears)} pièces`);
  if (w.compressorYears != null) bouts.push(`${years(w.compressorYears)} compresseur`);
  return bouts.length ? `Sans enregistrement : ${bouts.join(" · ")}` : null;
}

/** Clause du Québec, affichée seulement quand le document la nomme. */
export function warrantyQuebecLabel(r: WarrantyRecord): string | null {
  if (!r.quebecNoRegistration) return null;
  return "Au Québec, le document dit que l'enregistrement n'est pas exigé.";
}

/** Main-d'œuvre : le document la couvre, l'exclut, ou n'en dit rien. */
export function warrantyLaborLabel(r: WarrantyRecord): string | null {
  if (r.laborYears == null) return null;
  return r.laborYears === 0 ? "Main-d'œuvre non couverte" : `Main-d'œuvre : ${years(r.laborYears)}`;
}

/** D'où vient la durée : document officiel, ou copie d'un distributeur. */
export function warrantySourceLabel(r: WarrantyRecord): string {
  const pays = r.country === "US" ? "document américain" : "document canadien";
  const page = r.page != null ? `, p. ${r.page}` : "";
  return r.sourceType === "secondaire"
    ? `Garantie reproduite par un distributeur (${pays}${page})`
    : `Document du fabricant (${pays}${page})`;
}

/** Comment le relevé a été rattaché à la fiche, en clair. */
export function warrantyMatchLabel(resolved: ResolvedWarranty): string {
  switch (resolved.matchedBy) {
    case "modele":
      return "Document qui nomme ce numéro de modèle";
    case "numero":
      return `Document qui vise cette famille de numéros (${resolved.record.label})`;
    case "serie":
      return `Document qui vise la série ${resolved.record.label}`;
    case "marque":
      return `Document qui vise toute la marque ${resolved.record.brand}`;
  }
}
