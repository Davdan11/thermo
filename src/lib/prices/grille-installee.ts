/* ==================================================================
   Fourchettes de prix installé au Québec, par type × calibre × gamme

   Source : data/prices/fourchettes-publiees.json (211 relevés copiés de
   pages publiées, consultées le 2026-09-10 ; synthèse dans
   fourchettes-publiees.md). Chaque case ci-dessous reprend la médiane
   des bornes basses et hautes des relevés « prix installé » retenus.
   Les cases marquées `basis: "derive"` sont interpolées entre deux
   calibres voisins publiés et affichées comme telles.

   Périmètre : installation standard, avant subvention LogisVert, taxes
   le plus souvent non précisées par les sources ; centrale = ajout d'une
   thermopompe sur un réseau de conduits existant, sans fournaise.
   ================================================================== */

export type PriceTier = "economique" | "intermediaire" | "premium" | "toutes";
export type PriceKind = "murale" | "multizone" | "centrale";

export interface PriceCell {
  kind: PriceKind;
  /** Capacité nominale en BTU (murale, centrale). */
  btu?: number;
  /** Nombre de zones (multizone). */
  zones?: number;
  tier: PriceTier;
  min: number;
  max: number;
  /** Nombre de pages sources distinctes derrière la case (0 pour une case dérivée). */
  sources: number;
  basis: "publie" | "derive";
  note?: string;
}

export const PRICE_GRID_CONSULTED_AT = "2026-09-10";

