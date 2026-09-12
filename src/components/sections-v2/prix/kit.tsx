"use client";

import "./sections.css";
import { useRef, type CSSProperties, type ReactNode, type RefObject, type SVGProps } from "react";
import { MotionConfig, motion, steps, useInView, useScroll, useTransform, type MotionStyle, type Variants } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { CountTo } from "@/components/heroes-v2/prix/shared";
import { plexMono } from "@/components/heroes-v2/prix/fonts";

/* ==================================================================
   Petits outils d'animation des sections v2 « prix et subventions ».
   Composants clients minuscules, posés par des composants serveur :
   les données restent côté serveur, seules les révélations tournent
   au client. Tout est déclenché une fois, à l'entrée dans la vue.
   Animations réduites : MotionConfig « user » (transformations
   instantanées) et durées nulles pour clip-path et tracés.
   ================================================================== */

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const VIEW = { once: true, margin: "0px 0px -12% 0px" } as const;

const TAGS = {
  div: motion.div,
  section: motion.section,
  li: motion.li,
  ol: motion.ol,
  ul: motion.ul,
  p: motion.p,
  span: motion.span,
  figure: motion.figure,
  article: motion.article,
  aside: motion.aside,
  header: motion.header,
  dl: motion.dl,
} as const;
type Tag = keyof typeof TAGS;

type Common = {
  as?: Tag;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  delay?: number;
  id?: string;
  role?: string;
  "aria-hidden"?: boolean;
  "aria-label"?: string;
  "aria-labelledby"?: string;
};

/** Racine d'une page : police mono, MotionConfig, overflow-x: clip (sticky fonctionne). */
export function Root({ children, className = "", style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <MotionConfig reducedMotion="user">
      <div className={`ps2-root ${plexMono.variable} ${className}`} style={style}>
        {children}
      </div>
    </MotionConfig>
  );
}

/** Fondu et léger glissement à l'entrée dans la vue. */
export function Reveal({ as = "div", className, style, children, delay = 0, y = 18, x = 0, duration = 0.9, ...rest }: Common & { y?: number; x?: number; duration?: number }) {
  const reduce = useReduced();
  const T = TAGS[as] as typeof motion.div;
  return (
    <T
      {...rest}
      className={className}
      style={style as MotionStyle}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={VIEW}
      transition={{ duration: reduce ? 0 : duration, ease: EASE, delay: reduce ? 0 : delay }}
    >
      {children}
    </T>
  );
}

/** Impression : révélé de gauche à droite par à-coups de tête thermique. */
export function Print({ as = "span", className, style, children, delay = 0, n = 10, duration = 0.55, ...rest }: Common & { n?: number; duration?: number }) {
  const reduce = useReduced();
  const T = TAGS[as] as typeof motion.span;
  return (
    <T
      {...rest}
      className={className}
      style={style as MotionStyle}
      initial={{ clipPath: "inset(-30% 100% -30% 0)" }}
      whileInView={{ clipPath: "inset(-30% 0% -30% 0)" }}
      viewport={VIEW}
      transition={{ duration: reduce ? 0 : duration, ease: steps(n), delay: reduce ? 0 : delay }}
    >
      {children}
    </T>
  );
}

