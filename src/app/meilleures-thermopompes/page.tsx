/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, getBreadcrumbSchema, getCollectionPageSchema } from "@/lib/seo";
import { getRanking, RANKINGS } from "@/lib/seo/programmatic";
import { CtaThermoMatch, JsonLd, ModelTable, Prose, SeoHero } from "@/components/seo/SeoBlocks";

export const metadata: Metadata = createMetadata({
  title: `Meilleures thermopompes au Québec ${new Date().getFullYear()} : classements sur données certifiées`,
  description:
    "Grand froid, HSPF2, COP à -15 °C, subvention LogisVert, murales 12 000 BTU, centrales : les classements des thermopompes vendues au Québec, bâtis uniquement sur les données certifiées d'Hydro-Québec et ENERGY STAR.",
  canonicalPath: "/meilleures-thermopompes",
});

/* Libellés courts des critères, pour le tableau des meneurs du héros. */
const SHORT: Record<string, string> = {
  "grand-froid": "Grand froid",
  "efficacite-hspf2": "Efficacité HSPF2",
  "cop-15": "COP à −15 °C",
  "subvention-logisvert": "Subvention LogisVert",
  "murales-12000-btu": "Murales 12 000 BTU",
  centrales: "Centrales",
};

export default function RankingsIndex() {
  const year = new Date().getFullYear();
  // Un seul calcul par classement : sert au héros (meneur) et aux tableaux.
  const tables = RANKINGS.map((def) => ({ def, r: getRanking(def.slug, 5)! }));
  return (
    <main className="bg-[#f8f5f0] text-[#071d2b]">
      <JsonLd
        data={[
          getBreadcrumbSchema([{ name: "Accueil", url: "/" }, { name: "Meilleures thermopompes", url: "/meilleures-thermopompes" }]),
          getCollectionPageSchema({ name: "Meilleures thermopompes au Québec", description: "Classements sur données certifiées.", url: "/meilleures-thermopompes" }),
        ]}
      />
      <SeoHero
        eyebrow="Classements"
        title={`Les meilleures thermopompes au Québec en ${year}`}
        titleLines={["Les meilleures", "thermopompes au Québec", `en ${year}`]}
        serif="meilleures"
        intro="Pas d'avis sponsorisés, pas de « choix de la rédaction » : chaque classement trie les machines vendues au Québec sur une donnée certifiée, publiée par Hydro-Québec et ENERGY STAR."
        breadcrumbs={[{ label: "Meilleures thermopompes", href: "/meilleures-thermopompes" }]}
        motif={{
          kind: "leaders",
          rows: tables.flatMap(({ def, r }) =>
            r.models[0] ? [{ label: SHORT[def.slug] ?? def.metricLabel, href: `/meilleures-thermopompes/${def.slug}`, leader: `${r.models[0].brand} ${r.models[0].name}`, value: def.value(r.models[0]) }] : [],
          ),
        }}
      />
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-12 space-y-14">
        {tables.map(({ def, r }) => {
          return (
            <div key={def.slug}>
              <h2 className="text-[24px] font-bold text-[#172126]">
                <Link href={`/meilleures-thermopompes/${def.slug}`} className="hover:text-[#e54b17]">{def.h1}</Link>
              </h2>
              <p className="text-[#536873] mt-1 mb-5">{def.description}</p>
              <ModelTable models={r.models} showRank metric={{ label: def.metricLabel, value: def.value }} />
              <p className="mt-3 text-sm">
                <Link href={`/meilleures-thermopompes/${def.slug}`} className="text-[#e54b17] font-semibold">Voir les 25 premières →</Link>
              </p>
            </div>
          );
        })}
      </section>
      <Prose>
        <h2>Notre méthode</h2>
        <p>
          Nous partons de la liste officielle des appareils admissibles à LogisVert publiée par Hydro-Québec, mise à jour automatiquement. Chaque
          appariement y est identifié par sa référence AHRI, avec sa capacité de chauffage certifiée à -8 °C et à -15 °C, son COP à -15 °C, ses
          indices SEER2 et HSPF2 et son montant de subvention. Les machines identiques vendues sous plusieurs marques sont regroupées. Aucune
          valeur n'est estimée dans ces classements : une machine sans donnée certifiée n'y figure pas.
        </p>
      </Prose>
      <CtaThermoMatch />
    </main>
  );
}
