"use client";

import "./heroes-v2.css";
import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { MotionConfig, motion } from "motion/react";
import { Tick, fmtNum, useReducedSafe } from "./Tick";

/* ==================================================================
   Page blanche — héros de /recherche?q=…
   Fond papier, encre, un curseur orange. La requête se tape toute
   seule au centre, en très grand, comme sur une page qu'on commence ;
   puis les comptes réels (modèles, marques, guides…) en grands
   chiffres, et le champ de recherche en dessous.
   Sans requête : des exemples se tapent et s'effacent tour à tour.
   ================================================================== */

export type SearchKindKey = "modele" | "marque" | "ville" | "guide" | "page";
export type SearchCount = { kind: SearchKindKey; label: string; n: number };
export type SearchThumb = { href: string; img: string; title: string };

const PAPER = "#F3F2EF";
const INK = "#121417";
const MUTE = "rgba(18,20,23,0.56)";
const LINE = "rgba(18,20,23,0.14)";
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const DISPLAY = "var(--font-display), var(--font-sans), sans-serif";

const NOMS: Record<SearchKindKey, [string, string]> = {
  modele: ["modèle", "modèles"],
  marque: ["marque", "marques"],
  ville: ["ville", "villes"],
  guide: ["guide", "guides"],
  page: ["page", "pages"],
};
const EXEMPLES = ["MUZ-FS12NA", "Mitsubishi", "Laval", "LogisVert"];

/* Frappe : un rythme humain mais déterministe. */
const beat = (i: number) => 62 + ((i * 37) % 5) * 17;

function useTyped(q: string, reduce: boolean) {
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    let alive = true;
    const timers: number[] = [];
    const wait = (ms: number) => new Promise<void>((r) => timers.push(window.setTimeout(r, ms)));
    (async () => {
      if (reduce) {
        await wait(0);
        if (!alive) return;
        setText(q || EXEMPLES[0]);
        setDone(true);
        return;
      }
      await wait(650);
      if (q) {
        for (let k = 1; k <= q.length && alive; k++) {
          setText(q.slice(0, k));
          await wait(beat(k));
        }
        if (alive) setDone(true);
        return;
      }
      for (let n = 0; alive; n = (n + 1) % EXEMPLES.length) {
        const w = EXEMPLES[n];
        for (let k = 1; k <= w.length && alive; k++) {
          setText(w.slice(0, k));
          await wait(beat(k) + 20);
        }
        if (alive) setDone(true);
        await wait(1900);
        if (alive) setDone(false);
        for (let k = w.length; k >= 0 && alive; k--) {
          setText(w.slice(0, k));
          await wait(34);
        }
        await wait(380);
      }
    })();
    return () => {
      alive = false;
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [q, reduce]);
  return { text, done };
}