/** Papier qui sort d'une fente : révélé de haut en bas. */
export function Feed({ className, style, children, delay = 0, duration = 1.1 }: { className?: string; style?: CSSProperties; children: ReactNode; delay?: number; duration?: number }) {
  const reduce = useReduced();
  return (
    <motion.div
      className={className}
      style={style as MotionStyle}
      initial={{ clipPath: "inset(0 -30% 100% -30%)", y: -28 }}
      whileInView={{ clipPath: "inset(0 -30% -30% -30%)", y: 0 }}
      viewport={VIEW}
      transition={{ duration: reduce ? 0 : duration, ease: EASE, delay: reduce ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
}

/** Tampon qui tombe (échelle 2,2 → 1). Décoratif. */
export function Stamp({ children, className = "", style, delay = 0, rotate = -9, blend = true }: { children: ReactNode; className?: string; style?: CSSProperties; delay?: number; rotate?: number; blend?: boolean }) {
  const reduce = useReduced();
  return (
    <motion.div
      aria-hidden="true"
      className={`ps2-stamp ${className}`}
      style={{ ...(blend ? {} : { mixBlendMode: "normal" }), ...style } as MotionStyle}
      initial={{ opacity: 0, scale: 2.2, rotate: rotate + 7 }}
      whileInView={{ opacity: 0.92, scale: 1, rotate }}
      viewport={VIEW}
      transition={{ duration: reduce ? 0 : 0.3, ease: [0.6, 0, 1, 0.5], delay: reduce ? 0 : delay }}
    >
      {children}
    </motion.div>
  );
}

/** Chiffre qui défile jusqu'à sa valeur à l'entrée dans la vue (sans écart d'hydratation). */
export function Count({ value, duration = 1.4, className, style, from = 0 }: { value: number; duration?: number; className?: string; style?: CSSProperties; from?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, VIEW);
  return (
    <span ref={ref} className={className} style={style}>
      <CountTo value={value} play={inView} duration={duration} from={from} />
    </span>
  );
}

/** Barre qui pousse (scaleX ou scaleY) à l'entrée dans la vue. */
export function Grow({ axis = "x", className, style, delay = 0, duration = 1 }: { axis?: "x" | "y"; className?: string; style?: CSSProperties; delay?: number; duration?: number }) {
  const reduce = useReduced();
  const from = axis === "x" ? { scaleX: 0 } : { scaleY: 0 };
  const to = axis === "x" ? { scaleX: 1 } : { scaleY: 1 };
  return (
    <motion.span
      aria-hidden="true"
      className={className}
      style={{ transformOrigin: axis === "x" ? "0 50%" : "50% 100%", ...style } as MotionStyle}
      initial={from}
      whileInView={to}
      viewport={VIEW}
      transition={{ duration: reduce ? 0 : duration, ease: EASE, delay: reduce ? 0 : delay }}
    />
  );
}

type PathProps = Pick<SVGProps<SVGPathElement>, "d" | "stroke" | "strokeWidth" | "strokeLinecap" | "strokeLinejoin" | "fill" | "strokeDasharray" | "vectorEffect" | "opacity" | "className"> & {
  delay?: number;
  duration?: number;
};

/** Tracé qui se dessine à l'entrée dans la vue. */
export function DrawPath({ delay = 0, duration = 1.2, ...p }: PathProps) {
  const reduce = useReduced();
  return (
    <motion.path
      {...p}
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={VIEW}
      transition={{ duration: reduce ? 0 : duration, ease: EASE, delay: reduce ? 0 : delay }}
    />
  );
}

/** Tracé lié au défilement : il se tend à mesure que la section passe. */
export function ScrollPath({ start = "start 85%", end = "end 60%", ...p }: Omit<PathProps, "delay" | "duration"> & { start?: string; end?: string }) {
  const reduce = useReduced();
  const ref = useRef<SVGPathElement>(null);
  // Les décalages de motion sont typés en chaînes littérales ; ceux-ci sont valides.
  const { scrollYProgress } = useScroll({ target: ref as unknown as RefObject<HTMLElement>, offset: [start, end] as unknown as ["start end", "end start"] });
  const len = useTransform(scrollYProgress, [0, 1], [0.02, 1]);
  return <motion.path ref={ref} {...p} style={{ pathLength: reduce ? 1 : len }} />;
}

/** Liste en cascade : le parent orchestre, chaque Item entre à son tour. */
export function Stagger({ as = "ol", className, style, children, gap = 0.08, delay = 0, ...rest }: Common & { gap?: number }) {
  const reduce = useReduced();
  const T = TAGS[as] as typeof motion.ol;
  const v: Variants = { hidden: {}, show: { transition: { staggerChildren: reduce ? 0 : gap, delayChildren: reduce ? 0 : delay } } };
  return (
    <T {...rest} className={className} style={style as MotionStyle} variants={v} initial="hidden" whileInView="show" viewport={VIEW}>
      {children}
    </T>
  );
}

export function Item({ as = "li", className, style, children, y = 16, x = 0, clip = false, ...rest }: Common & { y?: number; x?: number; clip?: boolean }) {
  const reduce = useReduced();
  const T = TAGS[as] as typeof motion.li;
  const v: Variants = clip
    ? {
        hidden: { clipPath: "inset(-30% 100% -30% 0)" },
        show: { clipPath: "inset(-30% 0% -30% 0)", transition: { duration: reduce ? 0 : 0.5, ease: steps(9) } },
      }
    : {
        hidden: { opacity: 0, y, x },
        show: { opacity: 1, y: 0, x: 0, transition: { duration: reduce ? 0 : 0.8, ease: EASE } },
      };
  return (
    <T {...rest} className={className} style={style as MotionStyle} variants={v}>
      {children}
    </T>
  );
}

/** Étiquette qui tombe au bout de sa ficelle (ressort amorti), puis se balance doucement. */
export function Drop({ className, style, children, delay = 0, sway = true, swayDelay = 0 }: { className?: string; style?: CSSProperties; children: ReactNode; delay?: number; sway?: boolean; swayDelay?: number }) {
  const reduce = useReduced();
  return (
    <motion.div
      className={className}
      style={{ transformOrigin: "50% 0", ...style } as MotionStyle}
      initial={{ y: -40, rotate: -9, opacity: 0 }}
      whileInView={{ y: 0, rotate: 0, opacity: 1 }}
      viewport={VIEW}
      transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 90, damping: 7, mass: 0.8, delay, opacity: { duration: 0.3, delay } }}
    >
      <div className={sway ? "ps2-sway" : undefined} style={sway ? { animationDelay: `${swayDelay}s` } : undefined}>
        {children}
      </div>
    </motion.div>
  );
}
