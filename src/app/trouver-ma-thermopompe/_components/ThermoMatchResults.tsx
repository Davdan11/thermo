"use client";

import "./results.css";
import "@/components/home/premium/sections.css";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { Snowfall } from "@/components/home/Snowfall";
import { AirLines, CountUp } from "@/components/home/premium/shared";
import type { SavingsEstimate } from "@/lib/thermomatch/savings";
import { SavingsBand } from "./SavingsBand";
import { ExistingUnitCompare } from "./ExistingUnitCompare";
import { EmailMyChoices } from "./EmailMyChoices";

/* ==================================================================
   ThermoMatch — écran des trois recommandations (version premium).
   1. En-tête : neige, titre révélé, charge estimée qui défile et
      entonnoir « machines évaluées → bon calibre → retenues ».
   2. Trois cartes (le meilleur choix au centre, surélevé) : score,
      photo, part de la maison couverte à -15 °C, chiffres certifiés,
      étiquettes « le plus efficace… » calculées entre les trois.
   3. « Ce qui les distingue » : barres critère par critère.
   4. Prochaine étape : la soumission, avec une barre fixe sur mobile.
   Mêmes données et mêmes props qu'avant (parcours normal et lien
   partagé). Valeur absente = N/D, jamais inventée.
   ================================================================== */

interface SummaryContext {
  estimatedLoadBtu: number;
  targetBtu: number;
  floors: number;
  requestedZones: number;
  isMultiZone: boolean;
  heatedAreaFt2: number;
  climateZone?: string | null;
  region?: string | null;
  uncertaintyPct?: number;
  loadFactors?: Record<string, number>;
  weights?: Record<string, number>;
  notices?: string[];
  candidatesEvaluated?: number;
  candidatesRetained?: number;
  logisVertUpdatedAt?: string | null;
  /** Économies de chauffage estimées (plinthes électriques seulement). */
  savings?: SavingsEstimate | null;
}

interface ThermoMatchResultsProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  results: any[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSelectResult: (result: any) => void;
  onRetry: () => void;
  summaryContext?: SummaryContext | null;
}

const C = {
  ink: "#0A1419",
  panel: "#10222D",
  cream: "#F4EFE7",
  paper: "#FBF8F3",
  orange: "#E54B17",
  orangeText: "#C23F12",
  /** Vert des montants LogisVert (lisible sur le fond papier). */
  green: "#1A8F4E",
  mute: "rgba(244,239,231,0.66)",
  faint: "rgba(244,239,231,0.42)",
  line: "rgba(244,239,231,0.12)",
  inkMute: "rgba(10,20,25,0.58)",
  inkLine: "rgba(10,20,25,0.1)",
};
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const DISPLAY = "var(--font-display), var(--font-sans), sans-serif";
const fr = (n: number, d = 0) => n.toLocaleString("fr-CA", { minimumFractionDigits: d, maximumFractionDigits: d });
const money = (n: number) => `${fr(Math.round(n / 50) * 50)} $`;
const temp = (v: number) => `${v < 0 ? "\u2212" : v > 0 ? "+" : ""}${fr(Math.abs(v))} °C`;

type MetricKey = "minTemp" | "h5" | "hspf2" | "seer2" | "cop5" | "subsidy";
const METRICS: { key: MetricKey; label: string; unit: string; d: number; tag: string; lower?: boolean }[] = [
  { key: "minTemp", label: "Chauffe jusqu’à", unit: "Température extérieure minimale publiée par le fabricant", d: 0, tag: "Chauffe par le plus grand froid", lower: true },
  { key: "h5", label: "Chaleur à −15 °C", unit: "BTU/h, certifiée ENERGY STAR", d: 0, tag: "Le plus puissant au grand froid" },
  { key: "hspf2", label: "Efficacité en chauffage", unit: "HSPF2", d: 1, tag: "Le plus efficace" },
  { key: "seer2", label: "Efficacité en climatisation", unit: "SEER2", d: 1, tag: "Le meilleur en été" },
  { key: "cop5", label: "Rendement à −15 °C", unit: "COP", d: 2, tag: "Le meilleur rendement au froid" },
  { key: "subsidy", label: "Subvention LogisVert", unit: "Montant officiel pour cet appariement", d: 0, tag: "La plus grosse subvention" },
];

type Card = {
  key: string;
  badge: string;
  score: number | null;
  brand: string;
  series: string;
  outdoor: string;
  img: string;
  ownImage: boolean;
  coldClimate: boolean;
  h5: number | null;
  h5Certified: boolean;
  hspf2: number | null;
  seer2: number | null;
  cop5: number | null;
  subsidy: number;
  coverage: number | null;
  /** Capacité à -15 °C / capacité nominale. */
  retention: number | null;
  /** Température extérieure minimale de chauffage (fabricant), si connue. */
  minTemp: number | null;
  price: { min: number; max: number; basis: string; sources: number; tierLabel: string; matchLabel: string } | null;
  reasons: string[];
  warnings: string[];
  architectureNote: string | null;
  alsoSoldAs: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  raw: any;
};

const FALLBACK = {
  central: "/images/categorie-centrale-samsung-hd.webp",
  multi: "/images/categorie-multizone-mitsubishi-electric-hd.webp",
  wall: "/images/categorie-murale-daikin-hd.webp",
};

