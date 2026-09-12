import { Suspense } from "react";
import Link from "next/link";
import { brandLogoPath } from "@/lib/data/brand-logos";
import { existsSync, statSync } from "fs";
import { join } from "path";

import Image from "next/image";
import { createMetadata } from "@/lib/seo";
import { getCatalogueModels, getAvailableFilters } from "@/lib/data/queries/catalogue";
import type { CatalogueParams, CatalogueSort } from "@/lib/data/queries/catalogue";
import type { SystemType } from "@/lib/data/types/enums";
import { SYSTEM_TYPES } from "@/lib/data/types/enums";
import { CatalogueFilters, ActiveFilterChips } from "@/components/product/CatalogueFilters";
import { CatalogueSearch } from "@/components/product/CatalogueSearch";
import { CatalogueSortSelect } from "@/components/product/CatalogueSortSelect";
import { MobileFilterDrawer } from "@/components/product/MobileFilterDrawer";
import { CompareSelection } from "@/components/product/CompareSelection";
import { CatalogueEmpty } from "@/components/product/CatalogueEmpty";
import { CataloguePagination } from "@/components/product/CataloguePagination";
import { buttonVariants } from "@/components/ui/button";
import { CtaThermoMatch } from "@/components/seo/SeoBlocks";
import { CatalogueHero, type WallItem } from "@/components/product/CatalogueHero";
import { getEligibleModelCount } from "@/lib/data/queries/stats";
import { getPublishedBrandsSummary } from "@/lib/data/queries/brand-detail";
import { registry } from "@/lib/data/registry";
import { displayFont, serifFont } from "@/lib/fonts";
/** Logo monochrome (bleu nuit) pour la bande de marques ; logo couleur sinon, null si aucun logo. */
function monoLogo(slug: string): string | null {
  const mono = `/images/marques/mono/${slug}.png`;
  return existsSync(join(process.cwd(), "public", mono)) ? mono : brandLogoPath(slug);
}

/** Chiffres et mur de produits du héros : catalogue réel, une photo officielle par marque (les plus grandes marques d’abord). */
function getHeroData(): { stats: { models: number; brands: number; coldClimate: number }; wall: WallItem[] } {
  const brands = getPublishedBrandsSummary().sort((a, b) => b.modelCount - a.modelCount);
  const firstByBrand = new Map<string, WallItem>();
  const seenImg = new Set<string>();
  const names = new Map(brands.map((b) => [b.brand.id, b.brand.name]));
  for (const m of registry.models) {
    if (m.status !== "published" || !m.isActive2026 || !m.thermomatchEligible || !m.imageUrl || m.systemType !== "wall-single") continue;
    const name = names.get(m.brandId);
    if (!name || firstByBrand.has(m.brandId) || seenImg.has(m.imageUrl)) continue;
    const file = join(process.cwd(), "public", m.imageUrl);
    // Photos trop petites (vignettes de quelques ko) : floues une fois agrandies, on les écarte.
    if (!existsSync(file) || statSync(file).size < 12000) continue;
    seenImg.add(m.imageUrl);
    firstByBrand.set(m.brandId, { slug: m.slug, brand: name, btu: m.nominalCapacityBtu ?? null, img: m.imageUrl });
  }
  const wall = brands.flatMap((b) => (firstByBrand.has(b.brand.id) ? [firstByBrand.get(b.brand.id)!] : [])).slice(0, 18);
  return {
    stats: { models: getEligibleModelCount(), brands: brands.length, coldClimate: brands.reduce((sum, b) => sum + b.coldClimateCount, 0) },
    wall,
  };
}

/* ------------------------------------------------------------------
   Metadata
   ------------------------------------------------------------------ */

export const metadata = createMetadata({
  title: "Thermopompes — Explorez les modèles offerts au Québec",
  description:
    "Comparez les modèles de thermopompes, les capacités et les performances pour trouver un système adapté à votre habitation au Québec.",
  robots: { index: true, follow: true },
  canonicalPath: "/thermopompes",
});

/* ------------------------------------------------------------------
   Param validation
   ------------------------------------------------------------------ */

const VALID_SORTS = new Set<CatalogueSort>([
  "relevance",
  "brand-asc",
  "capacity-asc",
  "capacity-desc",
]);

