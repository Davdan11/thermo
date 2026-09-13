/* ==================================================================
   Chantier T — vues des pages (serveur). Aucun numéro de téléphone :
   étiquettes « Julie T., Laval », statuts, durées, résumés. Le
   cellulaire du propriétaire : quatre derniers chiffres au plus.
   ================================================================== */

import { loadCrmIndex } from "@/lib/gestion/crm/service";
import { ago, stamp } from "@/lib/gestion/crm/time";
import { CLIENT_ID_RE } from "@/lib/gestion/crm/types";
import { adminEmails } from "@/lib/gestion/auth/admins";
import { toE164 } from "@/lib/gestion/sms";
import { formatPhone } from "@/lib/textos/phone";
import { readTextos } from "@/lib/textos/store";
import { campaignReport, type CampaignReport } from "./campaigns";
import { callsReadiness, ownerCell, siteNumber, tail4, type CallsReadiness } from "./config";
import { BASIS_LABELS, consentOf, expressFor, type ConsentBasis } from "./consent";
import { callView, formatDuration, LEAD_CONTEXT, type CallView } from "./masked-call";
import { shortLabel } from "./plan";
import { readTelephonie } from "./store";
import { transcriptionState, TRANSCRIPTION_DISCLAIMER, type TranscriptionState } from "./transcription";
import type { Campaign, RecordingJob, SpeedLead, TelephonieData } from "./types";

const DAY = 86_400_000;

export type Tone = "ok" | "warn" | "bad" | "muted" | "orange" | "blue";

/* ---------------- Enregistrements ---------------- */

export interface RecordingDTO {
  id: string;
  when: string;
  at: string;
  source: string;
  duration: string;
  status: string;
  tone: Tone;
  who: string | null;
  clientId: string | null;
  summary: string[];
  need: string | null;
  budget: string | null;
  nextStep: string | null;
  transcript: string | null;
  audio: boolean;
  canRetry: boolean;
}

const SOURCE_LABELS: Record<RecordingJob["source"], string> = { "appel-entrant": "Appel entrant (menu)", "message-vocal": "Message vocal", "appel-masque": "Appel masqué" };
const TR_STATUS: Record<RecordingJob["status"], [string, Tone]> = {
  attente: ["Transcription en attente", "blue"],
  "en-cours": ["Transcription en cours", "blue"],
  transcrit: ["Transcrit", "ok"],
  echec: ["Transcription impossible", "bad"],
  desactive: ["Transcription désactivée", "muted"],
  "trop-court": ["Trop court pour transcrire", "muted"],
  "trop-long": ["Trop long pour transcrire", "muted"],
};

export function recordingDTO(r: RecordingJob, now: Date, who: { label: string; clientId: string } | null): RecordingDTO {
  const [status, tone] = TR_STATUS[r.status];
  return {
    id: r.id,
    when: stamp(r.createdAt, now),
    at: r.createdAt,
    source: SOURCE_LABELS[r.source],
    duration: formatDuration(r.durationSec),
    status: r.status === "echec" && r.error ? `${status} : ${r.error}` : status,
    tone,
    who: who?.label ?? null,
    clientId: who?.clientId ?? null,
    summary: r.summary ?? [],
    need: r.need ?? null,
    budget: r.budget ?? null,
    nextStep: r.nextStep ?? null,
    transcript: r.transcript ?? null,
    audio: r.audio === "twilio",
    canRetry: r.audio === "twilio" && (r.status === "echec" || r.status === "desactive"),
  };
}

export { TRANSCRIPTION_DISCLAIMER };

/* ---------------- Réponses en 60 secondes ---------------- */

const SMS_LABELS: Record<SpeedLead["sms"]["status"], [string, Tone]> = {
  attente: ["Texto programmé", "blue"],
  envoi: ["Envoi en cours", "blue"],
  envoye: ["Texto envoyé", "ok"],
  simule: ["Texto simulé (dév.)", "muted"],
  desabonne: ["Désabonné : rien envoyé", "muted"],
  echec: ["Texto non envoyé", "bad"],
  "sans-numero": ["Sans numéro", "muted"],
  desactive: ["Désactivé", "muted"],
};

export interface LeadDTO {
  id: string;
  when: string;
  label: string;
  kind: string;
  sms: string;
  smsTone: Tone;
  delay: string | null;
  within60: boolean;
  waitsUntil: string | null;
  choice: string | null;
  owner: string;
  canCall: boolean;
}

