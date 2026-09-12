"use client";

import "./heroes-v2.css";
import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent, type PointerEvent as ReactPointerEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, MotionConfig, animate, motion, useMotionValue, useMotionValueEvent, useTransform, type AnimationPlaybackControls, type MotionValue } from "motion/react";
import { Tick, fmtNum, useLater, useReducedSafe } from "./Tick";

/* ==================================================================
   Le duel à glissière — héros de /comparer.
   Deux moitiés : acier froid à gauche, sable chaud à droite. Chaque
   moitié porte sa vraie thermopompe et ses vrais chiffres, face à
   face. Un séparateur vertical se tire (pointeur ou clavier) : en
   gagnant du terrain, un côté révèle ses avantages chiffrés sur
   l'autre (écarts calculés sur les valeurs certifiées).
   Signature : le séparateur balaie la scène une fois au chargement,
   puis suit la main.
   - Sélection en cours : les deux premiers modèles choisis.
   - Sans sélection : l'exemple de l'accueil (deux murales 12 000 BTU).
   Valeur absente = N/D ; sans photo : le nom de la marque.
   ================================================================== */

export type VsModel = {
  slug: string;
  brand: string;
  name: string;
  img: string | null;
  h5: number | null;
  hspf2: number | null;
  seer2: number | null;
};

const STEEL = "#DCE3E8";
const SAND = "#EFE5D6";
const INK = "#141A1F";
const MUTE = "rgba(20,26,31,0.62)";
const FAINT = "rgba(20,26,31,0.42)";
const LINE = "rgba(20,26,31,0.16)";
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const DISPLAY = "var(--font-display), var(--font-sans), sans-serif";
const MIN = 12;
const MAX = 88;

type Key = "h5" | "hspf2" | "seer2";
const METRICS: { key: Key; label: string; unit: string; d: number }[] = [
  { key: "h5", label: "BTU/h à −15 °C", unit: "BTU/h à −15 °C", d: 0 },
  { key: "hspf2", label: "HSPF2 · chauffage", unit: "HSPF2", d: 1 },
  { key: "seer2", label: "SEER2 · climatisation", unit: "SEER2", d: 1 },
];

const clamp = (v: number) => Math.min(MAX, Math.max(MIN, v));

