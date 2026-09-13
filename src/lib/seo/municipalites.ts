/* ==================================================================
   Municipalités du Québec : accès aux données (serveur seulement)

   Source : src/lib/seo/municipalites-data.json, produit par
   scripts/villes/build-municipalites.mjs puis scripts/villes/check-unicite.ts
   à partir de sources officielles (voir municipalites-data.md). Le fichier
   est lu sur disque au rendu : il n'est jamais envoyé au navigateur.

   Règle « pas de donnée, pas de page » : une municipalité a sa propre
   page si elle est admissible (recensement + station à 50 km ou moins)
   et si son texte se distingue assez de celui de ses voisines
   (page === true). Sinon, elle est nommée, avec ses chiffres, sur la
   page de sa MRC.
   ================================================================== */
import { existsSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";

export interface MuniStation {
  /** Clé du jeu : ID climatologique, suivi de « @1981-2010 » pour une station de repli. */
  key: string;
  id: string;
  name: string;
  memberName: string;
  lat: number;
  lon: number;
  elevationM: number | null;
  period: "1991-2020" | "1981-2010";
  hdd18: number | null;
  janMeanC: number | null;
  janMinC: number | null;
  extremeMinC: number | null;
  extremeMinYear: number | null;
  annualMeanC: number | null;
  daysBelowMinus20: number | null;
  qualityCode: string | null;
  url: string;
}

export interface MuniCensus {
  csd: string;
  population2021: number | null;
  dwellings2021: number | null;
  periodTotal: number | null;
  builtTo1980: number | null;
  builtTo1980Pct: number | null;
  /** Logements par période de construction (1960 ou avant … 2016 à 2021), données-échantillon 25 %. */
  periods?: Array<number | null>;
  typeTotal?: number | null;
  singleDetached?: number | null;
  /** Maisons individuelles non attenantes ÷ total selon le type de construction (données intégrales), %. */
  singleDetachedPct?: number | null;
  tenureTotal?: number | null;
  owners?: number | null;
  /** Ménages propriétaires ÷ total selon le mode d'occupation (données-échantillon 25 %), %. */
  ownerPct?: number | null;
  quality: string;
  url: string;
}

export const PERIOD_LABELS = ["1960 ou avant", "1961 à 1980", "1981 à 1990", "1991 à 2000", "2001 à 2005", "2006 à 2010", "2011 à 2015", "2016 à 2021"];

export interface Municipality {
  code: string;
  slug: string;
  name: string;
  mamhName?: string;
  designation: string;
  dcode: string;
  region: string | null;
  group: string | null;
  lat: number | null;
  lon: number | null;
  postal: string | null;
  areaKm2: number | null;
  census: MuniCensus | null;
  station: { key: string; id: string; km: number; fallback: boolean; source?: "cities-data" } | null;
  /** Ville historique : station que la règle aurait retenue (la page garde la station vérifiée). */
  ruleStation?: { key: string; km: number } | null;
  nearest1991Km?: number;
  eligible: boolean;
  reason: "designation" | "coordonnees" | "recensement" | "station" | null;
  /** Slug d'une des villes historiques (cities.ts), si la municipalité en est une. */
  curated?: string;
  /** Page propre publiée (admissible et assez distincte ; toujours vrai pour une ville historique). */
  page: boolean;
  /** Voisines avec page : [code, km], de la plus proche à la plus éloignée. */
  neighbours?: Array<[string, number]>;
  /** Vérification d'unicité (scripts/villes/check-unicite.ts). */
  /** maxSpecific : texte propre à la page (gabarit commun retiré) ; maxJaccard : texte visible complet. */
  uniqueness?: { maxJaccard: number | null; maxSpecific?: number | null; closest: string | null; verdict: "ok" | "trop-proche" | "historique" };
}

export interface MuniGroup {
  key: string;
  kind: "MRC" | "agglomeration" | "hors-mrc";
  code: string;
  name: string;
  label: string;
  region: string | null;
  slug: string | null;
  hub: { ok: boolean; reason: string | null };
  centroid: [number, number] | null;
  nearHubs?: Array<[string, number]>;
  members: string[];
}

export interface MuniRegion {
  code: string;
  name: string;
  slug: string;
}

export interface MuniExcluded {
  code: string;
  name: string;
  designation: string;
  dcode: string;
  region: string | null;
  group: string | null;
  population2021: number | null;
}

export interface MuniDataset {
  meta: {
    generatedAt: string;
    uniqueness?: {
      checkedAt: string;
      threshold: number;
      thresholdFull?: number;
      templateShare?: number;
      templateShingles?: number;
      shingle: number;
      compareWith?: number;
      compared: number;
      removed: number;
      rounds?: number;
      distribution: Record<string, number>;
      distributionFull?: Record<string, number>;
      quantiles?: Record<string, number>;
      quantilesFull?: Record<string, number>;
      removedList?: Array<{ code: string; name: string; with: string; specific: number; full: number }>;
    };
    counts: Record<string, unknown>;
    sources: Record<string, Record<string, unknown>>;
    curatedSecondary: Array<{ slug: string; code: string }>;
  };
  regions: MuniRegion[];
  groups: MuniGroup[];
  stations: Record<string, MuniStation>;
  municipalities: Municipality[];
  excluded: MuniExcluded[];
}

/** Population à partir de laquelle une page est pré-rendue au build (les autres : à la demande, puis en cache). */
export const PRERENDER_MIN_POP = 8000;

interface Index {
  data: MuniDataset;
  bySlug: Map<string, Municipality>;
  byCode: Map<string, Municipality>;
  groupByKey: Map<string, MuniGroup>;
  hubBySlug: Map<string, MuniGroup>;
  regionByCode: Map<string, MuniRegion>;
  byName: Map<string, Municipality[]>;
  quebec?: Aggregate;
}

let cache: Index | null = null;
let cacheMtime = 0;
let fileOverride: string | null = null;
let objectOverride: MuniDataset | null = null;

/** Tests : lire un autre fichier (jeu réduit). */
export function __setDatasetFile(path: string | null) {
  fileOverride = path;
  objectOverride = null;
  cache = null;
}

/** Scripts (check-unicite.ts) et tests : travailler sur un jeu en mémoire. */
export function __setDatasetObject(data: MuniDataset | null) {
  objectOverride = data;
  cache = null;
}

function load(): Index {
  const file = fileOverride ?? join(process.cwd(), "src/lib/seo/municipalites-data.json");
  // En développement seulement : relire le jeu quand le script de construction le réécrit.
  if (cache && !objectOverride && process.env.NODE_ENV === "development" && existsSync(file) && statSync(file).mtimeMs !== cacheMtime) cache = null;
  if (cache) return cache;
  if (!objectOverride && existsSync(file)) cacheMtime = statSync(file).mtimeMs;
  const data: MuniDataset = objectOverride ?? (existsSync(file)
    ? (JSON.parse(readFileSync(file, "utf8")) as MuniDataset)
    : { meta: { generatedAt: "", counts: {}, sources: {}, curatedSecondary: [] }, regions: [], groups: [], stations: {}, municipalities: [], excluded: [] });
  const byName = new Map<string, Municipality[]>();
  for (const m of data.municipalities) byName.set(m.name, [...(byName.get(m.name) ?? []), m]);
  cache = {
    data,
    bySlug: new Map(data.municipalities.map((m) => [m.slug, m])),
    byCode: new Map(data.municipalities.map((m) => [m.code, m])),
    groupByKey: new Map(data.groups.map((g) => [g.key, g])),
    hubBySlug: new Map(data.groups.filter((g) => g.hub.ok && g.slug).map((g) => [g.slug as string, g])),
    regionByCode: new Map(data.regions.map((r) => [r.code, r])),
    byName,
  };
  return cache;
}

export function getDataset(): MuniDataset {
  return load().data;
}

/** Date de construction des données (lastmod des sitemaps). */
export function municipalDataDate(): string | undefined {
  const d = load().data.meta.generatedAt;
  return /^\d{4}-\d{2}-\d{2}$/.test(d) ? d : undefined;
}

export function getMunicipalityBySlug(slug: string): Municipality | null {
  return load().bySlug.get(slug) ?? null;
}

export function getMunicipalityByCode(code: string): Municipality | null {
  return load().byCode.get(code) ?? null;
}

/** Municipalité qui a sa propre page de gabarit « municipalité » (hors villes historiques), sinon null. */
export function getPageMunicipality(slug: string): Municipality | null {
  const m = load().bySlug.get(slug);
  return m && m.page && m.eligible && !m.curated ? m : null;
}

/** Fiche de la municipalité d'une ville historique ; Saint-Hubert et Jonquière renvoient à leur ville. */
export function getMunicipalityForCity(citySlug: string): Municipality | null {
  const idx = load();
  const direct = idx.data.municipalities.find((m) => m.curated === citySlug);
  if (direct) return direct;
  const sec = idx.data.meta.curatedSecondary.find((s) => s.slug === citySlug);
  return sec ? idx.byCode.get(sec.code) ?? null : null;
}

/**
 * Précision pour les homonymes (deux « Saint-Augustin ») : le nom de la MRC s'ils sont dans des
 * MRC différentes, sinon la désignation (Bedford ville / Bedford canton). Null si le nom est unique.
 */
export function homonymQualifier(m: Municipality): string | null {
  const idx = load();
  const same = idx.byName.get(m.name) ?? [];
  if (same.length < 2) return null;
  const g = m.group ? idx.groupByKey.get(m.group) : null;
  const groupsDiffer = new Set(same.map((o) => o.group)).size === same.length;
  if (groupsDiffer && g) return g.name;
  return m.designation.toLowerCase();
}

/** Nom affiché, précisé pour les homonymes : « Saint-Augustin (Maria-Chapdelaine) ». */
export function displayName(m: Municipality): string {
  const q = homonymQualifier(m);
  return q ? `${m.name} (${q})` : m.name;
}

export function municipalityHref(m: Municipality): string | null {
  return m.page ? `/thermopompe/${m.slug}` : null;
}

export function getStation(key: string | null | undefined): MuniStation | null {
  return key ? load().data.stations[key] ?? null : null;
}

export function getGroup(key: string | null | undefined): MuniGroup | null {
  return key ? load().groupByKey.get(key) ?? null : null;
}

export function getHub(slug: string): MuniGroup | null {
  return load().hubBySlug.get(slug) ?? null;
}

export function getHubs(): MuniGroup[] {
  return [...load().hubBySlug.values()];
}

export function hubHref(g: MuniGroup | null): string | null {
  return g && g.hub.ok && g.slug ? `/thermopompe/mrc/${g.slug}` : null;
}

export function getRegion(code: string | null | undefined): MuniRegion | null {
  return code ? load().regionByCode.get(code) ?? null : null;
}

export function getRegions(): MuniRegion[] {
  return load().data.regions;
}

/** Municipalités ordinaires d'un groupe (MRC ou agglomération), de la plus peuplée à la moins peuplée. */
export function groupMembers(g: MuniGroup): Municipality[] {
  const idx = load();
  return g.members
    .map((c) => idx.byCode.get(c))
    .filter((m): m is Municipality => !!m)
    .sort((a, b) => (b.census?.population2021 ?? -1) - (a.census?.population2021 ?? -1) || a.name.localeCompare(b.name, "fr-CA"));
}

/** Voisines avec page, de la plus proche à la plus éloignée. */
export function neighboursOf(m: Municipality, limit = 6): Array<{ m: Municipality; km: number }> {
  const idx = load();
  return (m.neighbours ?? [])
    .map(([code, km]) => ({ m: idx.byCode.get(code), km }))
    .filter((x): x is { m: Municipality; km: number } => !!x.m && x.m.page)
    .slice(0, limit);
}

/** Toutes les municipalités qui ont une page de gabarit « municipalité » (hors villes historiques). */
export function getPageMunicipalities(): Municipality[] {
  return load().data.municipalities.filter((m) => m.page && m.eligible && !m.curated);
}

/**
 * Toutes les municipalités ordinaires du jeu (avec ou sans page). getCities() (cities.ts) reste la
 * liste des 53 villes historiques : les blocs « Par ville » et llms.txt n’énumèrent pas ces municipalités.
 */
export function getMunicipalites(): Municipality[] {
  return load().data.municipalities;
}

/** Slugs pré-rendus au build : les plus peuplées ; les autres sont rendues à la première visite, puis servies du cache. */
export function prerenderMunicipalSlugs(): string[] {
  return getPageMunicipalities()
    .filter((m) => (m.census?.population2021 ?? 0) >= PRERENDER_MIN_POP)
    .map((m) => m.slug);
}

/* ------------------------------------------------------------------
   Agrégats (MRC, Québec) : sommes exactes des valeurs publiées
   ------------------------------------------------------------------ */

export interface Aggregate {
  /** Municipalités ordinaires du groupe. */
  count: number;
  /** Municipalités avec population publiée. */
  withCensus: number;
  population: number;
  dwellings: number;
  /** Part des logements construits en 1980 ou avant, sur les municipalités qui publient les deux valeurs. */
  builtTo1980Pct: number | null;
  builtTo1980Count: number;
  singleDetachedPct: number | null;
  ownerPct: number | null;
  stations: Array<{ station: MuniStation; municipalities: number; minKm: number; maxKm: number }>;
  hddRange: [number, number] | null;
  janMinRange: [number, number] | null;
  withPage: number;
}

export function aggregate(list: Municipality[]): Aggregate {
  const withCensus = list.filter((m) => m.census?.population2021 !== null && m.census?.population2021 !== undefined);
  const withPeriod = list.filter((m) => m.census?.builtTo1980 !== null && m.census?.builtTo1980 !== undefined && m.census?.periodTotal);
  const tot = withPeriod.reduce((a, m) => a + (m.census?.periodTotal ?? 0), 0);
  const old = withPeriod.reduce((a, m) => a + (m.census?.builtTo1980 ?? 0), 0);
  const st = new Map<string, { station: MuniStation; municipalities: number; minKm: number; maxKm: number }>();
  const hdds: number[] = [];
  const janMins: number[] = [];
  for (const m of list) {
    if (!m.eligible || !m.station) continue;
    const s = getStation(m.station.key);
    if (!s) continue;
    const e = st.get(s.key) ?? { station: s, municipalities: 0, minKm: Infinity, maxKm: -Infinity };
    e.municipalities++;
    e.minKm = Math.min(e.minKm, m.station.km);
    e.maxKm = Math.max(e.maxKm, m.station.km);
    st.set(s.key, e);
    if (s.hdd18 !== null) hdds.push(s.hdd18);
    if (s.janMinC !== null) janMins.push(s.janMinC);
  }
  const ratio = (part: (m: Municipality) => number | null | undefined, whole: (m: Municipality) => number | null | undefined) => {
    const ok = list.filter((m) => part(m) !== null && part(m) !== undefined && (whole(m) ?? 0) > 0);
    const w = ok.reduce((a, m) => a + (whole(m) as number), 0);
    return w > 0 ? Math.round((ok.reduce((a, m) => a + (part(m) as number), 0) / w) * 1000) / 10 : null;
  };
  return {
    singleDetachedPct: ratio((m) => m.census?.singleDetached, (m) => m.census?.typeTotal),
    ownerPct: ratio((m) => m.census?.owners, (m) => m.census?.tenureTotal),
    count: list.length,
    withCensus: withCensus.length,
    population: withCensus.reduce((a, m) => a + (m.census?.population2021 ?? 0), 0),
    dwellings: list.reduce((a, m) => a + (m.census?.dwellings2021 ?? 0), 0),
    builtTo1980Pct: tot > 0 ? Math.round((old / tot) * 1000) / 10 : null,
    builtTo1980Count: withPeriod.length,
    stations: [...st.values()].sort((a, b) => b.municipalities - a.municipalities || a.station.name.localeCompare(b.station.name)),
    hddRange: hdds.length ? [Math.min(...hdds), Math.max(...hdds)] : null,
    janMinRange: janMins.length ? [Math.min(...janMins), Math.max(...janMins)] : null,
    withPage: list.filter((m) => m.page).length,
  };
}

/** Agrégat de toutes les municipalités ordinaires du Québec (pour situer une municipalité). */
export function quebecAggregate(): Aggregate {
  const idx = load();
  if (!idx.quebec) idx.quebec = aggregate(idx.data.municipalities);
  return idx.quebec;
}

/** « de la MRC de Bellechasse », « de l'agglomération de Montréal ». */
export function ofGroup(g: MuniGroup): string {
  return g.kind === "MRC" ? `de la ${g.label}` : g.kind === "agglomeration" ? `de l'${g.label}` : `du territoire ${g.label}`;
}

/** « dans la MRC de Bellechasse », « dans l'agglomération de Montréal ». */
export function inGroup(g: MuniGroup): string {
  return g.kind === "MRC" ? `dans la ${g.label}` : g.kind === "agglomeration" ? `dans l'${g.label}` : `dans le territoire ${g.label}`;
}

/** Libellé avec majuscule initiale : « MRC de Bellechasse », « Agglomération de Montréal ». */
export function groupTitle(g: MuniGroup): string {
  return g.label.charAt(0).toUpperCase() + g.label.slice(1);
}
