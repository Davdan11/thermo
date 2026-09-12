/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, getBreadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/SeoBlocks";
import { DocArticle, DocSources, DocumentBody } from "@/components/sections-v2/outils/document/DocumentBody";
import { DocumentHero } from "@/components/heroes-v2/outils/DocumentHero";

export const metadata: Metadata = createMetadata({
  title: "Politique de confidentialité",
  description: "Quels renseignements personnels Thermopompes À Vendre.ca recueille, pourquoi, avec qui ils sont partagés et comment exercer vos droits en vertu de la Loi 25.",
  canonicalPath: "/confidentialite",
  robots: { index: true, follow: true },
});

const UPDATED = "12 septembre 2026";

/** Sommaire : repris par le héros et par le sommaire collant du corps. */
const TOC = [
  { id: "qui-nous-sommes", label: "Qui nous sommes" },
  { id: "renseignements-recueillis", label: "Renseignements que nous recueillons" },
  { id: "utilisation", label: "Pourquoi nous les utilisons" },
  { id: "partage", label: "Avec qui nous les partageons" },
  { id: "conservation", label: "Conservation" },
  { id: "vos-droits", label: "Vos droits" },
  { id: "temoins", label: "Témoins (cookies) et stockage local" },
  { id: "securite", label: "Sécurité" },
  { id: "modifications", label: "Modifications" },
];

