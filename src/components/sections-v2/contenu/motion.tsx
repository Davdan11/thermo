"use client";

import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import { animate, motion, useInView, MotionConfig } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";

/* ==================================================================
   Outils de mouvement des sections de contenu (v2).
   - Scene   : MotionConfig reducedMotion="user" autour d'une section.
   - Reveal  : apparition une seule fois à l'entrée dans l'écran.
   - Rule    : filet qui se trace (scaleX / scaleY).
   - CountUp : compteur sans écart d'hydratation (valeur finale au rendu
               serveur ; il ne repart de zéro que s'il est encore sous la
               ligne de flottaison au montage, donc jamais visible « sauter »).
   ================================================================== */

export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const VIEW = { once: true, margin: "0px 0px -12% 0px" } as const;

export const useIsoLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

export function Scene({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export function Reveal({
  children,
  delay = 0,
  y = 22,
  x = 0,
  duration = 1,
  className,
  style,
  id,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  x?: number;
  duration?: number;
  className?: string;
  style?: CSSProperties;
  id?: string;
}) {
  return (
    <motion.div
      id={id}
      className={className}
      style={style}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={VIEW}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Filet décoratif qui se trace depuis une origine. */
export function Rule({
  color,
  thickness = 1,
  delay = 0,
  duration = 1.3,
  vertical = false,
  origin = "left",
  className = "",
  style,
}: {
  color: string;
  thickness?: number;
  delay?: number;
  duration?: number;
  vertical?: boolean;
  origin?: "left" | "right" | "center" | "top";
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <motion.span
      aria-hidden="true"
      className={`block ${className}`}
      style={{
        background: color,
        ...(vertical
          ? { width: thickness, height: "100%" }
          : { height: thickness, width: "100%" }),
        transformOrigin:
          origin === "center" ? "50% 50%" : origin === "top" ? "50% 0%" : `${origin} 50%`,
        ...style,
      }}
      initial={vertical ? { scaleY: 0 } : { scaleX: 0 }}
      whileInView={vertical ? { scaleY: 1 } : { scaleX: 1 }}
      viewport={VIEW}
      transition={{ duration, ease: EASE, delay }}
    />
  );
}

/**
 * Texte qui monte d'un masque. Le déclencheur est le masque lui-même (boîte fixe) : un texte
 * poussé à 105 % sous un parent overflow: hidden n'intersecte jamais l'écran et ne partirait pas.
 */
export function Mask({
  children,
  delay = 0,
  duration = 1,
  block = false,
  style,
  innerStyle,
}: {
  children: ReactNode;
  delay?: number;
  duration?: number;
  block?: boolean;
  style?: CSSProperties;
  innerStyle?: CSSProperties;
}) {
  return (
    <motion.span
      style={{
        display: block ? "block" : "inline-block",
        overflow: "hidden",
        verticalAlign: "top",
        paddingBottom: "0.12em",
        marginBottom: "-0.12em",
        ...style,
      }}
      initial="hidden"
      whileInView="show"
      viewport={VIEW}
    >
      <motion.span
        style={{ display: block ? "block" : "inline-block", ...innerStyle }}
        variants={{
          hidden: { y: "105%" },
          show: { y: "0%", transition: { duration, ease: EASE, delay } },
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
}

export function CountUp({
  to,
  format,
  from = 0,
  duration = 1.6,
  delay = 0,
}: {
  to: number;
  format: (n: number) => string;
  from?: number;
  duration?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReduced();
  const [v, setV] = useState(to);
  const armed = useRef(false);
  const inView = useInView(ref, VIEW);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el || reduce) return;
    if (el.getBoundingClientRect().top > window.innerHeight) {
      armed.current = true;
      // Départ du compteur : l'élément est encore sous la ligne de flottaison.
      setV(from);
    }
  }, [reduce, from]);

  useEffect(() => {
    if (!inView || !armed.current) return;
    armed.current = false;
    const c = animate(from, to, {
      duration,
      delay,
      ease: EASE,
      onUpdate: (n) => setV(n),
    });
    return () => c.stop();
  }, [inView, from, to, duration, delay]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- animations réduites : valeur finale
    if (reduce) setV(to);
  }, [reduce, to]);

  return <span ref={ref}>{format(v)}</span>;
}
