"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CountUp } from "@/components/home/premium/shared";
import type { SavingsEstimate } from "@/lib/thermomatch/savings";
import { useReduced } from "@/components/heroes-v2/outils/motion";

/* Économies de chauffage estimées (maison aux plinthes électriques) :
   une fourchette, deux barres « plinthes / thermopompe » et les hypothèses en clair. */

const K = {
  cream: "#F4EFE7",
  mute: "rgba(244,239,231,0.66)",
  faint: "rgba(244,239,231,0.42)",
  line: "rgba(244,239,231,0.14)",
  green: "#5CCB8C",
};
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const NB = String.fromCharCode(160);
const r50 = (n: number) => Math.max(0, Math.round(n / 50) * 50);
const fr = (n: number, d = 0) => n.toLocaleString("fr-CA", { minimumFractionDigits: d, maximumFractionDigits: d });

export function SavingsBand({ s }: { s: SavingsEstimate }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = !!useReduced();
  const hpBest = s.baseboardCost - s.savingHigh;
  const hpWorst = s.baseboardCost - s.savingLow;

  return (
    <section
      ref={ref}
      aria-labelledby="tm-eco"
      className="mx-auto mt-16 max-w-[1320px] overflow-hidden rounded-[28px] lg:mt-24"
      style={{ border: `1px solid ${K.line}`, background: "linear-gradient(135deg, rgba(92,203,140,0.12) 0%, rgba(244,239,231,0.02) 55%)", color: K.cream }}
    >
      <div className="grid gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16 lg:px-14 lg:py-14">
        <div>
          <p className="flex items-center gap-3 text-[12px] font-medium uppercase" style={{ letterSpacing: "0.2em", color: K.mute, margin: 0 }}>
            <span aria-hidden="true" className="inline-block h-px w-10" style={{ background: K.green }} />
            Vos économies de chauffage
          </p>
          <h2 id="tm-eco" style={{ fontSize: "clamp(34px, 4.4vw, 62px)", fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 1, margin: "18px 0 0" }}>
            <span className="tabular-nums" style={{ color: K.green }}>
              ≈ <CountUp value={r50(s.savingLow)} play={inView} /> à <CountUp value={r50(s.savingHigh)} play={inView} />
              {NB}$
            </span>
            <span className="block text-[0.36em] font-medium" style={{ color: K.mute, letterSpacing: "-0.01em", marginTop: 12 }}>
              de moins par année qu’avec vos plinthes électriques.
            </span>
          </h2>
          <p className="max-w-[560px] text-[12.5px] leading-relaxed" style={{ color: K.faint, margin: "22px 0 0" }}>
            {`Estimation pour ${s.city}${NB}: ${fr(s.hdd18)} degrés-jours de chauffage par année (normales d’Environnement Canada), pertes de chaleur déduites de la charge estimée de votre maison, tarif D d’Hydro-Québec à ${fr(s.rate, 3)}${NB}$/kWh, rendement saisonnier de ${fr(s.copLow, 1)} à ${fr(s.copHigh, 1)} pour la thermopompe. Chauffage seulement, avant subvention.`}
          </p>
        </div>

        <div className="grid gap-7">
          <Bar label="Aux plinthes électriques" value={`≈ ${fr(r50(s.baseboardCost))}${NB}$ par an`} solid={1} extra={0} color="rgba(244,239,231,0.55)" play={inView || reduce} delay={0.15} />
          <Bar
            label="Avec une thermopompe"
            value={`≈ ${fr(r50(hpBest))} à ${fr(r50(hpWorst))}${NB}$ par an`}
            solid={hpBest / s.baseboardCost}
            extra={(hpWorst - hpBest) / s.baseboardCost}
            color={K.green}
            play={inView || reduce}
            delay={0.45}
          />
        </div>
      </div>
    </section>
  );
}

function Bar({ label, value, solid, extra, color, play, delay }: { label: string; value: string; solid: number; extra: number; color: string; play: boolean; delay: number }) {
  return (
    <div>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <span className="text-[14px] font-semibold">{label}</span>
        <span className="text-[14px] tabular-nums" style={{ color: K.mute }}>
          {value}
        </span>
      </div>
      <div className="relative mt-3 h-[14px] overflow-hidden rounded-full" style={{ background: "rgba(244,239,231,0.08)" }}>
        <motion.div
          className="absolute inset-y-0 left-0 flex origin-left"
          style={{ width: `${Math.min(1, solid + extra) * 100}%` }}
          initial={{ scaleX: 0 }}
          animate={play ? { scaleX: 1 } : undefined}
          transition={{ duration: 1.3, ease: EASE, delay }}
        >
          <span className="h-full rounded-l-full" style={{ width: `${(solid / Math.max(solid + extra, 0.0001)) * 100}%`, background: color }} />
          {extra > 0 && <span className="h-full flex-1 rounded-r-full" style={{ background: color, opacity: 0.35 }} />}
        </motion.div>
      </div>
    </div>
  );
}
