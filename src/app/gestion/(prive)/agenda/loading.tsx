import { Skeleton } from "@/components/gestion/kit/Skeleton";

export default function Loading() {
  return (
    <div className="k-skel-page" role="status" aria-label="Chargement de l’agenda">
      <Skeleton h={12} w={120} />
      <Skeleton h={38} w="min(320px, 70%)" r={12} />
      <Skeleton h={46} w="100%" r={999} />
      <div className="k-skel-rows">
        {Array.from({ length: 5 }, (_, i) => (
          <Skeleton key={i} h={120} r={20} />
        ))}
      </div>
    </div>
  );
}
