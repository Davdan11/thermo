"use client";

import "@/components/home/premium/sections.css";
import "./brand-hero.css";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { AirLines } from "@/components/home/premium/shared";
import { HC, HERO_EASE, HeroActions, HeroArrow, HeroButton, HeroFade, HeroLead, HeroShell, HeroStats, HeroTitle, Serif } from "@/components/hero/HeroKit";
import { CreamFilter } from "./CreamFilter";

/* ==================================================================
   Héros d'une marque (/marques/[slug]).
   - Fil d'Ariane, logo de la marque en crème révélé d'un balayage,
     « Thermopompes <Marque> » avec le nom en italique.
   - Filtres de la marque (types, climat froid) en pastilles, chiffres
     réels de la marque qui défilent.
   - À droite : vraie photo d'un modèle de la marque sur une carte crème
     qui flotte et s'incline au défilement, lignes d'air derrière, et la
     plage de capacité de la gamme tracée sur une règle.
   - En fond : le nom de la marque en contour géant qui glisse au défilement.
   ================================================================== */

export type BrandHeroProps = {
  name: string;
  slug: string;
  /** plate : logo officiel en couleurs posé sur une plaque crème (pas de version monochrome utilisable). */
  logo: { src: string; ratio: number; plate: boolean } | null;
  stats: { models: number; series: number; cold: number };
  types: { label: string; href: string }[];
  cold: boolean;
  capacity: { min: number; max: number } | null;
  photo: { src: string; alt: string; title: string; subtitle: string | null; cold: boolean; href: string } | null;
};

const fmt = (n: number) => n.toLocaleString("fr-CA");
const INK_MUTE = "rgba(10,20,25,0.58)";
const GLASS: CSSProperties = {
  background: "rgba(16,34,45,0.72)",
  border: `1px solid ${HC.line}`,
  backdropFilter: "blur(16px) saturate(130%)",
  WebkitBackdropFilter: "blur(16px) saturate(130%)",
};

