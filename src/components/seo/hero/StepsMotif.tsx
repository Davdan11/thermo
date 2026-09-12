"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Caption, EASE, K, Parallax, useLive } from "./parts";

/* ==================================================================
   « Comment ça marche » : un tracé sinueux relie les étapes ; il se
   dessine à l'arrivée, puis un point orange le parcourt en boucle.
   ================================================================== */

const ROW = 70;
const X = 26;

export function StepsMotif({ heading, steps }: { heading: string; steps: Array<{ n: string; label: string; href: string }> }) {
  const reduce = useReducedMotion();
  const live = useLive();
  const h = steps.length * ROW;
  const ys = steps.map((_, i) => ROW / 2 + i * ROW);
  // Courbe qui ondule d'un nœud à l'autre, alternativement vers la droite et la gauche.
  const d = ys.reduce((acc, y, i) => {
    if (i === 0) return `M${X} ${y}`;
    const prev = ys[i - 1];
    const bulge = i % 2 ? X + 22 : X - 22;
    return `${acc} C ${bulge} ${prev + ROW * 0.35}, ${bulge} ${y - ROW * 0.35}, ${X} ${y}`;
  }, "");

  return (
    <Parallax distance={-45} className="lg:ml-auto lg:max-w-[500px]">
      <motion.div initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}>
        <Caption className="mb-5">{heading}</Caption>
        <div className="relative" style={{ height: h }}>
          <svg aria-hidden="true" className="absolute left-0 top-0" width={52} height={h} viewBox={`0 0 52 ${h}`} fill="none">
            <path d={d} stroke={K.line} strokeWidth={1.5} />
            <motion.path d={d} stroke={K.cream} strokeOpacity={0.55} strokeWidth={1.5} initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.8, ease: EASE, delay: 0.6 }} />
            {ys.map((y, i) => (
              <motion.circle key={y} cx={X} cy={y} r={5} fill={K.ink} stroke={i === steps.length - 1 ? K.orange : K.cream} strokeWidth={1.5} initial={reduce ? false : { scale: 0 }} animate={{ scale: 1 }} style={{ transformOrigin: `${X}px ${y}px` }} transition={{ duration: 0.6, ease: EASE, delay: 0.7 + i * 0.42 }} />
            ))}
            {live ? (
              <circle r={3.5} fill={K.orange}>
                <animateMotion dur="11s" repeatCount="indefinite" path={d} begin="3.4s" keyPoints="0;1" keyTimes="0;1" calcMode="linear" />
              </circle>
            ) : null}
          </svg>
          <ol className="relative" style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {steps.map((s, i) => (
              <motion.li
                key={s.n}
                className="flex items-center"
                style={{ height: ROW, paddingLeft: 68 }}
                initial={reduce ? false : { opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: EASE, delay: 0.8 + i * 0.42 }}
              >
                <Link href={s.href} className="sh-link group flex w-full items-baseline gap-4 py-2" style={{ color: K.mute, borderBottom: i < steps.length - 1 ? `1px solid ${K.line}` : "none" }}>
                  <span className="text-[12px] font-medium tabular-nums" style={{ color: K.faint, letterSpacing: "0.14em" }}>{s.n}</span>
                  <span className="text-[17px] font-medium leading-snug sm:text-[19px]" style={{ letterSpacing: "-0.02em" }}>{s.label}</span>
                  <span aria-hidden="true" className="sh-arrow ml-auto text-[13px]">→</span>
                </Link>
              </motion.li>
            ))}
          </ol>
        </div>
      </motion.div>
    </Parallax>
  );
}
