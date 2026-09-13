import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { DictionaryHero, type DictLetter, type DictTerm } from "@/components/heroes-v2/contenu/DictionaryHero";
import { typo } from "@/components/content-hero/typo";
import { fraunces } from "@/components/heroes-v2/contenu/fonts";
import { GLOSSARY_TERMS, slugifyTerm } from "@/lib/glossary";
import { DictionaryBody, DictionaryEnd, type DictGroup } from "@/components/sections-v2/contenu/DictionarySections";

export const metadata: Metadata = createMetadata({
  title: `Glossaire thermopompe : SEER2, HSPF2, COP, BTU`,
  description:
    `Le dictionnaire complet du CVAC au Québec. Des définitions exhaustives pour SEER2, HSPF2, Inverter, BTU, COP, Plénum, et bien plus.`,
  canonicalPath: "/glossaire",
  robots: { index: true, follow: true },
  openGraph: { title: "Glossaire de la thermopompe", description: "Définitions claires des termes du chauffage et de la climatisation au Québec." },
});

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

