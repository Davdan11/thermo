/* Tableau du kit : lignes en grille sur le bureau, cartes empilées sur le téléphone (un seul DOM, CSS seulement).
   Chaque ligne peut être un lien. Composant serveur. */
import Link from "next/link";
import { cx } from "./format";

export interface Column {
  key: string;
  label: string;
  /** Largeur de la colonne sur le bureau (grid-template-columns), ex. « 2fr », « 120px ». */
  width?: string;
  align?: "start" | "end";
  /** Cachée dans la carte mobile (déjà dans le titre, par exemple). */
  hideOnMobile?: boolean;
}

export interface Row {
  key: string;
  href?: string;
  cells: Record<string, React.ReactNode>;
  tone?: "hot" | "muted";
}

export function DataTable({ columns, rows, label, empty }: { columns: Column[]; rows: Row[]; label: string; empty?: React.ReactNode }) {
  const template = columns.map((c) => c.width ?? "1fr").join(" ");
  if (!rows.length) return <>{empty ?? null}</>;
  return (
    <div className="k-table" role="table" aria-label={label} style={{ ["--k-cols" as string]: template }}>
      <div className="k-table__head" role="row">
        {columns.map((c) => (
          <span key={c.key} role="columnheader" className={cx(c.align === "end" && "is-end")}>
            {c.label}
          </span>
        ))}
      </div>
      <div className="k-table__body" role="rowgroup">
        {rows.map((r) => {
          const cells = columns.map((c, i) => (
            <span key={c.key} role="cell" className={cx("k-table__cell", i === 0 && "is-first", c.align === "end" && "is-end", c.hideOnMobile && "is-hide-m")} data-label={i === 0 ? undefined : c.label}>
              {r.cells[c.key] ?? <span className="k-table__none">—</span>}
            </span>
          ));
          return r.href ? (
            <Link key={r.key} href={r.href} role="row" className={cx("k-table__row", r.tone && `is-${r.tone}`)}>
              {cells}
            </Link>
          ) : (
            <div key={r.key} role="row" className={cx("k-table__row", r.tone && `is-${r.tone}`)}>
              {cells}
            </div>
          );
        })}
      </div>
    </div>
  );
}