const num = (v: unknown): number | null => (typeof v === "number" && Number.isFinite(v) ? v : null);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toCard(r: any, i: number, ctx?: SummaryContext | null): Card {
  const p = r?.product ?? {};
  const sp = r?.selectedPairing ?? {};
  const h5 = num(p.heatingCapacity5FBtuH?.min);
  const load = num(ctx?.estimatedLoadBtu);
  return {
    key: String(p.id ?? i),
    badge: r?.badge ?? (i === 0 ? "Meilleur choix" : "Alternative"),
    score: num(r?.score),
    brand: p.brand ?? "",
    series: p.series ?? "",
    outdoor: p.outdoorModel ?? "",
    img: p.imageUrl || (p.systemType === "central" ? FALLBACK.central : ctx?.isMultiZone ? FALLBACK.multi : FALLBACK.wall),
    ownImage: Boolean(p.imageUrl),
    coldClimate: Boolean(p.coldClimate),
    h5,
    h5Certified: p.h5Certified !== false,
    hspf2: num(sp.hspf2?.min),
    seer2: num(sp.seer2?.min),
    cop5: num(sp.cop5F?.min),
    subsidy: num(r?.subsidyEstimate) ?? 0,
    coverage: num(r?.fitRatio) ?? (h5 && load ? h5 / load : null),
    retention: h5 && num(p.nominalBtu) ? h5 / (p.nominalBtu as number) : null,
    minTemp: num(p.minOperatingTempC),
    price: r?.priceRange && num(r.priceRange.min) != null && num(r.priceRange.max) != null ? r.priceRange : null,
    reasons: r?.clientReasons ?? r?.reasons ?? [],
    warnings: r?.warnings ?? [],
    architectureNote: r?.architectureNote ?? null,
    alsoSoldAs: p.alsoSoldAs ?? [],
    raw: r,
  };
}

const valueOf = (c: Card, k: MetricKey): number | null => (k === "subsidy" ? (c.subsidy > 0 ? c.subsidy : null) : c[k]);

function leadersFor(cards: Card[], k: MetricKey, lower = false): number[] {
  const vals = cards.map((c) => valueOf(c, k));
  // Critère « plus bas = meilleur » (température minimale) : on ne désigne un meilleur que si les trois sont connus.
  if (lower && vals.some((v) => v == null)) return [];
  const best = lower ? Math.min(...vals.map((v) => v ?? Infinity)) : Math.max(...vals.map((v) => v ?? -Infinity));
  if (!Number.isFinite(best)) return [];
  return vals.flatMap((v, i) => (v === best ? [i] : []));
}

/* ------------------------------------------------------------------ */

export function ThermoMatchResults({ results, onSelectResult, onRetry, summaryContext }: ThermoMatchResultsProps) {
  if (!results || results.length === 0) return <Empty onRetry={onRetry} />;

  const cards = results.slice(0, 3).map((r, i) => toCard(r, i, summaryContext));
  const leaders = Object.fromEntries(METRICS.map((m) => [m.key, leadersFor(cards, m.key, m.lower)])) as Record<MetricKey, number[]>;
  const top = cards[0];

  return (
    <div className="w-full" style={{ fontFamily: DISPLAY, color: C.cream }}>
      <Intro ctx={summaryContext ?? null} kept={cards.length} />

      <div className="mx-auto mt-10 grid max-w-[1320px] grid-cols-1 gap-5 lg:mt-16 lg:grid-cols-[1fr_1.12fr_1fr]">
        {cards.map((c, i) => (
          <ResultCard
            key={c.key}
            card={c}
            i={i}
            tags={METRICS.filter((m) => leaders[m.key].length === 1 && leaders[m.key][0] === i).map((m) => m.tag)}
            leads={METRICS.filter((m) => leaders[m.key].includes(i)).map((m) => m.key)}
            onSelect={() => onSelectResult(c.raw)}
          />
        ))}
      </div>

      {summaryContext?.savings ? <SavingsBand s={summaryContext.savings} /> : null}
      <ExistingUnitCompare choices={cards.map((c) => ({ key: c.key, brand: c.brand, series: c.series, hspf2: c.hspf2 }))} />
      <Distinctions cards={cards} leaders={leaders} />
      {summaryContext && <HowItWorks ctx={summaryContext} />}
      <EmailMyChoices topLabel={`${top.brand} ${top.series}`.trim()} />
      <NextStep top={top} onSelect={() => onSelectResult(top.raw)} />

      <div className="mx-auto mt-10 flex max-w-[1320px] flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[14px]">
        <Link href="/comparer" className="font-semibold underline-offset-4 hover:underline" style={{ color: C.cream }}>
          Comparer ces modèles en détail →
        </Link>
        <button type="button" onClick={onRetry} className="transition-colors hover:text-white" style={{ color: C.faint }}>
          Recommencer le questionnaire
        </button>
      </div>

      <MobileBar top={top} onSelect={() => onSelectResult(top.raw)} />
    </div>
  );
}

/* ---------------------------- En-tête ---------------------------- */

