"use client";

import "./contenu.css";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, MotionConfig } from "motion/react";
import type { GuideCategory, GuideMetadata } from "@/lib/markdown";
import {
  GUIDE_CATEGORIES,
  guideCategoryLabel,
} from "@/components/content-hero/guideCategories";
import { typo } from "@/components/content-hero/typo";
import { fraunces, FRAUNCES } from "./fonts";
import { Arrow, DISPLAY, EASE, UNDER_HEADER, useReducedSafe } from "./shared";

/* ==================================================================
   /guides — « Couverture de magazine ».
   Papier crème, encre, un orange. Titre de revue « Guides » géant sur
   toute la largeur (Fraunces noire), ligne de parution (vraie date de
   mise à jour, vrai nombre de guides), titres d'appel = vrais guides,
   photo détourée posée devant le titre de revue, sommaire des rubriques.
   Signature : les lettres du titre de revue tombent et se posent une à
   une, puis les titres d'appel glissent depuis la marge.
   ================================================================== */

const P = {
  paper: "#F2ECE1",
  ink: "#1B1A17",
  mute: "rgba(27,26,23,0.66)",
  faint: "rgba(27,26,23,0.45)",
  line: "rgba(27,26,23,0.18)",
  orange: "#D9480F",
} as const;

const FEATURED_SLUG = "quelle-thermopompe-choisir-hiver-quebecois";
const MASTHEAD = "Guides".split("");

type Props = { guides: GuideMetadata[]; onPick: (id: GuideCategory) => void };

const dateOf = (g: GuideMetadata) => g.updatedAt ?? g.publishedAt;

