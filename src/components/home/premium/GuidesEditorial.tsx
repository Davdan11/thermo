"use client";

import { useRef, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { MotionConfig, motion, useScroll, useTransform } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { C, DISPLAY, EASE } from "./shared";
import { Lines, Eyebrow, NB, PillLink, VIEW } from "./suite-shared";

/* ==================================================================
   « Comprendre avant de choisir » — trois guides en colonnes décalées,
   comme une page de magazine. Les photos se dévoilent de bas en haut ;
   au défilement les colonnes se rejoignent doucement.
   ================================================================== */

const GUIDES = [
  { title: `Quelle thermopompe choisir pour mon type de maison${NB}?`, cat: "Les bases", img: "/images/thermomatch/thermomatch-hero-winter-home.png", href: "/guides" },
  { title: `Murale, multizone${NB}: laquelle est vraiment rentable${NB}?`, cat: "Les fiches", img: "/images/thermomatch/thermomatch-recommendation-home.png", href: "/guides" },
  { title: "Bien comparer les performances par grand froid", cat: "Les fiches", img: "/images/thermomatch/thermomatch-cold-climate-photo.png", href: "/guides" },
];

const SERIF: CSSProperties = { fontFamily: "var(--font-serif), Georgia, serif", fontStyle: "italic", fontWeight: 400, letterSpacing: "-0.02em" };
const OFFSET = ["", "lg:mt-20", "lg:mt-40"];

export function GuidesEditorial() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReduced();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y0 = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const y1 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const ys = [y0, y1, y2];

  return (
    <MotionConfig reducedMotion="user">
      <section ref={ref} className="relative overflow-hidden" style={{ background: "#fff", color: C.ink, fontFamily: DISPLAY }} aria-labelledby="su-guides-titre">
        <div className="relative mx-auto max-w-[1440px] px-5 pb-[16vh] pt-[13vh] sm:px-8 lg:px-12">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Eyebrow tone="light">Nos guides</Eyebrow>
              <Lines
                id="su-guides-titre"
                lines={["Comprendre", <span key="s" className="hp-serif">avant de choisir.</span>]}
                style={{ fontSize: "clamp(42px, 5.8vw, 100px)", lineHeight: 0.95, letterSpacing: "-0.045em", fontWeight: 600, margin: "26px 0 0" }}
              />
            </div>
            <PillLink href="/guides" tone="ink" className="shrink-0">
              Voir les guides
            </PillLink>
          </div>

          <ul className="mt-16 grid gap-14 sm:grid-cols-3 sm:gap-6 lg:mt-20 lg:gap-10" style={{ listStyle: "none", padding: 0 }}>
            {GUIDES.map((g, i) => (
              <motion.li key={g.title} className={OFFSET[i]} style={reduce ? undefined : { y: ys[i] }}>
                <Link href={g.href} className="su-focus group block rounded-[20px]" style={{ textDecoration: "none", color: C.ink }}>
                  <article>
                    <motion.div
                      className="relative aspect-[16/11] overflow-hidden rounded-[20px] sm:aspect-[4/5]"
                      style={{ background: C.navy }}
                      initial={{ clipPath: "inset(100% 0% 0% 0% round 20px)" }}
                      whileInView={{ clipPath: "inset(0% 0% 0% 0% round 20px)" }}
                      viewport={VIEW}
                      transition={{ duration: reduce ? 0 : 1.3, ease: EASE, delay: i * 0.12 }}
                    >
                      <motion.div className="absolute inset-0" initial={{ scale: 1.25 }} whileInView={{ scale: 1 }} viewport={VIEW} transition={{ duration: 1.9, ease: EASE, delay: i * 0.12 }}>
                        <Image
                          src={g.img}
                          alt={g.title}
                          fill
                          sizes="(min-width: 640px) 33vw, 100vw"
                          className="transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                          style={{ objectFit: "cover" }}
                        />
                      </motion.div>
                      <div aria-hidden="true" className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,20,25,0) 50%, rgba(10,20,25,0.72) 100%)" }} />
                      <span aria-hidden="true" className="absolute bottom-4 left-6 tabular-nums" style={{ ...SERIF, fontSize: 60, lineHeight: 1, color: C.cream }}>
                        0{i + 1}
                      </span>
                    </motion.div>
                    <p className="text-[12px] font-semibold uppercase" style={{ letterSpacing: "0.16em", color: C.orange, margin: "24px 0 0" }}>
                      {g.cat}
                    </p>
                    <p className="text-[21px] font-semibold leading-[1.25] transition-colors duration-300 group-hover:text-[#E54B17]" style={{ letterSpacing: "-0.02em", margin: "10px 0 0" }}>
                      {g.title}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold" style={{ color: C.orange }}>
                      <span className="su-link">Lire le guide</span>
                      <span aria-hidden="true" className="transition-transform duration-500 group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </article>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </MotionConfig>
  );
}
