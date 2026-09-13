/* Choix de la période (7, 30, 90 jours, tout) : liens, sans JavaScript, défilement conservé. Composant serveur. */
import Link from "next/link";
import type { PeriodId } from "@/lib/gestion/statistiques";

export function PeriodTabs({ base, current, periods, param = "periode", fallback = "30", label = "Période" }: { base: string; current: PeriodId; periods: ReadonlyArray<{ id: PeriodId; label: string }>; param?: string; fallback?: PeriodId; label?: string }) {
  return (
    <nav className="k-tabs" aria-label={label}>
      {periods.map((p) => (
        <Link key={p.id} href={p.id === fallback ? base : `${base}?${param}=${p.id}`} aria-current={p.id === current ? "page" : undefined} scroll={false} prefetch={false}>
          {p.label}
        </Link>
      ))}
    </nav>
  );
}
