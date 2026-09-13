import { SkeletonPage } from "@/components/gestion/kit/Skeleton";

export default function Loading() {
  return <SkeletonPage tiles={4} rows={6} title="Chargement de la rentabilité" />;
}
