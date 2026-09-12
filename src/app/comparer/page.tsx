import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { getComparisonData, MAX_COMPARE } from "@/lib/data/queries/comparator";
import { getAllCatalogueProducts, type SelectableModelData } from "@/lib/data/queries/catalogue";
import { CompareSelector } from "@/components/compare/CompareSelector";
import { ComparePageClient } from "@/components/compare/ComparePageClient";
import { getProductDetail, type ProductDetail } from "@/lib/data/queries/product-detail";
import { DuelGlissiere, type VsModel } from "@/components/heroes-v2/produit/DuelGlissiere";
import { DuelIntro, DuelSection } from "@/components/sections-v2/catalogue/DuelSections";

/* Exemple du face-à-face sans sélection : deux murales 12 000 BTU climat froid (photos officielles, comme à l'accueil). */
const EXEMPLE_VS = [
  { slug: "mitsubishi-electric-muz-fx12nlhz", img: "/images/comparer-accueil/mitsubishi-muz-fx12nlhz.webp" },
  { slug: "daikin-rxt12avju", img: "/images/comparer-accueil/daikin-rxt12avju.webp" },
];

function toVs(d: ProductDetail, img: string | null): VsModel {
  return {
    slug: d.model.slug,
    brand: d.brand.name,
    name: d.model.name,
    img,
    h5: d.model.heatingCapacity5FMaxBtu ?? null,
    hspf2: d.configuration?.hspf2 ?? d.model.hspf2Max ?? null,
    seer2: d.configuration?.seer2 ?? d.model.seer2Max ?? null,
  };
}

export const metadata: Metadata = createMetadata({
  title: `Comparateur de thermopompes au Québec`,
  description:
    `Comparez côte à côte de 2 à 5 thermopompes : performances, efficacité, silence et garantie, avec les chiffres ENERGY STAR et Hydro-Québec.`,
  canonicalPath: "/comparer",
  robots: { index: true, follow: true },
});

interface ComparerPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function ComparerPage({ searchParams }: ComparerPageProps) {
  const params = await searchParams;
  const modelsParam = typeof params.models === "string" ? params.models : "";
  const slugs = modelsParam.split(",").map((s) => s.trim()).filter(Boolean);
  const data = getComparisonData(slugs);
  const allProducts = getAllCatalogueProducts();
  // Liste sérialisée en entier dans la page (~3 900 modèles) : seulement les champs que lit le sélecteur.
  const selectable: SelectableModelData[] = allProducts.map((p) => ({ slug: p.model.slug, name: p.model.name, brandName: p.brand.name, brandSlug: p.brand.slug, capacityBtu: p.model.nominalCapacityBtu ?? null, imageUrl: p.imageUrl, isColdClimate: p.isColdClimate, systemTypeLabel: p.systemTypeLabel, hspf2: p.configuration?.hspf2 ?? null }));
  const hasComparison = data.products.length >= 2;
  const selected = data.products.map((p) => toVs(p.detail, p.imageUrl));
  const vsModels = selected.length
    ? selected.slice(0, 2)
    : EXEMPLE_VS.flatMap((e) => {
        const d = getProductDetail(e.slug);
        return d ? [toVs(d, e.img)] : [];
      });

  return (
    <main style={{ minHeight: "100vh" }}>
      {/* ── Héros : duel à glissière ─────────────────────────── */}
      <DuelGlissiere models={vsModels} mode={selected.length ? "selection" : "exemple"} extra={Math.max(0, selected.length - 2)} hasComparison={hasComparison} />

      {/* ── Comparaison : la scène acier / sable du héros continue, colonne vertébrale au centre ── */}
      <DuelSection>
        {hasComparison ? (
          <ComparePageClient data={data} maxCompare={MAX_COMPARE} selectableModels={selectable} />
        ) : (
          <div>
            <DuelIntro max={MAX_COMPARE} />
            <CompareSelector
              products={selectable}
              initialSlugs={slugs.filter((s) => data.products.some((p) => p.detail.model.slug === s))}
              maxCompare={MAX_COMPARE}
            />
          </div>
        )}
      </DuelSection>
    </main>
  );
}