export function BrandHero({ name, slug, logo, stats, types, cold, capacity, photo }: BrandHeroProps) {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const markX = useTransform(scrollY, [0, 900], ["0%", "-12%"]);
  const cardY = useTransform(scrollY, [0, 900], [0, -90]);
  const cardRotate = useTransform(scrollY, [0, 900], [0, 3]);

  const crumbs = [
    { label: "Accueil", href: "/" },
    { label: "Thermopompes", href: "/thermopompes" },
    { label: "Marques", href: "/marques" },
    { label: name },
  ];

  const items = [
    { value: stats.models, label: stats.models > 1 ? "modèles" : "modèle" },
    { value: stats.series, label: stats.series > 1 ? "séries" : "série" },
    { value: stats.cold, label: "climat froid" },
  ].filter((s) => s.value > 0);

  const background = (
    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 select-none overflow-hidden">
      <motion.div style={reduce ? undefined : { x: markX }}>
        <motion.p
          className="whitespace-nowrap"
          initial={reduce ? false : { opacity: 0, y: "18%" }}
          animate={{ opacity: 1, y: "0%" }}
          transition={{ duration: 2, ease: HERO_EASE, delay: 0.2 }}
          style={{
            fontSize: "clamp(110px, 19vw, 330px)",
            fontWeight: 700,
            letterSpacing: "-0.05em",
            lineHeight: 0.8,
            margin: "0 0 -0.06em",
            paddingLeft: "3vw",
            color: "transparent",
            WebkitTextStroke: "1px rgba(244,239,231,0.08)",
          }}
        >
          {name}
        </motion.p>
      </motion.div>
    </div>
  );

  // Sans photo locale du fabricant, le visuel se limite à la règle de capacité (le logo est déjà à gauche).
  const floating = !!photo;
  const visual =
    photo || capacity ? (
      <div className={`relative mx-auto w-full max-w-[540px] lg:mr-0 ${capacity && floating ? "lg:pb-32" : ""}`}>
        <AirLines color={HC.cream} opacity={0.12} className="pointer-events-none absolute -left-[30%] top-[16%] h-[64%] w-[160%]" />
        {photo ? (
          <motion.div className="relative" style={reduce ? undefined : { y: cardY, rotate: cardRotate }}>
            <motion.div initial={reduce ? false : { opacity: 0, y: 70, rotate: -6 }} animate={{ opacity: 1, y: 0, rotate: -1.5 }} transition={{ duration: 1.6, ease: HERO_EASE, delay: 0.35 }}>
              <div className="bh-float">
                <PhotoCard photo={photo} />
              </div>
            </motion.div>
          </motion.div>
        ) : null}
        {capacity ? <CapacityPanel min={capacity.min} max={capacity.max} floating={floating} /> : null}
      </div>
    ) : undefined;

  return (
    <HeroShell size="md" snow={0.3} labelledBy="marque-titre" columns="lg:grid-cols-[1.08fr_0.92fr]" background={background} visual={visual}>
      <CreamFilter />
      <HeroFade delay={0.05}>
        <nav aria-label="Fil d’Ariane" className="ph-crumbs text-[11.5px] font-medium uppercase" style={{ letterSpacing: "0.16em" }}>
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
            {crumbs.map((c, i) => (
              // Sur mobile, « Accueil » est masqué : le fil tient sur une ligne (les données structurées restent complètes).
              <li key={c.label} className={`items-center gap-2 ${i === 0 ? "hidden sm:flex" : "flex"}`}>
                {i > 0 && (
                  <span aria-hidden="true" className={`text-gray-400 ${i === 1 ? "hidden sm:inline" : ""}`}>
                    /
                  </span>
                )}
                {c.href ? <Link href={c.href}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
              </li>
            ))}
          </ol>
        </nav>
      </HeroFade>

      {logo ? (
        <motion.div
          className="mt-10 w-fit max-w-full"
          initial={reduce ? false : { clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1.3, ease: HERO_EASE, delay: 0.15 }}
        >
          {logo.plate ? (
            <span className="inline-flex items-center rounded-2xl px-5 py-3" style={{ background: HC.cream }}>
              <img src={logo.src} alt={`Logo ${name}`} className="block w-auto max-w-full" style={{ height: Math.round(Math.min(40, 220 / logo.ratio)) }} />
            </span>
          ) : (
            // Logo « en grand » : hauteur bornée par une largeur maximale pour les logos très allongés.
            <img src={logo.src} alt={`Logo ${name}`} className="bh-logo block w-auto max-w-full" style={{ height: Math.round(Math.min(64, 280 / logo.ratio)) }} />
          )}
        </motion.div>
      ) : null}

      <HeroTitle id="marque-titre" lines={["Thermopompes", <Serif key="nom">{name}</Serif>]} style={{ margin: logo ? "28px 0 0" : "40px 0 0" }} />

      <HeroLead>Explorez les séries, les configurations et les données documentées pour le marché québécois.</HeroLead>

      {types.length > 0 || cold ? (
        <HeroFade delay={0.7} className="mt-7 flex flex-wrap items-center gap-2">
          {types.map((t) => (
            <Link key={t.href} href={t.href} className="bh-chip inline-flex items-center rounded-full px-4 py-2 text-[13.5px] font-medium" style={{ border: `1px solid ${HC.line}`, color: HC.cream }}>
              {t.label}
            </Link>
          ))}
          {cold ? (
            <Link
              href={`/thermopompes?brand=${slug}&coldClimate=true`}
              className="bh-chip inline-flex items-center gap-2 rounded-full px-4 py-2 text-[13.5px] font-medium"
              style={{ border: `1px solid ${HC.line}`, color: HC.cream }}
            >
              <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: HC.orange }} />
              Climat froid
              <span style={{ color: HC.faint }}>· selon la configuration</span>
            </Link>
          ) : null}
        </HeroFade>
      ) : null}

      <HeroActions delay={0.85}>
        <HeroButton href={`/thermopompes?brand=${slug}`}>Comparer les modèles</HeroButton>
        <HeroButton href="#series" variant="ghost">
          Voir les séries
        </HeroButton>
      </HeroActions>

      {/* Colonnes plus serrées sur mobile : les trois chiffres tiennent sur une rangée. */}
      <HeroStats items={items} delay={1.05} className="[&_dl>div]:px-4 sm:[&_dl>div]:px-7" />
    </HeroShell>
  );
}

