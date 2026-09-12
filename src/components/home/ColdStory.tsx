"use client";

import "./cold-story.css";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform, type MotionValue } from "motion/react";

/* ==================================================================
   « Le test du froid » — section épinglée de l'accueil.
   Le défilement fait baisser la température de +8,3 °C à -25 °C et
   explique ce que mesure chaque seuil. Chiffres fournis par la page
   (catalogue), jamais écrits à la main.
   ================================================================== */

const C = {
  ink: "#0A1419",
  cream: "#F4EFE7",
  orange: "#E54B17",
  mute: "rgba(244,239,231,0.64)",
  faint: "rgba(244,239,231,0.40)",
  line: "rgba(244,239,231,0.14)",
};
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const fmt = (n: number) => n.toLocaleString("fr-CA");

const TOP = 8.3;
const BOTTOM = -25;
const pos = (t: number) => `${((TOP - t) / (TOP - BOTTOM)) * 100}%`;
const sign = (t: number) => {
  const r = Math.round(t);
  return r > 0 ? `+${r}` : r < 0 ? `−${-r}` : "0";
};
const TICKS = [
  { v: 8.3, label: "+8,3 °C" },
  { v: -8.3, label: "−8,3 °C" },
  { v: -15, label: "−15 °C" },
  { v: -25, label: "−25 °C" },
];

function stagesFor(with5F: number) {
  return [
    { at: "+8,3 °C", title: "La puissance sur la boîte", body: "Le chiffre écrit sur la boîte (ex. 12 000 BTU) est mesuré quand il fait doux dehors. En janvier, la thermopompe chauffe moins que ça." },
    { at: "−8,3 °C", title: "Il commence à faire froid", body: "Plus il fait froid dehors, moins une thermopompe donne de chaleur. Hydro-Québec publie combien chaque modèle en donne encore à −8 °C." },
    { at: "−15 °C", title: "Le vrai test de l’hiver", body: `Combien de chaleur elle donne encore par une nuit de janvier ordinaire. C’est LE chiffre à comparer : certifié, et affiché pour ${fmt(with5F)} modèles.` },
    { at: "−25 °C", title: "Les nuits de grand froid", body: "À ce froid-là, certaines thermopompes arrêtent de chauffer. Vérifiez jusqu’où elle fonctionne, et gardez un chauffage d’appoint pour les pires nuits." },
  ];
}

