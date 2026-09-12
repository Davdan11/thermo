"use client";

import "./prix-v2.css";
import { useCallback, useEffect, useRef, type CSSProperties, type ReactNode, type RefObject } from "react";
import Link from "next/link";
import { motion, useInView, useMotionValue } from "motion/react";
import type { RangeRow } from "@/components/product/hero/prix-sets";
import { DISPLAY, MONO, SERIF, plexMono } from "./fonts";
import { EASE, fr } from "./shared";
import { useReduced } from "@/components/heroes-v2/outils/motion";

/* ==================================================================
   /prix/[slug] — « L'étiquette ».
   Kraft #E7D8BF, brun #2A1E14, ficelle orange. Le titre traverse la
   page en grande Instrument Serif ; une étiquette de prix pend à un
   clou par sa ficelle, avec les fourchettes publiées d'une murale
   12 000 BTU comme repère. Elle se balance comme un vrai pendule
   amorti, réagit au passage du pointeur et à un toucher.
   ================================================================== */

const BROWN = "#2A1E14";
const MUTE = "rgba(42,30,20,0.66)";
const STRING = "#D9541E";
const RUST = "#A8401A";
const CARD = "#FBF5EA";

const FACTEURS = [
  "La capacité et le type d’appareil",
  "La distance entre les unités",
  "Le panneau électrique",
  "Les conduits et l’existant",
  "L’accès et la pose",
  "La région et la saison",
  "La garantie réellement offerte",
];

/** « Sujet : question? » → deux lignes, espace insécable avant la ponctuation haute. */
function splitTitle(h1: string): string[] {
  const t = h1.replace(/\s*([?!;])$/, " $1");
  const i = t.indexOf(" : ");
  return i < 0 ? [t] : [`${t.slice(0, i)} :`, t.slice(i + 3)];
}

