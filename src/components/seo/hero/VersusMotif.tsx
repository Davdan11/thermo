"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import type { VsBrand, VsRow } from "./types";
import { Caption, Count, EASE, K } from "./parts";
import { useReduced } from "@/components/heroes-v2/outils/motion";

/* ==================================================================
   Comparatif de deux marques : face-à-face, puis barres en miroir qui
   poussent depuis le centre. L'avantage (quand il a un sens) est en
   orange. Au défilement, les deux marques s'écartent légèrement.
   ================================================================== */

function Plate({ b, align }: { b: VsBrand; align: "left" | "right" }) {
  return (
    <Link href={b.href} className={`sh-link flex min-w-0 flex-col gap-3 ${align === "right" ? "items-end text-right" : "items-start"}`} style={{ color: K.mute }}>
      <span className="flex h-[34px] items-center sm:h-[40px]">
        {b.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={b.logo} alt={b.name} className="h-full w-auto max-w-[130px] object-contain sm:max-w-[170px]" style={{ filter: "brightness(0) invert(0.94)" }} />
        ) : (
          <span className="truncate text-[22px] font-semibold sm:text-[26px]" style={{ color: K.cream, letterSpacing: "-0.03em" }}>{b.name}</span>
        )}
      </span>
      <span className="text-[12px]" style={{ letterSpacing: "0.04em" }}>Voir la marque <span aria-hidden="true">→</span></span>
    </Link>
  );
}

export function VersusMotif({ a, b, rows, shared }: { a: VsBrand; b: VsBrand; rows: VsRow[]; shared?: number }) {
  const reduce = useReduced();
  const { scrollY } = useScroll();
  const left = useTransform(scrollY, [0, 700], [0, -28]);
  const right = useTransform(scrollY, [0, 700], [0, 28]);
  const shown = rows.filter((r) => r.a !== null && r.b !== null);

  return (
    <div className="lg:ml-auto lg:max-w-[560px]">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        <motion.div style={reduce ? undefined : { x: left }} initial={reduce ? false : { opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.3, ease: EASE, delay: 0.4 }}>
          <Plate b={a} align="left" />
        </motion.div>
        <motion.span aria-hidden="true" className="sh-serif px-1 text-[56px] leading-none sm:text-[76px]" style={{ color: K.orange }} initial={reduce ? false : { opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, ease: EASE, delay: 0.7 }}>
          vs
        </motion.span>
        <motion.div style={reduce ? undefined : { x: right }} initial={reduce ? false : { opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.3, ease: EASE, delay: 0.4 }}>
          <Plate b={b} align="right" />
        </motion.div>
      </div>

      <div className="mt-8 rounded-[24px] px-5 py-5 sm:px-7 sm:py-6" style={{ background: "rgba(16,34,45,0.55)", border: `1px solid ${K.line}` }}>
        <dl style={{ margin: 0 }}>
          {shown.map((r, i) => {
            const av = r.a as number;
            const bv = r.b as number;
            const max = Math.max(av, bv) || 1;
            const win = r.better && av !== bv ? (av > bv ? "a" : "b") : null;
            const col = (side: "a" | "b") => (win === side ? K.orange : win ? "rgba(244,239,231,0.28)" : "rgba(244,239,231,0.55)");
            const delay = 1 + i * 0.14;
            return (
              <div key={r.label} className="py-3" style={{ borderTop: i ? `1px solid ${K.line}` : "none" }}>
                <dt className="mb-2 text-center text-[11px] font-medium uppercase" style={{ color: K.faint, letterSpacing: "0.14em" }}>{r.label}</dt>
                <dd className="grid grid-cols-[auto_1fr_1fr_auto] items-center gap-3" style={{ margin: 0 }}>
                  <span className="min-w-[3.4rem] text-[17px] font-semibold tabular-nums sm:text-[19px]" style={{ color: win === "a" ? K.cream : K.mute, letterSpacing: "-0.03em" }}>
                    <Count value={av} decimals={r.decimals ?? 0} delay={delay} />
                    {r.suffix}
                  </span>
                  <span className="flex h-[6px] justify-end">
                    <motion.span className="h-full rounded-full" style={{ width: `${(av / max) * 100}%`, background: col("a"), originX: 1 }} initial={reduce ? false : { scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.3, ease: EASE, delay }} />
                  </span>
                  <span className="flex h-[6px] justify-start">
                    <motion.span className="h-full rounded-full" style={{ width: `${(bv / max) * 100}%`, background: col("b"), originX: 0 }} initial={reduce ? false : { scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.3, ease: EASE, delay }} />
                  </span>
                  <span className="min-w-[3.4rem] text-right text-[17px] font-semibold tabular-nums sm:text-[19px]" style={{ color: win === "b" ? K.cream : K.mute, letterSpacing: "-0.03em" }}>
                    <Count value={bv} decimals={r.decimals ?? 0} delay={delay} />
                    {r.suffix}
                  </span>
                </dd>
              </div>
            );
          })}
        </dl>
        <Caption className="mt-3 text-center" style={{ letterSpacing: "0.12em", textTransform: "none", fontSize: 12 }}>
          {shared ? `${shared} machines identiques chez les deux marques · ` : ""}En orange : l’avantage sur le critère
        </Caption>
      </div>
    </div>
  );
}
