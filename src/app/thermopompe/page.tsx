/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, getBreadcrumbSchema, getCollectionPageSchema, getItemListSchema } from "@/lib/seo";
import { getCitiesByRegion, getCities } from "@/lib/seo/cities";
import { getCityData, fmtInt, fmtTemp } from "@/lib/seo/cities-data";
import { CtaThermoMatch, JsonLd, Prose, SeoHero } from "@/components/seo/SeoBlocks";

export const metadata: Metadata = createMetadata({
  title: "Thermopompe par ville au Québec : subvention LogisVert et modèles grand froid",
  description:
    "Choisissez votre ville : température de conception, subvention LogisVert d'Hydro-Québec et thermopompes certifiées climat froid pour chaque région du Québec.",
  canonicalPath: "/thermopompe",
});

export default function CitiesIndexPage() {
  const byRegion = getCitiesByRegion();
  const cities = getCities();
  const regions = [...byRegion.keys()].sort((a, b) => a.localeCompare(b, "fr-CA"));
  // Tableau comparatif : villes classées de l'hiver le plus exigeant au plus doux (degrés-jours, sinon température de conception)
  const withData = cities.map((c) => ({ city: c, climate: getCityData(c.slug)?.climate ?? null }));
  const hasHdd = withData.some((x) => x.climate?.hdd18);
  const ranked = withData
    .slice()
    .sort((a, b) => (b.climate?.hdd18 ?? 0) - (a.climate?.hdd18 ?? 0) || a.city.designTempC - b.city.designTempC);

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
        intro="La bonne machine dépend de votre maison, mais chaque ville a son hiver : température de conception, degrés-jours de chauffage, moyenne de janvier. Nous chiffrons ce que ça change, ville par ville, avec les normales d'Environnement Canada et les données certifiées d'Hydro-Québec."
        breadcrumbs={[{ label: "Thermopompe par ville", href: "/thermopompe" }]}
        titleLines={["Thermopompe", "par ville au Québec"]}
        serif="par ville"
        motif={{ kind: "cities", cities: cities.map((c) => ({ name: c.name, designTempC: c.designTempC })) }}
        stats={[
          { label: "Villes couvertes", value: String(cities.length) },
          { label: "Régions", value: String(regions.length) },
          { label: "Programme", value: "LogisVert" },
          { label: "Données", value: "ENERGY STAR / AHRI" },
        ]}
      />
      <section className="mx-auto max-w-6xl px-5 sm:px-8 pt-12">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#e54b17] mb-2">Comparatif</p>
        <h2 className="text-[26px] font-extrabold tracking-tight text-[#071d2b] mb-2">Où l'hiver demande le plus d'une thermopompe</h2>
        <p className="text-[#536873] mb-6 max-w-3xl">
          {hasHdd
            ? "Les villes classées par degrés-jours de chauffage (normales d'Environnement Canada) : plus le chiffre est élevé, plus la machine travaille sur l'année. La température de conception fixe la pointe à couvrir."
            : "Les villes classées par température de conception, le froid de référence du calcul de charge de chauffage."}
        </p>
        <div className="overflow-x-auto rounded-xl border border-[#e4ddd5] bg-white">
          <table className="w-full text-sm">
            <thead className="bg-[#f8f5f0] text-[11px] uppercase tracking-wider text-[#536873]">
              <tr>
                <th className="px-3 py-3 text-left">Ville</th>
                <th className="px-3 py-3 text-left">Région</th>
                <th className="px-3 py-3 text-right">Conception</th>
                {hasHdd && <th className="px-3 py-3 text-right">Degrés-jours</th>}
                {hasHdd && <th className="px-3 py-3 text-right">Janvier</th>}
                {hasHdd && <th className="px-3 py-3 text-right">Record de froid</th>}
              </tr>
            </thead>
            <tbody>
              {ranked.map(({ city: c, climate: cl }) => (
                <tr key={c.slug} className="border-t border-[#f0ebe4] hover:bg-[#fffaf5]">
                  <td className="px-3 py-2.5"><Link href={`/thermopompe/${c.slug}`} className="font-semibold text-[#071d2b] hover:text-[#e54b17]">{c.name}</Link></td>
                  <td className="px-3 py-2.5 text-[#536873]">{c.region}</td>
                  <td className="px-3 py-2.5 text-right font-semibold">{c.designTempC} °C</td>
                  {hasHdd && <td className="px-3 py-2.5 text-right">{cl?.hdd18 ? fmtInt(cl.hdd18) : <span className="text-[#a0aab0]">n/d</span>}</td>}
                  {hasHdd && <td className="px-3 py-2.5 text-right">{cl?.janMeanC !== null && cl?.janMeanC !== undefined ? fmtTemp(cl.janMeanC) : <span className="text-[#a0aab0]">n/d</span>}</td>}
                  {hasHdd && <td className="px-3 py-2.5 text-right">{cl?.extremeMinC !== null && cl?.extremeMinC !== undefined ? fmtTemp(cl.extremeMinC) : <span className="text-[#a0aab0]">n/d</span>}</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-12">
        <h2 className="text-[26px] font-extrabold tracking-tight text-[#071d2b] mb-6">Par région</h2>
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
