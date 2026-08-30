import Link from "next/link";
import type { BrandDetail } from "@/lib/data/queries/brand-detail";
import { buttonVariants } from "@/components/ui/button";

/* ------------------------------------------------------------------
   BrandHeader — identification section for a brand page
   ------------------------------------------------------------------ */

interface BrandHeaderProps {
  detail: BrandDetail;
}

export function BrandHeader({ detail }: BrandHeaderProps) {
  const { brand, seriesCount, modelCount, systemTypes, hasColdClimate, coldClimateCount } = detail;
  const cleanName = brand.name.replace(" [DEV]", "");
  const initial = cleanName.charAt(0).toUpperCase();

  return (
    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
      {/* Logo / initial */}
      <div
        className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-background border border-border flex items-center justify-center text-2xl font-bold text-muted shrink-0"
        aria-hidden="true"
      >
        {initial}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
          {cleanName}
        </h1>

        {brand.description && (
          <p className="text-sm text-muted mt-1 max-w-2xl">
            {brand.description.replace("[DEV]", "").trim()}
          </p>
        )}

        {/* Stats pills */}
        <div className="flex flex-wrap items-center gap-2 mt-3">
          <span className="text-xs text-muted bg-background border border-border px-2 py-1 rounded-md">
            {seriesCount} série{seriesCount > 1 ? "s" : ""}
          </span>
          <span className="text-xs text-muted bg-background border border-border px-2 py-1 rounded-md">
            {modelCount} modèle{modelCount > 1 ? "s" : ""}
          </span>
          {systemTypes.map((st) => (
            <span
              key={st.value}
              className="text-xs text-muted bg-background border border-border px-2 py-1 rounded-md"
            >
              {st.label}
            </span>
          ))}
          {hasColdClimate && (
            <span className="text-xs font-medium bg-brand-light text-brand px-2 py-1 rounded-md">
              Climat froid — {coldClimateCount} modèle{coldClimateCount > 1 ? "s" : ""}
            </span>
          )}
        </div>

        {/* Verified date */}
        {brand.verifiedAt && (
          <p className="text-xs text-muted mt-2">
            Dernière vérification : {new Date(brand.verifiedAt).toLocaleDateString("fr-CA")}
          </p>
        )}

        {/* CTA */}
        <div className="mt-4">
          <Link
            href="#modeles"
            className={buttonVariants({ variant: "default", size: "sm" })}
          >
            Voir les modèles
          </Link>
        </div>
      </div>
    </div>
  );
}
