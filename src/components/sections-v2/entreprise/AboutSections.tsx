"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { Arrow } from "@/components/heroes-v2/entreprise/shared";
import { ClipReveal, EASE, MaskLines, Marquee, ReadAloud, Reveal, Rule, Shell, useReduced } from "./kit";

/* ==================================================================
   /a-propos — la suite du « Manifeste », en livret.
   Sable, brun profond, terre cuite ; romain à empattements pour les
   énoncés, mono de machine à écrire pour les folios. Chaque section
   est un chapitre (I, II, III), puis la quatrième de couverture et le
   colophon qui défile. Mêmes gestes que le héros : la phrase qui
   s'allume mot à mot (ici au défilement), la bande photo qui reprend
   ses couleurs, les filets qui se tracent.
   ================================================================== */

const C = {
  sand: "#EADBC8",
  paper: "#F2E7D9",
  brown: "#2B1D14",
  mute: "rgba(43,29,20,0.74)",
  ghost: "rgba(43,29,20,0.18)",
  terra: "#B5523B",
  terraLight: "#E7A088",
  line: "rgba(43,29,20,0.2)",
  sandMute: "rgba(234,219,200,0.78)",
  sandLine: "rgba(234,219,200,0.2)",
  cream: "#FFF6EC",
};

const WRAP = "mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12";

/** Folio de chapitre : numéro à gauche, rubrique à droite, filet qui se trace. */
function Folio({ left, right, color, line }: { left: string; right?: ReactNode; color: string; line: string }) {
  return (
    <div>
      <div className="xs-mono flex items-center justify-between gap-4 text-[11.5px] uppercase" style={{ letterSpacing: "0.18em", color }}>
        <span aria-hidden="true">{left}</span>
        {right}
      </div>
      <Rule color={line} className="mt-3" />
    </div>
  );
}

const PRINCIPLES = [
  { key: "Clarté", text: "Nous vulgarisons les spécifications et les performances pour que chaque comparaison devienne compréhensible et utile." },
  { key: "Transparence", text: "Nous présentons les informations telles qu'elles sont, sans parti pris, pour vous aider à évaluer les options en toute confiance." },
  { key: "Rigueur", text: "Nos contenus s'appuient sur des données techniques vérifiées et des méthodes claires, afin d'assurer des résultats cohérents et fiables." },
];

const STEPS = ["Comprendre", "Comparer", "Planifier", "Installer"];
const TRUST = ["Toutes les grandes marques", "Données techniques expliquées", "Aides vérifiées", "Installation prise en charge"];

/** `avis` : les avis Google (composant serveur), entre le chapitre III et la quatrième de couverture. Rien s'ils sont absents. */
export function AboutSections({ avis }: { avis?: ReactNode } = {}) {
  return (
    <Shell>
      <Mission />
      <Brands />
      <Experience />
      {avis}
      <BackCover />
      <Colophon />
    </Shell>
  );
}

