"use client";

/* ==================================================================
   Tableau triable du palmarès : recherche (sans accents), filtre par
   région, tri par colonne (aria-sort), 60 rangées d'abord puis tout.
   Une adresse #m-<code> (lien d'une page de ville ou de la carte)
   affiche et surligne la rangée visée.
   ================================================================== */

import { useEffect, useMemo, useState } from "react";
import { fmtInt, fmtTemp } from "@/lib/presence/format";

export interface TableRow {
  c: string;
  n: string;
  h: string | null;
  r: string;
  t: number;
  g: boolean;
  j: number;
  d: number | null;
  s: string;
  k: number;
  x: boolean;
  mh: number;
  mf: number;
}

type Key = "k" | "n" | "r" | "t" | "j" | "d" | "mh";
const COLS: Array<{ key: Key; label: string; num?: boolean }> = [
  { key: "k", label: "Rang", num: true },
  { key: "n", label: "Municipalité" },
  { key: "r", label: "Région" },
  { key: "j", label: "Nuits de janvier", num: true },
  { key: "t", label: "Température de conception", num: true },
  { key: "d", label: "Jours sous −20 °C par an", num: true },
  { key: "mh", label: "Modèles qui chauffent encore (fabricant)", num: true },
];

const fold = (s: string) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
const PAGE = 60;

export function PalmaresTable({ rows, regions }: { rows: TableRow[]; regions: string[] }) {
  const [q, setQ] = useState("");
  const [region, setRegion] = useState("");
  const [sort, setSort] = useState<{ key: Key; dir: 1 | -1 }>({ key: "k", dir: 1 });
  const [limit, setLimit] = useState(PAGE);
  const [target, setTarget] = useState<string | null>(null);

  useEffect(() => {
    const read = () => {
      const m = /^#m-(.+)$/.exec(window.location.hash);
      if (!m) return;
      setTarget(m[1]);
      setQ("");
      setRegion("");
      setLimit(Infinity);
      window.setTimeout(() => document.getElementById(`m-${m[1]}`)?.scrollIntoView({ block: "center", behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" }), 60);
    };
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);

  const list = useMemo(() => {
    const f = fold(q.trim());
    const out = rows.filter((r) => (!region || r.r === region) && (!f || fold(r.n).includes(f) || fold(r.s).includes(f)));
    const { key, dir } = sort;
    out.sort((a, b) => {
      const va = a[key];
      const vb = b[key];
      if (va === null || va === undefined) return 1;
      if (vb === null || vb === undefined) return -1;
      const c = typeof va === "string" ? va.localeCompare(vb as string, "fr-CA") : (va as number) - (vb as number);
      return c * dir || a.k - b.k;
    });
    return out;
  }, [rows, q, region, sort]);

  const shown = list.slice(0, limit);
  const toggle = (key: Key) => setSort((s) => (s.key === key ? { key, dir: s.dir === 1 ? -1 : 1 } : { key, dir: key === "mh" || key === "d" ? -1 : 1 }));

  return (
    <div>
      <div className="pm-tools">
        <label className="sr-only" htmlFor="pm-q">
          Chercher une municipalité ou une station
        </label>
        <input id="pm-q" type="search" placeholder="Chercher une municipalité ou une station" value={q} onChange={(e) => setQ(e.target.value)} />
        <label className="sr-only" htmlFor="pm-r">
          Région
        </label>
        <select id="pm-r" value={region} onChange={(e) => setRegion(e.target.value)}>
          <option value="">Toutes les régions</option>
          {regions.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>
      <div className="pm-tablebox">
        <table className="pm-table">
          <caption className="sr-only">Palmarès du froid : municipalités, nuits de janvier, température de conception et modèles qui chauffent encore à ce froid</caption>
          <thead>
            <tr>
              {COLS.map((c) => (
                <th key={c.key} scope="col" className={c.num ? "num" : undefined} aria-sort={sort.key === c.key ? (sort.dir === 1 ? "ascending" : "descending") : "none"}>
                  <button type="button" onClick={() => toggle(c.key)}>
                    {c.label}
                    <span aria-hidden="true">{sort.key === c.key ? (sort.dir === 1 ? "↑" : "↓") : ""}</span>
                  </button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {shown.map((r) => (
              <tr key={r.c} id={`m-${r.c}`} className={target === r.c ? "is-target" : undefined}>
                <td className="num">
                  {r.k}
                  {r.x ? <small>ex aequo</small> : null}
                </td>
                <td>
                  {r.h ? <a href={r.h}>{r.n}</a> : r.n}
                  <small>station {r.s}</small>
                </td>
                <td>{r.r}</td>
                <td className="num">{fmtTemp(r.j)}</td>
                <td className="num">
                  {fmtTemp(r.t)}
                  {r.g ? <span className="pm-tag" title="Pas de zone propre dans la table : valeur générale du Québec">générale</span> : null}
                </td>
                <td className="num">{r.d === null ? "—" : fmtInt(r.d)}</td>
                <td className="num">
                  {fmtInt(r.mh)}
                  <small>dont {fmtInt(r.mf)} à pleine puissance à −15 °C</small>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pm-more" role="status">
        <span>
          {shown.length} sur {list.length} municipalités
        </span>
        {list.length > shown.length ? (
          <>
            <button type="button" className="pm-btn" onClick={() => setLimit((l) => l + PAGE)}>
              Afficher les suivantes
            </button>
            <button type="button" className="pm-btn pm-btn--ghost" onClick={() => setLimit(Infinity)}>
              Tout afficher
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
}
