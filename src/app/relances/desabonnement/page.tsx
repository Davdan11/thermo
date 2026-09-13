/* ==================================================================
   /relances/desabonnement?token=… — désabonnement en un clic des
   rappels ThermoMatch et des demandes d'avis (LCAP, Loi 25) : ouvrir
   le lien suffit. Les messageries utilisent plutôt
   POST /api/relances/desabonnement. Même héros que les alertes LogisVert.
   ================================================================== */
import type { Metadata } from "next";
import { after } from "next/server";
import { isToken } from "@/lib/alerts/logisvert-alerts-core";
import { unsubscribeByToken } from "@/lib/relances/store";
import { journalLead } from "@/lib/crm/lead-journal";
import { EnveloppeHero } from "@/components/heroes-v2/alertes/EnveloppeHero";

export const metadata: Metadata = {
  title: "Désabonnement des rappels",
  robots: { index: false, follow: false },
};

export default async function DesabonnementRelancesPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const { token } = await searchParams;
  const r = isToken(token) ? await unsubscribeByToken(token) : null;
  if (!r) {
    return (
      <main>
        <EnveloppeHero
          title={["Ce lien n’est", "pas reconnu."]}
          lead="Il a peut-être été coupé en le copiant. Si vous recevez encore nos courriels, répondez « STOP » à l’un d’eux ou écrivez à info@thermopompesavendre.ca : nous vous retirerons de la liste."
          actions={[
            { href: "/contact", label: "Nous joindre" },
            { href: "/", label: "Accueil", ghost: true },
          ]}
          postmark={["Lien", "inactif"]}
        />
      </main>
    );
  }
  if (!r.already) after(() => journalLead("relances", { event: "desabonnement", via: "lien", email: r.email, cancelled: r.cancelled }));
  return (
    <main>
      <EnveloppeHero
        title={["Vous êtes", "désabonné."]}
        lead="Thermopompes À Vendre ne vous enverra plus de rappels ni de demande d’avis à cette adresse. Rien d’autre à faire."
        actions={[
          { href: "/", label: "Retour à l’accueil" },
          { href: "/subventions", label: "Les subventions", ghost: true },
        ]}
        rows={[
          { label: "Rappels ThermoMatch", value: "Arrêtés", tone: "removed" },
          { label: "Demandes d’avis", value: "Arrêtées", tone: "removed" },
          { label: "État", value: "Désabonné", tone: "removed" },
        ]}
        postmark={["Désabonné"]}
      />
    </main>
  );
}
