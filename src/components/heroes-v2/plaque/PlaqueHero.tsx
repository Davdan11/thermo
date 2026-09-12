"use client";

import "./plaque.css";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { motion } from "motion/react";
import { useReduced } from "../outils/motion";
import { DISPLAY, MONO, outilsMono } from "../outils/fonts";
import type { PlaqueData } from "./data";

/* ==================================================================
   « Plaque signalétique » — pages par capacité (/thermopompes/thermopompe-XXXX-btu).
   Mur gris chaud, grande plaque d'aluminium brossé rivetée, gravure noire.
   La plaque glisse en place, les rivets se posent, puis chaque valeur est
   poinçonnée l'une après l'autre (petit choc de la plaque à chaque frappe) ;
   une barre balaie la plage certifiée à -15 °C, enfin l'étiquette orange
   de mise en garde est plaquée. Un reflet repasse de loin en loin sur le métal.
   ================================================================== */

const P = {
  wall: "#E7E6E1",
  ink: "#16191B",
  mute: "rgba(22,25,27,0.72)",
  faint: "rgba(22,25,27,0.52)",
  orange: "#E54B17",
} as const;

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const SWEEP: [number, number, number, number] = [0.65, 0, 0.35, 1];

/* Chronologie (secondes depuis l'arrivée de la page). */
const T = {
  plate: 0.3,
  rivets: 1.0,
  nominal: 1.3,
  min: 1.58,
  max: 1.72,
  sweep: 1.78,
  fields: 1.98, // + 0,12 s par case
  calibres: 2.78, // + 0,04 s par calibre
  sticker: 3.2,
};

/** Petits chocs de la plaque à chaque frappe : [instant, amplitude en px]. */
function shakeFrames(hits: Array<[number, number]>) {
  const y = [0];
  const at = [0];
  for (const [t, a] of hits) {
    y.push(0, a, 0);
    at.push(t, t + 0.03, t + 0.11);
  }
  const duration = at[at.length - 1];
  return { y, times: at.map((t) => t / duration), duration };
}
const SHAKE = shakeFrames([
  [T.nominal, 2.6],
  [T.min, 1],
  [T.max, 1],
  ...Array.from({ length: 6 }, (_, i) => [T.fields + i * 0.12, 0.8] as [number, number]),
  [T.sticker + 0.05, 1.6],
]);

