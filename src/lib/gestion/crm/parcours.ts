/* ==================================================================
   Refonte R2 — le vrai parcours du client, en 12 étapes, CALCULÉ à
   partir des événements réels (jamais saisi à la main, sauf l'étape
   manuelle qui existe déjà : stage.ts). Pur : aucun disque.

     1  Demande              demande entrante (ou fiche saisie)
     2  Contacté             appel, texto, rendez-vous, note « appel »
     3  Soumission envoyée   une version envoyée
     4  Ouverte              consultée par le client
     5  Va de l'avant        case 3.1 cochée (demande de jumelage) ;
                             aussi après un refus de l'installateur
                             (« finalisation ») ou pendant une offre
     6  Installateur trouvé  proposition en attente d'approbation, ou
                             offre acceptée par un installateur
     7  Contrat prêt à signer  approuvé par l'installateur
     8  Signé                contrat signé (= acceptation de la
                             soumission, recordContractAcceptance), ou
                             ancienne acceptation, ou job créé hors du
                             parcours du contrat
     9  Planifié             job planifié (date réservée)
    10  Installé             fin de chantier (completedAt)
    11  Payé                 facture de commission payée
    12  Suivi                après le paiement : sondage répondu,
                             référence créée ou plan d'entretien
   Plus « Perdu », avec sa raison : l'étape « perdue » du pipeline
   d'origine (manuelle ou automatique), ou un contrat refusé par le
   client sans autre dossier en cours.

   Correspondance avec les 7 étapes d'origine (crm.json, prévision,
   Pipedrive, étape manuelle) : LEGACY_OF. Les étapes 5 à 7 restent
   « Soumission ouverte » pour la prévision : elle ne change pas.

   Un job du parcours du contrat (moteur d'offres, ou créé à
   l'approbation) ne compte PAS comme signé avant la signature du
   client, contrairement à l'étape d'origine « acceptée ».
   ================================================================== */

import { activeContract, clientStage } from "@/lib/contrats/regles";
import type { Dossier } from "@/lib/contrats/types";
import { latestSent } from "@/lib/soumissions/quote";
import { invoiceState } from "../commissions/calc";
import { jobCompletion } from "../commissions/link";
import { pendingOffers } from "../offers";
import type { Job } from "../types";
import { contactEvents, inboundEvents, stageEvents, type StageInfo } from "./stage";
import type { Task, TaskFamily, TaskRule } from "./tasks";
import { addBusinessHours, addDaysYmd, localYmd, zoned, zonedToUtc } from "./time";
import type { ClientBundle, CrmData, CrmSettings, SourceData, Stage } from "./types";
import {
  CLIENT_STEP_LABELS,
  DEFAULT_PROBABILITY,
  DEFAULT_SMS,
  isLossCause,
  JOURNEY_STATES,
  JOURNEY_STEPS,
  PROBABILITY_KEYS,
  SALES_STEPS,
  STEP_LABELS,
  STEP_OF_LEGACY,
  STEP_RANK,
  STEP_TOTAL,
  stepNumber,
  type Actor,
  type JourneyState,
  type JourneyStep,
  type LossCause,
  type LossMotif,
  type ProbabilityKey,
} from "./parcours-base";

// Constantes sans dépendance (utilisables dans le navigateur) : réexportées pour les modules du serveur.
export * from "./parcours-base";

/* ---------------- Réglages des étapes (crm.json : clé « parcours », facultative) ---------------- */

export interface ParcoursSettings {
  /** Noms affichés (vide : nom par défaut). */
  labels: Partial<Record<JourneyState, string>>;
  /** Délai d'alerte en heures : absent = défaut (voir stepDelay) ; null = aucune alerte. */
  alertHours: Partial<Record<JourneyStep, number | null>>;
  /** Escalade par texto au propriétaire : absent = défaut (DEFAULT_SMS). */
  sms: Partial<Record<JourneyStep, boolean>>;
  /** Correspondance avec les probabilités de la prévision : absent = défaut (DEFAULT_PROBABILITY). */
  probability: Partial<Record<JourneyStep, ProbabilityKey>>;
  /** Texto seulement si la tâche est encore ouverte N heures après le délai (1 h : le « en retard » de la page À faire). */
  escalateAfterHours: number;
  /** Heures silencieuses (Montréal) : aucun texto de QUIET_START h à QUIET_END h ; il part à la fin. Égales : aucune. */
  quietStart: number;
  quietEnd: number;
  updatedAt?: string;
  updatedBy?: string;
}

export const DEFAULT_PARCOURS_SETTINGS: ParcoursSettings = { labels: {}, alertHours: {}, sms: {}, probability: {}, escalateAfterHours: 1, quietStart: 20, quietEnd: 8 };

const isObj = (v: unknown): v is Record<string, unknown> => Boolean(v) && typeof v === "object" && !Array.isArray(v);
const clampInt = (v: unknown, def: number, min: number, max: number) => (typeof v === "number" && Number.isFinite(v) ? Math.min(max, Math.max(min, Math.round(v))) : def);

