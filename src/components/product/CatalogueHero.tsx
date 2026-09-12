"use client";

import "./catalogue-hero.css";
import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Snowfall } from "@/components/home/Snowfall";
import { CountUp } from "@/components/home/premium/shared";
import { useReduced } from "@/components/heroes-v2/outils/motion";

/* ==================================================================
   Héros du catalogue (/thermopompes), version premium.
   - L'en-tête du site (transparent sur cette page) passe par-dessus.
   - Titre révélé ligne par ligne, neige légère, recherche en pastille,
     raccourcis vers de vrais filtres, chiffres du catalogue qui défilent.
   - Mur de produits : vraies photos officielles (une par marque) en deux
     colonnes qui défilent en sens inverses ; chaque tuile mène à la fiche.
   ================================================================== */

export type WallItem = { slug: string; brand: string; btu: number | null; img: string };

const C = {
  ink: "#0A1419",
  cream: "#F4EFE7",
  orange: "#E54B17",
  mute: "rgba(244,239,231,0.66)",
  faint: "rgba(244,239,231,0.42)",
  line: "rgba(244,239,231,0.14)",
  inkMute: "rgba(10,20,25,0.55)",
};
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const DISPLAY = "var(--font-display), var(--font-sans), sans-serif";

const CHIPS = [
  { label: "Murales", href: "/thermopompes?type=wall-single" },
  { label: "Centrales", href: "/thermopompes?type=central-ducted" },
  { label: "Climat froid", href: "/thermopompes?coldClimate=true" },
];

