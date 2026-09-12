"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import type { GuideCategory, GuideMetadata } from "@/lib/markdown";
import { typo } from "@/components/content-hero/typo";
import { FRAUNCES } from "@/components/heroes-v2/contenu/fonts";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { EASE, Mask, Rule, VIEW } from "./motion";
import "./sections.css";

/* ==================================================================
   /guides — la suite de la couverture : le sommaire du numéro.
   Même papier crème, même encre, même orange, même Fraunces noire.
   - Rubriques = onglets du sommaire (numéro, nom, nombre de guides),
     un filet d'encre glisse sous la rubrique choisie.
   - Ouverture de rubrique : son nom en capitales de revue, lettres qui
     se posent une à une comme le titre de la couverture.
   - Articles d'appel : un sujet principal, puis trois colonnes séparées
     par des filets ; numéros « N° » en italique orange ; la photo se
     découvre de bas en haut.
   ================================================================== */

export const GV = {
  paper: "#F2ECE1",
  ink: "#1B1A17",
  mute: "rgba(27,26,23,0.68)",
  faint: "rgba(27,26,23,0.5)",
  line: "rgba(27,26,23,0.2)",
  orange: "#D9480F",
  // Orange assombri pour le petit texte sur papier (contraste AA).
  orangeText: "#B83A0A",
} as const;

const pad = (n: number) => String(n).padStart(2, "0");
const OPEN: [number, number, number, number] = [0.76, 0, 0.24, 1];

type Cat = { id: GuideCategory; label: string };

/* ---------- Sommaire : les rubriques ---------- */

