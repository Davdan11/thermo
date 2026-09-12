/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from "next";
import Link from "next/link";
import { createMetadata, getBreadcrumbSchema, getCollectionPageSchema } from "@/lib/seo";
import { getAllBrandStats } from "@/lib/seo/programmatic";
import logisVertMetadata from "@/lib/subsidies/logisvert-metadata.json";
import { JsonLd } from "@/components/seo/SeoBlocks";
import { BarometreIndexHero } from "@/components/heroes-v2/prix/BarometreHeroes";
import { Root } from "@/components/sections-v2/prix/kit";
import { BaroBrandTable, BaroCta, BaroProse, BaroTrust } from "@/components/sections-v2/prix/BarometreSections";

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
    <main className="bg-[#EAF5EE] text-[#0F3D2B]">
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
      {/* Sous le héros « Baromètre » : instruments de mesure (src/components/sections-v2/prix/). */}
      <Root>
        <BaroTrust />
        <BaroBrandTable
          updated={updated}
          brands={brands.map((b) => ({
            slug: b.slug,
            name: b.name,
            models: b.models.filter((m) => m.logisVertDollars > 0).length,
            min: b.minLogisVert,
            max: b.maxLogisVert,
            cold: b.coldClimateCount,
          }))}
        />
        <BaroProse title="LogisVert en bref">
          <p>
            LogisVert est le programme d'aide financière d'Hydro-Québec pour les thermopompes efficaces. Le montant dépend de l'appariement certifié
            (unité extérieure + intérieure), de sa capacité de chauffage et de sa certification climat froid. Vérifiez un modèle précis sur la{" "}
            <Link href="/subventions">page Subventions</Link> ou laissez <Link href="/trouver-ma-thermopompe">ThermoMatch</Link> intégrer la subvention à sa recommandation.
          </p>
        </BaroProse>
        <BaroCta />
      </Root>
    </main>
  );
}
