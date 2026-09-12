"use client";

import "./marques.css";
import type { CSSProperties, FormEvent } from "react";
import Link from "next/link";
import { motion, MotionConfig, useReducedMotion } from "motion/react";
import { DISPLAY, EASE, fr, type Placard, calmNow, CALM } from "./shared";

/* ==================================================================
   « Galerie » : héros de l’annuaire des marques (/marques).
   Mur gris chaud de musée, lettrage d’exposition en charbon, logos
   officiels accrochés comme des œuvres encadrées (tailles et formats
   variés, centres alignés sur la ligne d’accrochage), cartels avec les
   vrais chiffres. Les projecteurs s’allument, chaque cadre tombe sur
   son clou et se balance avant de s’immobiliser ; survolé, il se
   soulève du mur. La recherche filtre l’annuaire en direct.
   ================================================================== */

const C = {
  wall: "#ECEAE5",
  ink: "#22211F",
  mute: "rgba(34,33,31,0.68)",
  faint: "rgba(34,33,31,0.46)",
  line: "rgba(34,33,31,0.16)",
  mat: "#FBFAF6",
  card: "#F6F5F1",
} as const;

/* Accrochage : rang de la marque (0 = la plus fournie), largeur sur le mur (%) et format du cadre. */
const HANG = [
  { rank: 3, w: 10, ratio: 4 / 5 },
  { rank: 1, w: 14, ratio: 3 / 2 },
  { rank: 5, w: 8.5, ratio: 1 },
  { rank: 0, w: 18, ratio: 4 / 3 },
  { rank: 6, w: 8.5, ratio: 1 },
  { rank: 2, w: 13, ratio: 5 / 4 },
  { rank: 4, w: 10, ratio: 4 / 5 },
];
const CENTER = 3;
const GAP = (100 - HANG.reduce((s, h) => s + h.w, 0)) / (HANG.length - 1);
/* Centre de chaque cadre sur le mur (ordinateur), pour poser les halos des projecteurs. */
const CENTERS = HANG.map((h, k) => HANG.slice(0, k).reduce((s, x) => s + x.w + GAP, 0) + h.w / 2);
const dropDelay = (k: number) => 0.6 + Math.abs(k - CENTER) * 0.17 + (k > CENTER ? 0.08 : 0);

type Props = {
  placards: Placard[];
  totals: { brands: number; models: number; cold: number };
  search: string;
  onSearch: (value: string) => void;
  resultCount: number;
  /** id de la grille de l’annuaire (le bouton de recherche y fait défiler). */
  resultsId: string;
};