export function ColdStory({ coldClimate, with5F }: { coldClimate: number; with5F: number }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const temp = useTransform(scrollYProgress, [0.04, 0.92], [TOP, BOTTOM]);
  const [t, setT] = useState(TOP);
  useMotionValueEvent(temp, "change", (v) => setT(v));
  const warm = useTransform(scrollYProgress, [0.12, 0.5], [1, 0]);
  const coldScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const marker = useTransform(temp, (v) => pos(v));

  const stages = stagesFor(with5F);
  const stage = t > -2 ? 0 : t > -11.5 ? 1 : t > -20 ? 2 : 3;
  const s = stages[stage];

  return (
    <section ref={ref} className="cs-root relative" style={{ height: "420vh", background: C.ink, color: C.cream }} aria-labelledby="cs-titre">
      {/* Fondu depuis le héros : pas de coupure nette entre les deux photos ; défile avec la section. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[140px]" style={{ background: "linear-gradient(180deg, rgba(10,20,25,1) 0%, rgba(10,20,25,0) 100%)" }} />
      {/* Version lisible par les lecteurs d'écran et les moteurs : les quatre seuils d'un coup. */}
      <h2 id="cs-titre" className="sr-only">
        Le test du froid : ce que mesure chaque température
      </h2>
      <ol className="sr-only">
        {stages.map((st) => (
          <li key={st.at}>
            {st.at} — {st.title}. {st.body}
          </li>
        ))}
      </ol>

      <div className="cs-grain sticky top-0 h-screen overflow-hidden" aria-hidden="true">
        <motion.div className="absolute inset-0" style={{ scale: coldScale }}>
          <Image src="/images/thermomatch/thermomatch-cold-climate-photo.png" alt="" fill sizes="100vw" style={{ objectFit: "cover", objectPosition: "30% 50%" }} />
        </motion.div>
        <motion.div className="absolute inset-0" style={{ opacity: warm }}>
          <Image src="/images/hero-a-propos-maison-hiver.webp" alt="" fill sizes="100vw" style={{ objectFit: "cover", objectPosition: "50% 50%" }} />
        </motion.div>
        <div className="absolute inset-0" style={{ background: "rgba(10,20,25,0.58)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(10,20,25,0.9) 0%, rgba(10,20,25,0.35) 62%, rgba(10,20,25,0.2) 100%)" }} />

        <div className="relative z-10 mx-auto flex h-full max-w-[1440px] flex-col justify-between px-5 pb-8 pt-28 sm:px-8 lg:px-12 lg:pb-12">
          <div className="flex items-center justify-between text-[12px] font-medium uppercase" style={{ letterSpacing: "0.22em", color: C.mute }}>
            <span>(Le test du froid)</span>
            <span className="hidden sm:inline">Faites défiler pour baisser la température</span>
          </div>

          <div className="flex items-center justify-between gap-12">
            <div className="min-w-0 flex-1">
              <p className="font-medium tabular-nums" style={{ fontSize: "clamp(104px, 21vw, 330px)", lineHeight: 0.8, letterSpacing: "-0.07em", color: C.cream, margin: 0 }}>
                {sign(t)}
                <span style={{ fontSize: "0.3em", letterSpacing: "-0.02em", verticalAlign: "top", marginLeft: "0.1em" }}>°C</span>
              </p>
              <div className="relative mt-10 min-h-[200px] max-w-[560px]">
                <AnimatePresence mode="wait">
                  <motion.div key={stage} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.55, ease: EASE }}>
                    <p className="text-[13px] font-medium uppercase tabular-nums" style={{ letterSpacing: "0.2em", color: C.orange, margin: 0 }}>
                      {s.at}
                    </p>
                    <p style={{ fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1.05, margin: "12px 0 0" }}>{s.title}</p>
                    <p className="mt-4 text-[17px] leading-[1.6]" style={{ color: C.mute }}>
                      {s.body}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            <Gauge marker={marker} t={t} />
          </div>

          <div className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-between" style={{ borderTop: `1px solid ${C.line}` }}>
            <p className="text-[15px]" style={{ color: C.mute, margin: 0 }}>
              <strong className="font-semibold" style={{ color: C.cream }}>
                {fmt(coldClimate)}
              </strong>{" "}
              modèles certifiés climat froid au catalogue.
            </p>
            <Link href="/meilleures-thermopompes" tabIndex={-1} className="cs-link inline-flex w-fit items-center gap-2 text-[15px] font-semibold" style={{ color: C.cream }}>
              Voir les classements <Arrow />
            </Link>
          </div>
        </div>
      </div>

      {/* Lien accessible au clavier, hors du bloc décoratif masqué. */}
      <p className="sr-only">
        <Link href="/meilleures-thermopompes">Voir les classements des thermopompes grand froid</Link>
      </p>
    </section>
  );
}

function Gauge({ marker, t }: { marker: MotionValue<string>; t: number }) {
  return (
    <div className="relative hidden h-[52vh] w-[150px] shrink-0 lg:block">
      <div className="absolute bottom-0 left-[9px] top-0 w-px" style={{ background: C.line }} />
      <motion.div className="absolute left-[9px] top-0 w-px" style={{ background: C.orange, height: marker }} />
      {TICKS.map((k) => {
        const on = t <= k.v + 0.05;
        return (
          <div key={k.v} className="absolute left-0 flex -translate-y-1/2 items-center gap-4" style={{ top: pos(k.v) }}>
            <span className="block h-[19px] w-[19px] rounded-full border" style={{ borderColor: on ? C.orange : C.line, background: on ? C.orange : C.ink, transition: "background .4s, border-color .4s" }} />
            <span className="text-[13px] tabular-nums" style={{ color: on ? C.cream : C.faint, transition: "color .4s" }}>
              {k.label}
            </span>
          </div>
        );
      })}
      <motion.div className="absolute left-[3px] h-[13px] w-[13px] -translate-y-1/2 rounded-full" style={{ top: marker, background: C.cream, boxShadow: "0 0 0 6px rgba(229,75,23,0.35)" }} />
    </div>
  );
}

function Arrow() {
  return (
    <svg aria-hidden="true" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}