/** Lecture tolérante (fichier ancien ou abîmé) : toute valeur invalide prend le défaut. */
export function normalizeParcoursSettings(v: unknown): ParcoursSettings {
  const s = isObj(v) ? v : {};
  const labels: ParcoursSettings["labels"] = {};
  const alertHours: ParcoursSettings["alertHours"] = {};
  const sms: ParcoursSettings["sms"] = {};
  const probability: ParcoursSettings["probability"] = {};
  const rl = isObj(s.labels) ? s.labels : {};
  for (const st of JOURNEY_STATES) {
    const x = rl[st];
    if (typeof x === "string" && x.trim()) labels[st] = x.replace(/\p{Cc}/gu, " ").trim().slice(0, 40);
  }
  const ra = isObj(s.alertHours) ? s.alertHours : {};
  const rs = isObj(s.sms) ? s.sms : {};
  const rp = isObj(s.probability) ? s.probability : {};
  for (const st of JOURNEY_STEPS) {
    const h = ra[st];
    if (h === null) alertHours[st] = null;
    else if (typeof h === "number" && Number.isFinite(h) && h > 0) alertHours[st] = Math.min(24 * 90, Math.round(h * 10) / 10);
    if (typeof rs[st] === "boolean") sms[st] = rs[st] as boolean;
    const p = rp[st];
    if (typeof p === "string" && (PROBABILITY_KEYS as readonly string[]).includes(p)) probability[st] = p as ProbabilityKey;
  }
  return {
    labels,
    alertHours,
    sms,
    probability,
    escalateAfterHours: clampInt(s.escalateAfterHours, DEFAULT_PARCOURS_SETTINGS.escalateAfterHours, 0, 72),
    quietStart: clampInt(s.quietStart, DEFAULT_PARCOURS_SETTINGS.quietStart, 0, 23),
    quietEnd: clampInt(s.quietEnd, DEFAULT_PARCOURS_SETTINGS.quietEnd, 0, 23),
    ...(typeof s.updatedAt === "string" ? { updatedAt: s.updatedAt } : {}),
    ...(typeof s.updatedBy === "string" ? { updatedBy: s.updatedBy.slice(0, 200) } : {}),
  };
}

export const parcoursSettingsOf = (crm: Pick<CrmData, "parcours">): ParcoursSettings => crm.parcours ?? DEFAULT_PARCOURS_SETTINGS;
export const stepLabel = (s: JourneyState, ps: Pick<ParcoursSettings, "labels">): string => ps.labels[s]?.trim() || STEP_LABELS[s];
export const smsFor = (s: JourneyStep, ps: Pick<ParcoursSettings, "sms">): boolean => ps.sms[s] ?? DEFAULT_SMS[s];
export const probabilityKeyFor = (s: JourneyStep, ps: Pick<ParcoursSettings, "probability">): ProbabilityKey => ps.probability[s] ?? DEFAULT_PROBABILITY[s];

export interface StepDelay {
  hours: number;
  /** Heures ouvrables (8 h à 18 h, lundi au vendredi) : l'étape « Demande », comme le rappel. */
  business: boolean;
  source: "reglage" | "defaut";
  /** D'où vient le défaut (affiché dans les réglages). */
  from: string;
}

/**
 * Délais par défaut, tirés des réglages et règles qui existent déjà (aucun chiffre nouveau, sauf les deux exemples
 * donnés par le propriétaire : 6 h pour « Va de l'avant », 48 h pour « Contrat prêt à signer »).
 */
function defaultDelay(step: JourneyStep, crm: CrmSettings): Omit<StepDelay, "source"> | null {
  switch (step) {
    case "demande":
      return { hours: crm.callbackHours, business: true, from: "délai de rappel (Réglages), en heures ouvrables" };
    case "soumission-envoyee":
      return { hours: 48, business: false, from: "tâche « envoyée, jamais ouverte » (2 jours)" };
    case "ouverte":
      return { hours: crm.openedFollowDays * 24, business: false, from: "relance d’une soumission ouverte (Réglages)" };
    case "va-de-l-avant":
      return { hours: 6, business: false, from: "exemple du propriétaire : client prêt depuis 6 h" };
    case "installateur-trouve":
      return { hours: crm.jobNoAnswerHours, business: false, from: "job offert sans preneur (Réglages)" };
    case "contrat-pret":
      return { hours: 48, business: false, from: "exemple du propriétaire : contrat prêt depuis 48 h" };
    case "signe":
      return { hours: 48, business: false, from: "tâche « réserver la date » (48 h après la signature)" };
    default:
      return null;
  }
}

/** Délai d'alerte d'une étape, ou null (aucune alerte). */
export function stepDelay(step: JourneyStep, ps: Pick<ParcoursSettings, "alertHours">, crm: CrmSettings): StepDelay | null {
  const set = ps.alertHours[step];
  if (set === null) return null;
  if (typeof set === "number" && set > 0) return { hours: set, business: step === "demande", source: "reglage", from: "réglage" };
  const d = defaultDelay(step, crm);
  return d ? { ...d, source: "defaut" } : null;
}

export function deadlineOf(since: string, d: Pick<StepDelay, "hours" | "business">): Date {
  const start = new Date(since);
  return d.business ? addBusinessHours(start, d.hours) : new Date(start.getTime() + d.hours * HOUR);
}

/** Instant repoussé hors des heures silencieuses (Montréal). */
export function outsideQuietHours(at: Date, ps: Pick<ParcoursSettings, "quietStart" | "quietEnd">): Date {
  const { quietStart: s, quietEnd: e } = ps;
  if (s === e) return at;
  const z = zoned(at);
  const quiet = s > e ? z.hour >= s || z.hour < e : z.hour >= s && z.hour < e;
  if (!quiet) return at;
  const nextDay = s > e && z.hour >= s;
  return zonedToUtc(nextDay ? addDaysYmd(z.ymd, 1) : z.ymd, e);
}

/* ---------------- Entrées ---------------- */