/* ---------- Chapitre I : la mission ---------- */
function Mission() {
  return (
    <section aria-labelledby="ap-mission" style={{ background: C.sand, color: C.brown }}>
      <div className={`${WRAP} pb-[clamp(72px,9vw,140px)] pt-[clamp(64px,7vw,110px)]`}>
        <Folio left="Chapitre I" color={C.mute} line={C.brown} right={<p className="m-0" style={{ color: C.terra }}>Notre mission</p>} />

        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div className="relative">
            <span aria-hidden="true" className="xs-serif pointer-events-none absolute -left-2 -top-10 select-none leading-none lg:-top-16" style={{ fontSize: "clamp(160px, 17vw, 300px)", color: "rgba(181,82,59,0.12)" }}>
              I
            </span>
            <h2 id="ap-mission" className="xs-serif relative" style={{ fontSize: "clamp(48px, 5.6vw, 96px)", lineHeight: 0.96, letterSpacing: "-0.02em", margin: 0 }}>
              <MaskLines lines={["Comprendre", <em key="a" style={{ color: C.terra }}>avant d&apos;acheter.</em>]} />
            </h2>
          </div>

          <div className="lg:pt-3">
            <p className="xs-serif" style={{ fontSize: "clamp(30px, 3.3vw, 56px)", lineHeight: 1.08, letterSpacing: "-0.01em", margin: 0 }}>
              <ReadAloud text="Les thermopompes sont efficaces, mais les informations ne le sont pas toujours." from={C.ghost} to={C.brown} accent={C.terra} accentFrom={9} />
            </p>
            <Reveal delay={0.1} className="mt-8 max-w-[640px] lg:mt-10">
              <p className="xs-dropcap text-[17px] leading-[1.7] sm:text-[18px]" style={{ color: C.mute, margin: 0 }}>
                Nous traduisons les fiches techniques en repères utiles, afin que vous puissiez comparer les modèles, évaluer ce qui compte vraiment et faire un choix adapté à votre maison.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Trois principes, numérotés comme des articles */}
        <div className="mt-16 grid gap-0 lg:mt-24 lg:grid-cols-3">
          {PRINCIPLES.map((p, i) => (
            <motion.article
              key={p.key}
              className="relative py-8 lg:px-8 lg:py-2 lg:first:pl-0 lg:last:pr-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.9, ease: EASE, delay: i * 0.14 }}
            >
              <Rule color={C.line} className="absolute inset-x-0 top-0 lg:hidden" delay={i * 0.14} />
              {i > 0 && (
                <motion.span aria-hidden="true" className="absolute bottom-0 left-0 top-0 hidden w-px origin-top lg:block" style={{ background: C.line }} initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: EASE, delay: 0.2 + i * 0.14 }} />
              )}
              <p aria-hidden="true" className="xs-mono text-[12px] uppercase" style={{ letterSpacing: "0.16em", color: C.terra, margin: 0 }}>
                § {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="xs-serif" style={{ fontSize: "clamp(38px, 3.4vw, 54px)", lineHeight: 1, margin: "14px 0 0", letterSpacing: "-0.01em" }}>
                {p.key}
              </h3>
              <p className="max-w-[400px] text-[16px] leading-[1.7]" style={{ color: C.mute, margin: "16px 0 0" }}>
                {p.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Chapitre II : toutes les marques (page brune, planche) ---------- */
function Brands() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReduced();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [70, -70]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [2.6, 0]);
  const lines = ["Toutes les marques.", "Les bonnes données.", "Une expérience simple."];

  return (
    <section aria-labelledby="ap-marques" className="relative overflow-hidden" style={{ background: C.brown, color: C.sand }}>
      <div className={`${WRAP} py-[clamp(72px,9vw,140px)]`}>
        <Folio left="Chapitre II" color={C.sandMute} line={C.sandLine} right={<span aria-hidden="true">Planche I</span>} />

        <div ref={ref} className="mt-12 grid items-center gap-14 lg:mt-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div>
            <h2 id="ap-marques" className="xs-serif" style={{ fontSize: "clamp(42px, 4.4vw, 76px)", lineHeight: 1, letterSpacing: "-0.015em", margin: 0 }}>
              <MaskLines lines={lines} stagger={0.12} lineStyle={(i) => (i === 1 ? { color: C.terraLight, fontStyle: "italic" } : undefined)} />
            </h2>
            <motion.span aria-hidden="true" className="mt-8 block h-[3px] w-14 origin-left" style={{ background: C.terra }} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: EASE, delay: 0.5 }} />
            <Reveal delay={0.15} className="mt-8 flex max-w-[480px] flex-col gap-5">
              <p className="text-[17px] leading-[1.65]" style={{ color: C.sandMute, margin: 0 }}>
                Nous rassemblons les modèles des plus grandes marques et les données techniques essentielles pour les comparer équitablement.
              </p>
              <p className="text-[17px] leading-[1.65]" style={{ color: C.sandMute, margin: 0 }}>
                ThermoMatch vous guide vers les systèmes qui répondent à vos besoins, à votre maison et à votre budget.
              </p>
            </Reveal>
          </div>

          {/* La planche : l'écran monté sur un passe-partout sable */}
          <motion.figure className="relative m-0" style={reduce ? undefined : { y, rotate }}>
            <ClipReveal className="relative p-2.5 sm:p-4" style={{ background: C.sand, boxShadow: "0 60px 90px -50px rgba(0,0,0,0.8)" }} duration={1.3}>
              <Image src="/images/ui-mockup.png" alt="Comparaison de modèles et ThermoMatch" width={1536} height={1024} loading="eager" sizes="(min-width: 1024px) 56vw, 92vw" style={{ display: "block", width: "100%", height: "auto" }} />
              <div className="xs-mono flex items-center justify-between gap-3 pt-2.5 text-[10.5px] uppercase sm:pt-3.5" style={{ letterSpacing: "0.16em", color: C.mute }} aria-hidden="true">
                <span>Planche I</span>
                <span>Comparer · ThermoMatch</span>
              </div>
            </ClipReveal>
          </motion.figure>
        </div>
      </div>
    </section>
  );
}