function Intro({ ctx, kept }: { ctx: SummaryContext | null; kept: number }) {
  const [play, setPlay] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setPlay(true), 700);
    return () => window.clearTimeout(t);
  }, []);
  const facts = ctx
    ? [`${fr(ctx.heatedAreaFt2)} pi²`, ctx.floors > 1 ? `${ctx.floors} étages` : "1 étage", ctx.region ?? null, ctx.isMultiZone ? `${ctx.requestedZones} zones` : null].filter(Boolean)
    : [];

  return (
    <header className="relative mx-auto max-w-[1320px] overflow-hidden rounded-[32px]" style={{ background: C.panel, border: `1px solid ${C.line}` }}>
      <Snowfall className="pointer-events-none absolute inset-0 h-full w-full" density={0.5} />
      <div className="relative px-6 pb-10 pt-12 sm:px-12 lg:px-16 lg:pb-14 lg:pt-16">
        <Fade delay={0.05} className="flex flex-wrap items-center gap-3 text-[12px] font-medium uppercase" style={{ letterSpacing: "0.2em", color: C.mute }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo-thermomatch-nav.webp" alt="ThermoMatch" width={118} height={16} style={{ width: 118, height: 16, maxWidth: "none", display: "block" }} />
          <span aria-hidden="true" className="h-3 w-px" style={{ background: C.line }} />
          Analyse terminée
        </Fade>

        <h2 style={{ fontSize: "clamp(38px, 5.4vw, 88px)", lineHeight: 0.95, letterSpacing: "-0.045em", fontWeight: 600, margin: "28px 0 0" }}>
          <Line i={0}>Vos trois thermopompes,</Line>
          <Line i={1}>
            <span className="tm-serif">calibrées pour votre maison.</span>
          </Line>
        </h2>

        {ctx && (
          <Fade delay={0.5} className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex flex-wrap gap-2">
                {facts.map((f) => (
                  <span key={String(f)} className="rounded-full px-3.5 py-1.5 text-[13px] font-medium" style={{ border: `1px solid ${C.line}`, color: C.mute }}>
                    {f}
                  </span>
                ))}
              </div>
              <p className="text-[15px]" style={{ color: C.mute, margin: "22px 0 0" }}>
                Charge de chauffage estimée à −15 °C
              </p>
              <p className="flex items-baseline gap-3" style={{ margin: "6px 0 0" }}>
                <span style={{ fontSize: "clamp(40px, 4.4vw, 64px)", fontWeight: 600, letterSpacing: "-0.05em", lineHeight: 1 }}>
                  <CountUp value={Math.round(ctx.estimatedLoadBtu)} play={play} />
                </span>
                <span className="text-[16px]" style={{ color: C.mute }}>
                  BTU/h{typeof ctx.uncertaintyPct === "number" ? ` · ±${ctx.uncertaintyPct} %` : ""}
                </span>
              </p>
            </div>
            {typeof ctx.candidatesEvaluated === "number" && <Funnel evaluated={ctx.candidatesEvaluated} retained={ctx.candidatesRetained ?? 0} kept={kept} play={play} />}
          </Fade>
        )}
      </div>
    </header>
  );
}

