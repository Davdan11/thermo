"use client";

import "./entreprise.css";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, MotionConfig } from "motion/react";
import { xeMono } from "./fonts";
import { Arrow, EASE, HEADER_PAD, UNDER_HEADER, XLink, useReducedSafe } from "./shared";

/* ==================================================================
   /partenaires — « Dossier ».
   Bleu acier, blanc glacier, une touche d'orange. À droite, une
   chemise cartonnée : la fiche d'un projet qualifié glisse hors du
   dossier, puis ses rubriques (celles que la page décrit) se cochent
   une à une, à la main ; un tampon « Dossier complet » vient la
   fermer. Aucune valeur inventée : les rubriques restent à remplir.
   ================================================================== */

const C = {
  navy: "#1F3A5F",
  back: "#162D4A",
  front: "#2B4B74",
  ice: "#EEF3F8",
  mute: "rgba(238,243,248,0.76)",
  faint: "rgba(238,243,248,0.5)",
  line: "rgba(238,243,248,0.18)",
  orange: "#E54B17",
  paperInk: "#1F3A5F",
  paperMute: "rgba(31,58,95,0.6)",
  paperLine: "rgba(31,58,95,0.2)",
};

const FIELDS = ["Superficie", "Année de construction", "Isolation", "Système actuel", "Budget", "Trois machines proposées"];
const TICK_START = 2100;
const TICK_GAP = 340;

export function PartnersDossier() {
  const reduce = useReducedSafe();
  const lines = ["Rejoignez le réseau", "d’installateurs", "d’élite."];
  return (
    <MotionConfig reducedMotion="user">
    <section aria-labelledby="partenaires-titre" className={`xe-root ${xeMono.variable} relative overflow-hidden ${UNDER_HEADER}`} style={{ background: C.navy, color: C.ice }}>
      {/* Lumière de bureau, très douce, venue du haut à droite */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(90% 70% at 85% 10%, rgba(238,243,248,0.09) 0%, rgba(238,243,248,0) 60%)" }} />
      <div className={`relative mx-auto grid max-w-[1440px] gap-14 px-5 pb-16 sm:px-8 lg:min-h-[min(88svh,820px)] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-10 lg:px-12 lg:pb-20 ${HEADER_PAD}`}>
        <div className="min-w-0">
          <motion.p className="xe-mono flex items-center gap-3 text-[12px] uppercase" style={{ letterSpacing: "0.18em", color: C.mute, margin: 0 }} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.1 }}>
            <span aria-hidden="true" className="inline-block h-[2px] w-8" style={{ background: C.orange }} />
            Pour les professionnels certifiés
          </motion.p>
          <h1 id="partenaires-titre" style={{ fontSize: "clamp(42px, 5.2vw, 90px)", lineHeight: 0.98, letterSpacing: "-0.045em", fontWeight: 500, margin: "26px 0 0" }}>
            {lines.map((l, i) => (
              <span key={l} className="block overflow-hidden" style={{ paddingBottom: "0.08em", marginBottom: "-0.08em" }}>
                <motion.span className="block" style={{ color: i === 2 ? C.orange : C.ice }} initial={reduce ? false : { x: "-18%", opacity: 0 }} animate={{ x: "0%", opacity: 1 }} transition={{ duration: 1.1, ease: EASE, delay: 0.2 + i * 0.1 }}>
                  {l}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p className="max-w-[560px] text-[17px] leading-[1.65] sm:text-[18px]" style={{ color: C.mute, margin: "26px 0 0" }} initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: EASE, delay: 0.55 }}>
            Nous ne vendons pas de «&nbsp;leads&nbsp;» ou de listes de contacts froids. Nous formons des partenariats stratégiques pour connecter votre expertise avec une clientèle déjà éduquée par ThermoMatch.
          </motion.p>
          <motion.div className="mt-9 flex flex-wrap items-center gap-3" initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: EASE, delay: 0.7 }}>
            <XLink href="#candidature" className="inline-flex items-center gap-3 px-6 py-4 text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-[#C93F10]" style={{ background: C.orange, borderRadius: 6 }}>
              Soumettre une candidature <Arrow />
            </XLink>
            <XLink href="/trouver-ma-thermopompe" className="inline-flex items-center px-6 py-4 text-[15px] font-semibold transition-colors duration-300 hover:bg-[rgba(238,243,248,0.08)]" style={{ border: `1px solid ${C.line}`, color: C.ice, borderRadius: 6 }}>
              Découvrir ThermoMatch
            </XLink>
          </motion.div>
        </div>

        <Folder />
      </div>
    </section>
    </MotionConfig>
  );
}

