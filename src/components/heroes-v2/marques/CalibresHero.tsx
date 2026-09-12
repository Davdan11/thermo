"use client";

import "./marques.css";
import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, MotionConfig } from "motion/react";
import { Crumbs } from "./Crumbs";
import { DISPLAY, EASE, MONO, PHONE, REASSURANCE, fr, type Crumb, type Stat, calmNow, CALM } from "./shared";

/* ==================================================================
   « Règle des calibres » : héros marque × type (/marques/[slug]/[type]).
   Gris-bleu pâle, marine, repères orange. Une règle de capacité pleine
   largeur (6 000 → 60 000 BTU) porte chaque calibre que la marque offre
   réellement dans ce type ; les repères se survolent (ou se touchent)
   et donnent le nombre de modèles. La règle glisse en place, puis les
   repères s’allument un à un ; la photo d’un vrai modèle se pose au-
   dessus de son calibre.
   ================================================================== */

const C = {
  bg: "#E5EBEE",
  navy: "#0F2233",
  mute: "rgba(15,34,51,0.72)",
  faint: "rgba(15,34,51,0.5)",
  line: "rgba(15,34,51,0.16)",
  orange: "#E0592A",
  strip: "#F4F7F8",
} as const;

type Group = { from: number; to: number; count: number; values: number[] };

/** Calibres voisins (moins de 450 BTU d’écart) : une seule zone de survol, un trait par calibre réel. */
function cluster(offered: Array<{ btu: number; count: number }>): Group[] {
  const out: Group[] = [];
  for (const o of [...offered].sort((a, b) => a.btu - b.btu)) {
    const last = out[out.length - 1];
    if (last && o.btu - last.to <= 450) {
      last.to = o.btu;
      last.count += o.count;
      last.values.push(o.btu);
    } else out.push({ from: o.btu, to: o.btu, count: o.count, values: [o.btu] });
  }
  return out;
}

const describe = (g: Group) => `${g.from === g.to ? `${fr(g.from)} BTU` : `${fr(g.from)} à ${fr(g.to)} BTU`} · ${fr(g.count)} modèle${g.count > 1 ? "s" : ""}`;
const clamp = (v: number, a: number, b: number) => Math.min(Math.max(v, a), b);

export type CalibresProps = {
  brand: string;
  logo: string | null;
  /** Les deux lignes du h1 (mêmes mots que le titre). */
  lines: [string, string];
  /** Mot de la deuxième ligne marqué en orange sur une petite règle. */
  accent: string;
  intro: string;
  answer: string;
  crumbs: Crumb[];
  stats: Stat[];
  photo: { src: string; alt: string; caption: string; btu: number } | null;
  offered: Array<{ btu: number; count: number }>;
};

