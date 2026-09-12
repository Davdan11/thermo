"use client";

import "../sections.css";
import "./mecanisme.css";
import { useRef, useSyncExternalStore, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { DISPLAY, MONO, outilsMono } from "@/components/heroes-v2/outils/fonts";
import { EASE, Reveal, Rule, VIEW, useDraw } from "../kit";

/* ==================================================================
   /technologie-thermomatch, sous le héros « Le mécanisme ». La page
   continue la planche 01 comme un manuel technique : papier blanc,
   encre, trait orange, cartouche « Planche NN » en tête de chaque
   section, mécanismes numérotés, schémas au trait qui se tracent au
   défilement, notes de spécification en mono. Les points qui circulent
   (signature du héros) reviennent dans le schéma des critères et dans
   la dernière planche.
   Tous les textes de l'ancienne page sont repris ; aucun chiffre ajouté.
   ================================================================== */

const M = {
  paper: "#FFFFFF",
  ink: "#10212B",
  soft: "rgba(16,33,43,0.68)",
  faint: "rgba(16,33,43,0.46)",
  hair: "rgba(16,33,43,0.14)",
  orange: "#E54B17",
} as const;

const WRAP = "mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12";

/* ---------------- Petites pièces du manuel ---------------- */

/** Cartouche de planche, comme celui du héros. */
function Plate({ n, name, dark = false }: { n: number; name: string; dark?: boolean }) {
  return (
    <Reveal y={0} duration={0.8}>
      <div className="relative flex items-center justify-between gap-4 pb-3 text-[10.5px] uppercase sm:text-[11px]" style={{ fontFamily: MONO, letterSpacing: "0.18em", color: dark ? "rgba(255,255,255,0.55)" : M.faint }}>
        <span>Planche {String(n).padStart(2, "0")}</span>
        <span className="text-right">{name}</span>
        <Rule className="absolute inset-x-0 bottom-0 h-px" color={dark ? "rgba(255,255,255,0.18)" : M.hair} duration={1.4} />
      </div>
    </Reveal>
  );
}

/** Titre de planche : léger, serré, comme le h1 du héros. */
function Title({ children, className = "", style, dark = false }: { children: ReactNode; className?: string; style?: CSSProperties; dark?: boolean }) {
  return (
    <Reveal y={22} delay={0.08} duration={1}>
      <h2 className={className} style={{ fontSize: "clamp(34px, 3.9vw, 62px)", fontWeight: 300, letterSpacing: "-0.045em", lineHeight: 1.04, margin: "36px 0 0", color: dark ? "#fff" : M.ink, textWrap: "balance", ...style }}>
        {children}
      </h2>
    </Reveal>
  );
}

function Num({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`block text-[11px] ${className}`} style={{ fontFamily: MONO, color: M.orange, letterSpacing: "0.1em" }}>
      {children}
    </span>
  );
}

/** Coche au trait, tracée quand elle entre à l'écran. */
function Tick({ delay = 0, size = 16, color = M.orange }: { delay?: number; size?: number; color?: string }) {
  const draw = useDraw();
  return (
    <svg aria-hidden="true" width={size} height={size * 0.875} viewBox="0 0 16 14" fill="none" className="shrink-0 overflow-visible">
      <motion.path d="M1.5 7.6c1.4 1 2.4 2.3 3.3 4.2C7 7 10.2 3.2 14.6 1" stroke={color} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...draw(delay, 0.5)} />
    </svg>
  );
}

/* Vrai une fois monté côté client, faux au rendu serveur et à l'hydratation (pas d'écart). */
const noopSubscribe = () => () => {};
function useMounted() {
  return useSyncExternalStore(noopSubscribe, () => true, () => false);
}

/** Joue les boucles (SMIL, CSS) seulement quand la figure est à l'écran et que le mouvement est permis. */
function usePlay<T extends Element>() {
  const ref = useRef<T>(null);
  const inView = useInView(ref, { margin: "0px 0px -8% 0px" });
  const reduce = useReduced();
  const mounted = useMounted();
  return { ref, play: mounted && inView && !reduce, inView };
}

/* ==================================================================
   SECTIONS
   ================================================================== */

export function ManualSections({ modelCount, faq, openFaq, onToggleFaq }: { modelCount: number; faq: { id: string; question: string; answer: string }[]; openFaq: string | null; onToggleFaq: (id: string) => void }) {
  const modelCountLabel = `Près de ${modelCount.toLocaleString("fr-CA")} modèles évalués`;
  return (
    <div className={`so-root ${outilsMono.variable}`} style={{ background: M.paper, color: M.ink, fontFamily: DISPLAY }}>
      <SpecStrip />
      <Criteria />
      <DataPlate />
      <HowItWorks modelCountLabel={modelCountLabel} />
      <Climate />
      <Decision />
      <ToProject />
      <Faq items={faq} openFaq={openFaq} onToggle={onToggleFaq} />
      <FinalPlate />
    </div>
  );
}

