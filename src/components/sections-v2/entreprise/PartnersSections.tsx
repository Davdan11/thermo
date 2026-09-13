"use client";

import Image from "next/image";
import { useRef, type ReactNode } from "react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { Arrow } from "@/components/heroes-v2/entreprise/shared";
import { EASE, MaskLines, Reveal, Shell, useReduced } from "./kit";

/* ==================================================================
   /partenaires — la suite du « Dossier ».
   Bleu acier, blanc glacier, une touche d'orange. La chemise du héros
   s'ouvre sur ses pièces : la pièce A (ThermoMatch) est une note sur
   papier glacier, avec les rubriques du questionnaire surlignées une à
   une et l'écran agrafé par un trombone ; la pièce B est la feuille de
   candidature, en rubriques à onglets. Aucune valeur inventée.
   ================================================================== */

const C = {
  navy: "#1F3A5F",
  back: "#162D4A",
  ice: "#EEF3F8",
  mute: "rgba(238,243,248,0.8)",
  faint: "rgba(238,243,248,0.58)",
  line: "rgba(238,243,248,0.18)",
  orange: "#E54B17",
  paperInk: "#1F3A5F",
  paperMute: "rgba(31,58,95,0.76)",
  paperFaint: "rgba(31,58,95,0.55)",
  paperLine: "rgba(31,58,95,0.16)",
};
const WRAP = "mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12";
const paper = { background: C.ice, color: C.paperInk, boxShadow: "0 40px 70px -40px rgba(5,14,26,0.8), 0 2px 0 rgba(255,255,255,0.6) inset" };

function Clip({ className }: { className: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 64" className={className} fill="none" stroke="#9FB0C4" strokeWidth={2.2} strokeLinecap="round">
      <path d="M8 20 V50 a6 6 0 0 0 12 0 V12 a8 8 0 0 0 -16 0 V46" />
    </svg>
  );
}

function Stamp({ children, className, delay = 0.4 }: { children: ReactNode; className: string; delay?: number }) {
  return (
    <motion.span
      aria-hidden="true"
      className={`xs-mono pointer-events-none absolute z-[3] px-3 py-1.5 text-[12px] font-semibold uppercase sm:text-[13px] ${className}`}
      style={{ border: `2px solid ${C.orange}`, color: "#C93F10", letterSpacing: "0.16em", borderRadius: 4, rotate: -8, boxShadow: "0 8px 18px -10px rgba(5,14,26,0.7)" }}
      initial={{ opacity: 0, scale: 1.8 }}
      whileInView={{ opacity: 0.92, scale: 1 }}
      viewport={{ once: true, amount: 1 }}
      transition={{ duration: 0.28, ease: [0.5, 0, 0.75, 0], delay }}
    >
      {children}
    </motion.span>
  );
}

const FIELDS = ["superficie", "année de construction", "isolation", "système actuel", "budget", "les trois machines proposées au client"];

export function PartnersSections({ form }: { form: ReactNode }) {
  return (
    <Shell>
      <PieceA />
      <PieceB form={form} />
    </Shell>
  );
}

