import { CompareSelection } from "@/components/product/CompareSelection";
import type { CatalogueProduct } from "@/lib/data/queries/catalogue";

/* ------------------------------------------------------------------
   BrandModelsSection — models grid for a brand page
   Reuses CompareSelection (which wraps ProductCard)
   ------------------------------------------------------------------ */

interface BrandModelsSectionProps {
  models: CatalogueProduct[];
}

export function BrandModelsSection({ models }: BrandModelsSectionProps) {
  if (models.length === 0) return null;

  return (
    <section id="modeles" aria-labelledby="modeles-title">
      <h2 id="modeles-title" className="text-lg font-bold text-foreground mb-4">
        Modèles dans le catalogue
      </h2>
      <p className="text-sm text-muted mb-4">
        {models.length} modèle{models.length > 1 ? "s" : ""} publié{models.length > 1 ? "s" : ""}. Sélectionnez
        des modèles pour les comparer côte à côte.
      </p>
      <CompareSelection products={models} />
    </section>
  );
}
