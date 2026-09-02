import { Suspense } from "react";
import Link from "next/link";
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
import { buttonVariants } from "@/components/ui/button";

/* ------------------------------------------------------------------
   Metadata
   ------------------------------------------------------------------ */

export const metadata = createMetadata({
  title: "Thermopompes — Explorez les modèles offerts au Québec | ThermopompesÀVendre.ca",
  description:
    "Comparez les modèles de thermopompes, les capacités et les performances pour trouver un système adapté à votre habitation au Québec.",
  robots: { index: true, follow: true },
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
  const products = getCatalogueModels(params);
  const filters = getAvailableFilters();

  const hasActiveFilters = !!(params.type || params.brand || params.capacity || params.coldClimate || params.search);
  const resultCount = products.length;

  return (
    <main className="min-h-screen bg-[var(--color-background)]">
      {/* ---- Dark Hero Header ---- */}
      <div className="relative w-full bg-[#0C1821] py-16 md:py-28 overflow-hidden">
        {/* Decorative Watermark */}
        <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
          <span 
            className="text-white font-bold leading-none" 
            style={{ fontSize: "600px", letterSpacing: "-0.05em" }}
          >
            pq
          </span>
        </div>

        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 flex flex-col lg:flex-row lg:items-center justify-between gap-12 lg:gap-8">
          
          {/* Text Content */}
          <div className="max-w-2xl z-10 shrink-0">
            <span className="text-[var(--color-accent)] font-bold text-[13px] tracking-widest uppercase mb-6 block">
              CATALOGUE QUÉBÉCOIS
            </span>
            <h1 
              className="text-white font-bold tracking-tight mb-5"
              style={{
                color: "#FFFFFF",
                fontSize: "clamp(3rem, 5vw, 4.5rem)",
                lineHeight: "1.1",
              }}
            >
              Explorez les<br />thermopompes.
            </h1>
            <p className="text-white/70 text-lg md:text-xl max-w-md font-medium">
              Comparez les marques, les capacités et les performances selon vos besoins.
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full max-w-lg z-10 lg:ml-auto">
            <Suspense>
              <CatalogueSearch variant="dark" />
            </Suspense>
          </div>

        </div>
      </div>

      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 py-10 sm:py-14">
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
              <CompareSelection products={products} />
            ) : (
              <CatalogueEmpty hasFilters={hasActiveFilters} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
