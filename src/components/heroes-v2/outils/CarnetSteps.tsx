"use client";

import "./outils.css";
import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { motion } from "motion/react";
import { HERO_EASE } from "@/components/hero/HeroKit";
import { useReduced } from "./motion";
import { CARNET as P, splitQuestion } from "./FlowBar";
import { DISPLAY, SERIF } from "./fonts";
import { Fade, MarginRule, PenLine, nbspMark } from "./Carnet";

/* ==================================================================
   « Carnet » — questions 2 à 13 du questionnaire ThermoMatch.
   Même papier, même double filet de marge et même plume que le premier
   écran. À chaque question : la nouvelle question s'écrit à la plume,
   les réponses s'inscrivent ligne à ligne ; la réponse choisie est
   entourée à la main (choix unique) ou cochée à la main (choix
   multiples). En marge : la photo de l'étape collée au ruban et le
   résumé du projet. Présentation seulement : les réponses, la
   validation et la navigation restent dans ThermoMatch.tsx.
   ================================================================== */

const LETTERS = "abcdefghijklmnopqrstuvwxyz";

/** Mots à trait d'union (« a-t-elle », « Qu'est-ce ») gardés d'un bloc : pas de coupure au trait sur mobile. */
function keepHyphens(text: string): ReactNode[] {
  return text.split(" ").map((word, i) => (
    <span key={i}>
      {i ? " " : null}
      {word.includes("-") ? <span style={{ whiteSpace: "nowrap" }}>{word}</span> : word}
    </span>
  ));
}

/** Page de question : barre du parcours, filet de marge, question, réponses, pied (retour, continuer), marge. */
export function CarnetStepPage({
  header,
  stepKey,
  index,
  totalSteps,
  question,
  subtitle,
  photo,
  aside,
  footer,
  children,
}: {
  header: ReactNode;
  /** Identifiant de l'étape : change à chaque question (relance l'écriture). */
  stepKey: string;
  index: number;
  totalSteps: number;
  question: string;
  subtitle?: string;
  /** Photo de l'étape, collée dans la marge (ordinateur). */
  photo?: string;
  aside?: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}) {
  const reduce = useReduced();
  const mark = question.trim().match(/[?!]$/)?.[0] ?? "";
  const { head, tail } = splitQuestion(question.trim().replace(/\s*[?!]$/, ""), 1);

  return (
    <div key={reduce ? "still" : "live"} className="ou-root flex min-h-screen flex-col" style={{ background: P.paper, color: P.ink, fontFamily: DISPLAY }}>
      {header}
      <div className="relative flex-1">
        <MarginRule className="inset-y-0 left-[20px] sm:left-[44px] lg:left-[100px]" delay={0} />
        <div className="relative mx-auto grid max-w-[1440px] gap-12 pb-14 pl-[42px] pr-5 pt-8 sm:pl-[78px] sm:pr-10 sm:pt-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16 lg:pl-[146px] lg:pr-14 lg:pt-[6vh] xl:grid-cols-[minmax(0,1fr)_340px]">
          <div className="flex min-w-0 flex-col">
            {/* Remontée à chaque question : la plume réécrit, les réponses s'inscrivent */}
            <div key={stepKey}>
              <Fade delay={0} className="flex items-baseline gap-3">
                <span className="text-[22px] leading-none" style={{ fontFamily: SERIF, fontStyle: "italic", color: P.orange }}>
                  n° {index + 1}
                </span>
                <span className="text-[11.5px] font-medium uppercase" style={{ letterSpacing: "0.2em", color: P.soft }}>
                  Question {index + 1} sur {totalSteps}
                </span>
              </Fade>
              <h2 className="max-w-[15em]" style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(38px, min(4.6vw, 8.4vh), 78px)", lineHeight: 1, letterSpacing: "-0.02em", margin: "18px 0 0" }}>
                <PenLine delay={0.1} duration={0.95}>
                  {head ? <>{keepHyphens(head)} </> : null}
                  <em>{keepHyphens(tail)}</em>
                  {mark ? <span style={{ color: P.orange }}>{` ${mark}`}</span> : null}
                </PenLine>
              </h2>
              {subtitle ? (
                <Fade delay={0.55}>
                  <p className="max-w-[580px] text-[15.5px] leading-[1.6] sm:text-[16.5px]" style={{ color: P.soft, margin: "16px 0 0" }}>
                    {subtitle}
                  </p>
                </Fade>
              ) : null}
              <div className="mt-7 max-w-[700px]">{children}</div>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4">{footer}</div>
          </div>

          <aside className="hidden lg:block" aria-label="Résumé de votre projet">
            {photo ? <GluedPhoto key={photo} src={photo} /> : null}
            {aside}
          </aside>
        </div>
      </div>
    </div>
  );
}

