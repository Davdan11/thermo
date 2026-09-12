"use client";

import "./flow-hero.css";
import { useEffect, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { HC, HERO_DISPLAY, HERO_EASE, HeroEyebrow, HeroFade, HeroLead, HeroTitle, Serif } from "@/components/hero/HeroKit";
import { CountUp } from "@/components/home/premium/shared";

/* ==================================================================
   Premier écran du questionnaire ThermoMatch (présentation seulement).
   La logique (réponses, validation, étapes) reste dans ThermoMatch.tsx :
   ce composant reçoit la question et affiche, en enfant, le champ et
   le bouton que ThermoMatch lui passe.
   ================================================================== */

/** Coupe une question : le début en grotesque, les derniers mots en italique. */
export function splitQuestion(question: string, serifWords = 1): { head: string; tail: string } {
  const words = question.trim().split(/\s+/);
  const n = Math.max(0, Math.min(serifWords, words.length - 1));
  return { head: words.slice(0, words.length - n).join(" "), tail: words.slice(words.length - n).join(" ") };
}

export function ThermoMatchWelcome({ question, subtitle, totalSteps, children }: { question: string; subtitle?: string; totalSteps: number; children: ReactNode }) {
  // Typographie du site : espace insécable avant « ? » (« code postal ? »), sans toucher au texte des étapes.
  // Le découpage en mots se fait sans l'espace, puis l'insécable est ajoutée à la partie en italique.
  const split = splitQuestion(question.replace(/\s+([?!])$/, "$1"), 2);
  const head = split.head;
  const tail = split.tail.replace(/([?!])$/, "\u00A0$1");
  return (
    <div style={{ fontFamily: HERO_DISPLAY, color: HC.cream }}>
      <HeroEyebrow delay={0.05}>ThermoMatch · {totalSteps} questions</HeroEyebrow>
      <HeroTitle
        as="h2"
        delay={0.18}
        // Espace final conservée : le texte lu reste « Quel est votre code postal? ».
        lines={[`${head} `, <Serif key="tail">{tail}</Serif>]}
        style={{ fontSize: "clamp(48px, min(6vw, 10.5vh), 100px)", margin: "26px 0 0" }}
      />
      {subtitle ? (
        <HeroLead delay={0.55} style={{ maxWidth: 560, fontSize: 17 }}>
          {subtitle}
        </HeroLead>
      ) : null}
      <HeroFade delay={0.75} className="mt-9">
        {children}
      </HeroFade>
    </div>
  );
}

/** Titre des écrans de questions suivants : même famille, dernier mot en italique. */
export function QuestionTitle({ question }: { question: string }) {
  const { head, tail } = splitQuestion(question, 1);
  return (
    <h2 style={{ fontFamily: HERO_DISPLAY, fontSize: "clamp(36px, 3.7vw, 56px)", lineHeight: 1.02, letterSpacing: "-0.042em", fontWeight: 600, margin: "0 0 16px" }}>
      {head} <Serif>{tail}</Serif>
    </h2>
  );
}

/** Rangée de chiffres réels (catalogue, nombre de questions…) qui défilent jusqu'à leur valeur. */
export function FlowFacts({ items, delay = 1.05 }: { items: { value: number; label: string }[]; delay?: number }) {
  const reduce = useReducedMotion();
  const [play, setPlay] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setPlay(true), delay * 1000 + 150);
    return () => window.clearTimeout(t);
  }, [delay]);
  if (!items.length) return null;
  return (
    <HeroFade delay={delay}>
      <dl className="relative grid max-w-[560px]" style={{ margin: 0, gridTemplateColumns: `repeat(${items.length}, minmax(0, 1fr))`, borderTop: `1px solid ${HC.line}`, fontFamily: HERO_DISPLAY }}>
        <motion.span
          aria-hidden="true"
          className="absolute left-0 top-[-1px] h-px w-full origin-left"
          style={{ background: HC.orange }}
          initial={reduce ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, ease: HERO_EASE, delay: delay + 0.2 }}
        />
        {items.map((s, i) => (
          <div key={s.label} className="flex flex-col gap-2 pr-3 pt-5" style={{ paddingLeft: i ? 18 : 0, borderLeft: i ? `1px solid ${HC.line}` : "none" }}>
            <dt className="order-2 text-[11px] font-medium uppercase leading-[1.45]" style={{ color: HC.faint, letterSpacing: "0.14em" }}>
              {s.label}
            </dt>
            <dd className="order-1" style={{ fontSize: "clamp(28px, 2.5vw, 38px)", fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 1, margin: 0, color: HC.cream }}>
              <CountUp value={s.value} play={play} />
            </dd>
          </div>
        ))}
      </dl>
    </HeroFade>
  );
}