export function CatalogueHero({ stats, wall, search }: { stats: { models: number; brands: number; coldClimate: number }; wall: WallItem[]; search: ReactNode }) {
  const [play, setPlay] = useState(false);
  useEffect(() => {
    const t = window.setTimeout(() => setPlay(true), 900);
    return () => window.clearTimeout(t);
  }, []);
  const half = Math.ceil(wall.length / 2);
  const colA = wall.slice(0, half);
  const colB = wall.slice(half);
  const facts = [
    { n: stats.models, l: "modèles documentés" },
    { n: stats.brands, l: "marques" },
    { n: stats.coldClimate, l: "certifiés grand froid" },
  ];

  return (
    <section
      // overflow-x seulement (et z-30) : la liste de suggestions de la recherche peut déborder sous le héros
      // et passer au-dessus de la bande des marques.
      className="ch-root relative z-30 -mt-[93px] overflow-x-clip min-[1700px]:-mt-[105px]"
      style={{ background: C.ink, color: C.cream, fontFamily: DISPLAY }}
      aria-labelledby="ch-titre"
    >
      <Snowfall className="pointer-events-none absolute inset-0 h-full w-full" density={0.45} />

      {/* Mur de produits (ordinateur) */}
      {wall.length > 3 && (
        <div
          // Commence sous l'en-tête transparent : les tuiles ne passent pas derrière les boutons du menu.
          className="absolute bottom-0 right-0 top-[96px] hidden w-[46%] lg:block min-[1700px]:top-[110px]"
          style={{
            maskImage: "linear-gradient(to bottom, transparent 0%, #000 18%, #000 84%, transparent 100%), linear-gradient(to right, transparent 0%, #000 24%)",
            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, #000 18%, #000 84%, transparent 100%), linear-gradient(to right, transparent 0%, #000 24%)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        >
          <motion.div
            className="flex h-full justify-end gap-5 pl-10 pr-12"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.6, ease: EASE, delay: 0.3 }}
          >
            <Column items={colA} dur={70} />
            <Column items={colB} dur={82} reverse />
          </motion.div>
        </div>
      )}

      <div className="relative z-10 mx-auto flex max-w-[1440px] flex-col justify-center px-5 pb-16 pt-[132px] sm:px-8 lg:min-h-[min(86svh,820px)] lg:px-12 lg:pb-20 min-[1700px]:pt-[150px]">
        <div className="max-w-[640px] lg:max-w-[50%]">
          <Fade delay={0.1} className="flex items-center gap-3 text-[12px] font-medium uppercase" style={{ letterSpacing: "0.22em", color: C.mute }}>
            <span aria-hidden="true" className="inline-block h-px w-10" style={{ background: C.orange }} />
            Catalogue québécois
          </Fade>

          <h1 id="ch-titre" style={{ fontSize: "clamp(50px, 7vw, 124px)", lineHeight: 0.92, letterSpacing: "-0.05em", fontWeight: 600, margin: "26px 0 0" }}>
            <Line i={0}>Explorez les</Line>
            <Line i={1}>
              <span className="ch-serif">
                thermopompes<span style={{ color: C.orange }}>.</span>
              </span>
            </Line>
          </h1>

          <Fade delay={0.6}>
            <p className="max-w-[520px] text-[18px] leading-[1.6]" style={{ color: C.mute, margin: "26px 0 0" }}>
              Comparez les marques, les capacités et les performances selon vos besoins.
            </p>
          </Fade>

          <Fade delay={0.8} className="mt-8 max-w-[560px]">
            {search}
          </Fade>

          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            {CHIPS.map((c, i) => (
              <motion.span key={c.href} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE, delay: 1 + i * 0.08 }}>
                <Link href={c.href} className="ch-chip inline-flex rounded-full px-4 py-2 text-[13.5px] font-medium" style={{ border: `1px solid ${C.line}`, color: C.cream }}>
                  {c.label}
                </Link>
              </motion.span>
            ))}
            <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE, delay: 1.25 }}>
              <Link href="/trouver-ma-thermopompe" className="inline-flex items-center gap-1.5 px-2 py-2 text-[13.5px] font-semibold" style={{ color: C.orange }}>
                Pas sûr ? ThermoMatch choisit pour vous →
              </Link>
            </motion.span>
          </div>

          <Fade delay={1.1} className="mt-12 flex flex-wrap gap-x-10 gap-y-6" style={{ borderTop: `1px solid ${C.line}`, paddingTop: 24 }}>
            {facts.map((f) => (
              <div key={f.l}>
                <p style={{ fontSize: 34, fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 1, margin: 0 }}>
                  <CountUp value={f.n} play={play} />
                </p>
                <p className="text-[12px] font-medium uppercase" style={{ letterSpacing: "0.14em", color: C.faint, margin: "8px 0 0" }}>
                  {f.l}
                </p>
              </div>
            ))}
          </Fade>
        </div>

        {/* Ruban de produits (mobile et tablette) */}
        {wall.length > 3 && (
          <div
            className="-mx-5 mt-12 overflow-hidden sm:-mx-8 lg:hidden"
            style={{ maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)" }}
          >
            <div className="ch-htrack gap-4 pr-4" style={{ "--ch-dur": `${wall.length * 4}s` } as CSSProperties}>
              {[...wall, ...wall].map((it, k) => (
                <div key={`${it.slug}-${k}`} className="w-[190px] shrink-0">
                  <Tile item={it} dup={k >= wall.length} small />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Column({ items, dur, reverse = false }: { items: WallItem[]; dur: number; reverse?: boolean }) {
  return (
    <div className="ch-col relative w-[230px] overflow-hidden xl:w-[260px]">
      <div className="ch-track flex flex-col gap-5 pb-5" data-reverse={reverse ? "true" : "false"} style={{ "--ch-dur": `${dur}s` } as CSSProperties}>
        {[...items, ...items].map((it, k) => (
          <Tile key={`${it.slug}-${k}`} item={it} dup={k >= items.length} />
        ))}
      </div>
    </div>
  );
}

function Tile({ item, dup, small = false }: { item: WallItem; dup: boolean; small?: boolean }) {
  return (
    <Link
      href={`/produit/${item.slug}`}
      tabIndex={dup ? -1 : undefined}
      aria-hidden={dup || undefined}
      className="group block overflow-hidden rounded-[22px] transition-transform duration-500 hover:-translate-y-1"
      style={{ background: "#fff", boxShadow: "0 30px 60px -35px rgba(0,0,0,0.8)" }}
    >
      <div className={`relative ${small ? "h-[120px]" : "h-[170px]"}`}>
        <Image src={item.img} alt={dup ? "" : `Thermopompe ${item.brand}`} fill sizes="260px" className="transition-transform duration-700 group-hover:scale-[1.06]" style={{ objectFit: "contain", padding: small ? 12 : 16 }} />
      </div>
      <div className="flex items-baseline justify-between gap-3 px-4 pb-4" style={{ color: C.ink }}>
        <span className="truncate text-[13px] font-semibold">{item.brand}</span>
        {item.btu ? (
          <span className="shrink-0 text-[11.5px] tabular-nums" style={{ color: C.inkMute }}>
            {item.btu.toLocaleString("fr-CA")} BTU
          </span>
        ) : null}
      </div>
    </Link>
  );
}

function Line({ i, children }: { i: number; children: ReactNode }) {
  const reduce = useReduced();
  return (
    <span style={{ display: "block", overflow: "hidden", paddingBottom: "0.14em", marginBottom: "-0.14em" }}>
      <motion.span style={{ display: "block" }} initial={reduce ? false : { y: "115%" }} animate={{ y: "0%" }} transition={{ duration: 1.15, ease: EASE, delay: 0.25 + i * 0.1 }}>
        {children}
      </motion.span>
    </span>
  );
}

function Fade({ delay, className, style, children }: { delay: number; className?: string; style?: CSSProperties; children: ReactNode }) {
  const reduce = useReduced();
  return (
    <motion.div className={className} style={style} initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: EASE, delay }}>
      {children}
    </motion.div>
  );
}
