"use client";

import "./prix-v2.css";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useAnimationControls, useInView } from "motion/react";
import logisvertMetadata from "@/lib/subsidies/logisvert-metadata.json";
import type { LogisVertSample } from "@/components/tools-hero/types";
import { DISPLAY, MONO, SERIF, plexMono } from "./fonts";
import { CountTo, EASE, fr, useAfter } from "./shared";
import { useReduced } from "@/components/heroes-v2/outils/motion";

/* ==================================================================
   /subventions — « Le chèque ».
   Émeraude #0B3D2E, menthe #BFE8D2, crème. Titre en grande Instrument
   Serif ; à droite, un chèque d'aide LogisVert : montant officiel d'un
   jumelage réel de la liste d'Hydro-Québec (médiane d'une marque), sa
   ligne de configuration, le montant en toutes lettres, la date de la
   liste. Le montant défile, puis le tampon tombe avec un bruit sourd ;
   le chèque passe au jumelage suivant. Tous les montants viennent de la
   liste officielle (côté serveur).
   ================================================================== */

const EMERALD = "#0B3D2E";
const MINT = "#BFE8D2";
const CREAM = "#F4EFE3";
const PAPER = "#F8F2E2";
const INKG = "#0E3527";
const STAMP = "#1C6B4A";
const MUTE = "rgba(244,239,227,0.7)";

