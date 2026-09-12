"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { motion, MotionConfig } from "motion/react";
import { typo } from "@/components/content-hero/typo";
import { CountUp, EASE, Mask, Rule, VIEW } from "./motion";
import "./sections.css";

/* ==================================================================
   /thermopompe et /thermopompe/[ville] — la suite de « Carte des froids ».
   Glacier qui s'éclaircit vers le blanc, marine, bleu givre, capitales
   de carte. Les sections deviennent un atlas climatique :
   - normales en relevés d'instruments (thermomètres horizontaux, compteurs) ;
   - tableaux en journaux de station (filets marine, barres de givre) ;
   - villes voisines et régions en légende de carte (pastille = froid de conception) ;
   - cristaux de givre qui se forment dans les angles (aucune neige qui tombe).
   ================================================================== */

export const FR = {
  glacier: "#E4EFF5",
  ice: "#EEF5F9",
  navy: "#0B2540",
  frost: "#9CC3DA",
  steel: "#1F5F8B",
  mute: "rgba(11,37,64,0.7)",
  faint: "rgba(11,37,64,0.5)",
  line: "rgba(11,37,64,0.14)",
} as const;

const DISPLAY = "var(--font-display), var(--font-sans), sans-serif";
export const MINUS = (s: string) => s.replace(/(^|[\s(])-(?=\d)/g, "$1−");

/** Couleur de pastille selon la température de conception (plus froid = plus marine). */
export function frostSwatch(t: number): string {
  const k = Math.min(1, Math.max(0, (-t - 20) / 14)); // −20 °C → 0, −34 °C → 1
  const mix = (a: number, b: number) => Math.round(a + (b - a) * k);
  return `rgb(${mix(0xc9, 0x0b)}, ${mix(0xdf, 0x25)}, ${mix(0xec, 0x40)})`;
}

/* ---------- Cristal de givre (six bras dendritiques, tracés à la main) ---------- */

const r1 = (n: number) => Math.round(n * 10) / 10;
function arms(r: number, branches: number): string {
  let d = "";
  for (let k = 0; k < 6; k++) {
    const a = (Math.PI / 3) * k + Math.PI / 6;
    const ux = Math.cos(a);
    const uy = Math.sin(a);
    d += `M0 0L${r1(ux * r)} ${r1(uy * r)}`;
    for (let b = 1; b <= branches; b++) {
      const t = r * (0.2 + (0.66 * b) / branches);
      const len = r * (0.42 - (0.26 * b) / branches);
      for (const s of [-1, 1]) {
        const ba = a + (s * Math.PI) / 3;
        d += `M${r1(ux * t)} ${r1(uy * t)}L${r1(ux * t + Math.cos(ba) * len)} ${r1(uy * t + Math.sin(ba) * len)}`;
      }
    }
  }
  return d;
}

export function FrostCrystal({
  size = 120,
  branches = 3,
  color = "#FFFFFF",
  shade = FR.frost,
  delay = 0,
  className = "",
}: {
  size?: number;
  branches?: number;
  color?: string;
  shade?: string;
  delay?: number;
  className?: string;
}) {
  const r = size / 2 - 2;
  const d = arms(r, branches);
  return (
    <svg aria-hidden="true" className={`pointer-events-none ${className}`} width={size} height={size} viewBox={`${-size / 2} ${-size / 2} ${size} ${size}`}>
      <motion.path
        d={d}
        fill="none"
        stroke={shade}
        strokeWidth={0.9}
        strokeLinecap="round"
        transform="translate(0.9 0.9)"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={VIEW}
        transition={{ duration: 3, ease: [0.3, 0, 0.2, 1], delay: delay + 0.2 }}
      />
      <motion.path
        d={d}
        fill="none"
        stroke={color}
        strokeWidth={1.4}
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={VIEW}
        transition={{ duration: 3, ease: [0.3, 0, 0.2, 1], delay }}
      />
    </svg>
  );
}

/* ---------- Titre de section : surtitre, capitales de carte, chapeau ---------- */

export function FrostHead({ id, eyebrow, title, intro, dark = false }: { id?: string; eyebrow?: string; title: string; intro?: string; dark?: boolean }) {
  const ink = dark ? "#FFFFFF" : FR.navy;
  const mute = dark ? "rgba(255,255,255,0.72)" : FR.mute;
  return (
    <div>
      {eyebrow ? (
        <motion.p
          className="flex items-center gap-3 text-[11.5px] font-semibold uppercase"
          style={{ letterSpacing: "0.24em", color: dark ? FR.frost : FR.steel, margin: 0 }}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.8, ease: EASE }}
        >
          <span className="inline-block w-8">
            <Rule color={dark ? FR.frost : FR.steel} thickness={1.5} duration={0.9} />
          </span>
          {typo(eyebrow)}
        </motion.p>
      ) : null}
      <h2
        id={id}
        className="uppercase"
        style={{ fontFamily: DISPLAY, fontSize: "clamp(28px, 3.3vw, 50px)", lineHeight: 0.96, letterSpacing: "-0.03em", fontWeight: 650, color: ink, margin: eyebrow ? "16px 0 0" : 0, textWrap: "balance" }}
      >
        <Mask block delay={0.08} duration={1.05}>
          {MINUS(typo(title))}
        </Mask>
      </h2>
      {intro ? (
        <motion.p
          className="text-[16px] leading-[1.66] sm:text-[16.5px]"
          style={{ color: mute, margin: "16px 0 0", maxWidth: "64ch", fontFamily: "var(--font-sans)" }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 1, ease: EASE, delay: 0.25 }}
        >
          {MINUS(typo(intro))}
        </motion.p>
      ) : null}
    </div>
  );
}

