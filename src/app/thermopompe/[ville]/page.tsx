/* ==================================================================
   Page locale « Thermopompe à [ville] »

   Deux gabarits sous la même route :
   - les 53 villes historiques (cities.ts) : chiffres vérifiés de
     src/lib/seo/cities-data.json, plus leurs municipalités voisines et
     leur MRC ; textes construits par src/lib/seo/cities-content.ts ;
   - les municipalités du Québec qui ont des données propres
     (src/lib/seo/municipalites-data.json, règle « pas de donnée, pas de
     page » et vérification d'unicité) : MunicipalityView.

   Indexation : src/lib/seo/cities-quality.ts décide, page par page, si
   la page a une vraie valeur locale et ne répète pas une autre page.
   Sinon elle reste accessible, en « noindex, follow », hors du plan du
   site.

   Pré-rendu : les villes historiques et les municipalités de 8 000
   habitants et plus. Les autres pages sont rendues à la première visite,
   puis servies du cache (ISR). Un slug inconnu, ou une municipalité sans
   page propre, renvoie une 404. Une donnée absente n'est jamais estimée.
   ================================================================== */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { createMetadata, getBreadcrumbSchema, getServiceSchema, SITE_URL } from "@/lib/seo";
import { getCities, getCity } from "@/lib/seo/cities";
import { buildCityPage } from "@/lib/seo/cities-content";
import { isCityPageIndexable } from "@/lib/seo/cities-quality";
import type { SeoModel } from "@/lib/seo/programmatic";
import { getPageMunicipality, prerenderMunicipalSlugs } from "@/lib/seo/municipalites";
import { NEIGHBOUR_COLUMNS, buildMunicipalPage } from "@/lib/seo/municipal-content";
import { catalogueFacts, rankingFor } from "@/lib/seo/municipal-catalogue";
import { JsonLd } from "@/components/seo/SeoBlocks";
import { FrostCta, FrostHead, FrostNearby, FrostReadouts, FrostTrust } from "@/components/sections-v2/contenu/FrostSections";
import { FrostPeriods, FrostPlace, FrostSources, FrostTable } from "@/components/sections-v2/contenu/FrostMunicipal";
import { MT_FROST, ThemedModelTable } from "@/components/sections-v2/contenu/ThemedModelTable";
import { ThemedFaq } from "@/components/sections-v2/contenu/ThemedFaq";
import { FrostCityHero } from "@/components/heroes-v2/contenu/Frost";
import { MunicipalityView } from "./MunicipalityView";

/** Slugs hors liste pré-rendue : rendus à la demande (404 s'ils n'ont pas de page), puis mis en cache. */
export const dynamicParams = true;
/** Les données changent au plus avec la liste LogisVert : une régénération par semaine suffit. */
export const revalidate = 604800;

export async function generateStaticParams() {
  return [...getCities().map((c) => ({ ville: c.slug })), ...prerenderMunicipalSlugs().map((slug) => ({ ville: slug }))];
}

/** Page de gabarit « municipalité » pour ce slug, ou null (404). */
function municipalPage(slug: string) {
  const m = getPageMunicipality(slug);
  return m ? buildMunicipalPage(m, catalogueFacts()) : null;
}

/** Page sans vraie valeur locale ou trop semblable à une autre : accessible, suivie, mais pas indexée (cities-quality.ts). */
function robotsFor(slug: string): Metadata["robots"] {
  return isCityPageIndexable(slug) ? { index: true, follow: true } : { index: false, follow: true };
}

export async function generateMetadata({ params }: { params: Promise<{ ville: string }> }): Promise<Metadata> {
  const { ville } = await params;
  const city = getCity(ville);
  if (!city) {
    const p = municipalPage(ville);
    if (!p) return createMetadata({ title: "Ville introuvable", robots: { index: false, follow: false } });
    return createMetadata({ title: p.title, description: p.description, canonicalPath: p.path, robots: robotsFor(ville) });
  }
  const p = buildCityPage(city);
  return createMetadata({ title: p.title, description: p.description, canonicalPath: p.path, robots: robotsFor(ville) });
}