/* Entonnoir : de toutes les machines du catalogue aux trois retenues. */
function Funnel({ evaluated, retained, kept, play }: { evaluated: number; retained: number; kept: number; play: boolean }) {
  const rows = [
    { n: evaluated, l: "machines évaluées", w: 1, hot: false },
    { n: retained, l: "de bon calibre pour votre maison", w: evaluated ? Math.max(retained / evaluated, 0.05) : 0.5, hot: false },
    { n: kept, l: "retenues pour vous", w: 0.04, hot: true },
  ];
  return (
    <div className="w-full max-w-[480px]">
      {rows.map((r, i) => (
        <div key={r.l} className="grid grid-cols-[84px_1fr] items-center gap-4 py-1.5">
          <span className="text-right text-[22px] font-semibold tabular-nums" style={{ letterSpacing: "-0.03em", color: r.hot ? C.orange : C.cream }}>
            <CountUp value={r.n} play={play} />
          </span>
          <div>
            <div className="h-[6px] overflow-hidden rounded-full" style={{ background: C.line }}>
              <motion.div
                className="h-full origin-left rounded-full"
                style={{ background: r.hot ? C.orange : "rgba(244,239,231,0.55)", width: `${r.w * 100}%` }}
                initial={{ scaleX: 0 }}
                animate={play ? { scaleX: 1 } : undefined}
                transition={{ duration: 1.1, ease: EASE, delay: 0.2 + i * 0.35 }}
              />
            </div>
            <p className="text-[12px]" style={{ color: C.faint, margin: "5px 0 0" }}>
              {r.l}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ----------------------------- Cartes ----------------------------- */

function ResultCard({ card, i, tags, leads, onSelect }: { card: Card; i: number; tags: string[]; leads: MetricKey[]; onSelect: () => void }) {
  const top = i === 0;
  const reduce = !!useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });
  const [open, setOpen] = useState(false);
  const order = i === 0 ? "lg:order-2" : i === 1 ? "lg:order-1" : "lg:order-3";
  const cov = card.coverage != null ? Math.round(card.coverage * 100) : null;
  const stats: { k: MetricKey; label: string; v: number | null; d: number; unit: string }[] = [
    { k: "h5", label: "À −15 °C", v: card.h5, d: 0, unit: card.h5 && !card.h5Certified ? "BTU/h (estimé)" : "BTU/h" },
    { k: "hspf2", label: "HSPF2", v: card.hspf2, d: 1, unit: "chauffage" },
    { k: "seer2", label: "SEER2", v: card.seer2, d: 1, unit: "climatisation" },
    { k: "subsidy", label: "LogisVert", v: card.subsidy > 0 ? card.subsidy : null, d: 0, unit: "$ officiels" },
  ];
  const shown = card.reasons.slice(0, 2);
  const more = card.reasons.slice(2);

  return (
    <motion.article
      ref={ref}
      className={`relative flex flex-col overflow-hidden rounded-[28px] ${order} ${top ? "lg:-my-5" : ""}`}
      style={{
        background: C.paper,
        color: C.ink,
        boxShadow: top ? "0 0 0 2px #E54B17, 0 50px 100px -45px rgba(229,75,23,0.65)" : "0 40px 80px -50px rgba(0,0,0,0.75)",
      }}
      initial={reduce ? false : { opacity: 0, y: 70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.1, ease: EASE, delay: 0.35 + i * 0.15 }}
    >
      {top && !reduce && <span aria-hidden="true" className="tm-sheen" />}

      <div className="flex items-start justify-between gap-4 px-6 pt-6 sm:px-7 sm:pt-7">
        <span
          className="rounded-full px-3.5 py-1.5 text-[11.5px] font-bold uppercase"
          style={{ letterSpacing: "0.14em", background: top ? C.orange : "transparent", color: top ? "#fff" : C.ink, border: top ? "none" : `1px solid ${C.inkLine}` }}
        >
          {card.badge}
        </span>
        {card.score != null && (
          <div className="text-right leading-none">
            <span className="text-[34px] font-semibold tabular-nums" style={{ letterSpacing: "-0.05em", color: top ? C.orange : C.ink }}>
              <CountUp value={Math.round(card.score)} play={inView} />
            </span>
            <span className="text-[13px] font-semibold" style={{ color: C.inkMute }}>
              /100
            </span>
            <p className="text-[10.5px] font-semibold uppercase" style={{ letterSpacing: "0.16em", color: C.inkMute, margin: "6px 0 0" }}>
              Score ThermoMatch
            </p>
          </div>
        )}
      </div>

      <div className="px-6 pt-5 sm:px-7">
        <h3 style={{ fontSize: top ? 34 : 30, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1, margin: 0 }}>{card.brand}</h3>
        <p className="text-[14px] font-medium" style={{ color: C.inkMute, margin: "8px 0 0" }}>
          {[card.series && `Série ${card.series}`, card.outdoor].filter(Boolean).join(" · ")}
        </p>
        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="rounded-full px-3 py-1 text-[12px] font-semibold" style={{ background: "rgba(229,75,23,0.1)", color: C.orangeText }}>
                {t}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Par grand froid : ce que les acheteurs regardent en premier. */}
      <div className="mx-6 mt-5 rounded-[18px] px-4 pb-4 pt-3.5 sm:mx-7" style={{ background: C.ink, color: C.cream }}>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[10.5px] font-semibold uppercase" style={{ letterSpacing: "0.16em", color: C.faint, margin: 0 }}>
              Par grand froid
            </p>
            <p style={{ fontSize: card.minTemp != null ? 26 : 24, fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1.05, margin: "8px 0 0" }}>
              {card.minTemp != null ? (
                <>Chauffe jusqu’à {temp(card.minTemp)}</>
              ) : card.h5 != null ? (
                <>
                  {fr(card.h5)} BTU/h
                  <span className="block text-[13px] font-medium" style={{ color: C.mute, letterSpacing: "0", marginTop: 5 }}>
                    livrés à −15 °C
                  </span>
                </>
              ) : (
                "Données du fabricant"
              )}
            </p>
          </div>
          {card.retention != null && (
            <div className="shrink-0 text-right">
              <p className="tabular-nums" style={{ fontSize: 24, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1, color: C.orange, margin: 0 }}>
                {/* Plafonné à 120 %, comme dans les raisons du moteur (explain.ts), pour que la carte ne se contredise pas. */}
                <CountUp value={Math.round(Math.min(card.retention, 1.2) * 100)} play={inView} /> %
              </p>
              <p className="text-[10.5px] leading-tight" style={{ color: C.faint, margin: "4px 0 0" }}>
                de sa puissance nominale
                <br />à −15 °C
              </p>
            </div>
          )}
        </div>
        <ColdGauge value={card.minTemp ?? -15} known={card.minTemp != null} play={inView} delay={0.5 + i * 0.1} />
        <p className="text-[11px] leading-snug" style={{ color: C.faint, margin: "8px 0 0" }}>
          {card.minTemp != null
            ? "Température extérieure minimale publiée par le fabricant."
            : card.coldClimate
              ? "Capacité certifiée ENERGY STAR climat froid. Température minimale de fonctionnement : sur la fiche du fabricant."
              : "Température minimale de fonctionnement : sur la fiche du fabricant."}
        </p>
      </div>

      {/* Scène de l'appareil */}
      <div className="relative mx-6 mt-5 h-[170px] overflow-hidden rounded-[20px] sm:mx-7 sm:h-[190px]" style={{ background: card.ownImage ? "#fff" : C.ink }}>
        {card.ownImage ? (
          <div className="tm-float absolute inset-0" style={{ animationDelay: `${i * -2}s` }}>
            <Image src={card.img} alt={`${card.brand} ${card.outdoor}`} fill sizes="(min-width: 1024px) 380px, 90vw" style={{ objectFit: "contain", padding: 18 }} />
          </div>
        ) : (
          /* Pas de photo officielle : on n'affiche pas l'appareil d'une autre marque. */
          <>
            <Snowfall className="pointer-events-none absolute inset-0 h-full w-full" density={0.7} />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center" style={{ color: C.cream }}>
              <span style={{ fontSize: 42, fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 1 }}>{card.brand}</span>
              <span className="text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.18em", color: C.faint, marginTop: 10 }}>
                Photo officielle à venir
              </span>
            </div>
          </>
        )}
        {card.coldClimate && (
          <span className="absolute left-3 top-3 rounded-full px-2.5 py-1 text-[10.5px] font-bold uppercase" style={{ letterSpacing: "0.12em", background: C.ink, color: C.cream }}>
            Climat froid
          </span>
        )}
      </div>

      {/* Part de la maison couverte à -15 °C */}
      {cov != null && (
        <div className="px-6 pt-5 sm:px-7">
          <div className="flex items-baseline justify-between text-[13px]">
            <span className="font-semibold">Votre maison couverte à −15 °C</span>
            <span className="font-semibold tabular-nums">
              <CountUp value={cov} play={inView} /> %
            </span>
          </div>
          <div className="relative mt-2 h-2 rounded-full" style={{ background: C.inkLine }}>
            <motion.div
              className="h-full origin-left rounded-full"
              style={{ width: `${Math.min(cov, 120) / 1.2}%`, background: top ? C.orange : "rgba(10,20,25,0.55)" }}
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : undefined}
              transition={{ duration: 1.3, ease: EASE, delay: 0.6 + i * 0.1 }}
            />
            <span aria-hidden="true" className="absolute top-[-4px] h-4 w-px" style={{ left: `${100 / 1.2}%`, background: C.ink }} />
          </div>
          <p className="text-[11.5px]" style={{ color: C.inkMute, margin: "6px 0 0" }}>
            {cov >= 100 ? "Couvre toute la charge estimée, même au plus froid." : "Le chauffage d’appoint complète lors des grands froids."}
          </p>
        </div>
      )}

      {/* Chiffres certifiés */}
      <dl className="mx-6 mt-5 grid grid-cols-2 overflow-hidden rounded-[18px] sm:mx-7" style={{ border: `1px solid ${C.inkLine}`, margin: undefined }}>
        {stats.map((s, si) => {
          const lead = leads.includes(s.k);
          return (
            <div key={s.k} className="px-4 py-3.5" style={{ borderLeft: si % 2 ? `1px solid ${C.inkLine}` : "none", borderTop: si > 1 ? `1px solid ${C.inkLine}` : "none" }}>
              <dt className="text-[10.5px] font-semibold uppercase" style={{ letterSpacing: "0.14em", color: C.inkMute }}>
                {s.k === "subsidy" ? (
                  <span className="inline-flex items-center gap-1.5">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/images/hydroquebec.png" alt="Hydro-Québec" width={14} height={14} style={{ width: 14, height: 14, objectFit: "contain", maxWidth: "none" }} />
                    {s.label}
                  </span>
                ) : (
                  s.label
                )}
              </dt>
              <dd style={{ margin: "4px 0 0" }}>
                <span className="text-[22px] font-semibold tabular-nums" style={{ letterSpacing: "-0.03em", color: s.k === "subsidy" ? C.green : lead ? C.orangeText : C.ink }}>
                  {s.v == null ? "N/D" : <CountUp value={s.v} decimals={s.d} play={inView} />}
                </span>{" "}
                <span className="text-[11px]" style={{ color: C.inkMute }}>
                  {s.unit}
                </span>
              </dd>
            </div>
          );
        })}
      </dl>

      {/* Prix approximatif : fourchette installée du marché québécois (grille de la page /prix). */}
      {card.price && (
        <div className="mx-6 mt-4 rounded-[18px] px-4 py-3.5 sm:mx-7" style={{ border: `1px solid ${C.inkLine}` }}>
          <p className="text-[10.5px] font-semibold uppercase" style={{ letterSpacing: "0.14em", color: C.inkMute, margin: 0 }}>
            Prix approximatif installé
          </p>
          <p className="tabular-nums" style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.03em", margin: "4px 0 0" }}>
            {money(card.price.min)} – {money(card.price.max)}
          </p>
          {card.subsidy > 0 && (
            <p className="tabular-nums text-[13px] font-semibold" style={{ color: C.green, margin: "4px 0 0" }}>
              ≈ {money(Math.max(0, card.price.min - card.subsidy))} – {money(Math.max(0, card.price.max - card.subsidy))} après LogisVert
            </p>
          )}
          <p className="text-[11.5px] leading-snug" style={{ color: C.inkMute, margin: "6px 0 0" }}>
            Fourchette publiée au Québec pour ce type ({card.price.matchLabel}, {card.price.tierLabel}
            {card.price.basis === "derive" ? ", case interpolée" : ""}), avant subvention. Le prix exact vient de la soumission.
          </p>
        </div>
      )}

      {/* Pourquoi ce choix */}
      {card.reasons.length > 0 && (
        <div className="px-6 pt-5 sm:px-7">
          <p className="text-[11px] font-bold uppercase" style={{ letterSpacing: "0.16em", color: C.inkMute, margin: 0 }}>
            Pourquoi ce choix
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 0" }} className="space-y-2.5">
            {shown.map((r) => (
              <Reason key={r} text={r} />
            ))}
            <AnimatePresence initial={false}>
              {open &&
                more.map((r) => (
                  <motion.li key={r} initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.4, ease: EASE }} style={{ overflow: "hidden" }}>
                    <ReasonBody text={r} />
                  </motion.li>
                ))}
            </AnimatePresence>
          </ul>
          {more.length > 0 && (
            <button type="button" onClick={() => setOpen((o) => !o)} className="mt-3 text-[13px] font-semibold underline-offset-4 hover:underline" style={{ color: C.ink }}>
              {open ? "Voir moins" : `Voir ${more.length === 1 ? "l’autre raison" : `les ${more.length} autres raisons`}`}
            </button>
          )}
        </div>
      )}

      {(card.warnings.length > 0 || card.architectureNote) && (
        <div className="mx-6 mt-4 space-y-2 sm:mx-7">
          {card.architectureNote && (
            <p className="rounded-xl px-3.5 py-2.5 text-[12.5px] leading-snug" style={{ background: "rgba(229,75,23,0.08)", color: "#8a3a17", margin: 0 }}>
              {card.architectureNote}
            </p>
          )}
          {card.warnings.map((w) => (
            <p key={w} className="rounded-xl px-3.5 py-2.5 text-[12.5px] leading-snug" style={{ background: "#FFF6E0", color: "#7a5a12", margin: 0 }}>
              {w}
            </p>
          ))}
        </div>
      )}

      {card.alsoSoldAs.length > 0 && (
        <p className="px-6 pt-4 text-[12.5px] sm:px-7" style={{ color: C.inkMute, margin: 0 }}>
          Même machine vendue aussi sous <strong style={{ color: C.ink }}>{card.alsoSoldAs.join(", ")}</strong>.
        </p>
      )}

      <div className="mt-auto px-6 pb-6 pt-6 sm:px-7 sm:pb-7">
        <button
          type="button"
          onClick={onSelect}
          className="flex w-full items-center justify-between rounded-full py-2 pl-6 pr-2 text-[15px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
          style={{ background: top ? C.orange : C.ink, boxShadow: top ? "0 18px 40px -18px rgba(229,75,23,0.8)" : "none" }}
        >
          <span className="tm-roll">
            <span>Obtenir ma soumission</span>
            <span aria-hidden="true">Obtenir ma soumission</span>
          </span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full" style={{ background: "rgba(255,255,255,0.16)" }}>
            <Arrow />
          </span>
        </button>
        <p className="text-center text-[12px]" style={{ color: C.inkMute, margin: "10px 0 0" }}>
          Gratuit, sans engagement
        </p>
      </div>
    </motion.article>
  );
}

