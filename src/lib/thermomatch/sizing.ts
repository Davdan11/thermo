/* ==================================================================
   ThermoMatch v2 — Calcul de charge

   Estimation préliminaire de la charge de chauffage, uniforme pour tout
   le Québec. La localisation ne change pas la machine recommandée :
   partout au Québec on dimensionne pour un hiver rigoureux, et le calcul
   final se fait sur place selon la norme CSA F280.

   Base : 15 BTU/h par pi² pour une maison unifamiliale des années
   1981-2000, isolation standard, fenestration normale. Les facteurs
   ci-dessous ajustent cette base. Toutes les valeurs sont visibles dans
   le résultat pour que le client (ou un vérificateur) puisse les auditer.
   ================================================================== */

import type { LoadEstimate, MatchRequest } from "./types";

export const BASE_BTU_PER_FT2 = 15;

export const HOME_TYPE_FACTOR: Record<MatchRequest["homeType"], number> = {
  detached: 1.0,
  duplex: 0.9,
  triplex: 0.85,
  condo: 0.6,
};

export const CONSTRUCTION_FACTOR: Record<NonNullable<MatchRequest["constructionPeriod"]>, number> = {
  pre_1960: 1.2,
  "1960_1980": 1.1,
  "1981_2000": 1.0,
  "2001_2015": 0.9,
  "2016_plus": 0.8,
};

export const INSULATION_FACTOR: Record<NonNullable<MatchRequest["insulation"]>, number> = {
  poor: 1.15,
  standard: 1.0,
  good: 0.9,
  high_performance: 0.8,
};

export const WINDOW_FACTOR: Record<NonNullable<MatchRequest["windowShare"]>, number> = {
  low: 0.95,
  standard: 1.0,
  high: 1.1,
};

export const BASEMENT_FACTOR: Record<NonNullable<MatchRequest["basement"]>, number> = {
  none: 1.0,
  unheated: 1.0,
  heated: 1.1,
};

/** Un bâtiment compact sur plusieurs étages perd moins par pi² qu'un plain-pied. */
export function floorsFactor(floors: number): number {
  if (floors <= 1) return 1.0;
  if (floors === 2) return 0.95;
  return 0.92;
}

export const ROUNDING_BTU = 500;
export const MIN_LOAD_BTU = 4_000;
export const MAX_LOAD_BTU = 120_000;

export function estimateLoad(req: MatchRequest): LoadEstimate {
  if (!Number.isFinite(req.heatedAreaFt2) || req.heatedAreaFt2 < 200 || req.heatedAreaFt2 > 10_000) {
    throw new Error("heatedAreaFt2 doit être compris entre 200 et 10 000 pi².");
  }

  const factors = {
    baseBtuPerFt2: BASE_BTU_PER_FT2,
    homeType: HOME_TYPE_FACTOR[req.homeType],
    floors: floorsFactor(req.floors),
    construction: CONSTRUCTION_FACTOR[req.constructionPeriod ?? "1981_2000"],
    insulation: INSULATION_FACTOR[req.insulation ?? "standard"],
    windows: WINDOW_FACTOR[req.windowShare ?? "standard"],
    basement: BASEMENT_FACTOR[req.basement ?? "none"],
  };

  const raw =
    req.heatedAreaFt2 *
    factors.baseBtuPerFt2 *
    factors.homeType *
    factors.floors *
    factors.construction *
    factors.insulation *
    factors.windows *
    factors.basement;

  const rounded = Math.round(raw / ROUNDING_BTU) * ROUNDING_BTU;
  const loadBtuH = Math.min(MAX_LOAD_BTU, Math.max(MIN_LOAD_BTU, rounded));

  // Moins le client a répondu aux questions détaillées, plus la fourchette est large.
  const answered = [req.constructionPeriod, req.insulation, req.windowShare, req.basement].filter(Boolean).length;
  const uncertaintyPct = 25 - answered * 3;

  return { loadBtuH, factors, uncertaintyPct };
}
