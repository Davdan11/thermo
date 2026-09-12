/* ==================================================================
   Sections « Livret de la soirée » : la suite du héros « Palmarès »
   (/meilleures-thermopompes et /meilleures-thermopompes/[critere]).
   Vert bouteille #0F2E26, or #C9A24B, crème ; Fraunces. Sous le héros,
   la page devient le livret imprimé de la remise de prix : pages crème
   à double filet doré posées sur le vert, catégories en chiffres romains,
   rangs en grands chiffres dorés, filets d’or entre les lauréats, note
   du jury (méthode), programme des autres catégories et questions.
   Rendu serveur ; seules les animations sont des composants client.
   ================================================================== */
import "./sections.css";
import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import { brandLogoPath } from "@/lib/data/brand-logos";
import { getFaqPageSchema } from "@/lib/seo";
import type { SeoModel } from "@/lib/seo/programmatic";
import { JsonLd, type FaqItem } from "@/components/seo/SeoBlocks";
import { palmaresSerif } from "@/components/heroes-v2/marques/fonts";
import { DISPLAY, EASE, MONO, typo } from "@/components/heroes-v2/marques/shared";
import { Calm } from "./Calm";

const P = {
  green: "#0F2E26",
  deep: "#0A221C",
  gold: "#C9A24B",
  goldSoft: "#E3C987",
  goldInk: "#7A5A17",
  cream: "#F3EBDD",
  paper: "#F7F1E6",
  mat: "#EFE6D5",
  ink: "#0F2E26",
  inkMute: "rgba(15,46,38,0.74)",
  mute: "rgba(243,235,221,0.76)",
  line: "rgba(201,162,75,0.36)",
  lineInk: "rgba(122,90,23,0.26)",
} as const;
const SERIF = "var(--font-palmares), Georgia, 'Times New Roman', serif";
export const ROMAN = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];

/** Police Fraunces (variable) et réglage « réduire les animations » pour tout le livret. */
export function PalmaresRoot({ children }: { children: ReactNode }) {
  return (
    <div className={`${palmaresSerif.variable} mqs-root`}>
      <Calm>{children}</Calm>
    </div>
  );
}

/** Filet orné qui se trace depuis le centre (comme dans le héros). */
function Rule({ light = true, width = 560 }: { light?: boolean; width?: number }) {
  const c = light ? P.gold : P.goldInk;
  return (
    <div aria-hidden="true" className="mx-auto flex items-center gap-3" style={{ maxWidth: width }}>
      <motion.span className="h-px flex-1 origin-right" style={{ background: c, opacity: 0.7 }} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, ease: EASE }} />
      <motion.span className="inline-block h-[7px] w-[7px] rotate-45" style={{ border: `1px solid ${c}` }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} />
      <motion.span className="h-px flex-1 origin-left" style={{ background: c, opacity: 0.7 }} initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }} transition={{ duration: 1.4, ease: EASE }} />
    </div>
  );
}

function Eyebrow({ children, ink = false }: { children: ReactNode; ink?: boolean }) {
  const c = ink ? P.goldInk : P.gold;
  return (
    <p className="flex items-center justify-center gap-4 text-[11.5px] font-semibold uppercase" style={{ letterSpacing: "0.3em", color: c, margin: 0, fontFamily: DISPLAY }}>
      <span aria-hidden="true" className="inline-block h-px w-8 sm:w-12" style={{ background: c, opacity: 0.6 }} />
      <span>{children}</span>
      <span aria-hidden="true" className="inline-block h-px w-8 sm:w-12" style={{ background: c, opacity: 0.6 }} />
    </p>
  );
}

/* ------------------------------------------------------------------
   Sources et garanties (mêmes éléments que TrustStrip)
   ------------------------------------------------------------------ */

const TRUST = [
  { label: "Liste LogisVert d'Hydro-Québec", hint: "montants officiels, mise à jour automatique" },
  { label: "Certifications AHRI et ENERGY STAR", hint: "capacités et COP mesurés, jamais estimés sans le dire" },
  { label: "Toutes les marques vendues au Québec", hint: "aucune marque favorisée, aucun avis sponsorisé" },
  { label: "Installateurs licenciés RBQ", hint: "la soumission finale vient d'un entrepreneur licencié" },
];

