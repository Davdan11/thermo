"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { PodiumItem } from "./types";
import { Caption, EASE, K, Parallax } from "./parts";
import { useReduced } from "@/components/heroes-v2/outils/motion";

/* ==================================================================
   Classement : podium des trois premiers. Les socles montent (hauteur
   selon le rang, pas selon la valeur), puis les vraies photos des
   machines se posent et flottent doucement.
   ================================================================== */

const HEIGHT: Record<number, number> = { 1: 232, 2: 190, 3: 160 };

export function PodiumMotif({ metricLabel, items }: { metricLabel: string; items: PodiumItem[] }) {
  const reduce = useReduced();
  const byRank = [items.find((x) => x.rank === 2), items.find((x) => x.rank === 1), items.find((x) => x.rank === 3)].filter((x): x is PodiumItem => !!x);
  // Ordre de montée : troisième, deuxième, puis premier.
  const riseDelay = (r: number) => 0.5 + (3 - r) * 0.28;

  return (
    <Parallax distance={-40} className="lg:ml-auto lg:max-w-[560px]">
      <div className="flex items-baseline justify-between gap-4">
        <Caption>Podium</Caption>
        <Caption className="text-right" style={{ letterSpacing: "0.12em" }}>{metricLabel}</Caption>
      </div>
      <ol className="grid grid-cols-3 items-end gap-2.5 sm:gap-4" style={{ margin: "24px 0 0", padding: 0, listStyle: "none", borderBottom: `1px solid ${K.line}` }}>
        {byRank.map((it) => {
          const first = it.rank === 1;
          const d = riseDelay(it.rank);
          return (
            <li key={it.href} className="min-w-0">
              <Link href={it.href} className="group block">
                <motion.div initial={reduce ? false : { opacity: 0, y: -24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: EASE, delay: d + 0.7 }}>
                  <div className="sh-float mx-auto mb-3 w-full max-w-[150px] overflow-hidden rounded-[18px] transition-transform duration-500 group-hover:-translate-y-1" style={{ background: "#fff", animationDelay: `${-it.rank * 1.7}s`, boxShadow: "0 26px 50px -32px rgba(0,0,0,0.9)" }}>
                    <div className="relative aspect-square">
                      {it.image ? (
                        <Image src={it.image} alt={`${it.brand} ${it.name}`} fill sizes="150px" style={{ objectFit: "contain", padding: 12 }} />
                      ) : it.logo ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={it.logo} alt={it.brand} className="absolute inset-0 m-auto h-auto max-h-[30%] w-[70%] object-contain" />
                      ) : (
                        <span className="absolute inset-0 flex items-center justify-center px-2 text-center text-[14px] font-semibold" style={{ color: K.ink }}>{it.brand}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="relative flex flex-col rounded-t-[16px] px-3 pb-4 pt-3 sm:px-4"
                  style={{ minHeight: HEIGHT[it.rank] ?? 150, background: first ? "rgba(229,75,23,0.12)" : "rgba(16,34,45,0.7)", border: `1px solid ${K.line}`, borderBottom: "none", originY: 1 }}
                  initial={reduce ? false : { scaleY: 0 }}
                  animate={{ scaleY: 1 }}
                  transition={{ duration: 1.1, ease: EASE, delay: d }}
                >
                  {first ? <span aria-hidden="true" className="absolute inset-x-0 top-0 h-[2px] rounded-t-[16px]" style={{ background: K.orange }} /> : null}
                  <motion.div className="flex min-h-0 flex-col" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: d + 0.6 }}>
                    <span className="sh-serif text-[40px] leading-none sm:text-[48px]" style={{ color: first ? K.orange : K.cream }}>
                      <span className="sr-only">Rang </span>
                      {it.rank}
                    </span>
                    <span className="mt-2 truncate text-[10.5px] font-medium uppercase" style={{ color: K.faint, letterSpacing: "0.14em" }}>{it.brand}</span>
                    <span className="mt-0.5 line-clamp-3 text-[13px] font-semibold leading-tight sm:text-[14px]" style={{ color: K.cream, overflowWrap: "anywhere" }}>{it.name}</span>
                    <span className="mt-1.5 line-clamp-3 text-[11.5px] leading-snug tabular-nums sm:text-[12.5px]" style={{ color: first ? K.cream : K.mute }}>{it.value}</span>
                  </motion.div>
                </motion.div>
              </Link>
            </li>
          );
        })}
      </ol>
    </Parallax>
  );
}
