"use client";

import { useRef, type CSSProperties } from "react";
import Image from "next/image";
import { MotionConfig, motion, useInView, useScroll, useTransform } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { C, CountUp, DISPLAY, EASE } from "./shared";
import { Lines, Eyebrow, Marker, NB, PillLink, VIEW } from "./suite-shared";

/* ==================================================================
   « Les aides financières, enfin plus simples » — papier crème après
   l'encre de ThermoMatch. La photo se dévoile ; la fiche montre les
   VRAIS chiffres de la liste officielle LogisVert d'Hydro-Québec :
   montant le plus élevé, répartition des jumelages par tranche de
   montant, nombre de jumelages, dates de la liste et de la vérification.
   Aucun montant d'un autre programme n'est affiché : on n'a pas de
   source officielle à jour pour les chiffrer.
   ================================================================== */

export type AidesStats = {
  /** Jumelages de la liste officielle. */
  count: number;
  /** Montant LogisVert le plus élevé de la liste. */
  max: number;
  /** Montant médian. */
  median: number;
  /** Part des jumelages par tranche de montant (0 à 1). */
  buckets: Array<{ label: string; share: number }>;
  /** « 17 juillet 2025 » */
  listDate: string | null;
  /** « 10 septembre 2026 » */
  checkedDate: string | null;
};

const ITEMS = [
  { title: "Programmes vérifiés", desc: "Données à jour et admissibilité claire." },
  { title: "Économies maximisées", desc: "Trouvez les aides qui s’appliquent à votre projet." },
  { title: "Moins de paperasse", desc: "On vous guide à chaque étape." },
];
const BUCKET_COLORS = [C.orange, C.ink, "#A0907E", "#D3C6B4"];

const SERIF: CSSProperties = { fontFamily: "var(--font-serif), Georgia, serif", fontStyle: "italic", fontWeight: 400, letterSpacing: "-0.02em" };
const fr = (n: number) => n.toLocaleString("fr-CA");

