"use client";

/* Petite île cliente : ajoute « is-in » aux éléments [data-reveal] de la page quand ils entrent à l'écran.
   Sans elle (JavaScript coupé), une règle <noscript> de la page les laisse visibles. */
import { useEffect } from "react";

export function BlReveal({ selector = "[data-reveal]" }: { selector?: string }) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [selector]);
  return null;
}
