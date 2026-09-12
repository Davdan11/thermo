"use client";

import "./catalogue.css";
import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Tick, fmtNum } from "@/components/heroes-v2/produit/Tick";
import type { SeoModel } from "@/lib/seo/programmatic";
import { EASE, SLAM, MaskLines, Reveal, decimalsOf, typo, useSeen } from "./motion";

/* ==================================================================
   Affiche de combat, suite (/comparer/[paire]).
   Noir, orange, blanc ; Anton en capitales, l'italique « ou ».
   La page se lit en reprises : la fiche du combat complète, les
   meilleurs de chaque coin (noir puis orange, tranchés en diagonale),
   ce que le comparatif ne dit pas, puis la carte des autres combats.
   Toutes les valeurs viennent de la page (données certifiées).
   ================================================================== */

const ORANGE = "#E54B17";
const CUT = 5; // hauteur de la coupe diagonale, en vw

/* ------------------------------------------------------------------
   Section tranchée : la diagonale s'ouvre quand la section arrive.
   ------------------------------------------------------------------ */
function CutSection({ children, dir, style, className, label }: { children: ReactNode; dir: "rise" | "fall"; style?: CSSProperties; className?: string; label?: string }) {
  const { ref, seen, reduce } = useSeen<HTMLElement>("0px 0px -4% 0px");
  const flat = `polygon(0% ${CUT}vw, 100% ${CUT}vw, 100% 100%, 0% 100%)`;
  const cut = dir === "rise" ? `polygon(0% ${CUT}vw, 100% 0vw, 100% 100%, 0% 100%)` : `polygon(0% 0vw, 100% ${CUT}vw, 100% 100%, 0% 100%)`;
  return (
    <motion.section
      ref={ref}
      aria-label={label}
      className={`relative ${className ?? ""}`}
      style={{ marginTop: `-${CUT}vw`, ...style }}
      initial={reduce ? false : { clipPath: flat }}
      animate={{ clipPath: seen ? cut : flat }}
      transition={{ duration: 1.1, ease: SLAM }}
    >
      {children}
    </motion.section>
  );
}

/** « Round 2 » : repère de reprise, trait qui se tire jusqu'au bord. */
function Round({ n, tone = "dark" }: { n: number; tone?: "dark" | "light" }) {
  const { ref, seen, reduce } = useSeen<HTMLDivElement>();
  const ink = tone === "dark" ? ORANGE : "#000";
  return (
    <div ref={ref} aria-hidden="true" className="flex items-center gap-4">
      <motion.span className="cmpp-poster shrink-0 text-[15px] uppercase sm:text-[17px]" style={{ color: ink, letterSpacing: "0.14em" }} initial={reduce ? false : { opacity: 0, x: -16 }} animate={seen ? { opacity: 1, x: 0 } : undefined} transition={{ duration: 0.6, ease: EASE }}>
        Round {n}
      </motion.span>
      <motion.span className="block h-[2px] flex-1 origin-left" style={{ background: ink }} initial={reduce ? false : { scaleX: 0 }} animate={seen ? { scaleX: 1 } : undefined} transition={{ duration: 1.2, ease: SLAM, delay: 0.1 }} />
    </div>
  );
}

/* ------------------------------------------------------------------
   Bande de preuve (même contenu que TrustStrip), à la manière d'une affiche.
   ------------------------------------------------------------------ */
