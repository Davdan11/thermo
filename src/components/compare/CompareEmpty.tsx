import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

/* ------------------------------------------------------------------
   CompareEmpty — empty state when no products selected
   ------------------------------------------------------------------ */

export function CompareEmpty() {
  return (
    <div className="text-center py-12 sm:py-16 max-w-lg mx-auto">
      <h2 className="text-xl font-bold text-foreground mb-3">
        Aucun modèle sélectionné
      </h2>
      <p className="text-sm text-muted mb-2">
        Le comparateur vous permet de placer côte à côte deux à quatre
        configurations précises de thermopompes pour comprendre leurs
        différences.
      </p>
      <p className="text-sm text-muted mb-6">
        Choisissez des modèles depuis le catalogue, puis revenez ici pour
        les comparer.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          href="/thermopompes"
          className={buttonVariants({ variant: "default", size: "lg" })}
        >
          Parcourir le catalogue
        </Link>
        <Link
          href="/trouver-ma-thermopompe"
          className={buttonVariants({ variant: "secondary", size: "lg" })}
        >
          Trouver ma thermopompe
        </Link>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   CompareNeedMore — only 1 product, need at least 2
   ------------------------------------------------------------------ */

interface CompareNeedMoreProps {
  productName: string;
}

export function CompareNeedMore({ productName }: CompareNeedMoreProps) {
  return (
    <div className="text-center py-12 sm:py-16 max-w-lg mx-auto">
      <h2 className="text-xl font-bold text-foreground mb-3">
        Ajoutez un second modèle
      </h2>
      <p className="text-sm text-muted mb-2">
        <span className="font-medium text-foreground">{productName}</span>{" "}
        est sélectionné. Ajoutez au moins un autre modèle pour comparer.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
        <Link
          href="/thermopompes"
          className={buttonVariants({ variant: "default", size: "lg" })}
        >
          Ajouter depuis le catalogue
        </Link>
      </div>
    </div>
  );
}