/** Données lues ailleurs que dans les magasins de base (parcours-sources.ts) : factures, après-vente, plans d'entretien. */
export interface ParcoursInput {
  invoices: Array<{ jobId: string; number: string; status: "emise" | "payee" | "annulee"; dueAt: string; issuedAt: string; paidAt: string | null; totalCents: number }>;
  afterSale: Record<string, { surveyAt: string | null; referralAt: string | null }>;
  memberships: Array<{ jobId: string; joinedAt: string; active: boolean }>;
}

export interface JourneyContext {
  now: Date;
  /** Dossier du contrat, par soumission. */
  dossiers: ReadonlyMap<string, Dossier>;
  jobs: ReadonlyMap<string, Job>;
  /** Jobs du parcours du contrat (offre ou approbation) : pas signés avant la signature du client. */
  contractJobs: ReadonlyMap<string, Dossier>;
  records: Readonly<Record<string, { enRoute?: unknown; arrivedAt?: unknown }>>;
  parcours?: ParcoursInput;
}

export function journeyContext(src: Pick<SourceData, "contrats" | "parcours" | "jobs">, now: Date): JourneyContext {
  const list = src.contrats?.contrats.dossiers ?? [];
  const dossiers = new Map(list.map((d) => [d.quoteId, d]));
  const contractJobs = new Map<string, Dossier>();
  for (const d of list) {
    if (d.jobId) contractJobs.set(d.jobId, d);
    if (d.offer?.jobId) contractJobs.set(d.offer.jobId, d);
  }
  for (const j of src.jobs) {
    const q = (j as Job & { quoteId?: unknown }).quoteId;
    const d = typeof q === "string" ? dossiers.get(q) : undefined;
    if (d && !contractJobs.has(j.id)) contractJobs.set(j.id, d);
  }
  return { now, dossiers, jobs: new Map(src.jobs.map((j) => [j.id, j])), contractJobs, records: src.contrats?.records ?? {}, parcours: src.parcours };
}

/* ---------------- Faits ---------------- */

export type InvoiceFact = "aucune" | "a-recevoir" | "en-retard" | "payee";

export interface JourneyFlags {
  /** Offre en cours auprès des installateurs (moteur d'offres), sans preneur encore. */
  offerPending: boolean;
  /** Refus ou changement demandé par l'installateur, ou autre installateur demandé : à remplacer. */
  finalisation: boolean;
  /** Signé, sans job. */
  noJob: boolean;
  /** Job sans installateur attribué. */
  noInstaller: boolean;
  /** Job offert, offres en attente. */
  jobOffered: boolean;
  invoice: InvoiceFact;
  /** Date d'installation passée, pas terminé, ni « en route » ni arrivée. */
  dateMissed: boolean;
}

export interface LostInfo {
  at: string;
  reason: string;
  detail?: string;
  auto: boolean;
  /** Raison structurée choisie à la main ; null : non précisée (ou perte automatique). */
  cause: LossCause | null;
  motif: LossMotif;
  /** Plus haute étape atteinte avant la perte. */
  reached: JourneyStep;
}

export interface JourneyFacts {
  state: JourneyState;
  since: string;
  manual: boolean;
  reactivated: boolean;
  quoteId: string | null;
  jobId: string | null;
  scheduledFor: string | null;
  flags: JourneyFlags;
  lost: LostInfo | null;
}

export interface Journey extends JourneyFacts {
  actor: Actor | null;
  /** Pourquoi cette personne (règle appliquée), en clair. */
  actorWhy: string;
  blockers: string[];
}

const HOUR = 3_600_000;
const byAt = <T extends { at: string }>(a: T, b: T) => a.at.localeCompare(b.at);
const maxIso = (...xs: Array<string | null | undefined>): string => xs.filter((x): x is string => Boolean(x)).sort().pop() ?? "";
const auditAt = (j: Job, action: string) => [...j.audit].reverse().find((a) => a.action === action)?.at;

interface Cand {
  step: JourneyStep;
  at: string;
  quoteId?: string;
  jobId?: string;
  scheduledFor?: string | null;
  flags?: Partial<JourneyFlags>;
}

const EARLY: Partial<Record<Stage, JourneyStep>> = { nouvelle: "demande", contacte: "contacte", "soumission-envoyee": "soumission-envoyee", ouverte: "ouverte" };

function offerOf(d: Dossier | undefined, versionId: string, jobs: ReadonlyMap<string, Job>): { open: boolean; jobId: string | null; takenAt: string | null } {
  const closed = { open: false, jobId: null, takenAt: null };
  if (!d?.offer || d.offer.versionId !== versionId) return closed;
  const job = jobs.get(d.offer.jobId);
  if (!job || job.status === "annule" || job.status === "termine") return closed;
  // Même règle que offerOpen (contrats/service.ts) : l'installateur de l'offre a refusé ou demandé des changements.
  if (job.assignedInstallerId && d.proposals.some((p) => p.via === "offre" && p.installerId === job.assignedInstallerId && p.versionId === versionId && (p.status === "refusee" || p.status === "changements"))) return { ...closed, jobId: job.id };
  const takenAt = job.assignedInstallerId ? (job.offers.find((o) => o.installerId === job.assignedInstallerId && o.response === "accepte")?.respondedAt ?? auditAt(job, "offre acceptée") ?? job.updatedAt) : null;
  return { open: true, jobId: job.id, takenAt };
}

