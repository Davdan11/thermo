"use client";

import "./marques.css";
import { useMemo } from "react";
import Link from "next/link";
import { motion, MotionConfig } from "motion/react";
import { Crumbs } from "./Crumbs";
import { PLATES, type Callout, type Fan } from "./atelier-plates";
import { DISPLAY, EASE, MONO, PHONE, REASSURANCE, type AtelierVariant, type Crumb, calmNow, CALM } from "./shared";

/* ==================================================================
   « Plan d’atelier » : héros des guides (/thermopompes/[slug]).
   Bleu de plan, trait blanc, bleu pâle. Une planche technique en
   coupe du système dont parle le guide (murale, centrale, multizone…),
   pièces nommées par des renvois ; le titre est composé dans un
   cartouche d’ingénieur. La planche se trace trait par trait, puis
   l’hélice tourne et le frigorigène circule dans les conduites.
   ================================================================== */

const B = {
  blue: "#0D3B66",
  deep: "#092E52",
  pale: "#A9C6E8",
  hair: "rgba(169,198,232,0.34)",
  faint: "rgba(169,198,232,0.72)",
} as const;

const SUBJECT: Record<AtelierVariant, string> = {
  murale: "Thermopompe murale",
  centrale: "Thermopompe centrale",
  multizone: "Thermopompe multizone",
  froid: "Climat froid",
  efficacite: "Cycle frigorifique",
  catalogue: "Gabarits d’appareils",
  installation: "Installation type",
  remplacement: "Remplacement",
};
const SHEET: Record<AtelierVariant, string> = {
  murale: "Coupe de principe",
  centrale: "Coupe de maison",
  multizone: "Coupe de maison",
  froid: "Élévation",
  efficacite: "Schéma du cycle",
  catalogue: "Élévations",
  installation: "Élévation",
  remplacement: "Avant, après",
};

const blade = ({ cx, cy, r }: Fan) =>
  `M${cx} ${cy}C${cx + r * 0.2} ${cy - r * 0.3} ${cx + r * 0.42} ${cy - r * 0.7} ${cx + r * 0.05} ${cy - r * 0.86}C${cx - r * 0.3} ${cy - r * 0.72} ${cx - r * 0.22} ${cy - r * 0.3} ${cx} ${cy}Z`;

function textPos(c: Callout): { x: number; y: number; anchor: "start" | "end" | "middle" } {
  const [x, y] = c.to;
  if (c.side === "start") return { x: x + 5, y: y + 3.5, anchor: "start" };
  if (c.side === "end") return { x: x - 5, y: y + 3.5, anchor: "end" };
  if (c.side === "top") return { x, y: y - 6, anchor: "middle" };
  return { x, y: y + 12, anchor: "middle" };
}

