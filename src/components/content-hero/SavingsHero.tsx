"use client";

import "./content-hero.css";
import "@/components/home/premium/sections.css";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { HC, HERO_EASE, HeroActions, HeroButton, HeroEyebrow, HeroFade, HeroLead, HeroShell, HeroTitle, Serif } from "@/components/hero/HeroKit";
import { AirLines } from "@/components/home/premium/shared";

/* ==================================================================
   Héros du calculateur d'économies : un compteur de rendement (COP).
   Aucun montant inventé : la jauge montre seulement ce que la page
   explique plus bas — des plinthes donnent 1 unité de chaleur par
   unité d'électricité, une thermopompe certifiée climat froid 3 à 4
   (COP 3,0 à 4,0). L'aiguille s'arrête d'abord sur 1, puis balaie
   jusqu'à la plage 3 à 4 et y oscille doucement (le COP varie avec la
   température extérieure). Le vrai calcul est juste en dessous.
   ================================================================== */

export function SavingsHero({ calculatorId }: { calculatorId: string }) {
  return (
    <HeroShell
      size="md"
      labelledBy="ce-titre"
      columns="lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]"
      background={<AirLines color={HC.cream} opacity={0.06} className="pointer-events-none absolute inset-0 h-full w-full" />}
      visual={<CopGauge />}
    >
      <HeroEyebrow>Calculateur d’économies</HeroEyebrow>
      <HeroTitle
        id="ce-titre"
        style={{ fontSize: "clamp(44px, 5.7vw, 98px)" }}
        lines={["Combien allez-vous ", <Serif key="s">{"économiser ?"}</Serif>]}
      />
      <HeroLead>
        L’installation d’une thermopompe est l’un des investissements les plus rentables pour une maison au Québec. Utilisez notre outil pour estimer vos économies annuelles.
      </HeroLead>
      <HeroActions>
        <HeroButton href={`#${calculatorId}`}>Calculer mes économies</HeroButton>
        <HeroButton href="/soumission" variant="ghost">
          Demander une soumission
        </HeroButton>
      </HeroActions>
    </HeroShell>
  );
}

/* ---------- Jauge ---------- */

const CX = 220;
const CY = 236; // même pivot que .ct-needle / .ct-idle
const R = 172;
const MAX = 5;

function pt(v: number, r: number): [number, number] {
  const a = Math.PI - (v / MAX) * Math.PI;
  return [CX + r * Math.cos(a), CY - r * Math.sin(a)];
}
function arc(v0: number, v1: number, r: number): string {
  const [x0, y0] = pt(v0, r);
  const [x1, y1] = pt(v1, r);
  return `M ${x0.toFixed(2)} ${y0.toFixed(2)} A ${r} ${r} 0 0 1 ${x1.toFixed(2)} ${y1.toFixed(2)}`;
}
const TICKS = Array.from({ length: MAX * 4 + 1 }, (_, i) => i / 4);

