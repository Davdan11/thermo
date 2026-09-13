"use server";

/* ==================================================================
   Server Actions du volet B (Paiements, Automatisations). Chacune :
   requireAdmin() → validation zod → écriture → refresh(). Une action
   est joignable par un POST direct : la session est vérifiée ici,
   jamais seulement par l'affichage.
   ================================================================== */

import { refresh } from "next/cache";
import { z } from "zod";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { publicBaseUrl } from "@/lib/gestion/request";
import { ID_RE } from "@/lib/gestion/service";
import { QUOTE_ID_RE } from "@/lib/soumissions/quote";
import { issueInvoiceForJob, markInvoicePaid, resendInvoice, saveCommissionSettings, setJobQuoteLink, voidInvoice } from "@/lib/gestion/commissions/service";
import { INVOICE_ID_RE, PAYMENT_METHODS } from "@/lib/gestion/commissions/types";
import { runTick } from "@/lib/gestion/automatisations/engine";
import { mutateAfterSale, mutateAutomations, normalizeAutomationSettings } from "@/lib/gestion/automatisations/store";
import { AUTOMATION_IDS, LOGISVERT_STATUSES } from "@/lib/gestion/automatisations/types";

export type ArgentResult = { ok: true; message?: string } | { ok: false; error: string } | undefined;

const INVALID = { ok: false as const, error: "Demande invalide." };
const str = (fd: FormData, k: string) => String(fd.get(k) ?? "").trim();
const invoiceId = z.string().regex(INVOICE_ID_RE);
const jobId = z.string().regex(ID_RE);
const firstIssue = (e: z.ZodError) => e.issues[0]?.message ?? "Demande invalide.";

/* ---------------- Factures ---------------- */

export async function markPaidAction(id: string, _prev: ArgentResult, fd: FormData): Promise<ArgentResult> {
  const session = await requireAdmin();
  const p = z
    .object({
      id: invoiceId,
      date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Choisissez la date du paiement."),
      method: z.enum(PAYMENT_METHODS, { message: "Choisissez le moyen de paiement." }),
      reference: z.string().max(120, "Référence trop longue (120 caractères)."),
    })
    .safeParse({ id, date: str(fd, "date"), method: str(fd, "method"), reference: str(fd, "reference") });
  if (!p.success) return { ok: false, error: firstIssue(p.error) };
  const r = await markInvoicePaid(p.data.id, { date: p.data.date, method: p.data.method, reference: p.data.reference }, session.email);
  if (!r.ok) return r;
  refresh();
  return { ok: true, message: r.already ? "Déjà payée." : r.resumed ? "Payée. Les offres de jobs reprennent pour cet installateur." : "Payée." };
}

export async function voidInvoiceAction(id: string, _prev: ArgentResult, fd: FormData): Promise<ArgentResult> {
  const session = await requireAdmin();
  const p = z.object({ id: invoiceId, reason: z.string().min(3, "Indiquez la raison de l’annulation.").max(300) }).safeParse({ id, reason: str(fd, "reason") });
  if (!p.success) return { ok: false, error: firstIssue(p.error) };
  const r = await voidInvoice(p.data.id, p.data.reason, session.email);
  if (!r.ok) return r;
  refresh();
  return { ok: true, message: "Facture annulée (conservée avec sa raison)." };
}

export async function resendInvoiceAction(id: unknown): Promise<ArgentResult> {
  const session = await requireAdmin();
  const p = invoiceId.safeParse(id);
  if (!p.success) return INVALID;
  const r = await resendInvoice(p.data, session.email, { baseUrl: await publicBaseUrl() });
  if (!r.ok) return r;
  refresh();
  return { ok: true, message: r.email === "envoye" ? "Facture renvoyée." : r.email === "simule" ? "Envoi simulé (développement)." : "Envoi impossible : vérifiez le courriel de l’installateur." };
}

export async function issueInvoiceAction(id: unknown): Promise<ArgentResult> {
  const session = await requireAdmin();
  const p = jobId.safeParse(id);
  if (!p.success) return INVALID;
  const r = await issueInvoiceForJob(p.data, session.email, { baseUrl: await publicBaseUrl() });
  if (!r.ok) return { ok: false, error: r.message };
  refresh();
  return { ok: true, message: r.created ? `Facture ${r.invoice.number} émise et envoyée.` : `Déjà facturé : ${r.invoice.number}.` };
}

