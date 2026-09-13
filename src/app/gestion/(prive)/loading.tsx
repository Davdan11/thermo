import { Skeleton, SkeletonPage } from "@/components/gestion/kit/Skeleton";

/* Squelette de l'accueil (et des pages sans squelette propre) : couverture, tuiles, liste. */
export default function Loading() {
  return (
    <div className="k-skel-page" role="status" aria-label="Chargement">
      <Skeleton h={280} r={28} />
      <SkeletonPage tiles={6} rows={4} title="Chargement de l’accueil" />
    </div>
  );
}
