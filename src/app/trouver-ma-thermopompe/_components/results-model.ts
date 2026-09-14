/* ==================================================================
   ThermoMatch — données de l'écran des résultats (« Le corrigé »).
   Sans React et sans « use client » : importable par les pages serveur
   (lien partagé) et par les tests.
   - Palette du corrigé : mêmes valeurs que le carnet (CARNET, FlowBar),
     recopiées ici parce qu'une constante d'un module client n'est pas
     lisible depuis un composant serveur.
   - Fiche de chaque recommandation (toCard) et critères comparés
     entre les trois (déplacés tels quels de ThermoMatchResults).
   - Lignes du calcul de la charge posé dans la marge (buildLoadCalc)
     et note « machines évaluées → retenues » (funnelParts).
   Règle : chaque nombre vient de summaryContext ou des résultats ;
   valeur absente = « N/D » ou ligne omise, jamais un zéro inventé.
   ================================================================== */
import type { SavingsEstimate } from "@/lib/thermomatch/savings";
import { categorieDe, type CategorieThermopompe } from "@/lib/garantie-legale/config";

export const K = {
  paper: "#F7F3EC",
  /** Feuille des recommandations : un ton plus clair que la page. */
  sheet: "#FCFAF6",
  ink: "#171B1E",
  /** Texte secondaire : 5:1 et plus sur le papier. */
  soft: "rgba(23,27,30,0.68)",
  line: "rgba(23,27,30,0.12)",
  rule: "rgba(23,27,30,0.26)",
  /** Traits de plume et grands chiffres. */
  orange: "#E54B17",
  /** Annotations en petit texte : l'orange assombri reste lisible (5:1). */
  rust: "#B8360C",
  tape: "rgba(232,222,203,0.85)",
} as const;

export interface SummaryContext {
  estimatedLoadBtu: number;
  targetBtu: number;
  floors: number;
  requestedZones: number;
  isMultiZone: boolean;
  heatedAreaFt2: number;
  climateZone?: string | null;
  region?: string | null;
  uncertaintyPct?: number;
  loadFactors?: Record<string, number>;
  weights?: Record<string, number>;
  notices?: string[];
  candidatesEvaluated?: number;
  candidatesRetained?: number;
  logisVertUpdatedAt?: string | null;
  /** Économies de chauffage estimées (plinthes électriques seulement). */
  savings?: SavingsEstimate | null;
}

/* ---------------------------- Formats ---------------------------- */

export const NB = " ";
export const ND = "N/D";
export const num = (v: unknown): number | null => (typeof v === "number" && Number.isFinite(v) ? v : null);
export const fr = (n: number, d = 0) => n.toLocaleString("fr-CA", { minimumFractionDigits: d, maximumFractionDigits: d });
export const money = (n: number) => `${fr(Math.round(n / 50) * 50)}${NB}$`;
export const temp = (v: number) => `${v < 0 ? "−" : v > 0 ? "+" : ""}${fr(Math.abs(v))}${NB}°C`;
/** Étiquette (« Le plus efficace ») écrite en annotation : minuscule initiale. */
export const note = (t: string) => t.charAt(0).toLowerCase() + t.slice(1);
const plural = (n: number, one: string, many: string) => (n > 1 ? many : one);

/* ------------------------ Critères comparés ------------------------ */

export type MetricKey = "minTemp" | "h5" | "hspf2" | "seer2" | "cop5" | "subsidy";
export const METRICS: { key: MetricKey; label: string; unit: string; d: number; tag: string; lower?: boolean }[] = [
  { key: "minTemp", label: "Chauffe jusqu’à", unit: "Température extérieure minimale publiée par le fabricant", d: 0, tag: "Chauffe par le plus grand froid", lower: true },
  { key: "h5", label: "Chaleur à −15 °C", unit: "BTU/h, certifiée ENERGY STAR", d: 0, tag: "Le plus puissant au grand froid" },
  { key: "hspf2", label: "Efficacité en chauffage", unit: "HSPF2", d: 1, tag: "Le plus efficace" },
  { key: "seer2", label: "Efficacité en climatisation", unit: "SEER2", d: 1, tag: "Le meilleur en été" },
  { key: "cop5", label: "Rendement à −15 °C", unit: "COP", d: 2, tag: "Le meilleur rendement au froid" },
  { key: "subsidy", label: "Subvention LogisVert", unit: "Montant officiel pour cet appariement", d: 0, tag: "La plus grosse subvention" },
];