export function PosterTrust() {
  const items = [
    { label: "Liste LogisVert d'Hydro-Québec", hint: "montants officiels, mise à jour automatique" },
    { label: "Certifications AHRI et ENERGY STAR", hint: "capacités et COP mesurés, jamais estimés sans le dire" },
    { label: "Toutes les marques vendues au Québec", hint: "aucune marque favorisée, aucun avis sponsorisé" },
    { label: "Installateurs licenciés RBQ", hint: "la soumission finale vient d'un entrepreneur licencié" },
  ];
  const { ref, seen, reduce } = useSeen<HTMLElement>();
  return (
    <section ref={ref} aria-label="Sources et garanties" className="relative bg-black text-white">
      <motion.span aria-hidden="true" className="absolute inset-x-0 top-0 block h-[3px] origin-left" style={{ background: ORANGE }} initial={reduce ? false : { scaleX: 0 }} animate={seen ? { scaleX: 1 } : undefined} transition={{ duration: 1.3, ease: SLAM }} />
      <ul className="mx-auto grid max-w-[1440px] list-none grid-cols-1 gap-x-10 gap-y-6 px-5 py-9 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-12 lg:py-10" style={{ margin: "0 auto" }}>
        {items.map((it, i) => (
          <motion.li key={it.label} className="flex items-start gap-3.5" initial={reduce ? false : { opacity: 0, x: -28 }} animate={seen ? { opacity: 1, x: 0 } : undefined} transition={{ duration: 0.8, ease: EASE, delay: 0.3 + i * 0.09 }}>
            <span aria-hidden="true" className="cmpp-poster -mt-1 text-[34px] leading-none" style={{ color: ORANGE }}>
              /
            </span>
            <span className="text-[13.5px] leading-snug">
              <span className="block text-[12.5px] font-semibold uppercase" style={{ letterSpacing: "0.1em" }}>
                {typo(it.label)}
              </span>
              <span className="mt-1 block" style={{ color: "rgba(255,255,255,0.58)" }}>
                {typo(it.hint)}
              </span>
            </span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------------
   Reprise 1 : la fiche du combat complète (critère au centre).
   ------------------------------------------------------------------ */
export type TapeLine = { label: string; a: number | null; b: number | null; suffix?: string; better?: "a" | "b" | null; text?: [string, string] };
type Corner = { name: string; href: string };

export function PosterTape({ a, b, rows, note }: { a: Corner; b: Corner; rows: TapeLine[]; note: string }) {
  return (
    <section className="relative bg-black text-white">
      <div className="mx-auto max-w-[1180px] px-5 pb-20 pt-16 sm:px-8 lg:pb-24 lg:pt-24">
        <Round n={1} />
        <div className="mt-10">
          <table className="w-full border-collapse" style={{ tableLayout: "fixed" }}>
            <thead>
              <tr>
                <th scope="col" className="w-[37%] pb-5 text-left align-bottom sm:w-[38%]">
                  <CornerName c={a} side="a" />
                </th>
                <th scope="col" className="pb-6 text-center align-bottom text-[10px] font-semibold uppercase sm:text-[11px]" style={{ letterSpacing: "0.26em", color: ORANGE }}>
                  Critère
                </th>
                <th scope="col" className="w-[37%] pb-5 text-right align-bottom sm:w-[38%]">
                  <CornerName c={b} side="b" />
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <TapeRow key={r.label} r={r} i={i} />
              ))}
            </tbody>
          </table>
          <p className="text-[12.5px] leading-relaxed" style={{ color: "rgba(255,255,255,0.52)", margin: 0, paddingTop: 14, borderTop: "1px solid rgba(255,255,255,0.18)" }}>
            {typo(note)}
          </p>
        </div>
      </div>
    </section>
  );
}

function CornerName({ c, side }: { c: Corner; side: "a" | "b" }) {
  const { ref, seen, reduce } = useSeen<HTMLSpanElement>();
  return (
    <span ref={ref} className="block overflow-hidden">
      <motion.span className="block" initial={reduce ? false : { x: side === "a" ? "-105%" : "105%" }} animate={seen ? { x: "0%" } : undefined} transition={{ duration: 0.9, ease: SLAM }}>
        <Link href={c.href} className="cmpp-poster block uppercase transition-colors hover:text-[#E54B17]" style={{ fontSize: "clamp(24px, 4.6vw, 68px)", lineHeight: 0.92, overflowWrap: "anywhere" }}>
          {c.name}
        </Link>
      </motion.span>
    </span>
  );
}

function TapeRow({ r, i }: { r: TapeLine; i: number }) {
  const { ref, seen, reduce } = useSeen<HTMLTableRowElement>("0px 0px -6% 0px");
  const numeric = !r.text && r.a !== null && r.b !== null;
  const max = numeric ? Math.max(r.a as number, r.b as number) : 0;
  const d = 0.04 * (i % 3);

  const cell = (side: "a" | "b") => {
    const v = side === "a" ? r.a : r.b;
    const win = r.better === side;
    const pct = numeric && max > 0 ? Math.max(4, Math.round(((v as number) / max) * 100)) : 0;
    return (
      <motion.td
        className={`py-4 align-middle sm:py-5 ${side === "a" ? "pr-2 text-left" : "pl-2 text-right"}`}
        initial={reduce ? false : { opacity: 0, x: side === "a" ? -44 : 44 }}
        animate={seen ? { opacity: 1, x: 0 } : undefined}
        transition={{ duration: 0.75, ease: SLAM, delay: d }}
      >
        <span className="cmpp-poster block" style={{ fontSize: r.text ? "clamp(17px, 2.1vw, 30px)" : "clamp(26px, 3.6vw, 52px)", lineHeight: 1, color: win ? ORANGE : "#fff", overflowWrap: "anywhere" }}>
          {r.text ? r.text[side === "a" ? 0 : 1] : v === null ? "—" : (
            <>
              <Tick value={v} decimals={decimalsOf(v)} play={seen} align={side === "a" ? "left" : "right"} />
              {r.suffix}
            </>
          )}
        </span>
        {numeric && (
          <span aria-hidden="true" className="mt-3 block h-[3px] w-full" style={{ background: "rgba(255,255,255,0.08)" }}>
            <motion.span
              className={`block h-full ${side === "a" ? "ml-auto origin-right" : "origin-left"}`}
              style={{ width: `${pct}%`, background: win ? ORANGE : "rgba(255,255,255,0.42)" }}
              initial={reduce ? false : { scaleX: 0 }}
              animate={seen ? { scaleX: 1 } : undefined}
              transition={{ duration: 1.2, ease: EASE, delay: d + 0.25 }}
            />
          </span>
        )}
      </motion.td>
    );
  };

  return (
    <tr ref={ref} className="cmpp-row" style={{ borderTop: "1px solid rgba(255,255,255,0.18)" }}>
      {cell("a")}
      <motion.th
        scope="row"
        className="px-1 py-4 text-center align-middle text-[9.5px] font-medium uppercase sm:px-3 sm:text-[11px]"
        style={{ letterSpacing: "0.16em", color: "rgba(255,255,255,0.64)", lineHeight: 1.45 }}
        initial={reduce ? false : { opacity: 0 }}
        animate={seen ? { opacity: 1 } : undefined}
        transition={{ duration: 0.6, delay: d + 0.2 }}
      >
        {typo(r.label)}
      </motion.th>
      {cell("b")}
    </tr>
  );
}

/* ------------------------------------------------------------------
   Reprise 2 : les cinq meilleurs de chaque coin (données du ModelTable).
   ------------------------------------------------------------------ */
export function PosterTopModels({ title, models, tone, round }: { title: string; models: SeoModel[]; tone: "black" | "orange"; round?: number }) {
  const orange = tone === "orange";
  const idx = title.indexOf(" par ");
  const head = idx > 0 ? title.slice(0, idx) : title;
  const tail = idx > 0 ? title.slice(idx + 5) : "";
  const heading = (
    <MaskLines
      className="cmpp-poster uppercase"
      style={{ fontSize: "clamp(40px, 5.2vw, 92px)", lineHeight: 0.9, margin: 0, fontWeight: 400, overflowWrap: "anywhere" }}
      lines={[
        `${head}${tail ? " " : ""}`,
        ...(tail
          ? [
              <>
                <span className="cmpp-serif lowercase" style={{ color: orange ? "#fff" : ORANGE, fontSize: "1.08em" }}>
                  par
                </span>{" "}
                {tail}
              </>,
            ]
          : []),
      ]}
    />
  );
  const body = (
    <div className={`grid gap-10 lg:gap-14 ${orange ? "lg:grid-cols-[minmax(0,1.65fr)_minmax(0,0.75fr)]" : "lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.65fr)]"}`}>
      <div className={orange ? "lg:order-2 lg:text-right" : ""}>
        <div className="lg:sticky lg:top-32">{heading}</div>
      </div>
      <div className={`min-w-0 ${orange ? "lg:order-1" : ""}`}>
        <PosterModelTable models={models} tone={tone} />
      </div>
    </div>
  );
  if (orange) {
    return (
      <CutSection dir="rise" className="cmpp-orange" style={{ background: ORANGE, color: "#000" }}>
        <div className="mx-auto max-w-[1440px] px-5 pb-[calc(5vw+80px)] pt-[calc(5vw+56px)] sm:px-8 lg:px-12">{body}</div>
      </CutSection>
    );
  }
  return (
    <section className="relative bg-black text-white">
      <div className="mx-auto max-w-[1440px] px-5 pb-[calc(5vw+80px)] pt-4 sm:px-8 lg:px-12">
        {round ? (
          <div className="mb-10 lg:mb-14">
            <Round n={round} />
          </div>
        ) : null}
        {body}
      </div>
    </section>
  );
}

function PosterModelTable({ models, tone }: { models: SeoModel[]; tone: "black" | "orange" }) {
  const orange = tone === "orange";
  const mute = orange ? "rgba(0,0,0,0.66)" : "rgba(255,255,255,0.58)";
  const line = orange ? "rgba(0,0,0,0.22)" : "rgba(255,255,255,0.16)";
  if (models.length === 0) {
    return <p style={{ color: mute, margin: 0 }}>{typo("Aucun modèle certifié ne correspond pour l'instant.")}</p>;
  }
  return (
    <div className="cmpp-scroll -mx-5 px-5 sm:mx-0 sm:px-0">
      <table className="w-full min-w-[720px] border-collapse text-left text-[14px]">
        <thead>
          <tr className="text-[10px] font-semibold uppercase" style={{ letterSpacing: "0.2em", color: mute }}>
            <th scope="col" className="w-[64px] pb-3 pr-2 font-semibold">#</th>
            <th scope="col" className="pb-3 pr-3 font-semibold">Modèle</th>
            <th scope="col" className="pb-3 pr-3 font-semibold">Type</th>
            <th scope="col" className="pb-3 pr-3 text-right font-semibold">Nominal</th>
            <th scope="col" className="pb-3 pr-3 text-right font-semibold">À -15 °C</th>
            <th scope="col" className="pb-3 pr-3 text-right font-semibold">HSPF2</th>
            <th scope="col" className="pb-3 pr-3 text-right font-semibold">SEER2</th>
            <th scope="col" className="pb-3 text-right font-semibold">LogisVert</th>
          </tr>
        </thead>
        <tbody>
          {models.map((m, i) => (
            <ModelRow key={m.slug} m={m} i={i} tone={tone} mute={mute} line={line} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

const SANS: CSSProperties = { fontFamily: "var(--font-display), var(--font-sans), sans-serif" };

function Num({ n, unit }: { n: number | null; unit?: string }) {
  if (n === null) return <>—</>;
  return (
    <>
      {fmtNum(n, decimalsOf(n))}
      {unit ? (
        <span className="ml-1 text-[10px] font-semibold uppercase" style={{ ...SANS, letterSpacing: "0.12em" }}>
          {unit}
        </span>
      ) : null}
    </>
  );
}

function ModelRow({ m, i, tone, mute, line }: { m: SeoModel; i: number; tone: "black" | "orange"; mute: string; line: string }) {
  const { ref, seen, reduce } = useSeen<HTMLTableRowElement>("0px 0px -6% 0px");
  const orange = tone === "orange";
  return (
    <motion.tr
      ref={ref}
      className="cmpp-row"
      style={{ borderTop: `1px solid ${line}` }}
      initial={reduce ? false : { opacity: 0, x: orange ? 36 : -36 }}
      animate={seen ? { opacity: 1, x: 0 } : undefined}
      transition={{ duration: 0.8, ease: SLAM, delay: i * 0.07 }}
    >
      <td className="py-4 pr-2 align-middle">
        <motion.span
          className="cmpp-poster block"
          style={{ fontSize: "clamp(38px, 3.6vw, 56px)", lineHeight: 0.9, color: orange ? "#000" : ORANGE, transformOrigin: "left center" }}
          initial={reduce ? false : { scale: 1.6, opacity: 0 }}
          animate={seen ? { scale: 1, opacity: 1 } : undefined}
          transition={{ duration: 0.55, ease: SLAM, delay: 0.25 + i * 0.07 }}
        >
          {i + 1}
        </motion.span>
      </td>
      <td className="py-4 pr-3 align-middle">
        <div className="flex items-center gap-3">
          <Link href={`/produit/${m.canonicalSlug}`} className="flex h-[52px] w-[66px] shrink-0 items-center justify-center overflow-hidden bg-white" aria-hidden="true" tabIndex={-1}>
            {m.imageUrl ? <Image src={m.imageUrl} alt="" width={66} height={52} sizes="66px" className="h-full w-full object-contain p-1" /> : null}
          </Link>
          <div className="min-w-0">
            <Link href={`/produit/${m.canonicalSlug}`} className="cmpp-link font-semibold" style={{ fontSize: 15 }}>
              {m.name}
            </Link>
            <div className="cmpp-mono text-[11px]" style={{ color: mute }}>
              {m.outdoorModel}
            </div>
            {m.alsoSoldAs.length > 0 && (
              <div className="text-[11px]" style={{ color: mute }}>
                Aussi : {m.alsoSoldAs.map((x) => x.brand).join(", ")}
              </div>
            )}
          </div>
        </div>
      </td>
      <td className="py-4 pr-3 align-middle text-[13px]" style={{ color: mute }}>
        {m.kind === "murale" ? "Murale" : "Centrale"}
        {m.coldClimate ? " · grand froid" : ""}
      </td>
      <td className="cmpp-poster whitespace-nowrap py-4 pr-3 text-right align-middle text-[20px]">
        <Num n={m.nominalBtu} unit="BTU" />
      </td>
      <td className="cmpp-poster whitespace-nowrap py-4 pr-3 text-right align-middle text-[20px]">
        {m.h5Btu !== null ? <Num n={m.h5Btu} unit="BTU" /> : <span className="text-[13px]" style={{ ...SANS, color: mute }}>n/d</span>}
      </td>
      <td className="cmpp-poster whitespace-nowrap py-4 pr-3 text-right align-middle text-[20px]">
        <Num n={m.hspf2} />
      </td>
      <td className="cmpp-poster whitespace-nowrap py-4 pr-3 text-right align-middle text-[20px]">
        <Num n={m.seer2} />
      </td>
      <td className="cmpp-poster whitespace-nowrap py-4 text-right align-middle text-[22px]">{m.logisVertDollars > 0 ? <>{fmtNum(m.logisVertDollars)} $</> : "—"}</td>
    </motion.tr>
  );
}

/* ------------------------------------------------------------------
   Reprise 3 : le texte (Prose), sur blanc, tranché.
   ------------------------------------------------------------------ */
export function PosterProse({ children }: { children: ReactNode }) {
  return (
    <CutSection dir="fall" style={{ background: "#fff", color: "#000" }}>
      <div className="mx-auto max-w-[1440px] px-5 pb-[calc(5vw+88px)] pt-[calc(5vw+64px)] sm:px-8 lg:px-12">
        <div className="mb-10 lg:mb-14">
          <Round n={3} tone="light" />
        </div>
        <Reveal className="cmpp-prose" y={30}>
          {children}
        </Reveal>
      </div>
    </CutSection>
  );
}

/* ------------------------------------------------------------------
   Appel à l'action (mêmes textes et liens que CtaThermoMatch).
   ------------------------------------------------------------------ */
function splitTwo(s: string): [string, string] {
  const words = s.split(" ");
  if (words.length < 3) return [s, ""];
  let best = 1;
  let diff = Infinity;
  for (let k = 1; k < words.length; k++) {
    const d = Math.abs(words.slice(0, k).join(" ").length - words.slice(k).join(" ").length);
    if (d < diff) {
      diff = d;
      best = k;
    }
  }
  return [words.slice(0, best).join(" "), words.slice(best).join(" ")];
}

export function PosterCta({
  title = "Trouvez la bonne thermopompe en 2 minutes",
  text = "Répondez à 13 questions sur votre maison. ThermoMatch compare toutes les marques avec les données certifiées d'Hydro-Québec et vous propose trois machines vraiment adaptées, sans parti pris.",
}: {
  title?: string;
  text?: string;
}) {
  const [l1, l2] = splitTwo(typo(title));
  const { ref, seen, reduce } = useSeen<HTMLDivElement>();
  return (
    <CutSection dir="rise" style={{ background: "#000", color: "#fff" }} className="overflow-hidden">
      <div ref={ref} className="relative">
        {/* Dalle orange en biais, entre par la droite */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-y-0 right-0 hidden w-[30%] lg:block"
          style={{ background: ORANGE, clipPath: "polygon(42% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
          initial={reduce ? false : { x: "102%" }}
          animate={seen ? { x: "0%" } : undefined}
          transition={{ duration: 1, ease: SLAM, delay: 0.1 }}
        />
        <div className="relative mx-auto max-w-[1440px] px-5 pb-20 pt-[calc(5vw+64px)] sm:px-8 lg:px-12 lg:pb-24">
          <div className="max-w-[880px]">
            <MaskLines className="cmpp-poster uppercase" style={{ fontSize: "clamp(44px, 6.4vw, 112px)", lineHeight: 0.9, margin: 0, fontWeight: 400 }} lines={l2 ? [`${l1} `, l2] : [l1]} />
            <Reveal delay={0.35}>
              <p className="max-w-[620px] text-[16.5px] leading-[1.65] sm:text-[18px]" style={{ color: "rgba(255,255,255,0.72)", margin: "26px 0 0" }}>
                {typo(text)}
              </p>
            </Reveal>
            <Reveal delay={0.5} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/trouver-ma-thermopompe" className="cmpp-btn inline-flex min-h-[52px] items-center justify-center gap-3 px-7 text-[15px] font-semibold" style={{ background: ORANGE, color: "#000" }}>
                Lancer ThermoMatch
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/soumission" className="cmpp-btn cmpp-ghost inline-flex min-h-[52px] items-center justify-center px-7 text-[15px] font-semibold" style={{ border: "1px solid #fff" }}>
                Demander une soumission
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </CutSection>
  );
}

/* ------------------------------------------------------------------
   Carte des autres combats (mêmes liens que RelatedLinks).
   ------------------------------------------------------------------ */
function Bout({ label }: { label: string }) {
  const m = label.match(/^(.+?) ou (.+?)\s?\?$/);
  if (!m) return <>{typo(label)}</>;
  return (
    <>
      <span className="block">{m[1]}</span>
      <span className="cmpp-serif block lowercase" style={{ color: ORANGE, fontSize: "1.05em", lineHeight: 0.8, margin: "0.04em 0 0.02em" }}>
        ou
      </span>
      <span className="block">{m[2]}&nbsp;?</span>
    </>
  );
}

export function PosterBouts({ title, links }: { title: string; links: Array<{ href: string; label: string; hint?: string }> }) {
  if (links.length === 0) return null;
  return (
    <section className="relative bg-black text-white">
      <div className="mx-auto max-w-[1440px] px-5 pb-[calc(5vw+80px)] pt-16 sm:px-8 lg:px-12 lg:pt-20">
        <MaskLines className="cmpp-poster uppercase" style={{ fontSize: "clamp(34px, 4.4vw, 72px)", lineHeight: 0.92, margin: 0, fontWeight: 400 }} lines={[title]} />
        <ul className="mt-10 grid list-none grid-cols-1 gap-px p-0 sm:grid-cols-2 lg:grid-cols-3" style={{ background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.18)" }}>
          {links.map((l, i) => (
            <Reveal as="li" key={l.href} delay={(i % 3) * 0.08} x={i % 2 ? 24 : -24} y={0} style={{ background: "#000" }}>
              <Link href={l.href} className="cmpp-bout flex h-full items-end justify-between gap-4 px-5 py-6 sm:px-6 sm:py-7">
                <span className="cmpp-poster uppercase" style={{ fontSize: "clamp(24px, 2.3vw, 36px)", lineHeight: 0.95 }}>
                  <Bout label={l.label} />
                  {l.hint && (
                    <span className="mt-1 block text-[12px] normal-case" style={{ ...SANS, opacity: 0.7 }}>
                      {l.hint}
                    </span>
                  )}
                </span>
                <svg className="cmpp-arrow mb-1 shrink-0" aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   Questions fréquentes (mêmes questions que FaqBlock ; le JSON-LD est
   injecté par la page).
   ------------------------------------------------------------------ */
export function PosterFaq({ items, title = "Questions fréquentes" }: { items: Array<{ question: string; answer: string }>; title?: string }) {
  if (items.length === 0) return null;
  return (
    <CutSection dir="fall" style={{ background: "#fff", color: "#000" }}>
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 pb-24 pt-[calc(5vw+64px)] sm:px-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] lg:gap-16 lg:px-12 lg:pb-28">
        <div>
          <div className="lg:sticky lg:top-32">
            <MaskLines className="cmpp-poster uppercase" style={{ fontSize: "clamp(44px, 6vw, 104px)", lineHeight: 0.9, margin: 0, fontWeight: 400 }} lines={title.split(" ").map((w, i, arr) => `${w}${i < arr.length - 1 ? " " : ""}`)} />
          </div>
        </div>
        <div className="cmpp-faq" style={{ borderBottom: "2px solid #000" }}>
          {items.map((f, i) => (
            <Reveal key={f.question} delay={i * 0.07} y={18}>
              <details className="group" style={{ borderTop: i === 0 ? "2px solid #000" : "1px solid rgba(0,0,0,0.16)" }}>
                <summary className="flex cursor-pointer items-start gap-4 py-6 sm:gap-6">
                  <span aria-hidden="true" className="cmpp-poster w-9 shrink-0 text-[26px] leading-none sm:w-12 sm:text-[32px]" style={{ color: ORANGE }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="cmpp-q flex-1 text-[17px] font-semibold leading-snug transition-colors sm:text-[20px]" style={{ letterSpacing: "-0.015em" }}>
                    {typo(f.question)}
                  </span>
                  <span aria-hidden="true" className="cmpp-cross mt-1.5" />
                </summary>
                <p className="pb-7 pl-[52px] pr-2 text-[15.5px] leading-[1.7] sm:pl-[72px] sm:text-[16.5px]" style={{ color: "rgba(0,0,0,0.72)", margin: 0 }}>
                  {typo(f.answer)}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </CutSection>
  );
}
