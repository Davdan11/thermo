/* ==================================================================
   Rendu de la page « municipalité » (gabarit unique, textes construits
   par src/lib/seo/municipal-content.ts à partir des données de la
   municipalité). Composant serveur : seules les sections animées
   (composants clients) reçoivent leurs textes, jamais le jeu complet.
   ================================================================== */
import Link from "next/link";
import { FrostCityHero } from "@/components/heroes-v2/contenu/Frost";
import { FrostCta, FrostHead, FrostReadouts } from "@/components/sections-v2/contenu/FrostSections";
import { FrostPeriods, FrostPlace, FrostSources, FrostTable } from "@/components/sections-v2/contenu/FrostMunicipal";
import { MT_FROST, ThemedModelTable } from "@/components/sections-v2/contenu/ThemedModelTable";
import { ThemedFaq } from "@/components/sections-v2/contenu/ThemedFaq";
import { JsonLd } from "@/components/seo/SeoBlocks";
import { getBreadcrumbSchema, getServiceSchema, SITE_URL } from "@/lib/seo";
import { NEIGHBOUR_COLUMNS, type MunicipalPage } from "@/lib/seo/municipal-content";
import { rankingFor } from "@/lib/seo/municipal-catalogue";
import { municipalDataDate } from "@/lib/seo/municipalites";
import type { SeoModel } from "@/lib/seo/programmatic";

export function MunicipalityView({ p }: { p: MunicipalPage }) {
  const ranking = rankingFor(p.ranking.slug);
  const s = p.station;
  const date = municipalDataDate();
  const jsonLd = [
    getBreadcrumbSchema([{ name: "Accueil", url: "/" }, ...p.breadcrumbs.map((b) => ({ name: b.label, url: b.href }))]),
    getServiceSchema({
      name: `Comparaison et sélection de thermopompes à ${p.name}`,
      description: `Comparaison neutre des thermopompes vendues au Québec, avec données certifiées, montants LogisVert et normales climatiques de la station ${s.name}, pour les résidents de ${p.name}.`,
      serviceType: "Sélection de thermopompe",
      areaServed: `${p.name}, Québec`,
      url: `${SITE_URL}${p.path}`,
    }),
  ];

  return (
    <main className="frs-root" style={{ background: "#FFFFFF", color: "#0B2540" }}>
      <JsonLd data={jsonLd} />
      <FrostCityHero
        region={p.hero.region}
        city={p.name}
        intro={p.hero.intro}
        answer={p.hero.answer}
        breadcrumbs={p.breadcrumbs}
        stats={p.hero.stats}
        designTempC={p.design && !p.design.generic ? p.design.t : null}
        janMeanC={s.janMeanC}
        janMinC={s.janMinC}
        extremeMinC={s.extremeMinC}
        extremeMinYear={s.extremeMinYear}
        source={p.hero.source}
      />

      <FrostReadouts layout="instruments" id="climat" eyebrow={p.climate.eyebrow} title={p.climate.title} rows={p.climate.rows} />
      <FrostReadouts layout="log" id="capacite" eyebrow={p.sizing.eyebrow} title={p.sizing.title} rows={p.sizing.rows} />
      <FrostReadouts layout="ledger" id="logements" eyebrow={p.housing.eyebrow} title={p.housing.title} rows={p.housing.rows} />
      {p.periods ? <FrostPeriods id="construction" eyebrow={p.periods.eyebrow} title={p.periods.title} intro={p.periods.intro} bars={p.periods.bars} footnote={p.periods.footnote} /> : null}

      <FrostTable
        id="voisines"
        eyebrow="Comparatif"
        title={p.neighbours.title}
        intro={p.neighbours.intro}
        caption={`${p.name} et les municipalités voisines qui ont leur page`}
        columns={NEIGHBOUR_COLUMNS.map((c) => ({ key: c.key, label: c.label }))}
        rows={p.neighbours.rows}
      />

      <section style={{ background: "#FFFFFF" }}>
        <div className="mx-auto max-w-[1440px] px-5 pb-10 pt-16 sm:px-8 lg:px-12 lg:pt-20">
          <FrostHead eyebrow="Classement pour ce climat" title={p.ranking.title} intro={p.ranking.intro} />
          <div className="mt-10">
            <ThemedModelTable models={ranking.models as SeoModel[]} showRank metric={{ label: ranking.def.metricLabel, value: ranking.def.value }} theme={MT_FROST} />
          </div>
          <p className="mt-4 text-sm">
            <Link href={`/meilleures-thermopompes/${p.ranking.slug}`} className="font-semibold underline decoration-1 underline-offset-4" style={{ color: "#1F5F8B" }}>
              Voir le classement complet →
            </Link>
          </p>
          <p className="mt-2 text-sm">
            <Link href={`/palmares-du-froid#m-${p.m.code}`} className="font-semibold underline decoration-1 underline-offset-4" style={{ color: "#1F5F8B" }}>
              {`Où se classe ${p.name} : le Palmarès du froid →`}
            </Link>
          </p>
        </div>
      </section>

      <FrostCta title={p.cta.title} text={p.cta.text} />
      {p.place ? <FrostPlace eyebrow={p.place.eyebrow} title={p.place.title} text={p.place.text} href={p.place.href} linkLabel={p.place.linkLabel} /> : null}
      <ThemedFaq items={p.faq} title="Questions fréquentes" variant="frost" />
      <FrostSources items={p.sources} attribution={p.attribution} date={date} />
    </main>
  );
}