export function PlaqueHero({ d }: { d: PlaqueData }) {
  const reduce = useReduced();
  return (
    <section
      key={reduce ? "still" : "live"}
      aria-labelledby="plaque-titre"
      className={`pl-root ${outilsMono.variable} relative -mt-[93px] overflow-hidden min-[1700px]:-mt-[105px]`}
      style={{ background: P.wall, color: P.ink, fontFamily: DISPLAY }}
    >
      {/* Lumière d'atelier : haut plus clair, bas qui se referme doucement */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(1100px 520px at 72% 18%, rgba(255,255,255,0.6), rgba(255,255,255,0) 70%), linear-gradient(180deg, rgba(255,255,255,0) 60%, rgba(22,25,27,0.05) 100%)" }}
      />

      <div className="relative mx-auto max-w-[1360px] px-5 pb-16 pt-[128px] sm:px-8 lg:px-12 lg:pb-20 min-[1700px]:pt-[146px]">
        {/* ── Fil d'Ariane et numéro de calibre ── */}
        <motion.div className="flex items-center justify-between gap-4" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, ease: EASE }}>
          <Crumbs items={d.crumbs} />
          <p className="pl-engrave hidden text-[11px] uppercase sm:block" style={{ fontFamily: MONO, letterSpacing: "0.2em", margin: 0 }}>
            {d.serial}
          </p>
        </motion.div>

        {/* ── Titre gravé + texte et boutons ── */}
        <div className="mt-8 grid gap-7 lg:mt-10 lg:grid-cols-12 lg:items-end lg:gap-10">
          <div className="lg:col-span-7">
            <motion.p
              className="pl-engrave flex items-center gap-3 text-[11.5px] uppercase"
              style={{ fontFamily: MONO, letterSpacing: "0.22em", margin: 0 }}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.05 }}
            >
              <span aria-hidden="true" className="inline-block h-[2px] w-6" style={{ background: P.orange }} />
              {d.eyebrow}
            </motion.p>
            <h1 id="plaque-titre" className="pl-engrave" style={{ margin: "16px 0 0", fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 0.95, fontSize: "clamp(46px, 5.5vw, 90px)" }}>
              <Engraved delay={0.12} reduce={reduce}>
                {d.titleLines[0]}
              </Engraved>{" "}
              <Engraved delay={0.34} reduce={reduce} style={{ fontFamily: MONO, fontWeight: 500, letterSpacing: "-0.07em", wordSpacing: "-0.3em", fontSize: "0.9em" }}>
                {d.titleLines[1]}
              </Engraved>
            </h1>
          </div>
          <motion.div className="lg:col-span-5 lg:pb-2" initial={reduce ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: EASE, delay: 0.45 }}>
            <p className="text-[16px] leading-[1.62] sm:text-[16.5px]" style={{ color: P.mute, margin: 0, maxWidth: 520 }}>
              {d.intro}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link href="/trouver-ma-thermopompe" className="pl-btn inline-flex items-center gap-3 rounded-[6px] px-6 py-[14px] text-[15px] font-semibold" style={{ background: P.ink, color: "#F2F3F3" }}>
                Trouver ma thermopompe en 2 min
                <Arrow />
              </Link>
              <a href="tel:4389003224" className="pl-btn inline-flex items-center gap-2.5 rounded-[6px] px-5 py-[13px] text-[15px] font-semibold" style={{ border: "1px solid rgba(22,25,27,0.3)", color: P.ink, fontVariantNumeric: "tabular-nums" }}>
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                438-900-3224
              </a>
            </div>
            <p className="text-[13px]" style={{ color: P.faint, margin: "12px 0 0" }}>
              Gratuit, sans engagement. Un installateur licencié RBQ vous rappelle.
            </p>
          </motion.div>
        </div>

        {/* ── La plaque ── */}
        <div className="relative mt-10 lg:mt-11">
          <Plate d={d} reduce={reduce} />
        </div>

        {/* ── En bref ── */}
        <motion.div
          role="note"
          aria-label="En bref"
          className="mt-[128px] grid gap-3 lg:mt-14 lg:grid-cols-12 lg:gap-10"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 1.2 }}
        >
          <p className="pl-engrave flex items-center gap-3 text-[11.5px] uppercase lg:col-span-2 lg:pt-1" style={{ fontFamily: MONO, letterSpacing: "0.22em", margin: 0 }}>
            <span aria-hidden="true" className="inline-block h-[2px] w-6" style={{ background: P.ink }} />
            En bref
          </p>
          <p className="text-[16px] leading-[1.7] lg:col-span-9 lg:text-[17px]" style={{ color: P.ink, margin: 0, maxWidth: 900 }}>
            {d.answer}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

const RIVETS = [
  "left-[17px] top-[17px] sm:left-[20px] sm:top-[20px]",
  "right-[17px] top-[17px] sm:right-[20px] sm:top-[20px]",
  "bottom-[17px] left-[17px] sm:bottom-[20px] sm:left-[20px]",
  "bottom-[17px] right-[17px] sm:bottom-[20px] sm:right-[20px]",
];

