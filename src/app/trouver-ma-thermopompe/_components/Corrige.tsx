"use client";

import "@/components/heroes-v2/outils/outils.css";
import "./results.css";
import { useEffect, useLayoutEffect, useRef, useState, type ReactNode, type RefObject } from "react";
import { motion, useInView } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { EASE_PEN } from "@/components/heroes-v2/outils/Carnet";
import { DISPLAY, SERIF } from "@/components/heroes-v2/outils/font-stacks";
import { K } from "./results-model";

/* ==================================================================
   « Le corrigé » — la plume du correcteur, pour l'écran des résultats
   ThermoMatch (préfixe tm-).
   Le questionnaire est un carnet (heroes-v2/outils/Carnet) ; les
   résultats en sont la page corrigée : même papier, même encre, même
   double filet de marge, mais la plume ne pose plus de questions, elle
   corrige. Elle entoure la bonne réponse (PenLoop), encadre la feuille
   gagnante (PenFrame), souligne le meilleur chiffre (Scribble), coche
   les raisons (HandCheck) et annote la marge d'une flèche (HandArrow).
   Chaque trait se dessine une fois (longueur du tracé), à l'entrée dans
   l'écran ; « réduire les animations » : tracés complets d'emblée.
   Aucun filtre CSS : seuls le tracé, l'opacité et la transformation
   bougent (Safari iOS).
   ================================================================== */

/** Colonne de la page : mêmes retraits que le carnet (le double filet de marge est à gauche). */
export const PAGE = "relative mx-auto max-w-[1440px] pl-[42px] pr-5 sm:pl-[78px] sm:pr-10 lg:pl-[146px] lg:pr-14";
/** Position du double filet de marge dans PAGE. */
export const RULE_X = "left-[20px] sm:left-[44px] lg:left-[100px]";

const r = (n: number) => Math.round(n * 10) / 10;

/** Vrai quand l'élément est entré dans l'écran (une fois) ; toujours vrai sous « réduire les animations ». */
export function useSeen(ref: RefObject<Element | null>): boolean {
  const reduce = useReduced();
  const seen = useInView(ref, { once: true, margin: "0px 0px -12% 0px" });
  return seen || reduce;
}

/** Vrai après `seconds` secondes (horloge du héros) ; tout de suite sous « réduire les animations ». */
export function useAfter(seconds: number): boolean {
  const reduce = useReduced();
  const [on, setOn] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setOn(true), seconds * 1000);
    return () => window.clearTimeout(t);
  }, [seconds]);
  return on || reduce;
}

/** Taille réelle d'un élément, suivie au redimensionnement (le trait épouse le texte, même quand il passe à la ligne). */
function useBox<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [box, setBox] = useState<{ w: number; h: number } | null>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => setBox((b) => (b && b.w === el.offsetWidth && b.h === el.offsetHeight ? b : { w: el.offsetWidth, h: el.offsetHeight }));
    // Mesure de l'élément avant de tracer le trait, puis à chaque changement de taille.
    measure();
    if (typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return [ref, box] as const;
}

/** Tracé qui se dessine : longueur 0 → 1 ; l'opacité évite le point d'encre du bout arrondi avant le départ. */
function useDraw(play: boolean, delay: number, duration: number) {
  const reduce = useReduced();
  return {
    initial: reduce ? false : { pathLength: 0, opacity: 0 },
    animate: play || reduce ? { pathLength: 1, opacity: 1 } : undefined,
    transition: { pathLength: { duration, ease: EASE_PEN, delay }, opacity: { duration: 0.01, delay } },
  } as const;
}

/* Cercle de correcteur : un tour à main levée qui dépasse son point de départ (pas une ellipse parfaite). */
function ring(w: number, h: number) {
  return [
    `M ${r(w * 0.09)} ${r(h * 0.36)}`,
    `C ${r(w * 0.12)} ${r(h * 0.02)}, ${r(w * 0.62)} ${r(-h * 0.06)}, ${r(w * 0.9)} ${r(h * 0.13)}`,
    `C ${r(w * 1.04)} ${r(h * 0.25)}, ${r(w * 1.02)} ${r(h * 0.8)}, ${r(w * 0.78)} ${r(h * 0.95)}`,
    `C ${r(w * 0.52)} ${r(h * 1.08)}, ${r(w * 0.08)} ${r(h * 1.01)}, ${r(w * 0.01)} ${r(h * 0.66)}`,
    `C ${r(-w * 0.03)} ${r(h * 0.42)}, ${r(w * 0.14)} ${r(h * 0.1)}, ${r(w * 0.44)} ${r(h * 0.03)}`,
  ].join(" ");
}

