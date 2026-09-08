/* ==================================================================
   ThermoMatch v2 — Pipeline

   requête → charge → filtres durs → score → sélection → explications

   Déterministe : même requête + mêmes données = même réponse.
   ================================================================== */

import type { Candidate, MatchOutput, MatchRequest, MatchResult } from "./types";
import { estimateLoad } from "./sizing";
import { capacityWindow, scoreCandidate, weightsFor } from "./scoring";
import { selectTop } from "./select";
import { buildReasons, buildWarnings, globalWarnings } from "./explain";

export * from "./types";
export { estimateLoad } from "./sizing";
export { buildCandidates, dedupeRebadges, pickPairing, systemKindOf } from "./candidates";
export type { SourceModel, SourcePairing, BuildOptions } from "./candidates";
export { weightsFor, fitScore, DEFAULT_WEIGHTS } from "./scoring";
export { selectTop } from "./select";
export { brandTier } from "./tiers";

export interface RunOptions {
  /** Date de la liste LogisVert, affichée dans les explications. */
  logisVertUpdatedAt?: string;
  maxResults?: number;
}

export function runThermoMatch(req: MatchRequest, candidates: Candidate[], opts: RunOptions = {}): MatchOutput {
  const load = estimateLoad(req);
  const weights = weightsFor(req.priorities);
  const window = capacityWindow(req.backupHeatAvailable);

  const afterKind = candidates.filter((c) => req.systemKind === "any" || c.systemKind === req.systemKind);
  const afterWindow = afterKind.filter((c) => {
    const ratio = c.h5Btu / load.loadBtuH;
    return ratio >= window.minRatio && ratio <= window.maxRatio;
  });

  const maxSubsidyDollars = afterWindow.reduce((m, c) => Math.max(m, c.logisVertDollars), 0);
  const ctx = {
    loadBtuH: load.loadBtuH,
    backupHeatAvailable: req.backupHeatAvailable,
    budget: req.budget,
    priorities: req.priorities,
    weights,
    maxSubsidyDollars,
  };

  const scored = afterWindow
    .map((c) => scoreCandidate(c, ctx))
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      // Égalité : la plus proche de la charge, puis la plus subventionnée, puis l'id (stable).
      const fitDiff = Math.abs(a.fitRatio - 1.05) - Math.abs(b.fitRatio - 1.05);
      if (fitDiff !== 0) return fitDiff;
      if (b.candidate.logisVertDollars !== a.candidate.logisVertDollars) return b.candidate.logisVertDollars - a.candidate.logisVertDollars;
      return a.candidate.id.localeCompare(b.candidate.id);
    });

  const selected = selectTop(scored, opts.maxResults ?? 3);
  const results: MatchResult[] = selected.map((r) => ({
    ...r,
    reasons: buildReasons(r, req, load, opts.logisVertUpdatedAt),
    warnings: buildWarnings(r, req),
  }));

  return {
    load,
    results,
    weights,
    diagnostics: {
      candidatesTotal: candidates.length,
      afterSystemKind: afterKind.length,
      afterCapacityWindow: afterWindow.length,
      afterDedup: candidates.length,
      scored: scored.length,
    },
    warnings: globalWarnings(req, load),
  };
}