/** Moment où le dossier est revenu à « trouver l'installateur » (refus, changements, autre installateur, annulation). */
function finalisationAt(d: Dossier, versionId: string): string {
  const ats: string[] = [];
  for (const p of d.proposals) if (p.versionId === versionId && (p.status === "refusee" || p.status === "changements")) ats.push(p.messages.at(-1)?.at ?? p.createdAt);
  for (const c of d.contracts) {
    if (c.refusal) ats.push(c.refusal.at);
    if (c.cancellation) ats.push(c.cancellation.at);
  }
  return maxIso(...ats);
}

/** Événements atteints (pour « plus haute étape avant la perte ») : tous, soumissions refusées comprises. */
function reachedEvents(b: ClientBundle, ctx: JourneyContext): Array<{ step: JourneyStep; at: string }> {
  const out: Array<{ step: JourneyStep; at: string }> = [];
  for (const e of inboundEvents(b)) out.push({ step: "demande", at: e.at });
  for (const e of contactEvents(b)) out.push({ step: "contacte", at: e.at });
  for (const q of b.quotes) {
    for (const v of q.versions) {
      if (v.sentAt) out.push({ step: "soumission-envoyee", at: v.sentAt });
      if (v.views.firstAt) out.push({ step: "ouverte", at: v.views.firstAt });
      if (v.jumelage) out.push({ step: "va-de-l-avant", at: v.jumelage.at });
      if (v.acceptance) out.push({ step: "signe", at: v.acceptance.at });
    }
    const d = ctx.dossiers.get(q.id);
    for (const p of d?.proposals ?? []) out.push({ step: "installateur-trouve", at: p.createdAt });
    for (const c of d?.contracts ?? []) {
      out.push({ step: "contrat-pret", at: c.approvedAt });
      if (c.signature) out.push({ step: "signe", at: c.signature.at });
    }
  }
  for (const j of b.jobs) {
    if (j.kind === "entretien") continue;
    if (!ctx.contractJobs.has(j.id)) out.push({ step: "signe", at: j.createdAt });
    const planned = auditAt(j, "marquer planifié");
    if (planned) out.push({ step: "planifie", at: planned });
    const done = jobCompletion(j);
    if (done) out.push({ step: "installe", at: done.completedAt });
  }
  for (const s of b.record?.stageLog ?? []) {
    const m = STEP_OF_LEGACY[s.to];
    if (m !== "perdu") out.push({ step: m, at: s.at });
  }
  return out;
}

function reachedBefore(events: Array<{ step: JourneyStep; at: string }>, at: string): JourneyStep {
  let r = 0;
  for (const e of events) if (e.at <= at) r = Math.max(r, STEP_RANK[e.step]);
  return JOURNEY_STEPS[r];
}

/** Motif automatique d'une perte : le dernier fait décisif avant elle, sinon l'état de la dernière soumission. */
export function lossMotif(b: ClientBundle, ctx: JourneyContext, lostAt: string): LossMotif {
  const decisive: Array<{ at: string; motif: LossMotif }> = [];
  for (const q of b.quotes) {
    for (const v of q.versions) if (v.refusal && v.refusal.at <= lostAt) decisive.push({ at: v.refusal.at, motif: "soumission-refusee" });
    for (const c of ctx.dossiers.get(q.id)?.contracts ?? []) {
      if (c.status === "refuse" && c.refusal && c.refusal.at <= lostAt) decisive.push({ at: c.refusal.at, motif: "contrat-refuse" });
      if (c.status === "annule" && c.cancellation && c.cancellation.at <= lostAt) decisive.push({ at: c.cancellation.at, motif: "contrat-annule" });
    }
  }
  for (const j of b.jobs) {
    const at = j.status === "annule" ? (auditAt(j, "annuler le job") ?? j.updatedAt) : null;
    if (at && at <= lostAt) decisive.push({ at, motif: "job-annule" });
  }
  const last = decisive.sort(byAt).pop();
  if (last) return last.motif;
  const sent = b.quotes
    .flatMap((q) => q.versions)
    .filter((v) => v.sentAt && v.sentAt <= lostAt)
    .sort((x, y) => x.sentAt!.localeCompare(y.sentAt!))
    .pop();
  if (!sent) return "avant-soumission";
  if (sent.content.validUntil && sent.content.validUntil < localYmd(lostAt)) return "expiree";
  if (!sent.acceptance && !sent.jumelage) return "sans-reponse";
  return "autre";
}

const NO_FLAGS: JourneyFlags = { offerPending: false, finalisation: false, noJob: false, noInstaller: false, jobOffered: false, invoice: "aucune", dateMissed: false };

