/* ==================================================================
   Factures de commission : émission, paiement, annulation, lien avec
   la soumission, vues de /gestion et export comptable.
   AUCUNE vérification d'accès ici : pages, Server Actions et routes
   de /gestion passent d'abord par requireAdmin() ; la page publique
   /facture/<jeton> ne voit que la facture de son jeton ; le webhook
   Stripe est authentifié par sa signature.
   Écritures sous verrou, envois APRÈS (jamais sous verrou).
   ================================================================== */

import { newToken, sameToken, TOKEN_RE } from "@/lib/soumissions/tokens";
import { readSettings, readSoumissions } from "@/lib/soumissions/store";
import { TAXES } from "@/lib/soumissions/config";
import { isDay } from "@/lib/soumissions/dates";
import { SITE_URL } from "@/lib/seo";
import { readGestion } from "../store";
import { localYmd } from "../crm/time";
import { realChannels, type Channels } from "../automatisations/send";
import { readAutomations } from "../automatisations/store";
import type { ChannelOutcome } from "../automatisations/types";
import { blockersFrom, computePaymentStats, type PaymentBlock } from "./blocker";
import { computeCommission, commissionBase, daysOverdue, dueAtFor, invoiceState, issueDueAt, nextInvoiceNumber } from "./calc";
import { invoiceIssuedEmail, invoiceReminderEmail, receiptEmail } from "./emails";
import { acceptedQuoteForJob, jobCompletion } from "./link";
import { mutateCommissions, newInvoiceId, normalizeCommissionSettings, readCommissions } from "./store";
import { stripeConfigured, type StripePaid } from "./stripe";
import { INVOICE_ID_RE, PAYMENT_METHOD_LABELS, type CommissionInvoice, type CommissionSettings, type InvoiceSend, type InvoiceState, type PaymentMethod } from "./types";

export const invoiceLink = (base: string, token: string) => `${base.replace(/\/$/, "")}/facture/${encodeURIComponent(token)}`;

const activeFor = (invoices: CommissionInvoice[], jobId: string) => invoices.find((i) => i.jobId === jobId && i.status !== "annulee");

/* ---------------- Émission ---------------- */

export type IssueResult =
  | { ok: true; invoice: CommissionInvoice; created: boolean; email?: ChannelOutcome }
  | { ok: false; code: "introuvable" | "non-termine" | "sans-installateur" | "sans-soumission" | "sans-montant"; message: string };

/**
 * Émet la facture de commission d'un job terminé (une seule par job : une deuxième demande renvoie la première).
 * Montants tirés de l'instantané figé de la soumission acceptée ; rien n'est deviné.
 */
