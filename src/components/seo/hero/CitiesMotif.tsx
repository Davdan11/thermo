"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Caption, EASE, K, Parallax, deg, signed } from "./parts";

/* ==================================================================
   Index des villes : chaque point est une ville, empilée au-dessus de
   sa température de conception. Une ville s'allume à tour de rôle et
   son nom s'affiche au-dessus du graphique.
   ================================================================== */

export function CitiesMotif({ cities }: { cities: Array<{ name: string; designTempC: number }> }) {
  const reduce = useReducedMotion();
  const temps = cities.map((c) => Math.round(c.designTempC));
  const warm = Math.max(...temps);
  const cold = Math.min(...temps);
  const cols = useMemo(() => {
    const out: Array<{ t: number; names: string[] }> = [];
    for (let t = warm; t >= cold; t--) out.push({ t, names: cities.filter((c) => Math.round(c.designTempC) === t).map((c) => c.name).sort((a, b) => a.localeCompare(b, "fr-CA")) });
    return out;
  }, [cities, warm, cold]);
  const order = useMemo(() => cols.flatMap((c) => c.names.map((n) => ({ name: n, t: c.t }))), [cols]);
  const tallest = Math.max(...cols.map((c) => c.names.length), 1);
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (reduce || order.length < 2) return;
    // Pas de 7 : on saute d'une colonne à l'autre plutôt que de monter pile par pile.
    const id = window.setInterval(() => setActive((a) => (a + 7) % order.length), 2400);
    return () => window.clearInterval(id);
  }, [reduce, order.length]);
  const cur = order[active];
  // Une colonne très chargée (beaucoup de villes à la même température) : points plus petits.
  const DOT = tallest > 18 ? 7 : 9;
  const GAP = tallest > 18 ? 3 : 4;

  return (
    <Parallax distance={-45} className="lg:ml-auto lg:max-w-[560px]">
      <Caption>Température de conception, ville par ville</Caption>
      <div className="mt-6 h-[58px]" aria-hidden="true">
        {cur ? (
          <motion.p key={cur.name} className="flex items-baseline gap-3" style={{ margin: 0 }} initial={reduce ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
            <span className="sh-serif truncate text-[34px] leading-none sm:text-[42px]">{cur.name}</span>
            <span className="shrink-0 text-[18px] font-semibold tabular-nums" style={{ color: K.orange, letterSpacing: "-0.03em" }}>{deg(cur.t)}</span>
          </motion.p>
        ) : null}
      </div>
      <div role="img" aria-label={`Répartition des ${cities.length} villes selon leur température de conception, de ${deg(warm)} à ${deg(cold)}.`} className="mt-4">
        <div className="grid items-end" style={{ gridTemplateColumns: `repeat(${cols.length}, minmax(0, 1fr))`, height: tallest * (DOT + GAP) + 6 }}>
          {cols.map((c, ci) => (
            <div key={c.t} className="flex flex-col-reverse items-center" style={{ gap: GAP }}>
              {c.names.map((n, k) => {
                const on = cur?.name === n;
                return (
                  <motion.span
                    key={n}
                    title={`${n} · ${deg(c.t)}`}
                    className="block rounded-full"
                    style={{ width: DOT, height: DOT, background: on ? K.orange : "rgba(244,239,231,0.5)", transition: "background 0.6s" }}
                    initial={reduce ? false : { opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0, scale: on ? 1.45 : 1 }}
                    transition={{ duration: 0.9, ease: EASE, delay: reduce ? 0 : 0.5 + ci * 0.06 + k * 0.05, scale: { duration: 0.5 } }}
                  />
                );
              })}
            </div>
          ))}
        </div>
        <div className="mt-3 grid pt-2" style={{ gridTemplateColumns: `repeat(${cols.length}, minmax(0, 1fr))`, borderTop: `1px solid ${K.line}` }} aria-hidden="true">
          {cols.map((c, i) => (
            <span key={c.t} className="text-center text-[10px] tabular-nums sm:text-[11px]" style={{ color: cur?.t === c.t ? K.cream : K.faint, transition: "color 0.6s" }}>
              {i % 2 === 0 || cols.length <= 10 ? signed(c.t) : ""}
            </span>
          ))}
        </div>
        <p className="text-right text-[11px]" style={{ margin: "8px 0 0", color: K.faint }} aria-hidden="true">
          °C · un point par ville
        </p>
      </div>
    </Parallax>
  );
}
