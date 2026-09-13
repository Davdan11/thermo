"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { Arrow } from "@/components/heroes-v2/entreprise/shared";
import type { Poste } from "@/components/heroes-v2/entreprise/CareerBoard";
import { EASE, Reveal, Shell, useMontrealClock, useReduced } from "./kit";

/* ==================================================================
   /carriere — la suite du « Plein orange », en gare.
   Crème, encre, orange franc. Le titre « Pourquoi nous rejoindre ? »
   bat comme une palette à son entrée ; les postes ouverts sont
   affichés sur un vrai tableau des départs, noir, monté sur le mur
   crème : numéros en palettes, heure de Montréal réelle, et chaque
   ligne se remet à battre au survol. Postes : fournis par la page.
   ================================================================== */

const C = {
  orange: "#E54B17",
  cream: "#FFF4EC",
  ink: "#1A0D07",
  mute: "rgba(26,13,7,0.74)",
  line: "rgba(26,13,7,0.16)",
  board: "#150A05",
  tile: "#2C1B12",
  boardMute: "rgba(255,244,236,0.72)",
  boardFaint: "rgba(255,244,236,0.5)",
  boardLine: "rgba(255,244,236,0.13)",
};
const WRAP = "mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12";
const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZÉ0123456789";

/* ---------- Palettes ---------- */
/** Texte à palettes : vide au premier rendu (serveur et client), bat dès que `active`, se pose lettre par lettre. */
function useFlap(text: string, active: boolean, delay: number, run: number) {
  const reduce = useReduced();
  const [chars, setChars] = useState<string[]>(() => text.split("").map((c) => (c === " " ? " " : "")));
  useEffect(() => {
    if (!active) return;
    const target = text.split("");
    if (reduce) {
      const t = window.setTimeout(() => setChars(target), 0);
      return () => window.clearTimeout(t);
    }
    const settle = target.map((_, i) => 4 + Math.round(i * 0.7) + Math.floor(Math.random() * 4));
    const begin = target.map((_, i) => Math.round(i * 0.35));
    const end = Math.max(...settle);
    let frame = 0;
    let iv = 0;
    const t = window.setTimeout(() => {
      iv = window.setInterval(() => {
        frame += 1;
        setChars(
          target.map((c, i) => {
            if (c === " ") return " ";
            if (frame >= settle[i]) return c;
            if (frame < begin[i]) return run === 0 ? "" : c;
            if (!/[A-Za-zÀ-ÿ0-9]/.test(c)) return c;
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          }),
        );
        if (frame > end) window.clearInterval(iv);
      }, 46);
    }, delay);
    return () => {
      window.clearTimeout(t);
      window.clearInterval(iv);
    };
  }, [text, active, delay, run, reduce]);
  return chars;
}

/** Rendu : mots insécables, chaque case garde la largeur de sa lettre finale (aucun décalage). */
function Flap({ text, active, delay = 0, run = 0, className, style, charStyle }: { text: string; active: boolean; delay?: number; run?: number; className?: string; style?: CSSProperties; charStyle?: (c: string) => CSSProperties | undefined }) {
  const chars = useFlap(text, active, delay, run);
  const words: Array<{ from: number; to: number }> = [];
  let from = 0;
  text.split("").forEach((c, i) => {
    if (c === " ") {
      words.push({ from, to: i });
      from = i + 1;
    }
  });
  words.push({ from, to: text.length });
  return (
    <span className={className} style={style} aria-hidden="true">
      {words.map((w, wi) => (
        <span key={wi}>
          <span className="inline-block whitespace-nowrap">
            {text
              .slice(w.from, w.to)
              .split("")
              .map((final, k) => {
                const cur = chars[w.from + k] ?? "";
                return (
                  <span key={k} className="relative inline-block" style={{ perspective: 400, ...charStyle?.(final) }}>
                    <span className="invisible">{final}</span>
                    <span className="absolute inset-0 flex justify-center">
                      {cur !== "" && (
                        <span key={cur} className="xs-flap">
                          {cur}
                        </span>
                      )}
                    </span>
                  </span>
                );
              })}
          </span>
          {wi < words.length - 1 ? " " : ""}
        </span>
      ))}
    </span>
  );
}

