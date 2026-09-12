"use client";

import "./heroes-v2.css";
import { useCallback, useEffect, useMemo, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { MotionConfig, motion, useMotionValue, useSpring, useTransform, type MotionValue } from "motion/react";
import { techMono } from "./fonts-mono";
import { Tick, fmtNum, useLater, useReducedSafe } from "./Tick";

/* ==================================================================
   Fiche d'ingénierie — héros de /produit/[slug].
   Scène blanche : la photo officielle au centre, des lignes de cote
   tirées de l'appareil vers les chiffres certifiés (capacité à −15 °C,
   HSPF2, SEER2) et vers le montant LogisVert d'Hydro-Québec. Le nom du
   modèle traverse le bas de la page en très grand, puis le cartouche
   (type, capacité, série…) et les actions.
   Signature : les lignes se tracent l'une après l'autre, les chiffres
   défilent, la photo suit doucement le pointeur (les lignes suivent).
   Rien n'est inventé : une valeur absente n'est pas affichée.
   ================================================================== */

const INK = "#121417";
const LINE = "#D9DCDF";
const ORANGE = "#E54B17";
const GREEN = "#1A8F4E";
const MUTE = "rgba(18,20,23,0.56)";
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const DISPLAY = "var(--font-display), var(--font-sans), sans-serif";

export type CapacityChip = { slug: string; modelNumber: string; count: number; label: string };
export type FicheFigure = { key: "h5" | "hspf2" | "seer2"; value: number; label: string; decimals: number };

export type FicheData = {
  slug: string;
  brandName: string;
  brandSlug: string;
  brandLogo: string | null;
  seriesLabel: string | null;
  seriesSlug: string;
  modelName: string;
  modelNumber: string;
  typeLabel: string;
  capacityBtu: number | null;
  zones: number | null;
  coldClimate: boolean;
  discontinued: boolean;
  minTempC: number | null;
  imageUrl: string | null;
  /** Chiffres certifiés, dans l'ordre d'affichage. */
  figures: FicheFigure[];
  /** Montant LogisVert officiel (0 = aucun montant publié pour ce jumelage). */
  logisVert: number;
  chips: CapacityChip[];
  /** Nombre total de fiches sœurs dans la série. */
  siblings: number;
};

type Item = { kind: "fig"; fig: FicheFigure } | { kind: "lv"; amount: number };
type Slot = "l1" | "r1" | "l2" | "r2";
const SLOTS: Slot[] = ["l1", "r1", "l2", "r2"];
/** Point d'attache de chaque cote sur l'appareil (fraction du cadre réel de la photo). */
const TARGET: Record<Slot, [number, number]> = { l1: [0.24, 0.3], r1: [0.77, 0.27], l2: [0.3, 0.74], r2: [0.71, 0.72] };

type Pt = { x: number; y: number };
type Leader = { P: Pt; K: Pt; T: Pt };
type Geo = { w: number; h: number; img: { x: number; y: number; w: number; h: number }; lines: (Leader | null)[] };

const T0 = 0.95; // début du tracé des cotes
const STEP = 0.34; // écart entre deux cotes

export function FicheIngenierie(d: FicheData) {
  const reduce = useReducedSafe();
  const items = useMemo<Item[]>(
    () => [...d.figures.map((fig) => ({ kind: "fig" as const, fig })), ...(d.logisVert > 0 ? [{ kind: "lv" as const, amount: d.logisVert }] : [])].slice(0, 4),
    [d.figures, d.logisVert],
  );

  /* ── Parallaxe au pointeur (souris seulement) ── */
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.7 });
  const sy = useSpring(my, { stiffness: 60, damping: 18, mass: 0.7 });
  const px = useTransform(sx, (v) => v * 24);
  const py = useTransform(sy, (v) => v * 12);
  const onPointerMove = (e: ReactPointerEvent<HTMLElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onPointerLeave = () => {
    mx.set(0);
    my.set(0);
  };

  /* ── Géométrie des cotes : mesurée dans le navigateur (rien au rendu serveur). ── */
  const stageRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const aspectRef = useRef<number | null>(null);
  const hasPhoto = !!d.imageUrl;
  const [geo, setGeo] = useState<Geo | null>(null);

  const measure = useCallback(() => {
    const st = stageRef.current;
    const pb = photoRef.current;
    if (!st || !pb) return;
    const s = st.getBoundingClientRect();
    const p = pb.getBoundingClientRect();
    if (!p.width || !p.height) return;
    // Cadre réel de l'image (object-fit: contain, calée en bas).
    let ix = p.left - s.left;
    let iy = p.top - s.top;
    let iw = p.width;
    let ih = p.height;
    const a = aspectRef.current;
    if (!hasPhoto) {
      ix += iw * 0.1;
      iw *= 0.8;
      iy += ih * 0.04;
      ih *= 0.92;
    } else if (a) {
      if (iw / ih > a) {
        const w = ih * a;
        ix += (iw - w) / 2;
        iw = w;
      } else {
        const h = iw / a;
        iy += ih - h;
        ih = h;
      }
    }
    const pl = p.left - s.left;
    const pr = p.right - s.left;
    const pt = p.top - s.top;
    const lines = items.map((_, i) => {
      const el = labelRefs.current[i];
      if (!el) return null;
      const slot = SLOTS[i];
      const r = el.getBoundingClientRect();
      const f = (el.querySelector("[data-fig]") ?? el).getBoundingClientRect();
      const [fx, fy] = TARGET[slot];
      const T = { x: ix + iw * fx, y: iy + ih * fy };
      const L = { l: r.left - s.left, r: r.right - s.left, t: r.top - s.top, b: r.bottom - s.top };
      const fy0 = f.top - s.top + f.height / 2;
      const leftSide = slot[0] === "l";
      if (L.r <= pl + 2) {
        const P = { x: L.r + 14, y: fy0 };
        return { P, K: { x: Math.max(P.x + 18, T.x - 58), y: P.y }, T };
      }
      if (L.l >= pr - 2) {
        const P = { x: L.l - 14, y: fy0 };
        return { P, K: { x: Math.min(P.x - 18, T.x + 58), y: P.y }, T };
      }
      const x = leftSide ? f.left - s.left + 10 : f.right - s.left - 10;
      if (L.b <= pt + 2) {
        const P = { x, y: L.b + 10 };
        return { P, K: { x, y: Math.max(P.y + 12, T.y - 46) }, T };
      }
      const P = { x, y: L.t - 10 };
      return { P, K: { x, y: Math.min(P.y - 12, T.y + 46) }, T };
    });
    setGeo({ w: s.width, h: s.height, img: { x: ix, y: iy, w: iw, h: ih }, lines });
  }, [items, hasPhoto]);

  const readAspect = useCallback(
    (img: HTMLImageElement | null) => {
      if (img && img.naturalWidth && img.naturalHeight) {
        aspectRef.current = img.naturalWidth / img.naturalHeight;
        measure();
      }
    },
    [measure],
  );

  useEffect(() => {
    const st = stageRef.current;
    if (!st) return;
    readAspect(photoRef.current?.querySelector("img") ?? null);
    const raf = window.requestAnimationFrame(measure);
    const ro = new ResizeObserver(() => measure());
    ro.observe(st);
    labelRefs.current.forEach((el) => el && ro.observe(el));
    let alive = true;
    document.fonts?.ready.then(() => alive && measure());
    return () => {
      alive = false;
      window.cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, [measure, readAspect]);

  const capacity = d.capacityBtu ? `${fmtNum(d.capacityBtu)} BTU/h` : null;
  const words = d.modelName.split(/\s+/);
  const kd = Math.max(7, d.modelName.length * 0.6);
  const km = Math.max(4.2, Math.max(...words.map((w) => w.length)) * 0.62);

  const cells: { k: string; v: string; mono?: boolean }[] = [];
  if (d.seriesLabel) cells.push({ k: "Série", v: d.seriesLabel });
  cells.push({ k: "Type", v: d.typeLabel });
  if (capacity) cells.push({ k: "Capacité nominale", v: capacity });
  if (d.zones != null && d.zones > 1) cells.push({ k: "Zones intérieures", v: String(d.zones) });
  if (d.minTempC != null) cells.push({ k: "Chauffe jusqu’à", v: `${fmtNum(d.minTempC)} °C` });
  if (d.coldClimate) cells.push({ k: "Usage", v: "Climat froid" });
  if (d.discontinued) cells.push({ k: "Statut", v: "Discontinué" });
  cells.push({ k: "Modèle", v: d.modelNumber, mono: true });

  return (
    <MotionConfig reducedMotion="user">
    <section
      aria-labelledby="fi-titre"
      className={`fi-root pv2-root ${techMono.variable} relative -mt-[93px] overflow-hidden min-[1700px]:-mt-[105px]`}
      style={{ background: "#FFFFFF", color: INK, fontFamily: DISPLAY }}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
    >
      <div className="relative mx-auto max-w-[1440px] px-5 pb-12 pt-[128px] sm:px-8 lg:px-12 lg:pb-14 min-[1700px]:pt-[146px]">
        {/* ── Fil d'Ariane + logo de la marque ── */}
        <motion.div
          className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 pb-3"
          style={{ borderBottom: `1px solid ${LINE}` }}
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.05 }}
        >
          <nav aria-label="Fil d’Ariane" className="fi-crumbs fi-mono min-w-0 text-[11.5px]" style={{ letterSpacing: "0.04em" }}>
            <ol className="m-0 flex list-none flex-wrap items-center gap-x-2 gap-y-1 p-0">
              <li><Link href="/">Accueil</Link></li>
              <li aria-hidden="true" style={{ color: LINE }}>/</li>
              <li><Link href="/marques">Marques</Link></li>
              <li aria-hidden="true" style={{ color: LINE }}>/</li>
              <li><Link href={`/marques/${d.brandSlug}`}>{d.brandName}</Link></li>
              <li aria-hidden="true" style={{ color: LINE }}>/</li>
              <li className="min-w-0 break-all" style={{ color: INK }}>
                <span aria-current="page">{d.modelName}</span>
              </li>
            </ol>
          </nav>
          <div className="flex items-center gap-4">
            {d.brandLogo && (
              <Link href={`/marques/${d.brandSlug}`} aria-label={`Marque ${d.brandName}`} className="block shrink-0" style={{ height: 22 }}>
                <Image src={d.brandLogo} alt={`Logo ${d.brandName}`} width={120} height={36} style={{ height: 22, width: "auto", maxWidth: "none", objectFit: "contain" }} />
              </Link>
            )}
            <span className="fi-mono hidden text-[10.5px] uppercase sm:inline" style={{ letterSpacing: "0.14em", color: MUTE }}>
              {d.imageUrl ? `Photo officielle · ${d.brandName}` : "Photo du fabricant non disponible"}
            </span>
          </div>
        </motion.div>

        {/* ── Scène : photo, cotes, chiffres ── */}
        <div ref={stageRef} className="fi-stage mt-7 lg:mt-4">
          {items.map((it, i) => (
            <div
              key={it.kind === "fig" ? it.fig.key : "lv"}
              ref={(el) => {
                labelRefs.current[i] = el;
              }}
              className={`fi-${SLOTS[i]} relative z-10`}
            >
              <Callout item={it} n={i} delay={T0 + i * STEP + 0.45} reduce={reduce} />
            </div>
          ))}

          <div className="fi-ph">
            {/* Ombre au sol, sous l'appareil */}
            <div aria-hidden="true" className="absolute inset-x-[14%] bottom-[34px] h-[26px]" style={{ background: "radial-gradient(closest-side, rgba(18,20,23,0.16), rgba(18,20,23,0))" }} />
            <div ref={photoRef} className="absolute inset-x-0 top-0 bottom-[48px]">
              <motion.div className="absolute inset-0" style={reduce ? undefined : { x: px, y: py }}>
                <motion.div
                  className="absolute inset-0"
                  initial={reduce ? false : { opacity: 0, y: 28, clipPath: "inset(100% 0% 0% 0%)" }}
                  animate={{ opacity: 1, y: 0, clipPath: "inset(0% 0% 0% 0%)" }}
                  transition={{ duration: 1.3, ease: EASE, delay: 0.2 }}
                >
                  {d.imageUrl ? (
                    <Image
                      src={d.imageUrl}
                      alt={`Thermopompe ${d.brandName} ${d.modelName}`}
                      fill
                      priority
                      sizes="(min-width: 1024px) 52vw, 92vw"
                      style={{ objectFit: "contain", objectPosition: "center bottom" }}
                      onLoad={(e) => readAspect(e.currentTarget)}
                    />
                  ) : (
                    <div className="absolute inset-[4%_10%] flex flex-col items-center justify-center gap-3 text-center" style={{ border: `1px solid ${LINE}` }}>
                      <span style={{ fontSize: "clamp(40px, 6vw, 96px)", fontWeight: 600, letterSpacing: "-0.05em", lineHeight: 1, overflowWrap: "anywhere" }}>{d.brandName}</span>
                      <span className="fi-mono text-[11px] uppercase" style={{ letterSpacing: "0.14em", color: MUTE }}>
                        Photo du fabricant non disponible
                      </span>
                    </div>
                  )}
                </motion.div>
              </motion.div>
            </div>
          </div>

          {geo && (
            <svg aria-hidden="true" className="pointer-events-none absolute left-0 top-0 z-0" width={geo.w} height={geo.h} viewBox={`0 0 ${geo.w} ${geo.h}`} style={{ overflow: "visible" }}>
              {capacity && <Dimension geo={geo} px={px} py={py} reduce={reduce} />}
              {geo.lines.map((ln, i) => (ln ? <LeaderLine key={i} ln={ln} px={px} py={py} delay={T0 + i * STEP} reduce={reduce} /> : null))}
            </svg>
          )}
          {geo && capacity && (
            <motion.div aria-hidden="true" className="pointer-events-none absolute z-10" style={{ left: geo.img.x + geo.img.w / 2, top: geo.img.y + geo.img.h + 24, ...(reduce ? {} : { x: px, y: py }) }}>
              <motion.span
                className="fi-mono block -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-white px-2.5 text-[11px]"
                style={{ color: INK, letterSpacing: "0.02em" }}
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.95 }}
              >
                {capacity} · nominal
              </motion.span>
            </motion.div>
          )}
        </div>

        {/* ── Titre : le nom du modèle traverse la page ── */}
        <h1 id="fi-titre" style={{ margin: "22px 0 0", fontWeight: 600 }}>
          <motion.span
            className="fi-mono block text-[11.5px] uppercase sm:text-[12.5px]"
            style={{ letterSpacing: "0.2em", color: MUTE, fontWeight: 500 }}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
          >
            Thermopompe {d.brandName}
          </motion.span>{" "}
          <span className="block overflow-hidden" style={{ paddingBottom: "0.08em", marginTop: 6 }}>
            <motion.span
              className="fi-name block"
              style={{ lineHeight: 0.88, letterSpacing: "-0.055em", overflowWrap: "anywhere", ["--fi-kd" as string]: kd, ["--fi-km" as string]: km } as CSSProperties}
              initial={reduce ? false : { y: "104%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1.25, ease: EASE, delay: 0.38 }}
            >
              {d.modelName}
            </motion.span>
          </span>
        </h1>

        {/* ── Cartouche ── */}
        <motion.dl
          className="m-0 mt-4 grid grid-cols-2 sm:flex sm:flex-wrap"
          style={{ borderTop: `1px solid ${INK}`, borderBottom: `1px solid ${LINE}` }}
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.75 }}
        >
          {cells.map((c, i) => (
            <div key={c.k} className="min-w-0 py-3 pr-5 sm:pl-5 sm:first:pl-0" style={{ borderLeft: i ? `1px solid ${LINE}` : "none" }}>
              <dt className="fi-mono text-[10px] uppercase" style={{ letterSpacing: "0.14em", color: MUTE }}>
                {c.k}
              </dt>
              <dd className={`${c.mono ? "fi-mono text-[13px]" : "text-[14.5px]"} m-0 mt-1 font-medium`} style={{ overflowWrap: "anywhere" }}>
                {c.v}
              </dd>
            </div>
          ))}
        </motion.dl>

        {/* ── Actions + autres capacités ── */}
        <div className="mt-5 grid gap-7 lg:grid-cols-[auto_minmax(0,1fr)] lg:items-start lg:gap-14">
          <motion.div initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: EASE, delay: 0.85 }}>
            <div className="flex flex-wrap items-center gap-3">
              <Link href="/trouver-ma-thermopompe" className="fi-btn inline-flex items-center gap-3 rounded-[3px] px-5 py-3.5 text-[15px] font-semibold text-white" style={{ background: INK }}>
                Vérifier si ce modèle me convient
                <Arrow />
              </Link>
              <Link href="/soumission" className="fi-btn fi-ghost inline-flex items-center rounded-[3px] px-5 py-3.5 text-[15px] font-semibold" style={{ border: `1px solid ${INK}` }}>
                Demander une soumission
              </Link>
            </div>
            <Link href={`/comparer?models=${d.slug}`} className="fi-lnk mt-4 inline-flex items-center gap-2 text-[14px] font-semibold" style={{ color: INK }}>
              <span className="fi-lnk-t">Comparer ce modèle avec un autre</span>
              <Arrow size={14} />
            </Link>
          </motion.div>

          {d.chips.length > 0 && (
            <motion.div className="min-w-0 lg:justify-self-end lg:text-right" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 1 }}>
              <p className="fi-mono text-[10.5px] uppercase" style={{ letterSpacing: "0.14em", color: MUTE, margin: "0 0 10px" }}>
                Autres capacités{d.seriesLabel ? ` — ${d.seriesLabel}` : ""}
                {d.siblings > d.chips.length ? ` · ${d.siblings + 1} modèles` : ""}
              </p>
              <div className="flex flex-wrap gap-2 lg:justify-end">
                {d.chips.map((chip) => (
                  <Link
                    key={chip.slug}
                    href={`/produit/${chip.slug}`}
                    title={chip.count > 1 ? `${chip.count} modèles de ${chip.label} dans cette série` : chip.modelNumber}
                    className="fi-chip fi-mono rounded-[2px] px-3 py-1.5 text-[12px]"
                    style={{ border: `1px solid ${LINE}`, color: INK }}
                  >
                    {chip.label}
                    {chip.count > 1 ? ` ×${chip.count}` : ""}
                  </Link>
                ))}
                {d.siblings > d.chips.length && d.seriesLabel && (
                  <Link href={`/thermopompes?brand=${d.brandSlug}&series=${d.seriesSlug}`} className="fi-chip fi-mono rounded-[2px] px-3 py-1.5 text-[12px]" style={{ border: `1px dashed ${MUTE}`, color: MUTE }}>
                    Tous les modèles {d.seriesLabel}
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
    </MotionConfig>
  );
}

