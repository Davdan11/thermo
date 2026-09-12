"use client";

import "../sections.css";
import "./viseur.css";
import { useRef, type ReactNode } from "react";
import Link from "next/link";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { Thermometer, Clock, ShieldCheck, Leaf, Trash2, Database, PencilLine } from "lucide-react";
import { ThermoScanSection } from "@/components/thermoscan/ThermoScanSection";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { DISPLAY, MONO, outilsMono } from "@/components/heroes-v2/outils/fonts";
import { Corners, EASE, FocusCorners, Reveal, Rule, VIEW } from "../kit";
import { HudLocator } from "./HudLocator";

/* ==================================================================
   /thermoscan, sous le héros « Viseur ». La page continue l'écran de
   l'appareil photo : graphite #141414, blanc, orange d'affichage tête
   haute, relevés en IBM Plex Mono, coins de mise au point.
   - 01 Scanner : l'outil dans un cadre de viseur, avec la liste
     « Avant de photographier » en relevé latéral ;
   - 02 Gestes : trois écrans animés (déclenchement, lecture, écart) ;
   - 03 Étiquette : le schéma de repérage, le cadre cherche puis se
     verrouille sur chaque plaque ;
   - 04 Fiche : ce que ThermoScan vous dit, quatre canaux de relevé ;
   - 05 Garanties et suite.
   Textes repris de l'ancienne page, sans ajout de chiffre.
   ================================================================== */

const G = {
  bg: "#141414",
  panel: "#191919",
  white: "#FFFFFF",
  mute: "rgba(255,255,255,0.72)",
  faint: "rgba(255,255,255,0.5)",
  line: "rgba(255,255,255,0.14)",
  hud: "#FF6A2B",
  orange: "#E54B17",
} as const;

const STEPS = [
  { title: "Photographiez l’étiquette", text: "La plaque signalétique, sur le côté de l’unité extérieure ou sous l’unité murale. Depuis votre téléphone, en plein jour de préférence." },
  { title: "ThermoScan lit la plaque", text: "Marque, numéro de modèle, année, capacité et fluide sont extraits, puis Thermopompes À Vendre les vérifie dans le catalogue ENERGY STAR Canada. Vous corrigez si besoin." },
  { title: "Vous voyez l’écart avec le neuf", text: "Efficacité HSPF2, tenue au froid, fluide, garantie et montant LogisVert des modèles comparables. Puis une soumission si vous le voulez." },
];

const OUTPUTS = [
  { Icon: Thermometer, title: "Capacité et efficacité", text: "Capacité de chauffage à -15 °C, HSPF2 et SEER2 tirés de la fiche certifiée quand le modèle est au catalogue ; sinon, les valeurs lues sur l’étiquette." },
  { Icon: Clock, title: "Âge et fluide frigorigène", text: "Un appareil au R-22 ou de plus de 12 ans est signalé : recharge coûteuse, pièces rares, remplacement à planifier." },
  { Icon: ShieldCheck, title: "Garantie du fabricant", text: "Pièces, compresseur et main-d’œuvre, avec les conditions d’inscription, pour les marques dont nous avons les grilles." },
  { Icon: Leaf, title: "Comparaison et LogisVert", text: "Les modèles comparables du catalogue, l’écart d’efficacité en pourcentage et le montant LogisVert officiel de chacun." },
];

const TRUST = [
  { Icon: Trash2, title: "Photo effacée après lecture", text: "L’image sert à la lecture, puis elle est supprimée. Rien n’est conservé sur nos serveurs." },
  { Icon: Database, title: "Catalogue certifié", text: "ENERGY STAR Canada et liste LogisVert d’Hydro-Québec, mise à jour chaque nuit." },
  { Icon: PencilLine, title: "Vous gardez la main", text: "Chaque champ lu est affiché et modifiable avant la fiche. Une lecture douteuse est signalée." },
];

const BEFORE: Array<[string, string]> = [
  ["Cadrez toute la plaque", "Le numéro de modèle et le numéro de série doivent être lisibles en entier."],
  ["Évitez les reflets", "Placez-vous de biais par rapport au soleil ou à la lampe ; essuyez la plaque si elle est sale."],
  ["Unité extérieure d’abord", "C’est elle qui porte le modèle certifié. L’unité murale sert de plan B."],
];

const LOCATIONS: Array<[string, string]> = [
  ["Unité extérieure", "Sur le panneau latéral droit, près des raccords de tuyauterie, parfois à l’arrière. C’est le numéro qui compte pour la certification."],
  ["Unité murale intérieure", "Sous l’appareil ou sur le côté, derrière le volet de la grille. Utile si l’extérieure est inaccessible."],
  ["Centrale ou gainable", "Sur le caisson de la fournaise ou du ventilo-convecteur, côté service, et sur l’unité extérieure."],
];