function CopGauge() {
  const reduce = useReducedMotion();
  // 0 : repos, 1 : plinthes (1), 2 : thermopompe climat froid (3 à 4).
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    if (reduce) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- valeur finale affichée d'un coup (animations réduites ou démarrage)
      setPhase(2);
      return;
    }
    const a = window.setTimeout(() => setPhase(1), 1000);
    const b = window.setTimeout(() => setPhase(2), 2700);
    return () => {
      window.clearTimeout(a);
      window.clearTimeout(b);
    };
  }, [reduce]);

  const value = phase === 0 ? 0 : phase === 1 ? 1 : 3.5;
  const deg = (value / MAX) * 180;

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, -44]);

  return (
    <motion.div style={reduce ? undefined : { y }} className="mx-auto w-full max-w-[560px] lg:mr-0">
      <HeroFade delay={0.4}>
        <div className="rounded-[28px] p-5 sm:p-8" style={{ background: HC.panel, border: `1px solid ${HC.line}` }}>
          <div className="flex items-center justify-between gap-4 text-[11px] font-medium uppercase" style={{ letterSpacing: "0.18em", color: HC.faint }}>
            <span>Rendement en chauffage</span>
            <span className="rounded-full px-2.5 py-1" style={{ border: `1px solid ${HC.line}`, color: HC.mute }}>
              COP
            </span>
          </div>

          <svg viewBox="0 30 440 222" className="mt-3 block h-auto w-full" role="img" aria-label="Jauge de rendement : 1 pour des plinthes électriques, de 3 à 4 pour une thermopompe certifiée climat froid">
            {/* Graduations 0 à 5 */}
            {TICKS.map((v) => {
              const major = Number.isInteger(v);
              const [x0, y0] = pt(v, major ? R - 16 : R - 8);
              const [x1, y1] = pt(v, R);
              const inBand = v >= 3 && v <= 4 && phase === 2;
              return (
                <line
                  key={v}
                  x1={x0}
                  y1={y0}
                  x2={x1}
                  y2={y1}
                  stroke={inBand ? HC.orange : major ? "rgba(244,239,231,0.62)" : "rgba(244,239,231,0.24)"}
                  strokeWidth={major ? 2 : 1.2}
                  strokeLinecap="round"
                  style={{ transition: "stroke 0.8s" }}
                />
              );
            })}
            {Array.from({ length: MAX + 1 }, (_, v) => {
              const [x, yy] = pt(v, R - 36);
              return (
                <text key={v} x={x} y={yy + 5} textAnchor="middle" fontSize="14" fontWeight={500} fill="rgba(244,239,231,0.5)" style={{ fontFamily: "var(--font-display), sans-serif" }}>
                  {v}
                </text>
              );
            })}
            {/* Piste extérieure et plage 3 à 4 */}
            <path d={arc(0, MAX, R + 12)} stroke="rgba(244,239,231,0.12)" strokeWidth={1} fill="none" />
            <motion.path
              d={arc(3, 4, R + 12)}
              stroke={HC.orange}
              strokeWidth={5}
              strokeLinecap="round"
              fill="none"
              initial={reduce ? false : { pathLength: 0, opacity: 0 }}
              animate={phase === 2 ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
              transition={{ duration: 1.1, ease: HERO_EASE, delay: reduce ? 0 : 0.15 }}
            />
            {/* Repère des plinthes (1) */}
            {(() => {
              const [x, yy] = pt(1, R + 12);
              return <motion.circle cx={x} cy={yy} r={4.5} fill={HC.cream} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: phase >= 1 ? 1 : 0 }} transition={{ duration: 0.6 }} />;
            })()}
            {/* Aiguille (dessinée vers 0, tournée jusqu'à la valeur) */}
            <g className="ct-needle" style={{ transform: `rotate(${deg}deg)` }}>
              <g className={phase === 2 && !reduce ? "ct-idle" : undefined}>
                <line x1={CX + 20} y1={CY} x2={CX - (R - 26)} y2={CY} stroke={HC.cream} strokeWidth={2.5} strokeLinecap="round" />
              </g>
            </g>
            <circle cx={CX} cy={CY} r={10} fill={HC.cream} />
            <circle cx={CX} cy={CY} r={3.5} fill={HC.panel} />
          </svg>

          {/* Lecture */}
          <div className="mt-1 flex items-end justify-between gap-4">
            <div className="min-w-0">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={phase === 2 ? "tp" : "pl"} initial={reduce ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={reduce ? undefined : { opacity: 0, y: -6 }} transition={{ duration: 0.45, ease: HERO_EASE }}>
                  <p className="text-[11px] font-medium uppercase" style={{ letterSpacing: "0.16em", color: phase === 2 ? HC.orange : HC.faint, margin: 0 }}>
                    {phase === 2 ? "Thermopompe climat froid" : "Plinthes électriques"}
                  </p>
                  <p style={{ fontSize: "clamp(34px, 3.4vw, 48px)", fontWeight: 600, letterSpacing: "-0.02em", wordSpacing: "0.08em", lineHeight: 1, margin: "8px 0 0", opacity: phase === 0 ? 0 : 1, transition: "opacity 0.5s" }}>
                    {phase === 2 ? "3 à 4" : "1"}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            <p className="max-w-[190px] text-right text-[12.5px] leading-[1.45]" style={{ color: HC.faint, margin: 0 }}>
              unités de chaleur pour 1 unité d’électricité
            </p>
          </div>

          {/* Même électricité, chaleur produite */}
          <div className="mt-6 flex flex-col gap-3 pt-5" style={{ borderTop: `1px solid ${HC.line}` }}>
            <HeatRow label="Plinthes électriques" filled={1} range={0} color={HC.cream} show={phase >= 1} />
            <HeatRow label="Thermopompe climat froid" filled={3} range={1} color={HC.orange} show={phase >= 2} />
          </div>
          <p className="text-[12.5px] leading-[1.55]" style={{ color: HC.faint, margin: "16px 0 0" }}>
            Ordre de grandeur expliqué plus bas : même électricité consommée, trois à quatre fois plus de chaleur. Vos économies dépendent de votre maison : le calculateur les estime juste en dessous.
          </p>
        </div>
      </HeroFade>
    </motion.div>
  );
}

function HeatRow({ label, filled, range, color, show }: { label: string; filled: number; range: number; color: string; show: boolean }) {
  const reduce = useReducedMotion();
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] items-center gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
      <span className="text-[13.5px] leading-[1.3]" style={{ color: HC.mute }}>
        {label}
      </span>
      <span className="grid grid-cols-4 gap-1.5" aria-hidden="true">
        {Array.from({ length: 4 }, (_, i) => {
          const full = i < filled;
          const part = !full && i < filled + range;
          return (
            <span key={i} className="relative h-2.5 overflow-hidden rounded-full" style={{ background: "rgba(244,239,231,0.08)" }}>
              {(full || part) && (
                <motion.span
                  className="absolute inset-0 origin-left rounded-full"
                  style={
                    part
                      ? { background: `repeating-linear-gradient(135deg, ${color} 0 3px, transparent 3px 6px)`, opacity: 0.9 }
                      : { background: color }
                  }
                  initial={reduce ? false : { scaleX: 0 }}
                  animate={{ scaleX: show ? 1 : 0 }}
                  transition={{ duration: 0.7, ease: HERO_EASE, delay: reduce ? 0 : 0.15 + i * 0.14 }}
                />
              )}
            </span>
          );
        })}
      </span>
    </div>
  );
}