/** Étape du parcours d'un client, depuis quand, et le contexte (soumission, job, drapeaux) qui la porte. */
export function journeyFacts(b: ClientBundle, stage: StageInfo, ctx: JourneyContext): JourneyFacts {
  const now = ctx.now;
  const today = localYmd(now);
  const cutoff = stage.reactivatedAt ?? "";
  const ok = (at: string | null | undefined) => Boolean(at) && at! >= cutoff;
  const cands: Cand[] = [];

  // Étapes 1 à 4 : les mêmes événements que l'étape d'origine (stage.ts).
  for (const e of stageEvents(b)) {
    const s = EARLY[e.stage];
    if (s && ok(e.at)) cands.push({ step: s, at: e.at });
  }
  if (!cands.length) cands.push({ step: "demande", at: cutoff || b.firstAt });

  // Étapes 5 à 8 : soumissions et parcours du contrat (C1).
  let contractLost: { at: string; detail?: string } | null = null;
  for (const q of b.quotes) {
    const v = latestSent(q);
    const acc = q.versions
      .map((x) => x.acceptance)
      .filter((a): a is NonNullable<typeof a> => Boolean(a) && ok(a!.at))
      .sort(byAt)
      .pop();
    if (acc) {
      cands.push({ step: "signe", at: acc.at, quoteId: q.id });
      continue;
    }
    if (!v || v.refusal) continue; // soumission refusée : la perte est calculée par l'étape d'origine
    const d = ctx.dossiers.get(q.id);
    const c = activeContract(d);
    if (c && c.versionId === v.id && c.status === "signe" && c.signature && ok(c.signature.at)) {
      cands.push({ step: "signe", at: c.signature.at, quoteId: q.id });
      continue;
    }
    if (c && c.versionId === v.id && c.status === "a-signer" && ok(c.approvedAt)) {
      cands.push({ step: "contrat-pret", at: c.approvedAt, quoteId: q.id });
      continue;
    }
    const offer = offerOf(d, v.id, ctx.jobs);
    const cs = clientStage(d, v.id, { jumelage: Boolean(v.jumelage), offerOpen: offer.open });
    if (cs === "refuse") {
      const r = [...(d?.contracts ?? [])].filter((x) => x.versionId === v.id && x.status === "refuse" && x.refusal).pop()?.refusal;
      if (r && ok(r.at) && (!contractLost || r.at > contractLost.at)) contractLost = { at: r.at, ...(r.reason.trim() ? { detail: r.reason.trim().slice(0, 200) } : {}) };
      continue;
    }
    const jum = v.jumelage && ok(v.jumelage.at) ? v.jumelage : null;
    if (cs === "confirmation" && d) {
      const pending = d.proposals.filter((p) => p.versionId === v.id && p.status === "en-attente").sort((x, y) => x.createdAt.localeCompare(y.createdAt)).pop();
      if (pending && ok(pending.createdAt)) cands.push({ step: "installateur-trouve", at: pending.createdAt, quoteId: q.id, jobId: pending.jobId ?? undefined });
      else if (offer.takenAt && ok(offer.takenAt)) cands.push({ step: "installateur-trouve", at: offer.takenAt, quoteId: q.id, jobId: offer.jobId ?? undefined });
      else if (jum || ok(d.offer?.at)) cands.push({ step: "va-de-l-avant", at: maxIso(jum?.at, d.offer?.at), quoteId: q.id, jobId: offer.jobId ?? undefined, flags: { offerPending: true } });
      continue;
    }
    if (cs === "finalisation" && d && (jum || ok(finalisationAt(d, v.id)))) {
      cands.push({ step: "va-de-l-avant", at: maxIso(jum?.at, finalisationAt(d, v.id)), quoteId: q.id, flags: { finalisation: true } });
      continue;
    }
    if (jum) cands.push({ step: "va-de-l-avant", at: jum.at, quoteId: q.id });
  }

  // Étapes 8 à 12 : jobs d'installation, facture de commission, suivi.
  const inv = ctx.parcours?.invoices ?? [];
  let activeJobs = 0;
  for (const j of b.jobs) {
    if (j.status === "annule" || j.kind === "entretien" || !ok(j.createdAt)) continue;
    activeJobs++;
    const dossier = ctx.contractJobs.get(j.id);
    let signedAt: string | null = j.createdAt;
    if (dossier) {
      const c = activeContract(dossier);
      const q = b.quotes.find((x) => x.id === dossier.quoteId);
      const acc = q?.versions.map((x) => x.acceptance?.at).filter((x): x is string => Boolean(x)).sort().pop();
      signedAt = c?.status === "signe" && c.signature ? c.signature.at : (acc ?? null);
      if (!signedAt) {
        activeJobs--;
        continue; // job du contrat avant la signature : l'étape vient de la soumission
      }
    }
    const done = jobCompletion(j);
    if (done) {
      const invoices = inv.filter((i) => i.jobId === j.id && i.status !== "annulee").sort((x, y) => x.issuedAt.localeCompare(y.issuedAt));
      const last = invoices.at(-1);
      const invoice: InvoiceFact = !last ? "aucune" : last.status === "payee" ? "payee" : invoiceState(last, now) === "en-retard" ? "en-retard" : "a-recevoir";
      cands.push({ step: "installe", at: maxIso(done.completedAt, signedAt), jobId: j.id, flags: { invoice } });
      if (last?.status === "payee") {
        const paidAt = maxIso(last.paidAt ?? last.issuedAt, done.completedAt);
        cands.push({ step: "paye", at: paidAt, jobId: j.id, flags: { invoice } });
        const a = ctx.parcours?.afterSale[j.id];
        const follow = [a?.surveyAt, a?.referralAt, ...(ctx.parcours?.memberships ?? []).filter((m) => m.jobId === j.id && m.active).map((m) => m.joinedAt)].filter((x): x is string => Boolean(x)).sort()[0];
        if (follow) cands.push({ step: "suivi", at: maxIso(paidAt, follow), jobId: j.id, flags: { invoice } });
      }
      continue;
    }
    if (j.status === "planifie" || (j.status === "attribue" && j.scheduledFor)) {
      const r = ctx.records[j.id];
      const missed = Boolean(j.scheduledFor && j.scheduledFor < today && !r?.enRoute && !r?.arrivedAt);
      cands.push({ step: "planifie", at: maxIso(auditAt(j, "marquer planifié") ?? j.updatedAt, signedAt), jobId: j.id, scheduledFor: j.scheduledFor, flags: { dateMissed: missed } });
      continue;
    }
    cands.push({ step: "signe", at: signedAt, jobId: j.id, flags: { noInstaller: !j.assignedInstallerId, jobOffered: pendingOffers(j, now).length > 0 } });
  }

  // La plus haute étape ; à égalité, la plus ancienne (le temps passé dans l'étape).
  const rank = Math.max(...cands.map((c) => STEP_RANK[c.step]));
  const top = cands.filter((c) => STEP_RANK[c.step] === rank).sort(byAt);
  const withJob = top.find((c) => c.jobId);
  const auto = {
    step: JOURNEY_STEPS[rank],
    since: top[0].at,
    quoteId: top.find((c) => c.quoteId)?.quoteId ?? null,
    jobId: withJob?.jobId ?? null,
    scheduledFor: withJob?.scheduledFor ?? null,
    flags: { ...NO_FLAGS, ...Object.assign({}, ...top.map((c) => c.flags ?? {})) } as JourneyFlags,
  };
  if (auto.step === "signe") auto.flags.noJob = activeJobs === 0;

  const events = () => reachedEvents(b, ctx);
  const base = { manual: false, reactivated: Boolean(stage.reactivatedAt), quoteId: auto.quoteId, jobId: auto.jobId, scheduledFor: auto.scheduledFor, flags: auto.flags };

  // Perdu : l'étape d'origine (manuelle ou automatique) fait foi.
  if (stage.stage === "perdue") {
    const l = stage.lost;
    const at = l?.at ?? stage.since;
    const rec = b.record?.lost;
    const auto2 = l?.auto ?? false;
    const motif: LossMotif = auto2 ? (l?.reason === "Job annulé" ? "job-annule" : "soumission-refusee") : lossMotif(b, ctx, at);
    return {
      ...base,
      state: "perdu",
      since: at,
      manual: !auto2,
      reactivated: false,
      lost: { at, reason: l?.reason || "Sans raison notée", ...(l?.detail ? { detail: l.detail } : {}), auto: auto2, cause: !auto2 && isLossCause(rec?.cause) ? rec.cause : null, motif, reached: reachedBefore(events(), at) },
    };
  }

  // Étape manuelle : tient jusqu'à ce qu'un fait APRÈS le choix donne une étape plus haute (même règle que stage.ts).
  if (stage.manual) {
    const m = STEP_OF_LEGACY[stage.stage] as JourneyStep;
    const overridden = STEP_RANK[auto.step] > STEP_RANK[m] && auto.since > stage.since;
    if (!overridden) return { ...base, state: m, since: stage.since, manual: true, lost: null, flags: STEP_RANK[m] === rank ? auto.flags : NO_FLAGS, jobId: STEP_RANK[m] === rank ? auto.jobId : null };
  }

  // Contrat refusé par le client, et rien d'autre en cours depuis (ni soumission, ni nouvelle demande) : perdu.
  if (contractLost && STEP_RANK[auto.step] <= STEP_RANK["contrat-pret"]) {
    const cl = contractLost;
    const later = cands.some((c) => STEP_RANK[c.step] >= STEP_RANK["soumission-envoyee"] && c.at > cl.at) || inboundEvents(b).some((e) => e.at > cl.at);
    if (!later) return { ...base, state: "perdu", since: cl.at, lost: { at: cl.at, reason: "Contrat refusé", ...(cl.detail ? { detail: cl.detail } : {}), auto: true, cause: null, motif: "contrat-refuse", reached: reachedBefore(events(), cl.at) } };
  }

  return { ...base, state: auto.step, since: auto.since, lost: null };
}

