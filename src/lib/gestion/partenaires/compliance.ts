/* Conformité des partenaires : licence RBQ et assurance responsabilité, état selon la date d'expiration (Montréal).
   Fonctions pures. Un document est valide jusqu'à la fin de son dernier jour. */

import { addDaysYmd, localYmd } from "../crm/time";
import type { ComplianceDoc, ComplianceKind } from "./types";

export type DocState = "manquante" | "expiree" | "bientot" | "valide";

export const COMPLIANCE_LABELS: Record<ComplianceKind, string> = { rbq: "Licence RBQ", assurance: "Assurance responsabilité" };

export const DOC_STATE_LABELS: Record<DocState, string> = {
  manquante: "Date à saisir",
  expiree: "Expirée",
  bientot: "Expire bientôt",
  valide: "Valide",
};

export function docState(doc: Pick<ComplianceDoc, "expiresOn">, now: Date, alertDays: number): DocState {
  if (!doc.expiresOn || !/^\d{4}-\d{2}-\d{2}$/.test(doc.expiresOn)) return "manquante";
  const today = localYmd(now);
  if (doc.expiresOn < today) return "expiree";
  if (doc.expiresOn <= addDaysYmd(today, alertDays)) return "bientot";
  return "valide";
}

/** « 12 mars 2027 » */
export function ymdLong(ymd: string): string {
  const d = new Date(`${ymd}T12:00:00Z`);
  if (Number.isNaN(d.getTime())) return ymd;
  return new Intl.DateTimeFormat("fr-CA", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(d);
}