const WRAP = "mx-auto max-w-[1440px] px-6 sm:px-11";

/** Repère de section du viseur : « 02 · Comment ça marche ». */
function Index({ n, children }: { n: string; children: ReactNode }) {
  return (
    <Reveal y={0} blur={6} duration={0.8}>
      <p className="flex items-center gap-3 text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.18em", margin: 0 }}>
        <span style={{ color: G.faint }}>{n}</span>
        <span aria-hidden="true" className="h-px w-6" style={{ background: G.hud }} />
        <span style={{ color: G.hud }}>{children}</span>
      </p>
    </Reveal>
  );
}

function H2({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <Reveal y={10} blur={10} delay={0.08} duration={1}>
      <h2 className={className} style={{ fontSize: "clamp(30px, 3.4vw, 50px)", lineHeight: 1.02, letterSpacing: "-0.04em", fontWeight: 600, margin: "18px 0 0", textWrap: "balance" }}>
        {children}
      </h2>
    </Reveal>
  );
}

/** Barres de mise au point (mêmes que la barre d'état du héros). */
function Meter({ on = 5 }: { on?: number }) {
  return (
    <span aria-hidden="true" className="flex items-end gap-[3px]">
      {[0, 1, 2, 3, 4].map((i) => (
        <span key={i} className="block w-[3px]" style={{ height: 5 + i * 2, background: i < on ? G.hud : "rgba(255,255,255,0.22)" }} />
      ))}
    </span>
  );
}

export function ViseurSections() {
  return (
    <div className={`so-root ${outilsMono.variable}`} style={{ background: G.bg, color: G.white, fontFamily: DISPLAY }}>
      <ScannerBlock />
      <GesturesBlock />
      <EtiquetteBlock />
      <OutputsBlock />
      <TrustBlock />
    </div>
  );
}

