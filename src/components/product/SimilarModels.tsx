import Link from "next/link";
import Image from "next/image";
import type { CatalogueProduct } from "@/lib/data/queries/catalogue";

/* ------------------------------------------------------------------
   SimilarModels — compact similar model suggestions
   ------------------------------------------------------------------ */

interface SimilarModelsProps {
  models: CatalogueProduct[];
}

export function SimilarModels({ models }: SimilarModelsProps) {
  if (models.length === 0) return null;

  return (
    <section id="similaires" aria-labelledby="similaires-title">
      <h2 id="similaires-title" className="text-xl font-bold text-foreground mb-4">
        Modèles similaires
      </h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {models.map((product) => {
          const capacityLabel = product.model.nominalCapacityBtu
            ? `${(product.model.nominalCapacityBtu / 1000).toFixed(0)}\u2009000 BTU`
            : null;

          return (
            <Link
              key={product.model.id}
              href={`/produit/${product.model.slug}`}
              className="p-4 rounded-lg border border-border bg-surface hover:border-border-hover transition-colors group"
            >
              <div className="aspect-[4/3] bg-[#EFECE8] flex items-center justify-center overflow-hidden mb-3 rounded-sm">
                {product.imageUrl ? (
                  <Image
                    src={product.imageUrl}
                    alt={`${product.brand.name} ${product.model.name}`}
                    width={200}
                    height={150}
                    className="object-contain w-full h-full p-2"
                  />
                ) : (
                  <span className="text-xs text-[#9ca3af]">Image à venir</span>
                )}
              </div>
              <p className="text-xs text-muted uppercase tracking-wide">
                {product.brand.name}
              </p>
              <p className="text-sm font-semibold text-foreground mt-0.5 group-hover:text-brand transition-colors">
                {product.model.name}
              </p>
              <div className="flex flex-wrap items-center gap-1.5 mt-2 text-xs text-muted">
                <span>{product.systemTypeLabel}</span>
                {capacityLabel && (
                  <>
                    <span className="text-border" aria-hidden="true">·</span>
                    <span>{capacityLabel}</span>
                  </>
                )}
              </div>
              {product.isColdClimate && (
                <span className="inline-block text-[10px] font-medium px-1.5 py-0.5 rounded-sm bg-brand-light text-brand mt-2">
                  Climat froid
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
