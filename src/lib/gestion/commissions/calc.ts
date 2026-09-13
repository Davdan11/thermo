/* ==================================================================
   Calculs purs des factures de commission (aucun disque, aucun envoi).

   Base = sous-total de la soumission acceptée APRÈS tous les rabais et
   AVANT TPS/TVQ (totals.taxableCents de l'instantané accepté, figé à la
   signature du client). L'aide LogisVert est appliquée APRÈS le total
   taxes comprises (voir soumissions/totals.ts) : elle n'entre donc
   jamais dans la base, quel que soit le mode de la soumission.
   Arrondis : au cent, demi vers le haut (mêmes fonctions que les
   soumissions).
   ================================================================== */

import { percentOf, taxOf } from "@/lib/soumissions/money";
import { TAXES } from "@/lib/soumissions/config";
import type { CompanyIdentity, Totals } from "@/lib/soumissions/types";
import { addDaysYmd, localYmd, zonedToUtc } from "../crm/time";
import type { CommissionInvoice, CommissionSettings, InvoiceState } from "./types";

export interface CommissionAmounts {
  baseCents: number;
  percent: number;
  commissionCents: number;
  tpsCents: number;
  tvqCents: number;
  totalCents: number;
  tpsNumber: string;
  tvqNumber: string;
}

/** Base de la commission tirée des totaux figés d'une acceptation : après rabais, avant taxes, sans LogisVert. */
export function commissionBase(totals: Pick<Totals, "taxableCents">): number {
  return Math.max(0, Math.round(totals.taxableCents));
}

/** Pourcentage accepté : 0 à 100, deux décimales au plus. */
export function cleanPercent(p: unknown, fallback = 10): number {
  const n = typeof p === "number" ? p : Number(String(p ?? "").replace(",", "."));
  if (!Number.isFinite(n) || n < 0 || n > 100) return fallback;
  return Math.round(n * 100) / 100;
}

/** Numéro d'inscription utilisable : au moins 9 chiffres (TPS « 123456789 RT0001 », TVQ « 1234567890 TQ0001 »). */
export function registrationFilled(v: string | null | undefined): boolean {
  return (v ?? "").replace(/\D/g, "").length >= 9;
}

/** Taxes applicables selon l'identité de l'entreprise : chaque taxe seulement si son numéro est rempli. */
export function taxesFor(company: Pick<CompanyIdentity, "tps" | "tvq">): { tps: boolean; tvq: boolean } {
  return { tps: registrationFilled(company.tps), tvq: registrationFilled(company.tvq) };
}

export function computeCommission(baseCents: number, percent: number, company: Pick<CompanyIdentity, "tps" | "tvq">, rates = { tpsPer100k: TAXES.tps.ratePer100k, tvqPer100k: TAXES.tvq.ratePer100k }): CommissionAmounts {
  const base = Math.max(0, Math.round(baseCents));
  const pct = cleanPercent(percent);
  const commissionCents = percentOf(base, pct);
  const t = taxesFor(company);
  const tpsCents = t.tps ? taxOf(commissionCents, rates.tpsPer100k) : 0;
  const tvqCents = t.tvq ? taxOf(commissionCents, rates.tvqPer100k) : 0;
  return {
    baseCents: base,
    percent: pct,
    commissionCents,
    tpsCents,
    tvqCents,
    totalCents: commissionCents + tpsCents + tvqCents,
    tpsNumber: t.tps ? company.tps.trim() : "",
    tvqNumber: t.tvq ? company.tvq.trim() : "",
  };
}

/** Prochain numéro de facture : « COM-2026-0001 », séquentiel par année civile (Montréal). */
export function nextInvoiceNumber(counters: Record<string, number>, now: Date): string {
  const year = localYmd(now).slice(0, 4);
  const n = (counters[year] ?? 0) + 1;
  counters[year] = n;
  return `COM-${year}-${String(n).padStart(4, "0")}`;
}

/** Fin du jour d'échéance à Montréal : émission + dueDays jours, 23 h 59 min 59 s. */
export function dueAtFor(issuedAt: Date, dueDays: number): Date {
  const day = addDaysYmd(localYmd(issuedAt), Math.max(0, Math.round(dueDays)));
  return new Date(zonedToUtc(addDaysYmd(day, 1), 0).getTime() - 1000);
}

/** Moment où la facture doit être émise : le lendemain de la fin du chantier, 8 h (Montréal). */
export function issueDueAt(completedAt: string): Date {
  return zonedToUtc(addDaysYmd(localYmd(completedAt), 1), 8);
}

export function invoiceState(inv: Pick<CommissionInvoice, "status" | "dueAt">, now: Date): InvoiceState {
  if (inv.status === "payee") return "payee";
  if (inv.status === "annulee") return "annulee";
  return now.getTime() > Date.parse(inv.dueAt) ? "en-retard" : "a-recevoir";
}

/** Jours complets de retard (0 si la facture n'est pas en retard). */
export function daysOverdue(inv: Pick<CommissionInvoice, "status" | "dueAt">, now: Date): number {
  if (invoiceState(inv, now) !== "en-retard") return 0;
  return Math.max(1, Math.ceil((now.getTime() - Date.parse(inv.dueAt)) / 86_400_000));
}

/** Retard qui met les offres en pause : échéance + jours de grâce dépassés. */
export function blocksOffers(inv: Pick<CommissionInvoice, "status" | "dueAt">, settings: Pick<CommissionSettings, "graceDays">, now: Date): boolean {
  if (inv.status !== "emise") return false;
  return now.getTime() > Date.parse(inv.dueAt) + Math.max(0, settings.graceDays) * 86_400_000;
}
