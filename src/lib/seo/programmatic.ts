/* ==================================================================
   SEO programmatique — données calculées une fois par processus

   Source : registre (catalogue) + base officielle LogisVert d'Hydro-Québec.
   Tout ce qui est publié sur les pages programmatiques vient d'ici :
   aucun chiffre n'est écrit à la main dans les pages.

   Fournit :
   - la liste des modèles « SEO » (marques actives, modèles publiés) avec
     leurs données certifiées et leur groupe de rebadge ;
   - le slug canonique d'un modèle (la même machine vendue sous plusieurs
     marques n'est indexée qu'une fois) ;
   - les classes de capacité, les statistiques par marque, les palmarès.
   ================================================================== */

import { registry } from "@/lib/data/registry";
import { getLogisVertVariants, type LogisVertOfficialEntry } from "@/lib/subsidies/logisvert-official";
import { brandTier, rebadgeRank } from "@/lib/thermomatch/tiers";
import type { BrandTier } from "@/lib/thermomatch/types";
import { SYSTEM_TYPE_LABELS, type SystemType } from "@/lib/data/types/enums";

export type SeoKind = "murale" | "centrale";

export interface SeoModel {
  slug: string;
  id: string;
  name: string;
  seriesName: string;
  brand: string;
  brandSlug: string;
  tier: BrandTier;
  systemType: SystemType;
  systemTypeLabel: string;
  kind: SeoKind;
  outdoorModel: string;
  indoorModel: string | null;
  ahri: string | null;
  nominalBtu: number;
  h5Btu: number | null;
  h17Btu: number | null;
  cop5: number | null;
  seer2: number | null;
  hspf2: number | null;
  coldClimate: boolean;
  logisVertDollars: number;
  imageUrl: string | null;
  /** Empreinte technique (mêmes chiffres certifiés = même machine). */
  signature: string | null;
  /** Slug du modèle représentant le groupe de rebadge (lui-même s'il est canonique). */
  canonicalSlug: string;
  /** Autres marques vendant la même machine (renseigné sur le représentant). */
  alsoSoldAs: Array<{ brand: string; brandSlug: string; slug: string }>;
}

export const CAPACITY_CLASSES = [6000, 9000, 12000, 15000, 18000, 24000, 30000, 36000, 42000, 48000, 60000] as const;

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

function kindOf(systemType: SystemType): SeoKind | null {
  if (systemType === "central-ducted" || systemType === "hybrid") return "centrale";
  if (systemType === "wall-single" || systemType === "multi-zone" || systemType === "floor-console" || systemType === "cassette" || systemType === "ceiling") {
    return "murale";
  }
  return null;
}

/** Appariement de référence pour une fiche : le plus subventionné, comme sur la fiche produit. */
function referencePairing(variants: LogisVertOfficialEntry[]): LogisVertOfficialEntry | null {
  if (variants.length === 0) return null;
  return variants
    .slice()
    .sort((a, b) => {
      const certDiff = Number((b.heatingBtu5F ?? 0) > 0) - Number((a.heatingBtu5F ?? 0) > 0);
      if (certDiff !== 0) return certDiff;
      return b.logisVertDollars - a.logisVertDollars;
    })[0];
}

let modelsCache: SeoModel[] | null = null;
let bySlug: Map<string, SeoModel> | null = null;