export async function issueInvoiceForJob(jobId: string, by: string, o: { now?: Date; channels?: Channels; baseUrl?: string; send?: boolean } = {}): Promise<IssueResult> {
  const now = o.now ?? new Date();
  const [gestion, soum, settings, comm] = await Promise.all([readGestion(), readSoumissions(), readSettings(), readCommissions()]);
  const job = gestion.jobs.find((j) => j.id === jobId);
  if (!job) return { ok: false, code: "introuvable", message: "Job introuvable." };
  const done = jobCompletion(job);
  if (!done) return { ok: false, code: "non-termine", message: `Le job n° ${job.number} n’est pas terminé.` };
  const installer = gestion.installers.find((i) => i.id === job.assignedInstallerId);
  if (!installer) return { ok: false, code: "sans-installateur", message: `Le job n° ${job.number} n’a pas d’installateur attribué.` };
  const invoiced = new Set(comm.invoices.filter((i) => i.status !== "annulee" && i.jobId !== jobId).map((i) => i.quoteId));
  // Chantier P : visite d'un plan d'entretien : base = prix annuel du plan, pourcentage du plan (montants figés à l'adhésion, sur le job).
  const plan = job.kind === "entretien" && job.maintenance && job.maintenance.priceCents > 0 ? job.maintenance : null;
  const aq = plan ? null : acceptedQuoteForJob(job, soum.quotes, { linkedQuoteId: comm.jobLinks[jobId], invoicedQuoteIds: invoiced, completedAt: done.completedAt });
  if (!plan && !aq) return { ok: false, code: "sans-soumission", message: `Aucune soumission acceptée n’est liée au job n° ${job.number} : choisissez-la dans Paiements.` };
  const totals = aq?.acceptance.snapshot?.totals;
  if (aq && (!totals || !Number.isFinite(totals.taxableCents))) return { ok: false, code: "sans-montant", message: `La soumission ${aq.quote.number} n’a pas de montant accepté lisible.` };
  const billing = plan
    ? { baseCents: plan.priceCents, percent: plan.commissionPercent as number | null, quoteId: `plan:${plan.membershipId}:${plan.visit}`, quoteNumber: `Plan « ${plan.planName} »`, acceptedAt: plan.joinedAt, detail: `plan d’entretien « ${plan.planName} », visite ${plan.visit}` }
    : { baseCents: commissionBase(totals!), percent: null, quoteId: aq!.quote.id, quoteNumber: aq!.quote.number, acceptedAt: aq!.acceptance.at, detail: `soumission ${aq!.quote.number} (${aq!.via})` };

  const out = await mutateCommissions<{ invoice: CommissionInvoice; created: boolean }>((data) => {
    const existing = activeFor(data.invoices, jobId);
    if (existing) return { result: { invoice: structuredClone(existing), created: false }, changed: false };
    const amounts = computeCommission(billing.baseCents, billing.percent ?? data.settings.percent, settings.company);
    const iso = now.toISOString();
    const inv: CommissionInvoice = {
      id: newInvoiceId(),
      number: nextInvoiceNumber(data.counters, now),
      jobId,
      jobNumber: job.number,
      installerId: installer.id,
      installer: { company: installer.company, contactName: installer.contactName, email: installer.email, rbq: installer.rbq },
      quoteId: billing.quoteId,
      quoteNumber: billing.quoteNumber,
      acceptedAt: billing.acceptedAt,
      completedAt: done.completedAt,
      issuedAt: iso,
      dueAt: dueAtFor(now, data.settings.dueDays).toISOString(),
      baseCents: amounts.baseCents,
      percent: amounts.percent,
      commissionCents: amounts.commissionCents,
      tpsCents: amounts.tpsCents,
      tvqCents: amounts.tvqCents,
      totalCents: amounts.totalCents,
      taxes: { tpsPer100k: TAXES.tps.ratePer100k, tvqPer100k: TAXES.tvq.ratePer100k, tpsNumber: amounts.tpsNumber, tvqNumber: amounts.tvqNumber },
      company: structuredClone(settings.company),
      jobLabel: [job.client.firstName, job.client.city].filter(Boolean).join(" · "),
      interac: { email: data.settings.interacEmail, note: data.settings.interacNote },
      token: newToken(),
      status: "emise",
      sends: [],
      events: [{ at: iso, by, action: "facture émise", detail: billing.detail }],
    };
    data.invoices.push(inv);
    return { result: { invoice: structuredClone(inv), created: true }, changed: true };
  });
  if (!out.created || o.send === false) return { ok: true, ...out };
  const email = await sendInvoiceEmail(out.invoice, "emission", o);
  return { ok: true, ...out, email };
}

async function sendInvoiceEmail(inv: CommissionInvoice, kind: InvoiceSend["kind"], o: { now?: Date; channels?: Channels; baseUrl?: string }): Promise<ChannelOutcome> {
  const channels = o.channels ?? realChannels;
  const link = invoiceLink(o.baseUrl ?? SITE_URL, inv.token);
  const mail = kind === "recu" ? receiptEmail(inv, false) : kind === "emission" || kind === "renvoi" ? invoiceIssuedEmail(inv, link, stripeConfigured()) : invoiceReminderEmail(inv, link, stripeConfigured(), { overdue: true, paused: true });
  const email = await channels.installerMail(inv.installer.email, mail, `facture ${kind}`);
  await recordInvoiceSend(inv.id, { at: (o.now ?? new Date()).toISOString(), kind, email });
  return email;
}

export function recordInvoiceSend(id: string, send: InvoiceSend): Promise<void> {
  return mutateCommissions((data) => {
    const inv = data.invoices.find((i) => i.id === id);
    if (!inv) return { result: undefined, changed: false };
    inv.sends.push(send);
    return { result: undefined, changed: true };
  });
}

