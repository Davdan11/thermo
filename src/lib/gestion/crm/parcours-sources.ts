/* ==================================================================
   Refonte R2 — lecture des magasins qui nourrissent les dernières
   étapes du parcours : factures de commission (Payé), dossiers
   après-vente et plans d'entretien (Suivi). Seulement ce qui sert :
   dates, statuts, montants de la facture (jamais un nom ni un numéro).
   ================================================================== */

import { afterSaleFile, readAfterSale } from "../automatisations/store";
import { commissionsFile, readCommissions } from "../commissions/store";
import { portalFile, readPortal } from "../portail/store";
import { terrainFile } from "../terrain/store";
import type { ParcoursInput } from "./parcours";

export async function readParcoursInput(): Promise<ParcoursInput> {
  const [comm, after, portal] = await Promise.all([readCommissions(), readAfterSale(), readPortal()]);
  return {
    invoices: comm.invoices.map((i) => ({ jobId: i.jobId, number: i.number, status: i.status, dueAt: i.dueAt, issuedAt: i.issuedAt, paidAt: i.payment?.recordedAt ?? null, totalCents: i.totalCents })),
    afterSale: Object.fromEntries(Object.entries(after.dossiers).map(([jobId, d]) => [jobId, { surveyAt: d.survey?.at ?? null, referralAt: d.referral?.createdAt ?? null }])),
    memberships: portal.memberships.map((m) => ({ jobId: m.jobId, joinedAt: m.joinedAt, active: m.status === "active" })),
  };
}

/** Fichiers à surveiller pour la mémoïsation de l'index (service.ts, signature) : terrain.json compris (en route, arrivée). */
export const parcoursFiles = (): string[] => [commissionsFile(), afterSaleFile(), portalFile(), terrainFile()];