export function getSeoModels(): SeoModel[] {
  if (modelsCache) return modelsCache;

  const seriesById = new Map(registry.series.map((s) => [s.id, s]));
  // Numéro de l'unité extérieure par modèle : les fiches curées portent parfois le numéro
  // de l'unité intérieure comme numéro principal, or la liste LogisVert est indexée par
  // unité extérieure.
  const outdoorById = new Map(registry.outdoorUnits.map((u) => [u.id, u.modelNumber]));
  const outdoorByModelId = new Map<string, string>();
  for (const c of registry.configurations) {
    const ou = outdoorById.get(c.outdoorUnitId);
    if (ou && !outdoorByModelId.has(c.modelId)) outdoorByModelId.set(c.modelId, ou);
  }
  const raw: SeoModel[] = [];

  for (const m of registry.models) {
    if (m.status !== "published" || !m.isActive2026) continue;
    const brand = registry.brandById.get(m.brandId);
    if (!brand || !brand.activeInQuebec) continue;
    const kind = kindOf(m.systemType);
    if (!kind) continue;

    const outdoorNumber = outdoorByModelId.get(m.id) ?? m.modelNumber;
    const variants = getLogisVertVariants(outdoorNumber).length > 0 ? getLogisVertVariants(outdoorNumber) : getLogisVertVariants(m.modelNumber);
    const p = referencePairing(variants);
    const nominal = p?.nominalBtu ?? m.nominalCapacityBtu ?? 0;
    if (nominal <= 0) continue;

    const h5 = p?.heatingBtu5F && p.heatingBtu5F > 0 ? p.heatingBtu5F : null;
    const h17 = p?.heatingBtu17F && p.heatingBtu17F > 0 ? p.heatingBtu17F : null;
    const signature = p ? [kind, nominal, h5 ?? "", h17 ?? "", p.cop5 ?? "", p.seer2 ?? "", p.hspf2 ?? ""].join("|") : null;

    raw.push({
      slug: m.slug,
      id: m.id,
      name: m.name,
      seriesName: seriesById.get(m.seriesId)?.name ?? m.name,
      brand: brand.name,
      brandSlug: brand.slug,
      tier: brandTier(brand.name),
      systemType: m.systemType,
      systemTypeLabel: SYSTEM_TYPE_LABELS[m.systemType],
      kind,
      outdoorModel: outdoorNumber,
      indoorModel: p?.indoorModel ?? null,
      ahri: p?.ahri ?? null,
      nominalBtu: nominal,
      h5Btu: h5,
      h17Btu: h17,
      cop5: p?.cop5 ?? null,
      seer2: p?.seer2 ?? null,
      hspf2: p?.hspf2 ?? null,
      coldClimate: p?.coldClimate ?? m.categories.includes("cold-climate"),
      logisVertDollars: p?.logisVertDollars ?? 0,
      imageUrl: m.imageUrl ?? seriesById.get(m.seriesId)?.imageUrl ?? null,
      signature,
      canonicalSlug: m.slug,
      alsoSoldAs: [],
    });
  }

  // Groupes de rebadge : même empreinte, marques différentes → un seul représentant.
  const groups = new Map<string, SeoModel[]>();
  for (const s of raw) {
    if (!s.signature) continue;
    const list = groups.get(s.signature) ?? [];
    list.push(s);
    groups.set(s.signature, list);
  }
  for (const group of groups.values()) {
    if (group.length < 2) continue;
    const sorted = group.slice().sort((a, b) => rebadgeRank(a.brand) - rebadgeRank(b.brand) || a.slug.localeCompare(b.slug));
    const rep = sorted[0];
    const seenBrands = new Set<string>([rep.brandSlug]);
    for (const other of sorted.slice(1)) {
      other.canonicalSlug = rep.slug;
      if (!seenBrands.has(other.brandSlug)) {
        rep.alsoSoldAs.push({ brand: other.brand, brandSlug: other.brandSlug, slug: other.slug });
        seenBrands.add(other.brandSlug);
      }
    }
  }

  modelsCache = raw;
  bySlug = new Map(raw.map((s) => [s.slug, s]));
  return raw;
}

export function getSeoModel(slug: string): SeoModel | null {
  getSeoModels();
  return bySlug?.get(slug) ?? null;
}

/** Modèles indexables : un par machine réellement distincte. */
export function getCanonicalModels(): SeoModel[] {
  return getSeoModels().filter((m) => m.canonicalSlug === m.slug);
}

/* ------------------------------------------------------------------
   Classes de capacité
   ------------------------------------------------------------------ */

export interface CapacityClass {
  btu: number;
  slug: string;
  label: string;
  models: SeoModel[];
  wallCount: number;
  centralCount: number;
  coldClimateCount: number;
  maxLogisVert: number;
  bestHspf2: SeoModel | null;
  bestColdRetention: SeoModel | null;
}

export function capacitySlug(btu: number): string {
  return `thermopompe-${btu}-btu`;
}

export function getCapacityClasses(): CapacityClass[] {
  const canonical = getCanonicalModels();
  return CAPACITY_CLASSES.map((btu) => {
    const models = canonical.filter((m) => m.nominalBtu === btu).sort(byQuality);
    return {
      btu,
      slug: capacitySlug(btu),
      label: `${btu.toLocaleString("fr-CA")} BTU`,
      models,
      wallCount: models.filter((m) => m.kind === "murale").length,
      centralCount: models.filter((m) => m.kind === "centrale").length,
      coldClimateCount: models.filter((m) => m.coldClimate).length,
      maxLogisVert: models.reduce((a, m) => Math.max(a, m.logisVertDollars), 0),
      bestHspf2: models.filter((m) => m.hspf2 !== null).sort((a, b) => (b.hspf2 ?? 0) - (a.hspf2 ?? 0))[0] ?? null,
      bestColdRetention: models.filter((m) => m.h5Btu !== null && m.cop5 !== null).sort((a, b) => (b.cop5 ?? 0) - (a.cop5 ?? 0))[0] ?? null,
    };
  }).filter((c) => c.models.length > 0);
}