/** Le propriétaire choisit (ou retire) la soumission acceptée d'un job, pour une facture qui ne trouvait pas son lien. */
export function setJobQuoteLink(jobId: string, quoteId: string | null): Promise<boolean> {
  return mutateCommissions((data) => {
    if (quoteId) data.jobLinks[jobId] = quoteId;
    else delete data.jobLinks[jobId];
    return { result: true, changed: true };
  });
}

/* ---------------- Paiement ---------------- */

export type PayResult = { ok: true; resumed: boolean; already?: boolean } | { ok: false; error: string };

function applyPayment(data: { invoices: CommissionInvoice[]; settings: CommissionSettings }, id: string, payment: NonNullable<CommissionInvoice["payment"]>, now: Date): { result: PayResult & { invoice?: CommissionInvoice }; changed: boolean } {
  const inv = data.invoices.find((i) => i.id === id);
  if (!inv) return { result: { ok: false, error: "Facture introuvable." }, changed: false };
  if (inv.status === "payee") return { result: { ok: true, resumed: false, already: true }, changed: false };
  if (inv.status === "annulee") return { result: { ok: false, error: "Cette facture est annulée." }, changed: false };
  const before = blockersFrom(data.invoices, data.settings, now).has(inv.installerId);
  inv.status = "payee";
  inv.payment = payment;
  inv.events.push({ at: now.toISOString(), by: payment.by, action: "payée", detail: `${PAYMENT_METHOD_LABELS[payment.method]}${payment.reference ? ` · ${payment.reference}` : ""}` });
  const after = blockersFrom(data.invoices, data.settings, now).has(inv.installerId);
  return { result: { ok: true, resumed: before && !after, invoice: structuredClone(inv) }, changed: true };
}

/** « Marquer payé » : date, moyen, référence. La pause des offres se lève d'elle-même (calculée). */
export async function markInvoicePaid(id: string, input: { date: string; method: PaymentMethod; reference: string }, by: string, o: { now?: Date; channels?: Channels } = {}): Promise<PayResult> {
  const now = o.now ?? new Date();
  if (!isDay(input.date) || input.date > localYmd(now)) return { ok: false, error: "Date de paiement invalide." };
  const r = await mutateCommissions((data) => applyPayment(data, id, { date: input.date, method: input.method, reference: input.reference.trim().slice(0, 120), recordedAt: now.toISOString(), by }, now));
  if (r.ok && !r.already && r.invoice) await sendReceipt(r.invoice, r.resumed, o);
  const { invoice: _i, ...rest } = r as PayResult & { invoice?: CommissionInvoice };
  void _i;
  return rest;
}

async function sendReceipt(inv: CommissionInvoice, resumed: boolean, o: { now?: Date; channels?: Channels }) {
  const email = await (o.channels ?? realChannels).installerMail(inv.installer.email, receiptEmail(inv, resumed), "reçu");
  await recordInvoiceSend(inv.id, { at: (o.now ?? new Date()).toISOString(), kind: "recu", email });
}

/** Paiement confirmé par le webhook Stripe : montant et devise vérifiés, idempotent. */
export async function markPaidFromStripe(p: StripePaid, o: { now?: Date; channels?: Channels } = {}): Promise<{ ok: boolean; detail: string }> {
  const now = o.now ?? new Date();
  if (!INVOICE_ID_RE.test(p.invoiceId)) return { ok: false, detail: "facture inconnue" };
  const r = await mutateCommissions<{ ok: boolean; detail: string; invoice?: CommissionInvoice; resumed?: boolean }>((data) => {
    const inv = data.invoices.find((i) => i.id === p.invoiceId);
    if (!inv) return { result: { ok: false, detail: "facture inconnue" }, changed: false };
    if (p.currency !== "cad" || p.amountCents !== inv.totalCents) {
      inv.events.push({ at: now.toISOString(), by: "stripe", action: "paiement Stripe à vérifier", detail: `montant reçu ${p.amountCents} ${p.currency} ≠ ${inv.totalCents} cad` });
      return { result: { ok: false, detail: "montant inattendu : à vérifier" }, changed: true };
    }
    const applied = applyPayment(data, inv.id, { date: localYmd(now), method: p.method, reference: p.paymentIntent ?? p.sessionId, recordedAt: now.toISOString(), by: "stripe", stripe: { sessionId: p.sessionId, paymentIntent: p.paymentIntent } }, now);
    const res = applied.result;
    if (!res.ok) return { result: { ok: false, detail: res.error }, changed: false };
    return { result: { ok: true, detail: res.already ? "déjà payée" : "payée", invoice: res.invoice, resumed: res.resumed }, changed: applied.changed };
  });
  if (r.ok && r.invoice) await sendReceipt(r.invoice, Boolean(r.resumed), o);
  return { ok: r.ok, detail: r.detail };
}

