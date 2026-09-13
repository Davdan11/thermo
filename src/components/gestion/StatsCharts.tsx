"use client";

/* Petits graphiques des statistiques : barres SVG (tendance) et listes à barres.
   Ne reçoivent que des nombres et des libellés agrégés sur le serveur.
   Animation discrète à l'entrée dans l'écran ; « réduire les animations » respecté (useReduced). */
import { motion } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";

/* Graphiques du CRM (accueil, statistiques), en SVG maison : réexportés ici. */
export { Donut } from "./charts/Donut";
export { Funnel } from "./charts/Funnel";
export { SeriesBars } from "./charts/SeriesBars";
export { Sparkline } from "./charts/Sparkline";
export { StageBar } from "./charts/StageBar";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Sommet de l'axe : pair sous 10, sinon 1-2-3-4-5-6-8 × 10ⁿ (la demi-graduation reste entière). */
function niceMax(v: number): number {
  if (v <= 4) return 4;
  if (v <= 10) return Math.ceil(v / 2) * 2;
  const pow = 10 ** Math.floor(Math.log10(v));
  for (const m of [1, 2, 3, 4, 5, 6, 8, 10]) if (m * pow >= v) return m * pow;
  return 10 * pow;
}

const plural = (n: number, one: string, many: string) => `${n} ${n > 1 ? many : one}`;

export function TrendChart({ points, unit }: { points: Array<{ key: string; label: string; total: number; soumissions: number }>; unit: string }) {
  const reduced = useReduced();
  const n = Math.max(points.length, 1);
  const max = niceMax(Math.max(1, ...points.map((p) => p.total)));
  const W = 10;
  const bw = W * (n > 45 ? 0.72 : 0.62);
  const sum = points.reduce((t, p) => t + p.total, 0);
  const peak = points.reduce((a, b) => (b.total > a.total ? b : a), points[0] ?? { label: "", total: 0 });
  const ticks = n > 2 ? [points[0], points[Math.floor((n - 1) / 2)], points[n - 1]] : points;
  const grow = { transformBox: "fill-box" as const, transformOrigin: "50% 100%" };

  return (
    <figure className="g-chart">
      <div className="g-chart__plot">
        <span className="g-chart__tick" style={{ top: 0 }}>{max}</span>
        <span className="g-chart__tick" style={{ top: "50%" }}>{max / 2}</span>
        <svg viewBox={`0 0 ${n * W} 100`} preserveAspectRatio="none" className="g-chart__svg" role="img" aria-label={`Demandes par ${unit} : ${plural(sum, "demande", "demandes")} au total`}>
          <line x1={0} x2={n * W} y1={0.5} y2={0.5} className="g-chart__grid" vectorEffect="non-scaling-stroke" />
          <line x1={0} x2={n * W} y1={50} y2={50} className="g-chart__grid" vectorEffect="non-scaling-stroke" />
          <line x1={0} x2={n * W} y1={100} y2={100} className="g-chart__base" vectorEffect="non-scaling-stroke" />
          {points.map((p, i) => {
            const x = i * W + (W - bw) / 2;
            const h = (p.total / max) * 100;
            const hs = (p.soumissions / max) * 100;
            const tip = `${p.label} : ${plural(p.total, "demande", "demandes")}${p.soumissions ? `, dont ${plural(p.soumissions, "soumission", "soumissions")}` : ""}`;
            return (
              <g key={p.key}>
                <title>{tip}</title>
                <rect x={i * W} y={0} width={W} height={100} fill="transparent" />
                {reduced ? (
                  <>
                    <rect x={x} width={bw} y={100 - h} height={h} className="g-chart__bar" />
                    <rect x={x} width={bw} y={100 - hs} height={hs} className="g-chart__bar g-chart__bar--sub" />
                  </>
                ) : (
                  <>
                    <motion.rect x={x} width={bw} y={100 - h} height={h} className="g-chart__bar" style={grow} initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: Math.min(i, 30) * 0.016, ease: EASE }} />
                    <motion.rect x={x} width={bw} y={100 - hs} height={hs} className="g-chart__bar g-chart__bar--sub" style={grow} initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.12 + Math.min(i, 30) * 0.016, ease: EASE }} />
                  </>
                )}
              </g>
            );
          })}
        </svg>
      </div>
      <div className="g-chart__x" aria-hidden>
        {ticks.map((t) => (
          <span key={t.key}>{t.label}</span>
        ))}
      </div>
      <figcaption className="g-legend">
        <span>
          <i style={{ background: "var(--g-chart-bar)" }} /> Toutes les demandes
        </span>
        <span>
          <i style={{ background: "var(--g-orange)" }} /> Soumissions
        </span>
        {peak.total > 0 ? <span className="g-legend__peak">Sommet : {plural(peak.total, "demande", "demandes")} ({peak.label})</span> : null}
      </figcaption>
    </figure>
  );
}

export interface BarRow {
  key: string;
  label: string;
  n: number;
  href?: string;
  note?: string;
  tone?: "orange" | "ink" | "muted";
  /** Valeur affichée à la place du nombre (ex. « 12 450 $ »). */
  display?: string;
}

export function BarList({ rows, empty }: { rows: BarRow[]; empty: string }) {
  const reduced = useReduced();
  if (!rows.length) return <p className="g-empty">{empty}</p>;
  const top = Math.max(1, ...rows.map((r) => r.n));
  return (
    <ul className="g-bars">
      {rows.map((r, i) => {
        const width = `${Math.max(2, (r.n / top) * 100)}%`;
        return (
          <li key={r.key} className={`g-bars__row g-bars__row--${r.tone ?? "ink"}`}>
            <div className="g-bars__top">
              {r.href ? (
                <a className="g-bars__label" href={r.href} target="_blank" rel="noopener noreferrer" title={`Ouvrir ${r.label}`}>
                  {r.label}
                </a>
              ) : (
                <span className="g-bars__label" title={r.label}>
                  {r.label}
                </span>
              )}
              <span className="g-bars__n">
                {r.display ?? r.n}
                {r.note ? <small> · {r.note}</small> : null}
              </span>
            </div>
            <div className="g-bars__track" aria-hidden>
              {reduced ? (
                <span className="g-bars__fill" style={{ width }} />
              ) : (
                <motion.span className="g-bars__fill" initial={{ width: 0 }} whileInView={{ width }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.7, delay: 0.08 + Math.min(i, 8) * 0.05, ease: EASE }} />
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
