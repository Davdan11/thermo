/* ==================================================================
   Entrepreneurs du créateur de soumissions : les installateurs
   partenaires (gestion.json) et leur fiche (partenaires.json) —
   identité légale, licence RBQ et assurance (volet A), fin de
   partenariat. Serveur seulement.
   AUCUNE vérification d'accès ici : pages et actions passent d'abord
   par requireAdmin().
   ================================================================== */

import { docState } from "@/lib/gestion/partenaires/compliance";
import { readPartenaires } from "@/lib/gestion/partenaires/store";
import { INSTALLER_ID_RE, type PartenairesData, type PartnerRecord } from "@/lib/gestion/partenaires/types";
import { readGestion } from "@/lib/gestion/store";
import type { Installer } from "@/lib/gestion/types";
import { identityProblems, type ContractorStatus } from "./contractor";
import type { ContractorIdentity, SoumissionsData } from "./types";

const demoAllowed = () => process.env.NODE_ENV !== "production";

/** Identité légale de l'entrepreneur : fiche du partenaire ; licence RBQ de la conformité (sinon celle de l'installateur). */
export function contractorIdentityOf(installer: Pick<Installer, "rbq">, record: PartnerRecord | null | undefined): ContractorIdentity {
  const id = record?.identity ?? null;
  const s = (v: string | undefined | null) => (v ?? "").trim();
  return {
    legalName: s(id?.legalName),
    tradeName: s(id?.tradeName),
    neq: s(id?.neq),
    rbq: s(record?.compliance.rbq.number) || s(installer.rbq),
    address: s(id?.address),
    city: s(id?.city),
    postalCode: s(id?.postalCode),
    phone: s(id?.phone),
    email: s(id?.email),
    tps: s(id?.tps),
    tvq: s(id?.tvq),
  };
}

/** État d'un entrepreneur pour la liste de vérification (aucune adresse ni numéro : seulement les champs manquants). */
export function contractorStatusOf(installer: Installer, record: PartnerRecord | null | undefined, settings: Pick<PartenairesData["settings"], "alertDays" | "blockWhenMissing">, now: Date): ContractorStatus {
  const identity = contractorIdentityOf(installer, record);
  const { missing, formatIssues } = identityProblems(identity);
  const doc = (k: "rbq" | "assurance") => {
    const d = record?.compliance[k];
    return { state: docState(d ?? { expiresOn: null }, now, settings.alertDays), expiresOn: d?.expiresOn ?? null };
  };
  return {
    installerId: installer.id,
    company: installer.company,
    city: installer.base?.city ?? "",
    legalName: identity.legalName,
    rbqNumber: identity.rbq,
    missing,
    formatIssues,
    verified: Boolean(record?.identity?.verifiedAt),
    source: record?.identity?.source ?? null,
    submittedAt: record?.identity?.submittedAt ?? null,
    rbq: doc("rbq"),
    assurance: doc("assurance"),
    ended: Boolean(record?.ended),
    active: installer.active,
    blockWhenMissing: settings.blockWhenMissing,
  };
}

async function snapshot() {
  const [g, p] = await Promise.all([readGestion(), readPartenaires()]);
  return { installers: demoAllowed() || !g.seed ? g.installers : [], partners: p };
}

/** Liste du sélecteur « Entrepreneur qui réalise les travaux » : partenaires actifs, plus celui déjà choisi (même en pause ou terminé). */
export async function loadContractorOptions(now = new Date(), include?: string | null): Promise<ContractorStatus[]> {
  const { installers, partners } = await snapshot();
  return installers
    .filter((i) => (i.active && !partners.partners[i.id]?.ended) || i.id === include)
    .map((i) => contractorStatusOf(i, partners.partners[i.id], partners.settings, now))
    .sort((a, b) => a.company.localeCompare(b.company, "fr-CA"));
}

/** Entrepreneur choisi : état et identité complète (serveur seulement : envoi et aperçu). */
export async function loadContractor(id: string | null | undefined, now = new Date()): Promise<{ status: ContractorStatus; identity: ContractorIdentity } | null> {
  if (!id || !INSTALLER_ID_RE.test(id)) return null;
  const { installers, partners } = await snapshot();
  const installer = installers.find((i) => i.id === id);
  if (!installer) return null;
  const record = partners.partners[id];
  return { status: contractorStatusOf(installer, record, partners.settings, now), identity: contractorIdentityOf(installer, record) };
}

/** Dernier entrepreneur choisi (brouillon ou envoi le plus récent qui en a un) : proposé d'office dans une nouvelle soumission. */
export function lastContractorId(data: SoumissionsData): string | null {
  let best: { at: string; id: string } | null = null;
  for (const q of data.quotes) {
    for (const v of q.versions) {
      if (!v.contractorId) continue;
      if (!best || v.updatedAt > best.at) best = { at: v.updatedAt, id: v.contractorId };
    }
  }
  return best?.id ?? null;
}
