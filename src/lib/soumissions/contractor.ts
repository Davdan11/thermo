/* ==================================================================
   Entrepreneur qui réalise les travaux (pur, navigateur et serveur).

   L'entreprise qui exécute les travaux est l'installateur partenaire
   choisi dans la soumission : c'est son identité légale (raison
   sociale, NEQ, licence RBQ, adresse, taxes) qui figure au document,
   copiée dans la version à l'envoi (instantané). Thermopompes À
   Vendre présente la soumission.

   Ce module ne dit RIEN de qui contracte ni de qui encaisse : ces
   questions relèvent de l'avocat (voir le rapport du volet).

   ContractorStatus est un résumé calculé au serveur
   (contractors.ts) : il ne transporte vers le navigateur que ce qu'il
   faut pour la liste de vérification (champs manquants, états de la
   licence et de l'assurance), jamais l'adresse ni les numéros.
   ================================================================== */

import type { CompanyIdentity, ContractorIdentity } from "./types";

/** État d'un document de conformité (mêmes valeurs que partenaires/compliance.ts). */
export type ComplianceState = "manquante" | "expiree" | "bientot" | "valide";

export interface ContractorStatus {
  installerId: string;
  /** Nom de l'installateur dans l'outil. */
  company: string;
  city: string;
  legalName: string;
  rbqNumber: string;
  /** Champs d'identité à compléter (libellés). */
  missing: string[];
  /** Avertissements de format (NEQ, RBQ, TPS, TVQ). */
  formatIssues: string[];
  /** Identité saisie ou confirmée par le propriétaire. */
  verified: boolean;
  source: "proprietaire" | "partenaire" | null;
  submittedAt: string | null;
  rbq: { state: ComplianceState; expiresOn: string | null };
  assurance: { state: ComplianceState; expiresOn: string | null };
  ended: boolean;
  active: boolean;
  /** Réglage des partenaires : une date d'expiration manquante bloque aussi. */
  blockWhenMissing: boolean;
}

/** Entrepreneur choisi dans la soumission (identifiant) et son état (null : introuvable). */
export interface ContractorPick {
  id: string | null;
  status: ContractorStatus | null;
}

export const NO_CONTRACTOR: ContractorPick = { id: null, status: null };

export function emptyContractorIdentity(): ContractorIdentity {
  return { legalName: "", tradeName: "", neq: "", rbq: "", address: "", city: "", postalCode: "", phone: "", email: "", tps: "", tvq: "" };
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const digits = (s: string) => s.replace(/\D/g, "");
const has = (s: string | null | undefined) => Boolean(s && s.trim());

/** Champs manquants et avertissements de format d'une identité légale. */
export function identityProblems(c: ContractorIdentity): { missing: string[]; formatIssues: string[] } {
  const missing: string[] = [];
  if (!has(c.legalName)) missing.push("raison sociale");
  if (!has(c.neq)) missing.push("NEQ");
  if (!has(c.rbq)) missing.push("licence RBQ");
  if (!has(c.address) || !has(c.city) || !has(c.postalCode)) missing.push("adresse complète");
  if (digits(c.phone).length < 10) missing.push("téléphone");
  if (!EMAIL_RE.test(c.email.trim())) missing.push("courriel");
  if (!has(c.tps)) missing.push("TPS");
  if (!has(c.tvq)) missing.push("TVQ");
  const formatIssues: string[] = [];
  if (has(c.neq) && digits(c.neq).length !== 10) formatIssues.push("Format du NEQ : 10 chiffres");
  if (has(c.rbq) && digits(c.rbq).length !== 10) formatIssues.push("Format de la licence RBQ : 10 chiffres (0000-0000-00)");
  if (has(c.tps) && !/^\d{9}RT\d{4}$/i.test(c.tps.replace(/[\s-]/g, ""))) formatIssues.push("Format de la TPS : 9 chiffres, RT et 4 chiffres");
  if (has(c.tvq) && !/^\d{10}TQ\d{4}$/i.test(c.tvq.replace(/[\s-]/g, ""))) formatIssues.push("Format de la TVQ : 10 chiffres, TQ et 4 chiffres");
  return { missing, formatIssues };
}

/** Identité figée (version envoyée, ou ancienne soumission où l'entreprise était celle des réglages) : état pour les vérifications affichées. */
export function statusFromIdentity(identity: ContractorIdentity | CompanyIdentity, installerId = ""): ContractorStatus {
  const c: ContractorIdentity = { legalName: identity.legalName, tradeName: identity.tradeName, neq: identity.neq, rbq: identity.rbq, address: identity.address, city: identity.city, postalCode: identity.postalCode, phone: identity.phone, email: identity.email, tps: identity.tps, tvq: identity.tvq };
  const { missing, formatIssues } = identityProblems(c);
  return {
    installerId,
    company: c.tradeName || c.legalName,
    city: c.city,
    legalName: c.legalName,
    rbqNumber: c.rbq,
    missing,
    formatIssues,
    verified: true,
    source: "proprietaire",
    submittedAt: null,
    rbq: { state: "valide", expiresOn: null },
    assurance: { state: "valide", expiresOn: null },
    ended: false,
    active: true,
    blockWhenMissing: false,
  };
}

/** Ce qui empêche l'envoi avec cet entrepreneur (libellés courts, pour la liste de choix). */
export function contractorBlockingReasons(s: ContractorStatus): string[] {
  const out: string[] = [];
  if (s.ended) out.push("partenariat terminé");
  if (s.missing.length) out.push(`identité à compléter (${s.missing.length})`);
  if (s.rbq.state === "expiree") out.push("licence RBQ expirée");
  if (s.assurance.state === "expiree") out.push("assurance expirée");
  if (s.blockWhenMissing && s.rbq.state === "manquante") out.push("date de la licence RBQ à saisir");
  if (s.blockWhenMissing && s.assurance.state === "manquante") out.push("date de l’assurance à saisir");
  return out;
}
