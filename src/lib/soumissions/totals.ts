/* ==================================================================
   Calcul des totaux d'une soumission (pur, partagé serveur et client).

   Ordre :
     1. chaque ligne retenue (obligatoire, ou facultative cochée) :
        quantité × prix unitaire, arrondi au cent ;
     2. rabais de ligne (raison obligatoire), s'il n'est pas expiré ;
     3. rabais de la soumission, sur le sous-total après rabais de ligne ;
     4. TPS et TVQ, chacune sur la base après TOUS les rabais,
        arrondies au cent (demi vers le haut) ;
     5. aide LogisVert, APRÈS le total taxes comprises :
        - « cession » : déduite de ce que le client paie à l'entreprise ;
        - « client » : versée plus tard au client, montrée à titre
          d'information (coût net après l'aide) ;
     6. acompte et solde, sur ce que le client paie à l'entreprise.
   ================================================================== */

import { lineAmount, percentOf, taxOf } from "./money";
import type { Discount, DiscountTotal, LineTotal, QuoteContent, QuoteLine, Totals } from "./types";

export interface TaxRates {
  tpsPer100k: number;
  tvqPer100k: number;
}

/** Un rabais s'applique jusqu'à sa date d'expiration incluse. `asOf` : AAAA-MM-JJ. */
export function discountActive(d: Pick<Discount, "expiresOn">, asOf: string): boolean {
  return !d.expiresOn || d.expiresOn >= asOf;
}

function discountAmount(d: Discount, base: number): number {
  const raw = d.kind === "pourcentage" ? percentOf(base, d.value) : Math.max(0, Math.round(d.value));
  return Math.min(raw, base);
}

/** Lignes facultatives cochées d'office. */
export function defaultSelection(lines: QuoteLine[]): string[] {
  return lines.filter((l) => l.optional && l.selectedByDefault).map((l) => l.id);
}

/** Ne garde que les identifiants de lignes facultatives existantes, sans doublon. */
export function cleanSelection(lines: QuoteLine[], ids: Iterable<string>): string[] {
  const optional = new Set(lines.filter((l) => l.optional).map((l) => l.id));
  return [...new Set([...ids].filter((id) => optional.has(id)))];
}

export function lineIncluded(line: QuoteLine, selected: Set<string>): boolean {
  return !line.optional || selected.has(line.id);
}

/** Montant LogisVert du jumelage choisi : 0 hors liste officielle ou mode « aucune ». */
export function logisvertAmount(content: Pick<QuoteContent, "machine" | "logisvert">): number {
  const m = content.machine;
  if (content.logisvert.mode === "aucune" || !m || m.offList || !m.pairing) return 0;
  return Math.max(0, Math.round(m.pairing.logisVertCents));
}

export function computeTotals(content: QuoteContent, selection: Iterable<string>, rates: TaxRates, asOf: string): Totals {
  const selected = new Set(selection);
  const lines: LineTotal[] = content.lines.map((l) => {
    const included = lineIncluded(l, selected);
    const gross = lineAmount(l.quantity, l.unitPriceCents);
    const active = l.discount ? discountActive(l.discount, asOf) : false;
    const disc = l.discount && active ? discountAmount(l.discount, gross) : 0;
    return {
      id: l.id,
      included,
      optional: l.optional,
      grossCents: gross,
      discountCents: disc,
      netCents: gross - disc,
      discountActive: Boolean(l.discount) && active,
      discountExpired: Boolean(l.discount) && !active,
    };
  });
  const kept = lines.filter((l) => l.included);
  const grossCents = kept.reduce((s, l) => s + l.grossCents, 0);
  const lineDiscountsCents = kept.reduce((s, l) => s + l.discountCents, 0);
  const subtotalCents = grossCents - lineDiscountsCents;

  let remaining = subtotalCents;
  const quoteDiscounts: DiscountTotal[] = content.discounts.map((d) => {
    const active = discountActive(d, asOf);
    // Les pourcentages portent sur le sous-total après rabais de ligne ; le total des rabais ne dépasse jamais la base.
    const amount = active ? Math.min(d.kind === "pourcentage" ? percentOf(subtotalCents, d.value) : Math.max(0, Math.round(d.value)), remaining) : 0;
    remaining -= amount;
    return { id: d.id, reason: d.reason, kind: d.kind, value: d.value, expiresOn: d.expiresOn, amountCents: amount, active, expired: !active };
  });
  const quoteDiscountsCents = subtotalCents - remaining;
  const taxableCents = remaining;
  const tpsCents = taxOf(taxableCents, rates.tpsPer100k);
  const tvqCents = taxOf(taxableCents, rates.tvqPer100k);
  const totalCents = taxableCents + tpsCents + tvqCents;

  const mode = content.logisvert.mode;
  const logisvertCents = Math.min(logisvertAmount(content), totalCents);
  const netAfterAidCents = totalCents - logisvertCents;
  const clientPaysCents = mode === "cession" ? netAfterAidCents : totalCents;

  const dep = content.deposit;
  const depositCents = dep.kind === "pourcentage" ? percentOf(clientPaysCents, dep.value) : dep.kind === "montant" ? Math.min(Math.max(0, Math.round(dep.value)), clientPaysCents) : 0;

  return {
    lines,
    grossCents,
    lineDiscountsCents,
    subtotalCents,
    quoteDiscounts,
    quoteDiscountsCents,
    discountsCents: lineDiscountsCents + quoteDiscountsCents,
    taxableCents,
    tpsCents,
    tvqCents,
    totalCents,
    logisvertMode: logisvertCents > 0 ? mode : "aucune",
    logisvertCents,
    clientPaysCents,
    netAfterAidCents,
    depositCents,
    balanceCents: clientPaysCents - depositCents,
  };
}
