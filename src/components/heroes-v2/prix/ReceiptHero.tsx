"use client";

import "./prix-v2.css";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";
import { animate, motion, steps, useInView, useMotionValue } from "motion/react";
import type { RangeSet } from "@/components/product/hero/prix-sets";
import { DISPLAY, MONO, plexMono } from "./fonts";
import { CountTo, EASE, fr, useAfter } from "./shared";
import { useReduced } from "@/components/heroes-v2/outils/motion";

/* ==================================================================
   /prix — « Le reçu ».
   Papier #FAF8F3, encre #1B1B1B, IBM Plex Mono. À gauche, le titre en
   grosse linéale ; à droite, une imprimante thermique qui sort un long
   reçu, ligne par ligne : les fourchettes publiées (murale 12 000 BTU
   par gamme, multizone, centrale), la date de consultation et le
   nombre de pages sources. Chaque ligne « développe » à la sortie de
   la fente. Aucune donnée ajoutée : ce sont celles du tableau plus bas.
   ================================================================== */

const PAPER = "#FAF8F3";
const INK = "#1B1B1B";
const MUTE = "rgba(27,27,27,0.62)";
const RULE = "rgba(27,27,27,0.16)";

type Stat = { value: number; label: string };

export function ReceiptHero({ crumbs, sets, stats, consulted, footnote }: { crumbs: ReactNode; sets: RangeSet[]; stats: Stat[]; consulted: string; footnote: string }) {
  const reduce = !!useReduced();
  const play = useAfter(1250);
  // Le titre s'imprime lui aussi : révélé de gauche à droite, par à-coups de tête d'impression.
  const printIn = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { clipPath: "inset(-10% 100% -20% 0)" },
          animate: { clipPath: "inset(-10% 0% -20% 0)" },
          transition: { duration: 0.75, ease: steps(11), delay },
        };

  return (
    <section
      aria-labelledby="rc-titre"
      className={`${plexMono.variable} relative -mt-[93px] overflow-hidden min-[1700px]:-mt-[105px]`}
      style={{ background: PAPER, color: INK, fontFamily: DISPLAY }}
    >
      <div className="relative mx-auto grid max-w-[1440px] gap-14 px-5 pb-16 pt-[136px] sm:px-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-10 lg:px-12 lg:pb-16 min-[1700px]:pt-[152px]">
        {/* ---------- Texte ---------- */}
        <div className="min-w-0 lg:pt-2">
          <motion.div
            className="pv2-crumbs text-[13px]"
            style={{ "--c-link": MUTE, "--c-cur": INK, "--c-sep": "rgba(27,27,27,0.28)" } as CSSProperties}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {crumbs}
          </motion.div>

          <p className="flex items-center gap-3 text-[11.5px] font-medium uppercase" style={{ fontFamily: MONO, letterSpacing: "0.2em", margin: "36px 0 0" }}>
            <span aria-hidden="true" className="inline-block h-[9px] w-[9px]" style={{ background: INK }} />
            Prix et coûts
          </p>

          <h1 id="rc-titre" style={{ margin: "20px 0 0", fontSize: "clamp(50px, 6.8vw, 112px)", lineHeight: 0.9, letterSpacing: "-0.055em", fontWeight: 700 }}>
            <motion.span className="block" {...printIn(0.15)}>
              Prix d’une
            </motion.span>{" "}
            <motion.span className="block" {...printIn(0.3)}>
              thermopompe
            </motion.span>{" "}
            <motion.span className="block" {...printIn(0.45)}>
              au Québec{" "}
              <span
                className="relative -top-[0.12em] inline-block align-middle"
                style={{ fontFamily: MONO, fontSize: "0.34em", fontWeight: 500, letterSpacing: "0.02em", lineHeight: 1, background: INK, color: PAPER, padding: "0.32em 0.5em 0.3em" }}
              >
                en 2026
              </span>
            </motion.span>
          </h1>

          <motion.p
            className="max-w-[560px] text-[17px] leading-[1.65] sm:text-[18px]"
            style={{ color: "rgba(27,27,27,0.74)", margin: "30px 0 0" }}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.7 }}
          >
            Les fourchettes ci-dessous sont celles que le marché québécois publie, relevées page par page et regroupées par type, calibre et gamme de marque. Elles servent à situer une soumission, pas à la remplacer&nbsp;: le prix exact dépend de votre maison.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.85 }}
          >
            <Link
              href="/trouver-ma-thermopompe"
              className="pv2-btn-ink inline-flex items-center gap-3 px-6 py-4 text-[13.5px] font-medium uppercase"
              style={{ background: INK, color: PAPER, fontFamily: MONO, letterSpacing: "0.08em", borderRadius: 3 }}
            >
              Estimer avec ThermoMatch
              <span aria-hidden="true" className="pv2-arrow">
                →
              </span>
            </Link>
            <Link href="/soumission" className="pv2-uline text-[15px] font-semibold" style={{ color: INK }}>
              Demander une soumission
            </Link>
          </motion.div>

          {stats.length > 0 && (
            <motion.dl
              className={`grid max-w-[600px] ${stats.length >= 3 ? "grid-cols-3" : "grid-cols-2"}`}
              style={{ margin: "48px 0 0", borderTop: `1.5px solid ${INK}` }}
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {stats.map((s, i) => (
                <div key={s.label} className="flex flex-col gap-2 pr-3 pt-4" style={{ borderLeft: i ? `1px dashed ${RULE}` : "none", paddingLeft: i ? 16 : 0 }}>
                  <dt className="order-2 text-[10.5px] uppercase leading-snug sm:text-[11px]" style={{ fontFamily: MONO, letterSpacing: "0.1em", color: MUTE }}>
                    {s.label}
                  </dt>
                  <dd className="order-1" style={{ margin: 0, fontSize: "clamp(30px, 3vw, 46px)", fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 1 }}>
                    <CountTo value={s.value} play={play} duration={1.2} />
                  </dd>
                </div>
              ))}
            </motion.dl>
          )}
        </div>

        {/* ---------- Imprimante et reçu ---------- */}
        {sets.length > 0 && (
          <div className="min-w-0">
            <Printer sets={sets} stats={stats} consulted={consulted} footnote={footnote} />
          </div>
        )}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   Le reçu sort de la fente une ligne à la fois : le papier monte d'une
   hauteur de ligne à chaque impression, la ligne fraîche fonce.
   ------------------------------------------------------------------ */

