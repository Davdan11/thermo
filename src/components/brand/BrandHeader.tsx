import type { BrandDetail } from "@/lib/data/queries/brand-detail";
import { BrandHero } from "./hero/BrandHero";
import { buildBrandHero } from "./hero/brand-hero-data";

/* ------------------------------------------------------------------
   BrandHeader — héros premium d'une page marque (/marques/[slug]).
   Composant serveur : choisit la photo et le logo (fichiers vérifiés
   sur le disque), puis passe des données légères au héros animé.
   ------------------------------------------------------------------ */

interface BrandHeaderProps {
  detail: BrandDetail;
}

export function BrandHeader({ detail }: BrandHeaderProps) {
  return <BrandHero {...buildBrandHero(detail)} />;
}
