"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionTemplate, useScroll, useSpring, useTransform } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";

/* ==================================================================
   Signature du pied de page : « Thermopompes A VENDRE » (comme le logo) en lettres
   géantes, d'abord au trait, qui s'encrent de gauche à droite à mesure
   que le bas de page défile (lié au défilement, comme une signature).
   Décoratif (aria-hidden) : la marque en texte est dans le pied de page.
   Rendu serveur = état de départ (au trait) ; « réduire les animations »
   montre directement le mot encré.
   ================================================================== */

const DISPLAY = "var(--font-display), var(--font-sans), sans-serif";
const CREAM = "#F4EFE7";
const ORANGE = "#E54B17";

type Paint = "outline" | "fill";

const paint = (p: Paint, color: string) =>
  p === "outline"
    ? { fill: "none", stroke: "rgba(244,239,231,0.34)", strokeWidth: 1, vectorEffect: "non-scaling-stroke" as const }
    : { fill: color };

/* Géométrie (unités du viewBox), calée sur Inter Tight. Même écriture que le logo de l'en-tête :
   « Thermopompes » puis « A VENDRE » en capitales espacées, le A en orange, sans accent. */
const WIDE = { w: 1440, h: 152, base: 119, size: 132 };
const TALL = { w: 400, h: 140, base1: 50, size1: 62, base2: 128, size2: 70 };

function Wide({ p }: { p: Paint }) {
  return (
    <svg viewBox={`0 0 ${WIDE.w} ${WIDE.h}`} className="hidden w-full sm:block" style={{ aspectRatio: `${WIDE.w} / ${WIDE.h}`, height: "auto", overflow: "visible" }} focusable="false">
      <text x="0" y={WIDE.base} textLength={WIDE.w} lengthAdjust="spacingAndGlyphs" style={{ fontSize: WIDE.size, whiteSpace: "pre", fontFamily: DISPLAY }}>
        <tspan style={{ fontWeight: 600, letterSpacing: "-0.03em" }} {...paint(p, CREAM)}>
          Thermopompes
        </tspan>
        <tspan style={{ fontWeight: 700, letterSpacing: "0.02em" }} {...paint(p, ORANGE)}>
          {"  A"}
        </tspan>
        <tspan style={{ fontWeight: 500, letterSpacing: "0.14em" }} {...paint(p, CREAM)}>
          {" VENDRE"}
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
      <text x="0" y={TALL.base2} textLength={TALL.w} lengthAdjust="spacing" style={{ fontSize: TALL.size2, fontFamily: DISPLAY, whiteSpace: "pre" }}>
        <tspan style={{ fontWeight: 700 }} {...paint(p, ORANGE)}>
          A
        </tspan>
        <tspan style={{ fontWeight: 500 }} {...paint(p, CREAM)}>
          {" VENDRE"}
        </tspan>
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