/** Chiffres sur palettes noires, avec la fente du milieu. */
function Tiles({ value, size = "md" }: { value: string; size?: "sm" | "md" }) {
  const dims = size === "sm" ? "h-[30px] w-[22px] text-[16px]" : "h-[40px] w-[29px] text-[22px] lg:h-[50px] lg:w-[36px] lg:text-[28px]";
  return (
    <span aria-hidden="true" className="inline-flex gap-[3px]">
      {value.split("").map((d, i) =>
        d === ":" ? (
          <span key={i} className="xs-mono flex items-center px-0.5 text-[18px] font-semibold" style={{ color: C.orange }}>
            <span className="xs-blink">:</span>
          </span>
        ) : (
          <span key={i} className={`xs-tile xs-mono relative flex items-center justify-center overflow-hidden rounded-[4px] font-semibold ${dims}`} style={{ background: C.tile, color: C.cream, perspective: 300, boxShadow: "inset 0 -1px 0 rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)" }}>
            <span key={d} className="xs-flap">
              {d}
            </span>
          </span>
        ),
      )}
    </span>
  );
}

export function CareerSections({ postes }: { postes: Poste[] }) {
  return (
    <Shell>
      <WhyJoin />
      <Departures postes={postes} />
    </Shell>
  );
}

/* ---------- Pourquoi nous rejoindre ---------- */
function WhyJoin() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const seen = useInView(titleRef, { once: true, amount: 0.6 });
  const reduce = useReduced();
  const photoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: photoRef, offset: ["start end", "end start"] });
  const py = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const title = "Pourquoi nous rejoindre ?";
  const tag: CSSProperties = { background: C.ink, color: C.cream, padding: "0.05em 0.35em", borderRadius: 3, fontWeight: 600, whiteSpace: "nowrap" };

  return (
    <section aria-labelledby="cr-pourquoi" style={{ background: C.cream, color: C.ink }}>
      <div className={`${WRAP} grid gap-14 py-[clamp(72px,9vw,140px)] lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:items-center lg:gap-16`}>
        <div className="min-w-0">
          <motion.p aria-hidden="true" className="xs-mono flex items-center gap-3 text-[12px] uppercase" style={{ letterSpacing: "0.2em", color: C.mute, margin: 0 }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="inline-block h-[9px] w-[9px]" style={{ background: C.orange }} />
            Informations
          </motion.p>
          <h2 id="cr-pourquoi" ref={titleRef} style={{ fontSize: "clamp(46px, 6.6vw, 118px)", lineHeight: 0.9, letterSpacing: "-0.055em", fontWeight: 800, margin: "22px 0 0" }}>
            <span className="sr-only">{title}</span>
            <Flap text={title} active={seen} charStyle={(c) => (c === "?" ? { color: C.orange } : undefined)} />
          </h2>

          <Reveal delay={0.2} className="mt-10 max-w-[640px]">
            <p className="text-[18px] leading-[1.65] sm:text-[19px]" style={{ margin: 0 }}>
              Chez Thermopompes À Vendre, nous ne vendons pas seulement du matériel : nous développons des technologies propriétaires comme <strong style={tag}>ThermoMatch</strong> et <strong style={tag}>ThermoScan</strong> pour guider nos utilisateurs.
            </p>
            <p className="text-[17px] leading-[1.65]" style={{ color: C.mute, margin: "18px 0 0" }}>
              Vous évoluerez dans un environnement dynamique, innovant et au cœur d&apos;une transition énergétique majeure pour les ménages québécois.
            </p>
            <Link href="#postes" className="xs-ring-dark mt-10 inline-flex items-center gap-3 rounded-full px-7 py-4 text-[15px] font-semibold transition-colors duration-300 hover:bg-[#E54B17]" style={{ background: C.ink, color: C.cream }}>
              Voir les postes ouverts <Arrow className="xs-arrow" />
            </Link>
          </Reveal>
        </div>

        {/* L'affiche : cadre noir, store qui se lève */}
        <motion.figure className="relative m-0 min-w-0" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 1, ease: EASE }}>
          <div className="rounded-[14px] p-2.5 sm:p-3" style={{ background: C.ink, boxShadow: "0 50px 80px -50px rgba(26,13,7,0.7)" }}>
            <div aria-hidden="true" className="xs-mono flex items-center justify-between px-1.5 pb-2.5 pt-1 text-[10.5px] uppercase" style={{ letterSpacing: "0.18em", color: C.boardMute }}>
              <span className="flex items-center gap-2">
                <span className="xs-pulse inline-block h-[7px] w-[7px] rounded-full" style={{ background: C.orange }} />
                ThermoMatch
              </span>
              <span>ThermoScan</span>
            </div>
            <div ref={photoRef} className="relative aspect-[4/3] overflow-hidden rounded-[8px]" style={{ background: C.tile }}>
              <motion.div className="absolute inset-x-0 -bottom-[9%] -top-[9%]" style={reduce ? undefined : { y: py }}>
                <Image src="/images/thermomatch/thermomatch-recommendation-home.png" alt="Environnement de travail" fill sizes="(min-width: 1024px) 40vw, 92vw" style={{ objectFit: "cover" }} />
              </motion.div>
              <motion.span aria-hidden="true" className="absolute inset-0 block origin-top" style={{ background: C.tile }} initial={{ scaleY: 1 }} whileInView={{ scaleY: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 1.1, ease: [0.7, 0, 0.2, 1], delay: 0.25 }} />
            </div>
          </div>
        </motion.figure>
      </div>
    </section>
  );
}