/* ---------------- Blocages et « qui doit agir » ---------------- */

/**
 * Tâches qui BLOQUENT le dossier tant que le propriétaire n'a pas agi : seulement une fois dues, et seulement aux étapes
 * où elles ont un sens (un job créé à l'approbation du contrat ne bloque pas « Contrat prêt à signer » : c'est au client
 * de signer). Libellés génériques : aucun détail.
 */
export const BLOCKING_RULES: Partial<Record<TaskRule, { label: string; steps?: readonly JourneyStep[] }>> = {
  "contrat-reponse": { label: "Réponse de l’installateur ou du client à traiter" },
  "contrat-date": { label: "Date d’installation à régler", steps: ["signe", "planifie"] },
  "job-sans-reponse": { label: "Job sans preneur", steps: ["va-de-l-avant", "installateur-trouve", "signe"] },
  "job-a-planifier": { label: "Job attribué sans date", steps: ["signe"] },
};

/** Tâches qui disent que le client attend une réponse de nous. */
export const WAITING_RULES: ReadonlySet<TaskRule> = new Set<TaskRule>(["texto-non-lu", "question-client", "rappel-appel"]);

export function blockersOf(f: Pick<JourneyFacts, "state" | "flags">, tasks: readonly Pick<Task, "rule" | "dueAt">[], now: Date): string[] {
  if (f.state === "perdu") return [];
  const out: string[] = [];
  for (const t of tasks) {
    const b = BLOCKING_RULES[t.rule];
    if (!b || Date.parse(t.dueAt) > now.getTime()) continue;
    if (b.steps && !b.steps.includes(f.state)) continue;
    out.push(b.label);
  }
  if (f.flags.invoice === "en-retard") out.push("Commission en retard");
  if (f.flags.dateMissed) out.push("Date d’installation dépassée");
  return [...new Set(out)];
}

