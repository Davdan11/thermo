/* ==================================================================
   Étape d'un client dans le pipeline.

   Automatique = rang le plus haut atteint, avec la date des événements :
     terminee            un job terminé
     planifiee           un job planifié (ou attribué avec une date)
     acceptee            une acceptation, ou un job nouveau/offert/attribué
     ouverte             une version envoyée consultée par le client
     soumission-envoyee  une version envoyée
     contacte            appel enregistré, texto sortant du propriétaire,
                         rendez-vous réservé, note « appel »
     nouvelle            une demande entrante
   Perdue (automatique) : dernière soumission refusée et aucune autre
   ouverte, ou tous les jobs annulés. Une soumission expirée ne rend pas
   perdu (elle crée une tâche).

   Étape choisie à la main : tient jusqu'à ce qu'un événement
   automatique, APRÈS la date du choix, donne une étape strictement plus
   haute. « Perdue » tient jusqu'à la prochaine demande entrante :
   le client est alors réactivé (puce « Réactivé ») et repart de
   « Nouvelle demande ».
   ================================================================== */

import { effectiveStatus, latestSent } from "@/lib/soumissions/quote";
import type { QuoteVersion } from "@/lib/soumissions/types";
import { isDemand, isEventLine, KIND_LABELS } from "./sources";
import { inboundMessages, ownerMessages } from "./textos-adapter";
import { localYmd } from "./time";
import { STAGE_RANK, type ClientBundle, type PipelineStage, type Stage } from "./types";

export interface StageEvent {
  at: string;
  stage: PipelineStage;
  label: string;
}

export interface ContactEvent {
  at: string;
  label: string;
  kind: "appel" | "texto" | "rendez-vous" | "note";
}

export interface InboundEvent {
  at: string;
  label: string;
  ref: string;
}

export interface StageHistoryItem {
  at: string;
  stage: Stage;
  auto: boolean;
  by?: string;
  reason?: string;
  label?: string;
  reactivated?: boolean;
}

export interface StageInfo {
  stage: Stage;
  /** Depuis quand le client est à cette étape. */
  since: string;
  manual: boolean;
  reactivatedAt: string | null;
  lost: { at: string; reason: string; detail?: string; auto: boolean } | null;
  history: StageHistoryItem[];
}

const byAt = <T extends { at: string }>(a: T, b: T) => a.at.localeCompare(b.at);
const auditAt = (audit: Array<{ at: string; action: string }>, action: string) => [...audit].reverse().find((a) => a.action === action)?.at;

/** « Contacté » : appel enregistré, texto sortant, rendez-vous réservé, note de type « appel ». */
export function contactEvents(b: ClientBundle): ContactEvent[] {
  const out: ContactEvent[] = [];
  for (const e of b.journal) {
    if (isEventLine(e)) continue;
    if (e.kind === "appel-enregistre") out.push({ at: e.at, label: "Appel enregistré", kind: "appel" });
    if (e.kind === "rendez-vous") out.push({ at: e.at, label: "Rendez-vous réservé", kind: "rendez-vous" });
  }
  for (const c of b.textos) for (const m of ownerMessages(c)) out.push({ at: m.at, label: "Texto envoyé", kind: "texto" });
  for (const n of b.record?.notes ?? []) if (n.kind === "appel") out.push({ at: n.at, label: "Appel noté", kind: "note" });
  return out.sort(byAt);
}

/** Demandes entrantes : lignes du journal (formulaires, appels, texto) et textos reçus. */
export function inboundEvents(b: ClientBundle): InboundEvent[] {
  const out: InboundEvent[] = [];
  for (const e of b.journal) if (isDemand(e)) out.push({ at: e.at, label: KIND_LABELS[e.kind] ?? e.kind, ref: `j:${e.id}` });
  for (const c of b.textos) for (const m of inboundMessages(c)) out.push({ at: m.at, label: "Texto reçu", ref: `t:${c.id}:${m.id}` });
  return out.sort(byAt);
}

export function stageEvents(b: ClientBundle): StageEvent[] {
  const ev: StageEvent[] = [];
  for (const e of inboundEvents(b)) ev.push({ at: e.at, stage: "nouvelle", label: e.label });
  for (const c of contactEvents(b)) ev.push({ at: c.at, stage: "contacte", label: c.label });
  for (const q of b.quotes) {
    // Une soumission refusée ne tient plus le client à « envoyée » ou « ouverte » (la perte est calculée à part).
    if (latestSent(q)?.refusal) continue;
    for (const v of q.versions) {
      const tag = `Soumission ${q.number}${v.v > 1 ? ` (v${v.v})` : ""}`;
      if (v.sentAt) ev.push({ at: v.sentAt, stage: "soumission-envoyee", label: `${tag} envoyée` });
      if (v.views.count > 0 && v.views.firstAt) ev.push({ at: v.views.firstAt, stage: "ouverte", label: `${tag} ouverte` });
      if (v.acceptance) ev.push({ at: v.acceptance.at, stage: "acceptee", label: `${tag} acceptée` });
    }
  }
  for (const j of b.jobs) {
    if (j.status === "annule") continue;
    ev.push({ at: j.createdAt, stage: "acceptee", label: `Job n° ${j.number} créé` });
    if (j.status === "planifie" || (j.status === "attribue" && j.scheduledFor)) ev.push({ at: auditAt(j.audit, "marquer planifié") ?? j.updatedAt, stage: "planifiee", label: `Job n° ${j.number} planifié` });
    if (j.status === "termine") ev.push({ at: auditAt(j.audit, "marquer terminé") ?? j.updatedAt, stage: "terminee", label: `Job n° ${j.number} terminé` });
  }
  return ev.sort(byAt);
}

