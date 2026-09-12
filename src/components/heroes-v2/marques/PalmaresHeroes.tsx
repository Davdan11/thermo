"use client";

import "./marques.css";
import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, MotionConfig } from "motion/react";
import { Crumbs } from "./Crumbs";
import { palmaresSerif } from "./fonts";
import { DISPLAY, EASE, PHONE, REASSURANCE, type Crumb, type PodiumEntry, type ProgrammeRow, type Stat, calmNow, CALM } from "./shared";

/* ==================================================================
   « Palmarès » : héros des classements.
   Vert bouteille, or, crème ; sérif éditoriale Fraunces, composition
   centrée de soirée de remise de prix, filet double de programme imprimé.
   - Index (/meilleures-thermopompes) : le programme de la soirée, une
     catégorie par entrée avec son lauréat ; les entrées sont annoncées
     l’une après l’autre et un reflet doré passe sur les chiffres romains.
   - Critère (/meilleures-thermopompes/[critere]) : podium des trois
     premiers, vraies photos sur passe-partout crème ; les socles montent,
     les grands chiffres sortent des socles, les machines se posent.
   ================================================================== */

const P = {
  green: "#0F2E26",
  deep: "#0A221C",
  gold: "#C9A24B",
  goldSoft: "#E3C987",
  cream: "#F3EBDD",
  mute: "rgba(243,235,221,0.74)",
  faint: "rgba(243,235,221,0.5)",
  line: "rgba(201,162,75,0.36)",
} as const;
const SERIF = "var(--font-palmares), Georgia, 'Times New Roman', serif";
const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

function Shell({ id, children }: { id: string; children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
    <section
      aria-labelledby={id}
      className={`${palmaresSerif.variable} relative -mt-[93px] overflow-hidden min-[1700px]:-mt-[105px]`}
      style={{ background: `radial-gradient(ellipse 90% 70% at 50% 26%, #16392F 0%, ${P.green} 52%, ${P.deep} 100%)`, color: P.cream, fontFamily: DISPLAY }}
    >
      {/* Filet double du programme imprimé */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-3 bottom-3 top-[100px] sm:inset-x-5 sm:bottom-5 min-[1700px]:top-[112px]"
        style={{ border: `1px solid ${P.line}` }}
        initial={{ opacity: 0, scale: 1.01 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={calmNow() ? CALM : { duration: 1.8, ease: EASE, delay: 0.1 }}
      >
        <span className="absolute inset-[5px]" style={{ border: "1px solid rgba(201,162,75,0.16)" }} />
      </motion.div>
      <div className="relative mx-auto max-w-[1240px] px-7 pb-16 pt-[132px] text-center sm:px-12 min-[1700px]:pt-[150px]">{children}</div>
    </section>
    </MotionConfig>
  );
}

function Fade({ children, delay = 0, className, y = 14 }: { children: ReactNode; delay?: number; className?: string; y?: number }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y }} animate={{ opacity: 1, y: 0 }} transition={calmNow() ? CALM : { duration: 1.1, ease: EASE, delay }}>
      {children}
    </motion.div>
  );
}

function Eyebrow({ children, delay = 0.12 }: { children: ReactNode; delay?: number }) {
  return (
    <Fade delay={delay} y={0}>
      <p className="mt-5 flex items-center justify-center gap-4 text-[11.5px] font-semibold uppercase" style={{ letterSpacing: "0.3em", color: P.gold, margin: "20px 0 0" }}>
        <span aria-hidden="true" className="inline-block h-px w-8 sm:w-12" style={{ background: P.gold, opacity: 0.6 }} />
        <span>{children}</span>
        <span aria-hidden="true" className="inline-block h-px w-8 sm:w-12" style={{ background: P.gold, opacity: 0.6 }} />
      </p>
    </Fade>
  );
}

/** Filet orné qui se trace depuis le centre. */
function Rule({ delay }: { delay: number }) {
  return (
    <div aria-hidden="true" className="mx-auto flex max-w-[560px] items-center gap-3">
      <motion.span className="h-px flex-1 origin-right" style={{ background: P.gold, opacity: 0.7 }} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={calmNow() ? CALM : { duration: 1.4, ease: EASE, delay }} />
      <motion.span className="inline-block h-[7px] w-[7px] rotate-45" style={{ border: `1px solid ${P.gold}` }} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={calmNow() ? CALM : { duration: 0.6, delay: delay + 0.2 }} />
      <motion.span className="h-px flex-1 origin-left" style={{ background: P.gold, opacity: 0.7 }} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={calmNow() ? CALM : { duration: 1.4, ease: EASE, delay }} />
    </div>
  );
}

