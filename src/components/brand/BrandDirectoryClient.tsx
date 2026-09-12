"use client";

import { brandLogoPath } from "@/lib/data/brand-logos";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import type { BrandSummary } from "@/lib/data/queries/brand-detail";
import { GalerieHero } from "@/components/heroes-v2/marques/GalerieHero";
import type { Placard } from "@/components/heroes-v2/marques/shared";

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
    <div className="flex flex-col min-h-screen">
      {/* Héros « Galerie » : logos accrochés au mur + recherche qui filtre l'annuaire */}
      <GalerieHero
        placards={placards}
        totals={totals}
        search={search}
        onSearch={setSearch}
        resultCount={filteredBrands.length}
        resultsId="annuaire"
      />

      {/* Grid Section */}
      <section id="annuaire" className="bg-[#F7F5F0] py-16 sm:py-24 flex-1 scroll-mt-24">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10">
          
          {/* Header */}
          <div className="mb-12 flex justify-between items-end">
            <div>
              <h2 className="text-3xl sm:text-[34px] font-bold text-[#172126] tracking-tight">
                Marques documentées
              </h2>
              <div className="w-10 h-[3px] bg-[#e54b17] mt-5" />
            </div>
            
            {search && (
              <p className="text-sm text-[#6b7280]">
                {filteredBrands.length} résultat{filteredBrands.length > 1 ? 's' : ''}
              </p>
            )}
          </div>

          {/* Grid Container */}
          {filteredBrands.length > 0 ? (
            <div className="bg-[#e3dace] border border-[#e3dace] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px]">
              {filteredBrands.map((summary) => {
                const { brand, systemTypes, hasLogo } = summary;
                const logoPath = brandLogoPath(brand.slug) ?? "";
                
                let filteredTypes = systemTypes.filter(st => st.value !== "other");
                if (filteredTypes.length === 0 && systemTypes.length > 0) {
                  filteredTypes = systemTypes; // Fallback
                }
                
                const systemTypesText = filteredTypes.length > 0
                  ? filteredTypes.map(st => {
                      if (st.value === "wall-single") return "Murales";
                      if (st.value === "multi-zone") return "Multizones";
                      if (st.value === "central-ducted") return "Centrales";
                      return st.label === "Autre" ? "Modèles variés" : st.label;
                    }).join(" • ")
                  : "Modèles variés";

                const cleanName = brand.name.replace(" [DEV]", "");

                return (
                  <Link 
                    key={brand.id} 
                    href={`/marques/${brand.slug}`} 
                    className="group bg-white flex flex-col items-center justify-center relative p-8 h-48 sm:h-56 transition-colors duration-300 hover:bg-[#fafafa]"
                  >
                    {/* Logo or Text — fixed box so every logo looks the same size */}
                    <div className="flex-1 flex items-center justify-center w-full mb-6">
                      {hasLogo ? (
                        <img
                          src={logoPath}
                          alt={`Logo ${cleanName}`}
                          className="transition-transform duration-300 group-hover:scale-105"
                          style={{
                            maxWidth: 160,
                            maxHeight: 64,
                            width: "auto",
                            height: "auto",
                            objectFit: "contain",
                          }}
                        />
                      ) : (
                        <span className="text-2xl font-black text-[#172126] uppercase tracking-wide group-hover:scale-105 transition-transform duration-300">
                          {cleanName}
                        </span>
                      )}
                    </div>

                    {/* Bottom row */}
                    <div className="w-full flex items-center justify-between mt-auto">
                      <span className="text-[12px] sm:text-[13px] font-medium text-[#172126] opacity-80">
                        {systemTypesText}
                      </span>
                      <span className="text-[#e54b17] font-bold opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                        →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="py-20 text-center bg-[#fff] rounded-lg border border-[#e3dace]">
              <p className="text-lg text-[#172126] font-semibold mb-2">Aucune marque trouvée</p>
              <p className="text-[#6b7280]">Il n'y a pas de marque correspondante à "{search}".</p>
              <button 
                onClick={() => setSearch("")}
                className="mt-6 text-[#e54b17] font-semibold hover:underline"
              >
                Afficher toutes les marques
              </button>
            </div>
          )}

          {/* Disclaimer */}
          <p className="mt-10 text-center text-[11px] sm:text-xs text-[#9ca3af]">
            Certaines marques ne sont pas distribuées partout au Québec. La disponibilité varie selon la région et l'installateur.
          </p>

        </div>
      </section>
      {/* CTA Banner Section */}
      <section className="relative bg-[#0b1b24] overflow-hidden py-16 sm:py-20 mt-8">
        {/* Background image & gradient */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_heatpump.webp"
            alt="Thermopompe grille"
            fill
            className="object-cover object-[80%_center] opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1b24] via-[#0b1b24]/95 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-[1360px] mx-auto px-6 sm:px-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-10">
            {/* Left */}
            <div className="md:w-1/2 flex items-center gap-8">
              <div>
                <h2 className="text-[28px] sm:text-[36px] font-bold leading-tight mb-4" style={{ color: "#ffffff" }}>
                  Vous hésitez entre{" "}<br />plusieurs marques?
                </h2>
                <div className="w-10 h-[2px] bg-[#e54b17]" />
              </div>
              {/* Divider line for desktop */}
              <div className="hidden md:block w-px h-24 bg-[#1a2d3d] shrink-0" />
            </div>

            {/* Right */}
            <div className="md:w-1/2">
              <p className="text-[#d1d5db] text-lg mb-8 max-w-[420px]">
                Comparez les approches, les technologies et les gammes pour faire un choix éclairé.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/thermopompes"
                  className="inline-flex items-center justify-center gap-3 bg-transparent text-white border border-[#1a2d3d] hover:border-[#e54b17] transition-colors duration-300 font-semibold px-6 py-3.5 rounded-sm"
                >
                  Comparer les modèles <span className="text-[#e54b17]">→</span>
                </Link>
                <Link
                  href="/trouver-ma-thermopompe"
                  className="inline-flex items-center justify-center gap-3 bg-[#e54b17] hover:bg-[#d44315] transition-colors duration-300 text-white font-semibold px-6 py-3.5 rounded-sm"
                >
                  Commencer <img src="/images/logo-thermomatch-tm-720.webp" alt="ThermoMatch" className="inline-block h-[18px] ml-1 object-contain brightness-0 invert" /> <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section className="bg-[#F7F5F0] py-20 sm:py-28">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10">
          {/* Header */}
          <div className="mb-14">
            <h2 className="text-3xl sm:text-[34px] font-bold text-[#172126] tracking-tight mb-4">
              Comprendre les différences
            </h2>
            <div className="w-10 h-[3px] bg-[#e54b17]" />
          </div>

          {/* 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-[#e3dace]">
            {/* Col 1 */}
            <div className="md:pr-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full border border-[#d1d5db] flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#172126" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v20"/><path d="m4.93 19.07 14.14-14.14"/><path d="m19.07 19.07-14.14-14.14"/><path d="m12 2 3 3-3 3"/><path d="m12 22 3-3-3-3"/><path d="m2 12 3 3 3-3"/><path d="m22 12-3-3-3 3"/><path d="m4.93 4.93 4.24 0 0 4.24"/><path d="m19.07 19.07-4.24 0 0-4.24"/><path d="m19.07 4.93 0 4.24-4.24 0"/><path d="m4.93 19.07 0-4.24 4.24 0"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[17px] text-[#172126] mb-2 mt-2">Performance hivernale</h3>
                </div>
              </div>
              <p className="text-[15px] text-[#4b5563] leading-relaxed mb-6 ml-16">
                Toutes les thermopompes ne se valent pas par grand froid. Comprenez les indices clés et les technologies qui font la différence au Québec.
              </p>
              <Link href="/guides" className="group inline-flex items-center text-[14px] font-bold text-[#172126] ml-16">
                Lire le guide <span className="ml-2 text-[#e54b17] transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>

            {/* Col 2 */}
            <div className="md:px-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full border border-[#d1d5db] flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#172126" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <div>
                  <h3 className="font-bold text-[17px] text-[#172126] mb-2 mt-2">Garantie</h3>
                </div>
              </div>
              <p className="text-[15px] text-[#4b5563] leading-relaxed mb-6 ml-16">
                Durée, pièces, main-d&apos;œuvre : apprenez à lire entre les lignes pour éviter les mauvaises surprises.
              </p>
              <Link href="/guides" className="group inline-flex items-center text-[14px] font-bold text-[#172126] ml-16">
                Lire le guide <span className="ml-2 text-[#e54b17] transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>

            {/* Col 3 */}
            <div className="md:pl-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full border border-[#d1d5db] flex items-center justify-center shrink-0">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#172126" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>
                </div>
                <div>
                  <h3 className="font-bold text-[17px] text-[#172126] mb-2 mt-2">Disponibilité des pièces</h3>
                </div>
              </div>
              <p className="text-[15px] text-[#4b5563] leading-relaxed mb-6 ml-16">
                Un bon système, c&apos;est aussi un bon service après-vente. Voyez pourquoi la disponibilité des pièces compte autant que la marque.
              </p>
              <Link href="/guides" className="group inline-flex items-center text-[14px] font-bold text-[#172126] ml-16">
                Lire le guide <span className="ml-2 text-[#e54b17] transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