/* ---------------- 01 · Scanner ---------------- */
function ScannerBlock() {
  return (
    <section id="scanner" className="scroll-mt-24 pb-20 pt-6 lg:pb-28 lg:pt-10" aria-label="Scanner votre appareil">
      <div className={WRAP}>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-14">
          {/* Console du viseur */}
          <Reveal y={24} blur={12} duration={1.1} className="relative">
            <div className="relative p-2 sm:p-3">
              <FocusCorners color="rgba(255,255,255,0.6)" size={26} weight={1.5} delay={0.2} />
              <div className="relative" style={{ background: G.panel, border: `1px solid ${G.line}` }}>
                {/* Barre d'état */}
                <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 px-5 py-4 sm:px-7" style={{ borderBottom: `1px solid ${G.line}` }}>
                  <div className="min-w-0">
                    <p className="flex items-center gap-2 text-[10.5px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.16em", color: G.faint, margin: 0 }}>
                      <span className="ou-v-blink inline-block h-[7px] w-[7px]" style={{ background: G.hud }} aria-hidden="true" />
                      01 · Scanner
                    </p>
                    <p className="mt-2 text-[21px] font-semibold leading-tight sm:text-[24px]" style={{ letterSpacing: "-0.025em", margin: "8px 0 0" }}>
                      Scanner votre appareil
                    </p>
                    <p className="mt-1 text-[14px] leading-relaxed" style={{ color: G.mute, margin: "4px 0 0" }}>
                      Photo de l’étiquette, vérification des champs lus, puis fiche technique et comparaison.
                    </p>
                  </div>
                  <span className="flex items-center gap-3 text-[10.5px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.16em" }}>
                    <Meter />
                    <span className="px-2 py-[3px]" style={{ border: `1px solid ${G.hud}`, color: G.hud }}>
                      Bêta
                    </span>
                  </span>
                </div>
                <div className="px-5 py-6 sm:px-7 sm:py-8">
                  <ThermoScanSection compact={true} />
                </div>
              </div>
            </div>
          </Reveal>

          {/* Relevé latéral : avant de photographier */}
          <aside className="lg:pt-5">
            <Reveal y={16} delay={0.15}>
              <p className="flex items-center justify-between pb-3 text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.16em", color: G.hud, margin: 0, borderBottom: `1px solid ${G.hud}` }}>
                <span>Avant de photographier</span>
                <span style={{ color: G.faint }}>3 / 3</span>
              </p>
            </Reveal>
            <ol style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {BEFORE.map(([t, d], i) => (
                <Reveal as="li" key={t} delay={0.25 + i * 0.1} y={10} className="grid grid-cols-[36px_1fr] gap-x-2 py-4" style={{ borderBottom: `1px solid ${G.line}` }}>
                  <span className="pt-[3px] text-[11px]" style={{ fontFamily: MONO, color: G.hud }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block text-[15px] font-semibold">{t}</span>
                    <span className="mt-1 block text-[13.5px] leading-relaxed" style={{ color: G.mute }}>
                      {d}
                    </span>
                  </span>
                </Reveal>
              ))}
            </ol>
            <Reveal delay={0.55} y={8}>
              <p className="mt-5 text-[13.5px] leading-relaxed" style={{ color: G.mute, margin: "20px 0 0" }}>
                Vous connaissez déjà le modèle ? Le{" "}
                <Link href="/comparer" className="vz-link font-semibold">
                  comparateur
                </Link>{" "}
                accepte la saisie directe.
              </p>
            </Reveal>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 02 · Gestes ---------------- */
function GesturesBlock() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { margin: "0px 0px -10% 0px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  // Détail lié au défilement : le repère de balayage glisse le long du filet qui relie les écrans.
  const x = useTransform(scrollYProgress, [0.15, 0.75], ["0%", "100%"]);
  const reduce = useReduced();

  return (
    <section ref={ref} data-play={inView ? "true" : "false"} className="relative py-20 lg:py-28" style={{ borderTop: `1px solid ${G.line}` }}>
      <div className={WRAP}>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-end">
          <div>
            <Index n="02">Comment ça marche</Index>
            <H2>Trois gestes, aucune saisie.</H2>
          </div>
        </div>

        <div className="relative mt-12 lg:mt-16">
          {/* Filet reliant les trois écrans, avec un repère lié au défilement */}
          <div aria-hidden="true" className="absolute left-0 right-0 top-[-18px] hidden h-px md:block" style={{ background: G.line }}>
            <motion.span className="absolute top-[-3px] block h-[7px] w-[7px]" style={{ left: reduce ? "100%" : x, background: G.hud, translateX: "-50%" }} />
          </div>
          <ol className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-6 lg:gap-8" style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.14} y={22} blur={10} duration={1}>
                <div className="relative" style={{ aspectRatio: "16 / 10" }}>
                  <div className="absolute inset-0 overflow-hidden" style={{ background: G.panel }}>
                    <GestureArt k={i} />
                  </div>
                  <FocusCorners color={i === 1 ? G.hud : "rgba(255,255,255,0.7)"} size={16} weight={1.5} delay={0.3 + i * 0.14} />
                  <span aria-hidden="true" className="absolute left-3 top-3 text-[10.5px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.14em", color: G.faint }}>
                    {String(i + 1).padStart(2, "0")} / 03
                  </span>
                  <span aria-hidden="true" className="absolute right-3 top-3 text-[10.5px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.14em", color: G.hud }}>
                    {["Déclencher", "Lecture", "Écart"][i]}
                  </span>
                </div>
                <h3 className="mt-6 text-[20px] font-semibold" style={{ letterSpacing: "-0.02em", margin: "24px 0 0" }}>
                  {s.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed" style={{ color: G.mute, margin: "8px 0 0" }}>
                  {s.text}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/** Écrans animés des trois gestes (trait blanc, orange d'affichage). Décoratifs. */
function GestureArt({ k }: { k: number }) {
  const W = "rgba(255,255,255,0.6)";
  const W2 = "rgba(255,255,255,0.22)";
  if (k === 0)
    return (
      <svg aria-hidden="true" viewBox="0 0 320 200" className="vz-loop absolute inset-0 h-full w-full" fill="none">
        {/* plaque au centre du cadre */}
        <rect x="118" y="58" width="84" height="92" rx="3" stroke={W} strokeWidth="1.4" />
        <path d="M130 76h60M130 90h60M130 104h44M130 118h52M130 132h30" stroke={W2} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M104 50v-10h12M216 50v-10h-12M104 158v10h12M216 158v10h-12" stroke={G.hud} strokeWidth="1.6" />
        <path d="M156 104h8M160 100v8" stroke={W} strokeWidth="1" />
        {/* obturateur */}
        <rect className="vz-shutter-a" x="0" y="0" width="320" height="100" fill="#0C0C0C" style={{ transformBox: "view-box" }} />
        <rect className="vz-shutter-b" x="0" y="100" width="320" height="100" fill="#0C0C0C" style={{ transformBox: "view-box", transformOrigin: "50% 100%" }} />
        <rect className="vz-flash" x="0" y="0" width="320" height="200" fill="#fff" />
      </svg>
    );
  if (k === 1)
    return (
      <svg aria-hidden="true" viewBox="0 0 320 200" className="vz-loop absolute inset-0 h-full w-full" fill="none">
        <rect x="40" y="46" width="96" height="110" rx="3" stroke={W} strokeWidth="1.4" />
        <path d="M52 64h72M52 80h72M52 96h52M52 112h62M52 128h40M52 142h56" stroke={W2} strokeWidth="1.6" strokeLinecap="round" />
        <line className="vz-sweep" x1="34" y1="52" x2="142" y2="52" stroke={G.hud} strokeWidth="1.5" style={{ ["--travel" as string]: "98px", transformBox: "view-box" }} />
        {/* champs lus */}
        {["MARQUE", "MODÈLE", "ANNÉE", "FLUIDE"].map((t, i) => (
          <g key={t} transform={`translate(166 ${60 + i * 26})`}>
            <text x="0" y="0" fontSize="9" fill="rgba(255,255,255,0.5)" style={{ fontFamily: MONO, letterSpacing: "0.1em" }}>
              {t}
            </text>
            <rect x="0" y="6" width="120" height="1" fill={W2} />
            <rect className={`vz-bar ${i ? `vz-bar-${Math.min(3, i + 1)}` : ""}`} x="0" y="5" width={[96, 110, 52, 70][i]} height="3" fill={i === 0 ? G.hud : "#fff"} style={{ transformBox: "fill-box" }} />
          </g>
        ))}
      </svg>
    );
  return (
    <svg aria-hidden="true" viewBox="0 0 320 200" className="vz-loop absolute inset-0 h-full w-full" fill="none">
      <text x="44" y="70" fontSize="9" fill="rgba(255,255,255,0.5)" style={{ fontFamily: MONO, letterSpacing: "0.12em" }}>
        ACTUEL
      </text>
      <rect x="44" y="78" width="232" height="10" stroke={W2} />
      <rect className="vz-bar" x="44" y="78" width="120" height="10" fill="rgba(255,255,255,0.55)" style={{ transformBox: "fill-box" }} />
      <text x="44" y="122" fontSize="9" fill={G.hud} style={{ fontFamily: MONO, letterSpacing: "0.12em" }}>
        NEUF
      </text>
      <rect x="44" y="130" width="232" height="10" stroke={W2} />
      <rect className="vz-bar vz-bar-2" x="44" y="130" width="206" height="10" fill={G.hud} style={{ transformBox: "fill-box" }} />
      <path d="M164 70v78M250 116v32" stroke={W2} strokeDasharray="2 4" />
      <path d="M170 104h72M236 99l6 5-6 5" stroke={G.hud} strokeWidth="1.3" />
    </svg>
  );
}

/* ---------------- 03 · Étiquette ---------------- */
function EtiquetteBlock() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { margin: "0px 0px -10% 0px" });
  return (
    <section ref={ref} id="etiquette" data-play={inView ? "true" : "false"} className="scroll-mt-24 py-20 lg:py-28" style={{ borderTop: `1px solid ${G.line}` }}>
      <div className={WRAP}>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,440px)_1fr] lg:gap-20">
          <div>
            <Index n="03">Où est l’étiquette</Index>
            <H2>La plaque signalétique se trouve toujours au même endroit.</H2>
            <Reveal delay={0.15}>
              <p className="mt-6 text-[16.5px] leading-[1.65]" style={{ color: G.mute, margin: "24px 0 0" }}>
                Un autocollant argenté ou blanc avec les mentions <strong className="font-semibold text-white">Model / Modèle</strong>, <strong className="font-semibold text-white">Serial</strong>, la tension et le fluide. ThermoScan a besoin du numéro de modèle en entier.
              </p>
            </Reveal>
            <ol className="mt-8" style={{ listStyle: "none", margin: "32px 0 0", padding: 0, borderTop: `1px solid ${G.line}` }}>
              {LOCATIONS.map(([t, d], i) => (
                <Reveal as="li" key={t} delay={0.2 + i * 0.1} y={10} className="grid grid-cols-[40px_1fr] gap-x-2 py-4" style={{ borderBottom: `1px solid ${G.line}` }}>
                  <span className="pt-[3px] text-[12px]" style={{ fontFamily: MONO, color: i === 0 ? G.hud : G.faint }}>
                    [{i + 1}]
                  </span>
                  <span>
                    <span className="block text-[15.5px] font-semibold">{t}</span>
                    <span className="mt-1 block text-[14px] leading-relaxed" style={{ color: G.mute }}>
                      {d}
                    </span>
                  </span>
                </Reveal>
              ))}
            </ol>
          </div>
          <Reveal y={24} blur={12} delay={0.1} duration={1.1} className="relative">
            <div className="relative p-5 sm:p-8" style={{ background: G.panel, border: `1px solid ${G.line}` }}>
              <HudLocator />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 04 · Ce que ThermoScan vous dit ---------------- */
