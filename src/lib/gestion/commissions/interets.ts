/* ==================================================================
   Conformité C1 — intérêts sur les factures de commission en retard.

   Décision approuvée (trousse 8.1) : 18 % par an, SIMPLE (sans
   capitalisation), calculé au jour, à compter de l'échéance. Base : le
   total de la facture (somme échue). Jours : jours complets écoulés
   depuis la fin du jour d'échéance ; aucun intérêt avant. Arrondi au
   cent, demi vers le haut. Montant affiché (facture, relances), jamais
   ajouté au paiement en ligne : aucun montant n'est inventé.
   Fonctions pures.
   ================================================================== */

import { divRound } from "@/lib/soumissions/money";
import type { CommissionInvoice } from "./types";

export const INTEREST_ANNUAL_PERCENT = 18;
const DAY = 86_400_000;

type Due = Pick<CommissionInvoice, "status" | "dueAt" | "totalCents">;

/** Jours complets de retard (facture émise et non payée seulement). */
export function interestDays(inv: Pick<CommissionInvoice, "status" | "dueAt">, now: Date): number {
  if (inv.status !== "emise") return 0;
  const late = now.getTime() - Date.parse(inv.dueAt);
  return late > 0 ? Math.floor(late / DAY) : 0;
}

/** Intérêts courus : total × 18 % × jours ÷ 365, au cent. */
export function interestCents(inv: Due, now: Date, annualPercent = INTEREST_ANNUAL_PERCENT): number {
  const days = interestDays(inv, now);
  if (!days) return 0;
  return divRound(Math.max(0, Math.round(inv.totalCents)) * Math.round(annualPercent * 100) * days, 100 * 100 * 365);
}

export interface InterestInfo {
  days: number;
  cents: number;
  annualPercent: number;
  /** Total dû avec les intérêts courus. */
  totalWithInterestCents: number;
}

export function interestInfo(inv: Due, now: Date): InterestInfo | null {
  const days = interestDays(inv, now);
  if (!days) return null;
  const cents = interestCents(inv, now);
  return { days, cents, annualPercent: INTEREST_ANNUAL_PERCENT, totalWithInterestCents: inv.totalCents + cents };
}

/** « 18 % par an (1,5 % par mois), intérêt simple calculé au jour depuis l'échéance ». */
export const INTEREST_TERMS = `${INTEREST_ANNUAL_PERCENT} % par an (1,5 % par mois), intérêt simple calculé au jour à compter de l’échéance`;