export function PalmaresTrust() {
  return (
    <section aria-label="Sources et garanties" style={{ background: P.deep, color: P.cream, fontFamily: DISPLAY }}>
      <ul className="mx-auto grid max-w-[1240px] gap-y-8 px-7 py-12 text-center sm:grid-cols-2 sm:px-12 lg:grid-cols-4" style={{ listStyle: "none", margin: "0 auto" }}>
        {TRUST.map((it, i) => (
          <motion.li
            key={it.label}
            className="relative px-5"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE, delay: i * 0.12 }}
          >
            {i > 0 ? <span aria-hidden="true" className="absolute left-0 top-1/2 hidden h-[6px] w-[6px] -translate-x-1/2 -translate-y-1/2 rotate-45 lg:block" style={{ border: `1px solid ${P.gold}` }} /> : null}
            <span className="block text-[17px] leading-snug" style={{ fontFamily: SERIF, color: P.cream }}>
              {typo(it.label)}
            </span>
            <span className="mt-1.5 block text-[13px] leading-snug" style={{ color: P.mute }}>
              {typo(it.hint)}
            </span>
          </motion.li>
        ))}
      </ul>
      <div aria-hidden="true" className="mx-auto h-px max-w-[1240px]" style={{ background: P.line }} />
    </section>
  );
}

/* ------------------------------------------------------------------
   Page du livret : papier crème, double filet doré, folio
   ------------------------------------------------------------------ */

export function BookletPage({ folio, children, className = "" }: { folio?: string; children: ReactNode; className?: string }) {
  return (
    <motion.article
      className={`relative mx-auto max-w-[1240px] ${className}`}
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 1.2, ease: EASE }}
    >
      <div className="relative px-5 pb-12 pt-12 sm:px-10 sm:pt-14 lg:px-16 lg:pb-14 lg:pt-16" style={{ background: P.paper, color: P.ink, boxShadow: "0 50px 80px -50px rgba(0,0,0,0.75), 0 2px 0 rgba(0,0,0,0.12)" }}>
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-[8px] sm:inset-[12px]"
          style={{ border: `1px solid ${P.lineInk}` }}
          initial={{ opacity: 0, scale: 1.015 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: EASE, delay: 0.2 }}
        >
          <span className="absolute inset-[4px]" style={{ border: "1px solid rgba(122,90,23,0.12)" }} />
        </motion.span>
        <div className="relative">{children}</div>
        {folio ? (
          <p aria-hidden="true" className="relative mt-10 text-center text-[13px] italic" style={{ fontFamily: SERIF, color: P.goldInk, margin: "40px 0 0" }}>
            — {folio} —
          </p>
        ) : null}
      </div>
    </motion.article>
  );
}

/* ------------------------------------------------------------------
   Tableau des lauréats : mêmes colonnes que ModelTable (rang, marque, critère)
   ------------------------------------------------------------------ */

const fmt = (n: number | null | undefined, suffix = "") => (n === null || n === undefined ? "—" : `${n.toLocaleString("fr-CA")}${suffix}`);

