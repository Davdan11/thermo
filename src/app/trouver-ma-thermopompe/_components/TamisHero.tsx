"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { motion } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { layoutSieve, sieveStages, type SieveLayout, type SieveStage } from "./tamis";

/* ==================================================================
   ThermoMatch — « Le tamis » : haut de l'écran des résultats.
   Sur l'encre des cartes : un champ de points, UN POINT PAR MACHINE
   réellement évaluée (summaryContext.candidatesEvaluated). Les points
   se posent en grille dense ; ceux hors calibre s'éteignent (il en reste
   candidatesRetained) ; puis il n'en reste que les retenues, qui
   s'allument en orange et rejoignent leur nom (les vrais résultats).
   Un nombre absent saute son étape : jamais de point ni de nombre inventé.
   - Un champ, pas un schéma : aucun trait, aucune flèche, aucune neige.
   - Canvas dessiné après le montage, disposition à graine fixe (tamis.ts) ;
     le HTML serveur porte les vrais nombres et l'état final (légende,
     noms), rien d'animé. Pause hors écran et onglet caché ; densité de
     pixels plafonnée à 2 ; « réduire les animations » : état final d'un
     coup. Aucun filtre CSS.
   ================================================================== */

export interface TamisContext {
  estimatedLoadBtu?: number;
  uncertaintyPct?: number;
  heatedAreaFt2?: number;
  floors?: number;
  region?: string | null;
  isMultiZone?: boolean;
  requestedZones?: number;
  candidatesEvaluated?: number;
  candidatesRetained?: number;
}

export type TamisName = { key: string; brand: string; series: string };

const C = {
  ink: "#0A1419",
  cream: "#F4EFE7",
  orange: "#E54B17",
  mute: "rgba(244,239,231,0.66)",
  /** Texte en attente : encore lisible sur l'encre (plus de 5:1). */
  dim: "rgba(244,239,231,0.55)",
  line: "rgba(244,239,231,0.12)",
};
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const DISPLAY = "var(--font-display), var(--font-sans), sans-serif";
const fr = (n: number) => n.toLocaleString("fr-CA", { maximumFractionDigits: 0 });
const num = (v: unknown): number | null => (typeof v === "number" && Number.isFinite(v) ? v : null);

/* Horloge du tamis, en secondes depuis l'entrée dans l'écran. */
type Clock = { set: number; ret: number | null; keep: number; move: number; end: number };
function clockFor(dimRetained: boolean): Clock {
  const set = 1.5; // les points se posent
  const ret = dimRetained ? 1.9 : null; // ceux hors calibre s'éteignent
  const keep = dimRetained ? 3.2 : 1.9; // puis tous sauf les retenues
  const move = keep + 0.9; // les retenues s'allument et rejoignent leur nom
  return { set, ret, keep, move, end: move + 1.4 };
}

const clamp01 = (t: number) => (t < 0 ? 0 : t > 1 ? 1 : t);
const easeOut = (t: number) => 1 - Math.pow(1 - clamp01(t), 3);
const easeInOut = (t: number) => {
  const x = clamp01(t);
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
};
/** Petit décalage propre à chaque point (déterministe) : les extinctions ne tombent pas en bloc. */
const jitter = (i: number) => (((i + 1) * 2654435761) >>> 0) / 4294967296;
/** Part réservée aux noms, à droite du champ. */
const namesFrac = (w: number) => (w < 480 ? 0.44 : 0.38);

