"use client";

/* Anneau (part du tout, d'un coup d'œil) : 6 segments au plus, les plus petits réunis dans « Autres ».
   Couleur fixe par canal, espace de 2 px entre segments, légende toujours présente avec les valeurs. */
import { motion } from "motion/react";
import { useRef } from "react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { num, pct } from "../kit/format";
import { useChartTip } from "./hooks";
import { CHANNEL_COLORS, EASE } from "./palette";

export interface DonutItem {
  id: string;
  label: string;
  value: number;
}

const R = 54;
const SW = 16;
const C = 2 * Math.PI * R;
const GAP = 2.5;

export function Donut({ items, center, centerSub, label, max = 6 }: { items: DonutItem[]; center: string; centerSub: string; label: string; max?: number }) {
  const reduced = useReduced();
  const wrap = useRef<HTMLDivElement>(null);
  const tip = useChartTip(wrap);
  const sorted = [...items].filter((i) => i.value > 0).sort((a, b) => b.value - a.value);
  const head = sorted.filter((i) => i.id !== "autres").slice(0, max - 1);
  const tail = sorted.filter((i) => !head.includes(i));
  const shown = tail.length ? [...head, { id: "autres", label: "Autres", value: tail.reduce((s, i) => s + i.value, 0) }] : head;
  // Ordre fixe des canaux (la couleur et la place suivent le canal, pas son rang).
  const order = Object.keys(CHANNEL_COLORS);
  shown.sort((a, b) => order.indexOf(a.id) - order.indexOf(b.id));
  const total = shown.reduce((s, i) => s + i.value, 0);
  // Début de chaque segment sur le cercle, calculé d'avance (aucune variable modifiée pendant le rendu).
  const starts = shown.map((_, i) => shown.slice(0, i).reduce((s, x) => s + (total ? (x.value / total) * C : 0), 0));

  return (
    <div className="ch-donut" ref={wrap}>
      <svg viewBox="0 0 140 140" className="ch-donut__svg" role="img" aria-label={`${label} : ${shown.map((s) => `${s.label} ${s.value}`).join(", ")}`}>
        <circle cx="70" cy="70" r={R} className="ch-donut__track" strokeWidth={SW} />
        <g transform="rotate(-90 70 70)">
          {shown.map((s, i) => {
            const len = total ? Math.max(0, (s.value / total) * C - (shown.length > 1 ? GAP : 0)) : 0;
            const offset = -starts[i];
            const color = CHANNEL_COLORS[s.id] ?? CHANNEL_COLORS.autres;
            const lines = [`${num(s.value)} · ${pct(total ? s.value / total : 0)}`];
            const common = {
              cx: 70,
              cy: 70,
              r: R,
              fill: "none",
              stroke: color,
              strokeWidth: SW,
              strokeDashoffset: offset,
              tabIndex: 0,
              "aria-label": `${s.label} : ${lines[0]}`,
              onPointerEnter: (e: React.PointerEvent<SVGCircleElement>) => tip.show(e.currentTarget, s.label, lines),
              onPointerLeave: tip.hide,
              onFocus: (e: React.FocusEvent<SVGCircleElement>) => tip.show(e.currentTarget, s.label, lines),
              onBlur: tip.hide,
              className: "ch-donut__seg",
            };
            return reduced ? (
              <circle key={s.id} {...common} strokeDasharray={`${len} ${C - len}`} />
            ) : (
              <motion.circle key={s.id} {...common} initial={{ strokeDasharray: `0 ${C}` }} whileInView={{ strokeDasharray: `${len} ${C - len}` }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.8, delay: 0.1 + i * 0.07, ease: EASE }} />
            );
          })}
        </g>
        <text x="70" y="66" textAnchor="middle" className="ch-donut__n">
          {center}
        </text>
        <text x="70" y="84" textAnchor="middle" className="ch-donut__l">
          {centerSub}
        </text>
      </svg>
      <ul className="ch-legend-list">
        {shown.map((s) => (
          <li key={s.id}>
            <i style={{ background: CHANNEL_COLORS[s.id] ?? CHANNEL_COLORS.autres }} aria-hidden />
            <span className="ch-legend-list__label">{s.label}</span>
            <span className="ch-legend-list__n">{num(s.value)}</span>
            <span className="ch-legend-list__pct">{pct(total ? s.value / total : 0)}</span>
          </li>
        ))}
      </ul>
      {tip.node}
    </div>
  );
}
