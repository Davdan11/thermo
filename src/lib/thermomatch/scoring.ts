/* ==================================================================
   ThermoMatch v2 — Score

   Chaque critère vaut entre 0 et 1, puis est multiplié par son poids.
   Les poids totalisent 100 et dépendent des priorités du client.
   Aucune valeur n'est inventée : quand une donnée manque, le critère
   reçoit une valeur neutre et le critère « qualité des données » baisse.
   ================================================================== */

import type { BrandTier, BudgetBracket, Candidate, Priority, ScoreBreakdown, ScoredCandidate, Weights } from "./types";

const clamp01 = (v: number) => Math.max(0, Math.min(1, v));
const lerp = (x: number, x0: number, x1: number, y0: number, y1: number) =>
  y0 + ((x - x0) / (x1 - x0)) * (y1 - y0);

/* ------------------------------------------------------------------
   Poids
   ------------------------------------------------------------------ */

export const DEFAULT_WEIGHTS: Weights = {
  fit: 35,
  cold: 20,
  efficiency: 20,
  subsidy: 10,
  budget: 10,
  dataQuality: 5,
};

/** Ajuste les poids selon les priorités, puis renormalise à 100. */
export function weightsFor(priorities: Priority[]): Weights {
  const w: Weights = { ...DEFAULT_WEIGHTS };
  for (const p of priorities) {
    if (p === "economies") { w.efficiency += 10; w.subsidy += 5; }
    if (p === "grand-froid") { w.cold += 15; }
    if (p === "prix") { w.budget += 10; w.subsidy += 5; }
    if (p === "qualite") { w.dataQuality += 5; w.budget += 5; }
    // "silence" : aucune donnée de bruit dans la base, on ne peut pas scorer.
  }
  const total = Object.values(w).reduce((a, b) => a + b, 0);
  const scale = 100 / total;
  return {
    fit: w.fit * scale,
    cold: w.cold * scale,
    efficiency: w.efficiency * scale,
    subsidy: w.subsidy * scale,
    budget: w.budget * scale,
    dataQuality: w.dataQuality * scale,
  };
}

/* ------------------------------------------------------------------
   Fenêtre de capacité
   ------------------------------------------------------------------ */

/** Limites dures : en dehors, la machine n'est pas proposée du tout. */
export function capacityWindow(backupHeatAvailable: boolean): { minRatio: number; maxRatio: number } {
  return { minRatio: backupHeatAvailable ? 0.5 : 0.65, maxRatio: 1.8 };
}

/**
 * Adéquation entre la capacité certifiée à -15 °C et la charge estimée.
 * Idéal : 95 % à 120 % de la charge. Une machine trop grosse cycle et
 * coûte plus cher ; une machine trop petite laisse les plinthes faire le travail.
 */
export function fitScore(ratio: number, backupHeatAvailable: boolean): number {
  if (ratio >= 0.95 && ratio <= 1.2) return 1;
  if (ratio < 0.95) {
    if (ratio >= 0.8) return lerp(ratio, 0.8, 0.95, 0.6, 1);
    if (backupHeatAvailable) return clamp01(lerp(ratio, 0.5, 0.8, 0, 0.6));
    return clamp01(lerp(ratio, 0.65, 0.8, 0, 0.6));
  }
  if (ratio <= 1.45) return lerp(ratio, 1.2, 1.45, 1, 0.6);
  return clamp01(lerp(ratio, 1.45, 1.8, 0.6, 0));
}

/* ------------------------------------------------------------------
   Autres critères
   ------------------------------------------------------------------ */

/** Performance par grand froid : rétention de capacité à -15 °C, COP à -15 °C, certification. */
export function coldScore(c: Candidate): number {
  const retention = c.nominalBtu > 0 ? clamp01((c.h5Btu / c.nominalBtu - 0.6) / 0.4) : 0.5;
  const cop = c.cop5 !== undefined ? clamp01((c.cop5 - 1.5) / 1.0) : 0.5;
  const certified = c.coldClimate ? 1 : 0;
  return 0.5 * retention + 0.3 * cop + 0.2 * certified;
}

/** Efficacité saisonnière : HSPF2 d'abord (chauffage), SEER2 ensuite. */
export function efficiencyScore(c: Candidate): number {
  const hspf = c.hspf2 !== undefined ? clamp01((c.hspf2 - 7) / 5) : 0.4;
  const seer = c.seer2 !== undefined ? clamp01((c.seer2 - 14) / 14) : 0.4;
  return 0.7 * hspf + 0.3 * seer;
}

/** Subvention LogisVert relative au meilleur montant du bassin de candidats. */
export function subsidyScore(c: Candidate, maxDollars: number): number {
  if (maxDollars <= 0) return 0.5;
  return clamp01(c.logisVertDollars / maxDollars);
}

const BUDGET_TIER_MATRIX: Record<BudgetBracket, Record<BrandTier, number>> = {
  unknown: { value: 0.7, mid: 0.7, premium: 0.7 },
  low: { value: 1.0, mid: 0.6, premium: 0.2 },
  mid: { value: 0.8, mid: 1.0, premium: 0.6 },
  high: { value: 0.6, mid: 0.9, premium: 1.0 },
  top: { value: 0.4, mid: 0.8, premium: 1.0 },
};

/** Adéquation entre le budget déclaré et le positionnement de la marque. */
export function budgetScore(c: Candidate, budget: BudgetBracket, priorities: Priority[]): number {
  let s = BUDGET_TIER_MATRIX[budget][c.tier];
  if (priorities.includes("qualite") && c.tier === "premium") s = Math.min(1, s + 0.3);
  if (priorities.includes("prix") && c.tier === "value") s = Math.min(1, s + 0.2);
  return s;
}

/** Données certifiées ENERGY STAR (h5, COP) contre données estimées. */
export function dataQualityScore(c: Candidate): number {
  let s = c.h5Certified ? 1 : 0.4;
  if (c.hspf2 === undefined) s -= 0.2;
  if (c.cop5 === undefined) s -= 0.1;
  return clamp01(s);
}

/* ------------------------------------------------------------------
   Score total
   ------------------------------------------------------------------ */

export interface ScoringContext {
  loadBtuH: number;
  backupHeatAvailable: boolean;
  budget: BudgetBracket;
  priorities: Priority[];
  weights: Weights;
  maxSubsidyDollars: number;
}

export function scoreCandidate(c: Candidate, ctx: ScoringContext): ScoredCandidate {
  const ratio = c.h5Btu / ctx.loadBtuH;
  const raw: ScoreBreakdown = {
    fit: fitScore(ratio, ctx.backupHeatAvailable),
    cold: coldScore(c),
    efficiency: efficiencyScore(c),
    subsidy: subsidyScore(c, ctx.maxSubsidyDollars),
    budget: budgetScore(c, ctx.budget, ctx.priorities),
    dataQuality: dataQualityScore(c),
  };
  const breakdown: ScoreBreakdown = {
    fit: round1(raw.fit * ctx.weights.fit),
    cold: round1(raw.cold * ctx.weights.cold),
    efficiency: round1(raw.efficiency * ctx.weights.efficiency),
    subsidy: round1(raw.subsidy * ctx.weights.subsidy),
    budget: round1(raw.budget * ctx.weights.budget),
    dataQuality: round1(raw.dataQuality * ctx.weights.dataQuality),
  };
  const score = round1(Object.values(breakdown).reduce((a, b) => a + b, 0));
  return { candidate: c, score, breakdown, fitRatio: round2(ratio) };
}

const round1 = (v: number) => Math.round(v * 10) / 10;
const round2 = (v: number) => Math.round(v * 100) / 100;
