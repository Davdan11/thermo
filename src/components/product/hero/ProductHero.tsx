"use client";

import "./product-heroes.css";
import "@/components/home/premium/sections.css";
import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Snowflake } from "lucide-react";
import { HC, HERO_EASE, HeroActions, HeroArrow, HeroButton, HeroFade, HeroShell, HeroStats, HeroTitle, Serif, type HeroStat } from "@/components/hero/HeroKit";
import { AirLines } from "@/components/home/premium/shared";
import { SafeCount } from "./SafeCount";

/* ==================================================================
   Héros de la fiche produit (/produit/[slug]), version premium.
   - La vraie photo du fabricant flotte sur une scène claire, avec son
     reflet sur le sol ; sans photo : le nom de la marque sur fond
     sombre (jamais l'appareil d'une autre marque).
   - Marque et modèle en grand, chiffres certifiés qui défilent
     (capacité à −15 °C, HSPF2, SEER2), montant LogisVert officiel en
     vert avec le logo d'Hydro-Québec.
   - Données calculées côté serveur (ProductHeader) : ce composant ne
     reçoit que des valeurs simples, la page reste légère.
   ================================================================== */

export type CapacityChip = { slug: string; modelNumber: string; count: number; label: string };

export type ProductHeroData = {
  slug: string;
  brandName: string;
  brandSlug: string;
  brandLogo: string | null;
  seriesLabel: string | null;
  seriesSlug: string;
  modelName: string;
  modelNumber: string;
  typeLabel: string;
  capacityBtu: number | null;
  zones: number | null;
  coldClimate: boolean;
  discontinued: boolean;
  minTempC: number | null;
  imageUrl: string | null;
  stats: HeroStat[];
  /** Montant LogisVert officiel (0 = aucun montant publié pour ce jumelage). */
  logisVert: number;
  chips: CapacityChip[];
  /** Nombre total de fiches sœurs dans la série. */
  siblings: number;
};

/** Vert des montants LogisVert, lisible sur l'encre. */
const GREEN = "#4CC38A";
const fr = (n: number) => n.toLocaleString("fr-CA");
const minus = (s: string) => s.replace("-", "−");