/** Perdu automatiquement : dernière soumission refusée sans autre ouverte, ou tous les jobs annulés. */
export function autoLost(b: ClientBundle, today: string): { at: string; reason: string; detail?: string } | null {
  const sent = b.quotes.map(latestSent).filter((v): v is QuoteVersion => Boolean(v));
  const open = sent.some((v) => {
    const s = effectiveStatus(v, today);
    return s === "envoyee" || s === "ouverte";
  });
  const accepted = sent.some((v) => v.acceptance);
  const activeJob = b.jobs.some((j) => j.status !== "annule");
  const refused = sent.filter((v) => v.refusal).sort((x, y) => y.refusal!.at.localeCompare(x.refusal!.at));
  if (refused.length && !open && !accepted && !activeJob) {
    const r = refused[0].refusal!;
    return { at: r.at, reason: "Soumission refusée", detail: r.reason?.trim() || undefined };
  }
  if (b.jobs.length && !activeJob && !open) {
    const at = b.jobs.map((j) => auditAt(j.audit, "annuler le job") ?? j.updatedAt).sort().pop()!;
    if (!sent.some((v) => v.acceptance && v.acceptance.at > at)) return { at, reason: "Job annulé" };
  }
  return null;
}

function top(events: StageEvent[], fallbackAt: string): { stage: PipelineStage; since: string } {
  if (!events.length) return { stage: "nouvelle", since: fallbackAt };
  const rank = Math.max(...events.map((e) => STAGE_RANK[e.stage]));
  const first = events.filter((e) => STAGE_RANK[e.stage] === rank).sort(byAt)[0];
  return { stage: first.stage, since: first.at };
}

export function inferStage(b: ClientBundle, now: Date): StageInfo {
  const today = localYmd(now);
  const events = stageEvents(b);
  const inbound = inboundEvents(b);
  const rec = b.record;
  const ov = rec?.stageOverride;
  const lostAuto = autoLost(b, today);

  let lost: StageInfo["lost"] = null;
  if (ov?.stage === "perdue") lost = { at: ov.at, reason: rec?.lost?.reason ?? "", auto: false };
  if (lostAuto && (!ov || lostAuto.at > ov.at)) lost = { ...lostAuto, auto: true };
  // Un progrès réel après une perte automatique l'annule (nouvelle soumission envoyée, acceptation…).
  if (lost?.auto && events.some((e) => e.at > lost!.at && STAGE_RANK[e.stage] >= STAGE_RANK["soumission-envoyee"])) lost = null;

  const back = lost ? inbound.find((e) => e.at > lost!.at) : undefined;
  const reactivatedAt = back?.at ?? null;
  const scoped = reactivatedAt ? events.filter((e) => e.at >= reactivatedAt) : events;
  const auto = top(scoped, reactivatedAt ?? b.firstAt);

  let stage: Stage = auto.stage;
  let since = auto.since;
  let manual = false;
  if (lost && !reactivatedAt) {
    stage = "perdue";
    since = lost.at;
    manual = !lost.auto;
  } else if (ov && ov.stage !== "perdue" && (!reactivatedAt || ov.at >= reactivatedAt)) {
    const progressed = scoped.some((e) => e.at > ov.at && STAGE_RANK[e.stage] > STAGE_RANK[ov.stage as PipelineStage]);
    if (!progressed) {
      stage = ov.stage;
      since = ov.at;
      manual = true;
    }
  }

  // Historique : transitions automatiques (le rang repart à zéro à une réactivation), pertes, choix manuels.
  const history: StageHistoryItem[] = [];
  const resets = lost && reactivatedAt ? [reactivatedAt] : [];
  let rank = -1;
  for (const e of events) {
    if (resets.length && e.at >= resets[0]) {
      history.push({ at: resets.shift()!, stage: "nouvelle", auto: true, reactivated: true, label: "Réactivé par une nouvelle demande" });
      rank = 0;
      if (e.stage === "nouvelle") continue;
    }
    if (STAGE_RANK[e.stage] > rank) {
      rank = STAGE_RANK[e.stage];
      history.push({ at: e.at, stage: e.stage, auto: true, label: e.label });
    }
  }
  if (lostAuto) history.push({ at: lostAuto.at, stage: "perdue", auto: true, reason: lostAuto.detail ? `${lostAuto.reason} : ${lostAuto.detail}` : lostAuto.reason });
  for (const c of rec?.stageLog ?? []) history.push({ at: c.at, stage: c.to, auto: false, by: c.by, reason: c.reason });
  history.sort((a, b2) => a.at.localeCompare(b2.at) || Number(b2.auto) - Number(a.auto));

  return { stage, since, manual, reactivatedAt: stage === "perdue" ? null : reactivatedAt, lost: stage === "perdue" ? lost : null, history };
}
