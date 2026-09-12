"use client";

import "./product-heroes.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { HC, HERO_EASE, HeroActions, HeroArrow, HeroButton, HeroEyebrow, HeroFade, HeroLead, HeroShell, HeroTitle, Serif } from "@/components/hero/HeroKit";
import { SafeCount } from "./SafeCount";
import { ThermoScanEntryCard } from "@/components/thermoscan/ThermoScanEntryCard";

/* ==================================================================
   Héros du comparateur (/comparer) : face-à-face.
   Deux vraies thermopompes glissent l'une vers l'autre, un « vs » en
   italique se trace entre elles, puis des barres de duel partent du
   centre jusqu'aux vraies valeurs (capacité à −15 °C, HSPF2, SEER2).
   - Sélection en cours : les deux premiers modèles choisis.
   - Sans sélection : l'exemple de l'accueil (deux murales 12 000 BTU
     certifiées climat froid, photos officielles de chaque marque).
   Valeur absente = N/D ; sans photo : le nom de la marque.
   ================================================================== */

export type VsModel = {
  slug: string;
  brand: string;
  name: string;
  img: string | null;
  h5: number | null;
  hspf2: number | null;
  seer2: number | null;
};

const METRICS: { key: "h5" | "hspf2" | "seer2"; label: string; d: number }[] = [
  { key: "h5", label: "BTU/h à −15 °C", d: 0 },
  { key: "hspf2", label: "HSPF2 · chauffage", d: 1 },
  { key: "seer2", label: "SEER2 · climatisation", d: 1 },
];

const STUDIO = "linear-gradient(180deg, #FFFFFF 0%, #F5F0E8 100%)";

export function CompareHero({ models, mode, extra, hasComparison }: { models: VsModel[]; mode: "exemple" | "selection"; extra: number; hasComparison: boolean }) {
  return (
    <HeroShell size="md" labelledBy="pdh-cmp-titre" snow={0.3} columns="lg:grid-cols-[1fr_1fr]" visual={<VsStage models={models} mode={mode} extra={extra} />}>
      <HeroFade delay={0.05}>
        <nav aria-label="Fil d’Ariane" className="ph-crumbs text-[12.5px] font-medium">
          <ol className="m-0 flex list-none flex-wrap items-center gap-x-2 gap-y-1 p-0">
            <li><Link href="/">Accueil</Link></li>
            <li aria-hidden="true" className="text-gray-400">/</li>
            <li><Link href="/thermopompes">Thermopompes</Link></li>
            <li aria-hidden="true" className="text-gray-400">/</li>
            <li><span aria-current="page">Comparer</span></li>
          </ol>
        </nav>
      </HeroFade>
      <div className="mt-8">
        <HeroEyebrow>Comparateur</HeroEyebrow>
      </div>
      <HeroTitle id="pdh-cmp-titre" lines={["Comparez ce qui", <Serif key="s">compte vraiment.</Serif>]} />
      <HeroLead>Performance hivernale, efficacité, silence et garantie.</HeroLead>
      <HeroActions>
        <HeroButton href="#comparateur">{hasComparison ? "Voir la comparaison" : "Choisir mes modèles"}</HeroButton>
        <HeroButton href="/thermopompes" variant="ghost">
          Parcourir le catalogue
        </HeroButton>
      </HeroActions>
      {/* ThermoScan : comparer avec l'appareil actuel, directement dans le héros */}
      <HeroFade delay={1} className="mt-10 max-w-[620px]">
        <ThermoScanEntryCard />
      </HeroFade>
    </HeroShell>
  );
}