function parseParams(
  sp: Record<string, string | string[] | undefined>,
): CatalogueParams {
  const params: CatalogueParams = {};

  const search = typeof sp.search === "string" ? sp.search.trim() : "";
  if (search) params.search = search;

  const type = typeof sp.type === "string" ? sp.type : "";
  if (type && (SYSTEM_TYPES as readonly string[]).includes(type)) {
    params.type = type as SystemType;
  }

  const brand = typeof sp.brand === "string" ? sp.brand.trim() : "";
  if (brand) params.brand = brand;

  const series = typeof sp.series === "string" ? sp.series.trim() : "";
  if (series) params.series = series;

  const capacity = typeof sp.capacity === "string" ? parseInt(sp.capacity, 10) : NaN;
  if (!isNaN(capacity) && capacity > 0) params.capacity = capacity;

  if (sp.coldClimate === "true") params.coldClimate = true;

  const sort = typeof sp.sort === "string" ? sp.sort : "";
  if (VALID_SORTS.has(sort as CatalogueSort)) {
    params.sort = sort as CatalogueSort;
  }

  const page = typeof sp.page === "string" ? parseInt(sp.page, 10) : 1;
  if (!isNaN(page) && page > 0) params.page = page;

  return params;
}

/* ------------------------------------------------------------------
   Page
   ------------------------------------------------------------------ */

