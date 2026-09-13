/* ==================================================================
   Chantier R — recrutement. Pur.

   1. Tâches « Recruter à <ville/MRC> » : une zone où des demandes
      réelles arrivent et que personne ne peut prendre (sans
      installateur, ou tous bloqués), à partir de recruitMinDemands
      demandes dans la fenêtre. Le nombre affiché est le vrai nombre.
      Clé : zone + dernière demande ; une nouvelle demande fait revenir
      une tâche déjà faite.
   2. Évaluation automatique des candidatures : comble-t-elle un trou,
      sa licence est-elle active au fichier de la RBQ, quelles marques
      du catalogue sont reconnues. Barème affiché au propriétaire.
   ================================================================== */

import { brandHints, regionHints } from "../candidatures";
import type { Task } from "../crm/tasks";
import { foldText, regionName, type RegionCode } from "../regions";
import type { Candidature } from "../types";
import { BLOCKING_OUTCOMES } from "./rbq/verify";
import { RBQ_OUTCOME_LABELS, type RbqVerification } from "./rbq/types";
import { GAP_STATUSES, type Zone } from "./zones";

const plural = (n: number, one: string, many: string) => `${n} ${n > 1 ? many : one}`;
const keyPart = (s: string) => s.replace(/[^A-Za-z0-9_:.+-]/g, "");

/** Ancre de la zone dans la page Recrutement. */
export const zoneAnchor = (key: string) => `zone-${key.replace(/[^A-Za-z0-9-]/g, "-")}`;

export function recruitTasks(zones: Zone[], settings: { recruitMinDemands: number; recruitDays: number }): Task[] {
  return zones
    .filter((z) => GAP_STATUSES.has(z.status) && z.demands >= settings.recruitMinDemands)
    .map((z) => ({
      key: `auto:reseau-recrutement:${keyPart(z.key)}:${keyPart(z.lastDemandId) || "x"}`,
      rule: "reseau-recrutement" as const,
      family: "suivis" as const,
      clientId: null,
      manual: false,
      snoozed: false,
      title: `Recruter à ${z.place}`,
      detail: `${plural(z.demands, "demande", "demandes")} en ${settings.recruitDays} jours · ${z.status === "bloquee" ? "installateurs de la zone bloqués" : "aucun installateur"}`,
      dueAt: z.lastDemandAt,
      href: `/gestion/recrutement#${zoneAnchor(z.key)}`,
    }));
}

/* ---------------- Candidatures ---------------- */

export const SCORE_RULES = "Trou comblé : 10 points par demande de la zone (50 au plus) · licence RBQ active : 30 · marque du catalogue reconnue : 5 chacune (20 au plus) · licence absente, suspendue ou annulée : −40.";

export interface CandidateEval {
  candidature: Candidature;
  regions: RegionCode[];
  brands: string[];
  gaps: Array<{ key: string; place: string; demands: number; status: Zone["status"] }>;
  gapDemands: number;
  rbq: RbqVerification | null;
  points: { trou: number; rbq: number; marques: number };
  score: number;
  reasons: string[];
  warnings: string[];
}

export function evaluateCandidature(c: Candidature, ctx: { zones: Zone[]; rbq: RbqVerification | null; brands: Array<{ id: string; name: string }> }): CandidateEval {
  const regions = regionHints(c.regionText);
  const brands = brandHints(c.brandsText, ctx.brands);
  const text = ` ${foldText(c.regionText)} `;
  const gaps = ctx.zones
    .filter((z) => GAP_STATUSES.has(z.status) || z.status === "saturee")
    .filter((z) => {
      const place = foldText(z.place);
      return (z.region !== null && regions.includes(z.region)) || (place.length >= 4 && text.includes(` ${place} `));
    })
    .map((z) => ({ key: z.key, place: z.place, demands: z.demands, status: z.status }));
  const gapDemands = gaps.reduce((s, g) => s + g.demands, 0);
  const reasons: string[] = [];
  const warnings: string[] = [];

  if (gaps.length) reasons.push(`comble ${plural(gaps.length, "zone", "zones")} à recruter : ${gaps.slice(0, 3).map((g) => `${g.place} (${plural(g.demands, "demande", "demandes")})`).join(", ")}${gaps.length > 3 ? "…" : ""}`);
  else if (regions.length) reasons.push(`régions : ${regions.map(regionName).join(", ")} (aucun trou connu)`);
  else warnings.push("région non reconnue : à préciser avec le candidat");

  let rbqPts = 0;
  const rbq = ctx.rbq;
  if (!rbq) warnings.push("licence RBQ pas encore vérifiée au fichier de la RBQ");
  else if (rbq.outcome === "active") {
    rbqPts = 30;
    reasons.push("licence RBQ active selon la RBQ");
  } else if (BLOCKING_OUTCOMES.has(rbq.outcome)) {
    rbqPts = -40;
    warnings.push(`licence RBQ : ${RBQ_OUTCOME_LABELS[rbq.outcome].toLowerCase()}`);
  } else warnings.push(`licence RBQ : ${RBQ_OUTCOME_LABELS[rbq.outcome].toLowerCase()}${rbq.rawStatus ? ` (« ${rbq.rawStatus} »)` : ""}`);

  if (brands.length) reasons.push(`${plural(brands.length, "marque reconnue", "marques reconnues")} au catalogue`);
  else if (c.brandsText.trim()) warnings.push("aucune marque du catalogue reconnue");

  const points = { trou: Math.min(50, 10 * gapDemands), rbq: rbqPts, marques: Math.min(20, 5 * brands.length) };
  return { candidature: c, regions, brands, gaps, gapDemands, rbq, points, score: points.trou + points.rbq + points.marques, reasons, warnings };
}

export function rankCandidatures(list: CandidateEval[]): CandidateEval[] {
  return [...list].sort((a, b) => b.score - a.score || b.candidature.receivedAt.localeCompare(a.candidature.receivedAt));
}