/* ---------- Montant en toutes lettres (orthographe traditionnelle) ---------- */
const U = ["zéro", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize"];
const T: Record<number, string> = { 2: "vingt", 3: "trente", 4: "quarante", 5: "cinquante", 6: "soixante" };
function under100(n: number): string {
  if (n < 17) return U[n];
  if (n < 20) return `dix-${U[n - 10]}`;
  const t = Math.floor(n / 10);
  const u = n % 10;
  if (t === 7) return n === 71 ? "soixante et onze" : `soixante-${under100(n - 60)}`;
  if (t === 8) return u === 0 ? "quatre-vingts" : `quatre-vingt-${U[u]}`;
  if (t === 9) return `quatre-vingt-${under100(n - 80)}`;
  if (u === 0) return T[t];
  if (u === 1) return `${T[t]} et un`;
  return `${T[t]}-${U[u]}`;
}
function under1000(n: number, final: boolean): string {
  const c = Math.floor(n / 100);
  const r = n % 100;
  let s = "";
  if (c === 1) s = "cent";
  else if (c > 1) s = `${U[c]} cent${r === 0 && final ? "s" : ""}`;
  if (r > 0) s += `${s ? " " : ""}${!final && r === 80 ? "quatre-vingt" : under100(r)}`;
  return s;
}
function amountWords(n: number): string {
  const v = Math.round(n);
  if (v <= 0) return "zéro dollar";
  const th = Math.floor(v / 1000);
  const r = v % 1000;
  let s = th === 0 ? "" : th === 1 ? "mille" : `${under1000(th, false)} mille`;
  if (r > 0) s += `${s ? " " : ""}${under1000(r, true)}`;
  s = `${s} dollar${v > 1 ? "s" : ""}`;
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/* ---------- Dates de la liste ---------- */
function listDate(file: string): string | null {
  const m = /(\d{2})-(\d{2})-(\d{4})/.exec(file);
  if (!m) return null;
  return new Date(Date.UTC(+m[3], +m[2] - 1, +m[1])).toLocaleDateString("fr-CA", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}
function checkedDate(iso: string): string | null {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString("fr-CA", { day: "numeric", month: "long", year: "numeric", timeZone: "America/Toronto" });
}

/* ---------- Guillochis (déterministes : identiques au serveur et au client) ---------- */
function rosette(cx: number, cy: number, R: number, amp: number, k: number, phase: number): string {
  const p: string[] = [];
  for (let i = 0; i <= 360; i++) {
    const t = (i / 360) * Math.PI * 2;
    const r = R + amp * Math.sin(k * t + phase);
    p.push(`${(cx + r * Math.cos(t)).toFixed(1)} ${(cy + r * Math.sin(t)).toFixed(1)}`);
  }
  return `M${p.join("L")}Z`;
}
function wave(y: number, amp: number, len: number, phase: number, w: number): string {
  let d = `M0 ${y}`;
  for (let x = 8; x <= w; x += 8) d += `L${x} ${(y + amp * Math.sin((x / len) * Math.PI * 2 + phase)).toFixed(1)}`;
  return d;
}
const ROSETTE = Array.from({ length: 16 }, (_, i) => rosette(400, 400, 250 + i * 7, 26 + i * 1.2, 18, i * 0.39));
const WAVES = Array.from({ length: 16 }, (_, i) => wave(14 + i * 13, 5, 120, i * 0.55, 720));

export function ChequeHero({ samples }: { samples: LogisVertSample[] }) {
  const reduce = !!useReduced();
  const count = logisvertMetadata.count;
  const play = useAfter(1100);

  return (
    <section
      aria-labelledby="ch-titre"
      className={`${plexMono.variable} relative -mt-[93px] overflow-hidden min-[1700px]:-mt-[105px]`}
      style={{ background: EMERALD, color: CREAM, fontFamily: DISPLAY }}
    >
      {/* Rosace de guillochis, très lente */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-[260px] top-[40px] h-[900px] w-[900px] opacity-[0.1] sm:-right-[160px] lg:right-[-120px]">
        <motion.svg viewBox="0 0 800 800" className="h-full w-full" fill="none" animate={reduce ? undefined : { rotate: 360 }} transition={{ duration: 240, ease: "linear", repeat: Infinity }}>
          {ROSETTE.map((d, i) => (
            <path key={i} d={d} stroke={MINT} strokeWidth="0.8" />
          ))}
        </motion.svg>
      </div>

      <div className="relative mx-auto grid max-w-[1440px] items-center gap-14 px-5 pb-20 pt-[140px] sm:px-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-10 lg:px-12 lg:pb-24 min-[1700px]:pt-[156px]">
        <div className="min-w-0">
          <motion.p
            className="flex items-center gap-3 text-[11.5px] font-medium uppercase"
            style={{ fontFamily: MONO, letterSpacing: "0.2em", color: MINT, margin: 0 }}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <span aria-hidden="true" className="inline-block h-px w-10" style={{ background: MINT }} />
            Aides financières · Québec
          </motion.p>
          <h1 id="ch-titre" style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(48px, 5.6vw, 100px)", lineHeight: 0.98, letterSpacing: "-0.015em", margin: "26px 0 0", textWrap: "balance" }}>
            {["Vérifiez les aides", "disponibles pour", "votre thermopompe."].map((l, k) => (
              <span key={k} className="block overflow-hidden" style={{ paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
                <motion.span
                  className="block"
                  style={k === 2 ? { fontStyle: "italic", color: MINT } : undefined}
                  initial={reduce ? false : { y: "105%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1.1, ease: EASE, delay: 0.15 + k * 0.1 }}
                >
                  {l}
                  {k < 2 ? " " : null}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p
            className="max-w-[540px] text-[17px] leading-[1.65] sm:text-[18px]"
            style={{ color: MUTE, margin: "26px 0 0" }}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.55 }}
          >
            Sélectionnez une configuration exacte pour consulter les programmes et les conditions documentées.
          </motion.p>
          <motion.div
            className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.7 }}
          >
            <Link href="#verification" className="pv2-btn-mint inline-flex items-center gap-3 rounded-full py-4 pl-7 pr-6 text-[15px] font-semibold" style={{ background: MINT, color: EMERALD }}>
              Vérifier ma configuration
              <span aria-hidden="true">↓</span>
            </Link>
            <Link href="#ce-que-nous-verifions" className="pv2-uline text-[15px] font-semibold" style={{ color: CREAM }}>
              Ce que nous vérifions
            </Link>
          </motion.div>
          <motion.dl
            className="mt-12 flex flex-wrap gap-x-10 gap-y-6"
            style={{ margin: "48px 0 0" }}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.95 }}
          >
            {[
              { value: count, label: "jumelages admissibles" },
              { value: 3, label: "vérifications par configuration" },
            ].map((s, i) => (
              <div key={s.label} className={`flex flex-col gap-1.5 ${i ? "sm:border-l sm:pl-10" : ""}`} style={{ borderColor: "rgba(191,232,210,0.3)" }}>
                <dt className="order-2 text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.14em", color: MINT }}>
                  {s.label}
                </dt>
                <dd className="order-1" style={{ margin: 0, fontFamily: SERIF, fontSize: "clamp(40px, 3.6vw, 58px)", lineHeight: 1 }}>
                  <CountTo value={s.value} play={play} duration={1.5} />
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {samples.length > 0 && (
          <div className="min-w-0">
            <Cheque samples={samples} count={count} />
          </div>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   Le chèque (décoratif : les mêmes données restent dans l'outil plus bas).
   ------------------------------------------------------------------ */

function Cheque({ samples, count }: { samples: LogisVertSample[]; count: number }) {
  const reduce = !!useReduced();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "0px 0px -10% 0px" });
  const thud = useAnimationControls();
  const [i, setI] = useState(0);
  const [play, setPlay] = useState(false);
  const [stamped, setStamped] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setPlay(true), reduce ? 0 : 1000);
    return () => window.clearTimeout(t);
  }, [reduce]);

  // Pour chaque jumelage : le montant défile, puis le tampon tombe (et le chèque encaisse le choc).
  useEffect(() => {
    if (!play) return;
    if (reduce) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- tampon posé d'emblée (animations réduites)
      setStamped(true);
      return;
    }
    setStamped(false);
    const a = window.setTimeout(() => setStamped(true), 1350);
    const b = window.setTimeout(() => thud.start({ y: [0, 7, -2, 0], rotate: [-2.2, -1.7, -2.35, -2.2], transition: { duration: 0.42, ease: "easeOut" } }), 1350 + 250);
    return () => {
      window.clearTimeout(a);
      window.clearTimeout(b);
    };
  }, [i, play, reduce, thud]);

  // Jumelage suivant, tant que le chèque est à l'écran et qu'on ne le survole pas.
  useEffect(() => {
    if (!stamped || reduce || !inView || hover || samples.length < 2) return;
    const t = window.setTimeout(() => setI((n) => (n + 1) % samples.length), 5200);
    return () => window.clearTimeout(t);
  }, [stamped, reduce, inView, hover, samples.length]);

  const cur = samples[i];
  const date = listDate(logisvertMetadata.sourceFile);
  const checked = checkedDate(logisvertMetadata.updatedAt);

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      className="relative mx-auto w-full max-w-[720px] lg:mr-[-8px]"
      onPointerEnter={() => setHover(true)}
      onPointerLeave={() => setHover(false)}
      initial={reduce ? false : { opacity: 0, y: 60, rotate: 3 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 1.3, ease: EASE, delay: 0.35 }}
    >
      <motion.div animate={thud} initial={{ rotate: -2.2 }} style={{ rotate: -2.2 }} className="relative">
        <div className="relative flex overflow-hidden rounded-[6px]" style={{ background: PAPER, color: INKG, boxShadow: "0 50px 80px -40px rgba(0,0,0,0.65), 0 2px 0 rgba(255,255,255,0.4) inset" }}>
          {/* Talon */}
          <div className="relative hidden w-[74px] shrink-0 sm:block" style={{ background: "#EFE6CF", borderRight: `2px dashed rgba(14,53,39,0.28)` }}>
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="whitespace-nowrap text-[10.5px] font-medium uppercase" style={{ fontFamily: MONO, letterSpacing: "0.3em", transform: "rotate(-90deg)", color: "rgba(14,53,39,0.62)" }}>
                Aide LogisVert · talon
              </span>
            </span>
          </div>

          <div className="relative min-w-0 flex-1 px-5 pb-5 pt-5 sm:px-7 sm:pb-6 sm:pt-6">
            {/* Guillochis de sécurité */}
            <svg aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-[74px] h-[220px] w-full" viewBox="0 0 720 220" preserveAspectRatio="none" fill="none">
              {WAVES.map((d, k) => (
                <path key={k} d={d} stroke="rgba(28,107,74,0.1)" strokeWidth="1" />
              ))}
            </svg>

            {/* En-tête */}
            <div className="relative flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
              <div className="flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/hydroquebec.png" alt="" width={34} height={34} style={{ width: 34, height: 34, maxWidth: "none", display: "block", borderRadius: 8, background: "#fff", padding: 3, boxShadow: "0 0 0 1px rgba(14,53,39,0.12)" }} />
                <span className="leading-tight">
                  <span className="block text-[16px] font-semibold" style={{ letterSpacing: "-0.01em" }}>
                    LogisVert
                  </span>
                  <span className="block text-[12px]" style={{ color: "rgba(14,53,39,0.62)" }}>
                    Hydro-Québec · liste officielle
                  </span>
                </span>
              </div>
              <div className="text-left text-[11px] leading-[1.5] sm:text-right" style={{ fontFamily: MONO, color: "rgba(14,53,39,0.66)" }}>
                {date && <span className="block">Liste du {date}</span>}
                {checked && <span className="block">Vérifiée le {checked}</span>}
              </div>
            </div>

            {/* Montant */}
            <div className="relative mt-6 grid gap-4 sm:mt-7 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-end">
              <div className="min-w-0">
                <p className="text-[10.5px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.16em", color: "rgba(14,53,39,0.6)", margin: 0 }}>
                  Montant LogisVert pour ce jumelage
                </p>
                <div className="relative mt-2 h-[30px] overflow-hidden" style={{ borderBottom: `1px solid rgba(14,53,39,0.35)` }}>
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.p
                      key={i}
                      className="truncate text-[19px] italic sm:text-[21px]"
                      style={{ fontFamily: SERIF, margin: 0, lineHeight: "30px" }}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.35 }}
                    >
                      {amountWords(cur.amount)}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>
              <div className="flex items-baseline gap-1 justify-self-start rounded-[4px] px-4 py-2 sm:justify-self-end" style={{ border: `1.5px solid ${INKG}`, background: "rgba(255,255,255,0.55)" }}>
                <span style={{ fontFamily: MONO, fontSize: "clamp(34px, 4.2vw, 50px)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1, color: STAMP }}>
                  <CountTo value={cur.amount} play={play} duration={1.1} />
                </span>
                <span style={{ fontFamily: MONO, fontSize: 22, fontWeight: 600, color: STAMP }}>$</span>
              </div>
            </div>

            {/* Configuration */}
            <div className="relative mt-5 h-[92px] text-[13px] leading-[1.55] sm:h-[52px] sm:text-[13.5px]">
              <AnimatePresence mode="wait" initial={false}>
                <motion.dl key={i} className="m-0 grid grid-cols-[5.6em_minmax(0,1fr)] gap-x-3" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.35 }}>
                  <dt className="text-[10.5px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: "rgba(14,53,39,0.55)", lineHeight: "20px" }}>
                    Jumelage
                  </dt>
                  <dd className="m-0 truncate">
                    <span className="font-semibold">{cur.brand}</span> · <span style={{ fontFamily: MONO, fontSize: "0.94em" }}>{cur.model}</span>
                  </dd>
                  <dt className="text-[10.5px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: "rgba(14,53,39,0.55)", lineHeight: "20px" }}>
                    Capacité
                  </dt>
                  <dd className="m-0 sm:truncate">{fr(cur.btu)}&nbsp;BTU/h de chauffage certifiés à -8&nbsp;°C</dd>
                </motion.dl>
              </AnimatePresence>
            </div>

            {/* Ligne de caractères magnétiques */}
            <div className="relative mt-5 flex items-center justify-between gap-4 pt-3" style={{ borderTop: `1px dashed rgba(14,53,39,0.25)` }}>
              <p className="truncate text-[11.5px] tracking-[0.12em] sm:text-[12.5px]" style={{ fontFamily: MONO, color: "rgba(14,53,39,0.75)", margin: 0 }}>
                ⑆ {fr(count)} jumelages ⑆ {String(i + 1).padStart(2, "0")}/{String(samples.length).padStart(2, "0")} ⑈
              </p>
            </div>

            {/* Tampon */}
            <div className="pointer-events-none absolute bottom-[26px] right-[18px] sm:bottom-[30px] sm:right-[34px]">
              <AnimatePresence>
                {stamped && (
                  <motion.div
                    key={i}
                    initial={reduce ? false : { scale: 2.3, opacity: 0, rotate: -3 }}
                    animate={{ scale: 1, opacity: 0.9, rotate: -12 }}
                    exit={{ opacity: 0, scale: 1.06, transition: { duration: 0.22 } }}
                    transition={{ duration: 0.26, ease: [0.6, 0, 1, 0.5] }}
                    className="px-3 py-1.5 text-center sm:px-4 sm:py-2"
                    style={{ border: `2.5px solid ${STAMP}`, outline: `1px solid ${STAMP}`, outlineOffset: 3, color: STAMP, borderRadius: 4, fontFamily: MONO, mixBlendMode: "multiply", maskImage: STAMP_MASK, WebkitMaskImage: STAMP_MASK }}
                  >
                    <span className="block text-[12px] font-semibold uppercase sm:text-[14px]" style={{ letterSpacing: "0.16em" }}>
                      Montant officiel
                    </span>
                    <span className="block text-[9px] uppercase sm:text-[10px]" style={{ letterSpacing: "0.22em" }}>
                      Liste LogisVert
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* Encre de tampon inégale : bruit fractal en masque. */
const STAMP_MASK =
  "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='80'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.3' numOctaves='2' seed='4'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -2.4 2.1'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")";
