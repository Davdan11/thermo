"use client";

import "./fiche.css";
import { useRef, type CSSProperties, type ReactNode } from "react";
import { MotionConfig, motion, useInView, useScroll, useSpring } from "motion/react";
import { Tick, useReducedSafe } from "@/components/heroes-v2/produit/Tick";
import { INK, LABEL, LINE, MUTE, ORANGE } from "./tokens";

/* ==================================================================
   Primitives d'animation de la famille « produit » : révélations,
   filets qui se tracent, titres qui montent derrière un masque,
   compteurs, barres, cotes. Tout se joue une fois, à l'entrée dans
   l'écran ; « réduire les animations » est respecté (MotionConfig +
   useReducedSafe, sans écart d'hydratation).
   Déclencheurs : toujours sur un élément non masqué (un observateur
   d'intersection ne voit pas un enfant caché par overflow: hidden).
   ================================================================== */

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const DRAW: [number, number, number, number] = [0.65, 0, 0.35, 1];

export function MotionRoot({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

const TAGS = {
  div: motion.div,
  li: motion.li,
  p: motion.p,
  span: motion.span,
  section: motion.section,
  dd: motion.dd,
  ol: motion.ol,
  ul: motion.ul,
  aside: motion.aside,
  tr: motion.tr,
};

type RevealProps = {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  y?: number;
  x?: number;
  as?: keyof typeof TAGS;
  amount?: number;
  id?: string;
  duration?: number;
};

/** Apparition douce (opacité + léger déplacement) à l'entrée dans l'écran. */
export function Reveal({ children, className, style, delay = 0, y = 16, x = 0, as = "div", amount = 0.15, id, duration = 0.8 }: RevealProps) {
  const reduce = useReducedSafe();
  const C = TAGS[as] as typeof motion.div;
  return (
    <C
      id={id}
      className={className}
      style={style}
      initial={reduce ? false : { opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount, margin: "0px 0px -6% 0px" }}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </C>
  );
}

/** Filet horizontal qui se trace (de gauche à droite, ou depuis le centre). */
export function Rule({ color = INK, delay = 0, origin = "left", thick = 1, className = "" }: { color?: string; delay?: number; origin?: "left" | "center" | "right"; thick?: number; className?: string }) {
  const reduce = useReducedSafe();
  return (
    <motion.span
      aria-hidden="true"
      className={`block w-full ${className}`}
      style={{ height: thick, background: color, transformOrigin: origin }}
      initial={reduce ? false : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 1 }}
      transition={{ duration: 1.15, ease: EASE, delay }}
    />
  );
}

/** Filet vertical qui se trace de haut en bas. */
export function VRule({ color = LINE, delay = 0, className = "" }: { color?: string; delay?: number; className?: string }) {
  const reduce = useReducedSafe();
  return (
    <motion.span
      aria-hidden="true"
      className={`block w-px ${className}`}
      style={{ background: color, transformOrigin: "top" }}
      initial={reduce ? false : { scaleY: 0 }}
      whileInView={{ scaleY: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.2, ease: EASE, delay }}
    />
  );
}

/**
 * En-tête de feuille : filet d'encre, « 03 — LIBELLÉ » en chasse fixe (numéro par compteur CSS :
 * une section absente ne laisse pas de trou), titre h2 qui monte derrière un masque, chapeau.
 * Sans `title`, seule la ligne numérotée s'affiche (aucun titre ajouté à la page).
 */
export function SheetHead({ id, kicker, title, lead, aside, big = false, rule = true }: { id?: string; kicker: string; title?: ReactNode; lead?: ReactNode; aside?: ReactNode; big?: boolean; rule?: boolean }) {
  const reduce = useReducedSafe();
  return (
    <header className="sv2f-head">
      {rule && <Rule />}
      <motion.div
        className="sv2f-mono mt-3 flex flex-wrap items-center justify-between gap-x-6 gap-y-2 text-[11px]"
        style={{ color: LABEL, letterSpacing: "0.05em" }}
        initial={reduce ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 1 }}
        transition={{ duration: 0.6, delay: 0.25 }}
      >
        <span className="uppercase">
          <span className="sv2f-num" style={{ color: INK }} /> — {kicker}
        </span>
        {aside}
      </motion.div>
      {title && (
        <motion.h2
          id={id}
          className={`sv2f-h2 ${big ? "sv2f-h2-xl" : ""} m-0 mt-3 overflow-hidden`}
          style={{ paddingBottom: "0.1em" }}
          initial={reduce ? false : "hide"}
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.span className="block" variants={{ hide: { y: "108%" }, show: { y: "0%" } }} transition={{ duration: 1, ease: EASE, delay: 0.1 }}>
            {title}
          </motion.span>
        </motion.h2>
      )}
      {lead && (
        <Reveal as="p" delay={0.3} className="m-0 mt-3 max-w-[680px] text-[15px] leading-[1.65]" style={{ color: MUTE }}>
          {lead}
        </Reveal>
      )}
    </header>
  );
}

