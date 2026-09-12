"use client";

import "./atelier.css";
import Link from "next/link";
import { useRef, type CSSProperties, type ReactNode } from "react";
import { motion, useMotionValue, useMotionValueEvent, useScroll, useSpring, type MotionStyle, type Transition } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { DISPLAY, EASE } from "@/components/heroes-v2/marques/shared";
import { Counter } from "./Counter";
import { PartsTable } from "./PartsTable";
import { CTA_TEXT, CTA_TITLE, TRUST, type GuideData } from "./data";

/* ==================================================================
   Suite du héros « Plan d’atelier » (guides /thermopompes/[slug]).
   La page entière devient un jeu de planches numérotées sur le bleu de
   plan : les longs textes sont sur des feuilles de papier scotchées à
   la planche (cadre tracé à l’encre, cartouche, repères de centrage) ;
   les étapes sont une conduite de frigorigène qui se remplit au
   défilement ; le tableau est une nomenclature ; les liens, un index
   à lignes de cote ; la FAQ, des notes. Aucun quadrillage.
   ================================================================== */

const PALE = "#A9C6E8";
const INK = "#0D3B66";
const HAIR = "rgba(169,198,232,0.34)";
const INK_MUTE = "rgba(13,59,102,0.72)";
const VIEW = { once: true, margin: "0px 0px -10% 0px" } as const;
const LETTERS = "ABCDEFGHIJKL";
const pad = (n: number) => String(n).padStart(2, "0");

type Tone = "blue" | "paper";

function useKit() {
  const reduce = useReduced();
  const t = (delay = 0, duration = 0.9): Transition => (reduce ? { duration: 0 } : { duration, ease: EASE, delay });
  const up = (delay = 0, y = 14) => ({ initial: { opacity: 0, y }, whileInView: { opacity: 1, y: 0 }, viewport: VIEW, transition: t(delay) });
  const grow = (delay = 0, duration = 1.1) => ({ initial: { scaleX: 0 }, whileInView: { scaleX: 1 }, viewport: VIEW, transition: t(delay, duration) });
  return { reduce, t, up, grow };
}