export function ProductHero(d: ProductHeroData) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = !!useReducedMotion();
  // Défilement : la scène remonte doucement, le filigrane de la marque glisse.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const stageY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const markX = useTransform(scrollYProgress, [0, 1], ["0%", "-14%"]);

  const capacity = d.capacityBtu ? `${fr(d.capacityBtu)} BTU/h` : null;

  return (
    <HeroShell
      size="md"
      labelledBy="pdh-titre"
      snow={0.22}
      background={
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 select-none whitespace-nowrap text-center"
          style={{ x: reduce ? 0 : markX, fontSize: "clamp(90px, 17vw, 300px)", fontWeight: 700, letterSpacing: "-0.05em", lineHeight: 0.74, color: "rgba(244,239,231,0.035)" }}
        >
          {d.brandName}
        </motion.div>
      }
    >
      <div ref={ref} className="pdh-grid">
        {/* ── Identification ── */}
        <div className="pdh-a">
          <HeroFade delay={0.05}>
            <nav aria-label="Fil d’Ariane" className="ph-crumbs text-[12.5px] font-medium">
              <ol className="m-0 flex list-none flex-wrap items-center gap-x-2 gap-y-1 p-0">
                <li><Link href="/">Accueil</Link></li>
                <li aria-hidden="true" className="text-gray-400">/</li>
                <li><Link href="/marques">Marques</Link></li>
                <li aria-hidden="true" className="text-gray-400">/</li>
                <li><Link href={`/marques/${d.brandSlug}`}>{d.brandName}</Link></li>
                <li aria-hidden="true" className="text-gray-400">/</li>
                <li className="min-w-0 break-all"><span aria-current="page">{d.modelName}</span></li>
              </ol>
            </nav>
          </HeroFade>

          <HeroFade delay={0.12} className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-3">
            {d.brandLogo && (
              <Link href={`/marques/${d.brandSlug}`} aria-label={`Marque ${d.brandName}`} className="inline-flex items-center rounded-full bg-white px-4 py-2">
                <Image src={d.brandLogo} alt={`Logo ${d.brandName}`} width={120} height={36} style={{ objectFit: "contain", width: "auto", height: 20, maxWidth: 112 }} />
              </Link>
            )}
            <span className="flex items-center gap-3 text-[12px] font-medium uppercase" style={{ letterSpacing: "0.2em", color: HC.mute }}>
              <span aria-hidden="true" className="inline-block h-px w-8 shrink-0" style={{ background: HC.orange }} />
              <span>
                {d.brandName}
                {d.seriesLabel ? ` · ${d.seriesLabel}` : ""}
              </span>
            </span>
          </HeroFade>

          <HeroTitle
            id="pdh-titre"
            delay={0.2}
            style={{ fontSize: "clamp(40px, 4.5vw, 78px)", margin: "20px 0 0", overflowWrap: "anywhere" }}
            lines={[
              <span key="l1" style={{ display: "block", fontSize: "0.44em", lineHeight: 1.2, letterSpacing: "-0.025em", fontWeight: 500, color: "rgba(244,239,231,0.8)" }}>
                Thermopompe <Serif>{d.brandName}</Serif>
              </span>,
              <span key="l2">
                {d.modelName.split(" ").map((w, k) => (
                  <span key={k} className="lg:whitespace-nowrap">
                    {k ? " " : ""}
                    {w}
                  </span>
                ))}
              </span>,
            ]}
          />

          <HeroFade delay={0.55} className="mt-6 flex flex-wrap items-center gap-2">
            <Pill>{d.typeLabel}</Pill>
            {capacity && <Pill strong>{capacity}</Pill>}
            {d.zones != null && d.zones > 1 && <Pill>{d.zones} zones intérieures</Pill>}
            {d.coldClimate && (
              <Pill accent>
                <Snowflake aria-hidden="true" size={13} strokeWidth={2.2} style={{ color: HC.orange }} />
                Climat froid
              </Pill>
            )}
            {d.minTempC != null && <Pill>Chauffe jusqu’à {minus(String(d.minTempC))}&nbsp;°C</Pill>}
            {d.discontinued && <Pill>Discontinué</Pill>}
          </HeroFade>
          <HeroFade delay={0.62}>
            <p className="text-[12.5px]" style={{ color: HC.faint, margin: "14px 0 0" }}>
              Modèle&nbsp;: <span className="font-mono" style={{ color: HC.mute }}>{d.modelNumber}</span>
            </p>
          </HeroFade>
        </div>

        {/* ── Scène ── */}
        <motion.div className="pdh-b" style={reduce ? undefined : { y: stageY }}>
          <Stage d={d} reduce={reduce} />
        </motion.div>

        {/* ── Chiffres, autres capacités, actions ── */}
        <div className="pdh-c">
          {d.stats.length > 0 && <HeroStats items={d.stats} delay={0.85} className="lg:mt-9" />}

          {d.chips.length > 0 && (
            <HeroFade delay={1} className="mt-8">
              <p className="text-[11.5px] font-medium uppercase" style={{ letterSpacing: "0.14em", color: HC.faint, margin: "0 0 10px" }}>
                Autres capacités{d.seriesLabel ? ` — ${d.seriesLabel}` : ""}
                {d.siblings > d.chips.length ? ` · ${d.siblings + 1} modèles` : ""}
              </p>
              <div className="flex flex-wrap gap-2">
                {d.chips.map((chip) => (
                  <Link
                    key={chip.slug}
                    href={`/produit/${chip.slug}`}
                    title={chip.count > 1 ? `${chip.count} modèles de ${chip.label} dans cette série` : chip.modelNumber}
                    className="pdh-chip rounded-full px-4 py-2 text-[13px] font-medium tabular-nums"
                    style={{ border: `1px solid ${HC.line}`, color: HC.mute }}
                  >
                    {chip.label}
                    {chip.count > 1 ? ` ×${chip.count}` : ""}
                  </Link>
                ))}
                {d.siblings > d.chips.length && d.seriesLabel && (
                  <Link
                    href={`/thermopompes?brand=${d.brandSlug}&series=${d.seriesSlug}`}
                    className="pdh-chip rounded-full px-4 py-2 text-[13px] font-medium"
                    style={{ border: "1px dashed rgba(244,239,231,0.26)", color: HC.faint }}
                  >
                    Tous les modèles {d.seriesLabel}
                  </Link>
                )}
              </div>
            </HeroFade>
          )}

          <HeroActions delay={1.1}>
            <HeroButton href="/trouver-ma-thermopompe">Vérifier si ce modèle me convient</HeroButton>
            <HeroButton href="/soumission" variant="ghost">
              Demander une soumission
            </HeroButton>
          </HeroActions>
          <HeroFade delay={1.2}>
            <Link href={`/comparer?models=${d.slug}`} className="pdh-link mt-5 inline-flex items-center gap-2 text-[14px] font-semibold" style={{ color: HC.mute }}>
              Comparer ce modèle avec un autre
              <HeroArrow size={14} />
            </Link>
          </HeroFade>
        </div>
      </div>
    </HeroShell>
  );
}