/* Échelle 0 → -30 °C : la barre descend jusqu'à la température couverte (fabricant) ou jusqu'à -15 °C (mesure certifiée). */
function ColdGauge({ value, known, play, delay }: { value: number; known: boolean; play: boolean; delay: number }) {
  const pct = Math.min(1, Math.max(0, -value / 30));
  return (
    <div className="mt-3.5">
      <div className="relative h-[6px] rounded-full" style={{ background: "rgba(244,239,231,0.14)" }}>
        <motion.div
          className="absolute inset-y-0 left-0 origin-left rounded-full"
          style={{ width: `${pct * 100}%`, background: known ? C.orange : "rgba(244,239,231,0.6)" }}
          initial={{ scaleX: 0 }}
          animate={play ? { scaleX: 1 } : undefined}
          transition={{ duration: 1.4, ease: EASE, delay }}
        />
      </div>
      <div className="mt-1.5 flex justify-between text-[10px] tabular-nums" style={{ color: C.faint }}>
        {[0, -10, -20, -30].map((t) => (
          <span key={t}>{t === 0 ? "0 °C" : temp(t)}</span>
        ))}
      </div>
    </div>
  );
}

function Reason({ text }: { text: string }) {
  return (
    <li>
      <ReasonBody text={text} />
    </li>
  );
}

