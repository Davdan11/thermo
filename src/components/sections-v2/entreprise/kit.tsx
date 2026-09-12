"use client";

import "./sections.css";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { motion, MotionConfig, useInView, useScroll, useTransform, type MotionValue } from "motion/react";
import { xeMono } from "@/components/heroes-v2/entreprise/fonts";
import { EASE } from "@/components/heroes-v2/entreprise/shared";
import { useReduced } from "@/components/heroes-v2/outils/motion";

/* ==================================================================
   Petits outils communs aux sections v2 « entreprise » : la racine
   (police mono des héros, réglage « réduire les animations »), les
   apparitions au défilement et la lecture mot à mot.
   ================================================================== */

export { EASE, useReduced };

/** Racine d'une page : mono des héros, MotionConfig (réduire les animations = préférence du système). */
export function Shell({ children, className = "", style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <MotionConfig reducedMotion="user">
      <div className={`xs-root ${xeMono.variable} ${className}`} style={style}>
        {children}
      </div>
    </MotionConfig>
  );
}

/** Apparition douce à l'entrée dans l'écran (une seule fois). */
export function Reveal({ children, delay = 0, y = 26, x = 0, className, style, amount = 0.25, duration = 0.9 }: { children: ReactNode; delay?: number; y?: number; x?: number; className?: string; style?: CSSProperties; amount?: number; duration?: number }) {
  return (
    <motion.div className={className} style={style} initial={{ opacity: 0, y, x }} whileInView={{ opacity: 1, y: 0, x: 0 }} viewport={{ once: true, amount }} transition={{ duration, ease: EASE, delay }}>
      {children}
    </motion.div>
  );
}

/** Lignes de titre qui montent derrière un cache (à placer dans un h2/h3). */
export function MaskLines({ lines, delay = 0, stagger = 0.1, lineStyle, amount = 0.4 }: { lines: ReactNode[]; delay?: number; stagger?: number; lineStyle?: (i: number) => CSSProperties | undefined; amount?: number }) {
  return (
    <motion.span className="block" initial="hide" whileInView="show" viewport={{ once: true, amount }}>
      {lines.map((l, i) => (
        <span key={i} className="block overflow-hidden" style={{ paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
          <motion.span
            className="block"
            style={lineStyle?.(i)}
            variants={{ hide: { y: "108%" }, show: { y: "0%", transition: { duration: 1, ease: EASE, delay: delay + i * stagger } } }}
          >
            {l}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/** Filet qui se trace de gauche à droite à l'entrée. */
export function Rule({ color, className = "", delay = 0, thick = 1 }: { color: string; className?: string; delay?: number; thick?: number }) {
  return (
    <motion.span
      aria-hidden="true"
      className={`block origin-left ${className}`}
      style={{ height: thick, background: color }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1.3, ease: EASE, delay }}
    />
  );
}

/* ---------- Lecture à voix haute, liée au défilement ---------- */
function Word({ p, range, from, to, children }: { p: MotionValue<number>; range: [number, number]; from: string; to: string; children: ReactNode }) {
  const color = useTransform(p, range, [from, to]);
  return <motion.span style={{ color }}>{children}</motion.span>;
}

/**
 * Phrase dont les mots s'allument l'un après l'autre pendant le défilement (même geste que le
 * manifeste du héros). Texte complet pour les lecteurs d'écran ; rendu serveur = mots éteints.
 */
export function ReadAloud({ text, from, to, accent, accentFrom, className, style, offset = ["start 0.85", "end 0.5"] }: { text: string; from: string; to: string; accent?: string; accentFrom?: number; className?: string; style?: CSSProperties; offset?: ["start 0.85", "end 0.5"] | [string, string] }) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReduced();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { scrollYProgress } = useScroll({ target: ref, offset: offset as any });
  const words = text.split(" ");
  return (
    <span ref={ref} className={className} style={style}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((w, i) => {
          const final = accent && accentFrom !== undefined && i >= accentFrom ? accent : to;
          const a = i / words.length;
          const b = Math.min(1, a + 1.6 / words.length);
          return (
            <span key={i}>
              {reduce ? <span style={{ color: final }}>{w}</span> : <Word p={scrollYProgress} range={[a, b]} from={from} to={final}>{w}</Word>}
              {i < words.length - 1 ? " " : ""}
            </span>
          );
        })}
      </span>
    </span>
  );
}

/** Vrai dès que l'élément est entré dans l'écran (une fois). */
export function useSeen<T extends Element>(amount = 0.35) {
  const ref = useRef<T>(null);
  const seen = useInView(ref, { once: true, amount });
  return [ref, seen] as const;
}

/** Heure de Montréal, rien au premier rendu (serveur et client identiques), puis rafraîchie. */
export function useMontrealClock(every = 15_000) {
  const [now, setNow] = useState<{ h: number; m: number; open: boolean } | null>(null);
  useEffect(() => {
    const tick = () => {
      const parts = new Intl.DateTimeFormat("en-CA", { timeZone: "America/Toronto", weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(new Date());
      const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
      const h = Number(get("hour")) % 24;
      setNow({ h, m: Number(get("minute")), open: !["Sat", "Sun"].includes(get("weekday")) && h >= 8 && h < 18 });
    };
    const first = window.setTimeout(tick, 0);
    const iv = window.setInterval(tick, every);
    return () => {
      window.clearTimeout(first);
      window.clearInterval(iv);
    };
  }, [every]);
  return now;
}

/** Bandeau qui défile en continu ; une seule copie lisible, la seconde est masquée. */
export function Marquee({ children, seconds = 48, className, style }: { children: ReactNode; seconds?: number; className?: string; style?: CSSProperties }) {
  return (
    <div className={`overflow-hidden ${className ?? ""}`} style={style}>
      <div className="xs-marquee" style={{ ["--xs-marquee-s" as string]: `${seconds}s` } as CSSProperties}>
        <div className="flex shrink-0">{children}</div>
        <div className="flex shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

/**
 * Dévoilement par découpe (clip-path). L'observateur est posé sur un parent : un élément
 * entièrement découpé n'est jamais « visible » pour IntersectionObserver, il ne se dévoilerait pas.
 */
export function ClipReveal({ children, className, style, from = "inset(100% 0% 0% 0%)", delay = 0, duration = 1.2, amount = 0.2 }: { children: ReactNode; className?: string; style?: CSSProperties; from?: string; delay?: number; duration?: number; amount?: number }) {
  return (
    <motion.div initial="hide" whileInView="show" viewport={{ once: true, amount }}>
      <motion.div className={className} style={style} variants={{ hide: { clipPath: from }, show: { clipPath: "inset(0% 0% 0% 0%)", transition: { duration, ease: EASE, delay } } }}>
        {children}
      </motion.div>
    </motion.div>
  );
}