/* ------------------------------------------------------------------
   Scène : photo officielle (studio clair, sol et reflet) ou, sans
   photo, le nom de la marque sur panneau sombre.
   ------------------------------------------------------------------ */
function Stage({ d, reduce }: { d: ProductHeroData; reduce: boolean }) {
  const photo = d.imageUrl;
  return (
    <div className="relative pb-10 lg:pb-0">
      <motion.figure
        className="relative m-0 overflow-hidden rounded-[28px]"
        style={{
          height: "clamp(300px, 42vw, 540px)",
          background: photo ? "linear-gradient(180deg, #FFFFFF 0%, #F7F3EC 68%, #EEE8DE 100%)" : HC.panel,
          border: photo ? "none" : `1px solid ${HC.line}`,
          boxShadow: "0 50px 90px -50px rgba(0,0,0,0.85)",
        }}
        initial={reduce ? false : { clipPath: "inset(100% 0% 0% 0% round 28px)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0% round 28px)" }}
        transition={{ duration: 1.3, ease: HERO_EASE, delay: 0.3 }}
      >
        {photo ? (
          <>
            {/* Appareil : entrée par le bas puis flottement lent. */}
            <motion.div
              className="absolute inset-x-[9%] top-[11%] bottom-[31%]"
              style={{ mixBlendMode: "multiply" }}
              initial={reduce ? false : { opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4, ease: HERO_EASE, delay: 0.65 }}
            >
              <div className="pdh-float absolute inset-0">
                <Image src={photo} alt={`${d.brandName} ${d.modelName}`} fill priority sizes="(min-width: 1024px) 38vw, 88vw" style={{ objectFit: "contain", objectPosition: "bottom center" }} />
              </div>
            </motion.div>
            {/* Sol */}
            <motion.div
              aria-hidden="true"
              className="absolute inset-x-[7%] top-[69%] h-px origin-center"
              style={{ background: "rgba(10,20,25,0.14)" }}
              initial={reduce ? false : { scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.4, ease: HERO_EASE, delay: 0.9 }}
            />
            {/* Reflet */}
            <motion.div aria-hidden="true" className="absolute inset-x-[9%] top-[69%] h-[58%]" style={{ mixBlendMode: "multiply" }} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 1.2 }}>
              <div className="pdh-reflect absolute inset-0">
                <div className="pdh-float absolute inset-0">
                  <Image src={photo} alt="" fill sizes="(min-width: 1024px) 38vw, 88vw" style={{ objectFit: "contain", objectPosition: "bottom center" }} />
                </div>
              </div>
            </motion.div>
            <figcaption className="absolute left-5 top-5 text-[11px] font-semibold uppercase sm:left-7 sm:top-6" style={{ letterSpacing: "0.16em", color: "rgba(10,20,25,0.5)" }}>
              Photo officielle · {d.brandName}
            </figcaption>
          </>
        ) : (
          <>
            <AirLines color={HC.cream} opacity={0.1} className="absolute inset-0 h-full w-full" />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              {d.brandLogo && (
                <motion.span
                  className="mb-7 inline-flex items-center rounded-full bg-white px-5 py-2.5"
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: HERO_EASE, delay: 0.9 }}
                >
                  <Image src={d.brandLogo} alt={`Logo ${d.brandName}`} width={160} height={48} style={{ objectFit: "contain", width: "auto", height: 26, maxWidth: 150 }} />
                </motion.span>
              )}
              <span className="block overflow-hidden" style={{ paddingBottom: "0.1em" }}>
                <motion.span
                  className="block"
                  style={{ fontSize: "clamp(46px, 6.4vw, 108px)", fontWeight: 600, letterSpacing: "-0.05em", lineHeight: 1, overflowWrap: "anywhere" }}
                  initial={reduce ? false : { y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 1.2, ease: HERO_EASE, delay: 0.7 }}
                >
                  {d.brandName}
                </motion.span>
              </span>
              <motion.span
                className="mt-4 block text-[12px] font-medium uppercase"
                style={{ letterSpacing: "0.18em", color: HC.faint }}
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.1 }}
              >
                {d.typeLabel}
                {d.capacityBtu ? ` · ${fr(d.capacityBtu)} BTU/h` : ""}
              </motion.span>
            </div>
            <figcaption className="absolute bottom-5 right-6 text-[11px]" style={{ color: HC.faint }}>
              Photo du fabricant non disponible
            </figcaption>
          </>
        )}
      </motion.figure>

      {d.logisVert > 0 && <LogisVertTag amount={d.logisVert} reduce={reduce} />}
    </div>
  );
}

