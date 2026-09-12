/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { createMetadata, fitTitle, getBreadcrumbSchema } from "@/lib/seo";
import { getBrandPair, getBrandPairs, type BrandStats } from "@/lib/seo/programmatic";
import { JsonLd } from "@/components/seo/SeoBlocks";
import { getFaqPageSchema } from "@/lib/seo";
import { posterFont } from "@/components/heroes-v2/produit/fonts-poster";
import { MotionRoot } from "@/components/sections-v2/catalogue/motion";
import { PosterBouts, PosterCta, PosterFaq, PosterProse, PosterTape, PosterTopModels, PosterTrust } from "@/components/sections-v2/catalogue/PosterSections";
import { AfficheCombat } from "@/components/heroes-v2/produit/AfficheCombat";
import { monoLogo } from "@/components/seo/hero/assets";

export const dynamicParams = false;

export async function generateStaticParams() {
  return getBrandPairs().map((p) => ({ paire: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ paire: string }> }): Promise<Metadata> {
  const { paire } = await params;
  const p = getBrandPair(paire);
  if (!p) return createMetadata({ title: "Comparaison introuvable" });
  return createMetadata({
    title: fitTitle(`${p.a.name} ou ${p.b.name}? Comparatif sur données certifiées`, `${p.a.name} ou ${p.b.name} : comparatif thermopompes`, `${p.a.name} ou ${p.b.name} : comparatif`, `${p.a.name} ou ${p.b.name}?`),
    description: `${p.a.name} vs ${p.b.name} au Québec : capacité certifiée à -15 °C, COP, HSPF2, nombre de modèles murales et centrales, montants LogisVert. Un comparatif sans parti pris, sur les chiffres d'Hydro-Québec et ENERGY STAR.`,
    canonicalPath: `/comparer/${paire}`,
  });
}

const fmt = (n: number | null, suffix = "") => (n === null ? "—" : `${n.toLocaleString("fr-CA")}${suffix}`);

function cmp(x: number | null, y: number | null, higherIsBetter = true): "a" | "b" | null {
  if (x === null || y === null || x === y) return null;
  return (x > y) === higherIsBetter ? "a" : "b";
}

export default async function BrandPairPage({ params }: { params: Promise<{ paire: string }> }) {
  const { paire } = await params;
  const p = getBrandPair(paire);
  if (!p) notFound();
  const { a, b } = p;
  const bestOf = (s: BrandStats) => s.canonicalModels.slice().sort((x, y) => (y.cop5 ?? 0) - (x.cop5 ?? 0)).filter((m) => m.cop5 !== null).slice(0, 5);
  const shared = a.sharedWith.find((s) => s.brandSlug === b.slug);

  const faq = [
    {
      question: `${a.name} ou ${b.name} : laquelle est la plus efficace en chauffage?`,
      answer: `Sur le HSPF2 moyen des modèles certifiés, ${a.avgHspf2 !== null && b.avgHspf2 !== null ? (a.avgHspf2 > b.avgHspf2 ? a.name : b.avgHspf2 > a.avgHspf2 ? b.name : "les deux marques font jeu égal") : "les données sont incomplètes"} (${fmt(a.avgHspf2)} contre ${fmt(b.avgHspf2)}). Le meilleur modèle individuel de chaque marque compte davantage que la moyenne : ${a.bestEfficiency ? `${a.name} ${a.bestEfficiency.name} atteint ${fmt(a.bestEfficiency.hspf2)}` : ""}${b.bestEfficiency ? `, ${b.name} ${b.bestEfficiency.name} atteint ${fmt(b.bestEfficiency.hspf2)}` : ""}.`,
    },
    {
      question: `Laquelle chauffe le mieux par grand froid?`,
      answer: `Sur le COP moyen certifié à -15 °C : ${a.name} ${fmt(a.avgCop5)} contre ${b.name} ${fmt(b.avgCop5)}. ${a.name} compte ${a.coldClimateCount} modèles certifiés climat froid, ${b.name} en compte ${b.coldClimateCount}.`,
    },
    {
      question: `Quelle marque donne droit à la plus grosse subvention LogisVert?`,
      answer: `Le maximum LogisVert observé est de ${fmt(a.maxLogisVert, " $")} chez ${a.name} et de ${fmt(b.maxLogisVert, " $")} chez ${b.name}. Le montant dépend de l'appariement, pas de la marque : deux modèles d'une même marque peuvent recevoir des montants très différents.`,
    },
    ...(shared
      ? [{
          question: `${a.name} et ${b.name} vendent-elles les mêmes machines?`,
          answer: `Oui, en partie : ${shared.count} machines de notre base sont identiques (mêmes données certifiées) chez ${a.name} et ${b.name}. Elles sont probablement fabriquées par le même usinier et rebadgées. Dans ce cas, comparez le prix installé et la garantie plutôt que la performance.`,
        }]
      : []),
  ];

  return (
    <main className="bg-black text-white">
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Accueil", url: "/" },
          { name: "Comparer", url: "/comparer" },
          { name: `${a.name} vs ${b.name}`, url: `/comparer/${paire}` },
        ])}
      />
      <AfficheCombat
        eyebrow="Comparatif de marques"
        intro={`Thermopompes À Vendre compare les deux marques sur leurs données certifiées ENERGY STAR et les montants LogisVert d'Hydro-Québec : ${a.models.length} modèles ${a.name} contre ${b.models.length} modèles ${b.name} vendus au Québec.`}
        crumbs={[
          { label: "Comparer", href: "/comparer" },
          { label: `${a.name} vs ${b.name}`, href: `/comparer/${paire}` },
        ]}
        a={{ name: a.name, href: `/marques/${a.slug}`, logo: monoLogo(a.slug) }}
        b={{ name: b.name, href: `/marques/${b.slug}`, logo: monoLogo(b.slug) }}
        shared={shared?.count}
        rows={[
          { label: "Modèles vendus au Québec", a: a.models.length, b: b.models.length },
          { label: "Certifiés climat froid", a: a.coldClimateCount, b: b.coldClimateCount, better: true },
          { label: "COP moyen à −15 °C", a: a.avgCop5, b: b.avgCop5, decimals: 2, better: true },
          { label: "HSPF2 moyen", a: a.avgHspf2, b: b.avgHspf2, decimals: 2, better: true },
          { label: "LogisVert maximum", a: a.maxLogisVert > 0 ? a.maxLogisVert : null, b: b.maxLogisVert > 0 ? b.maxLogisVert : null, suffix: " $", better: true },
        ]}
      />
      <MotionRoot className={`cmpp-root ${posterFont.variable}`}>
        <PosterTrust />
        <PosterTape
          a={{ name: a.name, href: `/marques/${a.slug}` }}
          b={{ name: b.name, href: `/marques/${b.slug}` }}
          note="Moyennes calculées sur les modèles dont ENERGY STAR publie la valeur. En orange : l'avantage sur le critère."
          rows={[
            { label: "Modèles vendus au Québec", a: a.models.length, b: b.models.length },
            { label: "Murales / centrales", a: null, b: null, text: [`${a.wallCount} / ${a.centralCount}`, `${b.wallCount} / ${b.centralCount}`] },
            { label: "Certifiés climat froid", a: a.coldClimateCount, b: b.coldClimateCount, better: cmp(a.coldClimateCount, b.coldClimateCount) },
            { label: "HSPF2 moyen", a: a.avgHspf2, b: b.avgHspf2, better: cmp(a.avgHspf2, b.avgHspf2) },
            { label: "HSPF2 maximum", a: a.maxHspf2, b: b.maxHspf2, better: cmp(a.maxHspf2, b.maxHspf2) },
            { label: "COP moyen à -15 °C", a: a.avgCop5, b: b.avgCop5, better: cmp(a.avgCop5, b.avgCop5) },
            { label: "LogisVert maximum", a: a.maxLogisVert, b: b.maxLogisVert, suffix: " $", better: cmp(a.maxLogisVert, b.maxLogisVert) },
            {
              label: "Capacités offertes",
              a: null,
              b: null,
              text: [
                `${a.capacities[0]?.toLocaleString("fr-CA")} à ${a.capacities[a.capacities.length - 1]?.toLocaleString("fr-CA")} BTU`,
                `${b.capacities[0]?.toLocaleString("fr-CA")} à ${b.capacities[b.capacities.length - 1]?.toLocaleString("fr-CA")} BTU`,
              ],
            },
          ]}
        />
        <PosterTopModels round={2} tone="black" title={`Top 5 ${a.name} par COP à -15 °C`} models={bestOf(a)} />
        <PosterTopModels tone="orange" title={`Top 5 ${b.name} par COP à -15 °C`} models={bestOf(b)} />
        <PosterProse>
          <h2>Ce que ce comparatif ne dit pas</h2>
          <p>
            Le prix installé, la garantie réellement honorée et la qualité de l’installateur pèsent autant que les chiffres. Ce comparatif se limite aux
            données certifiées ; il ne remplace pas une soumission. Pour savoir laquelle de ces marques a le modèle le mieux calibré pour votre maison,
            lancez <Link href="/trouver-ma-thermopompe">ThermoMatch</Link> : il compare {a.name}, {b.name} et toutes les autres marques sur votre charge réelle.
          </p>
        </PosterProse>
        <PosterCta />
        <PosterBouts title="Autres comparatifs" links={getBrandPairs().filter((x) => x.slug !== paire).slice(0, 9).map((x) => ({ href: `/comparer/${x.slug}`, label: `${x.a.name} ou ${x.b.name}?` }))} />
        <JsonLd data={getFaqPageSchema(faq)} />
        <PosterFaq items={faq} />
      </MotionRoot>
    </main>
  );
}
