"use client";

import "./contenu.css";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, MotionConfig } from "motion/react";
import { fraunces, FRAUNCES } from "./fonts";
import { DISPLAY, EASE, UNDER_HEADER, useReducedSafe } from "./shared";

/* ==================================================================
   /glossaire — « Dictionnaire ».
   Papier, encre, bordeaux. Titre courant de dictionnaire (mots-repères
   de la première et de la dernière entrée), grand « Glossaire. » en
   romain Fraunces, et une vraie entrée : mot-vedette, catégorie
   grammaticale quand elle a un sens, précision entre parenthèses de la
   donnée, définition complète. Ruban alphabétique : seules les lettres
   qui ont des termes sont actives.
   Signature : l'entrée tourne comme une page (pivot sur la reliure)
   et découvre la suivante, terme après terme.
   ================================================================== */

const P = {
  paper: "#FBFAF6",
  sheet: "#FFFEFB",
  ink: "#1A1714",
  mute: "rgba(26,23,20,0.66)",
  faint: "rgba(26,23,20,0.4)",
  line: "rgba(26,23,20,0.14)",
  ox: "#7A1F1F",
} as const;

export type DictTerm = { term: string; slug: string; definition: string };
export type DictLetter = { letter: string; slug: string; count: number };

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const STEP = 5.6;

/** Catégorie grammaticale, seulement quand elle est certaine (sigle, nom masculin/féminin…). */
const GRAMMAR: Record<string, string> = {
  AHRI: "sigle",
  "Air pulsé": "n. m.",
  "Appoint électrique": "n. m.",
  Biénergie: "n. f.",
  BTU: "sigle",
  "Climat froid": "n. m.",
  Compresseur: "n. m.",
  "Compresseur Rotatif / Twin Rotary": "n. m.",
  COP: "sigle",
  "Cycle inversé": "n. m.",
  Dégivrage: "n. m.",
  "Filtre HEPA / Filtre plissé": "n. m.",
  HSPF2: "sigle",
  Inverter: "anglic.",
  Multizone: "adj.",
  Plénum: "n. m.",
  Réfrigérant: "n. m.",
  SEER2: "sigle",
  "Serpentin Évaporateur / Condenseur": "n. m.",
  "Thermopompe centrale": "n. f.",
  "Thermopompe murale": "n. f.",
  "Tonne de réfrigération": "n. f.",
};

/** « AHRI (Air-Conditioning…) » → mot-vedette « AHRI » + précision « Air-Conditioning… ». */
function splitTerm(term: string): { head: string; gloss: string | null } {
  const m = term.match(/^(.*?)\s*\((.+)\)\s*$/);
  return m
    ? { head: m[1].trim(), gloss: m[2].trim() }
    : { head: term, gloss: null };
}

const firstLetter = (s: string) =>
  s.charAt(0).toUpperCase().normalize("NFD").replace(/[̀-ͯ]/g, "");

