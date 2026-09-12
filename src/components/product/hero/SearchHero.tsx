"use client";

import "./product-heroes.css";
import { useEffect, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { HC, HERO_EASE, HeroEyebrow, HeroFade, HeroShell, HeroTitle, Serif } from "@/components/hero/HeroKit";
import { SafeCount } from "./SafeCount";

/* ==================================================================
   Héros de la recherche (/recherche?q=…).
   Champ de recherche en pastille ; à droite, l'« index » : la requête
   qui se tape avec son curseur, puis le nombre réel de résultats par
   catégorie en barres qui défilent, et les photos des modèles trouvés.
   Sans requête : des exemples se tapent et s'effacent tour à tour.
   ================================================================== */

export type SearchKindKey = "modele" | "marque" | "ville" | "guide" | "page";
export type SearchCount = { kind: SearchKindKey; label: string; n: number };
export type SearchThumb = { href: string; img: string; title: string };

const SINGULIER: Record<SearchKindKey, [string, string]> = {
  modele: ["modèle", "modèles"],
  marque: ["marque", "marques"],
  ville: ["ville", "villes"],
  guide: ["guide", "guides"],
  page: ["page", "pages"],
};
const EXEMPLES = ["MUZ-FS12NA", "Mitsubishi", "Laval", "LogisVert"];

export function SearchHero({ q, total, counts, thumbs, crumbs }: { q: string; total: number; counts: SearchCount[]; thumbs: SearchThumb[]; crumbs: ReactNode }) {
  const summary =
    total === 0
      ? "Aucun résultat pour cette recherche."
      : `${total} résultat${total > 1 ? "s" : ""} · ${counts.map((c) => `${c.n} ${SINGULIER[c.kind][c.n > 1 ? 1 : 0]}`).join(", ")}`;
  return (
    <HeroShell size="sm" labelledBy="pdh-rch-titre" snow={0.2}>
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.82fr)] lg:items-center">
        <div className="min-w-0">
          <HeroFade delay={0.05} className="ph-crumbs pdh-crumbs">
            {crumbs}
          </HeroFade>
          <div className="mt-8">
            <HeroEyebrow>Recherche</HeroEyebrow>
          </div>
          <HeroTitle
            id="pdh-rch-titre"
            size="sm"
            style={{ overflowWrap: "anywhere" }}
            lines={q ? ["Résultats pour", <Serif key="q">«&nbsp;{q}&nbsp;»</Serif>] : [<Serif key="r">Recherche</Serif>]}
          />
          <HeroFade delay={0.55} className="mt-8 max-w-[600px]">
            <form action="/recherche" method="get" role="search" className="pdh-search flex items-center gap-2 rounded-full py-1.5 pl-5 pr-1.5" style={{ background: "rgba(16,34,45,0.6)", border: `1px solid ${HC.line}` }}>
              <input
                type="search"
                name="q"
                defaultValue={q}
                placeholder="Modèle, marque, ville, guide…"
                aria-label="Rechercher"
                className="min-w-0 flex-1 bg-transparent py-2.5 text-[16px] outline-none"
                style={{ color: HC.cream }}
              />
              <button type="submit" className="shrink-0 rounded-full px-5 py-3 text-[15px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5" style={{ background: HC.orange }}>
                Chercher
              </button>
            </form>
          </HeroFade>
          {q && (
            <HeroFade delay={0.7}>
              <p className="text-[14px]" style={{ color: HC.mute, margin: "18px 0 0" }}>
                {summary}
              </p>
            </HeroFade>
          )}
        </div>
        {/* L'index : ordinateur seulement, les résultats priment sur mobile. */}
        <div className="hidden min-w-0 lg:block">
          <IndexPanel q={q} total={total} counts={counts} thumbs={thumbs} />
        </div>
      </div>
    </HeroShell>
  );
}