/* Montant LogisVert officiel : logo Hydro-Québec, montant en vert qui défile. */
function LogisVertTag({ amount, reduce }: { amount: number; reduce: boolean }) {
  const [play, setPlay] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setPlay(true), 1500);
    return () => window.clearTimeout(t);
  }, []);
  return (
    <motion.div
      className="absolute bottom-0 left-4 right-4 sm:right-auto lg:-bottom-8 lg:-left-8"
      initial={reduce ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: HERO_EASE, delay: 1.35 }}
    >
      <Link
        href="#subvention-logisvert"
        className="pdh-link flex items-center gap-4 rounded-[20px] py-4 pl-4 pr-6"
        style={{ background: "rgba(10,20,25,0.9)", border: `1px solid ${HC.line}`, backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", boxShadow: "0 30px 60px -30px rgba(0,0,0,0.9)" }}
      >
        <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[12px] bg-white">
          <Image src="/images/hydroquebec.png" alt="Hydro-Québec" width={40} height={40} style={{ objectFit: "contain", width: 36, height: 36 }} />
        </span>
        <span className="min-w-0">
          <span className="block text-[11px] font-medium uppercase" style={{ letterSpacing: "0.16em", color: HC.faint }}>
            Subvention LogisVert
          </span>
          <span className="block tabular-nums" style={{ fontSize: 30, fontWeight: 600, letterSpacing: "-0.04em", lineHeight: 1.1, color: GREEN }}>
            <SafeCount value={amount} play={play} />
            &nbsp;$
          </span>
          <span className="block text-[12px]" style={{ color: HC.mute }}>
            Montant officiel Hydro-Québec
          </span>
        </span>
      </Link>
    </motion.div>
  );
}

function Pill({ children, strong = false, accent = false }: { children: ReactNode; strong?: boolean; accent?: boolean }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[13px]"
      style={{
        border: `1px solid ${accent ? "rgba(229,75,23,0.55)" : HC.line}`,
        color: strong ? HC.cream : HC.mute,
        fontWeight: strong ? 600 : 500,
      }}
    >
      {children}
    </span>
  );
}