export function recordCheckoutSession(id: string, sessionId: string, now = new Date()): Promise<void> {
  return mutateCommissions((data) => {
    const inv = data.invoices.find((i) => i.id === id);
    if (!inv) return { result: undefined, changed: false };
    inv.stripe = { sessionId, createdAt: now.toISOString() };
    inv.events.push({ at: now.toISOString(), by: "installateur", action: "paiement en ligne commencé" });
    return { result: undefined, changed: true };
  });
}

/* ---------------- Annulation, renvoi, réglages ---------------- */

export function voidInvoice(id: string, reason: string, by: string, now = new Date()): Promise<{ ok: true } | { ok: false; error: string }> {
  return mutateCommissions<{ ok: true } | { ok: false; error: string }>((data) => {
    const inv = data.invoices.find((i) => i.id === id);
    if (!inv) return { result: { ok: false as const, error: "Facture introuvable." }, changed: false };
    if (inv.status !== "emise") return { result: { ok: false as const, error: "Seule une facture non payée peut être annulée." }, changed: false };
    inv.status = "annulee";
    inv.voided = { at: now.toISOString(), by, reason: reason.trim().slice(0, 300) };
    inv.events.push({ at: now.toISOString(), by, action: "annulée", detail: inv.voided.reason });
    return { result: { ok: true as const }, changed: true };
  });
}

export async function resendInvoice(id: string, by: string, o: { now?: Date; channels?: Channels; baseUrl?: string } = {}): Promise<{ ok: true; email: ChannelOutcome } | { ok: false; error: string }> {
  const inv = (await readCommissions()).invoices.find((i) => i.id === id);
  if (!inv) return { ok: false, error: "Facture introuvable." };
  if (inv.status === "annulee") return { ok: false, error: "Cette facture est annulée." };
  void by;
  return { ok: true, email: await sendInvoiceEmail(inv, inv.status === "payee" ? "recu" : "renvoi", o) };
}

export async function saveCommissionSettings(input: Partial<CommissionSettings>, by: string, now = new Date()): Promise<CommissionSettings> {
  return mutateCommissions((data) => {
    data.settings = normalizeCommissionSettings({ ...data.settings, ...input, updatedAt: now.toISOString(), updatedBy: by });
    return { result: data.settings, changed: true };
  });
}

/* ---------------- Lectures ---------------- */

/** Facture d'un lien /facture/<jeton> (comparaison en temps constant), ou null. */
export async function invoiceByToken(token: string): Promise<CommissionInvoice | null> {
  if (!TOKEN_RE.test(token)) return null;
  const data = await readCommissions();
  return data.invoices.find((i) => sameToken(i.token, token)) ?? null;
}

export async function loadInvoice(id: string): Promise<CommissionInvoice | null> {
  if (!INVOICE_ID_RE.test(id)) return null;
  return (await readCommissions()).invoices.find((i) => i.id === id) ?? null;
}

export interface InvoiceRow {
  id: string;
  number: string;
  company: string;
  installerId: string;
  jobId: string;
  jobNumber: number;
  jobLabel: string;
  issuedAt: string;
  dueAt: string;
  totalCents: number;
  commissionCents: number;
  state: InvoiceState;
  daysOverdue: number;
  paidOn: string | null;
  method: string | null;
}

export interface ToInvoiceRow {
  jobId: string;
  jobNumber: number;
  who: string;
  completedAt: string;
  installer: string;
  /** Moment prévu de l'émission automatique. */
  dueAt: string;
  /** Terminé après la mise en marche du moteur : la facture partira d'elle-même. */
  auto: boolean;
  problem: string | null;
  quote: { id: string; number: string; via: string } | null;
}