/* ------------------------------------------------------------------
   Étiquette de cote : numéro, libellé, chiffre (orange) ou montant
   LogisVert (vert, logo Hydro-Québec).
   ------------------------------------------------------------------ */
function Callout({ item, n, delay, reduce }: { item: Item; n: number; delay: number; reduce: boolean }) {
  const play = useLater(delay, reduce);
  const idx = String(n + 1).padStart(2, "0");
  const fig: CSSProperties = { margin: "8px 0 0", fontSize: "clamp(30px, 3.2vw, 52px)", lineHeight: 1, fontWeight: 500, letterSpacing: "-0.05em" };
  return (
    <motion.div className="fi-cell" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: Math.max(0, delay - 0.3) }}>
      {item.kind === "fig" ? (
        <>
          <p className="fi-mono m-0 text-[11px]" style={{ color: MUTE, letterSpacing: "0.02em" }}>
            {idx} — {item.fig.label}
          </p>
          <p data-fig className="fi-mono" style={{ ...fig, color: ORANGE }}>
            <Tick value={item.fig.value} decimals={item.fig.decimals} play={play} />
          </p>
        </>
      ) : (
        <Link href="#subvention-logisvert" className="fi-lnk fi-cell" style={{ color: INK }}>
          <span className="fi-mono block text-[11px]" style={{ color: MUTE, letterSpacing: "0.02em" }}>
            {idx} — Subvention LogisVert
          </span>
          <span data-fig className="fi-mono flex items-center gap-3" style={{ ...fig, color: GREEN }}>
            <Image src="/images/hydroquebec.png" alt="Hydro-Québec" width={40} height={40} style={{ width: 34, height: 34, maxWidth: "none", objectFit: "contain" }} />
            <span>
              <Tick value={item.amount} play={play} />
              &nbsp;$
            </span>
          </span>
          <span className="mt-2 block text-[12.5px] leading-snug" style={{ color: MUTE }}>
            <span className="fi-lnk-t">Montant officiel Hydro-Québec</span>
            <span className="ml-1.5 inline-block align-[-1px]">
              <Arrow size={12} />
            </span>
          </span>
        </Link>
      )}
    </motion.div>
  );
}

