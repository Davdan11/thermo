"use client";

/* Pipeline en une barre : segments empilés par étape (nombre de clients), 2 px d'espace entre segments, rampe
   ordinale de l'orange. La légende (toujours présente) donne le nombre, le montant et les clients bloqués ; chaque ligne
   mène à la colonne de l'étape. */
import Link from "next/link";
import { motion } from "motion/react";
import { useRef } from "react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import type { Stage } from "@/lib/gestion/crm/types";
import { dollars, num } from "../kit/format";
import { useChartTip } from "./hooks";
import { EASE, STAGE_COLORS } from "./palette";

export interface StageRow {
  stage: Stage;
  label: string;
  n: number;
  cents: number;
  stuck: number;
}

export function StageBar({ rows, legend = true, label = "Clients par étape" }: { rows: StageRow[]; legend?: boolean; label?: string }) {
  const reduced = useReduced();
  const wrap = useRef<HTMLDivElement>(null);
  const tip = useChartTip(wrap);
  const total = rows.reduce((s, r) => s + r.n, 0);
  const shown = rows.filter((r) => r.n > 0);
  return (
    <div className="ch-stagebar" ref={wrap}>
      <div className="ch-stagebar__bar" role="img" aria-label={`${label} : ${shown.map((r) => `${r.label} ${r.n}`).join(", ") || "aucun"}`}>
        {total ? (
          shown.map((r, i) => {
            const lines = [`${num(r.n)} client${r.n > 1 ? "s" : ""}`, ...(r.cents ? [dollars(r.cents)] : []), ...(r.stuck ? [`${r.stuck} bloqué${r.stuck > 1 ? "s" : ""} depuis plus de 7 jours`] : [])];
            const props = {
              className: "ch-stagebar__seg",
              style: { flexGrow: r.n, background: STAGE_COLORS[r.stage] },
              tabIndex: 0,
              "aria-label": `${r.label} : ${lines.join(", ")}`,
              onPointerEnter: (e: React.PointerEvent<HTMLSpanElement>) => tip.show(e.currentTarget, r.label, lines),
              onPointerLeave: tip.hide,
              onFocus: (e: React.FocusEvent<HTMLSpanElement>) => tip.show(e.currentTarget, r.label, lines),
              onBlur: tip.hide,
            };
            return reduced ? <span key={r.stage} {...props} /> : <motion.span key={r.stage} {...props} initial={{ scaleX: 0, opacity: 0 }} whileInView={{ scaleX: 1, opacity: 1 }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 0.6, delay: 0.08 * i, ease: EASE }} />;
          })
        ) : (
          <span className="ch-stagebar__empty" />
        )}
      </div>
      {legend ? (
        <ul className="ch-stagelist">
          {rows.map((r) => (
            <li key={r.stage}>
              <Link href={`/gestion/pipeline?etape=${r.stage}`} className="ch-stagelist__row">
                <i style={{ background: STAGE_COLORS[r.stage] }} aria-hidden />
                <span className="ch-stagelist__label">{r.label}</span>
                {r.stuck ? <span className="ch-stagelist__stuck">{r.stuck} bloqué{r.stuck > 1 ? "s" : ""} &gt; 7 j</span> : null}
                <span className="ch-stagelist__n">{num(r.n)}</span>
                <span className="ch-stagelist__money">{r.cents ? dollars(r.cents) : "—"}</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
      {tip.node}
    </div>
  );
}
