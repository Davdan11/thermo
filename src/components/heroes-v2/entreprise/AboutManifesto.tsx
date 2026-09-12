"use client";

import "./entreprise.css";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue, useScroll, useTransform, MotionConfig } from "motion/react";
import { xeMono } from "./fonts";
import { Arrow, EASE, HEADER_PAD, UNDER_HEADER, XLink, fmtInt, useReducedSafe } from "./shared";

/* ==================================================================
   /a-propos — « Manifeste ».
   Sable, brun profond, terre cuite. La mission est composée en très
   grand, en romain à empattements, et se lit à voix haute : les mots
   s'allument l'un après l'autre sous un curseur de lecture. Les trois
   verbes (découvrir, comparer, acheter) ouvrent chacun un chapitre de
   la bande photo pleine largeur, qui reprend ses couleurs à leur
   lecture. Chiffres : ceux du catalogue, fournis par la page.
   ================================================================== */

const C = {
  sand: "#EADBC8",
  brown: "#2B1D14",
  mute: "rgba(43,29,20,0.68)",
  ghost: "rgba(43,29,20,0.2)",
  terra: "#B5523B",
  line: "rgba(43,29,20,0.2)",
};

const STATEMENT = "Nous construisons une meilleure façon de découvrir, comparer et acheter les systèmes offerts au Québec.";
const WORDS = STATEMENT.split(" ");

/* Les trois chapitres : l'indice du verbe dans la phrase, et sa photo. */
const CHAPTERS = [
  { word: 6, n: "01", label: "Découvrir", src: "/images/about-hero.jpg", alt: "Chalet en bois éclairé un soir d’hiver, au milieu des sapins enneigés", pos: "50% 58%" },
  { word: 7, n: "02", label: "Comparer", src: "/images/hero-calculator-bg.jpg", alt: "Salon chaleureux avec foyer et unité murale de thermopompe au-dessus de la fenêtre", pos: "50% 42%" },
  { word: 9, n: "03", label: "Acheter", src: "/images/about-experience-house.jpg", alt: "Maison contemporaine en bois, grandes fenêtres éclairées et thermopompe extérieure", pos: "50% 62%" },
];
const VERB_WORDS = new Set(CHAPTERS.map((c) => c.word));

/* Calendrier de lecture : un mot toutes les ~200 ms, un souffle après la ponctuation. */
const START_MS = 1100;
const SCHEDULE: number[] = [];
WORDS.forEach((_, i) => {
  SCHEDULE.push(i === 0 ? START_MS : SCHEDULE[i - 1] + 200 + (/[,.]$/.test(WORDS[i - 1]) ? 240 : 0));
});

