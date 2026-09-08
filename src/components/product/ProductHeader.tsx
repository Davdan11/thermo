import Link from "next/link";
import { isGenericSeries, seriesDisplayName } from "@/lib/data/series-label";

import { buttonVariants } from "@/components/ui/button";
import type { ProductDetail } from "@/lib/data/queries/product-detail";

/* ------------------------------------------------------------------
   ProductHeader — top identification section
   ------------------------------------------------------------------ */

interface ProductHeaderProps {
  detail: ProductDetail;
}

export function ProductHeader({ detail }: ProductHeaderProps) {
  const { model, brand, series, isColdClimate, systemTypeLabel } = detail;

  // Regroupe les fiches sœurs par capacité ; garde par capacité la fiche la mieux documentée.
  const capacityChips = (() => {
    const byCap = new Map<number, { slug: string; modelNumber: string; count: number; score: number }>();
    for (const sib of detail.seriesSiblings) {
      const cap = sib.nominalCapacityBtu ?? 0;
      if (!cap || cap === model.nominalCapacityBtu) continue;
      const score = (sib.certifiedPairings ?? 0) + (sib.imageUrl ? 1000 : 0) + (sib.seer2Max ? 100 : 0);
      const cur = byCap.get(cap);
      if (!cur) byCap.set(cap, { slug: sib.slug, modelNumber: sib.modelNumber, count: 1, score });
      else { cur.count++; if (score > cur.score) { cur.slug = sib.slug; cur.modelNumber = sib.modelNumber; cur.score = score; } }
    }
    return [...byCap.entries()]
      .sort((a, b) => a[0] - b[0])
      .map(([cap, v]) => ({ ...v, label: `${(cap / 1000).toFixed(0)}\u2009000 BTU` }));
  })();

  const capacityLabel = model.nominalCapacityBtu
    ? `${(model.nominalCapacityBtu / 1000).toFixed(0)}\u2009000 BTU`
    : null;

  const isDiscontinued = model.status === "discontinued";

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
      {/* Image placeholder */}
      <div className="w-full lg:w-[400px] shrink-0">
        <div className="aspect-[4/3] bg-background rounded-lg border border-border flex items-center justify-center">
          <span className="text-sm text-muted-fg">Image à venir</span>
        </div>
      </div>

      {/* Identification */}
      <div className="flex-1 min-w-0">
        {/* Brand */}
        <p className="text-xs font-medium text-muted uppercase tracking-wide mb-1">
          <Link href={`/marques/${brand.slug}`} className="hover:text-brand transition-colors">
            {brand.name}
          </Link>
          <span className="mx-1.5 text-border">·</span>
          {seriesDisplayName(series.name, series.slug)}
        </p>

        {/* Model name */}
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
          {model.name}
        </h1>

        {/* Type + capacity + badges */}
        <div className="flex flex-wrap items-center gap-2 mt-3">
          <span className="text-sm text-muted">{systemTypeLabel}</span>
          {capacityLabel && (
            <>
              <span className="text-border text-sm" aria-hidden="true">·</span>
              <span className="text-sm font-medium text-foreground">{capacityLabel}</span>
            </>
          )}
          {isColdClimate && (
            <span className="text-xs font-medium px-2 py-0.5 rounded-sm bg-brand-light text-brand">
              Climat froid
            </span>
          )}
          {isDiscontinued && (
            <span className="text-xs font-medium px-2 py-0.5 rounded-sm bg-warning-light text-warning">
              Discontinué
            </span>
          )}
        </div>

        {/* Model number */}
        <p className="text-xs text-muted mt-2">
          Numéro de modèle : <span className="font-mono">{model.modelNumber}</span>
        </p>

        {/* Multi-zone */}
        {model.zones != null && model.zones > 1 && (
          <p className="text-sm text-foreground mt-2">
            {model.zones} zones intérieures
          </p>
        )}

        {/* Autres capacités de la série : une puce par capacité (la fiche la mieux documentée), jamais une par machine */}
        {capacityChips.length > 0 && (
          <div className="mt-4">
            <p className="text-xs font-medium text-muted mb-2">
              Autres capacités{isGenericSeries(series.name, series.slug) ? "" : ` dans la série ${series.name}`}
              {detail.seriesSiblings.length > capacityChips.length ? ` · ${detail.seriesSiblings.length + 1} modèles` : ""}
            </p>
            <div className="flex flex-wrap gap-2">
              {capacityChips.map((chip) => (
                <Link
                  key={chip.slug}
                  href={`/produit/${chip.slug}`}
                  title={chip.count > 1 ? `${chip.count} modèles de ${chip.label} dans cette série` : chip.modelNumber}
                  className="text-xs px-3 py-1.5 rounded-md border border-border bg-surface text-foreground hover:border-border-hover transition-colors"
                >
                  {chip.label}
                  {chip.count > 1 ? <span className="text-muted"> ×{chip.count}</span> : null}
                </Link>
              ))}
              {detail.seriesSiblings.length > capacityChips.length && !isGenericSeries(series.name, series.slug) && (
                <Link
                  href={`/thermopompes?brand=${brand.slug}&series=${series.slug}`}
                  className="text-xs px-3 py-1.5 rounded-md border border-dashed border-border text-muted hover:text-foreground transition-colors"
                >
                  Tous les modèles {series.name}
                </Link>
              )}
            </div>
          </div>
        )}

        {/* CTA */}
        {!isDiscontinued && (
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/trouver-ma-thermopompe"
              className={buttonVariants({ variant: "default", size: "lg" })}
            >
              Vérifier si ce modèle me convient
            </Link>
            <Link
              href="/thermopompes"
              className={buttonVariants({ variant: "secondary", size: "lg" })}
            >
              Voir le catalogue
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