export function TagHero({ crumbs, title, lead, rows, footnote }: { crumbs: ReactNode; title: string; lead: ReactNode; rows: RangeRow[]; footnote: string }) {
  const reduce = !!useReduced();
  const root = useRef<HTMLElement>(null);
  const lines = splitTitle(title);

  return (
    <section
      ref={root}
      aria-labelledby="tg-titre"
      className={`pv2-kraft ${plexMono.variable} relative -mt-[93px] overflow-hidden min-[1700px]:-mt-[105px]`}
      style={{ color: BROWN, fontFamily: DISPLAY }}
    >
      <div className="relative mx-auto max-w-[1440px] px-5 pb-16 pt-[136px] sm:px-8 lg:px-12 lg:pb-20 min-[1700px]:pt-[152px]">
        <motion.div
          className="pv2-crumbs"
          style={{ "--c-link": MUTE, "--c-cur": BROWN, "--c-sep": "rgba(42,30,20,0.35)" } as CSSProperties}
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {crumbs}
        </motion.div>

        <p className="flex items-center gap-3 text-[11.5px] font-medium uppercase" style={{ fontFamily: MONO, letterSpacing: "0.2em", color: RUST, margin: "34px 0 0" }}>
          <span aria-hidden="true" className="inline-block h-[2px] w-9 rounded-full" style={{ background: STRING }} />
          Prix et coûts
        </p>

        <h1 id="tg-titre" style={{ fontFamily: SERIF, fontWeight: 400, fontSize: "clamp(50px, 7vw, 116px)", lineHeight: 0.94, letterSpacing: "-0.02em", margin: "18px 0 0", textWrap: "balance" }}>
          {lines.map((l, k) => (
            <span key={k} className="block overflow-hidden" style={{ paddingBottom: "0.2em", marginBottom: "-0.2em" }}>
              <motion.span
                className="block"
                style={k === 1 ? { color: RUST } : undefined}
                initial={reduce ? false : { y: "108%", rotate: 1.5 }}
                animate={{ y: "0%", rotate: 0 }}
                transition={{ duration: 1.15, ease: EASE, delay: 0.15 + k * 0.13 }}
              >
                {k === 1 ? (
                  <span className="relative inline-block">
                    {l}
                    {/* Ficelle soulignée qui se tend sous la question */}
                    <svg aria-hidden="true" className="absolute left-0 w-full" style={{ bottom: "-0.12em", height: "0.16em" }} viewBox="0 0 400 20" preserveAspectRatio="none" fill="none">
                      <motion.path
                        d="M2 12 C 60 4, 110 18, 170 11 S 290 4, 398 10"
                        stroke={STRING}
                        strokeWidth="3.2"
                        strokeLinecap="round"
                        vectorEffect="non-scaling-stroke"
                        initial={reduce ? false : { pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.2, ease: EASE, delay: 1.05 }}
                      />
                    </svg>
                  </span>
                ) : (
                  l
                )}
                {k < lines.length - 1 ? " " : null}
              </motion.span>
            </span>
          ))}
        </h1>

        <div className="mt-10 grid gap-14 xl:mt-8 xl:grid-cols-[minmax(0,1fr)_400px] xl:gap-20">
          <div className="min-w-0 xl:pt-4">
            <motion.p
              className="max-w-[620px] text-[17px] leading-[1.68] sm:text-[18px]"
              style={{ color: "rgba(42,30,20,0.82)", margin: 0 }}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.6 }}
            >
              {lead}
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4"
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.75 }}
            >
              <Link href="/soumission" className="pv2-btn-brown inline-flex items-center gap-3 rounded-full py-4 pl-7 pr-6 text-[15px] font-semibold" style={{ background: BROWN, color: "#F6EBD6" }}>
                Recevoir un prix écrit
                <span aria-hidden="true" style={{ color: STRING }}>
                  ⟶
                </span>
              </Link>
              <Link href="/prix" className="pv2-uline text-[15px] font-semibold" style={{ color: BROWN }}>
                Voir les fourchettes publiées
              </Link>
            </motion.div>

            <motion.div
              className="mt-12 max-w-[640px] pt-6"
              style={{ borderTop: `1px solid rgba(42,30,20,0.22)` }}
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.95 }}
            >
              <p className="text-[11px] font-medium uppercase" style={{ fontFamily: MONO, letterSpacing: "0.18em", color: MUTE, margin: 0 }}>
                Ce qui vous place dans la fourchette
              </p>
              <ol className="m-0 mt-4 grid list-none gap-x-8 gap-y-2 p-0 sm:grid-cols-2">
                {FACTEURS.map((f, k) => (
                  <li key={f} className="flex items-baseline gap-3 text-[15px]" style={{ fontFamily: SERIF, fontSize: 19, lineHeight: 1.3 }}>
                    <span className="shrink-0 text-[11px]" style={{ fontFamily: MONO, color: RUST }}>
                      {String(k + 1).padStart(2, "0")}
                    </span>
                    {f}
                  </li>
                ))}
              </ol>
            </motion.div>
          </div>

          {rows.length > 0 && (
            <div className="relative min-w-0 xl:-mt-[calc(min(7vw,116px)*1.88+24px)]">
              <HangingTag rows={rows} footnote={footnote} root={root} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   Étiquette suspendue : pendule amorti (ressort + frottement), plus un
   second ressort pour l'étiquette qui pivote sur son œillet avec un
   léger retard. La boucle d'animation s'arrête quand tout est immobile.
   ------------------------------------------------------------------ */

const STRING_LEN = 96;
const TAG_W = "min(330px, calc(100vw - 64px))";

function HangingTag({ rows, footnote, root }: { rows: RangeRow[]; footnote: string; root: RefObject<HTMLElement | null> }) {
  const reduce = !!useReduced();
  const wrap = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const inView = useInView(wrap, { margin: "-5% 0px" });
  const rot = useMotionValue(0);
  const tilt = useMotionValue(0);
  const sim = useRef({ th: 0, w: 0, lt: 0, lw: 0, run: false, last: 0, raf: 0 });

  const loop = useCallback(() => {
    const s = sim.current;
    if (s.run) return;
    s.run = true;
    s.last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(0.032, (now - s.last) / 1000);
      s.last = now;
      // Pendule : rappel ∝ angle, frottement ∝ vitesse (degrés, secondes).
      const a = -17 * s.th - 0.95 * s.w;
      s.w += a * dt;
      s.th += s.w * dt;
      // L'étiquette pivote sur l'œillet, entraînée par l'accélération de la ficelle.
      const la = -80 * s.lt - 7.5 * s.lw - 0.06 * a;
      s.lw += la * dt;
      s.lt += s.lw * dt;
      rot.set(s.th);
      tilt.set(s.lt);
      if (Math.abs(s.th) < 0.02 && Math.abs(s.w) < 0.05 && Math.abs(s.lt) < 0.02 && Math.abs(s.lw) < 0.05) {
        s.run = false;
        s.th = s.w = s.lt = s.lw = 0;
        rot.set(0);
        tilt.set(0);
        return;
      }
      s.raf = requestAnimationFrame(tick);
    };
    s.raf = requestAnimationFrame(tick);
  }, [rot, tilt]);

  const kick = useCallback(
    (dw: number) => {
      const s = sim.current;
      s.w = Math.max(-110, Math.min(110, s.w + dw));
      loop();
    },
    [loop],
  );

  // Entrée : l'étiquette tombe au bout de sa ficelle et se balance.
  useEffect(() => {
    if (reduce) return;
    const s = sim.current;
    const t = window.setTimeout(() => {
      s.th = 14;
      loop();
    }, 700);
    return () => {
      window.clearTimeout(t);
      cancelAnimationFrame(s.raf);
      s.run = false;
    };
  }, [reduce, loop]);

  // Le pointeur qui passe près de l'étiquette la pousse, selon sa vitesse horizontale.
  useEffect(() => {
    const el = root.current;
    if (reduce || !el) return;
    let lx = 0;
    let lt = 0;
    const onMove = (e: PointerEvent) => {
      const now = performance.now();
      const tag = tagRef.current;
      if (tag && lt && now - lt < 80) {
        const vx = (e.clientX - lx) / Math.max(1, now - lt); // px/ms
        const r = tag.getBoundingClientRect();
        const reach = r.width * 0.85;
        const dx = Math.abs(e.clientX - (r.left + r.width / 2));
        if (dx < reach && e.clientY > r.top - 150 && e.clientY < r.bottom + 30) kick(-vx * 6 * (1 - dx / reach));
      }
      lx = e.clientX;
      lt = now;
    };
    el.addEventListener("pointermove", onMove, { passive: true });
    return () => el.removeEventListener("pointermove", onMove);
  }, [reduce, kick, root]);

  // Un léger courant d'air de temps en temps, quand l'étiquette est à l'écran et au repos.
  useEffect(() => {
    if (reduce || !inView) return;
    let dir = 1;
    const id = window.setInterval(() => {
      if (!sim.current.run) {
        kick(dir * 11);
        dir = -dir;
      }
    }, 6200);
    return () => window.clearInterval(id);
  }, [reduce, inView, kick]);

  return (
    <motion.div
      ref={wrap}
      className="relative mx-auto"
      style={{ width: `calc(${TAG_W} + 60px)`, maxWidth: "100%", height: STRING_LEN + 480 }}
      initial={reduce ? false : { y: -36, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: EASE, delay: 0.45 }}
    >
      {/* Clou */}
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-0 z-20 -ml-2 h-4 w-4 rounded-full"
        style={{ background: "radial-gradient(circle at 35% 30%, #F4E3BE, #A57A3E 55%, #57391A)", boxShadow: "0 3px 4px rgba(42,30,20,0.4)" }}
      />
      <motion.div className="absolute inset-x-0 top-2" style={{ rotate: rot, transformOrigin: "50% 0px" }}>
        {/* Ficelle : deux brins du clou à l'œillet */}
        <svg aria-hidden="true" className="absolute left-1/2 top-0 -ml-[30px]" width="60" height={STRING_LEN + 40} viewBox={`0 0 60 ${STRING_LEN + 40}`} fill="none">
          <path d={`M30 0 L24.5 ${STRING_LEN + 22}`} stroke={STRING} strokeWidth="2.2" strokeLinecap="round" />
          <path d={`M30 0 L35.5 ${STRING_LEN + 22}`} stroke={STRING} strokeWidth="2.2" strokeLinecap="round" />
        </svg>
        <motion.div
          ref={tagRef}
          role="group"
          aria-label="Repère : fourchettes publiées pour une murale de 12 000 BTU installée"
          onPointerDown={(e) => {
            if (reduce) return;
            const r = e.currentTarget.getBoundingClientRect();
            kick(e.clientX < r.left + r.width / 2 ? -75 : 75);
          }}
          className="absolute left-1/2 cursor-grab select-none active:cursor-grabbing"
          style={{ top: STRING_LEN - 12, width: TAG_W, marginLeft: `calc(${TAG_W} / -2)`, rotate: tilt, transformOrigin: "50% 34px", filter: "drop-shadow(0 28px 22px rgba(42,30,20,0.26)) drop-shadow(0 2px 2px rgba(42,30,20,0.18))" }}
        >
          <div className="pv2-tag relative px-6 pb-6 pt-[64px] sm:px-7" style={{ background: CARD, color: BROWN }}>
            <svg aria-hidden="true" className="pointer-events-none absolute left-[8px] top-[8px] h-[calc(100%-16px)] w-[calc(100%-16px)]" viewBox="0 0 100 100" preserveAspectRatio="none" fill="none">
              <polygon points="21.5,0 78.5,0 100,12.5 100,100 0,100 0,12.5" stroke="rgba(42,30,20,0.3)" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
            </svg>
            <p className="text-[10.5px] font-medium uppercase" style={{ fontFamily: MONO, letterSpacing: "0.18em", color: RUST, margin: 0 }}>
              Repère · fourchettes publiées
            </p>
            <p style={{ fontFamily: SERIF, fontSize: 27, lineHeight: 1.08, margin: "6px 0 0" }}>Murale 12&nbsp;000&nbsp;BTU installée</p>
            <ul className="m-0 mt-4 list-none p-0" style={{ borderTop: `1px solid rgba(42,30,20,0.2)` }}>
              {rows.map((r) => (
                <li key={r.label} className="py-2.5" style={{ borderBottom: `1px dashed rgba(42,30,20,0.22)` }}>
                  <span className="flex items-baseline justify-between gap-3 text-[10.5px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: MUTE }}>
                    <span>{r.label}</span>
                    <span>{r.note}</span>
                  </span>
                  <span className="mt-0.5 block whitespace-nowrap" style={{ fontFamily: SERIF, fontSize: "clamp(27px, 7.4vw, 33px)", lineHeight: 1.05, fontVariantNumeric: "tabular-nums" }}>
                    {fr(r.min)} – {fr(r.max)}&nbsp;$
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-[13.5px] leading-[1.45]" style={{ margin: "14px 0 0" }}>
              Votre prix se situe quelque part dans ces fourchettes, et seule une soumission écrite le fixe.
            </p>
            <p className="text-[10px] leading-[1.5]" style={{ fontFamily: MONO, color: MUTE, margin: "10px 0 0" }}>
              {footnote}
            </p>
          </div>
          {/* Œillet en laiton */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[34px] -ml-[15px] -mt-[15px] h-[30px] w-[30px] rounded-full"
            style={{ border: "5px solid #B98A4B", boxShadow: "inset 0 1px 1px rgba(255,255,255,0.45), 0 1px 1px rgba(42,30,20,0.35)" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