export function GuidesDepartments({
  categories,
  counts,
  total,
  active,
  onSelect,
}: {
  categories: Cat[];
  counts: Record<string, number>;
  total: number;
  active: GuideCategory;
  onSelect: (id: GuideCategory) => void;
}) {
  return (
    <div>
      <motion.div
        className="flex items-baseline justify-between gap-6 pb-2 text-[11px] font-semibold uppercase"
        style={{ letterSpacing: "0.22em", color: GV.ink }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={VIEW}
        transition={{ duration: 0.8 }}
      >
        <span>Au sommaire</span>
        <span
          className="hidden sm:inline"
          style={{
            fontFamily: FRAUNCES,
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: 16,
            letterSpacing: 0,
            textTransform: "none",
            color: GV.mute,
          }}
        >
          Guides &amp; Conseils
        </span>
        <span className="tabular-nums" style={{ color: GV.mute }}>
          {total} guides
        </span>
      </motion.div>
      <Rule color={GV.ink} thickness={1} duration={1.1} />
      <div
        role="tablist"
        aria-label="Rubriques des guides"
        className="gvs-tabs -mx-5 flex overflow-x-auto px-5 sm:mx-0 sm:px-0"
        style={{ borderBottom: `1px solid ${GV.line}` }}
      >
        {categories.map((cat, i) => {
          const on = active === cat.id;
          return (
            <motion.button
              key={cat.id}
              type="button"
              role="tab"
              id={`guides-tab-${cat.id}`}
              aria-selected={on}
              aria-controls="guides-panel"
              onClick={() => onSelect(cat.id)}
              className="gvs-tab relative flex shrink-0 items-baseline gap-2.5 py-5 pr-7 text-left lg:flex-1 lg:pr-4"
              style={{
                background: "none",
                border: 0,
                color: on ? GV.orange : GV.ink,
              }}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 + i * 0.06 }}
            >
              <span
                aria-hidden="true"
                className="text-[11px] tabular-nums"
                style={{ color: GV.faint }}
              >
                {pad(i + 1)}
              </span>
              <span
                className="whitespace-nowrap"
                style={{
                  fontFamily: FRAUNCES,
                  fontSize: "clamp(19px, 1.6vw, 25px)",
                  fontWeight: on ? 600 : 420,
                  letterSpacing: "-0.015em",
                  fontVariationSettings: '"opsz" 48',
                  transition: "font-weight 0.3s",
                }}
              >
                {cat.label}
              </span>
              <span
                aria-hidden="true"
                className="text-[12px] tabular-nums"
                style={{
                  color: GV.faint,
                  fontFamily: FRAUNCES,
                  fontStyle: "italic",
                }}
              >
                {counts[cat.id] ?? 0}
              </span>
              {on ? (
                <motion.span
                  layoutId="gvs-tab-bar"
                  aria-hidden="true"
                  className="absolute bottom-[-1px] left-0 right-7 h-[3px] lg:right-4"
                  style={{ background: GV.ink }}
                  transition={{ duration: 0.65, ease: EASE }}
                />
              ) : null}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

/* ---------- Rubrique affichée ---------- */

export function GuidesPanel({
  guides,
  active,
  label,
  index,
  labelOf,
}: {
  guides: GuideMetadata[];
  active: GuideCategory;
  label: string;
  index: number;
  labelOf: (id: string) => string;
}) {
  const [feature, ...rest] = guides;
  return (
    <div
      id="guides-panel"
      role="tabpanel"
      aria-labelledby={`guides-tab-${active}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, y: -10, transition: { duration: 0.22 } }}
          transition={{ duration: 0.35 }}
        >
          <Opener label={label} index={index} count={guides.length} />
          {feature ? (
            <Feature g={feature} labelOf={labelOf} />
          ) : null}
          {rest.length > 0 ? (
            <ol className="gvs-cols mt-2">
              {rest.map((g, i) => (
                <Teaser key={g.slug} g={g} n={i + 2} i={i} />
              ))}
            </ol>
          ) : null}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function Opener({
  label,
  index,
  count,
}: {
  label: string;
  index: number;
  count: number;
}) {
  const reduce = useReduced();
  const letters = [...label];
  return (
    <div className="pt-12 sm:pt-16 lg:pt-20">
      <div
        className="flex items-baseline justify-between gap-4 text-[11px] font-semibold uppercase"
        style={{ letterSpacing: "0.22em", color: GV.mute }}
      >
        <span>
          Rubrique <span className="tabular-nums">{pad(index)}</span>
        </span>
        <span className="tabular-nums">
          {count} guide{count > 1 ? "s" : ""}
        </span>
      </div>
      <p
        aria-hidden="true"
        className="select-none"
        style={{
          fontFamily: FRAUNCES,
          fontWeight: 900,
          fontSize: "clamp(44px, 10.6vw, 172px)",
          lineHeight: 0.86,
          letterSpacing: "-0.03em",
          fontVariationSettings: '"opsz" 144, "SOFT" 20, "WONK" 1',
          margin: "14px 0 0",
          color: GV.ink,
        }}
      >
        {letters.map((l, i) =>
          l === " " ? (
            " "
          ) : (
            <motion.span
              key={i}
              style={{ display: "inline-block", transformOrigin: "50% 100%" }}
              initial={{ y: "-38%", opacity: 0, rotate: i % 2 ? 7 : -6 }}
              whileInView={{ y: "0%", opacity: 1, rotate: 0 }}
              viewport={VIEW}
              transition={
                reduce
                  ? { duration: 0 }
                  : {
                      type: "spring",
                      stiffness: 210,
                      damping: 14,
                      mass: 0.9,
                      delay: 0.05 + i * 0.045,
                      opacity: { duration: 0.3, delay: 0.05 + i * 0.045 },
                    }
              }
            >
              {l}
            </motion.span>
          ),
        )}
        <motion.span
          style={{ display: "inline-block", color: GV.orange }}
          initial={{ opacity: 0, scale: 0.2 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={VIEW}
          transition={{
            duration: 0.6,
            ease: EASE,
            delay: reduce ? 0 : 0.2 + letters.length * 0.045,
          }}
        >
          .
        </motion.span>
      </p>
      <Rule
        color={GV.ink}
        thickness={3}
        className="mt-4"
        delay={0.3}
        duration={1.3}
      />
    </div>
  );
}

/** Photo qui se découvre de bas en haut, puis se pose (léger dézoom). */
function Photo({
  src,
  alt,
  sizes,
  ratio,
  delay = 0,
}: {
  src: string;
  alt: string;
  sizes: string;
  ratio: string;
  delay?: number;
}) {
  const reduce = useReduced();
  return (
    <div
      className="relative overflow-hidden"
      style={{ aspectRatio: ratio, background: "#E4DBCB" }}
    >
      <motion.div
        className="absolute inset-0"
        initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
        viewport={VIEW}
        transition={reduce ? { duration: 0 } : { duration: 1.25, ease: OPEN, delay }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.14 }}
          whileInView={{ scale: 1 }}
          viewport={VIEW}
          transition={{ duration: 2, ease: EASE, delay }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            className="gvs-img"
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

function Numero({ n, size }: { n: number; size: number }) {
  return (
    <span
      aria-hidden="true"
      className="tabular-nums"
      style={{
        fontFamily: FRAUNCES,
        fontStyle: "italic",
        fontWeight: 400,
        fontSize: size,
        lineHeight: 0.85,
        color: GV.orange,
        fontVariationSettings: '"opsz" 72, "SOFT" 100, "WONK" 1',
      }}
    >
      <span style={{ fontSize: "0.42em", verticalAlign: "0.9em", marginRight: "0.08em" }}>
        N°
      </span>
      {pad(n)}
    </span>
  );
}

function Go({ children }: { children: React.ReactNode }) {
  return (
    <span
      aria-hidden="true"
      className="inline-flex items-center gap-2 text-[14px] font-semibold"
      style={{ color: GV.ink }}
    >
      {children}
      <svg
        className="gvs-go"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke={GV.orange}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M5 12h14M13 5l7 7-7 7" />
      </svg>
    </span>
  );
}

function Feature({
  g,
  labelOf,
}: {
  g: GuideMetadata;
  labelOf: (id: string) => string;
}) {
  return (
    <Link
      href={`/guides/${g.slug}`}
      className="gvs-teaser grid gap-7 pb-12 pt-10 lg:grid-cols-12 lg:gap-12 lg:pb-16 lg:pt-12"
      style={{ color: GV.ink }}
    >
      <div className="lg:col-span-7">
        <Photo
          src={g.coverImage}
          alt={g.title}
          sizes="(min-width: 1024px) 760px, 100vw"
          ratio="16 / 10"
        />
      </div>
      <motion.div
        className="flex flex-col lg:col-span-5 lg:pt-2"
        initial={{ opacity: 0, y: 26 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEW}
        transition={{ duration: 1.1, ease: EASE, delay: 0.25 }}
      >
        <div className="flex items-end justify-between gap-4">
          <Numero n={1} size={96} />
          <span
            className="pb-1 text-[11px] font-semibold uppercase"
            style={{ letterSpacing: "0.22em", color: GV.orangeText }}
          >
            À la une de la rubrique
          </span>
        </div>
        <span
          aria-hidden="true"
          className="mt-6 block h-px w-full"
          style={{ background: GV.ink }}
        />
        <p
          className="mt-4 text-[11px] font-semibold uppercase"
          style={{ letterSpacing: "0.2em", color: GV.faint, margin: "16px 0 0" }}
        >
          {labelOf(g.category)} · {g.readTime}
        </p>
        <h3
          className="gvs-title"
          style={{
            fontFamily: FRAUNCES,
            fontWeight: 560,
            fontSize: "clamp(30px, 3vw, 46px)",
            lineHeight: 1.02,
            letterSpacing: "-0.025em",
            fontVariationSettings: '"opsz" 96, "SOFT" 50',
            margin: "12px 0 0",
            textWrap: "balance",
          }}
        >
          {typo(g.title)}
        </h3>
        <p
          className="text-[16.5px] leading-[1.62]"
          style={{ color: GV.mute, margin: "18px 0 0", maxWidth: 520 }}
        >
          {typo(g.description)}
        </p>
        <div className="mt-auto pt-7">
          <Go>Lire le guide</Go>
        </div>
      </motion.div>
    </Link>
  );
}

function Teaser({ g, n, i }: { g: GuideMetadata; n: number; i: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEW}
      transition={{ duration: 1, ease: EASE, delay: (i % 3) * 0.1 }}
    >
      <Link
        href={`/guides/${g.slug}`}
        className="gvs-teaser flex h-full flex-col"
        style={{ color: GV.ink }}
      >
        <Photo
          src={g.coverImage}
          alt={g.title}
          sizes="(min-width: 1024px) 440px, (min-width: 640px) 50vw, 100vw"
          ratio="3 / 2"
          delay={(i % 3) * 0.1}
        />
        <div className="mt-5 flex items-baseline justify-between gap-4">
          <Numero n={n} size={42} />
          <span
            className="text-[12px] tabular-nums"
            style={{ color: GV.faint }}
          >
            {g.readTime}
          </span>
        </div>
        <h3
          className="gvs-title"
          style={{
            fontFamily: FRAUNCES,
            fontWeight: 540,
            fontSize: "clamp(21px, 1.6vw, 25px)",
            lineHeight: 1.14,
            letterSpacing: "-0.015em",
            fontVariationSettings: '"opsz" 48',
            margin: "12px 0 0",
            textWrap: "balance",
          }}
        >
          {typo(g.title)}
        </h3>
        <p
          className="text-[15px] leading-[1.6]"
          style={{ color: GV.mute, margin: "10px 0 0" }}
        >
          {typo(g.description)}
        </p>
        <div className="mt-auto pt-5">
          <svg
            aria-hidden="true"
            className="gvs-go"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke={GV.orange}
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </div>
      </Link>
    </motion.li>
  );
}

/* ---------- Encart ThermoMatch : quatrième de couverture ---------- */

export function GuidesCta() {
  const reduce = useReduced();
  const words = "Vous préférez une recommandation".split(" ");
  return (
    <section
      className="px-5 pb-20 pt-4 sm:px-8 lg:px-12 lg:pb-28"
      style={{ background: GV.paper }}
    >
      <motion.div
        className="relative mx-auto max-w-[1440px] overflow-hidden"
        style={{ background: GV.ink, color: GV.paper }}
        initial={{ clipPath: "inset(0% 50% 0% 50%)" }}
        whileInView={{ clipPath: "inset(0% 0% 0% 0%)" }}
        viewport={VIEW}
        transition={reduce ? { duration: 0 } : { duration: 1.4, ease: OPEN }}
      >
        <div className="relative grid gap-10 px-6 py-11 sm:px-10 sm:py-14 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-16 lg:px-16 lg:py-20">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.9, ease: EASE, delay: 0.6 }}
            >
              <Image
                src="/images/logo-thermomatch-tm-720.webp"
                alt="ThermoMatch"
                width={720}
                height={247}
                sizes="190px"
                style={{ width: 190, height: "auto", maxWidth: "none", marginLeft: -14 }}
              />
            </motion.div>
            <p
              style={{
                fontFamily: FRAUNCES,
                fontWeight: 500,
                fontSize: "clamp(34px, 4.4vw, 68px)",
                lineHeight: 1,
                letterSpacing: "-0.03em",
                fontVariationSettings: '"opsz" 144, "SOFT" 40',
                margin: "22px 0 0",
                maxWidth: "15ch",
              }}
            >
              {words.map((w, i) => (
                <span key={i}>
                  <Mask delay={0.55 + i * 0.07}>{w}</Mask>{" "}
                </span>
              ))}
              <Mask
                delay={0.55 + words.length * 0.07}
                innerStyle={{
                  fontStyle: "italic",
                  fontWeight: 400,
                  color: GV.orange,
                  fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1',
                }}
              >
                <em style={{ fontStyle: "inherit" }}>{typo("personnalisée?")}</em>
              </Mask>
            </p>
            <motion.p
              className="text-[16.5px] leading-[1.6] sm:text-[17px]"
              style={{ color: "rgba(242,236,225,0.72)", margin: "22px 0 0", maxWidth: 520 }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={VIEW}
              transition={{ duration: 1, ease: EASE, delay: 1.1 }}
            >
              Répondez à quelques questions et obtenez des suggestions adaptées à
              votre maison.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 1, ease: EASE, delay: 1.2 }}
          >
            <Link
              href="/trouver-ma-thermopompe"
              className="gvs-btn group inline-flex items-center gap-3 rounded-full py-4 pl-7 pr-6 text-[15.5px] font-semibold"
              style={{ background: GV.orange, color: "#FFFFFF" }}
            >
              Commencer ThermoMatch
              <svg
                aria-hidden="true"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-500 group-hover:translate-x-1"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
        {/* Filet orange qui court sous l'encart, comme la barre de la couverture */}
        <Rule color={GV.orange} thickness={4} delay={1} duration={1.6} />
      </motion.div>
    </section>
  );
}