function OutputsBlock() {
  const reduce = useReduced();
  return (
    <section className="py-20 lg:py-28" style={{ borderTop: `1px solid ${G.line}` }}>
      <div className={WRAP}>
        <Index n="04">Ce que ThermoScan vous dit</Index>
        <H2 className="max-w-[820px]">La fiche de votre appareil, face aux modèles d’aujourd’hui.</H2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4" style={{ borderTop: `1px solid ${G.line}` }}>
          {OUTPUTS.map(({ Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 0.1} y={18} className={`vz-card relative px-1 pb-8 pt-6 sm:px-6 ${i ? "lg:border-l" : ""} ${i % 2 ? "sm:border-l" : ""} ${i >= 2 ? "sm:border-t lg:border-t-0" : ""} ${i ? "border-t sm:border-t-0" : ""}`} style={{ borderColor: G.line }}>
              <span aria-hidden="true" className="vz-corners pointer-events-none absolute inset-2">
                <Corners color={G.hud} size={10} weight={1.5} />
              </span>
              <div className="flex items-center justify-between">
                <span className="text-[10.5px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.16em", color: G.faint }}>
                  Canal {String(i + 1).padStart(2, "0")}
                </span>
                <Icon size={19} strokeWidth={1.6} style={{ color: G.hud }} aria-hidden="true" />
              </div>
              {/* Niveau du canal : il monte quand la carte entre à l'écran */}
              <div aria-hidden="true" className="mt-5 h-[2px] w-full" style={{ background: "rgba(255,255,255,0.1)" }}>
                <motion.span
                  className="block h-full origin-left"
                  style={{ background: G.hud }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={VIEW}
                  transition={reduce ? { duration: 0 } : { duration: 1.2, ease: EASE, delay: 0.3 + i * 0.12 }}
                />
              </div>
              <h3 className="mt-6 text-[18.5px] font-semibold" style={{ letterSpacing: "-0.02em", margin: "24px 0 0" }}>
                {title}
              </h3>
              <p className="mt-2 text-[14.5px] leading-relaxed" style={{ color: G.mute, margin: "8px 0 0" }}>
                {text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 05 · Garanties et suite ---------------- */
function TrustBlock() {
  return (
    <section className="pb-20 pt-4 lg:pb-24" aria-label="Garanties">
      <div className={WRAP}>
        <div className="relative px-6 py-10 sm:px-10 sm:py-12" style={{ background: G.panel }}>
          <FocusCorners color="rgba(255,255,255,0.55)" size={22} weight={1.5} delay={0.1} />
          <p className="flex items-center gap-3 text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.18em", margin: 0 }}>
            <span style={{ color: G.faint }}>05</span>
            <span aria-hidden="true" className="h-px w-6" style={{ background: G.hud }} />
            <span style={{ color: G.hud }}>État du système</span>
          </p>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
            {TRUST.map(({ Icon, title, text }, i) => (
              <Reveal key={title} delay={0.1 + i * 0.1} y={12} className="flex gap-4">
                <Icon size={20} strokeWidth={1.6} className="mt-0.5 shrink-0" style={{ color: G.hud }} aria-hidden="true" />
                <div>
                  <p className="flex items-center gap-2 text-[16px] font-semibold" style={{ margin: 0 }}>
                    {title}
                    <span aria-hidden="true" className="ou-v-blink inline-block h-[6px] w-[6px]" style={{ background: G.hud, animationDelay: `${i * 0.3}s` }} />
                  </p>
                  <p className="mt-1.5 text-[14px] leading-relaxed" style={{ color: G.mute, margin: "6px 0 0" }}>
                    {text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Rule className="mt-10 h-px w-full" color={G.line} duration={1.4} />
          <Reveal delay={0.2} y={10} className="mt-8 flex flex-wrap items-center justify-between gap-5">
            <p className="text-[16px]" style={{ color: G.mute, margin: 0 }}>
              Vous préférez partir de zéro plutôt que de votre appareil actuel ?
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/trouver-ma-thermopompe" className="vz-btn vz-primary px-6 py-[14px] text-[15px]">
                Questionnaire ThermoMatch
                <svg className="vz-arrow" aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/comparer" className="vz-btn vz-ghost px-6 py-[14px] text-[15px]">
                Comparateur
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
