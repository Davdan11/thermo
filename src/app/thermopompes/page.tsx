import { Suspense } from "react";
import { brandLogoPath } from "@/lib/data/brand-logos";
import { existsSync, statSync } from "fs";
import { join } from "path";

import type { Metadata } from "next";
import { createMetadata, SITE_URL } from "@/lib/seo";
import { getCatalogueModels, getAvailableFilters } from "@/lib/data/queries/catalogue";
import type { CatalogueParams, CatalogueSort } from "@/lib/data/queries/catalogue";
import type { SystemType } from "@/lib/data/types/enums";
import { SYSTEM_TYPES } from "@/lib/data/types/enums";
import { CatalogueFilters, ActiveFilterChips } from "@/components/product/CatalogueFilters";
import { CatalogueSearch } from "@/components/product/CatalogueSearch";
import { CatalogueSortSelect } from "@/components/product/CatalogueSortSelect";
import { MobileFilterDrawer } from "@/components/product/MobileFilterDrawer";
import { CatalogueEmpty } from "@/components/product/CatalogueEmpty";
import { CataloguePagination } from "@/components/product/CataloguePagination";
import { CatalogueHero, type WallItem } from "@/components/product/CatalogueHero";
import { getEligibleModelCount } from "@/lib/data/queries/stats";
import { getPublishedBrandsSummary } from "@/lib/data/queries/brand-detail";
import { registry } from "@/lib/data/registry";
import { displayFont, serifFont } from "@/lib/fonts";
import { MotionRoot } from "@/components/sections-v2/catalogue/motion";
import { BrandStrip, CatalogueCta, FilterTitle, ResultCount, type StripBrand } from "@/components/sections-v2/catalogue/GallerySections";
import { GalleryGrid } from "@/components/sections-v2/catalogue/GalleryGrid";
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

/** Bande de marques : mêmes marques et mêmes liens qu’avant (deux rangées sur ordinateur, huit sur téléphone). */
function stripBrands(list: { name: string; slug: string }[]): StripBrand[] {
  return list.flatMap((b) => {
    const src = monoLogo(b.slug);
    return src ? [{ ...b, src }] : [];
  });
}

/* ------------------------------------------------------------------
   Metadata — catalogue, pagination et facettes
   - /thermopompes           : page canonique, indexable.
   - /thermopompes?page=N    : chaque page de la pagination est indexable avec sa propre canonique
                               (recommandation actuelle de Google : ne pas canoniser la page 2 vers la 1).
   - filtres, tri, recherche : noindex,follow, sans canonique contradictoire. Les liens vers les fiches
                               restent suivis ; les intentions « murale », « centrale », « 12 000 BTU »…
                               ont déjà leurs pages dédiées indexables.
   - paramètres de suivi (utm_*, gclid…) : ignorés, canonique vers l’URL propre.
   ------------------------------------------------------------------ */

const CATALOGUE_TITLE = "Thermopompe à vendre au Québec : tous les modèles";
const CATALOGUE_DESCRIPTION =
  "Toutes les thermopompes à vendre au Québec, comparées par marque, capacité et performance, pour trouver le bon système pour votre habitation.";