export function AidesLedger({ stats }: { stats: AidesStats }) {
  const ref = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const seen = useInView(cardRef, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReduced();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.18, 1.02]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
  const cardY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const buckets = stats.buckets.filter((b) => b.share > 0);

  return (
    <MotionConfig reducedMotion="user">
      <section ref={ref} className="relative overflow-hidden" style={{ background: C.cream, color: C.ink, fontFamily: DISPLAY }} aria-labelledby="su-aides-titre">
        <div className="relative mx-auto grid max-w-[1440px] items-center gap-14 px-5 py-[13vh] sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:px-12">
          {/* Texte */}
          <div>
            <Eyebrow tone="light">
              <span>
                LogisVert · liste officielle <span className="whitespace-nowrap">d’Hydro-Québec</span>
              </span>
            </Eyebrow>
            <Lines
              id="su-aides-titre"
              lines={[
                "Les aides financières,",
                <span key="s">
                  enfin plus{" "}
                  <Marker delay={0.6}>
                    <span className="hp-serif" style={{ color: C.cream }}>
                      simples.
                    </span>
                  </Marker>
                </span>,
              ]}
              style={{ fontSize: "clamp(40px, 3.7vw, 66px)", lineHeight: 0.98, letterSpacing: "-0.045em", fontWeight: 600, margin: "26px 0 0" }}
            />
            <p className="max-w-[470px] text-[17px] leading-[1.6]" style={{ color: C.inkMute, margin: "26px 0 0" }}>
              Nous vérifions pour vous les programmes d’aide disponibles au Québec. Le montant LogisVert, lui, est déjà connu pour chaque jumelage : c’est
              celui de la liste officielle.
            </p>

            <ol style={{ listStyle: "none", padding: 0, margin: "36px 0 0" }}>
              {ITEMS.map((it, i) => (
                <motion.li
                  key={it.title}
                  className="relative grid grid-cols-[52px_1fr] gap-x-4 py-5"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={VIEW}
                  transition={{ duration: 0.9, ease: EASE, delay: 0.15 + i * 0.12 }}
                >
                  <motion.span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 block h-px origin-left"
                    style={{ background: C.inkLine }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={VIEW}
                    transition={{ duration: 1.1, ease: EASE, delay: 0.1 + i * 0.12 }}
                  />
                  <span aria-hidden="true" className="tabular-nums" style={{ ...SERIF, fontSize: 28, lineHeight: 1.05, color: C.orange }}>
                    0{i + 1}
                  </span>
                  <span>
                    <span className="block text-[19px] font-semibold" style={{ letterSpacing: "-0.02em" }}>
                      {it.title}
                    </span>
                    <span className="mt-1 block text-[15px] leading-relaxed" style={{ color: C.inkMute }}>
                      {it.desc}
                    </span>
                  </span>
                </motion.li>
              ))}
            </ol>

            <div className="mt-10">
              <PillLink href="/subventions">Vérifier les subventions</PillLink>
            </div>
            <p className="max-w-[470px] text-[13px] leading-relaxed" style={{ color: C.inkMute, margin: "18px 0 0" }}>
              D’autres aides peuvent s’ajouter selon votre projet et votre municipalité : nous vous les confirmons dans la soumission.
            </p>
          </div>

          {/* Photo + fiche */}
          <div className="relative">
            <motion.div
              className="relative aspect-[4/5] overflow-hidden rounded-[28px] sm:aspect-[5/4] lg:ml-[16%] lg:aspect-[4/5]"
              initial={{ clipPath: "inset(0% 0% 100% 0% round 28px)" }}
              whileInView={{ clipPath: "inset(0% 0% 0% 0% round 28px)" }}
              viewport={VIEW}
              transition={{ duration: reduce ? 0 : 1.4, ease: EASE }}
            >
              <motion.div className="absolute inset-0" style={reduce ? undefined : { scale: imgScale, y: imgY }}>
                <Image src="/images/thermomatch/thermomatch-cold-climate-photo.png" alt="Thermopompe Mitsubishi Electric" fill sizes="(min-width: 1024px) 44vw, 100vw" style={{ objectFit: "cover", objectPosition: "36% 50%" }} />
              </motion.div>
              <div aria-hidden="true" className="absolute inset-0" style={{ background: "linear-gradient(200deg, rgba(10,20,25,0) 55%, rgba(10,20,25,0.35) 100%)" }} />
            </motion.div>

            <motion.div
              className="relative z-10 -mt-32 px-4 sm:-mt-40 sm:px-10 lg:absolute lg:bottom-[7%] lg:left-0 lg:mt-0 lg:w-[410px] lg:px-0"
              style={reduce ? undefined : { y: cardY }}
            >
              <motion.div
                ref={cardRef}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW}
                transition={{ duration: 1.1, ease: EASE, delay: 0.25 }}
                style={{ background: "#FDFCFA", borderRadius: 22, padding: "28px 28px 22px", border: `1px solid ${C.inkLine}`, boxShadow: "0 50px 90px -40px rgba(10,20,25,0.55)" }}
              >
                <p className="flex items-center gap-2 text-[12px] font-semibold" style={{ margin: 0 }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/images/hydroquebec.png" alt="" width={16} height={16} style={{ width: 16, height: 16, objectFit: "contain", maxWidth: "none" }} />
                  LogisVert · montant officiel
                </p>
                <p className="tabular-nums" style={{ fontSize: "clamp(36px, 3vw, 46px)", fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 1, margin: "12px 0 0", color: "#1A8F4E" }}>
                  Jusqu’à <CountUp value={stats.max} play={seen} />
                  {NB}$
                </p>
                <p className="text-[13px] leading-snug" style={{ color: C.inkMute, margin: "6px 0 0" }}>
                  le montant le plus élevé de la liste, selon le jumelage exact (unité extérieure et intérieure)
                </p>

                {/* Répartition des jumelages par tranche de montant. */}
                <p className="text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.14em", color: C.inkMute, margin: "22px 0 0" }}>
                  Répartition des jumelages admissibles
                </p>
                <div aria-hidden="true" className="mt-3 flex h-[10px] gap-[3px] overflow-hidden rounded-full">
                  {buckets.map((b, i) => (
                    <motion.span
                      key={b.label}
                      className="block h-full rounded-full"
                      style={{ width: `${b.share * 100}%`, background: BUCKET_COLORS[i % BUCKET_COLORS.length], transformOrigin: "0 50%" }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: seen ? 1 : 0 }}
                      transition={{ duration: 0.9, ease: EASE, delay: 0.5 + i * 0.3 }}
                    />
                  ))}
                </div>

                <ul style={{ listStyle: "none", padding: 0, margin: "14px 0 0" }}>
                  {buckets.map((b, i) => (
                    <li key={b.label} className="flex items-center justify-between gap-4 py-2 text-[14px]" style={{ borderTop: i ? `1px solid ${C.inkLine}` : undefined }}>
                      <span className="flex items-center gap-2.5">
                        <span aria-hidden="true" className="block h-2.5 w-2.5 shrink-0 rounded-[3px]" style={{ background: BUCKET_COLORS[i % BUCKET_COLORS.length] }} />
                        {b.label}
                      </span>
                      <span className="font-semibold tabular-nums">
                        <CountUp value={Math.round(b.share * 100)} play={seen} />
                        {NB}%
                      </span>
                    </li>
                  ))}
                </ul>

                <p className="text-[12px] leading-relaxed" style={{ color: C.inkMute, margin: "12px 0 0", paddingTop: 12, borderTop: `1px solid ${C.inkLine}` }}>
                  Montant médian : <strong style={{ color: C.ink }}>{fr(stats.median)}{NB}$</strong> · {fr(stats.count)} jumelages
                  {stats.listDate ? ` · liste du ${stats.listDate}` : ""}
                  {stats.checkedDate ? `, vérifiée le ${stats.checkedDate}` : ""}.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
