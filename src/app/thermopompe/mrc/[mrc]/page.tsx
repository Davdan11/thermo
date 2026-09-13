/* ==================================================================
   Page « MRC » : toutes les municipalités d'une MRC (ou d'une
   agglomération), avec leurs chiffres publiés, les stations utilisées
   et les agrégats. Les municipalités sans page propre y sont nommées
   avec leurs données. Toutes les pages MRC sont pré-rendues.
   ================================================================== */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createMetadata, getBreadcrumbSchema, getItemListSchema } from "@/lib/seo";
import { getHubs, municipalDataDate } from "@/lib/seo/municipalites";
import { buildHubPage, MEMBER_COLUMNS } from "@/lib/seo/mrc-content";
import { JsonLd } from "@/components/seo/SeoBlocks";
import { FrostCta, FrostNearby, FrostReadouts } from "@/components/sections-v2/contenu/FrostSections";
import { FrostPlace, FrostSources, FrostTable } from "@/components/sections-v2/contenu/FrostMunicipal";
import { ThemedFaq } from "@/components/sections-v2/contenu/ThemedFaq";
import { FrostCityHero } from "@/components/heroes-v2/contenu/Frost";

export const dynamicParams = false;

export async function generateStaticParams() {
  return getHubs().map((g) => ({ mrc: g.slug as string }));
}

export async function generateMetadata({ params }: { params: Promise<{ mrc: string }> }): Promise<Metadata> {
  const { mrc } = await params;
  const p = buildHubPage(mrc);
  if (!p) return createMetadata({ title: "MRC introuvable", robots: { index: false, follow: false } });
  return createMetadata({ title: p.title, description: p.description, canonicalPath: p.path });
}

export default async function MrcPage({ params }: { params: Promise<{ mrc: string }> }) {
  const { mrc } = await params;
  const p = buildHubPage(mrc);
  if (!p) notFound();
  const date = municipalDataDate();

  return (
    <main className="frs-root" style={{ background: "#FFFFFF", color: "#0B2540" }}>
      <JsonLd
        data={[
          getBreadcrumbSchema([{ name: "Accueil", url: "/" }, ...p.breadcrumbs.map((b) => ({ name: b.label, url: b.href }))]),
          getItemListSchema({ name: `Municipalités ${p.g.kind === "MRC" ? "de la" : "de l'"} ${p.g.label}`, items: p.pages }),
        ]}
      />
      <FrostCityHero
        region={p.hero.region}
        city={p.hero.city}
        intro={p.hero.intro}
        answer={p.hero.answer}
        breadcrumbs={p.breadcrumbs}
        stats={p.hero.stats}
        designTempC={p.hero.designTempC}
        janMeanC={p.hero.janMeanC}
        janMinC={p.hero.janMinC}
        extremeMinC={p.hero.extremeMinC}
        extremeMinYear={p.hero.extremeMinYear}
        source={p.hero.source}
      />

      <FrostTable
        id="municipalites"
        eyebrow="Toutes les municipalités"
        title="Les municipalités et leurs chiffres"
        intro="Recensement de 2021 et station de référence de chaque municipalité, de la plus peuplée à la moins peuplée. Un lien mène à la page de celles qui en ont une."
        caption={`Municipalités ${p.g.kind === "MRC" ? "de la" : "de l'"} ${p.g.label}`}
        columns={MEMBER_COLUMNS}
        rows={p.members}
        footnote="« — » : valeur non publiée par Statistique Canada ou aucune station de normales à 50 km ou moins. Aucune valeur n'est estimée."
      />

      <FrostReadouts layout="instruments" id="ensemble" eyebrow="Agrégats" title="L'ensemble en chiffres" intro="Sommes et parts calculées sur les valeurs publiées de chaque municipalité." rows={p.aggRows} />
      <FrostReadouts layout="log" id="stations" eyebrow="Normales climatiques" title="Les stations utilisées" rows={p.stationRows} />

      <FrostCta />

      {p.nearHubs.length > 0 ? <FrostNearby title="MRC voisines" links={p.nearHubs} /> : null}
      <FrostPlace eyebrow="Région" title={p.region.title} text={p.region.text} href={p.region.href} linkLabel={p.region.linkLabel} />
      <ThemedFaq items={p.faq} title="Questions fréquentes" variant="frost" />
      <FrostSources items={p.sources} attribution={p.attribution} date={date} />
    </main>
  );
}
