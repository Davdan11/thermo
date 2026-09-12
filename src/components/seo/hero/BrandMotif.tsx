"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { Caption, EASE, K, Parallax, fr } from "./parts";

/* ==================================================================
   Marque × type d'appareil : logo de la marque, vraie photo d'un de
   ses modèles (jamais celle d'une autre marque) et règle des calibres
   offerts, dont les points s'allument un à un.
   ================================================================== */

const AXIS = [0, 12000, 24000, 36000, 48000, 60000];

export function BrandMotif({ brand, logo, typeLabel, photo, offered }: { brand: string; logo: string | null; typeLabel: string; photo: { src: string; alt: string; caption: string; btu: number } | null; offered: number[] }) {
  const reduce = useReducedMotion();
  const caps = [...new Set(offered)].sort((a, b) => a - b);
  const lo = caps[0];
  const hi = caps[caps.length - 1];
  const top = Math.max(60000, hi ?? 0);
  const pos = (v: number) => `${(v / top) * 100}%`;

  return (
    <Parallax distance={-45} className="lg:ml-auto lg:max-w-[540px]">
      <div className="flex items-end justify-between gap-6">
        {logo ? (
          <motion.div initial={reduce ? false : { clipPath: "inset(0 100% 0 0)" }} animate={{ clipPath: "inset(0 0% 0 0)" }} transition={{ duration: 1.4, ease: EASE, delay: 0.4 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={logo} alt={brand} className="h-[34px] w-auto max-w-[220px] object-contain sm:h-[42px]" style={{ filter: "brightness(0) invert(0.94)" }} />
          </motion.div>
        ) : (
          <motion.p className="text-[30px] font-semibold" style={{ margin: 0, letterSpacing: "-0.04em" }} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.4 }}>
            {brand}
          </motion.p>
        )}
        <Caption className="pb-1 text-right">Gamme {typeLabel}</Caption>
      </div>

      {photo ? (
        <motion.figure style={{ margin: "28px 0 0" }} initial={reduce ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4, ease: EASE, delay: 0.6 }}>
          <div className="sh-float overflow-hidden rounded-[26px]" style={{ background: "#fff", boxShadow: "0 40px 80px -45px rgba(0,0,0,0.9)" }}>
            <div className="relative aspect-[16/10]">
              <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 1024px) 90vw, 520px" style={{ objectFit: "contain", padding: "6% 8%" }} />
            </div>
            <figcaption className="flex items-baseline justify-between gap-4 px-5 pb-4 text-[13px]" style={{ color: K.ink }}>
              <span className="truncate font-semibold">{photo.caption}</span>
              <span className="shrink-0 tabular-nums" style={{ color: "rgba(10,20,25,0.55)" }}>{fr(photo.btu)} BTU</span>
            </figcaption>
          </div>
        </motion.figure>
      ) : null}

      {caps.length > 0 ? (
        <motion.div className="mt-9" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.9 }}>
          <div className="flex items-baseline justify-between gap-4">
            <Caption>Calibres offerts</Caption>
            <p className="text-[14px] font-medium tabular-nums" style={{ margin: 0, color: K.cream }}>
              {lo === hi ? `${fr(lo)} BTU` : `${fr(lo)} à ${fr(hi)} BTU`}
            </p>
          </div>
          <div className="relative mt-5 h-[14px]">
            <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2" style={{ background: K.line }} />
            <motion.span
              className="absolute top-1/2 h-[2px] -translate-y-1/2"
              style={{ left: pos(lo), width: `${((hi - lo) / top) * 100}%`, background: K.orange, originX: 0 }}
              initial={reduce ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.6, ease: EASE, delay: 1.1 }}
            />
            {caps.map((c, i) => (
              <motion.span
                key={c}
                title={`${fr(c)} BTU`}
                className="absolute top-1/2 h-[10px] w-[10px] rounded-full"
                style={{ left: pos(c), x: "-50%", y: "-50%", background: K.orange, boxShadow: `0 0 0 3px ${K.ink}` }}
                initial={reduce ? false : { opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: EASE, delay: 1.2 + i * 0.12 }}
              />
            ))}
          </div>
          <div className="relative mt-2 h-4 text-[11px] tabular-nums" style={{ color: K.faint }} aria-hidden="true">
            {AXIS.map((v, i) => (
              <span key={v} className="absolute whitespace-nowrap" style={{ left: pos(v), transform: i === 0 ? "none" : i === AXIS.length - 1 ? "translateX(-100%)" : "translateX(-50%)" }}>
                {v === 0 ? "0" : `${v / 1000} k`}
              </span>
            ))}
          </div>
        </motion.div>
      ) : null}
    </Parallax>
  );
}