/* Ligne de cote : étiquette → coude → point sur l'appareil (qui suit la parallaxe). */
function LeaderLine({ ln, px, py, delay, reduce }: { ln: Leader; px: MotionValue<number>; py: MotionValue<number>; delay: number; reduce: boolean }) {
  const path = (x: number, y: number) => `M${ln.P.x} ${ln.P.y} L${ln.K.x} ${ln.K.y} L${ln.T.x + x} ${ln.T.y + y}`;
  const d = useMotionValue(path(0, 0));
  useEffect(() => {
    const upd = () => d.set(path(reduce ? 0 : px.get(), reduce ? 0 : py.get()));
    upd();
    const u1 = px.on("change", upd);
    const u2 = py.on("change", upd);
    return () => {
      u1();
      u2();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ln, px, py, reduce, d]);
  return (
    <g>
      <motion.circle cx={ln.P.x} cy={ln.P.y} r={2} fill={INK} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2, delay }} />
      <motion.path d={d} fill="none" stroke={INK} strokeWidth={1} initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.75, ease: [0.65, 0, 0.35, 1], delay }} />
      <motion.g style={reduce ? undefined : { x: px, y: py }}>
        <motion.circle cx={ln.T.x} cy={ln.T.y} r={4} fill="#FFFFFF" stroke={INK} strokeWidth={1.25} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: delay + 0.7 }} />
        <motion.circle cx={ln.T.x} cy={ln.T.y} r={1.4} fill={INK} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: delay + 0.7 }} />
      </motion.g>
    </g>
  );
}

