"use client";

import "./hero.css";
import { useEffect, useState, type CSSProperties, type ElementType, type ReactNode } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Snowfall } from "@/components/home/Snowfall";
import { CountUp } from "@/components/home/premium/shared";
import { useReduced } from "@/components/heroes-v2/outils/motion";

/* ==================================================================
   Trousse des héros premium — base commune à toutes les pages.
   Chaque page compose sa coquille (HeroShell) avec ses textes et SON
   visuel animé propre (prop `visual` à droite, `background` derrière).

   - L'en-tête du site est transparent sur ces héros : HeroShell remonte
     sous lui (-93 px, -105 px dès 1700 px) et réserve la place en haut.
   - Palette : encre #0A1419, crème #F4EFE7, un seul accent orange.
   - Titres : Inter Tight serrée + une touche d'italique Instrument Serif
     (<Serif>), révélés ligne par ligne. Tout respecte « réduire les
     animations ».
   ================================================================== */

export const HC = {
  ink: "#0A1419",
  panel: "#10222D",
  cream: "#F4EFE7",
  orange: "#E54B17",
  mute: "rgba(244,239,231,0.66)",
  faint: "rgba(244,239,231,0.42)",
  line: "rgba(244,239,231,0.14)",
} as const;
export const HERO_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const HERO_DISPLAY = "var(--font-display), var(--font-sans), sans-serif";

type ShellProps = {
  children: ReactNode;
  /** Visuel propre à la page, colonne de droite sur ordinateur (sous le texte sur mobile). */
  visual?: ReactNode;
  /** Décor plein cadre derrière le texte (photo, motif animé…). */
  background?: ReactNode;
  /** Densité de neige (0 = aucune). */
  snow?: number;
  /** Hauteur minimale sur ordinateur. */
  size?: "lg" | "md" | "sm";
  /** false pour les parcours sans en-tête du site (ThermoMatch, soumission). */
  underHeader?: boolean;
  labelledBy?: string;
  className?: string;
  style?: CSSProperties;
  /** Répartition texte / visuel sur ordinateur. */
  columns?: string;
};

export function HeroShell({ children, visual, background, snow = 0, size = "md", underHeader = true, labelledBy, className = "", style, columns = "lg:grid-cols-[1.05fr_0.95fr]" }: ShellProps) {
  const minH = size === "lg" ? "lg:min-h-[min(84svh,800px)]" : size === "md" ? "lg:min-h-[560px]" : "lg:min-h-[420px]";
  const top = underHeader ? "-mt-[93px] min-[1700px]:-mt-[105px]" : "";
  const pad = underHeader ? "pt-[128px] min-[1700px]:pt-[146px]" : "pt-16";
  return (
    <section
      data-premium-hero=""
      className={`ph-root relative overflow-hidden ${top} ${className}`}
      style={{ background: HC.ink, color: HC.cream, fontFamily: HERO_DISPLAY, ...style }}
      aria-labelledby={labelledBy}
    >
      {background}
      {snow > 0 && <Snowfall className="pointer-events-none absolute inset-0 h-full w-full" density={snow} />}
      <div className={`relative z-10 mx-auto grid max-w-[1440px] gap-12 px-5 pb-14 sm:px-8 lg:px-12 lg:pb-20 ${pad} ${minH} ${visual ? `${columns} lg:items-center` : "content-center"}`}>
        <div className="min-w-0">{children}</div>
        {visual ? <div className="relative min-w-0">{visual}</div> : null}
      </div>
    </section>
  );
}

export function HeroFade({ delay = 0, className, style, children }: { delay?: number; className?: string; style?: CSSProperties; children: ReactNode }) {
  const reduce = useReduced();
  return (
    <motion.div className={className} style={style} initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: HERO_EASE, delay }}>
      {children}
    </motion.div>
  );
}

export function HeroEyebrow({ children, delay = 0.1 }: { children: ReactNode; delay?: number }) {
  return (
    <HeroFade delay={delay} className="flex items-center gap-3 text-[12px] font-medium uppercase" style={{ letterSpacing: "0.22em", color: HC.mute }}>
      <span aria-hidden="true" className="inline-block h-px w-10 shrink-0" style={{ background: HC.orange }} />
      <span>{children}</span>
    </HeroFade>
  );
}

const TITLE_SIZE = {
  lg: "clamp(46px, min(7vw, 12.5vh), 124px)",
  md: "clamp(40px, 5.4vw, 92px)",
  sm: "clamp(34px, 4.2vw, 68px)",
};

