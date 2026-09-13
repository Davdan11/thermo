/* ==================================================================
   Objets d'affichage (DTO) du volet B pour les pages de /gestion :
   Automatisations, panneau après-vente de la fiche client, bande de
   l'accueil. Aucun courriel ni numéro : détails du journal écrits sans
   renseignement personnel (« Job n° 12 · courriel envoyé »).
   AUCUNE vérification d'accès ici : les pages passent par
   requireAdmin().
   ================================================================== */

import { journalDir } from "@/lib/crm/lead-journal";
import { businessMailingAddress, googleReviewUrl } from "@/lib/relances/config";
import { liveSendsAllowed } from "@/lib/textos/twilio-send";
import { readJournalEntries } from "../statistiques";
import { smsConfigured, toE164 } from "../sms";
import { readGestion } from "../store";
import { localYmd, zonedToUtc } from "../crm/time";
import { blockersFrom } from "../commissions/blocker";
import { invoiceState } from "../commissions/calc";
import { jobCompletion } from "../commissions/link";
import { readCommissions } from "../commissions/store";
import type { InvoiceState } from "../commissions/types";
import { upcoming } from "./engine";
import { AUTOMATIONS, type AutomationGroup } from "./registry";
import { readAfterSale, readAutomations } from "./store";
import { LOGISVERT_LABELS, type AutomationId, type LogisvertStatus, type LogStatus, type RequestKind, type TickSummary } from "./types";

const D = 86_400_000;
export const TICK_MINUTES = 15;

async function referralDemands(): Promise<Map<string, number>> {
  const out = new Map<string, number>();
  const entries = await readJournalEntries(journalDir()).catch(() => []);
  for (const e of entries) {
    const u = e.attribution?.utm;
    if (u?.utm_source !== "reference" || !u.utm_campaign) continue;
    out.set(u.utm_campaign, (out.get(u.utm_campaign) ?? 0) + 1);
  }
  return out;
}

/* ---------------- Page Automatisations ---------------- */

export interface AutomationRowDTO {
  id: AutomationId;
  group: AutomationGroup;
  label: string;
  audience: string;
  channels: string;
  when: string;
  description: string;
  enabled: boolean;
  done: number;
  last7: number;
  failed: number;
  missed: number;
  recent: Array<{ at: string; status: LogStatus; detail: string }>;
  next: string | null;
  waiting: string | null;
}

export interface AutomationsPageView {
  rows: AutomationRowDTO[];
  lastTick: TickSummary | null;
  nextTickAt: string | null;
  cronLate: boolean;
  startedAt: string | null;
  warnings: string[];
  referralReward: string;
  referrals: { links: number; demands: number };
  doneToday: number;
  live: boolean;
}

export async function automationsView(now = new Date()): Promise<AutomationsPageView> {
  const [auto, after, next, demands] = await Promise.all([readAutomations(), readAfterSale(), upcoming(now), referralDemands()]);
  const entries = Object.values(auto.log);
  const weekAgo = now.getTime() - 7 * D;
  const dayStart = zonedToUtc(localYmd(now), 0).getTime();
  const when = (e: { doneAt?: string; at: string }) => e.doneAt ?? e.at;
  const rows = AUTOMATIONS.map((def): AutomationRowDTO => {
    const mine = entries.filter((e) => e.automation === def.id);
    return {
      ...def,
      enabled: auto.settings.enabled[def.id] !== false,
      done: mine.filter((e) => e.status === "fait").length,
      last7: mine.filter((e) => e.status === "fait" && Date.parse(when(e)) >= weekAgo).length,
      failed: mine.filter((e) => e.status === "echec").length,
      missed: mine.filter((e) => e.status === "ignore" && e.detail.includes("manqué")).length,
      recent: [...mine].sort((a, b) => when(b).localeCompare(when(a))).slice(0, 5).map((e) => ({ at: when(e), status: e.status, detail: e.detail })),
      next: next[def.id]?.next ?? null,
      waiting: next[def.id]?.waiting ?? null,
    };
  });
  const last = auto.lastTick;
  const lateMs = (TICK_MINUTES * 2 + 5) * 60_000;
  const warnings: string[] = [];
  if (!businessMailingAddress()) warnings.push("BUSINESS_MAILING_ADDRESS absente : aucun courriel aux clients ne part (la LCAP exige l’adresse postale). Les envois attendent.");
  if (!smsConfigured()) warnings.push("Textos non configurés (Twilio) : seuls les courriels partent.");
  if (!googleReviewUrl()) warnings.push("GOOGLE_REVIEW_URL absent : les demandes d’avis Google attendent.");
  if (!(process.env.ALERT_SMS_TO && toE164(process.env.ALERT_SMS_TO))) warnings.push("ALERT_SMS_TO absent : vos alertes et résumés arrivent par courriel seulement.");
  if (process.env.NODE_ENV === "production" && (process.env.AUTOMATISATIONS_CRON_SECRET?.trim().length ?? 0) < 24) warnings.push("AUTOMATISATIONS_CRON_SECRET absent : la tâche planifiée est refusée, rien ne tourne tout seul.");
  if (!liveSendsAllowed()) warnings.push("Développement : les envois sont simulés (rien ne part vraiment).");
  return {
    rows,
    lastTick: last,
    nextTickAt: last ? new Date(Date.parse(last.at) + TICK_MINUTES * 60_000).toISOString() : null,
    cronLate: !last || now.getTime() - Date.parse(last.at) > lateMs,
    startedAt: auto.startedAt,
    warnings,
    referralReward: auto.settings.referralReward,
    referrals: { links: Object.values(after.dossiers).filter((d) => d.referral).length, demands: [...demands.values()].reduce((s, n) => s + n, 0) },
    doneToday: entries.filter((e) => e.status === "fait" && Date.parse(when(e)) >= dayStart).length,
    live: liveSendsAllowed(),
  };
}