/** Compteur qui défile quand il entre dans l'écran (valeur exacte dans le HTML). */
export function InViewTick({ value, decimals = 0, duration = 1.4 }: { value: number; decimals?: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const seen = useInView(ref, { once: true, amount: 0.8 });
  return (
    <span ref={ref} className="inline-block">
      <Tick value={value} decimals={decimals} play={seen} duration={duration} />
    </span>
  );
}

/** Barre proportionnelle qui pousse depuis la gauche (pct = 0…100). */
export function GrowBar({ pct, color = INK, delay = 0, height = 2, track }: { pct: number; color?: string; delay?: number; height?: number; track?: string }) {
  const reduce = useReducedSafe();
  return (
    <motion.span
      aria-hidden="true"
      className="relative block w-full"
      style={{ height, background: track }}
      initial={reduce ? false : "hide"}
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.span
        className="absolute inset-y-0 left-0 block origin-left"
        style={{ width: `${Math.max(0, Math.min(100, pct))}%`, background: color }}
        variants={{ hide: { scaleX: 0 }, show: { scaleX: 1 } }}
        transition={{ duration: 1.2, ease: EASE, delay }}
      />
    </motion.span>
  );
}

/** Coche tracée au trait (pas de pastille). */
export function DrawCheck({ color = INK, delay = 0, size = 18 }: { color?: string; delay?: number; size?: number }) {
  const reduce = useReducedSafe();
  return (
    <motion.svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" initial={reduce ? false : "hide"} whileInView="show" viewport={{ once: true, amount: 1 }} style={{ flexShrink: 0 }}>
      <motion.path d="M3 12.5 9 18.5 21 5.5" stroke={color} strokeWidth={1.6} strokeLinecap="square" variants={{ hide: { pathLength: 0 }, show: { pathLength: 1 } }} transition={{ duration: 0.7, ease: DRAW, delay }} />
    </motion.svg>
  );
}

/** Flèche de calcul : un trait qui file vers la droite, puis la pointe. */
export function ArrowRule({ color = INK, delay = 0 }: { color?: string; delay?: number }) {
  const reduce = useReducedSafe();
  return (
    <motion.span aria-hidden="true" className="relative block h-[9px] w-full" initial={reduce ? false : "hide"} whileInView="show" viewport={{ once: true, amount: 1 }}>
      <motion.span
        className="absolute left-0 right-[1px] top-1/2 block h-px origin-left"
        style={{ background: color }}
        variants={{ hide: { scaleX: 0 }, show: { scaleX: 1 } }}
        transition={{ duration: 0.9, ease: EASE, delay }}
      />
      <motion.svg width="8" height="9" viewBox="0 0 8 9" className="absolute right-0 top-0" variants={{ hide: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }} transition={{ duration: 0.45, ease: EASE, delay: delay + 0.65 }}>
        <path d="M0.5 0.5 7.5 4.5 0.5 8.5" fill="none" stroke={color} strokeWidth={1.2} />
      </motion.svg>
    </motion.span>
  );
}

/** Page de documentation dessinée au trait (coin plié, lignes de texte). */
export function DocGlyph({ size = 32 }: { size?: number }) {
  const reduce = useReducedSafe();
  const v = { hide: { pathLength: 0 }, show: { pathLength: 1 } };
  return (
    <motion.svg aria-hidden="true" width={size} height={size * 1.25} viewBox="0 0 32 40" fill="none" initial={reduce ? false : "hide"} whileInView="show" viewport={{ once: true, amount: 1 }} style={{ flexShrink: 0 }}>
      <motion.path d="M1 1h21l9 9v29H1z" stroke={INK} strokeWidth={1.1} variants={v} transition={{ duration: 1, ease: DRAW }} />
      <motion.path d="M22 1v9h9" stroke={INK} strokeWidth={1.1} variants={v} transition={{ duration: 0.5, ease: DRAW, delay: 0.8 }} />
      {[18, 23, 28].map((y, i) => (
        <motion.path key={y} d={`M7 ${y}h${i === 2 ? 10 : 18}`} stroke={i === 0 ? ORANGE : LABEL} strokeWidth={1.1} variants={v} transition={{ duration: 0.4, delay: 1 + i * 0.12 }} />
      ))}
    </motion.svg>
  );
}

/**
 * Cote horizontale : |<——— libellé ———>| — les deux traits partent du libellé vers les bords,
 * comme la cote de largeur sous l'appareil dans le héros.
 */
export function DimLine({ label, delay = 0, color = INK }: { label: ReactNode; delay?: number; color?: string }) {
  const reduce = useReducedSafe();
  const half = (origin: "left" | "right") => (
    <span className="relative block h-[9px] min-w-[10px] flex-1">
      <motion.span
        className="absolute inset-x-0 top-1/2 block h-px"
        style={{ background: color, transformOrigin: origin }}
        variants={{ hide: { scaleX: 0 }, show: { scaleX: 1 } }}
        transition={{ duration: 0.8, ease: EASE, delay: delay + 0.1 }}
      />
      <motion.svg
        width="7"
        height="9"
        viewBox="0 0 7 9"
        className="absolute top-0"
        style={origin === "right" ? { left: 0 } : { right: 0, transform: "scaleX(-1)" }}
        variants={{ hide: { opacity: 0 }, show: { opacity: 1 } }}
        transition={{ duration: 0.3, delay: delay + 0.8 }}
      >
        <path d="M7 0.5 1 4.5 7 8.5" fill="none" stroke={color} strokeWidth={1} />
      </motion.svg>
    </span>
  );
  return (
    <motion.div aria-hidden="true" className="flex items-center" style={{ color }} initial={reduce ? false : "hide"} whileInView="show" viewport={{ once: true, amount: 0.8 }}>
      <span className="block h-[13px] w-px shrink-0" style={{ background: color, opacity: 0.8 }} />
      {half("right")}
      <span className="sv2f-mono shrink-0 whitespace-nowrap px-2 text-[11px]" style={{ letterSpacing: "0.02em" }}>
        {label}
      </span>
      {half("left")}
      <span className="block h-[13px] w-px shrink-0" style={{ background: color, opacity: 0.8 }} />
    </motion.div>
  );
}

/** Coins de cadrage (repères de coupe) qui se posent autour d'un bloc. */
export function CropMarks({ color = INK, inset = -7, len = 12 }: { color?: string; inset?: number; len?: number }) {
  const reduce = useReducedSafe();
  const b = `1px solid ${color}`;
  const corners: CSSProperties[] = [
    { left: inset, top: inset, borderLeft: b, borderTop: b },
    { right: inset, top: inset, borderRight: b, borderTop: b },
    { left: inset, bottom: inset, borderLeft: b, borderBottom: b },
    { right: inset, bottom: inset, borderRight: b, borderBottom: b },
  ];
  const from = [
    { x: -6, y: -6 },
    { x: 6, y: -6 },
    { x: -6, y: 6 },
    { x: 6, y: 6 },
  ];
  return (
    <motion.span aria-hidden="true" className="pointer-events-none absolute inset-0 block" initial={reduce ? false : "hide"} whileInView="show" viewport={{ once: true, amount: 0.3 }}>
      {corners.map((c, i) => (
        <motion.span
          key={i}
          className="absolute block"
          style={{ width: len, height: len, ...c }}
          variants={{ hide: { opacity: 0, ...from[i] }, show: { opacity: 1, x: 0, y: 0 } }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.1 + i * 0.06 }}
        />
      ))}
    </motion.span>
  );
}

/**
 * Colonne principale de la fiche. Sur grand écran, une règle verticale dans la marge se remplit
 * d'encre au fil du défilement (progression de lecture de la fiche).
 */
export function SheetColumn({ children, className = "", style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 70%"] });
  const s = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 });
  return (
    <div ref={ref} className={`relative ${className}`} style={style}>
      <div aria-hidden="true" className="pointer-events-none absolute -left-7 bottom-0 top-0 hidden w-px xl:block" style={{ background: LINE }}>
        <motion.div className="absolute inset-0 origin-top" style={{ background: INK, scaleY: s }} />
      </div>
      {children}
    </div>
  );
}

export function Arrow({ size = 15 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="square" style={{ flexShrink: 0 }}>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}

export function ExternalArrow({ size = 12 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="square" style={{ flexShrink: 0 }}>
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}
