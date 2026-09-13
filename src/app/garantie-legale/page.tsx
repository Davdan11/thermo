import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, getBreadcrumbSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/SeoBlocks";
import { DocArticle, DocumentBody } from "@/components/sections-v2/outils/document/DocumentBody";
import { DocumentHero } from "@/components/heroes-v2/outils/DocumentHero";
import { dateEnVigueur, lireConfig } from "@/lib/garantie-legale/config";

/* ==================================================================
   /garantie-legale — la garantie légale de bon fonctionnement, en mots
   simples. Page cible du lien de la mention affichée près des prix.

   Texte à faire valider par un avocat.

   Contenu tiré uniquement de la page officielle de l'Office de la
   protection du consommateur (config.source) et de la clause du contrat
   client : aucun avis juridique. Date et durée : configuration unique
   (src/lib/garantie-legale/config.ts). Page statique : le texte ne
   dépend pas du jour de la visite.
   ================================================================== */

const config = lireConfig();
const DATE = dateEnVigueur(config);
const ANS = `${config.ans} ans`;

export const metadata: Metadata = createMetadata({
  title: "Garantie légale de bon fonctionnement",
  description: `Thermopompe neuve au Québec : garantie légale de bon fonctionnement de ${ANS} à compter de la livraison, pour un achat conclu à compter du ${DATE}. Ce qu’elle couvre.`,
  canonicalPath: "/garantie-legale",
  robots: { index: true, follow: true },
});

const TOC = [
  { id: "de-quoi-il-sagit", label: "De quoi il s’agit" },
  { id: "duree", label: "Durée pour une thermopompe" },
  { id: "ce-quelle-couvre", label: "Ce qu’elle couvre" },
  { id: "exclusions", label: "Ce qu’elle ne couvre pas" },
  { id: "a-qui-sadresser", label: "À qui s’adresser" },
  { id: "autres-garanties", label: "Les autres garanties" },
  { id: "sur-ce-site", label: "Sur ce site" },
];

export default function GarantieLegalePage() {
  return (
    <main className="bg-white text-[#071d2b]">
      <JsonLd data={getBreadcrumbSchema([{ name: "Accueil", url: "/" }, { name: "Garantie légale de bon fonctionnement", url: "/garantie-legale" }])} />
      <DocumentHero
        variant="conditions"
        eyebrow="Loi sur la protection du consommateur"
        titleLines={["Garantie légale", "de bon fonctionnement"]}
        intro={`Pour une thermopompe neuve achetée à compter du ${DATE} : ${ANS} à compter de la livraison. Voici ce que cela veut dire, d’après l’Office de la protection du consommateur.`}
        breadcrumbs={[{ label: "Garantie légale", href: "/garantie-legale" }]}
        toc={{ heading: "Sommaire", note: `${TOC.length} articles`, items: TOC }}
      />
      <DocumentBody variant="conditions" toc={{ heading: "Sommaire", items: TOC }}>
        <DocArticle id="de-quoi-il-sagit" n={1} title="1. De quoi il s’agit">
          <p>
            La Loi sur la protection du consommateur prévoit une garantie légale de bon fonctionnement pour plusieurs électroménagers et appareils
            électroniques neufs, dont la thermopompe. Elle s’applique au bien neuf qui fait l’objet d’un contrat de vente ou de louage à long terme entre
            un consommateur et un commerçant conclu à compter du {DATE}, peu importe la marque, la gamme ou le prix payé.
          </p>
          <p>Une thermopompe achetée avant le {DATE} n’est pas couverte par cette garantie ; les autres garanties légales continuent de s’appliquer.</p>
        </DocArticle>

        <DocArticle id="duree" n={2} title="2. Durée pour une thermopompe">
          <p>
            Pour une thermopompe neuve, la garantie de bon fonctionnement dure {ANS}. Cette durée se calcule à partir de la date de livraison du bien,
            selon les conditions de la loi.
          </p>
        </DocArticle>

        <DocArticle id="ce-quelle-couvre" n={3} title="3. Ce qu’elle couvre">
          <p>
            En cas de mauvais fonctionnement, elle prévoit la réparation gratuite du bien. Elle inclut les pièces et la main-d’œuvre nécessaires à la
            réparation.
          </p>
        </DocArticle>

        <DocArticle id="exclusions" n={4} title="4. Ce qu’elle ne couvre pas">
          <p>
            Les exclusions prévues par la loi s’appliquent, notamment les dommages qui découlent d’un usage abusif, ainsi que l’entretien normal du
            bien et le remplacement des pièces qui s’y rattache. L’Office donne cet exemple : un filtre à remplacer lors de l’entretien normal d’une
            thermopompe n’est pas couvert.
          </p>
        </DocArticle>

        <DocArticle id="a-qui-sadresser" n={5} title="5. À qui s’adresser">
          <p>Le consommateur peut s’adresser au commerçant qui a vendu le bien ou au fabricant, à son choix.</p>
        </DocArticle>

        <DocArticle id="autres-garanties" n={6} title="6. Les autres garanties">
          <p>
            Les autres garanties continuent de s’appliquer, notamment les autres garanties légales : le bien doit servir à l’usage auquel il est
            normalement destiné, pendant une durée raisonnable.
          </p>
        </DocArticle>

        <DocArticle id="sur-ce-site" n={7} title="7. Sur ce site">
          <p>
            À compter du {DATE}, la durée de la garantie de bon fonctionnement est indiquée près des prix de thermopompes neuves : fiches de modèles,
            pages de prix, comparateur, ThermoMatch et soumissions. Les fourchettes de prix restent des repères : le prix exact vient d’une soumission
            écrite (voir les <Link href="/conditions">conditions d’utilisation</Link>).
          </p>
          <p>
            Ce résumé ne remplace pas la loi ni un avis juridique. Source officielle, avec la liste complète des biens visés et leurs durées :{" "}
            <a href={config.source} target="_blank" rel="noopener noreferrer">
              Office de la protection du consommateur, garantie de bon fonctionnement
            </a>
            .
          </p>
        </DocArticle>
      </DocumentBody>
    </main>
  );
}