function VsStage({ models, mode, extra }: { models: VsModel[]; mode: "exemple" | "selection"; extra: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = !!useReducedMotion();
  const [play, setPlay] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setPlay(true), 1300);
    return () => window.clearTimeout(t);
  }, []);
  // Défilement : les deux adversaires s'écartent, le « vs » grandit.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const leftX = useTransform(scrollYProgress, [0, 1], [0, -36]);
  const rightX = useTransform(scrollYProgress, [0, 1], [0, 36]);
  const vsScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  const [a, b] = models;
  if (!a) return null;
  const rows = b ? METRICS.filter((m) => a[m.key] != null || b[m.key] != null) : [];

  return (
    <div ref={ref} className="relative">
      <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-2 sm:gap-5">
        <motion.div style={reduce ? undefined : { x: leftX }}>
          <motion.div initial={reduce ? false : { opacity: 0, x: -90, rotate: -4 }} animate={{ opacity: 1, x: 0, rotate: 0 }} transition={{ duration: 1.3, ease: HERO_EASE, delay: 0.35 }}>
            <div className="pdh-float">
              <VsCard m={a} priority />
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="flex flex-col items-center" style={reduce ? undefined : { scale: vsScale }} aria-hidden="true">
          <motion.span className="block w-px origin-bottom" style={{ height: 56, background: `linear-gradient(to top, ${HC.orange}, transparent)` }} initial={reduce ? false : { scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1, ease: HERO_EASE, delay: 0.9 }} />
          <motion.span
            className="ph-serif block py-2"
            style={{ fontSize: "clamp(38px, 4.4vw, 68px)", lineHeight: 1, color: HC.cream }}
            initial={reduce ? false : { opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: HERO_EASE, delay: 0.8 }}
          >
            vs
          </motion.span>
          <motion.span className="block w-px origin-top" style={{ height: 56, background: `linear-gradient(to bottom, ${HC.orange}, transparent)` }} initial={reduce ? false : { scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 1, ease: HERO_EASE, delay: 0.9 }} />
        </motion.div>

        <motion.div style={reduce ? undefined : { x: rightX }}>
          <motion.div initial={reduce ? false : { opacity: 0, x: 90, rotate: 4 }} animate={{ opacity: 1, x: 0, rotate: 0 }} transition={{ duration: 1.3, ease: HERO_EASE, delay: 0.45 }}>
            <div className="pdh-float" style={{ animationDelay: "-3.5s" }}>
              {b ? <VsCard m={b} priority /> : <PickCard />}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Barres de duel : chaque côté part du centre ; le meilleur passe à l'orange. */}
      {b && rows.length > 0 && (
        <dl className="mt-9" style={{ margin: "36px 0 0" }}>
          {rows.map((r, i) => {
            const va = a[r.key];
            const vb = b[r.key];
            const max = Math.max(va ?? 0, vb ?? 0);
            const lead = va != null && vb != null && va !== vb ? (va > vb ? "a" : "b") : null;
            const w = (v: number | null) => (v != null && max > 0 ? `${(v / max) * 100}%` : "0%");
            return (
              <motion.div
                key={r.key}
                className="py-3"
                style={{ borderTop: i ? `1px solid ${HC.line}` : "none" }}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: HERO_EASE, delay: 1.1 + i * 0.1 }}
              >
                <dt className="text-center text-[11px] font-medium uppercase" style={{ letterSpacing: "0.16em", color: HC.faint }}>
                  {r.label}
                </dt>
                <dd className="mt-2 grid grid-cols-[4.6em_minmax(0,1fr)_minmax(0,1fr)_4.6em] items-center gap-2.5 sm:gap-3" style={{ margin: "8px 0 0" }}>
                  <Val v={va} d={r.d} lead={lead === "a"} play={play} align="left" />
                  <span className="relative h-[6px] overflow-hidden rounded-full" style={{ background: "rgba(244,239,231,0.08)" }}>
                    <motion.span className="absolute right-0 top-0 h-full rounded-full" style={{ background: lead === "a" ? HC.orange : "rgba(244,239,231,0.36)" }} initial={{ width: "0%" }} animate={{ width: play ? w(va) : "0%" }} transition={{ duration: 1.3, ease: HERO_EASE, delay: i * 0.1 }} />
                  </span>
                  <span className="relative h-[6px] overflow-hidden rounded-full" style={{ background: "rgba(244,239,231,0.08)" }}>
                    <motion.span className="absolute left-0 top-0 h-full rounded-full" style={{ background: lead === "b" ? HC.orange : "rgba(244,239,231,0.36)" }} initial={{ width: "0%" }} animate={{ width: play ? w(vb) : "0%" }} transition={{ duration: 1.3, ease: HERO_EASE, delay: i * 0.1 }} />
                  </span>
                  <Val v={vb} d={r.d} lead={lead === "b"} play={play} align="right" />
                </dd>
              </motion.div>
            );
          })}
        </dl>
      )}

      <HeroFade delay={1.5}>
        <p className="text-[12.5px] leading-relaxed" style={{ color: HC.faint, margin: "18px 0 0" }}>
          {mode === "exemple"
            ? "Exemple : deux murales de 12 000 BTU certifiées climat froid. Chiffres ENERGY STAR et Hydro-Québec."
            : extra > 0
              ? `Votre sélection · ${extra} autre${extra > 1 ? "s" : ""} modèle${extra > 1 ? "s" : ""} dans la comparaison ci-dessous.`
              : "Votre sélection. Le détail complet est ci-dessous."}
        </p>
      </HeroFade>
    </div>
  );
}

