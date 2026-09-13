/* ==================================================================
   Pause automatique des offres de jobs pour un installateur en retard
   de paiement, et statistiques de paiement (fiche de performance du
   volet A : point d'extension paymentStats).

   La pause se CALCULE à chaque lecture à partir des factures : elle
   commence dès que l'échéance (+ jours de grâce) d'une facture non
   payée est dépassée et se lève d'elle-même dès que la facture est
   marquée payée (à la main ou par le webhook Stripe). Rien n'est écrit
   dans la fiche de l'installateur.
   ================================================================== */

import { money } from "@/lib/soumissions/money";
import { localYmd } from "../crm/time";
import { blocksOffers, daysOverdue, invoiceState } from "./calc";
import { readCommissions } from "./store";
import type { CommissionInvoice, CommissionSettings } from "./types";

export interface PaymentBlock {
  installerId: string;
  /** Raison en clair, affichée dans /gestion (liste des candidats, Paiements). */
  reason: string;
  invoices: Array<{ id: string; number: string; totalCents: number; daysOverdue: number }>;
  overdueCents: number;
}

/**
 * Blocage d'un installateur, ou null s'il peut recevoir des offres.
 * Accepte l'installateur (ou son identifiant) et les factures déjà lues : fonction pure.
 */
export function paymentBlocker(installer: { id: string } | string, invoices: readonly CommissionInvoice[], settings: Pick<CommissionSettings, "graceDays">, now: Date): PaymentBlock | null {
  const id = typeof installer === "string" ? installer : installer.id;
  const late = invoices.filter((i) => i.installerId === id && blocksOffers(i, settings, now)).sort((a, b) => a.dueAt.localeCompare(b.dueAt));
  if (!late.length) return null;
  const overdueCents = late.reduce((s, i) => s + i.totalCents, 0);
  const first = late[0];
  const d = daysOverdue(first, now);
  const reason =
    late.length === 1
      ? `paiement en retard : facture ${first.number} (${money(first.totalCents)}), échue depuis ${d} jour${d > 1 ? "s" : ""}`
      : `paiements en retard : ${late.length} factures (${money(overdueCents)}), la plus ancienne échue depuis ${d} jour${d > 1 ? "s" : ""}`;
  return {
    installerId: id,
    reason,
    invoices: late.map((i) => ({ id: i.id, number: i.number, totalCents: i.totalCents, daysOverdue: daysOverdue(i, now) })),
    overdueCents,
  };
}

/** Tous les installateurs bloqués (identifiant → raison), pour le moteur d'envoi. */
export function blockersFrom(invoices: readonly CommissionInvoice[], settings: Pick<CommissionSettings, "graceDays">, now: Date): Map<string, PaymentBlock> {
  const out = new Map<string, PaymentBlock>();
  for (const id of new Set(invoices.map((i) => i.installerId))) {
    const b = paymentBlocker(id, invoices, settings, now);
    if (b) out.set(id, b);
  }
  return out;
}

/** Raccourci pour les volets A et C : blocage d'un installateur, lu dans le magasin des factures (null : il peut recevoir des offres). */
export async function loadPaymentBlocker(installer: { id: string } | string, now = new Date()): Promise<PaymentBlock | null> {
  const data = await readCommissions();
  return paymentBlocker(installer, data.invoices, data.settings, now);
}

/** Lecture du magasin puis blocages (jamais bloquant : un fichier illisible n'empêche pas d'offrir un job). */
export async function loadPaymentBlockers(now = new Date()): Promise<Map<string, PaymentBlock>> {
  try {
    const data = await readCommissions();
    return blockersFrom(data.invoices, data.settings, now);
  } catch (e) {
    console.error("[commissions] lecture des factures impossible pour la pause des offres :", e);
    return new Map();
  }
}

export interface PaymentStats {
  /** Factures émises (annulées exclues). */
  issued: number;
  paid: number;
  unpaid: number;
  /** Factures en retard en ce moment. */
  overdue: number;
  overdueCents: number;
  outstandingCents: number;
  /** Délai moyen entre l'émission et le paiement, en jours (null sans facture payée). */
  avgDaysToPay: number | null;
  /** Part des factures payées à temps (null sans facture payée). */
  onTimeRate: number | null;
  paused: boolean;
}

const dayMs = 86_400_000;

export function computePaymentStats(installerId: string, invoices: readonly CommissionInvoice[], settings: Pick<CommissionSettings, "graceDays">, now: Date): PaymentStats {
  const mine = invoices.filter((i) => i.installerId === installerId && i.status !== "annulee");
  const paid = mine.filter((i) => i.status === "payee" && i.payment);
  const unpaid = mine.filter((i) => i.status === "emise");
  const overdue = unpaid.filter((i) => invoiceState(i, now) === "en-retard");
  const delays = paid.map((i) => {
    const payDay = Date.parse(`${i.payment!.date}T12:00:00Z`);
    return Math.max(0, Math.round((payDay - Date.parse(i.issuedAt)) / dayMs));
  });
  const onTime = paid.filter((i) => i.payment!.date <= localYmd(i.dueAt)).length;
  return {
    issued: mine.length,
    paid: paid.length,
    unpaid: unpaid.length,
    overdue: overdue.length,
    overdueCents: overdue.reduce((s, i) => s + i.totalCents, 0),
    outstandingCents: unpaid.reduce((s, i) => s + i.totalCents, 0),
    avgDaysToPay: delays.length ? Math.round((delays.reduce((s, d) => s + d, 0) / delays.length) * 10) / 10 : null,
    onTimeRate: paid.length ? onTime / paid.length : null,
    paused: paymentBlocker(installerId, invoices, settings, now) !== null,
  };
}

/** Point d'extension de la fiche de performance (volet A) : délai moyen de paiement, factures en retard. */
export async function paymentStats(installateurId: string, now = new Date()): Promise<PaymentStats> {
  const data = await readCommissions();
  return computePaymentStats(installateurId, data.invoices, data.settings, now);
}