export function GuidesCover({ guides, onPick }: Props) {
  const reduce = useReducedSafe();
  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 900], [0, -60]);
  const mastY = useTransform(scrollY, [0, 900], [0, 40]);

  const featured = guides.find((g) => g.slug === FEATURED_SLUG) ?? guides[0];
  const toc = GUIDE_CATEGORIES.map((c) => ({
    ...c,
    n: guides.filter((g) => g.category === c.id).length,
  }));
  const rubriques = toc.filter((c) => c.n > 0).length;
  const latest = guides.reduce((m, g) => (dateOf(g) > m ? dateOf(g) : m), "");
  const latestLabel = latest
    ? new Date(`${latest}T12:00:00`).toLocaleDateString("fr-CA", {
        month: "long",
        year: "numeric",
      })
    : "";
  const lines = guides
    .filter((g) => g.slug !== featured?.slug)
    .slice()
    .sort((a, b) =>
      dateOf(b) > dateOf(a) ? 1 : dateOf(b) < dateOf(a) ? -1 : 0,
    )
    .slice(0, 4);

  const settle = (i: number) =>
    reduce
      ? { duration: 0 }
      : {
          type: "spring" as const,
          stiffness: 190,
          damping: 13,
          mass: 0.9,
          delay: 0.2 + i * 0.11,
        };

  return (
    <MotionConfig reducedMotion="user">
      <section
        aria-labelledby="gv-titre"
        className={`${fraunces.variable} relative overflow-hidden ${UNDER_HEADER}`}
        style={{ background: P.paper, color: P.ink, fontFamily: DISPLAY }}
      >
        <div
          aria-hidden="true"
          className="gv-grain pointer-events-none absolute inset-0"
        />

        <div className="relative mx-auto max-w-[1440px] px-5 pb-16 pt-[122px] sm:px-8 lg:px-12 lg:pb-20 min-[1700px]:pt-[138px]">
          {/* Ligne de parution */}
          <motion.div
            className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 pb-2 text-[11px] font-semibold uppercase sm:text-[11.5px]"
            style={{
              letterSpacing: "0.2em",
              borderBottom: `1px solid ${P.ink}`,
            }}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.05 }}
          >
            <span>Guides &amp; Conseils</span>
            {latestLabel ? (
              <span className="hidden sm:inline" style={{ color: P.mute }}>
                Mis à jour · {latestLabel}
              </span>
            ) : null}
            <span style={{ color: P.mute }}>
              {guides.length} guides · {rubriques} rubriques
            </span>
          </motion.div>

          {/* Titre de revue : lettres qui se posent une à une */}
          <motion.p
            aria-hidden="true"
            className="flex select-none justify-between"
            style={{
              y: reduce ? 0 : mastY,
              fontFamily: FRAUNCES,
              fontWeight: 900,
              fontSize: "clamp(92px, 25.4vw, 392px)",
              lineHeight: 0.8,
              letterSpacing: "-0.02em",
              fontVariationSettings: '"opsz" 144, "SOFT" 20, "WONK" 1',
              margin: "0.09em 0 0",
              color: P.ink,
            }}
          >
            {MASTHEAD.map((l, i) => (
              <motion.span
                key={i}
                style={{ display: "inline-block", transformOrigin: "50% 100%" }}
                initial={
                  reduce
                    ? false
                    : { y: "-42%", opacity: 0, rotate: i % 2 ? 8 : -7 }
                }
                animate={{ y: "0%", opacity: 1, rotate: 0 }}
                transition={{
                  ...settle(i),
                  opacity: {
                    duration: 0.3,
                    delay: reduce ? 0 : 0.2 + i * 0.11,
                  },
                }}
              >
                {l}
              </motion.span>
            ))}
          </motion.p>
          <motion.div
            aria-hidden="true"
            className="mt-3 h-[3px] origin-left"
            style={{ background: P.ink }}
            initial={reduce ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, ease: EASE, delay: 0.75 }}
          />
          {latestLabel ? (
            <p
              className="mt-2 text-[11px] font-semibold uppercase sm:hidden"
              style={{
                letterSpacing: "0.2em",
                color: P.mute,
                margin: "8px 0 0",
              }}
            >
              Mis à jour · {latestLabel}
            </p>
          ) : null}

          <div className="gv-grid mt-8 lg:mt-10">
            {/* Titre principal + chapeau */}
            <div style={{ gridArea: "head" }}>
              <motion.h1
                id="gv-titre"
                style={{
                  fontFamily: FRAUNCES,
                  fontWeight: 560,
                  fontSize: "clamp(40px, 3.9vw, 62px)",
                  lineHeight: 0.98,
                  letterSpacing: "-0.03em",
                  fontVariationSettings: '"opsz" 96, "SOFT" 50',
                  margin: 0,
                }}
                initial={reduce ? false : { opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: EASE, delay: 0.95 }}
              >
                Mieux comprendre avant de{" "}
                <em
                  style={{
                    fontStyle: "italic",
                    fontWeight: 400,
                    color: P.orange,
                    fontVariationSettings: '"opsz" 96, "SOFT" 100, "WONK" 1',
                  }}
                >
                  choisir.
                </em>
              </motion.h1>
              <motion.p
                className="text-[16.5px] leading-[1.6] sm:text-[17px]"
                style={{
                  color: P.mute,
                  margin: "18px 0 0",
                  maxWidth: 440,
                  fontFamily: "var(--font-sans)",
                }}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: EASE, delay: 1.1 }}
              >
                Des explications claires sur les modèles, les BTU, les prix, les
                aides et l’installation.
              </motion.p>
            </div>

            {/* Photo détourée devant le titre de revue + sujet à la une */}
            {featured ? (
              <div
                style={{ gridArea: "photo" }}
                className="relative lg:-mt-[11vw] min-[1440px]:-mt-[158px]"
              >
                <motion.div style={reduce ? undefined : { y: photoY }}>
                  <motion.div
                    initial={
                      reduce ? false : { opacity: 0, y: 60, scale: 0.96 }
                    }
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1.5, ease: EASE, delay: 0.7 }}
                  >
                    <Image
                      src="/images/thermomatch/thermomatch-cta-unit-transparent.png"
                      alt="Unité extérieure de thermopompe posée dans la neige"
                      width={1774}
                      height={887}
                      loading="eager"
                      fetchPriority="high"
                      sizes="(min-width: 1024px) 560px, 92vw"
                      style={{
                        width: "112%",
                        maxWidth: "none",
                        height: "auto",
                        marginLeft: "-6%",
                        filter: "drop-shadow(0 30px 30px rgba(27,26,23,0.18))",
                      }}
                    />
                  </motion.div>
                </motion.div>
                <motion.div
                  className="relative -mt-2 pt-4 lg:mx-4"
                  style={{ borderTop: `1px solid ${P.ink}` }}
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: EASE, delay: 1.25 }}
                >
                  <p
                    className="flex items-center gap-3 text-[11px] font-semibold uppercase"
                    style={{
                      letterSpacing: "0.22em",
                      margin: 0,
                      color: P.orange,
                    }}
                  >
                    À la une <span style={{ color: P.faint }}>·</span>{" "}
                    <span style={{ color: P.mute }}>
                      {guideCategoryLabel(featured.category)}
                    </span>
                  </p>
                  <h2
                    style={{
                      fontFamily: FRAUNCES,
                      fontWeight: 500,
                      fontSize: "clamp(25px, 2.1vw, 33px)",
                      lineHeight: 1.08,
                      letterSpacing: "-0.02em",
                      fontVariationSettings: '"opsz" 72',
                      margin: "10px 0 0",
                    }}
                  >
                    <Link href={`/guides/${featured.slug}`} className="gv-line">
                      <span className="gv-title">{typo(featured.title)}</span>
                    </Link>
                  </h2>
                  <div className="mt-4 flex items-center justify-between gap-4">
                    <Link
                      href={`/guides/${featured.slug}`}
                      className="group inline-flex items-center gap-2 text-[14.5px] font-semibold"
                      style={{ color: P.ink }}
                    >
                      <span className="c2-underline">Lire le guide</span>
                      <span
                        className="transition-transform duration-500 group-hover:translate-x-1"
                        style={{ color: P.orange }}
                      >
                        <Arrow />
                      </span>
                    </Link>
                    <span
                      className="text-[12.5px] tabular-nums"
                      style={{ color: P.faint }}
                    >
                      {featured.readTime}
                    </span>
                  </div>
                </motion.div>
              </div>
            ) : null}

            {/* Titres d'appel : les guides les plus récents */}
            {lines.length > 0 ? (
              <div style={{ gridArea: "lines" }}>
                <p
                  className="text-[11px] font-semibold uppercase"
                  style={{ letterSpacing: "0.22em", margin: 0, color: P.faint }}
                >
                  À lire aussi
                </p>
                <ol
                  className="mt-3"
                  style={{ margin: 0, padding: 0, listStyle: "none" }}
                >
                  {lines.map((g, i) => (
                    <motion.li
                      key={g.slug}
                      className="relative py-4"
                      initial={reduce ? false : { opacity: 0, x: -48 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 1.1,
                        ease: EASE,
                        delay: 1.05 + i * 0.13,
                      }}
                    >
                      <motion.span
                        aria-hidden="true"
                        className="absolute left-0 right-0 top-0 h-px origin-left"
                        style={{ background: P.line }}
                        initial={reduce ? false : { scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{
                          duration: 1.2,
                          ease: EASE,
                          delay: 1.1 + i * 0.13,
                        }}
                      />
                      <Link
                        href={`/guides/${g.slug}`}
                        className="gv-line grid grid-cols-[auto_minmax(0,1fr)] gap-x-4"
                      >
                        <span
                          style={{
                            fontFamily: FRAUNCES,
                            fontStyle: "italic",
                            fontWeight: 400,
                            fontSize: 34,
                            lineHeight: 0.9,
                            color: P.orange,
                            fontVariationSettings:
                              '"opsz" 72, "SOFT" 100, "WONK" 1',
                          }}
                        >
                          {String(i + 2).padStart(2, "0")}
                        </span>
                        <span className="min-w-0">
                          <span
                            className="block text-[10.5px] font-semibold uppercase"
                            style={{ letterSpacing: "0.2em", color: P.faint }}
                          >
                            {guideCategoryLabel(g.category)}
                          </span>
                          <span
                            className="gv-title mt-1 block"
                            style={{
                              fontFamily: FRAUNCES,
                              fontWeight: 500,
                              fontSize: 19,
                              lineHeight: 1.2,
                              letterSpacing: "-0.01em",
                              fontVariationSettings: '"opsz" 36',
                            }}
                          >
                            {typo(g.title)}
                          </span>
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ol>
              </div>
            ) : null}

            {/* Sommaire des rubriques : un clic filtre la liste plus bas */}
            <motion.div
              style={{ gridArea: "index" }}
              className="lg:mt-9"
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: EASE, delay: 1.3 }}
            >
              <p
                className="flex items-baseline justify-between pb-2 text-[11px] font-semibold uppercase"
                style={{
                  letterSpacing: "0.22em",
                  margin: 0,
                  borderBottom: `1px solid ${P.ink}`,
                }}
              >
                <span>Au sommaire</span>
                <span style={{ color: P.faint }}>Rubriques</span>
              </p>
              <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {toc.map((c, i) => (
                  <li
                    key={c.id}
                    style={{ borderBottom: `1px solid ${P.line}` }}
                  >
                    <button
                      type="button"
                      onClick={() => onPick(c.id)}
                      disabled={c.n === 0}
                      aria-controls="guides-liste"
                      aria-label={`${c.label} : ${c.n} guide${c.n > 1 ? "s" : ""}`}
                      className="gv-toc flex w-full items-baseline gap-3 py-2.5 text-left disabled:cursor-default disabled:opacity-40"
                      style={{ background: "none", border: 0, color: P.ink }}
                    >
                      <span
                        className="text-[11px] tabular-nums"
                        style={{ color: P.faint }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="gv-label text-[15.5px] font-medium"
                        style={{ transition: "color 0.3s" }}
                      >
                        {c.label}
                      </span>
                      <span
                        aria-hidden="true"
                        className="gv-leader min-w-4 flex-1 -translate-y-1 border-b border-dotted"
                      />
                      <span
                        className="tabular-nums"
                        style={{
                          fontFamily: FRAUNCES,
                          fontSize: 18,
                          fontWeight: 500,
                        }}
                      >
                        {c.n}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
