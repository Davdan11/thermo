"use client";

import "../hero-premium.css";
import "./suite.css";
import { useRef, type CSSProperties, type ElementType, type ReactNode } from "react";
import Link from "next/link";
import { motion, useInView } from "motion/react";
import { Arrow, C, EASE } from "./shared";

/** Titre révélé ligne par ligne derrière un masque (même geste que RevealLines),
 *  sans écart d'hydratation : premier rendu identique partout ; avec « réduire les
 *  animations », le MotionConfig reducedMotion="user" de chaque section le rend instantané. */
export function Lines({ lines, as = "h2", id, style, delay = 0 }: { lines: ReactNode[]; as?: ElementType; id?: string; style?: CSSProperties; delay?: number }) {
  const Tag = as;
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" });
  return (
    <Tag ref={ref} id={id} style={style}>
      {lines.map((line, i) => (
        <span key={i} style={{ display: "block", overflow: "hidden", paddingTop: "0.14em", marginTop: "-0.14em", paddingBottom: "0.14em", marginBottom: "-0.14em" }}>
          <motion.span style={{ display: "block" }} initial={{ y: "115%" }} animate={inView ? { y: "0%" } : undefined} transition={{ duration: 1.15, ease: EASE, delay: delay + i * 0.08 }}>
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

/* Petits outils de la suite de l'accueil : sur-titre, coup de marqueur,
   apparition au défilement et bouton pastille. Mêmes gestes que le héros. */

export const NB = " "; // espace insécable (avant « : », « ; », « ? », « ! »)
export const VIEW = { once: true, margin: "0px 0px -12% 0px" } as const;

/** Sur-titre : trait orange qui se trace, puis le libellé en capitales espacées. */
export function Eyebrow({ children, tone = "dark", style }: { children: ReactNode; tone?: "dark" | "light"; style?: CSSProperties }) {
  return (
    <p className="flex items-center gap-3 text-[12px] font-medium uppercase" style={{ letterSpacing: "0.22em", color: tone === "dark" ? C.mute : C.inkMute, margin: 0, ...style }}>
      <motion.span
        aria-hidden="true"
        className="inline-block h-px w-10 origin-left"
        style={{ background: C.orange }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={VIEW}
        transition={{ duration: 0.9, ease: EASE }}
      />
      {children}
    </p>
  );
}

/** Coup de marqueur incliné qui se trace derrière les mots (signature du héros). */
export function Marker({ children, color = C.orange, delay = 0.45 }: { children: ReactNode; color?: string; delay?: number }) {
  return (
    <span className="relative inline-block px-[0.12em]">
      <motion.span
        aria-hidden="true"
        className="absolute inset-x-0 bottom-[0.04em] top-[0.02em] origin-left"
        style={{ background: color, skewX: -8 }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={VIEW}
        transition={{ duration: 0.9, ease: EASE, delay }}
      />
      <span className="relative">{children}</span>
    </span>
  );
}

/** Bloc qui monte en fondu à son entrée à l'écran. */
export function Rise({ children, delay = 0, y = 28, className, style }: { children: ReactNode; delay?: number; y?: number; className?: string; style?: CSSProperties }) {
  return (
    <motion.div className={className} style={style} initial={{ opacity: 0, y }} whileInView={{ opacity: 1, y: 0 }} viewport={VIEW} transition={{ duration: 1, ease: EASE, delay }}>
      {children}
    </motion.div>
  );
}

type Tone = "orange" | "ink" | "cream";
const PILL: Record<Tone, { bg: string; fg: string; knobBg: string; knobFg: string }> = {
  orange: { bg: C.orange, fg: "#fff", knobBg: "#fff", knobFg: C.orange },
  ink: { bg: C.ink, fg: C.cream, knobBg: C.cream, knobFg: C.ink },
  cream: { bg: C.cream, fg: C.ink, knobBg: C.ink, knobFg: C.cream },
};

/** Bouton pastille : libellé qui roule, flèche ronde qui pivote au survol. */
export function PillLink({ href, children, tone = "orange", className = "" }: { href: string; children: string; tone?: Tone; className?: string }) {
  const t = PILL[tone];
  return (
    <Link
      href={href}
      className={`su-focus group inline-flex w-fit items-center gap-5 rounded-full py-2 pl-7 pr-2 text-[16px] font-semibold transition-transform duration-300 hover:-translate-y-0.5 ${className}`}
      style={{ background: t.bg, color: t.fg, textDecoration: "none" }}
    >
      <span className="hp-roll">
        <span>{children}</span>
        <span aria-hidden="true">{children}</span>
      </span>
      <span className="su-knob flex h-11 w-11 shrink-0 items-center justify-center rounded-full" style={{ background: t.knobBg, color: t.knobFg }}>
        <Arrow />
      </span>
    </Link>
  );
}

/** Lien discret souligné au survol, avec flèche. */
export function LineLink({ href, children, color, className = "" }: { href: string; children: string; color: string; className?: string }) {
  return (
    <Link href={href} className={`su-focus group inline-flex w-fit items-center gap-2 text-[15px] font-semibold ${className}`} style={{ color, textDecoration: "none" }}>
      <span className="su-link">{children}</span>
      <span className="transition-transform duration-500 group-hover:translate-x-1">
        <Arrow size={15} />
      </span>
    </Link>
  );
}
