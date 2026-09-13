import { Skeleton } from "@/components/gestion/kit/Skeleton";

export default function Loading() {
  return (
    <div className="k-skel-page" role="status" aria-label="Chargement du pipeline">
      <Skeleton h={12} w={120} />
      <Skeleton h={38} w="min(360px, 70%)" r={12} />
      <div className="cr-board" style={{ marginTop: 12 }}>
        {Array.from({ length: 5 }, (_, i) => (
          <Skeleton key={i} h={420} r={22} />
        ))}
      </div>
    </div>
  );
}
