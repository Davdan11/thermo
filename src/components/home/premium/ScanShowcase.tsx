"use client";

import "../hero-premium.css";
import "./sections.css";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useInView, useScroll, useTransform } from "motion/react";
import { Camera } from "lucide-react";
import { ThermoScanBadge } from "@/components/thermoscan/ThermoScanPromo";
import { Arrow, C, DISPLAY, EASE, RevealLines } from "./shared";
import { useReduced } from "@/components/heroes-v2/outils/motion";

/* ==================================================================
   ThermoScan — un téléphone rejoue le scan en trois temps, synchronisé
   avec la liste 01-02-03 (défilement automatique à l'écran, ou clic).
   Même texte et mêmes liens que l'ancien bandeau. Aucune valeur
   inventée : les champs lus restent génériques (« Lu sur la plaque »).
   ================================================================== */

const STEPS = [
  { title: "Photographiez l’étiquette", text: "La plaque signalétique de votre appareil actuel, depuis votre téléphone." },
  { title: "ThermoScan lit la plaque", text: "Marque, modèle, année, fluide, puis la fiche certifiée ENERGY STAR correspondante." },
  { title: "Vous voyez l’écart", text: "L’efficacité face aux modèles d’aujourd’hui et le montant LogisVert admissible." },
];
const STEP_MS = 4600;
/* Plaque signalétique dans la photo, en % de l'écran du téléphone (photo recadrée en portrait). */
const PLATE = { left: 73, top: 44, width: 9, height: 21, originX: 77, originY: 54 };

