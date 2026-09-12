"use client";

import "./heroes-v2.css";
import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import Link from "next/link";
import { MotionConfig, motion, useAnimationControls } from "motion/react";
import { posterFont } from "./fonts-poster";
import { Tick, useLater, useReducedSafe } from "./Tick";

/* ==================================================================
   Affiche de combat — héros de /comparer/[paire].
   Noir, orange, blanc. Les deux marques en capitales condensées,
   empilées et tranchées par une diagonale : au-dessus, blanc sur
   noir ; en dessous, noir sur orange. Puis la « fiche du combat »
   (tale of the tape) avec les vrais chiffres des deux marques.
   Signature : les deux moitiés de l'affiche arrivent de côtés opposés
   et se verrouillent avec une petite secousse.
   ================================================================== */

const ORANGE = "#E54B17";
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const SLAM: [number, number, number, number] = [0.83, 0, 0.17, 1];
const DISPLAY = "var(--font-display), var(--font-sans), sans-serif";

export type Corner = { name: string; href: string; logo: string | null };
export type TapeRow = { label: string; a: number | null; b: number | null; decimals?: number; suffix?: string; better?: boolean };

/* Diagonale de coupe : de (0, 26 %) à (100 %, 74 %). */
const TOP = "polygon(0% 0%, 100% 0%, 100% 74%, 0% 26%)";
const BOTTOM = "polygon(0% 26%, 100% 74%, 100% 100%, 0% 100%)";