export function DuelGlissiere({ models, mode, extra, hasComparison }: { models: VsModel[]; mode: "exemple" | "selection"; extra: number; hasComparison: boolean }) {
  const reduce = useReducedSafe();
  const rootRef = useRef<HTMLElement>(null);
  const pos = useMotionValue(50);
  const [now, setNow] = useState(50);
  const [hint, setHint] = useState(true);
  useMotionValueEvent(pos, "change", (v) => setNow(Math.round(v)));
  const leftClip = useTransform(pos, (v) => `inset(0% ${100 - v}% 0% 0%)`);
  const rightClip = useTransform(pos, (v) => `inset(0% 0% 0% ${v}%)`);
  const at = useTransform(pos, (v) => `${v}%`);

  const sweep = useRef<AnimationPlaybackControls | null>(null);
  const dragging = useRef(false);
  // Cible clavier : plusieurs appuis rapides s'additionnent même pendant l'animation.
  const target = useRef<number | null>(null);

  const [a, b] = models;

  // Balayage d'ouverture : le séparateur montre chaque côté, puis revient au centre.
  useEffect(() => {
    if (reduce || !a) return;
    sweep.current = animate(pos, [50, 72, 28, 50], { duration: 3.2, times: [0, 0.36, 0.74, 1], ease: "easeInOut", delay: 1.15 });
    // L'invite « Glissez » s'efface d'elle-même après le balayage.
    const t = window.setTimeout(() => setHint(false), 6200);
    return () => {
      sweep.current?.stop();
      window.clearTimeout(t);
    };
  }, [pos, reduce, a]);

  const take = () => {
    sweep.current?.stop();
    setHint(false);
  };
  const xToPos = (clientX: number) => {
    const r = rootRef.current?.getBoundingClientRect();
    return r ? clamp(((clientX - r.left) / r.width) * 100) : 50;
  };
  const onDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if ((e.target as Element).closest("a")) return;
    if (e.pointerType === "mouse" && e.button !== 0) return;
    take();
    target.current = null;
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    animate(pos, xToPos(e.clientX), reduce ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 38 });
  };
  const onMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (dragging.current) pos.set(xToPos(e.clientX));
  };
  const onUp = () => {
    dragging.current = false;
  };
  const onKey = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    const step = e.shiftKey ? 12 : 5;
    let v = target.current ?? pos.get();
    if (e.key === "ArrowLeft" || e.key === "ArrowDown") v -= step;
    else if (e.key === "ArrowRight" || e.key === "ArrowUp") v += step;
    else if (e.key === "Home") v = MIN;
    else if (e.key === "End") v = MAX;
    else if (e.key === "Enter" || e.key === " ") v = 50;
    else return;
    e.preventDefault();
    take();
    target.current = clamp(v);
    animate(pos, target.current, reduce ? { duration: 0 } : { type: "spring", stiffness: 320, damping: 32 });
  };

  const caption =
    mode === "exemple"
      ? "Exemple : deux murales de 12 000 BTU certifiées climat froid. Chiffres ENERGY STAR et Hydro-Québec."
      : extra > 0
        ? `Votre sélection · ${extra} autre${extra > 1 ? "s" : ""} modèle${extra > 1 ? "s" : ""} dans la comparaison ci-dessous.`
        : "Votre sélection. Le détail complet est ci-dessous.";

  return (
    <MotionConfig reducedMotion="user">
    <section ref={rootRef} aria-labelledby="dg-titre" className="dg-root pv2-root relative -mt-[93px] overflow-hidden min-[1700px]:-mt-[105px]" style={{ background: SAND, color: INK, fontFamily: DISPLAY }}>
      {/* Moitié acier : suit le séparateur sur toute la hauteur du héros. */}
      <motion.div aria-hidden="true" className="absolute inset-0" style={{ background: STEEL, clipPath: leftClip }} />
      <motion.div aria-hidden="true" className="pointer-events-none absolute inset-y-0 w-px" style={{ left: at, background: "rgba(20,26,31,0.14)" }} />

      {/* ── Titre centré ── */}
      <div className="relative z-10 mx-auto max-w-[1180px] px-5 pt-[132px] text-center sm:px-8 min-[1700px]:pt-[150px]">
        <motion.nav aria-label="Fil d’Ariane" className="text-[12.5px] font-medium" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <ol className="m-0 flex list-none flex-wrap items-center justify-center gap-x-2 gap-y-1 p-0" style={{ color: MUTE }}>
            <li><Link href="/" className="hover:underline">Accueil</Link></li>
            <li aria-hidden="true" style={{ color: FAINT }}>/</li>
            <li><Link href="/thermopompes" className="hover:underline">Thermopompes</Link></li>
            <li aria-hidden="true" style={{ color: FAINT }}>/</li>
            <li style={{ color: INK }}><span aria-current="page">Comparer</span></li>
          </ol>
        </motion.nav>
        <motion.p
          className="mx-auto mt-6 flex items-center justify-center gap-3 text-[11.5px] font-semibold uppercase"
          style={{ letterSpacing: "0.26em", color: MUTE, margin: "24px 0 0" }}
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <span aria-hidden="true" className="h-px w-8" style={{ background: INK }} />
          Comparateur
          <span aria-hidden="true" className="h-px w-8" style={{ background: INK }} />
        </motion.p>
        <h1 id="dg-titre" className="mx-auto" style={{ margin: "14px 0 0", fontSize: "clamp(38px, 4.6vw, 74px)", lineHeight: 1, letterSpacing: "-0.045em", fontWeight: 500, textWrap: "balance" }}>
          {["Comparez", "ce", "qui", "compte", "vraiment."].map((w, i) => (
            <span key={w} className="inline-block overflow-hidden align-bottom" style={{ paddingBottom: "0.1em", marginBottom: "-0.1em" }}>
              <motion.span className="inline-block" initial={reduce ? false : { y: "110%" }} animate={{ y: "0%" }} transition={{ duration: 1, ease: EASE, delay: 0.15 + i * 0.06 }}>
                {w}
              </motion.span>
              {i < 4 ? " " : ""}
            </span>
          ))}
        </h1>
        <motion.p className="mx-auto text-[16.5px] sm:text-[18px]" style={{ color: MUTE, margin: "14px 0 0", lineHeight: 1.5 }} initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}>
          Performance hivernale, efficacité, silence et garantie.
        </motion.p>
      </div>

      {/* ── Scène : deux moitiés, un séparateur ── */}
      {a && (
        <div
          className="dg-stage relative z-10 mt-8 h-[440px] sm:h-[460px] lg:mt-6 lg:h-[clamp(350px,calc(100svh-500px),470px)]"
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
        >
          <Half side="a" m={a} other={b} clip={leftClip} bg={STEEL} reduce={reduce} />
          <Half side="b" m={b} other={a} clip={rightClip} bg={SAND} reduce={reduce} />

          {/* Séparateur + poignée */}
          <motion.div aria-hidden="true" className="pointer-events-none absolute inset-y-0 z-20 w-px -translate-x-1/2" style={{ left: at, background: INK }} />
          <motion.div className="absolute top-1/2 z-30" style={{ left: at }}>
            <div
              role="slider"
              tabIndex={0}
              aria-label={b ? `Partage de l’écran entre ${a.brand} et ${b.brand}` : "Partage de l’écran entre les deux modèles"}
              aria-orientation="horizontal"
              aria-valuemin={MIN}
              aria-valuemax={MAX}
              aria-valuenow={now}
              aria-valuetext={b ? `${a.brand} ${now} %, ${b.brand} ${100 - now} %` : `${now} %`}
              onKeyDown={onKey}
              className="dg-knob flex h-[76px] w-[28px] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-[5px] rounded-full"
              style={{ background: INK, boxShadow: "0 10px 24px -10px rgba(20,26,31,0.55)" }}
            >
              <span className="block h-px w-[11px] bg-white/85" />
              <span className="block h-px w-[11px] bg-white/85" />
              <span className="block h-px w-[11px] bg-white/85" />
            </div>
            <AnimatePresence>
              {hint && (
                <motion.span
                  aria-hidden="true"
                  className="absolute left-0 top-[52px] -translate-x-1/2 whitespace-nowrap text-[10.5px] font-semibold uppercase"
                  style={{ letterSpacing: "0.22em", color: INK }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.7 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, delay: reduce ? 0 : 0.9 }}
                >
                  Glissez
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}

      {/* ── Actions ── */}
      <div className="relative z-10 mx-auto max-w-[1180px] px-5 pb-14 pt-7 text-center sm:px-8 lg:pb-16">
        {a && (
          <motion.p className="text-[12.5px]" style={{ color: MUTE, margin: 0 }} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1.2 }}>
            {caption}
          </motion.p>
        )}
        <motion.div className="mt-6 flex flex-wrap items-center justify-center gap-3" initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: EASE, delay: 0.8 }}>
          <Link href="#comparateur" className="dg-btn inline-flex items-center gap-3 rounded-full py-3.5 pl-6 pr-5 text-[15px] font-semibold text-white" style={{ background: INK }}>
            {hasComparison ? "Voir la comparaison" : "Choisir mes modèles"}
            <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M6 13l6 6 6-6" />
            </svg>
          </Link>
          <Link href="/thermopompes" className="dg-btn dg-ghost inline-flex items-center rounded-full px-6 py-3.5 text-[15px] font-semibold" style={{ border: `1px solid ${INK}` }}>
            Parcourir le catalogue
          </Link>
        </motion.div>
        {/* ThermoScan : comparer avec l'appareil actuel, directement dans le héros */}
        <motion.div initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1 }}>
          <Link href="/thermoscan" className="group mx-auto mt-7 inline-flex max-w-full flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-full px-5 py-2.5" style={{ border: `1px solid ${LINE}`, background: "rgba(255,255,255,0.35)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/thermoscan-logo.webp" alt="ThermoScan" width={83} height={30} style={{ height: 26, width: 72, maxWidth: "none", objectFit: "contain" }} />
            <span className="text-[13.5px]" style={{ color: MUTE }}>
              Comparez avec votre appareil actuel
            </span>
            <span className="text-[12.5px] font-semibold group-hover:underline" style={{ color: INK }}>
              En savoir plus →
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
    </MotionConfig>
  );
}

