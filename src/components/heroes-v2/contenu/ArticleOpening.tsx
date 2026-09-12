"use client";

import "./contenu.css";
import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionConfig,
} from "motion/react";
import { typo } from "@/components/content-hero/typo";
import {
  Arrow,
  Crumbs,
  DISPLAY,
  EASE,
  SERIF,
  UNDER_HEADER,
  useReducedSafe,
} from "./shared";

/* ==================================================================
   /guides/[slug] — « Ouverture d'article ».
   Page blanche, encre, un seul accent : celui de la rubrique du guide
   (six rubriques, six teintes sourdes). Rubrique en surtitre, grand
   titre centré en Instrument Serif, chapeau, signature et temps de
   lecture, puis la photo de couverture pleine largeur avec sa légende
   dessous. Signature : les mots du titre montent un à un, la photo
   s'ouvre depuis le centre (clip-path) entre deux filets de couleur.
   ================================================================== */

/** Teinte de chaque rubrique (lisible sur blanc, AA pour le petit texte). */
export const CATEGORY_ACCENT: Record<string, string> = {
  choisir: "#1F4E8C",
  comparer: "#8A5A12",
  prix: "#1F6B4A",
  subventions: "#0E6470",
  installation: "#A23A2A",
  entretien: "#5B6320",
};

const INK = "#111417";
const MUTE = "#4A525A";

type Props = {
  title: string;
  description: string;
  category: string;
  categoryId: string;
  minutes: number;
  updated: string;
  author: string;
  coverImage: string;
  articleId: string;
};

type Word = { w: string; italic: boolean };

/** Mots du titre ; la partie après « : » ou « ? » passe en italique. */
function wordsOf(raw: string): Word[] {
  // Un nombre et son unité restent ensemble (« -30 °C »).
  const s = typo(raw).replace(/(\d) (°C|°F|\$|%|BTU)/g, "$1 $2");
  // typo() a déjà mis une espace insécable avant « : » ou « ? ».
  const m = /[  ][:?] /.exec(s);
  const cut = m && m.index > 0 && m.index < s.length - 6 ? m.index + 2 : -1;
  const head = cut > 0 ? s.slice(0, cut) : s;
  const tail = cut > 0 ? s.slice(cut + 1) : "";
  return [
    ...head
      .split(" ")
      .filter(Boolean)
      .map((w) => ({ w, italic: false })),
    ...tail
      .split(" ")
      .filter(Boolean)
      .map((w) => ({ w, italic: true })),
  ];
}