export function getCapacityClass(slug: string): CapacityClass | null {
  return getCapacityClasses().find((c) => c.slug === slug) ?? null;
}

/* ------------------------------------------------------------------
   Statistiques par marque
   ------------------------------------------------------------------ */

export interface BrandStats {
  slug: string;
  name: string;
  tier: BrandTier;
  models: SeoModel[];
  canonicalModels: SeoModel[];
  wallCount: number;
  centralCount: number;
  coldClimateCount: number;
  certifiedCount: number;
  minLogisVert: number;
  maxLogisVert: number;
  avgHspf2: number | null;
  maxHspf2: number | null;
  avgCop5: number | null;
  bestCold: SeoModel | null;
  bestEfficiency: SeoModel | null;
  bestSubsidy: SeoModel | null;
  capacities: number[];
  /** Marques dont cette marque rebadge des machines, ou l'inverse. */
  sharedWith: Array<{ brandSlug: string; brand: string; count: number }>;
}

let brandStatsCache: Map<string, BrandStats> | null = null;

export function getAllBrandStats(): BrandStats[] {
  if (brandStatsCache) return [...brandStatsCache.values()];
  const all = getSeoModels();
  const byBrand = new Map<string, SeoModel[]>();
  for (const m of all) {
    const list = byBrand.get(m.brandSlug) ?? [];
    list.push(m);
    byBrand.set(m.brandSlug, list);
  }
  brandStatsCache = new Map();
  for (const [slug, models] of byBrand) {
    const brand = registry.brandBySlug.get(slug);
    if (!brand) continue;
    const canonical = models.filter((m) => m.canonicalSlug === m.slug);
    const withHspf = models.filter((m) => m.hspf2 !== null);
    const withCop = models.filter((m) => m.cop5 !== null);
    const subsidised = models.filter((m) => m.logisVertDollars > 0);
    const shared = new Map<string, { brandSlug: string; brand: string; count: number }>();
    for (const m of models) {
      const rep = m.canonicalSlug === m.slug ? m : getSeoModel(m.canonicalSlug);
      if (!rep) continue;
      const partners = [rep, ...rep.alsoSoldAs.map((a) => getSeoModel(a.slug)).filter((x): x is SeoModel => !!x)];
      for (const p of partners) {
        if (p.brandSlug === slug) continue;
        const cur = shared.get(p.brandSlug) ?? { brandSlug: p.brandSlug, brand: p.brand, count: 0 };
        cur.count += 1;
        shared.set(p.brandSlug, cur);
      }
    }
    brandStatsCache.set(slug, {
      slug,
      name: brand.name,
      tier: brandTier(brand.name),
      models,
      canonicalModels: canonical,
      wallCount: models.filter((m) => m.kind === "murale").length,
      centralCount: models.filter((m) => m.kind === "centrale").length,
      coldClimateCount: models.filter((m) => m.coldClimate).length,
      certifiedCount: models.filter((m) => m.h5Btu !== null).length,
      minLogisVert: subsidised.length ? Math.min(...subsidised.map((m) => m.logisVertDollars)) : 0,
      maxLogisVert: subsidised.length ? Math.max(...subsidised.map((m) => m.logisVertDollars)) : 0,
      avgHspf2: withHspf.length ? round1(withHspf.reduce((a, m) => a + (m.hspf2 ?? 0), 0) / withHspf.length) : null,
      maxHspf2: withHspf.length ? Math.max(...withHspf.map((m) => m.hspf2 ?? 0)) : null,
      avgCop5: withCop.length ? round2(withCop.reduce((a, m) => a + (m.cop5 ?? 0), 0) / withCop.length) : null,
      bestCold: models.filter((m) => m.h5Btu !== null && m.cop5 !== null).sort((a, b) => (b.cop5 ?? 0) - (a.cop5 ?? 0))[0] ?? null,
      bestEfficiency: withHspf.sort((a, b) => (b.hspf2 ?? 0) - (a.hspf2 ?? 0))[0] ?? null,
      bestSubsidy: subsidised.sort((a, b) => b.logisVertDollars - a.logisVertDollars)[0] ?? null,
      capacities: [...new Set(models.map((m) => m.nominalBtu))].sort((a, b) => a - b),
      sharedWith: [...shared.values()].sort((a, b) => b.count - a.count).slice(0, 6),
    });
  }
  return [...brandStatsCache.values()].sort((a, b) => b.models.length - a.models.length);
}