/* ------------------------------------------------------------------
   Une moitié : fond, photo, chiffres, et — hors de son territoire —
   ses avantages chiffrés, révélés quand elle gagne du terrain.
   ------------------------------------------------------------------ */
function Half({ side, m, other, clip, bg, reduce }: { side: "a" | "b"; m: VsModel | undefined; other: VsModel | undefined; clip: MotionValue<string>; bg: string; reduce: boolean }) {
  const play = useLater(1.1, reduce);
  const from = side === "a" ? -70 : 70;
  return (
    <motion.div className="absolute inset-0" style={{ background: bg, clipPath: clip }}>
      {/* Photo, face à l'adversaire */}
      <motion.div className={`dg-${side}-photo absolute`} style={{ mixBlendMode: "multiply" }} initial={reduce ? false : { opacity: 0, x: from }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.3, ease: EASE, delay: 0.35 }}>
        {m ? (
          <Link href={`/produit/${m.slug}`} aria-label={`${m.brand} ${m.name} : voir la fiche`} className="group absolute inset-0 block" draggable={false}>
            {m.img ? (
              <>
                <span aria-hidden="true" className="absolute inset-x-[12%] bottom-[2%] h-[8%]" style={{ background: "radial-gradient(closest-side, rgba(20,26,31,0.2), rgba(20,26,31,0))" }} />
                <Image
                  src={m.img}
                  alt={`Thermopompe ${m.brand} ${m.name}`}
                  fill
                  priority
                  draggable={false}
                  sizes="(min-width: 1024px) 24vw, 44vw"
                  className="dg-photo transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{ objectFit: "contain", objectPosition: "center bottom", paddingBottom: "5%" }}
                />
              </>
            ) : (
              <span className="absolute inset-0 flex items-center justify-center px-3 text-center" style={{ fontSize: "clamp(24px, 3.4vw, 56px)", fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 1, overflowWrap: "anywhere" }}>
                {m.brand}
              </span>
            )}
          </Link>
        ) : (
          <Link href="#comparateur" className="absolute inset-[8%_4%] flex flex-col items-center justify-center gap-2 rounded-[18px] px-4 text-center text-[14px] font-semibold sm:text-[16px]" style={{ border: `1px dashed ${FAINT}`, color: INK }}>
            Choisissez un deuxième modèle
            <span aria-hidden="true">→</span>
          </Link>
        )}
      </motion.div>

      {/* Identité + chiffres */}
      {m && (
        <div className={`dg-${side}-figs absolute`}>
        <motion.div initial={reduce ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: EASE, delay: 0.6 }}>
          <p className="truncate text-[10.5px] font-semibold uppercase sm:text-[11px]" style={{ letterSpacing: "0.2em", color: MUTE, margin: 0 }}>
            {m.brand}
          </p>
          <Link href={`/produit/${m.slug}`} className="dg-name block text-[14px] font-semibold leading-snug sm:text-[17px]" style={{ letterSpacing: "-0.015em", margin: "4px 0 0", overflowWrap: "anywhere" }} draggable={false}>
            {m.name}
          </Link>
          <dl className="m-0 mt-3 sm:mt-5">
            {METRICS.map((r) => {
              const v = m[r.key];
              const o = other?.[r.key] ?? null;
              const lead = v != null && o != null && v > o;
              return (
                <div key={r.key} className="py-1.5 sm:py-2" style={{ borderTop: `1px solid ${LINE}` }}>
                  <dt className="text-[10px] font-medium uppercase sm:text-[10.5px]" style={{ letterSpacing: "0.14em", color: FAINT }}>
                    {r.label}
                  </dt>
                  <dd className="m-0" style={{ fontSize: "clamp(22px, 2.6vw, 42px)", fontWeight: 300, letterSpacing: "-0.04em", lineHeight: 1.1, color: v == null ? FAINT : lead || o == null ? INK : MUTE }}>
                    {v == null ? "N/D" : <Tick value={v} decimals={r.d} play={play} align={side === "a" ? "left" : "right"} />}
                    {lead && (
                      <span className="ml-2 inline-block align-middle text-[9.5px] font-semibold uppercase sm:text-[10px]" style={{ letterSpacing: "0.16em", color: INK }}>
                        en tête
                      </span>
                    )}
                  </dd>
                </div>
              );
            })}
          </dl>
        </motion.div>
        </div>
      )}

      {/* Avantages chiffrés — sous l'autre moitié, révélés au glissement */}
      {m && other && <Advantages side={side} m={m} other={other} />}
    </motion.div>
  );
}

