/* ==================================================================
   Blocages des offres de jobs (volet A). Un partenaire ne reçoit
   AUCUNE offre si :
     - l'entente en vigueur n'est pas signée (après le délai de grâce,
       pour ceux qui y ont droit ; tout de suite pour un nouveau
       partenaire) ;
     - sa licence RBQ ou son assurance responsabilité est expirée
       (ou, si le réglage l'exige, la date n'est pas saisie) ;
     - le propriétaire a mis fin au partenariat.
   Tant qu'aucune version de l'entente n'est publiée, l'entente ne
   bloque rien (la page Partenaires l'affiche en avertissement).

   Conformité C3 (annexe B et décisions du propriétaire) :
     - assurance responsabilité sous le minimum (2 M$ par défaut) ;
     - avenant d'assuré additionnel manquant ;
     - assurance automobile expirée ou sous le minimum ;
     - aucune qualification environnementale valide (halocarbures) ;
     - préavis de fin ou délai de correction en cours.
   Une valeur saisie et insuffisante (ou expirée) bloque toujours ; un
   document ABSENT bloque dès que l'entente maître est en vigueur.

   partnerBlockers() est pure ; le moteur d'envoi (service.ts,
   sendOffers) l'appelle par loadBlockers() avant chaque offre.
   ================================================================== */

import type { Installer } from "../types";
import { agreementState, masterAgreementInForce } from "./agreement";
import { COMPLIANCE_LABELS, complianceSnapshot, docState, money, ymdLong } from "./compliance";
import { endedOf, suspendedByNotice } from "./fin";
import { readPartenaires } from "./store";
import type { ComplianceKind, PartenairesData } from "./types";
// Chantier R : licence absente, suspendue ou annulée au fichier ouvert de la RBQ (reseau/rbq/verify.ts).
import { registryBlockerLabel } from "../reseau/rbq/verify";

// Chantier R : « rbq-registre » ajouté (verdict de la vérification automatique, levée manuelle possible).
// Conformité C3 : montant, avenant, automobile, halocarbures, préavis.
export type BlockerCode = "entente" | "rbq" | "assurance" | "fin" | "rbq-registre" | "assurance-montant" | "avenant" | "automobile" | "halocarbures" | "preavis";

export interface Blocker {
  code: BlockerCode;
  label: string;
}

export interface PartnerContext {
  data: Pick<PartenairesData, "agreements" | "signatures" | "requests" | "settings" | "partners">;
  now: Date;
}

const dayOf = (iso: string) => ymdLong(iso.slice(0, 10));

export function partnerBlockers(installer: Pick<Installer, "id" | "createdAt">, ctx: PartnerContext): Blocker[] {
  const out: Blocker[] = [];
  const partner = ctx.data.partners[installer.id];
  // Conformité C3 : fin effective (décidée, ou préavis de 30 jours arrivé à terme) ; préavis en cours.
  const ended = endedOf(partner, ctx.now);
  if (ended) out.push({ code: "fin", label: `Partenariat terminé le ${dayOf(ended.at)}` });
  else {
    const t = suspendedByNotice(partner, ctx.now);
    if (t) out.push({ code: "preavis", label: t.mode === "sans-motif" ? `Préavis de fin : le partenariat prend fin le ${ymdLong(t.effectiveOn)} ; nouvelles offres suspendues` : `Avis de défaut : correction attendue avant le ${ymdLong(t.effectiveOn)} ; nouvelles offres suspendues` });
  }

  const a = agreementState(installer, ctx.data, ctx.now);
  if (a.blocking) {
    const v = a.version ? ` (version ${a.version.number})` : "";
    out.push({ code: "entente", label: a.code === "a-resigner" ? `Entente${v} à re-signer : délai de grâce terminé${a.graceUntil ? ` le ${dayOf(a.graceUntil)}` : ""}` : `Entente${v} non signée` });
  }

  for (const kind of ["rbq", "assurance"] as ComplianceKind[]) {
    const doc = partner?.compliance[kind];
    const state = docState(doc ?? { expiresOn: null }, ctx.now, ctx.data.settings.alertDays);
    if (state === "expiree") out.push({ code: kind, label: `${COMPLIANCE_LABELS[kind]} expirée le ${ymdLong(doc!.expiresOn!)}` });
    else if (state === "manquante" && ctx.data.settings.blockWhenMissing) out.push({ code: kind, label: `${COMPLIANCE_LABELS[kind]} : date d’expiration à saisir` });
  }
  // Chantier R : verdict du fichier des licences actives (aucun verdict sans vérification : rien n'est inventé).
  const registry = registryBlockerLabel(partner?.rbqVerification, ctx.now);
  if (registry) out.push({ code: "rbq-registre", label: registry });

  out.push(...c3Blockers(partner, ctx));
  return out;
}

/** Conformité C3 : exigences d'assurance et de qualification (un blocage par code, raisons réunies). */
function c3Blockers(partner: PartenairesData["partners"][string] | undefined, ctx: PartnerContext): Blocker[] {
  const out: Blocker[] = [];
  const master = masterAgreementInForce(ctx.data);
  const settings = ctx.data.settings;
  const s = complianceSnapshot(partner, settings, ctx.now);

  if (s.liability.amountState === "insuffisant") out.push({ code: "assurance-montant", label: `Assurance responsabilité insuffisante : ${money(s.liability.amount!)} par sinistre (minimum ${money(s.liability.min)})` });
  else if (s.liability.amountState === "manquant" && master) out.push({ code: "assurance-montant", label: `Assurance responsabilité : montant de la couverture à saisir (minimum ${money(s.liability.min)})` });

  if (master && s.endorsement.required && !s.endorsement.ok) out.push({ code: "avenant", label: s.endorsement.confirmed ? "Avenant d’assuré additionnel : document à téléverser" : "Avenant d’assuré additionnel en faveur de la plateforme manquant" });

  const auto: string[] = [];
  const autoDoc = partner?.compliance.automobile;
  if (s.auto.entered) {
    if (s.auto.state === "expiree") auto.push(`expirée le ${ymdLong(autoDoc!.expiresOn!)}`);
    else if (s.auto.state === "manquante" && settings.blockWhenMissing) auto.push("date d’expiration à saisir");
    if (s.auto.amountState === "insuffisant") auto.push(`insuffisante : ${money(s.auto.amount!)} (minimum ${money(s.auto.min)})`);
    else if (s.auto.amountState === "manquant" && master && s.auto.required) auto.push(`montant à saisir (minimum ${money(s.auto.min)})`);
  } else if (master && s.auto.required) auto.push(`à saisir (minimum ${money(s.auto.min)})`);
  if (auto.length) out.push({ code: "automobile", label: `${COMPLIANCE_LABELS.automobile} ${auto.join(" ; ")}` });

  if (s.halocarbons.total > 0 && !s.halocarbons.ok) out.push({ code: "halocarbures", label: "Qualification environnementale (halocarbures) : aucune attestation valide" });
  else if (!s.halocarbons.ok && master && s.halocarbons.required) out.push({ code: "halocarbures", label: "Qualification environnementale (halocarbures) : attestation à saisir" });
  return out;
}

/** Pour le moteur d'envoi : lit partenaires.json une fois, renvoie la fonction de vérification. */
export async function loadBlockers(now = new Date()): Promise<(installer: Pick<Installer, "id" | "createdAt">) => Blocker[]> {
  const data = await readPartenaires();
  return (installer) => partnerBlockers(installer, { data, now });
}