export const PRICE_GRID: PriceCell[] = [
  // ---- Murale simple zone ----
  { kind: "murale", btu: 6000, tier: "economique", min: 2600, max: 3200, sources: 0, basis: "derive", note: "dérivé de 9 000 BTU" },
  { kind: "murale", btu: 6000, tier: "intermediaire", min: 3200, max: 4000, sources: 0, basis: "derive", note: "dérivé de 9 000 BTU" },
  { kind: "murale", btu: 6000, tier: "premium", min: 4000, max: 5300, sources: 0, basis: "derive", note: "dérivé de 9 000 BTU" },
  { kind: "murale", btu: 9000, tier: "economique", min: 2900, max: 3500, sources: 1, basis: "publie" },
  { kind: "murale", btu: 9000, tier: "intermediaire", min: 3600, max: 4400, sources: 1, basis: "publie" },
  { kind: "murale", btu: 9000, tier: "premium", min: 4400, max: 5850, sources: 2, basis: "publie" },
  { kind: "murale", btu: 12000, tier: "economique", min: 2500, max: 3500, sources: 8, basis: "publie" },
  { kind: "murale", btu: 12000, tier: "intermediaire", min: 3000, max: 4100, sources: 5, basis: "publie" },
  { kind: "murale", btu: 12000, tier: "premium", min: 4500, max: 6200, sources: 8, basis: "publie" },
  { kind: "murale", btu: 12000, tier: "toutes", min: 3250, max: 5100, sources: 7, basis: "publie" },
  { kind: "murale", btu: 15000, tier: "economique", min: 2900, max: 3800, sources: 0, basis: "derive", note: "interpolé entre 12 000 et 18 000 BTU" },
  { kind: "murale", btu: 15000, tier: "intermediaire", min: 3300, max: 4550, sources: 0, basis: "derive", note: "interpolé entre 12 000 et 18 000 BTU" },
  { kind: "murale", btu: 15000, tier: "premium", min: 4800, max: 6800, sources: 1, basis: "publie" },
  { kind: "murale", btu: 18000, tier: "economique", min: 3350, max: 4050, sources: 2, basis: "publie" },
  { kind: "murale", btu: 18000, tier: "intermediaire", min: 3600, max: 5000, sources: 4, basis: "publie" },
  { kind: "murale", btu: 18000, tier: "premium", min: 5800, max: 8200, sources: 4, basis: "publie" },
  { kind: "murale", btu: 18000, tier: "toutes", min: 4650, max: 6600, sources: 9, basis: "publie" },
  { kind: "murale", btu: 24000, tier: "economique", min: 3750, max: 4550, sources: 0, basis: "derive", note: "dérivé de 18 000 BTU (+12 %) ; la seule fourchette publiée (3 000–3 800 $) est inférieure au 18 000 BTU et n'a pas été retenue" },
  { kind: "murale", btu: 24000, tier: "intermediaire", min: 4050, max: 5600, sources: 0, basis: "derive", note: "dérivé de 18 000 BTU (+12 %)" },
  { kind: "murale", btu: 24000, tier: "premium", min: 6500, max: 9500, sources: 2, basis: "publie" },
  { kind: "murale", btu: 24000, tier: "toutes", min: 4500, max: 7000, sources: 5, basis: "publie" },
  { kind: "murale", btu: 30000, tier: "economique", min: 4300, max: 5200, sources: 0, basis: "derive", note: "dérivé de 24 000 BTU (+15 %)" },
  { kind: "murale", btu: 30000, tier: "intermediaire", min: 4650, max: 6450, sources: 0, basis: "derive", note: "dérivé de 24 000 BTU (+15 %)" },
  { kind: "murale", btu: 30000, tier: "premium", min: 7500, max: 10900, sources: 0, basis: "derive", note: "dérivé de 24 000 BTU (+15 %)" },
  { kind: "murale", btu: 36000, tier: "economique", min: 4900, max: 6000, sources: 0, basis: "derive", note: "dérivé de 24 000 BTU (+30 %)" },
  { kind: "murale", btu: 36000, tier: "intermediaire", min: 5300, max: 7300, sources: 0, basis: "derive", note: "dérivé de 24 000 BTU (+30 %)" },
  { kind: "murale", btu: 36000, tier: "premium", min: 8450, max: 12350, sources: 0, basis: "derive", note: "dérivé de 24 000 BTU (+30 %)" },

  // ---- Multizone (par nombre de zones) ----
  { kind: "multizone", zones: 2, tier: "premium", min: 7650, max: 11000, sources: 3, basis: "publie" },
  { kind: "multizone", zones: 2, tier: "toutes", min: 4500, max: 8500, sources: 1, basis: "publie" },
  { kind: "multizone", zones: 3, tier: "premium", min: 11150, max: 14650, sources: 2, basis: "publie" },
  { kind: "multizone", zones: 3, tier: "toutes", min: 7500, max: 10500, sources: 1, basis: "publie" },
  { kind: "multizone", zones: 4, tier: "premium", min: 13500, max: 17200, sources: 1, basis: "publie" },
  { kind: "multizone", zones: 4, tier: "toutes", min: 8500, max: 12000, sources: 1, basis: "publie" },
  { kind: "multizone", zones: 5, tier: "premium", min: 15200, max: 19200, sources: 1, basis: "publie" },
  { kind: "multizone", zones: 5, tier: "toutes", min: 9500, max: 15000, sources: 1, basis: "publie" },

  // ---- Centrale gainable (ajout sur conduits existants, sans fournaise) ----
  { kind: "centrale", btu: 18000, tier: "toutes", min: 7500, max: 10500, sources: 0, basis: "derive", note: "dérivé de 24 000 BTU (-10 %)" },
  { kind: "centrale", btu: 24000, tier: "intermediaire", min: 8500, max: 11000, sources: 1, basis: "publie" },
  { kind: "centrale", btu: 24000, tier: "premium", min: 9500, max: 12800, sources: 1, basis: "publie" },
  { kind: "centrale", btu: 24000, tier: "toutes", min: 8500, max: 11500, sources: 6, basis: "publie" },
  { kind: "centrale", btu: 30000, tier: "toutes", min: 9500, max: 13000, sources: 1, basis: "publie" },
  { kind: "centrale", btu: 36000, tier: "intermediaire", min: 9800, max: 13200, sources: 1, basis: "publie" },
  { kind: "centrale", btu: 36000, tier: "premium", min: 11500, max: 14800, sources: 2, basis: "publie" },
  { kind: "centrale", btu: 36000, tier: "toutes", min: 11000, max: 14900, sources: 7, basis: "publie" },
  { kind: "centrale", btu: 42000, tier: "toutes", min: 12000, max: 16500, sources: 0, basis: "derive", note: "interpolé entre 36 000 et 48 000 BTU" },
  { kind: "centrale", btu: 48000, tier: "toutes", min: 13000, max: 18000, sources: 3, basis: "publie" },
  { kind: "centrale", btu: 60000, tier: "premium", min: 16800, max: 19800, sources: 1, basis: "publie" },
  { kind: "centrale", btu: 60000, tier: "toutes", min: 16800, max: 19800, sources: 3, basis: "publie" },
];

