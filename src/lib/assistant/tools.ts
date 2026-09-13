/* ==================================================================
   Assistant — outils en lecture seule sur les données du site

   Chaque outil est une fonction pure sur le registre, les données SEO
   programmatiques (capacités certifiées, montants LogisVert officiels),
   les villes et le glossaire. Les résultats ne contiennent que des champs
   réels (les valeurs absentes sont omises) et des adresses du site.
   Les fiches (cartes) sont construites ici, jamais à partir du texte
   du modèle.
   ================================================================== */

import {
  CAPACITY_CLASSES,
  RANKINGS,
  byQuality,
  getAllBrandStats,
  getBrandStats,
  getCanonicalModels,
  getRanking,
  getSeoModel,
  getSeoModels,
  type SeoModel,
} from "@/lib/seo/programmatic";
import { getCities, getCity } from "@/lib/seo/cities";
import { getCityData } from "@/lib/seo/cities-data";
import { getLogisVertListInfo } from "@/lib/subsidies/logisvert-meta";
import { GLOSSARY_TERMS, slugifyTerm } from "@/lib/glossary";
import { normKey as norm } from "./grounding";

export interface ModelCard {
  slug: string;
  name: string;
  modelNumber: string | null;
  imageUrl: string | null;
  url: string;
  figures: Array<{ label: string; value: string }>;
}

export interface ToolOutput {
  data: Record<string, unknown>;
  cards: ModelCard[];
}

type Input = Record<string, unknown>;

const MAX_LIMIT = 6;

const str = (v: unknown): string | undefined => (typeof v === "string" && v.trim() ? v.trim().slice(0, 120) : undefined);
const num = (v: unknown): number | undefined => {
  const n = typeof v === "number" ? v : typeof v === "string" ? Number(v.replace(/[\s  ]/g, "").replace(",", ".")) : NaN;
  return Number.isFinite(n) ? n : undefined;
};
const bool = (v: unknown) => v === true || v === "true";
const clampLimit = (v: unknown, def = 4) => Math.max(1, Math.min(MAX_LIMIT, Math.round(num(v) ?? def)));
const fmt = (n: number) => n.toLocaleString("fr-CA");

/** Retire les champs null/undefined : l'outil ne renvoie que ce que les données contiennent. */
function compact<T extends Record<string, unknown>>(o: T): Partial<T> {
  const out: Record<string, unknown> = {};
  for (const [k, v] of Object.entries(o)) if (v !== null && v !== undefined && v !== "") out[k] = v;
  return out as Partial<T>;
}

export const productUrl = (slug: string) => `/produit/${slug}`;

/* ------------------------------------------------------------------
   Filtres communs
   ------------------------------------------------------------------ */

export const SYSTEM_TYPE_FILTERS = {
  murale: ["wall-single"],
  multizone: ["multi-zone"],
  centrale: ["central-ducted", "hybrid"],
  console: ["floor-console"],
  cassette: ["cassette", "ceiling"],
} as const;
export type TypeFilter = keyof typeof SYSTEM_TYPE_FILTERS;

export function resolveType(v: unknown): TypeFilter | undefined {
  const s = str(v);
  if (!s) return undefined;
  const k = norm(s);
  if (k in SYSTEM_TYPE_FILTERS) return k as TypeFilter;
  if (k.startsWith("mural") || k.includes("minisplit") || k.includes("sansconduit")) return "murale";
  if (k.startsWith("multi")) return "multizone";
  if (k.startsWith("central") || k.includes("gainable") || k.includes("conduit")) return "centrale";
  if (k.startsWith("console") || k.includes("plancher")) return "console";
  if (k.startsWith("cassette") || k.startsWith("plafon")) return "cassette";
  return undefined;
}

export function resolveBrand(v: unknown): { slug: string; name: string } | null {
  const s = str(v);
  if (!s) return null;
  const q = norm(s);
  if (q.length < 2) return null;
  const brands = getAllBrandStats();
  const exact = brands.find((b) => norm(b.slug) === q || norm(b.name) === q);
  if (exact) return { slug: exact.slug, name: exact.name };
  const partial = brands.find((b) => q.length >= 3 && (norm(b.name).startsWith(q) || norm(b.slug).startsWith(q)));
  return partial ? { slug: partial.slug, name: partial.name } : null;
}