export interface PaymentsView {
  kpis: { receivableCents: number; receivableCount: number; overdueCents: number; overdueCount: number; receivedMonthCents: number; receivedMonthCount: number; receivedYearCents: number };
  rows: InvoiceRow[];
  installers: Array<{ id: string; company: string; outstandingCents: number; overdueCents: number; paidCount: number; avgDaysToPay: number | null; onTimeRate: number | null; paused: boolean }>;
  paused: Array<PaymentBlock & { company: string }>;
  toInvoice: ToInvoiceRow[];
  acceptedQuotes: Array<{ id: string; number: string; label: string; taxableCents: number; acceptedAt: string }>;
  settings: CommissionSettings;
  stripe: boolean;
  years: string[];
}

export function invoiceRow(i: CommissionInvoice, now: Date): InvoiceRow {
  return {
    id: i.id,
    number: i.number,
    company: i.installer.company,
    installerId: i.installerId,
    jobId: i.jobId,
    jobNumber: i.jobNumber,
    jobLabel: i.jobLabel,
    issuedAt: i.issuedAt,
    dueAt: i.dueAt,
    totalCents: i.totalCents,
    commissionCents: i.commissionCents,
    state: invoiceState(i, now),
    daysOverdue: daysOverdue(i, now),
    paidOn: i.payment?.date ?? null,
    method: i.payment ? PAYMENT_METHOD_LABELS[i.payment.method] : null,
  };
}

export async function paymentsView(now = new Date()): Promise<PaymentsView> {
  const [comm, gestion, soum, auto] = await Promise.all([readCommissions(), readGestion(), readSoumissions(), readAutomations()]);
  const autoFrom = auto.startedAt ? Date.parse(auto.startedAt) : null;
  const invoices = comm.invoices;
  const rows = invoices.map((i) => invoiceRow(i, now)).sort((a, b) => b.issuedAt.localeCompare(a.issuedAt));
  const month = localYmd(now).slice(0, 7);
  const year = localYmd(now).slice(0, 4);
  const paid = invoices.filter((i) => i.status === "payee" && i.payment);
  const open = rows.filter((r) => r.state === "a-recevoir" || r.state === "en-retard");
  const late = rows.filter((r) => r.state === "en-retard");
  const blockers = blockersFrom(invoices, comm.settings, now);
  const companyOf = (id: string) => gestion.installers.find((x) => x.id === id)?.company ?? invoices.find((i) => i.installerId === id)?.installer.company ?? "Installateur";
  const installerIds = [...new Set(invoices.map((i) => i.installerId))];
  const installers = installerIds
    .map((id) => {
      const s = computePaymentStats(id, invoices, comm.settings, now);
      return { id, company: companyOf(id), outstandingCents: s.outstandingCents, overdueCents: s.overdueCents, paidCount: s.paid, avgDaysToPay: s.avgDaysToPay, onTimeRate: s.onTimeRate, paused: s.paused };
    })
    .sort((a, b) => b.overdueCents - a.overdueCents || b.outstandingCents - a.outstandingCents || a.company.localeCompare(b.company, "fr-CA"));

  const invoicedQuoteIds = new Set(invoices.filter((i) => i.status !== "annulee").map((i) => i.quoteId));
  const toInvoice: ToInvoiceRow[] = [];
  for (const job of gestion.jobs) {
    const done = jobCompletion(job);
    if (!done || activeFor(invoices, job.id)) continue;
    const installer = gestion.installers.find((i) => i.id === job.assignedInstallerId);
    const aq = acceptedQuoteForJob(job, soum.quotes, { linkedQuoteId: comm.jobLinks[job.id], invoicedQuoteIds, completedAt: done.completedAt });
    toInvoice.push({
      jobId: job.id,
      jobNumber: job.number,
      who: [job.client.firstName, job.client.city].filter(Boolean).join(" · ") || "Client",
      completedAt: done.completedAt,
      installer: installer?.company ?? "",
      dueAt: issueDueAt(done.completedAt).toISOString(),
      auto: autoFrom !== null && Date.parse(done.completedAt) >= autoFrom && auto.settings.enabled["facture-commission"] !== false,
      // Chantier P : une visite d'un plan d'entretien se facture sans soumission (prix et pourcentage du plan).
      problem: !installer ? "Aucun installateur attribué." : !aq && !(job.kind === "entretien" && job.maintenance) ? "Aucune soumission acceptée liée : choisissez-la." : null,
      quote: aq ? { id: aq.quote.id, number: aq.quote.number, via: aq.via } : null,
    });
  }
  toInvoice.sort((a, b) => b.completedAt.localeCompare(a.completedAt));

  const acceptedQuotes = soum.quotes
    .flatMap((q) => {
      const v = [...q.versions].reverse().find((x) => x.acceptance);
      if (!v?.acceptance) return [];
      const c = v.content.client;
      return [{ id: q.id, number: q.number, label: [c.firstName, c.city].filter(Boolean).join(" · "), taxableCents: v.acceptance.snapshot?.totals?.taxableCents ?? 0, acceptedAt: v.acceptance.at }];
    })
    .filter((q) => !invoicedQuoteIds.has(q.id))
    .sort((a, b) => b.acceptedAt.localeCompare(a.acceptedAt))
    .slice(0, 200);

  return {
    kpis: {
      receivableCents: open.reduce((s, r) => s + r.totalCents, 0),
      receivableCount: open.length,
      overdueCents: late.reduce((s, r) => s + r.totalCents, 0),
      overdueCount: late.length,
      receivedMonthCents: paid.filter((i) => i.payment!.date.startsWith(month)).reduce((s, i) => s + i.totalCents, 0),
      receivedMonthCount: paid.filter((i) => i.payment!.date.startsWith(month)).length,
      receivedYearCents: paid.filter((i) => i.payment!.date.startsWith(year)).reduce((s, i) => s + i.totalCents, 0),
    },
    rows,
    installers,
    paused: [...blockers.values()].map((b) => ({ ...b, company: companyOf(b.installerId) })),
    toInvoice,
    acceptedQuotes,
    settings: comm.settings,
    stripe: stripeConfigured(),
    years: [...new Set(invoices.map((i) => localYmd(i.issuedAt).slice(0, 4)))].sort().reverse(),
  };
}

