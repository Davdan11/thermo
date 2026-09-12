/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, getBreadcrumbSchema } from "@/lib/seo";
import { JsonLd, Prose, TrustStrip } from "@/components/seo/SeoBlocks";
import { DocumentHero } from "@/components/heroes-v2/outils/DocumentHero";

export const metadata: Metadata = createMetadata({
  title: "Conditions d'utilisation",
  description: "Conditions d'utilisation du site Thermopompes À Vendre.ca : nature des recommandations, sources des données, limites de responsabilité.",
  canonicalPath: "/conditions",
  robots: { index: true, follow: true },
});

export default function ConditionsPage() {
  return (
    <main className="bg-[#f8f5f0] text-[#071d2b]">
      <JsonLd data={getBreadcrumbSchema([{ name: "Accueil", url: "/" }, { name: "Conditions d'utilisation", url: "/conditions" }])} />
      <DocumentHero
        variant="conditions"
        eyebrow="Cadre d'utilisation"
        titleLines={["Conditions", "d'utilisation"]}
        intro="En utilisant ce site, vous acceptez les conditions ci-dessous. Elles précisent surtout ce que nos outils sont, et ce qu'ils ne sont pas."
        breadcrumbs={[{ label: "Conditions d'utilisation", href: "/conditions" }]}
        toc={{
          heading: "Sommaire",
          note: "9 articles",
          items: [
          { id: "nature-du-service", label: "Nature du service" },
          { id: "sources-des-donnees", label: "Sources des données" },
          { id: "subventions", label: "Subventions" },
          { id: "prix", label: "Prix" },
          { id: "installateurs-partenaires", label: "Installateurs partenaires" },
          { id: "propriete-intellectuelle", label: "Propriété intellectuelle" },
          { id: "limitation-de-responsabilite", label: "Limitation de responsabilité" },
          { id: "renseignements-personnels", label: "Renseignements personnels" },
          { id: "droit-applicable", label: "Droit applicable" },
        ],
        }}
      />
      <TrustStrip />
      <Prose>
        <h2 id="nature-du-service" className="scroll-mt-28">1. Nature du service</h2>
        <p>
          Thermopompes À Vendre.ca est un outil d'information et de présélection. ThermoMatch, ThermoScan, le calculateur d'économies et les pages
          de comparaison produisent des estimations à partir de données publiques et de vos réponses. Ils ne constituent ni un devis, ni un calcul de
          charge thermique conforme à la norme CSA F280, ni une garantie d'admissibilité à une subvention.
        </p>

        <h2 id="sources-des-donnees" className="scroll-mt-28">2. Sources des données</h2>
        <p>
          Les capacités de chauffage, indices d'efficacité et montants de subvention proviennent de la liste officielle des appareils admissibles
          au programme LogisVert d'Hydro-Québec, des certifications AHRI et d'ENERGY STAR. Ces sources sont mises à jour par leurs éditeurs ; malgré
          une synchronisation automatique, un écart temporaire est possible. Lorsqu'une valeur est estimée plutôt que certifiée, nous l'indiquons.
        </p>

        <h2 id="subventions" className="scroll-mt-28">3. Subventions</h2>
        <p>
          Les montants LogisVert affichés correspondent à un appariement précis (unité extérieure et unité intérieure). L'admissibilité finale dépend
          des conditions du programme au moment de la demande, de votre situation et de l'installation réalisée. Seul Hydro-Québec confirme un montant.
        </p>

        <h2 id="prix" className="scroll-mt-28">4. Prix</h2>
        <p>
          Nous n'affichons aucun prix de vente. Toute fourchette de coût présentée est indicative et doit être validée par une soumission écrite d'un
          entrepreneur détenant une licence de la Régie du bâtiment du Québec.
        </p>

        <h2 id="installateurs-partenaires" className="scroll-mt-28">5. Installateurs partenaires</h2>
        <p>
          Lorsque vous demandez une soumission, votre projet peut être confié à un installateur partenaire indépendant. Le contrat d'installation vous
          lie à cet installateur ; nous ne sommes pas partie à ce contrat.
        </p>

        <h2 id="propriete-intellectuelle" className="scroll-mt-28">6. Propriété intellectuelle</h2>
        <p>
          Les textes, la méthode ThermoMatch, les classements et la mise en forme de ce site nous appartiennent. Les marques, noms de modèles et
          logos cités appartiennent à leurs fabricants respectifs et sont utilisés à des fins d'identification.
        </p>

        <h2 id="limitation-de-responsabilite" className="scroll-mt-28">7. Limitation de responsabilité</h2>
        <p>
          Nous mettons tout en œuvre pour que les informations soient exactes et à jour, sans pouvoir le garantir. Nous ne pouvons être tenus
          responsables d'une décision d'achat ou d'installation fondée uniquement sur les informations du site.
        </p>

        <h2 id="renseignements-personnels" className="scroll-mt-28">8. Renseignements personnels</h2>
        <p>
          Le traitement de vos renseignements est décrit dans notre <Link href="/confidentialite">politique de confidentialité</Link>.
        </p>

        <h2 id="droit-applicable" className="scroll-mt-28">9. Droit applicable</h2>
        <p>Ces conditions sont régies par les lois du Québec et les lois du Canada qui s'y appliquent.</p>
      </Prose>
    </main>
  );
}
