"use client";

import "./product-heroes.css";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { HC, HERO_EASE, HeroActions, HeroButton, HeroEyebrow, HeroFade, HeroLead, HeroShell, HeroStats, HeroTitle, Serif, type HeroStat } from "@/components/hero/HeroKit";
import type { RangeRow, RangeSet } from "./prix-sets";

/* ==================================================================
   Héros des pages de prix.
   - /prix : tableau de fourchettes publiées (murale, multizone,
     centrale) ; chaque fourchette se trace de sa borne basse à sa
     borne haute, les tableaux se succèdent seuls jusqu'au premier clic.
   - /prix/[slug] : une seule jauge (murale 12 000 BTU par gamme) que
     balaie un repère « votre maison », et les facteurs qui vous placent
     dans la fourchette, éclairés tour à tour.
   Uniquement les fourchettes de la grille publiée (aucun prix inventé).
   ================================================================== */

const dollars = (n: number) => `${n.toLocaleString("fr-CA")} $`;

/** Axe arrondi autour des fourchettes (pas de 1 000, 2 000 ou 5 000 $). */
function axisOf(rows: RangeRow[]) {
  const lo = Math.min(...rows.map((r) => r.min));
  const hi = Math.max(...rows.map((r) => r.max));
  const span = Math.max(1, hi - lo);
  const step = span > 8000 ? 5000 : span > 4000 ? 2000 : 1000;
  const start = Math.max(0, Math.floor((lo - span * 0.08) / step) * step);
  const end = Math.ceil((hi + span * 0.08) / step) * step;
  const ticks: number[] = [];
  for (let t = start; t <= end; t += step) ticks.push(t);
  const pos = (v: number) => ((v - start) / (end - start)) * 100;
  return { ticks, pos };
}

function Axis({ ticks, pos }: { ticks: number[]; pos: (v: number) => number }) {
  return (
    <div aria-hidden="true" className="relative mt-3 h-4 text-[10.5px] tabular-nums" style={{ color: HC.faint }}>
      {ticks.map((t, k) => (
        <span key={t} className="absolute top-0 whitespace-nowrap" style={{ left: `${pos(t)}%`, transform: k === 0 ? "none" : k === ticks.length - 1 ? "translateX(-100%)" : "translateX(-50%)" }}>
          {dollars(t)}
        </span>
      ))}
    </div>
  );
}

const PANEL = {
  background: "rgba(16,34,45,0.72)",
  border: `1px solid ${HC.line}`,
  backdropFilter: "blur(16px) saturate(130%)",
  WebkitBackdropFilter: "blur(16px) saturate(130%)",
  boxShadow: "0 50px 90px -50px rgba(0,0,0,0.85)",
} as const;

/* ------------------------------------------------------------------
   /prix
   ------------------------------------------------------------------ */
export function PrixHero({ crumbs, sets, stats, footnote }: { crumbs: ReactNode; sets: RangeSet[]; stats: HeroStat[]; footnote: string }) {
  return (
    <HeroShell size="md" labelledBy="pdh-prix-titre" snow={0.25} visual={sets.length ? <RangeBoard sets={sets} footnote={footnote} /> : undefined}>
      <HeroFade delay={0.05} className="ph-crumbs pdh-crumbs">
        {crumbs}
      </HeroFade>
      <div className="mt-8">
        <HeroEyebrow>Prix et coûts</HeroEyebrow>
      </div>
      <HeroTitle
        id="pdh-prix-titre"
        lines={[
          "Prix d’une thermopompe",
          <span key="l2">
            au Québec <Serif>en 2026</Serif>
          </span>,
        ]}
      />
      <HeroLead>
        Les fourchettes ci-dessous sont celles que le marché québécois publie, relevées page par page et regroupées par type, calibre et gamme de marque. Elles servent à situer une soumission, pas à la remplacer&nbsp;: le prix exact dépend de votre maison.
      </HeroLead>
      <HeroActions>
        <HeroButton href="/trouver-ma-thermopompe">Estimer avec ThermoMatch</HeroButton>
        <HeroButton href="/soumission" variant="ghost">
          Demander une soumission
        </HeroButton>
      </HeroActions>
      <HeroStats items={stats} delay={1} />
    </HeroShell>
  );
}

