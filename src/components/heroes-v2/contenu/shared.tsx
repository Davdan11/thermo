import Link from "next/link";
import { useSyncExternalStore, type CSSProperties } from "react";

/* ==================================================================
   Petits outils communs aux héros de contenu (v2). Aucun « look » ici :
   chaque page a sa propre direction artistique.
   ================================================================== */

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const DISPLAY = "var(--font-display), var(--font-sans), sans-serif";
export const SERIF = "var(--font-serif), 'Times New Roman', serif";

/** Place réservée sous l'en-tête transparent (93 px, 105 px dès 1700 px). */
export const UNDER_HEADER = "-mt-[93px] min-[1700px]:-mt-[105px]";

export const PHONE = { href: "tel:4389003224", label: "438-900-3224" };

export type Crumb = { label: string; href: string };

/** Fil d'Ariane sobre, couleurs passées par la page (le balisage BreadcrumbList est émis par la page). */
export function Crumbs({
  items,
  color,
  strong,
  nowrap = false,
  className = "",
  style,
}: {
  items: Crumb[];
  color: string;
  strong: string;
  nowrap?: boolean;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <nav
      aria-label="Fil d’Ariane"
      className={`text-[13px] ${className}`}
      style={style}
    >
      <ol
        className={`flex min-w-0 items-center gap-x-2 gap-y-1 ${nowrap ? "flex-nowrap" : "flex-wrap"}`}
        style={{ margin: 0, padding: 0, listStyle: "none", color }}
      >
        <li className="shrink-0">
          <Link href="/" className="c2-crumb">
            Accueil
          </Link>
        </li>
        {items.map((it, i) => (
          <li
            key={it.href}
            className={`flex min-w-0 items-center gap-2 ${i < items.length - 1 ? "shrink-0" : ""}`}
          >
            <span aria-hidden="true" style={{ opacity: 0.5 }}>
              /
            </span>
            {i === items.length - 1 ? (
              <span
                aria-current="page"
                className="truncate"
                style={{ color: strong }}
              >
                {it.label}
              </span>
            ) : (
              <Link href={it.href} className="c2-crumb">
                {it.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function Arrow({
  size = 15,
  down = false,
}: {
  size?: number;
  down?: boolean;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {down ? (
        <path d="M12 5v14M5 12l7 7 7-7" />
      ) : (
        <path d="M5 12h14M13 5l7 7-7 7" />
      )}
    </svg>
  );
}

/** Nombre avec le vrai signe moins. */
export const signed = (n: number, d = 0) =>
  `${n < 0 ? "−" : ""}${Math.abs(n).toLocaleString("fr-CA", { minimumFractionDigits: d, maximumFractionDigits: d })}`;
/** Température : « −26 °C », une décimale seulement si elle existe. */
export const deg = (n: number) => {
  const r = Math.round(n * 10) / 10;
  return `${signed(r, Number.isInteger(r) ? 0 : 1)} °C`;
};

/* « Réduire les animations » sans écart d'hydratation : faux au rendu serveur et au premier rendu
   client, puis la vraie préférence juste après (useSyncExternalStore). Les héros sont aussi enveloppés
   dans <MotionConfig reducedMotion="user"> : les mouvements lancés avant la mise à jour restent immobiles. */
const REDUCE_QUERY = "(prefers-reduced-motion: reduce)";
function subscribeReduce(cb: () => void) {
  const m = window.matchMedia(REDUCE_QUERY);
  m.addEventListener("change", cb);
  return () => m.removeEventListener("change", cb);
}
export function useReducedSafe(): boolean {
  return useSyncExternalStore(
    subscribeReduce,
    () => window.matchMedia(REDUCE_QUERY).matches,
    () => false,
  );
}