/** Pondération du score, dans l'ordre d'affichage. */
export const WEIGHTS: [string, string][] = [
  ["fit", "Adéquation à la charge"],
  ["cold", "Performance par grand froid"],
  ["efficiency", "Efficacité (HSPF2, SEER2)"],
  ["subsidy", "Subvention LogisVert"],
  ["budget", "Budget"],
  ["dataQuality", "Qualité des données"],
];

export type Card = {
  key: string;
  badge: string;
  score: number | null;
  brand: string;
  series: string;
  outdoor: string;
  img: string;
  ownImage: boolean;
  coldClimate: boolean;
  h5: number | null;
  h5Certified: boolean;
  hspf2: number | null;
  seer2: number | null;
  cop5: number | null;
  subsidy: number;
  coverage: number | null;
  /** Capacité à -15 °C / capacité nominale. */
  retention: number | null;
  /** Température extérieure minimale de chauffage (fabricant), si connue. */
  minTemp: number | null;
  price: { min: number; max: number; basis: string; sources: number; tierLabel: string; matchLabel: string } | null;
  /** Type de thermopompe (mention de la garantie légale de bon fonctionnement près du prix). */
  categorie: CategorieThermopompe | null;
  reasons: string[];
  warnings: string[];
  architectureNote: string | null;
  alsoSoldAs: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  raw: any;
};