function RangeBoard({ sets, footnote }: { sets: RangeSet[]; footnote: string }) {
  const reduce = !!useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(true);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 1000);
    return () => window.clearTimeout(t);
  }, []);
  // Les tableaux se succèdent toutes les 6,5 s, jusqu'au premier clic.
  useEffect(() => {
    if (!auto || reduce || !ready || sets.length < 2) return;
    const t = window.setTimeout(() => setI((x) => (x + 1) % sets.length), 6500);
    return () => window.clearTimeout(t);
  }, [auto, reduce, ready, i, sets.length]);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const set = sets[i];
  const { ticks, pos } = axisOf(set.rows);

  return (
    <motion.div ref={ref} style={reduce ? undefined : { y }}>
      <motion.div
        className="relative overflow-hidden rounded-[28px] p-5 sm:p-8"
        style={PANEL}
        initial={reduce ? false : { opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: HERO_EASE, delay: 0.35 }}
      >
        <div role="tablist" aria-label="Type d’installation" className="flex gap-x-6 overflow-x-auto whitespace-nowrap" style={{ borderBottom: `1px solid ${HC.line}` }}>
          {sets.map((s, k) => (
            <button
              key={s.key}
              type="button"
              role="tab"
              aria-selected={k === i}
              onClick={() => {
                setI(k);
                setAuto(false);
              }}
              className="relative pb-3 text-[14px] font-semibold"
              style={{ color: k === i ? HC.cream : HC.faint, transition: "color .3s" }}
            >
              {s.tab}
              {k === i && <motion.span layoutId="pdh-prix-onglet" className="absolute inset-x-0 -bottom-px h-[2px]" style={{ background: HC.orange }} transition={{ duration: 0.5, ease: HERO_EASE }} />}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={set.key} role="tabpanel" aria-label={set.tab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            <p className="text-[13px]" style={{ color: HC.faint, margin: "14px 0 0" }}>
              {set.sub}
            </p>
            <ul className="m-0 mt-6 flex min-h-[236px] list-none flex-col gap-5 p-0">
              {set.rows.map((r, k) => (
                <li key={r.label}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <span className="text-[14px] font-semibold">{r.label}</span>
                    <span className="text-[14px] tabular-nums" style={{ color: HC.cream }}>
                      {dollars(r.min)} – {dollars(r.max)}
                      <span className="ml-2 text-[11px]" style={{ color: HC.faint }}>
                        {r.note}
                      </span>
                    </span>
                  </div>
                  <div className="relative mt-2.5 h-[8px]">
                    <span aria-hidden="true" className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2" style={{ background: HC.line }} />
                    <motion.span
                      aria-hidden="true"
                      className="absolute top-0 h-full origin-left rounded-full"
                      style={{ left: `${pos(r.min)}%`, width: `${pos(r.max) - pos(r.min)}%`, background: HC.orange }}
                      initial={reduce ? false : { scaleX: 0 }}
                      animate={{ scaleX: ready || reduce ? 1 : 0 }}
                      transition={{ duration: 1.1, ease: HERO_EASE, delay: 0.15 + k * 0.12 }}
                    />
                  </div>
                </li>
              ))}
            </ul>
            <Axis ticks={ticks} pos={pos} />
          </motion.div>
        </AnimatePresence>

        <p className="text-[12px] leading-relaxed" style={{ color: HC.faint, margin: "22px 0 0", borderTop: `1px solid ${HC.line}`, paddingTop: 14 }}>
          {footnote}
        </p>
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------
   /prix/[slug]
   ------------------------------------------------------------------ */
const FACTEURS = [
  "La capacité et le type d’appareil",
  "La distance entre les unités",
  "Le panneau électrique",
  "Les conduits et l’existant",
  "L’accès et la pose",
  "La région et la saison",
  "La garantie réellement offerte",
];

export function PrixDependsHero({ crumbs, titleLines, lead, rows, footnote }: { crumbs: ReactNode; titleLines: ReactNode[]; lead: ReactNode; rows: RangeRow[]; footnote: string }) {
  return (
    <HeroShell size="md" labelledBy="pdh-prixq-titre" snow={0.25} visual={rows.length ? <DependsGauge rows={rows} footnote={footnote} /> : undefined}>
      <HeroFade delay={0.05} className="ph-crumbs">
        {crumbs}
      </HeroFade>
      <div className="mt-8">
        <HeroEyebrow>Prix et coûts</HeroEyebrow>
      </div>
      <HeroTitle id="pdh-prixq-titre" lines={titleLines} />
      <HeroLead>{lead}</HeroLead>
      <HeroActions>
        <HeroButton href="/soumission">Recevoir un prix écrit</HeroButton>
        <HeroButton href="/prix" variant="ghost">
          Voir les fourchettes publiées
        </HeroButton>
      </HeroActions>
    </HeroShell>
  );
}

function DependsGauge({ rows, footnote }: { rows: RangeRow[]; footnote: string }) {
  const reduce = !!useReducedMotion();
  const [ready, setReady] = useState(false);
  const [f, setF] = useState(0);
  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 1000);
    return () => window.clearTimeout(t);
  }, []);
  // Les facteurs s'éclairent tour à tour.
  useEffect(() => {
    if (reduce) return;
    const t = window.setInterval(() => setF((x) => (x + 1) % FACTEURS.length), 2400);
    return () => window.clearInterval(t);
  }, [reduce]);
  const { ticks, pos } = axisOf(rows);

  return (
    <motion.div
      className="relative overflow-hidden rounded-[28px] p-5 sm:p-8"
      style={PANEL}
      initial={reduce ? false : { opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: HERO_EASE, delay: 0.35 }}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <p className="text-[15px] font-semibold" style={{ margin: 0 }}>
          Murale 12&nbsp;000 BTU installée
        </p>
        <p className="text-[11px] font-medium uppercase" style={{ margin: 0, letterSpacing: "0.16em", color: HC.faint }}>
          Fourchettes publiées
        </p>
      </div>

      {/* Jauge : les trois gammes se tracent, le repère « votre maison » balaie l'ensemble. */}
      <div className="relative mt-7">
        <ul className="m-0 flex list-none flex-col gap-6 p-0">
          {rows.map((r, k) => (
            <li key={r.label} className="relative">
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 text-[13px]">
                <span style={{ color: HC.mute }}>{r.label}</span>
                <span className="tabular-nums" style={{ color: HC.cream, fontWeight: 600 }}>
                  {dollars(r.min)} – {dollars(r.max)}
                </span>
              </div>
              <div className="relative mt-2 h-[8px]">
                <span aria-hidden="true" className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2" style={{ background: HC.line }} />
                <motion.span
                  aria-hidden="true"
                  className="absolute top-0 h-full origin-left rounded-full"
                  style={{ left: `${pos(r.min)}%`, width: `${pos(r.max) - pos(r.min)}%`, background: k === rows.length - 1 ? HC.orange : k === 0 ? "rgba(244,239,231,0.4)" : "rgba(244,239,231,0.7)" }}
                  initial={reduce ? false : { scaleX: 0 }}
                  animate={{ scaleX: ready || reduce ? 1 : 0 }}
                  transition={{ duration: 1.1, ease: HERO_EASE, delay: 0.15 + k * 0.18 }}
                />
              </div>
            </li>
          ))}
        </ul>
        <motion.div aria-hidden="true" className="pointer-events-none absolute -bottom-2 -top-3 inset-x-0" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.8 }}>
          <span className="pdh-sweep absolute top-0 bottom-0 w-px" style={{ left: "50%", background: "linear-gradient(to bottom, rgba(244,239,231,0.85), rgba(244,239,231,0.1))" }} />
        </motion.div>
      </div>
      <Axis ticks={ticks} pos={pos} />
      <p className="text-[12.5px]" style={{ color: HC.mute, margin: "14px 0 0" }}>
        La ligne blanche, c’est votre maison&nbsp;: votre prix se situe quelque part dans ces fourchettes, et seule une soumission écrite le fixe.
      </p>

      <div style={{ borderTop: `1px solid ${HC.line}`, marginTop: 22, paddingTop: 18 }}>
        <p className="text-[11px] font-medium uppercase" style={{ margin: 0, letterSpacing: "0.16em", color: HC.faint }}>
          Ce qui vous place dans la fourchette
        </p>
        <ol className="m-0 mt-3 grid list-none gap-x-6 gap-y-1.5 p-0 sm:grid-cols-2">
          {FACTEURS.map((t, k) => (
            <li key={t} className="flex items-center gap-2.5 text-[13px]" style={{ color: k === f && !reduce ? HC.cream : HC.faint, transition: "color .5s" }}>
              <span aria-hidden="true" className="inline-block h-px shrink-0" style={{ width: k === f && !reduce ? 18 : 8, background: k === f && !reduce ? HC.orange : HC.line, transition: "width .5s, background .5s" }} />
              {t}
            </li>
          ))}
        </ol>
      </div>
      <p className="text-[12px] leading-relaxed" style={{ color: HC.faint, margin: "16px 0 0" }}>
        {footnote}
      </p>
    </motion.div>
  );
}