function Val({ v, d, lead, play, align }: { v: number | null; d: number; lead: boolean; play: boolean; align: "left" | "right" }) {
  return (
    <span className="whitespace-nowrap tabular-nums" style={{ textAlign: align, fontSize: "clamp(14px, 1.35vw, 19px)", fontWeight: 600, letterSpacing: "-0.03em", color: lead ? HC.orange : HC.cream, transition: "color .5s" }}>
      {v == null ? <span style={{ color: HC.faint }}>N/D</span> : <SafeCount value={v} decimals={d} play={play} />}
    </span>
  );
}

function VsCard({ m, priority = false }: { m: VsModel; priority?: boolean }) {
  return (
    <Link href={`/produit/${m.slug}`} className="group block overflow-hidden rounded-[22px]" style={{ background: HC.panel, border: `1px solid ${HC.line}`, boxShadow: "0 40px 70px -40px rgba(0,0,0,0.9)" }} aria-label={`${m.brand} ${m.name} : voir la fiche`}>
      <div className="relative h-[120px] sm:h-[170px] lg:h-[170px] xl:h-[185px]" style={{ background: m.img ? STUDIO : HC.panel }}>
        {m.img ? (
          <Image src={m.img} alt={`Thermopompe ${m.brand} ${m.name}`} fill priority={priority} sizes="(min-width: 1024px) 20vw, 40vw" className="transition-transform duration-700 group-hover:scale-[1.05]" style={{ objectFit: "contain", padding: 14 }} />
        ) : (
          <span className="absolute inset-0 flex items-center justify-center px-3 text-center" style={{ fontSize: "clamp(20px, 2.3vw, 34px)", fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1.05, overflowWrap: "anywhere" }}>
            {m.brand}
          </span>
        )}
      </div>
      <div className="px-3.5 py-3 sm:px-4 sm:py-3.5">
        <p className="truncate text-[10.5px] font-semibold uppercase" style={{ letterSpacing: "0.16em", color: HC.faint, margin: 0 }}>
          {m.brand}
        </p>
        <p className="line-clamp-2 min-h-[2.5em] text-[13px] font-semibold leading-snug sm:text-[15px]" style={{ letterSpacing: "-0.01em", margin: "4px 0 0", overflowWrap: "anywhere" }}>
          {m.name}
        </p>
      </div>
    </Link>
  );
}

/* Un seul modèle choisi : la place de l'adversaire reste à prendre. */
function PickCard() {
  return (
    <Link href="#comparateur" className="pdh-link flex h-[183px] flex-col items-center justify-center gap-3 rounded-[22px] px-4 text-center sm:h-[240px] lg:h-[240px] xl:h-[255px]" style={{ border: "1px dashed rgba(244,239,231,0.3)", color: HC.mute }}>
      <span className="text-[14px] font-semibold sm:text-[16px]">Choisissez un deuxième modèle</span>
      <HeroArrow size={16} />
    </Link>
  );
}
