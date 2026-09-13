/* ==================================================================
   Chantier T — consentement aux textos commerciaux (LCAP, loi
   canadienne anti-pourriel). Pur, sans disque.

   Un texto de campagne part seulement avec :
     - un consentement EXPRÈS noté par le propriétaire (date, comment
       il a été obtenu), tant qu'il n'est pas retiré ; ou
     - un consentement TACITE par relation d'affaires en cours :
         achat (soumission acceptée, installation terminée)
         → 2 ans à partir de l'achat ;
         demande (formulaire, appel, texto du client)
         → 6 mois à partir de la demande.
   Le consentement tacite expire de lui-même. Un numéro désabonné
   (STOP, ARRÊT) n'est jamais joint, quel que soit le consentement.

   La case « conseils et promotions » du formulaire de soumission
   parle de COURRIEL seulement : elle ne vaut pas pour les textos.
   ================================================================== */

import { isDemand } from "@/lib/gestion/crm/sources";
import { inboundMessages } from "@/lib/gestion/crm/textos-adapter";
import type { ClientBundle } from "@/lib/gestion/crm/types";
import type { ExpressConsent } from "./types";

export const PURCHASE_MONTHS = 24;
export const INQUIRY_MONTHS = 6;

export type ConsentBasis = "expres" | "achat" | "demande";

export const BASIS_LABELS: Record<ConsentBasis, string> = {
  expres: "Consentement exprès",
  achat: "Achat (relation d’affaires, 2 ans)",
  demande: "Demande (relation d’affaires, 6 mois)",
};

export interface ConsentInputs {
  express: ExpressConsent | null;
  /** Dernier achat : acceptation d'une soumission ou fin d'une installation. */
  purchaseAt: string | null;
  /** Dernière demande du client : formulaire, appel, texto. */
  inquiryAt: string | null;
  optedOut: boolean;
}

export interface ConsentState {
  ok: boolean;
  basis: ConsentBasis | null;
  since: string | null;
  /** null : consentement exprès (sans expiration) ou aucun. */
  expiresAt: string | null;
  reason: string;
}

/** Même jour, N mois plus tard (fin de mois ramenée au dernier jour). */
export function addMonths(iso: string, months: number): Date {
  const d = new Date(iso);
  const day = d.getUTCDate();
  const t = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + months, 1, d.getUTCHours(), d.getUTCMinutes(), d.getUTCSeconds()));
  const last = new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth() + 1, 0)).getUTCDate();
  t.setUTCDate(Math.min(day, last));
  return t;
}

export function smsConsent(i: ConsentInputs, now: Date): ConsentState {
  if (i.optedOut) return { ok: false, basis: null, since: null, expiresAt: null, reason: "Désabonné des textos (STOP ou ARRÊT)" };
  if (i.express && !i.express.withdrawnAt) return { ok: true, basis: "expres", since: i.express.at, expiresAt: null, reason: BASIS_LABELS.expres };

  const implied: Array<{ basis: ConsentBasis; since: string; expiresAt: Date }> = [];
  if (i.purchaseAt) implied.push({ basis: "achat", since: i.purchaseAt, expiresAt: addMonths(i.purchaseAt, PURCHASE_MONTHS) });
  if (i.inquiryAt) implied.push({ basis: "demande", since: i.inquiryAt, expiresAt: addMonths(i.inquiryAt, INQUIRY_MONTHS) });
  const valid = implied.filter((x) => x.expiresAt.getTime() > now.getTime()).sort((a, b) => b.expiresAt.getTime() - a.expiresAt.getTime());
  if (valid.length) {
    const best = valid[0];
    return { ok: true, basis: best.basis, since: best.since, expiresAt: best.expiresAt.toISOString(), reason: BASIS_LABELS[best.basis] };
  }
  if (i.express?.withdrawnAt) return { ok: false, basis: null, since: null, expiresAt: null, reason: "Consentement exprès retiré" };
  if (implied.length) {
    const last = implied.sort((a, b) => b.expiresAt.getTime() - a.expiresAt.getTime())[0];
    return { ok: false, basis: null, since: last.since, expiresAt: last.expiresAt.toISOString(), reason: "Consentement tacite expiré" };
  }
  return { ok: false, basis: null, since: null, expiresAt: null, reason: "Aucun consentement" };
}

const maxIso = (xs: Array<string | null | undefined>): string | null => xs.filter((x): x is string => Boolean(x)).sort().pop() ?? null;

/** Dernier achat d'un client : soumission acceptée ou installation terminée. */
export function purchaseAtOf(b: ClientBundle): string | null {
  const accepted = b.quotes.flatMap((q) => q.versions.map((v) => v.acceptance?.at));
  const done = b.jobs.filter((j) => j.status === "termine").map((j) => j.completedAt ?? [...j.audit].reverse().find((a) => a.action === "marquer terminé")?.at ?? j.updatedAt);
  return maxIso([...accepted, ...done]);
}

/** Dernière demande du client : ligne de demande du journal ou texto reçu (hors mots-clés). */
export function inquiryAtOf(b: ClientBundle): string | null {
  return maxIso([...b.journal.filter(isDemand).map((e) => e.at), ...b.textos.flatMap((c) => inboundMessages(c).map((m) => m.at))]);
}

/** Consentement exprès en vigueur ou retiré, anciens identifiants compris. */
export function expressFor(consents: Record<string, ExpressConsent>, ids: string[]): ExpressConsent | null {
  const found = ids.map((id) => consents[id]).filter((c): c is ExpressConsent => Boolean(c));
  return found.find((c) => !c.withdrawnAt) ?? found[0] ?? null;
}

export function consentOf(b: ClientBundle, consents: Record<string, ExpressConsent>, optedOut: boolean, now: Date): ConsentState {
  return smsConsent({ express: expressFor(consents, [b.id, ...b.aliases]), purchaseAt: purchaseAtOf(b), inquiryAt: inquiryAtOf(b), optedOut }, now);
}