function Folder() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedSafe();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lift = useTransform(scrollYProgress, [0.3, 1], [0, -40]);

  // Les rubriques se cochent l'une après l'autre.
  const [ticks, setTicks] = useState(0);
  useEffect(() => {
    if (reduce) {
      setTicks(FIELDS.length);
      return;
    }
    const ids = FIELDS.map((_, i) => window.setTimeout(() => setTicks(i + 1), TICK_START + i * TICK_GAP));
    return () => ids.forEach((id) => window.clearTimeout(id));
  }, [reduce]);
  const complete = ticks === FIELDS.length;

  return (
    <motion.div ref={ref} className="relative mx-auto h-[500px] w-full max-w-[540px] sm:h-[580px] lg:mr-0" initial={reduce ? false : { opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: EASE, delay: 0.35 }}>
      {/* Dos de la chemise, avec son onglet */}
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 top-[64px] rounded-[16px] rounded-tr-none" style={{ background: C.back, boxShadow: "0 50px 90px -50px rgba(5,14,26,0.9)" }}>
        <div className="absolute -top-[30px] right-0 h-[32px] w-[34%] rounded-t-[12px]" style={{ background: C.back }} />
      </div>

      {/* La fiche qui sort du dossier */}
      <motion.div className="absolute inset-x-[5%] top-[18px] z-[2] h-[410px] sm:inset-x-[7%] sm:h-[460px]" style={reduce ? undefined : { y: lift }}>
        <motion.div
          className="relative h-full rounded-[4px] px-5 pb-6 pt-5 sm:px-7 sm:pt-6"
          style={{ background: C.ice, color: C.paperInk, boxShadow: "0 30px 60px -30px rgba(5,14,26,0.75), 0 2px 0 rgba(255,255,255,0.6) inset" }}
          initial={reduce ? false : { y: 250, rotate: -4 }}
          animate={{ y: 0, rotate: 1.2 }}
          transition={{ duration: 1.4, ease: EASE, delay: 0.9 }}
        >
          {/* Trombone */}
          <svg aria-hidden="true" viewBox="0 0 24 64" className="absolute -top-[18px] left-[63%] h-[58px] w-[22px]" fill="none" stroke="#9FB0C4" strokeWidth={2.2} strokeLinecap="round">
            <path d="M8 20 V50 a6 6 0 0 0 12 0 V12 a8 8 0 0 0 -16 0 V46" />
          </svg>

          <div className="xe-mono flex items-center justify-between gap-3 text-[10.5px] uppercase" style={{ letterSpacing: "0.16em", color: C.paperMute }}>
            <span>Questionnaire ThermoMatch</span>
            <span className="hidden sm:inline">Fiche client</span>
          </div>
          <p className="text-[21px] font-semibold sm:text-[24px]" style={{ letterSpacing: "-0.025em", margin: "12px 0 0" }}>
            Nouveau projet qualifié
          </p>
          <ul style={{ listStyle: "none", margin: "14px 0 0", padding: 0 }}>
            {FIELDS.map((f, i) => {
              const on = i < ticks;
              const last = i === FIELDS.length - 1;
              return (
                <li key={f} className="flex items-center gap-3 py-[9px] sm:py-[11px]" style={{ borderTop: `1px solid ${C.paperLine}` }}>
                  <span className="xe-mono w-6 shrink-0 text-[11px]" style={{ color: C.paperMute }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="shrink-0 text-[14.5px] font-medium sm:text-[15.5px]" style={{ opacity: on ? 1 : 0.55, transition: "opacity 0.4s" }}>
                    {f}
                  </span>
                  <span aria-hidden="true" className="mx-1 h-px min-w-[12px] flex-1 self-end" style={{ borderBottom: `1.5px dotted ${C.paperLine}`, marginBottom: 5 }} />
                  {last && (
                    <span aria-hidden="true" className="flex shrink-0 gap-1">
                      {[0, 1, 2].map((k) => (
                        <motion.span key={k} className="block h-[14px] w-[18px] rounded-[3px]" style={{ border: `1px solid ${C.paperLine}` }} animate={{ backgroundColor: on ? C.orange : "rgba(31,58,95,0)" }} transition={{ duration: 0.4, delay: on && !reduce ? 0.15 + k * 0.12 : 0 }} />
                      ))}
                    </span>
                  )}
                  <svg aria-hidden="true" viewBox="0 0 22 22" className="h-[20px] w-[20px] shrink-0">
                    <rect x={1.5} y={1.5} width={19} height={19} rx={2} fill="none" stroke={on ? C.paperInk : C.paperLine} strokeWidth={1.3} style={{ transition: "stroke 0.4s" }} />
                    {on && (
                      <motion.path d="M5 11.5 C 7 13, 8.5 15, 9.5 16.5 C 12 11, 15 7, 20 3" fill="none" stroke={C.orange} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.35, ease: "easeOut" }} />
                    )}
                  </svg>
                </li>
              );
            })}
          </ul>
          <p className="sr-only">Chaque projet arrive avec : {FIELDS.join(", ")}.</p>

          {/* Tampon */}
          <motion.span
            aria-hidden="true"
            className="xe-mono pointer-events-none absolute right-[56px] top-[196px] px-3 py-1.5 text-[12px] font-semibold uppercase sm:right-[76px] sm:top-[222px] sm:text-[13px]"
            style={{ border: `2px solid ${C.orange}`, color: C.orange, letterSpacing: "0.16em", borderRadius: 4, mixBlendMode: "multiply", rotate: -8 }}
            initial={reduce ? false : { opacity: 0, scale: 1.8 }}
            animate={complete ? { opacity: 0.92, scale: 1 } : { opacity: 0, scale: 1.8 }}
            transition={{ duration: 0.28, ease: [0.5, 0, 0.75, 0], delay: complete && !reduce ? 0.35 : 0 }}
          >
            Dossier complet
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Devant de la chemise */}
      <div className="absolute inset-x-0 bottom-0 z-[3] h-[150px] rounded-b-[16px] rounded-t-[8px] px-6 py-5 sm:h-[170px] sm:px-8 sm:py-6" style={{ background: `linear-gradient(180deg, ${C.front} 0%, #264468 100%)`, boxShadow: "0 -1px 0 rgba(238,243,248,0.16) inset, 0 -18px 30px -20px rgba(5,14,26,0.7)" }}>
        <p className="xe-mono flex flex-wrap items-center gap-x-2 text-[10.5px] uppercase" style={{ letterSpacing: "0.18em", color: C.faint, margin: 0 }}>
          <span>Dossier ThermoMatch</span>
          <span aria-hidden="true" style={{ color: C.orange }}>
            →
          </span>
          <span style={{ color: C.ice }}>Installateur partenaire</span>
        </p>
        <p className="max-w-[380px] text-[16px] leading-snug sm:text-[18px]" style={{ color: C.ice, margin: "10px 0 0", letterSpacing: "-0.01em" }}>
          Vous validez le calcul de charge et réalisez l’installation.
        </p>
      </div>
    </motion.div>
  );
}