export function AboutManifesto({ stats }: { stats: { eligible: number; brands: number; coldClimate: number } }) {
  const reduce = useReducedSafe();
  const items = [
    { value: stats.eligible, label: "modèles admissibles" },
    { value: stats.brands, label: "marques au Québec" },
    { value: stats.coldClimate, label: "certifiés grand froid" },
  ].filter((s) => s.value > 0);

  // Mot en cours de lecture (-1 : pas commencé ; WORDS.length : lu en entier).
  const [read, setRead] = useState(-1);
  useEffect(() => {
    if (reduce) {
      setRead(WORDS.length);
      return;
    }
    const ids = SCHEDULE.map((t, i) => window.setTimeout(() => setRead(i), t));
    ids.push(window.setTimeout(() => setRead(WORDS.length), SCHEDULE[SCHEDULE.length - 1] + 900));
    return () => ids.forEach((id) => window.clearTimeout(id));
  }, [reduce]);

  return (
    <MotionConfig reducedMotion="user">
    <section aria-labelledby="apropos-titre" className={`xe-root ${xeMono.variable} relative ${UNDER_HEADER}`} style={{ background: C.sand, color: C.brown }}>
      <div className={`mx-auto max-w-[1440px] px-5 pb-10 sm:px-8 lg:px-12 lg:pb-14 ${HEADER_PAD}`}>
        {/* Filet de tête : rubrique et numéro, comme en ouverture de chapitre */}
        <div className="xe-mono flex items-center justify-between gap-4 text-[11.5px] uppercase" style={{ letterSpacing: "0.18em", color: C.mute }}>
          <span>À propos</span>
          <span>Manifeste · N°&nbsp;01</span>
        </div>
        <motion.span aria-hidden="true" className="mt-3 block h-px origin-left" style={{ background: C.brown }} initial={reduce ? false : { scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.4, ease: EASE, delay: 0.15 }} />

        <motion.h1
          id="apropos-titre"
          className="mt-8 lg:mt-10"
          style={{ fontSize: "clamp(34px, 3.4vw, 58px)", lineHeight: 1.02, letterSpacing: "-0.04em", fontWeight: 600, margin: 0 }}
          initial={reduce ? false : { clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1.3, ease: EASE, delay: 0.3 }}
        >
          Rendre l’achat d’une thermopompe <span style={{ color: C.terra }}>plus clair.</span>
        </motion.h1>

        <div className="mt-8 grid gap-10 lg:mt-12 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
          {/* La mission, lue à voix haute */}
          <div className="relative lg:order-2">
            <p className="xe-serif relative" style={{ fontSize: "clamp(32px, 4.7vw, 86px)", lineHeight: 1.02, letterSpacing: "-0.015em", margin: 0 }}>
              <span aria-hidden="true" className="absolute right-full top-0 hidden pr-3 sm:block" style={{ color: C.terra }}>
                «
              </span>
              <span className="sr-only">{STATEMENT}</span>
              <span aria-hidden="true">
                {WORDS.map((w, i) => {
                  const isVerb = VERB_WORDS.has(i);
                  const color = i < read ? (isVerb ? C.terra : C.brown) : i === read ? C.terra : C.ghost;
                  return (
                    <span key={i}>
                      <span className="relative inline-block" style={{ color, transition: "color 0.45s ease" }}>
                        {w}
                        {i === read && !reduce && (
                          <motion.span layoutId="xe-read-cursor" className="absolute -bottom-[0.05em] left-0 right-0 block h-[3px]" style={{ background: C.terra }} transition={{ duration: 0.28, ease: EASE }} />
                        )}
                      </span>
                      {i < WORDS.length - 1 ? " " : ""}
                    </span>
                  );
                })}
                <span style={{ color: read >= WORDS.length ? C.terra : C.ghost, transition: "color 0.6s ease" }}>&nbsp;»</span>
              </span>
            </p>
          </div>

          {/* Actions et chiffres du catalogue */}
          <div className="flex flex-col gap-9 lg:order-1 lg:pt-3">
            <motion.div className="flex flex-wrap items-center gap-x-7 gap-y-4" initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: EASE, delay: 0.7 }}>
              <XLink href="/thermopompes" className="inline-flex items-center gap-3 px-6 py-4 text-[15px] font-semibold transition-colors duration-300 hover:bg-[#B5523B]" style={{ background: C.brown, color: C.sand, borderRadius: 2 }}>
                Comparer les modèles <Arrow />
              </XLink>
              <XLink href="/comment-ca-marche" className="xe-under pb-1 text-[15px] font-semibold" style={{ color: C.brown }}>
                Comment ça marche
              </XLink>
            </motion.div>

            {items.length > 0 && (
              <dl style={{ margin: 0 }}>
                {items.map((s, i) => (
                  <motion.div
                    key={s.label}
                    className="grid grid-cols-[44px_minmax(0,1fr)] items-baseline gap-3 py-3.5"
                    style={{ borderTop: `1px solid ${C.line}` }}
                    initial={reduce ? false : { opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: EASE, delay: 0.9 + i * 0.12 }}
                  >
                    <span aria-hidden="true" className="xe-mono text-[11.5px]" style={{ color: C.terra, letterSpacing: "0.1em" }}>
                      {String(i + 4).padStart(2, "0")}
                    </span>
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <dd className="xe-serif order-1" style={{ fontSize: "clamp(34px, 2.8vw, 46px)", lineHeight: 1, margin: 0 }}>
                        <Count value={s.value} delay={1 + i * 0.15} />
                      </dd>
                      <dt className="order-2 text-[14.5px]" style={{ color: C.mute }}>
                        {s.label}
                      </dt>
                    </div>
                  </motion.div>
                ))}
              </dl>
            )}
          </div>
        </div>
      </div>

      <PhotoStrip read={read} />
    </section>
    </MotionConfig>
  );
}

/* Chiffre qui défile jusqu'à sa valeur (0 au premier rendu, côté serveur comme côté client). */
function Count({ value, delay }: { value: number; delay: number }) {
  const reduce = useReducedSafe();
  const mv = useMotionValue(0);
  const text = useTransform(mv, (v) => fmtInt(v));
  useEffect(() => {
    if (reduce) {
      mv.set(value);
      return;
    }
    const c = animate(mv, value, { duration: 1.8, ease: EASE, delay });
    return () => c.stop();
  }, [mv, value, delay, reduce]);
  return <motion.span>{text}</motion.span>;
}

/* Bande photo pleine largeur : un chapitre par verbe, qui reprend ses couleurs à sa lecture. */
function PhotoStrip({ read }: { read: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedSafe();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className="grid grid-cols-3 gap-[3px] sm:gap-1">
      {CHAPTERS.map((c, i) => {
        const lit = read >= c.word;
        return (
          <motion.figure
            key={c.n}
            className="relative h-[150px] overflow-hidden sm:h-[200px] lg:h-[clamp(190px,25vh,260px)]"
            style={{ margin: 0, background: "#d8c6ae" }}
            initial={reduce ? false : { clipPath: "inset(100% 0% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.45 + i * 0.14 }}
          >
            <motion.div className="absolute inset-x-0 -bottom-[12%] -top-[12%]" style={reduce ? undefined : { y }}>
              <Image
                src={c.src}
                alt={c.alt}
                fill
                sizes="(min-width: 640px) 34vw, 50vw"
                priority={i === 0}
                style={{ objectFit: "cover", objectPosition: c.pos, filter: lit ? "none" : "grayscale(0.9) sepia(0.35) brightness(1.05) contrast(0.9)", transition: "filter 1.4s ease" }}
              />
            </motion.div>
            <div aria-hidden="true" className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(43,29,20,0) 45%, rgba(43,29,20,0.62) 100%)" }} />
            <figcaption className="xe-mono absolute bottom-3 left-3 right-3 flex items-baseline gap-2 text-[10.5px] uppercase sm:bottom-4 sm:left-5 sm:text-[12px]" style={{ color: C.sand, letterSpacing: "0.16em" }}>
              <span style={{ color: lit ? "#F2B59F" : "rgba(234,219,200,0.6)", transition: "color 0.6s" }}>{c.n}</span>
              <span className="hidden sm:inline" aria-hidden="true">
                —
              </span>
              <span>{c.label}</span>
            </figcaption>
          </motion.figure>
        );
      })}
    </div>
  );
}
