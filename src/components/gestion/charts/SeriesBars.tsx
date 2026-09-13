"use client";

/* Colonnes d'une série (TrendChart généralisé) : demandes par jour, montants acceptés par mois…
   Une seule série = une seule couleur, le point courant en accent. Colonnes ≤ 24 px, bout arrondi, grille en filets.
   Info-bulle au survol et au clavier ; « réduire les animations » respecté (useReduced). */
import { motion } from "motion/react";
import { useRef } from "react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { compactDollars, dollars, num } from "../kit/format";
import { columnPath, niceMax, useChartTip, useWidth } from "./hooks";
import { EASE } from "./palette";

export interface SeriesPoint {
  key: string;
  label: string;
  value: number;
  /** Sous-total mis en évidence (ex. soumissions parmi les demandes). */
  sub?: number;
  note?: string;
}

export function SeriesBars({
  points,
  format = "count",
  label,
  unit = ["demande", "demandes"],
  subLabel,
  height = 190,
  accentLast = false,
}: {
  points: SeriesPoint[];
  format?: "count" | "money";
  label: string;
  unit?: [string, string];
  subLabel?: string;
  height?: number;
  accentLast?: boolean;
}) {
  const reduced = useReduced();
  const { ref, width } = useWidth<HTMLDivElement>(640);
  const wrap = useRef<HTMLDivElement>(null);
  const tip = useChartTip(wrap);
  const fmtAxis = (v: number) => (format === "money" ? compactDollars(v) : num(v));
  const fmtTip = (v: number) => (format === "money" ? dollars(v) : `${num(v)} ${v > 1 ? unit[1] : unit[0]}`);
  const max = niceMax(Math.max(0, ...points.map((p) => p.value)) / (format === "money" ? 100 : 1)) * (format === "money" ? 100 : 1);
  const gutter = format === "money" ? 50 : 30;
  const top = 10;
  const base = height - 26;
  const plotW = Math.max(10, width - gutter);
  const n = Math.max(points.length, 1);
  const slot = plotW / n;
  const bw = Math.max(2, Math.min(24, slot * 0.62));
  const y = (v: number) => base - (v / max) * (base - top);
  const ticks = n > 2 ? [points[0], points[Math.floor((n - 1) / 2)], points[n - 1]] : points;
  const total = points.reduce((s, p) => s + p.value, 0);

  return (
    <figure className="ch-figure" ref={wrap}>
      <div ref={ref} className="ch-plot" style={{ height }}>
        <svg width={width} height={height} role="img" aria-label={`${label} : ${fmtTip(total)} au total`}>
          {[max, max / 2, 0].map((v) => (
            <g key={v}>
              <line x1={gutter} x2={width} y1={y(v)} y2={y(v)} className={v === 0 ? "ch-base" : "ch-grid"} />
              <text x={gutter - 8} y={y(v)} dy="0.32em" textAnchor="end" className="ch-tick">
                {fmtAxis(v)}
              </text>
            </g>
          ))}
          {points.map((p, i) => {
            const x = gutter + i * slot + (slot - bw) / 2;
            const accent = accentLast && i === n - 1;
            const d = columnPath(x, bw, y(p.value), base);
            const ds = p.sub ? columnPath(x, bw, y(p.sub), base) : "";
            const lines = [fmtTip(p.value), ...(p.sub !== undefined && subLabel ? [`dont ${num(p.sub)} ${subLabel}`] : []), ...(p.note ? [p.note] : [])];
            const grow = { transformBox: "fill-box" as const, transformOrigin: "50% 100%" };
            return (
              <g key={p.key}>
                {reduced ? (
                  <>
                    {d ? <path d={d} className={accent ? "ch-col is-accent" : "ch-col"} /> : null}
                    {ds ? <path d={ds} className="ch-col is-sub" /> : null}
                  </>
                ) : (
                  <>
                    {d ? <motion.path d={d} className={accent ? "ch-col is-accent" : "ch-col"} style={grow} initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55, delay: Math.min(i, 30) * 0.018, ease: EASE }} /> : null}
                    {ds ? <motion.path d={ds} className="ch-col is-sub" style={grow} initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.55, delay: 0.1 + Math.min(i, 30) * 0.018, ease: EASE }} /> : null}
                  </>
                )}
                <rect
                  x={gutter + i * slot}
                  y={top}
                  width={slot}
                  height={base - top}
                  className="ch-hit"
                  tabIndex={0}
                  aria-label={`${p.label} : ${lines.join(", ")}`}
                  onPointerEnter={(e) => tip.show(e.currentTarget, p.label, lines)}
                  onPointerLeave={tip.hide}
                  onFocus={(e) => tip.show(e.currentTarget, p.label, lines)}
                  onBlur={tip.hide}
                />
              </g>
            );
          })}
        </svg>
      </div>
      <div className="ch-x" style={{ paddingLeft: gutter }} aria-hidden>
        {ticks.map((t) => (
          <span key={t.key}>{t.label}</span>
        ))}
      </div>
      {tip.node}
    </figure>
  );
}