export default async function CityPage({ params }: { params: Promise<{ ville: string }> }) {
  const { ville } = await params;
  const city = getCity(ville);
  if (!city) {
    const p = municipalPage(ville);
    if (!p) notFound();
    return <MunicipalityView p={p} />;
  }

  const p = buildCityPage(city);
  const ranking = rankingFor(p.ranking.slug, p.ranking.limit);

  const jsonLd = [
    getBreadcrumbSchema([
      { name: "Accueil", url: "/" },
      { name: "Thermopompe par ville", url: "/thermopompe" },
      { name: city.name, url: p.path },
    ]),
    getServiceSchema({
      name: p.service.name,
      description: p.service.description,
      serviceType: "Sélection de thermopompe",
      areaServed: `${city.name}, Québec`,
      url: `${SITE_URL}${p.path}`,
    }),
  ];

  return (
    <main className="frs-root" style={{ background: "#FFFFFF", color: "#0B2540" }}>
      <JsonLd data={jsonLd} />
      {/* Héros « Carte des froids » : le nom de la ville, son thermomètre (conception, normales de janvier, record). */}
      <FrostCityHero
        region={p.hero.region}
        city={city.name}
        intro={p.hero.intro}
        answer={p.hero.answer}
        breadcrumbs={[
          { label: "Thermopompe par ville", href: "/thermopompe" },
          { label: city.name, href: p.path },
        ]}
        stats={p.hero.stats}
        designTempC={city.designTempC}
        janMeanC={p.hero.janMeanC}
        janMinC={p.hero.janMinC}
        extremeMinC={p.hero.extremeMinC}
        extremeMinYear={p.hero.extremeMinYear}
        source={p.hero.source}
      />
      {/* Sous le héros, l'atlas de la ville : relevés d'instruments (normales), journal de choix, estimation,
          classement en journal de station, appel, villes et municipalités voisines, MRC, questions. */}
      <FrostTrust />

      <FrostReadouts layout="instruments" id="climat" eyebrow={p.climate.eyebrow} title={p.climate.title} intro={p.climate.intro} rows={p.climate.rows} />

      <FrostReadouts layout="log" id="choix" eyebrow={p.choice.eyebrow} title={p.choice.title} rows={p.choice.rows} />

      {/* Le parc résidentiel de la municipalité (recensement 2021), lu pour le chauffage : même bloc que sur une page de municipalité. */}
      {p.housing && <FrostReadouts layout="ledger" id="logements" eyebrow={p.housing.eyebrow} title={p.housing.title} intro={p.housing.intro} rows={p.housing.rows} />}
      {p.periods && <FrostPeriods id="construction" eyebrow={p.periods.eyebrow} title={p.periods.title} intro={p.periods.intro} bars={p.periods.bars} footnote={p.periods.footnote} />}

      {p.estimate && <FrostReadouts layout="ledger" id="couts" eyebrow={p.estimate.eyebrow} title={p.estimate.title} intro={p.estimate.intro} rows={p.estimate.rows} footnote={p.estimate.footnote} />}

      <section style={{ background: "#FFFFFF" }}>
        <div className="mx-auto max-w-[1440px] px-5 pb-10 pt-16 sm:px-8 lg:px-12 lg:pt-24">
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
            <Link href="/palmares-du-froid" className="font-semibold underline decoration-1 underline-offset-4" style={{ color: "#1F5F8B" }}>
              {p.palmaresLabel}
            </Link>
          </p>
        </div>
      </section>

      <FrostCta title={p.cta.title} text={p.cta.text} />

      {p.nearby.length > 0 && <FrostNearby title="Villes voisines" links={p.nearby} />}

      {p.neighbours && (
        <FrostTable
          id="municipalites-voisines"
          eyebrow="Comparatif"
          title={p.neighbours.title}
          intro={p.neighbours.intro}
          caption={p.neighbours.caption}
          columns={NEIGHBOUR_COLUMNS.map((c) => ({ key: c.key, label: c.label }))}
          rows={p.neighbours.rows}
        />
      )}
      {p.place && <FrostPlace eyebrow={p.place.eyebrow} title={p.place.title} text={p.place.text} href={p.place.href} linkLabel={p.place.linkLabel} />}

      <ThemedFaq items={p.faq} title={p.faqTitle} variant="frost" />
      {p.sources.length > 0 && <FrostSources items={p.sources} attribution={p.attribution} />}
    </main>
  );
}
