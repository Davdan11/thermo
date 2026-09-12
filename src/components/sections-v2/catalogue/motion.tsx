"use client";

import { useRef, type CSSProperties, type ElementType, type ReactNode } from "react";
import { MotionConfig, motion, useInView } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";

/* ==================================================================
   Petits outils de mouvement des sections du catalogue, du comparateur
   et des affiches de combat (sections-v2/catalogue).
   - Toujours « once » : une section se révèle une fois, puis se tient.
   - Sans écart d'hydratation : useReduced vaut faux au serveur.
   ================================================================== */

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
/** Coup sec de l'affiche : départ lent, arrivée franche. */
export const SLAM: [number, number, number, number] = [0.83, 0, 0.17, 1];

/** Vrai une fois l'élément entré à l'écran (ou tout de suite avec « réduire les animations »). */
export function useSeen<T extends Element>(margin = "0px 0px -12% 0px") {
  const ref = useRef<T>(null);
  const seen = useInView(ref, { once: true, margin: margin as `${number}px` });
  const reduce = useReduced();
  return { ref, seen: seen || reduce, reduce };
}

/** Fondu + montée à l'entrée à l'écran. */
export function Reveal({ children, delay = 0, y = 22, x = 0, className, style, as = "div" }: { children: ReactNode; delay?: number; y?: number; x?: number; className?: string; style?: CSSProperties; as?: "div" | "li" | "section" | "p" | "span" }) {
  const reduce = useReduced();
  const M = motion[as] as typeof motion.div;
  return (
    <M
      className={className}
      style={style}
      initial={reduce ? false : { opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.9, ease: EASE, delay }}
    >
      {children}
    </M>
  );
}

/** Titre révélé ligne par ligne derrière un masque. */
export function MaskLines({ lines, as = "h2", className, style, delay = 0, id }: { lines: ReactNode[]; as?: ElementType; className?: string; style?: CSSProperties; delay?: number; id?: string }) {
  const Tag = as;
  const { ref, seen, reduce } = useSeen<HTMLElement>();
  return (
    <Tag ref={ref} id={id} className={className} style={style}>
      {lines.map((l, i) => (
        <span key={i} style={{ display: "block", overflow: "hidden", paddingBottom: "0.12em", marginBottom: "-0.12em" }}>
          <motion.span style={{ display: "block" }} initial={reduce ? false : { y: "112%" }} animate={seen ? { y: "0%" } : undefined} transition={{ duration: 1.05, ease: EASE, delay: delay + i * 0.09 }}>
            {l}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/** Typographie française à l'affichage : apostrophe courbe, espace insécable avant « : ; ? ! ». */
export function typo(s: string): string {
  return s
    .replace(/'/g, "’")
    .replace(/ ([:;?!])/g, " $1")
    .replace(/([^\s ])([?!;])(?=\s|$)/g, "$1 $2");
}

/** Nombre de décimales qu'afficherait toLocaleString (3 au plus). */
export function decimalsOf(n: number): number {
  const s = String(n);
  if (s.includes("e")) return 0;
  return Math.min(3, (s.split(".")[1] ?? "").length);
}

/** Racine des sections : « réduire les animations » respecté pour toutes les transformations. */
export function MotionRoot({ children, className, style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <MotionConfig reducedMotion="user">
      <div className={className} style={style}>
        {children}
      </div>
    </MotionConfig>
  );
}