/* ---------- Pièce A : ThermoMatch ---------- */
function PieceA() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReduced();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0.1, 0.6], [4, -1.2]);
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const pRef = useRef<HTMLParagraphElement>(null);
  const marked = useInView(pRef, { once: true, amount: 0.7 });
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const h2Seen = useInView(h2Ref, { once: true, amount: 0.8 });

  return (
    <section aria-labelledby="pt-thermomatch" style={{ background: C.navy, color: C.ice }}>
      <div className={`${WRAP} pb-[clamp(72px,8vw,120px)] pt-[clamp(8px,2vw,24px)]`}>
        <Reveal y={50} amount={0.1}>
          {/* Onglets de la chemise */}
          <div className="flex items-end gap-1.5">
            <span aria-current="true" className="xs-mono inline-flex items-center gap-2 rounded-t-[12px] px-4 pb-2.5 pt-3 text-[11px] uppercase sm:px-5" style={{ background: C.back, color: C.ice, letterSpacing: "0.16em" }}>
              <span style={{ color: "#FF9B78" }}>Pièce A</span> ThermoMatch
            </span>
            <a href="#candidature" className="xs-mono xs-ring-ice inline-flex items-center gap-2 rounded-t-[10px] px-4 pb-2 pt-2.5 text-[11px] uppercase transition-colors duration-300 hover:text-white sm:px-5" style={{ background: "rgba(22,45,74,0.5)", color: C.faint, letterSpacing: "0.16em" }}>
              <span>Pièce B</span> Candidature
            </a>
          </div>

          <div ref={ref} className="relative rounded-[18px] rounded-tl-none p-3 pb-8 sm:p-8 lg:p-12" style={{ background: C.back, boxShadow: "0 60px 100px -60px rgba(5,14,26,0.9)" }}>
            <div className="flex flex-wrap items-center justify-between gap-4 px-2 pt-3 sm:px-0 sm:pt-0">
              <Image src="/images/logo-thermomatch-tm-720.webp" alt="ThermoMatch" width={720} height={247} style={{ width: 140, height: 48, maxWidth: "none", objectFit: "contain" }} />
              <p aria-hidden="true" className="xs-mono hidden items-center gap-2 text-[10.5px] uppercase sm:flex" style={{ letterSpacing: "0.18em", color: C.faint, margin: 0 }}>
                Dossier ThermoMatch <span style={{ color: C.orange }}>→</span> <span style={{ color: C.ice }}>Installateur partenaire</span>
              </p>
            </div>

            <div className="mt-6 grid gap-10 sm:mt-8 lg:grid-cols-[minmax(0,6.3fr)_minmax(0,5.7fr)] lg:items-center lg:gap-14">
              {/* La note, sur papier glacier */}
              <motion.article className="relative rounded-[4px] px-5 pb-8 pt-6 sm:px-9 sm:pb-10 sm:pt-8" style={paper} initial={{ y: 60, rotate: -1.5, opacity: 0 }} whileInView={{ y: 0, rotate: 0, opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 1.2, ease: EASE }}>
                <div aria-hidden="true" className="xs-mono flex items-center justify-between gap-3 text-[10.5px] uppercase" style={{ letterSpacing: "0.16em", color: C.paperFaint }}>
                  <span>Pièce A · Note</span>
                  <span>Projets qualifiés</span>
                </div>
                <h2 id="pt-thermomatch" ref={h2Ref} style={{ fontSize: "clamp(32px, 3.6vw, 58px)", lineHeight: 1.02, letterSpacing: "-0.04em", fontWeight: 500, margin: "18px 0 0" }}>
                  <span className="block">Des projets qualifiés,</span>
                  <span className="relative inline-block">
                    pas des appels à froid.
                    <svg aria-hidden="true" viewBox="0 0 300 14" preserveAspectRatio="none" className="absolute -bottom-[0.18em] left-0 h-[0.28em] w-full overflow-visible">
                      <motion.path d="M3 9 C 60 3, 120 12, 180 6 S 270 4, 297 8" fill="none" stroke={C.orange} strokeWidth={3.2} strokeLinecap="round" initial={{ pathLength: 0 }} animate={{ pathLength: h2Seen || reduce ? 1 : 0 }} transition={{ duration: reduce ? 0 : 0.9, ease: "easeInOut", delay: 0.3 }} />
                    </svg>
                  </span>
                </h2>
                <p className="text-[17px] leading-[1.65]" style={{ color: C.paperInk, margin: "26px 0 0" }}>
                  Notre mission chez Thermopompes À Vendre est d&apos;accompagner le consommateur à travers le processus de sélection complexe d&apos;une thermopompe. Lorsqu&apos;ils arrivent à vous, le travail d&apos;éducation est déjà fait.
                </p>
                <p ref={pRef} className="text-[16px] leading-[1.75]" style={{ color: C.paperMute, margin: "16px 0 0" }}>
                  Chaque projet qui vous est confié arrive avec les réponses du questionnaire ThermoMatch :{" "}
                  {FIELDS.map((f, i) => (
                    <span key={f}>
                      <span className="xs-mark" data-on={marked || reduce ? "true" : "false"} style={{ color: C.paperInk, fontWeight: 600, transitionDelay: reduce ? "0s" : `${0.15 + i * 0.28}s` }}>
                        {f}
                      </span>
                      {i < FIELDS.length - 2 ? ", " : i === FIELDS.length - 2 ? " et " : ""}
                    </span>
                  ))}
                  . Vous n&apos;êtes plus un vendeur, vous êtes l&apos;expert qui vient valider le calcul de charge et réaliser l&apos;installation.
                </p>
              </motion.article>

              {/* L'écran, agrafé au dossier */}
              <motion.figure className="relative m-0 px-2 max-lg:!transform-none sm:px-6 lg:px-0" style={reduce ? undefined : { rotate, y }}>
                <div className="relative rounded-[4px] p-2 sm:p-2.5" style={paper}>
                  <Clip className="absolute -top-[22px] left-[18%] z-[2] h-[58px] w-[22px]" />
                  <Image src="/images/ui-mockup.png" alt="Interface ThermoMatch" width={1536} height={1024} sizes="(min-width: 1024px) 44vw, 90vw" style={{ display: "block", width: "100%", height: "auto", borderRadius: 2 }} />
                  <p aria-hidden="true" className="xs-mono flex items-center justify-between gap-3 px-1 pb-0.5 pt-2.5 text-[10px] uppercase" style={{ letterSpacing: "0.16em", color: C.paperFaint, margin: 0 }}>
                    <span>Questionnaire ThermoMatch</span>
                    <span>Fiche client</span>
                  </p>
                </div>
                <Stamp className="-bottom-7 left-[38%] bg-[#EEF3F8]" delay={0.6}>
                  Pièce jointe
                </Stamp>
              </motion.figure>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Pièce B : la candidature ---------- */
function PieceB({ form }: { form: ReactNode }) {
  const index = ["Entreprise", "Contact", "Activité"];
  return (
    <section id="candidature" aria-labelledby="pt-candidature" style={{ background: C.navy, color: C.ice, scrollMarginTop: 96 }}>
      <div className={`${WRAP} grid gap-12 pb-[clamp(80px,9vw,150px)] lg:grid-cols-[minmax(0,4.4fr)_minmax(0,7.6fr)] lg:gap-16`}>
        <div className="lg:sticky lg:top-[128px] lg:self-start">
          <Reveal>
            <p className="xs-mono flex items-center gap-3 text-[12px] uppercase" style={{ letterSpacing: "0.18em", color: C.mute, margin: 0 }} aria-hidden="true">
              <span className="inline-block h-[2px] w-8" style={{ background: C.orange }} />
              Pièce B
            </p>
          </Reveal>
          <h2 id="pt-candidature" style={{ fontSize: "clamp(44px, 5vw, 86px)", lineHeight: 0.98, letterSpacing: "-0.045em", fontWeight: 500, margin: "22px 0 0" }}>
            <MaskLines lines={["Devenir", "Partenaire"]} lineStyle={(i) => (i === 1 ? { color: C.orange } : undefined)} />
          </h2>
          <Reveal delay={0.15}>
            <p className="max-w-[440px] text-[17px] leading-[1.65]" style={{ color: C.mute, margin: "24px 0 0" }}>
              Nous sélectionnons rigoureusement nos partenaires pour garantir des installations impeccables. Remplissez ce formulaire pour planifier une première rencontre.
            </p>
          </Reveal>
          <ol aria-hidden="true" className="mt-10 hidden max-w-[360px] lg:block" style={{ listStyle: "none", padding: 0, margin: "40px 0 0" }}>
            {index.map((t, i) => (
              <motion.li key={t} className="xs-mono flex items-center justify-between py-3 text-[12px] uppercase" style={{ borderTop: `1px solid ${C.line}`, letterSpacing: "0.16em", color: C.faint }} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: EASE, delay: 0.3 + i * 0.1 }}>
                <span>
                  <span style={{ color: "#FF9B78" }}>{String(i + 1).padStart(2, "0")}</span>&nbsp;&nbsp;{t}
                </span>
                <Arrow className="xs-arrow" size={14} />
              </motion.li>
            ))}
          </ol>
        </div>

        {/* La feuille qui sort du dossier */}
        <motion.div className="relative min-w-0" initial={{ opacity: 0, y: 90, rotate: 2 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 1.2, ease: EASE }}>
          <div className="flex items-end">
            <span className="xs-mono inline-flex items-center gap-2 rounded-t-[10px] px-4 pb-2 pt-2.5 text-[11px] uppercase" style={{ background: C.ice, color: C.paperInk, letterSpacing: "0.16em" }}>
              <span style={{ color: C.orange }}>●</span> Formulaire de candidature
            </span>
          </div>
          <div className="relative rounded-[6px] rounded-tl-none px-5 pb-8 pt-8 sm:px-10 sm:pb-12 sm:pt-10 lg:px-14" style={paper}>
            <Clip className="absolute -top-[26px] right-[14%] z-[2] h-[58px] w-[22px]" />
            <div aria-hidden="true" className="xs-mono mb-8 flex flex-wrap items-center justify-between gap-3 border-b pb-4 text-[10.5px] uppercase" style={{ letterSpacing: "0.16em", color: C.paperFaint, borderColor: C.paperLine }}>
              <span>Réseau d’installateurs · Candidature</span>
              <span>Licence RBQ requise</span>
            </div>
            {form}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
