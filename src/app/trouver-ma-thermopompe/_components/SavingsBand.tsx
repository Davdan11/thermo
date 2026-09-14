"use client";

import { useRef, type CSSProperties } from "react";
import type { SavingsEstimate } from "@/lib/thermomatch/savings";
import { MONO, SERIF } from "@/components/heroes-v2/outils/font-stacks";
import { MarginMark, Scribble, WriteIn, useSeen } from "./Corrige";
import { K, NB, fr } from "./results-model";

/* Économies de chauffage estimées (maison aux plinthes électriques), dans le corrigé :
   la fourchette écrite en chiffres et soulignée à la plume, deux traits « plinthes / thermopompe »
   tracés à l'entrée dans l'écran, et les hypothèses en clair. Mêmes calculs qu'avant. */

const r50 = (n: number) => Math.max(0, Math.round(n / 50) * 50);

export function SavingsBand({ s, n }: { s: SavingsEstimate; /** Numéro de la réponse dans le corrigé. */ n?: number }) {
  const ref = useRef<HTMLElement>(null);
  const play = useSeen(ref);
  const hpBest = s.baseboardCost - s.savingHigh;
  const hpWorst = s.baseboardCost - s.savingLow;

  return (
    <section ref={ref} aria-labelledby="tm-eco" className="mt-20 lg:mt-28" style={{ color: K.ink }}>
      <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-end lg:gap-16">
        <div className="relative min-w-0">
          <MarginMark n={n} play={play} />
          <p className="text-[20px] leading-none" style={{ fontFamily: SERIF, fontStyle: "italic", color: K.rust, margin: 0 }}>
            <WriteIn play={play}>Vos économies de chauffage</WriteIn>
          </p>
          <h2 id="tm-eco" style={{ fontWeight: 400, lineHeight: 1, margin: "22px 0 0" }}>
            <Scribble play={play} delay={0.9}>
              <span style={{ fontFamily: MONO, fontSize: "clamp(30px, 4.2vw, 58px)", fontWeight: 500, letterSpacing: "-0.05em", whiteSpace: "nowrap" }}>
                ≈ {fr(r50(s.savingLow))} à {fr(r50(s.savingHigh))}
                {NB}$
              </span>
            </Scribble>
            <span className="block" style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: "clamp(22px, 2.2vw, 30px)", letterSpacing: "-0.01em", lineHeight: 1.15, marginTop: 18 }}>
              de moins par année qu’avec vos plinthes électriques.
            </span>
          </h2>
          <p className="max-w-[560px] text-[12.5px] leading-relaxed" style={{ color: K.soft, margin: "22px 0 0" }}>
            {`Estimation pour ${s.city}${NB}: ${fr(s.hdd18)} degrés-jours de chauffage par année (normales d’Environnement Canada), pertes de chaleur déduites de la charge estimée de votre maison, tarif D d’Hydro-Québec à ${fr(s.rate, 3)}${NB}$/kWh, rendement saisonnier de ${fr(s.copLow, 1)} à ${fr(s.copHigh, 1)} pour la thermopompe. Chauffage seulement, avant subvention.`}
          </p>
        </div>

        <div className="grid gap-8 lg:pb-14">
          <Bar label="Aux plinthes électriques" value={`≈ ${fr(r50(s.baseboardCost))}${NB}$ par an`} solid={1} extra={0} color="rgba(23,27,30,0.6)" play={play} delay={0.15} />
          <Bar
            label="Avec une thermopompe"
            value={`≈ ${fr(r50(hpBest))} à ${fr(r50(hpWorst))}${NB}$ par an`}
            solid={hpBest / s.baseboardCost}
            extra={(hpWorst - hpBest) / s.baseboardCost}
            color={K.orange}
            play={play}
            delay={0.45}
          />
        </div>
      </div>
    </section>
  );
}

/** Trait tracé sur une ligne du carnet : la partie pleine, puis la fourchette en orange pâle. */
function Bar({ label, value, solid, extra, color, play, delay }: { label: string; value: string; solid: number; extra: number; color: string; play: boolean; delay: number }) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <span className="text-[14px] font-semibold">{label}</span>
        <span className="text-[13.5px]" style={{ fontFamily: MONO, color: K.soft }}>
          {value}
        </span>
      </div>
      <div aria-hidden="true" className="relative mt-3 h-[12px]">
        <span className="absolute inset-x-0 top-[5.5px] h-px" style={{ background: K.rule }} />
        <span className="tm-bar absolute left-0 top-[4px] flex h-[4px]" data-on={play ? "" : undefined} style={{ width: `${Math.min(1, solid + extra) * 100}%`, "--d": `${delay}s` } as CSSProperties}>
          <span className="h-full rounded-l-full" style={{ width: `${(solid / Math.max(solid + extra, 0.0001)) * 100}%`, background: color }} />
          {extra > 0 && <span className="h-full flex-1 rounded-r-full" style={{ background: color, opacity: 0.35 }} />}
        </span>
      </div>
    </div>
  );
}