export function ScanShowcase() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { margin: "0px 0px -20% 0px" });
  const reduce = !!useReduced();
  const [step, setStep] = useState(0);
  const [cycle, setCycle] = useState(0);

  // Avance d'une étape toutes les 4,6 s tant que la section est à l'écran.
  useEffect(() => {
    if (!inView || reduce) return;
    const t = window.setTimeout(() => setStep((s) => (s + 1) % STEPS.length), STEP_MS);
    return () => window.clearTimeout(t);
  }, [inView, reduce, step, cycle]);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const rotate = useTransform(scrollYProgress, [0, 1], [8, -5]);
  const y = useTransform(scrollYProgress, [0, 1], [70, -70]);

  const choose = (i: number) => {
    setStep(i);
    setCycle((c) => c + 1);
  };

  return (
    <section ref={ref} className="relative overflow-hidden" style={{ background: C.paper, color: C.ink, fontFamily: DISPLAY }} aria-labelledby="ps-scan-titre">
      <div className="relative mx-auto grid max-w-[1440px] items-center gap-16 px-5 py-[13vh] sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-12">
        {/* Texte */}
        <div>
          <ThermoScanBadge height={20} />
          <RevealLines
            id="ps-scan-titre"
            lines={["Vous avez déjà", "une thermopompe ?", <span key="s" className="hp-serif" style={{ fontSize: "0.86em" }}>Une photo suffit pour savoir ce qu’elle vaut.</span>]}
            style={{ fontSize: "clamp(38px, 4.6vw, 80px)", lineHeight: 0.98, letterSpacing: "-0.045em", fontWeight: 600, margin: "28px 0 0" }}
          />
          <p className="mt-7 max-w-[540px] text-[17px] leading-[1.65]" style={{ color: C.inkMute }}>
            Avec ThermoScan, Thermopompes À Vendre lit la plaque signalétique, retrouve la fiche certifiée ENERGY STAR et mesure l’écart d’efficacité avec les modèles admissibles à LogisVert. Gratuit, sans inscription, photo effacée après lecture.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/thermoscan?depuis=accueil" className="inline-flex items-center gap-2.5 rounded-full py-3.5 pl-5 pr-6 text-[15px] font-semibold text-white" style={{ background: C.orange }}>
              <Camera size={18} aria-hidden="true" />
              <span className="hp-roll">
                <span>Scanner mon appareil</span>
                <span aria-hidden="true">Scanner mon appareil</span>
              </span>
            </Link>
            <Link href="/thermoscan#etiquette" className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-[15px] font-semibold" style={{ border: `1px solid ${C.inkLine}`, color: C.ink }}>
              Où est l’étiquette ? <Arrow size={15} />
            </Link>
          </div>

          <ol className="mt-12" style={{ listStyle: "none", padding: 0, borderTop: `1px solid ${C.inkLine}` }}>
            {STEPS.map((s, i) => {
              const on = step === i;
              return (
                <li key={s.title} style={{ borderBottom: `1px solid ${C.inkLine}` }}>
                  <button type="button" onClick={() => choose(i)} aria-current={on ? "step" : undefined} className="grid w-full grid-cols-[44px_1fr] gap-x-4 py-5 text-left">
                    <span className="pt-1 text-[13px] font-bold tabular-nums" style={{ color: on ? C.orange : C.inkFaint, letterSpacing: "0.08em", transition: "color .4s" }}>
                      0{i + 1}
                    </span>
                    <span>
                      <span className="block text-[19px] font-semibold" style={{ letterSpacing: "-0.015em", color: on ? C.ink : C.inkMute, transition: "color .4s" }}>
                        {s.title}
                      </span>
                      <span className="mt-1 block text-[15px] leading-relaxed" style={{ color: C.inkMute }}>
                        {s.text}
                      </span>
                      <span className="mt-4 block h-px w-full overflow-hidden" style={{ background: on ? C.inkLine : "transparent" }}>
                        {on && (
                          <motion.span
                            key={`${i}-${cycle}-${step}`}
                            className="block h-full origin-left"
                            style={{ background: C.orange }}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: inView && !reduce ? 1 : 0 }}
                            transition={{ duration: STEP_MS / 1000, ease: "linear" }}
                          />
                        )}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        {/* Téléphone */}
        <div className="relative flex justify-center">
          <Waves />
          <motion.div className="relative w-full max-w-[290px] sm:max-w-[360px]" style={reduce ? undefined : { rotate, y }}>
            <Phone step={step} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* Ondes concentriques derrière le téléphone : le « signal » du scan. */
function Waves() {
  return (
    <svg aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[880px] w-[880px] -translate-x-1/2 -translate-y-1/2" viewBox="0 0 880 880" fill="none">
      {[160, 240, 320, 400].map((r) => (
        <circle key={r} cx="440" cy="440" r={r} stroke={C.ink} strokeOpacity={0.07} />
      ))}
      {[0, 2, 4].map((d) => (
        <circle key={d} className="ps-wave" cx="440" cy="440" r="400" stroke={C.orange} strokeOpacity={0.35} style={{ animationDelay: `${d}s` }} />
      ))}
    </svg>
  );
}

function Phone({ step }: { step: number }) {
  return (
    <div className="relative rounded-[54px] p-[10px]" style={{ background: C.ink, boxShadow: "0 70px 120px -40px rgba(10,20,25,0.55), inset 0 0 0 2px #1d2d37" }}>
      <div className="relative overflow-hidden rounded-[44px]" style={{ aspectRatio: "9 / 19", background: C.ink }}>
        {/* Photo : cadrage, zoom sur la plaque, puis flou pour le résultat. */}
        <motion.div
          className="absolute inset-0"
          style={{ transformOrigin: `${PLATE.originX}% ${PLATE.originY}%` }}
          animate={{ scale: step === 0 ? 1 : step === 1 ? 1.7 : 1.15, filter: step === 2 ? "blur(8px) brightness(0.4)" : "blur(0px) brightness(1)" }}
          transition={{ duration: 1.4, ease: EASE }}
        >
          <Image src="/images/about-cta-product.webp" alt="" fill sizes="360px" style={{ objectFit: "cover", objectPosition: "60% 50%" }} />
          <motion.div
            className="absolute rounded-[4px]"
            style={{ left: `${PLATE.left}%`, top: `${PLATE.top}%`, width: `${PLATE.width}%`, height: `${PLATE.height}%`, border: `1.5px solid ${C.orange}` }}
            animate={{ opacity: step === 2 ? 0 : 1, boxShadow: step === 1 ? "0 0 0 3px rgba(229,75,23,0.25)" : "0 0 0 0 rgba(229,75,23,0)" }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>

        {/* Barre d'état et îlot */}
        <div className="absolute inset-x-0 top-0 z-30 flex items-center justify-between px-7 pt-[14px] text-[12px] font-semibold text-white">
          <span>9:41</span>
          <span className="h-[24px] w-[88px] rounded-full bg-black" />
          <span className="flex items-center gap-1">
            <span className="h-2 w-3 rounded-[2px] bg-white/90" />
          </span>
        </div>

        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div key="cadrer" className="absolute inset-0 z-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
              <div className="absolute inset-x-0 top-14 flex justify-center">
                <span className="rounded-full px-3.5 py-1.5 text-[12px] font-semibold text-white" style={{ background: "rgba(10,20,25,0.62)", backdropFilter: "blur(8px)" }}>
                  Cadrez l’étiquette
                </span>
              </div>
              <Corners />
              <div className="absolute inset-x-0 bottom-9 flex justify-center">
                <span className="flex h-[66px] w-[66px] items-center justify-center rounded-full" style={{ border: "3px solid #fff" }}>
                  <motion.span className="block h-[52px] w-[52px] rounded-full bg-white" animate={{ scale: [1, 0.86, 1] }} transition={{ duration: 0.5, delay: 3.2 }} />
                </span>
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div key="lire" className="absolute inset-0 z-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
              <span className="ps-scanline" />
              <div className="absolute inset-x-3 bottom-3 rounded-[26px] p-4" style={{ background: "rgba(10,20,25,0.78)", backdropFilter: "blur(14px)", WebkitBackdropFilter: "blur(14px)", color: C.cream }}>
                <p className="text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.18em", color: C.orange, margin: 0 }}>
                  Lecture de la plaque
                </p>
                {[
                  ["Marque", "Mitsubishi Electric"],
                  ["N° de modèle", "Lu sur la plaque"],
                  ["Année", "Détectée"],
                  ["Fluide", "Détecté"],
                ].map(([k, v], i) => (
                  <motion.div
                    key={k}
                    className="mt-2.5 flex items-center justify-between text-[13px]"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: EASE, delay: 0.9 + i * 0.45 }}
                  >
                    <span style={{ color: C.faint }}>{k}</span>
                    <span className="font-semibold">{v}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div key="ecart" className="absolute inset-0 z-20 flex flex-col justify-end p-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
              <div className="rounded-[26px] p-5" style={{ background: C.cream, color: C.ink }}>
                <p className="flex items-center gap-2 text-[13px] font-semibold" style={{ margin: 0 }}>
                  <span className="flex h-5 w-5 items-center justify-center rounded-full text-[11px] text-white" style={{ background: C.orange }}>
                    ✓
                  </span>
                  Fiche ENERGY STAR trouvée
                </p>
                <p className="mt-5 text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.18em", color: C.inkMute, margin: "20px 0 0" }}>
                  Écart d’efficacité
                </p>
                {[
                  { k: "Votre appareil", w: 38, bg: "rgba(10,20,25,0.28)" },
                  { k: "Modèles d’aujourd’hui", w: 90, bg: C.orange },
                ].map((b, i) => (
                  <div key={b.k} className="mt-3">
                    <p className="text-[12.5px] font-medium" style={{ margin: 0 }}>
                      {b.k}
                    </p>
                    <div className="mt-1.5 h-2 overflow-hidden rounded-full" style={{ background: C.inkLine }}>
                      <motion.div className="h-full rounded-full" style={{ background: b.bg }} initial={{ width: "0%" }} animate={{ width: `${b.w}%` }} transition={{ duration: 1.2, ease: EASE, delay: 0.5 + i * 0.25 }} />
                    </div>
                  </div>
                ))}
                <div className="mt-5 flex items-center justify-between border-t pt-4 text-[12.5px]" style={{ borderColor: C.inkLine }}>
                  <span style={{ color: C.inkMute }}>Montant LogisVert</span>
                  <span className="font-semibold">Selon le modèle choisi</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Corners() {
  const c = "absolute h-9 w-9 border-white";
  return (
    <div aria-hidden="true" className="absolute inset-x-[12%] inset-y-[24%]">
      <span className={`${c} left-0 top-0 rounded-tl-[10px] border-l-[3px] border-t-[3px]`} />
      <span className={`${c} right-0 top-0 rounded-tr-[10px] border-r-[3px] border-t-[3px]`} />
      <span className={`${c} bottom-0 left-0 rounded-bl-[10px] border-b-[3px] border-l-[3px]`} />
      <span className={`${c} bottom-0 right-0 rounded-br-[10px] border-b-[3px] border-r-[3px]`} />
    </div>
  );
}
