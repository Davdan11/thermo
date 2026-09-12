"use client";

import { motion } from "motion/react";
import { Caption, EASE, K, Parallax, deg } from "./parts";
import { useReduced } from "@/components/heroes-v2/outils/motion";

/* ==================================================================
   Page ville : échelle de froid verticale. La colonne descend jusqu'à
   la température de conception de la ville ; les normales de janvier
   et le record se placent sur la même échelle. Données officielles
   seulement (aucune « météo du jour »).
   ================================================================== */

type Mark = { t: number; label: string; main?: boolean };

export function CityMotif({ city, designTempC, janMeanC, janMinC, extremeMinC, extremeMinYear, source }: { city: string; designTempC: number; janMeanC: number | null; janMinC: number | null; extremeMinC: number | null; extremeMinYear: number | null; source: string | null }) {
  const reduce = useReduced();
  const marks: Mark[] = [
    ...(janMeanC !== null ? [{ t: janMeanC, label: "Moyenne de janvier" }] : []),
    ...(janMinC !== null ? [{ t: janMinC, label: "Nuits de janvier, en moyenne" }] : []),
    { t: designTempC, label: "Température de conception", main: true },
    ...(extremeMinC !== null ? [{ t: extremeMinC, label: `Record de froid${extremeMinYear ? ` (${extremeMinYear})` : ""}` }] : []),
  ].sort((a, b) => b.t - a.t);
  const coldest = Math.min(...marks.map((m) => m.t));
  const bottom = Math.min(-40, Math.floor(coldest / 10) * 10);
  const pct = (t: number) => (t / bottom) * 100;
  const ticks: number[] = [];
  for (let t = 0; t >= bottom; t -= 5) ticks.push(t);

  // Étiquettes : on évite qu'elles se chevauchent (écart minimal en % de la hauteur).
  const GAP = 9;
  const placed: number[] = [];
  marks.forEach((m, i) => {
    const want = pct(m.t);
    placed.push(i === 0 ? want : Math.max(want, placed[i - 1] + GAP));
  });

  return (
    <Parallax distance={-45} className="lg:ml-auto lg:max-w-[500px]">
      <Caption>{city} · l’hiver en repères</Caption>
      <div className="relative mt-7 h-[330px] sm:h-[420px]" role="img" aria-label={`Échelle de froid de ${city} : ${marks.map((m) => `${m.label} ${deg(m.t)}`).join(", ")}.`}>
        {/* Graduations */}
        <div aria-hidden="true" className="absolute inset-y-0 left-0 w-[46px]">
          {ticks.map((t) => (
            <span key={t} className="absolute right-0 flex -translate-y-1/2 items-center gap-1.5 text-[10.5px] tabular-nums" style={{ top: `${pct(t)}%`, color: K.faint }}>
              {t % 10 ? "" : deg(t).replace(" °C", "°")}
              <span className="inline-block h-px" style={{ width: t % 10 ? 5 : 9, background: t % 10 ? K.line : K.faint }} />
            </span>
          ))}
        </div>
        {/* Colonne */}
        <div aria-hidden="true" className="absolute inset-y-0 left-[54px] w-[12px] overflow-hidden rounded-full" style={{ background: "rgba(244,239,231,0.07)" }}>
          <motion.div className="absolute inset-x-0 top-0 rounded-full" style={{ height: `${pct(designTempC)}%`, background: K.orange, originY: 0 }} initial={reduce ? false : { scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 2.4, ease: EASE, delay: 0.6 }} />
          <motion.div className="absolute inset-x-0" style={{ top: `${pct(designTempC)}%`, height: `${100 - pct(designTempC)}%`, background: "repeating-linear-gradient(180deg, rgba(229,75,23,0.4) 0 3px, transparent 3px 7px)", originY: 0 }} initial={reduce ? false : { scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1.6, ease: EASE, delay: 2.6 }} />
        </div>
        {/* Repères */}
        <ul aria-hidden="true" className="absolute inset-y-0 left-[66px] right-0" style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {marks.map((m, i) => {
            const y = pct(m.t);
            const ly = placed[i];
            const delay = m.main ? 2.2 : 1.2 + i * 0.25;
            return (
              <motion.li key={m.label} className="absolute inset-0" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay }}>
                {/* Trait à la vraie hauteur, avec un coude vers l'étiquette quand elle a dû être décalée. */}
                <svg className="absolute left-0 top-0 h-full w-[36px] overflow-visible" viewBox="0 0 36 100" preserveAspectRatio="none">
                  <path d={`M0 ${y} H12 L24 ${ly} H36`} stroke={m.main ? K.orange : K.faint} strokeWidth={1} fill="none" vectorEffect="non-scaling-stroke" />
                </svg>
                <span className="absolute left-[44px] right-0 flex -translate-y-1/2 flex-wrap items-baseline gap-x-3 gap-y-0.5" style={{ top: `${ly}%` }}>
                  <span className="whitespace-nowrap tabular-nums" style={{ fontSize: m.main ? "clamp(28px, 3vw, 38px)" : 17, fontWeight: 600, letterSpacing: "-0.04em", color: m.main ? K.orange : K.cream, lineHeight: 1.05 }}>
                    {deg(m.t)}
                  </span>
                  <span className="text-[12.5px] leading-tight" style={{ color: m.main ? K.cream : K.mute }}>{m.label}</span>
                </span>
              </motion.li>
            );
          })}
        </ul>
      </div>
      {source ? <p className="text-[11.5px] leading-relaxed" style={{ margin: "24px 0 0", color: K.faint }}>{source}</p> : null}
    </Parallax>
  );
}

/** Décor des pages climat : isothermes (courbes de même température) qui dérivent très lentement. */
export function IsothermsBg() {
  const rings = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg className="sh-iso absolute -right-[10%] top-[-10%] h-[130%] w-[85%]" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid slice" fill="none">
        {rings.map((k) => {
          const r = 70 + k * 58;
          const w = 18 + k * 6;
          return (
            <path
              key={k}
              d={`M ${400 - r} 400 C ${400 - r} ${400 - r * 0.8 - w}, ${400 + r * 0.6} ${400 - r - w}, ${400 + r} ${400 - r * 0.2} S ${400 + r * 0.4} ${400 + r + w}, ${400 - r * 0.3} ${400 + r * 0.9} S ${400 - r} ${400 + r * 0.3}, ${400 - r} 400 Z`}
              stroke={k === 2 ? K.orange : K.cream}
              strokeOpacity={k === 2 ? 0.16 : 0.055}
              strokeWidth={1.2}
            />
          );
        })}
      </svg>
      <div className="absolute inset-0" style={{ background: `linear-gradient(90deg, ${K.ink} 0%, rgba(10,20,25,0.7) 40%, rgba(10,20,25,0) 75%)` }} />
    </div>
  );
}