/**
 * Qui doit agir, dans l'ordre (la première règle qui s'applique) :
 *   1. Perdu : personne.
 *   2. Le client attend une réponse (texto non lu, question, appel manqué) : Propriétaire.
 *   3. Dossier bloqué (voir blockersOf) : Propriétaire.
 *   4. Selon l'étape :
 *        Demande, Contacté                        Propriétaire (rappeler ; envoyer la soumission)
 *        Soumission envoyée, Ouverte              Client (ouvrir ; répondre)
 *        Va de l'avant                            Installateur si une offre est en cours, sinon Propriétaire
 *        Installateur trouvé                      Installateur (approuver le contrat)
 *        Contrat prêt à signer                    Client (signer)
 *        Signé                                    Propriétaire sans job ou sans installateur ; Installateur si le
 *                                                 job lui est offert ou attribué (réserver la date)
 *        Planifié                                 Installateur (installer)
 *        Installé                                 Propriétaire sans facture (facturer) ; Installateur si la facture
 *                                                 est émise (payer la commission)
 *        Payé                                     Client (répondre au sondage)
 *        Suivi                                    Propriétaire s'il reste une tâche, sinon personne
 */
export function whoActs(f: Pick<JourneyFacts, "state" | "flags">, tasks: readonly Pick<Task, "rule">[], blockers: readonly string[]): { actor: Actor | null; why: string } {
  if (f.state === "perdu") return { actor: null, why: "Dossier perdu" };
  if (tasks.some((t) => WAITING_RULES.has(t.rule))) return { actor: "proprietaire", why: "Le client attend une réponse" };
  if (blockers.length) return { actor: "proprietaire", why: `Blocage : ${blockers[0]}` };
  const fl = f.flags;
  switch (f.state) {
    case "demande":
      return { actor: "proprietaire", why: "Rappeler le client" };
    case "contacte":
      return { actor: "proprietaire", why: "Préparer et envoyer la soumission" };
    case "soumission-envoyee":
      return { actor: "client", why: "Ouvrir la soumission" };
    case "ouverte":
      return { actor: "client", why: "Répondre à la soumission" };
    case "va-de-l-avant":
      return fl.offerPending ? { actor: "installateur", why: "Répondre à l’offre du job" } : { actor: "proprietaire", why: fl.finalisation ? "Choisir un autre installateur" : "Trouver l’installateur" };
    case "installateur-trouve":
      return { actor: "installateur", why: "Approuver le contrat" };
    case "contrat-pret":
      return { actor: "client", why: "Signer le contrat" };
    case "signe":
      if (fl.noJob) return { actor: "proprietaire", why: "Créer le job d’installation" };
      if (fl.noInstaller && !fl.jobOffered) return { actor: "proprietaire", why: "Offrir le job à un installateur" };
      if (fl.noInstaller) return { actor: "installateur", why: "Répondre à l’offre du job" };
      return { actor: "installateur", why: "Réserver la date d’installation" };
    case "planifie":
      return { actor: "installateur", why: "Faire l’installation" };
    case "installe":
      return fl.invoice === "aucune" ? { actor: "proprietaire", why: "Facturer la commission (automatique le lendemain, 8 h)" } : { actor: "installateur", why: "Payer la facture de commission" };
    case "paye":
      return { actor: "client", why: "Répondre au sondage de satisfaction" };
    case "suivi":
      return tasks.length ? { actor: "proprietaire", why: "Suivi : entretien, avis ou référence" } : { actor: null, why: "Rien à faire pour l’instant" };
  }
}

/* ---------------- Alerte de délai : tâche CRM ---------------- */

/** Tâches existantes qui couvrent déjà le retard d'une étape : aucune tâche en double. */
export const COVERING_RULES: Partial<Record<JourneyStep, readonly TaskRule[]>> = {
  demande: ["rappel-nouveau", "rappel-appel", "texto-non-lu", "question-client", "thermomatch-sans-soumission"],
  "soumission-envoyee": ["envoyee-non-ouverte"],
  ouverte: ["relance-ouverte", "client-chaud", "question-client"],
  "va-de-l-avant": ["contrat-installateur", "contrat-reponse", "job-sans-reponse"],
  "installateur-trouve": ["job-sans-reponse", "contrat-reponse"],
  signe: ["contrat-date", "job-a-planifier", "job-sans-reponse"],
  planifie: ["contrat-date"],
};

/** « moins d'une heure », « 6 h », « 48 h », « 4 jours ». */
export function elapsedFr(fromIso: string, now: Date): string {
  const h = Math.max(0, Math.floor((now.getTime() - Date.parse(fromIso)) / HOUR));
  if (h < 1) return "moins d’une heure";
  return h < 72 ? `${h} h` : `${Math.floor(h / 24)} jours`;
}

export const ALERT_TEXT: Record<JourneyStep, (e: string) => string> = {
  demande: (e) => `demande sans suite depuis ${e}`,
  contacte: (e) => `contacté depuis ${e}, aucune soumission envoyée`,
  "soumission-envoyee": (e) => `soumission envoyée depuis ${e}, jamais ouverte`,
  ouverte: (e) => `soumission ouverte depuis ${e}, sans réponse`,
  "va-de-l-avant": (e) => `client prêt depuis ${e}, aucun installateur`,
  "installateur-trouve": (e) => `installateur sans réponse depuis ${e}`,
  "contrat-pret": (e) => `contrat prêt à signer depuis ${e}`,
  signe: (e) => `signé depuis ${e}, aucune date réservée`,
  planifie: (e) => `planifié depuis ${e}, pas encore installé`,
  installe: (e) => `installé depuis ${e}, commission pas encore payée`,
  paye: (e) => `payé depuis ${e}, aucun suivi`,
  suivi: (e) => `en suivi depuis ${e}`,
};