/* Cadre tracé d'un seul geste autour d'une feuille : bords légèrement ondulés, la fin repasse sur le début. */
function frame(w: number, h: number) {
  return [
    `M ${r(w * 0.06)} 3`,
    `C ${r(w * 0.4)} -1.5, ${r(w * 0.72)} 4, ${r(w - 5)} 1.5`,
    `C ${r(w + 1.5)} ${r(h * 0.32)}, ${r(w - 3)} ${r(h * 0.7)}, ${r(w - 1)} ${r(h - 4)}`,
    `C ${r(w * 0.66)} ${r(h + 1.5)}, ${r(w * 0.3)} ${r(h - 2.5)}, 3 ${r(h - 1)}`,
    `C -1.5 ${r(h * 0.64)}, 2.5 ${r(h * 0.3)}, 1 6`,
    `C 1 1, ${r(w * 0.08)} 2, ${r(w * 0.17)} 3.5`,
  ].join(" ");
}

/** La plume entoure le contenu (la bonne réponse). */
export function PenLoop({ children, play, delay = 0, duration = 0.95, padX = 16, padY = 10, width = 2.2, className = "" }: { children: ReactNode; play: boolean; delay?: number; duration?: number; padX?: number; padY?: number; width?: number; className?: string }) {
  const [ref, box] = useBox<HTMLSpanElement>();
  const draw = useDraw(play, delay, duration);
  const w = box ? box.w + padX * 2 : 0;
  const h = box ? box.h + padY * 2 : 0;
  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      {children}
      {box ? (
        <svg aria-hidden="true" className="pointer-events-none absolute overflow-visible" style={{ left: -padX, top: -padY }} width={w} height={h} fill="none">
          <motion.path d={ring(w, h)} stroke={K.orange} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" {...draw} />
        </svg>
      ) : null}
    </span>
  );
}

/** Cadre à la main autour d'une feuille (parent en position relative). */
export function PenFrame({ play, delay = 0 }: { play: boolean; delay?: number }) {
  const [ref, box] = useBox<HTMLSpanElement>();
  const draw = useDraw(play, delay, 1.5);
  return (
    <span ref={ref} aria-hidden="true" className="pointer-events-none absolute -inset-[7px] z-10">
      {box ? (
        <svg className="absolute inset-0 overflow-visible" width={box.w} height={box.h} fill="none">
          <motion.path d={frame(box.w, box.h)} stroke={K.orange} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...draw} />
        </svg>
      ) : null}
    </span>
  );
}

/** Souligné tracé sous le contenu (le meilleur chiffre d'une ligne). */
export function Scribble({ children, play, delay = 0, color = K.orange, className = "" }: { children: ReactNode; play: boolean; delay?: number; color?: string; className?: string }) {
  const [ref, box] = useBox<HTMLSpanElement>();
  const draw = useDraw(play, delay, 0.55);
  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      {children}
      {box ? (
        <svg aria-hidden="true" className="pointer-events-none absolute left-[-3px] overflow-visible" style={{ bottom: -7 }} width={box.w + 6} height={8} fill="none">
          <motion.path d={`M 1 5.5 C ${r(box.w * 0.3)} 2.4, ${r(box.w * 0.64)} 7.2, ${r(box.w + 5)} 3`} stroke={color} strokeWidth={2} strokeLinecap="round" {...draw} />
        </svg>
      ) : null}
    </span>
  );
}

/** Coche à la main. */
export function HandCheck({ play, delay = 0, size = 17 }: { play: boolean; delay?: number; size?: number }) {
  const draw = useDraw(play, delay, 0.4);
  return (
    <svg aria-hidden="true" width={size} height={r(size * 0.92)} viewBox="0 0 24 22" fill="none" className="shrink-0 overflow-visible">
      <motion.path d="M3 12.5c2.2 1.6 3.6 3.6 5 6.3C11 11.6 15.4 5.6 22 1.5" stroke={K.orange} strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" {...draw} />
    </svg>
  );
}

const ARROWS = {
  // Pointe à gauche : l'annotation renvoie à l'élément qui la précède.
  left: { box: "0 0 34 18", w: 34, h: 18, shaft: "M31 11 C 24 15.5, 13 14.5, 5 7.5", head: "M10.5 5.2 L 4.6 7.4 L 7.6 12.8" },
  // Pointe en haut à gauche : vers la réponse entourée.
  up: { box: "0 0 30 30", w: 26, h: 26, shaft: "M26 27 C 25 17, 18 9, 7 5", head: "M12.6 2.4 L 6.6 5 L 10.6 10.2" },
  // Vers le bas à droite : vers le bouton de la soumission.
  down: { box: "0 0 30 30", w: 30, h: 30, shaft: "M4 3 C 6 14, 13 22, 25 25", head: "M19.6 27.6 L 25.6 25.2 L 22 19.6" },
} as const;