/* ---------------- Spécifications (bande des principes) ---------------- */
const SPECS: { label: string; icon: ReactNode }[] = [
  { label: "Critères adaptés au Québec", icon: <><path d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7l6-2 5.553 1.846A1 1 0 0121 7.736v10.882a1 1 0 01-1.447.894L15 17l-6 3z" /><path d="M9 7v13M15 4v13" /></> },
  { label: "Données techniques normalisées", icon: <path d="M3 13h2v7H3v-7zm6-5h2v12H9V8zm6-3h2v15h-2V5zm6 8h2v7h-2v-7z" /> },
  { label: "Résultats expliqués", icon: <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /> },
  { label: "Vous gardez le contrôle", icon: <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /> },
];

function SpecStrip() {
  return (
    <section aria-label="Principes de ThermoMatch" className="pb-4">
      <div className={WRAP}>
        <div className="relative">
          <Rule className="h-px w-full" color={M.ink} duration={1.4} />
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {SPECS.map((s, i) => (
              <Reveal as="li" key={s.label} delay={0.1 + i * 0.08} y={10} className={`flex items-center gap-4 py-5 sm:px-5 ${i ? "border-t sm:border-t-0" : ""} ${i % 2 ? "sm:border-l" : ""} ${i === 2 ? "lg:border-l" : ""} ${i >= 2 ? "sm:border-t lg:border-t-0" : ""}`} style={{ borderColor: M.hair }}>
                <svg aria-hidden="true" width="24" height="24" fill="none" stroke={M.ink} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" className="shrink-0">
                  {s.icon}
                </svg>
                <span className="min-w-0">
                  <span className="block text-[10.5px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.16em", color: M.faint }} aria-hidden="true">
                    Spéc. {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-0.5 block text-[15px] font-medium">{s.label}</span>
                </span>
                <span className="ml-auto">
                  <Tick delay={0.4 + i * 0.12} />
                </span>
              </Reveal>
            ))}
          </ul>
          <span aria-hidden="true" className="block h-px w-full" style={{ background: M.hair }} />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Planche 02 : ce que ThermoMatch analyse ---------------- */
const CRITERIA: { title: string; text: string; icon: ReactNode }[] = [
  { title: "Votre propriété", text: "Superficie, type de propriété, étages, année de construction, isolation, fenestration et sous-sol.", icon: <path d="M25 47 49 27l24 20M31 43v31h36V43M43 74V56h12v18" /> },
  { title: "Un vrai hiver, partout au Québec", text: "Nous dimensionnons pour le froid québécois, peu importe votre ville. Votre code postal sert à trouver les installateurs près de chez vous.", icon: <><path d="M40 61V27a9 9 0 0 1 18 0v34a16 16 0 1 1-18 0Z" /><path d="M49 37v32" /></> },
  { title: "La capacité requise", text: "Calcul de la puissance nécessaire pour votre confort.", icon: <><circle cx="50" cy="49" r="22" /><path d="M50 27v8M28 49h8m28 0h8M34 33l6 6m20-6-6 6M50 49l10-10" /></> },
  { title: "Votre niveau de confort", text: "Température souhaitée, uniformité et qualité de l’air.", icon: <><path stroke={M.orange} d="M30 68c16-14-8-23 7-42M48 68c16-14-8-23 7-42M66 68c16-14-8-23 7-42" /><path d="M27 74c12-6 24 6 36 0" /></> },
  { title: "Votre budget", text: "Investissement visé et coûts d’exploitation.", icon: <path d="M26 35h48v37H31a8 8 0 0 1-8-8V32a8 8 0 0 1 8-8h37M60 43h17v18H60a9 9 0 0 1 0-18Z" /> },
  { title: "Les aides disponibles", text: "Subventions et programmes applicables à votre projet.", icon: <path d="m24 44 27-18 27 18M30 46v28m14-28v28m14-28v28m14-28v28M22 77h58" /> },
];

/* Géométrie du moteur (colonne centrale, viewBox 300 × 552 : trois rangées de 184 px). */
const ROW = 184;
const LEADS = [
  "M0 92 H30 C 64 92, 60 246, 94 246",
  "M0 276 H94",
  "M0 460 H30 C 64 460, 60 306, 94 306",
  "M300 92 H270 C 236 92, 240 246, 206 246",
  "M300 276 H206",
  "M300 460 H270 C 236 460, 240 306, 206 306",
];

function CritIcon({ icon }: { icon: ReactNode }) {
  return (
    <svg aria-hidden="true" width="52" height="52" viewBox="0 0 96 96" fill="none" stroke={M.ink} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="shrink-0">
      {icon}
    </svg>
  );
}

function Criteria() {
  const { ref, play } = usePlay<HTMLDivElement>();
  const draw = useDraw();
  return (
    <section className="pb-24 pt-20 lg:pb-32 lg:pt-28">
      <div className={WRAP}>
        <Plate n={2} name="Critères d’analyse" />
        <Title className="max-w-[900px]">Ce que ThermoMatch analyse.</Title>

        {/* Schéma éclaté (grand écran) : six critères reliés au moteur */}
        <div ref={ref} data-play={play ? "true" : "false"} className="mc-loop mt-16 hidden xl:grid" style={{ gridTemplateColumns: "minmax(0,1fr) 300px minmax(0,1fr)", gridTemplateRows: `repeat(3, ${ROW}px)` }}>
          {CRITERIA.slice(0, 3).map((c, i) => (
            <Reveal key={c.title} delay={0.15 + i * 0.1} x={-14} y={0} className="flex items-center justify-end gap-6 pr-2 text-right" style={{ gridColumn: 1, gridRow: i + 1 }}>
              <div className="max-w-[380px]">
                <Num>{String(i + 1).padStart(2, "0")}</Num>
                <h3 className="mt-1.5 text-[19px] font-semibold" style={{ letterSpacing: "-0.02em", margin: "6px 0 0" }}>
                  {c.title}
                </h3>
                <p className="mt-1.5 text-[14.5px] leading-relaxed" style={{ color: M.soft, margin: "6px 0 0" }}>
                  {c.text}
                </p>
              </div>
              <CritIcon icon={c.icon} />
            </Reveal>
          ))}
          <div className="relative" style={{ gridColumn: 2, gridRow: "1 / span 3" }}>
            <svg viewBox="0 0 300 552" className="absolute inset-0 h-full w-full overflow-visible" fill="none" aria-hidden="true">
              {LEADS.map((d, i) => (
                <motion.path key={d} d={d} stroke={i % 3 === 1 ? M.orange : M.ink} strokeOpacity={i % 3 === 1 ? 1 : 0.5} strokeWidth={1.2} strokeDasharray={i % 3 === 1 ? "3 5" : undefined} {...draw(0.3 + i * 0.08, 0.9)} />
              ))}
              {[0, 1, 2].map((r) => (
                <g key={r}>
                  <rect x={-3.5} y={92 + r * ROW - 3.5} width={7} height={7} fill={M.paper} stroke={M.ink} strokeWidth={1.2} />
                  <rect x={296.5} y={92 + r * ROW - 3.5} width={7} height={7} fill={M.paper} stroke={M.ink} strokeWidth={1.2} />
                </g>
              ))}
              {/* Moteur : puce au trait */}
              <motion.rect x={94} y={220} width={112} height={112} stroke={M.ink} strokeWidth={1.5} fill={M.paper} {...draw(0.9, 1)} />
              <motion.rect x={114} y={240} width={72} height={72} stroke={M.ink} strokeOpacity={0.35} {...draw(1.1, 0.8)} />
              {[122, 150, 178].map((x) => (
                <g key={x}>
                  <motion.path d={`M${x} 206 V220 M${x} 332 V346`} stroke={M.ink} strokeWidth={1.2} {...draw(1.3, 0.4)} />
                </g>
              ))}
              <rect className="mc-core" x={138} y={264} width={24} height={24} fill={M.orange} />
              {play &&
                LEADS.map((d, i) => (
                  <circle key={`dot-${i}`} r={2.8} fill={M.orange} opacity={0}>
                    <animateMotion path={d} dur={`${2.6 + (i % 3) * 0.3}s`} begin={`${-i * 0.55}s`} repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur={`${2.6 + (i % 3) * 0.3}s`} begin={`${-i * 0.55}s`} repeatCount="indefinite" />
                  </circle>
                ))}
            </svg>
            <Reveal delay={1.2} y={6} className="absolute inset-x-0 text-center" style={{ top: 362 }}>
              <span className="block text-[11px] uppercase leading-[1.6]" style={{ fontFamily: MONO, letterSpacing: "0.16em", color: M.ink }}>
                Moteur de
                <br />
                correspondance
                <br />
                <span style={{ color: M.orange }}>ThermoMatch</span>
              </span>
            </Reveal>
          </div>
          {CRITERIA.slice(3).map((c, i) => (
            <Reveal key={c.title} delay={0.2 + i * 0.1} x={14} y={0} className="flex items-center gap-6 pl-2" style={{ gridColumn: 3, gridRow: i + 1 }}>
              <CritIcon icon={c.icon} />
              <div className="max-w-[380px]">
                <Num>{String(i + 4).padStart(2, "0")}</Num>
                <h3 className="mt-1.5 text-[19px] font-semibold" style={{ letterSpacing: "-0.02em", margin: "6px 0 0" }}>
                  {c.title}
                </h3>
                <p className="mt-1.5 text-[14.5px] leading-relaxed" style={{ color: M.soft, margin: "6px 0 0" }}>
                  {c.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Schéma vertical (mobile et tablette) : le bus remonte vers le moteur */}
        <div className="mt-12 xl:hidden">
          <Reveal className="flex items-center gap-4">
            <svg aria-hidden="true" width="46" height="46" viewBox="0 0 46 46" fill="none">
              <rect x="6" y="6" width="34" height="34" stroke={M.ink} strokeWidth="1.4" />
              <rect x="17" y="17" width="12" height="12" fill={M.orange} className="mc-core" />
              <path d="M14 0v6M23 0v6M32 0v6M14 40v6M23 40v6M32 40v6" stroke={M.ink} strokeWidth="1.2" />
            </svg>
            <span className="text-[11px] uppercase leading-[1.5]" style={{ fontFamily: MONO, letterSpacing: "0.16em" }}>
              Moteur de correspondance <span style={{ color: M.orange }}>ThermoMatch</span>
            </span>
          </Reveal>
          <ol className="relative mt-4 pl-10" style={{ listStyle: "none", margin: "16px 0 0", padding: "0 0 0 40px" }}>
            <Rule vertical className="absolute bottom-6 left-[22px] top-0 w-px" color={M.ink} duration={1.6} style={{ opacity: 0.4 }} />
            <span aria-hidden="true" className="mc-loop absolute bottom-6 left-[20px] top-0 w-[5px]">
              <span className="mc-bus-dot absolute left-0 block h-[5px] w-[5px] rounded-full" style={{ background: M.orange }} />
              <span className="mc-bus-dot absolute left-0 block h-[5px] w-[5px] rounded-full" style={{ background: M.orange }} />
              <span className="mc-bus-dot absolute left-0 block h-[5px] w-[5px] rounded-full" style={{ background: M.orange }} />
            </span>
            {CRITERIA.map((c, i) => (
              <Reveal as="li" key={c.title} delay={0.08 * i} y={12} className="relative flex gap-4 py-5" style={{ borderBottom: i < CRITERIA.length - 1 ? `1px solid ${M.hair}` : undefined }}>
                <span aria-hidden="true" className="absolute left-[-22px] top-[30px] block h-[9px] w-[9px]" style={{ background: M.paper, border: `1.2px solid ${M.ink}` }} />
                <div className="min-w-0 flex-1">
                  <Num>{String(i + 1).padStart(2, "0")}</Num>
                  <h3 className="mt-1 text-[18px] font-semibold" style={{ letterSpacing: "-0.02em", margin: "4px 0 0" }}>
                    {c.title}
                  </h3>
                  <p className="mt-1 text-[14.5px] leading-relaxed" style={{ color: M.soft, margin: "4px 0 0" }}>
                    {c.text}
                  </p>
                </div>
                <CritIcon icon={c.icon} />
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Planche 03 : des données complexes ---------------- */
const TABLE: [string, number[]][] = [
  ["Capacité", [90, 80, 75]],
  ["Performance par grand froid", [95, 70, 70]],
  ["Efficacité", [85, 80, 85]],
  ["Niveau sonore", [70, 85, 75]],
  ["Garantie", [80, 100, 80]],
];

function Bar({ pct, delay }: { pct: number; delay: number }) {
  const reduce = useReduced();
  return (
    <span className="relative block h-[3px] w-full max-w-[104px]" style={{ background: "rgba(16,33,43,0.1)" }}>
      <motion.span className="absolute inset-y-0 left-0 block origin-left" style={{ width: `${pct}%`, background: M.orange }} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={VIEW} transition={reduce ? { duration: 0 } : { duration: 1, ease: EASE, delay }} />
      <span aria-hidden="true" className="absolute top-[-3px] block h-[9px] w-px" style={{ left: `${pct}%`, background: M.ink }} />
    </span>
  );
}

function DataPlate() {
  return (
    <section className="pb-24 lg:pb-32">
      <div className={WRAP}>
        <Plate n={3} name="Normalisation des données" />
        <div className="mt-12 grid grid-cols-1 items-start gap-12 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] xl:gap-20">
          <div className="xl:row-span-2">
            <Reveal y={22} duration={1}>
              <h2 style={{ fontSize: "clamp(34px, 3.4vw, 54px)", fontWeight: 300, letterSpacing: "-0.045em", lineHeight: 1.04, margin: 0 }}>
                Des données complexes.
                <br />
                <span style={{ color: M.orange }}>Une comparaison claire.</span>
              </h2>
            </Reveal>
            <Rule className="mt-7 h-px w-12" color={M.orange} delay={0.3} />
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-lg text-[16.5px] leading-[1.65]" style={{ color: M.soft, margin: "24px 0 0" }}>
                ThermoMatch normalise les spécifications des fabricants pour vous présenter des indicateurs cohérents et comparables.
              </p>
            </Reveal>
          </div>

          <div className="min-w-0">
            <Reveal y={16} className="relative mb-4 flex justify-center">
              <Image src="/images/thermomatch/thermomatch-product-comparison-transparent.png" alt="Comparaison de thermopompes" width={600} height={300} className="h-auto w-full max-w-[600px] object-contain" />
              <span aria-hidden="true" className="absolute bottom-1 left-0 text-[10.5px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.16em", color: M.faint }}>
                Fig. 3
              </span>
            </Reveal>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[420px] border-collapse text-left">
                <thead>
                  <tr style={{ borderTop: `1px solid ${M.ink}`, borderBottom: `1px solid ${M.ink}` }}>
                    <th className="py-3 pr-4 text-[10.5px] font-medium uppercase" style={{ width: "25%", fontFamily: MONO, letterSpacing: "0.16em" }}>
                      Capacité
                    </th>
                    <th style={{ width: "25%" }}></th>
                    <th style={{ width: "25%" }}></th>
                    <th style={{ width: "25%" }}></th>
                  </tr>
                </thead>
                <tbody>
                  {TABLE.map(([label, vals], r) => (
                    <tr key={label} style={{ borderBottom: `1px solid ${M.hair}` }}>
                      <td className="py-3.5 pr-4 text-[14px]" style={{ color: M.soft }}>
                        {label}
                      </td>
                      {vals.map((v, c) => (
                        <td key={c} className="py-3.5 pr-4">
                          <Bar pct={v} delay={0.2 + r * 0.08 + c * 0.06} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <Reveal delay={0.25} y={14} className="relative xl:mt-2">
            <div className="relative py-6 pl-6 pr-5" style={{ borderLeft: `1.5px solid ${M.orange}` }}>
              <span className="block text-[10.5px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.18em", color: M.orange }} aria-hidden="true">
                Note
              </span>
              <p className="mt-3 text-[15px] leading-relaxed" style={{ color: M.ink, margin: "12px 0 0" }}>
                Les fiches techniques contiennent plusieurs mesures différentes. Nous les traduisons en indicateurs simples pour comparer ce qui compte pour vous.
              </p>
              <Link href="/thermopompes" className="mc-link mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold">
                En savoir plus <span className="mc-chev">›</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Planche 04 : comment votre match est construit ---------------- */
function HowItWorks({ modelCountLabel }: { modelCountLabel: string }) {
  const { ref, play } = usePlay<HTMLDivElement>();
  const reduce = useReduced();
  const steps = [
    { num: "01", title: "Décrivez votre maison", desc: "Répondez à quelques questions simples sur votre propriété et vos besoins." },
    { num: "02", title: "ThermoMatch filtre les options", desc: "Les modèles qui ne répondent pas à vos critères essentiels sont écartés." },
    { num: "03", title: "Les modèles sont classés selon vos priorités", desc: "Les options restantes sont classées en fonction de ce qui compte le plus pour vous." },
    { num: "04", title: "Chaque recommandation est expliquée", desc: "Comprenez pourquoi chaque modèle correspond à votre situation." },
  ];
  const card: CSSProperties = { border: `1px solid ${M.hair}`, background: M.paper, padding: "18px 18px 20px" };
  const cardTitle = "text-[13px] font-semibold leading-snug";
  const small = "text-[12.5px]";
  const t = (d: number) => (reduce ? { duration: 0 } : { duration: 0.5, ease: EASE, delay: d });

  const figures = [
    <div key="f1" style={card}>
      <p className={cardTitle} style={{ margin: 0 }}>Quelle est la superficie de votre espace à chauffer&nbsp;?</p>
      <ul className="mt-4 space-y-2.5" style={{ listStyle: "none", padding: 0, margin: "16px 0 0" }}>
        {["Moins de 1 000 pi²", "1 000 à 2 000 pi²", "Plus de 2 000 pi²"].map((o, i) => (
          <li key={o} className={`flex items-center gap-2.5 ${small}`} style={{ color: i === 1 ? M.ink : M.soft, fontWeight: i === 1 ? 600 : 400 }}>
            <span aria-hidden="true" className="relative block h-[11px] w-[11px] rounded-full" style={{ border: `1.3px solid ${i === 1 ? M.orange : "rgba(16,33,43,0.3)"}` }}>
              {i === 1 && <motion.span className="absolute inset-[2px] rounded-full" style={{ background: M.orange }} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={VIEW} transition={t(0.8)} />}
            </span>
            {o}
          </li>
        ))}
      </ul>
      <span aria-hidden="true" className="mt-5 block py-2 text-center text-[11px] font-semibold uppercase" style={{ background: M.orange, color: "#fff", letterSpacing: "0.1em" }}>
        Suivant
      </span>
    </div>,
    <div key="f2" style={card}>
      <p className={cardTitle} style={{ margin: 0 }}>Options retenues pour vous</p>
      <ul className="mt-4 space-y-3" style={{ listStyle: "none", padding: 0, margin: "16px 0 0" }}>
        <li className={`flex items-center gap-2.5 ${small}`} style={{ color: M.soft }}>
          <Tick delay={0.6} size={14} color="#15a267" /> {modelCountLabel}
        </li>
        <li className={`flex items-center gap-2.5 ${small} font-semibold`} style={{ color: M.ink }}>
          <Tick delay={0.9} size={14} color="#15a267" /> 3 machines retenues
        </li>
      </ul>
    </div>,
    <div key="f3" style={card}>
      <p className={cardTitle} style={{ margin: 0 }}>Meilleures options pour vous</p>
      <ul className="mt-4 space-y-3" style={{ listStyle: "none", padding: 0, margin: "16px 0 0" }}>
        {[91, 75, 59].map((w, i) => (
          <li key={w} className="flex items-center gap-3">
            <span className="w-3 text-[12px] font-semibold">{i + 1}</span>
            <svg aria-hidden="true" width="26" height="20" viewBox="0 0 29 23" fill="none">
              <rect x="0.5" y="0.5" width="28" height="22" rx="2" stroke="#81929a" />
              <circle cx="14" cy="11.5" r="6.5" stroke="#81929a" />
            </svg>
            <span className="relative block h-[4px] flex-1 rounded-full" style={{ background: "#f3bba6" }}>
              <motion.span className="absolute inset-y-0 left-0 block origin-left rounded-full" style={{ width: `${w}%`, background: M.orange }} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={VIEW} transition={reduce ? { duration: 0 } : { duration: 1, ease: EASE, delay: 0.5 + i * 0.15 }} />
            </span>
          </li>
        ))}
      </ul>
    </div>,
    <div key="f4" style={card}>
      <p className={cardTitle} style={{ margin: 0 }}>Pourquoi ce modèle&nbsp;?</p>
      <ul className="mt-4 space-y-2.5" style={{ listStyle: "none", padding: 0, margin: "16px 0 0" }}>
        {["Adapté à votre maison", "Bonne performance en hiver", "Silencieux", "Correspond à votre budget"].map((o, i) => (
          <motion.li key={o} className={`flex items-center gap-2.5 ${small}`} style={{ color: M.soft }} initial={{ opacity: 0, x: -6 }} whileInView={{ opacity: 1, x: 0 }} viewport={VIEW} transition={t(0.5 + i * 0.12)}>
            <span aria-hidden="true" className="block h-[8px] w-[8px] rounded-full" style={{ background: M.orange }} />
            {o}
          </motion.li>
        ))}
      </ul>
    </div>,
  ];

  return (
    <section id="fonctionnement" className="scroll-mt-24 pb-24 lg:pb-32">
      <div className={WRAP}>
        <Plate n={4} name="Séquence de sélection" />
        <Title className="max-w-[900px]">Comment votre match est construit.</Title>
        <div ref={ref} data-play={play ? "true" : "false"} className="relative mt-14">
          {/* Fil orange qui relie les quatre mécanismes (ordinateur) */}
          <div aria-hidden="true" className="mc-loop absolute left-0 right-0 top-[15px] hidden h-px lg:block">
            <Rule className="h-px w-full" color={M.orange} duration={1.8} delay={0.2} />
            <span className="mc-wire-dot absolute top-[-3px] block h-[7px] w-[7px] rounded-full" style={{ background: M.orange }} />
          </div>
          <ol className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {steps.map((s, i) => (
              <Reveal as="li" key={s.num} delay={0.15 + i * 0.15} y={18} className="flex flex-col">
                <span className="relative inline-flex w-max items-center pr-3 text-[30px] font-light leading-none" style={{ color: M.orange, background: M.paper, letterSpacing: "-0.02em" }}>
                  {s.num}
                </span>
                <h3 className="mt-5 text-[18px] font-semibold leading-snug" style={{ letterSpacing: "-0.015em", margin: "20px 0 0" }}>
                  {s.title}
                </h3>
                <p className="mt-2 max-w-[320px] text-[14.5px] leading-relaxed" style={{ color: M.soft, margin: "8px 0 0" }}>
                  {s.desc}
                </p>
                <div className="mt-7 max-w-[300px]">{figures[i]}</div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Planche 05 : climat québécois ---------------- */
const ClimateIcons: ReactNode[] = [
  <path key="c" strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.95l-.71.71M21 12h-1M4 12H3m16.95 7.95l-.71-.71M4.05 4.05l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" />,
  <path key="h" strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />,
  <path key="b" strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />,
  <path key="p" strokeLinecap="round" strokeLinejoin="round" d="M3 21h18M3 10l9-7 9 7M5 10v11h14V10" />,
];

function Climate() {
  const draw = useDraw();
  const reduce = useReduced();
  const items = [
    { title: "Températures hivernales", desc: "Seuil de fonctionnement en conditions extrêmes." },
    { title: "Cycles de dégivrage", desc: "Fréquence et conséquences sur le confort." },
    { title: "Capacité à basse température", desc: "Maintien de la puissance quand il fait froid." },
    { title: "Efficacité saisonnière", desc: "Performance sur toute la saison de chauffage." },
  ];
  const dots: [number, number][] = [
    [80, 113],
    [180, 116],
    [280, 121],
    [380, 131],
    [480, 144],
    [575, 160],
  ];
  return (
    <section className="pb-24 lg:pb-32">
      <div className={WRAP}>
        <Plate n={5} name="Conditions hivernales" />
        <div className="mt-4 grid grid-cols-1 items-start gap-14 xl:grid-cols-[minmax(0,0.9fr)_minmax(0,1.25fr)] xl:gap-20">
          <div>
            <Title>Conçu pour le climat québécois.</Title>
            <Rule className="mt-7 h-px w-12" color={M.orange} delay={0.3} />
            <Reveal delay={0.1}>
              <p className="mt-6 text-[16.5px] font-medium leading-[1.6]" style={{ color: M.soft, margin: "24px 0 0" }}>
                ThermoMatch met l&apos;accent sur les performances réelles en hiver.
              </p>
            </Reveal>
            <ol className="mt-10" style={{ listStyle: "none", margin: "40px 0 0", padding: 0, borderTop: `1px solid ${M.hair}` }}>
              {items.map((it, i) => (
                <Reveal as="li" key={it.title} delay={0.1 + i * 0.08} y={10} className="grid grid-cols-[44px_32px_1fr] items-start gap-x-3 py-4" style={{ borderBottom: `1px solid ${M.hair}` }}>
                  <span className="pt-1 text-[11px]" style={{ fontFamily: MONO, color: M.orange }}>
                    5.{i + 1}
                  </span>
                  <svg aria-hidden="true" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke={M.ink} strokeWidth="1.3">
                    {ClimateIcons[i]}
                  </svg>
                  <span>
                    <h3 className="text-[16px] font-semibold" style={{ margin: 0 }}>
                      {it.title}
                    </h3>
                    <span className="mt-0.5 block text-[14px] leading-snug" style={{ color: M.soft }}>
                      {it.desc}
                    </span>
                  </span>
                </Reveal>
              ))}
            </ol>
          </div>

          <div className="relative xl:pt-8">
            {/* Planche photo */}
            <Reveal y={20} duration={1.1} className="relative ml-auto w-full xl:w-[88%]">
              <div className="relative overflow-hidden" style={{ aspectRatio: "3 / 2", border: `1px solid ${M.hair}` }}>
                <Image src="/images/thermomatch/thermomatch-cold-climate-photo.png" alt="Thermopompe Mitsubishi dans la neige" fill sizes="(min-width: 1280px) 50vw, 100vw" className="object-cover" quality={90} />
              </div>
              <span aria-hidden="true" className="mt-2 block text-right text-[10.5px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.16em", color: M.faint }}>
                Fig. 5
              </span>
            </Reveal>
            {/* Graphique au trait, posé sur la planche */}
            <Reveal y={26} delay={0.2} duration={1.1} className="relative z-[1] -mt-10 w-full sm:-mt-24 sm:w-[86%] xl:-mt-40 xl:w-[78%]">
              <div className="px-5 pb-4 pt-6 sm:px-7" style={{ background: M.paper, border: `1px solid ${M.ink}`, boxShadow: "12px 12px 0 rgba(16,33,43,0.06)" }}>
                <p className="text-[18px] font-semibold sm:text-[20px]" style={{ margin: 0, letterSpacing: "-0.02em" }}>
                  Performance stable quand il fait froid
                </p>
                <p className="mt-1 text-[12.5px]" style={{ color: M.soft, margin: "4px 0 0" }}>
                  Exemple de maintien de la capacité de chauffage
                </p>
                <svg viewBox="14 84 590 272" className="mt-3 h-auto w-full overflow-visible" role="img" aria-label="Graphique illustratif">
                  <motion.path stroke="#d9dfe2" strokeDasharray="4 5" d="M72 105h510M72 153h510M72 201h510M72 249h510M72 297h510" fill="none" {...draw(0.2, 1.2)} />
                  <motion.path stroke="#aab5ba" d="M72 89v208h510" fill="none" {...draw(0.1, 1)} />
                  <g fontFamily="var(--font-outils-mono), ui-monospace, monospace" fontSize="11" fill="#667680">
                    <text x="26" y="109">100%</text>
                    <text x="34" y="157">75%</text>
                    <text x="34" y="205">50%</text>
                    <text x="34" y="253">25%</text>
                    <text x="42" y="301">0%</text>
                  </g>
                  <g fontFamily="var(--font-outils-mono), ui-monospace, monospace" fontSize="11" fill="#667680">
                    <text x="64" y="320">−25</text>
                    <text x="162" y="320">−20</text>
                    <text x="260" y="320">−15</text>
                    <text x="361" y="320">−10</text>
                    <text x="470" y="320">−5</text>
                    <text x="574" y="320">0</text>
                    <text x="250" y="346">Température extérieure (°C)</text>
                  </g>
                  <motion.path fill="none" stroke="#99a7ad" strokeWidth="2.5" strokeDasharray="8 6" d="M80 122c100 10 190 31 280 61s150 64 215 108" {...draw(0.6, 1.6)} />
                  <motion.path fill="none" stroke={M.orange} strokeWidth="3" d="M80 113C180 116 270 120 365 128s150 18 210 32" {...draw(0.5, 1.6)} />
                  {dots.map(([x, y], i) => (
                    <motion.circle key={x} cx={x} cy={y} r={4} fill={M.orange} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={VIEW} style={{ transformOrigin: `${x}px ${y}px`, transformBox: "view-box" }} transition={reduce ? { duration: 0 } : { duration: 0.35, ease: EASE, delay: 0.7 + i * 0.22 }} />
                  ))}
                </svg>
                <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-[11.5px]" style={{ color: "#667680" }}>
                  <span className="flex items-center gap-2">
                    <svg aria-hidden="true" width="22" height="8" viewBox="0 0 22 8">
                      <line x1="0" y1="4" x2="22" y2="4" stroke={M.orange} strokeWidth="3" />
                      <circle cx="11" cy="4" r="3" fill={M.orange} />
                    </svg>
                    Exemple de thermopompe performante
                  </span>
                  <span className="flex items-center gap-2">
                    <svg aria-hidden="true" width="22" height="8" viewBox="0 0 22 8">
                      <line x1="0" y1="4" x2="22" y2="4" stroke="#99a7ad" strokeWidth="2.5" strokeDasharray="4 3" />
                    </svg>
                    Thermopompe standard
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Planche 06 : vous restez maître de la décision ---------------- */
function Decision() {
  const draw = useDraw();
  const reduce = useReduced();
  const cols = [
    {
      title: "Vos critères",
      text: "Modifiez vos réponses quand vous voulez et voyez l’impact sur les résultats.",
      href: "#fonctionnement",
      link: "Ajuster mes réponses",
      art: (
        <svg aria-hidden="true" width="150" height="84" viewBox="0 0 150 84" fill="none">
          {[18, 42, 66].map((y, i) => (
            <g key={y}>
              <motion.path d={`M6 ${y}H144`} stroke={M.ink} strokeWidth="1.3" strokeLinecap="round" {...draw(0.2 + i * 0.12, 0.8)} />
              <g className={`mc-knob mc-knob-${i + 1}`}>
                <motion.circle cy={y} r="6.5" fill={M.paper} stroke={M.orange} strokeWidth="1.8" initial={{ cx: 16 }} whileInView={{ cx: [52, 102, 64][i] }} viewport={VIEW} transition={reduce ? { duration: 0 } : { duration: 1.1, ease: EASE, delay: 0.6 + i * 0.15 }} />
              </g>
            </g>
          ))}
        </svg>
      ),
    },
    {
      title: "Vos comparaisons",
      text: "Inspectez les spécifications, les avantages et les raisons derrière chaque suggestion.",
      href: "/comparer",
      link: "Voir les détails",
      art: (
        <svg aria-hidden="true" width="150" height="84" viewBox="0 0 150 84" fill="none">
          {[20, 34, 48, 62].map((y, i) => (
            <motion.path key={y} d={`M8 ${y}H${[118, 96, 128, 84][i]}`} stroke={M.ink} strokeOpacity="0.3" strokeWidth="1.3" strokeLinecap="round" {...draw(0.2 + i * 0.08, 0.6)} />
          ))}
          <g className="mc-lens">
            <motion.circle cx="44" cy="36" r="19" stroke={M.orange} strokeWidth="1.8" fill="rgba(255,255,255,0.6)" {...draw(0.6, 0.8)} />
            <motion.path d="m58 50 16 16" stroke={M.orange} strokeWidth="2.2" strokeLinecap="round" {...draw(1.1, 0.4)} />
          </g>
        </svg>
      ),
    },
    {
      title: "Votre décision",
      text: "Vous choisissez librement le modèle qui correspond le mieux à vos besoins.",
      href: "/thermopompes",
      link: "Je choisis",
      art: (
        <svg aria-hidden="true" width="150" height="84" viewBox="0 0 150 84" fill="none">
          <motion.path d="M10 44 L34 66 L96 12" stroke={M.orange} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" {...draw(0.4, 0.8)} />
          <motion.path d="M10 78 H144" stroke={M.ink} strokeWidth="1.3" strokeLinecap="round" {...draw(0.2, 1)} />
        </svg>
      ),
    },
  ];
  return (
    <section className="pb-24 lg:pb-32">
      <div className={WRAP}>
        <Plate n={6} name="Contrôle" />
        <Title className="max-w-[900px]">Vous restez maître de la décision.</Title>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3" style={{ borderTop: `1px solid ${M.ink}` }}>
          {cols.map((c, i) => (
            <Reveal key={c.title} delay={0.1 + i * 0.12} y={16} className={`mc-col flex flex-col py-8 md:px-8 ${i ? "border-t md:border-l md:border-t-0" : "md:pl-0"}`} style={{ borderColor: M.hair }}>
              <div className="flex items-baseline justify-between">
                <Num>6.{i + 1}</Num>
              </div>
              <div className="mt-6 h-[84px]">{c.art}</div>
              <h3 className="mt-6 text-[20px] font-semibold" style={{ letterSpacing: "-0.02em", margin: "24px 0 0" }}>
                {c.title}
              </h3>
              <p className="mt-2 max-w-[340px] text-[14.5px] leading-relaxed" style={{ color: M.soft, margin: "8px 0 0" }}>
                {c.text}
              </p>
              <Link href={c.href} className="mc-link mt-5 inline-flex w-max items-center gap-1 text-[14px] font-semibold">
                {c.link} <span className="mc-chev text-[15px]">›</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Planche 07 : du match au projet ---------------- */
function ToProject() {
  const reduce = useReduced();
  const draw = useDraw();
  const steps = [
    { num: "01", label: "Votre sélection", desc: "Vous confirmez le modèle qui vous convient." },
    { num: "02", label: "Votre soumission", desc: "Un installateur partenaire évalue votre maison et vous remet un prix écrit." },
    { num: "03", label: "Votre demande", desc: "Vous soumettez votre projet en quelques minutes." },
    { num: "04", label: "La planification", desc: "Installation planifiée selon vos disponibilités." },
  ];
  return (
    <section className="pb-24 lg:pb-32">
      <div className={WRAP}>
        <Plate n={7} name="Suite du parcours" />
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-end">
          <Title>Du match au projet.</Title>
          <Reveal delay={0.15}>
            <p className="text-[16px] leading-relaxed" style={{ color: M.soft, margin: 0 }}>
              Vos réponses vous suivent à chaque étape. On ne vous demande jamais deux fois.
            </p>
          </Reveal>
        </div>

        <div className="relative mt-16">
          <Rule className="absolute left-[7px] right-0 top-[7px] hidden h-px md:block" color={M.ink} duration={1.8} style={{ opacity: 0.5 }} />
          <Rule vertical className="absolute bottom-0 left-[7px] top-[7px] w-px md:hidden" color={M.ink} duration={1.8} style={{ opacity: 0.5 }} />
          <ol className="relative grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {steps.map((s, i) => (
              <Reveal as="li" key={s.num} delay={0.2 + i * 0.18} y={10} className="relative pl-10 md:pl-0">
                <motion.span
                  aria-hidden="true"
                  className="absolute left-0 top-0 block h-[15px] w-[15px] md:relative"
                  style={{ border: `1.5px solid ${M.orange}` }}
                  initial={{ backgroundColor: "rgba(229,75,23,0)" }}
                  whileInView={{ backgroundColor: "rgba(229,75,23,1)" }}
                  viewport={VIEW}
                  transition={reduce ? { duration: 0 } : { duration: 0.4, delay: 0.6 + i * 0.25 }}
                />
                <span className="mt-0 block text-[11px] md:mt-5" style={{ fontFamily: MONO, color: M.faint, letterSpacing: "0.1em" }}>
                  {s.num}
                </span>
                <h3 className="mt-1.5 text-[17px] font-semibold" style={{ margin: "6px 0 0" }}>
                  {s.label}
                </h3>
                <p className="mt-1.5 max-w-[260px] text-[14px] leading-relaxed" style={{ color: M.soft, margin: "6px 0 0" }}>
                  {s.desc}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Aperçu de l'avis de reprise des réponses */}
        <Reveal delay={0.2} y={16} className="mx-auto mt-16 max-w-4xl">
          <p className="mb-2 text-[10.5px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.16em", color: M.faint, margin: "0 0 8px" }} aria-hidden="true">
            Aperçu
          </p>
          <div className="flex items-center justify-between gap-4 p-5" style={{ border: `1px solid ${M.ink}`, background: M.paper }}>
            <div className="flex items-center gap-4">
              <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
                <motion.path d="m4 12 5 5 11-13" stroke="#0b9f5a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...draw(0.5, 0.6)} />
              </svg>
              <div>
                <p className="text-[14px] font-semibold leading-snug" style={{ margin: 0 }}>
                  Vos réponses ThermoMatch ont été récupérées
                </p>
                <p className="text-[13px]" style={{ color: M.soft, margin: "2px 0 0" }}>
                  Superficie, isolation, confort souhaité et budget sont déjà appliqués à votre projet.
                </p>
              </div>
            </div>
            <span aria-hidden="true" className="text-xl font-bold" style={{ color: "#8a989e" }}>
              ×
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Planche 08 : questions fréquentes ---------------- */
function Faq({ items, openFaq, onToggle }: { items: { id: string; question: string; answer: string }[]; openFaq: string | null; onToggle: (id: string) => void }) {
  const reduce = useReduced();
  const nb = (s: string) => s.replace(/\s*\?$/, " ?");
  return (
    <section className="pb-24 lg:pb-32">
      <div className={WRAP}>
        <Plate n={8} name="Questions" />
        <div className="grid gap-10 xl:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] xl:gap-20">
          <Title>Questions fréquentes.</Title>
          <div className="xl:pt-10" style={{ borderTop: undefined }}>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, borderTop: `1px solid ${M.ink}` }}>
              {items.map((f, i) => {
                const open = openFaq === f.id;
                return (
                  <Reveal as="li" key={f.id} delay={0.08 * i} y={10} style={{ borderBottom: `1px solid ${M.hair}` }}>
                    <h3 style={{ margin: 0 }}>
                      <button type="button" className="mc-faq-q flex w-full items-center gap-5 py-5 text-left" aria-expanded={open} aria-controls={`${f.id}-r`} id={`${f.id}-q`} onClick={() => onToggle(f.id)}>
                        <span className="w-10 shrink-0 text-[11px]" style={{ fontFamily: MONO, color: M.orange, letterSpacing: "0.08em" }}>
                          Q.{String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="min-w-0 flex-1 text-[17px] font-medium sm:text-[18px]" style={{ letterSpacing: "-0.01em", color: M.ink }}>
                          {nb(f.question)}
                        </span>
                        <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                          <path d="M1 8h14" stroke={M.ink} strokeWidth="1.4" strokeLinecap="round" />
                          <path className="mc-plus-v" d="M8 1v14" stroke={M.ink} strokeWidth="1.4" strokeLinecap="round" />
                        </svg>
                      </button>
                    </h3>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          id={`${f.id}-r`}
                          role="region"
                          aria-labelledby={`${f.id}-q`}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={reduce ? { duration: 0 } : { duration: 0.45, ease: EASE }}
                          style={{ overflow: "hidden" }}
                        >
                          <p className="max-w-[680px] pb-6 pl-[60px] text-[15.5px] leading-[1.7]" style={{ color: M.soft, margin: 0 }}>
                            {f.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Dernière planche : appel à l'action ---------------- */
function FinalPlate() {
  const { ref, play } = usePlay<HTMLElement>();
  const draw = useDraw();
  const O = "#FF6A2B";
  const flows = ["M40 186 H120 C150 186, 150 150, 180 150 H250", "M40 214 H120 C150 214, 150 250, 180 250 H250"];
  return (
    <section ref={ref} data-play={play ? "true" : "false"} className="mc-loop relative overflow-hidden py-20 lg:py-28" style={{ background: M.ink, color: "#fff" }}>
      <div className={WRAP}>
        <Plate n={9} name="Mise en service" dark />
        <div className="mt-6 grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)]">
          <div>
            <Title dark className="max-w-[640px]">
              Trouvez les options adaptées à votre maison.
            </Title>
            <Reveal delay={0.25} className="mt-10">
              <Link href="/trouver-ma-thermopompe" className="so-btn inline-flex items-center gap-3 px-7 py-[15px] text-[15px] font-semibold" style={{ background: M.orange, color: "#fff", borderRadius: 2 }}>
                Commencer
                <span className="text-[12px] font-medium" style={{ letterSpacing: "0.3em", opacity: 0.92 }}>
                  THERMO<span style={{ opacity: 0.72 }}>MATCH</span>
                </span>
                <svg className="so-arrow" aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </Reveal>
          </div>

          {/* Unité extérieure en vue éclatée, au trait orange ; les points entrent dans l'appareil */}
          <div aria-hidden="true" className="relative mx-auto w-full max-w-[560px]">
            <svg viewBox="0 0 560 400" className="h-auto w-full overflow-visible" fill="none">
              {/* caisson arrière */}
              <motion.rect x="250" y="70" width="250" height="230" rx="10" stroke="rgba(255,255,255,0.35)" strokeWidth="1.3" {...draw(0.2, 1.2)} />
              {Array.from({ length: 11 }, (_, k) => (
                <motion.path key={k} d={`M462 ${96 + k * 17}H490`} stroke="rgba(255,255,255,0.25)" strokeWidth="1" {...draw(0.5 + k * 0.03, 0.4)} />
              ))}
              {/* façade décalée (éclaté) */}
              <motion.rect x="224" y="96" width="216" height="220" rx="8" stroke={O} strokeWidth="1.5" initial={{ pathLength: 0, opacity: 0, x: -30 }} whileInView={{ pathLength: 1, opacity: 1, x: 0 }} viewport={VIEW} transition={{ duration: 1.3, ease: EASE, delay: 0.7 }} />
              <motion.circle cx="332" cy="206" r="78" stroke={O} strokeWidth="1.5" {...draw(1, 1.1)} />
              {[62, 46, 30].map((r, k) => (
                <motion.circle key={r} cx="332" cy="206" r={r} stroke="rgba(255,106,43,0.45)" strokeWidth="1" {...draw(1.2 + k * 0.1, 0.9)} />
              ))}
              <g className="mc-fan">
                <path d="M332 206 C318 180 324 158 336 150 C349 166 346 190 332 206 Z" stroke={O} strokeWidth="1.2" />
                <path d="M332 206 C358 198 380 206 386 219 C366 229 344 222 332 206 Z" stroke={O} strokeWidth="1.2" />
                <path d="M332 206 C320 232 304 244 290 242 C293 222 311 209 332 206 Z" stroke={O} strokeWidth="1.2" />
              </g>
              {/* socle et cotes */}
              <motion.path d="M214 330 H510" stroke="rgba(255,255,255,0.35)" strokeWidth="1.2" {...draw(0.3, 1)} />
              <motion.path d="M224 356 H440 M224 350 V362 M440 350 V362" stroke="rgba(255,255,255,0.4)" strokeWidth="1" {...draw(1.4, 0.8)} />
              {/* entrées : vos réponses et le catalogue */}
              {flows.map((d, i) => (
                <motion.path key={d} d={d} stroke={i ? "rgba(255,255,255,0.5)" : O} strokeWidth="1.2" strokeDasharray={i ? undefined : "3 5"} {...draw(0.9 + i * 0.2, 1)} />
              ))}
              <rect x="36" y="182" width="8" height="8" fill={O} />
              <rect x="36" y="210" width="8" height="8" fill="#fff" />
              <text x="36" y="170" fontSize="11" fill={O} letterSpacing="1.6" style={{ fontFamily: MONO }}>
                VOS RÉPONSES
              </text>
              <text x="36" y="240" fontSize="11" fill="rgba(255,255,255,0.6)" letterSpacing="1.6" style={{ fontFamily: MONO }}>
                CATALOGUE
              </text>
              {play &&
                flows.map((d, i) =>
                  [0, 1, 2].map((k) => (
                    <circle key={`${i}-${k}`} r={i ? 2.4 : 3} fill={i ? "#fff" : O} opacity={0}>
                      <animateMotion path={d} dur="2.8s" begin={`${-k * 0.93 - i * 0.4}s`} repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="2.8s" begin={`${-k * 0.93 - i * 0.4}s`} repeatCount="indefinite" />
                    </circle>
                  )),
                )}
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