/* ---------- Chapitre III : du choix à l'installation (bande photo, étapes) ---------- */
function Experience() {
  const stepsRef = useRef<HTMLOListElement>(null);
  const reduce = useReduced();
  const { scrollYProgress } = useScroll({ target: stepsRef, offset: ["start 0.95", "end 0.55"] });
  const photoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: photoP } = useScroll({ target: photoRef, offset: ["start end", "end start"] });
  const py = useTransform(photoP, [0, 1], ["-7%", "7%"]);

  return (
    <section aria-labelledby="ap-experience" style={{ background: C.paper, color: C.brown }}>
      <div className={`${WRAP} py-[clamp(72px,9vw,140px)]`}>
        <Folio left="Chapitre III" color={C.mute} line={C.brown} right={<p className="m-0" style={{ color: C.terra }}>Du choix à l&apos;installation</p>} />

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-[minmax(0,4.2fr)_minmax(0,7.8fr)] lg:gap-16">
          <div className="flex flex-col items-start">
            <h2 id="ap-experience" className="xs-serif" style={{ fontSize: "clamp(40px, 3.9vw, 66px)", lineHeight: 1.02, letterSpacing: "-0.015em", margin: 0 }}>
              <MaskLines lines={["Une expérience", "unifiée, de la sélection", <em key="m" style={{ color: C.terra }}>à la maison.</em>]} />
            </h2>
            <motion.span aria-hidden="true" className="mt-8 block h-[3px] w-14 origin-left" style={{ background: C.terra }} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: EASE, delay: 0.4 }} />
            <Reveal delay={0.1} className="mt-8 max-w-[470px]">
              <p className="text-[17px] leading-[1.7]" style={{ color: C.mute, margin: 0 }}>
                Nous documentons, nous comparons, puis nous vous mettons en relation avec un installateur partenaire licencié RBQ de votre région. Nous restons l&apos;intermédiaire entre vous et lui : le prix se fait cas par cas, après évaluation de votre maison, et vos coordonnées ne sont jamais vendues.
              </p>
              <Link href="/comment-ca-marche" className="xs-ring-dark mt-9 inline-flex items-center gap-3 px-6 py-4 text-[15px] font-semibold transition-colors duration-300 hover:bg-[#B5523B]" style={{ background: C.brown, color: C.sand, borderRadius: 2 }}>
                Comment ça marche <Arrow className="xs-arrow" />
              </Link>
            </Reveal>
          </div>

          <div className="min-w-0">
            {/* Bande photo en trois volets, comme sous le héros */}
            <div ref={photoRef} className="relative aspect-[1.45/1] overflow-hidden sm:aspect-[2.15/1]" style={{ background: "#d8c6ae" }}>
              <motion.div className="absolute inset-x-0 -bottom-[8%] -top-[8%]" style={reduce ? undefined : { y: py }}>
                <motion.div className="absolute inset-0" initial={{ filter: "grayscale(0.9) sepia(0.35) brightness(1.05) contrast(0.9)" }} whileInView={{ filter: "grayscale(0) sepia(0) brightness(1) contrast(1)" }} viewport={{ once: true, amount: 0.6 }} transition={{ duration: 1.6, ease: "easeOut", delay: 0.9 }}>
                  <Image src="/images/about-experience-house.jpg" alt="Maison contemporaine avec thermopompe extérieure" fill sizes="(min-width: 1024px) 60vw, 92vw" style={{ objectFit: "cover", objectPosition: "center" }} />
                </motion.div>
              </motion.div>
              {[0, 1, 2].map((k) => (
                <motion.span key={k} aria-hidden="true" className="absolute inset-y-0 block origin-top" style={{ left: `${k * 33.333}%`, width: "33.4%", background: C.paper }} initial={{ scaleY: 1 }} whileInView={{ scaleY: 0 }} viewport={{ once: true, amount: 0.35 }} transition={{ duration: 1.1, ease: EASE, delay: 0.1 + k * 0.14 }} />
              ))}
              {[1, 2].map((k) => (
                <span key={k} aria-hidden="true" className="absolute inset-y-0 block w-[3px] sm:w-1" style={{ left: `calc(${k * 33.333}% - 2px)`, background: C.paper }} />
              ))}
            </div>

            {/* Les quatre étapes, parcourues au défilement */}
            <div className="relative mt-6">
              <span aria-hidden="true" className="absolute inset-x-0 top-0 hidden h-px sm:block" style={{ background: C.line }} />
              <motion.span aria-hidden="true" className="absolute inset-x-0 top-0 hidden h-[2px] origin-left sm:block" style={{ background: C.terra, scaleX: reduce ? 1 : scrollYProgress }} />
              <ol ref={stepsRef} className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-4" style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {STEPS.map((s, i) => (
                  <Step key={s} i={i} label={s} p={scrollYProgress} reduce={reduce} />
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Step({ i, label, p, reduce }: { i: number; label: string; p: MotionValue<number>; reduce: boolean }) {
  const at = i / STEPS.length;
  const color = useTransform(p, [at, at + 0.12], [C.ghost, C.brown]);
  const num = useTransform(p, [at, at + 0.12], ["rgba(181,82,59,0.35)", C.terra]);
  return (
    <li className="pt-4 sm:pt-5" style={{ borderTop: `1px solid ${C.line}` }}>
      <motion.span className="xs-mono block text-[12px]" style={{ letterSpacing: "0.14em", color: reduce ? C.terra : num }}>
        {String(i + 1).padStart(2, "0")}
      </motion.span>
      <motion.span className="xs-serif mt-1 block text-[30px] leading-none sm:text-[34px]" style={{ color: reduce ? C.brown : color }}>
        {label}
      </motion.span>
    </li>
  );
}