function Drawing({ variant }: { variant: AtelierVariant }) {
  const plate = useMemo(() => PLATES[variant](), [variant]);
  const n = plate.strokes.length;
  const step = Math.min(0.085, 2.8 / Math.max(n, 1));
  const traced = 0.4 + n * step + 0.7;
  const width = { main: 1.6, thin: 1.1, hair: 0.8 } as const;

  return (
    <svg viewBox="0 0 800 440" className="block h-auto w-full overflow-visible" role="img" aria-label={`Schéma de principe : ${SUBJECT[variant].toLowerCase()}`}>
      {plate.strokes.map((s, i) => {
        const delay = 0.4 + i * step;
        const common = {
          d: s.d,
          fill: "none",
          stroke: s.w === "hair" ? B.pale : "#FFFFFF",
          strokeOpacity: s.w === "main" ? 0.95 : s.w === "thin" ? 0.82 : 0.6,
          strokeWidth: width[s.w],
          strokeLinecap: "round" as const,
          strokeLinejoin: "round" as const,
        };
        return s.dash ? (
          <motion.path key={i} {...common} strokeDasharray="5 5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={calmNow() ? CALM : { duration: 0.5, delay }} />
        ) : (
          <motion.path
            key={i}
            {...common}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={calmNow() ? CALM : { pathLength: { duration: 0.9, ease: EASE, delay }, opacity: { duration: 0.01, delay } }}
          />
        );
      })}

      {plate.flows.map((d, i) => (
        <motion.path key={`f${i}`} d={d} className="mq-flow" fill="none" stroke={B.pale} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" initial={{ opacity: 0 }} animate={{ opacity: 0.95 }} transition={calmNow() ? CALM : { duration: 1, delay: traced }} />
      ))}
      {plate.air.map((d, i) => (
        <motion.path key={`a${i}`} d={d} className="mq-air" fill="none" stroke="#FFFFFF" strokeWidth={1.3} strokeLinecap="round" initial={{ opacity: 0 }} animate={{ opacity: 0.55 }} transition={calmNow() ? CALM : { duration: 1, delay: traced + 0.2 }} />
      ))}

      {plate.fans.map((f, i) => (
        <motion.g key={`h${i}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={calmNow() ? CALM : { duration: 1, delay: traced - 0.3 }}>
          <g className="mq-fan" style={{ transformOrigin: `${f.cx}px ${f.cy}px` }}>
            {[0, 120, 240].map((a) => (
              <path key={a} d={blade(f)} transform={`rotate(${a} ${f.cx} ${f.cy})`} fill="rgba(169,198,232,0.14)" stroke="#FFFFFF" strokeOpacity={0.82} strokeWidth={1} />
            ))}
          </g>
          <circle cx={f.cx} cy={f.cy} r={f.r * 0.1} fill="#FFFFFF" />
        </motion.g>
      ))}

      {plate.callouts.map((c, j) => {
        const delay = 0.4 + n * step * 0.55 + j * 0.13;
        const t = textPos(c);
        return (
          <g key={`c${j}`} className="mq-callout">
            {c.leader ? (
              <>
                <motion.circle cx={c.at[0]} cy={c.at[1]} r={2.2} fill={B.pale} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={calmNow() ? CALM : { duration: 0.4, delay }} />
                <motion.path
                  d={`M${c.at[0]} ${c.at[1]}L${c.to[0]} ${c.to[1]}`}
                  fill="none"
                  stroke={B.pale}
                  strokeWidth={0.8}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={calmNow() ? CALM : { pathLength: { duration: 0.6, ease: EASE, delay }, opacity: { duration: 0.01, delay } }}
                />
              </>
            ) : null}
            <motion.text
              x={t.x}
              y={t.y}
              textAnchor={t.anchor}
              fill="#FFFFFF"
              fillOpacity={0.9}
              fontSize={10}
              letterSpacing={1.3}
              style={{ fontFamily: MONO }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={calmNow() ? CALM : { duration: 0.6, delay: delay + 0.4 }}
            >
              {c.text}
            </motion.text>
          </g>
        );
      })}
    </svg>
  );
}

export function AtelierHero({ eyebrow, title, intro, crumbs, variant }: { eyebrow: string; title: string; intro: string; crumbs: Crumb[]; variant: AtelierVariant }) {
  const parts = useMemo(() => [...new Set(PLATES[variant]().callouts.filter((c) => c.leader).map((c) => c.text))], [variant]);
  const cells = [
    { label: "Document", value: eyebrow },
    { label: "Sujet", value: SUBJECT[variant] },
    { label: "Planche", value: SHEET[variant] },
    { label: "Échelle", value: "Sans échelle" },
  ];
  const cellBorder = ["", "border-l", "border-t sm:border-l sm:border-t-0", "border-l border-t sm:border-t-0"];

  return (
    <MotionConfig reducedMotion="user">
    <section
      aria-labelledby="atelier-titre"
      className="relative -mt-[93px] overflow-hidden min-[1700px]:-mt-[105px]"
      style={{ background: `radial-gradient(ellipse 85% 75% at 32% 30%, #124677 0%, ${B.blue} 55%, ${B.deep} 100%)`, color: "#FFFFFF", fontFamily: DISPLAY }}
    >
      {/* Cadre de la feuille, double filet */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-3 bottom-3 top-[100px] sm:inset-x-5 sm:bottom-5 min-[1700px]:top-[112px]"
        style={{ border: `1px solid ${B.hair}` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={calmNow() ? CALM : { duration: 1.2, delay: 0.1 }}
      >
        <span className="absolute inset-[6px]" style={{ border: "1px solid rgba(169,198,232,0.16)" }} />
      </motion.div>

      <div className="relative mx-auto max-w-[1440px] px-7 pb-14 pt-[128px] sm:px-12 lg:px-14 min-[1700px]:pt-[146px]">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={calmNow() ? CALM : { duration: 1, delay: 0.15 }}>
          <Crumbs items={crumbs} className="text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.14em", color: B.pale }} />
        </motion.div>

        <div className="mt-7 grid gap-9 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-8">
          {/* Planche */}
          <div className="order-2 min-w-0 lg:order-none lg:col-span-7">
            <Drawing variant={variant} />
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-1.5 text-[10.5px] uppercase sm:hidden" style={{ fontFamily: MONO, letterSpacing: "0.1em", color: B.pale, listStyle: "none", padding: 0 }}>
              {parts.map((t) => (
                <li key={t} className="flex gap-2">
                  <span aria-hidden="true">–</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          {/* Notes : texte d’intro et appels à l’action */}
          <motion.div
            className="order-3 min-w-0 lg:order-none lg:col-span-5 lg:pt-6 xl:pl-8"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={calmNow() ? CALM : { duration: 1, ease: EASE, delay: 0.9 }}
          >
            <p className="text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.24em", color: B.pale, margin: 0 }}>
              Notes
            </p>
            <ol className="mt-4 space-y-5" style={{ listStyle: "none", padding: 0, margin: "16px 0 0" }}>
              <li className="grid grid-cols-[24px_minmax(0,1fr)] gap-2">
                <span aria-hidden="true" className="text-[12px]" style={{ fontFamily: MONO, color: B.pale }}>
                  1.
                </span>
                <p className="text-[15.5px] leading-[1.65]" style={{ color: "rgba(255,255,255,0.86)", margin: 0, fontFamily: "var(--font-sans)" }}>
                  {intro}
                </p>
              </li>
              <li className="grid grid-cols-[24px_minmax(0,1fr)] gap-2">
                <span aria-hidden="true" className="pt-3.5 text-[12px]" style={{ fontFamily: MONO, color: B.pale }}>
                  2.
                </span>
                <div>
                  <Link href="/trouver-ma-thermopompe" className="mq-paper inline-flex items-center gap-3 px-6 py-4 text-[15px] font-semibold" style={{ background: "#FFFFFF", color: B.blue }}>
                    Trouver ma thermopompe en 2 min
                    <svg aria-hidden="true" width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </li>
              <li className="grid grid-cols-[24px_minmax(0,1fr)] gap-2">
                <span aria-hidden="true" className="text-[12px]" style={{ fontFamily: MONO, color: B.pale }}>
                  3.
                </span>
                <p className="text-[14px] leading-relaxed" style={{ color: "rgba(255,255,255,0.72)", margin: 0 }}>
                  Ou appelez le{" "}
                  <a href={PHONE.href} className="mq-u font-semibold tabular-nums" style={{ color: "#FFFFFF" }}>
                    {PHONE.label}
                  </a>
                  . {REASSURANCE}
                </p>
              </li>
            </ol>
          </motion.div>

          {/* Légende des traits */}
          <motion.div
            className="order-4 hidden lg:order-none lg:col-span-5 lg:flex lg:items-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={calmNow() ? CALM : { duration: 1, delay: 1.6 }}
          >
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pb-1 text-[10px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.1em", color: B.faint }}>
              <span style={{ color: B.pale }}>Légende</span>
              {[
                { label: "Appareil", el: <path d="M0 4H30" stroke="#fff" strokeWidth={1.6} /> },
                { label: "Tracé caché", el: <path d="M0 4H30" stroke="#fff" strokeWidth={1.1} strokeDasharray="5 5" /> },
                { label: "Frigorigène", el: <path d="M0 4H30" className="mq-flow" stroke={B.pale} strokeWidth={1.8} /> },
                { label: "Air", el: <path d="M0 4H30" className="mq-air" stroke="#fff" strokeOpacity={0.6} strokeWidth={1.3} /> },
              ].map((x) => (
                <span key={x.label} className="inline-flex items-center gap-2.5">
                  <svg aria-hidden="true" width={24} height={8} viewBox="0 0 30 8" fill="none">
                    {x.el}
                  </svg>
                  {x.label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Cartouche : le titre du guide */}
          <motion.div
            className="order-1 min-w-0 lg:order-none lg:col-span-7"
            style={{ border: "1.5px solid rgba(255,255,255,0.88)" }}
            initial={{ clipPath: "inset(0 100% 0 0)" }}
            animate={{ clipPath: "inset(0 0% 0 0)" }}
            transition={calmNow() ? CALM : { duration: 1.3, ease: EASE, delay: 0.25 }}
          >
            <div className="px-5 py-4 sm:px-6 sm:py-5" style={{ borderBottom: `1px solid ${B.hair}` }}>
              <p className="text-[10px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.24em", color: B.pale, margin: 0 }}>
                Titre
              </p>
              <h1
                id="atelier-titre"
                style={{ fontWeight: 600, textTransform: "uppercase", fontSize: "clamp(25px, 2.6vw, 44px)", lineHeight: 1.04, letterSpacing: "-0.01em", margin: "10px 0 0", textWrap: "balance" }}
              >
                {title}
              </h1>
            </div>
            <dl className="grid grid-cols-2 sm:grid-cols-4" style={{ margin: 0 }}>
              {cells.map((c, i) => (
                <div key={c.label} className={`px-5 py-3 sm:px-6 ${cellBorder[i]}`} style={{ borderColor: B.hair }}>
                  <dt className="text-[10px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.2em", color: B.pale }}>
                    {c.label}
                  </dt>
                  <dd className="text-[13.5px] font-medium" style={{ margin: "4px 0 0" }}>
                    {c.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
    </MotionConfig>
  );
}
