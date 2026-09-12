"use client";

import "./prix-v2.css";
import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { animate, motion, useAnimationFrame, useInView, useMotionValue } from "motion/react";
import { DISPLAY, MONO, plexMono } from "./fonts";
import { EASE } from "./shared";
import { useReduced } from "@/components/heroes-v2/outils/motion";

/* ==================================================================
   /calculateur-economies — « Le compteur ».
   Tournesol #F4C542, encre #151515, panneaux blancs. Titre énorme dont
   les lettres roulent comme les chiffres d'un compteur ; au centre, un
   compteur électrique analogique dessiné en SVG : roues chiffrées et
   disque d'aluminium. Aucun montant inventé : le compteur n'affiche que
   ce que la page explique plus bas — des plinthes donnent 1 unité de
   chaleur par unité d'électricité, une thermopompe certifiée climat
   froid 3 à 4 (COP 3,0 à 4,0). Le disque file d'abord (plinthes), puis
   ralentit : même chaleur, trois à quatre fois moins d'électricité.
   ================================================================== */

const SUN = "#F4C542";
const INK = "#151515";
const FACE = "#FBFAF4";
const RED = "#B8412A";

export function MeterHero({ calculatorId }: { calculatorId: string }) {
  const reduce = !!useReduced();
  // 0 : repos, 1 : plinthes électriques, 2 : thermopompe climat froid.
  const [phase, setPhase] = useState(0);
  useEffect(() => {
    if (reduce) {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- état final affiché d'emblée (animations réduites)
      setPhase(2);
      return;
    }
    const a = window.setTimeout(() => setPhase(1), 900);
    const b = window.setTimeout(() => setPhase(2), 3600);
    return () => {
      window.clearTimeout(a);
      window.clearTimeout(b);
    };
  }, [reduce]);

  return (
    <section
      aria-labelledby="ct-titre"
      className={`${plexMono.variable} relative -mt-[93px] overflow-hidden min-[1700px]:-mt-[105px]`}
      style={{ background: SUN, color: INK, fontFamily: DISPLAY }}
    >
      <div className="relative mx-auto max-w-[1440px] px-5 pb-24 pt-[134px] sm:px-8 lg:px-12 lg:pb-28 min-[1700px]:pt-[150px]">
        <motion.p
          className="flex items-center justify-center gap-3 text-[11.5px] font-semibold uppercase"
          style={{ fontFamily: MONO, letterSpacing: "0.22em", margin: 0 }}
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span aria-hidden="true" className="inline-block h-[7px] w-[7px] rounded-full" style={{ background: INK }} />
          Calculateur d’économies
          <span aria-hidden="true" className="inline-block h-[7px] w-[7px] rounded-full" style={{ background: INK }} />
        </motion.p>

        <RollTitle id="ct-titre" lines={["Combien allez-vous", "économiser ?"]} />

        <div className="mt-10 grid items-end gap-10 lg:mt-[-6px] lg:grid-cols-[minmax(0,1fr)_minmax(0,430px)_minmax(0,1fr)] lg:gap-10 xl:gap-14">
          {/* Texte et boutons */}
          <motion.div className="min-w-0 lg:pb-6" initial={reduce ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: EASE, delay: 0.8 }}>
            <p className="max-w-[440px] text-[17px] leading-[1.6] sm:text-[18px]" style={{ margin: 0 }}>
              L’installation d’une thermopompe est l’un des investissements les plus rentables pour une maison au Québec. Utilisez notre outil pour estimer vos économies annuelles.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href={`#${calculatorId}`} className="pv2-btn-ink2 inline-flex items-center gap-3 rounded-full px-7 py-4 text-[15px] font-bold" style={{ background: INK, color: SUN }}>
                Calculer mes économies
                <span aria-hidden="true">↓</span>
              </Link>
              <Link href="/soumission" className="inline-flex items-center rounded-full px-6 py-[14px] text-[15px] font-semibold transition-colors hover:bg-white/40" style={{ border: `2px solid ${INK}`, color: INK }}>
                Demander une soumission
              </Link>
            </div>
          </motion.div>

          {/* Compteur */}
          <motion.div className="min-w-0" initial={reduce ? false : { opacity: 0, scale: 0.94, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 1.1, ease: EASE, delay: 0.45 }}>
            <Meter phase={phase} />
          </motion.div>

          {/* Panneau blanc : ce que montre le compteur */}
          <motion.div className="min-w-0 lg:pb-6" initial={reduce ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: EASE, delay: 1 }}>
            <div className="ml-auto max-w-[400px] rounded-[16px] bg-white px-6 py-5" style={{ border: `2px solid ${INK}`, boxShadow: `6px 6px 0 ${INK}` }}>
              <p className="text-[10.5px] font-semibold uppercase" style={{ fontFamily: MONO, letterSpacing: "0.16em", margin: 0 }}>
                Rendement en chauffage (COP)
              </p>
              <dl className="m-0 mt-3">
                {[
                  { k: "Plinthes électriques", v: "1", on: phase === 1 },
                  { k: "Thermopompe climat froid", v: "3 à 4", on: phase === 2 },
                ].map((r) => (
                  <div key={r.k} className="flex items-baseline justify-between gap-4 py-2" style={{ borderTop: "1px solid rgba(21,21,21,0.14)", opacity: phase === 0 || r.on ? 1 : 0.45, transition: "opacity .6s" }}>
                    <dt className="text-[14.5px] font-medium">{r.k}</dt>
                    <dd className="m-0 whitespace-nowrap text-[26px] font-extrabold" style={{ letterSpacing: "-0.03em", wordSpacing: "0.06em", lineHeight: 1 }}>
                      {r.v}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="text-[12px]" style={{ fontFamily: MONO, color: "rgba(21,21,21,0.62)", margin: "4px 0 0" }}>
                unités de chaleur pour 1 unité d’électricité
              </p>
              <p className="text-[13.5px] leading-[1.55]" style={{ margin: "14px 0 0", paddingTop: 12, borderTop: `1.5px solid ${INK}` }}>
                Ordre de grandeur expliqué plus bas&nbsp;: même électricité consommée, trois à quatre fois plus de chaleur. Vos économies dépendent de votre maison&nbsp;: le calculateur les estime juste en dessous.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   Titre dont chaque lettre roule en place, comme une roue de compteur.
   ------------------------------------------------------------------ */
function RollTitle({ id, lines }: { id: string; lines: string[] }) {
  const reduce = !!useReduced();
  let n = 0;
  return (
    <h1 id={id} className="text-center" style={{ fontSize: "clamp(52px, 9.4vw, 172px)", lineHeight: 0.88, letterSpacing: "-0.06em", fontWeight: 800, margin: "20px 0 0" }}>
      {lines.map((line, li) => (
        <span key={li} className="block">
          {line.split(" ").map((word, wi, arr) => (
            <Fragment key={wi}>
              <span className="inline-block whitespace-nowrap">
                {Array.from(word).map((ch, ci) => {
                  const k = n++;
                  return (
                    <span key={ci} className="inline-block overflow-hidden align-bottom" style={{ padding: "0.1em 0.08em 0.14em 0.02em", margin: "-0.1em -0.08em -0.14em -0.02em" }}>
                      <motion.span
                        className="inline-block"
                        initial={reduce ? false : { y: "-115%" }}
                        animate={{ y: "0%" }}
                        transition={{ type: "spring", stiffness: 230, damping: 17, mass: 0.9, delay: 0.12 + k * 0.028 }}
                      >
                        {ch}
                      </motion.span>
                    </span>
                  );
                })}
              </span>
              {wi < arr.length - 1 ? " " : null}
            </Fragment>
          ))}
          {li < lines.length - 1 ? " " : null}
        </span>
      ))}
    </h1>
  );
}

/* ------------------------------------------------------------------
   Compteur analogique (SVG). Les roues roulent jusqu'à leur valeur ; le
   disque est dessiné vu par la tranche : ses repères défilent à la
   vitesse courante, mise à jour directement dans le DOM (pas de rendu
   React à chaque image).
   ------------------------------------------------------------------ */

const CX = 220;
const DISC_Y = 300;
const RX = 104;
const N_TICKS = 28;
const FAST = 1.8; // tours par seconde (plinthes)
const SLOW = FAST / 3.5; // même chaleur, 3 à 4 fois moins d'électricité

function tickAt(a: number, k: number) {
  const t = a + (k / N_TICKS) * Math.PI * 2;
  return { x: CX + RX * Math.sin(t), c: Math.cos(t) };
}

function Meter({ phase }: { phase: number }) {
  const reduce = !!useReduced();
  const wrap = useRef<HTMLDivElement>(null);
  const inView = useInView(wrap);
  const speed = useMotionValue(0);
  const angle = useRef(0);
  const ticks = useRef<Array<SVGLineElement | null>>([]);
  const mark = useRef<SVGRectElement>(null);

  useEffect(() => {
    if (reduce) return;
    const target = phase === 1 ? FAST : phase === 2 ? SLOW : 0;
    const c = animate(speed, target, phase === 1 ? { duration: 1.1, ease: "easeOut" } : { duration: 2.6, ease: [0.25, 0.8, 0.3, 1] });
    return () => c.stop();
  }, [phase, reduce, speed]);

  useAnimationFrame((_, delta) => {
    if (reduce || !inView) return;
    const v = speed.get();
    if (v <= 0) return;
    angle.current = (angle.current + v * Math.min(delta, 50) * 0.001 * Math.PI * 2) % (Math.PI * 2);
    const a = angle.current;
    ticks.current.forEach((el, k) => {
      if (!el) return;
      const { x, c } = tickAt(a, k);
      el.setAttribute("x1", x.toFixed(2));
      el.setAttribute("x2", x.toFixed(2));
      el.setAttribute("opacity", c > 0 ? (0.25 + 0.55 * c).toFixed(2) : "0");
    });
    const m = tickAt(a, 0);
    if (mark.current) {
      const w = 12 * Math.max(0, m.c);
      mark.current.setAttribute("x", (m.x - w / 2).toFixed(2));
      mark.current.setAttribute("width", w.toFixed(2));
    }
  });

  const rolled = phase >= 1;
  const rolled2 = phase >= 2;
  const m0 = tickAt(0, 0);

  return (
    <div ref={wrap} className="mx-auto w-full max-w-[430px]">
      <svg viewBox="0 0 440 500" className="block h-auto w-full" aria-hidden="true" style={{ overflow: "visible" }}>
        <defs>
          <radialGradient id="ct-face" cx="50%" cy="38%" r="70%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor={FACE} />
          </radialGradient>
          <linearGradient id="ct-metal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8E8E88" />
            <stop offset="45%" stopColor="#E9E9E4" />
            <stop offset="100%" stopColor="#77776F" />
          </linearGradient>
          <linearGradient id="ct-wheel" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#000" stopOpacity="0.55" />
            <stop offset="28%" stopColor="#000" stopOpacity="0" />
            <stop offset="72%" stopColor="#000" stopOpacity="0" />
            <stop offset="100%" stopColor="#000" stopOpacity="0.55" />
          </linearGradient>
          <linearGradient id="ct-edge" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#000" stopOpacity="0.6" />
            <stop offset="22%" stopColor="#000" stopOpacity="0" />
            <stop offset="78%" stopColor="#000" stopOpacity="0" />
            <stop offset="100%" stopColor="#000" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Ombre portée, collerette, verre */}
        <ellipse cx={CX} cy={462} rx={150} ry={12} fill="rgba(21,21,21,0.18)" />
        <circle cx={CX} cy={232} r={216} fill={INK} />
        <circle cx={CX} cy={232} r={205} fill="#2B2B28" />
        <circle cx={CX} cy={232} r={196} fill="url(#ct-face)" />

        {/* Plaque */}
        <text x={CX} y={78} textAnchor="middle" fontSize="10" letterSpacing="2.4" fontWeight="600" fill="rgba(21,21,21,0.62)" style={{ fontFamily: MONO }}>
          RENDEMENT EN CHAUFFAGE
        </text>
        <text x={CX} y={100} textAnchor="middle" fontSize="15" fontWeight="700" fill={INK} style={{ fontFamily: MONO }}>
          COP
        </text>

        {/* Rangée A : plinthes */}
        <text x={CX} y={128} textAnchor="middle" fontSize="9.5" letterSpacing="1.6" fontWeight="600" fill={INK} opacity={phase === 2 ? 0.4 : 1} style={{ fontFamily: MONO, transition: "opacity .6s" }}>
          PLINTHES ÉLECTRIQUES
        </text>
        <Register x={CX - 38} y={136} digits={[1, 0]} on={rolled} delay={0.1} />

        {/* Rangée B : thermopompe climat froid */}
        <text x={CX} y={210} textAnchor="middle" fontSize="9.5" letterSpacing="1.6" fontWeight="600" fill={INK} opacity={phase === 1 ? 0.4 : 1} style={{ fontFamily: MONO, transition: "opacity .6s" }}>
          THERMOPOMPE CLIMAT FROID
        </text>
        <Register x={CX - 99} y={218} digits={[3, 0]} on={rolled2} delay={0.1} />
        <text x={CX} y={247} textAnchor="middle" fontSize="16" fontWeight="600" fill={INK} style={{ fontFamily: MONO }}>
          à
        </text>
        <Register x={CX + 23} y={218} digits={[4, 0]} on={rolled2} delay={0.35} />

        <text x={CX} y={278} textAnchor="middle" fontSize="9" letterSpacing="0.6" fill="rgba(21,21,21,0.62)" style={{ fontFamily: MONO }}>
          unités de chaleur par unité d’électricité
        </text>

        {/* Fenêtre du disque */}
        <rect x={CX - 122} y={DISC_Y - 13} width={244} height={30} rx={6} fill={INK} />
        <rect x={CX - RX - 6} y={DISC_Y - 5} width={(RX + 6) * 2} height={14} fill="url(#ct-metal)" />
        {Array.from({ length: N_TICKS }, (_, k) => {
          const { x, c } = tickAt(0, k);
          return (
            <line
              key={k}
              ref={(el) => {
                ticks.current[k] = el;
              }}
              x1={x.toFixed(2)}
              x2={x.toFixed(2)}
              y1={DISC_Y - 5}
              y2={DISC_Y + 9}
              stroke="#3A3A36"
              strokeWidth="1"
              opacity={c > 0 ? (0.25 + 0.55 * c).toFixed(2) : "0"}
            />
          );
        })}
        <rect ref={mark} x={(m0.x - 6).toFixed(2)} y={DISC_Y - 5} width="12" height="14" fill={RED} />
        <rect x={CX - RX - 6} y={DISC_Y - 5} width={(RX + 6) * 2} height={14} fill="url(#ct-edge)" />

        <text x={CX} y={DISC_Y + 42} textAnchor="middle" fontSize="9.5" fontWeight="600" letterSpacing="0.4" fill={INK} style={{ fontFamily: MONO }}>
          {phase === 2 ? "Même chaleur, 3 à 4 fois moins d’électricité" : "Disque : vitesse de consommation"}
        </text>

        {/* Plaque du bas */}
        <rect x={CX - 70} y={366} width={140} height={22} rx={3} fill="none" stroke="rgba(21,21,21,0.28)" />
        <text x={CX} y={381} textAnchor="middle" fontSize="8.5" letterSpacing="1.2" fill="rgba(21,21,21,0.6)" style={{ fontFamily: MONO }}>
          THERMOPOMPESÀVENDRE.CA
        </text>

        {/* Reflet du verre */}
        <path d="M 41.3 184.1 A 185 185 0 0 1 106.1 86.2" fill="none" stroke="#FFFFFF" strokeOpacity="0.9" strokeWidth="8" strokeLinecap="round" />
        <path d="M 36 214 A 185 185 0 0 1 37.3 203.1" fill="none" stroke="#FFFFFF" strokeOpacity="0.9" strokeWidth="8" strokeLinecap="round" />

        {/* Scellé */}
        <path d="M 212 446 C 204 462, 236 462, 228 446" fill="none" stroke="#6D6D66" strokeWidth="1.4" />
        <circle cx={CX} cy={468} r={9} fill="#8D8D86" />
        <circle cx={CX - 2.5} cy={465.5} r={3} fill="#B9B9B2" />
      </svg>
    </div>
  );
}

/** Deux roues chiffrées « d,d » (la seconde, décimale, sur fond rouge). */
function Register({ x, y, digits, on, delay }: { x: number; y: number; digits: [number, number]; on: boolean; delay: number }) {
  return (
    <g>
      <rect x={x - 5} y={y - 5} width={86} height={50} rx={6} fill="#E8E6DD" stroke="rgba(21,21,21,0.25)" />
      <Wheel x={x} y={y} digit={digits[0]} on={on} delay={delay} />
      <text x={x + 38} y={y + 37} textAnchor="middle" fontSize="20" fontWeight="700" fill={INK} style={{ fontFamily: MONO }}>
        ,
      </text>
      <Wheel x={x + 44} y={y} digit={digits[1]} on={on} delay={delay + 0.18} dec />
    </g>
  );
}

const WH = 40;
function Wheel({ x, y, digit, on, delay, dec }: { x: number; y: number; digit: number; on: boolean; delay: number; dec?: boolean }) {
  const reduce = !!useReduced();
  // Deux tours de chiffres : chaque roue fait un tour complet avant de s'arrêter.
  const target = on ? -(digit + 10) * WH : 0;
  return (
    <g>
      <rect x={x} y={y} width={32} height={WH} rx={3} fill={dec ? RED : INK} />
      <svg x={x} y={y} width={32} height={WH} viewBox={`0 0 32 ${WH}`}>
        <motion.g initial={false} animate={{ y: target }} transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 70, damping: 13, mass: 1, delay }}>
          {Array.from({ length: 20 }, (_, d) => (
            <text key={d} x={16} y={29 + d * WH} textAnchor="middle" fontSize="24" fontWeight="600" fill="#FBFAF4" style={{ fontFamily: MONO }}>
              {d % 10}
            </text>
          ))}
        </motion.g>
        <rect x={0} y={0} width={32} height={WH} fill="url(#ct-wheel)" />
      </svg>
    </g>
  );
}
