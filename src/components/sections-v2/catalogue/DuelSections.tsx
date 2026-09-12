"use client";

import "./catalogue.css";
import { Fragment, type ReactNode } from "react";
import { MotionConfig, motion } from "motion/react";
import { EASE, Reveal, useSeen } from "./motion";

/* ==================================================================
   Duel à glissière, suite (/comparer).
   La scène du héros continue sous lui : acier froid à gauche, sable
   chaud à droite, une colonne vertébrale au centre (le séparateur).
   ================================================================== */

export const D = {
  ink: "#141A1F",
  mute: "rgba(20,26,31,0.62)",
  faint: "rgba(20,26,31,0.42)",
  line: "rgba(20,26,31,0.14)",
  steel: "#DCE3E8",
  sand: "#EFE5D6",
} as const;
export const EASE_DUEL = EASE;

/** Section #comparateur : fond partagé acier / sable, colonne vertébrale qui descend du héros. */
export function DuelSection({ children }: { children: ReactNode }) {
  const { ref, seen, reduce } = useSeen<HTMLElement>("0px 0px -10% 0px");
  return (
    <MotionConfig reducedMotion="user">
      <section ref={ref} id="comparateur" className="cmpd-root cmpd-split relative" style={{ scrollMarginTop: 100 }}>
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 block h-full w-px origin-top"
          style={{ background: D.line }}
          initial={reduce ? false : { scaleY: 0 }}
          animate={seen ? { scaleY: 1 } : undefined}
          transition={{ duration: 2, ease: EASE }}
        />
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 pb-24 pt-14 sm:px-8 sm:pb-28 sm:pt-20 lg:px-10">{children}</div>
      </section>
    </MotionConfig>
  );
}

/** Poignée du séparateur (décorative), posée sur la colonne vertébrale. */
export function DuelKnob({ className }: { className?: string }) {
  const { ref, seen, reduce } = useSeen<HTMLSpanElement>();
  return (
    <motion.span
      ref={ref}
      aria-hidden="true"
      className={`mx-auto flex h-[64px] w-[24px] flex-col items-center justify-center gap-[5px] rounded-full ${className ?? ""}`}
      style={{ background: D.ink, boxShadow: "0 10px 24px -10px rgba(20,26,31,0.55)" }}
      initial={reduce ? false : { scaleY: 0.2, opacity: 0 }}
      animate={seen ? { scaleY: 1, opacity: 1 } : undefined}
      transition={{ duration: 0.9, ease: EASE }}
    >
      {[0, 1, 2].map((k) => (
        <span key={k} className="block h-px w-[10px] bg-white/85" />
      ))}
    </motion.span>
  );
}

/** En-tête du sélecteur (mêmes textes que l'ancien encadré). */
export function DuelIntro({ max }: { max: number }) {
  const words = ["Sélectionnez", "vos", "thermopompes", "à", "comparer"];
  const { ref, seen, reduce } = useSeen<HTMLHeadingElement>();
  return (
    <div className="mb-12 text-center sm:mb-14">
      <DuelKnob className="mb-8" />
      <h2 ref={ref} className="mx-auto" style={{ margin: 0, fontSize: "clamp(32px, 4.2vw, 62px)", lineHeight: 1.02, letterSpacing: "-0.045em", fontWeight: 500, color: D.ink, textWrap: "balance", maxWidth: 900 }}>
        {words.map((w, i) => (
          <Fragment key={i}>
            <span className="inline-block overflow-hidden align-bottom" style={{ paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
              <motion.span className="inline-block" initial={reduce ? false : { y: "110%" }} animate={seen ? { y: "0%" } : undefined} transition={{ duration: 1, ease: EASE, delay: i * 0.06 }}>
                {w}
              </motion.span>
            </span>
            {/* L'espace reste hors du masque : en fin de bloc en ligne, il serait supprimé. */}
            {i < words.length - 1 ? " " : ""}
          </Fragment>
        ))}
      </h2>
      <Reveal delay={0.35}>
        <p className="mx-auto text-[16px] sm:text-[17.5px]" style={{ margin: "16px auto 0", color: D.mute, maxWidth: 520, lineHeight: 1.5 }}>
          Choisissez entre 2 et {max} modèles pour les comparer côte à côte.
        </p>
      </Reveal>
    </div>
  );
}

/**
 * Tir à la corde (décoratif, les chiffres sont dans les en-têtes) : la poignée part du centre
 * et glisse vers le modèle qui l'emporte sur le plus de critères, comme le séparateur du héros.
 */
export function DuelTug({ a, b, winsA, winsB, total }: { a: string; b: string; winsA: number; winsB: number; total: number }) {
  const { ref, seen, reduce } = useSeen<HTMLDivElement>();
  const pos = 14 + (winsA / (winsA + winsB)) * 72;
  const big = { fontSize: "clamp(34px, 3.6vw, 52px)", fontWeight: 300, letterSpacing: "-0.05em", lineHeight: 1 } as const;
  const small = "text-[10.5px] font-semibold uppercase";
  return (
    <div ref={ref} aria-hidden="true" className="mb-12 w-full select-none">
      <div className="flex items-end justify-between gap-6">
        <div>
          <p className={small} style={{ letterSpacing: "0.2em", color: D.mute, margin: 0 }}>
            {a}
          </p>
          <p style={{ ...big, margin: "6px 0 0" }}>
            {winsA}
            <span className="ml-1 text-[14px] tracking-normal" style={{ color: D.faint }}>
              / {total}
            </span>
          </p>
        </div>
        <div className="text-right">
          <p className={small} style={{ letterSpacing: "0.2em", color: D.mute, margin: 0 }}>
            {b}
          </p>
          <p style={{ ...big, margin: "6px 0 0" }}>
            {winsB}
            <span className="ml-1 text-[14px] tracking-normal" style={{ color: D.faint }}>
              / {total}
            </span>
          </p>
        </div>
      </div>
      <div className="relative mt-3 h-[64px]">
        <div className="absolute inset-x-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full" style={{ background: "rgba(20,26,31,0.2)" }} />
        <motion.div className="absolute left-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full" style={{ background: D.ink, width: "50%" }} initial={reduce ? false : { width: "50%" }} animate={seen ? { width: `${pos}%` } : undefined} transition={{ duration: 1.8, ease: EASE, delay: 0.35 }} />
        <motion.div className="absolute top-1/2" style={{ left: "50%" }} initial={reduce ? false : { left: "50%" }} animate={seen ? { left: `${pos}%` } : undefined} transition={{ duration: 1.8, ease: EASE, delay: 0.35 }}>
          <span className="flex h-[64px] w-[24px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-[5px] rounded-full" style={{ background: D.ink, boxShadow: "0 10px 24px -10px rgba(20,26,31,0.55)" }}>
            {[0, 1, 2].map((k) => (
              <span key={k} className="block h-px w-[10px] bg-white/85" />
            ))}
          </span>
        </motion.div>
      </div>
    </div>
  );
}