/* Cote de largeur sous l'appareil : capacité nominale, tracée du centre vers les bords. */
function Dimension({ geo, px, py, reduce }: { geo: Geo; px: MotionValue<number>; py: MotionValue<number>; reduce: boolean }) {
  const { x, y: iy, w, h } = geo.img;
  const x1 = x + 6;
  const x2 = x + w - 6;
  const cx = (x1 + x2) / 2;
  const y = iy + h + 24;
  const draw = (delay: number) => ({ initial: reduce ? false : { pathLength: 0 }, animate: { pathLength: 1 }, transition: { duration: 0.8, ease: EASE, delay } }) as const;
  return (
    <motion.g style={reduce ? undefined : { x: px, y: py }} stroke={INK} strokeWidth={1} fill="none" opacity={0.75}>
      <motion.path d={`M${x1} ${iy + h + 8} V${y + 7}`} {...draw(0.55)} />
      <motion.path d={`M${x2} ${iy + h + 8} V${y + 7}`} {...draw(0.55)} />
      <motion.path d={`M${cx} ${y} H${x1}`} {...draw(0.7)} />
      <motion.path d={`M${cx} ${y} H${x2}`} {...draw(0.7)} />
      <motion.path d={`M${x1 + 8} ${y - 4} L${x1} ${y} L${x1 + 8} ${y + 4} M${x2 - 8} ${y - 4} L${x2} ${y} L${x2 - 8} ${y + 4}`} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 1.35 }} />
    </motion.g>
  );
}

function Arrow({ size = 15 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="square">
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  );
}
