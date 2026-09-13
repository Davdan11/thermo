/* ==================================================================
   Chantier V — commission des vendeurs (calculs purs, sans disque).

   Une vente = une soumission SIGNÉE par le client (dernière version
   acceptée). Montants réels uniquement : le sous-total figé à la
   signature (après rabais, avant taxes), jamais une soumission en
   attente ni une valeur estimée ; l'aide LogisVert n'y entre JAMAIS
   (versée au client par Hydro-Québec, appliquée après les taxes).

   Commission de l'entreprise sur cette vente : celle de la facture de
   commission à l'installateur si elle est émise (montant réel), sinon
   le pourcentage des réglages (10 %) appliqué au même sous-total.
   Part du vendeur : son pourcentage de la commission de l'entreprise.
   Le vendeur est celui à qui le client était attribué AU MOMENT de la
   signature (historique d'attribution de crm.json).
   ================================================================== */

import { percentOf } from "@/lib/soumissions/money";
import { commissionBase } from "../commissions/calc";
import type { CommissionInvoice } from "../commissions/types";
import type { CrmIndex } from "../crm/model";
import { zoned } from "../crm/time";
import type { CrmClientRecord } from "../crm/types";
import type { Member, StatementLine } from "./types";

/** « 2026-09 » à Montréal. */
export const monthOf = (iso: string): string => zoned(new Date(iso)).ymd.slice(0, 7);

/** À qui le client était attribué à ce moment (null : personne). */
export function assigneeAt(record: Pick<CrmClientRecord, "assignLog" | "assignedTo"> | null | undefined, at: string): string | null {
  const log = [...(record?.assignLog ?? [])].sort((a, b) => a.at.localeCompare(b.at));
  if (!log.length) return record?.assignedTo && record.assignedTo.at <= at ? record.assignedTo.userId : null;
  let who: string | null = null;
  for (const e of log) {
    if (e.at > at) break;
    who = e.to;
  }
  return who;
}

export interface Sale {
  quoteId: string;
  quoteNumber: string;
  clientId: string;
  who: string;
  acceptedAt: string;
  month: string;
  /** Total signé, taxes comprises (classement). */
  totalCents: number;
  baseCents: number;
  companyPercent: number;
  companyCents: number;
  source: "facture" | "signee";
  userId: string | null;
}

export function signedSales(index: Pick<CrmIndex, "clients">, o: { invoices: CommissionInvoice[]; companyPercent: number }): Sale[] {
  const out: Sale[] = [];
  for (const c of index.clients) {
    for (const q of c.b.quotes) {
      const acc = q.versions
        .map((v) => v.acceptance)
        .filter((a): a is NonNullable<typeof a> => Boolean(a))
        .sort((a, b) => a.at.localeCompare(b.at))
        .pop();
      if (!acc) continue;
      const baseCents = commissionBase(acc.snapshot.totals);
      const inv = o.invoices.find((i) => i.quoteId === q.id && i.status !== "annulee");
      const companyPercent = inv ? inv.percent : o.companyPercent;
      out.push({
        quoteId: q.id,
        quoteNumber: q.number,
        clientId: c.b.id,
        who: [c.b.firstName || "Sans nom", c.b.city].filter(Boolean).join(" · "),
        acceptedAt: acc.at,
        month: monthOf(acc.at),
        totalCents: acc.totalCents,
        baseCents,
        companyPercent,
        companyCents: inv ? inv.commissionCents : percentOf(baseCents, companyPercent),
        source: inv ? "facture" : "signee",
        userId: assigneeAt(c.b.record, acc.at),
      });
    }
  }
  return out.sort((a, b) => a.acceptedAt.localeCompare(b.acceptedAt));
}

export function vendorLine(s: Sale, vendorPercent: number): StatementLine {
  return {
    quoteId: s.quoteId,
    quoteNumber: s.quoteNumber,
    who: s.who,
    acceptedAt: s.acceptedAt,
    baseCents: s.baseCents,
    companyPercent: s.companyPercent,
    companyCents: s.companyCents,
    source: s.source,
    vendorPercent,
    vendorCents: percentOf(s.companyCents, vendorPercent),
  };
}

/** Relevé du mois pour un vendeur (calculé en direct tant qu'il n'est pas payé). */
export function statementFor(sales: Sale[], member: Pick<Member, "id" | "commissionPercent">, month: string): { lines: StatementLine[]; totalCents: number } {
  const lines = sales.filter((s) => s.userId === member.id && s.month === month).map((s) => vendorLine(s, member.commissionPercent));
  return { lines, totalCents: lines.reduce((n, l) => n + l.vendorCents, 0) };
}
