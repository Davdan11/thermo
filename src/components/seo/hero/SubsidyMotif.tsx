"use client";

import type { CSSProperties } from "react";
import { motion, useReducedMotion } from "motion/react";
import type { TickerRow } from "./types";
import { Caption, Count, EASE, K, Parallax, fr, useLive } from "./parts";

/* ==================================================================
   Subvention LogisVert : avis d'aide d'Hydro-Québec. Le montant
   officiel défile jusqu'à sa valeur, en vert ; la fourchette se
   remplit ; les montants de la liste défilent lentement dessous.
   ================================================================== */

function Row({ r }: { r: TickerRow }) {
  return (
    <li className="flex items-baseline justify-between gap-4 py-2.5" style={{ borderBottom: `1px solid ${K.line}` }}>
      <span className="min-w-0">
        <span className="block truncate text-[14px] font-medium" style={{ color: K.cream }}>{r.label}</span>
        {r.sub && r.sub !== r.label ? <span className="block truncate text-[11.5px] tabular-nums" style={{ color: K.faint }}>{r.sub}</span> : null}
      </span>
      <span className="shrink-0 text-[14.5px] font-semibold tabular-nums" style={{ color: K.green }}>
        {fr(r.amount)}&nbsp;$
      </span>
    </li>
  );
}

export function SubsidyMotif({ label, amount, min, updated, tickerLabel, ticker }: { label: string; amount: number; min?: number; updated?: string | null; tickerLabel: string; ticker: TickerRow[] }) {
  const reduce = useReducedMotion();
  const live = useLive();
  const scroll = live && ticker.length >= 5;
  const range = min !== undefined && min < amount;

  return (
    <Parallax distance={-45} className="lg:ml-auto lg:max-w-[520px]">
      <motion.div className="overflow-hidden rounded-[28px]" style={{ background: "rgba(16,34,45,0.72)", border: `1px solid ${K.line}` }} initial={reduce ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.3, ease: EASE, delay: 0.45 }}>
        <div className="flex items-center justify-between gap-4 px-6 py-4" style={{ borderBottom: `1px solid ${K.line}` }}>
          <div className="flex items-center gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/hydroquebec.png" alt="Hydro-Québec" width={36} height={36} className="h-[36px] w-[36px] rounded-[10px] object-contain p-1" style={{ background: "#fff" }} />
            <div className="leading-tight">
              <p className="text-[13.5px] font-semibold" style={{ margin: 0 }}>Hydro-Québec</p>
              <p className="text-[11.5px]" style={{ margin: 0, color: K.faint }}>Programme LogisVert</p>
            </div>
          </div>
          {updated ? <p className="text-right text-[12px] tabular-nums" style={{ margin: 0, color: K.faint }}>Liste du {updated}</p> : null}
        </div>

        <div className="px-6 pb-6 pt-6">
          <Caption>{label}</Caption>
          <p className="whitespace-nowrap" style={{ margin: "10px 0 0", color: K.green, fontSize: "clamp(54px, 6.2vw, 92px)", fontWeight: 600, letterSpacing: "-0.055em", lineHeight: 1 }}>
            <Count value={amount} delay={0.9} duration={2.2} />
            <span style={{ fontSize: "0.62em", marginLeft: "0.14em" }}>$</span>
          </p>
          {range ? (
            <div className="mt-6">
              <div className="relative h-[4px] rounded-full" style={{ background: K.line }}>
                <motion.span className="absolute inset-y-0 right-0 rounded-full" style={{ left: `${((min as number) / amount) * 100}%`, background: K.green, originX: 1 }} initial={reduce ? false : { scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.8, ease: EASE, delay: 1.2 }} />
              </div>
              <div className="mt-2 flex justify-between gap-4 text-[12px] tabular-nums" style={{ color: K.mute }}>
                <span>0&nbsp;$</span>
                <span>
                  de {fr(min as number)}&nbsp;$ à {fr(amount)}&nbsp;$
                </span>
              </div>
            </div>
          ) : null}
        </div>

        {ticker.length > 0 ? (
          <div className="px-6 pb-2" style={{ borderTop: `1px solid ${K.line}` }}>
            <Caption className="pb-1 pt-4">{tickerLabel}</Caption>
            <div className="relative h-[184px] overflow-hidden" style={{ maskImage: "linear-gradient(180deg, transparent 0%, #000 14%, #000 82%, transparent 100%)", WebkitMaskImage: "linear-gradient(180deg, transparent 0%, #000 14%, #000 82%, transparent 100%)" }}>
              <div className={scroll ? "sh-ticker" : undefined} style={{ "--sh-dur": `${ticker.length * 3.2}s` } as CSSProperties}>
                <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                  {ticker.map((r, i) => (
                    <Row key={`a-${i}`} r={r} />
                  ))}
                </ul>
                {scroll ? (
                  <ul aria-hidden="true" style={{ margin: 0, padding: 0, listStyle: "none" }}>
                    {ticker.map((r, i) => (
                      <Row key={`b-${i}`} r={r} />
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          </div>
        ) : null}
      </motion.div>
    </Parallax>
  );
}
