"use client";

import { useState, useMemo, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Search, X, ArrowRight } from "lucide-react";
import { ProductCard } from "@/components/product/ProductCard";
import { Button } from "@/components/ui/button";
import type { CatalogueProduct } from "@/lib/data/queries/catalogue";

/* ==================================================================
   CompareSelector — Uses the same ProductCard as /thermopompes
   ================================================================== */

const POPULAR_SLUGS = new Set([
  // Mitsubishi Electric
  "mitsubishi-fs-12k", "mitsubishi-fs-18k", "mitsubishi-fh-12k",
  // Daikin
  "daikin-aurora-12k", "daikin-aurora-18k", "daikin-aurora-24k", "daikin-fit-aurora-18k",
  // Fujitsu
  "fujitsu-halcyon-xlth-12k", "fujitsu-halcyon-xlth-18k",
  // Gree
  "gree-flexx-12k", "gree-flexx-18k",
  // LG
  "lg-art-cool-12k", "lg-prestige-18k",
  // Samsung
  "samsung-wind-free-12k", "samsung-wind-free-18k",
  // Lennox
  "lennox-mha-12k", "lennox-xp25-24k",
  // Bosch
  "bosch-climate-5000-12k", "bosch-ids-plus-18k",
]);

interface CompareSelectorProps {
  products: CatalogueProduct[];
  initialSlugs?: string[];
  maxCompare: number;
}

export function CompareSelector({ products, initialSlugs = [], maxCompare }: CompareSelectorProps) {
  const router = useRouter();
  const [selected, setSelected] = useState<Set<string>>(new Set(initialSlugs));
  const [search, setSearch] = useState("");

  /* ---- Popular products ---- */
  const popularProducts = useMemo(() => {
    return products.filter(p => POPULAR_SLUGS.has(p.model.slug));
  }, [products]);

  /* ---- Search-filtered products ---- */
  const isSearching = search.trim().length >= 2;

  const filteredProducts = useMemo(() => {
    if (!isSearching) return [];
    const q = search.toLowerCase().trim();
    return products.filter((p) =>
      `${p.brand.name} ${p.model.name} ${p.model.nominalCapacityBtu ?? ""} ${p.model.modelNumber}`.toLowerCase().includes(q)
    );
  }, [products, search, isSearching]);

  /* ---- Toggle ---- */
  const toggle = useCallback((modelId: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      // Find slug for this model id
      const slug = products.find(p => p.model.id === modelId)?.model.slug;
      if (!slug) return prev;
      if (next.has(slug)) next.delete(slug);
      else if (next.size < maxCompare) next.add(slug);
      return next;
    });
  }, [maxCompare, products]);

  /* ---- Compare ---- */
  const handleCompare = useCallback(() => {
    if (selected.size >= 2) router.push(`/comparer?models=${[...selected].join(",")}`);
  }, [selected, router]);

  const compareDisabled = selected.size >= maxCompare;

  /* ---- Determine which products to display ---- */
  const displayProducts = isSearching ? filteredProducts : popularProducts;

  return (
    <div>
      {/* ---- Selected bar ---- */}
      {selected.size > 0 && (
        <div className="mb-6 flex items-center justify-between gap-4 px-5 py-3 rounded-lg" style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)" }}>
          <p className="text-sm" style={{ color: "var(--color-foreground)" }}>
            <span className="font-bold">{selected.size}</span> modèle{selected.size > 1 ? "s" : ""} sélectionné{selected.size > 1 ? "s" : ""}
            <span className="ml-2 font-normal" style={{ color: "var(--color-muted)" }}>(min. 2, max. {maxCompare})</span>
          </p>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setSelected(new Set())}
              className="text-sm hover:opacity-80 transition-opacity"
              style={{ color: "var(--color-muted)" }}
            >
              Effacer
            </button>
            <Button onClick={handleCompare} disabled={selected.size < 2} size="lg">
              Comparer maintenant
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      {/* ---- Search bar ---- */}
      <div className="mb-8">
        <div className="relative max-w-xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 pointer-events-none" style={{ color: "var(--color-muted)" }} />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher par nom, marque ou capacité..."
            className="w-full h-13 rounded-xl pl-12 pr-4 text-base outline-none transition-all shadow-sm"
            style={{ border: "1px solid var(--color-border)", background: "var(--color-surface)", color: "var(--color-foreground)" }}
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 hover:opacity-80 transition-opacity"
              style={{ color: "var(--color-muted)" }}
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* ---- Section title ---- */}
      {!isSearching && (
        <h3 className="text-[22px] font-bold mb-6" style={{ color: "var(--color-foreground)" }}>
          Modèles populaires
        </h3>
      )}
      {isSearching && filteredProducts.length === 0 && (
        <div className="py-16 text-center">
          <p className="text-sm" style={{ color: "var(--color-muted)" }}>Aucun modèle ne correspond à votre recherche.</p>
        </div>
      )}

      {/* ---- Product grid (same as /thermopompes) ---- */}
      {displayProducts.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">
          {displayProducts.map((product) => (
            <ProductCard
              key={product.model.id}
              product={product}
              isCompareSelected={selected.has(product.model.slug)}
              onCompareToggle={toggle}
              compareDisabled={compareDisabled}
            />
          ))}
        </div>
      )}

      {/* ---- Sticky bottom bar ---- */}
      {selected.size >= 2 && (
        <div className="fixed inset-x-0 bottom-0 z-40 p-4 safe-bottom">
          <div className="mx-auto max-w-2xl flex items-center justify-between gap-4 px-5 py-3 bg-surface-dark text-surface-dark-fg rounded-lg shadow-lg">
            <p className="text-sm">
              <span className="font-semibold">{selected.size}</span>
              {" "}modèle{selected.size > 1 ? "s" : ""} sélectionné{selected.size > 1 ? "s" : ""}
            </p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setSelected(new Set())}
                className="text-sm text-surface-dark-muted-fg hover:text-surface-dark-fg transition-colors"
              >
                Effacer
              </button>
              <button
                type="button"
                onClick={handleCompare}
                className="h-9 px-4 rounded-md bg-brand text-white text-sm font-medium hover:bg-brand-hover transition-colors"
              >
                Comparer ({selected.size})
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