/* ---------------- Fiche client : après-vente ---------------- */

export interface AfterSaleJobDTO {
  jobId: string;
  jobNumber: number;
  completedOn: string | null;
  survey: { rating: number; comment: string; at: string } | null;
  logisvert: { status: LogisvertStatus; label: string; expectedCents: number; updatedAt: string; by: string } | null;
  referral: { code: string; demands: number } | null;
  requests: Array<{ at: string; kind: RequestKind; message: string }>;
  invoice: { id: string; number: string; state: InvoiceState; totalCents: number } | null;
}

export async function afterSaleForJobs(jobIds: string[], now = new Date()): Promise<AfterSaleJobDTO[]> {
  if (!jobIds.length) return [];
  const [gestion, after, comm, demands] = await Promise.all([readGestion(), readAfterSale(), readCommissions(), referralDemands()]);
  const out: AfterSaleJobDTO[] = [];
  for (const id of jobIds) {
    const job = gestion.jobs.find((j) => j.id === id);
    if (!job) continue;
    const done = jobCompletion(job);
    const d = after.dossiers[id];
    const inv = comm.invoices.filter((i) => i.jobId === id).sort((a, b) => b.issuedAt.localeCompare(a.issuedAt))[0];
    if (!done && !d && !inv) continue;
    const lastLv = d?.logisvert?.updates.at(-1);
    out.push({
      jobId: id,
      jobNumber: job.number,
      completedOn: done ? localYmd(done.completedAt) : null,
      survey: d?.survey ? { rating: d.survey.rating, comment: d.survey.comment, at: d.survey.updatedAt ?? d.survey.at } : null,
      logisvert: d?.logisvert ? { status: d.logisvert.status, label: LOGISVERT_LABELS[d.logisvert.status], expectedCents: d.logisvert.expectedCents, updatedAt: lastLv?.at ?? d.logisvert.sentAt, by: lastLv ? (lastLv.by === "client" ? "le client" : "vous") : "dossier envoyé" } : null,
      referral: d?.referral ? { code: d.referral.code, demands: demands.get(d.referral.code) ?? 0 } : null,
      requests: [...(d?.requests ?? [])].reverse().slice(0, 5),
      invoice: inv ? { id: inv.id, number: inv.number, state: invoiceState(inv, now), totalCents: inv.totalCents } : null,
    });
  }
  return out;
}

/* ---------------- Accueil : bande « partenaires et après-vente » ---------------- */

export interface HomeAfterSaleDTO {
  receivableCents: number;
  receivableCount: number;
  overdueCents: number;
  overdueCount: number;
  paused: number;
  satisfaction: { avg: number | null; count: number; bad: number };
  logisvert: { aFaire: number; faite: number; recue: number; aide: number };
  installsToday: number;
  cronLate: boolean;
}

export async function homeAfterSale(now = new Date()): Promise<HomeAfterSaleDTO> {
  const [comm, after, gestion, auto] = await Promise.all([readCommissions(), readAfterSale(), readGestion(), readAutomations()]);
  const open = comm.invoices.filter((i) => i.status === "emise");
  const late = open.filter((i) => invoiceState(i, now) === "en-retard");
  const monthAgo = now.getTime() - 30 * D;
  const ratings = Object.values(after.dossiers)
    .filter((d) => d.survey && Date.parse(d.survey.updatedAt ?? d.survey.at) >= monthAgo)
    .map((d) => d.survey!.rating);
  const lv = { aFaire: 0, faite: 0, recue: 0, aide: 0 };
  for (const d of Object.values(after.dossiers)) {
    const s = d.logisvert?.status;
    if (s === "a-faire") lv.aFaire++;
    else if (s === "demande-faite") lv.faite++;
    else if (s === "recue") lv.recue++;
    else if (s === "besoin-aide") lv.aide++;
  }
  const today = localYmd(now);
  return {
    receivableCents: open.reduce((s, i) => s + i.totalCents, 0),
    receivableCount: open.length,
    overdueCents: late.reduce((s, i) => s + i.totalCents, 0),
    overdueCount: late.length,
    paused: blockersFrom(comm.invoices, comm.settings, now).size,
    satisfaction: { avg: ratings.length ? ratings.reduce((s, r) => s + r, 0) / ratings.length : null, count: ratings.length, bad: ratings.filter((r) => r <= 3).length },
    logisvert: lv,
    installsToday: gestion.jobs.filter((j) => j.status === "planifie" && j.scheduledFor === today).length,
    cronLate: !auto.lastTick || now.getTime() - Date.parse(auto.lastTick.at) > (TICK_MINUTES * 2 + 5) * 60_000,
  };
}