function ReasonBody({ text }: { text: string }) {
  return (
    <span className="grid grid-cols-[16px_1fr] gap-2.5 text-[13.5px] leading-snug" style={{ color: "#33434b" }}>
      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={C.orange} strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: 2 }}>
        <path d="M5 12.5l4.5 4.5L19 7.5" />
      </svg>
      <span>{text}</span>
    </span>
  );
}

/* ---------------------- Ce qui les distingue ---------------------- */

function Distinctions({ cards, leaders }: { cards: Card[]; leaders: Record<MetricKey, number[]> }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const rows = METRICS.filter((m) => cards.some((c) => valueOf(c, m.key) != null));

  return (
    <section ref={ref} className="mx-auto mt-24 max-w-[1320px] lg:mt-32" aria-labelledby="tm-diff">
      <div className="grid gap-6 lg:grid-cols-[1fr_380px] lg:items-end">
        <h2 id="tm-diff" style={{ fontSize: "clamp(34px, 4.4vw, 68px)", lineHeight: 0.95, letterSpacing: "-0.045em", fontWeight: 600, margin: 0 }}>
          <Line i={0} play={inView}>
            Ce qui les
          </Line>
          <Line i={1} play={inView}>
            <span className="tm-serif">distingue.</span>
          </Line>
        </h2>
        <p className="text-[15px] leading-relaxed" style={{ color: C.mute, margin: 0 }}>
          Critère par critère, le meilleur des trois en orange. Les barres sont relatives au meilleur.
        </p>
      </div>

      <div className="mt-10" style={{ borderTop: `1px solid ${C.line}` }}>
        {rows.map((m, ri) => {
          const vals = cards.map((c) => valueOf(c, m.key));
          const max = Math.max(0, ...vals.map((v) => (v == null ? 0 : Math.abs(v))));
          return (
            <div key={m.key} className="grid gap-4 py-6 lg:grid-cols-[280px_1fr] lg:gap-10" style={{ borderBottom: `1px solid ${C.line}` }}>
              <div>
                <p className="text-[17px] font-semibold" style={{ letterSpacing: "-0.01em", margin: 0 }}>
                  {m.label}
                </p>
                <p className="text-[13px]" style={{ color: C.faint, margin: "4px 0 0" }}>
                  {m.unit}
                </p>
              </div>
              <div className="space-y-3">
                {cards.map((c, ci) => {
                  const v = vals[ci];
                  const lead = leaders[m.key].includes(ci);
                  return (
                    <div key={c.key} className="grid grid-cols-[88px_1fr_auto] items-center gap-4 sm:grid-cols-[140px_1fr_110px]">
                      <span className="truncate text-[13.5px] font-medium" style={{ color: lead ? C.cream : C.mute }}>
                        {c.brand}
                      </span>
                      <div className="h-[8px] overflow-hidden rounded-full" style={{ background: C.line }}>
                        <motion.div
                          className="h-full origin-left rounded-full"
                          style={{ width: `${v != null && max > 0 ? (Math.abs(v) / max) * 100 : 0}%`, background: lead ? C.orange : "rgba(244,239,231,0.35)" }}
                          initial={{ scaleX: 0 }}
                          animate={inView ? { scaleX: 1 } : undefined}
                          transition={{ duration: 1.2, ease: EASE, delay: 0.12 * ri + 0.08 * ci }}
                        />
                      </div>
                      <span className="text-right text-[15px] font-semibold tabular-nums" style={{ color: lead ? C.orange : C.cream }}>
                        {v == null ? "N/D" : m.key === "minTemp" ? temp(v) : `${fr(v, m.d)}${m.key === "subsidy" ? " $" : ""}`}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-[12.5px]" style={{ color: C.faint, margin: "16px 0 0" }}>
        Sources : ENERGY STAR (capacité et COP à −15 °C) et liste LogisVert d’Hydro-Québec (montants officiels pour ces appariements).
      </p>
    </section>
  );
}

/* --------------------- Comment ThermoMatch a calculé --------------------- */

function HowItWorks({ ctx }: { ctx: SummaryContext }) {
  const f = ctx.loadFactors;
  const w = ctx.weights;
  return (
    <details className="tm-details mx-auto mt-10 max-w-[1320px] rounded-[22px] px-6 py-5 sm:px-8" style={{ border: `1px solid ${C.line}`, background: "rgba(244,239,231,0.03)" }}>
      <summary className="flex items-center justify-between gap-4 text-[15px] font-semibold">
        Comment ThermoMatch a calculé
        <span className="tm-plus flex h-8 w-8 items-center justify-center rounded-full text-[18px]" style={{ border: `1px solid ${C.line}` }} aria-hidden="true">
          +
        </span>
      </summary>
      <div className="mt-6 grid gap-8 text-[13px] md:grid-cols-2" style={{ color: C.mute }}>
        {f && (
          <div>
            <p className="text-[11px] font-bold uppercase" style={{ letterSpacing: "0.16em", color: C.faint, margin: 0 }}>
              Charge de chauffage
            </p>
            <ul className="mt-3 space-y-1.5" style={{ listStyle: "none", padding: 0 }}>
              <li>Base : {f.baseBtuPerFt2} BTU/h par pi² × {fr(ctx.heatedAreaFt2)} pi²</li>
              <li>Type de propriété : × {f.homeType}</li>
              <li>Étages : × {f.floors}</li>
              <li>Année de construction : × {f.construction}</li>
              <li>Isolation : × {f.insulation}</li>
              <li>Fenestration : × {f.windows}</li>
              <li>Sous-sol : × {f.basement}</li>
              <li className="pt-1 font-semibold" style={{ color: C.cream }}>
                = {fr(Math.round(ctx.estimatedLoadBtu))} BTU/h à −15 °C (±{ctx.uncertaintyPct} %)
              </li>
            </ul>
          </div>
        )}
        {w && (
          <div>
            <p className="text-[11px] font-bold uppercase" style={{ letterSpacing: "0.16em", color: C.faint, margin: 0 }}>
              Pondération du score (sur 100)
            </p>
            <ul className="mt-3 space-y-2" style={{ listStyle: "none", padding: 0 }}>
              {[
                ["Adéquation à la charge", w.fit],
                ["Performance par grand froid", w.cold],
                ["Efficacité (HSPF2, SEER2)", w.efficiency],
                ["Subvention LogisVert", w.subsidy],
                ["Budget", w.budget],
                ["Qualité des données", w.dataQuality],
              ].map(([label, v]) => (
                <li key={String(label)} className="grid grid-cols-[190px_1fr_28px] items-center gap-3">
                  <span>{label}</span>
                  <span className="h-1.5 overflow-hidden rounded-full" style={{ background: C.line }}>
                    <span className="block h-full rounded-full" style={{ width: `${Math.round(Number(v))}%`, background: C.orange }} />
                  </span>
                  <span className="text-right tabular-nums" style={{ color: C.cream }}>
                    {Math.round(Number(v))}
                  </span>
                </li>
              ))}
            </ul>
            {typeof ctx.candidatesEvaluated === "number" && (
              <p style={{ margin: "14px 0 0" }}>
                {fr(ctx.candidatesEvaluated)} machines évaluées, {fr(ctx.candidatesRetained ?? 0)} de calibre compatible, 3 retenues.
                {ctx.logisVertUpdatedAt ? ` Liste LogisVert du ${String(ctx.logisVertUpdatedAt).slice(0, 10)}.` : ""}
              </p>
            )}
          </div>
        )}
      </div>
      {ctx.notices && ctx.notices.length > 0 && (
        <div className="mt-6 space-y-2">
          {ctx.notices.map((n) => (
            <p key={n} className="text-[12.5px] leading-relaxed" style={{ color: C.faint, margin: 0 }}>
              {n}
            </p>
          ))}
        </div>
      )}
    </details>
  );
}

/* ------------------------- Prochaine étape ------------------------- */

function NextStep({ top, onSelect }: { top: Card; onSelect: () => void }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const steps = [
    ["Vous choisissez un modèle", "Parmi vos trois recommandations, ou un autre du catalogue."],
    ["On confirme le calibre", "Par téléphone ou sur place : la charge est vérifiée avant toute installation."],
    ["Vous recevez la soumission", "Détaillée, avec le montant LogisVert. Gratuite, sans engagement."],
  ];
  const label = `Ma soumission pour ${top.brand}`;

  return (
    <section ref={ref} className="relative mx-auto mt-24 max-w-[1320px] overflow-hidden rounded-[32px] lg:mt-32" style={{ background: C.orange, color: "#fff" }} aria-labelledby="tm-next">
      <AirLines color="#fff" opacity={0.2} className="pointer-events-none absolute inset-0 h-full w-full" />
      <div className="relative grid gap-12 px-6 py-14 sm:px-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:px-16 lg:py-20">
        <div>
          <p className="text-[12px] font-medium uppercase" style={{ letterSpacing: "0.22em", opacity: 0.78, margin: 0 }}>
            (Prochaine étape)
          </p>
          <h2 id="tm-next" style={{ fontSize: "clamp(38px, 5vw, 80px)", lineHeight: 0.95, letterSpacing: "-0.045em", fontWeight: 600, margin: "22px 0 0" }}>
            <Line i={0} play={inView}>
              Recevez votre
            </Line>
            <Line i={1} play={inView}>
              <span className="tm-serif">soumission détaillée.</span>
            </Line>
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            <button type="button" onClick={onSelect} className="inline-flex items-center gap-3 rounded-full bg-white py-2 pl-6 pr-2 text-[15px] font-semibold transition-transform duration-300 hover:-translate-y-0.5" style={{ color: C.ink }}>
              <span className="tm-roll">
                <span>{label}</span>
                <span aria-hidden="true">{label}</span>
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full" style={{ background: C.ink, color: "#fff" }}>
                <Arrow />
              </span>
            </button>
            <Link href="/rendez-vous" className="inline-flex items-center rounded-full px-6 py-3.5 text-[15px] font-semibold transition-colors hover:bg-white/10" style={{ border: "1px solid rgba(255,255,255,0.55)", color: "#fff" }}>
              Parler à un conseiller
            </Link>
          </div>
        </div>
        <ol style={{ listStyle: "none", padding: 0, margin: 0, borderTop: "1px solid rgba(255,255,255,0.35)" }}>
          {steps.map(([t, d], i) => (
            <motion.li
              key={t}
              className="grid grid-cols-[44px_1fr] gap-x-3 py-5"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.35)" }}
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : undefined}
              transition={{ duration: 0.9, ease: EASE, delay: 0.3 + i * 0.15 }}
            >
              <span className="pt-1 text-[13px] font-bold tabular-nums" style={{ opacity: 0.75 }}>
                0{i + 1}
              </span>
              <span>
                <span className="block text-[19px] font-semibold" style={{ letterSpacing: "-0.015em" }}>
                  {t}
                </span>
                <span className="mt-1 block text-[14.5px] leading-relaxed" style={{ opacity: 0.85 }}>
                  {d}
                </span>
              </span>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* Barre fixe sur mobile : la soumission du meilleur choix reste à portée de pouce. */
function MobileBar({ top, onSelect }: { top: Card; onSelect: () => void }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-x-3 bottom-3 z-40 flex items-center justify-between gap-3 rounded-full py-2 pl-5 pr-2 lg:hidden"
          style={{ background: "rgba(10,20,25,0.92)", border: `1px solid ${C.line}`, backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", color: C.cream, fontFamily: DISPLAY }}
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <div className="min-w-0">
            <p className="truncate text-[10.5px] uppercase" style={{ letterSpacing: "0.14em", color: C.faint, margin: 0 }}>
              {top.badge}
            </p>
            <p className="truncate text-[15px] font-semibold" style={{ margin: 0 }}>
              {top.brand} {top.series}
            </p>
          </div>
          <button type="button" onClick={onSelect} className="shrink-0 rounded-full px-5 py-3 text-[14px] font-semibold text-white" style={{ background: C.orange }}>
            Ma soumission
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* --------------------------- Aucun résultat --------------------------- */

function Empty({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="mx-auto max-w-[640px] py-16 text-center" style={{ fontFamily: DISPLAY, color: C.cream }}>
      <h3 style={{ fontSize: "clamp(28px, 3.4vw, 44px)", fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1.05, margin: 0 }}>
        Aucun modèle ne respecte tous vos critères.
      </h3>
      <p className="mx-auto mt-5 max-w-md text-[16px] leading-relaxed" style={{ color: C.mute }}>
        Nous préférons ne rien proposer plutôt qu’un appareil inadapté. Un conseiller peut regarder votre maison avec vous.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <button type="button" onClick={onRetry} className="rounded-full px-6 py-3 font-semibold" style={{ background: C.cream, color: C.ink }}>
          Refaire le test
        </button>
        <Link href="/soumission" className="rounded-full px-6 py-3 font-semibold text-white" style={{ background: C.orange }}>
          Parler à un conseiller
        </Link>
      </div>
    </div>
  );
}

/* ------------------------------ Outils ------------------------------ */

function Line({ i, play = true, children }: { i: number; play?: boolean; children: ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <span style={{ display: "block", overflow: "hidden", paddingBottom: "0.14em", marginBottom: "-0.14em" }}>
      <motion.span
        style={{ display: "block" }}
        initial={reduce ? false : { y: "115%" }}
        animate={play || reduce ? { y: "0%" } : undefined}
        transition={{ duration: 1.1, ease: EASE, delay: 0.15 + i * 0.09 }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function Fade({ delay, className, style, children }: { delay: number; className?: string; style?: CSSProperties; children: ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className} style={style} initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: EASE, delay }}>
      {children}
    </motion.div>
  );
}

function Arrow() {
  return (
    <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
