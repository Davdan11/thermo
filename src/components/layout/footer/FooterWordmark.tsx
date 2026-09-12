"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionTemplate, useScroll, useSpring, useTransform } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";

/* ==================================================================
   Signature du pied de page : « Thermopompes à vendre » en lettres
   géantes, d'abord au trait, qui s'encrent de gauche à droite à mesure
   que le bas de page défile (lié au défilement, comme une signature).
   Décoratif (aria-hidden) : la marque en texte est dans le pied de page.
   Rendu serveur = état de départ (au trait) ; « réduire les animations »
   montre directement le mot encré.
   ================================================================== */

const DISPLAY = "var(--font-display), var(--font-sans), sans-serif";
const SERIF = "var(--font-serif), 'Times New Roman', serif";
const CREAM = "#F4EFE7";
const ORANGE = "#E54B17";

type Paint = "outline" | "fill";

const paint = (p: Paint, color: string) =>
  p === "outline"
    ? { fill: "none", stroke: "rgba(244,239,231,0.34)", strokeWidth: 1, vectorEffect: "non-scaling-stroke" as const }
    : { fill: color };

/* Géométrie (unités du viewBox), calée sur Inter Tight 600 et Instrument Serif italique. */
const WIDE = { w: 1440, h: 152, base: 119, size: 138 };
const TALL = { w: 400, h: 148, base1: 46, size1: 60, base2: 143, size2: 104 };

function Wide({ p }: { p: Paint }) {
  return (
    <svg viewBox={`0 0 ${WIDE.w} ${WIDE.h}`} className="hidden w-full sm:block" style={{ aspectRatio: `${WIDE.w} / ${WIDE.h}`, height: "auto", overflow: "visible" }} focusable="false">
      <text x="0" y={WIDE.base} textLength={WIDE.w} lengthAdjust="spacingAndGlyphs" style={{ fontSize: WIDE.size, whiteSpace: "pre" }}>
        <tspan style={{ fontFamily: DISPLAY, fontWeight: 600, letterSpacing: "-0.03em" }} {...paint(p, CREAM)}>
          Thermopompes
        </tspan>
        <tspan style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 400, fontSize: "1.12em" }} {...paint(p, ORANGE)}>
          {" à vendre"}
        </tspan>
      </text>
    </svg>
  );
}

function Tall({ p }: { p: Paint }) {
  return (
    <svg viewBox={`0 0 ${TALL.w} ${TALL.h}`} className="block w-full sm:hidden" style={{ aspectRatio: `${TALL.w} / ${TALL.h}`, height: "auto", overflow: "visible" }} focusable="false">
      <text x="0" y={TALL.base1} textLength={TALL.w} lengthAdjust="spacingAndGlyphs" style={{ fontSize: TALL.size1, fontFamily: DISPLAY, fontWeight: 600, letterSpacing: "-0.03em" }} {...paint(p, CREAM)}>
        Thermopompes
      </text>
      <text x={TALL.w - 2} y={TALL.base2} textAnchor="end" style={{ fontSize: TALL.size2, fontFamily: SERIF, fontStyle: "italic", fontWeight: 400 }} {...paint(p, ORANGE)}>
        à vendre
      </text>
    </svg>
  );
}

/** Enveloppe la dernière rangée (mentions légales) et la signature : le défilement de cette zone encre les lettres. */
export function FooterWordmark({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReduced();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const ink = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.6 });
  const head = useTransform(ink, [0.3, 1], [0, 118], { clamp: true });
  const tail = useTransform(head, (h) => h - 18);
  const mask = useMotionTemplate`linear-gradient(100deg, #000 ${tail}%, transparent ${head}%)`;
  const lift = useTransform(ink, [0, 1], [26, 0]);

  return (
    <div ref={ref}>
      {children}
      <div aria-hidden="true" className="ft-mark">
        <motion.div className="relative" style={reduce ? undefined : { y: lift }}>
          <Wide p="outline" />
          <Tall p="outline" />
          <motion.div className="absolute inset-0" style={reduce ? undefined : { WebkitMaskImage: mask, maskImage: mask }}>
            <Wide p="fill" />
            <Tall p="fill" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