export default function ConfidentialitePage() {
  return (
    <main className="bg-white text-[#071d2b]">
      <JsonLd data={getBreadcrumbSchema([{ name: "Accueil", url: "/" }, { name: "Politique de confidentialité", url: "/confidentialite" }])} />
      <DocumentHero
        variant="confidentialite"
        eyebrow="Loi 25"
        titleLines={["Politique de", "confidentialité"]}
        intro={`Dernière mise à jour : ${UPDATED}. Cette politique décrit les renseignements personnels que nous recueillons sur ce site, l'usage que nous en faisons et vos droits.`}
        breadcrumbs={[{ label: "Politique de confidentialité", href: "/confidentialite" }]}
        toc={{
          heading: "Sommaire",
          note: `Mise à jour : ${UPDATED}`,
          items: TOC,
        }}
      />
      <DocSources />
      <DocumentBody variant="confidentialite" toc={{ heading: "Sommaire", items: TOC }}>
        <DocArticle id="qui-nous-sommes" n={1} title="1. Qui nous sommes">
          <p>
            Thermopompes À Vendre.ca (« nous ») exploite ce site de comparaison et de sélection de thermopompes au Québec. Nous agissons comme
            responsable des renseignements personnels recueillis par le site. Pour toute question, utilisez la <Link href="/contact">page Contact</Link>.
          </p>
        </DocArticle>

        <DocArticle id="renseignements-recueillis" n={2} title="2. Renseignements que nous recueillons">
          <ul>
            <li><strong>Questionnaire ThermoMatch</strong> : code postal, type de propriété, superficie, année de construction, isolation, système de chauffage actuel, priorités et budget. Ces réponses servent uniquement à calculer la recommandation et sont conservées dans votre navigateur tant que vous n'avez pas demandé de soumission.</li>
            <li><strong>Demande de soumission</strong> : prénom, nom, téléphone, courriel, adresse ou code postal, et le résumé de votre projet.</li>
            <li><strong>Vos recommandations par courriel</strong> : prénom, courriel et, si vous le donnez, téléphone, avec les réponses du questionnaire qui servent à recalculer vos trois choix. Nous vous envoyons le courriel, et un conseiller peut vous contacter au sujet de votre projet, comme pour une demande de soumission.</li>
            <li><strong>Alerte LogisVert</strong> : courriel, prénom s'il est donné, et le modèle ou la marque que vous suivez. Il sert à vous prévenir quand le montant officiel change ; notre équipe est avisée de votre inscription.</li>
            <li><strong>ThermoScan</strong> : la photo de la plaque signalétique de votre appareil actuel, transmise à un service d'analyse d'image pour en lire le texte. Nous ne conservons pas la photo après l'analyse. Évitez de photographier des éléments personnels autour de l'étiquette.</li>
            <li><strong>Appels téléphoniques</strong> : numéro de l'appelant, messages vocaux et leur transcription, lorsque vous appelez notre ligne.</li>
            <li><strong>Données techniques</strong> : adresse IP, type de navigateur, pages consultées et paramètres de provenance (utm), utilisés pour la sécurité et la mesure d'audience.</li>
          </ul>
        </DocArticle>

        <DocArticle id="utilisation" n={3} title="3. Pourquoi nous les utilisons">
          <ul>
            <li>Produire votre recommandation ThermoMatch et votre estimation de subvention.</li>
            <li>Vous rappeler et préparer une soumission, puis coordonner l'installation avec un installateur partenaire.</li>
            <li>Répondre à vos questions et assurer le suivi de votre dossier.</li>
            <li>Améliorer le site et mesurer son audience de façon agrégée.</li>
          </ul>
        </DocArticle>

        <DocArticle id="partage" n={4} title="4. Avec qui nous les partageons">
          <p>
            Nous ne vendons pas vos renseignements. Ils sont communiqués uniquement aux fournisseurs nécessaires à l'exploitation du service :
            notre outil de gestion de la relation client (pour le suivi de votre demande), notre service d'envoi de courriels, notre fournisseur de
            téléphonie, le service d'analyse d'image utilisé par ThermoScan, et l'installateur partenaire chargé de votre projet, lorsque vous avez
            demandé une soumission. Certains de ces fournisseurs sont situés hors du Québec ; nous les choisissons pour leurs garanties de sécurité.
          </p>
        </DocArticle>

        <DocArticle id="conservation" n={5} title="5. Conservation">
          <p>
            Les réponses au questionnaire restent dans votre navigateur et peuvent être effacées à tout moment via « Recommencer ». Les demandes de
            soumission sont conservées le temps nécessaire au suivi du projet, puis archivées ou supprimées. Les photos ThermoScan ne sont pas conservées.
            Une alerte LogisVert jamais confirmée est effacée après 30 jours, et une alerte est effacée dès que vous vous désabonnez, en un clic depuis chaque courriel.
          </p>
        </DocArticle>

        <DocArticle id="vos-droits" n={6} title="6. Vos droits">
          <p>
            Conformément à la Loi sur la protection des renseignements personnels dans le secteur privé (Loi 25), vous pouvez demander l'accès à vos
            renseignements, leur rectification, leur suppression, ou retirer votre consentement. Écrivez-nous via la <Link href="/contact">page Contact</Link> ;
            nous répondons dans les 30 jours. Vous pouvez aussi porter plainte auprès de la Commission d'accès à l'information du Québec.
          </p>
        </DocArticle>

        <DocArticle id="temoins" n={7} title="7. Témoins (cookies) et stockage local">
          <p>
            Le site utilise le stockage local de votre navigateur pour mémoriser vos réponses au questionnaire et votre brouillon de projet. Aucun témoin
            publicitaire n'est déposé. Pour mesurer la fréquentation du site, nous pouvons utiliser Google Analytics 4 en mode consentement : tant que vous
            n'avez pas accepté dans le bandeau prévu à cet effet, aucun témoin de mesure n'est déposé et seuls des signaux anonymes, sans identifiant, sont
            transmis. Vous pouvez accepter, refuser ou changer d'avis à tout moment par le lien « Témoins » au bas de chaque page, et effacer ces données
            depuis les paramètres de votre navigateur.
          </p>
        </DocArticle>

        <DocArticle id="securite" n={8} title="8. Sécurité">
          <p>
            Les échanges avec le site sont chiffrés (HTTPS). L'accès aux dossiers clients est limité aux personnes qui en ont besoin pour traiter votre demande.
          </p>
        </DocArticle>

        <DocArticle id="modifications" n={9} title="9. Modifications">
          <p>Cette politique peut être mise à jour. La date en haut de page indique la version en vigueur.</p>
        </DocArticle>
      </DocumentBody>
    </main>
  );
}
