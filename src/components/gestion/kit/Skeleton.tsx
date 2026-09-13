/* Squelettes des pages en chargement (loading.tsx) : mêmes proportions que la page, lueur lente, sans mouvement si l'utilisateur le demande. */
import { cx } from "./format";

export function Skeleton({ h = 16, w = "100%", r = 10, className }: { h?: number | string; w?: number | string; r?: number; className?: string }) {
  return <span className={cx("k-skel", className)} style={{ height: h, width: w, borderRadius: r }} aria-hidden />;
}

export function SkeletonPage({ tiles = 4, rows = 6, title = "Chargement" }: { tiles?: number; rows?: number; title?: string }) {
  return (
    <div className="k-skel-page" role="status" aria-live="polite" aria-label={title}>
      <Skeleton h={12} w={120} />
      <Skeleton h={38} w="min(420px, 70%)" r={12} />
      <div className="k-skel-tiles">
        {Array.from({ length: tiles }, (_, i) => (
          <Skeleton key={i} h={104} r={20} />
        ))}
      </div>
      <div className="k-skel-rows">
        {Array.from({ length: rows }, (_, i) => (
          <Skeleton key={i} h={68} r={16} />
        ))}
      </div>
    </div>
  );
}