export async function linkQuoteAction(_prev: ArgentResult, fd: FormData): Promise<ArgentResult> {
  await requireAdmin();
  const p = z.object({ jobId, quoteId: z.union([z.literal(""), z.string().regex(QUOTE_ID_RE)]) }).safeParse({ jobId: str(fd, "jobId"), quoteId: str(fd, "quoteId") });
  if (!p.success) return INVALID;
  await setJobQuoteLink(p.data.jobId, p.data.quoteId || null);
  refresh();
  return { ok: true, message: p.data.quoteId ? "Soumission liée : la facture peut être émise." : "Lien retiré." };
}

export async function saveCommissionSettingsAction(_prev: ArgentResult, fd: FormData): Promise<ArgentResult> {
  const session = await requireAdmin();
  const num = (k: string) => Number(str(fd, k).replace(",", "."));
  const p = z
    .object({
      percent: z.number({ message: "Pourcentage invalide." }).min(0, "Pourcentage invalide.").max(100, "Pourcentage invalide."),
      dueDays: z.number().int("Nombre de jours entier.").min(0).max(60),
      graceDays: z.number().int("Nombre de jours entier.").min(0).max(60),
      interacEmail: z.union([z.literal(""), z.string().email("Courriel Interac invalide.").max(160)]),
      interacNote: z.string().max(300),
    })
    .safeParse({ percent: num("percent"), dueDays: num("dueDays"), graceDays: num("graceDays"), interacEmail: str(fd, "interacEmail").toLowerCase(), interacNote: str(fd, "interacNote") });
  if (!p.success) return { ok: false, error: firstIssue(p.error) };
  await saveCommissionSettings(p.data, session.email);
  refresh();
  return { ok: true, message: "Réglages enregistrés. Ils s’appliquent aux prochaines factures." };
}

/* ---------------- Automatisations ---------------- */

export async function toggleAutomationAction(id: unknown, enabled: unknown): Promise<ArgentResult> {
  const session = await requireAdmin();
  const p = z.object({ id: z.enum(AUTOMATION_IDS), enabled: z.boolean() }).safeParse({ id, enabled });
  if (!p.success) return INVALID;
  await mutateAutomations((d) => {
    d.settings = normalizeAutomationSettings({ ...d.settings, enabled: { ...d.settings.enabled, [p.data.id]: p.data.enabled }, updatedAt: new Date().toISOString(), updatedBy: session.email });
    return { result: undefined, changed: true };
  });
  refresh();
  return { ok: true, message: p.data.enabled ? "Activée." : "En pause." };
}

export async function saveAutomationSettingsAction(_prev: ArgentResult, fd: FormData): Promise<ArgentResult> {
  const session = await requireAdmin();
  const p = z.object({ referralReward: z.string().max(200, "200 caractères au plus.") }).safeParse({ referralReward: str(fd, "referralReward") });
  if (!p.success) return { ok: false, error: firstIssue(p.error) };
  await mutateAutomations((d) => {
    d.settings = normalizeAutomationSettings({ ...d.settings, referralReward: p.data.referralReward, updatedAt: new Date().toISOString(), updatedBy: session.email });
    return { result: undefined, changed: true };
  });
  refresh();
  return { ok: true, message: "Enregistré." };
}

export async function runTickNowAction(): Promise<ArgentResult> {
  await requireAdmin();
  const r = await runTick({ baseUrl: await publicBaseUrl() });
  refresh();
  const waiting = Object.values(r.waiting).reduce((s, n) => s + n, 0);
  return { ok: true, message: `Passage terminé : ${r.done} fait${r.done > 1 ? "s" : ""}, ${r.failed} en échec, ${r.ignored} sans objet${waiting ? `, ${waiting} en attente d’un réglage` : ""}.` };
}

/** Statut LogisVert noté par le propriétaire (le client l'a dit au téléphone, par exemple). */
export async function setLogisvertStatusAction(job: unknown, status: unknown): Promise<ArgentResult> {
  const session = await requireAdmin();
  const p = z.object({ job: jobId, status: z.enum(LOGISVERT_STATUSES) }).safeParse({ job, status });
  if (!p.success) return INVALID;
  const ok = await mutateAfterSale((data) => {
    const d = data.dossiers[p.data.job];
    if (!d?.logisvert) return { result: false, changed: false };
    const iso = new Date().toISOString();
    d.logisvert.status = p.data.status;
    d.logisvert.updates.push({ at: iso, status: p.data.status, by: session.email });
    return { result: true, changed: true };
  });
  if (!ok) return { ok: false, error: "Aucun dossier LogisVert pour ce job." };
  refresh();
  return { ok: true, message: "Statut LogisVert mis à jour." };
}
