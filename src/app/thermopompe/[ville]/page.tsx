/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { createMetadata, getBreadcrumbSchema, getServiceSchema, SITE_URL } from "@/lib/seo";
import { getCities, getCity } from "@/lib/seo/cities";
import { getCapacityClasses, getRanking, getAllBrandStats } from "@/lib/seo/programmatic";
import { CtaThermoMatch, FaqBlock, JsonLd, ModelTable, Prose, RelatedLinks, SeoHero } from "@/components/seo/SeoBlocks";

export const dynamicParams = false;

export async function generateStaticParams() {
  return getCities().map((c) => ({ ville: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ ville: string }> }): Promise<Metadata> {
  const { ville } = await params;
  const city = getCity(ville);
  if (!city) return createMetadata({ title: "Ville introuvable" });
  return createMetadata({
    title: `Thermopompe à ${city.name} : prix, subvention LogisVert et modèles grand froid`,
    description: `Quelle thermopompe installer à ${city.name} (${city.region})? Température de conception ${city.designTempC} °C, capacités certifiées à -15 °C, montants LogisVert officiels et comparaison de toutes les marques.`,
    canonicalPath: `/thermopompe/${city.slug}`,
  });
}

export default async function CityPage({ params }: { params: Promise<{ ville: string }> }) {
  const { ville } = await params;
  const city = getCity(ville);
  if (!city) notFound();

  const cold = getRanking("grand-froid", 8)!;
  const classes = getCapacityClasses();
  const brands = getAllBrandStats();
  const coldCount = brands.reduce((a, b) => a + b.coldClimateCount, 0);
  const maxLv = brands.reduce((a, b) => Math.max(a, b.maxLogisVert), 0);
  const nearby = (city.near ?? []).map((s) => getCity(s)).filter((c): c is NonNullable<typeof c> => !!c);
  const veryCold = city.designTempC <= -28;

  const faq = [
    {
      question: `Quelle capacité de thermopompe faut-il à ${city.name}?`,
      answer: `La capacité dépend de votre maison, pas de la ville : superficie, année de construction, isolation, fenestration et sous-sol. Partout au Québec, nous dimensionnons pour un vrai hiver. À ${city.name}, la température de conception de la région est de ${city.designTempC} °C : choisissez une machine certifiée climat froid et vérifiez sa capacité réelle à -15 °C, pas seulement sa capacité nominale.`,
    },
    {
      question: `La subvention LogisVert s'applique-t-elle à ${city.name}?`,
      answer: `Oui. LogisVert est le programme d'Hydro-Québec et s'applique à toutes les résidences admissibles du Québec, y compris ${city.name}. Le montant dépend de l'appariement exact (unité extérieure + unité intérieure) et va jusqu'à ${maxLv.toLocaleString("fr-CA")} $ pour les plus grosses centrales de notre base. Chaque fiche affiche le montant officiel de la liste Hydro-Québec.`,
    },
    {
      question: `Une thermopompe chauffe-t-elle vraiment à ${city.designTempC} °C?`,
      answer: veryCold
        ? `Les thermopompes certifiées climat froid continuent de chauffer sous -25 °C, mais leur capacité diminue. À ${city.name}, prévoyez un chauffage d'appoint (plinthes ou fournaise) pour les quelques nuits les plus froides et comparez le COP certifié à -15 °C : c'est le meilleur indicateur de performance par grand froid.`
        : `Oui, à condition de choisir un modèle certifié climat froid. À ${city.name}, la température de conception est de ${city.designTempC} °C : une machine bien dimensionnée couvre la quasi-totalité de la saison, les plinthes ne servant que lors des pointes de froid extrêmes.`,
    },
    {
      question: `Murale ou centrale à ${city.name}?`,
      answer: `Si votre maison a déjà des conduits (fournaise au gaz, au mazout ou électrique), une centrale gainable réutilise le réseau existant. Sans conduits, une murale simple zone ou un système multizone est la solution la plus économique à installer. Notre questionnaire ThermoMatch tient compte de votre système actuel.`,
    },
  ];

  const jsonLd = [
    getBreadcrumbSchema([
      { name: "Accueil", url: "/" },
      { name: "Thermopompe par ville", url: "/thermopompe" },
      { name: city.name, url: `/thermopompe/${city.slug}` },
    ]),
    getServiceSchema({
      name: `Comparaison et sélection de thermopompes à ${city.name}`,
      description: `Comparaison neutre de toutes les marques de thermopompes vendues au Québec, avec données certifiées et montants LogisVert, pour les résidents de ${city.name}.`,
      serviceType: "Sélection de thermopompe",
      areaServed: `${city.name}, Québec`,
      url: `${SITE_URL}/thermopompe/${city.slug}`,
    }),
  ];

  return (
    <main className="bg-[#f8f5f0] text-[#071d2b]">
      <JsonLd data={jsonLd} />
      <SeoHero
        eyebrow={city.region}
        title={`Thermopompe à ${city.name}`}
        intro={`Prix, subvention LogisVert et modèles certifiés grand froid pour ${city.name} et ses environs. Toutes les marques comparées avec les données officielles d'Hydro-Québec, sans parti pris.`}
        breadcrumbs={[
          { label: "Thermopompe par ville", href: "/thermopompe" },
          { label: city.name, href: `/thermopompe/${city.slug}` },
        ]}
        stats={[
          { label: "Température de conception", value: `${city.designTempC} °C` },
          { label: "Modèles certifiés grand froid", value: coldCount.toLocaleString("fr-CA") },
          { label: "LogisVert jusqu'à", value: `${maxLv.toLocaleString("fr-CA")} $` },
          { label: "Codes postaux couverts", value: city.fsa.join(", ") },
        ]}
      />

      <Prose>
        <h2>Ce que l'hiver de {city.name} exige d'une thermopompe</h2>
        <p>
          La région {city.climateLabel} a une température de conception de <strong>{city.designTempC} °C</strong> : c'est le froid de référence utilisé
          par les entrepreneurs pour calculer la charge de chauffage d'une maison. Une thermopompe vendue « 12 000 BTU » ne fournit pas 12 000 BTU
          quand il fait {city.designTempC} °C dehors. Ce qui compte, c'est sa <strong>capacité certifiée à -15 °C</strong> et son <strong>COP à -15 °C</strong>,
          deux valeurs publiées par ENERGY STAR et reprises dans la liste LogisVert d'Hydro-Québec.
        </p>
        <p>
          {veryCold
            ? `À ${city.name}, l'hiver est parmi les plus rigoureux du Québec habité. Nous recommandons uniquement des machines certifiées climat froid, dimensionnées pour couvrir la charge à -15 °C, avec un chauffage d'appoint pour les nuits sous ${city.designTempC} °C.`
            : `À ${city.name}, une thermopompe certifiée climat froid, correctement dimensionnée, couvre l'essentiel de la saison de chauffage. Le dimensionnement se fait sur votre maison (superficie, isolation, année de construction), pas sur la ville : c'est exactement ce que fait notre questionnaire ThermoMatch.`}
        </p>
        <h2>Subvention LogisVert à {city.name}</h2>
        <p>
          LogisVert est le programme d'Hydro-Québec : il s'applique partout au Québec, donc à {city.name}. Le montant est fixé par appariement
          certifié AHRI (unité extérieure et intérieure). Nous affichons le montant officiel de la liste Hydro-Québec sur chaque fiche, mis à jour
          automatiquement. Consultez les <Link href="/subventions/logisvert">montants LogisVert par marque</Link> ou vérifiez un modèle précis sur
          la <Link href="/subventions">page Subventions</Link>.
        </p>
      </Prose>

      <section className="mx-auto max-w-6xl px-5 sm:px-8 pb-6">
        <h2 className="text-[26px] font-bold text-[#172126] mb-2">Les machines les plus performantes par grand froid</h2>
        <p className="text-[#536873] mb-6">
          Classement par COP certifié à -15 °C, valable pour {city.name} comme pour tout le Québec. Les machines identiques vendues sous
          plusieurs marques ne sont comptées qu'une fois.
        </p>
        <ModelTable models={cold.models} showRank metric={{ label: cold.def.metricLabel, value: cold.def.value }} />
        <p className="mt-3 text-sm">
          <Link href="/meilleures-thermopompes/grand-froid" className="text-[#e54b17] font-semibold">Voir le classement complet grand froid →</Link>
        </p>
      </section>

      <CtaThermoMatch title={`Quelle thermopompe pour votre maison à ${city.name}?`} />

      <RelatedLinks
        title="Par capacité"
        links={classes.map((c) => ({ href: `/thermopompes/${c.slug}`, label: `Thermopompe ${c.label}`, hint: `${c.models.length} machines distinctes` }))}
      />

      {nearby.length > 0 && (
        <RelatedLinks
          title="Villes voisines"
          links={nearby.map((c) => ({ href: `/thermopompe/${c.slug}`, label: `Thermopompe à ${c.name}`, hint: `${c.region} · ${c.designTempC} °C` }))}
        />
      )}

      <FaqBlock items={faq} title={`Questions fréquentes à ${city.name}`} />
    </main>
  );
}
