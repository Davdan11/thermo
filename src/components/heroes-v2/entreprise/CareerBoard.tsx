"use client";

import "./entreprise.css";
import { useEffect, useState } from "react";
import { motion, MotionConfig } from "motion/react";
import { xeMono } from "./fonts";
import { Arrow, EASE, HEADER_PAD, UNDER_HEADER, XLink, useReducedSafe } from "./shared";

/* ==================================================================
   /carriere — « Plein orange ».
   Orange franc, crème, encre. Titre immense, puis les vrais postes
   ouverts en grandes lignes typographiques, comme un tableau des
   départs : chaque lettre bat comme une palette avant de se poser,
   de gauche à droite, ligne après ligne. Ensuite, de temps en temps,
   une ligne se remet à battre. Postes : fournis par la page.
   ================================================================== */

export type Poste = { title: string; type: string; loc: string };

const C = {
  orange: "#E54B17",
  cream: "#FFF4EC",
  ink: "#1A0D07",
  mute: "rgba(255,244,236,0.82)",
  faint: "rgba(255,244,236,0.62)",
  line: "rgba(255,244,236,0.34)",
};
const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZÉ0123456789";
const TICK = 48;

/** Texte à palettes : vide au premier rendu (serveur et client), puis bat et se pose lettre par lettre. */
function useFlap(text: string, start: number, run: number) {
  const reduce = useReducedSafe();
  const [chars, setChars] = useState<string[]>(() => text.split("").map((c) => (c === " " ? " " : "")));
  useEffect(() => {
    const target = text.split("");
    if (reduce) {
      setChars(target);
      return;
    }
    // Chaque lettre démarre un peu après sa voisine et se pose après quelques battements.
    const settle = target.map((_, i) => 5 + Math.round(i * 0.9) + Math.floor(Math.random() * 4));
    const begin = target.map((_, i) => Math.round(i * 0.45));
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
        if (frame > Math.max(...settle)) window.clearInterval(iv);
      }, TICK);
    }, start);
    return () => {
      window.clearTimeout(t);
      window.clearInterval(iv);
    };
  }, [text, start, run, reduce]);
  return chars;
}

