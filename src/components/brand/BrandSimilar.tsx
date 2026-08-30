import Link from "next/link";
import type { BrandSummary } from "@/lib/data/queries/brand-detail";

/* ------------------------------------------------------------------
   BrandSimilar — other brands for exploration
   ------------------------------------------------------------------ */

interface BrandSimilarProps {
  otherBrands: BrandSummary[];
  currentBrandName: string;
}

export function BrandSimilar({ otherBrands }: BrandSimilarProps) {
  if (otherBrands.length === 0) return null;

  return (
    <section id="autres-marques" aria-labelledby="autres-marques-title">
      <h2 id="autres-marques-title" className="text-lg font-bold text-foreground mb-2">
        Autres marques dans le catalogue
      </h2>
      <p className="text-xs text-muted mb-4">
        Ces marques offrent des thermopompes présentement dans notre catalogue.
        Utilisez le comparateur pour mettre des configurations côte à côte.
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {otherBrands.map((bs) => {
          const cleanName = bs.brand.name.replace(" [DEV]", "");
          const initial = cleanName.charAt(0).toUpperCase();

          return (
            <Link
              key={bs.brand.id}
              href={`/marques/${bs.brand.slug}`}
              className="group flex items-center gap-3 p-3 bg-surface rounded-lg border border-border hover:border-border-hover hover:shadow-sm transition-all"
            >
              <div
                className="w-9 h-9 rounded-md bg-background border border-border flex items-center justify-center text-sm font-bold text-muted shrink-0"
                aria-hidden="true"
              >
                {initial}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-foreground truncate group-hover:text-brand transition-colors">
                  {cleanName}
                </p>
                <p className="text-xs text-muted">
                  {bs.modelCount} modèle{bs.modelCount > 1 ? "s" : ""}
                  {bs.hasColdClimate && " · Climat froid"}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