export function GuideSections({ d }: { d: GuideData }) {
  const hasIntro = d.intro.length > 0 || d.benefits.length > 0;
  const hasWho = d.forWho.length + d.notForWho.length > 0;
  const hasGrants = d.grants.length > 0;
  const order = [
    ...(hasIntro ? ["presentation"] : []),
    ...(d.steps.length ? ["etapes"] : []),
    ...(hasWho || hasGrants ? ["conditions"] : []),
    "nomenclature",
    "index",
    ...(d.faq.length ? ["notes"] : []),
  ];
  const total = order.length;
  const no = (k: string) => order.indexOf(k) + 1;

  return (
    <div className="at-root" style={{ fontFamily: DISPLAY }}>
      <div aria-hidden="true" className="at-frame" />
      <div className="relative mx-auto flex max-w-[1440px] flex-col gap-y-20 px-7 pb-24 pt-12 sm:px-12 sm:pb-32 lg:gap-y-28 lg:px-14 lg:pt-14">
        <Sources />
        {hasIntro && <Presentation d={d} no={no("presentation")} total={total} />}
        {d.steps.length > 0 && <Etapes steps={d.steps} no={no("etapes")} total={total} />}
        {(hasWho || hasGrants) && <Conditions d={d} no={no("conditions")} total={total} />}
        <Nomenclature d={d} no={no("nomenclature")} total={total} />
        <Commande />
        <Index d={d} no={no("index")} total={total} />
        {d.faq.length > 0 && <Notes d={d} no={no("notes")} total={total} />}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------
   Pièces communes
   ------------------------------------------------------------------ */

/** En-tête de planche : numéro, filet qui se trace, nom de la feuille. */
function PlateHead({ no, total, label, tone }: { no: number; total: number; label: string; tone: Tone }) {
  const { up, grow } = useKit();
  const c = tone === "paper" ? { mono: INK_MUTE, line: "rgba(13,59,102,0.32)" } : { mono: PALE, line: "rgba(169,198,232,0.42)" };
  return (
    <div aria-hidden="true" className="at-mono flex items-center gap-4 text-[10.5px] uppercase" style={{ letterSpacing: "0.22em", color: c.mono }}>
      <motion.span {...up(0, 6)} className="shrink-0">
        Planche {pad(no)} / {pad(total)}
      </motion.span>
      <motion.span {...grow(0.1, 1.3)} className="h-px min-w-0 flex-1 origin-left" style={{ background: c.line }} />
      <motion.span {...up(0.35, 6)} className="shrink-0">
        {label}
      </motion.span>
    </div>
  );
}

/** Titre de planche : capitales du cartouche, découvert de gauche à droite comme le héros. */
function Title({ id, tone, children, size = "lg", className = "" }: { id: string; tone: Tone; children: ReactNode; size?: "lg" | "sm"; className?: string }) {
  const { t } = useKit();
  return (
    <motion.h2
      id={id}
      className={`uppercase ${className}`}
      style={{
        color: tone === "paper" ? INK : "#FFFFFF",
        fontWeight: 600,
        fontSize: size === "lg" ? "clamp(26px, 2.6vw, 42px)" : "clamp(20px, 1.7vw, 26px)",
        lineHeight: 1.06,
        letterSpacing: "-0.01em",
        textWrap: "balance",
      }}
      initial={{ clipPath: "inset(-12% 100% -12% 0%)" }}
      whileInView={{ clipPath: "inset(-12% 0% -12% 0%)" }}
      viewport={VIEW}
      transition={t(0.15, 1.2)}
    >
      {children}
    </motion.h2>
  );
}

/** Cadre qui se trace trait par trait (quatre filets, dans l’ordre du crayon). */
function Frame({ color, className = "", delay = 0.5 }: { color: string; className?: string; delay?: number }) {
  const { t } = useKit();
  const side = (cls: string, from: { scaleX?: number; scaleY?: number }, d: number) => (
    <motion.span className={`absolute ${cls}`} style={{ background: color }} initial={from} whileInView={{ scaleX: 1, scaleY: 1 }} viewport={VIEW} transition={t(d, 0.9)} />
  );
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute ${className}`}>
      {side("left-0 top-0 h-px w-full origin-left", { scaleX: 0 }, delay)}
      {side("right-0 top-0 h-full w-px origin-top", { scaleY: 0 }, delay + 0.25)}
      {side("bottom-0 right-0 h-px w-full origin-right", { scaleX: 0 }, delay + 0.5)}
      {side("bottom-0 left-0 h-full w-px origin-bottom", { scaleY: 0 }, delay + 0.75)}
    </div>
  );
}

/** Feuille de papier : déroulée de haut en bas, scotchée, cadre à l’encre, cartouche. */
function Sheet({ children, no, total, label, doc }: { children: ReactNode; no: number; total: number; label: string; doc: string }) {
  const { t } = useKit();
  return (
    <div className="relative">
      <span aria-hidden="true" className="at-cm at-cm-t" />
      <span aria-hidden="true" className="at-cm at-cm-b" />
      <span aria-hidden="true" className="at-cm at-cm-l" />
      <span aria-hidden="true" className="at-cm at-cm-r" />
      <motion.div aria-hidden="true" className="at-shadow" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={VIEW} transition={t(0.5, 0.9)} />
      {/* Le papier n’est jamais découpé (clip-path empêcherait le contenu de détecter son arrivée) :
          c’est un cache couleur de planche qui se retire vers le bas, et la feuille paraît se dérouler. */}
      <div className="at-paper">
        <Frame color="rgba(13,59,102,0.5)" className="inset-[10px] sm:inset-[14px]" />
        <div className="relative px-6 pb-8 pt-9 sm:px-12 sm:pb-28 sm:pt-12 lg:px-16 lg:pt-14">{children}</div>
        <Cartouche no={no} total={total} label={label} doc={doc} />
        <motion.span
          aria-hidden="true"
          className="at-unroll"
          initial={{ scaleY: 1 }}
          whileInView={{ scaleY: 0 }}
          viewport={{ once: true, margin: "0px 0px -6% 0px" }}
          transition={t(0.05, 1.25)}
        />
      </div>
      <motion.span aria-hidden="true" className="at-tape left-[7%] -rotate-[4deg]" initial={{ opacity: 0, scale: 1.25 }} whileInView={{ opacity: 1, scale: 1 }} viewport={VIEW} transition={t(0.75, 0.35)} />
      <motion.span aria-hidden="true" className="at-tape right-[7%] rotate-[3deg]" initial={{ opacity: 0, scale: 1.25 }} whileInView={{ opacity: 1, scale: 1 }} viewport={VIEW} transition={t(0.9, 0.35)} />
    </div>
  );
}

function Cartouche({ no, total, label, doc }: { no: number; total: number; label: string; doc: string }) {
  return (
    <div
      aria-hidden="true"
      className="at-cart at-mono relative mx-6 mb-7 grid grid-cols-[1.35fr_1fr_1fr] text-[9.5px] uppercase sm:absolute sm:bottom-[28px] sm:right-[28px] sm:m-0 sm:w-[430px]"
    >
      <div>
        Document<b>{doc}</b>
      </div>
      <div>
        Planche
        <b>
          {pad(no)} / {pad(total)}
        </b>
      </div>
      <div>
        Feuille<b>{label}</b>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <svg className="at-arrow" aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

/* ------------------------------------------------------------------
   Sources et garanties : légende sous le héros
   ------------------------------------------------------------------ */

function Sources() {
  const { up, t } = useKit();
  return (
    <section aria-label="Sources et garanties">
      <div className="flex flex-col gap-5 border-y py-6 lg:flex-row lg:gap-10" style={{ borderColor: HAIR }}>
        <motion.p {...up(0, 6)} aria-hidden="true" className="at-mono shrink-0 text-[10.5px] uppercase lg:w-[150px] lg:pt-0.5" style={{ letterSpacing: "0.22em", color: PALE }}>
          Sources et garanties
        </motion.p>
        <ul className="m-0 grid flex-1 list-none gap-x-8 gap-y-5 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {TRUST.map((it, i) => (
            <motion.li key={it.label} {...up(0.08 + i * 0.09)} className="grid grid-cols-[18px_minmax(0,1fr)] gap-3 text-[13.5px] leading-snug">
              <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" className="mt-0.5">
                <motion.path
                  d="M20 6 9 17l-5-5"
                  stroke={PALE}
                  strokeWidth={2.2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={VIEW}
                  transition={t(0.35 + i * 0.12, 0.6)}
                />
              </svg>
              <span>
                <span className="font-semibold text-white">{it.label}</span>
                <span className="block" style={{ color: "rgba(169,198,232,0.88)" }}>
                  {it.hint}
                </span>
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   Planche : présentation (note générale + détails)
   ------------------------------------------------------------------ */

function Presentation({ d, no, total }: { d: GuideData; no: number; total: number }) {
  const { up } = useKit();
  const n = d.benefits.length;
  return (
    <Sheet no={no} total={total} label="Présentation" doc={d.doc}>
      <PlateHead tone="paper" no={no} total={total} label="Présentation" />
      {d.intro ? (
        <div className="mt-9 grid gap-4 lg:grid-cols-12 lg:gap-10">
          <motion.p {...up(0.1, 6)} aria-hidden="true" className="at-mono text-[10.5px] uppercase lg:col-span-4 lg:pt-2.5" style={{ letterSpacing: "0.22em", color: INK_MUTE }}>
            Note générale
          </motion.p>
          <motion.p {...up(0.2)} className="text-[19px] leading-[1.6] sm:text-[21px] lg:col-span-8" style={{ color: INK, maxWidth: "62ch", textWrap: "pretty" }}>
            {d.intro}
          </motion.p>
        </div>
      ) : null}
      {n > 0 ? (
        <div className={`grid gap-10 lg:grid-cols-12 lg:gap-10 ${d.intro ? "mt-14 lg:mt-20" : "mt-9"}`}>
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-[120px]">
              <Title id="at-savoir" tone="paper">
                Ce qu’il faut savoir
              </Title>
              <motion.p {...up(0.4, 6)} aria-hidden="true" className="at-mono mt-4 text-[10.5px] uppercase" style={{ letterSpacing: "0.22em", color: INK_MUTE }}>
                Détails A{n > 1 ? ` – ${LETTERS[n - 1]}` : ""}
              </motion.p>
            </div>
          </div>
          <ul className="m-0 grid list-none gap-12 p-0 lg:col-span-8">
            {d.benefits.map((b, i) => (
              <Detail key={b.title} letter={LETTERS[i] ?? String(i + 1)} title={b.title} desc={b.desc} />
            ))}
          </ul>
        </div>
      ) : null}
    </Sheet>
  );
}

function Detail({ letter, title, desc }: { letter: string; title: string; desc: string }) {
  const { up, grow } = useKit();
  return (
    <li>
      <div aria-hidden="true" className="at-mono flex items-center gap-3 text-[10.5px] uppercase" style={{ letterSpacing: "0.2em", color: INK_MUTE }}>
        <motion.span {...up(0, 6)} className="shrink-0">
          Détail {letter}
        </motion.span>
        <span className="at-dimrule flex-1">
          <motion.span {...grow(0.15, 1)} className="at-dimrule-line" />
        </span>
      </div>
      <motion.h3 {...up(0.1)} className="mt-4 text-[20px] font-semibold leading-snug" style={{ color: INK }}>
        {title}
      </motion.h3>
      <motion.p {...up(0.2)} className="mt-2 text-[16.5px] leading-[1.75]" style={{ maxWidth: "68ch" }}>
        {desc}
      </motion.p>
    </li>
  );
}

/* ------------------------------------------------------------------
   Planche : étapes (montage)
   ------------------------------------------------------------------ */

function Etapes({ steps, no, total }: { steps: GuideData["steps"]; no: number; total: number }) {
  const { reduce, up } = useKit();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 60%"] });
  // La conduite ne se vide pas en remontant : une fois tracée, elle reste pleine.
  const seen = useMotionValue(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v > seen.get()) seen.set(v);
  });
  const p = useSpring(seen, { stiffness: 140, damping: 30, restDelta: 0.001 });
  const style = { "--at-p": reduce ? 1 : p, "--n": steps.length } as unknown as MotionStyle;

  return (
    <section aria-labelledby="at-etapes">
      <PlateHead tone="blue" no={no} total={total} label="Montage" />
      <div className="mt-8">
        <Title id="at-etapes" tone="blue">
          Les étapes d’un projet réussi
        </Title>
      </div>
      <motion.div ref={ref} className="at-steps-wrap mt-12 lg:mt-16" style={style}>
        <span aria-hidden="true" className="at-rail">
          <span className="at-rail-fill" />
        </span>
        <ol className="at-steps">
          {steps.map((s, i) => (
            <motion.li key={s.title} {...up(0.06 * i)} className="relative" style={{ "--t": i / steps.length } as CSSProperties}>
              <span aria-hidden="true" className="at-station" />
              <p aria-hidden="true" className="at-mono text-[10.5px] uppercase" style={{ letterSpacing: "0.22em", color: PALE }}>
                Étape {pad(i + 1)}
              </p>
              <p className="mt-3 text-[15.5px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.8)" }}>
                <strong className="mb-1.5 block text-[18px] font-semibold leading-snug text-white">{s.title}.</strong> {s.desc}
              </p>
            </motion.li>
          ))}
        </ol>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------
   Planche : conditions (pour qui + subventions)
   ------------------------------------------------------------------ */

function Conditions({ d, no, total }: { d: GuideData; no: number; total: number }) {
  const { up } = useKit();
  const hasWho = d.forWho.length + d.notForWho.length > 0;
  const hasGrants = d.grants.length > 0;
  const both = hasWho && hasGrants;
  return (
    <Sheet no={no} total={total} label={both ? "Conditions" : hasWho ? "Pour qui" : "Subventions"} doc={d.doc}>
      <PlateHead tone="paper" no={no} total={total} label="Conditions" />
      <div className={`mt-9 grid gap-14 ${both ? "lg:grid-cols-2 lg:gap-0" : ""}`}>
        {hasWho ? (
          <section aria-labelledby="at-pourqui" className={both ? "lg:pr-14" : "max-w-[780px]"}>
            <Title id="at-pourqui" tone="paper">
              Pour qui, et pour qui pas
            </Title>
            {d.forWho.length > 0 && <WhoGroup title="Un bon choix si" items={d.forWho} dashed={false} />}
            {d.notForWho.length > 0 && <WhoGroup title="À reconsidérer si" items={d.notForWho} dashed />}
          </section>
        ) : null}
        {hasGrants ? (
          <section aria-labelledby="at-subventions" className={both ? "at-split lg:pl-14" : "max-w-[860px]"}>
            <Title id="at-subventions" tone="paper">
              Subventions applicables
            </Title>
            {d.grants.map((g, i) => (
              <Grant key={g.name} g={g} i={i} />
            ))}
            <motion.p {...up(0.1)} className="mt-8 text-[15.5px] leading-[1.75]">
              Les montants LogisVert exacts par appareil sont dans notre{" "}
              <Link href="/subventions/logisvert" className="at-link">
                tableau par marque
              </Link>
              , tiré de la liste officielle d’Hydro-Québec et mis à jour automatiquement.
            </motion.p>
          </section>
        ) : null}
      </div>
    </Sheet>
  );
}

function WhoGroup({ title, items, dashed }: { title: string; items: string[]; dashed: boolean }) {
  const { up, grow } = useKit();
  return (
    <div className="mt-9">
      <motion.h3 {...up(0)} className="flex items-center gap-3 text-[18px] font-semibold" style={{ color: INK }}>
        <span aria-hidden="true" className={`at-sw ${dashed ? "at-sw-dash" : ""}`} />
        {title}
      </motion.h3>
      <ul className="m-0 mt-4 list-none space-y-3.5 p-0">
        {items.map((x, i) => (
          <motion.li key={x} {...up(0.08 + i * 0.07, 8)} className="grid grid-cols-[30px_minmax(0,1fr)] items-start gap-2 text-[16px] leading-[1.65]">
            <span aria-hidden="true" className="block">
              <motion.span {...grow(0.2 + i * 0.07, 0.6)} className={`at-seg ${dashed ? "at-seg-dash" : ""}`} />
            </span>
            <span>{x}</span>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

function Grant({ g, i }: { g: GuideData["grants"][number]; i: number }) {
  const { up } = useKit();
  return (
    <motion.div {...up(0.06 * i)} className="at-refbox relative mt-9 px-5 pb-5 pt-6 sm:px-6">
      <span aria-hidden="true" className="at-mono at-reftab">
        Réf. {i + 1}
      </span>
      <h3 className="text-[18px] font-semibold leading-snug" style={{ color: INK }}>
        {g.name}
      </h3>
      <p className="mt-2 text-[15.5px] leading-[1.75]">
        {g.conditions}
        {g.source ? (
          <>
            {" "}
            <a href={g.source} rel="noopener noreferrer nofollow" target="_blank" className="at-link">
              Source officielle
            </a>
            .
          </>
        ) : null}
      </p>
    </motion.div>
  );
}

/* ------------------------------------------------------------------
   Planche : nomenclature (classement grand froid)
   ------------------------------------------------------------------ */

function Nomenclature({ d, no, total }: { d: GuideData; no: number; total: number }) {
  const { up } = useKit();
  return (
    <section aria-labelledby="at-nomenclature">
      <PlateHead tone="blue" no={no} total={total} label="Nomenclature" />
      <div className="mt-8 grid gap-5 lg:grid-cols-12 lg:items-end lg:gap-10">
        <div className="lg:col-span-7">
          <Title id="at-nomenclature" tone="blue">
            Les machines les plus performantes par grand froid
          </Title>
        </div>
        <motion.p {...up(0.3)} className="text-[15.5px] leading-relaxed lg:col-span-5 lg:pb-1" style={{ color: "rgba(255,255,255,0.8)" }}>
          Classement sur le COP certifié à -15&nbsp;°C, toutes marques confondues.
        </motion.p>
      </div>
      <motion.div {...up(0.2, 20)} className="mt-9">
        <PartsTable rows={d.cold.rows} skin="bp" showRank metricLabel={d.cold.metricLabel} />
      </motion.div>
      <motion.p {...up(0.1)} className="mt-6">
        <Link href="/meilleures-thermopompes" className="at-more at-mono">
          Tous les classements →
        </Link>
      </motion.p>
    </section>
  );
}

/* ------------------------------------------------------------------
   Appel à l’action : bon de départ
   ------------------------------------------------------------------ */

function Commande() {
  const { up } = useKit();
  return (
    <section aria-labelledby="at-cta" className="relative">
      <div className="at-order relative px-6 pb-14 pt-10 sm:px-10 sm:pb-16 sm:pt-12 lg:px-14 lg:pb-[72px] lg:pt-14">
        <Frame color="rgba(255,255,255,0.85)" className="inset-0" delay={0.1} />
        <span aria-hidden="true" className="pointer-events-none absolute inset-[6px]" style={{ border: "1px solid rgba(169,198,232,0.2)" }} />
        <div className="relative grid gap-9 lg:grid-cols-12 lg:items-center lg:gap-10">
          <div className="lg:col-span-7">
            <motion.p {...up(0.2, 6)} aria-hidden="true" className="at-mono text-[10.5px] uppercase" style={{ letterSpacing: "0.22em", color: PALE }}>
              Étape suivante
            </motion.p>
            <Title id="at-cta" tone="blue" className="mt-4">
              {CTA_TITLE}
            </Title>
            <motion.p {...up(0.4)} className="mt-5 text-[16px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.82)", maxWidth: "60ch" }}>
              {CTA_TEXT}
            </motion.p>
          </div>
          <motion.div {...up(0.55)} className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:flex-col xl:pl-8">
            <Link href="/trouver-ma-thermopompe" className="at-btn at-btn-paper">
              Lancer ThermoMatch
              <Arrow />
            </Link>
            <Link href="/soumission" className="at-btn at-btn-line">
              Demander une soumission
            </Link>
          </motion.div>
        </div>
        <span aria-hidden="true" className="at-order-flow" />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   Planche : index (capacités, renvois)
   ------------------------------------------------------------------ */

function Index({ d, no, total }: { d: GuideData; no: number; total: number }) {
  const max = Math.max(...d.capacities.map((c) => c.btu), 1);
  return (
    <div>
      <PlateHead tone="blue" no={no} total={total} label="Index" />
      <div className="mt-9 grid gap-16 lg:grid-cols-12 lg:gap-12">
        {d.capacities.length > 0 ? (
          <section aria-labelledby="at-capacites" className={d.related.length ? "lg:col-span-7" : "lg:col-span-12"}>
            <Title id="at-capacites" tone="blue" size="sm">
              Par capacité
            </Title>
            <ul className="m-0 mt-6 list-none border-t p-0" style={{ borderColor: HAIR }}>
              {d.capacities.map((c, i) => (
                <CapRow key={c.href} c={c} pct={(c.btu / max) * 100} i={i} />
              ))}
            </ul>
          </section>
        ) : null}
        {d.related.length > 0 ? (
          <section aria-labelledby="at-voir" className="lg:col-span-5">
            <Title id="at-voir" tone="blue" size="sm">
              Voir aussi
            </Title>
            <ul className="m-0 mt-6 list-none border-t p-0" style={{ borderColor: HAIR }}>
              {d.related.map((l, i) => (
                <RefRow key={l.href} l={l} i={i} />
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </div>
  );
}

function CapRow({ c, pct, i }: { c: GuideData["capacities"][number]; pct: number; i: number }) {
  const { up, grow } = useKit();
  return (
    <motion.li {...up(0.03 * i, 8)}>
      <Link href={c.href} className="at-cap grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-5 gap-y-2 px-1 py-3.5 sm:grid-cols-[210px_minmax(0,1fr)_104px]">
        <span className="at-cap-label text-[15px] font-medium">{c.label}</span>
        <span aria-hidden="true" className="at-dim col-span-2 row-start-2 sm:col-span-1 sm:row-start-auto">
          <motion.span {...grow(0.15 + 0.04 * i, 0.9)} className="at-dim-line" style={{ width: `${pct}%` }} />
        </span>
        <span className="at-mono text-right text-[12px]" style={{ color: PALE }}>
          <Counter value={c.count} /> machines
        </span>
      </Link>
    </motion.li>
  );
}

function RefRow({ l, i }: { l: GuideData["related"][number]; i: number }) {
  const { up } = useKit();
  return (
    <motion.li {...up(0.05 * i, 8)}>
      <Link href={l.href} className="at-refrow flex items-center gap-4 px-1 py-4">
        <span aria-hidden="true" className="at-mono w-8 shrink-0 text-[11px]" style={{ color: PALE, letterSpacing: "0.12em" }}>
          R{i + 1}
        </span>
        <span className="at-refrow-l flex-1 text-[15.5px] font-medium">{l.label}</span>
        <Arrow />
      </Link>
    </motion.li>
  );
}

/* ------------------------------------------------------------------
   Planche : notes (questions fréquentes)
   ------------------------------------------------------------------ */

function Notes({ d, no, total }: { d: GuideData; no: number; total: number }) {
  const { up } = useKit();
  return (
    <Sheet no={no} total={total} label="Notes" doc={d.doc}>
      <PlateHead tone="paper" no={no} total={total} label="Notes" />
      <div className="mt-9 grid gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-[120px]">
            <Title id="at-faq" tone="paper">
              Questions fréquentes
            </Title>
          </div>
        </div>
        <ol className="at-notes m-0 list-none p-0 lg:col-span-8">
          {d.faq.map((f, i) => (
            <motion.li key={f.question} {...up(0.05 * i, 8)}>
              <details className="at-note">
                <summary className="flex items-start gap-4 py-5 sm:gap-6">
                  <span aria-hidden="true" className="at-mono w-[62px] shrink-0 pt-[4px] text-[10.5px] uppercase" style={{ letterSpacing: "0.18em", color: INK_MUTE }}>
                    Note {i + 1}
                  </span>
                  <span className="at-q flex-1 text-[17px] font-semibold leading-snug" style={{ color: INK }}>
                    {f.question}
                  </span>
                  <span aria-hidden="true" className="sx-plus mt-1.5" style={{ color: INK }} />
                </summary>
                <p className="sx-ans pb-6 text-[16px] leading-[1.75] sm:pl-[86px]">{f.answer}</p>
              </details>
            </motion.li>
          ))}
        </ol>
      </div>
    </Sheet>
  );
}