function Ctas({ delay }: { delay: number }) {
  return (
    <Fade delay={delay} className="mt-8 flex flex-col items-center gap-3">
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        <Link href="/trouver-ma-thermopompe" className="mq-btn inline-flex items-center gap-3 px-7 py-4 text-[15px] font-semibold" style={{ background: P.gold, color: P.deep }}>
          Trouver ma thermopompe en 2 min
          <svg aria-hidden="true" width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </Link>
        <a href={PHONE.href} className="mq-u text-[15px] font-semibold tabular-nums" style={{ color: P.cream }}>
          {PHONE.label}
        </a>
      </div>
      <p className="text-[13px]" style={{ color: P.faint, margin: 0 }}>
        {REASSURANCE}
      </p>
    </Fade>
  );
}

/* ------------------------------------------------------------------
   Index : programme de la soirée
   ------------------------------------------------------------------ */

export function PalmaresIndexHero({ lines, year, intro, crumbs, rows }: { lines: string[]; year: number; intro: string; crumbs: Crumb[]; rows: ProgrammeRow[] }) {
  const y = String(year);
  const announce = 1.55;
  return (
    <Shell id="palmares-titre">
      <Fade>
        <Crumbs items={crumbs} className="flex justify-center text-[12px]" style={{ color: P.mute }} />
      </Fade>
      <Eyebrow>Classements</Eyebrow>
      <h1
        id="palmares-titre"
        style={{ fontFamily: SERIF, fontWeight: 300, fontSize: "clamp(40px, 5.6vw, 90px)", lineHeight: 1.02, letterSpacing: "-0.025em", margin: "22px auto 0", maxWidth: 1100, fontVariationSettings: '"SOFT" 40' }}
      >
        {lines.map((l, i) => {
          const at = l.indexOf(y);
          return (
            <motion.span key={l} className="block" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={calmNow() ? CALM : { duration: 1.3, ease: EASE, delay: 0.25 + i * 0.16 }}>
              {at < 0 ? (
                l
              ) : (
                <>
                  {l.slice(0, at)}
                  <span className="mq-foil" style={{ fontStyle: "italic", "--mq-delay": "2.4s", paddingRight: "0.04em" } as CSSProperties}>
                    {y}
                  </span>
                  {l.slice(at + y.length)}
                </>
              )}
              {i < lines.length - 1 ? " " : null}
            </motion.span>
          );
        })}
      </h1>
      <Fade delay={0.6}>
        <p className="mx-auto max-w-[720px] text-[16.5px] leading-[1.6]" style={{ color: P.mute, margin: "20px auto 0" }}>
          {intro}
        </p>
      </Fade>
      <Ctas delay={0.8} />

      <div className="mt-11">
        <Rule delay={1.1} />
      </div>
      <Fade delay={1.3} y={0}>
        <p className="mt-4 text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.3em", color: P.faint, margin: "14px 0 0" }}>
          Au programme · le n° 1 de chaque catégorie
        </p>
      </Fade>
      <ol className="mq-prog mx-auto grid max-w-[1120px] text-left lg:grid-cols-2 lg:gap-x-14" style={{ listStyle: "none", padding: 0, margin: "26px auto 0" }}>
        {rows.map((r, i) => {
          const d = announce + i * 0.2;
          return (
            <motion.li
              key={r.href}
              style={{ borderTop: `1px solid ${P.line}` }}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={calmNow() ? CALM : { duration: 1, ease: EASE, delay: d }}
            >
              <Link href={r.href} className="grid grid-cols-[56px_minmax(0,1fr)] items-center gap-4 py-4 sm:grid-cols-[88px_minmax(0,1fr)] sm:gap-5" style={{ color: P.cream }}>
                <span
                  aria-hidden="true"
                  className="mq-foil text-center"
                  style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 300, fontSize: "clamp(40px, 4.3vw, 66px)", lineHeight: 1, "--mq-delay": `${d + 1}s` } as CSSProperties}
                >
                  {ROMAN[i] ?? i + 1}
                </span>
                <span className="min-w-0">
                  <span className="flex items-center gap-3">
                    <span className="shrink-0 text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.2em", color: P.gold }}>
                      {r.label}
                    </span>
                    <motion.span
                      aria-hidden="true"
                      className="h-0 flex-1 origin-left"
                      style={{ borderTop: `1px dotted ${P.line}` }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={calmNow() ? CALM : { duration: 1.1, ease: EASE, delay: d + 0.3 }}
                    />
                  </span>
                  <span className="mq-prog-name mt-1.5 block truncate" style={{ fontFamily: SERIF, fontSize: "clamp(19px, 1.65vw, 24px)", fontWeight: 400, letterSpacing: "-0.01em", lineHeight: 1.2 }}>
                    {r.leader}
                  </span>
                  <span className="mt-1 block truncate text-[12.5px] tabular-nums" style={{ color: P.mute }}>
                    {r.value}
                  </span>
                </span>
              </Link>
            </motion.li>
          );
        })}
      </ol>
      <div aria-hidden="true" className="mx-auto h-px max-w-[1120px]" style={{ background: P.line }} />
    </Shell>
  );
}