/** Flèche de marge tracée à la main (le trait, puis la pointe). */
export function HandArrow({ dir = "left", play, delay = 0, className = "" }: { dir?: keyof typeof ARROWS; play: boolean; delay?: number; className?: string }) {
  const a = ARROWS[dir];
  const shaft = useDraw(play, delay, 0.45);
  const head = useDraw(play, delay + 0.4, 0.2);
  return (
    <svg aria-hidden="true" width={a.w} height={a.h} viewBox={a.box} fill="none" className={`shrink-0 overflow-visible ${className}`}>
      <motion.path d={a.shaft} stroke={K.orange} strokeWidth={1.8} strokeLinecap="round" {...shaft} />
      <motion.path d={a.head} stroke={K.orange} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...head} />
    </svg>
  );
}

/** Texte qui s'écrit de gauche à droite à l'entrée dans l'écran (titres et annotations sous le héros). */
export function WriteIn({ children, play, delay = 0, duration = 0.9, className = "" }: { children: ReactNode; play: boolean; delay?: number; duration?: number; className?: string }) {
  const reduce = useReduced();
  return (
    <motion.span
      className={`inline-block ${className}`}
      initial={reduce ? false : { clipPath: "inset(-15% 100% -30% 0%)" }}
      animate={play || reduce ? { clipPath: "inset(-15% 0% -30% 0%)" } : undefined}
      transition={{ duration, ease: EASE_PEN, delay }}
    >
      {children}
    </motion.span>
  );
}

/** Numéro de la réponse, dans la marge à gauche du double filet (ordinateur) ou au-dessus du titre (mobile). */
export function MarginMark({ n, play }: { n?: number; play: boolean }) {
  if (n == null) return null;
  return (
    <span aria-hidden="true" className="mb-3 block text-[26px] leading-none lg:absolute lg:left-[-120px] lg:top-[0.12em] lg:mb-0 lg:w-[62px] lg:text-right" style={{ fontFamily: SERIF, fontStyle: "italic", color: K.orange }}>
      <WriteIn play={play} duration={0.45}>{n}.</WriteIn>
    </span>
  );
}

/** Titre de section : numéro en marge, titre à empattements écrit à la plume, note à droite. */
export function SectionHead({ n, id, lead, em, play, aside }: { n?: number; id: string; lead: string; em: string; play: boolean; aside?: ReactNode }) {
  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(260px,380px)] lg:items-end lg:gap-12">
      <div className="relative min-w-0">
        <MarginMark n={n} play={play} />
        <h2 id={id} style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(36px, 4.4vw, 68px)", lineHeight: 1, letterSpacing: "-0.02em", margin: 0 }}>
          <WriteIn play={play} delay={0.1}>{lead}</WriteIn>{" "}
          <WriteIn play={play} delay={0.5}>
            <em>{em}</em>
          </WriteIn>
        </h2>
      </div>
      {aside}
    </div>
  );
}

/** Double filet de marge immobile : prolonge celui des résultats (bandeau du lien partagé, partage). */
function MarginStatic() {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute inset-y-0 w-[5px] ${RULE_X}`}>
      <span className="absolute inset-y-0 left-0 w-px" style={{ background: K.orange, opacity: 0.8 }} />
      <span className="absolute inset-y-0 w-px" style={{ left: 4, background: K.orange, opacity: 0.45 }} />
    </div>
  );
}

/** Bande de papier alignée sur les résultats (même colonne, même filet) : bandeau « Résultats partagés », bouton de partage. */
export function CorrigeStrip({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className="tm-root" style={{ background: K.paper, color: K.ink, fontFamily: DISPLAY }}>
      <div className={`${PAGE} ${className}`}>
        <MarginStatic />
        {children}
      </div>
    </div>
  );
}

export function Arrow() {
  return (
    <svg className="ou-arrow shrink-0" aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

/** Bouton du corrigé : orange assombri (action principale) ou encre ; la flèche avance au survol. */
export function InkButton({ onClick, children, primary = false, className = "" }: { onClick: () => void; children: ReactNode; primary?: boolean; className?: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`ou-btn ${primary ? "tm-fire" : "tm-ink"} inline-flex min-h-[52px] items-center justify-between gap-4 rounded-full py-3 pl-6 pr-5 text-left text-[15px] font-semibold ${className}`}
      style={{ fontFamily: DISPLAY }}
    >
      <span>{children}</span>
      <Arrow />
    </button>
  );
}
