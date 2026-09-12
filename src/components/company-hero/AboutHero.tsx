"use client";

import "./company-hero.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { HC, HERO_EASE, HeroActions, HeroButton, HeroEyebrow, HeroFade, HeroLead, HeroShell, HeroStats, HeroTitle, Serif, type HeroStat } from "@/components/hero/HeroKit";
import { cxLabel } from "./HeroLinkButton";

/* ==================================================================
   Héros de /a-propos : « rendre l'achat plus clair ».
   Visuel : la maison d'hiver dans un cadre qui s'ouvre, et une fiche
   technique qui se traduit ligne par ligne en mots de tous les jours.
   Une fois traduite, la mise en évidence circule d'une ligne à l'autre.
   Chiffres : ceux du catalogue, fournis par la page.
   ================================================================== */

const TERMS = [
  { tech: "SEER2", plain: "Efficacité en climatisation, sur toute une saison" },
  { tech: "HSPF2", plain: "Efficacité en chauffage, sur toute une saison" },
  { tech: "COP à −15 °C", plain: "Rendement quand le froid mord vraiment" },
  { tech: "BTU/h", plain: "Puissance que l’appareil peut livrer" },
];

export function AboutHero({ stats }: { stats: { eligible: number; brands: number; coldClimate: number } }) {
  const items: HeroStat[] = [
    { value: stats.eligible, label: "modèles admissibles" },
    { value: stats.brands, label: "marques au Québec" },
    { value: stats.coldClimate, label: "certifiés grand froid" },
  ].filter((s) => s.value > 0);

  return (
    <HeroShell size="lg" snow={0.3} labelledBy="apropos-titre" visual={<ClarityVisual />}>
      <HeroEyebrow>À propos</HeroEyebrow>
      <HeroTitle
        id="apropos-titre"
        style={{ fontSize: "clamp(40px, 5vw, 88px)" }}
        lines={[
          "Rendre l’achat",
          "d’une thermopompe",
          <Serif key="s">
            plus clair<span style={{ color: HC.orange }}>.</span>
          </Serif>,
        ]}
      />
      <HeroLead>Nous construisons une meilleure façon de découvrir, comparer et acheter les systèmes offerts au Québec.</HeroLead>
      <HeroActions>
        <HeroButton href="/thermopompes">Comparer les modèles</HeroButton>
        <HeroButton href="/comment-ca-marche" variant="ghost">
          Comment ça marche
        </HeroButton>
      </HeroActions>
      <HeroStats items={items} delay={1.05} />
    </HeroShell>
  );
}

function ClarityVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const cardY = useTransform(scrollYProgress, [0, 1], [36, -36]);

  // Entrée : chaque ligne se traduit à tour de rôle.
  const [resolved, setResolved] = useState(0);
  useEffect(() => {
    if (reduce) return;
    const ids = TERMS.map((_, i) => window.setTimeout(() => setResolved(i + 1), 1500 + i * 520));
    return () => ids.forEach((id) => window.clearTimeout(id));
  }, [reduce]);
  const shown = reduce ? TERMS.length : resolved;

  // Puis la mise en évidence circule doucement.
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (reduce || shown < TERMS.length) return;
    const t = window.setInterval(() => setActive((a) => (a + 1) % TERMS.length), 2800);
    return () => window.clearInterval(t);
  }, [reduce, shown]);

  return (
    <div ref={ref} className="relative pb-2 lg:pb-8 lg:pl-12">
      <motion.div
        className="relative h-[280px] overflow-hidden rounded-[26px] sm:h-[380px] lg:h-[min(60svh,540px)]"
        initial={reduce ? false : { clipPath: "inset(14% 10% 14% 10% round 26px)", opacity: 0 }}
        animate={{ clipPath: "inset(0% 0% 0% 0% round 26px)", opacity: 1 }}
        transition={{ duration: 1.6, ease: HERO_EASE, delay: 0.3 }}
      >
        <motion.div className="absolute inset-x-0 -bottom-[7%] -top-[7%]" style={reduce ? undefined : { y: imgY }}>
          <Image
            src="/images/hero-a-propos-maison-hiver.webp"
            alt="Maison en bois un soir d’hiver : unité murale au salon et thermopompe extérieure dans la neige"
            fill
            priority
            sizes="(min-width: 1024px) 46vw, 100vw"
            style={{ objectFit: "cover", objectPosition: "74% 50%" }}
          />
        </motion.div>
        <div aria-hidden="true" className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(10,20,25,0) 40%, rgba(10,20,25,0.6) 100%)" }} />
      </motion.div>

      {/* Fiche technique traduite */}
      <motion.div style={reduce ? undefined : { y: cardY }} className="relative z-10 mx-3 -mt-20 sm:mx-8 sm:-mt-24 lg:absolute lg:bottom-0 lg:left-0 lg:mx-0 lg:mt-0 lg:w-[min(450px,82%)]">
        <HeroFade delay={0.9}>
          <div
            className="rounded-[22px] p-5 sm:p-6"
            style={{ background: "rgba(16,34,45,0.82)", border: `1px solid ${HC.line}`, backdropFilter: "blur(18px) saturate(130%)", WebkitBackdropFilter: "blur(18px) saturate(130%)", boxShadow: "0 40px 80px -40px rgba(0,0,0,0.8)" }}
          >
            <div className="flex items-center justify-between gap-4">
              <span style={cxLabel}>Fiche technique</span>
              <span className="flex items-center gap-2" style={{ ...cxLabel, color: HC.cream }}>
                <span aria-hidden="true" className="inline-block h-px w-6" style={{ background: HC.orange }} />
                En clair
              </span>
            </div>
            <dl className="mt-4" style={{ margin: "16px 0 0" }}>
              {TERMS.map((t, i) => {
                const done = i < shown;
                const on = done && (reduce || shown < TERMS.length || i === active);
                return (
                  <div key={t.tech} className="relative grid grid-cols-[92px_minmax(0,1fr)] items-center gap-3 py-3 sm:grid-cols-[110px_minmax(0,1fr)]" style={{ borderTop: `1px solid ${HC.line}` }}>
                    {on && !reduce && shown === TERMS.length && (
                      <motion.span layoutId="cx-about-mark" aria-hidden="true" className="absolute -left-5 top-3 bottom-3 w-[2px] sm:-left-6" style={{ background: HC.orange }} transition={{ duration: 0.7, ease: HERO_EASE }} />
                    )}
                    <dt className="text-[12.5px] font-medium" style={{ fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace", color: done ? HC.faint : HC.mute, letterSpacing: "0.02em", transition: "color 0.6s" }}>
                      {t.tech}
                    </dt>
                    <dd className="relative min-h-[22px] text-[14.5px] leading-snug" style={{ margin: 0 }}>
                      {done ? (
                        <motion.span className="block" initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: HERO_EASE }} style={{ color: on ? HC.cream : HC.mute, transition: "color 0.6s" }}>
                          {t.plain}
                        </motion.span>
                      ) : (
                        <span aria-hidden="true" className="cx-skel block h-[9px] rounded-full" style={{ width: `${88 - i * 11}%` }} />
                      )}
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </HeroFade>
      </motion.div>
    </div>
  );
}
