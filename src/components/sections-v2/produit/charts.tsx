"use client";

import { useEffect, useId, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { fmtNum, useReducedSafe } from "@/components/heroes-v2/produit/Tick";
import { GREEN, INK, LABEL, LINE, ORANGE } from "./tokens";
import { DRAW, EASE } from "./motion";

/* ==================================================================
   Dessins de la fiche d'ingénierie, tracés au trait à partir des
   seules données de la fiche (décor : les mêmes valeurs sont dans le
   texte ou le tableau voisin, lisibles par tous).
   - ColdChart   : capacité de chauffage selon la température
   - PriceRanges : fourchette installée, puis glissement LogisVert
   - NoiseScale  : règle des décibels, plage intérieure, extérieur
   Hauteur fixée en CSS avant la mesure : aucun décalage de mise en page.
   ================================================================== */

function useBox<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [box, setBox] = useState({ w: 0, h: 0 });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const read = () => setBox({ w: Math.round(el.clientWidth), h: Math.round(el.clientHeight) });
    read();
    const ro = new ResizeObserver(read);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return [ref, box] as const;
}

const MONO = "sv2f-mono";
const dec = (v: number) => (Number.isInteger(v) ? 0 : 1);

/* ------------------------------------------------------------------
   Capacité selon la température
   ------------------------------------------------------------------ */
export type ColdPoint = { t: number; btu: number; pct: number | null; nominal: boolean };

