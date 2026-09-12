"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";

/* ==================================================================
   Outils communs des sections v2 de la famille « outils » (sous les
   héros Viseur, Mécanisme, Carnet, Hors plage et Document).
   Apparitions au défilement (une seule fois), tracés de traits.
   « Réduire les animations » : transition nulle, l'état final
   s'affiche d'un coup (aucune remise à zéro de l'arbre, aucun écart
   d'hydratation : le hook vaut faux au rendu serveur).
   ================================================================== */

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const VIEW = { once: true, margin: "0px 0px -12% 0px" } as const;

const TAGS = { div: motion.div, span: motion.span, li: motion.li, p: motion.p, section: motion.section } as const;

/** Apparition au défilement : fondu, léger déplacement, flou optionnel (mise au point). */
export function Reveal({
  children,
  delay = 0,
  y = 18,
  x = 0,
  blur = 0,
  duration = 0.9,
  className,
  style,
  as = "div",
}: {
  children?: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  blur?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  as?: keyof typeof TAGS;
}) {
  const reduce = useReduced();
  const M = TAGS[as];
  return (
    <M
      className={className}
      style={style}
      initial={{ opacity: 0, y, x, filter: blur ? `blur(${blur}px)` : "blur(0px)" }}
      whileInView={{ opacity: 1, y: 0, x: 0, filter: "blur(0px)" }}
      viewport={VIEW}
      transition={reduce ? { duration: 0 } : { duration, ease: EASE, delay }}
    >
      {children}
    </M>
  );
}

/** Apparition au montage (et non au défilement) : pour un écran qui remplace le précédent. */
export function Rise({ children, delay = 0, y = 18, duration = 0.9, className, style, as = "div" }: { children?: ReactNode; delay?: number; y?: number; duration?: number; className?: string; style?: CSSProperties; as?: keyof typeof TAGS }) {
  const reduce = useReduced();
  const M = TAGS[as];
  return (
    <M className={className} style={style} initial={{ opacity: 0, y }} animate={{ opacity: 1, y: 0 }} transition={reduce ? { duration: 0 } : { duration, ease: EASE, delay }}>
      {children}
    </M>
  );
}

/** Filet qui se trace de gauche à droite (ou de haut en bas) quand il entre à l'écran. */
export function Rule({ className = "", style, delay = 0, duration = 1.2, vertical = false, color }: { className?: string; style?: CSSProperties; delay?: number; duration?: number; vertical?: boolean; color?: string }) {
  const reduce = useReduced();
  return (
    <motion.span
      aria-hidden="true"
      className={`block ${vertical ? "origin-top" : "origin-left"} ${className}`}
      style={{ background: color, ...style }}
      // Tracé par découpe (clip-path) plutôt que par échelle : la boîte garde sa taille et reste détectable au défilement.
      initial={{ clipPath: vertical ? "inset(0% 0% 100% 0%)" : "inset(0% 100% 0% 0%)" }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
      viewport={VIEW}
      transition={reduce ? { duration: 0 } : { duration, ease: EASE, delay }}
    />
  );
}

/** Transition d'un tracé SVG (pathLength) : prête à passer à motion.path. */
export function useDraw() {
  const reduce = useReduced();
  return (delay = 0, duration = 1.2) =>
    ({
      initial: { pathLength: 0, opacity: 0 },
      whileInView: { pathLength: 1, opacity: 1 },
      viewport: VIEW,
      transition: reduce ? { duration: 0 } : { pathLength: { duration, ease: EASE, delay }, opacity: { duration: 0.2, delay } },
    }) as const;
}

/** Quatre coins de cadre (motif du viseur). */
export function Corners({ color, size = 14, weight = 1.5, inset = 0 }: { color: string; size?: number; weight?: number; inset?: number }) {
  const s: CSSProperties = { position: "absolute", width: size, height: size, borderColor: color, borderStyle: "solid", transition: "border-color 0.3s" };
  return (
    <>
      <span aria-hidden="true" style={{ ...s, left: inset, top: inset, borderWidth: `${weight}px 0 0 ${weight}px` }} />
      <span aria-hidden="true" style={{ ...s, right: inset, top: inset, borderWidth: `${weight}px ${weight}px 0 0` }} />
      <span aria-hidden="true" style={{ ...s, left: inset, bottom: inset, borderWidth: `0 0 ${weight}px ${weight}px` }} />
      <span aria-hidden="true" style={{ ...s, right: inset, bottom: inset, borderWidth: `0 ${weight}px ${weight}px 0` }} />
    </>
  );
}

/** Coins qui se referment sur un élément quand il entre à l'écran (mise au point). */
export function FocusCorners({ color, size = 14, weight = 1.5, delay = 0, inset = 0 }: { color: string; size?: number; weight?: number; delay?: number; inset?: number }) {
  const reduce = useReduced();
  return (
    <motion.span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      initial={{ opacity: 0, scale: 1.08 }}
      whileInView={{ opacity: [0, 1, 0.4, 1], scale: 1 }}
      viewport={VIEW}
      transition={reduce ? { duration: 0 } : { duration: 0.7, ease: EASE, delay }}
    >
      <Corners color={color} size={size} weight={weight} inset={inset} />
    </motion.span>
  );
}