export function CalibresHero({ brand, logo, lines, accent, intro, answer, crumbs, stats, photo, offered }: CalibresProps) {
  const len = lines[1].length;
  const size = len <= 16 ? "clamp(44px, 5.6vw, 96px)" : len <= 24 ? "clamp(38px, 4.6vw, 78px)" : "clamp(34px, 3.8vw, 64px)";
  const shown = stats.filter((s) => s.value !== "—");
  const k = accent ? lines[1].indexOf(accent) : -1;

  return (
    <MotionConfig reducedMotion="user">
    <section aria-labelledby="calibres-titre" className="relative -mt-[93px] overflow-hidden min-[1700px]:-mt-[105px]" style={{ background: C.bg, color: C.navy, fontFamily: DISPLAY }}>
      <div className="relative mx-auto max-w-[1440px] px-5 pt-[130px] sm:px-8 lg:px-12 min-[1700px]:pt-[148px]">
        <motion.div
          className="flex flex-wrap items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={calmNow() ? CALM : { duration: 1, ease: EASE, delay: 0.05 }}
        >
          <Crumbs items={crumbs} className="text-[11.5px] font-medium uppercase" style={{ letterSpacing: "0.14em", color: C.navy }} />
          {logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={logo} alt={brand} className="hidden h-[26px] sm:block" style={{ width: "auto", maxWidth: "none", filter: "brightness(0)", opacity: 0.82 }} />
          ) : null}
        </motion.div>

        <div className="mt-10 grid gap-10 lg:mt-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="min-w-0">
            <motion.p
              className="flex items-center gap-3 text-[12px] font-semibold uppercase"
              style={{ letterSpacing: "0.24em", margin: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={calmNow() ? CALM : { duration: 1, delay: 0.15 }}
            >
              <span aria-hidden="true" className="inline-block h-[14px] w-[2px]" style={{ background: C.orange }} />
              {brand}
            </motion.p>
            <h1 id="calibres-titre" style={{ fontSize: size, fontWeight: 600, letterSpacing: "-0.05em", lineHeight: 0.98, margin: "18px 0 0" }}>
              {lines.map((l, i) => (
                <motion.span
                  key={i}
                  className="block"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={calmNow() ? CALM : { duration: 1.2, ease: EASE, delay: 0.25 + i * 0.14 }}
                >
                  {i === 1 && k >= 0 ? (
                    <>
                      {l.slice(0, k)}
                      <span className="relative inline-block" style={{ color: C.orange }}>
                        {accent}
                        {/* Petite règle graduée sous le mot */}
                        <motion.svg
                          aria-hidden="true"
                          className="absolute left-0 top-[98%] h-[0.15em] w-full overflow-visible"
                          viewBox="0 0 100 12"
                          preserveAspectRatio="none"
                          initial={{ clipPath: "inset(0 100% 0 0)" }}
                          animate={{ clipPath: "inset(0 0% 0 0)" }}
                          transition={calmNow() ? CALM : { duration: 1.6, ease: EASE, delay: 1 }}
                        >
                          <path
                            d={`M0 1H100${Array.from({ length: 21 }, (_, t) => `M${t * 5} 1V${t % 5 === 0 ? 12 : 6}`).join("")}`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth={1.5}
                            vectorEffect="non-scaling-stroke"
                          />
                        </motion.svg>
                      </span>
                      {l.slice(k + accent.length)}
                    </>
                  ) : (
                    l
                  )}
                  {i === 0 ? " " : null}
                </motion.span>
              ))}
            </h1>
            {shown.length ? (
              <motion.dl
                className="grid grid-cols-2 gap-y-6 sm:grid-cols-4"
                style={{ margin: "44px 0 0" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={calmNow() ? CALM : { duration: 1, delay: 0.8 }}
              >
                {shown.map((s, i) => (
                  <div key={s.label} className="relative pl-4 pr-3">
                    <span aria-hidden="true" className="absolute left-0 top-0 h-full w-px" style={{ background: i === 0 ? C.orange : C.line }} />
                    <dt className="text-[10.5px] font-semibold uppercase leading-snug" style={{ letterSpacing: "0.14em", color: C.faint }}>
                      {s.label}
                    </dt>
                    <dd className="whitespace-nowrap tabular-nums" style={{ margin: "6px 0 0", fontSize: "clamp(22px, 2vw, 30px)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1 }}>
                      {s.value}
                    </dd>
                  </div>
                ))}
              </motion.dl>
            ) : null}
          </div>

          <motion.div className="min-w-0 lg:pt-8" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={calmNow() ? CALM : { duration: 1, ease: EASE, delay: 0.6 }}>
            <p className="text-[16.5px] leading-[1.65]" style={{ color: C.mute, margin: 0, fontFamily: "var(--font-sans)" }}>
              {intro}
            </p>
            <div role="note" aria-label="En bref" className="mt-6 py-1 pl-5" style={{ borderLeft: `2px solid ${C.orange}` }}>
              <p className="text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.22em", color: C.orange, margin: 0 }}>
                En bref
              </p>
              <p className="text-[15px] leading-relaxed" style={{ color: C.navy, margin: "6px 0 0", fontFamily: "var(--font-sans)" }}>
                {answer}
              </p>
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3">
              <Link href="/trouver-ma-thermopompe" className="mq-btn inline-flex items-center gap-3 px-6 py-4 text-[15px] font-semibold" style={{ background: C.navy, color: C.bg }}>
                Trouver ma thermopompe en 2 min
                <svg aria-hidden="true" width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <a href={PHONE.href} className="mq-u text-[15px] font-semibold tabular-nums" style={{ color: C.navy }}>
                {PHONE.label}
              </a>
            </div>
            <p className="text-[13px]" style={{ color: C.faint, margin: "12px 0 0" }}>
              {REASSURANCE}
            </p>
          </motion.div>
        </div>
      </div>

      <Ruler offered={offered} photo={photo} brand={brand} />
    </section>
    </MotionConfig>
  );
}

function Ruler({ offered, photo, brand }: { offered: CalibresProps["offered"]; photo: CalibresProps["photo"]; brand: string }) {
  const groups = useMemo(() => cluster(offered), [offered]);
  const [active, setActive] = useState<number | null>(null);
  const lo = Math.min(6000, groups[0]?.from ?? 6000);
  const hi = Math.max(60000, groups[groups.length - 1]?.to ?? 60000);
  const pos = (v: number) => ((v - lo) / (hi - lo)) * 100;
  const marks: number[] = [];
  for (let v = Math.ceil(lo / 1000) * 1000; v <= hi; v += 1000) marks.push(v);
  const litStart = 1.5;
  const step = Math.min(0.07, 1.5 / Math.max(groups.length, 1));
  const photoDelay = litStart + groups.length * step + 0.1;
  const g = active !== null ? groups[active] : null;
  const distinct = offered.length;
  const first = groups[0]?.from;
  const last = groups[groups.length - 1]?.to;
  const photoX = photo ? clamp(pos(photo.btu), 11, 89) : null;
  // La photo porte déjà souvent son calibre dans son nom : pas de doublon.
  const caption = photo ? (photo.caption.replace(/\D/g, "").includes(String(photo.btu)) ? photo.caption : `${photo.caption} · ${fr(photo.btu)} BTU`) : "";

  return (
    <div className="relative mt-6 lg:mt-2">
      {/* Au-dessus de la règle : la photo sur son calibre, le relevé de la gamme, l’étiquette du repère survolé */}
      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="relative h-[176px] sm:h-[214px]">
          {distinct > 0 && first !== undefined && last !== undefined ? (
            <motion.p
              className={`absolute bottom-4 hidden max-w-[300px] text-[11px] uppercase leading-relaxed sm:block ${photoX !== null && photoX > 55 ? "left-0" : "right-0 text-right"}`}
              style={{ fontFamily: MONO, letterSpacing: "0.1em", color: C.mute, margin: 0 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={calmNow() ? CALM : { duration: 1, delay: photoDelay }}
            >
              <span style={{ color: C.orange }}>{fr(distinct)}</span> calibre{distinct > 1 ? "s" : ""} nominaux
              <br />
              de {fr(first)} à {fr(last)} BTU
            </motion.p>
          ) : null}
          {photo && photoX !== null ? (
            <motion.figure
              className="absolute bottom-0 m-0 w-[128px] -translate-x-1/2 sm:w-[220px]"
              style={{ left: `${photoX}%`, mixBlendMode: "multiply" }}
              initial={{ opacity: 0, y: -28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={calmNow() ? CALM : { duration: 1, ease: EASE, delay: photoDelay }}
            >
              <div className="relative aspect-[4/3]">
                <Image src={photo.src} alt={photo.alt} fill sizes="220px" style={{ objectFit: "contain" }} />
              </div>
              <figcaption className="mt-1 text-center text-[10.5px] leading-snug" style={{ fontFamily: MONO, color: C.mute }}>
                {caption}
              </figcaption>
              <span aria-hidden="true" className="mx-auto mt-1.5 block h-[16px] w-px" style={{ background: C.orange }} />
            </motion.figure>
          ) : null}
          {g ? (
            <div
              className="pointer-events-none absolute bottom-2 z-20 -translate-x-1/2 whitespace-nowrap px-3 py-2 text-[12px] tabular-nums"
              style={{ left: `${clamp((pos(g.from) + pos(g.to)) / 2, 12, 88)}%`, background: C.navy, color: C.strip, fontFamily: MONO }}
            >
              {describe(g)}
            </div>
          ) : null}
        </div>
      </div>

      {/* La règle : bande pleine largeur qui glisse en place */}
      <motion.div
        className="relative"
        style={{ background: C.strip, borderTop: "1px solid rgba(15,34,51,0.28)", borderBottom: `1px solid ${C.line}`, boxShadow: "0 14px 30px -24px rgba(15,34,51,0.45)" }}
        initial={{ x: "24%", opacity: 0 }}
        animate={{ x: "0%", opacity: 1 }}
        transition={calmNow() ? CALM : { duration: 1.3, ease: EASE, delay: 0.45 }}
      >
        <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <div className="relative h-[80px]" onPointerLeave={() => setActive(null)}>
            {marks.map((v) => {
              const major = v % 6000 === 0;
              const mid = !major && v % 3000 === 0;
              return (
                <span
                  key={v}
                  aria-hidden="true"
                  className="absolute top-0 w-px"
                  style={{ left: `${pos(v)}%`, height: major ? 24 : mid ? 15 : 8, background: C.navy, opacity: major ? 0.8 : 0.4 }}
                />
              );
            })}
            {marks
              .filter((v) => v % 6000 === 0)
              .map((v) => (
                <span
                  key={`l${v}`}
                  aria-hidden="true"
                  className={`absolute top-[48px] -translate-x-1/2 text-[11px] tabular-nums ${v % 12000 ? "hidden sm:block" : ""}`}
                  style={{ left: `${pos(v)}%`, fontFamily: MONO, color: C.navy }}
                >
                  {fr(v)}
                </span>
              ))}
            {/* Un trait orange par calibre réellement offert, allumé groupe par groupe */}
            {groups.map((gr, i) =>
              gr.values.map((v) => (
                <motion.span
                  key={`t${v}`}
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 block w-[2px] -translate-x-1/2"
                  style={{ left: `${pos(v)}%`, height: active === i ? 46 : 36, background: active === i ? C.navy : C.orange, transformOrigin: "50% 0%", transition: "height 0.3s, background-color 0.3s" }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={calmNow() ? CALM : { duration: 0.5, ease: EASE, delay: litStart + i * step }}
                />
              )),
            )}
            {/* Zones de survol, une par groupe de calibres */}
            {groups.map((gr, i) => {
              const left = pos(gr.from);
              const span = pos(gr.to) - left;
              return (
                <button
                  key={`b${gr.from}`}
                  type="button"
                  className="mq-tick absolute top-0 h-[46px] -translate-x-1/2 cursor-pointer"
                  style={{ left: `${left + span / 2}%`, width: `calc(${span}% + 12px)`, background: "transparent", border: 0, padding: 0 }}
                  aria-label={describe(gr)}
                  onPointerEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  onClick={() => setActive(i)}
                />
              );
            })}
          </div>
        </div>
      </motion.div>
      <motion.p
        className="mx-auto max-w-[1440px] px-5 pb-8 pt-3 text-[11px] uppercase sm:px-8 lg:px-12"
        style={{ fontFamily: MONO, letterSpacing: "0.12em", color: C.faint, margin: "0 auto" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={calmNow() ? CALM : { duration: 1, delay: photoDelay + 0.2 }}
      >
        Calibres nominaux offerts par {brand}, en BTU. Survolez ou touchez un repère.
      </motion.p>
    </div>
  );
}
