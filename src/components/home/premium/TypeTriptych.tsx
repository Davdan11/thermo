"use client";

import "./sections.css";
import { useRef, useState, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { MotionConfig, motion, useInView, useScroll, useTransform } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { AirLines, Arrow, C, CountUp, DISPLAY, EASE } from "./shared";
import { Lines, Eyebrow, Marker, VIEW } from "./suite-shared";

/* ==================================================================
   « Magasinez avec les bonnes informations » — trois panneaux photo
   sur l'encre du « test du froid ». Le panneau survolé (ou focalisé)
   s'élargit et révèle son libellé officiel et le nombre de modèles du
   catalogue ; chaque lien ouvre le catalogue filtré par type.
   ================================================================== */

/** count : nombre de modèles du catalogue pour ce type (null = pas de compteur affiché). */
export type TypePanel = { key: string; label: string; sub: string; href: string; src: string; count: number | null };

const SERIF: CSSProperties = { fontFamily: "var(--font-serif), Georgia, serif", fontStyle: "italic", fontWeight: 400, letterSpacing: "-0.02em" };

export function TypeTriptych({ types }: { types: TypePanel[] }) {
  const ref = useRef<HTMLElement>(null);
  const seen = useInView(ref, { once: true, margin: "0px 0px -20% 0px" });
  const reduce = useReduced();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  return (
    <MotionConfig reducedMotion="user">
      <section ref={ref} className="relative overflow-hidden" style={{ background: C.ink, color: C.cream, fontFamily: DISPLAY }} aria-labelledby="su-types-titre">
        <AirLines color={C.cream} opacity={0.045} className="pointer-events-none absolute inset-0 h-full w-full" />

        <div className="relative mx-auto max-w-[1440px] px-5 py-[13vh] sm:px-8 lg:px-12">
          <Eyebrow>Murales · Multizones · Centrales</Eyebrow>
          <Lines
            as="p"
            id="su-types-titre"
            lines={[
              "Magasinez avec",
              "les bonnes",
              <Marker key="m" delay={0.55}>
                <span className="hp-serif">informations.</span>
              </Marker>,
            ]}
            style={{ fontSize: "clamp(42px, 5.8vw, 100px)", lineHeight: 0.95, letterSpacing: "-0.045em", fontWeight: 600, margin: "26px 0 0" }}
          />

          <ul className="mt-14 flex flex-col gap-3 lg:mt-16 lg:h-[clamp(460px,64vh,640px)] lg:flex-row" style={{ listStyle: "none", padding: 0 }}>
            {types.map((t, i) => {
              const on = active === i;
              return (
                <motion.li
                  key={t.key}
                  data-active={on}
                  className="ps-panel relative h-[300px] min-w-0 overflow-hidden rounded-[22px] sm:h-[400px] lg:h-auto lg:basis-0"
                  style={{ flexGrow: on ? 2.3 : 1, background: C.navy }}
                  initial={{ clipPath: "inset(100% 0% 0% 0% round 22px)" }}
                  whileInView={{ clipPath: "inset(0% 0% 0% 0% round 22px)" }}
                  viewport={VIEW}
                  transition={{ duration: reduce ? 0 : 1.25, ease: EASE, delay: 0.1 + i * 0.13 }}
                >
                  <Link
                    href={t.href}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    className="su-focus group absolute inset-0 block rounded-[22px]"
                    style={{ color: C.cream, textDecoration: "none" }}
                  >
                    {/* Photo : parallaxe au défilement, léger zoom au survol. */}
                    <motion.div className="absolute inset-x-0 -inset-y-[8%]" style={reduce ? undefined : { y: imgY }}>
                      <Image
                        src={t.src}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 55vw, 100vw"
                        className="transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                        style={{ objectFit: "cover" }}
                      />
                    </motion.div>
                    <div aria-hidden="true" className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,20,25,0.5) 0%, rgba(10,20,25,0) 26%, rgba(10,20,25,0.12) 52%, rgba(10,20,25,0.92) 100%)" }} />
                    {/* Panneaux repliés un peu assombris sur grand écran. */}
                    <div aria-hidden="true" className="absolute inset-0 hidden transition-opacity duration-700 lg:block" style={{ background: C.ink, opacity: on ? 0 : 0.42 }} />

                    <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
                      <div className="flex items-start justify-between gap-4">
                        <span className="tabular-nums" style={{ ...SERIF, fontSize: 32, lineHeight: 1, color: on ? C.orange : C.cream, transition: "color .5s" }}>
                          0{i + 1}
                        </span>
                        <span className="ps-panel-arrow flex h-11 w-11 shrink-0 items-center justify-center rounded-full" style={{ border: "1px solid rgba(244,239,231,0.35)", color: C.cream }}>
                          <Arrow />
                        </span>
                      </div>
                      <div>
                        <p style={{ fontSize: "clamp(34px, 3vw, 52px)", fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 0.95, margin: 0, whiteSpace: "nowrap" }}>{t.label}</p>
                        <div className="ps-desc">
                          <div>
                            <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1 pt-4 text-[15px]" style={{ margin: 0 }}>
                              <span style={{ color: C.mute }}>{t.sub}</span>
                              {t.count != null && t.count > 0 && (
                                <>
                                  <span aria-hidden="true" className="hidden sm:inline" style={{ color: C.faint }}>
                                    ·
                                  </span>
                                  <span className="font-semibold">
                                    <CountUp value={t.count} play={seen} /> modèles au catalogue
                                  </span>
                                </>
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </section>
    </MotionConfig>
  );
}
