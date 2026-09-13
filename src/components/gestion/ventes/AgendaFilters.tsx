"use client";

/* Filtres de l'agenda (installateur, région) : navigation douce dès qu'un choix change ; sans JavaScript, le bouton
   « Filtrer » envoie le formulaire (GET). */
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTransition } from "react";

export function AgendaFilters({
  view,
  date,
  installer,
  region,
  installers,
  regions,
  clearHref,
}: {
  view: string;
  date: string;
  installer: string | null;
  region: string | null;
  installers: Array<{ id: string; label: string; n: number }>;
  regions: Array<{ code: string; label: string; n: number }>;
  clearHref: string | null;
}) {
  const router = useRouter();
  const [pending, start] = useTransition();
  const regionOptions = region && !regions.some((r) => r.code === region) ? [...regions, { code: region, label: "Région choisie", n: 0 }] : regions;

  return (
    <form
      className="ag-filters"
      action="/gestion/agenda"
      method="get"
      aria-busy={pending}
      onChange={(e) => {
        const fd = new FormData(e.currentTarget);
        const p = new URLSearchParams();
        for (const [k, v] of fd.entries()) if (typeof v === "string" && v) p.set(k, v);
        start(() => router.push(`/gestion/agenda?${p.toString()}`));
      }}
    >
      {view !== "jour" ? <input type="hidden" name="vue" value={view} /> : null}
      <input type="hidden" name="date" value={date} />
      <label>
        Installateur
        <select name="installateur" className="g-select g-input" defaultValue={installer ?? ""}>
          <option value="">Tous les installateurs</option>
          {installers.map((i) => (
            <option key={i.id} value={i.id}>
              {i.label} ({i.n})
            </option>
          ))}
        </select>
      </label>
      <label>
        Région
        <select name="region" className="g-select g-input" defaultValue={region ?? ""}>
          <option value="">Toutes les régions</option>
          {regionOptions.map((r) => (
            <option key={r.code} value={r.code}>
              {r.label} ({r.n})
            </option>
          ))}
        </select>
      </label>
      <noscript>
        <button type="submit" className="k-btn">
          Filtrer
        </button>
      </noscript>
      {clearHref ? (
        <Link href={clearHref} className="k-btn k-btn--ghost">
          Retirer les filtres
        </Link>
      ) : null}
    </form>
  );
}
