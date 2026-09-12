import type { Metadata } from "next";
import Link from "next/link";
import { CtaThermoMatch, FaqBlock, JsonLd, RelatedLinks, TrustStrip } from "@/components/seo/SeoBlocks";
import { LineHero } from "@/components/heroes-v2/contenu/LineHero";
import { SITE_URL, getBreadcrumbSchema } from "@/lib/seo";
import { getEligibleModelCount } from "@/lib/data/queries/stats";
import logisvertMetadata from "@/lib/subsidies/logisvert-metadata.json";

export const metadata: Metadata = {
  title: "Comment ça marche",
  description:
    "De la question à l'installation : comment Thermopompes À Vendre.ca compare toutes les marques avec les données d'Hydro-Québec, propose trois machines, puis confie l'installation à un entrepreneur licencié RBQ.",
  alternates: { canonical: "/comment-ca-marche" },
  robots: { index: true, follow: true },
};

const STEPS = [
  {
    n: "01",
    title: "Vous décrivez votre maison",
    text: "Treize questions, deux minutes : superficie, étages, année de construction, isolation, fenestration, système de chauffage actuel, budget et priorités. Pas de numéro de téléphone demandé à cette étape.",
    href: "/trouver-ma-thermopompe",
    link: "Lancer ThermoMatch",
  },
  {
    n: "02",
    title: "ThermoMatch calcule la charge et compare tout le catalogue",
    text: "Le moteur estime la puissance de chauffage nécessaire, puis évalue chaque machine sur sa capacité certifiée à -15 °C, son rendement (HSPF2, COP au froid), sa subvention LogisVert et votre budget. Toutes les marques sont traitées de la même façon.",
    href: "/technologie-thermomatch",
    link: "Voir la méthode",
  },
  {
    n: "03",
    title: "Vous recevez trois machines vraiment différentes",
    text: "Pas une liste de cent modèles : trois fiches, chacune avec ses chiffres certifiés, son montant LogisVert officiel et les raisons du choix. Vous pouvez les comparer côte à côte et lire la fiche complète.",
    href: "/comparer",
    link: "Comparer des modèles",
  },
  {
    n: "04",
    title: "Vous demandez une soumission",
    text: "Une seule demande, sans engagement. Nous validons la faisabilité (accès, électricité, emplacement de l'unité) et nous préparons une proposition claire avec l'équipement, l'installation et la subvention applicable.",
    href: "/soumission",
    link: "Demander une soumission",
  },
  {
    n: "05",
    title: "Un installateur licencié RBQ réalise les travaux",
    text: "Nous ne vendons pas vos coordonnées. L'installation est confiée à un entrepreneur partenaire licencié, qui confirme le calcul de charge sur place (norme CSA F280) avant de poser l'appareil.",
    href: "/partenaires",
    link: "Notre réseau d'installateurs",
  },
  {
    n: "06",
    title: "Vous touchez la subvention LogisVert",
    text: "Le montant dépend du jumelage exact (unité extérieure + intérieure) inscrit sur la liste d'Hydro-Québec. Il est affiché sur chaque fiche et mis à jour automatiquement à partir de la liste officielle.",
    href: "/subventions/logisvert",
    link: "Montants par marque",
  },
];

const FAQ = [
  {
    question: "Est-ce que le service est gratuit?",
    answer: "Oui. ThermoMatch, le comparateur, les fiches et la demande de soumission sont gratuits et sans engagement. Nous sommes rémunérés sur l'installation réalisée, jamais en vendant vos coordonnées.",
  },
  {
    question: "D'où viennent les chiffres affichés?",
    answer: "De la liste officielle des appareils admissibles à LogisVert publiée par Hydro-Québec, enrichie des données ENERGY STAR (capacité à -15 °C, COP, SEER2, HSPF2). Rien n'est saisi à la main, et une valeur inconnue est affichée comme telle.",
  },
  {
    question: "Pourquoi seulement trois machines?",
    answer: "Parce qu'un choix se fait entre quelques options réellement comparables, pas dans un catalogue de milliers de fiches. Les trois machines proposées sont distinctes (série, capacité ou prix) et chacune est justifiée.",
  },
  {
    question: "Qui installe la thermopompe?",
    answer: "Un entrepreneur partenaire titulaire d'une licence RBQ valide, dans votre région. C'est lui qui signe le contrat d'installation et qui garantit les travaux.",
  },
  {
    question: "Est-ce que ma ville change la recommandation?",
    answer: "Non. Tout le Québec exige une machine performante par grand froid ; le dimensionnement dépend de votre maison (superficie, isolation, étages), pas du code postal. Le code postal sert seulement à vous situer pour l'installateur.",
  },
];