/* ------------------------------------------------------------------
   Critère : podium des trois premiers
   ------------------------------------------------------------------ */

const F: Record<number, number> = { 1: 1, 2: 0.8, 3: 0.66 };
const PLINTH = "clamp(92px, 11vw, 164px)";
const ordinal = (r: number) => (r === 1 ? "1er" : `${r}e`);

export function PalmaresPodiumHero({
  eyebrow,
  title,
  accent,
  intro,
  answer,
  crumbs,
  stats,
  metricLabel,
  items,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  intro: string;
  answer: string;
  crumbs: Crumb[];
  stats: Stat[];
  metricLabel: string;
  items: PodiumEntry[];
}) {
  const byRank = [2, 1, 3].map((r) => items.find((x) => x.rank === r)).filter((x): x is PodiumEntry => !!x);
  const at = accent ? title.indexOf(accent) : -1;
  const shown = stats.filter((s) => s.value !== "—");

  return (
    <Shell id="palmares-titre">
      <Fade>
        <Crumbs items={crumbs} className="flex justify-center text-[12px]" style={{ color: P.mute }} />
      </Fade>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1
        id="palmares-titre"
        style={{ fontFamily: SERIF, fontWeight: 350, fontSize: "clamp(34px, 4.3vw, 70px)", lineHeight: 1.04, letterSpacing: "-0.02em", margin: "20px auto 0", maxWidth: 1080, textWrap: "balance" }}
      >
        <motion.span className="block" initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={calmNow() ? CALM : { duration: 1.3, ease: EASE, delay: 0.25 }}>
          {at < 0 || !accent ? (
            title
          ) : (
            <>
              {title.slice(0, at)}
              <em style={{ fontStyle: "italic", color: P.goldSoft }}>{accent}</em>
              {title.slice(at + accent.length)}
            </>
          )}
        </motion.span>
      </h1>
      <Fade delay={0.55}>
        <p className="mx-auto max-w-[760px] text-[16px] leading-[1.6]" style={{ color: P.mute, margin: "18px auto 0" }}>
          {intro}
        </p>
      </Fade>
      {byRank.length ? (
        <div className="mx-auto mt-10 max-w-[900px]">
          <Fade delay={0.9} y={0}>
            <p className="flex items-baseline justify-between gap-4 text-[10.5px] font-semibold uppercase sm:text-[11px]" style={{ letterSpacing: "0.22em", color: P.faint, margin: 0 }}>
              <span>Podium</span>
              <span className="text-right">{metricLabel}</span>
            </p>
          </Fade>
          <ol className="mq-podium mt-5 grid grid-cols-3 items-end gap-2.5 sm:gap-6" style={{ listStyle: "none", padding: 0, margin: "20px 0 0" }}>
            {byRank.map((it) => {
              const f = F[it.rank] ?? 0.6;
              const first = it.rank === 1;
              const d = 1 + (3 - it.rank) * 0.28;
              const h = `calc(${f} * ${PLINTH})`;
              return (
                <li key={it.href} className="min-w-0">
                  <Link href={it.href} aria-label={`${ordinal(it.rank)} : ${it.brand} ${it.name}, ${it.value}`} className="block">
                    <motion.div
                      className="mq-mat mx-auto w-full sm:w-[86%]"
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={calmNow() ? CALM : { type: "spring", stiffness: 110, damping: 15, delay: d + 0.9 }}
                    >
                      <div className="relative aspect-[4/3] overflow-hidden" style={{ background: "#F6EFE2", boxShadow: `0 0 0 1px ${P.line}, 0 26px 40px -26px rgba(0,0,0,0.75)` }}>
                        {it.image ? (
                          <Image src={it.image} alt={`${it.brand} ${it.name}`} fill sizes="(min-width: 640px) 210px, 28vw" style={{ objectFit: "contain", padding: "9%", mixBlendMode: "multiply" }} />
                        ) : it.logo ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={it.logo} alt={it.brand} className="absolute inset-0 m-auto h-auto w-[66%]" style={{ maxWidth: "none", filter: "brightness(0)", opacity: 0.8 }} />
                        ) : (
                          <span className="absolute inset-0 flex items-center justify-center px-2 text-center" style={{ fontFamily: SERIF, color: P.deep, fontSize: 18 }}>
                            {it.brand}
                          </span>
                        )}
                      </div>
                    </motion.div>
                    <motion.div
                      className="relative mt-3 overflow-hidden"
                      style={{
                        height: h,
                        background: "linear-gradient(180deg, #17463A 0%, #0D2A22 100%)",
                        borderTop: `2px solid ${first ? P.gold : "rgba(243,235,221,0.32)"}`,
                        borderBottom: `1px solid ${P.line}`,
                        transformOrigin: "50% 100%",
                      }}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={calmNow() ? CALM : { duration: 1.1, ease: EASE, delay: d }}
                    >
                      <motion.span
                        aria-hidden="true"
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ y: "90%" }}
                        animate={{ y: "0%" }}
                        transition={calmNow() ? CALM : { duration: 1.2, ease: EASE, delay: d + 0.45 }}
                      >
                        <span
                          className={first ? "mq-foil" : undefined}
                          style={{ fontFamily: SERIF, fontWeight: 300, fontSize: `calc(${h} * 0.84)`, lineHeight: 1, color: first ? undefined : "rgba(243,235,221,0.86)", fontVariationSettings: '"SOFT" 60', "--mq-delay": "2.8s" } as CSSProperties}
                        >
                          {it.rank}
                        </span>
                      </motion.span>
                    </motion.div>
                  </Link>
                  <motion.div className="mt-4 px-0.5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={calmNow() ? CALM : { duration: 1, delay: d + 1.2 }}>
                    <p className="truncate text-[10px] font-semibold uppercase sm:text-[11px]" style={{ letterSpacing: "0.18em", color: P.gold, margin: 0 }}>
                      {it.brand}
                    </p>
                    <p className="line-clamp-2 text-[13.5px] leading-snug sm:text-[17px]" style={{ fontFamily: SERIF, color: P.cream, margin: "5px 0 0", overflowWrap: "anywhere" }}>
                      {it.name}
                    </p>
                    <p className="text-[11px] leading-snug tabular-nums sm:text-[12.5px]" style={{ color: P.mute, margin: "6px 0 0" }}>
                      {it.value}
                    </p>
                  </motion.div>
                </li>
              );
            })}
          </ol>
        </div>
      ) : null}

      <Ctas delay={1.9} />
      <Fade delay={2.1} className="mx-auto mt-12 grid max-w-[1080px] gap-10 text-left lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div role="note" aria-label="En bref" className="pl-5" style={{ borderLeft: `1px solid ${P.gold}` }}>
          <p className="text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.24em", color: P.gold, margin: 0 }}>
            En bref
          </p>
          <p className="text-[15.5px] leading-relaxed" style={{ color: P.mute, margin: "8px 0 0" }}>
            {answer}
          </p>
        </div>
        {shown.length ? (
          <dl className="grid grid-cols-2 gap-x-8 gap-y-5" style={{ margin: 0 }}>
            {shown.map((s) => (
              <div key={s.label} className="pt-3" style={{ borderTop: `1px solid ${P.line}` }}>
                <dt className="text-[10.5px] font-semibold uppercase" style={{ letterSpacing: "0.18em", color: P.faint }}>
                  {s.label}
                </dt>
                <dd style={{ fontFamily: SERIF, fontSize: 20, lineHeight: 1.25, margin: "6px 0 0", color: P.cream }}>{s.value}</dd>
              </div>
            ))}
          </dl>
        ) : null}
      </Fade>
    </Shell>
  );
}
