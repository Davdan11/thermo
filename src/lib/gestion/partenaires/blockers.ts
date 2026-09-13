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

   partnerBlockers() est pure ; le moteur d'envoi (service.ts,
   sendOffers) l'appelle par loadBlockers() avant chaque offre.
   ================================================================== */

import type { Installer } from "../types";
import { agreementState } from "./agreement";
import { COMPLIANCE_LABELS, docState, ymdLong } from "./compliance";
import { readPartenaires } from "./store";
import type { ComplianceKind, PartenairesData } from "./types";
// Chantier R : licence absente, suspendue ou annulée au fichier ouvert de la RBQ (reseau/rbq/verify.ts).
import { registryBlockerLabel } from "../reseau/rbq/verify";

// Chantier R : « rbq-registre » ajouté (verdict de la vérification automatique, levée manuelle possible).
export type BlockerCode = "entente" | "rbq" | "assurance" | "fin" | "rbq-registre";

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
  if (partner?.ended) out.push({ code: "fin", label: `Partenariat terminé le ${dayOf(partner.ended.at)}` });

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
  return out;
}

/** Pour le moteur d'envoi : lit partenaires.json une fois, renvoie la fonction de vérification. */
export async function loadBlockers(now = new Date()): Promise<(installer: Pick<Installer, "id" | "createdAt">) => Blocker[]> {
  const data = await readPartenaires();
  return (installer) => partnerBlockers(installer, { data, now });
}
