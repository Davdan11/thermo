"use client";

import "./results.css";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { EASE_PEN, Fade, MarginRule, PenLine } from "@/components/heroes-v2/outils/Carnet";
import { DISPLAY, MONO, SERIF } from "@/components/heroes-v2/outils/font-stacks";
import { fp } from "@/components/hero/first-paint";
import { MentionGarantieLegale } from "@/components/garantie-legale/MentionGarantieLegale";
import { SavingsBand } from "./SavingsBand";
import { ExistingUnitCompare } from "./ExistingUnitCompare";
import { EmailMyChoices } from "./EmailMyChoices";
import { HandArrow, HandCheck, InkButton, MarginMark, PAGE, PenFrame, PenLoop, RULE_X, Scribble, SectionHead, WriteIn, useAfter, useSeen } from "./Corrige";
import {
  K,
  METRICS,
  NB,
  ND,
  WEIGHTS,
  buildLoadCalc,
  fr,
  funnelParts,
  leadersFor,
  money,
  note,
  num,
  temp,
  toCard,
  valueOf,
  type CalcLine,
  type Card,
  type FunnelPart,
  type LoadCalc,
  type MetricKey,
  type SummaryContext,
} from "./results-model";

/* ==================================================================
   ThermoMatch — « Le corrigé » : écran des trois recommandations.
   Le questionnaire est un carnet ; ceci en est la page corrigée. Même
   papier chaud, même encre, même double filet de marge, mais sa propre
   signature : la plume pose le calcul de la maison dans la marge, ligne
   par ligne (superficie × facteurs de charge, trait, charge à -15 °C),
   puis ENTOURE la bonne réponse et annote les deux autres choix d'une
   flèche (« le plus efficace », « la plus grosse subvention »…).
   1. Héros : titre à la plume, calcul posé, réponse entourée, note de
      bas de page « machines évaluées → bon calibre → retenues ».
   2. Le détail : trois feuilles (la meilleure encadrée à la main).
   3. Économies, appareil actuel, ce qui les distingue, calcul, courriel,
      prochaine étape (barre fixe sur mobile).
   Mêmes props, mêmes données et mêmes actions qu'avant (parcours normal
   et lien partagé). Chaque nombre vient de summaryContext ou des
   résultats ; valeur absente = N/D ou ligne omise, jamais inventée.
   ================================================================== */

interface ThermoMatchResultsProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  results: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSelectResult: (result: any) => void;
  onRetry: () => void;
  summaryContext?: SummaryContext | null;
}

const KICKER: CSSProperties = { letterSpacing: "0.2em", color: K.soft };
const LABEL = "text-[10.5px] font-semibold uppercase";

export function ThermoMatchResults({ results, onSelectResult, onRetry, summaryContext }: ThermoMatchResultsProps) {
  const reduce = useReduced();
  if (!results || results.length === 0) return <Empty onRetry={onRetry} />;

  const cards = results.slice(0, 3).map((r, i) => toCard(r, i, summaryContext));
  const leaders = Object.fromEntries(METRICS.map((m) => [m.key, leadersFor(cards, m.key, m.lower)])) as Record<MetricKey, number[]>;
  const tagsOf = (i: number) => METRICS.filter((m) => leaders[m.key].length === 1 && leaders[m.key][0] === i).map((m) => m.tag);
  const top = cards[0];
  // Numéros des réponses du corrigé, dans l'ordre de la page (les sections absentes ne prennent pas de numéro).
  let n = 0;
  const next = () => ++n;

  return (
    <div key={reduce ? "still" : "live"} className="tm-root ou-root w-full" style={{ background: K.paper, color: K.ink, fontFamily: DISPLAY }}>
      <div className={`${PAGE} pb-12`}>
        <MarginRule className={`inset-y-0 ${RULE_X}`} />

        <Verdict ctx={summaryContext ?? null} cards={cards} tagsOf={tagsOf} />
        <Choices n={next()} cards={cards} tagsOf={tagsOf} leaders={leaders} onSelectResult={onSelectResult} />
        {summaryContext?.savings ? <SavingsBand n={next()} s={summaryContext.savings} /> : null}
        <ExistingUnitCompare choices={cards.map((c) => ({ key: c.key, brand: c.brand, series: c.series, hspf2: c.hspf2 }))} />
        <Distinctions n={next()} cards={cards} leaders={leaders} />
        {summaryContext && <HowItWorks ctx={summaryContext} kept={cards.length} />}
        <EmailMyChoices n={next()} topLabel={`${top.brand} ${top.series}`.trim()} />
        <NextStep n={next()} top={top} onSelect={() => onSelectResult(top.raw)} />

        <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-[14px]">
          <Link href="/comparer" className="ou-link font-semibold" style={{ color: K.ink, textDecoration: "none" }}>
            Comparer ces modèles en détail <span style={{ color: K.orange }}>→</span>
          </Link>
          <button type="button" onClick={onRetry} className="ou-link" style={{ color: K.soft }}>
            Recommencer le questionnaire
          </button>
        </div>
      </div>

      <MobileBar top={top} onSelect={() => onSelectResult(top.raw)} />
    </div>
  );
}

/* ============================== Héros ============================== */

