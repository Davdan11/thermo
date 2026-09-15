/* ==================================================================
   ThermoMatch — Égalités de score

   Deux recommandations voisines dont les scores arrondis se confondent,
   ou qui sont à moins d'un point, sont signalées « Ex æquo » : un tel
   écart est sous la précision de l'estimation. Le départage est dit en
   clair : le critère qui avantage chacune ; à score identique, la règle
   réelle du classement (compareScored, select.ts).
   ================================================================== */

import type { ScoreBreakdown, ScoredCandidate } from "./types";

/** Écart de score (points sur 100) en deçà duquel deux recommandations sont ex æquo. */
export const TIE_THRESHOLD = 1;

const CRITERE: Record<keyof ScoreBreakdown, string> = {
  fit: "à l'adéquation à la charge",
  cold: "au grand froid",
  efficiency: "à l'efficacité",
  subsidy: "à la subvention",
  budget: "au budget",
  dataQuality: "à la qualité des données",
};

const round1 = (v: number) => Math.round(v * 10) / 10;
const points = (n: number) => `${n.toLocaleString("fr-CA", { minimumFractionDigits: 1, maximumFractionDigits: 1 })} point${n >= 2 ? "s" : ""}`;
const pct = (r: number) => `${Math.round(r * 100)} %`;
const dollars = (n: number) => `${n.toLocaleString("fr-CA")} $`;

export function isTie(a: ScoredCandidate, b: ScoredCandidate): boolean {
  return Math.round(a.score) === Math.round(b.score) || Math.abs(a.score - b.score) < TIE_THRESHOLD;
}

/** Le critère où `x` devance le plus `y` (null s'il ne le devance nulle part). */
function bestEdge(x: ScoredCandidate, y: ScoredCandidate): { key: keyof ScoreBreakdown; gap: number } | null {
  let best: { key: keyof ScoreBreakdown; gap: number } | null = null;
  for (const key of Object.keys(CRITERE) as Array<keyof ScoreBreakdown>) {
    const gap = round1(x.breakdown[key] - y.breakdown[key]);
    if (gap > 0 && (!best || gap > best.gap)) best = { key, gap };
  }
  return best;
}

/** Explique pourquoi `a` est classée devant `b`, deux recommandations ex æquo. */
export function explainTieBreak(a: ScoredCandidate, b: ScoredCandidate): string {
  const ra = Math.round(a.score);
  const rb = Math.round(b.score);
  const head = ra === rb ? `Ex æquo à ${ra}/100.` : `Presque ex æquo : ${ra} et ${rb} sur 100.`;
  const gap = round1(Math.abs(a.score - b.score));
  if (gap > 0) {
    const ea = bestEdge(a, b);
    const eb = bestEdge(b, a);
    const parts = [ea && `${a.candidate.brand} prend ${points(ea.gap)} ${CRITERE[ea.key]}`, eb && `${b.candidate.brand} ${points(eb.gap)} ${CRITERE[eb.key]}`].filter(Boolean);
    return `${head} ${parts.length ? `${parts.join(", ")} ; l'écart` : "L'écart"} de ${points(gap)} est sous la précision de l'estimation.`;
  }
  // Score identique : départage réel du classement.
  const fa = Math.abs(a.fitRatio - 1.05);
  const fb = Math.abs(b.fitRatio - 1.05);
  if (fa !== fb) return `${head} Départage : ${a.candidate.brand} colle de plus près à la charge visée (${pct(a.fitRatio)} contre ${pct(b.fitRatio)} à −15 °C).`;
  if (a.candidate.logisVertDollars !== b.candidate.logisVertDollars) {
    return `${head} Départage : ${a.candidate.brand} a la plus grosse subvention LogisVert (${dollars(a.candidate.logisVertDollars)} contre ${dollars(b.candidate.logisVertDollars)}).`;
  }
  return `${head} Rien ne les sépare dans nos données : l'ordre d'affichage est arbitraire.`;
}