export default async function ThermopompesPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const params = parseParams(sp);
  const { products, totalCount, page, totalPages } = getCatalogueModels(params);
  const filters = getAvailableFilters();

  const hero = getHeroData();

  const hasActiveFilters = !!(params.type || params.brand || params.capacity || params.coldClimate || params.search);
  const resultCount = totalCount;

  return (
    <main className={`min-h-screen bg-[var(--color-background)] ${displayFont.variable} ${serifFont.variable}`}>
      {/* ---- Héros premium : titre animé, recherche, mur de produits ---- */}
      <CatalogueHero
        stats={hero.stats}
        wall={hero.wall}
        search={
          <Suspense>
            <CatalogueSearch variant="premium" />
          </Suspense>
        }
      />

      {/* ---- Featured Brands Strip ---- */}
      {/* ---- Featured Brands Strip ---- */}
      <div className="w-full bg-white border-y border-gray-200 shadow-sm relative z-20 hidden md:flex flex-col">
          {/* Row 1: 6 brands */}
          <div className="flex items-stretch border-b border-gray-100 h-[90px] w-full">
            {[
              { name: "Daikin", slug: "daikin", src: monoLogo("daikin") },
              { name: "Mitsubishi Electric", slug: "mitsubishi-electric", src: monoLogo("mitsubishi-electric") },
              { name: "Fujitsu", slug: "fujitsu", src: monoLogo("fujitsu") },
              { name: "Gree", slug: "gree", src: monoLogo("gree") },
              { name: "Panasonic", slug: "panasonic", src: monoLogo("panasonic") },
              { name: "LG", slug: "lg", src: monoLogo("lg") },
            ].filter((b) => b.src).map((brand, i) => (
              <Link 
                key={brand.slug} 
                href={`/thermopompes?brand=${brand.slug}`}
                className={`flex-1 flex items-center justify-center px-4 py-2 hover:bg-gray-50 transition-colors ${i !== 5 ? 'border-r border-gray-100' : ''}`}
                title={`Voir les thermopompes ${brand.name}`}
              >
                <div className="w-[150px] h-[65px] flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                  <Image src={brand.src ?? ""} alt={brand.name} width={180} height={65} sizes="150px" className="max-w-[130px] max-h-[30px] object-contain w-auto h-auto" />
                </div>
              </Link>
            ))}
          </div>
          {/* Row 2: 7 brands */}
          <div className="flex items-stretch h-[90px] w-full">
            {[
              { name: "Samsung", slug: "samsung", src: monoLogo("samsung") },
              { name: "Tosot", slug: "tosot", src: monoLogo("tosot") },
              { name: "Bosch", slug: "bosch", src: monoLogo("bosch") },
              { name: "Lennox", slug: "lennox", src: monoLogo("lennox") },
              { name: "Moovair", slug: "moovair", src: monoLogo("moovair") },
              { name: "Mainline", slug: "mainline", src: monoLogo("mainline") },
              { name: "Haier", slug: "haier", src: monoLogo("haier") },
            ].filter((b) => b.src).map((brand, i) => (
              <Link 
                key={brand.slug} 
                href={`/thermopompes?brand=${brand.slug}`}
                className={`flex-1 flex items-center justify-center px-4 py-2 hover:bg-gray-50 transition-colors ${i !== 6 ? 'border-r border-gray-100' : ''}`}
                title={`Voir les thermopompes ${brand.name}`}
              >
                <div className="w-[150px] h-[65px] flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                  <Image src={brand.src ?? ""} alt={brand.name} width={180} height={65} sizes="150px" className="max-w-[130px] max-h-[30px] object-contain w-auto h-auto" />
                </div>
              </Link>
            ))}
          </div>
      </div>
      
      {/* Mobile Brands Grid (visible only on small screens) */}
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 mt-6 md:hidden">
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
          {[
            { name: "Daikin", slug: "daikin", src: monoLogo("daikin") },
            { name: "Mitsubishi", slug: "mitsubishi-electric", src: monoLogo("mitsubishi-electric") },
            { name: "Fujitsu", slug: "fujitsu", src: monoLogo("fujitsu") },
            { name: "Gree", slug: "gree", src: monoLogo("gree") },
            { name: "Panasonic", slug: "panasonic", src: monoLogo("panasonic") },
            { name: "LG", slug: "lg", src: monoLogo("lg") },
            { name: "Samsung", slug: "samsung", src: monoLogo("samsung") },
            { name: "Tosot", slug: "tosot", src: monoLogo("tosot") },
          ].filter((b) => b.src).map((brand) => (
            <Link 
              key={brand.slug} 
              href={`/thermopompes?brand=${brand.slug}`}
              className="bg-white border border-gray-200 rounded-md p-1 flex items-center justify-center h-[55px] hover:bg-gray-50 transition-colors"
            >
              <div className="w-full h-full flex items-center justify-center">
                <Image src={brand.src ?? ""} alt={brand.name} width={180} height={65} sizes="180px" className="max-w-full max-h-full object-contain w-auto h-auto" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Cible de la recherche du héros (Entrée / loupe) : on descend jusqu’ici. */}
      <div id="catalogue-resultats" className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-10 sm:py-14" style={{ scrollMarginTop: 96 }}>
        {/* ---- Mobile filter trigger & Sort (Mobile only toolbar) ---- */}
        <div className="flex sm:hidden items-center justify-between gap-3 mb-6">
          <Suspense>
            <MobileFilterDrawer filters={filters} resultCount={resultCount} />
          </Suspense>
          <Suspense>
            <CatalogueSortSelect />
          </Suspense>
        </div>

        {/* ---- Main content: sidebar + results ---- */}
        <div className="flex flex-col lg:flex-row gap-10">
          
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-28">
              <div className="mb-8">
                <h2 className="text-[22px] font-bold text-[#172126]">Filtrer</h2>
                <div className="w-8 h-[2px] bg-[var(--color-accent)] mt-2"></div>
              </div>
              <Suspense>
                <CatalogueFilters filters={filters} />
              </Suspense>
            </div>
          </aside>

          {/* Results */}
          <div className="flex-1 min-w-0">
            
            {/* Desktop Sort & Count */}
            <div className="hidden sm:flex items-center justify-between border-y border-[#E5E5E5] py-4 mb-8">
              <p className="text-[15px] font-medium text-[#172126]" aria-live="polite">
                {resultCount} modèles documentés
              </p>
              <div className="flex items-center gap-3">
                <Suspense>
                  <CatalogueSortSelect />
                </Suspense>
              </div>
            </div>

            {/* Active filters (if any) */}
            <div className="mb-6">
              <Suspense>
                <ActiveFilterChips />
              </Suspense>
            </div>

            {/* Grid */}
            {resultCount > 0 ? (
              <div className="flex flex-col gap-10">
                <CompareSelection products={products} />
              </div>
            ) : (
              <CatalogueEmpty hasFilters={hasActiveFilters} />
            )}
          </div>
        </div>

        {/* Global Pagination centered on the entire page */}
        {resultCount > 0 && totalPages > 1 && (
          <div className="mt-12">
            <CataloguePagination page={page} totalPages={totalPages} />
          </div>
        )}
      </div>
      <CtaThermoMatch
        title="Trop de modèles ? Laissez ThermoMatch trier pour vous."
        text="Répondez à 13 questions sur votre maison. ThermoMatch retient trois machines vraiment adaptées parmi toutes les marques certifiées par Hydro-Québec, sans parti pris."
      />
    </main>
  );
}