function Printer({ sets, stats, consulted, footnote }: { sets: RangeSet[]; stats: Stat[]; consulted: string; footnote: string }) {
  const reduce = !!useReduced();
  const box = useRef<HTMLDivElement>(null);
  const paper = useRef<HTMLDivElement>(null);
  const inView = useInView(box, { once: true, margin: "0px 0px -12% 0px" });
  // 2000 px : papier encore dans l'imprimante (même valeur au serveur et au client).
  const y = useMotionValue(2000);
  const [printed, setPrinted] = useState(-1);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const el = paper.current;
    if (!inView || !el) return;
    const lines = Array.from(el.querySelectorAll<HTMLElement>("[data-l]"));
    if (reduce) {
      y.set(0);
      // eslint-disable-next-line react-hooks/set-state-in-effect -- reçu affiché d'un coup (animations réduites)
      setPrinted(lines.length);
      setDone(true);
      return;
    }
    const H = el.offsetHeight;
    const bottoms = lines.map((l) => l.offsetTop + l.offsetHeight);
    y.set(H);
    let i = 0;
    let alive = true;
    let timer = 0;
    const step = () => {
      if (!alive) return;
      if (i >= lines.length) {
        animate(y, 0, { duration: 0.7, ease: EASE });
        setDone(true);
        return;
      }
      animate(y, Math.max(0, H - bottoms[i] - 10), { duration: 0.1, ease: "easeOut" });
      setPrinted(i);
      const kind = lines[i].dataset.l;
      i += 1;
      timer = window.setTimeout(step, kind === "rule" ? 170 : kind === "head" ? 150 : kind === "note" ? 260 : 88);
    };
    timer = window.setTimeout(step, 420);
    return () => {
      alive = false;
      window.clearTimeout(timer);
    };
  }, [inView, reduce, y]);

  let n = -1;
  const on = () => {
    n += 1;
    return printed >= n ? "1" : "0";
  };
  const headline = stats
    .slice(0, 2)
    .map((s) => `${fr(s.value)} ${s.label}`)
    .join(" · ");

  return (
    <div ref={box} className="relative mx-auto w-full max-w-[468px] lg:ml-auto lg:mr-4">
      {/* Zone au-dessus de la fente : le papier y apparaît. */}
      <div className="relative overflow-hidden px-[14px] pt-3 sm:px-[26px]" style={{ filter: "drop-shadow(0 22px 26px rgba(27,27,27,0.13))" }}>
        <div className={done ? "pv2-sway" : undefined}>
          <motion.div
            ref={paper}
            className="pv2-receipt relative px-5 pb-6 pt-7 text-[12px] sm:px-7 sm:text-[12.5px]"
            style={{ y, background: "#FFFEFB", fontFamily: MONO, color: INK, lineHeight: 1.62 }}
          >
            <div data-l="brand" data-on={on()} className="pv2-rl text-center text-[12.5px] font-semibold uppercase sm:text-[13px]" style={{ letterSpacing: "0.16em" }}>
              ThermopompesÀVendre.ca
            </div>
            <div data-l="meta" data-on={on()} className="pv2-rl text-center" style={{ color: MUTE }}>
              Fourchettes installées · Québec
            </div>
            <div data-l="meta" data-on={on()} className="pv2-rl text-center" style={{ color: MUTE }}>
              Consultées le {consulted}
            </div>
            {headline && (
              <div data-l="meta" data-on={on()} className="pv2-rl text-center text-[11px] sm:text-[11.5px]" style={{ color: MUTE }}>
                {headline}
              </div>
            )}
            <div data-l="rule" data-on={on()} className="pv2-rl my-2.5" style={{ borderTop: `1.5px dashed ${INK}` }} />
            <div data-l="cols" data-on={on()} className="pv2-rl grid grid-cols-[2.2em_minmax(0,1fr)_auto] gap-x-2 text-[10px] uppercase sm:text-[10.5px]" style={{ color: MUTE, letterSpacing: "0.08em" }}>
              <span>Src</span>
              <span>Désignation</span>
              <span className="min-w-[9em] text-right">Installé</span>
            </div>

            {sets.map((s) => (
              <div key={s.key} className="mt-3">
                <div data-l="head" data-on={on()} className="pv2-rl font-semibold uppercase" style={{ letterSpacing: "0.06em" }}>
                  {s.tab}
                </div>
                <div data-l="sub" data-on={on()} className="pv2-rl text-[10.5px] leading-[1.45] sm:text-[11px]" style={{ color: MUTE }}>
                  {s.sub}
                </div>
                {s.rows.map((r) => (
                  <div key={r.label} data-l="row" data-on={on()} className="pv2-rl grid grid-cols-[2.2em_minmax(0,1fr)_auto] items-baseline gap-x-2 tabular-nums">
                    <span style={{ color: MUTE }}>{r.note.replace(/\s*sources?$/, "").replace("dérivé", "dér.")}</span>
                    <span className="flex min-w-0 items-baseline">
                      <span className="truncate">{r.label}</span>
                      <span aria-hidden="true" className="mx-1.5 min-w-[6px] flex-1 translate-y-[-3px]" style={{ borderBottom: `1px dotted ${RULE}` }} />
                    </span>
                    <span className="min-w-[9em] whitespace-nowrap text-right font-medium">
                      {fr(r.min)} – {fr(r.max)}&nbsp;$
                    </span>
                  </div>
                ))}
              </div>
            ))}

            <div data-l="rule" data-on={on()} className="pv2-rl mb-2.5 mt-4" style={{ borderTop: `1.5px dashed ${INK}` }} />
            <div data-l="note" data-on={on()} className="pv2-rl text-[10.5px] leading-[1.5] sm:text-[11px]" style={{ color: MUTE }}>
              {footnote} Src&nbsp;: nombre de pages sources de la case.
            </div>
            <div data-l="note" data-on={on()} className="pv2-rl mt-2.5 text-center font-semibold uppercase" style={{ letterSpacing: "0.08em" }}>
              Le prix exact&nbsp;: soumission écrite
            </div>
            <div data-l="barcode" data-on={on()} className="pv2-rl mt-3 flex justify-center">
              <Barcode seed={consulted + headline} />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Imprimante */}
      <div className="relative z-10 -mt-[3px] rounded-[16px] px-5 pb-3.5 pt-[18px]" style={{ background: INK, boxShadow: "0 30px 50px -28px rgba(27,27,27,0.6), inset 0 1px 0 rgba(255,255,255,0.12)" }}>
        <span aria-hidden="true" className="absolute inset-x-[14px] top-[7px] h-[5px] rounded-full" style={{ background: "#000", boxShadow: "inset 0 1px 2px rgba(0,0,0,0.9), 0 1px 0 rgba(255,255,255,0.08)" }} />
        <div className="flex items-center justify-between gap-4 text-[10px] uppercase sm:text-[10.5px]" style={{ fontFamily: MONO, letterSpacing: "0.16em", color: "rgba(250,248,243,0.5)" }}>
          <span>Relevé des prix publiés</span>
          <span className="flex items-center gap-2">
            <span aria-hidden="true" className={!done && printed >= 0 ? "pv2-led" : undefined} style={{ width: 6, height: 6, borderRadius: 6, background: done ? "#9FC7A5" : "#E3A83B", display: "inline-block" }} />
            {done ? "Terminé" : "Impression"}
          </span>
        </div>
      </div>
    </div>
  );
}

/** Code-barres décoratif, déterministe (même rendu au serveur et au client). */
function Barcode({ seed }: { seed: string }) {
  let h = 2166136261;
  const bars: number[] = [];
  for (let i = 0; i < 46; i++) {
    h ^= seed.charCodeAt(i % Math.max(1, seed.length)) + i;
    h = Math.imul(h, 16777619) >>> 0;
    bars.push(1 + (h % 3));
  }
  return (
    <span aria-hidden="true" className="flex h-[30px] items-stretch gap-[2px]">
      {bars.map((w, i) => (
        <span key={i} style={{ width: w, background: i % 2 ? "transparent" : INK }} />
      ))}
    </span>
  );
}
