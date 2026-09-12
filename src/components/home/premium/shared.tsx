"use client";

import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";
import { animate, motion, useInView, useReducedMotion } from "motion/react";

/* Jetons et petits outils communs aux sections premium de l'accueil. */

export const C = {
  ink: "#0A1419",
  navy: "#10222D",
  cream: "#F4EFE7",
  paper: "#F7F3EC",
  orange: "#E54B17",
  mute: "rgba(244,239,231,0.64)",
  faint: "rgba(244,239,231,0.40)",
  line: "rgba(244,239,231,0.14)",
  inkMute: "rgba(10,20,25,0.62)",
  inkFaint: "rgba(10,20,25,0.40)",
  inkLine: "rgba(10,20,25,0.12)",
} as const;

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const DISPLAY = "var(--font-display), var(--font-sans), sans-serif";
export const fmt = (n: number) => n.toLocaleString("fr-CA");

export function Arrow({ size = 16 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

/* Titre révélé ligne par ligne derrière un masque, à l'entrée à l'écran. */
export function RevealLines({ lines, as = "h2", id, style, delay = 0 }: { lines: ReactNode[]; as?: ElementType; id?: string; style?: CSSProperties; delay?: number }) {
  const Tag = as;
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" });
  const reduce = useReducedMotion();
  return (
    <Tag ref={ref} id={id} style={style}>
      {lines.map((line, i) => (
        <span key={i} style={{ display: "block", overflow: "hidden", paddingBottom: "0.14em", marginBottom: "-0.14em" }}>
          <motion.span
            style={{ display: "block" }}
            initial={reduce ? false : { y: "115%" }}
            animate={inView || reduce ? { y: "0%" } : undefined}
            transition={{ duration: 1.15, ease: EASE, delay: delay + i * 0.08 }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/* Compteur qui défile jusqu'à la vraie valeur. */
export function CountUp({ value, decimals = 0, play, style }: { value: number; decimals?: number; play: boolean; style?: CSSProperties }) {
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? value : 0);
  useEffect(() => {
    if (!play) return;
    if (reduce) {
      setN(value);
      return;
    }
    const c = animate(0, value, { duration: 1.6, ease: [0.16, 1, 0.3, 1], onUpdate: setN });
    return () => c.stop();
  }, [play, reduce, value]);
  return <span style={{ fontVariantNumeric: "tabular-nums", ...style }}>{n.toLocaleString("fr-CA", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}</span>;
}

/* Lignes d'air décoratives : courbes pointillées qui circulent (motif du chauffage et de la ventilation). */
export function AirLines({ color, opacity = 0.08, className, style }: { color: string; opacity?: number; className?: string; style?: CSSProperties }) {
  const rows = [50, 110, 170, 230, 290, 350];
  return (
    <svg aria-hidden="true" className={className} style={{ opacity, ...style }} viewBox="0 0 1200 400" preserveAspectRatio="none" fill="none">
      {rows.map((y, i) => (
        <path
          key={y}
          className="ps-air"
          d={`M-60 ${y} C 240 ${y - 46}, 460 ${y + 46}, 660 ${y} S 1060 ${y - 46}, 1260 ${y}`}
          stroke={color}
          strokeWidth={1.4}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          style={{ animationDuration: `${16 + i * 3}s`, animationDirection: i % 2 ? "reverse" : "normal" }}
        />
      ))}
    </svg>
  );
}