/** Typographie française : apostrophe courbe, espace insécable avant : ; ? ! */
function typo(s: string): string {
  return s
    .replace(/'/g, "’")
    .replace(/ ([:;?!])/g, " $1")
    .replace(/([^\s ])([?!;])(?=\s|$)/g, "$1 $2");
}

export function AfficheCombat({ a, b, rows, shared, eyebrow, intro, crumbs }: { a: Corner; b: Corner; rows: TapeRow[]; shared?: number; eyebrow: string; intro: string; crumbs: { label: string; href: string }[] }) {
  const reduce = useReducedSafe();
  const shake = useAnimationControls();
  const [locked, setLocked] = useState(false);
  const play = useLater(1.55, reduce);

  // Verrouillage : quand les deux moitiés se rejoignent, l'affiche encaisse le choc.
  useEffect(() => {
    if (reduce) {
      setLocked(true);
      return;
    }
    const t = window.setTimeout(() => {
      setLocked(true);
      shake.start({ x: [0, -11, 9, -6, 3, 0], transition: { duration: 0.42, ease: "easeOut" } });
    }, 1080);
    return () => window.clearTimeout(t);
  }, [reduce, shake]);

  const ka = Math.max(3.4, a.name.length * 0.47);
  const kb = Math.max(3.4, (b.name.length + 2) * 0.47);
  const longest = (s: string) => Math.max(...s.split(/\s+/).map((w) => w.length));
  const kam = Math.max(3.2, longest(a.name) * 0.5);
  const kbm = Math.max(3.2, (longest(b.name) + 1) * 0.5);
  const shown = rows.filter((r) => r.a !== null && r.b !== null);

  const lines = (tone: "top" | "bottom"): ReactNode => (
    <>
      <span className="ac-name block uppercase" style={{ ["--ac-k" as string]: ka, ["--ac-km" as string]: kam, ["--ac-max" as string]: "220px" } as CSSProperties}>
        {a.name}
      </span>{" "}
      <span className="ac-serif relative z-10 block text-center lowercase" style={{ fontSize: "clamp(64px, 8.4vw, 150px)", lineHeight: 0.7, margin: "-0.02em 0 -0.06em", color: tone === "top" ? ORANGE : "#FFFFFF" }}>
        ou
      </span>{" "}
      <span className="ac-name block text-right uppercase" style={{ ["--ac-k" as string]: kb, ["--ac-km" as string]: kbm, ["--ac-max" as string]: "200px" } as CSSProperties}>
        {b.name}
        {" ?"}
      </span>
    </>
  );

  return (
    <MotionConfig reducedMotion="user">
    <section aria-labelledby="ac-titre" className={`ac-root pv2-root ${posterFont.variable} relative -mt-[93px] overflow-hidden min-[1700px]:-mt-[105px]`} style={{ background: "#000", color: "#fff", fontFamily: DISPLAY }}>
      <div className="mx-auto max-w-[1440px] px-5 pt-[128px] sm:px-8 lg:px-12 min-[1700px]:pt-[146px]">
        <motion.div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <nav aria-label="Fil d’Ariane" className="ac-crumbs text-[12.5px] font-medium">
            <ol className="m-0 flex list-none flex-wrap items-center gap-x-2 gap-y-1 p-0">
              <li><Link href="/">Accueil</Link></li>
              {crumbs.map((c, i) => (
                <li key={c.href} className="flex items-center gap-2">
                  <span aria-hidden="true" style={{ color: "rgba(255,255,255,0.3)" }}>/</span>
                  {i === crumbs.length - 1 ? (
                    <span aria-current="page" style={{ color: "#fff" }}>{c.label}</span>
                  ) : (
                    <Link href={c.href}>{c.label}</Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
          <p className="text-[11.5px] font-bold uppercase" style={{ letterSpacing: "0.3em", color: ORANGE, margin: 0 }}>
            {eyebrow}
          </p>
        </motion.div>
      </div>

      {/* ── L'affiche : deux moitiés tranchées par la diagonale ── */}
      <motion.div className="ac-poster relative mt-5 select-none lg:mt-3" animate={shake}>
        <motion.div className="relative" style={{ background: "#000", color: "#fff", clipPath: TOP }} initial={reduce ? false : { x: "-104%" }} animate={{ x: "0%" }} transition={{ duration: 0.95, ease: SLAM, delay: 0.15 }}>
          <h1 id="ac-titre" className="ac-poster mx-auto max-w-[1440px] px-5 py-5 sm:px-8 lg:px-12 lg:py-6" style={{ margin: 0, fontWeight: 400, letterSpacing: 0 }}>
            {lines("top")}
          </h1>
        </motion.div>
        <motion.div aria-hidden="true" className="absolute inset-0" style={{ background: ORANGE, color: "#000", clipPath: BOTTOM }} initial={reduce ? false : { x: "104%" }} animate={{ x: "0%" }} transition={{ duration: 0.95, ease: SLAM, delay: 0.15 }}>
          <div className="ac-poster mx-auto max-w-[1440px] px-5 py-5 sm:px-8 lg:px-12 lg:py-6">{lines("bottom")}</div>
        </motion.div>
        {/* Trait de coupe : s'allume au verrouillage */}
        <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.line x1="0" y1="26" x2="100" y2="74" stroke="#FFFFFF" strokeWidth={1.5} vectorEffect="non-scaling-stroke" initial={{ opacity: 0 }} animate={{ opacity: locked ? [0, 1, 0.55] : 0 }} transition={{ duration: 0.7, times: [0, 0.2, 1] }} />
        </svg>
      </motion.div>

      {/* ── Présentation + fiche du combat ── */}
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 pb-14 pt-9 sm:px-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16 lg:px-12 lg:pb-16">
        <motion.div initial={reduce ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: EASE, delay: 1.3 }}>
          <p className="max-w-[560px] text-[16.5px] leading-[1.6] sm:text-[17.5px]" style={{ color: "rgba(255,255,255,0.74)", margin: 0 }}>
            {typo(intro)}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link href="/trouver-ma-thermopompe" className="ac-btn inline-flex items-center gap-3 px-6 py-3.5 text-[15px] font-semibold" style={{ background: ORANGE, color: "#000" }}>
              Trouver ma thermopompe en 2 min
              <span aria-hidden="true">→</span>
            </Link>
            <a href="tel:4389003224" className="ac-btn ac-ghost inline-flex items-center gap-2.5 px-6 py-3.5 text-[15px] font-semibold" style={{ border: "1px solid #fff", color: "#fff" }}>
              <svg aria-hidden="true" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
              </svg>
              438-900-3224
            </a>
          </div>
          <p className="text-[13px]" style={{ color: "rgba(255,255,255,0.45)", margin: "14px 0 0" }}>
            Gratuit, sans engagement. Un installateur licencié RBQ vous rappelle.
          </p>
        </motion.div>

        <div className="min-w-0">
          <table className="w-full border-collapse" style={{ tableLayout: "fixed" }}>
            <caption className="sr-only">
              Fiche du combat : {a.name} contre {b.name}, chiffres certifiés
            </caption>
            <thead>
              <tr>
                <th scope="col" className="w-[34%] pb-3 text-left align-bottom">
                  <BrandHead c={a} align="left" delay={1.35} reduce={reduce} />
                </th>
                <th scope="col" className="pb-3 text-center align-bottom text-[10.5px] font-semibold uppercase" style={{ letterSpacing: "0.26em", color: ORANGE }}>
                  Fiche du combat
                </th>
                <th scope="col" className="w-[34%] pb-3 text-right align-bottom">
                  <BrandHead c={b} align="right" delay={1.35} reduce={reduce} />
                </th>
              </tr>
            </thead>
            <tbody>
              {shown.map((r, i) => {
                const av = r.a as number;
                const bv = r.b as number;
                const win = r.better && av !== bv ? (av > bv ? "a" : "b") : null;
                const cell = (v: number, side: "a" | "b") => (
                  <span className="ac-poster" style={{ fontSize: "clamp(26px, 2.7vw, 44px)", lineHeight: 1, color: win === side ? ORANGE : "#fff", letterSpacing: "0.01em" }}>
                    <Tick value={v} decimals={r.decimals ?? 0} play={play} align={side === "a" ? "left" : "right"} />
                    {r.suffix}
                  </span>
                );
                return (
                  <motion.tr key={r.label} style={{ borderTop: "1px solid rgba(255,255,255,0.16)" }} initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: EASE, delay: 1.45 + i * 0.08 }}>
                    <td className="py-2.5 text-left sm:py-3">{cell(av, "a")}</td>
                    <th scope="row" className="px-2 py-2.5 text-center text-[10px] font-medium uppercase sm:py-3 sm:text-[11px]" style={{ letterSpacing: "0.16em", color: "rgba(255,255,255,0.58)" }}>
                      {r.label}
                    </th>
                    <td className="py-2.5 text-right sm:py-3">{cell(bv, "b")}</td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
          <motion.p className="text-[12px]" style={{ color: "rgba(255,255,255,0.5)", margin: "10px 0 0", borderTop: "1px solid rgba(255,255,255,0.16)", paddingTop: 10 }} initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.9 }}>
            {shared ? `${shared} machines identiques chez les deux marques · ` : ""}En orange&nbsp;: l’avantage sur le critère
          </motion.p>
        </div>
      </div>
    </section>
    </MotionConfig>
  );
}

function BrandHead({ c, align, delay, reduce }: { c: Corner; align: "left" | "right"; delay: number; reduce: boolean }) {
  return (
    <motion.span className="block" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay }}>
      <Link href={c.href} className={`ac-brand inline-flex flex-col gap-2 ${align === "right" ? "items-end" : "items-start"}`}>
        {c.logo ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={c.logo} alt={c.name} height={26} style={{ height: 26, width: "auto", maxWidth: 150, filter: "brightness(0) invert(1)" }} />
        ) : (
          <span className="ac-poster text-[26px] uppercase leading-none">{c.name}</span>
        )}
        <span className="ac-brand-t text-[11.5px] font-medium" style={{ color: "rgba(255,255,255,0.6)", transition: "color .25s" }}>
          Voir la marque →
        </span>
      </Link>
    </motion.span>
  );
}
