"use client";

import "./thermomatch-stage.css";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useInView, useScroll, useTransform } from "motion/react";
import { AirLines, Arrow, C, CountUp, DISPLAY, EASE, RevealLines, fmt } from "./shared";
import { useReduced } from "@/components/heroes-v2/outils/motion";

/* ==================================================================
   Section ThermoMatch de l'accueil.
   Un portable dessiné en code : son écran rejoue le vrai parcours
   (questions, analyse, trois choix, soumission) pendant que les trois
   étapes de droite s'allument. Un clic sur une étape y saute.
   - Les trois modèles et leurs chiffres viennent du catalogue (ENERGY STAR,
     liste LogisVert d'Hydro-Québec) ; un chiffre absent n'est pas affiché.
   - L'écran se redresse au défilement ; « réduire les animations » le fige
     sur les trois choix.
   ================================================================== */

export type StageModel = { slug: string; brand: string; name: string; img: string; h5: number | null; hspf2: number | null; subsidy: number | null };

type PhaseId = "postal" | "type" | "priority" | "analyse" | "results" | "soumission";
/** q : numéro de la question dans le vrai questionnaire (13 questions). */
const PHASES: { id: PhaseId; ms: number; step: number; q: number }[] = [
  { id: "postal", ms: 2900, step: 0, q: 1 },
  { id: "type", ms: 2500, step: 0, q: 2 },
  { id: "priority", ms: 2700, step: 0, q: 11 },
  { id: "analyse", ms: 3000, step: 1, q: 13 },
  { id: "results", ms: 6000, step: 1, q: 13 },
  { id: "soumission", ms: 3600, step: 2, q: 13 },
];
const RESULTS = PHASES.findIndex((p) => p.id === "results");

const STEPS = [
  { t: "Décrivez votre maison", d: "Répondez à quelques questions sur votre logement et vos besoins." },
  { t: "Comparez les options", d: "Découvrez les modèles qui correspondent et comprenez les différences." },
  { t: "Recevez une soumission pour votre maison", d: "Un installateur partenaire licencié évalue votre projet sur place. Le prix exact se fait cas par cas." },
];

const GREEN = "#1A8F4E";
const NB = String.fromCharCode(160); // espace insécable (avant « : » et « ? »)
const SERIF: CSSProperties = { fontFamily: "var(--font-serif), Georgia, serif", fontStyle: "italic", fontWeight: 400, letterSpacing: "-0.02em" };
const POSTAL = "H2X 1Y4"; // même exemple que le champ du questionnaire
const SUMMARY: [string, string][] = [
  ["Code postal", POSTAL],
  ["Propriété", "Maison unifamiliale"],
  ["Priorité", "Performance par grand froid"],
];

