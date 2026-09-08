/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { createMetadata, getBreadcrumbSchema, getItemListSchema } from "@/lib/seo";
import { getAllBrandStats, getBrandStats, modelsForBrandKind, type SeoKind } from "@/lib/seo/programmatic";
import { CtaThermoMatch, FaqBlock, JsonLd, ModelTable, Prose, RelatedLinks, SeoHero } from "@/components/seo/SeoBlocks";

const KINDS: Record<string, { kind: SeoKind; label: string; plural: string; intro: string }> = {
  murales: { kind: "murale", label: "murale", plural: "Thermopompes murales", intro: "sans conduits, une unité intérieure par zone" },
  centrales: { kind: "centrale", label: "centrale", plural: "Thermopompes centrales", intro: "gainables, pour les maisons avec conduits" },
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const out: Array<{ slug: string; type: string }> = [];
  for (const b of getAllBrandStats()) {
    if (b.wallCount > 0) out.push({ slug: b.slug, type: "murales" });
    if (b.centralCount > 0) out.push({ slug: b.slug, type: "centrales" });
  }
  return out;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string; type: string }> }): Promise<Metadata> {
  const { slug, type } = await params;
  const k = KINDS[type];
  const b = getBrandStats(slug);
  if (!k || !b) return createMetadata({ title: "Page introuvable" });
  const models = modelsForBrandKind(slug, k.kind);
  return createMetadata({
    title: `${k.plural} ${b.name} au Québec : ${models.length} modèles, capacité à -15 °C et subvention LogisVert`,
    description: `Toutes les thermopompes ${k.label}s ${b.name} vendues au Québec avec capacité certifiée à -15 °C, HSPF2, SEER2 et montant LogisVert officiel. Comparez et trouvez le bon calibre.`,
    canonicalPath: `/marques/${slug}/${type}`,
  });
}

export default async function BrandKindPage({ params }: { params: Promise<{ slug: string; type: string }> }) {
  const { slug, type } = await params;
  const k = KINDS[type];
  const b = getBrandStats(slug);
  if (!k || !b) notFound();
  const models = modelsForBrandKind(slug, k.kind);
  if (models.length === 0) notFound();
  const canonical = models.filter((m) => m.canonicalSlug === m.slug);
  const certified = models.filter((m) => m.h5Btu !== null);
  const capacities = [...new Set(models.map((m) => m.nominalBtu))].sort((a, z) => a - z);
  const otherType = type === "murales" ? "centrales" : "murales";
  const hasOther = type === "murales" ? b.centralCount > 0 : b.wallCount > 0;
  const maxLv = models.reduce((a, m) => Math.max(a, m.logisVertDollars), 0);

  const faq = [
    {
      question: `Quelles capacités de ${k.label}s ${b.name} existent?`,
      answer: `${b.name} offre des ${k.label}s de ${capacities[0]?.toLocaleString("fr-CA")} à ${capacities[capacities.length - 1]?.toLocaleString("fr-CA")} BTU nominaux. Le calibre à choisir dépend de la charge de chauffage de votre maison, que ThermoMatch calcule à partir de la superficie, de l'année de construction et de l'isolation.`,
    },
    {
      question: `Les ${k.label}s ${b.name} sont-elles certifiées grand froid?`,
      answer: `${models.filter((m) => m.coldClimate).length} des ${models.length} modèles ${k.label}s ${b.name} de notre base portent la certification climat froid. Le tableau indique pour chacun la capacité certifiée à -15 °C quand ENERGY STAR la publie.`,
    },
    {
      question: `Quelle subvention LogisVert pour une ${k.label} ${b.name}?`,
      answer: maxLv > 0
        ? `Jusqu'à ${maxLv.toLocaleString("fr-CA")} $ selon l'appariement, d'après la liste officielle d'Hydro-Québec. Le montant exact est affiché sur chaque fiche.`
        : `Aucun appariement ${b.name} de ce type ne figure actuellement dans la liste LogisVert d'Hydro-Québec.`,
    },
  ];

  return (
    <main className="bg-[#f8f5f0] text-[#071d2b]">
      <JsonLd
        data={[
          getBreadcrumbSchema([
            { name: "Accueil", url: "/" },
            { name: "Marques", url: "/marques" },
            { name: b.name, url: `/marques/${slug}` },
            { name: k.plural, url: `/marques/${slug}/${type}` },
          ]),
          getItemListSchema({ name: `${k.plural} ${b.name}`, items: canonical.slice(0, 50).map((m) => ({ name: `${b.name} ${m.name}`, url: `/produit/${m.canonicalSlug}` })) }),
        ]}
      />
      <SeoHero
        eyebrow={b.name}
        title={`${k.plural} ${b.name}`}
        intro={`Tous les modèles ${k.label}s ${b.name} vendus au Québec (${k.intro}), avec leurs données certifiées ENERGY STAR et le montant LogisVert officiel d'Hydro-Québec.`}
        breadcrumbs={[
          { label: "Marques", href: "/marques" },
          { label: b.name, href: `/marques/${slug}` },
          { label: k.plural, href: `/marques/${slug}/${type}` },
        ]}
        stats={[
          { label: "Modèles", value: String(models.length) },
          { label: "Machines distinctes", value: String(canonical.length) },
          { label: "Avec capacité certifiée à -15 °C", value: String(certified.length) },
          { label: "LogisVert jusqu'à", value: maxLv > 0 ? `${maxLv.toLocaleString("fr-CA")} $` : "—" },
        ]}
      />
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-12">
        <ModelTable models={models} showBrand={false} caption={`Trié par qualité des données certifiées, tenue de capacité à -15 °C, HSPF2 puis subvention. ${models.length - canonical.length > 0 ? `${models.length - canonical.length} fiches sont des variantes de machines vendues aussi sous d'autres marques.` : ""}`} />
      </section>
      <Prose>
        <h2>Choisir le bon calibre {b.name}</h2>
        <p>
          La capacité nominale (« 12 000 BTU ») est mesurée à 8 °C. Au Québec, la valeur qui compte est la capacité certifiée à -15 °C, colonne
          « À -15 °C » du tableau. Une machine surdimensionnée cycle et coûte plus cher ; une machine sous-dimensionnée laisse vos plinthes
          travailler. <Link href="/trouver-ma-thermopompe">ThermoMatch</Link> calcule votre charge et sélectionne le calibre juste, toutes marques confondues.
        </p>
      </Prose>
      <CtaThermoMatch title={`Quelle ${k.label} ${b.name} pour votre maison?`} />
      <RelatedLinks
        title={`Explorer ${b.name}`}
        links={[
          { href: `/marques/${slug}`, label: `Toute la gamme ${b.name}` },
          ...(hasOther ? [{ href: `/marques/${slug}/${otherType}`, label: `${KINDS[otherType].plural} ${b.name}` }] : []),
          ...(b.maxLogisVert > 0 ? [{ href: `/subventions/logisvert/${slug}`, label: `Subvention LogisVert ${b.name}`, hint: `jusqu'à ${b.maxLogisVert.toLocaleString("fr-CA")} $` }] : []),
          ...b.sharedWith.slice(0, 3).map((s) => ({ href: `/marques/${s.brandSlug}/${type}`, label: `${k.plural} ${s.brand}`, hint: `${s.count} machines en commun avec ${b.name}` })),
        ]}
      />
      <FaqBlock items={faq} />
    </main>
  );
}
