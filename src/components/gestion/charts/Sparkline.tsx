"use client";

/* Mini-courbe des tuiles : trait de 2 px dans la teinte discrète, voile à 10 %, dernier point en accent avec un
   anneau de 2 px couleur du fond. Tracée en pixels réels (largeur mesurée). */
import { motion } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { cx } from "../kit/format";
import { useWidth } from "./hooks";
import { EASE } from "./palette";

export function Sparkline({ values, tone = "dark", className, height = 34 }: { values: number[]; tone?: "dark" | "light"; className?: string; height?: number }) {
  const reduced = useReduced();
  const { ref, width } = useWidth<HTMLSpanElement>(160);
  const max = Math.max(1, ...values);
  const pad = 5;
  const n = values.length;
  const pts = values.map((v, i) => [pad + (i * (width - pad * 2)) / Math.max(1, n - 1), height - pad - (v / max) * (height - pad * 2)] as const);
  const line = pts.map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)},${y.toFixed(1)}`).join("");
  const area = `${line}L${pts[n - 1][0].toFixed(1)},${height}L${pts[0][0].toFixed(1)},${height}Z`;
  const [lx, ly] = pts[n - 1];
  return (
    <span ref={ref} className={cx("ch-spark", `ch-spark--${tone}`, className)} aria-hidden>
      <svg width={width} height={height}>
        <path d={area} className="ch-spark__area" />
        {reduced ? <path d={line} className="ch-spark__line" /> : <motion.path d={line} className="ch-spark__line" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: EASE }} />}
        <circle cx={lx} cy={ly} r={4} className="ch-spark__dot" />
      </svg>
    </span>
  );
}