export function ThermoMatchStage({ models, evaluated }: { models: StageModel[]; evaluated: number }) {
  const sectionRef = useRef<HTMLElement>(null);
  const deviceRef = useRef<HTMLDivElement>(null);
  const inView = useInView(deviceRef, { margin: "-15% 0px -15% 0px" });
  const reduce = !!useReduced();
  const [phase, setPhase] = useState(0);
  const [cycle, setCycle] = useState(0);
  const shown = reduce ? RESULTS : phase;
  const activeStep = PHASES[shown].step;

  // L'écran avance tout seul tant qu'il est visible.
  useEffect(() => {
    if (reduce || !inView) return;
    const t = window.setTimeout(() => setPhase((p) => (p + 1) % PHASES.length), PHASES[phase].ms);
    return () => window.clearTimeout(t);
  }, [phase, inView, reduce, cycle]);

  // Le portable se redresse en arrivant à l'écran.
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "center center"] });
  const rotateX = useTransform(scrollYProgress, [0, 1], [24, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [90, 0]);

  function jump(step: number) {
    setPhase(PHASES.findIndex((p) => p.step === step));
    setCycle((c) => c + 1);
  }

  return (
    <section ref={sectionRef} className="relative overflow-hidden" style={{ background: C.ink, color: C.cream, fontFamily: DISPLAY }} aria-labelledby="tms-titre">
      <AirLines color={C.cream} opacity={0.05} className="pointer-events-none absolute inset-0 h-full w-full" />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20 lg:px-12 lg:py-36">
        {/* Le portable */}
        <div ref={deviceRef} style={{ perspective: 1800 }}>
          <motion.div style={reduce ? undefined : { rotateX, scale, y, transformOrigin: "50% 100%" }}>
            <Laptop>
              <Screen phase={shown} models={models} evaluated={evaluated} replay={`${cycle}-${inView ? "v" : "h"}`} />
            </Laptop>
          </motion.div>
          <p className="mx-auto mt-6 max-w-[620px] text-center text-[12px] leading-relaxed" style={{ color: C.faint }}>
            {`Exemple d’écran${NB}: trois murales de 12${NB}000 BTU certifiées climat froid, chiffres ENERGY STAR et montants LogisVert d’Hydro-Québec.`}
          </p>
        </div>

        {/* Le texte et les étapes */}
        <div>
          <p className="flex items-center gap-3 text-[12px] font-medium uppercase" style={{ letterSpacing: "0.22em", color: C.mute, margin: 0 }}>
            <span aria-hidden="true" className="inline-block h-px w-10" style={{ background: C.orange }} />
            ThermoMatch · 13 questions
          </p>
          <RevealLines
            id="tms-titre"
            lines={["Votre maison.", "Vos critères.", <span key="s" style={SERIF}>Les bonnes options.</span>]}
            style={{ fontSize: "clamp(40px, 4.4vw, 72px)", lineHeight: 0.98, letterSpacing: "-0.045em", fontWeight: 600, margin: "22px 0 0" }}
          />
          <p className="max-w-[500px] text-[17px] leading-[1.6]" style={{ color: C.mute, margin: "24px 0 0" }}>
            {`Répondez à quelques questions${NB}: Thermopompes À Vendre identifie les systèmes qui correspondent à votre maison, votre région et vos priorités.`}
          </p>

          <ol className="mt-10" style={{ listStyle: "none", padding: 0, margin: "40px 0 0" }}>
            {STEPS.map((s, i) => {
              const on = activeStep === i;
              // Progression de l'étape sur l'ensemble de ses écrans.
              const mine = PHASES.map((p, idx) => ({ ...p, idx })).filter((p) => p.step === i);
              const total = mine.reduce((a, p) => a + p.ms, 0);
              const before = mine.filter((p) => p.idx < shown).reduce((a, p) => a + p.ms, 0);
              const from = on ? before / total : 0;
              const to = on ? (before + PHASES[shown].ms) / total : 0;
              return (
                <li key={s.t} style={{ borderTop: `1px solid ${C.line}` }}>
                  <button type="button" onClick={() => jump(i)} aria-pressed={on} className="grid w-full grid-cols-[52px_1fr] gap-x-4 py-6 text-left">
                    <span className="tabular-nums" style={{ ...SERIF, fontSize: 30, lineHeight: 1, color: on ? C.orange : C.faint, transition: "color .5s" }}>
                      0{i + 1}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[19px] font-semibold" style={{ letterSpacing: "-0.02em", color: on ? C.cream : C.mute, transition: "color .5s" }}>
                        {s.t}
                      </span>
                      <motion.span className="block overflow-hidden" initial={false} animate={{ height: on || reduce ? "auto" : 0, opacity: on || reduce ? 1 : 0 }} transition={{ duration: 0.6, ease: EASE }}>
                        <span className="block pt-2 text-[15px] leading-relaxed" style={{ color: C.mute }}>
                          {s.d}
                        </span>
                      </motion.span>
                      <span className="mt-4 block h-px w-full overflow-hidden" style={{ background: C.line }}>
                        <motion.span
                          key={on ? `${shown}-${cycle}` : "off"}
                          className="block h-full origin-left"
                          style={{ background: C.orange }}
                          initial={{ scaleX: from }}
                          animate={{ scaleX: reduce ? (on ? 1 : 0) : inView ? to : from }}
                          transition={{ duration: on && !reduce ? PHASES[shown].ms / 1000 : 0.3, ease: "linear" }}
                        />
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>

          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Link
              href="/trouver-ma-thermopompe"
              className="group inline-flex items-center gap-4 rounded-full py-2 pl-7 pr-2 text-[16px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
              style={{ background: C.orange }}
            >
              Commencer
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo-thermomatch-nav.webp" alt="ThermoMatch" width={118} height={16} style={{ width: 118, height: 16, maxWidth: "none", filter: "brightness(0) invert(1)" }} />
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white transition-transform duration-500 group-hover:-rotate-45" style={{ color: C.orange }}>
                <Arrow />
              </span>
            </Link>
            <Link href="/technologie-thermomatch" className="text-[15px] font-semibold underline-offset-4 hover:underline" style={{ color: C.cream }}>
              Comment ThermoMatch choisit →
            </Link>
          </div>
          <p className="text-[13px]" style={{ color: C.faint, margin: "16px 0 0" }}>
            Gratuit, sans engagement. Environ 2 minutes.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------- Le portable ----------------------------- */

function Laptop({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto w-full max-w-[880px]" role="img" aria-label="Aperçu animé de ThermoMatch : les questions, l’analyse, trois recommandations et la soumission">
      <div className="relative rounded-[22px] p-[1.5%]" style={{ background: "linear-gradient(180deg, #1d2c35 0%, #0c161c 100%)", boxShadow: "inset 0 0 0 1px rgba(244,239,231,0.12), 0 70px 120px -50px rgba(0,0,0,0.95)" }}>
        <span aria-hidden="true" className="absolute left-1/2 top-[0.6%] h-[5px] w-[5px] -translate-x-1/2 rounded-full" style={{ background: "#2b3b45" }} />
        <div className="relative overflow-hidden rounded-[12px]" style={{ containerType: "inline-size", aspectRatio: "16 / 10", background: C.paper }}>
          {children}
          <span aria-hidden="true" className="tms-glare" />
        </div>
      </div>
      <div aria-hidden="true" className="relative" style={{ width: "114%", marginLeft: "-7%", height: 18, borderRadius: "2px 2px 22px 22px / 2px 2px 16px 16px", background: "linear-gradient(180deg, #34444e 0%, #16222a 45%, #0a1216 100%)", boxShadow: "0 36px 50px -24px rgba(0,0,0,0.95)" }}>
        <span className="absolute left-1/2 top-0 h-[7px] w-[15%] -translate-x-1/2 rounded-b-[10px]" style={{ background: "rgba(0,0,0,0.5)" }} />
      </div>
      <div aria-hidden="true" className="mx-auto mt-1 h-10 w-[84%]" style={{ background: "radial-gradient(closest-side, rgba(0,0,0,0.6), transparent)" }} />
    </div>
  );
}

/* ------------------------------- L'écran ------------------------------- */
/* Tout l'écran est dessiné en « em » sur une base de 960 px de large :
   la taille du texte suit la largeur de l'écran (unités de conteneur). */

function Screen({ phase, models, evaluated, replay }: { phase: number; models: StageModel[]; evaluated: number; replay: string }) {
  const p = PHASES[phase];
  const status = p.id === "results" || p.id === "soumission" ? "Vos 3 recommandations" : p.id === "analyse" ? "Analyse en cours" : `Question ${p.q} sur 13`;
  const best = leader(models);
  return (
    <div aria-hidden="true" className="absolute inset-0 flex flex-col" style={{ fontSize: "calc(100cqw / 60)", color: C.ink, fontFamily: DISPLAY }}>
      <div className="flex items-center justify-between" style={{ padding: "1em 1.6em 0.85em" }}>
        <span style={{ fontWeight: 700, fontSize: "0.95em", letterSpacing: "-0.02em" }}>
          Thermo<span style={{ color: C.orange }}>Match</span>
        </span>
        <span className="tabular-nums" style={{ fontSize: "0.7em", color: C.inkMute }}>
          {status}
        </span>
      </div>
      <div style={{ height: "0.18em", background: C.inkLine }}>
        <motion.div style={{ height: "100%", background: C.orange, transformOrigin: "0 50%" }} initial={false} animate={{ scaleX: p.q / 13 }} transition={{ duration: 0.8, ease: EASE }} />
      </div>
      <div className="relative flex-1 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${p.id}-${replay}`}
            className="absolute inset-0"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.5, ease: EASE }}
          >
            {p.id === "postal" && <PostalPane />}
            {p.id === "type" && <OptionsPane n={2} question={`Quel type de propriété${NB}?`} options={["Maison unifamiliale", "Condo", "Duplex", "Triplex / Autre"]} pick={0} answeredBefore={1} />}
            {p.id === "priority" && (
              <OptionsPane
                n={11}
                question={`Qu’est-ce qui est le plus important pour vous${NB}?`}
                options={["Économies d’énergie", "Performance par grand froid", "Silence", "Meilleur prix", "Qualité haut de gamme"]}
                pick={1}
                answeredBefore={2}
              />
            )}
            {p.id === "analyse" && <AnalysePane evaluated={evaluated} />}
            {p.id === "results" && <ResultsPane models={models} best={best} />}
            {p.id === "soumission" && <SoumissionPane model={models[best >= 0 ? best : 0]} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

const eyebrow: CSSProperties = { margin: 0, fontSize: "0.66em", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: C.orange };
const big: CSSProperties = { margin: "0.45em 0 0", fontSize: "2.2em", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1.04 };

function QuestionLayout({ n, question, answered, children }: { n: number; question: string; answered: number; children: ReactNode }) {
  return (
    <div className="grid h-full" style={{ gridTemplateColumns: "1.3fr 1fr", gap: "2.4em", padding: "2em 2.6em" }}>
      <div className="min-w-0">
        <p style={eyebrow}>Question {n}</p>
        <p style={big}>{question}</p>
        <div style={{ marginTop: "1.3em" }}>{children}</div>
      </div>
      <div className="self-start" style={{ background: "#fff", border: `1px solid ${C.inkLine}`, borderRadius: "1em", padding: "1.1em 1.3em 0.4em", marginTop: "1.6em" }}>
        <p style={{ margin: 0, fontSize: "0.6em", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: C.inkMute }}>Résumé de votre projet</p>
        {SUMMARY.map(([k, v], i) => (
          <div key={k} className="flex items-baseline justify-between" style={{ gap: "1em", padding: "0.8em 0", borderTop: i ? `1px solid ${C.inkLine}` : undefined, marginTop: i ? 0 : "0.4em" }}>
            <span style={{ fontSize: "0.7em", color: C.inkMute }}>{k}</span>
            <motion.span
              key={i < answered ? "ok" : "vide"}
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, ease: EASE }}
              style={{ fontSize: "0.78em", fontWeight: 600, color: i < answered ? C.ink : C.inkFaint, textAlign: "right" }}
            >
              {i < answered ? v : "—"}
            </motion.span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PostalPane() {
  const [n, setN] = useState(0);
  useEffect(() => {
    let id = 0;
    const start = window.setTimeout(() => {
      id = window.setInterval(() => setN((v) => Math.min(v + 1, POSTAL.length)), 150);
    }, 500);
    return () => {
      window.clearTimeout(start);
      window.clearInterval(id);
    };
  }, []);
  const done = n >= POSTAL.length;
  return (
    <QuestionLayout n={1} question={`Quel est votre code postal${NB}?`} answered={done ? 1 : 0}>
      <div className="flex items-center justify-between" style={{ border: `1px solid ${done ? C.ink : C.inkLine}`, borderRadius: 999, padding: "0.35em 0.35em 0.35em 1.2em", background: "#fff", transition: "border-color .4s" }}>
        <span className="tabular-nums" style={{ fontSize: "1.05em", fontWeight: 600, letterSpacing: "0.04em" }}>
          {POSTAL.slice(0, n)}
          <span className="tms-caret" />
        </span>
        <motion.span animate={done ? { scale: [1, 0.93, 1] } : { scale: 1 }} transition={{ duration: 0.4, delay: 0.35 }} style={{ background: C.orange, color: "#fff", borderRadius: 999, padding: "0.65em 1.2em", fontSize: "0.74em", fontWeight: 600 }}>
          Continuer
        </motion.span>
      </div>
      <p style={{ margin: "0.9em 0 0", fontSize: "0.72em", color: C.inkMute, lineHeight: 1.5 }}>Pour vous situer et trouver les installateurs disponibles.</p>
    </QuestionLayout>
  );
}

function OptionsPane({ n, question, options, pick, answeredBefore }: { n: number; question: string; options: string[]; pick: number; answeredBefore: number }) {
  const [picked, setPicked] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setPicked(true), 1100);
    return () => window.clearTimeout(t);
  }, []);
  return (
    <QuestionLayout n={n} question={question} answered={answeredBefore + (picked ? 1 : 0)}>
      <div className="grid" style={{ gap: "0.45em" }}>
        {options.map((o, i) => {
          const on = picked && i === pick;
          return (
            <motion.div
              key={o}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0, scale: on ? [1, 0.97, 1] : 1 }}
              transition={{ duration: 0.45, ease: EASE, delay: on ? 0 : 0.1 + i * 0.06 }}
              className="flex items-center justify-between"
              style={{ border: `1px solid ${on ? C.orange : C.inkLine}`, background: on ? "rgba(229,75,23,0.07)" : "#fff", borderRadius: "0.8em", padding: "0.68em 1em", fontSize: "0.84em", fontWeight: on ? 600 : 500, transition: "border-color .35s, background .35s" }}
            >
              {o}
              <span style={{ color: C.orange, fontWeight: 700, opacity: on ? 1 : 0, transition: "opacity .3s" }}>✓</span>
            </motion.div>
          );
        })}
      </div>
    </QuestionLayout>
  );
}

/** Points : chacun représente une part du catalogue ; trois restent allumés. */
const KEEP = [17, 44, 66];

function AnalysePane({ evaluated }: { evaluated: number }) {
  const dots = Array.from({ length: 84 }, (_, i) => i);
  const criteria = ["Capacité à −15 °C pour votre maison", "Efficacité en chauffage (HSPF2)", "Montant LogisVert officiel", `Votre priorité${NB}: grand froid`];
  return (
    <div className="grid h-full items-center" style={{ gridTemplateColumns: "1.2fr 1fr", gap: "2.6em", padding: "2em 2.6em" }}>
      <div>
        <p style={eyebrow}>Analyse</p>
        <p style={big}>
          On compare <span className="tabular-nums">{fmt(evaluated)}</span> modèles admissibles.
        </p>
        <div className="grid" style={{ gridTemplateColumns: "repeat(14, 1fr)", gap: "0.6em", marginTop: "1.5em", maxWidth: "22em" }}>
          {dots.map((i) => {
            const keep = KEEP.includes(i);
            return (
              <motion.span
                key={i}
                className="block rounded-full"
                style={{ width: "0.55em", height: "0.55em", background: keep ? C.orange : C.ink }}
                initial={{ opacity: 0.5, scale: 1 }}
                animate={keep ? { opacity: 1, scale: 1.7 } : { opacity: 0.08, scale: 0.8 }}
                transition={{ duration: 0.5, delay: keep ? 2 : 0.3 + ((i * 29) % 84) * 0.018 }}
              />
            );
          })}
        </div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.1, duration: 0.5 }} style={{ fontSize: "0.74em", color: C.inkMute, margin: "1.3em 0 0" }}>
          Il en reste trois pour votre maison.
        </motion.p>
      </div>
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {criteria.map((c, i) => (
          <motion.li
            key={c}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: EASE, delay: 0.3 + i * 0.35 }}
            className="flex items-center justify-between"
            style={{ borderTop: `1px solid ${C.inkLine}`, padding: "0.9em 0", fontSize: "0.8em", fontWeight: 500, gap: "1em" }}
          >
            {c}
            <span style={{ color: GREEN, fontWeight: 700 }}>✓</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

function ResultsPane({ models, best }: { models: StageModel[]; best: number }) {
  return (
    <div className="flex h-full flex-col" style={{ padding: "1.5em 2em 1.6em" }}>
      <div className="flex items-baseline justify-between" style={{ gap: "1em" }}>
        <p style={{ margin: 0, fontSize: "1.5em", fontWeight: 600, letterSpacing: "-0.035em" }}>
          Vos trois <span style={SERIF}>choix</span>
        </p>
        <p style={{ margin: 0, fontSize: "0.58em", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: C.inkMute }}>ENERGY STAR · Hydro-Québec</p>
      </div>
      <div className="grid" style={{ gridTemplateColumns: `repeat(${Math.max(1, models.length)}, minmax(0, 1fr))`, gap: "1em", marginTop: "1em", alignItems: "start" }}>
        {models.map((m, i) => (
          <motion.div
            key={m.slug}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: EASE, delay: 0.15 + i * 0.12 }}
            className="flex min-w-0 flex-col overflow-hidden"
            style={{ background: "#fff", border: `1px solid ${i === best ? "rgba(229,75,23,0.55)" : C.inkLine}`, borderRadius: "1em", boxShadow: "0 1.4em 2.6em -1.8em rgba(10,20,25,0.4)" }}
          >
            <div className="relative" style={{ height: "10.6em", background: "linear-gradient(180deg, #ffffff 0%, #f1ece4 100%)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={m.img}
                alt=""
                className="tms-float"
                style={{ position: "absolute", left: "0.9em", top: "1.1em", width: "calc(100% - 1.8em)", height: "calc(100% - 1.8em)", objectFit: "contain", maxWidth: "none", animationDelay: `${i * -1.4}s` }}
              />
              {i === best && (
                <span style={{ position: "absolute", left: "0.8em", top: "0.7em", background: C.orange, color: "#fff", borderRadius: 999, padding: "0.35em 0.75em", fontSize: "0.52em", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  Le plus de chaleur à −15 °C
                </span>
              )}
            </div>
            <div style={{ padding: "0.85em 1em 0.8em" }}>
              <p style={{ margin: 0, fontSize: "0.56em", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: C.inkMute }}>{m.brand}</p>
              <p className="truncate" style={{ margin: "0.25em 0 0", fontSize: "0.86em", fontWeight: 600, letterSpacing: "-0.02em" }}>
                {m.name}
              </p>
              <dl style={{ margin: "0.6em 0 0" }}>
                {m.h5 != null && (
                  <Row k="Chaleur à −15 °C">
                    <CountUp value={m.h5} play /> BTU/h
                  </Row>
                )}
                {m.hspf2 != null && (
                  <Row k="HSPF2">
                    <CountUp value={m.hspf2} decimals={1} play />
                  </Row>
                )}
                {m.subsidy != null && m.subsidy > 0 && (
                  <Row
                    k={
                      <span className="inline-flex items-center" style={{ gap: "0.4em" }}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/hydroquebec.png" alt="" style={{ width: "1.15em", height: "1.15em", objectFit: "contain", maxWidth: "none" }} />
                        LogisVert
                      </span>
                    }
                  >
                    <span style={{ color: GREEN }}>
                      <CountUp value={m.subsidy} play /> $
                    </span>
                  </Row>
                )}
              </dl>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function Row({ k, children }: { k: ReactNode; children: ReactNode }) {
  return (
    <div className="flex items-center justify-between" style={{ gap: "0.6em", borderTop: `1px solid ${C.inkLine}`, padding: "0.5em 0", fontSize: "0.68em" }}>
      <dt style={{ color: C.inkMute, margin: 0 }}>{k}</dt>
      <dd className="tabular-nums" style={{ margin: 0, fontWeight: 600, whiteSpace: "nowrap" }}>
        {children}
      </dd>
    </div>
  );
}

function SoumissionPane({ model }: { model?: StageModel }) {
  const [sent, setSent] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setSent(true), 1700);
    return () => window.clearTimeout(t);
  }, []);
  return (
    <div className="grid h-full items-center" style={{ gridTemplateColumns: "1.15fr 1fr", gap: "2.4em", padding: "2em 2.6em" }}>
      <div>
        <p style={eyebrow}>Dernière étape</p>
        <p style={{ ...big, fontSize: "2.15em" }}>
          Votre soumission, <span style={SERIF}>cas par cas.</span>
        </p>
        <p style={{ fontSize: "0.8em", color: C.inkMute, lineHeight: 1.55, margin: "1em 0 0", maxWidth: "24em" }}>
          Un installateur partenaire licencié confirme le calibre et vous remet un prix écrit, montant LogisVert compris.
        </p>
      </div>
      <div style={{ background: "#fff", border: `1px solid ${C.inkLine}`, borderRadius: "1em", padding: "1.2em 1.2em 1.1em", boxShadow: "0 1.4em 2.6em -1.8em rgba(10,20,25,0.4)" }}>
        {model && (
          <div className="flex items-center" style={{ gap: "0.9em", paddingBottom: "0.9em", borderBottom: `1px solid ${C.inkLine}` }}>
            <span className="relative block shrink-0 overflow-hidden" style={{ width: "3.6em", height: "3em", borderRadius: "0.6em", background: "#f4f0ea" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={model.img} alt="" style={{ position: "absolute", inset: "0.3em", width: "calc(100% - 0.6em)", height: "calc(100% - 0.6em)", objectFit: "contain", maxWidth: "none" }} />
            </span>
            <span className="min-w-0">
              <span className="block" style={{ fontSize: "0.56em", fontWeight: 600, letterSpacing: "0.16em", textTransform: "uppercase", color: C.inkMute }}>
                Modèle choisi · {model.brand}
              </span>
              <span className="block truncate" style={{ fontSize: "0.82em", fontWeight: 600 }}>
                {model.name}
              </span>
            </span>
          </div>
        )}
        {[
          ["Prénom", "38%"],
          ["Téléphone", "56%"],
        ].map(([label, w], i) => (
          <div key={label} style={{ marginTop: "0.8em" }}>
            <p style={{ margin: 0, fontSize: "0.6em", color: C.inkMute }}>{label}</p>
            <div style={{ marginTop: "0.3em", height: "2.1em", border: `1px solid ${C.inkLine}`, borderRadius: "0.6em", padding: "0 0.8em", display: "flex", alignItems: "center" }}>
              <motion.span className="block rounded-full" style={{ height: "0.45em", background: "rgba(10,20,25,0.22)" }} initial={{ width: 0 }} animate={{ width: w }} transition={{ duration: 0.6, delay: 0.3 + i * 0.45, ease: EASE }} />
            </div>
          </div>
        ))}
        <motion.div
          animate={{ background: sent ? GREEN : C.orange }}
          transition={{ duration: 0.5 }}
          style={{ marginTop: "1em", borderRadius: 999, padding: "0.75em 1em", textAlign: "center", color: "#fff", fontSize: "0.76em", fontWeight: 600 }}
        >
          {sent ? "Demande envoyée ✓" : "Envoyer ma demande"}
        </motion.div>
      </div>
    </div>
  );
}

/** Le modèle qui livre le plus de chaleur à -15 °C, s'il est seul en tête. */
function leader(models: StageModel[]): number {
  const vals = models.map((m) => m.h5 ?? -Infinity);
  const max = Math.max(...vals);
  if (!Number.isFinite(max)) return -1;
  return vals.filter((v) => v === max).length === 1 ? vals.indexOf(max) : -1;
}
