import { Skeleton } from "@/components/gestion/kit/Skeleton";

export default function Loading() {
  return (
    <div className="k-skel-page" role="status" aria-label="Chargement de la fiche">
      <Skeleton h={300} r={28} />
      <div className="cr-client">
        <div className="cr-stack">
          <Skeleton h={180} r={22} />
          <Skeleton h={420} r={22} />
        </div>
        <div className="cr-stack">
          <Skeleton h={160} r={22} />
          <Skeleton h={220} r={22} />
        </div>
      </div>
    </div>
  );
}
