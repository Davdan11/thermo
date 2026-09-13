/* ==================================================================
   Prévision du pipeline (volet C) : valeur pondérée par étape.

   Valeur d'un client = celle du pipeline (valueOf, model.ts) :
   soumission en attente, taxes comprises, ou l'estimation notée par le
   propriétaire. L'aide LogisVert est TOUJOURS versée au client par
   Hydro-Québec : jamais un revenu, jamais dans la prévision.

   Probabilité de signer, par étape avant la signature (nouvelle,
   contacté, soumission envoyée, ouverte) :
     1. celle choisie par le propriétaire dans Réglages ;
     2. sinon le taux OBSERVÉ, s'il y a au moins MIN_SAMPLE dossiers
        réglés (signés ou perdus) passés par cette étape ;
     3. sinon « à définir » : l'étape n'entre pas dans le total.
   Aucune probabilité inventée. Les clients déjà signés (acceptée,
   planifiée) sont montrés à part : ce n'est pas une prévision.
   ================================================================== */

import { FORECAST_STAGES, type ForecastStage, type SalesSettings } from "../crm/extensions";
import type { ClientComputed } from "../crm/model";
import { STAGE_LABELS, STAGE_RANK, type PipelineStage } from "../crm/types";

/** Dossiers réglés requis avant de proposer un taux observé. */
export const MIN_SAMPLE = 20;

const WON = new Set(["acceptee", "planifiee", "terminee"]);
const SIGNED_OPEN = new Set(["acceptee", "planifiee"]);

export interface ObservedRate {
  stage: ForecastStage;
  /** Dossiers réglés passés par cette étape (ou plus loin). */
  resolved: number;
  won: number;
  /** null : moins de MIN_SAMPLE dossiers réglés. */
  rate: number | null;
}

/** Rang le plus haut atteint : historique (automatique et choix manuels) et étape actuelle. */
export function maxRankReached(c: Pick<ClientComputed, "stage">): number {
  let r = -1;
  for (const h of c.stage.history) if (h.stage !== "perdue") r = Math.max(r, STAGE_RANK[h.stage as PipelineStage]);
  if (c.stage.stage !== "perdue") r = Math.max(r, STAGE_RANK[c.stage.stage]);
  return r;
}

/** Taux de signature observés : parmi les dossiers réglés (signés ou perdus) passés par l'étape, part des signés. */
export function observedRates(clients: Array<Pick<ClientComputed, "stage">>, minSample = MIN_SAMPLE): Record<ForecastStage, ObservedRate> {
  const out = Object.fromEntries(FORECAST_STAGES.map((s) => [s, { stage: s, resolved: 0, won: 0, rate: null as number | null }])) as Record<ForecastStage, ObservedRate>;
  for (const c of clients) {
    const won = WON.has(c.stage.stage);
    if (!won && c.stage.stage !== "perdue") continue;
    const r = maxRankReached(c);
    for (const s of FORECAST_STAGES) {
      if (r < STAGE_RANK[s]) continue;
      out[s].resolved++;
      if (won) out[s].won++;
    }
  }
  for (const s of FORECAST_STAGES) out[s].rate = out[s].resolved >= minSample ? out[s].won / out[s].resolved : null;
  return out;
}

export type ProbabilitySource = "reglee" | "observee" | "a-definir";

export interface ForecastRow {
  stage: ForecastStage;
  label: string;
  n: number;
  /** Clients qui ont un montant (les autres ne sont pas comptés). */
  valued: number;
  cents: number;
  probability: number | null;
  source: ProbabilitySource;
  observed: ObservedRate;
  weightedCents: number | null;
}

export interface Forecast {
  rows: ForecastRow[];
  /** Somme des étapes dont la probabilité est connue. */
  weightedCents: number;
  /** Montant brut de ces mêmes étapes. */
  coveredCents: number;
  missing: ForecastStage[];
  unvalued: number;
  /** Déjà signé, pas encore installé : montants acceptés (taxes comprises). Pas une prévision. */
  signed: { n: number; cents: number };
  minSample: number;
}

export function buildForecast(clients: ClientComputed[], sales: Pick<SalesSettings, "stageProbabilities">, minSample = MIN_SAMPLE): Forecast {
  const observed = observedRates(clients, minSample);
  const rows: ForecastRow[] = FORECAST_STAGES.map((stage) => {
    const list = clients.filter((c) => c.stage.stage === stage);
    const valued = list.filter((c) => typeof c.valueCents === "number" && c.valueCents > 0);
    const cents = valued.reduce((s, c) => s + (c.valueCents ?? 0), 0);
    const set = sales.stageProbabilities[stage];
    const probability = typeof set === "number" ? set : observed[stage].rate;
    const source: ProbabilitySource = typeof set === "number" ? "reglee" : observed[stage].rate !== null ? "observee" : "a-definir";
    return { stage, label: STAGE_LABELS[stage], n: list.length, valued: valued.length, cents, probability, source, observed: observed[stage], weightedCents: probability === null ? null : Math.round(cents * probability) };
  });
  const known = rows.filter((r) => r.weightedCents !== null);
  const signedList = clients.filter((c) => SIGNED_OPEN.has(c.stage.stage));
  return {
    rows,
    weightedCents: known.reduce((s, r) => s + (r.weightedCents ?? 0), 0),
    coveredCents: known.reduce((s, r) => s + r.cents, 0),
    missing: rows.filter((r) => r.probability === null && r.n > 0).map((r) => r.stage),
    unvalued: rows.reduce((s, r) => s + (r.n - r.valued), 0),
    signed: { n: signedList.length, cents: signedList.reduce((s, c) => s + (c.valueCents ?? 0), 0) },
    minSample,
  };
}