/* Carte crème : la photo officielle (fond blanc fondu par « multiply ») et la légende du modèle. */
function PhotoCard({ photo }: { photo: NonNullable<BrandHeroProps["photo"]> }) {
  return (
    <Link
      href={photo.href}
      className="group block overflow-hidden rounded-[30px]"
      style={{ background: HC.cream, color: HC.ink, boxShadow: "0 60px 90px -45px rgba(0,0,0,0.85)" }}
    >
      <div className="flex items-center justify-between gap-3 px-6 pt-5 text-[11px] font-medium uppercase" style={{ letterSpacing: "0.16em", color: INK_MUTE }}>
        <span>Modèle au catalogue</span>
        {photo.cold ? (
          <span className="inline-flex items-center gap-2" style={{ color: HC.ink }}>
            <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: HC.orange }} />
            Climat froid
          </span>
        ) : null}
      </div>
      <div className="relative aspect-[5/4]">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(min-width: 1024px) 540px, 92vw"
          fetchPriority="high"
          className="transition-transform duration-700 group-hover:scale-[1.04]"
          style={{ objectFit: "contain", padding: "6% 9%", mixBlendMode: "multiply" }}
        />
      </div>
      <div className="flex items-end justify-between gap-4 px-6 pb-5 pt-4" style={{ borderTop: "1px solid rgba(10,20,25,0.1)" }}>
        <div className="min-w-0">
          <p className="line-clamp-2 text-[17px] font-semibold leading-snug" style={{ letterSpacing: "-0.02em", margin: 0 }}>
            {photo.title}
          </p>
          {photo.subtitle ? (
            <p className="truncate text-[13px]" style={{ color: INK_MUTE, margin: "4px 0 0" }}>
              {photo.subtitle}
            </p>
          ) : null}
        </div>
        <span className="inline-flex shrink-0 items-center gap-1.5 text-[13px] font-semibold">
          Voir la fiche
          <span style={{ color: HC.orange }}>
            <HeroArrow size={13} />
          </span>
        </span>
      </div>
    </Link>
  );
}

/* Règle de capacité : la plage réelle de la gamme (BTU nominaux) tracée en orange.
   Sur ordinateur, elle se pose sous le coin gauche de la carte sans masquer sa légende. */
function CapacityPanel({ min, max, floating }: { min: number; max: number; floating: boolean }) {
  const reduce = useReducedMotion();
  const top = Math.max(60000, max);
  const from = min / top;
  const width = Math.max((max - min) / top, 0.012);
  return (
    <HeroFade
      delay={1.25}
      className={`relative z-10 mt-5 rounded-[20px] px-5 py-4 ${floating ? "lg:absolute lg:bottom-0 lg:-left-12 lg:mt-0 lg:w-[310px]" : ""}`}
      style={GLASS}
    >
      <p className="text-[11px] font-medium uppercase" style={{ letterSpacing: "0.16em", color: HC.faint, margin: 0 }}>
        Plage de capacité
      </p>
      <p className="text-[22px] font-semibold" style={{ letterSpacing: "-0.03em", margin: "8px 0 0", fontVariantNumeric: "tabular-nums" }}>
        {min === max ? fmt(min) : `${fmt(min)} – ${fmt(max)}`}{" "}
        <span className="text-[13px] font-medium" style={{ color: HC.mute, letterSpacing: 0 }}>
          BTU
        </span>
      </p>
      <div aria-hidden="true" className="relative mt-4 h-[3px] rounded-full" style={{ background: HC.line }}>
        <motion.span
          className="absolute inset-y-0 origin-left rounded-full"
          style={{ left: `${from * 100}%`, width: `${width * 100}%`, background: HC.orange }}
          initial={reduce ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, ease: HERO_EASE, delay: 1.5 }}
        />
        {[0, 0.2, 0.4, 0.6, 0.8, 1].map((t) => (
          <span key={t} className="absolute top-[8px] h-[5px] w-px" style={{ left: `${t * 100}%`, background: HC.line }} />
        ))}
      </div>
      <div aria-hidden="true" className="mt-4 flex justify-between text-[11px]" style={{ color: HC.faint, fontVariantNumeric: "tabular-nums" }}>
        <span>0</span>
        <span>{fmt(top)} BTU</span>
      </div>
    </HeroFade>
  );
}
