/* ==================================================================
   Conformité C2 — /programme-de-recommandation : règles publiques du
   programme (trousse, section 7), remplies avec l'identité de la
   plateforme et les réglages de la récompense du volet B (montant fixe,
   forme, plafond annuel, date de lancement). Aucun hasard, aucun tirage.
   Sans montant saisi (ou avant le lancement), le programme n'est pas
   offert : page introuvable. Mise à jour sans rebuild (5 minutes).
   ================================================================== */

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo";
import { readAutomations } from "@/lib/gestion/automatisations/store";
import { currentReferralRules } from "@/lib/consentements/serveur";
import { programState } from "@/lib/reference/regles";
import { DocumentTrousse } from "@/components/confidentialite/DocumentTrousse";

export const revalidate = 300;

export const metadata: Metadata = createMetadata({
  title: "Programme de recommandation",
  description: "Règles du programme de recommandation de Thermopompes À Vendre.ca : récompense fixe, admissibilité, conditions de versement. Aucun tirage au sort.",
  canonicalPath: "/programme-de-recommandation",
  robots: { index: true, follow: true },
});

export default async function ProgrammeRecommandationPage() {
  const p = (await readAutomations().catch(() => null))?.settings.referralProgram;
  if (!p || !programState(p).offered) notFound();
  const doc = await currentReferralRules({ rewardCents: p.rewardCents, form: p.form, annualCap: p.annualCap, launchDate: p.launchDate });
  if (!doc) notFound();
  return (
    <DocumentTrousse
      doc={doc}
      variant="conditions"
      eyebrow="Recommandation"
      titleLines={["Programme de", "recommandation"]}
      intro={doc.intro.join(" ")}
      crumb={{ name: "Programme de recommandation", url: "/programme-de-recommandation" }}
    />
  );
}