export function AwardTable({
  models,
  caption,
  metric,
  podium = false,
}: {
  models: SeoModel[];
  caption?: string;
  metric: { label: string; value: (m: SeoModel) => string };
  /** Les trois premiers en grand (page d’un classement). */
  podium?: boolean;
}) {
  if (models.length === 0) {
    return <p style={{ color: P.inkMute }}>Aucun modèle certifié ne correspond pour l’instant.</p>;
  }
  const th = "px-3 py-3 text-[10.5px] font-semibold uppercase";
  const thStyle = { letterSpacing: "0.16em", color: P.goldInk, fontFamily: DISPLAY, borderBottom: `3px double ${P.gold}` } as const;
  const stick = "max-lg:sticky max-lg:z-[1] max-lg:bg-[#F7F1E6]";
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full min-w-[1000px] border-separate text-[13px]" style={{ borderSpacing: 0, fontFamily: "var(--font-sans)", color: P.ink }}>
        {caption ? (
          <caption className="pb-4 text-left" style={{ captionSide: "top", fontFamily: SERIF, fontStyle: "italic", fontSize: 15.5, color: P.inkMute }}>
            {typo(caption)}
          </caption>
        ) : null}
        <thead>
          <tr>
            <th scope="col" className={`${th} ${stick} max-lg:left-0 w-[56px] text-left`} style={thStyle}>
              #
            </th>
            <th scope="col" className={`${th} ${stick} max-lg:left-[56px] text-left`} style={thStyle}>
              Modèle
            </th>
            <th scope="col" className={`${th} text-left`} style={thStyle}>
              Marque
            </th>
            <th scope="col" className={`${th} text-left`} style={thStyle}>
              Type
            </th>
            <th scope="col" className={`${th} text-right`} style={thStyle}>
              Nominal
            </th>
            <th scope="col" className={`${th} text-right`} style={thStyle}>
              À -15 °C
            </th>
            <th scope="col" className={`${th} text-right`} style={thStyle}>
              HSPF2
            </th>
            <th scope="col" className={`${th} text-right`} style={thStyle}>
              SEER2
            </th>
            <th scope="col" className={`${th} text-right`} style={thStyle}>
              LogisVert
            </th>
            <th scope="col" className={`${th} text-right`} style={thStyle}>
              {metric.label}
            </th>
          </tr>
        </thead>
        <tbody>
          {models.map((m, i) => {
            const rank = i + 1;
            const big = podium && rank <= 3;
            const logo = brandLogoPath(m.brandSlug);
            const cell = { borderBottom: `1px solid ${P.lineInk}` } as const;
            const pad = big ? "py-5" : "py-3.5";
            return (
              <motion.tr
                key={m.slug}
                className="mqs-prow"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                // Pas de seuil « amount » : dans le tableau défilant (mobile), une ligne n’est jamais visible à moitié.
                viewport={{ once: true, margin: "0px 0px -6% 0px" }}
                transition={{ duration: 0.7, delay: Math.min(i, 5) * 0.07 }}
              >
                <td className={`${stick} max-lg:left-0 px-3 ${pad} align-middle`} style={cell}>
                  <motion.span
                    className={rank <= 3 ? "mqs-foil-ink block" : "block"}
                    style={
                      {
                        fontFamily: SERIF,
                        fontStyle: "italic",
                        fontWeight: 300,
                        fontSize: big ? 50 : rank <= 3 ? 36 : 26,
                        lineHeight: 1,
                        color: rank <= 3 ? undefined : P.goldInk,
                        "--mqs-delay": `${1 + i * 0.4}s`,
                      } as CSSProperties
                    }
                    initial={{ y: "40%", opacity: 0 }}
                    whileInView={{ y: "0%", opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: EASE, delay: 0.1 + Math.min(i, 5) * 0.07 }}
                  >
                    {rank}
                  </motion.span>
                </td>
                <td className={`${stick} max-lg:left-[56px] min-w-[190px] px-3 ${pad} sm:min-w-[260px]`} style={cell}>
                  <div className="flex items-center gap-3">
                    <Link
                      href={`/produit/${m.canonicalSlug}`}
                      className={`flex shrink-0 items-center justify-center overflow-hidden ${big ? "h-[60px] w-[76px]" : "h-11 w-14"}`}
                      style={{ background: P.mat, boxShadow: `inset 0 0 0 1px ${P.lineInk}` }}
                      aria-hidden="true"
                      tabIndex={-1}
                    >
                      {m.imageUrl ? (
                        <Image src={m.imageUrl} alt="" width={big ? 76 : 56} height={big ? 60 : 44} className="h-full w-full object-contain p-1" style={{ mixBlendMode: "multiply" }} />
                      ) : logo ? (
                        <Image src={logo} alt="" width={48} height={20} className="h-auto max-h-[18px] w-auto max-w-[44px] object-contain opacity-80" />
                      ) : null}
                    </Link>
                    <div className="min-w-0">
                      <Link href={`/produit/${m.canonicalSlug}`} className="mqs-pname block hover:underline" style={{ fontFamily: SERIF, fontSize: big ? 19 : 16.5, lineHeight: 1.2, color: P.ink, textUnderlineOffset: 3 }}>
                        {m.name}
                      </Link>
                      <div className="text-[11px]" style={{ fontFamily: MONO, color: P.inkMute }}>
                        {m.outdoorModel}
                      </div>
                    </div>
                  </div>
                  {m.alsoSoldAs.length > 0 && (
                    <div className="mt-1 text-[11px]" style={{ color: P.inkMute }}>
                      Aussi : {m.alsoSoldAs.map((a) => a.brand).join(", ")}
                    </div>
                  )}
                </td>
                <td className={`px-3 ${pad}`} style={cell}>
                  <Link href={`/marques/${m.brandSlug}`} className="inline-flex items-center gap-2 hover:underline" style={{ color: P.ink }} title={m.brand}>
                    {logo ? <Image src={logo} alt={m.brand} width={80} height={24} className="h-auto max-h-[22px] w-auto max-w-[80px] object-contain" /> : <span>{m.brand}</span>}
                  </Link>
                </td>
                <td className={`px-3 ${pad}`} style={{ ...cell, color: P.inkMute }}>
                  {m.kind === "murale" ? "Murale" : "Centrale"}
                  {m.coldClimate ? " · grand froid" : ""}
                </td>
                <td className={`whitespace-nowrap px-3 ${pad} text-right tabular-nums`} style={cell}>
                  {fmt(m.nominalBtu, " BTU")}
                </td>
                <td className={`whitespace-nowrap px-3 ${pad} text-right tabular-nums`} style={cell}>
                  {m.h5Btu !== null ? fmt(m.h5Btu, " BTU") : <span style={{ color: P.inkMute }}>n/d</span>}
                </td>
                <td className={`px-3 ${pad} text-right tabular-nums`} style={cell}>
                  {fmt(m.hspf2)}
                </td>
                <td className={`px-3 ${pad} text-right tabular-nums`} style={cell}>
                  {fmt(m.seer2)}
                </td>
                <td className={`whitespace-nowrap px-3 ${pad} text-right font-semibold tabular-nums`} style={{ ...cell, color: P.green }}>
                  {m.logisVertDollars > 0 ? fmt(m.logisVertDollars, " $") : "—"}
                </td>
                <td className={`px-3 ${pad} text-right tabular-nums`} style={{ ...cell, fontFamily: SERIF, fontSize: big ? 19 : 16, lineHeight: 1.25, color: P.ink, minWidth: 180 }}>
                  {typo(metric.value(m))}
                </td>
              </motion.tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

/* ------------------------------------------------------------------
   Une catégorie du livret (page d’index)
   ------------------------------------------------------------------ */

export function RankingCategory({
  index,
  href,
  title,
  description,
  models,
  metric,
}: {
  index: number;
  href: string;
  title: string;
  description: string;
  models: SeoModel[];
  metric: { label: string; value: (m: SeoModel) => string };
}) {
  const roman = ROMAN[index] ?? String(index + 1);
  return (
    <BookletPage folio={roman}>
      <header className="grid items-end gap-x-10 gap-y-4 lg:grid-cols-[auto_minmax(0,1fr)]">
        <span
          aria-hidden="true"
          className="mqs-foil-ink block pr-2"
          style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 300, fontSize: "clamp(70px, 8vw, 128px)", lineHeight: 0.85, "--mqs-delay": `${1.5 + index * 0.5}s` } as CSSProperties}
        >
          {roman}
        </span>
        <div className="min-w-0 lg:pb-2">
          <p className="text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.3em", color: P.goldInk, margin: 0, fontFamily: DISPLAY }}>
            Catégorie {roman}
          </p>
          <h2 style={{ fontFamily: SERIF, fontSize: "clamp(26px, 2.7vw, 40px)", fontWeight: 400, letterSpacing: "-0.015em", lineHeight: 1.1, margin: "10px 0 0", color: P.ink }}>
            <Link href={href} className="hover:underline" style={{ color: "inherit", textDecorationThickness: 1, textUnderlineOffset: 6 }}>
              {typo(title)}
            </Link>
          </h2>
          <p className="max-w-[760px] text-[15px] leading-relaxed" style={{ color: P.inkMute, margin: "10px 0 0" }}>
            {typo(description)}
          </p>
        </div>
      </header>
      <div className="mt-9">
        <AwardTable models={models} metric={metric} />
      </div>
      <p className="mt-6 text-right text-[14.5px]" style={{ margin: "24px 0 0" }}>
        <Link href={href} className="inline-flex items-center gap-2 font-semibold" style={{ color: P.goldInk }}>
          <span className="mqs-u">Voir les 25 premières</span>
          <span aria-hidden="true" className="mqs-arrow">
            →
          </span>
        </Link>
      </p>
    </BookletPage>
  );
}

/* ------------------------------------------------------------------
   Note du jury : la méthode (texte de la page en enfants)
   ------------------------------------------------------------------ */

export function JuryNote({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section aria-labelledby={id} className="px-4 py-20 sm:px-8 lg:py-28" style={{ color: P.cream }}>
      <motion.div
        className="relative mx-auto max-w-[920px] px-6 py-14 sm:px-14 sm:py-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.2, ease: EASE }}
      >
        <span aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ border: `1px solid ${P.line}` }}>
          <span className="absolute inset-[5px]" style={{ border: "1px solid rgba(201,162,75,0.16)" }} />
        </span>
        {[
          "left-0 top-0 -translate-x-1/2 -translate-y-1/2",
          "right-0 top-0 translate-x-1/2 -translate-y-1/2",
          "left-0 bottom-0 -translate-x-1/2 translate-y-1/2",
          "right-0 bottom-0 translate-x-1/2 translate-y-1/2",
        ].map((pos) => (
          <span key={pos} aria-hidden="true" className={`absolute h-[9px] w-[9px] ${pos}`} style={{ background: P.green, border: `1px solid ${P.gold}`, rotate: "45deg" }} />
        ))}
        <Eyebrow>Note du jury</Eyebrow>
        <h2 id={id} className="text-center" style={{ fontFamily: SERIF, fontWeight: 350, fontSize: "clamp(32px, 3.8vw, 54px)", lineHeight: 1.05, letterSpacing: "-0.02em", margin: "18px 0 22px", color: P.cream }}>
          {title}
        </h2>
        <Rule width={320} />
        <div className="mqs-jury mt-9 text-[17.5px] leading-[1.8] sm:text-[18.5px]" style={{ fontFamily: SERIF, color: P.mute }}>
          {children}
        </div>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------
   Appel à ThermoMatch (mêmes textes que CtaThermoMatch)
   ------------------------------------------------------------------ */

export function PalmaresCta({
  title = "Trouvez la bonne thermopompe en 2 minutes",
  text = "Répondez à 13 questions sur votre maison. ThermoMatch compare toutes les marques avec les données certifiées d'Hydro-Québec et vous propose trois machines vraiment adaptées, sans parti pris.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section aria-labelledby="palmares-cta-titre" className="px-4 pb-20 sm:px-8">
      <motion.div
        className="relative mx-auto max-w-[1240px] overflow-hidden px-6 py-16 text-center sm:px-12 lg:py-20"
        style={{ background: `radial-gradient(ellipse 80% 100% at 50% 0%, #1A4639 0%, ${P.deep} 80%)`, boxShadow: `inset 0 0 0 1px ${P.line}`, color: P.cream }}
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: EASE }}
      >
        <Eyebrow>ThermoMatch</Eyebrow>
        <h2
          id="palmares-cta-titre"
          className="mx-auto max-w-[860px]"
          style={{ fontFamily: SERIF, fontWeight: 350, fontSize: "clamp(32px, 4vw, 60px)", lineHeight: 1.05, letterSpacing: "-0.02em", margin: "18px auto 0", color: P.cream }}
        >
          {typo(title)}
        </h2>
        <p className="mx-auto max-w-[680px] text-[16.5px] leading-[1.65]" style={{ color: P.mute, margin: "18px auto 0" }}>
          {typo(text)}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <Link href="/trouver-ma-thermopompe" className="mqs-btn inline-flex min-h-[52px] w-full items-center justify-center gap-3 px-7 py-4 text-[15px] font-semibold sm:w-auto" style={{ background: P.gold, color: P.deep }}>
            Lancer ThermoMatch
            <span aria-hidden="true" className="mqs-arrow">
              →
            </span>
          </Link>
          <Link href="/soumission" className="mqs-btn inline-flex min-h-[52px] w-full items-center justify-center px-7 py-4 text-[15px] font-semibold sm:w-auto" style={{ border: `1px solid ${P.line}`, color: P.cream }}>
            Demander une soumission
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

/* ------------------------------------------------------------------
   Programme : autres classements (mêmes liens que RelatedLinks)
   ------------------------------------------------------------------ */

export function PalmaresProgramme({ title, links }: { title: string; links: Array<{ href: string; label: string; hint?: string }> }) {
  if (links.length === 0) return null;
  return (
    <section aria-labelledby="programme-titre" className="px-4 pb-16 pt-4 sm:px-8" style={{ color: P.cream }}>
      <div className="mx-auto max-w-[1120px] text-center">
        <h2 id="programme-titre" className="text-[12px] font-semibold uppercase" style={{ letterSpacing: "0.3em", color: P.gold, margin: 0, fontFamily: DISPLAY }}>
          {title}
        </h2>
        <div className="mt-5">
          <Rule />
        </div>
        <ol className="mt-8 grid text-left lg:grid-cols-2 lg:gap-x-14" style={{ listStyle: "none", padding: 0 }}>
          {links.map((l, i) => (
            <motion.li key={l.href} style={{ borderTop: `1px solid ${P.line}` }} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: EASE, delay: i * 0.1 }}>
              <Link href={l.href} className="mqs-prog-link grid grid-cols-[52px_minmax(0,1fr)_20px] items-center gap-4 py-5 sm:grid-cols-[72px_minmax(0,1fr)_20px]" style={{ color: P.cream }}>
                <span aria-hidden="true" className="mqs-foil text-center" style={{ fontFamily: SERIF, fontStyle: "italic", fontWeight: 300, fontSize: "clamp(34px, 3.4vw, 50px)", lineHeight: 1, "--mqs-delay": `${2 + i * 0.5}s` } as CSSProperties}>
                  {ROMAN[i] ?? i + 1}
                </span>
                <span className="min-w-0">
                  <span className="mqs-prog-t block" style={{ fontFamily: SERIF, fontSize: "clamp(18px, 1.6vw, 22px)", lineHeight: 1.25 }}>
                    {typo(l.label)}
                  </span>
                  {l.hint ? (
                    <span className="mt-1 block text-[12.5px]" style={{ color: P.mute }}>
                      {typo(l.hint)}
                    </span>
                  ) : null}
                </span>
                <span aria-hidden="true" className="mqs-arrow text-right" style={{ color: P.gold }}>
                  →
                </span>
              </Link>
            </motion.li>
          ))}
        </ol>
        <div aria-hidden="true" className="h-px" style={{ background: P.line }} />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   Questions (JSON-LD FAQPage identique à FaqBlock)
   ------------------------------------------------------------------ */

export function PalmaresFaq({ items, title = "Questions fréquentes" }: { items: FaqItem[]; title?: string }) {
  if (items.length === 0) return null;
  return (
    <section aria-labelledby="palmares-faq-titre" className="px-4 pb-24 pt-10 sm:px-8 lg:pb-32" style={{ color: P.cream }}>
      <JsonLd data={getFaqPageSchema(items)} />
      <div className="mx-auto max-w-[900px]">
        <h2 id="palmares-faq-titre" className="text-center" style={{ fontFamily: SERIF, fontWeight: 350, fontSize: "clamp(30px, 3.4vw, 48px)", lineHeight: 1.05, letterSpacing: "-0.02em", margin: "0 0 20px", color: P.cream }}>
          {title}
        </h2>
        <Rule width={320} />
        <div className="mt-10" style={{ borderTop: `1px solid ${P.line}` }}>
          {items.map((f, i) => (
            <motion.details
              key={f.question}
              className="mqs-faq"
              style={{ borderBottom: `1px solid ${P.line}` }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.1 }}
            >
              <summary className="flex items-baseline justify-between gap-6 py-6">
                <span style={{ fontFamily: SERIF, fontSize: "clamp(18px, 1.7vw, 22px)", lineHeight: 1.3, color: P.cream }}>{typo(f.question)}</span>
                <span aria-hidden="true" className="mqs-plus shrink-0 text-[24px] leading-none" style={{ color: P.gold }}>
                  +
                </span>
              </summary>
              <p className="mqs-answer pb-7 text-[16px] leading-[1.75]" style={{ color: P.mute, margin: 0 }}>
                {typo(f.answer)}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
