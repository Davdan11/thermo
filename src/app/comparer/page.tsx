import type { Metadata } from "next";
import { createMetadata } from "@/lib/seo";
import { getComparisonData, MAX_COMPARE } from "@/lib/data/queries/comparator";
import { getAllCatalogueProducts } from "@/lib/data/queries/catalogue";
import { CompareSelector } from "@/components/compare/CompareSelector";
import { ComparePageClient } from "@/components/compare/ComparePageClient";
import { getProductDetail, type ProductDetail } from "@/lib/data/queries/product-detail";
import { CompareHero, type VsModel } from "@/components/product/hero/CompareHero";

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
  title: "Comparateur de thermopompes",
  description: "Comparez côte à côte les performances, l'efficacité, le silence et la garantie des thermopompes.",
  alternates: { canonical: "/comparer" },
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
  const selectable = allProducts.map(p => ({ slug: p.model.slug, name: p.model.name, brandName: p.brand.name, brandSlug: p.brand.slug, capacityBtu: p.model.nominalCapacityBtu ?? null, imageUrl: p.imageUrl, isColdClimate: p.isColdClimate, systemTypeLabel: p.systemTypeLabel, minHeatingTempC: p.configuration?.minHeatingTempC ?? null, seer2: p.configuration?.seer2 ?? null, hspf2: p.configuration?.hspf2 ?? null, noiseIndoorMinDbA: p.configuration?.noiseIndoorMinDbA ?? null, hasWifi: p.configuration?.hasWifi ?? null, refrigerant: p.refrigerant }));
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
      {/* ── Héros : face-à-face ─────────────────────────────── */}
      <CompareHero models={vsModels} mode={selected.length ? "selection" : "exemple"} extra={Math.max(0, selected.length - 2)} hasComparison={hasComparison} />

      {/* ── Comparison ───────────────────────────────────────── */}
      <section id="comparateur" style={{ background: "var(--color-background)", scrollMarginTop: 100 }}>
        <div className="w-full max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 pt-8 pb-16 sm:pb-20">
          {hasComparison ? (
            <ComparePageClient data={data} maxCompare={MAX_COMPARE} selectableModels={selectable} />
          ) : (
            <div>
              <div style={{ textAlign: "center", marginBottom: 32, padding: "28px 24px", background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: 10 }}>
                <h2 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: "var(--color-foreground)" }}>
                  Sélectionnez vos thermopompes à comparer
                </h2>
                <p style={{ margin: "8px 0 0", fontSize: 14, color: "var(--color-muted)", maxWidth: 480, marginLeft: "auto", marginRight: "auto" }}>
                  Choisissez entre 2 et {MAX_COMPARE} modèles pour les comparer côte à côte.
                </p>
              </div>
              <CompareSelector
                products={selectable}
                initialSlugs={slugs.filter((s) => data.products.some((p) => p.detail.model.slug === s))}
                maxCompare={MAX_COMPARE}
              />
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