/* ---------- Quatrième de couverture ---------- */
function BackCover() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReduced();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x1 = useTransform(scrollYProgress, [0, 1], ["3%", "-3%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-2%", "4%"]);

  return (
    <section aria-labelledby="ap-cta" className="relative overflow-hidden" style={{ background: C.terra, color: C.cream }}>
      <div ref={ref} className={`${WRAP} py-[clamp(72px,9vw,150px)]`}>
        <Folio left="Quatrième de couverture" color="rgba(255,246,236,0.82)" line="rgba(255,246,236,0.35)" right={<span aria-hidden="true" className="hidden sm:inline">Manifeste · N°&nbsp;01</span>} />
        <h2 id="ap-cta" className="xs-serif mt-12 lg:mt-16" style={{ fontSize: "clamp(46px, 7.4vw, 136px)", lineHeight: 0.95, letterSpacing: "-0.025em", margin: 0 }}>
          <motion.span className="block max-lg:!transform-none" style={reduce ? undefined : { x: x1 }}>
            <MaskLines
              lines={[
                <span key="l1">
                  <span aria-hidden="true" style={{ color: C.brown }}>
                    «&nbsp;
                  </span>
                  Trouvez la thermopompe
                </span>,
              ]}
            />
          </motion.span>
          <motion.span className="block pl-[0.6em] max-lg:!transform-none sm:pl-[8vw]" style={reduce ? undefined : { x: x2 }}>
            <MaskLines
              delay={0.12}
              lines={[
                <span key="l2">
                  <em>adaptée à votre maison.</em>
                  <span aria-hidden="true" style={{ color: C.brown }}>
                    &nbsp;»
                  </span>
                </span>,
              ]}
            />
          </motion.span>
        </h2>
        <Reveal delay={0.3} className="mt-12 flex flex-wrap items-center gap-6 lg:mt-16">
          <Link href="/trouver-ma-thermopompe" className="xs-ring inline-flex min-h-[62px] items-center gap-4 px-7 text-[16px] font-semibold transition-colors duration-300 hover:bg-[#FFF6EC] hover:text-[#2B1D14]" style={{ background: C.brown, color: C.cream, borderRadius: 2 }}>
            Commencer ma recherche <Arrow className="xs-arrow" size={18} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Colophon : les engagements, en bandeau ---------- */
function Colophon() {
  return (
    <div style={{ background: C.brown, color: C.sand, borderTop: `1px solid ${C.sandLine}` }}>
      <Marquee seconds={46} className="py-5 sm:py-6">
        <ul className="flex shrink-0 items-center" style={{ listStyle: "none", margin: 0, padding: 0 }}>
          {TRUST.map((t) => (
            <li key={t} className="flex items-center">
              <span className="xs-serif whitespace-nowrap px-6 text-[26px] italic sm:px-10 sm:text-[34px]">{t}</span>
              <span aria-hidden="true" className="block h-[7px] w-[7px]" style={{ background: C.terra }} />
            </li>
          ))}
        </ul>
      </Marquee>
    </div>
  );
}
