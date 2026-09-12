"use client";

import "../hero-premium.css";
import "./sections.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useInView, useScroll, useTransform } from "motion/react";
import { Arrow, C, CountUp, DISPLAY, EASE, RevealLines } from "./shared";
import { useReduced } from "@/components/heroes-v2/outils/motion";

/* ==================================================================
   « Comparez les modèles qui comptent » — studio blanc, trois vraies
   thermopompes de 12 000 BTU certifiées climat froid posées sur un sol
   miroir. Un critère à la fois (défilement automatique ou onglets) :
   les barres et les chiffres montent jusqu'aux vraies valeurs du
   catalogue ; le meilleur des trois se soulève. Valeur absente = N/D.
   ================================================================== */

export type CompareModel = {
  slug: string;
  brand: string;
  name: string;
  img: string;
  h5: number | null;
  hspf2: number | null;
  seer2: number | null;
  cop5: number | null;
};
type Key = "h5" | "hspf2" | "seer2" | "cop5";

const METRICS: { key: Key; label: string; unit: string; hint: string; decimals: number }[] = [
  { key: "h5", label: "Grand froid", unit: "BTU/h à −15 °C", hint: "Chaleur livrée par −15 °C, certifiée ENERGY STAR.", decimals: 0 },
  { key: "hspf2", label: "Efficacité", unit: "HSPF2", hint: "Efficacité saisonnière en chauffage : plus c’est haut, moins la facture l’est.", decimals: 1 },
  { key: "seer2", label: "Climatisation", unit: "SEER2", hint: "Efficacité saisonnière en climatisation, pour l’été.", decimals: 1 },
  { key: "cop5", label: "Rendement au froid", unit: "COP à −15 °C", hint: "Unités de chaleur produites par unité d’électricité, à −15 °C.", decimals: 2 },
];
const CYCLE_MS = 5200;
const H = "h-[130px] sm:h-[210px] lg:h-[290px]";

