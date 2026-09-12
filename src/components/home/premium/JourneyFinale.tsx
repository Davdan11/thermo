"use client";

import "./sections.css";
import { useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import { MotionConfig, motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { Snowfall } from "../Snowfall";
import { C, DISPLAY, EASE } from "./shared";
import { Lines, Marker, NB, PillLink, VIEW } from "./suite-shared";

/* ==================================================================
   Fin de l'accueil :
   - « De la comparaison à l'installation » : un rail orange se trace au
     défilement et allume les quatre étapes (mêmes pastilles que la jauge
     du « test du froid ») ;
   - l'appel final orange, sous une neige légère, avec la thermopompe
     posée dans la neige qui monte du bas.
   ================================================================== */

const STEPS = [
  { label: "Comprendre", desc: "On vous aide à bien cerner vos besoins et les options qui s’offrent à vous." },
  { label: "Comparer", desc: "Comparez les meilleurs modèles et obtenez un prix juste et transparent." },
  { label: "Planifier", desc: "Choisissez votre installateur et planifiez l’installation à votre convenance." },
  { label: "Installer", desc: "Installation professionnelle et service après-vente assuré." },
];

const SERIF: CSSProperties = { fontFamily: "var(--font-serif), Georgia, serif", fontStyle: "italic", fontWeight: 400, letterSpacing: "-0.02em" };

export function ProcessRail() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReduced();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 75%"] });
  const rail = useTransform(scrollYProgress, [0.05, 0.85], [0, 1], { clamp: true });
  const [lit, setLit] = useState(0);
  useMotionValueEvent(rail, "change", (v) => setLit(v <= 0.01 ? 0 : Math.min(STEPS.length, Math.floor(v * STEPS.length) + 1)));
  const shown = reduce ? STEPS.length : lit;

  return (
    <MotionConfig reducedMotion="user">
      <section ref={ref} className="relative overflow-hidden" style={{ background: C.ink, color: C.cream, fontFamily: DISPLAY }} aria-labelledby="su-parcours-titre">
        <div className="relative mx-auto max-w-[1440px] px-5 py-[13vh] sm:px-8 lg:px-12">
          <Lines
            id="su-parcours-titre"
            lines={["De la comparaison", <span key="s" className="hp-serif">à l’installation.</span>]}
            style={{ fontSize: "clamp(42px, 5.4vw, 92px)", lineHeight: 0.96, letterSpacing: "-0.045em", fontWeight: 600, margin: 0 }}
          />

          <div className="relative mt-16 lg:mt-24">
            {/* Rail horizontal (grand écran) et vertical (mobile). */}
            <div aria-hidden="true" className="absolute left-0 right-0 top-[9px] hidden h-px lg:block" style={{ background: C.line }}>
              <motion.div className="h-full origin-left" style={{ background: C.orange, scaleX: reduce ? 1 : rail }} />
            </div>
            <div aria-hidden="true" className="absolute bottom-2 left-[9px] top-0 w-px lg:hidden" style={{ background: C.line }}>
              <motion.div className="h-full w-full origin-top" style={{ background: C.orange, scaleY: reduce ? 1 : rail }} />
            </div>

            <ol className="relative grid gap-12 lg:grid-cols-4 lg:gap-10" style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {STEPS.map((s, i) => {
                const on = shown > i;
                return (
                  <motion.li
                    key={s.label}
                    className="relative pl-12 lg:pl-0 lg:pt-14"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={VIEW}
                    transition={{ duration: 0.9, ease: EASE, delay: i * 0.1 }}
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 top-0 block h-[19px] w-[19px] rounded-full border ${on && i === shown - 1 && !reduce ? "su-pulse" : ""}`}
                      style={{ borderColor: on ? C.orange : C.line, background: on ? C.orange : C.ink, transition: "background .4s, border-color .4s" }}
                    />
                    <span aria-hidden="true" className="block tabular-nums" style={{ ...SERIF, fontSize: 30, lineHeight: 1, color: on ? C.orange : C.faint, transition: "color .5s" }}>
                      0{i + 1}
                    </span>
                    <p className="text-[22px] font-semibold" style={{ letterSpacing: "-0.02em", margin: "14px 0 0", color: on ? C.cream : C.mute, transition: "color .5s" }}>
                      {s.label}
                    </p>
                    <p className="max-w-[320px] text-[15px] leading-relaxed" style={{ color: C.mute, margin: "8px 0 0" }}>
                      {s.desc}
                    </p>
                  </motion.li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}

export function FinalCta() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReduced();
  // La thermopompe monte avec la neige et se pose au bas de la section.
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const unitY = useTransform(scrollYProgress, [0, 1], [90, 0]);

  return (
    <MotionConfig reducedMotion="user">
      <section ref={ref} className="relative overflow-hidden" style={{ background: C.orange, color: "#fff", fontFamily: DISPLAY }} aria-labelledby="su-cta-titre">
        <Snowfall className="pointer-events-none absolute inset-0 h-full w-full" density={0.35} />

        <div className="relative z-10 mx-auto max-w-[1440px] px-5 pt-[12vh] sm:px-8 lg:min-h-[660px] lg:px-12 lg:pb-[12vh]">
          <div className="lg:max-w-[46%]">
            <p className="flex items-center gap-3 text-[12px] font-semibold uppercase" style={{ letterSpacing: "0.22em", color: C.ink, margin: 0 }}>
              <motion.span
                aria-hidden="true"
                className="inline-block h-px w-10 origin-left"
                style={{ background: C.ink }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={VIEW}
                transition={{ duration: 0.9, ease: EASE }}
              />
              {`Prêt à trouver la bonne thermopompe${NB}?`}
            </p>
            <Lines
              id="su-cta-titre"
              lines={[
                "Démarrez par",
                "vos critères.",
                <span key="s">
                  On s’occupe{" "}
                  <Marker color={C.ink} delay={0.6}>
                    <span className="hp-serif" style={{ color: C.cream }}>
                      du reste.
                    </span>
                  </Marker>
                </span>,
              ]}
              style={{ fontSize: "clamp(42px, 4.6vw, 84px)", lineHeight: 0.96, letterSpacing: "-0.05em", fontWeight: 600, margin: "26px 0 0", color: "#fff" }}
            />
            <div className="mt-10">
              <PillLink href="/trouver-ma-thermopompe" tone="ink">
                Commencer maintenant
              </PillLink>
            </div>
          </div>
        </div>

        {/* L'appareil dans la neige : sous le texte sur mobile, à droite sur grand écran. */}
        <div className="relative z-0 mt-10 h-[210px] sm:h-[320px] lg:absolute lg:bottom-0 lg:right-[-3%] lg:mt-0 lg:h-full lg:w-[64%]">
          <motion.div className="absolute inset-0" initial={{ opacity: 0, x: 140 }} whileInView={{ opacity: 1, x: 0 }} viewport={VIEW} transition={{ duration: 1.5, ease: EASE, delay: 0.15 }}>
            <motion.div className="absolute inset-0" style={reduce ? undefined : { y: unitY }}>
              <Image src="/images/thermomatch/thermomatch-cta-unit-transparent.png" alt="Thermopompe" fill sizes="(min-width: 1024px) 58vw, 100vw" style={{ objectFit: "contain", objectPosition: "right bottom" }} />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