/* ---------- Le tableau des départs ---------- */
function Departures({ postes }: { postes: Poste[] }) {
  const boardRef = useRef<HTMLDivElement>(null);
  const seen = useInView(boardRef, { once: true, amount: 0.25 });
  const reduce = useReduced();
  const { scrollYProgress } = useScroll({ target: boardRef, offset: ["start 0.9", "end 0.6"] });
  const clock = useMontrealClock(10_000);
  const [runs, setRuns] = useState<number[]>(() => postes.map(() => 0));
  const heading = "Postes actuellement ouverts";
  const count = `${postes.length} ${postes.length > 1 ? "postes ouverts" : "poste ouvert"}`;

  return (
    <section id="postes" aria-labelledby="cr-postes" style={{ background: C.cream, color: C.ink, scrollMarginTop: 96 }}>
      <div className={`${WRAP} pb-[clamp(72px,9vw,140px)]`}>
        <motion.div
          ref={boardRef}
          className="relative overflow-hidden rounded-[20px] px-4 pb-4 pt-6 sm:rounded-[26px] sm:px-8 sm:pb-8 sm:pt-9 lg:px-10"
          style={{ background: C.board, color: C.cream, boxShadow: "0 70px 110px -60px rgba(26,13,7,0.75), inset 0 1px 0 rgba(255,255,255,0.05)" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 1.1, ease: EASE }}
        >
          {/* En-tête du tableau */}
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="min-w-0">
              <p aria-hidden="true" className="xs-mono flex items-center gap-3 text-[11.5px] uppercase" style={{ letterSpacing: "0.22em", color: C.orange, margin: 0 }}>
                <span className="inline-block h-[9px] w-[9px]" style={{ background: C.orange }} />
                Départs
              </p>
              <h2 id="cr-postes" style={{ fontSize: "clamp(34px, 4.6vw, 80px)", lineHeight: 0.95, letterSpacing: "-0.045em", fontWeight: 800, margin: "16px 0 0" }}>
                <span className="sr-only">{heading}</span>
                <Flap text={heading} active={seen} delay={150} />
              </h2>
            </div>
            <div className="flex flex-wrap items-end gap-x-8 gap-y-4">
              <div>
                <p className="xs-mono text-[10.5px] uppercase" style={{ letterSpacing: "0.2em", color: C.boardFaint, margin: "0 0 8px" }}>
                  Heure de Montréal
                </p>
                <Tiles value={clock ? `${String(clock.h).padStart(2, "0")}:${String(clock.m).padStart(2, "0")}` : "  :  "} />
                {clock && (
                  <span className="sr-only">
                    Il est {clock.h} h {String(clock.m).padStart(2, "0")} à Montréal.
                  </span>
                )}
              </div>
              <p className="xs-mono pb-1 text-[12px] uppercase" style={{ letterSpacing: "0.18em", color: C.cream, margin: 0 }}>
                <span style={{ color: C.orange }}>●</span> {count}
              </p>
            </div>
          </div>

          {/* Voie : le trait orange avance avec le défilement */}
          <div aria-hidden="true" className="relative mt-7 h-[3px] lg:mt-9" style={{ background: C.boardLine }}>
            <motion.span className="absolute inset-0 block origin-left" style={{ background: C.orange, scaleX: reduce ? 1 : scrollYProgress }} />
          </div>

          <div className="xs-mono mt-5 hidden grid-cols-[110px_minmax(0,1fr)_170px_220px_160px] gap-x-6 pb-3 text-[11px] uppercase lg:grid" style={{ letterSpacing: "0.2em", color: C.boardFaint }} aria-hidden="true">
            <span>N°</span>
            <span>Poste</span>
            <span>Type</span>
            <span>Lieu</span>
            <span />
          </div>

          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {postes.map((p, i) => (
              <motion.li
                key={p.title}
                style={{ borderTop: `1px solid ${C.boardLine}` }}
                initial={{ opacity: 0 }}
                animate={seen ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.25 }}
                onMouseEnter={() => setRuns((r) => r.map((v, k) => (k === i ? v + 1 : v)))}
              >
                <article className="xs-board-row grid grid-cols-[auto_minmax(0,1fr)] items-center gap-x-4 gap-y-3 rounded-[10px] px-1 py-5 sm:px-3 lg:grid-cols-[110px_minmax(0,1fr)_170px_220px_160px] lg:gap-x-6 lg:py-6">
                  <Tiles value={String(i + 1).padStart(2, "0")} />
                  <h3 className="min-w-0" style={{ fontSize: "clamp(20px, 2.4vw, 38px)", lineHeight: 1.08, fontWeight: 700, letterSpacing: "-0.02em", margin: 0 }}>
                    <span className="sr-only">{p.title}</span>
                    <Flap text={p.title.toUpperCase()} active={seen} delay={500 + i * 380} run={runs[i] ?? 0} />
                  </h3>
                  <p className="xs-mono col-start-2 flex flex-wrap gap-x-3 gap-y-1 text-[12.5px] uppercase lg:contents lg:text-[13.5px]" style={{ letterSpacing: "0.08em", color: C.boardMute, margin: 0 }}>
                    <span>
                      <span className="sr-only">{p.type}</span>
                      <Flap text={p.type} active={seen} delay={900 + i * 380} run={runs[i] ?? 0} />
                    </span>
                    <span aria-hidden="true" className="lg:hidden" style={{ color: C.orange }}>
                      •
                    </span>
                    <span>
                      <span className="sr-only">{p.loc}</span>
                      <Flap text={p.loc} active={seen} delay={1050 + i * 380} run={runs[i] ?? 0} />
                    </span>
                  </p>
                  <div className="col-start-2 lg:col-start-auto lg:justify-self-end">
                    <Link href="/contact" className="xs-ring inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-[14.5px] font-semibold transition-colors duration-300 hover:bg-[#FFF4EC] hover:text-[#1A0D07]" style={{ background: C.orange, color: "#fff" }}>
                      Postuler<span className="sr-only"> : {p.title}</span> <Arrow className="xs-arrow" size={15} />
                    </Link>
                  </div>
                </article>
              </motion.li>
            ))}
          </ul>
          <div aria-hidden="true" style={{ borderTop: `1px solid ${C.boardLine}` }} />
          <BoardFoot>{count}</BoardFoot>
        </motion.div>
      </div>
    </section>
  );
}

function BoardFoot({ children }: { children: ReactNode }) {
  return (
    <div aria-hidden="true" className="xs-mono flex items-center justify-between gap-4 pt-4 text-[10.5px] uppercase" style={{ letterSpacing: "0.2em", color: C.boardFaint }}>
      <span>Thermopompes À Vendre · Carrières</span>
      <span className="hidden sm:inline">{children}</span>
    </div>
  );
}
