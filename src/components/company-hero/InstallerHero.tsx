"use client";

import "./company-hero.css";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { animate, motion, useMotionValue, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { HC, HERO_EASE, HeroButton, HeroEyebrow, HeroFade, HeroLead, HeroShell, HeroTitle, Serif } from "@/components/hero/HeroKit";
import { cxLabel } from "./HeroLinkButton";

/* ==================================================================
   Héros de /espace-installateur (la page entière tient dans le héros).
   Fond : la maison d'hiver, qui recule au chargement puis glisse au
   défilement. Visuel : le parcours « de la première estimation à
   l'installation », parcouru en boucle par un point orange.
   Le portail n'est pas encore ouvert : on le dit clairement.
   ================================================================== */

const STEPS = [
  { t: "Première estimation", d: "Le client arrive avec son dossier ThermoMatch." },
  { t: "Soumission", d: "Vous validez le calcul de charge." },
  { t: "Rendez-vous", d: "Coordonné pour l’instant avec notre équipe." },
  { t: "Installation", d: "Réalisée par un installateur licencié RBQ." },
];

export function InstallerHero() {
  return (
    <HeroShell size="lg" labelledBy="espace-titre" background={<Backdrop />} visual={<Journey />} columns="lg:grid-cols-[1fr_0.9fr]">
      <HeroEyebrow>Espace installateur</HeroEyebrow>
      <HeroTitle id="espace-titre" size="lg" lines={["Espace", <Serif key="s">Partenaire</Serif>]} />
      <HeroLead>Un espace pour gérer vos rendez-vous et vos soumissions est en préparation.</HeroLead>
      <HeroFade delay={0.8} className="mt-8 max-w-[560px]">
        <div className="rounded-[22px] p-6" style={{ background: "rgba(16,34,45,0.72)", border: `1px solid ${HC.line}`, backdropFilter: "blur(16px) saturate(130%)", WebkitBackdropFilter: "blur(16px) saturate(130%)" }}>
          <p className="flex items-center gap-3 text-[16px] font-semibold" style={{ margin: 0 }}>
            <span aria-hidden="true" className="cx-beat inline-block h-2 w-2 shrink-0 rounded-full" style={{ background: HC.orange }} />
            Le portail partenaire n’est pas encore ouvert.
          </p>
          <p className="text-[15px] leading-[1.6]" style={{ color: HC.mute, margin: "10px 0 0" }}>
            Les rendez-vous et soumissions sont pour l’instant coordonnés directement avec notre équipe. Vous êtes installateur licencié RBQ et voulez rejoindre le réseau&nbsp;?
          </p>
          <div className="mt-5">
            <HeroButton href="/partenaires#candidature">Déposer une candidature</HeroButton>
          </div>
        </div>
      </HeroFade>
    </HeroShell>
  );
}

function Backdrop() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  return (
    <div ref={ref} aria-hidden="true" className="absolute inset-0">
      <motion.div className="absolute inset-0" style={reduce ? undefined : { y }}>
        <motion.div className="absolute inset-0" initial={reduce ? false : { scale: 1.12 }} animate={{ scale: 1 }} transition={{ duration: 2.6, ease: HERO_EASE }}>
          <Image src="/images/thermomatch/thermomatch-hero-winter-home.png" alt="" fill priority sizes="100vw" style={{ objectFit: "cover", objectPosition: "70% 60%" }} />
        </motion.div>
      </motion.div>
      <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(10,20,25,0.95) 0%, rgba(10,20,25,0.78) 42%, rgba(10,20,25,0.45) 70%, rgba(10,20,25,0.6) 100%)" }} />
      <div className="absolute inset-x-0 top-0 h-[30%]" style={{ background: "linear-gradient(180deg, rgba(10,20,25,0.7) 0%, rgba(10,20,25,0) 100%)" }} />
      <div className="absolute inset-x-0 bottom-0 h-[40%]" style={{ background: "linear-gradient(0deg, #0A1419 0%, rgba(10,20,25,0) 100%)" }} />
      <div className="absolute inset-0 lg:hidden" style={{ background: "rgba(10,20,25,0.45)" }} />
    </div>
  );
}

function Journey() {
  const reduce = useReducedMotion();
  const p = useMotionValue(reduce ? 1 : 0);
  useEffect(() => {
    if (reduce) {
      p.set(1);
      return;
    }
    // Premier passage après l'entrée, puis en boucle, sans hâte.
    const c = animate(p, [0, 1], { duration: 6.5, ease: "linear", delay: 1.4, repeat: Infinity, repeatDelay: 1.6 });
    return () => c.stop();
  }, [p, reduce]);
  const top = useTransform(p, (v) => `${v * 100}%`);

  return (
    <HeroFade delay={0.6} className="lg:pl-6">
      <div className="rounded-[26px] p-6 sm:p-8" style={{ background: "rgba(10,20,25,0.55)", border: `1px solid ${HC.line}`, backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)" }}>
        <h2 style={{ fontSize: "clamp(24px, 2.2vw, 32px)", lineHeight: 1.1, letterSpacing: "-0.03em", fontWeight: 600, margin: 0 }}>
          L’excellence, <Serif>de la première estimation</Serif> à l’installation.
        </h2>
        <div className="relative mt-7 pl-8">
          {/* Rail et point qui le parcourt */}
          <span aria-hidden="true" className="absolute bottom-[14px] left-[5px] top-[10px] w-px" style={{ background: HC.line }} />
          <span aria-hidden="true" className="absolute bottom-[14px] left-[5px] top-[10px] w-px">
            <motion.span className="absolute left-[-4px] h-[9px] w-[9px] rounded-full" style={{ top, background: HC.orange, marginTop: -4 }} />
          </span>
          <ol style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {STEPS.map((s, i) => (
              <Station key={s.t} i={i} n={STEPS.length} p={p} title={s.t} desc={s.d} />
            ))}
          </ol>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-4 pt-5" style={{ borderTop: `1px solid ${HC.line}` }}>
          <Image src="/images/logo-thermomatch-tm-720.webp" alt="ThermoMatch" width={720} height={247} className="h-[22px] w-auto" />
          <span style={cxLabel}>Propulsé par ThermoMatch</span>
        </div>
      </div>
    </HeroFade>
  );
}

function Station({ i, n, p, title, desc }: { i: number; n: number; p: MotionValue<number>; title: string; desc: string }) {
  const at = i / (n - 1);
  const opacity = useTransform(p, [Math.max(0, at - 0.04), at + 0.01], [0.42, 1]);
  const mark = useTransform(p, [Math.max(0, at - 0.04), at + 0.01], [HC.line, HC.orange]);
  return (
    <motion.li className="relative pb-5 last:pb-0" style={{ opacity }}>
      <motion.span aria-hidden="true" className="absolute left-[-32px] top-[6px] block h-[11px] w-[11px] rounded-[3px]" style={{ background: HC.ink, border: "1.5px solid", borderColor: mark }} />
      <p className="text-[16px] font-semibold" style={{ margin: 0, letterSpacing: "-0.01em" }}>
        {title}
      </p>
      <p className="text-[14px]" style={{ color: HC.mute, margin: "3px 0 0" }}>
        {desc}
      </p>
    </motion.li>
  );
}