function matchesType(m: SeoModel, type: TypeFilter | undefined): boolean {
  return !type || (SYSTEM_TYPE_FILTERS[type] as readonly string[]).includes(m.systemType);
}

/** Une seule entrée par machine (même empreinte certifiée) dans une liste déjà triée. */
function dedupeMachines(models: SeoModel[]): SeoModel[] {
  const seen = new Set<string>();
  return models.filter((m) => {
    const key = m.signature ?? m.slug;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

/* ------------------------------------------------------------------
   Présentation
   ------------------------------------------------------------------ */

export function compactModel(m: SeoModel) {
  return compact({
    name: `${m.brand} ${m.name}`,
    url: productUrl(m.slug),
    type: m.systemTypeLabel,
    nominal_btu: m.nominalBtu,
    btu_at_minus15c: m.h5Btu,
    btu_at_minus8c: m.h17Btu,
    cop_at_minus15c: m.cop5,
    hspf2: m.hspf2,
    seer2: m.seer2,
    cold_climate: m.coldClimate,
    logisvert_dollars: m.logisVertDollars > 0 ? m.logisVertDollars : null,
    also_sold_as: m.alsoSoldAs.length ? m.alsoSoldAs.slice(0, 3).map((a) => a.brand) : null,
  });
}

export type CardEmphasis = "cold" | "hspf2" | "subsidy";

export function modelCard(m: SeoModel, emphasis: CardEmphasis = "cold"): ModelCard {
  const figures: ModelCard["figures"] = [
    m.h5Btu ? { label: "À -15 °C", value: `${fmt(m.h5Btu)} BTU/h` } : { label: "Capacité", value: `${fmt(m.nominalBtu)} BTU` },
  ];
  const hspf = m.hspf2 ? { label: "HSPF2", value: m.hspf2.toLocaleString("fr-CA") } : null;
  const lv = m.logisVertDollars > 0 ? { label: "LogisVert", value: `${fmt(m.logisVertDollars)} $` } : null;
  const second = emphasis === "subsidy" ? lv ?? hspf : hspf ?? lv;
  if (second) figures.push(second);
  return { slug: m.slug, name: `${m.brand} ${m.name}`, modelNumber: m.outdoorModel || null, imageUrl: m.imageUrl, url: productUrl(m.slug), figures };
}

/* ------------------------------------------------------------------
   search_models
   ------------------------------------------------------------------ */

type Sorter = (a: SeoModel, b: SeoModel) => number;
const SORTS: Record<string, { sort: Sorter; keep: (m: SeoModel) => boolean; emphasis: CardEmphasis }> = {
  qualite: { sort: byQuality, keep: () => true, emphasis: "cold" },
  froid: { sort: (a, b) => (b.h5Btu ?? 0) - (a.h5Btu ?? 0) || byQuality(a, b), keep: (m) => m.h5Btu !== null, emphasis: "cold" },
  cop15: { sort: (a, b) => (b.cop5 ?? 0) - (a.cop5 ?? 0) || byQuality(a, b), keep: (m) => m.cop5 !== null, emphasis: "cold" },
  hspf2: { sort: (a, b) => (b.hspf2 ?? 0) - (a.hspf2 ?? 0) || byQuality(a, b), keep: (m) => m.hspf2 !== null, emphasis: "hspf2" },
  subvention: { sort: (a, b) => b.logisVertDollars - a.logisVertDollars || byQuality(a, b), keep: (m) => m.logisVertDollars > 0, emphasis: "subsidy" },
};

export function searchModels(input: Input): ToolOutput {
  const brandQuery = str(input.brand);
  const brand = resolveBrand(brandQuery);
  if (brandQuery && !brand) {
    return {
      data: { found: false, message: `La marque « ${brandQuery} » n'est pas dans le catalogue.`, brands_available: getAllBrandStats().slice(0, 15).map((b) => b.name) },
      cards: [],
    };
  }
  const type = resolveType(input.type);
  const minBtu = num(input.min_btu);
  const maxBtu = num(input.max_btu);
  const coldOnly = bool(input.cold_climate_only);
  const sortKey = str(input.sort) && SORTS[str(input.sort)!] ? str(input.sort)! : "qualite";
  const { sort, keep, emphasis } = SORTS[sortKey];

  // Avec une marque : toutes ses fiches (une machine rebadgée garde sa fiche par marque) ; sinon une fiche par machine.
  const pool = (brand ? getSeoModels().filter((m) => m.brandSlug === brand.slug) : getCanonicalModels()).filter(
    (m) =>
      matchesType(m, type) &&
      (minBtu === undefined || m.nominalBtu >= minBtu) &&
      (maxBtu === undefined || m.nominalBtu <= maxBtu) &&
      (!coldOnly || m.coldClimate) &&
      keep(m),
  );
  const sorted = dedupeMachines([...pool].sort(sort));
  const shown = sorted.slice(0, clampLimit(input.limit));

  return {
    data: {
      found: shown.length > 0,
      total_matches: sorted.length,
      filters: compact({ brand: brand?.name, type, min_btu: minBtu, max_btu: maxBtu, cold_climate_only: coldOnly || null, sort: sortKey }),
      models: shown.map(compactModel),
      catalogue_url: "/thermopompes",
    },
    cards: shown.map((m) => modelCard(m, emphasis)),
  };
}

/* ------------------------------------------------------------------
   get_model
   ------------------------------------------------------------------ */

/** Modèles correspondant à un slug, un numéro de modèle ou un nom (tous les mots doivent correspondre). */
export function findModels(query: string, max = 4): SeoModel[] {
  const direct = getSeoModel(query.trim().toLowerCase());
  if (direct) return [direct];
  const q = norm(query);
  if (q.length < 3) return [];
  const tokens = query.split(/[\s/]+/).map(norm).filter((t) => t.length >= 2);
  if (!tokens.length) return [];

  const scored: Array<{ m: SeoModel; score: number }> = [];
  for (const m of getSeoModels()) {
    const numbers = [norm(m.slug), norm(m.outdoorModel), m.indoorModel ? norm(m.indoorModel) : ""].filter(Boolean);
    let score = 0;
    if (numbers.includes(q)) score = 100;
    else if (numbers.some((n) => n.length >= 6 && (q.includes(n) || n.startsWith(q)))) score = 80;
    else {
      const hay = norm(`${m.brand} ${m.name} ${m.seriesName} ${m.outdoorModel} ${m.indoorModel ?? ""} ${m.nominalBtu}`);
      if (tokens.every((t) => hay.includes(t))) score = 50;
    }
    if (score) scored.push({ m, score });
  }
  return dedupeMachines(
    scored
      .sort((a, b) => b.score - a.score || Number(b.m.canonicalSlug === b.m.slug) - Number(a.m.canonicalSlug === a.m.slug) || byQuality(a.m, b.m))
      .map((s) => s.m),
  ).slice(0, max);
}

export function getModel(input: Input): ToolOutput {
  const q = str(input.query) ?? str(input.model) ?? str(input.slug);
  if (!q) return { data: { found: false, message: "Précisez un modèle ou un numéro de modèle." }, cards: [] };
  const hits = findModels(q);
  if (!hits.length) return { data: { found: false, message: `Aucun modèle « ${q} » dans le catalogue.`, catalogue_url: "/thermopompes" }, cards: [] };
  const [m, ...others] = hits;
  return {
    data: {
      found: true,
      model: { ...compactModel(m), ...compact({ outdoor_model: m.outdoorModel, indoor_model: m.indoorModel }) },
      ...(others.length ? { other_matches: others.map((o) => ({ name: `${o.brand} ${o.name}`, url: productUrl(o.slug) })) } : {}),
    },
    cards: hits.map((h) => modelCard(h)),
  };
}

/* ------------------------------------------------------------------
   get_ranking
   ------------------------------------------------------------------ */

export const RANKING_SLUGS = RANKINGS.map((r) => r.slug);

export function rankingTool(input: Input): ToolOutput {
  const q = str(input.criterion) ?? "";
  const def = RANKINGS.find((r) => r.slug === q) ?? (q ? RANKINGS.find((r) => norm(r.slug).includes(norm(q))) : undefined);
  if (!def) return { data: { found: false, criteria_available: RANKING_SLUGS }, cards: [] };
  const r = getRanking(def.slug, clampLimit(input.limit, 5));
  if (!r) return { data: { found: false, criteria_available: RANKING_SLUGS }, cards: [] };
  const emphasis: CardEmphasis = def.slug === "subvention-logisvert" ? "subsidy" : def.slug === "efficacite-hspf2" ? "hspf2" : "cold";
  return {
    data: {
      found: true,
      title: r.def.h1,
      measured_on: r.def.metricLabel,
      page_url: `/meilleures-thermopompes/${def.slug}`,
      models: r.models.map((m, i) => ({ rank: i + 1, ...compactModel(m), ranking_value: r.def.value(m) })),
    },
    cards: r.models.map((m) => modelCard(m, emphasis)),
  };
}

/* ------------------------------------------------------------------
   logisvert_for
   ------------------------------------------------------------------ */

function logisVertSource() {
  const info = getLogisVertListInfo();
  return compact({
    source: "Liste officielle LogisVert d'Hydro-Québec",
    list_date: info.listDate,
    checked_on: info.checkedDate,
    program_page: "/subventions",
    note: "Montant officiel pour un jumelage précis (unité extérieure et unité intérieure). L'admissibilité dépend des conditions du programme.",
  });
}

/** Montants par calibre courant : les 6 calibres les plus fréquents de la sélection, du plus petit au plus grand. */
function byCapacity(listed: SeoModel[]) {
  const groups = new Map<number, number[]>();
  for (const m of listed) {
    if (!(CAPACITY_CLASSES as readonly number[]).includes(m.nominalBtu)) continue;
    groups.set(m.nominalBtu, [...(groups.get(m.nominalBtu) ?? []), m.logisVertDollars]);
  }
  return [...groups.entries()]
    .sort((a, b) => b[1].length - a[1].length)
    .slice(0, 6)
    .sort((a, b) => a[0] - b[0])
    .map(([btu, amounts]) => ({ nominal_btu: btu, models: amounts.length, min_dollars: Math.min(...amounts), max_dollars: Math.max(...amounts) }));
}

export function logisvertFor(input: Input): ToolOutput {
  const modelQuery = str(input.model);
  if (modelQuery) {
    const m = findModels(modelQuery, 1)[0];
    if (!m) return { data: { found: false, message: `Aucun modèle « ${modelQuery} » dans le catalogue.`, ...logisVertSource() }, cards: [] };
    return {
      data: {
        found: true,
        model: `${m.brand} ${m.name}`,
        url: productUrl(m.slug),
        on_official_list: m.logisVertDollars > 0,
        ...compact({ logisvert_dollars: m.logisVertDollars > 0 ? m.logisVertDollars : null }),
        ...logisVertSource(),
      },
      cards: [modelCard(m, "subsidy")],
    };
  }

  const brandQuery = str(input.brand);
  const brand = resolveBrand(brandQuery);
  if (!brand) {
    return {
      data: { found: false, message: brandQuery ? `La marque « ${brandQuery} » n'est pas dans le catalogue.` : "Précisez une marque ou un modèle.", ...logisVertSource() },
      cards: [],
    };
  }
  const type = resolveType(input.type);
  const models = dedupeMachines(getSeoModels().filter((m) => m.brandSlug === brand.slug && matchesType(m, type)));
  const listed = models.filter((m) => m.logisVertDollars > 0).sort((a, b) => b.logisVertDollars - a.logisVertDollars);
  const amounts = listed.map((m) => m.logisVertDollars).sort((a, b) => a - b);
  const hasBrandPage = (getBrandStats(brand.slug)?.maxLogisVert ?? 0) > 0;
  return {
    data: {
      found: true,
      brand: brand.name,
      ...compact({ type }),
      models_in_catalogue: models.length,
      models_on_official_list: listed.length,
      ...(amounts.length
        ? { min_dollars: amounts[0], max_dollars: amounts[amounts.length - 1], median_dollars: amounts[Math.floor(amounts.length / 2)] }
        : {}),
      by_nominal_capacity: byCapacity(listed),
      brand_page: hasBrandPage ? `/subventions/logisvert/${brand.slug}` : "/subventions",
      highest_models: listed.slice(0, 3).map((m) => ({ name: `${m.brand} ${m.name}`, url: productUrl(m.slug), nominal_btu: m.nominalBtu, logisvert_dollars: m.logisVertDollars })),
      ...logisVertSource(),
    },
    cards: listed.slice(0, 3).map((m) => modelCard(m, "subsidy")),
  };
}

/* ------------------------------------------------------------------
   city_climate
   ------------------------------------------------------------------ */

export function cityClimate(input: Input): ToolOutput {
  const q = str(input.city);
  if (!q) return { data: { found: false, message: "Précisez une ville." }, cards: [] };
  const k = norm(q.replace(/^st[-\s.]+/i, "saint-").replace(/^ste[-\s.]+/i, "sainte-"));
  const cities = getCities();
  const c =
    cities.find((x) => norm(x.slug) === k || norm(x.name) === k) ??
    (k.length >= 4 ? cities.find((x) => norm(x.name).startsWith(k) || norm(x.slug).startsWith(k)) : undefined);
  if (!c) {
    return {
      data: { found: false, message: `Pas de page locale pour « ${q} ».`, cities_page: "/thermopompe", cities_covered: cities.length },
      cards: [],
    };
  }
  const d = getCityData(c.slug)?.climate ?? null;
  return {
    data: compact({
      found: true,
      city: c.name,
      region: c.region,
      design_temp_c: c.designTempC,
      climate_zone: c.climateLabel,
      january_mean_c: d?.janMeanC,
      january_min_c: d?.janMinC,
      heating_degree_days: typeof d?.hdd18 === "number" ? Math.round(d.hdd18) : null,
      days_below_minus20c: d?.daysBelowMinus20,
      page_url: `/thermopompe/${c.slug}`,
      note: "La température de conception est le froid de référence utilisé pour choisir la puissance d'une thermopompe dans cette région.",
    }),
    cards: [],
  };
}

/* ------------------------------------------------------------------
   glossary
   ------------------------------------------------------------------ */

export function glossary(input: Input): ToolOutput {
  const q = str(input.term);
  const k = q ? norm(q) : "";
  if (k.length < 2) return { data: { found: false, glossary_url: "/glossaire" }, cards: [] };
  const scored = GLOSSARY_TERMS.map((t) => {
    const head = norm(t.term.split("(")[0]);
    const inParen = norm(t.term.match(/\(([^)]*)\)/)?.[1] ?? "");
    const parts = [head, inParen, ...t.term.split(/[(/)]/).map(norm)].filter((p) => p.length >= 2);
    let score = 0;
    if (parts.includes(k)) score = 3;
    else if (parts.some((p) => p.startsWith(k) || (k.startsWith(p) && p.length >= 3))) score = 2;
    else if (norm(t.term).includes(k)) score = 1;
    return { t, score };
  })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 2);
  if (!scored.length) return { data: { found: false, glossary_url: "/glossaire" }, cards: [] };
  return {
    data: {
      found: true,
      entries: scored.map(({ t }) => ({ term: t.term, definition: t.definition, url: `/glossaire#${slugifyTerm(t.term)}` })),
    },
    cards: [],
  };
}

/* ------------------------------------------------------------------
   Définitions communes aux fournisseurs (schéma JSON)
   ------------------------------------------------------------------ */

export interface ToolDef {
  name: string;
  description: string;
  input_schema: {
    type: "object";
    properties: Record<string, { type: "string" | "number" | "boolean"; description: string; enum?: string[] }>;
    required?: string[];
  };
}

const TYPE_ENUM = Object.keys(SYSTEM_TYPE_FILTERS);

export const TOOL_DEFS: ToolDef[] = [
  {
    name: "search_models",
    description:
      "Cherche des thermopompes du catalogue (données certifiées). Renvoie au plus 6 modèles avec capacité nominale et à -15 °C, HSPF2, SEER2, COP à -15 °C, montant LogisVert officiel et url de la fiche.",
    input_schema: {
      type: "object",
      properties: {
        brand: { type: "string", description: "Marque, ex. Daikin, Mitsubishi Electric, Fujitsu." },
        type: { type: "string", enum: TYPE_ENUM, description: "Type d'appareil. murale = mini-split sans conduits ; centrale = avec conduits." },
        min_btu: { type: "number", description: "Capacité nominale minimale en BTU." },
        max_btu: { type: "number", description: "Capacité nominale maximale en BTU." },
        cold_climate_only: { type: "boolean", description: "Seulement les modèles certifiés climat froid." },
        sort: { type: "string", enum: Object.keys(SORTS), description: "froid = capacité à -15 °C ; cop15 = COP à -15 °C ; hspf2 ; subvention ; qualite (défaut)." },
        limit: { type: "number", description: "Nombre de modèles, 1 à 6 (défaut 4)." },
      },
    },
  },
  {
    name: "get_model",
    description: "Fiche d'un modèle précis à partir de son nom, de son numéro de modèle ou de son slug : capacités, HSPF2, SEER2, COP, LogisVert, url.",
    input_schema: {
      type: "object",
      properties: { query: { type: "string", description: "Nom ou numéro de modèle, ex. « Daikin Aurora 12000 » ou « RXL12WMVJU9 »." } },
      required: ["query"],
    },
  },
  {
    name: "get_ranking",
    description: "Classement du site selon un critère, avec l'url de la page du palmarès.",
    input_schema: {
      type: "object",
      properties: {
        criterion: { type: "string", enum: RANKING_SLUGS, description: "Critère du classement." },
        limit: { type: "number", description: "Nombre de modèles, 1 à 6 (défaut 5)." },
      },
      required: ["criterion"],
    },
  },
  {
    name: "logisvert_for",
    description:
      "Montants officiels de la subvention LogisVert d'Hydro-Québec : pour un modèle précis, ou pour une marque (minimum, maximum, médiane), éventuellement par type d'appareil.",
    input_schema: {
      type: "object",
      properties: {
        model: { type: "string", description: "Nom ou numéro de modèle." },
        brand: { type: "string", description: "Marque." },
        type: { type: "string", enum: TYPE_ENUM, description: "Type d'appareil (avec une marque)." },
      },
    },
  },
  {
    name: "city_climate",
    description: "Climat local d'une ville du Québec couverte par le site : température de conception, normales de janvier, degrés-jours, url de la page locale.",
    input_schema: { type: "object", properties: { city: { type: "string", description: "Ville, ex. Lévis." } }, required: ["city"] },
  },
  {
    name: "glossary",
    description: "Définition d'un terme dans le glossaire du site (HSPF2, SEER2, COP, BTU, inverter, biénergie, etc.).",
    input_schema: { type: "object", properties: { term: { type: "string", description: "Terme à définir." } }, required: ["term"] },
  },
];

const HANDLERS: Record<string, (input: Input) => ToolOutput> = {
  search_models: searchModels,
  get_model: getModel,
  get_ranking: rankingTool,
  logisvert_for: logisvertFor,
  city_climate: cityClimate,
  glossary,
};

export function runTool(name: string, input: unknown): ToolOutput {
  const handler = HANDLERS[name];
  if (!handler) return { data: { error: `Outil inconnu : ${name}` }, cards: [] };
  try {
    return handler(input && typeof input === "object" && !Array.isArray(input) ? (input as Input) : {});
  } catch {
    return { data: { error: "Données indisponibles pour cette demande." }, cards: [] };
  }
}

/* ------------------------------------------------------------------
   Adresses reconnues (liens des réponses)
   ------------------------------------------------------------------ */

const FIXED_PAGES = new Set([
  "/",
  "/trouver-ma-thermopompe",
  "/soumission",
  "/rendez-vous",
  "/subventions",
  "/glossaire",
  "/contact",
  "/thermopompes",
  "/thermopompe",
  "/meilleures-thermopompes",
  "/comparer",
  "/marques",
  "tel:4389003224",
]);

export function isKnownHref(href: string): boolean {
  const [path, hash] = href.split("#");
  if (FIXED_PAGES.has(path)) {
    if (!hash) return true;
    return path === "/glossaire" && GLOSSARY_TERMS.some((t) => slugifyTerm(t.term) === hash);
  }
  if (hash) return false;
  let m: RegExpMatchArray | null;
  if ((m = path.match(/^\/produit\/([a-z0-9-]+)$/))) return getSeoModel(m[1]) !== null;
  if ((m = path.match(/^\/meilleures-thermopompes\/([a-z0-9-]+)$/))) return RANKING_SLUGS.includes(m[1]);
  if ((m = path.match(/^\/thermopompe\/([a-z0-9-]+)$/))) return getCity(m[1]) !== null;
  if ((m = path.match(/^\/subventions\/logisvert\/([a-z0-9-]+)$/))) return (getBrandStats(m[1])?.maxLogisVert ?? 0) > 0;
  if ((m = path.match(/^\/marques\/([a-z0-9-]+)$/))) return getBrandStats(m[1]) !== null;
  return false;
}
