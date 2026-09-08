/* ==================================================================
   ThermoMatch v2 — Sélection des trois recommandations

   Règles :
   1. Le #1 est le meilleur score, point.
   2. Les autres doivent être des machines réellement différentes :
      marque différente ET empreinte technique différente.
   3. On cherche à couvrir des positionnements différents (haut de gamme,
      valeur) pour que le client ait un vrai choix, mais jamais au prix
      d'une machine nettement moins bonne : une alternative doit rester
      à moins de MAX_SCORE_GAP points du #1.
   4. Les rangs suivent l'ordre des scores ; les étiquettes décrivent
      le positionnement réel de chaque machine.
   ================================================================== */

import type { BrandTier, MatchResult, ResultBadge, ScoredCandidate } from "./types";

export const MAX_SCORE_GAP = 15;

const lower = (s: string) => s.trim().toLowerCase();

function isDistinct(c: ScoredCandidate, chosen: ScoredCandidate[]): boolean {
  return chosen.every(
    (x) => lower(x.candidate.brand) !== lower(c.candidate.brand) && x.candidate.signature !== c.candidate.signature,
  );
}

function pick(
  pool: ScoredCandidate[],
  chosen: ScoredCandidate[],
  preferredTiers: BrandTier[],
  minScore: number,
): ScoredCandidate | undefined {
  const distinct = pool.filter((c) => isDistinct(c, chosen));
  for (const tier of preferredTiers) {
    const hit = distinct.find((c) => c.candidate.tier === tier && c.score >= minScore);
    if (hit) return hit;
  }
  return distinct[0];
}

function badgeFor(index: number, tier: BrandTier): ResultBadge {
  if (index === 0) return "Meilleur choix";
  if (tier === "premium") return "Haut de gamme";
  if (tier === "value") return "Meilleure valeur";
  return "Alternative équilibrée";
}

/** Sélectionne jusqu'à `count` recommandations dans un bassin déjà trié par score décroissant. */
export function selectTop(pool: ScoredCandidate[], count = 3): Array<Omit<MatchResult, "reasons" | "warnings">> {
  if (pool.length === 0) return [];
  const top = pool[0];
  const chosen: ScoredCandidate[] = [top];
  const minScore = top.score - MAX_SCORE_GAP;

  while (chosen.length < count) {
    const tiersCovered = new Set(chosen.map((c) => c.candidate.tier));
    const preferred: BrandTier[] =
      top.candidate.tier === "premium"
        ? ["value", "mid", "premium"]
        : top.candidate.tier === "value"
          ? ["premium", "mid", "value"]
          : ["premium", "value", "mid"];
    const ordered = preferred.filter((t) => !tiersCovered.has(t)).concat(preferred.filter((t) => tiersCovered.has(t)));
    const next = pick(pool, chosen, ordered, minScore);
    if (!next) break;
    chosen.push(next);
  }

  const alternatives = chosen.slice(1).sort((a, b) => b.score - a.score);
  return [top, ...alternatives].map((c, i) => ({
    ...c,
    rank: i + 1,
    badge: badgeFor(i, c.candidate.tier),
  }));
}