function Plate({ d, reduce }: { d: PlaqueData; reduce: boolean }) {
  return (
    <motion.div className="relative" initial={reduce ? false : { opacity: 0, x: 140, rotate: 1.4 }} animate={{ opacity: 1, x: 0, rotate: 0 }} transition={{ duration: 1, ease: EASE, delay: T.plate }}>
      <motion.div
        className="pl-plate relative overflow-hidden"
        initial={false}
        animate={reduce ? { y: 0 } : { y: SHAKE.y }}
        transition={reduce ? { duration: 0 } : { duration: SHAKE.duration, times: SHAKE.times, ease: "linear" }}
      >
        <span aria-hidden="true" className="pl-frame" />
        <span aria-hidden="true" className="pl-sheen" />
        {RIVETS.map((pos, i) => (
          <motion.span
            key={pos}
            aria-hidden="true"
            className={`pl-rivet ${pos}`}
            initial={reduce ? false : { opacity: 0, scale: 1.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.22, ease: "easeIn", delay: T.rivets + i * 0.07 }}
          />
        ))}

        <div className="relative px-[18px] pb-[42px] pt-[16px] sm:px-[22px] sm:pb-[40px] sm:pt-[18px]">
          {/* Bandeau émaillé, entre les deux rivets du haut */}
          <div className="pl-band mx-[26px] flex h-[30px] items-center justify-between gap-4 px-4 sm:mx-[30px] sm:h-[34px] sm:px-5">
            <span className="truncate text-[10px] uppercase sm:text-[11px]" style={{ fontFamily: MONO, letterSpacing: "0.22em" }}>
              <span className="hidden sm:inline">Thermopompe · </span>classe de capacité
            </span>
          </div>

          {/* Capacité nominale | plage certifiée à -15 °C */}
          <dl className="m-0 mt-3 grid lg:grid-cols-[minmax(0,0.82fr)_minmax(0,2fr)]">
            <div className="px-[10px] pb-6 pt-5 sm:px-5 lg:pb-5 lg:pt-5">
              <dt className="text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.16em", color: P.faint }}>
                Capacité nominale
              </dt>
              <dd className="m-0 mt-2">
                <Stamp at={T.nominal} big reduce={reduce}>
                  <span className="pl-stamp block" style={{ fontFamily: MONO, fontWeight: 500, fontSize: "clamp(58px, 6.2vw, 98px)", lineHeight: 0.9, letterSpacing: "-0.07em", wordSpacing: "-0.3em" }}>
                    {d.nominal}
                  </span>
                </Stamp>
                <span className="mt-3 flex flex-wrap items-baseline gap-x-3 text-[13px]" style={{ color: P.mute }}>
                  <span className="pl-stamp text-[15px]" style={{ fontFamily: MONO, fontWeight: 500 }}>
                    BTU/h
                  </span>
                  mesurée à 8&nbsp;°C
                </span>
              </dd>
            </div>
            <div className="pl-gl pl-main-range px-[10px] pb-6 pt-5 sm:px-5 lg:px-8 lg:pb-5 lg:pt-5">
              <dt className="text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.16em", color: P.faint }}>
                Capacité certifiée à −15&nbsp;°C
              </dt>
              <dd className="m-0 mt-2">
                {d.range ? (
                  <span className="pl-stamp flex flex-wrap items-baseline gap-x-3" style={{ fontFamily: MONO, fontWeight: 500, fontSize: "clamp(26px, 2.7vw, 40px)", lineHeight: 1.05, letterSpacing: "-0.05em", wordSpacing: "-0.3em" }}>
                    <Stamp at={T.min} reduce={reduce}>
                      {d.range.min}
                    </Stamp>
                    <span style={{ fontFamily: DISPLAY, fontSize: "0.5em", fontWeight: 500, letterSpacing: 0, color: P.mute }}>à</span>
                    <Stamp at={T.max} reduce={reduce}>
                      {d.range.max}
                    </Stamp>
                    <span style={{ fontSize: "0.42em", letterSpacing: 0 }}>BTU/h</span>
                  </span>
                ) : (
                  <span className="pl-stamp text-[22px]" style={{ fontFamily: MONO }}>
                    —
                  </span>
                )}
                <Gauge d={d} reduce={reduce} />
                <span className="mt-1 block text-[12.5px]" style={{ color: P.faint }}>
                  {d.certifiedNote}
                </span>
              </dd>
            </div>
          </dl>

          {/* Six cases de chiffres */}
          <dl className="pl-fields pl-gt m-0">
            {d.fields.map((f, i) => (
              <div key={f.label} className="flex flex-col">
                <dt className="text-[10.5px] font-semibold uppercase leading-snug sm:text-[11px]" style={{ letterSpacing: "0.14em", color: P.faint }}>
                  {f.label}
                </dt>
                <dd className="m-0 mt-auto pt-2">
                  <Stamp at={T.fields + i * 0.12} reduce={reduce}>
                    <span
                      className="pl-stamp whitespace-nowrap"
                      style={{ fontFamily: MONO, fontWeight: 500, fontSize: f.value.length > 9 ? "clamp(18px, 1.55vw, 23px)" : "clamp(22px, 2vw, 30px)", letterSpacing: "-0.05em", wordSpacing: "-0.3em", lineHeight: 1 }}
                    >
                      {f.value}
                      {f.unit ? <span style={{ fontSize: "0.56em", letterSpacing: 0, marginLeft: "0.35em" }}>{f.unit}</span> : null}
                    </span>
                  </Stamp>
                </dd>
              </div>
            ))}
          </dl>

          {/* Calibres poinçonnés */}
          <nav aria-label="Autres calibres" className="pl-gt flex flex-col gap-2 px-[10px] pt-3.5 sm:px-5 lg:flex-row lg:items-center lg:gap-6">
            <span className="shrink-0 text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.16em", color: P.faint }}>
              Autres calibres
            </span>
            <ul className="m-0 flex flex-wrap items-center gap-x-0.5 gap-y-1 p-0" style={{ listStyle: "none", fontFamily: MONO, fontSize: 14, fontWeight: 500, letterSpacing: "-0.02em" }}>
              {d.calibres.map((c, i) => (
                <li key={c.href}>
                  <Stamp at={T.calibres + i * 0.04} reduce={reduce} light>
                    {c.current ? (
                      <span className="pl-cal pl-cal-on pl-stamp" aria-current="page">
                        {c.label}
                      </span>
                    ) : (
                      <Link href={c.href} className="pl-cal" aria-label={`Thermopompe ${c.label} BTU`}>
                        {c.label}
                      </Link>
                    )}
                  </Stamp>
                </li>
              ))}
              <li aria-hidden="true" className="pl-engrave ml-1 text-[12px]" style={{ letterSpacing: "0.08em" }}>
                BTU
              </li>
            </ul>
          </nav>
        </div>
      </motion.div>

      {/* Étiquette de mise en garde, plaquée en dernier */}
      <motion.div
        className="pl-sticker-wrap absolute -bottom-[100px] right-3 z-10 w-[218px] sm:right-8 sm:w-[260px] lg:-top-[24px] lg:bottom-auto lg:right-[4.5%] lg:w-[272px]"
        initial={reduce ? false : { opacity: 0, scale: 1.3, rotate: -14, y: -24 }}
        animate={{ opacity: 1, scale: 1, rotate: -3.5, y: 0 }}
        transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 560, damping: 24, mass: 0.7, delay: T.sticker }}
      >
        <div className="pl-sticker">
          <div className="pl-hazard" />
          <div className="px-4 pb-4 pt-3 sm:px-[18px]">
            <p className="flex items-center gap-2 text-[13px] font-extrabold uppercase" style={{ letterSpacing: "0.16em", margin: 0 }}>
              <svg aria-hidden="true" width="16" height="15" viewBox="0 0 16 15">
                <path d="M8 1 15 14H1Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M8 5.6v4.1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <circle cx="8" cy="11.8" r="0.95" fill="currentColor" />
              </svg>
              Attention
            </p>
            <p className="text-[13px] font-medium leading-[1.45] sm:text-[13.5px]" style={{ margin: "7px 0 0" }}>
              Capacité nominale mesurée à 8&nbsp;°C. Par grand froid, lisez la valeur certifiée à −15&nbsp;°C.
            </p>
          </div>
        </div>
        <span aria-hidden="true" className="pl-curl" />
      </motion.div>
    </motion.div>
  );
}