const FACET_KEYS = ["search", "type", "brand", "series", "capacity", "coldClimate", "sort"] as const;

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}): Promise<Metadata> {
  const sp = await searchParams;
  const noindex = { index: false, follow: true } as const;
  const cleanUrl = `${SITE_URL}/thermopompes`;

  if (FACET_KEYS.some((k) => sp[k] !== undefined)) {
    return createMetadata({ title: CATALOGUE_TITLE, description: CATALOGUE_DESCRIPTION, robots: noindex, openGraph: { url: cleanUrl } });
  }

  const params = parseParams(sp);
  const page = params.page ?? 1;
  if (page <= 1) {
    return createMetadata({ title: CATALOGUE_TITLE, description: CATALOGUE_DESCRIPTION, robots: { index: true, follow: true }, canonicalPath: "/thermopompes" });
  }

  const { totalPages } = getCatalogueModels(params);
  if (page > totalPages) {
    // Page au-delà de la dernière : liste vide, rien à indexer.
    return createMetadata({ title: `Catalogue des thermopompes, page ${page}`, description: CATALOGUE_DESCRIPTION, robots: noindex, openGraph: { url: cleanUrl } });
  }
  return createMetadata({
    title: `Thermopompes au Québec : catalogue, page ${page} sur ${totalPages}`,
    description: `Page ${page} sur ${totalPages} du catalogue : comparez les modèles de thermopompes vendus au Québec, leurs capacités et leurs performances certifiées.`,
    robots: { index: true, follow: true },
    canonicalPath: `/thermopompes?page=${page}`,
  });
}

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
      {/* ---- Héros « Le showroom » : titre animé, recherche, plateau tournant ---- */}
      <CatalogueHero
        stats={hero.stats}
        wall={hero.wall}
        search={
          <Suspense>
            <CatalogueSearch variant="premium" />
          </Suspense>
        }
      />

      <MotionRoot className="catg-root">
        {/* ---- Bande de marques : prolonge le héros sur la pierre ---- */}
        <BrandStrip
          rows={[
            stripBrands([
              { name: "Daikin", slug: "daikin" },
              { name: "Mitsubishi Electric", slug: "mitsubishi-electric" },
              { name: "Fujitsu", slug: "fujitsu" },
              { name: "Gree", slug: "gree" },
              { name: "Panasonic", slug: "panasonic" },
              { name: "LG", slug: "lg" },
            ]),
            stripBrands([
              { name: "Samsung", slug: "samsung" },
              { name: "Tosot", slug: "tosot" },
              { name: "Bosch", slug: "bosch" },
              { name: "Lennox", slug: "lennox" },
              { name: "Moovair", slug: "moovair" },
              { name: "Mainline", slug: "mainline" },
              { name: "Haier", slug: "haier" },
            ]),
          ]}
          mobile={stripBrands([
            { name: "Daikin", slug: "daikin" },
            { name: "Mitsubishi", slug: "mitsubishi-electric" },
            { name: "Fujitsu", slug: "fujitsu" },
            { name: "Gree", slug: "gree" },
            { name: "Panasonic", slug: "panasonic" },
            { name: "LG", slug: "lg" },
            { name: "Samsung", slug: "samsung" },
            { name: "Tosot", slug: "tosot" },
          ])}
        />

        {/* ---- La galerie : une feuille de papier chaud qui remonte sur la pierre ---- */}
        <div className="relative z-[25] -mt-8 rounded-[28px] sm:rounded-[40px]" style={{ background: "#F4EFE7", boxShadow: "0 -1px 0 rgba(18,20,23,0.05), 0 -28px 56px -38px rgba(18,20,23,0.32)" }}>
          {/* Cible de la recherche du héros (Entrée / loupe) : on descend jusqu’ici. */}
          <div id="catalogue-resultats" className="mx-auto max-w-[1440px] px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-14 lg:px-12" style={{ scrollMarginTop: 96 }}>
            <div className="flex flex-col gap-10 lg:flex-row xl:gap-14">
              {/* Filtres (ordinateur) */}
              <aside className="hidden w-[300px] shrink-0 lg:block">
                <div className="sticky top-28 rounded-[22px] bg-white p-7" style={{ boxShadow: "0 0 0 1px rgba(10,20,25,0.05), 0 30px 60px -44px rgba(10,20,25,0.4)" }}>
                  <FilterTitle>Filtrer</FilterTitle>
                  <Suspense>
                    <CatalogueFilters filters={filters} />
                  </Suspense>
                </div>
              </aside>

              {/* Résultats */}
              <div className="min-w-0 flex-1">
                <div className="mb-7 flex flex-wrap items-end justify-between gap-x-6 gap-y-5 pb-6" style={{ borderBottom: "1px solid rgba(10,20,25,0.1)" }}>
                  <ResultCount count={resultCount} />
                  <div className="flex flex-wrap items-center gap-3">
                    <Suspense>
                      <MobileFilterDrawer filters={filters} resultCount={resultCount} />
                    </Suspense>
                    <Suspense>
                      <CatalogueSortSelect />
                    </Suspense>
                  </div>
                </div>

                <div className="mb-6 empty:hidden">
                  <Suspense>
                    <ActiveFilterChips />
                  </Suspense>
                </div>

                {resultCount > 0 ? <GalleryGrid products={products} /> : <CatalogueEmpty hasFilters={hasActiveFilters} />}
              </div>
            </div>

            {resultCount > 0 && totalPages > 1 && (
              <div className="mt-14">
                <CataloguePagination page={page} totalPages={totalPages} />
              </div>
            )}
          </div>
        </div>

        <CatalogueCta
          title="Trop de modèles ? Laissez ThermoMatch trier pour vous."
          text="Répondez à 13 questions sur votre maison. Thermopompes À Vendre retient trois machines vraiment adaptées parmi toutes les marques, sur des données certifiées, sans parti pris."
        />
      </MotionRoot>
    </main>
  );
}

