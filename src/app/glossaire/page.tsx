import type { Metadata } from "next";
import { DictionaryHero, type DictLetter, type DictTerm } from "@/components/heroes-v2/contenu/DictionaryHero";
import { typo } from "@/components/content-hero/typo";
import { fraunces } from "@/components/heroes-v2/contenu/fonts";
import { DictionaryBody, DictionaryEnd, type DictGroup } from "@/components/sections-v2/contenu/DictionarySections";

export const metadata: Metadata = {
  title: "Glossaire de la thermopompe : SEER2, HSPF2, COP, Inverter, LogisVert expliqués",
  description: "Le dictionnaire complet du CVAC au Québec. Des définitions exhaustives pour SEER2, HSPF2, Inverter, BTU, COP, Plénum, et bien plus.",
  alternates: { canonical: "/glossaire" },
  openGraph: { title: "Glossaire de la thermopompe", description: "Définitions claires des termes du chauffage et de la climatisation au Québec.", type: "website" },
  robots: { index: true, follow: true },
};


function slugifyTerm(term: string): string {
  return term
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\(.*?\)/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

const GLOSSARY_TERMS = [
  { term: "AHRI (Air-Conditioning, Heating, and Refrigeration Institute)", definition: "Un organisme indépendant qui certifie les performances (BTU, SEER2, HSPF2) des équipements de chauffage et de climatisation. Un numéro de certification AHRI est indispensable pour prouver l'efficacité d'un système lors d'une demande de subvention gouvernementale." },
  { term: "Air pulsé (ou air soufflé)", definition: "Un système de distribution (utilisé par les thermopompes centrales ou les fournaises) qui propulse l'air conditionné dans un réseau de conduits (gaines) dissimulés dans les murs et les planchers pour chauffer ou climatiser chaque pièce de manière uniforme." },
  { term: "Appoint électrique (Élément chauffant)", definition: "Des résistances électriques ajoutées à un système central, ou les plinthes électriques de votre maison, qui prennent le relais de la thermopompe lorsque la température extérieure chute sous la limite de fonctionnement efficace de l'appareil (souvent sous les -25°C)." },
  { term: "Biénergie", definition: "Un système hybride qui combine une thermopompe électrique (pour chauffer la majorité du temps) et une fournaise au gaz naturel, au mazout ou au propane (pour les jours de très grand froid). Au Québec, Hydro-Québec encourage ce système avec un tarif préférentiel (Tarif DT)." },
  { term: "BTU (British Thermal Unit)", definition: "L'unité de mesure standard de la capacité thermique. Elle représente la quantité de chaleur nécessaire pour élever la température d'une livre d'eau d'un degré Fahrenheit. Pour les thermopompes, cela indique la 'puissance' de l'appareil (ex: 12 000 BTU, ce qui correspond à une tonne de réfrigération)." },
  { term: "Climat froid (Cold Climate / Hyper Heat)", definition: "Une certification (ou appellation commerciale) désignant les thermopompes conçues avec un compresseur spécial (souvent à injection de vapeur) capable de chauffer efficacement même à -25°C ou -30°C, une caractéristique cruciale pour les hivers québécois." },
  { term: "Compresseur", definition: "Le cœur de la thermopompe, situé dans l'unité extérieure. Son rôle est de comprimer le gaz réfrigérant, ce qui augmente sa température et sa pression, permettant ainsi le transfert de la chaleur captée à l'extérieur vers l'intérieur de la maison." },
  { term: "Compresseur Rotatif / Twin Rotary", definition: "Un type de compresseur moderne, plus silencieux et générant moins de vibrations que les anciens modèles à piston. Les modèles 'Twin Rotary' (double rotor) offrent une stabilité et une efficacité exceptionnelles à basse vitesse." },
  { term: "COP (Coefficient de Performance)", definition: "Le ratio entre l'énergie thermique produite et l'électricité consommée à un moment précis. Un COP de 3.0 signifie que pour 1 watt d'électricité payé, la thermopompe génère 3 watts de chaleur. (Contrairement à une plinthe électrique qui a toujours un COP de 1.0)." },
  { term: "Cycle inversé", definition: "La technologie fondamentale d'une thermopompe. Contrairement à un climatiseur standard qui ne peut que refroidir, une thermopompe possède une valve d'inversion qui lui permet d'inverser le flux du réfrigérant pour soit extraire la chaleur de la maison (climatiser), soit extraire la chaleur de l'extérieur pour l'amener à l'intérieur (chauffer)." },
  { term: "Dégivrage (Defrost)", definition: "Un cycle automatique indispensable en hiver. La condensation gèle sur le serpentin extérieur de la thermopompe. L'appareil détecte cette accumulation et inverse brièvement son cycle pour envoyer de la chaleur à l'extérieur afin de faire fondre la glace. Ce processus génère souvent de la vapeur d'eau visible." },
  { term: "ENERGY STAR®", definition: "Un programme gouvernemental certifiant les produits à haute efficacité énergétique. Les thermopompes certifiées ENERGY STAR respectent des critères rigoureux et sont souvent prérequises pour l'obtention de subventions provinciales et fédérales." },
  { term: "Filtre HEPA / Filtre plissé", definition: "Les filtres insérés dans l'unité intérieure (ou la fournaise). Ils capturent la poussière, le pollen et parfois les bactéries. Un filtre encrassé réduit drastiquement l'efficacité de la thermopompe et peut endommager le compresseur à long terme." },
  { term: "HSPF2 (Heating Seasonal Performance Factor)", definition: "Le coefficient de performance saisonnier en période de chauffage (la nouvelle norme de 2023). Contrairement au COP (mesuré à une température fixe), le HSPF2 calcule l'efficacité sur toute la saison froide. Plus ce chiffre est élevé, plus vos économies d'électricité seront importantes l'hiver." },
  { term: "Inverter (Technologie Vitesse Variable)", definition: "Une technologie électronique permettant au compresseur de varier sa vitesse (de 10% à 100%) au lieu de fonctionner en mode 'Tout ou Rien' (On/Off). Cela maintient une température ambiante stable, réduit le bruit, élimine les pics de consommation électrique au démarrage et augmente la durée de vie." },
  { term: "LogisVert", definition: "Le principal programme de subvention actuel géré par Hydro-Québec, offrant des aides financières allant jusqu'à plusieurs milliers de dollars pour l'installation de thermopompes efficaces, afin de soulager le réseau électrique en période de pointe hivernale." },
  { term: "Multizone (Multi-split)", definition: "Un système composé d'une seule unité extérieure (le condenseur) reliée à deux, trois, quatre ou même huit unités intérieures (murales, cassettes ou consoles). Cela permet de chauffer différentes pièces ou étages de façon indépendante, parfait pour les maisons sans conduits d'air." },
  { term: "Plénum", definition: "Dans un système central, le plénum est le gros boîtier de tôle situé juste au-dessus ou à côté de la fournaise/traitement d'air. Il sert de point de distribution principal d'où partent tous les conduits de ventilation vers les pièces de la maison." },
  { term: "Réfrigérant (R-410A vs R-32)", definition: "Le fluide chimique qui circule entre l'unité extérieure et intérieure. Il a la capacité de bouillir à de très basses températures pour absorber la chaleur. Le R-410A est en voie de disparition, remplacé par le R-32 qui a un potentiel de réchauffement planétaire (PRP) beaucoup plus bas et une meilleure efficacité thermique." },
  { term: "SEER2 (Seasonal Energy Efficiency Ratio)", definition: "Le ratio d'efficacité énergétique saisonnier en période de climatisation (norme 2023). Il divise la capacité de refroidissement par l'énergie consommée durant toute la saison chaude. Plus le SEER2 est élevé, moins la thermopompe vous coûtera cher en électricité durant l'été." },
  { term: "Serpentin Évaporateur / Condenseur (Coil)", definition: "L'échangeur de chaleur composé d'un réseau complexe de tubes de cuivre (ou aluminium) traversant de multiples ailettes métalliques minces. L'air de la maison ou de l'extérieur est soufflé à travers ces ailettes pour échanger sa chaleur avec le réfrigérant circulant dans les tubes." },
  { term: "Thermopompe centrale", definition: "Un système conçu pour les maisons équipées de conduits de ventilation. Il remplace ou s'ajoute à une fournaise existante. L'unité intérieure (le traitement d'air) propulse l'air chaud ou froid dans toute la maison via les conduits." },
  { term: "Thermopompe murale (Mini-split)", definition: "Un système 'sans conduits' (ductless). L'unité intérieure est généralement fixée au mur, près du plafond. C'est la solution la plus populaire et la plus abordable au Québec pour les maisons (ou condos) actuellement chauffés avec des plinthes électriques." },
  { term: "Tonne de réfrigération", definition: "Une autre façon de mesurer la capacité (très utilisée par les professionnels). Une tonne équivaut à 12 000 BTU/h. L'origine du terme provient de la quantité de chaleur requise pour faire fondre une tonne de glace en 24 heures. Un système de 3 tonnes correspond donc à 36 000 BTU." }
];

export default function GlossairePage() {
  const sortedTerms = [...GLOSSARY_TERMS].sort((a, b) => a.term.localeCompare(b.term));

  // Group by first letter
  const grouped: Record<string, typeof sortedTerms> = {};
  sortedTerms.forEach(item => {
    // Normalisation pour enlever les accents et gérer les caractères spéciaux
    const firstChar = item.term.charAt(0).toUpperCase();
    const letter = firstChar.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    if (!grouped[letter]) grouped[letter] = [];
    grouped[letter].push(item);
  });

  // Héros : toutes les entrées (vraies définitions) et, pour chaque lettre, son premier terme et son nombre de termes.
  const dictTerms: DictTerm[] = sortedTerms.map((t) => ({ term: typo(t.term), slug: slugifyTerm(t.term), definition: typo(t.definition) }));
  const dictLetters: DictLetter[] = Object.keys(grouped)
    .sort()
    .map((letter) => ({ letter, slug: slugifyTerm(grouped[letter][0].term), count: grouped[letter].length }));
  // Corps du dictionnaire : mêmes termes, mêmes définitions, mêmes ancres (slugifyTerm) que l'ancienne liste.
  const dictGroups: DictGroup[] = Object.keys(grouped)
    .sort()
    .map((letter) => ({ letter, items: grouped[letter].map((item) => ({ term: item.term, slug: slugifyTerm(item.term), definition: item.definition })) }));

  return (
    <main className={`dxs-root cs-sticky-root ${fraunces.variable}`} style={{ fontFamily: "var(--font-sans)", colorScheme: "light", backgroundColor: "#FBFAF6", color: "#1A1714", minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "DefinedTermSet",
            name: "Glossaire de la thermopompe",
            inLanguage: "fr-CA",
            hasDefinedTerm: sortedTerms.map((t) => ({
              "@type": "DefinedTerm",
              name: t.term,
              description: t.definition,
              url: `https://thermopompesavendre.ca/glossaire#${slugifyTerm(t.term)}`,
            })),
          }),
        }}
      />
      
      {/* ── HÉROS : une entrée de dictionnaire qui tourne comme une page, ruban A–Z ── */}
      <DictionaryHero terms={dictTerms} letters={dictLetters} termCount={sortedTerms.length} />

      {/* ── LEXIQUE : pages de dictionnaire, lettre par lettre (titres courants, onglets de pouce) ── */}
      <section id="lexique" style={{ padding: "clamp(40px, 5vw, 72px) clamp(20px, 4vw, 48px) clamp(64px, 8vw, 110px)", backgroundColor: "#FBFAF6", scrollMarginTop: 72 }}>
        <div className="mx-auto max-w-[1440px]">
          <DictionaryBody groups={dictGroups} />
          <DictionaryEnd />
        </div>
      </section>
    </main>
  );
}

