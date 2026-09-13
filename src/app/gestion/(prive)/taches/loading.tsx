import { SkeletonPage } from "@/components/gestion/kit/Skeleton";

export default function Loading() {
  return <SkeletonPage tiles={0} rows={7} title="Chargement des tâches" />;
}