export function DictionaryHero({
  terms,
  letters,
  termCount,
}: {
  terms: DictTerm[];
  letters: DictLetter[];
  termCount: number;
}) {
  const reduce = useReducedSafe();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-10% 0px -10% 0px" });
  const [active, setActive] = useState(0);
  const [hold, setHold] = useState(false);
  const auto = !reduce && !hold && inView && terms.length > 1;

  useEffect(() => {
    if (!auto) return;
    const t = window.setInterval(
      () => setActive((k) => (k + 1) % terms.length),
      STEP * 1000,
    );
    return () => window.clearInterval(t);
  }, [auto, terms.length]);

  const cur = terms[active] ?? terms[0];
  const first = terms[0] ? splitTerm(terms[0].term).head : "";
  const last = terms[terms.length - 1]
    ? splitTerm(terms[terms.length - 1].term).head
    : "";
  const byLetter = new Map(letters.map((l) => [l.letter, l]));
  const curLetter = cur ? firstLetter(cur.term) : "";

  const goLetter = (L: string) => {
    const k = terms.findIndex((t) => firstLetter(t.term) === L);
    if (k >= 0) setActive(k);
  };

  return (
    <MotionConfig reducedMotion="user">
      <section
        aria-labelledby="dx-titre"
        className={`${fraunces.variable} relative overflow-hidden ${UNDER_HEADER}`}
        style={{ background: P.paper, color: P.ink, fontFamily: DISPLAY }}
      >
        <div className="relative mx-auto max-w-[1440px] px-5 pb-10 pt-[124px] sm:px-8 lg:px-12 min-[1700px]:pt-[140px]">
          {/* Titre courant du dictionnaire */}
          <motion.div
            className="grid grid-cols-[1fr_auto] items-end gap-4 pb-2 sm:grid-cols-[1fr_auto_1fr]"
            style={{ borderBottom: `4px double ${P.ink}` }}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span
              className="text-[11px] font-semibold uppercase"
              style={{ letterSpacing: "0.22em" }}
            >
              Dictionnaire du CVAC
            </span>
            {first && last ? (
              <span
                className="hidden text-center sm:block"
                style={{
                  fontFamily: FRAUNCES,
                  fontStyle: "italic",
                  fontSize: 17,
                  color: P.mute,
                }}
              >
                {first} — {last}
              </span>
            ) : null}
            <span
              className="text-right text-[11px] font-semibold uppercase tabular-nums"
              style={{ letterSpacing: "0.22em", color: P.mute }}
            >
              {termCount} termes · {letters.length} lettres
            </span>
          </motion.div>

          <div className="mt-8 grid gap-10 lg:mt-12 lg:grid-cols-12 lg:gap-14">
            {/* Titre et chapeau */}
            <div className="lg:col-span-5">
              <h1
                id="dx-titre"
                style={{
                  fontFamily: FRAUNCES,
                  fontWeight: 300,
                  fontSize: "clamp(74px, 9.4vw, 150px)",
                  lineHeight: 0.9,
                  letterSpacing: "-0.035em",
                  fontVariationSettings: '"opsz" 144, "SOFT" 0, "WONK" 0',
                  margin: 0,
                }}
              >
                <span
                  style={{
                    display: "block",
                    overflow: "hidden",
                    paddingBottom: "0.08em",
                  }}
                >
                  <motion.span
                    style={{ display: "inline-block" }}
                    initial={reduce ? false : { y: "100%" }}
                    animate={{ y: "0%" }}
                    transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}
                  >
                    Glossaire<span style={{ color: P.ox }}>.</span>
                  </motion.span>
                </span>
              </h1>
              <motion.p
                className="text-[17px] leading-[1.65]"
                style={{
                  color: P.mute,
                  maxWidth: 470,
                  margin: "22px 0 0",
                  fontFamily: "var(--font-sans)",
                }}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: EASE, delay: 0.45 }}
              >
                Décodez le jargon de l’industrie. Des définitions claires et
                exhaustives pour maîtriser les termes techniques, de l’achat à
                l’entretien.
              </motion.p>
              <motion.div
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: EASE, delay: 0.6 }}
                className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4"
              >
                <a
                  href="#lexique"
                  className="group inline-flex items-center gap-3 text-[15px] font-semibold"
                  style={{ color: P.ox }}
                >
                  <span
                    className="c2-underline"
                    style={{ backgroundSize: "100% 1px" }}
                  >
                    Parcourir de A à Z
                  </span>
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-500 group-hover:translate-y-0.5"
                  >
                    ↓
                  </span>
                </a>
                <p className="flex items-baseline gap-5" style={{ margin: 0 }}>
                  <span>
                    <span
                      className="tabular-nums"
                      style={{
                        fontFamily: FRAUNCES,
                        fontSize: 30,
                        fontWeight: 400,
                      }}
                    >
                      {termCount}
                    </span>{" "}
                    <span
                      className="text-[12px] uppercase"
                      style={{ letterSpacing: "0.14em", color: P.mute }}
                    >
                      termes définis
                    </span>
                  </span>
                  <span>
                    <span
                      className="tabular-nums"
                      style={{
                        fontFamily: FRAUNCES,
                        fontSize: 30,
                        fontWeight: 400,
                      }}
                    >
                      {letters.length}
                    </span>{" "}
                    <span
                      className="text-[12px] uppercase"
                      style={{ letterSpacing: "0.14em", color: P.mute }}
                    >
                      lettres
                    </span>
                  </span>
                </p>
              </motion.div>
            </div>

            {/* L'entrée qui tourne comme une page */}
            {cur ? (
              <div
                ref={ref}
                className="lg:col-span-7"
                onMouseEnter={() => setHold(true)}
                onMouseLeave={() => setHold(false)}
                onFocus={() => setHold(true)}
                onBlur={(e) => {
                  if (!e.currentTarget.contains(e.relatedTarget as Node | null))
                    setHold(false);
                }}
              >
                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.1, ease: EASE, delay: 0.35 }}
                >
                  <div
                    className="relative h-[500px] sm:h-[440px] lg:h-[430px]"
                    style={{ perspective: 2200 }}
                  >
                    {/* Pli de la reliure et tranche du bloc de pages, à droite */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -left-6 inset-y-0 hidden w-6 lg:block"
                      style={{
                        background:
                          "linear-gradient(90deg, rgba(26,23,20,0) 0%, rgba(26,23,20,0.035) 100%)",
                      }}
                    />
                    <span
                      aria-hidden="true"
                      className="absolute inset-y-[2px] -right-[4px] w-[4px]"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(90deg, rgba(26,23,20,0.16) 0 1px, transparent 1px 2px)",
                      }}
                    />
                    <AnimatePresence initial={false}>
                      <motion.article
                        key={cur.slug}
                        aria-live="off"
                        className="absolute inset-0 flex flex-col py-7 pl-6 pr-5 sm:py-9 sm:pl-12 sm:pr-10"
                        style={{
                          background: P.paper,
                          transformOrigin: "0% 50%",
                          backfaceVisibility: "hidden",
                        }}
                        initial={{ zIndex: 1 }}
                        animate={{
                          zIndex: 1,
                          rotateY: 0,
                          opacity: 1,
                          boxShadow: "0 0 0 0 rgba(26,23,20,0)",
                        }}
                        exit={
                          reduce
                            ? { opacity: 0, zIndex: 2 }
                            : {
                                zIndex: 2,
                                rotateY: -98,
                                opacity: [1, 1, 0.15],
                                boxShadow:
                                  "30px 0 50px -10px rgba(26,23,20,0.35)",
                                transition: {
                                  duration: 1.1,
                                  ease: [0.55, 0.05, 0.3, 1],
                                },
                              }
                        }
                      >
                        <Entry t={cur} index={active} total={terms.length} />
                        {/* Ombre du pli sur la page de droite */}
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-y-0 left-0 w-12"
                          style={{
                            background:
                              "linear-gradient(90deg, rgba(26,23,20,0.045), rgba(26,23,20,0))",
                          }}
                        />
                      </motion.article>
                    </AnimatePresence>
                  </div>
                  <div
                    className="mt-4 flex items-center justify-between gap-4 text-[13px]"
                    style={{ color: P.mute }}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setActive((k) => (k - 1 + terms.length) % terms.length)
                      }
                      className="c2-crumb"
                      style={{
                        background: "none",
                        border: 0,
                        padding: "6px 0",
                        color: "inherit",
                      }}
                    >
                      ← Entrée précédente
                    </button>
                    <div
                      aria-hidden="true"
                      className="relative h-px flex-1 overflow-hidden"
                      style={{ background: P.line }}
                    >
                      {auto && (
                        <motion.span
                          key={`${cur.slug}-t`}
                          className="absolute inset-0 origin-left"
                          style={{ background: P.ox }}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: STEP, ease: "linear" }}
                        />
                      )}
                    </div>
                    <button
                      type="button"
                      onClick={() => setActive((k) => (k + 1) % terms.length)}
                      className="c2-crumb"
                      style={{
                        background: "none",
                        border: 0,
                        padding: "6px 0",
                        color: "inherit",
                      }}
                    >
                      Entrée suivante →
                    </button>
                  </div>
                </motion.div>
              </div>
            ) : null}
          </div>

          {/* Ruban alphabétique */}
          <nav
            aria-label="Index alphabétique du glossaire"
            className="mt-10 overflow-x-auto lg:mt-12"
            style={{
              borderTop: `1px solid ${P.ink}`,
              borderBottom: `1px solid ${P.ink}`,
            }}
          >
            <ul
              className="flex min-w-[720px] justify-between lg:min-w-0"
              style={{ margin: 0, padding: 0, listStyle: "none" }}
            >
              {ALPHABET.map((L, k) => {
                const e = byLetter.get(L);
                const on = L === curLetter;
                return (
                  <motion.li
                    key={L}
                    className="relative flex-1"
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: EASE,
                      delay: 0.8 + k * 0.025,
                    }}
                  >
                    {e ? (
                      <a
                        href={`#${e.slug}`}
                        aria-label={`Lettre ${L} : ${e.count} terme${e.count > 1 ? "s" : ""}`}
                        onMouseEnter={() => goLetter(L)}
                        onFocus={() => goLetter(L)}
                        className="dx-tab relative flex h-12 items-center justify-center"
                        style={{
                          fontFamily: FRAUNCES,
                          fontSize: 21,
                          fontWeight: 500,
                          color: on ? P.paper : P.ink,
                        }}
                      >
                        {on && (
                          <motion.span
                            layoutId="dx-on"
                            aria-hidden="true"
                            className="absolute inset-0"
                            style={{ background: P.ox }}
                            transition={{ duration: 0.55, ease: EASE }}
                          />
                        )}
                        <span className="relative">{L}</span>
                      </a>
                    ) : (
                      <span
                        aria-hidden="true"
                        className="flex h-12 items-center justify-center"
                        style={{
                          fontFamily: FRAUNCES,
                          fontSize: 21,
                          fontWeight: 300,
                          color: "rgba(26,23,20,0.2)",
                        }}
                      >
                        {L}
                      </span>
                    )}
                  </motion.li>
                );
              })}
            </ul>
          </nav>
        </div>
      </section>
    </MotionConfig>
  );
}

