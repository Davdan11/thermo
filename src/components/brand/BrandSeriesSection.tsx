import Link from "next/link";
import type { SeriesSummary } from "@/lib/data/queries/brand-detail";

/* ------------------------------------------------------------------
   BrandSeriesSection — series listing for a brand page
   ------------------------------------------------------------------ */

interface BrandSeriesSectionProps {
  series: SeriesSummary[];
  brandSlug: string;
}

export function BrandSeriesSection({ series, brandSlug }: BrandSeriesSectionProps) {
  if (series.length === 0) return null;

  return (
    <section id="series" aria-labelledby="series-title">
      <h2 id="series-title" className="text-lg font-bold text-foreground mb-4">
        Séries disponibles
      </h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {series.map((s) => {
          const cleanName = s.series.name.replace(" [DEV]", "");
          const capacityLabel = s.capacityRange
            ? s.capacityRange.min === s.capacityRange.max
              ? `${(s.capacityRange.min / 1000).toFixed(0)}\u2009000 BTU`
              : `${(s.capacityRange.min / 1000).toFixed(0)}\u2009000 à ${(s.capacityRange.max / 1000).toFixed(0)}\u2009000 BTU`
            : null;

          return (
            <div
              key={s.series.id}
              className="p-4 bg-surface rounded-lg border border-border"
            >
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {cleanName}
                  </h3>
                  <p className="text-xs text-muted mt-0.5">
                    {s.systemTypeLabel}
                  </p>
                </div>
                {s.hasColdClimate && (
                  <span className="text-[10px] font-medium px-1.5 py-0.5 rounded-sm bg-brand-light text-brand shrink-0">
                    Climat froid
                  </span>
                )}
              </div>

              {s.series.description && (
                <p className="text-xs text-muted mt-2">
                  {s.series.description.replace("[DEV]", "").trim()}
                </p>
              )}

              <dl className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-xs">
                <div>
                  <dt className="text-muted inline">Modèles : </dt>
                  <dd className="inline font-medium text-foreground">
                    {s.modelCount}
                  </dd>
                </div>
                {capacityLabel && (
                  <div>
                    <dt className="text-muted inline">Capacités : </dt>
                    <dd className="inline font-medium text-foreground">
                      {capacityLabel}
                    </dd>
                  </div>
                )}
                {s.hasColdClimate && (
                  <div>
                    <dt className="text-muted inline">Climat froid : </dt>
                    <dd className="inline font-medium text-foreground">
                      {s.coldClimateCount} modèle{s.coldClimateCount > 1 ? "s" : ""}
                    </dd>
                  </div>
                )}
              </dl>

              {s.series.status === "published" && (
                <Link
                  href={`/thermopompes?brand=${brandSlug}`}
                  className="text-xs text-brand hover:text-brand-hover transition-colors mt-3 inline-block font-medium"
                >
                  Voir les modèles →
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