/** Rendu : chaque mot reste insécable ; chaque case garde la largeur de la lettre finale (aucun décalage). */
function FlapText({ text, start, run, className, style }: { text: string; start: number; run: number; className?: string; style?: React.CSSProperties }) {
  const chars = useFlap(text, start, run);
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
    <span className={className} style={style}>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {words.map((w, wi) => (
          <span key={wi}>
            <span className="inline-block whitespace-nowrap">
              {text
                .slice(w.from, w.to)
                .split("")
                .map((final, k) => {
                  const i = w.from + k;
                  const cur = chars[i] ?? "";
                  return (
                    <span key={k} className="relative inline-block" style={{ perspective: 400 }}>
                      <span className="invisible">{final}</span>
                      <span className="absolute inset-0 flex justify-center">
                        {cur !== "" && (
                          <span key={cur} className="xe-flap">
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
    </span>
  );
}

export function CareerBoard({ postes }: { postes: Poste[] }) {
  const reduce = useReducedSafe();

  // Après l'entrée, une ligne se remet à battre toutes les 7 secondes, à tour de rôle.
  const [runs, setRuns] = useState<number[]>(() => postes.map(() => 0));
  useEffect(() => {
    if (reduce || postes.length === 0) return;
    let n = 0;
    const iv = window.setInterval(() => {
      const row = n % postes.length;
      n += 1;
      setRuns((r) => r.map((v, i) => (i === row ? v + 1 : v)));
    }, 7000);
    return () => window.clearInterval(iv);
  }, [reduce, postes.length]);

  const lines = [
    { text: "Bâtissons ensemble", color: C.cream },
    { text: "le confort de demain.", color: C.ink },
  ];

  return (
    <MotionConfig reducedMotion="user">
    <section aria-labelledby="carriere-titre" className={`xe-root ${xeMono.variable} relative overflow-hidden ${UNDER_HEADER}`} style={{ background: C.orange, color: C.cream }}>
      <div className={`relative mx-auto max-w-[1440px] px-5 pb-12 sm:px-8 lg:px-12 lg:pb-16 ${HEADER_PAD}`}>
        <motion.p className="xe-mono flex items-center gap-3 text-[12px] uppercase" style={{ letterSpacing: "0.2em", color: C.mute, margin: 0 }} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
          <span aria-hidden="true" className="inline-block h-[9px] w-[9px]" style={{ background: C.ink }} />
          Carrières
        </motion.p>

        <h1 id="carriere-titre" className="mt-5" style={{ fontSize: "clamp(46px, 7.2vw, 128px)", lineHeight: 0.9, letterSpacing: "-0.055em", fontWeight: 800, margin: "20px 0 0", perspective: 900 }}>
          {lines.map((l, i) => (
            <motion.span
              key={l.text}
              className="block origin-top"
              style={{ color: l.color, paddingBottom: "0.06em" }}
              initial={reduce ? false : { rotateX: -90, opacity: 0 }}
              animate={{ rotateX: 0, opacity: 1 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.2 + i * 0.16 }}
            >
              {l.text}
            </motion.span>
          ))}
        </h1>

        <motion.div className="mt-8 grid items-end gap-6 lg:mt-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-12" initial={reduce ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: EASE, delay: 0.6 }}>
          <p className="max-w-[560px] text-[17px] leading-[1.6] sm:text-[18px]" style={{ color: C.mute, margin: 0 }}>
            Nous sommes toujours à la recherche de talents passionnés pour simplifier l’achat et l’installation de thermopompes au Québec.
          </p>
          <div className="flex flex-wrap gap-3">
            <XLink href="#postes" className="inline-flex items-center gap-3 rounded-full px-6 py-3.5 text-[15px] font-semibold transition-transform duration-300 hover:-translate-y-0.5" style={{ background: C.ink, color: C.cream }}>
              Voir les postes ouverts <Arrow />
            </XLink>
            <XLink href="/contact" className="inline-flex items-center rounded-full px-6 py-3.5 text-[15px] font-semibold transition-colors duration-300 hover:bg-[#FFF4EC] hover:text-[#E54B17]" style={{ border: `1.5px solid ${C.cream}`, color: C.cream }}>
              Nous écrire
            </XLink>
          </div>
        </motion.div>

        {/* Tableau des départs */}
        {postes.length > 0 && (
          <div className="mt-10 lg:mt-14">
            <div className="xe-mono hidden grid-cols-[80px_minmax(0,1fr)_170px_220px_40px] gap-x-6 pb-3 text-[11px] uppercase lg:grid" style={{ letterSpacing: "0.2em", color: C.faint }}>
              <span>N°</span>
              <span>
                Poste <span style={{ color: C.cream }}>· {postes.length} {postes.length > 1 ? "postes ouverts" : "poste ouvert"}</span>
              </span>
              <span>Type</span>
              <span>Lieu</span>
              <span />
            </div>
            <p className="xe-mono pb-3 text-[11px] uppercase lg:hidden" style={{ letterSpacing: "0.2em", color: C.cream, margin: 0 }}>
              {postes.length} {postes.length > 1 ? "postes ouverts" : "poste ouvert"}
            </p>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, borderBottom: `1px solid ${C.line}` }}>
              {postes.map((p, i) => (
                <motion.li key={p.title} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4, delay: 0.9 + i * 0.2 }} style={{ borderTop: `1px solid ${C.line}` }}>
                  <XLink href="#postes" className="xe-board-row grid grid-cols-[34px_minmax(0,1fr)_24px] items-center gap-x-3 gap-y-1.5 py-4 lg:grid-cols-[80px_minmax(0,1fr)_170px_220px_40px] lg:gap-x-6 lg:py-5" style={{ color: C.cream }}>
                    <span className="xe-mono text-[13px] lg:text-[15px]" style={{ color: C.ink, fontWeight: 600 }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <FlapText
                      text={p.title.toUpperCase()}
                      start={1000 + i * 420}
                      run={runs[i] ?? 0}
                      className="block min-w-0"
                      style={{ fontSize: "clamp(19px, 2.55vw, 42px)", lineHeight: 1.08, fontWeight: 700, letterSpacing: "-0.02em" }}
                    />
                    <span className="row-start-1 col-start-3 justify-self-end lg:hidden">
                      <Arrow size={18} />
                    </span>
                    <span className="xe-mono col-start-2 flex flex-wrap gap-x-3 text-[12px] uppercase lg:contents lg:text-[13.5px]" style={{ letterSpacing: "0.08em", color: C.mute }}>
                      <FlapText text={p.type} start={1500 + i * 420} run={runs[i] ?? 0} />
                      <FlapText text={p.loc} start={1650 + i * 420} run={runs[i] ?? 0} />
                    </span>
                    <span className="hidden justify-self-end lg:block">
                      <Arrow size={22} />
                    </span>
                  </XLink>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
    </MotionConfig>
  );
}