export function ArticleOpening({
  title,
  description,
  category,
  categoryId,
  minutes,
  updated,
  author,
  coverImage,
  articleId,
}: Props) {
  const reduce = useReducedSafe();
  const accent = CATEGORY_ACCENT[categoryId] ?? INK;
  const words = wordsOf(title);
  const len = typo(title).length;
  const size =
    len <= 42
      ? "clamp(44px, 6.6vw, 112px)"
      : len <= 72
        ? "clamp(38px, 5.2vw, 88px)"
        : "clamp(34px, 4.3vw, 72px)";
  const { scrollY } = useScroll();
  const photoY = useTransform(scrollY, [0, 1200], ["0%", "12%"]);

  return (
    <>
      <ReadingProgress targetId={articleId} color={accent} />
      <MotionConfig reducedMotion="user">
        <section
          aria-labelledby="ga-titre"
          className={`relative ${UNDER_HEADER}`}
          style={{ background: "#FFFFFF", color: INK, fontFamily: DISPLAY }}
        >
          <div className="mx-auto max-w-[1120px] px-5 pt-[128px] text-center sm:px-8 min-[1700px]:pt-[146px]">
            <motion.div
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <Crumbs
                items={[
                  { label: "Guides", href: "/guides" },
                  { label: typo(title), href: "#" },
                ]}
                color="#6B737A"
                strong={INK}
                nowrap
                className="max-w-full [&_ol]:justify-center [&_[aria-current]]:max-w-[40ch]"
              />
            </motion.div>

            {/* Surtitre : la rubrique, dans sa teinte */}
            <motion.p
              className="mt-10 inline-flex items-center gap-4 text-[12px] font-semibold uppercase sm:mt-14"
              style={{ letterSpacing: "0.26em", color: accent, margin: 0 }}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            >
              <motion.span
                aria-hidden="true"
                className="inline-block h-px w-8 origin-right"
                style={{ background: accent }}
                initial={reduce ? false : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
              />
              {category}
              <motion.span
                aria-hidden="true"
                className="inline-block h-px w-8 origin-left"
                style={{ background: accent }}
                initial={reduce ? false : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.25 }}
              />
            </motion.p>

            {/* Titre : les mots montent un à un */}
            <h1
              id="ga-titre"
              className="mx-auto mt-6"
              style={{
                fontFamily: SERIF,
                fontWeight: 400,
                fontSize: size,
                lineHeight: 1.02,
                letterSpacing: "-0.02em",
                maxWidth: "15.5em",
                textWrap: "balance",
                margin: "24px auto 0",
              }}
            >
              {words.map((t, i) => (
                <span key={i}>
                  <span
                    style={{
                      display: "inline-block",
                      overflow: "hidden",
                      verticalAlign: "top",
                      padding: "0 0.06em 0.16em",
                      margin: "0 -0.06em -0.16em",
                    }}
                  >
                    <motion.span
                      style={{
                        display: "inline-block",
                        fontStyle: t.italic ? "italic" : "normal",
                        color: t.italic ? accent : INK,
                      }}
                      initial={reduce ? false : { y: "110%" }}
                      animate={{ y: "0%" }}
                      transition={{
                        duration: 1,
                        ease: EASE,
                        delay: 0.3 + i * 0.055,
                      }}
                    >
                      {t.w}
                    </motion.span>
                  </span>
                  {i < words.length - 1 ? " " : null}
                </span>
              ))}
            </h1>

            <motion.p
              className="mx-auto text-[17.5px] leading-[1.6] sm:text-[20px]"
              style={{
                color: MUTE,
                maxWidth: 680,
                margin: "26px auto 0",
                fontFamily: "var(--font-sans)",
              }}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                ease: EASE,
                delay: 0.55 + words.length * 0.04,
              }}
            >
              {typo(description)}
            </motion.p>

            {/* Signature */}
            <motion.p
              className="mt-7 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[13.5px]"
              style={{ color: MUTE, margin: "28px 0 0" }}
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.75 + words.length * 0.04 }}
            >
              <span>
                Par{" "}
                <strong style={{ color: INK, fontWeight: 600 }}>
                  {typo(author)}
                </strong>
              </span>
              <span aria-hidden="true" style={{ color: accent }}>
                ·
              </span>
              <span>Mis à jour le {updated}</span>
              <span aria-hidden="true" style={{ color: accent }}>
                ·
              </span>
              <span className="tabular-nums">{minutes} min de lecture</span>
            </motion.p>
          </div>

          {/* Photo pleine largeur : ouverture depuis le centre */}
          <figure
            className="relative mt-12 sm:mt-16"
            style={{ margin: "56px 0 0" }}
          >
            <div className="relative h-[clamp(300px,62vh,700px)] w-full">
              <motion.div
                className="absolute inset-0 overflow-hidden"
                style={{ background: "#E9ECEE" }}
                initial={reduce ? false : { clipPath: "inset(0% 50% 0% 50%)" }}
                animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
                transition={{
                  duration: 1.6,
                  ease: [0.76, 0, 0.24, 1],
                  delay: 0.9,
                }}
              >
                <motion.div
                  className="absolute inset-x-0 -top-[6%] h-[112%]"
                  style={reduce ? undefined : { y: photoY }}
                >
                  <motion.div
                    className="absolute inset-0"
                    initial={reduce ? false : { scale: 1.16 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2.6, ease: EASE, delay: 0.9 }}
                  >
                    <Image
                      src={coverImage}
                      alt=""
                      fill
                      loading="eager"
                      fetchPriority="high"
                      sizes="100vw"
                      style={{ objectFit: "cover" }}
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
              {/* Deux filets de la couleur de la rubrique suivent les bords de l'ouverture. */}
              {!reduce && (
                <>
                  <motion.span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 w-[2px]"
                    style={{ background: accent }}
                    initial={{ left: "50%", opacity: 1 }}
                    animate={{ left: "0%", opacity: [1, 1, 0] }}
                    transition={{
                      left: {
                        duration: 1.6,
                        ease: [0.76, 0, 0.24, 1],
                        delay: 0.9,
                      },
                      opacity: {
                        duration: 1.9,
                        times: [0, 0.8, 1],
                        delay: 0.9,
                      },
                    }}
                  />
                  <motion.span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 w-[2px]"
                    style={{ background: accent }}
                    initial={{ left: "50%", opacity: 1 }}
                    animate={{ left: "calc(100% - 2px)", opacity: [1, 1, 0] }}
                    transition={{
                      left: {
                        duration: 1.6,
                        ease: [0.76, 0, 0.24, 1],
                        delay: 0.9,
                      },
                      opacity: {
                        duration: 1.9,
                        times: [0, 0.8, 1],
                        delay: 0.9,
                      },
                    }}
                  />
                </>
              )}
            </div>
            <motion.figcaption
              className="mx-auto flex max-w-[1120px] flex-wrap items-baseline justify-between gap-x-6 gap-y-2 px-5 pt-4 text-[13px] sm:px-8"
              style={{ color: MUTE }}
              initial={reduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.9 }}
            >
              <span>
                <span
                  style={{
                    fontFamily: SERIF,
                    fontStyle: "italic",
                    fontSize: 16,
                    color: INK,
                  }}
                >
                  Photo d’illustration.
                </span>{" "}
                Rubrique « {category} ».
              </span>
              <a
                href={`#${articleId}`}
                className="group inline-flex items-center gap-2 font-semibold"
                style={{ color: INK }}
              >
                <span className="c2-underline">Commencer la lecture</span>
                <span
                  className="transition-transform duration-500 group-hover:translate-y-0.5"
                  style={{ color: accent }}
                >
                  <Arrow size={14} down />
                </span>
              </a>
            </motion.figcaption>
          </figure>
          <div className="h-10 sm:h-14" />
        </section>
      </MotionConfig>
    </>
  );
}

/* ---------- Progression de lecture, dans la teinte de la rubrique ---------- */

function ReadingProgress({
  targetId,
  color,
}: {
  targetId: string;
  color: string;
}) {
  const reduce = useReducedSafe();
  const { scrollY } = useScroll();
  const raw = useTransform(scrollY, () => {
    if (typeof document === "undefined") return 0;
    const el = document.getElementById(targetId);
    if (!el) return 0;
    const r = el.getBoundingClientRect();
    const p = (window.innerHeight * 0.5 - r.top) / Math.max(1, r.height);
    return Math.min(1, Math.max(0, p));
  });
  const smooth = useSpring(raw, {
    stiffness: 170,
    damping: 32,
    restDelta: 0.001,
  });
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-[3px] origin-left"
      style={{ scaleX: reduce ? raw : smooth, background: color }}
    />
  );
}
