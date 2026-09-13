/* ==================================================================
   Conformité C2 — /suivi/<jeton>/desabonnement : désabonnement EN UN
   CLIC des messages après l'installation (lien du pied de message
   commercial 5.5) : ouvrir le lien suffit, prise d'effet immédiate
   (bien avant les 10 jours ouvrables permis), retrait consigné.
   Les messages de service (rendez-vous, chantier, garantie, sécurité,
   LogisVert) continuent : ils ne sont pas commerciaux.
   ================================================================== */
import type { Metadata } from "next";
import { unsubscribeSuivi } from "@/lib/gestion/automatisations/followup";
import { EnveloppeHero } from "@/components/heroes-v2/alertes/EnveloppeHero";

export const metadata: Metadata = {
  title: "Désabonnement",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function DesabonnementSuiviPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = await params;
  const ok = await unsubscribeSuivi(token).catch(() => false);
  if (!ok) {
    return (
      <main>
        <EnveloppeHero
          title={["Ce lien n’est", "pas reconnu."]}
          lead="Il a peut-être été coupé en le copiant. Écrivez-nous ou appelez-nous : nous vous retirerons de la liste tout de suite."
          actions={[
            { href: "/contact", label: "Nous joindre" },
            { href: "/", label: "Accueil", ghost: true },
          ]}
          postmark={["Lien", "inactif"]}
        />
      </main>
    );
  }
  return (
    <main>
      <EnveloppeHero
        title={["Vous êtes", "désabonné."]}
        lead="C’est fait, dès maintenant : plus d’offres, de conseils d’entretien, de messages de recommandation ni de sondages. Les messages nécessaires à votre installation (rendez-vous, chantier, garantie, sécurité, aide LogisVert) continuent."
        actions={[{ href: "/", label: "Retour à l’accueil" }]}
        rows={[
          { label: "Offres et conseils", value: "Arrêtés", tone: "removed" },
          { label: "Messages de service", value: "Maintenus", tone: "active" },
          { label: "Prise d’effet", value: "Immédiate", tone: "removed" },
        ]}
        postmark={["Désabonné"]}
      />
    </main>
  );
}