export function CompareStage({ models }: { models: CompareModel[] }) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { margin: "0px 0px -25% 0px" });
  const seen = useInView(ref, { once: true, margin: "0px 0px -25% 0px" });
  const reduce = !!useReduced();
  const [m, setM] = useState(0);
  const [auto, setAuto] = useState(true);

  // Parallaxe : les trois appareils glissent à des vitesses différentes au défilement.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const p0 = useTransform(scrollYProgress, [0, 1], [26, -26]);
  const p1 = useTransform(scrollYProgress, [0, 1], [48, -48]);
  const p2 = useTransform(scrollYProgress, [0, 1], [14, -14]);
  const parallax = [p0, p1, p2];

  // Change de critère toutes les 5,2 s tant que la section est à l'écran, jusqu'au premier clic.
  useEffect(() => {
    if (!inView || !auto || reduce) return;
    const t = window.setTimeout(() => setM((x) => (x + 1) % METRICS.length), CYCLE_MS);
    return () => window.clearTimeout(t);
  }, [inView, auto, reduce, m]);

  const metric = METRICS[m];
  const values = models.map((x) => x[metric.key]);
  const max = Math.max(0, ...values.map((v) => v ?? 0));

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ background: "#fff", color: C.ink, fontFamily: DISPLAY }} aria-labelledby="ps-cmp-titre">


      <div className="relative mx-auto max-w-[1440px] px-5 py-[13vh] sm:px-8 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_420px] lg:items-end">
          <RevealLines
            id="ps-cmp-titre"
            lines={["Comparez les modèles", <span key="s" className="hp-serif">qui comptent.</span>]}
            style={{ fontSize: "clamp(40px, 5.6vw, 96px)", lineHeight: 0.95, letterSpacing: "-0.045em", fontWeight: 600, margin: 0 }}
          />
          <div>
            <p className="text-[16px] leading-relaxed" style={{ color: C.inkMute, margin: 0 }}>
              Trois thermopompes murales de 12 000 BTU certifiées climat froid, avec leurs chiffres certifiés. Choisissez un critère.
            </p>
            <Link href="/comparer" className="mt-6 inline-flex items-center gap-3 rounded-full py-2.5 pl-6 pr-2.5 text-[15px] font-semibold" style={{ background: C.ink, color: C.cream }}>
              <span className="hp-roll">
                <span>Comparer les modèles</span>
                <span aria-hidden="true">Comparer les modèles</span>
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full" style={{ background: "rgba(244,239,231,0.14)" }}>
                <Arrow size={14} />
              </span>
            </Link>
          </div>
        </div>

        {/* Onglets de critère */}
        <div role="tablist" aria-label="Critère comparé" className="ps-tabs mt-14 flex gap-x-8 overflow-x-auto whitespace-nowrap" style={{ borderBottom: `1px solid ${C.inkLine}` }}>
          {METRICS.map((x, i) => (
            <button
              key={x.key}
              type="button"
              role="tab"
              aria-selected={i === m}
              onClick={() => {
                setM(i);
                setAuto(false);
              }}
              className="relative pb-4 pt-1 text-[15px] font-semibold"
              style={{ color: i === m ? C.ink : C.inkFaint, transition: "color .3s" }}
            >
              {x.label}
              {i === m && <motion.span layoutId="ps-cmp-onglet" className="absolute inset-x-0 -bottom-px h-[2px]" style={{ background: C.orange }} transition={{ duration: 0.5, ease: EASE }} />}
            </button>
          ))}
        </div>
        <div className="mt-4 min-h-[24px]">
          <AnimatePresence mode="wait">
            <motion.p key={metric.key} className="text-[14px]" style={{ color: C.inkMute, margin: 0 }} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.35 }}>
              <strong style={{ color: C.ink }}>{metric.unit}</strong> · {metric.hint}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Scène */}
        <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-8 lg:gap-14" role="tabpanel" aria-label={metric.label}>
          {models.map((x, i) => {
            const v = x[metric.key];
            const lead = v != null && max > 0 && v === max;
            const pct = v != null && max > 0 ? (v / max) * 100 : 0;
            return (
              <motion.div
                key={x.slug}
                initial={reduce ? false : { opacity: 0, y: 70 }}
                animate={seen || reduce ? { opacity: 1, y: 0 } : undefined}
                transition={{ duration: 1.1, ease: EASE, delay: i * 0.12 }}
              >
                <Link href={`/produit/${x.slug}`} className="group block" aria-label={`${x.brand} ${x.name} : voir la fiche`}>
                  {/* Parallaxe au défilement, soulèvement du meilleur, flottement en boucle. */}
                  <motion.div className={`relative ${H}`} style={reduce ? undefined : { y: parallax[i % 3] }}>
                    <motion.div className="absolute inset-0" animate={{ y: lead ? -14 : 0, scale: lead ? 1.03 : 1 }} transition={{ duration: 0.8, ease: EASE }}>
                      <div className="ps-float absolute inset-0" style={{ animationDelay: `${i * -2.2}s` }}>
                        <Image src={x.img} alt="" fill sizes="(min-width: 1024px) 28vw, 30vw" className="transition-transform duration-700 group-hover:scale-[1.04]" style={{ objectFit: "contain", objectPosition: "bottom center" }} />
                      </div>
                    </motion.div>
                  </motion.div>
                  {/* Sol et reflet */}
                  <motion.div className="h-px origin-left" style={{ background: C.inkLine }} initial={reduce ? false : { scaleX: 0 }} animate={seen || reduce ? { scaleX: 1 } : undefined} transition={{ duration: 1.3, ease: EASE, delay: 0.3 + i * 0.12 }} />
                  <div aria-hidden="true" className="relative h-[46px] overflow-hidden sm:h-[72px] lg:h-[96px]">
                    <div className={`ps-reflection absolute inset-x-0 top-0 ${H}`} style={{ transformOrigin: "top", transform: "scaleY(-1) translateY(-100%)" }}>
                      <Image src={x.img} alt="" fill sizes="(min-width: 1024px) 28vw, 30vw" style={{ objectFit: "contain", objectPosition: "bottom center" }} />
                    </div>
                  </div>

                  {/* Hauteurs fixes : les chiffres restent alignés d'une colonne à l'autre, même sur mobile. */}
                  <p className="truncate text-[11px] font-semibold uppercase sm:text-[12px]" style={{ letterSpacing: "0.16em", color: C.inkMute, margin: 0 }}>
                    {x.brand}
                  </p>
                  <p className="line-clamp-2 min-h-[2.6em] text-[13px] font-semibold leading-snug sm:text-[16px]" style={{ letterSpacing: "-0.01em", margin: "4px 0 0" }}>
                    {x.name}
                  </p>
                  <p className="mt-5 flex items-baseline gap-2" style={{ margin: "20px 0 0" }}>
                    <span style={{ fontSize: "clamp(22px, 3.4vw, 54px)", fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 1, color: lead ? C.orange : C.ink, transition: "color .5s" }}>
                      {v == null ? "N/D" : <CountUp value={v} decimals={metric.decimals} play={seen} />}
                    </span>
                  </p>
                  <div className="mt-3 h-[6px] overflow-hidden rounded-full" style={{ background: C.inkLine }}>
                    <motion.div
                      className="relative h-full overflow-hidden rounded-full"
                      style={{ background: lead ? C.orange : "rgba(10,20,25,0.32)" }}
                      initial={{ width: "0%" }}
                      animate={{ width: seen ? `${pct}%` : "0%" }}
                      transition={{ duration: 1.2, ease: EASE, delay: 0.1 + i * 0.08 }}
                    >
                      {lead && !reduce && <span className="ps-sweep" aria-hidden="true" />}
                    </motion.div>
                  </div>
                  <p className="mt-2 min-h-[18px] text-[12px] font-semibold" style={{ color: C.orange, margin: "8px 0 0", opacity: lead ? 1 : 0, transition: "opacity .4s" }}>
                    Meilleur des trois
                  </p>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <p className="mt-12 text-[13px]" style={{ color: C.inkFaint, margin: "48px 0 0" }}>
          Exemples choisis pour l’illustration, pas un classement. Sources : ENERGY STAR et liste LogisVert d’Hydro-Québec.
        </p>
      </div>
    </section>
  );
}
