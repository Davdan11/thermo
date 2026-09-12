import Link from "next/link";
import { Reveal } from "@/components/sections-v2/catalogue/motion";

/* ------------------------------------------------------------------
   CatalogueEmpty — shown when filters return zero results
   (présentation alignée sur la galerie du catalogue)
   ------------------------------------------------------------------ */

interface CatalogueEmptyProps {
  hasFilters: boolean;
}

export function CatalogueEmpty({ hasFilters }: CatalogueEmptyProps) {
  return (
    <Reveal>
      <div className="flex flex-col items-center justify-center rounded-[22px] bg-white px-6 py-16 text-center sm:py-24" style={{ boxShadow: "0 0 0 1px rgba(10,20,25,0.05), 0 30px 60px -44px rgba(10,20,25,0.4)" }}>
        <h3 className="catg-serif m-0 mb-4 text-[36px] leading-none text-[#0A1419] sm:text-[48px]">
          Aucun modèle trouvé<span className="text-[#E54B17]" aria-hidden="true">.</span>
        </h3>

        {hasFilters ? (
          <p className="mb-8 max-w-sm text-[15px] leading-relaxed text-[#0A1419]/60">
            Aucun modèle ne correspond exactement à ces critères.
            Essayez d’élargir votre recherche ou de retirer certains filtres.
          </p>
        ) : (
          <p className="mb-8 max-w-sm text-[15px] leading-relaxed text-[#0A1419]/60">
            Le catalogue ne contient pas encore de modèles publiés.
          </p>
        )}

        <div className="flex flex-col gap-3 sm:flex-row">
          {hasFilters && (
            <Link
              href="/thermopompes"
              className="catg-pill catg-btn inline-flex h-12 items-center justify-center rounded-full border border-[#0A1419]/15 px-6 text-[15px] font-semibold text-[#0A1419] hover:border-[#0A1419]"
            >
              Réinitialiser les filtres
            </Link>
          )}
          <Link
            href="/trouver-ma-thermopompe"
            className="catg-pill catg-btn inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#E54B17] px-6 text-[15px] font-semibold text-white"
          >
            Essayer
            <span className="inline-block shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo-thermomatch-tm-720.webp" alt="ThermoMatch" className="block object-contain brightness-0 invert" style={{ height: 18, width: "auto", maxWidth: "none" }} />
            </span>
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
