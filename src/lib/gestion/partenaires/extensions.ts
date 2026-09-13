/* ==================================================================
   Points d'extension de la fiche de performance, branchés sur le
   volet B (argent et automatisations) à la fusion. Sans donnée, ils
   renvoient null : la fiche affiche « à venir » et les niveaux ne s'en
   servent pas.

     paymentStats(installerId)      → délai de paiement des commissions
     satisfactionStats(installerId) → sondage de satisfaction des clients
   ================================================================== */

import { readAfterSale } from "../automatisations/store";
import { invoiceState } from "../commissions/calc";
import { readCommissions } from "../commissions/store";
import { readGestion } from "../store";

export interface PaymentStats {
  /** Factures de commission émises. */
  invoices: number;
  /** Payées. */
  paid: number;
  /** En retard (échéance dépassée, non payées). */
  late: number;
  /** Délai médian entre l'émission et le paiement, en jours ; null sans facture payée. */
  medianDaysToPay: number | null;
}

export interface SatisfactionStats {
  /** Réponses au sondage. */
  answers: number;
  /** Note moyenne sur 5 ; null sans réponse. */
  average: number | null;
  /** Réponses à 1 ou 2 sur 5. */
  unhappy: number;
}

const DAY_MS = 86_400_000;

/** Factures de commission de l'installateur (annulées exclues) ; null s'il n'en a aucune. */
export async function paymentStats(installerId: string, now = new Date()): Promise<PaymentStats | null> {
  const { invoices } = await readCommissions();
  const mine = invoices.filter((i) => i.installerId === installerId && i.status !== "annulee");
  if (!mine.length) return null;
  const paid = mine.filter((i) => i.status === "payee" && i.payment);
  const delays = paid
    .map((i) => Math.max(0, Math.round((Date.parse(`${i.payment!.date}T12:00:00Z`) - Date.parse(i.issuedAt)) / DAY_MS)))
    .sort((a, b) => a - b);
  const mid = Math.floor(delays.length / 2);
  const median = delays.length ? (delays.length % 2 ? delays[mid] : (delays[mid - 1] + delays[mid]) / 2) : null;
  const late = mine.filter((i) => i.status === "emise" && invoiceState(i, now) === "en-retard").length;
  return { invoices: mine.length, paid: paid.length, late, medianDaysToPay: median };
}

/** Notes du sondage des clients dont le job a été fait par l'installateur ; null sans réponse. */
export async function satisfactionStats(installerId: string): Promise<SatisfactionStats | null> {
  const [g, after] = await Promise.all([readGestion(), readAfterSale()]);
  const jobs = new Set(g.jobs.filter((j) => j.assignedInstallerId === installerId).map((j) => j.id));
  const ratings = Object.values(after.dossiers)
    .filter((d) => jobs.has(d.jobId) && d.survey)
    .map((d) => d.survey!.rating);
  if (!ratings.length) return null;
  const average = Math.round((ratings.reduce((s, r) => s + r, 0) / ratings.length) * 10) / 10;
  return { answers: ratings.length, average, unhappy: ratings.filter((r) => r <= 2).length };
}