/** Une image du tamis à l'instant t. */
function paint(g: CanvasRenderingContext2D, w: number, h: number, t: number, L: SieveLayout, clock: Clock) {
  g.clearRect(0, 0, w, h);
  const total = L.dots.length;
  if (!total) return;
  const fieldW = Math.max(40, w * (1 - namesFrac(w)) - 34);
  const fieldH = Math.max(40, h - 20);
  const cell = Math.min(fieldW / L.cols, fieldH / L.rows);
  const gw = cell * L.cols;
  const gh = cell * L.rows;
  const ox = 4;
  const oy = 10 + (fieldH - gh) / 2;
  const r = Math.max(0.7, Math.min(2.6, cell * 0.26));
  const retained = L.retained ? new Set(L.retained) : null;
  const keptAt = new Map(L.kept.map((i, j) => [i, j]));

  g.fillStyle = C.cream;
  for (let i = 0; i < total; i++) {
    if (keptAt.has(i)) continue;
    const d = L.dots[i];
    const appear = 0.05 + (d.x * 0.75 + d.y * 0.25) * (clock.set - 0.5);
    let a = 0.5 * easeOut((t - appear) / 0.45);
    if (retained && !retained.has(i) && clock.ret != null) {
      a += (0.07 - a) * easeOut((t - clock.ret - jitter(i) * 0.7) / 0.3);
    } else {
      const floor = retained ? 0.16 : 0.07;
      a += (floor - a) * easeOut((t - clock.keep - jitter(i) * 0.5) / 0.3);
    }
    if (a <= 0.004) continue;
    g.globalAlpha = a;
    const x = ox + d.x * gw;
    const y = oy + d.y * gh;
    if (r < 1.2) g.fillRect(x - r, y - r, r * 2, r * 2);
    else {
      g.beginPath();
      g.arc(x, y, r, 0, Math.PI * 2);
      g.fill();
    }
  }

  // Les retenues : crème, puis orange ; elles grossissent et rejoignent leur nom (à gauche de la colonne des noms).
  const n = L.kept.length;
  const ax = w * (1 - namesFrac(w)) - 12;
  L.kept.forEach((i, j) => {
    const d = L.dots[i];
    const appear = 0.05 + (d.x * 0.75 + d.y * 0.25) * (clock.set - 0.5);
    const a0 = 0.5 * easeOut((t - appear) / 0.45);
    const p = easeInOut((t - clock.move - j * 0.12) / 1);
    const x = ox + d.x * gw + (ax - (ox + d.x * gw)) * p;
    const y = oy + d.y * gh + ((h * (j + 0.5)) / n - (oy + d.y * gh)) * p;
    const rad = r + (Math.max(r * 1.8, 4.5) - r) * p;
    const cr = Math.round(244 + (229 - 244) * p);
    const cg = Math.round(239 + (75 - 239) * p);
    const cb = Math.round(231 + (23 - 231) * p);
    g.globalAlpha = a0 + (1 - a0) * p;
    if (g.globalAlpha <= 0.004) return;
    g.fillStyle = `rgb(${cr},${cg},${cb})`;
    g.beginPath();
    g.arc(x, y, rad, 0, Math.PI * 2);
    g.fill();
  });
  g.globalAlpha = 1;
}