/* Jauge : échelle gravée, repère de la capacité nominale, barre de la plage certifiée balayée par une aiguille. */
function Gauge({ d, reduce }: { d: PlaqueData; reduce: boolean }) {
  const r = d.range;
  const labels = d.ticks.filter((t) => t.label);
  return (
    <div aria-hidden="true" className="relative mt-4 h-[70px]">
      <span className="absolute top-0 flex -translate-x-1/2 flex-col items-center" style={{ left: `${d.nominalPct}%` }}>
        <span className="text-[9.5px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.14em", color: P.faint }}>
          nominale
        </span>
        <svg width="9" height="6" viewBox="0 0 9 6" className="mt-0.5">
          <path d="M0 0h9L4.5 6Z" fill={P.ink} />
        </svg>
      </span>
      <span className="pl-channel absolute inset-x-0 top-[22px] h-[14px] rounded-[3px]" />
      {r ? (
        <motion.span
          className="pl-bar absolute top-[24px] h-[10px] origin-left rounded-[2px]"
          style={{ left: `${r.minPct}%`, width: `${r.maxPct - r.minPct}%` }}
          initial={reduce ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.95, ease: SWEEP, delay: T.sweep }}
        />
      ) : null}
      {r && !reduce ? (
        <motion.span
          className="absolute top-[15px] -ml-px h-[28px] w-[2px] rounded-full"
          style={{ background: P.orange }}
          initial={{ left: `${r.minPct}%`, opacity: 0 }}
          animate={{ left: [`${r.minPct}%`, `${r.maxPct}%`, `${r.maxPct}%`], opacity: [1, 1, 0] }}
          transition={{ duration: 1.5, times: [0, 0.63, 1], ease: SWEEP, delay: T.sweep }}
        />
      ) : null}
      {d.ticks.map((t) => (
        <span
          key={t.pct}
          className="absolute top-[40px] w-px"
          style={{ left: `${t.pct}%`, height: t.major ? 9 : 5, background: t.major ? "rgba(22,25,27,0.55)" : "rgba(22,25,27,0.3)", boxShadow: "1px 0 0 rgba(255,255,255,0.7)" }}
        />
      ))}
      {labels.map((t, i) => (
        <span
          key={`l${t.pct}`}
          className={`absolute top-[53px] whitespace-nowrap text-[10.5px] ${i % 2 === 1 && i !== labels.length - 1 ? "hidden sm:block" : ""}`}
          style={{ left: `${t.pct}%`, transform: i === 0 ? "none" : i === labels.length - 1 ? "translateX(-100%)" : "translateX(-50%)", fontFamily: MONO, color: P.mute }}
        >
          {t.label}
        </span>
      ))}
    </div>
  );
}