function Verdict({ ctx, cards, tagsOf }: { ctx: SummaryContext | null; cards: Card[]; tagsOf: (i: number) => string[] }) {
  const calc = buildLoadCalc(ctx);
  const funnel = funnelParts(ctx, cards.length);
  const top = cards[0];
  const others = cards.slice(1);

  // Horloge du corrigé : le titre s'écrit ; le calcul, ligne par ligne ; le trait ; le résultat ; puis la plume
  // entoure la réponse (quand elle est à l'écran) et annote les deux autres choix.
  const T_CALC = 0.55;
  const STEP = 0.17;
  const tRule = T_CALC + (calc ? calc.steps.length : 0) * STEP + 0.05;
  const tTotal = tRule + 0.5;
  const tNotes = tTotal + 0.55;
  const tLoop = calc ? tTotal + 0.4 : 1.3;

  const ref = useRef<HTMLDivElement>(null);
  const seen = useSeen(ref);
  const after = useAfter(tLoop);
  const play = seen && after;

  const lead = cards.length === 3 ? "Vos trois thermopompes," : cards.length === 2 ? "Vos deux thermopompes," : "Votre thermopompe,";
  const em = cards.length > 1 ? "calibrées pour votre maison." : "calibrée pour votre maison.";

  return (
    <section aria-labelledby="tm-titre" className="grid gap-x-16 gap-y-12 pb-16 pt-10 sm:pt-14 lg:grid-cols-[minmax(0,1fr)_minmax(330px,400px)] lg:pb-24 lg:pt-[7vh]">
      <div className="min-w-0 lg:col-start-1 lg:row-start-1">
        <Fade delay={0.05} className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-[22px] leading-none" style={{ fontFamily: SERIF, fontStyle: "italic", color: K.orange }}>
            Corrigé
          </span>
          <span className="text-[11.5px] font-medium uppercase" style={KICKER}>
            ThermoMatch · Analyse terminée{ctx?.region ? ` · ${ctx.region}` : ""}
          </span>
        </Fade>
        <h1 id="tm-titre" style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(42px, 5.4vw, 88px)", lineHeight: 0.96, letterSpacing: "-0.022em", margin: "20px 0 0" }}>
          <PenLine delay={0.15} duration={0.9}>
            {lead}{" "}
          </PenLine>
          <PenLine delay={0.7} duration={1}>
            <em>{em}</em>
          </PenLine>
        </h1>
      </div>

      {calc ? <WorkedSum calc={calc} start={T_CALC} step={STEP} tRule={tRule} tTotal={tTotal} tNotes={tNotes} /> : null}

      <div ref={ref} className="min-w-0 lg:col-start-1 lg:row-start-2">
        <Answer top={top} tags={tagsOf(0)} play={play} />
        {others.length > 0 && <Others others={others} tagsOf={tagsOf} play={play} />}
      </div>

      {funnel.length > 0 && <Footnote parts={funnel} play={play} />}
    </section>
  );
}

