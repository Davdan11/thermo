import Link from "next/link";
import type { BrandSummary } from "@/lib/data/queries/brand-detail";

/* ------------------------------------------------------------------
   BrandCard — card for the brands index
   ------------------------------------------------------------------ */

interface BrandCardProps {
  summary: BrandSummary;
}

export function BrandCard({ summary }: BrandCardProps) {
  const { brand, seriesCount, modelCount, systemTypes, hasColdClimate, coldClimateCount, capacityRange } = summary;
  const cleanName = brand.name.replace(" [DEV]", "");
  const initial = cleanName.charAt(0).toUpperCase();

  const capacityLabel = capacityRange
    ? capacityRange.min === capacityRange.max
      ? `${(capacityRange.min / 1000).toFixed(0)}\u2009000 BTU`
      : `${(capacityRange.min / 1000).toFixed(0)}\u2009000 à ${(capacityRange.max / 1000).toFixed(0)}\u2009000 BTU`
    : null;

  return (
    <article className="group relative flex flex-col bg-surface rounded-lg border border-border transition-all duration-150 ease-in-out hover:border-border-hover hover:shadow-sm">
      <Link
        href={`/marques/${brand.slug}`}
        className="absolute inset-0 z-10"
        aria-label={`Voir la page de ${cleanName}`}
      />

      <div className="p-6 sm:p-7 flex flex-col flex-1 gap-4">
        {/* Logo placeholder / initial */}
        <div className="flex items-center gap-3">
          <div
            className="w-12 h-12 rounded-md bg-background border border-border flex items-center justify-center text-xl font-bold text-muted shrink-0"
            aria-hidden="true"
          >
            {initial}
          </div>
          <div className="min-w-0">
            <h2 className="text-lg font-semibold text-foreground leading-tight truncate">
              {cleanName}
            </h2>
            {brand.description && (
              <p className="text-sm text-muted mt-0.5 line-clamp-1">
                {brand.description.replace("[DEV]", "").replace("fictive de développement", "").trim()}
              </p>
            )}
          </div>
        </div>

        {/* System types */}
        {systemTypes.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {systemTypes.map((st) => (
              <span
                key={st.value}
                className="text-[12px] font-medium px-2.5 py-1 rounded-sm bg-background text-muted border border-border"
              >
                {st.label}
              </span>
            ))}
          </div>
        )}

        {/* Stats */}
        <dl className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-[15px] mt-auto pt-4 border-t border-border">
          <div>
            <dt className="text-sm text-muted">Séries</dt>
            <dd className="font-medium text-foreground">{seriesCount}</dd>
          </div>
          <div>
            <dt className="text-sm text-muted">Modèles</dt>
            <dd className="font-medium text-foreground">{modelCount}</dd>
          </div>
          {capacityLabel && (
            <div className="col-span-2">
              <dt className="text-sm text-muted">Capacités</dt>
              <dd className="font-medium text-foreground">{capacityLabel}</dd>
            </div>
          )}
        </dl>

        {/* Cold climate badge */}
        {hasColdClimate && (
          <div className="flex items-center gap-1.5">
            <span className="text-[12px] font-medium px-2.5 py-1 rounded-sm bg-brand-light text-brand">
              Climat froid
            </span>
            <span className="text-[12px] text-muted">
              {coldClimateCount} modèle{coldClimateCount > 1 ? "s" : ""} vérifié{coldClimateCount > 1 ? "s" : ""}
            </span>
          </div>
        )}
      </div>
    </article>
  );
}
