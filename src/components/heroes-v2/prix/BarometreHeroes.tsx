"use client";

import "./prix-v2.css";
import { useRef, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "motion/react";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/seo/Breadcrumbs";
import { DISPLAY, MONO, plexMono } from "./fonts";
import { CountTo, EASE, fr, typo, useAfter } from "./shared";

/* ==================================================================
   /subventions/logisvert et /subventions/logisvert/[marque] — « Baromètre ».
   Menthe #EAF5EE, forêt #0F3D2B, montants en vert #1A8F4E. Titre en
   linéale légère contre chiffres gras.
   - Index : barres horizontales du montant maximal par marque.
   - Marque : grand chiffre vert, puis la répartition des montants de
     ses modèles admissibles en histogramme.
   Les barres poussent en cascade. Tous les montants viennent de la
   liste officielle, calculés côté serveur par la page.
   ================================================================== */

const BG = "#EAF5EE";
const FOREST = "#0F3D2B";
const GREEN = "#1A8F4E";
const MUTE = "rgba(15,61,43,0.7)";
const LINE = "rgba(15,61,43,0.14)";

export type BaroStat = { label: string; value: string };

function Shell({ children, labelledBy }: { children: ReactNode; labelledBy: string }) {
  return (
    <section aria-labelledby={labelledBy} className={`${plexMono.variable} relative -mt-[93px] overflow-hidden min-[1700px]:-mt-[105px]`} style={{ background: BG, color: FOREST, fontFamily: DISPLAY }}>
      <div className="relative mx-auto max-w-[1440px] px-5 pb-16 pt-[128px] sm:px-8 lg:px-12 lg:pb-20 min-[1700px]:pt-[146px]">{children}</div>
    </section>
  );
}

function Top({ breadcrumbs, eyebrow }: { breadcrumbs: BreadcrumbItem[]; eyebrow: string }) {
  const reduce = !!useReducedMotion();
  return (
    <motion.div initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div className="pv2-crumbs -mt-1" style={{ "--c-link": MUTE, "--c-cur": FOREST, "--c-sep": "rgba(15,61,43,0.35)" } as CSSProperties}>
        <Breadcrumbs items={breadcrumbs} />
      </div>
      <p className="mt-5 flex items-end gap-3 text-[11.5px] font-medium uppercase" style={{ fontFamily: MONO, letterSpacing: "0.2em", color: GREEN, margin: "20px 0 0" }}>
        <span aria-hidden="true" className="flex items-end gap-[3px]">
          {[6, 10, 8, 13].map((h, k) => (
            <span key={k} className="block w-[3px]" style={{ height: h, background: GREEN }} />
          ))}
        </span>
        {typo(eyebrow)}
      </p>
    </motion.div>
  );
}

/** Titre : linéale légère, un segment en gras (et en vert si demandé). */
function Title({ id, lines, size }: { id: string; lines: Array<Array<{ t: string; bold?: boolean; green?: boolean }>>; size: string }) {
  const reduce = !!useReducedMotion();
  return (
    <h1 id={id} style={{ fontSize: size, lineHeight: 0.98, letterSpacing: "-0.045em", fontWeight: 300, margin: "18px 0 0" }}>
      {lines.map((segs, k) => (
        <span key={k} className="block overflow-hidden" style={{ paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
          <motion.span className="block" initial={reduce ? false : { y: "105%" }} animate={{ y: "0%" }} transition={{ duration: 1.05, ease: EASE, delay: 0.12 + k * 0.1 }}>
            {segs.map((s, j) => (
              <span key={j} style={{ fontWeight: s.bold ? 700 : 300, color: s.green ? GREEN : undefined }}>
                {typo(s.t)}
              </span>
            ))}
            {k < lines.length - 1 ? " " : null}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}

function Actions({ delay = 0.7 }: { delay?: number }) {
  const reduce = !!useReducedMotion();
  return (
    <motion.div initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: EASE, delay }}>
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <Link href="/trouver-ma-thermopompe" className="pv2-btn-forest inline-flex items-center gap-3 rounded-[10px] px-6 py-4 text-[15px] font-semibold" style={{ background: FOREST, color: BG }}>
          Trouver ma thermopompe en 2 min
          <span aria-hidden="true" style={{ color: "#7FD3A2" }}>
            →
          </span>
        </Link>
        <a href="tel:4389003224" className="inline-flex items-center gap-2.5 rounded-[10px] px-5 py-4 text-[15px] font-semibold transition-colors hover:bg-white/60" style={{ border: `1.5px solid ${FOREST}`, color: FOREST }}>
          <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
          </svg>
          438-900-3224
        </a>
      </div>
      <p className="text-[13px]" style={{ color: MUTE, margin: "12px 0 0" }}>
        Gratuit, sans engagement. Un installateur licencié RBQ vous rappelle.
      </p>
    </motion.div>
  );
}

function Readouts({ items, cols, delay }: { items: BaroStat[]; cols: string; delay: number }) {
  const reduce = !!useReducedMotion();
  if (!items.length) return null;
  return (
    <motion.dl className={`m-0 grid ${cols}`} style={{ borderTop: `1.5px solid ${FOREST}` }} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay }}>
      {items.map((s) => (
        <div key={s.label} className="flex flex-col gap-1 py-3 pr-4" style={{ borderBottom: `1px solid ${LINE}` }}>
          <dt className="order-2 text-[10.5px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: MUTE }}>
            {typo(s.label)}
          </dt>
          <dd className="order-1 m-0 whitespace-nowrap text-[22px] font-semibold tabular-nums sm:text-[24px]" style={{ letterSpacing: "-0.03em" }}>
            {typo(s.value)}
          </dd>
        </div>
      ))}
    </motion.dl>
  );
}

function Fade({ children, delay, className }: { children: ReactNode; delay: number; className?: string }) {
  const reduce = !!useReducedMotion();
  return (
    <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: EASE, delay }}>
      {children}
    </motion.div>
  );
}

/** Pas d'axe « rond » : 500, 1 000 ou 2 000 $. */
function axisMax(max: number) {
  const step = max > 8000 ? 2000 : max > 3000 ? 1000 : 500;
  return { step, top: Math.max(step, Math.ceil(max / step) * step) };
}

/* ==================================================================
   Index : montant maximal par marque
   ================================================================== */

export type BaroBrand = { slug: string; name: string; max: number; models: number };

export function BarometreIndexHero({ intro, breadcrumbs, updated, brands, stats }: { intro: string; breadcrumbs: BreadcrumbItem[]; updated: string | null; brands: BaroBrand[]; stats: BaroStat[] }) {
  return (
    <Shell labelledBy="bi-titre">
      <div className="grid gap-14 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-16">
        <div className="min-w-0">
          <Top breadcrumbs={breadcrumbs} eyebrow="Subvention Hydro-Québec" />
          <Title
            id="bi-titre"
            size="clamp(42px, 4.9vw, 84px)"
            lines={[[{ t: "Subvention " }, { t: "LogisVert", bold: true }], [{ t: "par marque", bold: true, green: true }, { t: " de thermopompe" }]]}
          />
          <Fade delay={0.5}>
            <p className="max-w-[560px] text-[17px] leading-[1.65]" style={{ color: MUTE, margin: "24px 0 0" }}>
              {typo(intro)}
            </p>
          </Fade>
          <Actions delay={0.65} />
          <div className="mt-10 max-w-[520px]">
            <Readouts items={stats} cols="grid-cols-2" delay={0.9} />
          </div>
        </div>
        {brands.length > 0 && (
          <div className="min-w-0 lg:pt-4">
            <BrandBars brands={brands} updated={updated} />
          </div>
        )}
      </div>
    </Shell>
  );
}

function BrandBars({ brands, updated }: { brands: BaroBrand[]; updated: string | null }) {
  const reduce = !!useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  const grow = inView || reduce;
  const { step, top } = axisMax(Math.max(...brands.map((b) => b.max)));
  const ticks = Array.from({ length: top / step + 1 }, (_, k) => k * step);
  const cols = "grid-cols-[104px_minmax(0,1fr)_64px] sm:grid-cols-[136px_minmax(0,1fr)_72px_64px]";

  return (
    <figure ref={ref} className="m-0">
      <figcaption className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 pb-3 text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.14em", color: MUTE, borderBottom: `1.5px solid ${FOREST}` }}>
        <span style={{ color: FOREST, fontWeight: 600 }}>Montant maximal par marque</span>
        {updated && <span>Liste du {updated}</span>}
      </figcaption>
      <div className={`grid ${cols} gap-x-3 pt-3 text-[10px] uppercase`} style={{ fontFamily: MONO, letterSpacing: "0.1em", color: MUTE }}>
        <span>Marque</span>
        <span />
        <span className="text-right">Maximum</span>
        <span className="hidden text-right sm:block">Modèles</span>
      </div>
      <div className="relative mt-1">
        {/* Repères verticaux */}
        <div aria-hidden="true" className={`pointer-events-none absolute inset-0 grid ${cols} gap-x-3`}>
          <span />
          <span className="relative">
            {ticks.map((t) => (
              <span key={t} className="absolute bottom-0 top-0 w-px" style={{ left: `${(t / top) * 100}%`, background: t === 0 ? "rgba(15,61,43,0.35)" : LINE }} />
            ))}
          </span>
        </div>
        <ol className="relative m-0 list-none p-0">
          {brands.map((b, k) => (
            <li key={b.slug}>
              <Link
                href={`/subventions/logisvert/${b.slug}`}
                className={`pv2-bar-row grid ${cols} items-center gap-x-3 rounded-[4px] py-[5px]`}
                aria-label={`${b.name} : jusqu’à ${fr(b.max)} $, ${b.models} modèles admissibles`}
              >
                <span className="truncate text-[13.5px] font-medium sm:text-[14px]">{b.name}</span>
                <span className="relative h-[13px]">
                  <motion.span
                    className="pv2-bar-fill absolute inset-y-0 left-0 block origin-left rounded-r-[2px]"
                    style={{ width: `${(b.max / top) * 100}%`, background: GREEN, transition: "background-color .25s" }}
                    initial={reduce ? false : { scaleX: 0 }}
                    animate={{ scaleX: grow ? 1 : 0 }}
                    transition={{ duration: 1, ease: EASE, delay: 0.25 + k * 0.055 }}
                  />
                </span>
                <span className="text-right text-[13px] font-semibold tabular-nums" style={{ fontFamily: MONO, color: GREEN }}>
                  <CountTo value={b.max} play={grow} duration={1} />
                  &nbsp;$
                </span>
                <span className="hidden text-right text-[12px] tabular-nums sm:block" style={{ fontFamily: MONO, color: MUTE }}>
                  {b.models}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </div>
      <div className={`mt-1 grid ${cols} gap-x-3`} aria-hidden="true">
        <span />
        <span className="relative h-4 text-[10px] tabular-nums" style={{ fontFamily: MONO, color: MUTE }}>
          {ticks.map((t, k) => (
            <span
              key={t}
              className={`absolute top-0 whitespace-nowrap ${k % 2 && ticks.length > 5 ? "hidden sm:inline" : ""}`}
              style={{ left: `${(t / top) * 100}%`, transform: k === 0 ? "none" : "translateX(-50%)" }}
            >
              {t === 0 ? "0" : `${t / 1000} k$`}
            </span>
          ))}
        </span>
      </div>
    </figure>
  );
}

/* ==================================================================
   Marque : grand chiffre et répartition des montants
   ================================================================== */

export type BaroModel = { name: string; sub: string; amount: number };

export function BarometreBrandHero({
  brand,
  intro,
  answer,
  breadcrumbs,
  min,
  max,
  amounts,
  top,
  stats,
}: {
  brand: string;
  intro: string;
  answer: string;
  breadcrumbs: BreadcrumbItem[];
  min: number;
  max: number;
  amounts: number[];
  top: BaroModel[];
  stats: BaroStat[];
}) {
  const play = useAfter(900);
  return (
    <Shell labelledBy="bm-titre">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
        <div className="min-w-0">
          <Top breadcrumbs={breadcrumbs} eyebrow="Subvention Hydro-Québec" />
          <Title
            id="bm-titre"
            size="clamp(46px, 5.6vw, 96px)"
            lines={[[{ t: "Subvention" }], [{ t: "LogisVert ", bold: true }, { t: brand, bold: true, green: true }]]}
          />
          <Fade delay={0.5}>
            <p className="max-w-[600px] text-[17px] leading-[1.65]" style={{ color: MUTE, margin: "24px 0 0" }}>
              {typo(intro)}
            </p>
          </Fade>
          <Actions delay={0.65} />
        </div>

        {/* Grand chiffre */}
        <Fade delay={0.35} className="min-w-0 lg:pt-[92px]">
          <p className="text-[12px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.18em", color: MUTE, margin: 0 }}>
            {brand} · jusqu’à
          </p>
          <p className="whitespace-nowrap" style={{ margin: "6px 0 0", color: GREEN, fontSize: "clamp(76px, 9.4vw, 158px)", fontWeight: 700, letterSpacing: "-0.06em", lineHeight: 0.9 }}>
            <CountTo value={max} play={play} duration={1.8} />
            <span style={{ fontSize: "0.42em", fontWeight: 600, marginLeft: "0.12em", letterSpacing: "-0.02em" }}>$</span>
          </p>
          <p className="text-[15px]" style={{ margin: "14px 0 0", color: FOREST }}>
            de <strong className="tabular-nums">{fr(min)}&nbsp;$</strong> à <strong className="tabular-nums">{fr(max)}&nbsp;$</strong> selon l’appariement certifié AHRI
          </p>
          {top.length > 0 && (
            <ol className="m-0 mt-6 max-w-[460px] list-none p-0" style={{ borderTop: `1.5px solid ${FOREST}` }}>
              {top.map((m) => (
                <li key={`${m.name}-${m.sub}`} className="flex items-baseline justify-between gap-4 py-2" style={{ borderBottom: `1px solid ${LINE}` }}>
                  <span className="min-w-0 truncate text-[13.5px]">
                    <span className="font-semibold">{m.name}</span>
                    {m.sub && m.sub !== m.name ? <span style={{ color: MUTE, fontFamily: MONO, fontSize: 12 }}> · {m.sub}</span> : null}
                  </span>
                  <span className="shrink-0 text-[13.5px] font-semibold tabular-nums" style={{ fontFamily: MONO, color: GREEN }}>
                    {fr(m.amount)}&nbsp;$
                  </span>
                </li>
              ))}
            </ol>
          )}
        </Fade>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-16">
        {answer ? (
          <Fade delay={0.8} className="min-w-0">
            <div role="note" aria-label="En bref" className="rounded-[4px] bg-white/70 px-5 py-4" style={{ borderLeft: `3px solid ${GREEN}` }}>
              <p className="text-[11px] font-semibold uppercase" style={{ fontFamily: MONO, letterSpacing: "0.2em", color: GREEN, margin: 0 }}>
                En bref
              </p>
              <p className="text-[15px] leading-relaxed" style={{ margin: "6px 0 0" }}>
                {typo(answer)}
              </p>
            </div>
          </Fade>
        ) : (
          <span />
        )}
        <div className="min-w-0">
          {amounts.length > 0 && <Histogram amounts={amounts} />}
          <div className="mt-6">
            <Readouts items={stats} cols="grid-cols-2 sm:grid-cols-4" delay={1.1} />
          </div>
        </div>
      </div>
    </Shell>
  );
}

function Histogram({ amounts }: { amounts: number[] }) {
  const reduce = !!useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  const grow = inView || reduce;
  const max = Math.max(...amounts);
  // Tranches : la plus fine qui donne au plus 24 colonnes.
  const step = [100, 200, 250, 500, 1000, 2000].find((s) => Math.ceil((max + 1) / s) <= 24) ?? 2000;
  const nBins = Math.max(1, Math.ceil((max + 1) / step));
  const bins = Array.from({ length: nBins }, () => 0);
  for (const a of amounts) bins[Math.min(nBins - 1, Math.floor(a / step))] += 1;
  const peak = Math.max(...bins);
  const peakAt = bins.indexOf(peak);
  const every = step >= 1000 ? 1 : Math.round(1000 / step);

  return (
    <figure ref={ref} className="m-0">
      <figcaption className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 pb-3 text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.14em", color: MUTE, borderBottom: `1px solid ${LINE}` }}>
        <span style={{ color: FOREST, fontWeight: 600 }}>Répartition des {amounts.length} modèles admissibles</span>
        <span>tranches de {fr(step)}&nbsp;$</span>
      </figcaption>
      <div className="relative mt-4 flex h-[150px] items-end gap-[3px] sm:h-[170px] sm:gap-1" style={{ borderBottom: `1.5px solid ${FOREST}` }}>
        {bins.map((c, k) => (
          <div
            key={k}
            className="pv2-col relative flex h-full min-w-0 flex-1 items-end"
            title={`${c} modèle${c > 1 ? "s" : ""} de ${fr(k * step)} $ à ${fr((k + 1) * step - 1)} $`}
          >
            {k === peakAt && c > 0 && (
              <motion.span
                aria-hidden="true"
                className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] font-semibold tabular-nums"
                style={{ bottom: `calc(${(c / peak) * 100}% + 4px)`, fontFamily: MONO, color: FOREST }}
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: grow ? 1 : 0 }}
                transition={{ duration: 0.5, delay: 0.5 + nBins * 0.04 }}
              >
                {c}
              </motion.span>
            )}
            <motion.span
              className="pv2-col-fill block w-full origin-bottom rounded-t-[2px]"
              style={{ height: c ? `${Math.max(3, (c / peak) * 100)}%` : 0, background: GREEN, transition: "background-color .25s" }}
              initial={reduce ? false : { scaleY: 0 }}
              animate={{ scaleY: grow ? 1 : 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.2 + k * 0.04 }}
            />
          </div>
        ))}
      </div>
      <div aria-hidden="true" className="relative mt-1.5 h-4 text-[10px] tabular-nums" style={{ fontFamily: MONO, color: MUTE }}>
        {Array.from({ length: nBins + 1 }, (_, k) => k)
          .filter((k) => k % every === 0)
          .map((k) => (
            <span key={k} className="absolute top-0 whitespace-nowrap" style={{ left: `${(k / nBins) * 100}%`, transform: k === 0 ? "none" : k === nBins ? "translateX(-100%)" : "translateX(-50%)" }}>
              {k === 0 ? "0 $" : `${fr((k * step) / 1000)} k$`}
            </span>
          ))}
      </div>
      <p className="sr-only">
        Nombre de modèles par tranche de {fr(step)} $ : {bins.map((c, k) => `${fr(k * step)} $ : ${c}`).join(" ; ")}.
      </p>
    </figure>
  );
}
