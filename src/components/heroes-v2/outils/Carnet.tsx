"use client";

import "./outils.css";
import { useReduced } from "./motion";
import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { HERO_EASE } from "@/components/hero/HeroKit";
import { CountUp } from "@/components/home/premium/shared";
import { CARNET as P, FlowBar, splitQuestion } from "./FlowBar";
import { DISPLAY, SERIF } from "./fonts";

/* ==================================================================
   « Carnet » — premier écran du questionnaire ThermoMatch et haut de
   la page /soumission.
   Papier chaud, encre et orange. Une page de carnet : double filet de
   marge qui se trace de haut en bas, grande question à empattements
   écrite « à la plume » (révélée de gauche à droite, une pointe orange
   suit le trait), réponse posée sur une seule ligne.
   - Questionnaire : la question, la ligne de réponse qui se trace, les
     questions du carnet en marge, les chiffres en notes de bas de page.
   - Soumission : même papier et même plume, mais une liste de cases
     cochées à la main (les engagements) au lieu de la ligne de réponse.
   Toute la logique (réponses, validation, envoi) reste chez l'appelant.
   ================================================================== */

export const EASE_PEN: [number, number, number, number] = [0.45, 0.05, 0.35, 1];

/** Espace insécable avant « ? » ou « ! » final (typographie du site). */
export const nbspMark = (s: string) => s.replace(/\s*([?!])$/, " $1");