const DELAY_FAMILY: Record<JourneyStep, TaskFamily> = {
  demande: "rappels",
  contacte: "suivis",
  "soumission-envoyee": "ouvertes",
  ouverte: "ouvertes",
  "va-de-l-avant": "jobs",
  "installateur-trouve": "jobs",
  "contrat-pret": "suivis",
  signe: "jobs",
  planifie: "jobs",
  installe: "suivis",
  paye: "suivis",
  suivi: "suivis",
};

/** Tâches automatiques FAITES, par référence (client, demande, soumission, job, conversation) : règle et moment. */
export type DoneIndex = ReadonlyMap<string, ReadonlyArray<{ rule: string; doneAt: string }>>;

export function doneIndex(state: Readonly<Record<string, { doneAt?: string; clientId?: string }>>): DoneIndex {
  const out = new Map<string, Array<{ rule: string; doneAt: string }>>();
  for (const [key, s] of Object.entries(state)) {
    if (!s.doneAt || !key.startsWith("auto:")) continue;
    const [, rule, ref] = key.split(":");
    for (const k of new Set([ref, s.clientId].filter((x): x is string => Boolean(x)))) {
      const list = out.get(k) ?? [];
      list.push({ rule, doneAt: s.doneAt });
      out.set(k, list);
    }
  }
  return out;
}

/** Une tâche qui couvre l'étape a été faite pendant l'étape : le propriétaire s'en est occupé (aucune tâche de délai, aucun texto). */
export function coverDone(b: Pick<ClientBundle, "id" | "journal" | "quotes" | "jobs" | "textos">, step: JourneyStep, since: string, done: DoneIndex | undefined): boolean {
  const cover = COVERING_RULES[step] ?? [];
  if (!cover.length || !done?.size) return false;
  const refs = [b.id, ...b.journal.map((e) => e.id), ...b.quotes.map((q) => q.id), ...b.jobs.map((j) => j.id), ...b.textos.map((c) => c.id)];
  return refs.some((r) => (done.get(r) ?? []).some((x) => x.doneAt >= since && (cover as readonly string[]).includes(x.rule)));
}

/** Règle de la tâche de délai : vente (visible du vendeur) ou chantier (propriétaire seulement, equipe/scope.ts). */
export const delayRuleOf = (step: JourneyStep): TaskRule => (SALES_STEPS.has(step) ? "delai-etape" : "delai-chantier");

/** Clé stable d'une tâche de délai : une nouvelle entrée dans l'étape en crée une autre. */
export const delayTaskKey = (clientId: string, step: JourneyStep, since: string) => `auto:${delayRuleOf(step)}:${clientId}:${step}:${since}`;

/**
 * Tâche « délai dépassé » d'une étape : seulement quand le délai d'alerte est dépassé ET qu'aucune tâche existante ne
 * couvre déjà ce retard (ouverte, ou faite pendant l'étape). Calculée, jamais stockée (comme les autres tâches automatiques).
 */
export function delayTask(b: Pick<ClientBundle, "id" | "firstName" | "journal" | "quotes" | "jobs" | "textos">, f: Pick<JourneyFacts, "state" | "since">, ps: ParcoursSettings, crm: CrmSettings, now: Date, open: readonly Pick<Task, "rule">[], done?: DoneIndex): Task | null {
  if (f.state === "perdu") return null;
  const d = stepDelay(f.state, ps, crm);
  if (!d) return null;
  const deadline = deadlineOf(f.since, d);
  if (deadline.getTime() > now.getTime()) return null;
  const cover = COVERING_RULES[f.state] ?? [];
  if (open.some((t) => cover.includes(t.rule))) return null;
  if (coverDone(b, f.state, f.since, done)) return null;
  const who = b.firstName || "Client";
  const text = ALERT_TEXT[f.state](elapsedFr(f.since, now));
  return {
    key: delayTaskKey(b.id, f.state, f.since),
    rule: delayRuleOf(f.state),
    family: DELAY_FAMILY[f.state],
    clientId: b.id,
    title: `${who} : ${text}`,
    detail: `Délai d’alerte de l’étape « ${stepLabel(f.state, ps)} » dépassé (${d.hours} h${d.business ? " ouvrables" : ""})`,
    dueAt: deadline.toISOString(),
    href: `/gestion/clients/${b.id}`,
    manual: false,
    snoozed: false,
  };
}

/** Parcours complet d'un client (appelé par computeIndex, model.ts, une fois ses tâches connues). */
export function computeJourney(b: ClientBundle, stage: StageInfo, ctx: JourneyContext, tasksOf: (f: JourneyFacts) => readonly Pick<Task, "rule" | "dueAt">[]): Journey {
  const f = journeyFacts(b, stage, ctx);
  const tasks = tasksOf(f);
  const blockers = blockersOf(f, tasks, ctx.now);
  const who = whoActs(f, tasks, blockers);
  return { ...f, actor: who.actor, actorWhy: who.why, blockers };
}

/** Progression pour le portail client : étape n sur 12 et libellés simples ; RIEN d'interne (ni montant, ni personne). */
export interface ClientProgress {
  n: number;
  total: number;
  label: string;
  steps: string[];
}

export function clientProgress(state: JourneyState): ClientProgress | null {
  if (state === "perdu") return null;
  return { n: stepNumber(state), total: STEP_TOTAL, label: CLIENT_STEP_LABELS[state], steps: JOURNEY_STEPS.map((s) => CLIENT_STEP_LABELS[s]) };
}