export const TIER_LABEL: Record<PriceTier, string> = {
  economique: "gamme économique",
  intermediaire: "gamme intermédiaire",
  premium: "gamme premium",
  toutes: "toutes gammes",
};

/** Correspondance avec les paliers de marque du site (src/lib/thermomatch/tiers.ts). */
export function tierFromBrandTier(brandTier: "premium" | "mid" | "value"): PriceTier {
  return brandTier === "premium" ? "premium" : brandTier === "value" ? "economique" : "intermediaire";
}

export function priceKindOf(systemType: string, zones: number | null | undefined): PriceKind {
  if (systemType === "central-ducted" || systemType === "hybrid") return "centrale";
  if (systemType === "multi-zone" || (zones != null && zones > 1)) return "multizone";
  return "murale";
}

const MURALE_BTU = [6000, 9000, 12000, 15000, 18000, 24000, 30000, 36000];
const CENTRALE_BTU = [18000, 24000, 30000, 36000, 42000, 48000, 60000];

function nearest(values: number[], target: number): number {
  return values.reduce((best, v) => (Math.abs(v - target) < Math.abs(best - target) ? v : best), values[0]);
}

export interface PriceRange extends PriceCell {
  tierLabel: string;
  /** Calibre ou nombre de zones réellement utilisé pour la case. */
  matchLabel: string;
}

/**
 * Fourchette installée pour une machine : par calibre nominal (murale, centrale)
 * ou par nombre de zones (multizone) et par gamme de marque. Retourne null si
 * aucune case ne convient (calibre hors grille).
 */
export function installedPriceRange(input: { systemType: string; nominalBtu: number | null | undefined; zones?: number | null; brandTier: "premium" | "mid" | "value" }): PriceRange | null {
  const kind = priceKindOf(input.systemType, input.zones);
  const tier = tierFromBrandTier(input.brandTier);
  let candidates: PriceCell[];
  let matchLabel: string;
  if (kind === "multizone") {
    const z = Math.min(5, Math.max(2, input.zones ?? 2));
    candidates = PRICE_GRID.filter((c) => c.kind === "multizone" && c.zones === z);
    matchLabel = `${z} zones`;
  } else {
    if (!input.nominalBtu) return null;
    const list = kind === "centrale" ? CENTRALE_BTU : MURALE_BTU;
    const btu = nearest(list, input.nominalBtu);
    if (Math.abs(btu - input.nominalBtu) > 6000) return null;
    candidates = PRICE_GRID.filter((c) => c.kind === kind && c.btu === btu);
    matchLabel = `${(btu / 1000).toFixed(0)} 000 BTU`;
  }
  if (candidates.length === 0) return null;
  const cell = candidates.find((c) => c.tier === tier) ?? candidates.find((c) => c.tier === "toutes") ?? candidates[0];
  return { ...cell, tierLabel: TIER_LABEL[cell.tier], matchLabel };
}

/* ------------------------------------------------------------------
   ThermoMatch : une fourchette par architecture, pas par machine
   ------------------------------------------------------------------ */

/** Libellé obligatoire à côté de toute fourchette ThermoMatch : jamais un prix de vente. */
export const ORDRE_DE_GRANDEUR_LABEL = "Ordre de grandeur indicatif du marché québécois, pas un prix de vente";

const kBtu = (btu: number) => `${(btu / 1000).toFixed(0)} 000 BTU`;
const frNum = (n: number) => n.toLocaleString("fr-CA");

