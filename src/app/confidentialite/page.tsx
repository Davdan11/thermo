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

const UPDATED = "13 septembre 2026";

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
            <li><strong>Soumissions que nous vous envoyons</strong> : lorsque vous consultez une soumission, la date, l'heure et le type de navigateur de chaque consultation, pour suivre votre dossier ; si vous l'acceptez en ligne, votre nom tapé, votre adresse IP, votre navigateur et une empreinte numérique du document accepté, comme preuve de votre consentement.</li>
            <li><strong>Textos</strong> : si vous nous écrivez par texto au 438-900-3224, nous conservons votre numéro, vos messages et les photos jointes afin de vous répondre et de préparer votre soumission ; répondez ARRÊT (ou STOP) en tout temps pour ne plus recevoir de textos de notre part.</li>
            <li><strong>Données techniques</strong> : adresse IP, type de navigateur, pages consultées et paramètres de provenance (utm), utilisés pour la sécurité et la mesure d'audience ; avec votre accord seulement, l'identifiant du clic publicitaire qui vous a amené sur le site (voir la section 7).</li>
          </ul>
        </DocArticle>

        <DocArticle id="utilisation" n={3} title="3. Pourquoi nous les utilisons">
          <ul>
            <li>Produire votre recommandation ThermoMatch et votre estimation de subvention.</li>
            <li>Vous rappeler et préparer une soumission, puis coordonner l'installation avec un installateur partenaire.</li>
            <li>Répondre à vos questions et assurer le suivi de votre dossier.</li>
            <li>Améliorer le site et mesurer son audience de façon agrégée ; avec votre accord seulement, mesurer quelles publicités Google et Meta mènent à une demande ou à une vente (voir la section 7).</li>
          </ul>
        </DocArticle>

        <DocArticle id="partage" n={4} title="4. Avec qui nous les partageons">
          <p>
            Nous ne vendons pas vos renseignements. Ils sont communiqués uniquement aux fournisseurs nécessaires à l'exploitation du service :
            notre outil de gestion de la relation client (pour le suivi de votre demande), notre service d'envoi de courriels, notre fournisseur de
            téléphonie, le service d'analyse d'image utilisé par ThermoScan, et l'installateur partenaire chargé de votre projet, lorsque vous avez
            demandé une soumission. Avec votre accord seulement (bandeau « Témoins »), Google (Google Analytics, Google Ads) et Meta (Facebook, Instagram) reçoivent les données de mesure publicitaire décrites à la section 7. Certains de ces fournisseurs sont situés hors du Québec ; nous les choisissons pour leurs garanties de sécurité.
          </p>
        </DocArticle>

        <DocArticle id="conservation" n={5} title="5. Conservation">
          <p>
            Les réponses au questionnaire restent dans votre navigateur et peuvent être effacées à tout moment via « Recommencer ». Les demandes de
            soumission sont conservées le temps nécessaire au suivi du projet, puis archivées ou supprimées. Les photos ThermoScan ne sont pas conservées.
            Une alerte LogisVert jamais confirmée est effacée après 30 jours, et une alerte est effacée dès que vous vous désabonnez, en un clic depuis chaque courriel. L'identifiant du clic publicitaire gardé dans votre navigateur (avec votre accord) est effacé après 90 jours ; joint à une demande, il est conservé avec elle.
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
            publicitaire n'est déposé sans votre accord. Pour mesurer la fréquentation du site et l'efficacité de nos publicités, nous pouvons utiliser Google Analytics 4, Google Ads et le pixel de Meta en mode consentement : tant que vous
            n'avez pas accepté dans le bandeau prévu à cet effet, aucune de ces balises n'est chargée : aucun témoin de mesure ni identifiant publicitaire n'est déposé et rien n'est
            transmis à Google ni à Meta. Vous pouvez accepter, refuser ou changer d'avis à tout moment par le lien « Témoins » au bas de chaque page, et effacer ces données
            depuis les paramètres de votre navigateur.
          </p>
          <p>
            Pour savoir quelles pages et quelles sources nous amènent des demandes, notre site garde dans votre navigateur, le temps de votre visite
            seulement (sans témoin ni service tiers), la première page consultée, le nom du site d'où vous arrivez et les paramètres de campagne de
            l'adresse ; ces renseignements ne nous sont transmis qu'avec un formulaire que vous envoyez et sont conservés avec votre demande.</p><p><strong>Mesure publicitaire, seulement si vous cliquez sur « Accepter ».</strong> La balise de Google (Google Analytics et Google Ads) et, s'il est en place, le pixel de Meta (Facebook, Instagram) sont alors chargés et déposent leurs propres témoins. Si vous êtes arrivé par une publicité, l'identifiant du clic publicitaire contenu dans l'adresse (gclid, gbraid, wbraid, fbclid ou msclkid) et les paramètres de campagne (utm) sont gardés 90 jours dans votre navigateur, puis effacés. Si vous envoyez une demande, ils y sont joints avec la date de votre accord et la version du texte accepté. Lorsqu'une soumission est acceptée, nous transmettons à Google l'identifiant du clic, le nom de la conversion, sa date et la valeur de notre commission, sans votre nom, votre courriel ni votre téléphone. À Meta, nous pouvons transmettre la demande de soumission et la vente, avec votre courriel et votre téléphone transformés par hachage (SHA-256) avant l'envoi, l'identifiant du clic Meta et le type de navigateur, pour qu'il puisse les rapprocher de ses comptes. Si vous refusez, rien de cela n'a lieu et seule votre réponse (refus, date, version du texte) est jointe à une demande que vous envoyez. Si vous retirez votre accord (lien « Témoins »), les identifiants gardés dans votre navigateur et les témoins de mesure du site sont effacés, et plus rien n'est transmis.
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
