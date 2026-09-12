/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import { createMetadata, getBreadcrumbSchema, getCollectionPageSchema } from "@/lib/seo";
import { getRanking, RANKINGS } from "@/lib/seo/programmatic";
import { JsonLd } from "@/components/seo/SeoBlocks";
import { PalmaresIndexHero } from "@/components/heroes-v2/marques/PalmaresHeroes";
import { typo } from "@/components/heroes-v2/marques/shared";
import { JuryNote, PalmaresCta, PalmaresRoot, PalmaresTrust, RankingCategory } from "@/components/sections-v2/marques/Palmares";

export const metadata: Metadata = createMetadata({
  title: `Meilleures thermopompes au Québec en ${new Date().getFullYear()}`,
  description:
    `Grand froid, HSPF2, COP à -15 °C, LogisVert, murales 12 000 BTU, centrales : des classements bâtis sur les données certifiées d'Hydro-Québec et ENERGY STAR.`,
  canonicalPath: "/meilleures-thermopompes",
  robots: { index: true, follow: true },
});

/* Libellés courts des critères, pour le tableau des meneurs du héros. */
const SHORT: Record<string, string> = {
  "grand-froid": "Grand froid",
  "efficacite-hspf2": "Efficacité HSPF2",
  "cop-15": "COP à −15 °C",
  "subvention-logisvert": "Subvention LogisVert",
  "murales-12000-btu": "Murales 12 000 BTU",
  centrales: "Centrales",
};

export default function RankingsIndex() {
  const year = new Date().getFullYear();
  // Un seul calcul par classement : sert au héros (meneur) et aux tableaux.
  const tables = RANKINGS.map((def) => ({ def, r: getRanking(def.slug, 5)! }));
  return (
    <main className="bg-[#0F2E26] text-[#F3EBDD]">
      <JsonLd
        data={[
          getBreadcrumbSchema([{ name: "Accueil", url: "/" }, { name: "Meilleures thermopompes", url: "/meilleures-thermopompes" }]),
          getCollectionPageSchema({ name: "Meilleures thermopompes au Québec", description: "Classements sur données certifiées.", url: "/meilleures-thermopompes" }),
        ]}
      />
      {/* Héros « Palmarès » : le programme de la soirée, le n° 1 de chaque classement. */}
      <PalmaresIndexHero
        year={year}
        lines={["Les meilleures thermopompes", `au Québec en ${year}`]}
        intro={typo("Pas d'avis sponsorisés, pas de « choix de la rédaction » : Thermopompes À Vendre classe les machines vendues au Québec sur une donnée certifiée, publiée par Hydro-Québec et ENERGY STAR.")}
        crumbs={[{ label: "Meilleures thermopompes" }]}
        rows={tables.flatMap(({ def, r }) =>
          r.models[0] ? [{ label: SHORT[def.slug] ?? def.metricLabel, href: `/meilleures-thermopompes/${def.slug}`, leader: `${r.models[0].brand} ${r.models[0].name}`, value: typo(def.value(r.models[0])) }] : [],
        )}
      />
      {/* La suite, en livret de la soirée : une page crème à double filet doré par catégorie,
          la note du jury (méthode) et l'appel à ThermoMatch. */}
      <PalmaresRoot>
        <PalmaresTrust />
        <div className="space-y-14 px-3 py-16 sm:space-y-20 sm:px-8 lg:py-24" style={{ background: "linear-gradient(180deg, #0A221C 0%, #0F2E26 18%, #0F2E26 100%)" }}>
          {tables.map(({ def, r }, i) => (
            <RankingCategory
              key={def.slug}
              index={i}
              href={`/meilleures-thermopompes/${def.slug}`}
              title={def.h1}
              description={def.description}
              models={r.models}
              metric={{ label: def.metricLabel, value: def.value }}
            />
          ))}
        </div>
        <JuryNote id="methode-titre" title="Notre méthode">
          <p>
            Nous partons de la liste officielle des appareils admissibles à LogisVert publiée par Hydro-Québec, mise à jour automatiquement. Chaque
            appariement y est identifié par sa référence AHRI, avec sa capacité de chauffage certifiée à -8 °C et à -15 °C, son COP à -15 °C, ses
            indices SEER2 et HSPF2 et son montant de subvention. Les machines identiques vendues sous plusieurs marques sont regroupées. Aucune
            valeur n’est estimée dans ces classements : une machine sans donnée certifiée n’y figure pas.
          </p>
        </JuryNote>
        <PalmaresCta />
      </PalmaresRoot>
    </main>
  );
}