/** Titre révélé ligne par ligne. Chaque élément de `lines` est une ligne ; utiliser <Serif> pour l'accent. */
export function HeroTitle({ lines, id, as = "h1", size = "md", delay = 0.25, style }: { lines: ReactNode[]; id?: string; as?: ElementType; size?: "lg" | "md" | "sm"; delay?: number; style?: CSSProperties }) {
  const Tag = as;
  const reduce = useReduced();
  return (
    <Tag id={id} style={{ fontSize: TITLE_SIZE[size], lineHeight: 0.95, letterSpacing: "-0.045em", fontWeight: 600, margin: "24px 0 0", ...style }}>
      {lines.map((line, i) => (
        <span key={i} style={{ display: "block", overflow: "hidden", paddingBottom: "0.14em", marginBottom: "-0.14em" }}>
          <motion.span style={{ display: "block" }} initial={reduce ? false : { y: "115%" }} animate={{ y: "0%" }} transition={{ duration: 1.15, ease: HERO_EASE, delay: delay + i * 0.09 }}>
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}

export function Serif({ children }: { children: ReactNode }) {
  return <span className="ph-serif">{children}</span>;
}

export function HeroLead({ children, delay = 0.6, style }: { children: ReactNode; delay?: number; style?: CSSProperties }) {
  return (
    <HeroFade delay={delay}>
      <p className="max-w-[600px] text-[17px] leading-[1.65] sm:text-[18px]" style={{ color: HC.mute, margin: "24px 0 0", ...style }}>
        {children}
      </p>
    </HeroFade>
  );
}

export function HeroActions({ children, delay = 0.8 }: { children: ReactNode; delay?: number }) {
  return (
    <HeroFade delay={delay} className="mt-8 flex flex-wrap items-center gap-3">
      {children}
    </HeroFade>
  );
}

/** Bouton de héros : « primary » orange (libellé qui roule + flèche), « ghost » contour crème. */
export function HeroButton({ href, children, variant = "primary", onClick }: { href?: string; children: string; variant?: "primary" | "ghost"; onClick?: () => void }) {
  const inner =
    variant === "primary" ? (
      <>
        <span className="ph-roll">
          <span>{children}</span>
          <span aria-hidden="true">{children}</span>
        </span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full" style={{ background: "rgba(255,255,255,0.16)" }}>
          <HeroArrow />
        </span>
      </>
    ) : (
      <span>{children}</span>
    );
  const cls =
    variant === "primary"
      ? "inline-flex items-center gap-3 rounded-full py-2 pl-6 pr-2 text-[15px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
      : "ph-ghost inline-flex items-center rounded-full px-6 py-3.5 text-[15px] font-semibold";
  const st: CSSProperties = variant === "primary" ? { background: HC.orange } : { border: `1px solid ${HC.line}`, color: HC.cream };
  if (href) {
    return (
      <Link href={href} className={cls} style={st}>
        {inner}
      </Link>
    );
  }
  return (
    <button type="button" onClick={onClick} className={cls} style={st}>
      {inner}
    </button>
  );
}

export type HeroStat = { value: number; label: string; decimals?: number; prefix?: string; suffix?: string };

/** Chiffres réels dans un panneau de verre dépoli ; ils défilent jusqu'à leur valeur. */
export function HeroStats({ items, delay = 1, className = "" }: { items: HeroStat[]; delay?: number; className?: string }) {
  const [play, setPlay] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setPlay(true), delay * 1000 + 150);
    return () => window.clearTimeout(t);
  }, [delay]);
  if (!items.length) return null;
  return (
    <HeroFade delay={delay} className={`mt-10 inline-flex max-w-full ${className}`}>
      <dl
        className="relative flex max-w-full flex-wrap overflow-hidden rounded-[22px]"
        style={{ margin: 0, background: "rgba(16,34,45,0.55)", border: `1px solid ${HC.line}`, backdropFilter: "blur(16px) saturate(130%)", WebkitBackdropFilter: "blur(16px) saturate(130%)" }}
      >
        <motion.span aria-hidden="true" className="absolute left-0 top-0 h-[2px] w-full origin-left" style={{ background: HC.orange }} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.4, ease: HERO_EASE, delay: delay + 0.2 }} />
        {items.map((s, i) => (
          <div key={s.label} className="flex flex-col gap-2 px-6 py-4 sm:px-7 sm:py-5" style={{ borderLeft: i ? `1px solid ${HC.line}` : "none" }}>
            <dt className="order-2 text-[11.5px] font-medium uppercase" style={{ color: HC.faint, letterSpacing: "0.14em" }}>
              {s.label}
            </dt>
            <dd className="order-1" style={{ fontSize: "clamp(26px, 2.6vw, 36px)", fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 1, margin: 0 }}>
              {s.prefix}
              <CountUp value={s.value} decimals={s.decimals ?? 0} play={play} />
              {s.suffix}
            </dd>
          </div>
        ))}
      </dl>
    </HeroFade>
  );
}

export function HeroArrow({ size = 15 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
