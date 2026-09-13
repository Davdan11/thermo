import { SkeletonPage } from "@/components/gestion/kit/Skeleton";

export default function Loading() {
  return <SkeletonPage tiles={0} rows={5} title="Chargement des réglages" />;
}