function Advantages({ side, m, other }: { side: "a" | "b"; m: VsModel; other: VsModel }) {
  const wins = METRICS.flatMap((r) => {
    const v = m[r.key];
    const o = other[r.key];
    return v != null && o != null && v > o ? [{ ...r, diff: v - o }] : [];
  });
  return (
    <div className={`dg-${side}-adv absolute`}>
      <p className="text-[10.5px] font-semibold uppercase sm:text-[11px]" style={{ letterSpacing: "0.2em", color: MUTE, margin: 0 }}>
        {m.brand} devance {other.brand}
      </p>
      {wins.length ? (
        <ul className="m-0 mt-3 list-none p-0">
          {wins.map((w) => (
            <li key={w.key} className="py-1.5" style={{ borderTop: `1px solid ${LINE}` }}>
              <span className="block" style={{ fontSize: "clamp(24px, 3vw, 50px)", fontWeight: 300, letterSpacing: "-0.045em", lineHeight: 1.05 }}>
                +{fmtNum(w.diff, w.d)}
              </span>
              <span className="block text-[10.5px] font-medium uppercase" style={{ letterSpacing: "0.14em", color: FAINT }}>
                {w.unit}
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-[14px] leading-snug sm:text-[16px]" style={{ color: MUTE, margin: "10px 0 0" }}>
          Aucun avantage chiffré sur ces trois critères&nbsp;: {other.brand} fait au moins aussi bien.
        </p>
      )}
      <p className="text-[11.5px]" style={{ color: FAINT, margin: "10px 0 0" }}>
        Écarts sur les valeurs certifiées.
      </p>
    </div>
  );
}