export default function CommentCaMarchePage() {
  const count = getEligibleModelCount();
  const updated = new Date(logisvertMetadata.updatedAt).toLocaleDateString("fr-CA", { year: "numeric", month: "long", day: "numeric" });
  const breadcrumbs = [{ label: "Comment ça marche", href: "/comment-ca-marche" }];
  return (
    <main>
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: "Accueil", url: SITE_URL },
            { name: "Comment ça marche", url: `${SITE_URL}/comment-ca-marche` },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Trouver et faire installer la bonne thermopompe au Québec",
            step: STEPS.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.title, text: s.text, url: `${SITE_URL}${s.href}` })),
          },
        ]}
      />
      {/* Héros « La ligne » : les six étapes sur une piste que le défilement fait avancer. */}
      <LineHero
        eyebrow="Comment ça marche"
        breadcrumbs={breadcrumbs}
        lines={["De la question", "à l'installation,", "sans vendre vos coordonnées."]}
        intro="Vous répondez à des questions sur votre maison, ThermoMatch compare toutes les marques avec les données certifiées d'Hydro-Québec, et un installateur licencié réalise les travaux. Voici chaque étape, et ce qu'elle garantit."
        caption="Le parcours, étape par étape"
        steps={STEPS}
        stats={[
          { label: "Fiches comparées", value: count.toLocaleString("fr-CA") },
          { label: "Marques", value: "toutes, sans parti pris" },
          { label: "Liste LogisVert", value: `mise à jour le ${updated}` },
        ]}
      />
      <TrustStrip />

      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-16">
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-[#e4ddd5] border border-[#e4ddd5]">
          {STEPS.map((s) => (
            <li key={s.n} className="bg-white p-8 flex flex-col">
              <span className="text-[13px] font-bold tracking-[0.2em] text-[var(--color-accent)] mb-3">{s.n}</span>
              <h2 className="text-[22px] font-bold text-[#172126] mb-3 leading-snug">{s.title}</h2>
              <p className="text-[15px] text-[#3f4a52] leading-relaxed mb-5">{s.text}</p>
              <Link href={s.href} className="mt-auto text-sm font-bold text-[var(--color-accent)] hover:opacity-80 transition-opacity">
                {s.link} →
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-[#0C1821] text-white">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-3">Ce que nous ne faisons pas</h2>
            <p className="text-white/75 leading-relaxed">Nous ne vendons pas de listes de contacts, nous n'affichons aucun avis sponsorisé et nous n'inventons aucun prix : quand une donnée manque, la fiche le dit.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-3">Ce qui est vérifié</h2>
            <p className="text-white/75 leading-relaxed">Chaque montant LogisVert vient du jumelage certifié AHRI de la liste d'Hydro-Québec. Chaque capacité au froid vient d'ENERGY STAR. Les sources sont affichées au bas de chaque fiche.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-3">Ce qui reste à vous</h2>
            <p className="text-white/75 leading-relaxed">La décision. Vous pouvez modifier vos réponses, comparer d'autres modèles et refuser la proposition. Le calcul de charge final est confirmé sur place par l'installateur.</p>
          </div>
        </div>
      </section>

      <FaqBlock items={FAQ} />
      <CtaThermoMatch />
      <RelatedLinks
        title="Pour aller plus loin"
        links={[
          { href: "/technologie-thermomatch", label: "La méthode ThermoMatch", hint: "Charge, score, sélection" },
          { href: "/guides", label: "Guides et conseils", hint: "Bien choisir, prix, subventions" },
          { href: "/a-propos", label: "À propos", hint: "Qui nous sommes" },
          { href: "/faq", label: "Questions fréquentes", hint: "Réponses détaillées" },
        ]}
      />
    </main>
  );
}