/* ---------- Bande de preuve : quatre instruments étalonnés ---------- */

const TRUST = [
  { label: "Liste LogisVert d'Hydro-Québec", hint: "montants officiels, mise à jour automatique" },
  { label: "Certifications AHRI et ENERGY STAR", hint: "capacités et COP mesurés, jamais estimés sans le dire" },
  { label: "Toutes les marques vendues au Québec", hint: "aucune marque favorisée, aucun avis sponsorisé" },
  { label: "Installateurs licenciés RBQ", hint: "la soumission finale vient d'un entrepreneur licencié" },
];

export function FrostTrust() {
  return (
    <MotionConfig reducedMotion="user">
      <section aria-label="Sources et garanties" className="frs-root" style={{ background: "#FFFFFF", color: FR.navy, fontFamily: DISPLAY }}>
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
          <ul
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            style={{ margin: 0, padding: 0, listStyle: "none", borderTop: `1px solid ${FR.navy}`, borderBottom: `1px solid ${FR.line}` }}
          >
            {TRUST.map((it, i) => (
              <motion.li
                key={it.label}
                className="flex items-start gap-3 py-5 text-[13px] leading-snug sm:pr-5 lg:border-l lg:pl-5 lg:first:border-l-0 lg:first:pl-0"
                style={{ borderColor: FR.line }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW}
                transition={{ duration: 0.8, ease: EASE, delay: i * 0.08 }}
              >
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" className="mt-[2px] shrink-0">
                  <motion.path
                    d="M20 6 9 17l-5-5"
                    fill="none"
                    stroke={FR.steel}
                    strokeWidth={2.4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={VIEW}
                    transition={{ duration: 0.7, ease: EASE, delay: 0.25 + i * 0.12 }}
                  />
                </svg>
                <span>
                  <span className="block font-semibold">{typo(it.label)}</span>
                  <span className="block" style={{ color: FR.mute }}>
                    {typo(it.hint)}
                  </span>
                </span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </MotionConfig>
  );
}

/* ---------- Valeur animée (compteur sans écart d'hydratation) ---------- */

const NUM = /^([−-]?)(\d{1,3}(?:[   ]\d{3})+|\d+)(?:,(\d+))?(.*)$/;

export function Reading({ value }: { value: string }) {
  const v = MINUS(value);
  const m = NUM.exec(v);
  if (!m || /\d/.test(m[4])) return <>{v}</>;
  const decimals = m[3]?.length ?? 0;
  const n = Number(`${m[2].replace(/[   ]/g, "")}${decimals ? `.${m[3]}` : ""}`) * (m[1] ? -1 : 1);
  const rest = m[4];
  const fmt = (x: number) => {
    const abs = Math.abs(x).toLocaleString("fr-CA", { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
    return `${x < 0 && Math.abs(x) >= 0.5 * 10 ** -decimals ? "−" : ""}${abs}${rest}`;
  };
  return <CountUp to={n} format={fmt} duration={1.8} />;
}

/* ---------- Relevés : trois mises en page selon la section ---------- */

export type Gauge = { t: number } | { a: number; b: number; aLabel: string; bLabel: string };
export type ReadingRow = { label: string; value: string; note?: string; gauge?: Gauge };

const SCALE_MIN = -45;
const SCALE_MAX = 10;
const pctOf = (t: number) => ((t - SCALE_MIN) / (SCALE_MAX - SCALE_MIN)) * 100;

function Thermo({ t }: { t: number }) {
  const zero = pctOf(0);
  const at = pctOf(Math.max(SCALE_MIN, Math.min(SCALE_MAX, t)));
  return (
    <div aria-hidden="true" className="relative mt-4 h-[26px]">
      <span className="absolute left-0 right-0 top-[8px] h-[6px] rounded-full" style={{ background: "#FFFFFF", boxShadow: `inset 0 0 0 1px ${FR.frost}` }} />
      <motion.span
        className="absolute top-[8px] h-[6px] rounded-full"
        style={{ left: `${at}%`, width: `${zero - at}%`, background: FR.navy, transformOrigin: "100% 50%" }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={VIEW}
        transition={{ duration: 2, ease: [0.45, 0, 0.2, 1], delay: 0.3 }}
      />
      <motion.span
        className="absolute top-[4px] block h-[14px] w-[14px] -translate-x-1/2 rounded-full"
        style={{ left: `${at}%`, background: FR.navy, boxShadow: "0 0 0 3px #FFFFFF" }}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={VIEW}
        transition={{ duration: 0.5, ease: EASE, delay: 2.1 }}
      />
      {[-40, -30, -20, -10, 0].map((k) => (
        <span key={k} className="absolute top-[18px] -translate-x-1/2 text-[9.5px] tabular-nums" style={{ left: `${pctOf(k)}%`, color: k === 0 ? FR.navy : FR.faint }}>
          {k === 0 ? "0" : `−${-k}`}
        </span>
      ))}
    </div>
  );
}

function Compare({ a, b, aLabel, bLabel }: { a: number; b: number; aLabel: string; bLabel: string }) {
  const max = Math.max(a, b) || 1;
  const rows = [
    { v: a, l: aLabel, c: FR.navy },
    { v: b, l: bLabel, c: FR.frost },
  ];
  return (
    <div aria-hidden="true" className="mt-4 space-y-1.5">
      {rows.map((r, i) => (
        <div key={r.l} className="grid grid-cols-[92px_minmax(0,1fr)] items-center gap-3 text-[11px]">
          <span className="truncate" style={{ color: FR.mute }}>
            {r.l}
          </span>
          <span className="relative block h-[6px]">
            <motion.span
              className="absolute inset-y-0 left-0 block rounded-full"
              style={{ width: `${(r.v / max) * 100}%`, background: r.c, transformOrigin: "0% 50%" }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={VIEW}
              transition={{ duration: 1.6, ease: EASE, delay: 0.3 + i * 0.2 }}
            />
          </span>
        </div>
      ))}
    </div>
  );
}

export function FrostReadouts({
  id,
  eyebrow,
  title,
  intro,
  rows,
  footnote,
  layout,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  rows: ReadingRow[];
  footnote?: string;
  layout: "instruments" | "log" | "ledger";
}) {
  if (rows.length === 0) return null;
  const tint = layout === "instruments" ? `linear-gradient(180deg, #FFFFFF 0%, ${FR.ice} 100%)` : layout === "ledger" ? FR.ice : "#FFFFFF";
  return (
    <MotionConfig reducedMotion="user">
      <section aria-labelledby={id} className="frs-root relative overflow-hidden" style={{ background: tint, color: FR.navy, fontFamily: DISPLAY }}>
        {layout === "instruments" ? <FrostCrystal size={150} branches={4} className="absolute -right-8 top-10 hidden lg:block" /> : null}
        <div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-[120px]">
                <FrostHead id={id} eyebrow={eyebrow} title={title} intro={intro} />
              </div>
            </div>
            <div className="lg:col-span-8">
              {layout === "instruments" ? (
                <dl className="grid sm:grid-cols-2" style={{ margin: 0, borderTop: `1px solid ${FR.navy}` }}>
                  {rows.map((r, i) => (
                    <motion.div
                      key={r.label}
                      className="py-6 sm:odd:pr-8 sm:even:border-l sm:even:pl-8"
                      style={{ borderBottom: `1px solid ${FR.line}`, borderColor: FR.line }}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={VIEW}
                      transition={{ duration: 0.9, ease: EASE, delay: (i % 2) * 0.1 }}
                    >
                      <dt className="text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.2em", color: FR.faint }}>
                        {typo(r.label)}
                      </dt>
                      <dd style={{ margin: "8px 0 0" }}>
                        <p className="tabular-nums" style={{ margin: 0, fontSize: "clamp(26px, 2.4vw, 36px)", fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1.05 }}>
                          <Reading value={typo(r.value)} />
                        </p>
                        {r.gauge ? "t" in r.gauge ? <Thermo t={r.gauge.t} /> : <Compare {...r.gauge} /> : null}
                        {r.note ? (
                          <p className="text-[14px] leading-[1.6]" style={{ margin: "12px 0 0", color: FR.mute, fontFamily: "var(--font-sans)" }}>
                            {MINUS(typo(r.note))}
                          </p>
                        ) : null}
                      </dd>
                    </motion.div>
                  ))}
                </dl>
              ) : (
                <dl style={{ margin: 0, borderTop: `2px solid ${FR.navy}` }}>
                  {rows.map((r, i) => (
                    <motion.div
                      key={r.label}
                      className="grid grid-cols-[40px_minmax(0,1fr)] gap-x-4 py-6 sm:grid-cols-[48px_minmax(160px,220px)_minmax(0,1fr)] sm:gap-x-6"
                      style={{ borderBottom: `1px solid ${FR.line}` }}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={VIEW}
                      transition={{ duration: 0.9, ease: EASE, delay: i * 0.06 }}
                    >
                      <span aria-hidden="true" className="pt-0.5 text-[12px] font-semibold tabular-nums" style={{ color: FR.steel, letterSpacing: "0.12em" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <dt className="pt-0.5 text-[11.5px] font-semibold uppercase" style={{ letterSpacing: "0.18em", color: FR.faint }}>
                        {typo(r.label)}
                      </dt>
                      <dd className="col-start-2 sm:col-start-3" style={{ margin: "6px 0 0" }}>
                        <p style={{ margin: 0, fontSize: layout === "ledger" ? "clamp(22px, 2vw, 30px)" : "clamp(19px, 1.6vw, 23px)", fontWeight: 600, letterSpacing: "-0.03em", lineHeight: 1.15 }} className="tabular-nums">
                          {layout === "ledger" ? <Reading value={typo(r.value)} /> : MINUS(typo(r.value))}
                        </p>
                        {r.gauge && !("t" in r.gauge) ? <Compare {...r.gauge} /> : null}
                        {r.note ? (
                          <p className="text-[14.5px] leading-[1.62]" style={{ margin: "10px 0 0", color: FR.mute, maxWidth: "64ch", fontFamily: "var(--font-sans)" }}>
                            {MINUS(typo(r.note))}
                          </p>
                        ) : null}
                      </dd>
                    </motion.div>
                  ))}
                </dl>
              )}
              {footnote ? (
                <p className="mt-6 text-[12.5px] leading-[1.65]" style={{ color: FR.mute, margin: "24px 0 0", maxWidth: "80ch", fontFamily: "var(--font-sans)" }}>
                  <span className="mr-2 text-[10.5px] font-semibold uppercase" style={{ letterSpacing: "0.2em", color: FR.navy }}>
                    Note
                  </span>
                  {MINUS(typo(footnote))}
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}

/* ---------- Tableau comparatif des villes : journal de station ---------- */

export type CityRow = {
  slug: string;
  name: string;
  region: string;
  design: number;
  hdd: number | null;
  hddLabel: string | null;
  jan: string | null;
  record: string | null;
};

export function FrostCityTable({ rows, hasHdd }: { rows: CityRow[]; hasHdd: boolean }) {
  const max = Math.max(1, ...rows.map((r) => r.hdd ?? 0));
  const th = "px-3 py-3 text-[10.5px] font-semibold uppercase whitespace-nowrap";
  return (
    <div className="overflow-x-auto" style={{ borderTop: `2px solid ${FR.navy}`, borderBottom: `1px solid ${FR.navy}`, fontFamily: "var(--font-sans)" }}>
      <table className="w-full text-[14px] tabular-nums" style={{ borderCollapse: "collapse", color: FR.navy }}>
        <thead>
          <tr style={{ borderBottom: `1px solid ${FR.navy}`, letterSpacing: "0.14em" }}>
            <th className={`${th} text-left`}>Ville</th>
            <th className={`${th} text-left`}>Région</th>
            <th className={`${th} text-right`}>Conception</th>
            {hasHdd && <th className={`${th} text-left sm:min-w-[240px]`}>Degrés-jours</th>}
            {hasHdd && <th className={`${th} text-right`}>Janvier</th>}
            {hasHdd && <th className={`${th} text-right`}>Record de froid</th>}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.slug} className="frs-tr cs-row" style={{ borderTop: `1px solid ${FR.line}` }}>
              <td className="px-3 py-2.5">
                <span className="flex items-center gap-2.5">
                  <span aria-hidden="true" className="block h-[10px] w-[10px] shrink-0" style={{ background: frostSwatch(r.design) }} />
                  <Link href={`/thermopompe/${r.slug}`} className="font-semibold" style={{ color: FR.navy }}>
                    {r.name}
                  </Link>
                </span>
              </td>
              <td className="whitespace-nowrap px-3 py-2.5" style={{ color: FR.mute }}>
                {r.region}
              </td>
              <td className="whitespace-nowrap px-3 py-2.5 text-right font-semibold">{MINUS(`${r.design} °C`)}</td>
              {hasHdd && (
                <td className="px-3 py-2.5">
                  {r.hdd ? (
                    <span className="flex items-center gap-3">
                      <span className="w-[52px] shrink-0 text-right">{r.hddLabel}</span>
                      <span aria-hidden="true" className="relative hidden h-[6px] flex-1 sm:block" style={{ minWidth: 120 }}>
                        <motion.span
                          className="absolute inset-y-0 left-0 block rounded-full"
                          style={{ width: `${(r.hdd / max) * 100}%`, background: `linear-gradient(90deg, ${FR.frost}, ${FR.navy})`, transformOrigin: "0% 50%" }}
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true, margin: "0px 0px -6% 0px" }}
                          transition={{ duration: 1.3, ease: EASE }}
                        />
                      </span>
                    </span>
                  ) : (
                    <span style={{ color: FR.faint }}>n/d</span>
                  )}
                </td>
              )}
              {hasHdd && <td className="whitespace-nowrap px-3 py-2.5 text-right">{r.jan ? MINUS(r.jan) : <span style={{ color: FR.faint }}>n/d</span>}</td>}
              {hasHdd && <td className="whitespace-nowrap px-3 py-2.5 text-right">{r.record ? MINUS(r.record) : <span style={{ color: FR.faint }}>n/d</span>}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ---------- Légende de carte : régions et villes ---------- */

export function FrostRegions({ title, regions }: { title: string; regions: Array<{ name: string; cities: Array<{ slug: string; name: string; t: number }> }> }) {
  return (
    <div>
      <FrostHead title={title} />
      <div className="mt-10 gap-x-12 sm:columns-2 lg:columns-3" style={{ columnRule: `1px solid ${FR.line}` }}>
        {regions.map((r, i) => (
          <motion.div
            key={r.name}
            className="mb-10 break-inside-avoid"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.9, ease: EASE, delay: (i % 3) * 0.08 }}
          >
            <h2 className="text-[13px] font-semibold uppercase" style={{ letterSpacing: "0.2em", color: FR.navy, margin: 0 }}>
              {r.name}
            </h2>
            <span className="mt-2 block">
              <Rule color={FR.frost} thickness={1.5} duration={1} />
            </span>
            <ul className="mt-2" style={{ margin: "8px 0 0", padding: 0, listStyle: "none" }}>
              {r.cities.map((c) => (
                <li key={c.slug}>
                  <Link href={`/thermopompe/${c.slug}`} className="frs-city -mx-2 flex items-center gap-3 px-2 py-2" style={{ color: FR.navy }}>
                    <span aria-hidden="true" className="block h-[11px] w-[11px] shrink-0" style={{ background: frostSwatch(c.t), boxShadow: `inset 0 0 0 1px ${FR.line}` }} />
                    <span className="min-w-0 flex-1">
                      <span className="block text-[15px] font-semibold leading-tight">Thermopompe à {c.name}</span>
                      <span className="frs-city-sub block text-[12px]" style={{ color: FR.faint }}>
                        Température de conception {MINUS(`${c.t} °C`)}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
      <FrostKey temps={[...new Set(regions.flatMap((r) => r.cities.map((c) => c.t)))].sort((a, b) => b - a)} />
    </div>
  );
}

/** Clé de la légende : une pastille par température de conception réellement présente. */
function FrostKey({ temps }: { temps: number[] }) {
  return (
    <div aria-hidden="true" className="mt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] tabular-nums" style={{ color: FR.faint }}>
      <span className="font-semibold uppercase" style={{ letterSpacing: "0.2em" }}>
        Légende
      </span>
      {temps.map((t) => (
        <span key={t} className="inline-flex items-center gap-1.5">
          <span className="block h-[10px] w-[10px]" style={{ background: frostSwatch(t), boxShadow: `inset 0 0 0 1px ${FR.line}` }} />
          {MINUS(`${t} °C`)}
        </span>
      ))}
    </div>
  );
}

/* ---------- Villes voisines : légende de carte ---------- */

export function FrostNearby({ title, links }: { title: string; links: Array<{ href: string; label: string; hint?: string; t: number }> }) {
  if (links.length === 0) return null;
  return (
    <MotionConfig reducedMotion="user">
      <section className="frs-root" style={{ background: "#FFFFFF", color: FR.navy, fontFamily: DISPLAY }}>
        <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <h2 className="uppercase" style={{ fontSize: "clamp(26px, 2.6vw, 40px)", fontWeight: 650, letterSpacing: "-0.03em", lineHeight: 0.96, margin: 0 }}>
                {typo(title)}
              </h2>
              <p className="mt-3 text-[12px] font-semibold uppercase" style={{ letterSpacing: "0.2em", color: FR.faint, margin: "12px 0 0" }}>
                Légende
              </p>
            </div>
            <ul className="lg:col-span-8" style={{ margin: 0, padding: 0, listStyle: "none", borderTop: `1px solid ${FR.navy}` }}>
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  style={{ borderBottom: `1px solid ${FR.line}` }}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={VIEW}
                  transition={{ duration: 0.8, ease: EASE, delay: i * 0.08 }}
                >
                  <Link href={l.href} className="frs-city group flex items-center gap-4 px-3 py-5" style={{ color: FR.navy }}>
                    <span aria-hidden="true" className="block h-[14px] w-[14px] shrink-0" style={{ background: frostSwatch(l.t), boxShadow: `inset 0 0 0 1px ${FR.line}` }} />
                    <span className="min-w-0 flex-1 text-[18px] font-semibold leading-tight" style={{ letterSpacing: "-0.02em" }}>
                      {typo(l.label)}
                    </span>
                    {l.hint ? (
                      <span className="frs-city-sub hidden text-[13px] tabular-nums sm:block" style={{ color: FR.mute }}>
                        {MINUS(typo(l.hint))}
                      </span>
                    ) : null}
                    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="shrink-0 transition-transform duration-500 group-hover:translate-x-1">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </Link>
                  {l.hint ? (
                    <span className="-mt-3 block px-3 pb-4 pl-[46px] text-[13px] tabular-nums sm:hidden" style={{ color: FR.mute }}>
                      {MINUS(typo(l.hint))}
                    </span>
                  ) : null}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}

/* ---------- Note de l'atlas (bloc de texte) ---------- */

export function FrostNote({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <section className="frs-root" style={{ background: "#FFFFFF", color: FR.navy, fontFamily: DISPLAY }}>
        <div className="mx-auto max-w-[1440px] px-5 pb-16 sm:px-8 lg:px-12 lg:pb-20">
          <motion.div
            className="relative overflow-hidden px-6 py-10 sm:px-12 sm:py-14"
            style={{ background: `linear-gradient(135deg, ${FR.glacier} 0%, #FFFFFF 70%)`, borderTop: `2px solid ${FR.navy}` }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 1, ease: EASE }}
          >
            <FrostCrystal size={180} branches={4} className="absolute -right-10 -top-10" delay={0.3} />
            <FrostCrystal size={70} branches={2} className="absolute bottom-6 right-24 hidden sm:block" delay={0.9} />
            <div className="frs-note relative max-w-[70ch] text-[17px] leading-[1.72] [&_a]:font-semibold [&_a]:underline [&_a]:decoration-1 [&_a]:underline-offset-4 [&_h2]:m-0 [&_h2]:text-[clamp(26px,2.6vw,40px)] [&_h2]:font-[650] [&_h2]:uppercase [&_h2]:leading-[0.98] [&_h2]:tracking-[-0.03em] [&_p]:mb-0 [&_p]:mt-5" style={{ color: FR.mute }}>
              {children}
            </div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}

/* ---------- Appel ThermoMatch : nuit polaire ---------- */

export function FrostCta({
  title = "Trouvez la bonne thermopompe en 2 minutes",
  text = "Répondez à 13 questions sur votre maison. ThermoMatch compare toutes les marques avec les données certifiées d'Hydro-Québec et vous propose trois machines vraiment adaptées, sans parti pris.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <MotionConfig reducedMotion="user">
      <section className="frs-root px-5 py-6 sm:px-8 lg:px-12" style={{ background: "#FFFFFF", fontFamily: DISPLAY }}>
        <motion.div
          className="relative mx-auto max-w-[1440px] overflow-hidden px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20"
          style={{ background: FR.navy, color: "#FFFFFF" }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 1, ease: EASE }}
        >
          <FrostCrystal size={220} branches={4} color="rgba(255,255,255,0.55)" shade="rgba(156,195,218,0.35)" className="absolute -right-12 -top-14" delay={0.4} />
          <FrostCrystal size={90} branches={3} color="rgba(255,255,255,0.4)" shade="rgba(156,195,218,0.3)" className="absolute bottom-8 right-[28%] hidden lg:block" delay={1.1} />
          <div className="relative grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-14">
            <div className="lg:col-span-7">
              <FrostHead title={title} dark />
              <motion.p
                className="text-[16.5px] leading-[1.66]"
                style={{ color: "rgba(255,255,255,0.74)", margin: "20px 0 0", maxWidth: "60ch", fontFamily: "var(--font-sans)" }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW}
                transition={{ duration: 1, ease: EASE, delay: 0.3 }}
              >
                {MINUS(typo(text))}
              </motion.p>
            </div>
            <motion.div
              className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 1, ease: EASE, delay: 0.45 }}
            >
              <Link
                href="/trouver-ma-thermopompe"
                className="group inline-flex min-h-[50px] items-center justify-center gap-3 rounded-[14px] py-3.5 pl-6 pr-5 text-[15px] font-semibold transition-transform duration-300 hover:-translate-y-0.5"
                style={{ background: "#FFFFFF", color: FR.navy }}
              >
                Lancer ThermoMatch
                <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke={FR.steel} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-500 group-hover:translate-x-1">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/soumission"
                className="inline-flex min-h-[50px] items-center justify-center rounded-[14px] px-6 py-3.5 text-[15px] font-semibold transition-colors duration-300 hover:bg-white/10"
                style={{ border: "1px solid rgba(255,255,255,0.28)", color: "#FFFFFF" }}
              >
                Demander une soumission
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