export function ColdChart({ points, minTemp }: { points: ColdPoint[]; minTemp: number | null }) {
  const [ref, { w, h }] = useBox<HTMLDivElement>();
  const seen = useInView(ref, { once: true, amount: 0.35 });
  const reduce = useReducedSafe();
  const uid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const on = seen || reduce;
  const pts = [...points].sort((a, b) => b.t - a.t);

  let svg: React.ReactNode = null;
  if (w > 0 && h > 0 && pts.length) {
    const narrow = w < 480;
    const temps = pts.map((p) => p.t).concat(minTemp != null ? [minTemp] : []);
    const tHi = Math.max(...temps);
    const tLo = Math.min(...temps);
    const span = Math.max(6, tHi - tLo);
    const L = narrow ? 30 : 44;
    const R = w - (narrow ? 34 : 56);
    const T = 64;
    const B = h - 50;
    const X = (t: number) => L + ((tHi - t) / span) * (R - L);
    const yMax = Math.max(...pts.map((p) => p.btu)) * 1.1;
    const Y = (b: number) => T + (1 - b / yMax) * (B - T);
    const line = pts.map((p, i) => `${i ? "L" : "M"}${X(p.t).toFixed(1)} ${Y(p.btu).toFixed(1)}`).join(" ");
    const area = `${line} L${X(pts[pts.length - 1].t).toFixed(1)} ${B} L${X(pts[0].t).toFixed(1)} ${B} Z`;
    const nominal = pts.find((p) => p.nominal);
    const D = reduce ? 0 : 1.6;
    const fs = narrow ? 11 : 12.5;
    const at = (i: number) => (pts.length > 1 ? (i / (pts.length - 1)) * D : 0);
    const mx = minTemp != null ? X(minTemp) : null;
    const minLabel = minTemp != null ? `Temp. min. annoncée · ${fmtNum(minTemp, dec(minTemp))} °C` : "";

    svg = (
      <svg width={w} height={h} className="block" style={{ overflow: "visible" }} aria-hidden="true">
        <defs>
          <pattern id={`hatch${uid}`} width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="7" stroke={INK} strokeWidth="0.7" />
          </pattern>
        </defs>

        {/* Légendes d'axes */}
        <motion.text x={0} y={14} className={MONO} fontSize={10.5} fill={LABEL} letterSpacing="0.08em" initial={false} animate={{ opacity: on ? 1 : 0 }} transition={{ duration: 0.6 }}>
          BTU/H
        </motion.text>
        <motion.text x={w} y={h - 4} textAnchor="end" className={MONO} fontSize={10.5} fill={LABEL} letterSpacing="0.04em" initial={false} animate={{ opacity: on ? 1 : 0 }} transition={{ duration: 0.6, delay: D * 0.4 }}>
          TEMP. EXTÉRIEURE — PLUS FROID →
        </motion.text>

        {/* Référence nominale (100 %) */}
        {nominal && (
          <motion.g initial={false} animate={{ opacity: on ? 1 : 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <line x1={0} x2={w} y1={Y(nominal.btu)} y2={Y(nominal.btu)} stroke={LABEL} strokeWidth={1} strokeDasharray="2 5" opacity={0.7} />
            <text x={pts.length > 1 ? (X(pts[0].t) + X(pts[1].t)) / 2 : w} y={Y(nominal.btu) + 15} textAnchor={pts.length > 1 ? "middle" : "end"} className={MONO} fontSize={10} fill={LABEL} letterSpacing="0.06em">
              100 % · NOMINAL
            </text>
          </motion.g>
        )}

        {/* Hachures sous la courbe */}
        <motion.path d={area} fill={`url(#hatch${uid})`} initial={false} animate={{ opacity: on ? 0.16 : 0 }} transition={{ duration: 0.9, delay: D * 0.75 }} />

        {/* Ligne de base */}
        <motion.path d={`M0 ${B} H${w}`} stroke={INK} strokeWidth={1} fill="none" initial={false} animate={{ pathLength: on ? 1 : 0 }} transition={{ duration: reduce ? 0 : 1, ease: EASE }} />

        {/* Température minimale annoncée */}
        {mx != null && (
          <motion.g initial={false} animate={{ opacity: on ? 1 : 0 }} transition={{ duration: 0.6, delay: D + 0.2 }}>
            <line x1={mx} x2={mx} y1={T - 30} y2={B} stroke={INK} strokeWidth={1} strokeDasharray="5 4" />
            <text x={mx > w * 0.55 ? mx - 7 : mx + 7} y={T - 36} textAnchor={mx > w * 0.55 ? "end" : "start"} className={MONO} fontSize={narrow ? 10 : 11} fill={INK}>
              {minLabel}
            </text>
          </motion.g>
        )}

        {/* Rappels verticaux + graduations */}
        {pts.map((p, i) => (
          <motion.g key={`d${p.t}`} initial={false} animate={{ opacity: on ? 1 : 0 }} transition={{ duration: 0.5, delay: 0.3 + at(i) }}>
            <line x1={X(p.t)} x2={X(p.t)} y1={Y(p.btu) + 6} y2={B} stroke={LABEL} strokeWidth={1} strokeDasharray="2 3" opacity={0.55} />
            <line x1={X(p.t)} x2={X(p.t)} y1={B} y2={B + 6} stroke={INK} strokeWidth={1} />
            <text x={X(p.t)} y={B + 21} textAnchor="middle" className={MONO} fontSize={narrow ? 10.5 : 11.5} fill={INK}>
              {fmtNum(p.t, dec(p.t))} °C
            </text>
            {p.nominal && (
              <text x={X(p.t)} y={B + 35} textAnchor="middle" className={MONO} fontSize={10} fill={LABEL} letterSpacing="0.06em">
                NOMINAL
              </text>
            )}
          </motion.g>
        ))}

        {/* Courbe */}
        <motion.path d={line} stroke={INK} strokeWidth={1.6} fill="none" strokeLinejoin="round" initial={false} animate={{ pathLength: on ? 1 : 0 }} transition={{ duration: D, ease: DRAW, delay: 0.25 }} />

        {/* Points et valeurs */}
        {pts.map((p, i) => {
          const key = p.t === -15;
          const c = key ? ORANGE : INK;
          const x = X(p.t);
          const y = Y(p.btu);
          const pct = p.nominal ? 100 : p.pct;
          return (
            <motion.g key={`p${p.t}`} initial={false} animate={{ opacity: on ? 1 : 0, y: on ? 0 : 6 }} transition={{ duration: 0.5, ease: EASE, delay: 0.25 + at(i) + 0.1 }}>
              <circle cx={x} cy={y} r={key ? 5.5 : 4.5} fill="#FFFFFF" stroke={c} strokeWidth={key ? 1.6 : 1.25} />
              <circle cx={x} cy={y} r={1.6} fill={c} />
              <text x={x} y={y - 14} textAnchor="middle" className={MONO} fontSize={key ? fs + 2 : fs} fontWeight={key ? 600 : 500} fill={c}>
                {fmtNum(p.btu)}
              </text>
              {pct != null && (
                <text x={x} y={y - (key ? 33 : 30)} textAnchor="middle" className={MONO} fontSize={10} fill={LABEL}>
                  {fmtNum(pct)} %
                </text>
              )}
            </motion.g>
          );
        })}
      </svg>
    );
  }

  return (
    <div ref={ref} className="relative h-[280px] w-full sm:h-[340px]">
      {svg}
    </div>
  );
}

/* ------------------------------------------------------------------
   Fourchette de prix : installée, puis la même fourchette qui glisse
   vers la gauche du montant LogisVert.
   ------------------------------------------------------------------ */
type RangeLabels = { min: string; max: string; afterMin?: string; afterMax?: string; lv?: string };

export function PriceRanges({ min, max, lv, labels }: { min: number; max: number; lv: number; labels: RangeLabels }) {
  const [ref, { w }] = useBox<HTMLDivElement>();
  const seen = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedSafe();
  const on = seen || reduce;
  const withLv = lv > 0;
  const H = withLv ? 176 : 96;

  let svg: React.ReactNode = null;
  if (w > 0) {
    const aMin = Math.max(0, min - lv);
    const aMax = Math.max(0, max - lv);
    const lo = withLv ? aMin : min;
    const hi = max;
    const pad = (hi - lo) * 0.04 || 1;
    const X = (v: number) => 6 + ((v - lo + pad) / (hi - lo + 2 * pad)) * (w - 12);
    const y1 = 44;
    const y2 = 136;
    const shift = X(min) - X(aMin);
    const t = reduce ? 0 : 1;

    const row = (x1: number, x2: number, y: number, color: string, caption: string, l1: string, l2: string, delay: number) => {
      const cx = (x1 + x2) / 2;
      return (
        <g>
          <motion.g initial={false} animate={{ opacity: on ? 1 : 0 }} transition={{ duration: 0.4, delay }}>
            <line x1={x1} x2={x1} y1={y - 16} y2={y + 7} stroke={color} strokeWidth={1} opacity={0.8} />
            <line x1={x2} x2={x2} y1={y - 16} y2={y + 7} stroke={color} strokeWidth={1} opacity={0.8} />
            <text x={cx} y={y - 22} textAnchor="middle" className={MONO} fontSize={10.5} fill={color} letterSpacing="0.1em">
              {caption}
            </text>
          </motion.g>
          <motion.path d={`M${cx} ${y} H${x1}`} stroke={color} strokeWidth={1.4} fill="none" initial={false} animate={{ pathLength: on ? 1 : 0 }} transition={{ duration: 0.8 * t, ease: EASE, delay: delay + 0.15 }} />
          <motion.path d={`M${cx} ${y} H${x2}`} stroke={color} strokeWidth={1.4} fill="none" initial={false} animate={{ pathLength: on ? 1 : 0 }} transition={{ duration: 0.8 * t, ease: EASE, delay: delay + 0.15 }} />
          <motion.g initial={false} animate={{ opacity: on ? 1 : 0 }} transition={{ duration: 0.4, delay: delay + 0.8 * t }}>
            <path d={`M${x1 + 8} ${y - 4} L${x1} ${y} L${x1 + 8} ${y + 4} M${x2 - 8} ${y - 4} L${x2} ${y} L${x2 - 8} ${y + 4}`} stroke={color} strokeWidth={1.2} fill="none" />
            <text x={x1} y={y + 24} textAnchor="start" className={MONO} fontSize={w < 480 ? 12.5 : 14} fontWeight={500} fill={color}>
              {l1}
            </text>
            <text x={x2} y={y + 24} textAnchor="end" className={MONO} fontSize={w < 480 ? 12.5 : 14} fontWeight={500} fill={color}>
              {l2}
            </text>
          </motion.g>
        </g>
      );
    };

    svg = (
      <svg width={w} height={H} className="block" style={{ overflow: "visible" }} aria-hidden="true">
        {row(X(min), X(max), y1, INK, "INSTALLÉE", labels.min, labels.max, 0)}
        {withLv && (
          <>
            <motion.g initial={false} animate={{ x: on ? 0 : shift }} transition={{ duration: 1.1 * t, ease: [0.76, 0, 0.24, 1], delay: 1.5 * t }}>
              {row(X(aMin), X(aMax), y2, GREEN, "APRÈS LOGISVERT", labels.afterMin ?? "", labels.afterMax ?? "", 0.6 * t)}
            </motion.g>
            <motion.g initial={false} animate={{ opacity: on ? 1 : 0 }} transition={{ duration: 0.6, delay: 2.5 * t }}>
              <path d={`M${X(min)} ${y1 + 32} L${X(aMin)} ${y2 - 30}`} stroke={GREEN} strokeWidth={1} strokeDasharray="3 3" fill="none" />
              <text x={(X(min) + X(aMin)) / 2} y={(y1 + y2) / 2 + 4} textAnchor="middle" className={MONO} fontSize={12} fontWeight={600} fill={GREEN} stroke="#FFFFFF" strokeWidth={6} strokeLinejoin="round" paintOrder="stroke">
                {labels.lv}
              </text>
            </motion.g>
          </>
        )}
      </svg>
    );
  }

  return (
    <div ref={ref} className="relative w-full" style={{ height: H }}>
      {svg}
    </div>
  );
}

/* ------------------------------------------------------------------
   Règle des décibels
   ------------------------------------------------------------------ */
export function NoiseScale({ inMin, inMax, out }: { inMin: number | null; inMax: number | null; out: number | null }) {
  const [ref, { w }] = useBox<HTMLDivElement>();
  const seen = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedSafe();
  const on = seen || reduce;
  const H = out != null ? 156 : 112;

  let svg: React.ReactNode = null;
  const vals = [inMin, inMax, out].filter((v): v is number => v != null);
  if (w > 0 && vals.length) {
    const top = Math.max(60, Math.ceil((Math.max(...vals) + 6) / 10) * 10);
    const X = (v: number) => 8 + (v / top) * (w - 16);
    const R = 72;
    const t = reduce ? 0 : 1;
    const ticks: number[] = [];
    for (let v = 0; v <= top; v += 5) ticks.push(v);
    const cap = (cx: number, s: string) => {
      const hw = s.length * 3.4;
      return Math.min(Math.max(cx, hw), w - hw);
    };
    const inLabel = inMin != null && inMax != null && inMax !== inMin ? `UNITÉ INTÉRIEURE · ${fmtNum(inMin, dec(inMin))} À ${fmtNum(inMax, dec(inMax))} DB(A)` : inMin != null ? `UNITÉ INTÉRIEURE · DÈS ${fmtNum(inMin, dec(inMin))} DB(A)` : "";
    const outLabel = out != null ? `UNITÉ EXTÉRIEURE · ${fmtNum(out, dec(out))} DB(A)` : "";

    svg = (
      <svg width={w} height={H} className="block" style={{ overflow: "visible" }} aria-hidden="true">
        {/* Règle */}
        <motion.path d={`M${X(0)} ${R} H${X(top)}`} stroke={INK} strokeWidth={1} fill="none" initial={false} animate={{ pathLength: on ? 1 : 0 }} transition={{ duration: 1 * t, ease: EASE }} />
        {ticks.map((v, i) => (
          <motion.g key={v} initial={false} animate={{ opacity: on ? 1 : 0 }} transition={{ duration: 0.3, delay: t * (0.15 + i * 0.035) }}>
            <line x1={X(v)} x2={X(v)} y1={R} y2={R + (v % 10 === 0 ? 9 : 5)} stroke={INK} strokeWidth={1} />
            {v % 10 === 0 && (
              <text x={X(v)} y={R + 23} textAnchor={v === top ? "end" : v === 0 ? "start" : "middle"} className={MONO} fontSize={10.5} fill={LABEL}>
                {v === top ? `${v} dB(A)` : v}
              </text>
            )}
          </motion.g>
        ))}

        {/* Intérieur : plage cotée, ou repère */}
        {inMin != null && inMax != null && inMax !== inMin ? (
          <g>
            <motion.g initial={false} animate={{ opacity: on ? 1 : 0 }} transition={{ duration: 0.4, delay: 0.7 * t }}>
              <line x1={X(inMin)} x2={X(inMin)} y1={30} y2={R} stroke={INK} strokeWidth={1} strokeDasharray="2 3" />
              <line x1={X(inMax)} x2={X(inMax)} y1={30} y2={R} stroke={INK} strokeWidth={1} strokeDasharray="2 3" />
              <text x={cap((X(inMin) + X(inMax)) / 2, inLabel)} y={22} textAnchor="middle" className={MONO} fontSize={10.5} fill={INK} letterSpacing="0.06em">
                {inLabel}
              </text>
            </motion.g>
            <motion.path d={`M${(X(inMin) + X(inMax)) / 2} 38 H${X(inMin)}`} stroke={ORANGE} strokeWidth={1.6} fill="none" initial={false} animate={{ pathLength: on ? 1 : 0 }} transition={{ duration: 0.8 * t, ease: EASE, delay: 0.9 * t }} />
            <motion.path d={`M${(X(inMin) + X(inMax)) / 2} 38 H${X(inMax)}`} stroke={ORANGE} strokeWidth={1.6} fill="none" initial={false} animate={{ pathLength: on ? 1 : 0 }} transition={{ duration: 0.8 * t, ease: EASE, delay: 0.9 * t }} />
            <motion.path
              d={`M${X(inMin) + 7} 34 L${X(inMin)} 38 L${X(inMin) + 7} 42 M${X(inMax) - 7} 34 L${X(inMax)} 38 L${X(inMax) - 7} 42`}
              stroke={ORANGE}
              strokeWidth={1.4}
              fill="none"
              initial={false}
              animate={{ opacity: on ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 1.6 * t }}
            />
          </g>
        ) : inMin != null ? (
          <motion.g initial={false} animate={{ opacity: on ? 1 : 0, x: on ? 0 : X(0) - X(inMin) }} transition={{ duration: 1 * t, ease: EASE, delay: 0.7 * t }}>
            <line x1={X(inMin)} x2={X(inMin)} y1={34} y2={R} stroke={ORANGE} strokeWidth={1.6} />
            <path d={`M${X(inMin) - 5} 30 L${X(inMin) + 5} 30 L${X(inMin)} 37 Z`} fill={ORANGE} />
            <text x={cap(X(inMin), inLabel)} y={20} textAnchor="middle" className={MONO} fontSize={10.5} fill={INK} letterSpacing="0.06em">
              {inLabel}
            </text>
          </motion.g>
        ) : null}

        {/* Extérieur : repère sous la règle */}
        {out != null && (
          <motion.g initial={false} animate={{ opacity: on ? 1 : 0, x: on ? 0 : X(0) - X(out) }} transition={{ duration: 1.1 * t, ease: EASE, delay: 1.1 * t }}>
            <line x1={X(out)} x2={X(out)} y1={R} y2={R + 44} stroke={INK} strokeWidth={1.4} />
            <path d={`M${X(out) - 5} ${R + 50} L${X(out) + 5} ${R + 50} L${X(out)} ${R + 43} Z`} fill={INK} />
            <text x={cap(X(out), outLabel)} y={R + 70} textAnchor="middle" className={MONO} fontSize={10.5} fill={INK} letterSpacing="0.06em">
              {outLabel}
            </text>
          </motion.g>
        )}
      </svg>
    );
  }

  return (
    <div ref={ref} className="relative w-full" style={{ height: H }}>
      {svg}
    </div>
  );
}
