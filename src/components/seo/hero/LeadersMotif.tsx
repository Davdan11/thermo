"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Caption, EASE, K, Parallax } from "./parts";

/* ==================================================================
   Index des classements : tableau des meneurs, un par critère. Un
   repère orange passe lentement d'une ligne à l'autre.
   ================================================================== */

export function LeadersMotif({ rows }: { rows: Array<{ label: string; href: string; leader: string; value: string }> }) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (reduce || rows.length < 2) return;
    const t = window.setInterval(() => setActive((a) => (a + 1) % rows.length), 3000);
    return () => window.clearInterval(t);
  }, [reduce, rows.length]);

  return (
    <Parallax distance={-40} className="lg:ml-auto lg:max-w-[540px]">
      <div className="rounded-[26px] px-5 py-5 sm:px-7 sm:py-6" style={{ background: "rgba(16,34,45,0.55)", border: `1px solid ${K.line}` }}>
        <div className="flex items-baseline justify-between gap-4 pb-3">
          <Caption>N° 1 de chaque classement</Caption>
          <span className="sh-serif text-[26px] leading-none" style={{ color: K.orange }} aria-hidden="true">1</span>
        </div>
        <ol style={{ margin: 0, padding: 0, listStyle: "none" }}>
          {rows.map((r, i) => (
            <motion.li
              key={r.href}
              className="relative"
              style={{ borderTop: `1px solid ${K.line}` }}
              initial={reduce ? false : { opacity: 0, x: 18 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.1, ease: EASE, delay: 0.6 + i * 0.1 }}
            >
              {i === active ? <motion.span layoutId="sh-leader-mark" aria-hidden="true" className="absolute -left-5 bottom-3 top-3 w-[2px] rounded-full sm:-left-7" style={{ background: K.orange }} transition={{ duration: 0.9, ease: EASE }} /> : null}
              <Link href={r.href} className="sh-link grid grid-cols-[1fr_auto] items-center gap-4 py-3" style={{ color: i === active ? K.cream : K.mute }}>
                <span className="min-w-0">
                  <span className="block text-[10.5px] font-medium uppercase" style={{ color: K.faint, letterSpacing: "0.16em" }}>{r.label}</span>
                  <span className="mt-1 block truncate text-[15.5px] font-semibold" style={{ letterSpacing: "-0.015em", transition: "color 0.9s" }}>{r.leader}</span>
                </span>
                <span className="max-w-[11rem] text-right text-[12.5px] leading-snug tabular-nums" style={{ color: i === active ? K.cream : K.faint, transition: "color 0.9s" }}>{r.value}</span>
              </Link>
            </motion.li>
          ))}
        </ol>
      </div>
    </Parallax>
  );
}