export function PageBlanche({ q, total, counts, thumbs, crumbs }: { q: string; total: number; counts: SearchCount[]; thumbs: SearchThumb[]; crumbs: ReactNode }) {
  const reduce = useReducedSafe();
  const { text, done } = useTyped(q, reduce);
  const [play, setPlay] = useState(false);
  useEffect(() => {
    if (q && done) setPlay(true);
  }, [q, done]);

  // Taille de la requête : la plus grande possible sans déborder (longueur réelle).
  const sample = q || "Mitsubishi";
  const k = Math.max(2.6, sample.length * 0.43 + 0.4);
  const qSize = `min(230px, calc((min(100vw, 1280px) - 48px) / ${k.toFixed(2)}))`;
  const rest = (q ? 0.65 + [...q].reduce((s, _, i) => s + beat(i + 1), 0) / 1000 : 1.2) + 0.1;

  return (
    <MotionConfig reducedMotion="user">
    <section aria-labelledby="pb-titre" className="pb-root pv2-root relative -mt-[93px] overflow-hidden min-[1700px]:-mt-[105px]" style={{ background: PAPER, color: INK, fontFamily: DISPLAY }}>
      <div className="relative mx-auto max-w-[1280px] px-5 pb-14 pt-[132px] text-center sm:px-8 lg:pb-16 min-[1700px]:pt-[150px]">
        <motion.div className="pb-crumbs flex justify-center" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          {crumbs}
        </motion.div>

        <h1 id="pb-titre" className="mx-auto" style={{ margin: "34px 0 0", fontSize: 12, fontWeight: 600, letterSpacing: "0.3em", textTransform: "uppercase", color: MUTE }}>
          {q ? "Résultats pour" : "Recherche"}
          {q && <span className="sr-only"> «&nbsp;{q}&nbsp;»</span>}
        </h1>

        {/* La requête, tapée en grand (décor : le vrai texte est dans le titre et le champ). */}
        <p aria-hidden="true" className="pb-q mx-auto" style={{ margin: "14px 0 0", fontSize: qSize, overflowWrap: "anywhere", minHeight: "1.05em" }}>
          <span className="relative inline-block max-w-full text-left">
            <span style={{ visibility: "hidden" }}>{q || "Mitsubishi"}</span>
            <span className="absolute left-0 top-0 whitespace-pre-wrap" style={{ right: "-0.3em" }}>
              {text}
              <span className={`pb-caret${done ? " is-idle" : ""}`} />
            </span>
          </span>
        </p>
        {!q && (
          <p className="text-[12px] font-medium uppercase" style={{ letterSpacing: "0.26em", color: MUTE, margin: "10px 0 0" }}>
            Essayez
          </p>
        )}

        {/* Comptes réels, en grands chiffres */}
        {q && total > 0 && (
          <motion.div initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: EASE, delay: reduce ? 0 : rest }}>
            <div className="mx-auto mt-9 flex max-w-full flex-wrap items-start justify-center gap-y-6">
              {counts.map((c, i) => (
                <a key={c.kind} href={`#resultats-${c.kind}`} className="pb-count block px-5 sm:px-10" style={{ borderLeft: i ? `1px solid ${LINE}` : "none", color: INK }}>
                  <span className="block" style={{ fontSize: "clamp(52px, 6.4vw, 104px)", fontWeight: 200, lineHeight: 0.9, letterSpacing: "-0.055em" }}>
                    <Tick value={c.n} play={play} duration={1.2} />
                  </span>
                  <span className="mt-2 block text-[11.5px] font-medium uppercase" style={{ letterSpacing: "0.22em", color: MUTE }}>
                    {NOMS[c.kind][c.n > 1 ? 1 : 0]}
                  </span>
                </a>
              ))}
            </div>
            <p className="text-[13.5px]" style={{ color: MUTE, margin: "18px 0 0" }}>
              {fmtNum(total)} résultat{total > 1 ? "s" : ""} au total
            </p>
          </motion.div>
        )}

        {q && total === 0 && (
          <motion.p className="mx-auto max-w-[560px] text-[16px] leading-relaxed" style={{ color: MUTE, margin: "26px auto 0" }} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: reduce ? 0 : rest }}>
            Aucun résultat pour cette recherche. Un nom de marque, un numéro de modèle ou une ville donnent souvent de meilleurs résultats.
          </motion.p>
        )}

        {/* Champ : un simple trait qui se dessine */}
        <motion.form
          action="/recherche"
          method="get"
          role="search"
          className="pb-field mx-auto mt-10 flex max-w-[640px] items-center gap-4"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: reduce ? 0 : 0.4 }}
        >
          <input
            type="search"
            name="q"
            defaultValue={q}
            placeholder="Modèle, marque, ville, guide…"
            aria-label="Rechercher"
            className="min-w-0 flex-1 bg-transparent py-3 text-left text-[19px] sm:text-[21px]"
            style={{ outline: "none", color: INK, border: 0 }}
          />
          <button type="submit" className="pb-go inline-flex shrink-0 items-center gap-2 py-3 text-[15px] font-semibold" style={{ color: INK }}>
            Chercher
            <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </button>
          <motion.span
            aria-hidden="true"
            className="pb-rule pointer-events-none absolute inset-x-0 bottom-0 block h-px origin-center"
            style={{ background: INK }}
            initial={reduce ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.1, ease: EASE, delay: reduce ? 0 : 0.5 }}
          />
        </motion.form>

        {(!q || total === 0) && (
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {EXEMPLES.map((e) => (
              <Link key={e} href={`/recherche?q=${encodeURIComponent(e)}`} className="pb-chip rounded-full px-4 py-2 text-[13px] font-medium" style={{ border: `1px solid ${LINE}`, color: MUTE }}>
                {e}
              </Link>
            ))}
          </div>
        )}

        {thumbs.length > 0 && (
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {thumbs.map((t, i) => (
              <motion.div key={t.href} initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE, delay: reduce ? 0 : rest + 0.25 + i * 0.07 }}>
                <Link href={t.href} title={t.title} className="group relative block h-[64px] w-[92px] overflow-hidden rounded-[10px] bg-white" style={{ border: `1px solid ${LINE}` }}>
                  <Image src={t.img} alt={t.title} fill sizes="92px" className="transition-transform duration-500 group-hover:scale-[1.07]" style={{ objectFit: "contain", padding: 7 }} />
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
    </MotionConfig>
  );
}