/** Double filet de marge du carnet, tracé de haut en bas. */
export function MarginRule({ className = "", delay = 0.1, fade = false }: { className?: string; delay?: number; /** Bas du filet fondu (quand il s'arrête avant le bas de la page). */ fade?: boolean }) {
  const reduce = useReduced();
  const mask = fade ? "linear-gradient(180deg, #000 0%, #000 78%, transparent 100%)" : undefined;
  const line = (d: number, opacity: number, left: number) => (
    <motion.span
      className="absolute inset-y-0 w-px origin-top"
      style={{ left, background: P.orange, opacity }}
      initial={reduce ? false : { scaleY: 0 }}
      animate={{ scaleY: 1 }}
      transition={{ duration: 1.6, ease: HERO_EASE, delay: d }}
    />
  );
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute w-[5px] ${className}`} style={mask ? { maskImage: mask, WebkitMaskImage: mask } : undefined}>
      {line(delay, 0.8, 0)}
      {line(delay + 0.12, 0.45, 4)}
    </div>
  );
}

/** Ligne écrite à la plume : le texte se révèle de gauche à droite, une pointe orange suit le bord. */
export function PenLine({ children, delay, duration = 1.1 }: { children: ReactNode; delay: number; duration?: number }) {
  const reduce = useReduced();
  if (reduce) return <span className="block">{children}</span>;
  return (
    <span className="block">
      <span className="relative inline-block">
        <motion.span className="inline-block" initial={{ clipPath: "inset(-12% 100% -28% 0)" }} animate={{ clipPath: "inset(-12% 0% -28% 0)" }} transition={{ duration, ease: EASE_PEN, delay }}>
          {children}
        </motion.span>
        <motion.span
          aria-hidden="true"
          className="absolute top-[14%] h-[72%] w-[2px] rounded-full"
          style={{ background: P.orange }}
          initial={{ left: "0%", opacity: 0 }}
          animate={{ left: "100%", opacity: [0, 1, 1, 0] }}
          transition={{ left: { duration, ease: EASE_PEN, delay }, opacity: { duration: duration + 0.35, times: [0, 0.06, 0.8, 1], delay } }}
        />
      </span>
    </span>
  );
}

export function Fade({ children, delay, className, style }: { children: ReactNode; delay: number; className?: string; style?: CSSProperties }) {
  const reduce = useReduced();
  return (
    <motion.div className={className} style={style} initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: HERO_EASE, delay }}>
      {children}
    </motion.div>
  );
}

/** Bouton du carnet : encre, flèche qui avance, orange au survol. */
export function CarnetButton({ onClick, children }: { onClick: () => void; children: string }) {
  return (
    <button type="button" onClick={onClick} className="ou-btn ou-carnet-btn inline-flex shrink-0 items-center gap-2.5 rounded-full px-6 py-3.5 text-[15px] font-semibold" style={{ background: P.ink, color: "#fff", fontFamily: DISPLAY }}>
      {children}
      <svg className="ou-arrow" aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M13 5l7 7-7 7" />
      </svg>
    </button>
  );
}

/* ==================================================================
   Questionnaire : première page du carnet
   ================================================================== */

export function CarnetWelcome({
  header,
  question,
  subtitle,
  totalSteps,
  facts,
  questions,
  children,
}: {
  header: ReactNode;
  question: string;
  subtitle?: string;
  totalSteps: number;
  /** Chiffres réels (catalogue, nombre de questions, modèles retenus). */
  facts: { value: number; label: string }[];
  /** Les questions du parcours, dans l'ordre (la première est en cours). */
  questions: string[];
  children: ReactNode;
}) {
  const reduce = useReduced();
  const [play, setPlay] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setPlay(true), 2100);
    return () => window.clearTimeout(t);
  }, []);
  // Découpage sans la ponctuation finale, puis « ? » (avec l'insécable) remis à part, en orange.
  const mark = question.trim().match(/[?!]$/)?.[0] ?? "";
  const { head, tail } = splitQuestion(question.trim().replace(/\s*[?!]$/, ""), 2);

  return (
    <div key={reduce ? "still" : "live"} className="ou-root flex min-h-screen flex-col" style={{ background: P.paper, color: P.ink, fontFamily: DISPLAY }}>
      {header}
      <div className="relative flex-1">
        <MarginRule className="inset-y-0 left-[20px] sm:left-[44px] lg:left-[100px]" />
        <div className="relative mx-auto grid max-w-[1440px] gap-14 pb-16 pl-[42px] pr-5 pt-10 sm:pl-[78px] sm:pr-10 sm:pt-14 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-16 lg:pl-[146px] lg:pr-14 lg:pt-[8vh] xl:grid-cols-[minmax(0,1fr)_340px]">
          <div className="min-w-0">
            <Fade delay={0.1} className="flex items-baseline gap-3">
              <span className="text-[22px] leading-none" style={{ fontFamily: SERIF, fontStyle: "italic", color: P.orange }}>
                n° 1
              </span>
              <span className="text-[11.5px] font-medium uppercase" style={{ letterSpacing: "0.2em", color: P.soft }}>
                ThermoMatch · {totalSteps} questions
              </span>
            </Fade>

            <h2 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(54px, min(8.4vw, 14vh), 148px)", lineHeight: 0.94, letterSpacing: "-0.025em", margin: "22px 0 0" }}>
              <PenLine delay={0.3}>{head} </PenLine>
              <PenLine delay={1.05}>
                <em style={{ fontStyle: "italic" }}>{tail}</em>
                {mark ? <span style={{ color: P.orange }}>{` ${mark}`}</span> : null}
              </PenLine>
            </h2>

            {subtitle ? (
              <Fade delay={1.5}>
                <p className="max-w-[580px] text-[16px] leading-[1.65] sm:text-[17px]" style={{ color: P.soft, margin: "26px 0 0" }}>
                  {subtitle}
                </p>
              </Fade>
            ) : null}

            {/* Ligne de réponse : elle se trace après la question */}
            <motion.div className="max-w-[680px]" initial={reduce ? false : { clipPath: "inset(-40% 100% -200% 0)" }} animate={{ clipPath: "inset(-40% 0% -200% 0)" }} transition={{ duration: 1.1, ease: EASE_PEN, delay: 1.75 }}>
              {children}
            </motion.div>

            <Fade delay={2.1}>
              <p className="flex items-center gap-2 text-[13px]" style={{ color: P.faint, margin: "18px 0 0" }}>
                <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Vous pourrez modifier vos réponses avant l&apos;envoi.
              </p>
            </Fade>

            {/* Chiffres réels, en notes de bas de page */}
            {facts.length > 0 && (
              <Fade delay={2.2} className="mt-12 lg:mt-16">
                <span aria-hidden="true" className="block h-px w-14" style={{ background: "rgba(23,27,30,0.35)" }} />
                <dl className="mt-4 flex flex-wrap gap-x-9 gap-y-3" style={{ margin: "16px 0 0" }}>
                  {facts.map((f, i) => (
                    <div key={f.label} className="flex items-baseline gap-2">
                      <dt className="order-2 text-[13.5px]" style={{ color: P.soft }}>
                        {f.label}
                      </dt>
                      <dd className="order-1 flex items-baseline gap-1.5" style={{ margin: 0 }}>
                        <sup className="text-[14px]" style={{ fontFamily: SERIF, fontStyle: "italic", color: P.orange, top: "-0.1em" }}>
                          {i + 1}
                        </sup>
                        <span className="text-[22px] font-semibold" style={{ letterSpacing: "-0.03em", color: P.ink }}>
                          <CountUp value={f.value} play={play} />
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </Fade>
            )}
          </div>

          {/* En marge : les questions du carnet */}
          <aside className="hidden lg:block" aria-label="Les questions du parcours">
            <Fade delay={0.9}>
              <p className="flex items-baseline justify-between pb-3" style={{ margin: 0, borderBottom: `1px solid ${P.ink}` }}>
                <span className="text-[21px]" style={{ fontFamily: SERIF, fontStyle: "italic" }}>
                  Dans ce carnet
                </span>
                <span className="text-[11px] font-medium uppercase" style={{ letterSpacing: "0.16em", color: P.faint }}>
                  {questions.length} questions
                </span>
              </p>
            </Fade>
            <ol style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {questions.map((q, i) => (
                <motion.li
                  key={q}
                  className="flex items-baseline gap-3 py-[7px] text-[13px] leading-snug"
                  style={{ borderBottom: `1px solid ${P.line}`, color: i === 0 ? P.ink : P.faint }}
                  initial={reduce ? false : { opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: HERO_EASE, delay: 1 + i * 0.07 }}
                >
                  <span className="w-5 shrink-0 text-[14px]" style={{ fontFamily: SERIF, fontStyle: "italic", color: i === 0 ? P.orange : P.faint }}>
                    {i + 1}
                  </span>
                  <span className="min-w-0 flex-1" style={i === 0 ? { fontWeight: 600 } : undefined}>
                    {nbspMark(q)}
                  </span>
                  {i === 0 && (
                    <span className="shrink-0 text-[10.5px] font-semibold uppercase" style={{ letterSpacing: "0.14em", color: P.orange }}>
                      En cours
                    </span>
                  )}
                </motion.li>
              ))}
            </ol>
          </aside>
        </div>
      </div>
    </div>
  );
}

/* ==================================================================
   Soumission : barre du parcours et haut de page
   ================================================================== */

/** Barre d'en-tête de la soumission (ton clair) : logo, « Votre demande · Dernière étape » souligné d'orange, Quitter. */
export function SoumissionBar() {
  const reduce = useReduced();
  return (
    <FlowBar
      tone="light"
      center={
        <div key={reduce ? "still" : "live"} className="relative pb-1.5 text-center">
          <p className="text-[12px] font-semibold uppercase" style={{ letterSpacing: "0.16em", margin: 0, color: P.ink }}>
            Votre demande
          </p>
          <p className="text-[12px]" style={{ margin: "2px 0 0", color: P.soft }}>
            Dernière étape
          </p>
          <motion.span
            aria-hidden="true"
            className="absolute bottom-0 left-0 h-[2px] w-full origin-left"
            style={{ background: P.orange }}
            initial={reduce ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: HERO_EASE, delay: 0.4 }}
          />
        </div>
      }
      right={
        <Link href="/" className="ou-link text-[13px] font-medium" style={{ color: P.soft, textDecoration: "none" }}>
          Quitter
        </Link>
      }
    />
  );
}

const FACTS = ["Installateur licencié RBQ", "Rappel sous un jour ouvrable", "Jamais de revente de vos coordonnées"];

/** Haut de /soumission : titre à la plume, introduction, lien ThermoMatch, engagements cochés à la main. */
export function SoumissionHero({ hasDraft }: { hasDraft: boolean }) {
  const reduce = useReduced();
  return (
    <div key={reduce ? "still" : "live"} className="relative pb-10 sm:pb-12" style={{ fontFamily: DISPLAY, color: P.ink }}>
      {/* Filet de marge : du haut de la page jusqu'au bas du bloc */}
      <MarginRule className="bottom-0 left-[-14px] top-[-32px] sm:left-[-22px] sm:top-[-56px] lg:left-[-30px]" delay={0.05} fade />

      <Fade delay={0.05}>
        <p className="flex items-baseline gap-3" style={{ margin: 0 }}>
          <span className="text-[20px] leading-none" style={{ fontFamily: SERIF, fontStyle: "italic", color: P.orange }}>
            Dernière page
          </span>
          <span className="text-[11.5px] font-medium uppercase" style={{ letterSpacing: "0.2em", color: P.soft }}>
            Gratuit · sans engagement
          </span>
        </p>
      </Fade>

      <h1 style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(44px, 5.2vw, 76px)", lineHeight: 0.98, letterSpacing: "-0.02em", margin: "20px 0 0" }}>
        {hasDraft ? (
          <>
            <PenLine delay={0.2}>Votre projet est prêt </PenLine>
            <PenLine delay={0.85}>
              à être <em>évalué.</em>
            </PenLine>
          </>
        ) : (
          <>
            <PenLine delay={0.2}>Dites-nous où et quoi. </PenLine>
            <PenLine delay={0.9}>
              <em>On s’occupe du reste.</em>
            </PenLine>
          </>
        )}
      </h1>

      <Fade delay={1.3}>
        <p className="max-w-[500px] text-[16px] leading-[1.65] sm:text-[16.5px]" style={{ color: P.soft, margin: "22px 0 0" }}>
          {hasDraft
            ? "Vérifiez les renseignements ci-dessous, puis indiquez comment nous pouvons vous joindre."
            : "Précisez ce que vous savez déjà, même partiellement. Un installateur licencié RBQ de votre région vous rappelle sous un jour ouvrable, gratuitement et sans engagement."}
        </p>
      </Fade>
      {!hasDraft && (
        <Fade delay={1.45}>
          <p className="text-[14.5px] font-semibold" style={{ margin: "18px 0 0" }}>
            <Link href="/trouver-ma-thermopompe" className="ou-link" style={{ color: P.ink, textDecoration: "none" }}>
              Ou répondez à 13 questions et laissez ThermoMatch remplir ceci pour vous <span style={{ color: P.orange }}>→</span>
            </Link>
          </p>
        </Fade>
      )}

      {/* Engagements : trois cases cochées à la main, l'une après l'autre */}
      <ul className="mt-9 grid max-w-[600px] grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-5" style={{ listStyle: "none", padding: 0 }}>
        {FACTS.map((f, i) => (
          <motion.li key={f} className="flex items-start gap-3 text-[13.5px] font-medium leading-[1.4]" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.5 + i * 0.25 }}>
            <span aria-hidden="true" className="relative mt-[1px] block h-[18px] w-[18px] shrink-0" style={{ border: `1.2px solid ${P.ink}`, borderRadius: 2 }}>
              <svg className="absolute -right-[5px] -top-[7px] overflow-visible" width="24" height="22" viewBox="0 0 24 22" fill="none">
                <motion.path
                  d="M3 12.5c2.2 1.6 3.6 3.6 5 6.3C11 11.6 15.4 5.6 22 1.5"
                  stroke={P.orange}
                  strokeWidth={2.4}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={reduce ? false : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.45, ease: [0.5, 0, 0.3, 1], delay: 1.75 + i * 0.3 }}
                />
              </svg>
            </span>
            <span style={{ color: P.ink }}>{f}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
