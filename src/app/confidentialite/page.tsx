/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, getBreadcrumbSchema } from "@/lib/seo";
import { JsonLd, Prose, SeoHero } from "@/components/seo/SeoBlocks";

export const metadata: Metadata = createMetadata({
  title: "Politique de confidentialité",
  description: "Quels renseignements personnels Thermopompes À Vendre.ca recueille, pourquoi, avec qui ils sont partagés et comment exercer vos droits en vertu de la Loi 25.",
  canonicalPath: "/confidentialite",
  robots: { index: true, follow: true },
});

const UPDATED = "8 septembre 2026";

export default function ConfidentialitePage() {
  return (
    <main className="bg-[#f8f5f0] text-[#071d2b]">
      <JsonLd data={getBreadcrumbSchema([{ name: "Accueil", url: "/" }, { name: "Politique de confidentialité", url: "/confidentialite" }])} />
      <SeoHero
        eyebrow="Loi 25"
        title="Politique de confidentialité"
        intro={`Dernière mise à jour : ${UPDATED}. Cette politique décrit les renseignements personnels que nous recueillons sur ce site, l'usage que nous en faisons et vos droits.`}
        breadcrumbs={[{ label: "Politique de confidentialité", href: "/confidentialite" }]}
      />
      <Prose>
        <h2>1. Qui nous sommes</h2>
        <p>
          Thermopompes À Vendre.ca (« nous ») exploite ce site de comparaison et de sélection de thermopompes au Québec. Nous agissons comme
          responsable des renseignements personnels recueillis par le site. Pour toute question, utilisez la <Link href="/contact">page Contact</Link>.
        </p>

        <h2>2. Renseignements que nous recueillons</h2>
        <ul>
          <li><strong>Questionnaire ThermoMatch</strong> : code postal, type de propriété, superficie, année de construction, isolation, système de chauffage actuel, priorités et budget. Ces réponses servent uniquement à calculer la recommandation et sont conservées dans votre navigateur tant que vous n'avez pas demandé de soumission.</li>
          <li><strong>Demande de soumission</strong> : prénom, nom, téléphone, courriel, adresse ou code postal, et le résumé de votre projet.</li>
          <li><strong>ThermoScan</strong> : la photo de la plaque signalétique de votre appareil actuel, transmise à un service d'analyse d'image pour en lire le texte. Nous ne conservons pas la photo après l'analyse. Évitez de photographier des éléments personnels autour de l'étiquette.</li>
          <li><strong>Appels téléphoniques</strong> : numéro de l'appelant, messages vocaux et leur transcription, lorsque vous appelez notre ligne.</li>
          <li><strong>Données techniques</strong> : adresse IP, type de navigateur, pages consultées et paramètres de provenance (utm), utilisés pour la sécurité et la mesure d'audience.</li>
        </ul>

        <h2>3. Pourquoi nous les utilisons</h2>
        <ul>
          <li>Produire votre recommandation ThermoMatch et votre estimation de subvention.</li>
          <li>Vous rappeler et préparer une soumission, puis coordonner l'installation avec un installateur partenaire.</li>
          <li>Répondre à vos questions et assurer le suivi de votre dossier.</li>
          <li>Améliorer le site et mesurer son audience de façon agrégée.</li>
        </ul>

        <h2>4. Avec qui nous les partageons</h2>
        <p>
          Nous ne vendons pas vos renseignements. Ils sont communiqués uniquement aux fournisseurs nécessaires à l'exploitation du service :
          notre outil de gestion de la relation client (pour le suivi de votre demande), notre service d'envoi de courriels, notre fournisseur de
          téléphonie, le service d'analyse d'image utilisé par ThermoScan, et l'installateur partenaire chargé de votre projet, lorsque vous avez
          demandé une soumission. Certains de ces fournisseurs sont situés hors du Québec ; nous les choisissons pour leurs garanties de sécurité.
        </p>

        <h2>5. Conservation</h2>
        <p>
          Les réponses au questionnaire restent dans votre navigateur et peuvent être effacées à tout moment via « Recommencer ». Les demandes de
          soumission sont conservées le temps nécessaire au suivi du projet, puis archivées ou supprimées. Les photos ThermoScan ne sont pas conservées.
        </p>

        <h2>6. Vos droits</h2>
        <p>
          Conformément à la Loi sur la protection des renseignements personnels dans le secteur privé (Loi 25), vous pouvez demander l'accès à vos
          renseignements, leur rectification, leur suppression, ou retirer votre consentement. Écrivez-nous via la <Link href="/contact">page Contact</Link> ;
          nous répondons dans les 30 jours. Vous pouvez aussi porter plainte auprès de la Commission d'accès à l'information du Québec.
        </p>

        <h2>7. Témoins (cookies) et stockage local</h2>
        <p>
          Le site utilise le stockage local de votre navigateur pour mémoriser vos réponses au questionnaire et votre brouillon de projet. Aucun témoin
          publicitaire n'est déposé. Pour mesurer la fréquentation du site, nous pouvons utiliser Google Analytics 4 en mode consentement : tant que vous
          n'avez pas accepté dans le bandeau prévu à cet effet, aucun témoin de mesure n'est déposé et seuls des signaux anonymes, sans identifiant, sont
          transmis. Vous pouvez accepter, refuser ou changer d'avis à tout moment par le lien « Témoins » au bas de chaque page, et effacer ces données
          depuis les paramètres de votre navigateur.
        </p>

        <h2>8. Sécurité</h2>
        <p>
          Les échanges avec le site sont chiffrés (HTTPS). L'accès aux dossiers clients est limité aux personnes qui en ont besoin pour traiter votre demande.
        </p>

        <h2>9. Modifications</h2>
        <p>Cette politique peut être mise à jour. La date en haut de page indique la version en vigueur.</p>
      </Prose>
    </main>
  );
}
