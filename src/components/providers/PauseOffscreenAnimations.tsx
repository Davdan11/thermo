"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/* ==================================================================
   Boucles CSS décoratives hors écran : en pause.
   Les animations CSS infinies (tracés d'air, reflets, clignotements,
   bandes défilantes…) continuent sinon de recalculer les styles à
   chaque image même quand leur section est loin de l'écran, ce qui
   occupe le fil principal d'un téléphone. Ici :
   - seulement les éléments dont TOUTES les animations CSS sont
     infinies (une entrée finie n'est jamais retardée) ;
   - regroupées par <section> : les boucles d'un même bloc repartent
     ensemble et restent en phase ;
   - marge de 200 px : elles tournent déjà quand la section arrive.
   Même rendu à l'écran. Ni motion (WAAPI) ni transitions ne sont
   touchées. La règle CSS est dans globals.css ([data-anim-off]).
   ================================================================== */

const ATTR = "data-anim-off";
type Part = "el" | "before" | "after";

export function PauseOffscreenAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined" || typeof document.getAnimations !== "function" || typeof CSSAnimation === "undefined") return;

    /** Conteneur observé -> éléments animés et parties à suspendre. */
    const groups = new Map<Element, Map<Element, Set<Part>>>();
    const visible = new Map<Element, boolean>();

    const apply = (el: Element, parts: Set<Part>, off: boolean) => {
      if (off && parts.size) el.setAttribute(ATTR, [...parts].join(" "));
      else el.removeAttribute(ATTR);
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          visible.set(e.target, e.isIntersecting);
          groups.get(e.target)?.forEach((parts, el) => apply(el, parts, !e.isIntersecting));
        }
      },
      { rootMargin: "200px 0px" },
    );

    const scan = () => {
      // Regroupe les animations CSS par (élément, partie) ; une partie n'est retenue que si toutes ses animations sont infinies.
      const byTarget = new Map<Element, Map<Part, boolean>>();
      for (const a of document.getAnimations()) {
        if (!(a instanceof CSSAnimation) || !(a.effect instanceof KeyframeEffect)) continue;
        const el = a.effect.target;
        if (!el || a.playState === "finished") continue;
        const part: Part = a.effect.pseudoElement === "::before" ? "before" : a.effect.pseudoElement === "::after" ? "after" : "el";
        const infinite = a.effect.getTiming().iterations === Infinity;
        const parts = byTarget.get(el) ?? new Map<Part, boolean>();
        parts.set(part, (parts.get(part) ?? true) && infinite);
        byTarget.set(el, parts);
      }
      byTarget.forEach((parts, el) => {
        const keep = new Set<Part>([...parts].filter(([, allInfinite]) => allInfinite).map(([p]) => p));
        const box = el.closest("section") ?? el;
        let group = groups.get(box);
        if (!group) {
          group = new Map();
          groups.set(box, group);
          io.observe(box);
        }
        group.set(el, keep);
        const v = visible.get(box);
        if (v !== undefined) apply(el, keep, !v);
      });
    };

    // Après l'hydratation, puis à chaque animation CSS qui démarre ou se termine (regroupées).
    let timer = window.setTimeout(scan, 400);
    const later = () => {
      window.clearTimeout(timer);
      timer = window.setTimeout(scan, 150);
    };
    document.addEventListener("animationstart", later, true);
    document.addEventListener("animationend", later, true);

    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("animationstart", later, true);
      document.removeEventListener("animationend", later, true);
      io.disconnect();
      groups.forEach((g) => g.forEach((_, el) => el.removeAttribute(ATTR)));
    };
  }, [pathname]);

  return null;
}