function Entry({
  t,
  index,
  total,
}: {
  t: DictTerm;
  index: number;
  total: number;
}) {
  const { head, gloss } = splitTerm(t.term);
  const tag = GRAMMAR[head];
  return (
    <>
      <div
        className="flex items-start justify-between gap-4 text-[11px] font-semibold uppercase tabular-nums"
        style={{ letterSpacing: "0.2em", color: P.faint }}
      >
        <span style={{ color: P.ox }}>{firstLetter(t.term)}</span>
        <span>
          Entrée {String(index + 1).padStart(2, "0")} /{" "}
          {String(total).padStart(2, "0")}
        </span>
      </div>
      <p className="mt-4 sm:mt-5" style={{ margin: 0 }}>
        <span
          style={{
            fontFamily: FRAUNCES,
            fontWeight: 650,
            fontSize:
              head.length > 22
                ? "clamp(30px, 3vw, 44px)"
                : "clamp(38px, 4.2vw, 64px)",
            lineHeight: 1,
            letterSpacing: "-0.03em",
            fontVariationSettings: '"opsz" 96',
          }}
        >
          {head}
        </span>
        {tag ? (
          <span
            className="ml-3 whitespace-nowrap"
            style={{
              fontFamily: FRAUNCES,
              fontStyle: "italic",
              fontSize: 20,
              color: P.ox,
            }}
          >
            {tag}
          </span>
        ) : null}
      </p>
      {gloss ? (
        <p
          className="mt-2 line-clamp-1"
          style={{
            fontFamily: FRAUNCES,
            fontStyle: "italic",
            fontSize: 17,
            color: P.mute,
            margin: "8px 0 0",
          }}
        >
          ({gloss})
        </p>
      ) : null}
      <span
        aria-hidden="true"
        className="mt-5 block h-px w-16"
        style={{ background: P.ox }}
      />
      <p
        className="mt-5 line-clamp-[9] sm:line-clamp-6"
        style={{
          fontFamily: FRAUNCES,
          fontSize: "clamp(16.5px, 1.3vw, 19px)",
          lineHeight: 1.58,
          fontVariationSettings: '"opsz" 14',
          margin: "18px 0 0",
        }}
      >
        {t.definition}
      </p>
      <a
        href={`#${t.slug}`}
        className="group mt-auto inline-flex w-fit items-center gap-2 pt-4 text-[13.5px] font-semibold"
        style={{ color: P.ox }}
      >
        <span className="c2-underline">Voir l’entrée complète</span>
        <span
          aria-hidden="true"
          className="transition-transform duration-500 group-hover:translate-x-1"
        >
          →
        </span>
      </a>
    </>
  );
}
