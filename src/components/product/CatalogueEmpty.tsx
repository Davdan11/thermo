import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

/* ------------------------------------------------------------------
   CatalogueEmpty — shown when filters return zero results
   ------------------------------------------------------------------ */

interface CatalogueEmptyProps {
  hasFilters: boolean;
}

export function CatalogueEmpty({ hasFilters }: CatalogueEmptyProps) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 sm:py-24 px-4">
      {/* Icon */}
      <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center mb-5">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-muted-fg" aria-hidden="true">
          <circle cx="9" cy="9" r="7" />
          <line x1="14" y1="14" x2="18" y2="18" />
        </svg>
      </div>

      <h3 className="text-lg font-semibold text-foreground mb-2">
        Aucun modèle trouvé
      </h3>

      {hasFilters ? (
        <p className="text-sm text-muted max-w-sm mb-6">
          Aucun modèle ne correspond exactement à ces critères.
          Essayez d&apos;élargir votre recherche ou de retirer certains filtres.
        </p>
      ) : (
        <p className="text-sm text-muted max-w-sm mb-6">
          Le catalogue ne contient pas encore de modèles publiés.
        </p>
      )}

      <div className="flex flex-col sm:flex-row gap-3">
        {hasFilters && (
          <Link
            href="/thermopompes"
            className={buttonVariants({ variant: "secondary", size: "lg" })}
          >
            Réinitialiser les filtres
          </Link>
        )}
        <Link
          href="/trouver-ma-thermopompe"
          className={buttonVariants({ variant: "default", size: "lg" })}
        >
          Essayer <img src="/images/logo-thermomatch-tm-720.webp" alt="ThermoMatch" className="inline-block h-[18px] ml-1 object-contain brightness-0 invert" />
        </Link>
      </div>
    </div>
  );
}
