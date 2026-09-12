"use client";

import { useState, useMemo } from "react";
import type { BrandSummary } from "@/lib/data/queries/brand-detail";
import { GalerieHero } from "@/components/heroes-v2/marques/GalerieHero";
import type { Placard } from "@/components/heroes-v2/marques/shared";
import { GalerieExposition } from "@/components/sections-v2/marques/GalerieExposition";

export type BrandSummaryWithLogo = BrandSummary & { hasLogo: boolean };

interface BrandDirectoryClientProps {
  brands: BrandSummaryWithLogo[];
  /** Marques accrochées au mur du héros (logos officiels vérifiés). */
  placards: Placard[];
  /** Chiffres réels de l'annuaire. */
  totals: { brands: number; models: number; cold: number };
}

export function BrandDirectoryClient({ brands, placards, totals }: BrandDirectoryClientProps) {
  const [search, setSearch] = useState("");

  const filteredBrands = useMemo(() => {
    if (!search.trim()) return brands;
    const q = search.trim().toLowerCase();
    return brands.filter((b) => b.brand.name.toLowerCase().includes(q));
  }, [brands, search]);

  return (
    <div className="mqs-root flex flex-col min-h-screen">
      {/* Héros « Galerie » : logos accrochés au mur + recherche qui filtre l'annuaire */}
      <GalerieHero
        placards={placards}
        totals={totals}
        search={search}
        onSearch={setSearch}
        resultCount={filteredBrands.length}
        resultsId="annuaire"
      />

      {/* La suite de l'exposition : salles par lettres (id « annuaire »), salle sombre, textes de salle */}
      <GalerieExposition brands={filteredBrands} search={search} onReset={() => setSearch("")} />
    </div>
  );
}