export function GalerieHero({ placards, totals, search, onSearch, resultCount, resultsId }: Props) {
  const reduce = useReducedMotion();
  const q = search.trim();
  const hung = HANG.flatMap((h, k) => (placards[h.rank] ? [{ ...h, k, p: placards[h.rank] }] : []));
  const figures = [
    { value: totals.brands, label: "marques" },
    { value: totals.models, label: "modèles" },
    { value: totals.cold, label: "climat froid" },
  ].filter((f) => f.value > 0);
  const lines = ["Toutes les marques.", "Un seul endroit", "pour les comprendre."];

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    document.getElementById(resultsId)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }

  return (
    <MotionConfig reducedMotion="user">
    <section
      aria-labelledby="galerie-titre"
      className="relative -mt-[93px] overflow-hidden min-[1700px]:-mt-[105px]"
      style={{ background: C.wall, color: C.ink, fontFamily: DISPLAY }}
    >
      {/* Lumière douce venue du plafond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[80%]"
        style={{ background: "radial-gradient(ellipse 70% 60% at 50% 0%, rgba(255,254,250,0.62), rgba(255,254,250,0) 72%)" }}
      />

      <div className="relative mx-auto max-w-[1440px] px-5 pt-[134px] sm:px-8 lg:px-12 min-[1700px]:pt-[150px]">
        <div className="grid gap-9 lg:grid-cols-[1.32fr_0.68fr] lg:items-end lg:gap-16">
          {/* Lettrage d’exposition */}
          <div>
            <motion.p
              className="flex items-center gap-4 text-[11.5px] font-semibold uppercase"
              style={{ letterSpacing: "0.24em", margin: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={calmNow() ? CALM : { duration: 1, ease: EASE, delay: 0.05 }}
            >
              <span>Annuaire des fabricants</span>
              <motion.span
                aria-hidden="true"
                className="inline-block h-px w-12 origin-left"
                style={{ background: C.ink }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={calmNow() ? CALM : { duration: 1, ease: EASE, delay: 0.3 }}
              />
              <span style={{ color: C.faint }}>Québec</span>
            </motion.p>
            <h1
              id="galerie-titre"
              style={{ fontSize: "clamp(40px, 5.5vw, 94px)", fontWeight: 500, letterSpacing: "-0.052em", lineHeight: 0.94, margin: "26px 0 0" }}
            >
              {lines.map((l, i) => (
                // Lettrage posé sur le mur de gauche à droite, comme un vinyle qu’on applique.
                <motion.span
                  key={l}
                  className="block"
                  style={{ paddingBottom: "0.1em", marginBottom: "-0.1em" }}
                  initial={{ clipPath: "inset(0 100% 0 0)" }}
                  animate={{ clipPath: "inset(0 0% 0 0)" }}
                  transition={calmNow() ? CALM : { duration: 1.25, ease: EASE, delay: 0.15 + i * 0.2 }}
                >
                  {l}
                  {i < lines.length - 1 ? " " : null}
                </motion.span>
              ))}
            </h1>
          </div>

          {/* Texte mural et recherche */}
          <motion.div
            className="lg:pb-2"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={calmNow() ? CALM : { duration: 1, ease: EASE, delay: 0.75 }}
          >
            <p className="max-w-[440px] text-[16.5px] leading-[1.65]" style={{ color: C.mute, margin: 0, fontFamily: "var(--font-sans)" }}>
              Explorez les fabricants, les séries et les configurations documentées pour le marché québécois.
            </p>
            <form role="search" onSubmit={submit} className="mq-search mt-7">
              <label htmlFor="marques-recherche" className="block text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.2em", color: C.faint }}>
                Rechercher une marque
              </label>
              <div className="mt-1.5 flex items-end gap-3">
                <div className="relative flex min-w-0 flex-1 items-center">
                  <svg aria-hidden="true" width={17} height={17} viewBox="0 0 24 24" fill="none" stroke={C.ink} strokeWidth={1.8} strokeLinecap="round" className="absolute left-0 shrink-0">
                    <circle cx="11" cy="11" r="7.5" />
                    <path d="m20.5 20.5-4.2-4.2" />
                  </svg>
                  <input
                    id="marques-recherche"
                    type="text"
                    enterKeyHint="search"
                    autoComplete="off"
                    value={search}
                    onChange={(e) => onSearch(e.target.value)}
                    placeholder="Daikin, Gree, Mitsubishi…"
                    aria-describedby="marques-recherche-aide"
                    className="w-full min-w-0 bg-transparent py-3 pl-7 pr-2 text-[17px]"
                    style={{ outline: "none", color: C.ink, border: 0 }}
                  />
                  <span aria-hidden="true" className="mq-underline absolute inset-x-0 bottom-0" style={{ background: C.ink }} />
                </div>
                <button type="submit" className="mq-btn inline-flex shrink-0 items-center gap-2.5 px-4 py-3 text-[14.5px] font-semibold sm:px-5" style={{ background: C.ink, color: C.wall }}>
                  <span className="hidden sm:inline">Voir les marques</span>
                  <span className="sr-only sm:hidden">Voir les marques</span>
                  <svg aria-hidden="true" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              <p id="marques-recherche-aide" aria-live="polite" className="text-[13px]" style={{ color: q && !resultCount ? "#9A3412" : C.faint, margin: "10px 0 0" }}>
                {q
                  ? resultCount
                    ? `${resultCount} marque${resultCount > 1 ? "s" : ""} pour « ${q} ».`
                    : `Aucune marque pour « ${q} ».`
                  : "La liste se filtre pendant que vous tapez."}
              </p>
            </form>
          </motion.div>
        </div>

        {/* Le mur */}
        {hung.length ? (
          <div className="relative mt-14 lg:mt-16">
            {hung.length === HANG.length ? (
              <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-16 bottom-0 hidden lg:block">
                {CENTERS.map((c, k) => (
                  <motion.span
                    key={k}
                    className="absolute top-0 h-full w-[24%] -translate-x-1/2"
                    style={{ left: `${c}%`, background: "radial-gradient(ellipse 50% 48% at 50% 42%, rgba(255,253,246,0.9), rgba(255,253,246,0) 72%)" }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={calmNow() ? CALM : { duration: 1.4, ease: EASE, delay: Math.max(0, dropDelay(k) - 0.4) }}
                  />
                ))}
              </div>
            ) : null}
            <ul
              aria-label="Les marques les plus fournies du catalogue"
              className="relative grid grid-cols-2 gap-x-7 gap-y-24 pb-20 pl-0 sm:grid-cols-3 sm:gap-x-12 lg:flex lg:items-center lg:justify-between lg:gap-0"
              style={{ listStyle: "none", margin: 0 }}
            >
              {hung.map(({ p, w, ratio, k, rank }) => (
                <Frame key={p.slug} p={p} w={w} ratio={ratio} rank={rank} delay={dropDelay(k)} tilt={(k % 2 ? -1 : 1) * (4.5 + (k % 3))} wideOnly={k === HANG.length - 1} />
              ))}
            </ul>
          </div>
        ) : null}

        {/* Chiffres du catalogue, comme la ligne de texte d’une salle */}
        <motion.div
          className="relative mt-10 flex flex-wrap items-baseline gap-x-10 gap-y-3 py-5 lg:mt-12"
          style={{ borderTop: `1px solid ${C.line}` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={calmNow() ? CALM : { duration: 1, ease: EASE, delay: 1.7 }}
        >
          <p className="text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.22em", color: C.faint, margin: 0 }}>
            Au catalogue
          </p>
          <dl className="flex flex-wrap items-baseline gap-x-10 gap-y-2" style={{ margin: 0 }}>
            {figures.map((f) => (
              <div key={f.label} className="flex items-baseline gap-2.5">
                <dt className="order-2 text-[12px] font-medium uppercase" style={{ letterSpacing: "0.16em", color: C.mute }}>
                  {f.label}
                </dt>
                <dd className="order-1 text-[30px] font-semibold tabular-nums" style={{ margin: 0, letterSpacing: "-0.04em", lineHeight: 1 }}>
                  {fr(f.value)}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>

      {/* Plinthe */}
      <div aria-hidden="true" className="h-[22px]" style={{ background: "linear-gradient(#DAD6CE, #D1CCC3)", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.55), 0 -1px 0 rgba(34,33,31,0.12)" }} />
    </section>
    </MotionConfig>
  );
}

function Frame({ p, w, ratio, rank, delay, tilt, wideOnly }: { p: Placard; w: number; ratio: number; rank: number; delay: number; tilt: number; wideOnly: boolean }) {
  // Logo plus large dans le passe-partout quand il est très allongé.
  const logoW = Math.min(78, Math.max(44, 30 + p.logo.ratio * 11));
  return (
    <li
      className={`relative [order:var(--o)] lg:w-[var(--w)] lg:[order:0] ${wideOnly ? "hidden lg:block" : ""}`}
      style={{ "--w": `${w}%`, "--o": String(rank) } as CSSProperties}
    >
      <Link href={`/marques/${p.slug}`} aria-label={`${p.name} : ${fr(p.models)} modèles, ${fr(p.cold)} climat froid`} className="mq-frame relative block" style={{ color: C.ink }}>
        {/* Clou */}
        <span aria-hidden="true" className="relative block h-[30px]">
          <span className="absolute left-1/2 top-0 block h-[7px] w-[7px] -translate-x-1/2 rounded-full" style={{ background: "#5F5B55", boxShadow: "0 1px 1px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.35)" }} />
        </span>
        {/* Le cadre pivote autour du clou (26 px au-dessus de son bord supérieur). */}
        <motion.div
          className="relative"
          style={{ transformOrigin: "50% -26px" }}
          initial={{ y: -190, opacity: 0, rotate: tilt }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          transition={calmNow() ? CALM : {
            y: { type: "spring", stiffness: 85, damping: 14, delay },
            opacity: { duration: 0.3, delay },
            rotate: { type: "spring", stiffness: 34, damping: 2.4, delay: delay + 0.12 },
          }}
        >
          <svg aria-hidden="true" className="pointer-events-none absolute bottom-full left-0 h-[26px] w-full overflow-visible" viewBox="0 0 100 26" preserveAspectRatio="none">
            <path d="M50 0 L16 26 M50 0 L84 26" fill="none" stroke="rgba(34,33,31,0.55)" strokeWidth={1} vectorEffect="non-scaling-stroke" />
          </svg>
          <div className="mq-lift">
            <div className="mq-box relative" style={{ aspectRatio: ratio, background: C.ink, padding: "clamp(5px, 0.42vw, 7px)" }}>
              <div
                className="flex h-full w-full items-center justify-center overflow-hidden"
                style={{ background: C.mat, boxShadow: "inset 0 0 0 1px rgba(34,33,31,0.07), inset 0 4px 10px rgba(34,33,31,0.1)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.logo.src}
                  alt=""
                  width={Math.round(p.logo.ratio * 100)}
                  height={100}
                  draggable={false}
                  style={{ display: "block", flex: "none", width: `${logoW}%`, maxWidth: "none", height: "auto" }}
                />
              </div>
            </div>
          </div>
        </motion.div>
        {/* Cartel : hors du flux, pour que les centres des cadres restent alignés. */}
        <motion.span
          className="absolute left-0 top-full mt-4 flex w-max max-w-[calc(100%+28px)] flex-col px-2.5 py-2"
          style={{ background: C.card, boxShadow: "0 1px 2px rgba(34,33,31,0.08), 0 0 0 1px rgba(34,33,31,0.05)" }}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={calmNow() ? CALM : { duration: 0.8, ease: EASE, delay: delay + 0.6 }}
        >
          <span className="text-[12.5px] font-semibold leading-tight">{p.name}</span>
          <span className="mt-0.5 text-[11px] leading-snug tabular-nums" style={{ color: C.mute }}>
            {fr(p.models)} modèles · {fr(p.cold)} climat froid
          </span>
        </motion.span>
      </Link>
    </li>
  );
}
