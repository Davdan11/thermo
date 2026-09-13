/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, getBreadcrumbSchema, getCollectionPageSchema, getItemListSchema } from "@/lib/seo";
import { getCities } from "@/lib/seo/cities";
import { getCityData, fmtInt, fmtTemp } from "@/lib/seo/cities-data";
import { getHubs, getPageMunicipalities, groupTitle } from "@/lib/seo/municipalites";
import { atlasRegions } from "@/lib/seo/municipal-atlas";
import { JsonLd } from "@/components/seo/SeoBlocks";
import { FrostCityTable, FrostCta, FrostHead, FrostNote, FrostTrust } from "@/components/sections-v2/contenu/FrostSections";
import { FrostAtlas } from "@/components/sections-v2/contenu/FrostMunicipal";
import { FrostIndexHero, type FrostGroup } from "@/components/heroes-v2/contenu/Frost";

const PAGES = getPageMunicipalities().length + getCities().length;

export const metadata: Metadata = createMetadata({
  title: `Thermopompe par ville au Québec : climat et modèles`,
  description: `Votre municipalité parmi ${PAGES} au Québec : normales climatiques, recensement 2021, subvention LogisVert et thermopompes certifiées climat froid, par région et par MRC.`,
  canonicalPath: "/thermopompe",
  robots: { index: true, follow: true },
});

export default function CitiesIndexPage() {
  const cities = getCities();
  const regions = atlasRegions();
  const hubs = getHubs();
  const total = regions.reduce((a, r) => a + r.pages, 0);
  // Héros : villes historiques regroupées par température de conception, de la plus douce à la plus froide
  const groups: FrostGroup[] = [...new Set(cities.map((c) => c.designTempC))]
    .sort((a, b) => b - a)
    .map((t) => ({ t, cities: cities.filter((c) => c.designTempC === t).map((c) => ({ name: c.name, slug: c.slug })).sort((a, b) => a.name.localeCompare(b.name, "fr-CA")) }));
  // Tableau comparatif : villes classées de l'hiver le plus exigeant au plus doux (degrés-jours, sinon température de conception)
  const withData = cities.map((c) => ({ city: c, climate: getCityData(c.slug)?.climate ?? null }));
  const hasHdd = withData.some((x) => x.climate?.hdd18);
  const ranked = withData
    .slice()
    .sort((a, b) => (b.climate?.hdd18 ?? 0) - (a.climate?.hdd18 ?? 0) || a.city.designTempC - b.city.designTempC);

  return (
    <main className="frs-root" style={{ background: "#FFFFFF", color: "#0B2540" }}>
      <JsonLd
        data={[
          getBreadcrumbSchema([{ name: "Accueil", url: "/" }, { name: "Thermopompe par ville", url: "/thermopompe" }]),
          getCollectionPageSchema({ name: "Thermopompe par ville au Québec", description: "Guides locaux par région, MRC et municipalité.", url: "/thermopompe" }),
          getItemListSchema({ name: "MRC et agglomérations du Québec", items: hubs.map((g) => ({ name: groupTitle(g), url: `/thermopompe/mrc/${g.slug}` })) }),
        ]}
      />
      {/* Héros « Carte des froids » : chaque température de conception réelle et ses villes historiques. */}
      <FrostIndexHero
        eyebrow="Guides locaux"
        breadcrumbs={[{ label: "Thermopompe par ville", href: "/thermopompe" }]}
        lines={["Thermopompe", "par ville au Québec"]}
        intro="La bonne machine dépend de votre maison, mais chaque municipalité a son hiver et ses logements : normales de la station météo la plus proche, degrés-jours de chauffage, âge des maisons au recensement de 2021. Thermopompes À Vendre chiffre ce que ça change, avec les données d'Environnement Canada, de Statistique Canada et d'Hydro-Québec."
        groups={groups}
        stats={[
          { label: "Municipalités avec page", value: fmtInt(total) },
          { label: "MRC et agglomérations", value: String(hubs.length) },
          { label: "Régions", value: String(regions.length) },
          { label: "Données", value: "ECCC · StatCan" },
        ]}
      />
      {/* Sous le héros : bande de preuve, journal comparatif des grandes villes, atlas région → MRC → municipalité, note et appel. */}
      <FrostTrust />
      <section style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #EEF5F9 100%)" }}>
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <FrostHead
            eyebrow="Comparatif"
            title="Où l'hiver demande le plus d'une thermopompe"
            intro={
              hasHdd
                ? "Les grandes villes classées par degrés-jours de chauffage (normales d'Environnement Canada) : plus le chiffre est élevé, plus la machine travaille sur l'année. La température de conception fixe la pointe à couvrir."
                : "Les villes classées par température de conception, le froid de référence du calcul de charge de chauffage."
            }
          />
          <div className="mt-10">
            <FrostCityTable
              hasHdd={hasHdd}
              rows={ranked.map(({ city: c, climate: cl }) => ({
                slug: c.slug,
                name: c.name,
                region: c.region,
                design: c.designTempC,
                hdd: cl?.hdd18 ?? null,
                hddLabel: cl?.hdd18 ? fmtInt(cl.hdd18) : null,
                jan: cl?.janMeanC !== null && cl?.janMeanC !== undefined ? fmtTemp(cl.janMeanC) : null,
                record: cl?.extremeMinC !== null && cl?.extremeMinC !== undefined ? fmtTemp(cl.extremeMinC) : null,
              }))}
            />
          </div>
        </div>
      </section>
      <FrostAtlas regions={regions} total={total} />
      <FrostNote>
        <h2>Pourquoi la ville ne change pas la machine recommandée</h2>
        <p>
          Partout au Québec, on achète des thermopompes conçues pour -25 °C ou -30 °C. Ce qui distingue deux maisons, c'est leur superficie,
          leur âge, leur isolation et leur système de chauffage actuel. C'est pourquoi notre questionnaire <Link href="/trouver-ma-thermopompe">ThermoMatch</Link> ne
          demande votre code postal que pour vous situer et trouver des installateurs près de chez vous.
        </p>
        <p>
          Une municipalité a sa page quand elle a des données propres : son profil du recensement de 2021 et une station de normales climatiques
          à 50 km ou moins. Les autres sont nommées, avec leurs chiffres, sur la page de leur MRC.
        </p>
      </FrostNote>
      <FrostCta />
    </main>
  );
}