function leadDTO(l: SpeedLead, now: Date): LeadDTO {
  const [sms, smsTone] = SMS_LABELS[l.sms.status];
  const delayMs = l.sms.sentAt ? Date.parse(l.sms.sentAt) - Date.parse(l.createdAt) : null;
  const ownerLabel = { attente: "Alerte en attente", envoye: "Alerté par texto", simule: "Alerte simulée (dév.)", "non-configure": "Alerte : ALERT_SMS_TO absent", echec: "Alerte non envoyée", desactive: "Sans alerte" }[l.owner.status];
  return {
    id: l.id,
    when: ago(l.createdAt, now),
    label: shortLabel(l.firstName, l.lastName, l.city),
    kind: LEAD_CONTEXT[l.kind].replace(/^./, (c) => c.toLocaleUpperCase("fr-CA")),
    sms,
    smsTone,
    delay: delayMs !== null ? (delayMs < 60_000 ? `${Math.max(0, Math.round(delayMs / 1000))} s` : formatDuration(delayMs / 1000)) : null,
    within60: delayMs !== null && delayMs <= 60_000,
    waitsUntil: l.sms.status === "attente" && Date.parse(l.sms.sendAt) > now.getTime() ? stamp(l.sms.sendAt, now) : null,
    choice: l.choice ? `${l.choice.label}${l.choice.task === "echec" ? " (tâche non créée)" : ""}` : null,
    owner: ownerLabel,
    canCall: Boolean(l.phone),
  };
}

/* ---------------- Tableau de bord ---------------- */

export interface HubView {
  readiness: {
    calls: CallsReadiness;
    cell: string | null;
    site: string | null;
    alertSms: boolean;
    admins: number;
    speedEnabled: boolean;
    transcription: TranscriptionState;
    cron: boolean;
    record: boolean;
  };
  kpis: { calls7: number; answered7: number; leads30: number; texted30: number; within60: number; chosen30: number; transcribed30: number; pending: number };
  calls: Array<CallView & { when: string }>;
  leads: LeadDTO[];
  recordings: RecordingDTO[];
}

function phoneOwners(index: Awaited<ReturnType<typeof loadCrmIndex>>): Map<string, { label: string; clientId: string }> {
  const m = new Map<string, { label: string; clientId: string }>();
  for (const c of index.clients) for (const p of c.b.phones) if (!m.has(p)) m.set(p, { label: shortLabel(c.b.firstName, c.b.lastName, c.b.city), clientId: c.b.id });
  return m;
}

export async function hubView(now = new Date()): Promise<HubView> {
  const [data, index] = await Promise.all([readTelephonie(), loadCrmIndex()]);
  const owners = phoneOwners(index);
  const since7 = now.getTime() - 7 * DAY;
  const since30 = now.getTime() - 30 * DAY;
  const calls7 = data.calls.filter((c) => Date.parse(c.createdAt) >= since7 && c.result !== "simule");
  const leads30 = data.leads.filter((l) => Date.parse(l.createdAt) >= since30);
  const texted = leads30.filter((l) => l.sms.sentAt);
  return {
    readiness: {
      calls: callsReadiness(),
      cell: ownerCell() ? tail4(ownerCell()) : null,
      site: siteNumber() ? formatPhone(siteNumber()!) : null,
      alertSms: Boolean(process.env.ALERT_SMS_TO && toE164(process.env.ALERT_SMS_TO)),
      admins: adminEmails().length,
      speedEnabled: data.settings.speed.enabled,
      transcription: transcriptionState(data, now),
      cron: Boolean((process.env.TELEPHONIE_CRON_SECRET || process.env.AUTOMATISATIONS_CRON_SECRET || "").trim().length >= 24),
      record: data.settings.calls.record,
    },
    kpis: {
      calls7: calls7.length,
      answered7: calls7.filter((c) => c.result === "repondu").length,
      leads30: leads30.length,
      texted30: texted.length,
      within60: texted.filter((l) => Date.parse(l.sms.sentAt!) - Date.parse(l.createdAt) <= 60_000).length,
      chosen30: leads30.filter((l) => l.choice).length,
      transcribed30: data.recordings.filter((r) => r.transcribedAt && Date.parse(r.transcribedAt) >= since30).length,
      pending: data.recordings.filter((r) => r.status === "attente" || r.status === "en-cours").length,
    },
    calls: [...data.calls].reverse().slice(0, 12).map((c) => ({ ...callView(c), when: ago(c.createdAt, now) })),
    leads: [...data.leads].reverse().slice(0, 12).map((l) => leadDTO(l, now)),
    recordings: [...data.recordings].reverse().slice(0, 10).map((r) => recordingDTO(r, now, r.phone ? (owners.get(r.phone) ?? null) : null)),
  };
}