/** Photo de l'étape, tirage collé au ruban dans la marge ; elle se pose en tournant légèrement. */
function GluedPhoto({ src }: { src: string }) {
  const reduce = useReduced();
  return (
    <motion.figure
      className="relative mx-2 mb-10"
      style={{ margin: "0 8px 40px" }}
      initial={reduce ? false : { opacity: 0, rotate: 5, y: -18 }}
      animate={{ opacity: 1, rotate: -1.8, y: 0 }}
      transition={{ type: "spring", stiffness: 130, damping: 15, delay: 0.3 }}
    >
      <div className="bg-white p-2 pb-6" style={{ boxShadow: "0 22px 34px -26px rgba(23,27,30,0.55), 0 1px 0 rgba(23,27,30,0.06)" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" width={600} height={400} className="block aspect-[3/2] w-full object-cover" style={{ filter: "saturate(0.78) sepia(0.1) contrast(1.02)" }} />
      </div>
      <span aria-hidden="true" className="absolute left-1/2 top-[-11px] h-[22px] w-[96px] -translate-x-1/2 rotate-[3deg]" style={{ background: "rgba(232,222,203,0.82)", boxShadow: "0 1px 2px rgba(23,27,30,0.08)" }} />
    </motion.figure>
  );
}

/** Groupe de réponses (mêmes rôles ARIA qu'avant : radiogroup ou group). */
export function CarnetChoices({ kind, label, children }: { kind: "radio" | "checkbox"; label: string; children: ReactNode }) {
  return (
    <div role={kind === "radio" ? "radiogroup" : "group"} aria-label={label} style={{ borderTop: `1px solid ${P.line}` }}>
      {children}
    </div>
  );
}

/** Une réponse : ligne du carnet (lettre ou case, libellé, photo facultative). */
export function CarnetChoice({ kind, index, label, selected, image, onClick }: { kind: "radio" | "checkbox"; index: number; label: string; selected: boolean; image?: string; onClick: () => void }) {
  const reduce = useReduced();
  return (
    <motion.button
      type="button"
      role={kind}
      aria-checked={selected}
      onClick={onClick}
      className="ou-choice group relative flex w-full items-center gap-4 py-3 pl-1 pr-2 text-left sm:gap-5"
      style={{ borderBottom: `1px solid ${P.line}`, minHeight: image ? 88 : 58 }}
      initial={reduce ? false : { opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: HERO_EASE, delay: 0.4 + index * 0.05 }}
    >
      {kind === "checkbox" ? (
        <HandBox checked={selected} />
      ) : (
        <span className="w-6 shrink-0 text-[19px] leading-none" style={{ fontFamily: SERIF, fontStyle: "italic", color: selected ? P.orange : P.faint, transition: "color 0.3s" }}>
          {LETTERS[index]}.
        </span>
      )}
      <span className="min-w-0 flex-1">
        <span className="relative inline-block text-[16px] leading-snug sm:text-[17.5px]" style={{ fontWeight: selected ? 600 : 450, color: P.ink }}>
          {label}
          {kind === "radio" && selected ? <HandCircle /> : null}
        </span>
      </span>
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt="" width={240} height={144} className="h-[62px] w-[96px] shrink-0 object-cover sm:h-[68px] sm:w-[120px]" style={{ borderRadius: 2, filter: selected ? "none" : "saturate(0.5) sepia(0.12)", transition: "filter 0.4s" }} />
      ) : null}
      {kind === "radio" ? (
        <svg className="ou-choice-arrow shrink-0" aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      ) : null}
    </motion.button>
  );
}

/** Boucle tracée à la main autour de la réponse choisie (dimensions mesurées : trait régulier). */
function HandCircle() {
  const reduce = useReduced();
  const ref = useRef<HTMLSpanElement>(null);
  const [box, setBox] = useState<{ w: number; h: number } | null>(null);
  useLayoutEffect(() => {
    const el = ref.current;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- mesure du libellé avant de tracer la boucle
    if (el) setBox({ w: el.offsetWidth, h: el.offsetHeight });
  }, []);
  return (
    <span ref={ref} aria-hidden="true" className="pointer-events-none absolute -bottom-2 -left-3.5 -right-3.5 -top-2">
      {box ? (
        <svg width={box.w} height={box.h} className="absolute inset-0 overflow-visible" fill="none">
          <motion.path d={loop(box.w, box.h)} stroke={P.orange} strokeWidth={1.8} strokeLinecap="round" initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.32, ease: [0.5, 0, 0.3, 1] }} />
        </svg>
      ) : null}
    </span>
  );
}

const r = (n: number) => Math.round(n * 10) / 10;
function loop(w: number, h: number) {
  return `M${r(w * 0.14)} ${r(h * 0.16)} C ${r(w * 0.34)} ${r(-h * 0.04)}, ${r(w * 0.8)} ${r(-h * 0.02)}, ${r(w * 0.94)} ${r(h * 0.26)} C ${r(w * 1.02)} ${r(h * 0.46)}, ${r(w * 0.97)} ${r(h * 0.82)}, ${r(w * 0.74)} ${r(h * 0.94)} C ${r(w * 0.52)} ${r(h * 1.04)}, ${r(w * 0.18)} ${r(h * 1.0)}, ${r(w * 0.05)} ${r(h * 0.74)} C ${r(-w * 0.02)} ${r(h * 0.56)}, ${r(w * 0.06)} ${r(h * 0.24)}, ${r(w * 0.26)} ${r(h * 0.1)}`;
}

