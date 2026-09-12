"use client";

import "./brand-hero.css";
import { useEffect, useRef, useState, type CSSProperties, type FormEvent } from "react";
import Link from "next/link";
import {
  AnimatePresence,
  animate,
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { HC, HERO_EASE, HeroEyebrow, HeroFade, HeroLead, HeroShell, HeroStats, HeroTitle, Serif } from "@/components/hero/HeroKit";
import { CreamFilter } from "./CreamFilter";

/* ==================================================================
   Héros de l'annuaire des marques (/marques).
   - Titre révélé ligne par ligne, recherche en pastille de verre qui
     filtre l'annuaire en direct, chiffres réels du catalogue qui défilent.
   - À droite : un « planétarium » des marques. Les logos monochromes
     (en crème) tournent lentement sur deux orbites en perspective ;
     ceux de devant grossissent et s'éclairent, ceux de derrière pâlissent.
     Au centre, une marque à la fois avec ses vrais chiffres. Survoler un
     logo le met en vedette et arrête la rotation ; chaque logo mène à sa page.
   - Au défilement, le plan des orbites bascule vers l'arrière.
   ================================================================== */

export type OrbitBrand = { slug: string; name: string; logo: string; ratio: number; models: number; cold: number };

type Props = {
  orbit: OrbitBrand[];
  totals: { brands: number; models: number; cold: number };
  search: string;
  onSearch: (value: string) => void;
  resultCount: number;
  /** id de la grille de l'annuaire (le bouton de recherche y fait défiler). */
  resultsId: string;
};

const fmt = (n: number) => n.toLocaleString("fr-CA");
const round = (n: number, d: number) => {
  const p = 10 ** d;
  return Math.round(n * p) / p;
};

export function BrandDirectoryHero({ orbit, totals, search, onSearch, resultCount, resultsId }: Props) {
  const reduce = useReducedMotion();
  const q = search.trim();

  const stats = [
    { value: totals.brands, label: "marques" },
    { value: totals.models, label: "modèles" },
    { value: totals.cold, label: "climat froid" },
  ].filter((s) => s.value > 0);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    document.getElementById(resultsId)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }

  return (
    <HeroShell size="lg" snow={0.3} labelledBy="marques-titre" columns="lg:grid-cols-[1.02fr_0.98fr]" visual={orbit.length >= 6 ? <BrandOrbit brands={orbit} /> : undefined}>
      <CreamFilter />
      <HeroEyebrow>Annuaire des fabricants · Québec</HeroEyebrow>
      <HeroTitle
        id="marques-titre"
        lines={[
          "Toutes les marques.",
          "Un seul endroit",
          <span key="accent">
            pour <Serif>les comprendre.</Serif>
          </span>,
        ]}
        style={{ fontSize: "clamp(36px, 4.8vw, 84px)" }}
      />
      <HeroLead>Explorez les fabricants, les séries et les configurations documentées pour le marché québécois.</HeroLead>

      <HeroFade delay={0.8} className="mt-9 max-w-[560px]">
        <form
          role="search"
          onSubmit={submit}
          className="bh-search flex items-center gap-2 rounded-full p-1.5"
          style={{ border: "1px solid rgba(244,239,231,0.22)", background: "rgba(244,239,231,0.06)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
        >
          <label htmlFor="marques-recherche" className="sr-only">
            Rechercher une marque
          </label>
          <svg aria-hidden="true" width={18} height={18} viewBox="0 0 24 24" fill="none" stroke={HC.faint} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="ml-4 shrink-0">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            id="marques-recherche"
            type="text"
            enterKeyHint="search"
            autoComplete="off"
            value={search}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Rechercher une marque"
            aria-describedby="marques-recherche-aide"
            className="bh-input min-w-0 flex-1 bg-transparent py-3 pl-1 text-[16px] outline-none"
            style={{ color: HC.cream }}
          />
          <button type="submit" className="inline-flex shrink-0 items-center gap-3 rounded-full py-2.5 pl-2.5 pr-2.5 text-[15px] font-semibold text-white sm:pl-5" style={{ background: HC.orange }}>
            <span className="hidden sm:inline">
              <span className="ph-roll">
                <span>Voir les marques</span>
                <span aria-hidden="true">Voir les marques</span>
              </span>
            </span>
            <span className="sr-only sm:hidden">Voir les marques</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full" style={{ background: "rgba(255,255,255,0.16)" }}>
              <svg aria-hidden="true" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </form>
        <p id="marques-recherche-aide" aria-live="polite" className="pl-5 text-[13px]" style={{ color: q && !resultCount ? "#FF9C77" : HC.faint, margin: "12px 0 0" }}>
          {q
            ? resultCount
              ? `${resultCount} marque${resultCount > 1 ? "s" : ""} pour « ${q} ».`
              : `Aucune marque pour « ${q} ».`
            : "La liste se filtre pendant que vous tapez."}
        </p>
      </HeroFade>

      {/* Colonnes plus serrées sur mobile : les trois chiffres tiennent sur une rangée. */}
      <HeroStats items={stats} delay={1.05} className="[&_dl>div]:px-4 sm:[&_dl>div]:px-7" />
    </HeroShell>
  );
}

/* ------------------------------------------------------------------
   Planétarium des marques
   Deux orbites bien séparées (aucun logo ne se chevauche sur les côtés).
   rx / ry : rayons en % de la largeur / hauteur du cadre ; speed en rad/s.
   ------------------------------------------------------------------ */

const RINGS = [
  { rx: 25, ry: 21, count: 6, speed: 0.06 },
  { rx: 41, ry: 42, count: 14, speed: -0.03 },
];
type Ring = (typeof RINGS)[number];
const ORBIT_CAPACITY = RINGS.reduce((n, r) => n + r.count, 0);

function BrandOrbit({ brands: all }: { brands: OrbitBrand[] }) {
  const brands = all.slice(0, ORBIT_CAPACITY);
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "120px" });
  const paused = useRef(false);
  const clock = useMotionValue(0);
  const [active, setActive] = useState(0);

  // Horloge commune : avance seulement à l'écran, hors survol, et jamais en « réduire les animations ».
  useAnimationFrame((_, delta) => {
    if (reduce || paused.current || !inView) return;
    clock.set(clock.get() + Math.min(delta, 64) / 1000);
  });

  // Une marque en vedette à la fois, au centre.
  useEffect(() => {
    const t = window.setInterval(() => {
      if (!paused.current) setActive((a) => (a + 1) % brands.length);
    }, 3400);
    return () => window.clearInterval(t);
  }, [brands.length]);

  // Au défilement, le plan des orbites bascule et remonte légèrement.
  const { scrollY } = useScroll();
  const tilt = useTransform(scrollY, [0, 700], [0, 24]);
  const lift = useTransform(scrollY, [0, 700], [0, -50]);

  const slots: { brand: OrbitBrand; ring: Ring; phase: number; index: number }[] = [];
  let k = 0;
  RINGS.forEach((ring, r) => {
    for (let j = 0; j < ring.count && k < brands.length; j++, k++) {
      slots.push({ brand: brands[k], ring, phase: (2 * Math.PI * j) / ring.count + r * 0.4, index: k });
    }
  });

  const current = brands[active];
  const frameStyle = { containerType: "inline-size", "--bh-logo": "5.8cqw" } as CSSProperties;

  return (
    <div ref={ref} className="relative mx-auto w-full max-w-[660px]" style={{ perspective: 1400 }}>
      <motion.div
        className="relative aspect-[25/21] w-full"
        style={reduce ? frameStyle : { ...frameStyle, rotateX: tilt, y: lift }}
        onPointerLeave={() => {
          paused.current = false;
        }}
      >
        {/* Orbites en pointillés */}
        <svg aria-hidden="true" className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {RINGS.map((r, i) => (
            <motion.ellipse
              key={i}
              cx={50}
              cy={50}
              rx={r.rx}
              ry={r.ry}
              fill="none"
              stroke={HC.cream}
              strokeOpacity={0.16}
              strokeWidth={1}
              strokeDasharray="1 7"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, ease: HERO_EASE, delay: 0.3 + i * 0.18 }}
            />
          ))}
        </svg>

        {/* Marque en vedette (les liens portent déjà ces informations pour les lecteurs d'écran). */}
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 z-[55] w-[34%] -translate-x-1/2 -translate-y-1/2 text-center">
          <AnimatePresence mode="wait" initial={false}>
            {current ? (
              <motion.div
                key={current.slug}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
                transition={{ duration: 0.55, ease: HERO_EASE }}
              >
                <p className="text-[10.5px] font-medium uppercase" style={{ letterSpacing: "0.22em", color: HC.faint, margin: 0, fontVariantNumeric: "tabular-nums" }}>
                  {String(active + 1).padStart(2, "0")} / {String(brands.length).padStart(2, "0")}
                </p>
                <p style={{ fontSize: "clamp(18px, 4cqw, 28px)", fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1.05, margin: "8px 0 0" }}>{current.name}</p>
                <p className="text-[12.5px]" style={{ color: HC.mute, margin: "6px 0 0" }}>
                  {fmt(current.models)} modèles
                  {current.cold ? (
                    <>
                      <br />
                      <span style={{ color: HC.cream }}>{fmt(current.cold)}</span> climat froid
                    </>
                  ) : null}
                </p>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        {slots.map((s) => (
          <OrbitLogo
            key={s.brand.slug}
            brand={s.brand}
            ring={s.ring}
            phase={s.phase}
            index={s.index}
            clock={clock}
            active={s.index === active}
            onPick={() => {
              paused.current = true;
              setActive(s.index);
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}

function OrbitLogo({
  brand,
  ring,
  phase,
  index,
  clock,
  active,
  onPick,
}: {
  brand: OrbitBrand;
  ring: Ring;
  phase: number;
  index: number;
  clock: MotionValue<number>;
  active: boolean;
  onPick: () => void;
}) {
  const reduce = useReducedMotion();
  const theta = useTransform(clock, (s) => phase + s * ring.speed);
  // Le calque plein cadre se déplace en % de sa propre taille, donc en % du cadre.
  // Valeurs arrondies : le rendu serveur et l'hydratation produisent exactement le même style.
  const x = useTransform(theta, (a) => `${round(ring.rx * Math.cos(a), 2)}%`);
  const y = useTransform(theta, (a) => `${round(ring.ry * Math.sin(a), 2)}%`);
  // Profondeur : 0 derrière (haut de l'ellipse), 1 devant (bas).
  const depth = useTransform(theta, (a) => (Math.sin(a) + 1) / 2);
  const scale = useTransform(depth, (d) => round(0.74 + d * 0.34, 3));
  const zIndex = useTransform(depth, (d) => Math.round(d * 100));
  const lit = useMotionValue(active ? 1 : 0);
  useEffect(() => {
    const c = animate(lit, active ? 1 : 0, { duration: reduce ? 0 : 0.6, ease: HERO_EASE });
    return () => c.stop();
  }, [active, lit, reduce]);
  const opacity = useTransform([depth, lit], (v: number[]) => round(Math.max(0.3 + v[0] * 0.48, v[1]), 3));

  // Logos très allongés un peu plus bas : poids visuel comparable d'une marque à l'autre.
  const k = Math.min(1, Math.max(0.4, Math.pow(brand.ratio, -0.42)));

  return (
    <motion.div className="pointer-events-none absolute inset-0" style={{ x, y, zIndex, willChange: "transform" }}>
      <motion.div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ scale, opacity }}>
        <motion.div initial={reduce ? false : { opacity: 0, scale: 0.4 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, ease: HERO_EASE, delay: 0.5 + index * 0.05 }}>
          <Link
            href={`/marques/${brand.slug}`}
            aria-label={`${brand.name} : ${fmt(brand.models)} modèles`}
            className="bh-orbit-link pointer-events-auto relative block px-2 py-2"
            onPointerEnter={onPick}
            onFocus={onPick}
          >
            <img src={brand.logo} alt="" draggable={false} className="bh-logo block w-auto max-w-none" style={{ height: `calc(${k.toFixed(3)} * var(--bh-logo))` }} />
            <motion.span aria-hidden="true" className="absolute bottom-0 left-1/2 h-[2px] w-6 -translate-x-1/2" style={{ background: HC.orange, opacity: lit, scaleX: lit }} />
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
