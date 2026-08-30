"use client";

import { useState, useMemo } from "react";
import type { BrandSummary } from "@/lib/data/queries/brand-detail";
import { BrandCard } from "./BrandCard";

/* ------------------------------------------------------------------
   BrandIndexClient — search + filter for brands index
   ------------------------------------------------------------------ */

interface BrandIndexClientProps {
  brands: BrandSummary[];
}

export function BrandIndexClient({ brands }: BrandIndexClientProps) {
  const [search, setSearch] = useState("");
  const [coldClimateOnly, setColdClimateOnly] = useState(false);

  const filtered = useMemo(() => {
    let result = brands;

    // Search
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      result = result.filter((b) =>
        b.brand.name.toLowerCase().includes(q),
      );
    }

    // Cold climate filter
    if (coldClimateOnly) {
      result = result.filter((b) => b.hasColdClimate);
    }

    return result;
  }, [brands, search, coldClimateOnly]);

  return (
    <div>
      {/* Search + filters */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
        <div className="relative flex-1">
          <label htmlFor="brand-search" className="sr-only">
            Rechercher une marque
          </label>
          <input
            id="brand-search"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher une marque…"
            className="w-full h-10 px-3 rounded-md border border-border bg-surface text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand transition-colors"
          />
        </div>
        <label className="flex items-center gap-2 text-sm text-muted cursor-pointer select-none shrink-0">
          <input
            type="checkbox"
            checked={coldClimateOnly}
            onChange={(e) => setColdClimateOnly(e.target.checked)}
            className="w-4 h-4 rounded border-border accent-brand"
          />
          Possède des modèles climat froid vérifiés
        </label>
      </div>

      {/* Results count */}
      <p className="text-xs text-muted mb-4">
        {filtered.length} marque{filtered.length > 1 ? "s" : ""}
        {search.trim() || coldClimateOnly ? " correspondant aux critères" : " dans le catalogue"}
      </p>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((bs) => (
            <BrandCard key={bs.brand.id} summary={bs} />
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-sm text-muted">
            Aucune marque ne correspond à votre recherche.
          </p>
          {(search.trim() || coldClimateOnly) && (
            <button
              type="button"
              onClick={() => {
                setSearch("");
                setColdClimateOnly(false);
              }}
              className="text-sm text-brand hover:text-brand-hover transition-colors mt-2"
            >
              Réinitialiser les filtres
            </button>
          )}
        </div>
      )}
    </div>
  );
}