/** Case de la gamme demandée, sinon « toutes gammes », sinon l'enveloppe des gammes publiées pour ce calibre. */
function cellFor(kind: PriceKind, key: { btu?: number; zones?: number }, tier: PriceTier): PriceCell | null {
  const cells = PRICE_GRID.filter((c) => c.kind === kind && (key.btu == null || c.btu === key.btu) && (key.zones == null || c.zones === key.zones));
  if (cells.length === 0) return null;
  const hit = cells.find((c) => c.tier === tier) ?? cells.find((c) => c.tier === "toutes");
  if (hit) return hit;
  return {
    kind,
    ...key,
    tier: "toutes",
    min: Math.min(...cells.map((c) => c.min)),
    max: Math.max(...cells.map((c) => c.max)),
    sources: cells.reduce((s, c) => s + c.sources, 0),
    basis: cells.every((c) => c.basis === "publie") ? "publie" : "derive",
    note: "enveloppe des gammes publiées",
  };
}

function calibreIn(list: number[], target: number): number | null {
  const b = nearest(list, target);
  return Math.abs(b - target) > 6000 ? null : b;
}

/**
 * Fourchette installée d'une architecture ThermoMatch (architecture.ts) : la centrale selon son calibre,
 * la multizone selon son nombre de zones, les murales indépendantes par addition d'une murale par zone.
 * `nominalBtu` : calibre d'une machine précise (centrale, murale simple) ; sinon celui de l'architecture.
 */
export function architecturePriceRange(
  d: { kind: string; heads: number; sizingLoadBtuH: number; zonePlan: Array<{ headNominalBtu: number | null; servedBy: string }> },
  opts: { tier?: PriceTier; nominalBtu?: number | null } = {},
): PriceRange | null {
  const tier = opts.tier ?? "toutes";
  const withLabels = (cell: PriceCell | null, matchLabel: string): PriceRange | null => (cell ? { ...cell, tierLabel: TIER_LABEL[cell.tier], matchLabel } : null);
  if (d.kind === "central" || d.kind === "central-hybrid") {
    const b = calibreIn(CENTRALE_BTU, opts.nominalBtu || d.sizingLoadBtuH);
    return b ? withLabels(cellFor("centrale", { btu: b }, tier), `centrale ${kBtu(b)}`) : null;
  }
  if (d.kind === "multi-zone") {
    const z = Math.min(5, Math.max(2, d.heads));
    return withLabels(cellFor("multizone", { zones: z }, tier), `multizone ${z} zones`);
  }
  const tetes = d.zonePlan.filter((z) => z.servedBy === "tete" && z.headNominalBtu);
  if (d.kind === "single-zone") {
    const b = calibreIn(MURALE_BTU, opts.nominalBtu || tetes[0]?.headNominalBtu || d.sizingLoadBtuH);
    return b ? withLabels(cellFor("murale", { btu: b }, tier), `murale ${kBtu(b)}`) : null;
  }
  // Murales indépendantes : une murale par zone, chacune au calibre de sa zone, additionnées.
  const btus = tetes.map((z) => calibreIn(MURALE_BTU, z.headNominalBtu as number));
  const cells = btus.map((b) => (b ? cellFor("murale", { btu: b }, tier) : null));
  if (cells.length === 0 || cells.some((c) => !c)) return null;
  const ok = cells as PriceCell[];
  const list = (btus as number[]).map(frNum);
  const liste = list.length > 1 ? `${list.slice(0, -1).join(", ")} et ${list[list.length - 1]}` : list[0];
  return {
    kind: "murale",
    tier,
    min: ok.reduce((s, c) => s + c.min, 0),
    max: ok.reduce((s, c) => s + c.max, 0),
    sources: 0,
    basis: "derive",
    note: `addition de ${ok.length} murales (${liste} BTU)`,
    tierLabel: TIER_LABEL[tier],
    matchLabel: `${ok.length} murales`,
  };
}

/** Enveloppe de plusieurs fourchettes (des machines de calibres différents dans une même architecture). */
export function envelopeRange(ranges: Array<PriceRange | null>): PriceRange | null {
  const r = ranges.filter((x): x is PriceRange => x != null);
  if (r.length === 0) return null;
  return {
    ...r[0],
    min: Math.min(...r.map((x) => x.min)),
    max: Math.max(...r.map((x) => x.max)),
    basis: r.every((x) => x.basis === "publie") ? "publie" : "derive",
    note: "selon le calibre de chaque machine",
    matchLabel: "selon le calibre",
  };
}

export const money = (n: number) => `${Math.round(n / 50) * 50}`.replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " $";