export function getBrandStats(slug: string): BrandStats | null {
  getAllBrandStats();
  return brandStatsCache?.get(slug) ?? null;
}

/* ------------------------------------------------------------------
   Palmarès (classements sur données certifiées uniquement)
   ------------------------------------------------------------------ */

export interface RankingDef {
  slug: string;
  title: string;
  h1: string;
  description: string;
  metric: string;
  metricLabel: string;
  filter: (m: SeoModel) => boolean;
  sort: (a: SeoModel, b: SeoModel) => number;
  value: (m: SeoModel) => string;
}

export const RANKINGS: RankingDef[] = [
  {
    slug: "grand-froid",
    title: "Meilleures thermopompes grand froid au Québec",
    h1: "Les meilleures thermopompes pour le grand froid québécois",
    description: "Classement des thermopompes qui conservent le plus de capacité à -15 °C, d'après les capacités certifiées ENERGY STAR de la liste LogisVert d'Hydro-Québec.",
    metric: "cold",
    metricLabel: "COP à -15 °C · capacité à -15 °C",
    filter: (m) => m.h5Btu !== null && m.cop5 !== null && m.coldClimate,
    sort: (a, b) => (b.cop5 ?? 0) - (a.cop5 ?? 0) || coldHold(b) - coldHold(a),
    value: (m) => `COP ${(m.cop5 ?? 0).toLocaleString("fr-CA", { minimumFractionDigits: 2 })} · ${(m.h5Btu ?? 0).toLocaleString("fr-CA")} BTU/h`,
  },
  {
    slug: "efficacite-hspf2",
    title: "Thermopompes les plus efficaces (HSPF2) au Québec",
    h1: "Les thermopompes les plus efficaces en chauffage (HSPF2)",
    description: "Classement par HSPF2 certifié : plus l'indice est élevé, moins la thermopompe consomme d'électricité par unité de chaleur produite.",
    metric: "hspf2",
    metricLabel: "HSPF2",
    filter: (m) => m.hspf2 !== null,
    sort: (a, b) => (b.hspf2 ?? 0) - (a.hspf2 ?? 0),
    value: (m) => `${(m.hspf2 ?? 0).toLocaleString("fr-CA")}`,
  },
  {
    slug: "cop-15",
    title: "Meilleur COP à -15 °C : thermopompes les plus performantes par grand froid",
    h1: "Les thermopompes au meilleur COP à -15 °C",
    description: "Le COP à -15 °C mesure l'efficacité réelle quand il fait froid. Classement d'après les valeurs certifiées.",
    metric: "cop5",
    metricLabel: "COP à -15 °C",
    filter: (m) => m.cop5 !== null,
    sort: (a, b) => (b.cop5 ?? 0) - (a.cop5 ?? 0),
    value: (m) => `${(m.cop5 ?? 0).toLocaleString("fr-CA", { minimumFractionDigits: 2 })}`,
  },
  {
    slug: "subvention-logisvert",
    title: "Thermopompes avec la plus grosse subvention LogisVert",
    h1: "Les thermopompes les plus subventionnées par LogisVert",
    description: "Classement par montant officiel LogisVert (Hydro-Québec) pour l'appariement de référence de chaque machine.",
    metric: "logisvert",
    metricLabel: "Subvention LogisVert",
    filter: (m) => m.logisVertDollars > 0,
    sort: (a, b) => b.logisVertDollars - a.logisVertDollars,
    value: (m) => `${m.logisVertDollars.toLocaleString("fr-CA")} $`,
  },
  {
    slug: "murales-12000-btu",
    title: "Meilleures thermopompes murales 12 000 BTU au Québec",
    h1: "Les meilleures thermopompes murales 12 000 BTU",
    description: "Le calibre le plus vendu au Québec : classement des murales 12 000 BTU par capacité conservée à -15 °C, puis par HSPF2.",
    metric: "retention",
    metricLabel: "HSPF2 · capacité à -15 °C",
    filter: (m) => m.kind === "murale" && m.nominalBtu === 12000 && m.h5Btu !== null && m.hspf2 !== null,
    sort: (a, b) => (b.hspf2 ?? 0) - (a.hspf2 ?? 0) || coldHold(b) - coldHold(a),
    value: (m) => `HSPF2 ${(m.hspf2 ?? 0).toLocaleString("fr-CA")} · ${(m.h5Btu ?? 0).toLocaleString("fr-CA")} BTU/h à -15 °C`,
  },
  {
    slug: "centrales",
    title: "Meilleures thermopompes centrales au Québec",
    h1: "Les meilleures thermopompes centrales pour maison avec conduits",
    description: "Classement des thermopompes centrales (gainables) par capacité conservée à -15 °C et HSPF2, d'après les données certifiées.",
    metric: "retention",
    metricLabel: "HSPF2 · capacité à -15 °C",
    filter: (m) => m.kind === "centrale" && m.h5Btu !== null && m.hspf2 !== null,
    sort: (a, b) => (b.hspf2 ?? 0) - (a.hspf2 ?? 0) || coldHold(b) - coldHold(a),
    value: (m) => `HSPF2 ${(m.hspf2 ?? 0).toLocaleString("fr-CA")} · ${(m.h5Btu ?? 0).toLocaleString("fr-CA")} BTU/h à -15 °C`,
  },
];

