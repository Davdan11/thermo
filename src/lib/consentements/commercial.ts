/* ==================================================================
   Conformité C2 — consentement aux messages commerciaux (offres
   d'entretien, messages de référence, promotions, campagnes de
   textos) : UNE règle, celle du chantier T (telephonie/consent.ts),
   à laquelle s'ajoute la case 5.3 des formulaires :
     1. désabonné (STOP, lien en un clic) : jamais ;
     2. case 5.3 cochée, non retirée : oui (exprès, sans échéance) ;
     3. consentement exprès noté par le propriétaire : oui ;
     4. tacite : achat (2 ans) ou demande (6 mois), limité dans le
        temps, jamais prolongé.
   Les messages de service ne passent pas par ici.
   ================================================================== */

import { smsConsent, type ConsentState, type FormConsent } from "@/lib/telephonie/consent";
import type { ExpressConsent } from "@/lib/telephonie/types";
import { consentStatus, identityKeys, type ConsentStoreData } from "./store";

/** Case 5.3 d'une personne (tous ses courriels et numéros) ; null : ni case ni retrait. */
export function promotionsConsent(d: Pick<ConsentStoreData, "records" | "withdrawals">, who: { emails: Array<string | null | undefined>; phones: Array<string | null | undefined> }, now = new Date()): FormConsent | null {
  const keys = [...new Set([...who.emails.flatMap((email) => identityKeys({ email })), ...who.phones.flatMap((phone) => identityKeys({ phone }))])];
  if (!keys.length) return null;
  const s = consentStatus(d, { keys }, "promotions", now);
  if (!s.since && !s.withdrawnAt) return null;
  return { at: s.since, withdrawnAt: s.withdrawnAt };
}

export interface CommercialInputs {
  form: FormConsent | null;
  express: ExpressConsent | null;
  purchaseAt: string | null;
  inquiryAt: string | null;
  optedOut?: boolean;
}

/** Même règle que les campagnes de textos (chantier T), case 5.3 comprise. */
export function commercialConsent(i: CommercialInputs, now = new Date()): ConsentState {
  return smsConsent({ express: i.express, purchaseAt: i.purchaseAt, inquiryAt: i.inquiryAt, optedOut: Boolean(i.optedOut), form: i.form }, now);
}
