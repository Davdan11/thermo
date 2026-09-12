/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, getBreadcrumbSchema, getCollectionPageSchema } from "@/lib/seo";
import { getAllBrandStats } from "@/lib/seo/programmatic";
import logisVertMetadata from "@/lib/subsidies/logisvert-metadata.json";
import { CtaThermoMatch, JsonLd, Prose, TrustStrip } from "@/components/seo/SeoBlocks";
import { BarometreIndexHero } from "@/components/heroes-v2/prix/BarometreHeroes";

export const metadata: Metadata = createMetadata({
  title: `Subvention LogisVert ${new Date().getFullYear()} par marque de thermopompe : montants officiels Hydro-Québec`,
  description:
    "Montants LogisVert minimum et maximum pour chaque marque de thermopompe vendue au Québec, tirés de la liste officielle d'Hydro-Québec et mis à jour automatiquement.",
  canonicalPath: "/subventions/logisvert",
});

export default function LogisVertIndex() {
  const brands = getAllBrandStats().filter((b) => b.maxLogisVert > 0).sort((a, b) => b.maxLogisVert - a.maxLogisVert);
  const updated = (logisVertMetadata as { updatedAt?: string }).updatedAt?.slice(0, 10) ?? null;
  return (
    <main className="bg-[#f8f5f0] text-[#071d2b]">
      <JsonLd
        data={[
          getBreadcrumbSchema([{ name: "Accueil", url: "/" }, { name: "Subventions", url: "/subventions" }, { name: "LogisVert par marque", url: "/subventions/logisvert" }]),
          getCollectionPageSchema({ name: "Subvention LogisVert par marque", description: "Montants officiels par marque.", url: "/subventions/logisvert" }),
        ]}
      />
      <BarometreIndexHero
        intro={`Pour chaque marque, le nombre de modèles admissibles et la fourchette de montants de la liste officielle d'Hydro-Québec${updated ? ` (liste du ${updated})` : ""}.`}
        breadcrumbs={[{ label: "Subventions", href: "/subventions" }, { label: "LogisVert par marque", href: "/subventions/logisvert" }]}
        updated={updated}
        brands={brands.slice(0, 16).map((b) => ({ slug: b.slug, name: b.name, max: b.maxLogisVert, models: b.models.filter((m) => m.logisVertDollars > 0).length }))}
        stats={[
          { label: "Marques", value: String(brands.length) },
          { label: "Montant le plus élevé", value: `${Math.max(...brands.map((b) => b.maxLogisVert)).toLocaleString("fr-CA")} $` },
          { label: "Programme", value: "LogisVert" },
          { label: "Liste du", value: updated ?? "—" },
        ]}
      />
      <TrustStrip />
      <section className="mx-auto max-w-6xl px-5 sm:px-8 py-12">
        <div className="overflow-x-auto rounded-xl border border-[#e4ddd5] bg-white">
          <table className="w-full text-sm">
            <thead className="bg-[#f8f5f0] text-[11px] uppercase tracking-wider text-[#536873]">
              <tr>
                <th className="px-4 py-3 text-left">Marque</th>
                <th className="px-4 py-3 text-right">Modèles admissibles</th>
                <th className="px-4 py-3 text-right">Minimum</th>
                <th className="px-4 py-3 text-right">Maximum</th>
                <th className="px-4 py-3 text-right">Grand froid</th>
              </tr>
            </thead>
            <tbody>
              {brands.map((b) => (
                <tr key={b.slug} className="border-t border-[#f0ebe4] hover:bg-[#fffaf5]">
                  <td className="px-4 py-3"><Link href={`/subventions/logisvert/${b.slug}`} className="font-semibold hover:text-[#e54b17]">{b.name}</Link></td>
                  <td className="px-4 py-3 text-right">{b.models.filter((m) => m.logisVertDollars > 0).length}</td>
                  <td className="px-4 py-3 text-right">{b.minLogisVert.toLocaleString("fr-CA")} $</td>
                  <td className="px-4 py-3 text-right font-semibold text-[#1b6b3a]">{b.maxLogisVert.toLocaleString("fr-CA")} $</td>
                  <td className="px-4 py-3 text-right">{b.coldClimateCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <Prose>
        <h2>LogisVert en bref</h2>
        <p>
          LogisVert est le programme d'aide financière d'Hydro-Québec pour les thermopompes efficaces. Le montant dépend de l'appariement certifié
          (unité extérieure + intérieure), de sa capacité de chauffage et de sa certification climat froid. Vérifiez un modèle précis sur la{" "}
          <Link href="/subventions">page Subventions</Link> ou laissez <Link href="/trouver-ma-thermopompe">ThermoMatch</Link> intégrer la subvention à sa recommandation.
        </p>
      </Prose>
      <CtaThermoMatch />
    </main>
  );
}
