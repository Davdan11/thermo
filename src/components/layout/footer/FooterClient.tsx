"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { usePathname } from "next/navigation";

/* ==================================================================
   Petites îles client du pied de page (le reste est rendu au serveur).
   Rendu serveur et premier rendu client identiques : tout est visible,
   les chiffres ont leur valeur finale. Les animations ne s'arment
   qu'après l'hydratation, pour ce qui est encore sous l'écran, et
   jamais avec « réduire les animations ».
   ================================================================== */

const REDUCE = "(prefers-reduced-motion: reduce)";
const reduced = () => window.matchMedia(REDUCE).matches;
const belowFold = (el: Element) => el.getBoundingClientRect().top > window.innerHeight * 0.94;

/** Espaces des milliers en insécables, identiques côté serveur (ICU de Node) et navigateur. */
const fmt = (n: number) => n.toLocaleString("fr-CA").replace(/\s/g, " ");

/** Le <footer> : arme les groupes [data-rv] encore sous l'écran, puis les révèle à leur entrée (transitions en CSS). */
export function FooterStage({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const root = ref.current;
    if (!root || reduced() || typeof IntersectionObserver === "undefined") return;
    let io: IntersectionObserver | null = null;
    let groups: HTMLElement[] = [];
    // Une image plus tard : la page suivante a eu le temps de remonter en haut après une navigation.
    const frame = requestAnimationFrame(() => {
      groups = Array.from(root.querySelectorAll<HTMLElement>("[data-rv]")).filter(belowFold);
      if (!groups.length) return;
      groups.forEach((g) => (g.dataset.rv = "armed"));
      io = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            if (!e.isIntersecting) continue;
            (e.target as HTMLElement).dataset.rv = "in";
            io?.unobserve(e.target);
          }
        },
        { rootMargin: "0px 0px -8% 0px" },
      );
      groups.forEach((g) => io?.observe(g));
    });
    return () => {
      cancelAnimationFrame(frame);
      io?.disconnect();
      groups.forEach((g) => {
        if (g.dataset.rv === "armed") g.dataset.rv = "";
      });
    };
  }, [pathname]);

  return (
    <footer ref={ref} className={className}>
      {children}
    </footer>
  );
}

/** Chiffre qui compte jusqu'à sa valeur à son entrée à l'écran, sans décaler la mise en page. */
export function FooterCount({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const pathname = usePathname();
  const text = fmt(value);

  useEffect(() => {
    const node = ref.current?.firstChild;
    const el = ref.current;
    if (!el || !node || reduced() || typeof IntersectionObserver === "undefined") return;
    let raf = 0;
    let io: IntersectionObserver | null = null;
    const frame = requestAnimationFrame(() => {
      if (!belowFold(el)) return;
      node.nodeValue = fmt(0);
      io = new IntersectionObserver(
        ([e]) => {
          if (!e?.isIntersecting) return;
          io?.disconnect();
          const t0 = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - t0) / 1500);
            node.nodeValue = fmt(Math.round(value * (1 - Math.pow(1 - p, 4))));
            if (p < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
        },
        { rootMargin: "0px 0px -8% 0px" },
      );
      io.observe(el);
    });
    return () => {
      cancelAnimationFrame(frame);
      cancelAnimationFrame(raf);
      io?.disconnect();
      node.nodeValue = text;
    };
  }, [value, text, pathname]);

  return (
    <span className="ft-count">
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="ft-count-ghost">
        {text}
      </span>
      <span aria-hidden="true" ref={ref}>
        {text}
      </span>
    </span>
  );
}

/** « Retour en haut » : défile jusqu'en haut et y ramène le focus clavier. */
export function BackToTop({ className }: { className?: string }) {
  const onClick = () => {
    window.scrollTo({ top: 0, behavior: reduced() ? "instant" : "smooth" });
    const first = document.querySelector<HTMLElement>("body a[href], body button:not([disabled])");
    first?.focus({ preventScroll: true });
  };
  return (
    <button type="button" onClick={onClick} className={className}>
      <span className="ft-top-arrow" aria-hidden="true">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </span>
      Retour en haut
    </button>
  );
}
