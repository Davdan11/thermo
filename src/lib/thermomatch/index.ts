/* ==================================================================
   ThermoMatch v2 — Pipeline

   requête → charge → filtres durs → score → sélection → explications

   Déterministe : même requête + mêmes données = même réponse.
   ================================================================== */

import type { Candidate, MatchOutput, MatchRequest, MatchResult } from "./types";
import { estimateLoad } from "./sizing";
import { capacityWindow, scoreCandidate, weightsFor } from "./scoring";
import { compareScored, selectTop } from "./select";
import { buildReasons, buildWarnings, globalWarnings } from "./explain";

export * from "./types";
export { estimateLoad } from "./sizing";
export { buildCandidates, dedupeRebadges, pickPairing, pairingClassOf, systemKindOf } from "./candidates";
export type { SourceModel, SourcePairing, BuildOptions } from "./candidates";
export { weightsFor, fitScore, DEFAULT_WEIGHTS } from "./scoring";
export { compareScored, selectTop } from "./select";
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

  // Architecture décidée d'abord : seulement les appariements de sa classe ; sinon (anciens appels), le type de système.
  const afterKind = candidates.filter((c) =>
    req.pairingClass ? c.pairingClass === req.pairingClass : req.systemKind === "any" || c.systemKind === req.systemKind,
  );
  // Chaque machine est calibrée pour la charge qu'elle chauffe : toute la maison, ou sa zone.
  const sizingLoad = req.sizingLoadBtuH ?? load.loadBtuH;
  const afterWindow = afterKind.filter((c) => {
    const ratio = c.h5Btu / sizingLoad;
    return ratio >= window.minRatio && ratio <= window.maxRatio;
  });

  const maxSubsidyDollars = afterWindow.reduce((m, c) => Math.max(m, c.logisVertDollars), 0);
  const ctx = {
    loadBtuH: sizingLoad,
    backupHeatAvailable: req.backupHeatAvailable,
    budget: req.budget,
    priorities: req.priorities,
    weights,
    maxSubsidyDollars,
  };

  // Égalité : la plus proche de la charge, puis la plus subventionnée, puis l'id (stable).
  const scored = afterWindow.map((c) => scoreCandidate(c, ctx)).sort(compareScored);

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