/* Requête tapée lettre par lettre ; sans requête, les exemples défilent. */
function useTyped(q: string, reduce: boolean) {
  const [text, setText] = useState("");
  useEffect(() => {
    if (reduce) {
      const t = window.setTimeout(() => setText(q || EXEMPLES[0]), 0);
      return () => window.clearTimeout(t);
    }
    let alive = true;
    const timers: number[] = [];
    const wait = (ms: number) => new Promise<void>((r) => timers.push(window.setTimeout(r, ms)));
    (async () => {
      await wait(700);
      if (q) {
        for (let k = 1; k <= q.length && alive; k++) {
          setText(q.slice(0, k));
          await wait(55);
        }
        return;
      }
      for (let n = 0; alive; n = (n + 1) % EXEMPLES.length) {
        const w = EXEMPLES[n];
        for (let k = 1; k <= w.length && alive; k++) {
          setText(w.slice(0, k));
          await wait(80);
        }
        await wait(1800);
        for (let k = w.length; k >= 0 && alive; k--) {
          setText(w.slice(0, k));
          await wait(35);
        }
        await wait(400);
      }
    })();
    return () => {
      alive = false;
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [q, reduce]);
  return text;
}

function IndexPanel({ q, total, counts, thumbs }: { q: string; total: number; counts: SearchCount[]; thumbs: SearchThumb[] }) {
  const reduce = !!useReducedMotion();
  const typed = useTyped(q, reduce);
  const [play, setPlay] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setPlay(true), 1100);
    return () => window.clearTimeout(t);
  }, []);
  const max = Math.max(1, ...counts.map((c) => c.n));

  return (
    <motion.div
      className="relative overflow-hidden rounded-[28px] p-7"
      style={{ background: "rgba(16,34,45,0.72)", border: `1px solid ${HC.line}`, backdropFilter: "blur(16px) saturate(130%)", WebkitBackdropFilter: "blur(16px) saturate(130%)", boxShadow: "0 50px 90px -50px rgba(0,0,0,0.85)" }}
      initial={reduce ? false : { opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: HERO_EASE, delay: 0.3 }}
    >
      <p className="text-[11px] font-medium uppercase" style={{ margin: 0, letterSpacing: "0.16em", color: HC.faint }}>
        {q ? "Votre requête" : "Essayez"}
      </p>
      <p aria-hidden="true" className="truncate" style={{ margin: "10px 0 0", fontSize: 34, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1.15, minHeight: "1.15em" }}>
        {typed}
        <span className="pdh-caret" />
      </p>
      <div className="h-px" style={{ background: HC.line, margin: "18px 0 0" }} />

      {q && total > 0 && (
        <dl className="m-0 mt-5 flex flex-col gap-3.5">
          {counts.map((c, k) => (
            <div key={c.kind} className="grid grid-cols-[6.5em_minmax(0,1fr)_2.5em] items-center gap-3">
              <dt className="text-[13px]" style={{ color: HC.mute }}>
                {c.label}
              </dt>
              <span aria-hidden="true" className="relative h-[6px] overflow-hidden rounded-full" style={{ background: "rgba(244,239,231,0.08)" }}>
                <motion.span className="absolute left-0 top-0 h-full rounded-full" style={{ background: k === 0 ? HC.orange : "rgba(244,239,231,0.5)" }} initial={{ width: "0%" }} animate={{ width: play ? `${(c.n / max) * 100}%` : "0%" }} transition={{ duration: 1.2, ease: HERO_EASE, delay: k * 0.1 }} />
              </span>
              <dd className="text-right text-[15px] font-semibold tabular-nums" style={{ margin: 0 }}>
                <SafeCount value={c.n} play={play} />
              </dd>
            </div>
          ))}
        </dl>
      )}

      {q && total === 0 && (
        <p className="text-[14px] leading-relaxed" style={{ color: HC.mute, margin: "18px 0 0" }}>
          Rien ne correspond. Un nom de marque, un numéro de modèle ou une ville donnent souvent de meilleurs résultats.
        </p>
      )}

      {(!q || total === 0) && (
        <div className="mt-5 flex flex-wrap gap-2">
          {EXEMPLES.map((e) => (
            <Link key={e} href={`/recherche?q=${encodeURIComponent(e)}`} className="pdh-chip rounded-full px-4 py-2 text-[13px] font-medium" style={{ border: `1px solid ${HC.line}`, color: HC.mute }}>
              {e}
            </Link>
          ))}
        </div>
      )}

      {thumbs.length > 0 && (
        <div className="mt-6 flex gap-3">
          {thumbs.map((t, k) => (
            <motion.div key={t.href} initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: HERO_EASE, delay: 1.3 + k * 0.08 }}>
              <Link href={t.href} title={t.title} className="group relative block h-[72px] w-[104px] overflow-hidden rounded-[14px] bg-white">
                <Image src={t.img} alt={t.title} fill sizes="104px" className="transition-transform duration-500 group-hover:scale-[1.08]" style={{ objectFit: "contain", padding: 8 }} />
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