/* ---------------- Export comptable (CSV) ---------------- */

const csvCell = (v: string | number) => {
  const s = String(v);
  // Formules de tableur neutralisées (=, +, -, @ en tête) et guillemets doublés.
  const safe = /^[=+\-@\t\r]/.test(s) ? `'${s}` : s;
  return /[";\n\r]/.test(safe) ? `"${safe.replace(/"/g, '""')}"` : safe;
};
const amount = (cents: number) => (cents / 100).toFixed(2).replace(".", ",");

/**
 * Export des factures pour la comptabilité : point-virgule et virgule décimale (Excel en français),
 * UTF-8 avec BOM. Toutes les factures de l'année (annulées comprises, marquées), par numéro.
 */
export async function invoicesCsv(year?: string, now = new Date()): Promise<string> {
  const data = await readCommissions();
  const list = data.invoices.filter((i) => !year || localYmd(i.issuedAt).startsWith(year)).sort((a, b) => a.number.localeCompare(b.number));
  const header = ["Numéro", "Date d’émission", "Échéance", "Installateur", "RBQ installateur", "Job", "Soumission", "Base avant taxes", "Pourcentage", "Commission", "TPS", "TVQ", "Total", "Statut", "Payée le", "Moyen", "Référence", "N° TPS", "N° TVQ"];
  const lines = list.map((i) =>
    [
      i.number,
      localYmd(i.issuedAt),
      localYmd(i.dueAt),
      i.installer.company,
      i.installer.rbq,
      i.jobNumber,
      i.quoteNumber,
      amount(i.baseCents),
      String(i.percent).replace(".", ","),
      amount(i.commissionCents),
      amount(i.tpsCents),
      amount(i.tvqCents),
      amount(i.totalCents),
      { "a-recevoir": "À recevoir", "en-retard": "En retard", payee: "Payée", annulee: "Annulée" }[invoiceState(i, now)],
      i.payment?.date ?? "",
      i.payment ? PAYMENT_METHOD_LABELS[i.payment.method] : "",
      i.payment?.reference ?? (i.voided ? `annulée : ${i.voided.reason}` : ""),
      i.taxes.tpsNumber,
      i.taxes.tvqNumber,
    ]
      .map(csvCell)
      .join(";"),
  );
  return `﻿${[header.map(csvCell).join(";"), ...lines].join("\r\n")}\r\n`;
}
