/* ==================================================================
   Refonte R2 — service des pages Pipeline, Pertes et Réglages des
   étapes, et interfaces pour « Aujourd'hui » (R1) et le portail (P).

   AUCUNE vérification d'accès ici : chaque page et chaque action passe
   d'abord par requireUser() ou requireAdmin() ; un vendeur passe son
   index restreint (equipe/scope.ts, scopedIndex).
   ================================================================== */

import { observedRates } from "../ventes/prevision";
import type { CrmIndex } from "./model";
import {
  clientProgress,
  DEFAULT_PROBABILITY,
  DEFAULT_SMS,
  JOURNEY_STATES,
  JOURNEY_STEPS,
  normalizeParcoursSettings,
  parcoursSettingsOf,
  PROBABILITY_KEY_LABELS,
  PROBABILITY_KEYS,
  probabilityKeyFor,
  smsFor,
  STEP_HINTS,
  STEP_LABELS,
  stepDelay,
  type ClientProgress,
  type JourneyState,
  type JourneyStep,
  type ParcoursSettings,
  type ProbabilityKey,
  type StepDelay,
} from "./parcours";
import { buildLossView, type LossPeriodId, type LossView } from "./pertes";
import { buildPipelineView, type PipelineParcoursView } from "./pipeline-parcours";
import { priorityContext, priorityOf, probabilityOf, topPriorities, type Priority } from "./priorite";
import { freshIndex, loadCrmIndex, type CrmResult } from "./service";
import { mutateCrm } from "./store";

export async function pipelineParcoursView(scoped?: CrmIndex): Promise<PipelineParcoursView> {
  return buildPipelineView(scoped ?? (await loadCrmIndex()));
}

export async function lossView(period: LossPeriodId, scoped?: CrmIndex): Promise<LossView> {
  return buildLossView(scoped ?? (await loadCrmIndex()), period);
}

/** « Aujourd'hui » (R1) : note d'un client dans la portée de la session (null : hors portée ou inconnu). */
export async function priorityOfClient(clientId: string, scoped?: CrmIndex): Promise<Priority | null> {
  return priorityOf(scoped ?? (await loadCrmIndex()), clientId);
}

/** « Aujourd'hui » (R1) : les N actions les plus payantes, pour le propriétaire par défaut. */
export async function topActions(n = 5, scoped?: CrmIndex) {
  return topPriorities(scoped ?? (await loadCrmIndex()), n, { actor: "proprietaire" });
}

/** Portail client : progression du projet d'un job (étape n sur 12), sans aucune donnée interne. */
export async function clientProgressForJob(jobId: string, now = new Date()): Promise<ClientProgress | null> {
  const index = await freshIndex(now);
  const cid = index.byJob.get(jobId);
  const c = cid ? index.byId.get(cid) : undefined;
  return c?.journey ? clientProgress(c.journey.state) : null;
}

/* ---------------- Réglages des étapes ---------------- */

export interface StageSettingsRow {
  step: JourneyStep;
  label: string;
  defaultLabel: string;
  hint: string;
  /** Réglé : heures ; null : aucune alerte ; absent : défaut. */
  alertSet: number | null | undefined;
  delay: StepDelay | null;
  defaultDelay: StepDelay | null;
  sms: boolean;
  smsDefault: boolean;
  probability: ProbabilityKey;
  probabilityDefault: ProbabilityKey;
  /** Probabilité en vigueur avec cette correspondance (réglée, observée, 100 % ou à définir). */
  probabilityNow: { p: number | null; source: string };
}

export interface StageSettingsView {
  settings: ParcoursSettings;
  rows: StageSettingsRow[];
  lostLabel: string;
  probabilityOptions: Array<{ id: ProbabilityKey; label: string }>;
  /** Probabilités de la prévision, pour chaque option (réglée, observée ou à définir). */
  optionValues: Record<ProbabilityKey, { p: number | null; source: string }>;
}

export async function stageSettingsView(): Promise<StageSettingsView> {
  const index = await loadCrmIndex();
  const ps = parcoursSettingsOf(index.src.crm);
  const ctx = priorityContext(index);
  const observed = observedRates(index.clients);
  const optionValues = Object.fromEntries(
    PROBABILITY_KEYS.map((k) => {
      if (k === "signe") return [k, { p: 1, source: "signe" }];
      if (k === "aucune") return [k, { p: null, source: "a-definir" }];
      const set = index.src.crm.salesSettings.stageProbabilities[k];
      if (typeof set === "number") return [k, { p: set, source: "reglee" }];
      const o = observed[k].rate;
      return [k, o !== null ? { p: o, source: "observee" } : { p: null, source: "a-definir" }];
    }),
  ) as StageSettingsView["optionValues"];
  const rows = JOURNEY_STEPS.map((step): StageSettingsRow => {
    const pr = probabilityOf(step, ctx);
    return {
      step,
      label: ps.labels[step] ?? "",
      defaultLabel: STEP_LABELS[step],
      hint: STEP_HINTS[step],
      alertSet: ps.alertHours[step],
      delay: stepDelay(step, ps, index.settings),
      defaultDelay: stepDelay(step, { alertHours: {} }, index.settings),
      sms: smsFor(step, ps),
      smsDefault: DEFAULT_SMS[step],
      probability: probabilityKeyFor(step, ps),
      probabilityDefault: DEFAULT_PROBABILITY[step],
      probabilityNow: { p: pr.p, source: pr.source },
    };
  });
  return { settings: ps, rows, lostLabel: ps.labels.perdu ?? "", probabilityOptions: PROBABILITY_KEYS.map((id) => ({ id, label: PROBABILITY_KEY_LABELS[id] })), optionValues };
}

export async function saveParcoursSettings(input: Omit<ParcoursSettings, "updatedAt" | "updatedBy">, by: string, now = new Date()): Promise<CrmResult> {
  await mutateCrm((d) => {
    d.parcours = normalizeParcoursSettings({ ...input, updatedAt: now.toISOString(), updatedBy: by });
    return { result: undefined, changed: true };
  });
  return { ok: true };
}

/** Libellés affichés (réglés ou par défaut), pour la fiche client (R1) et les autres pages. */
export async function stepLabels(): Promise<Record<JourneyState, string>> {
  const ps = parcoursSettingsOf((await loadCrmIndex()).src.crm);
  return Object.fromEntries(JOURNEY_STATES.map((s) => [s, ps.labels[s]?.trim() || STEP_LABELS[s]])) as Record<JourneyState, string>;
}
