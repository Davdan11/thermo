"use client";

import { useEffect, useRef, type CSSProperties } from "react";
import { animate, useInView } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";

/* Groupes de milliers à l’espace insécable, sans dépendre de l’ICU du serveur ou du navigateur. */
const group = (n: number) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");

/**
 * Chiffre qui défile quand il entre à l’écran. Le serveur écrit la valeur finale (aucun écart
 * d’hydratation, rien de faux sans JavaScript) ; le défilement ne part qu’à la première apparition,
 * donc sous le pli, là où personne ne l’a encore vu.
 */
export function Counter({ value, className, style }: { value: number; className?: string; style?: CSSProperties }) {
  const ref = useRef<HTMLSpanElement>(null);
  const seen = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  const reduce = useReduced();
  const final = group(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || !seen || reduce || value < 2) return;
    const run = animate(0, value, {
      duration: Math.min(1.4, 0.6 + value / 300),
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => {
        el.textContent = group(Math.round(v));
      },
      onComplete: () => {
        el.textContent = final;
      },
    });
    return () => {
      run.stop();
      el.textContent = final;
    };
  }, [seen, reduce, value, final]);

  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: "tabular-nums", ...style }}>
      {final}
    </span>
  );
}