/** Case du carnet, cochée à la main quand la réponse est choisie. */
function HandBox({ checked }: { checked: boolean }) {
  const reduce = useReduced();
  return (
    <span aria-hidden="true" className="relative block h-[19px] w-[19px] shrink-0" style={{ border: `1.3px solid ${checked ? P.ink : "rgba(23,27,30,0.45)"}`, borderRadius: 2, transition: "border-color 0.3s" }}>
      {checked ? (
        <svg className="absolute -right-[6px] -top-[8px] overflow-visible" width="25" height="23" viewBox="0 0 24 22" fill="none">
          <motion.path d="M3 12.5c2.2 1.6 3.6 3.6 5 6.3C11 11.6 15.4 5.6 22 1.5" stroke={P.orange} strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.35, ease: [0.5, 0, 0.3, 1] }} />
        </svg>
      ) : null}
    </span>
  );
}

/** Retour à la question précédente. */
export function CarnetBack({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" onClick={onClick} className="ou-btn inline-flex h-[52px] items-center gap-2 rounded-full px-5 text-[15px] font-semibold" style={{ border: `1px solid rgba(23,27,30,0.2)`, color: P.ink }}>
      <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
      </svg>
      Retour
    </button>
  );
}

export function CarnetError({ children }: { children: ReactNode }) {
  return (
    <p className="mt-3 text-sm" style={{ color: P.rust }} role="alert">
      {children}
    </p>
  );
}

/** Mention : les réponses restent modifiables. */
export function CarnetNote() {
  return (
    <p className="flex items-center gap-2 text-[13px] sm:ml-auto" style={{ color: P.faint, margin: 0 }}>
      <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
      Vous pourrez modifier vos réponses avant l&apos;envoi.
    </p>
  );
}

/** Résumé du projet en marge : réponses données (modifiables), questions à venir, prochaine étape. */
export function CarnetSummary({
  rows,
  upcoming,
  more,
  next,
}: {
  rows: { key: string; label: string; value: string; onEdit: () => void }[];
  upcoming: { n: number; question: string }[];
  more: boolean;
  next?: string;
}) {
  return (
    <div>
      <p className="flex items-baseline justify-between pb-3" style={{ margin: 0, borderBottom: `1px solid ${P.ink}` }}>
        <span className="text-[21px]" style={{ fontFamily: SERIF, fontStyle: "italic" }}>
          Votre projet
        </span>
        <span className="text-[11px] font-medium uppercase" style={{ letterSpacing: "0.16em", color: P.faint }}>
          Résumé
        </span>
      </p>
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {rows.map((row) => (
          <li key={row.key} className="flex items-baseline justify-between gap-3 py-2 text-[13px]" style={{ borderBottom: `1px solid ${P.line}` }}>
            <span className="min-w-0" style={{ color: P.soft }}>
              {row.label}
            </span>
            <span className="flex shrink-0 items-baseline gap-3">
              <span className="max-w-[150px] text-right font-semibold" style={{ color: P.ink }}>
                {row.value}
              </span>
              <button type="button" onClick={row.onEdit} className="ou-link text-[12px] font-semibold" style={{ color: P.orange }}>
                Modifier
              </button>
            </span>
          </li>
        ))}
        {upcoming.map((u) => (
          <li key={u.n} className="flex items-baseline justify-between gap-4 py-2 text-[13px] leading-snug" style={{ borderBottom: `1px solid ${P.line}`, color: P.faint }}>
            <span>
              <span className="mr-2 text-[14px]" style={{ fontFamily: SERIF, fontStyle: "italic" }}>
                {u.n}
              </span>
              {nbspMark(u.question)}
            </span>
            <span aria-hidden="true">—</span>
          </li>
        ))}
      </ul>
      {more ? (
        <p aria-hidden="true" className="mt-1 text-center text-[16px] leading-none" style={{ color: P.faint, margin: "6px 0 0" }}>
          ⋯
        </p>
      ) : null}
      {next ? (
        <div className="mt-6 flex items-center gap-4 pt-4" style={{ borderTop: "1px dashed rgba(23,27,30,0.22)" }}>
          <div className="min-w-0 flex-1">
            <p className="mb-1 text-[11px] font-medium uppercase" style={{ letterSpacing: "0.18em", color: P.faint, margin: "0 0 4px" }}>
              Prochaine étape
            </p>
            <p className="text-[15px] font-semibold" style={{ color: P.ink, margin: 0 }}>
              {nbspMark(next)}
            </p>
          </div>
          <button type="button" className="ou-btn shrink-0 rounded-full px-4 py-2 text-[12px] font-semibold" style={{ border: `1px solid rgba(23,27,30,0.18)`, color: P.soft }}>
            Aperçu
          </button>
        </div>
      ) : null}
    </div>
  );
}
