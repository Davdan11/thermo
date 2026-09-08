/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, getBreadcrumbSchema, getCollectionPageSchema, getItemListSchema } from "@/lib/seo";
import { getCitiesByRegion, getCities } from "@/lib/seo/cities";
import { CtaThermoMatch, JsonLd, Prose, SeoHero } from "@/components/seo/SeoBlocks";

export const metadata: Metadata = createMetadata({
  title: "Thermopompe par ville au Québec : prix, subvention et modèles grand froid",
  description:
    "Choisissez votre ville : température de conception, subvention LogisVert d'Hydro-Québec et thermopompes certifiées climat froid pour chaque région du Québec.",
  canonicalPath: "/thermopompe",
});

export default function CitiesIndexPage() {
  const byRegion = getCitiesByRegion();
  const cities = getCities();
  const regions = [...byRegion.keys()].sort((a, b) => a.localeCompare(b, "fr-CA"));

  return (
    <main className="bg-[#f8f5f0] text-[#071d2b]">
      <JsonLd
        data={[
          getBreadcrumbSchema([{ name: "Accueil", url: "/" }, { name: "Thermopompe par ville", url: "/thermopompe" }]),
          getCollectionPageSchema({ name: "Thermopompe par ville au Québec", description: "Guides locaux par ville.", url: "/thermopompe" }),
          getItemListSchema({ name: "Villes du Québec", items: cities.map((c) => ({ name: `Thermopompe à ${c.name}`, url: `/thermopompe/${c.slug}` })) }),
        ]}
      />
      <SeoHero
        eyebrow="Guides locaux"
        title="Thermopompe par ville au Québec"
        intro="La bonne machine dépend de votre maison, pas de votre ville. Mais chaque région a sa température de conception, et nous l'expliquons ville par ville avec les données certifiées d'Hydro-Québec."
        breadcrumbs={[{ label: "Thermopompe par ville", href: "/thermopompe" }]}
        stats={[
          { label: "Villes couvertes", value: String(cities.length) },
          { label: "Régions", value: String(regions.length) },
          { label: "Programme", value: "LogisVert" },
          { label: "Données", value: "ENERGY STAR / AHRI" },
        ]}
      />
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-12">
        {regions.map((r) => (
          <div key={r} className="mb-10">
            <h2 className="text-[20px] font-bold text-[#172126] mb-3">{r}</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {byRegion.get(r)!.map((c) => (
                <li key={c.slug}>
                  <Link href={`/thermopompe/${c.slug}`} className="block rounded-lg border border-[#e4ddd5] bg-white px-4 py-3 hover:border-[#e54b17] transition-colors">
                    <span className="font-semibold">Thermopompe à {c.name}</span>
                    <span className="block text-[12px] text-[#8a989e]">Température de conception {c.designTempC} °C</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <Prose>
        <h2>Pourquoi la ville ne change pas la machine recommandée</h2>
        <p>
          Partout au Québec, on achète des thermopompes conçues pour -25 °C ou -30 °C. Ce qui distingue deux maisons, c'est leur superficie,
          leur âge, leur isolation et leur système de chauffage actuel. C'est pourquoi notre questionnaire <Link href="/trouver-ma-thermopompe">ThermoMatch</Link> ne
          demande votre code postal que pour vous situer et trouver des installateurs près de chez vous.
        </p>
      </Prose>
      <CtaThermoMatch />
    </main>
  );
}