const FALLBACK = {
  central: "/images/categorie-centrale-samsung-hd.webp",
  multi: "/images/categorie-multizone-mitsubishi-electric-hd.webp",
  wall: "/images/categorie-murale-daikin-hd.webp",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function toCard(r: any, i: number, ctx?: SummaryContext | null): Card {
  const p = r?.product ?? {};
  const sp = r?.selectedPairing ?? {};
  const h5 = num(p.heatingCapacity5FBtuH?.min);
  const load = num(ctx?.estimatedLoadBtu);
  return {
    key: String(p.id ?? i),
    badge: r?.badge ?? (i === 0 ? "Meilleur choix" : "Alternative"),
    score: num(r?.score),
    brand: p.brand ?? "",
    series: p.series ?? "",
    outdoor: p.outdoorModel ?? "",
    img: p.imageUrl || (p.systemType === "central" ? FALLBACK.central : ctx?.isMultiZone ? FALLBACK.multi : FALLBACK.wall),
    ownImage: Boolean(p.imageUrl),
    coldClimate: Boolean(p.coldClimate),
    h5,
    h5Certified: p.h5Certified !== false,
    hspf2: num(sp.hspf2?.min),
    seer2: num(sp.seer2?.min),
    cop5: num(sp.cop5F?.min),
    subsidy: num(r?.subsidyEstimate) ?? 0,
    coverage: num(r?.fitRatio) ?? (h5 && load ? h5 / load : null),
    retention: h5 && num(p.nominalBtu) ? h5 / (p.nominalBtu as number) : null,
    minTemp: num(p.minOperatingTempC),
    price: r?.priceRange && num(r.priceRange.min) != null && num(r.priceRange.max) != null ? r.priceRange : null,
    // Toutes les recommandations sont des thermopompes neuves : murale par défaut si le type manque.
    categorie: categorieDe(p.systemType, ctx?.isMultiZone ? ctx.requestedZones : 1) ?? (ctx?.isMultiZone ? "multizone" : "murale"),
    reasons: r?.clientReasons ?? r?.reasons ?? [],
    warnings: r?.warnings ?? [],
    architectureNote: r?.architectureNote ?? null,
    alsoSoldAs: p.alsoSoldAs ?? [],
    raw: r,
  };
}

export const valueOf = (c: Card, k: MetricKey): number | null => (k === "subsidy" ? (c.subsidy > 0 ? c.subsidy : null) : c[k]);

export function leadersFor(cards: Card[], k: MetricKey, lower = false): number[] {
  const vals = cards.map((c) => valueOf(c, k));
  // Critère « plus bas = meilleur » (température minimale) : on ne désigne un meilleur que si les trois sont connus.
  if (lower && vals.some((v) => v == null)) return [];
  const best = lower ? Math.min(...vals.map((v) => v ?? Infinity)) : Math.max(...vals.map((v) => v ?? -Infinity));
  if (!Number.isFinite(best)) return [];
  return vals.flatMap((v, i) => (v === best ? [i] : []));
}

/* ------------------- Calcul de la charge, dans la marge ------------------- */

/** Une ligne du calcul : opérateur, valeur déjà formatée (ou « N/D »), unité, ce qu'elle représente. */
export type CalcLine = { key: string; op: "" | "×" | "≈" | "±" | "→"; value: string; unit: string; label: string };
export type LoadCalc = { steps: CalcLine[]; total: CalcLine; notes: CalcLine[] };

/** Facteurs de charge du moteur (sizing.ts), dans l'ordre de la multiplication. */
const FACTORS: { key: string; label: string; unit?: string }[] = [
  { key: "baseBtuPerFt2", label: "base de calcul", unit: "BTU/h par pi²" },
  { key: "homeType", label: "type de propriété" },
  { key: "floors", label: "étages" },
  { key: "construction", label: "année de construction" },
  { key: "insulation", label: "isolation" },
  { key: "windows", label: "fenestration" },
  { key: "basement", label: "sous-sol" },
];

/**
 * Le calcul de la charge tel qu'il est posé dans la marge : superficie chauffée, facteurs de charge
 * (s'ils sont fournis), trait, charge estimée à -15 °C ; puis marge d'incertitude, calibre visé et zones.
 * Uniquement les valeurs présentes dans summaryContext : une valeur absente s'écrit « N/D » (superficie,
 * facteur, charge) ou sa ligne est omise (incertitude, calibre, zones, étages).
 */
export function buildLoadCalc(ctx: Partial<SummaryContext> | null | undefined): LoadCalc | null {
  if (!ctx) return null;
  const area = num(ctx.heatedAreaFt2);
  const floors = num(ctx.floors);
  const zones = num(ctx.requestedZones);
  const f = ctx.loadFactors && typeof ctx.loadFactors === "object" ? ctx.loadFactors : null;

  const steps: CalcLine[] = [{ key: "area", op: "", value: area != null ? fr(area) : ND, unit: area != null ? "pi²" : "", label: "superficie chauffée" }];
  if (f) {
    for (const d of FACTORS) {
      const v = num(f[d.key]);
      // La base (BTU/h par pi²) s'écrit comme un nombre ; les multiplicateurs, à deux décimales.
      const value = v == null ? ND : d.unit ? (Number.isInteger(v) ? fr(v) : fr(v, 1)) : fr(v, 2);
      const label = d.key === "floors" && floors != null ? `étages (${fr(floors)})` : d.label;
      steps.push({ key: d.key, op: "×", value, unit: v != null ? (d.unit ?? "") : "", label });
    }
  } else if (floors != null) {
    // Sans facteurs : le nombre d'étages reste une donnée de la maison, pas un multiplicateur.
    steps.push({ key: "floors", op: "", value: fr(floors), unit: "", label: plural(floors, "étage", "étages") });
  }

  const load = num(ctx.estimatedLoadBtu);
  // « ≈ » : le moteur arrondit la charge (aux 500 BTU/h) après la multiplication.
  const total: CalcLine = { key: "load", op: "≈", value: load != null ? fr(Math.round(load)) : ND, unit: load != null ? "BTU/h" : "", label: `charge estimée à −15${NB}°C` };

  const notes: CalcLine[] = [];
  const u = num(ctx.uncertaintyPct);
  if (u != null) notes.push({ key: "uncertainty", op: "±", value: fr(u), unit: "%", label: "marge de l’estimation" });
  const target = num(ctx.targetBtu);
  if (target != null) notes.push({ key: "target", op: "→", value: fr(Math.round(target)), unit: "BTU/h", label: `calibre visé à −15${NB}°C` });
  if (zones != null) notes.push({ key: "zones", op: "", value: fr(zones), unit: "", label: plural(zones, "zone à chauffer", "zones à chauffer") });

  return { steps, total, notes };
}

export type FunnelPart = { key: string; value: string; label: string };

/** « machines évaluées → de bon calibre → retenues » : seulement les nombres réellement fournis. */
export function funnelParts(ctx: Partial<SummaryContext> | null | undefined, kept: number): FunnelPart[] {
  const evaluated = num(ctx?.candidatesEvaluated);
  if (evaluated == null) return [];
  const retained = num(ctx?.candidatesRetained);
  return [
    { key: "evaluated", value: fr(evaluated), label: plural(evaluated, "machine évaluée", "machines évaluées") },
    ...(retained != null ? [{ key: "retained", value: fr(retained), label: "de bon calibre pour votre maison" }] : []),
    { key: "kept", value: fr(kept), label: plural(kept, "retenue pour vous", "retenues pour vous") },
  ];
}