export function TamisHero({ ctx, names }: { ctx: TamisContext | null; names: TamisName[] }) {
  const reduce = useReduced();
  const kept = names.length;
  const stages = sieveStages(ctx, kept);
  const stagesKey = stages.map((s) => `${s.key}:${s.n}`).join("|");
  const iRetained = stages.findIndex((s) => s.key === "retained");
  const fieldRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Rendu serveur et « réduire les animations » : état final (dernière étape active, noms allumés).
  const [stage, setStage] = useState(stages.length - 1);
  const [arrived, setArrived] = useState(true);

  useEffect(() => {
    const box = fieldRef.current;
    const canvas = canvasRef.current;
    const g = canvas?.getContext("2d");
    if (!box || !canvas || !g) return;
    const st: SieveStage[] = stagesKey.split("|").map((s) => {
      const [key, n] = s.split(":");
      return { key: key as SieveStage["key"], n: Number(n), label: "" };
    });
    let w = 0;
    let h = 0;
    let layout: SieveLayout | null = null;
    let clock = clockFor(false);
    let elapsed = 0;
    let started = false;
    let visible = false;
    let raf = 0;
    let last = 0;
    let shownStage = -1;
    let shownArrived = true;

    const sync = () => {
      const s = elapsed >= clock.move ? st.length - 1 : clock.ret != null && elapsed >= clock.ret + 0.5 && iRetained >= 0 ? iRetained : 0;
      if (s !== shownStage) {
        shownStage = s;
        setStage(s);
      }
      const arr = elapsed >= clock.move + 0.9;
      if (arr !== shownArrived) {
        shownArrived = arr;
        setArrived(arr);
      }
    };
    const draw = () => {
      if (layout && w > 0 && h > 0) paint(g, w, h, elapsed, layout, clock);
    };
    const resize = () => {
      const rect = box.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.round(w * dpr));
      canvas.height = Math.max(1, Math.round(h * dpr));
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      const fw = w * (1 - namesFrac(w)) - 34;
      const fh = h - 20;
      layout = layoutSieve(st, fw > 0 && fh > 0 ? fw / fh : 1);
      clock = clockFor(layout.retained != null && layout.retained.length < layout.dots.length);
      if (reduce) elapsed = clock.end;
      draw();
    };
    const frame = (now: number) => {
      elapsed += Math.min(0.05, (now - last) / 1000);
      last = now;
      draw();
      sync();
      raf = elapsed < clock.end && visible && !document.hidden ? requestAnimationFrame(frame) : 0;
    };
    const play = () => {
      if (raf || !started || elapsed >= clock.end || document.hidden) return;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    };
    const stop = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(box);
    // Départ à l'entrée dans l'écran ; pause dès qu'il en sort.
    const io = new IntersectionObserver(
      ([e]) => {
        visible = e.isIntersecting;
        if (visible && !started && !reduce) {
          started = true;
          elapsed = 0;
          sync();
        }
        if (visible) play();
        else stop();
      },
      { threshold: 0.2 },
    );
    io.observe(box);
    const onVisibility = () => (document.hidden ? stop() : visible && play());
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      stop();
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduce, stagesKey, iRetained]);

  const load = num(ctx?.estimatedLoadBtu);
  const area = num(ctx?.heatedAreaFt2);
  const floors = num(ctx?.floors);
  const facts = ctx
    ? [area != null ? `${fr(area)} pi²` : null, floors != null ? (floors > 1 ? `${fr(floors)} étages` : "1 étage") : null, ctx.region ?? null, ctx.isMultiZone && num(ctx.requestedZones) != null ? `${fr(ctx.requestedZones as number)} zones` : null].filter((f): f is string => Boolean(f))
    : [];
  const lead = kept === 3 ? "Vos trois thermopompes," : kept === 2 ? "Vos deux thermopompes," : "Votre thermopompe,";
  const em = kept > 1 ? "calibrées pour votre maison." : "calibrée pour votre maison.";
  const first = stages[0].key;
  const unit = first === "evaluated" ? "machine évaluée" : first === "retained" ? "machine de bon calibre" : "machine retenue";

  return (
    <section aria-labelledby="tm-titre" className="relative mx-auto w-full max-w-[1320px] overflow-hidden rounded-[32px]" style={{ background: C.ink, border: `1px solid ${C.line}`, color: C.cream, fontFamily: DISPLAY }}>
      <div className="grid gap-10 px-5 pb-8 pt-10 sm:px-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-end lg:gap-14 lg:px-14 lg:pb-12 lg:pt-14">
        <div className="min-w-0">
          <Rise delay={0.05} className="flex flex-wrap items-center gap-3 text-[12px] font-medium uppercase" style={{ letterSpacing: "0.2em", color: C.mute }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/logo-thermomatch-nav.webp" alt="ThermoMatch" width={118} height={16} style={{ width: 118, height: 16, maxWidth: "none", display: "block" }} />
            <span aria-hidden="true">·</span>
            Analyse terminée
          </Rise>

          <h1 id="tm-titre" style={{ fontSize: "clamp(38px, 4.6vw, 72px)", lineHeight: 0.95, letterSpacing: "-0.045em", fontWeight: 600, margin: "26px 0 0" }}>
            <Line i={0}>{lead}</Line>
            <Line i={1}>
              <span className="tm-serif">{em}</span>
            </Line>
          </h1>

          {facts.length > 0 && (
            <Rise delay={0.45} className="mt-8 flex flex-wrap gap-2">
              {facts.map((f) => (
                <span key={f} className="rounded-full px-3.5 py-1.5 text-[13px] font-medium" style={{ border: `1px solid ${C.line}`, color: C.mute }}>
                  {f}
                </span>
              ))}
            </Rise>
          )}

          {load != null && (
            <Rise delay={0.6} className="mt-8">
              <p className="text-[15px]" style={{ color: C.mute, margin: 0 }}>
                Charge de chauffage estimée à −15 °C
              </p>
              <p className="flex flex-wrap items-baseline gap-x-3" style={{ margin: "6px 0 0" }}>
                <span className="tabular-nums" style={{ fontSize: "clamp(40px, 4.4vw, 64px)", fontWeight: 600, letterSpacing: "-0.05em", lineHeight: 1 }}>
                  {fr(Math.round(load))}
                </span>
                <span className="text-[16px]" style={{ color: C.mute }}>
                  BTU/h{num(ctx?.uncertaintyPct) != null ? ` · ±${fr(ctx?.uncertaintyPct as number)} %` : ""}
                </span>
              </p>
            </Rise>
          )}
        </div>

        <Rise delay={0.3} className="min-w-0">
          <div ref={fieldRef} className="relative h-[290px] sm:h-[340px] lg:h-[380px]">
            <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 h-full w-full" />
            <ol aria-label={kept > 1 ? "Les machines retenues" : "La machine retenue"} className="absolute inset-y-0 right-0 flex w-[44%] flex-col sm:w-[38%]" style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {names.map((n, j) => (
                <li key={n.key} className="flex min-h-0 flex-1 items-center gap-3">
                  <span className="w-4 shrink-0 text-[15px] font-semibold tabular-nums" style={{ color: arrived ? C.orange : C.dim, transition: reduce ? "none" : "color 0.5s" }}>
                    {j + 1}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[15px] font-semibold leading-tight sm:text-[16px]">{n.brand}</span>
                    {n.series ? (
                      <span className="block truncate text-[12.5px]" style={{ color: C.mute }}>
                        {n.series}
                      </span>
                    ) : null}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <ol className="mt-6 grid gap-3 sm:grid-cols-3 sm:gap-5" style={{ listStyle: "none", margin: "24px 0 0", padding: 0 }}>
            {stages.map((s, k) => {
              const on = k === stage;
              return (
                <li key={s.key} className="flex items-baseline gap-2.5" style={{ color: on ? C.cream : C.dim, transition: reduce ? "none" : "color 0.5s" }}>
                  <span aria-hidden="true" className="relative top-[-3px] inline-block h-2 w-2 shrink-0 rounded-full" style={{ background: s.key === "kept" ? C.orange : C.cream, opacity: s.key === "evaluated" ? 0.45 : s.key === "retained" ? 0.8 : 1 }} />
                  <span>
                    <span className="text-[22px] font-semibold tabular-nums" style={{ letterSpacing: "-0.03em" }}>
                      {fr(s.n)}
                    </span>{" "}
                    <span className="text-[13px]">{s.label}</span>
                  </span>
                </li>
              );
            })}
          </ol>
          <p className="text-[12.5px]" style={{ color: C.dim, margin: "12px 0 0" }}>
            {`Un point par ${unit}.`}
          </p>
        </Rise>
      </div>
    </section>
  );
}

function Line({ i, children }: { i: number; children: ReactNode }) {
  const reduce = useReduced();
  return (
    <span style={{ display: "block", overflow: "hidden", paddingBottom: "0.14em", marginBottom: "-0.14em" }}>
      <motion.span style={{ display: "block" }} initial={reduce ? false : { y: "115%" }} animate={{ y: "0%" }} transition={{ duration: 1.1, ease: EASE, delay: 0.15 + i * 0.09 }}>
        {children}
      </motion.span>
    </span>
  );
}

function Rise({ delay, className, style, children }: { delay: number; className?: string; style?: CSSProperties; children: ReactNode }) {
  const reduce = useReduced();
  return (
    <motion.div className={className} style={style} initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: EASE, delay }}>
      {children}
    </motion.div>
  );
}