/* Valeur poinçonnée : elle tombe plus grande, frappe, se pose ; une ombre brève marque l'impact. */
function Stamp({ at, children, big = false, light = false, reduce }: { at: number; children: ReactNode; big?: boolean; light?: boolean; reduce: boolean }) {
  const from = big ? 1.75 : light ? 1.3 : 1.45;
  return (
    <span className="relative inline-block">
      {!reduce && !light ? (
        <motion.span
          aria-hidden="true"
          className="pl-dent"
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: [0, 1, 0], scale: [0.4, 1, 1.35] }}
          transition={{ duration: 0.6, times: [0, 0.18, 1], delay: at, ease: "easeOut" }}
        />
      ) : null}
      <motion.span
        className="relative inline-block"
        initial={reduce ? false : { opacity: 0, scale: from }}
        animate={reduce ? { opacity: 1, scale: 1 } : { opacity: [0, 1, 1], scale: [from, 0.95, 1] }}
        transition={{ duration: 0.24, times: [0, 0.62, 1], delay: at, ease: "easeOut" }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/* Ligne du titre révélée comme par un graveur : un stylet orange passe de gauche à droite. */
function Engraved({ children, delay, style, reduce }: { children: ReactNode; delay: number; style?: CSSProperties; reduce: boolean }) {
  return (
    <span className="block">
      <span className="relative inline-block" style={style}>
        <motion.span
          className="inline-block"
          initial={reduce ? false : { clipPath: "inset(-12% 100% -18% 0%)" }}
          animate={{ clipPath: "inset(-12% 0% -18% 0%)" }}
          transition={{ duration: 1.05, ease: SWEEP, delay }}
        >
          {children}
        </motion.span>
        {!reduce ? (
          <motion.span
            aria-hidden="true"
            className="absolute bottom-[6%] top-[8%] w-[2px]"
            style={{ background: P.orange }}
            initial={{ left: "0%", opacity: 0 }}
            animate={{ left: ["0%", "100%", "100%"], opacity: [1, 1, 0] }}
            transition={{ duration: 1.35, times: [0, 0.78, 1], ease: SWEEP, delay }}
          />
        ) : null}
      </span>
    </span>
  );
}

function Crumbs({ items }: { items: PlaqueData["crumbs"] }) {
  const all = [{ label: "Accueil", href: "/" }, ...items];
  return (
    <nav aria-label="Fil d’Ariane" className="pl-crumbs min-w-0">
      <ol className="m-0 flex flex-wrap items-center gap-x-2 gap-y-1 p-0 text-[11px] uppercase" style={{ listStyle: "none", fontFamily: MONO, letterSpacing: "0.14em" }}>
        {all.map((c, i) => {
          const last = i === all.length - 1;
          return (
            <li key={`${c.label}-${i}`} className="flex items-center gap-2">
              {i > 0 ? (
                <span aria-hidden="true" style={{ color: P.faint }}>
                  /
                </span>
              ) : null}
              {last || !c.href ? (
                <span aria-current={last ? "page" : undefined} className="pl-engrave">
                  {c.label}
                </span>
              ) : (
                <Link href={c.href} style={{ color: P.mute }}>
                  {c.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function Arrow() {
  return (
    <svg className="pl-arrow" aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={P.orange} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