/* ---------------- Fiche client ---------------- */

export interface ClientTelephonieView {
  clientId: string;
  firstName: string;
  canCall: boolean;
  consent: { ok: boolean; basis: ConsentBasis | null; label: string; since: string | null; expires: string | null; optedOut: boolean };
  express: { active: boolean; when: string; note: string; withdrawn: string | null } | null;
  calls: Array<CallView & { when: string }>;
  recordings: RecordingDTO[];
}

const dateFmt = new Intl.DateTimeFormat("fr-CA", { timeZone: "America/Toronto", day: "numeric", month: "long", year: "numeric" });

export async function clientTelephonieView(clientId: string, now = new Date()): Promise<ClientTelephonieView | null> {
  if (!CLIENT_ID_RE.test(clientId)) return null;
  const [index, data, textos] = await Promise.all([loadCrmIndex(), readTelephonie(), readTextos()]);
  const c = index.byId.get(clientId);
  if (!c) return null;
  const ids = new Set([c.b.id, ...c.b.aliases]);
  const phones = new Set(c.b.phones);
  const optedOut = c.b.phones.some((p) => textos.conversations[p]?.optedOut);
  const consent = consentOf(c.b, data.consents, optedOut, now);
  const express = expressFor(data.consents, [...ids]);
  const calls = data.calls.filter((x) => (x.clientId && ids.has(x.clientId)) || phones.has(x.phone));
  const callIds = new Set(calls.map((x) => x.id));
  const label = shortLabel(c.b.firstName, c.b.lastName, c.b.city);
  return {
    clientId: c.b.id,
    firstName: c.b.firstName || "ce client",
    canCall: c.b.phones.length > 0,
    consent: {
      ok: consent.ok,
      basis: consent.basis,
      label: consent.basis ? BASIS_LABELS[consent.basis] : consent.reason,
      since: consent.since ? dateFmt.format(new Date(consent.since)) : null,
      expires: consent.expiresAt ? dateFmt.format(new Date(consent.expiresAt)) : null,
      optedOut,
    },
    express: express ? { active: !express.withdrawnAt, when: dateFmt.format(new Date(express.at)), note: express.note, withdrawn: express.withdrawnAt ? dateFmt.format(new Date(express.withdrawnAt)) : null } : null,
    calls: [...calls].reverse().slice(0, 8).map((x) => ({ ...callView(x), when: stamp(x.createdAt, now) })),
    recordings: data.recordings
      .filter((r) => (r.phone && phones.has(r.phone)) || (r.callId && callIds.has(r.callId)))
      .reverse()
      .slice(0, 8)
      .map((r) => recordingDTO(r, now, { label, clientId: c.b.id })),
  };
}

/* ---------------- Campagnes ---------------- */

export interface CampaignRow {
  id: string;
  name: string;
  status: Campaign["status"];
  statusLabel: string;
  tone: Tone;
  updated: string;
  report: CampaignReport;
}

export const CAMPAIGN_STATUS: Record<Campaign["status"], [string, Tone]> = {
  brouillon: ["Brouillon", "muted"],
  envoi: ["Envoi en cours", "orange"],
  pause: ["En pause", "warn"],
  terminee: ["Terminée", "ok"],
  annulee: ["Annulée", "muted"],
};

export async function campaignRows(now = new Date()): Promise<{ rows: CampaignRow[]; settings: TelephonieData["settings"]["campaigns"] }> {
  const [data, textos] = await Promise.all([readTelephonie(), readTextos()]);
  return {
    settings: data.settings.campaigns,
    rows: [...data.campaigns].reverse().map((c) => {
      const [statusLabel, tone] = CAMPAIGN_STATUS[c.status];
      return { id: c.id, name: c.name, status: c.status, statusLabel, tone, updated: ago(c.updatedAt, now), report: campaignReport(c, textos.conversations) };
    }),
  };
}