export function getRanking(slug: string, limit = 25): { def: RankingDef; models: SeoModel[] } | null {
  const def = RANKINGS.find((r) => r.slug === slug);
  if (!def) return null;
  const models = getCanonicalModels().filter(def.filter).sort(def.sort).slice(0, limit);
  return { def, models };
}

/* ------------------------------------------------------------------
   Comparaisons de marques
   ------------------------------------------------------------------ */

export const BRAND_PAIRS: Array<[string, string]> = [
  ["daikin", "mitsubishi-electric"],
  ["daikin", "fujitsu"],
  ["mitsubishi-electric", "fujitsu"],
  ["gree", "daikin"],
  ["gree", "midea"],
  ["lg", "samsung"],
  ["lg", "daikin"],
  ["bosch", "daikin"],
  ["lennox", "carrier"],
  ["carrier", "trane"],
  ["moovair", "gree"],
  ["tosot", "gree"],
  ["senville", "midea"],
  ["panasonic", "mitsubishi-electric"],
  ["napoleon", "gree"],
];

export function pairSlug(a: string, b: string): string {
  return `${a}-vs-${b}`;
}

export function getBrandPairs(): Array<{ slug: string; a: BrandStats; b: BrandStats }> {
  const out: Array<{ slug: string; a: BrandStats; b: BrandStats }> = [];
  for (const [x, y] of BRAND_PAIRS) {
    const a = getBrandStats(x);
    const b = getBrandStats(y);
    if (a && b) out.push({ slug: pairSlug(x, y), a, b });
  }
  return out;
}

export function getBrandPair(slug: string): { a: BrandStats; b: BrandStats } | null {
  const hit = getBrandPairs().find((p) => p.slug === slug);
  return hit ? { a: hit.a, b: hit.b } : null;
}

/* ------------------------------------------------------------------
   Utilitaires
   ------------------------------------------------------------------ */

/** Tenue de capacité entre -8 °C et -15 °C (deux points certifiés du même appariement). */
export function coldHold(m: SeoModel): number {
  if (!m.h5Btu || !m.h17Btu) return 0;
  return Math.min(m.h5Btu / m.h17Btu, 1.2);
}

export function retention(m: SeoModel): number {
  if (!m.h5Btu || !m.nominalBtu) return 0;
  return Math.min(m.h5Btu / m.nominalBtu, 1.3);
}

/** Tri par qualité générale : certifié d'abord, puis rétention, puis HSPF2, puis subvention. */
export function byQuality(a: SeoModel, b: SeoModel): number {
  const cert = Number(b.h5Btu !== null) - Number(a.h5Btu !== null);
  if (cert !== 0) return cert;
  const r = coldHold(b) - coldHold(a);
  if (Math.abs(r) > 0.01) return r;
  const h = (b.hspf2 ?? 0) - (a.hspf2 ?? 0);
  if (h !== 0) return h;
  return b.logisVertDollars - a.logisVertDollars;
}

export function modelsForBrandKind(brandSlug: string, kind: SeoKind): SeoModel[] {
  return getSeoModels().filter((m) => m.brandSlug === brandSlug && m.kind === kind).sort(byQuality);
}

const round1 = (v: number) => Math.round(v * 10) / 10;
const round2 = (v: number) => Math.round(v * 100) / 100;
