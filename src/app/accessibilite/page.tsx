/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, getBreadcrumbSchema } from "@/lib/seo";
import { JsonLd, Prose, TrustStrip } from "@/components/seo/SeoBlocks";
import { DocumentHero } from "@/components/heroes-v2/outils/DocumentHero";

export const metadata: Metadata = createMetadata({
  title: "Accessibilité",
  description: "Notre engagement d'accessibilité : ce que nous faisons pour que Thermopompes À Vendre.ca soit utilisable par tous, et comment nous signaler un obstacle.",
  canonicalPath: "/accessibilite",
  robots: { index: true, follow: true },
});

export default function AccessibilitePage() {
  return (
    <main className="bg-[#f8f5f0] text-[#071d2b]">
      <JsonLd data={getBreadcrumbSchema([{ name: "Accueil", url: "/" }, { name: "Accessibilité", url: "/accessibilite" }])} />
      <DocumentHero
        variant="accessibilite"
        eyebrow="Engagement"
        titleLines={["Accessibilité"]}
        intro="Nous voulons que chacun puisse comparer et choisir une thermopompe sur ce site, quel que soit l'appareil ou l'outil d'assistance utilisé."
        breadcrumbs={[{ label: "Accessibilité", href: "/accessibilite" }]}
        toc={{
          heading: "Sommaire",
          items: [
          { id: "ce-que-nous-appliquons", label: "Ce que nous appliquons" },
          { id: "limites-connues", label: "Limites connues" },
          { id: "signaler-un-obstacle", label: "Nous signaler un obstacle" },
        ],
        }}
      />
      <TrustStrip />
      <Prose>
        <h2 id="ce-que-nous-appliquons" className="scroll-mt-28">Ce que nous appliquons</h2>
        <ul>
          <li>Structure de titres cohérente et un seul titre principal par page.</li>
          <li>Navigation entièrement possible au clavier, y compris le questionnaire ThermoMatch et la pagination du catalogue.</li>
          <li>Textes de remplacement sur les images informatives ; images décoratives ignorées par les lecteurs d'écran.</li>
          <li>Contrastes de couleurs conformes aux recommandations WCAG 2.1 niveau AA sur les textes courants.</li>
          <li>Tableaux de données avec en-têtes explicites, lisibles par les technologies d'assistance.</li>
          <li>Aucune information transmise uniquement par la couleur : les résultats sont toujours accompagnés d'un texte.</li>
        </ul>

        <h2 id="limites-connues" className="scroll-mt-28">Limites connues</h2>
        <ul>
          <li>Certaines animations d'apparition peuvent gêner les personnes sensibles au mouvement ; elles respectent le réglage « réduire les animations » du système.</li>
          <li>ThermoScan requiert une photo ; une alternative par saisie du numéro de modèle est disponible sur la page <Link href="/subventions">Subventions</Link>.</li>
          <li>Les documents PDF des fabricants, lorsqu'ils sont proposés, ne sont pas produits par nous et peuvent ne pas être accessibles.</li>
        </ul>

        <h2 id="signaler-un-obstacle" className="scroll-mt-28">Nous signaler un obstacle</h2>
        <p>
          Si une page ou une fonction vous pose problème, dites-le-nous via la <Link href="/contact">page Contact</Link> en précisant la page et
          l'outil utilisé. Nous corrigeons les obstacles signalés en priorité.
        </p>
      </Prose>
    </main>
  );
}
