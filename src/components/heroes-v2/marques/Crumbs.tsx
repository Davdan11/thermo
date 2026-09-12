import Link from "next/link";
import type { CSSProperties } from "react";
import type { Crumb } from "./shared";

/* Fil d’Ariane des héros v2 : « Accueil » en tête (comme le balisage BreadcrumbList),
   la couleur vient du parent ; le dernier élément est la page courante. */
export function Crumbs({ items, sep = "/", className = "", style }: { items: Crumb[]; sep?: string; className?: string; style?: CSSProperties }) {
  const all: Crumb[] = [{ label: "Accueil", href: "/" }, ...items];
  return (
    <nav aria-label="Fil d’Ariane" className={`mq-crumbs ${className}`} style={style}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1" style={{ margin: 0, padding: 0, listStyle: "none", justifyContent: "inherit" }}>
        {all.map((c, i) => {
          const last = i === all.length - 1;
          return (
            <li key={`${c.label}-${i}`} className="flex items-center gap-2">
              {i > 0 ? (
                <span aria-hidden="true" style={{ opacity: 0.4 }}>
                  {sep}
                </span>
              ) : null}
              {last || !c.href ? (
                <span aria-current={last ? "page" : undefined}>{c.label}</span>
              ) : (
                <Link href={c.href} style={{ color: "inherit", opacity: 0.68 }}>
                  {c.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
