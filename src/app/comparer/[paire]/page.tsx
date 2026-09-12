/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { createMetadata, getBreadcrumbSchema } from "@/lib/seo";
import { getBrandPair, getBrandPairs, type BrandStats } from "@/lib/seo/programmatic";
import { CtaThermoMatch, FaqBlock, JsonLd, ModelTable, Prose, RelatedLinks, SeoHero } from "@/components/seo/SeoBlocks";
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
    title: `${p.a.name} ou ${p.b.name}? Comparatif sur données certifiées (grand froid, HSPF2, LogisVert)`,
    description: `${p.a.name} vs ${p.b.name} au Québec : capacité certifiée à -15 °C, COP, HSPF2, nombre de modèles murales et centrales, montants LogisVert. Un comparatif sans parti pris, sur les chiffres d'Hydro-Québec et ENERGY STAR.`,
    canonicalPath: `/comparer/${paire}`,
  });
}

const fmt = (n: number | null, suffix = "") => (n === null ? "—" : `${n.toLocaleString("fr-CA")}${suffix}`);

function Row({ label, a, b, better }: { label: string; a: string; b: string; better?: "a" | "b" | null }) {
  const cls = (side: "a" | "b") => (better === side ? "font-bold text-[#1b6b3a]" : "");
  return (
    <tr className="border-t border-[#f0ebe4]">
      <th scope="row" className="px-4 py-3 text-left font-medium text-[#536873]">{label}</th>
      <td className={`px-4 py-3 text-right ${cls("a")}`}>{a}</td>
      <td className={`px-4 py-3 text-right ${cls("b")}`}>{b}</td>
    </tr>
  );
}

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
    <main className="bg-[#f8f5f0] text-[#071d2b]">
      <JsonLd
        data={getBreadcrumbSchema([
          { name: "Accueil", url: "/" },
          { name: "Comparer", url: "/comparer" },
          { name: `${a.name} vs ${b.name}`, url: `/comparer/${paire}` },
        ])}
      />
      <SeoHero
        eyebrow="Comparatif de marques"
        title={`${a.name} ou ${b.name}?`}
        intro={`Comparaison des deux marques sur leurs données certifiées ENERGY STAR et les montants LogisVert d'Hydro-Québec : ${a.models.length} modèles ${a.name} contre ${b.models.length} modèles ${b.name} vendus au Québec.`}
        breadcrumbs={[
          { label: "Comparer", href: "/comparer" },
          { label: `${a.name} vs ${b.name}`, href: `/comparer/${paire}` },
        ]}
        titleLines={[a.name, `ou ${b.name}?`]}
        serif="ou"
        motif={{
          kind: "compare",
          a: { name: a.name, href: `/marques/${a.slug}`, logo: monoLogo(a.slug) },
          b: { name: b.name, href: `/marques/${b.slug}`, logo: monoLogo(b.slug) },
          shared: shared?.count,
          rows: [
            { label: "Modèles vendus au Québec", a: a.models.length, b: b.models.length },
            { label: "Certifiés climat froid", a: a.coldClimateCount, b: b.coldClimateCount, better: true },
            { label: "COP moyen à −15 °C", a: a.avgCop5, b: b.avgCop5, decimals: 2, better: true },
            { label: "HSPF2 moyen", a: a.avgHspf2, b: b.avgHspf2, decimals: 2, better: true },
            { label: "LogisVert maximum", a: a.maxLogisVert > 0 ? a.maxLogisVert : null, b: b.maxLogisVert > 0 ? b.maxLogisVert : null, suffix: " $", better: true },
          ],
        }}
      />
      <section className="mx-auto max-w-4xl px-5 sm:px-8 py-12">
        <div className="overflow-x-auto rounded-xl border border-[#e4ddd5] bg-white">
          <table className="w-full text-sm">
            <thead className="bg-[#f8f5f0] text-[11px] uppercase tracking-wider text-[#536873]">
              <tr>
                <th className="px-4 py-3 text-left">Critère</th>
                <th className="px-4 py-3 text-right"><Link href={`/marques/${a.slug}`} className="hover:text-[#e54b17]">{a.name}</Link></th>
                <th className="px-4 py-3 text-right"><Link href={`/marques/${b.slug}`} className="hover:text-[#e54b17]">{b.name}</Link></th>
              </tr>
            </thead>
            <tbody>
              <Row label="Modèles vendus au Québec" a={String(a.models.length)} b={String(b.models.length)} />
              <Row label="Murales / centrales" a={`${a.wallCount} / ${a.centralCount}`} b={`${b.wallCount} / ${b.centralCount}`} />
              <Row label="Certifiés climat froid" a={String(a.coldClimateCount)} b={String(b.coldClimateCount)} better={cmp(a.coldClimateCount, b.coldClimateCount)} />
              <Row label="HSPF2 moyen" a={fmt(a.avgHspf2)} b={fmt(b.avgHspf2)} better={cmp(a.avgHspf2, b.avgHspf2)} />
              <Row label="HSPF2 maximum" a={fmt(a.maxHspf2)} b={fmt(b.maxHspf2)} better={cmp(a.maxHspf2, b.maxHspf2)} />
              <Row label="COP moyen à -15 °C" a={fmt(a.avgCop5)} b={fmt(b.avgCop5)} better={cmp(a.avgCop5, b.avgCop5)} />
              <Row label="LogisVert maximum" a={fmt(a.maxLogisVert, " $")} b={fmt(b.maxLogisVert, " $")} better={cmp(a.maxLogisVert, b.maxLogisVert)} />
              <Row label="Capacités offertes" a={`${a.capacities[0]?.toLocaleString("fr-CA")} à ${a.capacities[a.capacities.length - 1]?.toLocaleString("fr-CA")} BTU`} b={`${b.capacities[0]?.toLocaleString("fr-CA")} à ${b.capacities[b.capacities.length - 1]?.toLocaleString("fr-CA")} BTU`} />
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-[12px] text-[#8a989e]">Moyennes calculées sur les modèles dont ENERGY STAR publie la valeur. En vert : l'avantage sur le critère.</p>
      </section>
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h2 className="text-[22px] font-bold text-[#172126] mb-3">Top 5 {a.name} par COP à -15 °C</h2>
          <ModelTable models={bestOf(a)} showBrand={false} showRank />
        </div>
        <div>
          <h2 className="text-[22px] font-bold text-[#172126] mb-3">Top 5 {b.name} par COP à -15 °C</h2>
          <ModelTable models={bestOf(b)} showBrand={false} showRank />
        </div>
      </section>
      <Prose>
        <h2>Ce que ce comparatif ne dit pas</h2>
        <p>
          Le prix installé, la garantie réellement honorée et la qualité de l'installateur pèsent autant que les chiffres. Ce comparatif se limite aux
          données certifiées ; il ne remplace pas une soumission. Pour savoir laquelle de ces marques a le modèle le mieux calibré pour votre maison,
          lancez <Link href="/trouver-ma-thermopompe">ThermoMatch</Link> : il compare {a.name}, {b.name} et toutes les autres marques sur votre charge réelle.
        </p>
      </Prose>
      <CtaThermoMatch />
      <RelatedLinks title="Autres comparatifs" links={getBrandPairs().filter((x) => x.slug !== paire).slice(0, 9).map((x) => ({ href: `/comparer/${x.slug}`, label: `${x.a.name} ou ${x.b.name}?` }))} />
      <FaqBlock items={faq} />
    </main>
  );
}
