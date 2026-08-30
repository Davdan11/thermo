"use client";

import React, { useState, useCallback, Fragment } from "react";
import { useRouter } from "next/navigation";
import { ProductCard } from "./ProductCard";
import type { CatalogueProduct } from "@/lib/data/queries/catalogue";

/* ------------------------------------------------------------------
   CompareSelection — client wrapper managing compare state
   ------------------------------------------------------------------ */

const MAX_COMPARE = 5;

interface CompareSelectionProps {
  products: CatalogueProduct[];
}

export function CompareSelection({ products }: CompareSelectionProps) {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const router = useRouter();

  const toggleCompare = useCallback((modelId: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(modelId)) {
        next.delete(modelId);
      } else if (next.size < MAX_COMPARE) {
        next.add(modelId);
      }
      return next;
    });
  }, []);

  const clearSelection = useCallback(() => {
    setSelectedIds(new Set());
  }, []);

  const handleCompare = useCallback(() => {
    // Convert model IDs to slugs
    const slugs = products
      .filter((p) => selectedIds.has(p.model.id))
      .map((p) => p.model.slug);
    if (slugs.length >= 2) {
      router.push(`/comparer?models=${slugs.join(",")}`);
    }
  }, [selectedIds, products, router]);

  const compareDisabled = selectedIds.size >= MAX_COMPARE;

  return (
    <>
      {/* Product grid with injected promo banner */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">
        {products.map((product, index) => {
          const card = (
            <ProductCard
              key={product.model.id}
              product={product}
              isCompareSelected={selectedIds.has(product.model.id)}
              onCompareToggle={toggleCompare}
              compareDisabled={compareDisabled}
            />
          );

          if (index === 2 || (products.length < 3 && index === products.length - 1)) {
            return (
              <React.Fragment key={product.model.id}>
                {card}
                {/* Injected ThermoMatch Banner */}
                <div className="col-span-1 sm:col-span-2 xl:col-span-3 bg-[#0C1821] rounded-lg p-8 sm:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 my-4 shadow-xl">
                  {/* Decorative faint background element */}
                  <div className="absolute right-0 top-0 opacity-10 pointer-events-none">
                    <svg width="400" height="400" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="200" cy="200" r="150" stroke="white" strokeWidth="2" />
                      <circle cx="200" cy="200" r="190" stroke="white" strokeWidth="2" />
                    </svg>
                  </div>
                  
                  <div className="relative z-10 max-w-xl">
                    <span className="text-[var(--color-accent)] font-semibold text-xs tracking-widest uppercase mb-2 block">
                      ThermoMatch
                    </span>
                    <h3 className="text-white text-2xl sm:text-3xl font-bold mb-3">
                      Vous ne savez pas quoi choisir?
                    </h3>
                    <p className="text-white/70 text-base sm:text-lg">
                      Répondez à quelques questions et obtenez des recommandations personnalisées en quelques minutes.
                    </p>
                  </div>
                  
                  <div className="relative z-10 shrink-0 w-full md:w-auto">
                    <button
                      onClick={() => router.push("/soumission")}
                      className="w-full sm:w-auto h-12 px-8 rounded bg-[var(--color-accent)] text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center"
                    >
                      Trouver mes modèles
                      <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </React.Fragment>
            );
          }

          return card;
        })}
      </div>

      {/* Pagination (Static representation based on mockup) */}
      <div className="flex items-center justify-center gap-4 mt-16 pb-12 text-[13px] font-medium text-[#172126]">
        <button className="flex items-center justify-center text-[#172126] hover:opacity-80 px-2">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button className="w-8 h-8 flex items-center justify-center bg-[var(--color-accent)] text-white font-semibold rounded-[4px]">1</button>
        <button className="w-8 h-8 flex items-center justify-center hover:bg-black/5 rounded-[4px]">2</button>
        <button className="w-8 h-8 flex items-center justify-center hover:bg-black/5 rounded-[4px]">3</button>
        <button className="w-8 h-8 flex items-center justify-center hover:bg-black/5 rounded-[4px]">4</button>
        <span className="w-8 h-8 flex items-center justify-center text-[#6B7280]">..</span>
        <button className="w-8 h-8 flex items-center justify-center hover:bg-black/5 rounded-[4px]">15</button>
        <button className="flex items-center justify-center text-[#172126] hover:opacity-80 px-2">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Floating compare bar */}
      {selectedIds.size > 0 && (
        <div
          className="fixed bottom-0 inset-x-0 z-40 p-4 safe-bottom"
          role="status"
          aria-live="polite"
        >
          <div className="mx-auto max-w-2xl flex items-center justify-between gap-4 px-5 py-3 bg-surface-dark text-surface-dark-fg rounded-lg shadow-lg">
            <p className="text-sm">
              <span className="font-semibold">{selectedIds.size}</span>
              {" "}modèle{selectedIds.size > 1 ? "s" : ""} sélectionné{selectedIds.size > 1 ? "s" : ""}
              <span className="text-surface-dark-muted-fg ml-1.5">(max {MAX_COMPARE})</span>
            </p>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={clearSelection}
                className="text-sm text-surface-dark-muted-fg hover:text-surface-dark-fg transition-colors"
              >
                Effacer
              </button>
              <button
                type="button"
                onClick={handleCompare}
                disabled={selectedIds.size < 2}
                className="h-9 px-4 rounded-md bg-brand text-white text-sm font-medium hover:bg-brand-hover transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                Comparer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

