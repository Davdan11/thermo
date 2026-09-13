/* ==================================================================
   Conformité C2 — magasin du programme de recommandation
   (references.json, dossier de gestion, droits 600) :
     declarations  « 18 ans ou plus, résident du Canada », déclarées
                   par le recommandant dans son portail, par job ;
     records       une recommandation par nouveau client (le premier
                   code valide l'emporte) : statut, raisons, récompense,
                   dates (conditions réunies, à verser avant, versée).
   Les faits que le site ne voit pas (paiement du client, remboursement,
   versement) sont confirmés par le propriétaire dans /gestion/conformite.
   ================================================================== */

import path from "node:path";
import { randomBytes } from "node:crypto";
import { gestionDataDir, mutateJson, readJson } from "@/lib/gestion/store";

export type ReferralRecordStatus = "en-attente" | "a-verser" | "versee" | "refusee";

export interface ReferralDeclaration {
  at: string;
  adult: true;
  canada: true;
}

export interface ReferralRecord {
  id: string;
  code: string;
  referrerJobId: string;
  /** Empreintes (e:, p:) de la personne recommandée. */
  referredKeys: string[];
  /** Prénom seulement, pour s'y retrouver. */
  referredName: string;
  journalId: string;
  codeUsedAt: string;
  createdAt: string;
  updatedAt: string;
  status: ReferralRecordStatus;
  reasons: string[];
  referredJobId?: string;
  paidConfirmedAt?: string;
  paidConfirmedBy?: string;
  refundedAt?: string;
  refundedBy?: string;
  rewardCents?: number;
  conditionsMetAt?: string;
  dueBy?: string;
  payoutAt?: string;
  payoutBy?: string;
  /** Tâche « verser la récompense » créée dans le CRM. */
  taskCreated?: boolean;
}

export interface ReferencesData {
  version: 1;
  declarations: Record<string, ReferralDeclaration>;
  records: ReferralRecord[];
}

export const referencesFile = () => path.join(gestionDataDir(), "references.json");
export const emptyReferences = (): ReferencesData => ({ version: 1, declarations: {}, records: [] });

const isObj = (v: unknown): v is Record<string, unknown> => Boolean(v) && typeof v === "object" && !Array.isArray(v);

export function normalizeReferences(v: unknown): ReferencesData {
  const d = isObj(v) ? v : {};
  const declarations: Record<string, ReferralDeclaration> = {};
  if (isObj(d.declarations)) for (const [k, x] of Object.entries(d.declarations)) if (isObj(x) && typeof x.at === "string" && x.adult === true && x.canada === true) declarations[k] = { at: x.at, adult: true, canada: true };
  const records = Array.isArray(d.records) ? (d.records.filter((x) => isObj(x) && typeof x.id === "string" && typeof x.code === "string" && Array.isArray(x.referredKeys)) as ReferralRecord[]) : [];
  return { version: 1, declarations, records };
}

export async function readReferences(): Promise<ReferencesData> {
  return normalizeReferences(await readJson<unknown>(referencesFile(), () => null));
}

export function mutateReferences<T>(fn: (d: ReferencesData) => { result: T; changed: boolean } | Promise<{ result: T; changed: boolean }>): Promise<T> {
  return mutateJson<ReferencesData, T>(referencesFile(), emptyReferences, normalizeReferences, fn);
}

export const newReferralId = () => `rf_${randomBytes(8).toString("base64url")}`;

/** Déclaration du recommandant (portail) : 18 ans ou plus et résident du Canada. */
export function declareReferrer(jobId: string, now = new Date()): Promise<boolean> {
  return mutateReferences((d) => {
    if (d.declarations[jobId]) return { result: true, changed: false };
    d.declarations[jobId] = { at: now.toISOString(), adult: true, canada: true };
    return { result: true, changed: true };
  });
}

export type OwnerFact = "paiement" | "remboursement" | "versement" | "refus";

/** Faits confirmés par le propriétaire : paiement du client, remboursement ou annulation, récompense versée, refus. */
export function confirmReferralFact(id: string, fact: OwnerFact, by: string, now = new Date()): Promise<{ ok: boolean; error?: string }> {
  return mutateReferences<{ ok: boolean; error?: string }>((d) => {
    const r = d.records.find((x) => x.id === id);
    if (!r) return { result: { ok: false, error: "Recommandation introuvable." }, changed: false };
    const at = now.toISOString();
    if (fact === "paiement") {
      r.paidConfirmedAt ??= at;
      r.paidConfirmedBy ??= by;
    } else if (fact === "remboursement") {
      r.refundedAt ??= at;
      r.refundedBy ??= by;
      if (r.status !== "versee") r.status = "refusee";
      r.reasons = [...new Set([...r.reasons, "Contrat annulé ou remboursé"])];
    } else if (fact === "versement") {
      if (r.status !== "a-verser") return { result: { ok: false, error: "Rien à verser pour cette recommandation." }, changed: false };
      r.status = "versee";
      r.payoutAt = at;
      r.payoutBy = by;
    } else {
      if (r.status === "versee") return { result: { ok: false, error: "Récompense déjà versée." }, changed: false };
      r.status = "refusee";
      r.reasons = [...new Set([...r.reasons, `Refusée par ${by}`])];
    }
    r.updatedAt = at;
    return { result: { ok: true }, changed: true };
  });
}