/** Le calcul de la charge, posé dans la marge : chaque ligne s'écrit à la plume, puis le trait et le résultat. */
function WorkedSum({ calc, start, step, tRule, tTotal, tNotes }: { calc: LoadCalc; start: number; step: number; tRule: number; tTotal: number; tNotes: number }) {
  return (
    <aside aria-labelledby="tm-calcul" className="min-w-0 lg:col-start-2 lg:row-span-3 lg:row-start-1 lg:self-start lg:border-l lg:pl-10" style={{ borderColor: K.line }}>
      <Fade delay={Math.max(0, start - 0.3)}>
        <p className="flex items-baseline justify-between gap-4 pb-3" style={{ margin: 0, borderBottom: `1px solid ${K.ink}` }}>
          <span id="tm-calcul" className="text-[21px]" style={{ fontFamily: SERIF, fontStyle: "italic" }}>
            Le calcul de votre maison
          </span>
          <span className="shrink-0 text-[11px] font-medium uppercase" style={{ letterSpacing: "0.16em", color: K.soft }}>
            Charge
          </span>
        </p>
      </Fade>
      <ol style={{ listStyle: "none", margin: "14px 0 0", padding: 0 }}>
        {calc.steps.map((l, i) => (
          <li key={l.key} className="py-[3px]">
            <PenLine delay={start + i * step} duration={0.5}>
              <CalcRow line={l} />
            </PenLine>
          </li>
        ))}
      </ol>
      {/* Le trait sous la multiplication */}
      <span aria-hidden="true" {...fp({ scaleX: 0, duration: 0.5, ease: EASE_PEN, delay: tRule }, { className: "mt-2 block h-[1.5px] w-full origin-left", style: { background: K.ink } })} />
      <div className="pt-2.5">
        <PenLine delay={tTotal} duration={0.7}>
          <CalcRow line={calc.total} kind="total" />
        </PenLine>
      </div>
      {calc.notes.length > 0 && (
        <ul className="mt-3 pt-2" style={{ listStyle: "none", margin: "12px 0 0", padding: "8px 0 0", borderTop: `1px dashed ${K.rule}` }}>
          {calc.notes.map((l, i) => (
            <li key={l.key} className="py-[2px]">
              <PenLine delay={tNotes + i * step} duration={0.5}>
                <CalcRow line={l} kind="note" />
              </PenLine>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}

/** Une ligne du calcul : opérateur | valeur (mono, alignée à droite) | unité et libellé. */
function CalcRow({ line, kind = "step" }: { line: CalcLine; kind?: "step" | "total" | "note" }) {
  const total = kind === "total";
  const missing = line.value === ND;
  return (
    <span className="grid grid-cols-[1.3rem_5.4rem_minmax(0,1fr)] items-baseline gap-x-3">
      <span aria-hidden={line.op ? undefined : true} style={{ fontFamily: MONO, fontSize: total ? 20 : 15, color: total ? K.orange : K.soft }}>
        {line.op}
      </span>
      <span className="text-right" style={{ fontFamily: MONO, fontVariantNumeric: "tabular-nums", fontWeight: 500, fontSize: total ? 24 : kind === "note" ? 15 : 17, letterSpacing: "-0.02em", color: missing ? K.soft : total ? K.orange : K.ink, whiteSpace: "nowrap" }}>
        {line.value}
      </span>
      <span className="text-[13.5px] leading-snug">
        {line.unit ? <span style={{ color: K.ink, fontWeight: total ? 600 : 500 }}>{line.unit} · </span> : null}
        <span style={{ color: total ? K.ink : K.soft, fontWeight: total ? 600 : 400 }}>{line.label}</span>
      </span>
    </span>
  );
}

/** La réponse : le meilleur choix, entouré à la plume ; ses étiquettes en annotation. */
function Answer({ top, tags, play }: { top: Card; tags: string[]; play: boolean }) {
  const model = [top.series && `Série ${top.series}`, top.outdoor].filter(Boolean).join(" · ");
  return (
    <div>
      <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11.5px] font-medium uppercase" style={{ ...KICKER, margin: 0 }}>
        <span>Réponse</span>
        <span aria-hidden="true" className="h-px w-8" style={{ background: K.rule }} />
        <span>
          {top.badge}
          {top.score != null ? ` · score ${fr(Math.round(top.score))}/100` : ""}
        </span>
      </p>
      <a href="#tm-choix-1" className="mt-7 inline-block max-w-full" style={{ color: K.ink, textDecoration: "none" }}>
        <PenLoop play={play} padX={18} padY={12} width={2.4} duration={1.05} className="max-w-[calc(100%-24px)]">
          <span className="block px-1" style={{ fontFamily: SERIF, fontSize: "clamp(40px, 4.6vw, 72px)", lineHeight: 1, letterSpacing: "-0.02em" }}>
            {top.brand}
          </span>
        </PenLoop>
        {model ? (
          <span className="mt-4 block text-[13px]" style={{ fontFamily: MONO, color: K.soft }}>
            {model}
          </span>
        ) : null}
      </a>
      {tags.length > 0 && (
        <p className="flex items-start gap-2" style={{ margin: "14px 0 0" }}>
          <HandArrow dir="up" play={play} delay={0.9} className="mt-[-4px]" />
          <WriteIn play={play} delay={1.2}>
            <span className="text-[19px] leading-snug" style={{ fontFamily: SERIF, fontStyle: "italic", color: K.rust }}>
              {tags.map(note).join(" · ")}
            </span>
          </WriteIn>
        </p>
      )}
    </div>
  );
}

/** Les deux autres choix, annotés dans la marge (étiquettes calculées entre les trois, sinon le rang du moteur). */
function Others({ others, tagsOf, play }: { others: Card[]; tagsOf: (i: number) => string[]; play: boolean }) {
  return (
    <div className="mt-11 max-w-[680px]">
      <p className="text-[11.5px] font-medium uppercase" style={{ ...KICKER, margin: 0 }}>
        {others.length === 2 ? "Les deux autres choix" : "L’autre choix"}
      </p>
      <ol style={{ listStyle: "none", padding: 0, margin: "12px 0 0", borderTop: `1px solid ${K.line}` }}>
        {others.map((c, j) => {
          const i = j + 1;
          const tags = tagsOf(i);
          const text = tags.length ? tags.map(note).join(" · ") : note(c.badge);
          return (
            <li key={c.key} className="grid grid-cols-[26px_minmax(0,1fr)] items-baseline gap-x-3 py-3.5 sm:grid-cols-[26px_minmax(0,1fr)_auto]" style={{ borderBottom: `1px solid ${K.line}` }}>
              <span className="text-[18px]" style={{ fontFamily: SERIF, fontStyle: "italic", color: K.soft }}>
                {i + 1}
              </span>
              <a href={`#tm-choix-${i + 1}`} className="ou-link min-w-0 justify-self-start text-[17px] font-semibold" style={{ color: K.ink, textDecoration: "none" }}>
                {c.brand} {c.series ? <span className="font-normal" style={{ color: K.soft }}>{c.series}</span> : null}
              </a>
              <span className="col-start-2 mt-1.5 flex items-center gap-2 sm:col-start-3 sm:mt-0">
                <HandArrow dir="left" play={play} delay={1.5 + j * 0.45} />
                <WriteIn play={play} delay={1.8 + j * 0.45}>
                  <span className="text-[17px]" style={{ fontFamily: SERIF, fontStyle: "italic", color: K.rust }}>
                    {text}
                  </span>
                </WriteIn>
              </span>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

/** Note de bas de page : l'entonnoir, avec les vrais nombres ; le dernier est entouré. */
function Footnote({ parts, play }: { parts: FunnelPart[]; play: boolean }) {
  return (
    <div className="lg:col-start-1 lg:row-start-3">
      <span aria-hidden="true" className="block h-px w-14" style={{ background: K.rule }} />
      <p className="flex flex-wrap items-baseline gap-x-2.5 gap-y-2 text-[13.5px]" style={{ color: K.soft, margin: "14px 0 0" }}>
        {parts.map((p, i) => {
          const value = (
            <span style={{ fontFamily: MONO, fontSize: 15, fontWeight: 500, color: K.ink }}>
              {p.value}
            </span>
          );
          return (
            <span key={p.key} className="inline-flex items-baseline gap-1.5">
              {i > 0 && (
                <span aria-hidden="true" className="mr-1" style={{ color: K.orange }}>
                  →
                </span>
              )}
              {p.key === "kept" ? (
                <PenLoop play={play} delay={2.4} duration={0.6} padX={7} padY={4} width={1.6}>
                  {value}
                </PenLoop>
              ) : (
                value
              )}
              <span>{p.label}</span>
            </span>
          );
        })}
      </p>
    </div>
  );
}

/* =========================== Le détail =========================== */

function Choices({ n, cards, tagsOf, leaders, onSelectResult }: { n: number; cards: Card[]; tagsOf: (i: number) => string[]; leaders: Record<MetricKey, number[]>; onSelectResult: ThermoMatchResultsProps["onSelectResult"] }) {
  const ref = useRef<HTMLElement>(null);
  const play = useSeen(ref);
  return (
    <section ref={ref} aria-labelledby="tm-choix" className="pt-2">
      <SectionHead
        n={n}
        id="tm-choix"
        lead="Le détail,"
        em="choix par choix."
        play={play}
        aside={
          <p className="text-[15px] leading-relaxed" style={{ color: K.soft, margin: 0 }}>
            Le meilleur choix est encadré à la plume ; le meilleur chiffre de chaque critère est souligné.
          </p>
        }
      />
      <div className="mt-12 grid max-w-[620px] grid-cols-1 gap-12 min-[1180px]:max-w-none min-[1180px]:grid-cols-[1fr_1.1fr_1fr] min-[1180px]:gap-7">
        {cards.map((c, i) => (
          <ResultCard key={c.key} card={c} i={i} tags={tagsOf(i)} leads={METRICS.filter((m) => leaders[m.key].includes(i)).map((m) => m.key)} onSelect={() => onSelectResult(c.raw)} />
        ))}
      </div>
    </section>
  );
}

function ResultCard({ card, i, tags, leads, onSelect }: { card: Card; i: number; tags: string[]; leads: MetricKey[]; onSelect: () => void }) {
  const top = i === 0;
  const reduce = useReduced();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  const play = inView || reduce;
  const [open, setOpen] = useState(false);
  const order = i === 0 ? "min-[1180px]:order-2 min-[1180px]:-my-5" : i === 1 ? "min-[1180px]:order-1" : "min-[1180px]:order-3";
  const cov = card.coverage != null ? Math.round(card.coverage * 100) : null;
  const stats: { k: MetricKey; label: string; v: number | null; d: number; unit: string }[] = [
    { k: "h5", label: "À −15 °C", v: card.h5, d: 0, unit: card.h5 && !card.h5Certified ? "BTU/h (estimé)" : "BTU/h" },
    { k: "hspf2", label: "HSPF2", v: card.hspf2, d: 1, unit: "chauffage" },
    { k: "seer2", label: "SEER2", v: card.seer2, d: 1, unit: "climatisation" },
    { k: "subsidy", label: "LogisVert", v: card.subsidy > 0 ? card.subsidy : null, d: 0, unit: "$ officiels" },
  ];
  const shown = card.reasons.slice(0, 2);
  const more = card.reasons.slice(2);

  return (
    <motion.div
      ref={ref}
      id={`tm-choix-${i + 1}`}
      className={`scroll-mt-28 ${order}`}
      initial={reduce ? false : { opacity: 0, y: 36 }}
      animate={play ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.12 }}
    >
      <article className="tm-sheet relative flex h-full flex-col px-6 pb-6 pt-6 sm:px-7 sm:pb-7" style={{ background: K.sheet, border: `1px solid ${top ? "transparent" : K.line}`, borderRadius: 3 }}>
        {top && <PenFrame play={play} delay={0.5} />}

        {/* Rang, étiquette du moteur et score */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-[26px] leading-none" style={{ fontFamily: SERIF, fontStyle: "italic", color: K.orange, margin: 0 }}>
              n° {i + 1}
            </p>
            <p className="text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.16em", color: top ? K.rust : K.soft, margin: "8px 0 0" }}>
              {card.badge}
            </p>
          </div>
          {card.score != null && (
            <div className="text-right leading-none">
              <p style={{ margin: 0 }}>
                {top ? (
                  <Scribble play={play} delay={1.4}>
                    <Score value={card.score} />
                  </Scribble>
                ) : (
                  <Score value={card.score} />
                )}
              </p>
              <p className="text-[10.5px] font-semibold uppercase" style={{ letterSpacing: "0.16em", color: K.soft, margin: "10px 0 0" }}>
                Score ThermoMatch
              </p>
            </div>
          )}
        </div>

        <h3 style={{ fontSize: top ? 32 : 29, fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1.02, margin: "22px 0 0" }}>{card.brand}</h3>
        <p className="text-[12.5px]" style={{ fontFamily: MONO, color: K.soft, margin: "8px 0 0" }}>
          {[card.series && `Série ${card.series}`, card.outdoor].filter(Boolean).join(" · ")}
        </p>
        {tags.length > 0 && (
          <ul className="mt-3 space-y-0.5" style={{ listStyle: "none", padding: 0, margin: "12px 0 0" }}>
            {tags.map((t, k) => (
              <li key={t} className="text-[16.5px] leading-snug" style={{ fontFamily: SERIF, fontStyle: "italic", color: K.rust }}>
                <WriteIn play={play} delay={0.7 + k * 0.2}>— {note(t)}</WriteIn>
              </li>
            ))}
          </ul>
        )}

        {/* Par grand froid : ce que les acheteurs regardent en premier. */}
        <div className="mt-6 pt-4" style={{ borderTop: `1px solid ${K.ink}` }}>
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className={LABEL} style={{ letterSpacing: "0.16em", color: K.soft, margin: 0 }}>
                Par grand froid
              </p>
              <p style={{ fontSize: card.minTemp != null ? 23 : 21, fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.08, margin: "8px 0 0" }}>
                {card.minTemp != null ? (
                  <>Chauffe jusqu’à {temp(card.minTemp)}</>
                ) : card.h5 != null ? (
                  <>
                    {fr(card.h5)} BTU/h
                    <span className="block text-[13px] font-medium" style={{ color: K.soft, letterSpacing: 0, marginTop: 5 }}>
                      livrés à −15 °C
                    </span>
                  </>
                ) : (
                  "Données du fabricant"
                )}
              </p>
            </div>
            {card.retention != null && (
              <div className="shrink-0 text-right">
                <p style={{ fontFamily: MONO, fontSize: 22, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1, color: K.rust, margin: 0 }}>
                  {/* Plafonné à 120 %, comme dans les raisons du moteur (explain.ts), pour que la feuille ne se contredise pas. */}
                  {fr(Math.round(Math.min(card.retention, 1.2) * 100))}
                  {NB}%
                </p>
                <p className="text-[10.5px] leading-tight" style={{ color: K.soft, margin: "5px 0 0" }}>
                  de sa puissance nominale
                  <br />à −15 °C
                </p>
              </div>
            )}
          </div>
          <ColdRuler value={card.minTemp ?? -15} known={card.minTemp != null} play={play} delay={0.5 + i * 0.1} />
          <p className="text-[11.5px] leading-snug" style={{ color: K.soft, margin: "8px 0 0" }}>
            {card.minTemp != null
              ? "Température extérieure minimale publiée par le fabricant."
              : card.coldClimate
                ? "Capacité certifiée ENERGY STAR climat froid. Température minimale de fonctionnement : sur la fiche du fabricant."
                : "Température minimale de fonctionnement : sur la fiche du fabricant."}
          </p>
        </div>

        <Print card={card} i={i} />

        {/* Part de la maison couverte à -15 °C */}
        {cov != null && (
          <div className="mt-7">
            <div className="flex items-baseline justify-between gap-3 text-[13px]">
              <span className="font-semibold">Votre maison couverte à −15 °C</span>
              <span style={{ fontFamily: MONO, fontSize: 15, fontWeight: 500 }}>
                {fr(cov)}
                {NB}%
              </span>
            </div>
            <div aria-hidden="true" className="relative mt-3 h-[12px]">
              <span className="absolute inset-x-0 top-[5.5px] h-px" style={{ background: K.rule }} />
              <span className="tm-bar absolute left-0 top-[4px] h-[4px] rounded-full" data-on={play ? "" : undefined} style={{ width: `${Math.min(cov, 120) / 1.2}%`, background: top ? K.orange : "rgba(23,27,30,0.6)", "--d": `${0.6 + i * 0.1}s` } as CSSProperties} />
              {/* Repère 100 % : toute la charge estimée */}
              <span className="absolute top-0 h-[12px] w-px" style={{ left: `${100 / 1.2}%`, background: K.ink }} />
            </div>
            <p className="text-[11.5px]" style={{ color: K.soft, margin: "6px 0 0" }}>
              {cov >= 100 ? "Couvre toute la charge estimée, même au plus froid." : "Le chauffage d’appoint complète lors des grands froids."}
            </p>
          </div>
        )}

        {/* Chiffres certifiés : le meilleur des trois est souligné */}
        <dl className="grid grid-cols-2" style={{ borderTop: `1px solid ${K.ink}`, margin: "26px 0 0" }}>
          {stats.map((s, si) => {
            const lead = leads.includes(s.k);
            const value = s.v == null ? null : fr(s.v, s.d);
            return (
              <div key={s.k} className="min-w-0 py-3.5" style={{ paddingLeft: si % 2 ? 16 : 0, paddingRight: si % 2 ? 0 : 12, borderLeft: si % 2 ? `1px solid ${K.line}` : "none", borderBottom: `1px solid ${K.line}` }}>
                <dt className={LABEL} style={{ letterSpacing: "0.14em", color: K.soft }}>
                  {s.k === "subsidy" ? (
                    <span className="inline-flex items-center gap-1.5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/hydroquebec.png" alt="Hydro-Québec" width={14} height={14} style={{ width: 14, height: 14, objectFit: "contain", maxWidth: "none" }} />
                      {s.label}
                    </span>
                  ) : (
                    s.label
                  )}
                </dt>
                <dd style={{ margin: "6px 0 0" }}>
                  <span style={{ fontFamily: MONO, fontSize: 21, fontWeight: 500, letterSpacing: "-0.03em", color: value == null ? K.soft : K.ink }}>
                    {value == null ? ND : lead ? (
                      <Scribble play={play} delay={1 + si * 0.12}>
                        {value}
                      </Scribble>
                    ) : (
                      value
                    )}
                  </span>{" "}
                  <span className="text-[11px]" style={{ color: K.soft }}>
                    {s.unit}
                  </span>
                  {lead && value != null ? <span className="sr-only"> (meilleur des trois)</span> : null}
                </dd>
              </div>
            );
          })}
        </dl>

        {/* Prix approximatif : fourchette installée du marché québécois (grille de la page /prix). */}
        {card.price && (
          <div className="mt-6">
            <p className={LABEL} style={{ letterSpacing: "0.14em", color: K.soft, margin: 0 }}>
              Prix approximatif installé
            </p>
            <p style={{ fontFamily: MONO, fontSize: 21, fontWeight: 500, letterSpacing: "-0.03em", margin: "6px 0 0" }}>
              {money(card.price.min)} – {money(card.price.max)}
            </p>
            {/* Conformité : garantie légale de bon fonctionnement, sous le prix. */}
            {card.categorie && <MentionGarantieLegale cible={card.categorie} className="text-[12px] font-semibold" style={{ color: K.ink, margin: "6px 0 0" }} />}
            {/* L'aide LogisVert est versée au client par Hydro-Québec : jamais soustraite de ce prix, jamais garantie. */}
            {card.subsidy > 0 && (
              <p className="text-[12.5px] leading-snug" style={{ color: K.soft, margin: "8px 0 0" }}>
                Aide LogisVert à part :{" "}
                <strong style={{ color: K.ink, fontFamily: MONO, fontWeight: 500 }}>
                  {fr(card.subsidy)}
                  {NB}$
                </strong>{" "}
                versés au client par Hydro-Québec (montant officiel pour cet appariement, à faire confirmer).
              </p>
            )}
            <p className="text-[11.5px] leading-snug" style={{ color: K.soft, margin: "6px 0 0" }}>
              Fourchette publiée au Québec pour ce type ({card.price.matchLabel}, {card.price.tierLabel}
              {card.price.basis === "derive" ? ", case interpolée" : ""}), avant subvention. Le prix exact vient de la soumission.
            </p>
          </div>
        )}

        {/* Pourquoi ce choix : les raisons, cochées à la main */}
        {card.reasons.length > 0 && (
          <div className="mt-7">
            <p className="text-[11px] font-bold uppercase" style={{ letterSpacing: "0.16em", color: K.soft, margin: 0 }}>
              Pourquoi ce choix
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 0" }} className="space-y-2.5">
              {shown.map((r, k) => (
                <li key={r}>
                  <ReasonBody text={r} play={play} delay={1.2 + k * 0.18} />
                </li>
              ))}
              <AnimatePresence initial={false}>
                {open &&
                  more.map((r) => (
                    <motion.li
                      key={r}
                      initial={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
                      animate={reduce ? { opacity: 1 } : { opacity: 1, height: "auto" }}
                      exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
                      transition={{ duration: reduce ? 0 : 0.4, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <ReasonBody text={r} play delay={0.15} />
                    </motion.li>
                  ))}
              </AnimatePresence>
            </ul>
            {more.length > 0 && (
              <button type="button" aria-expanded={open} onClick={() => setOpen((o) => !o)} className="ou-link mt-3 text-[13px] font-semibold" style={{ color: K.ink }}>
                {open ? "Voir moins" : `Voir ${more.length === 1 ? "l’autre raison" : `les ${more.length} autres raisons`}`}
              </button>
            )}
          </div>
        )}

        {(card.warnings.length > 0 || card.architectureNote) && (
          <div className="mt-5 space-y-2.5">
            {card.architectureNote && <MarginText text={card.architectureNote} />}
            {card.warnings.map((w) => (
              <MarginText key={w} text={w} />
            ))}
          </div>
        )}

        {card.alsoSoldAs.length > 0 && (
          <p className="text-[12.5px]" style={{ color: K.soft, margin: "16px 0 0" }}>
            Même machine vendue aussi sous <strong style={{ color: K.ink }}>{card.alsoSoldAs.join(", ")}</strong>.
          </p>
        )}

        <div className="mt-auto pt-7">
          <InkButton primary={top} onClick={onSelect} className="w-full">
            Obtenir ma soumission
          </InkButton>
          <p className="text-center text-[12px]" style={{ color: K.soft, margin: "10px 0 0" }}>
            Gratuit, sans engagement
          </p>
        </div>
      </article>
    </motion.div>
  );
}

function Score({ value }: { value: number }) {
  return (
    <span className="inline-flex items-baseline">
      <span style={{ fontFamily: MONO, fontSize: 32, fontWeight: 500, letterSpacing: "-0.05em" }}>{fr(Math.round(value))}</span>
      <span className="text-[13px] font-semibold" style={{ color: K.soft }}>
        /100
      </span>
    </span>
  );
}

/* Règle du froid, 0 → −30 °C, graduée tous les 5 °C : le trait descend jusqu'à la température couverte (fabricant),
   ou jusqu'à −15 °C (mesure certifiée) en encre quand le fabricant ne publie pas de minimum. */
function ColdRuler({ value, known, play, delay }: { value: number; known: boolean; play: boolean; delay: number }) {
  const pct = Math.min(1, Math.max(0, -value / 30));
  return (
    <div aria-hidden="true" className="mt-4">
      <div className="relative h-[14px]">
        <span className="absolute inset-x-0 bottom-0 h-px" style={{ background: K.rule }} />
        {[0, 5, 10, 15, 20, 25, 30].map((t) => (
          <span key={t} className="absolute bottom-0 w-px" style={{ left: t === 30 ? "calc(100% - 1px)" : `${(t / 30) * 100}%`, height: t % 10 === 0 ? 10 : 5, background: K.rule }} />
        ))}
        <span className="tm-bar absolute bottom-[-1px] left-0 h-[3px] rounded-full" data-on={play ? "" : undefined} style={{ width: `${pct * 100}%`, background: known ? K.orange : "rgba(23,27,30,0.55)", "--d": `${delay}s` } as CSSProperties} />
        <span className="tm-tick absolute bottom-[-1px] h-[14px] w-[2px] rounded-full" data-on={play ? "" : undefined} style={{ left: `calc(${pct * 100}% - 1px)`, background: known ? K.orange : K.ink, "--d": `${delay + 1}s` } as CSSProperties} />
      </div>
      <div className="mt-1.5 flex justify-between text-[10.5px]" style={{ fontFamily: MONO, color: K.soft }}>
        {[0, -10, -20, -30].map((t) => (
          <span key={t}>{t === 0 ? `0${NB}°C` : temp(t)}</span>
        ))}
      </div>
    </div>
  );
}

/** Tirage de l'appareil, collé au ruban sur la feuille. Sans photo officielle : pas d'appareil d'une autre marque. */
function Print({ card, i }: { card: Card; i: number }) {
  return (
    <figure className="relative mx-auto w-[92%]" style={{ margin: "30px auto 0" }}>
      <div className="tm-print relative bg-white p-2.5 pb-8" style={{ "--tilt": `${i % 2 ? 1.1 : -1.4}deg`, boxShadow: "0 18px 30px -24px rgba(23,27,30,0.55), 0 1px 0 rgba(23,27,30,0.06)" } as CSSProperties}>
        <div className="relative h-[150px] sm:h-[170px]">
          {card.ownImage ? (
            <Image src={card.img} alt={`${card.brand} ${card.outdoor}`} fill sizes="(min-width: 1180px) 360px, 90vw" style={{ objectFit: "contain", padding: 10 }} />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center" style={{ background: K.sheet }}>
              <span style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 36, lineHeight: 1, color: K.ink }}>{card.brand}</span>
              <span className="text-[10.5px] font-semibold uppercase" style={{ letterSpacing: "0.18em", color: K.soft, marginTop: 10 }}>
                Photo officielle à venir
              </span>
            </div>
          )}
        </div>
        {card.coldClimate && (
          <figcaption className="absolute bottom-2 left-3 text-[15px]" style={{ fontFamily: SERIF, fontStyle: "italic", color: K.ink }}>
            Climat froid
          </figcaption>
        )}
      </div>
      <span aria-hidden="true" className="absolute left-1/2 top-[-10px] h-[20px] w-[84px] -translate-x-1/2 rotate-[2.5deg]" style={{ background: K.tape, boxShadow: "0 1px 2px rgba(23,27,30,0.08)" }} />
    </figure>
  );
}

function ReasonBody({ text, play, delay }: { text: string; play: boolean; delay: number }) {
  return (
    <span className="grid grid-cols-[18px_1fr] gap-2.5 text-[13.5px] leading-snug" style={{ color: K.ink }}>
      <span className="pt-[2px]">
        <HandCheck play={play} delay={delay} />
      </span>
      <span>{text}</span>
    </span>
  );
}

/** Note du moteur (configuration, mise en garde) : filet orange dans la marge de la feuille. */
function MarginText({ text }: { text: string }) {
  return (
    <p className="pl-3.5 text-[12.5px] leading-snug" style={{ borderLeft: `2px solid ${K.orange}`, color: K.ink, margin: 0 }}>
      {text}
    </p>
  );
}

/* ====================== Ce qui les distingue ====================== */

function Distinctions({ n, cards, leaders }: { n: number; cards: Card[]; leaders: Record<MetricKey, number[]> }) {
  const ref = useRef<HTMLElement>(null);
  const play = useSeen(ref);
  const rows = METRICS.filter((m) => cards.some((c) => valueOf(c, m.key) != null));

  return (
    <section ref={ref} className="mt-20 lg:mt-28" aria-labelledby="tm-diff">
      <SectionHead
        n={n}
        id="tm-diff"
        lead="Ce qui les"
        em="distingue."
        play={play}
        aside={
          <p className="text-[15px] leading-relaxed" style={{ color: K.soft, margin: 0 }}>
            Critère par critère, le meilleur des trois est souligné à l’orange. Les barres sont relatives au meilleur.
          </p>
        }
      />

      <div className="mt-10" style={{ borderTop: `1px solid ${K.ink}` }}>
        {rows.map((m, ri) => {
          const vals = cards.map((c) => valueOf(c, m.key));
          const max = Math.max(0, ...vals.map((v) => (v == null ? 0 : Math.abs(v))));
          return (
            <div key={m.key} className="grid gap-4 py-6 lg:grid-cols-[260px_1fr] lg:gap-10" style={{ borderBottom: `1px solid ${K.line}` }}>
              <div>
                <p className="text-[17px] font-semibold" style={{ letterSpacing: "-0.01em", margin: 0 }}>
                  {m.label}
                </p>
                <p className="text-[13px]" style={{ color: K.soft, margin: "4px 0 0" }}>
                  {m.unit}
                </p>
              </div>
              <div className="space-y-3">
                {cards.map((c, ci) => {
                  const v = vals[ci];
                  const lead = leaders[m.key].includes(ci);
                  const shown = v == null ? ND : m.key === "minTemp" ? temp(v) : `${fr(v, m.d)}${m.key === "subsidy" ? `${NB}$` : ""}`;
                  return (
                    <div key={c.key} className="grid grid-cols-[84px_minmax(0,1fr)_auto] items-center gap-3 sm:grid-cols-[150px_minmax(0,1fr)_120px] sm:gap-4">
                      <span className="truncate text-[13.5px]" style={{ color: lead ? K.ink : K.soft, fontWeight: lead ? 600 : 400 }}>
                        {c.brand}
                      </span>
                      <div aria-hidden="true" className="relative h-[10px]">
                        <span className="absolute inset-x-0 top-[4.5px] h-px" style={{ background: K.line }} />
                        <span
                          className="tm-bar absolute left-0 top-[3px] h-[4px] rounded-full"
                          data-on={play ? "" : undefined}
                          style={{ width: `${v != null && max > 0 ? (Math.abs(v) / max) * 100 : 0}%`, background: lead ? K.orange : "rgba(23,27,30,0.42)", "--d": `${0.12 * ri + 0.08 * ci}s` } as CSSProperties}
                        />
                      </div>
                      <span className="text-right text-[14.5px]" style={{ fontFamily: MONO, color: v == null ? K.soft : K.ink, fontWeight: lead ? 500 : 400, whiteSpace: "nowrap" }}>
                        {lead && v != null ? (
                          <Scribble play={play} delay={0.7 + 0.12 * ri}>
                            {shown}
                          </Scribble>
                        ) : (
                          shown
                        )}
                        {lead && v != null ? <span className="sr-only"> (meilleur des trois)</span> : null}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-[12.5px]" style={{ color: K.soft, margin: "16px 0 0" }}>
        Sources : ENERGY STAR (capacité et COP à −15 °C) et liste LogisVert d’Hydro-Québec (montants officiels pour ces appariements).
      </p>
    </section>
  );
}

/* ===================== Comment ThermoMatch a calculé ===================== */

function HowItWorks({ ctx, kept }: { ctx: SummaryContext; kept: number }) {
  const w = ctx.weights;
  const rows = w ? WEIGHTS.flatMap(([k, label]) => {
    const v = num(w[k]);
    return v == null ? [] : [{ label, v: Math.round(v) }];
  }) : [];
  const funnel = funnelParts(ctx, kept);
  const listDate = ctx.logisVertUpdatedAt ? String(ctx.logisVertUpdatedAt).slice(0, 10) : null;
  const notices = ctx.notices ?? [];
  if (rows.length === 0 && funnel.length === 0 && !listDate && notices.length === 0) return null;

  return (
    <details className="tm-details mt-16 lg:mt-20" style={{ borderTop: `1px solid ${K.ink}`, borderBottom: `1px solid ${K.line}` }}>
      <summary className="flex items-center justify-between gap-4 py-5 text-[16px] font-semibold">
        <span className="flex flex-wrap items-baseline gap-x-3">
          <span className="text-[18px] font-normal" style={{ fontFamily: SERIF, fontStyle: "italic", color: K.rust }}>
            Annexe
          </span>
          Comment ThermoMatch a calculé
        </span>
        <span className="tm-plus text-[24px] font-normal leading-none" aria-hidden="true">
          +
        </span>
      </summary>
      <div className="grid gap-10 pb-8 text-[13.5px] md:grid-cols-2" style={{ color: K.soft }}>
        {rows.length > 0 && (
          <div>
            <p className="text-[11px] font-bold uppercase" style={{ letterSpacing: "0.16em", color: K.soft, margin: 0 }}>
              Pondération du score (sur 100)
            </p>
            <ul className="mt-3 space-y-2.5" style={{ listStyle: "none", padding: 0 }}>
              {rows.map((row) => (
                <li key={row.label} className="grid grid-cols-[minmax(0,190px)_1fr_32px] items-center gap-3">
                  <span>{row.label}</span>
                  <span aria-hidden="true" className="relative block h-[8px]">
                    <span className="absolute inset-x-0 top-[3.5px] h-px" style={{ background: K.line }} />
                    <span className="absolute left-0 top-[2.5px] h-[3px] rounded-full" style={{ width: `${Math.min(100, Math.max(0, row.v))}%`, background: K.orange }} />
                  </span>
                  <span className="text-right" style={{ fontFamily: MONO, color: K.ink }}>
                    {fr(row.v)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
        {(funnel.length > 0 || listDate) && (
          <div>
            <p className="text-[11px] font-bold uppercase" style={{ letterSpacing: "0.16em", color: K.soft, margin: 0 }}>
              Le tri
            </p>
            <p style={{ margin: "12px 0 0" }}>
              {funnel.length > 0 ? `${funnel.map((p) => `${p.value} ${p.label}`).join(", ")}.` : ""}
              {listDate ? ` Liste LogisVert du ${listDate}.` : ""}
            </p>
          </div>
        )}
      </div>
      {notices.length > 0 && (
        <div className="space-y-2 pb-7">
          {notices.map((text) => (
            <p key={text} className="text-[12.5px] leading-relaxed" style={{ color: K.soft, margin: 0 }}>
              {text}
            </p>
          ))}
        </div>
      )}
    </details>
  );
}

/* ========================= Prochaine étape ========================= */

function NextStep({ n, top, onSelect }: { n: number; top: Card; onSelect: () => void }) {
  const reduce = useReduced();
  const ref = useRef<HTMLElement>(null);
  const play = useSeen(ref);
  const steps = [
    ["Vous choisissez un modèle", "Parmi vos trois recommandations, ou un autre du catalogue."],
    ["On confirme le calibre", "Par téléphone ou sur place : la charge est vérifiée avant toute installation."],
    ["Vous recevez la soumission", "Détaillée, avec le montant LogisVert. Gratuite, sans engagement."],
  ];
  const label = `Ma soumission pour ${top.brand}`;

  return (
    <section ref={ref} className="relative mt-20 pt-12 lg:mt-28 lg:pt-16" style={{ borderTop: `1px solid ${K.ink}` }} aria-labelledby="tm-next">
      {/* Double trait de fin de corrigé */}
      <span aria-hidden="true" className="absolute inset-x-0 top-[3px] h-px" style={{ background: K.ink }} />
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
        <div className="relative">
          <MarginMark n={n} play={play} />
          <p className="text-[20px] leading-none" style={{ fontFamily: SERIF, fontStyle: "italic", color: K.rust, margin: 0 }}>
            <WriteIn play={play}>Prochaine étape</WriteIn>
          </p>
          <h2 id="tm-next" style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(40px, 5vw, 80px)", lineHeight: 0.98, letterSpacing: "-0.022em", margin: "18px 0 0" }}>
            <WriteIn play={play} delay={0.15}>
              Recevez votre
            </WriteIn>{" "}
            <WriteIn play={play} delay={0.55}>
              <em>soumission détaillée.</em>
            </WriteIn>
          </h2>
          <div className="relative mt-10 flex flex-wrap items-center gap-3">
            <HandArrow dir="down" play={play} delay={1.1} className="absolute left-[-40px] top-[-30px] hidden lg:block" />
            <InkButton primary onClick={onSelect}>
              {label}
            </InkButton>
            <Link href={rdvHref(top)} className="ou-btn tm-ghost inline-flex min-h-[52px] items-center rounded-full px-6 text-[15px] font-semibold" style={{ textDecoration: "none" }}>
              Parler à un conseiller
            </Link>
          </div>
        </div>
        <ol style={{ listStyle: "none", padding: 0, margin: 0, borderTop: `1px solid ${K.line}` }}>
          {steps.map(([t, d], i) => (
            <motion.li
              key={t}
              className="grid grid-cols-[40px_1fr] gap-x-3 py-5"
              style={{ borderBottom: `1px solid ${K.line}` }}
              initial={reduce ? false : { opacity: 0, x: 18 }}
              animate={play ? { opacity: 1, x: 0 } : undefined}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 + i * 0.15 }}
            >
              <span className="text-[26px] leading-none" style={{ fontFamily: SERIF, fontStyle: "italic", color: K.orange }}>
                {i + 1}
              </span>
              <span>
                <span className="flex items-center gap-2.5 text-[18px] font-semibold" style={{ letterSpacing: "-0.015em" }}>
                  {t}
                  <HandCheck play={play} delay={0.8 + i * 0.2} size={15} />
                </span>
                <span className="mt-1 block text-[14.5px] leading-relaxed" style={{ color: K.soft }}>
                  {d}
                </span>
              </span>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Rendez-vous avec le modèle choisi : la page de réservation le reprend dans les précisions. */
function rdvHref(c: Card): string {
  const label = `${c.brand} ${c.series}${c.outdoor ? ` (${c.outdoor})` : ""}`.trim();
  return `/rendez-vous?source=thermomatch&modele=${encodeURIComponent(label)}`;
}

/* Barre fixe sur mobile : la soumission du meilleur choix reste à portée de pouce. */
function MobileBar({ top, onSelect }: { top: Card; onSelect: () => void }) {
  const reduce = useReduced();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-x-3 bottom-3 z-40 flex items-center justify-between gap-3 rounded-full py-2 pl-5 pr-2 lg:hidden"
          style={{ background: K.paper, border: `1px solid ${K.rule}`, boxShadow: "0 18px 36px -18px rgba(23,27,30,0.45)", color: K.ink, fontFamily: DISPLAY }}
          initial={reduce ? { opacity: 0 } : { y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduce ? { opacity: 0 } : { y: 90, opacity: 0 }}
          transition={{ duration: reduce ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="min-w-0">
            <p className="truncate text-[10.5px] font-semibold uppercase" style={{ letterSpacing: "0.14em", color: K.rust, margin: 0 }}>
              {top.badge}
            </p>
            <p className="truncate text-[15px] font-semibold" style={{ margin: 0 }}>
              {top.brand} {top.series}
            </p>
          </div>
          <button type="button" onClick={onSelect} className="tm-fire shrink-0 rounded-full px-5 py-3 text-[14px] font-semibold">
            Ma soumission
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* =========================== Aucun résultat =========================== */

function Empty({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="tm-root ou-root w-full" style={{ background: K.paper, color: K.ink, fontFamily: DISPLAY }}>
      <div className={`${PAGE} pb-20 pt-12 sm:pt-16 lg:pt-[10vh]`}>
        <MarginRule className={`inset-y-0 ${RULE_X}`} />
        <Fade delay={0.05}>
          <span className="text-[22px] leading-none" style={{ fontFamily: SERIF, fontStyle: "italic", color: K.orange }}>
            Corrigé
          </span>
        </Fade>
        <h2 className="max-w-[16em]" style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(36px, 4.4vw, 64px)", lineHeight: 1, letterSpacing: "-0.02em", margin: "18px 0 0" }}>
          <PenLine delay={0.15}>Aucun modèle ne respecte </PenLine>
          <PenLine delay={0.75}>
            <em>tous vos critères.</em>
          </PenLine>
        </h2>
        <Fade delay={1.2}>
          <p className="max-w-md text-[16px] leading-relaxed" style={{ color: K.soft, margin: "22px 0 0" }}>
            Nous préférons ne rien proposer plutôt qu’un appareil inadapté. Un conseiller peut regarder votre maison avec vous.
          </p>
        </Fade>
        <Fade delay={1.4} className="mt-9 flex flex-col gap-3 sm:flex-row">
          <InkButton onClick={onRetry}>Refaire le test</InkButton>
          <Link href="/soumission" className="ou-btn tm-fire inline-flex min-h-[52px] items-center justify-center rounded-full px-6 text-[15px] font-semibold" style={{ textDecoration: "none" }}>
            Parler à un conseiller
          </Link>
        </Fade>
      </div>
    </div>
  );
}
