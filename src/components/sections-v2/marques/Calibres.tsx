/* ==================================================================
   Sections « Relevé des calibres » : la suite du héros « Règle des
   calibres » (/marques/[slug]/[type]). Gris-bleu pâle #E5EBEE, marine
   #0F2233, repères orange #E0592A, chiffres en monospace. Tout se lit
   comme un instrument de mesure : bande d’étalonnage (sources), relevé
   des modèles (chaque ligne porte sa mini-règle : capacité nominale et
   capacité certifiée à -15 °C), notice avec thermomètre-règle, onglets
   de classeur (liens) et questions numérotées.
   Rendu serveur ; seules les animations sont des composants client.
   ================================================================== */
import "./sections.css";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";
import { brandLogoPath } from "@/lib/data/brand-logos";
import { getFaqPageSchema } from "@/lib/seo";
import type { SeoModel } from "@/lib/seo/programmatic";
import { JsonLd, type FaqItem } from "@/components/seo/SeoBlocks";
import { DISPLAY, EASE, MONO, typo } from "@/components/heroes-v2/marques/shared";
import { CountUp } from "./CountUp";
import { ColdRuler } from "./CalibresClient";

const C = {
  bg: "#E5EBEE",
  strip: "#F4F7F8",
  navy: "#0F2233",
  mute: "rgba(15,34,51,0.74)",
  faint: "rgba(15,34,51,0.5)",
  line: "rgba(15,34,51,0.14)",
  orange: "#E0592A",
  orangeText: "#B4441B",
  paleMute: "rgba(229,235,238,0.78)",
  paleLine: "rgba(229,235,238,0.26)",
} as const;

const fmt = (n: number | null | undefined, suffix = "") => (n === null || n === undefined ? "—" : `${n.toLocaleString("fr-CA")}${suffix}`);

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <motion.p
      className="flex items-center gap-3 text-[12px] font-semibold uppercase"
      style={{ letterSpacing: "0.24em", margin: 0, color: light ? C.bg : C.navy }}
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: EASE }}
    >
      <motion.span
        aria-hidden="true"
        className="inline-block h-[14px] w-[2px] origin-bottom"
        style={{ background: C.orange }}
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
      />
      {children}
    </motion.p>
  );
}

/* ------------------------------------------------------------------
   Bande d’étalonnage : sources et garanties (mêmes éléments que TrustStrip)
   ------------------------------------------------------------------ */

const TRUST = [
  { label: "Liste LogisVert d'Hydro-Québec", hint: "montants officiels, mise à jour automatique" },
  { label: "Certifications AHRI et ENERGY STAR", hint: "capacités et COP mesurés, jamais estimés sans le dire" },
  { label: "Toutes les marques vendues au Québec", hint: "aucune marque favorisée, aucun avis sponsorisé" },
  { label: "Installateurs licenciés RBQ", hint: "la soumission finale vient d'un entrepreneur licencié" },
];

export function CalibresTrust() {
  return (
    <section aria-label="Sources et garanties" style={{ background: C.strip, color: C.navy, borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}`, fontFamily: DISPLAY }}>
      <motion.div
        aria-hidden="true"
        className="mqs-ticks-top h-[8px]"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        whileInView={{ clipPath: "inset(0 0% 0 0)" }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: EASE }}
      />
      <ul className="mx-auto grid max-w-[1440px] gap-x-10 gap-y-6 px-5 pb-8 pt-6 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-12" style={{ listStyle: "none", margin: "0 auto" }}>
        {TRUST.map((it, i) => (
          <motion.li
            key={it.label}
            className="relative pl-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.2 + i * 0.1 }}
          >
            <span aria-hidden="true" className="absolute left-0 top-0.5 h-[calc(100%-4px)] w-px" style={{ background: i === 0 ? C.orange : C.line }} />
            <span className="block text-[14.5px] font-semibold leading-snug" style={{ letterSpacing: "-0.01em" }}>
              {typo(it.label)}
            </span>
            <span className="mt-1 block text-[13px] leading-snug" style={{ color: C.mute, fontFamily: "var(--font-sans)" }}>
              {typo(it.hint)}
            </span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------------
   Relevé : mêmes colonnes et même ordre que ModelTable (sans marque)
   ------------------------------------------------------------------ */

export function CalibresTable({ models, caption, brandName, kindLabel }: { models: SeoModel[]; caption?: string; brandName: string; kindLabel: string }) {
  const top = models.reduce((a, m) => Math.max(a, m.nominalBtu, m.h5Btu ?? 0), 0);
  const scale = Math.max(6000, Math.ceil(top / 6000) * 6000);
  const pct = (v: number) => `${((v / scale) * 100).toFixed(2)}%`;
  const ticks = Array.from({ length: scale / 6000 + 1 }, (_, i) => i * 6000);
  const th = "px-4 py-3.5 text-[10.5px] font-semibold uppercase";
  const thStyle = { letterSpacing: "0.14em", color: C.mute, fontFamily: MONO, borderBottom: `1px solid ${C.navy}` } as const;

  return (
    <section className="relative" style={{ background: C.bg, color: C.navy, fontFamily: DISPLAY }}>
      <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <div className="mb-9 grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <Eyebrow>Relevé des calibres</Eyebrow>
            <p style={{ fontSize: "clamp(30px, 3.6vw, 54px)", fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 1, margin: "16px 0 0" }}>
              <CountUp value={models.length} className="tabular-nums" /> {kindLabel}
              {models.length > 1 ? "s" : ""} {brandName}
            </p>
          </div>
          {models.length > 0 ? (
            <div aria-hidden="true" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11.5px]" style={{ fontFamily: MONO, color: C.mute }}>
              <span className="inline-flex items-center gap-2">
                <span className="inline-block h-[3px] w-6" style={{ background: C.navy, opacity: 0.55 }} />
                Capacité nominale
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="inline-block h-[12px] w-[3px]" style={{ background: C.orange }} />
                Capacité certifiée à -15 °C
              </span>
              <span>Échelle 0 – {fmt(scale)} BTU</span>
            </div>
          ) : null}
        </div>

        {models.length === 0 ? (
          <p style={{ color: C.mute }}>Aucun modèle certifié ne correspond pour l’instant.</p>
        ) : (
          <motion.div
            className="relative overflow-x-auto"
            style={{ background: C.strip, boxShadow: `0 0 0 1px ${C.line}, 0 30px 50px -40px rgba(15,34,51,0.45)` }}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.02 }}
            transition={{ duration: 1, ease: EASE }}
          >
            <div aria-hidden="true" className="mqs-ticks-top h-[8px] min-w-[900px]" />
            <table className="w-full min-w-[900px] border-separate text-[13.5px]" style={{ borderSpacing: 0, fontFamily: "var(--font-sans)" }}>
              {caption ? (
                <caption className="px-4 pb-3 pt-4 text-left text-[13px]" style={{ captionSide: "top", color: C.mute }}>
                  {typo(caption)}
                </caption>
              ) : null}
              <thead>
                <tr>
                  <th scope="col" className={`${th} mqs-sticky-col text-left`} style={{ ...thStyle, background: C.strip }}>
                    Modèle
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
                </tr>
              </thead>
              <tbody>
                {models.map((m) => {
                  const logo = brandLogoPath(m.brandSlug);
                  const cell = { borderTop: `1px solid ${C.line}` } as const;
                  return (
                    <motion.tr key={m.slug} className="mqs-mrow" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "0px 0px -6% 0px" }} transition={{ duration: 0.6 }}>
                      <td className="mqs-sticky-col relative min-w-[220px] px-4 py-3.5 align-middle sm:min-w-[290px]" style={{ ...cell, background: C.strip }}>
                        <span aria-hidden="true" className="mqs-mark absolute bottom-0 left-0 top-0 w-[3px] origin-top" style={{ background: C.orange }} />
                        <div className="flex items-center gap-3">
                          <Link
                            href={`/produit/${m.canonicalSlug}`}
                            className="flex h-11 w-14 shrink-0 items-center justify-center overflow-hidden"
                            style={{ background: "#FFFFFF", boxShadow: `inset 0 0 0 1px ${C.line}` }}
                            aria-hidden="true"
                            tabIndex={-1}
                          >
                            {m.imageUrl ? (
                              <Image src={m.imageUrl} alt="" width={56} height={44} className="h-full w-full object-contain p-1" />
                            ) : logo ? (
                              <Image src={logo} alt="" width={48} height={20} className="h-auto max-h-[18px] w-auto max-w-[44px] object-contain opacity-80" />
                            ) : null}
                          </Link>
                          <div className="min-w-0">
                            <Link href={`/produit/${m.canonicalSlug}`} className="font-semibold hover:underline" style={{ color: C.navy, textUnderlineOffset: 3 }}>
                              {m.name}
                            </Link>
                            <div className="text-[11px]" style={{ fontFamily: MONO, color: C.mute }}>
                              {m.outdoorModel}
                            </div>
                          </div>
                        </div>
                        {m.alsoSoldAs.length > 0 && (
                          <div className="mt-1 text-[11px]" style={{ color: C.mute }}>
                            Aussi : {m.alsoSoldAs.map((a) => a.brand).join(", ")}
                          </div>
                        )}
                      </td>
                      <td className="px-4 py-3.5" style={{ ...cell, color: C.mute }}>
                        {m.kind === "murale" ? "Murale" : "Centrale"}
                        {m.coldClimate ? " · grand froid" : ""}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3.5 text-right tabular-nums" style={cell}>
                        {fmt(m.nominalBtu, " BTU")}
                      </td>
                      <td className="px-4 py-3.5 text-right" style={cell}>
                        <div className="flex flex-col items-end">
                          <span className="whitespace-nowrap tabular-nums" style={{ fontWeight: 600 }}>
                            {m.h5Btu !== null ? fmt(m.h5Btu, " BTU") : <span style={{ color: C.faint, fontWeight: 400 }}>n/d</span>}
                          </span>
                          {/* Mini-règle : trait marine = nominal, repère orange = certifié à -15 °C */}
                          <span aria-hidden="true" className="relative mt-2 block h-[12px] w-[160px]">
                            <span className="absolute inset-x-0 top-[5px] h-px" style={{ background: C.line }} />
                            {ticks.map((t) => (
                              <span key={t} className="absolute top-[2px] h-[7px] w-px" style={{ left: pct(t), background: C.navy, opacity: t % 12000 === 0 ? 0.42 : 0.18 }} />
                            ))}
                            <motion.span
                              className="absolute left-0 top-[4px] block h-[3px] origin-left"
                              style={{ width: pct(m.nominalBtu), background: C.navy, opacity: 0.55 }}
                              initial={{ scaleX: 0 }}
                              whileInView={{ scaleX: 1 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
                            />
                            {m.h5Btu !== null ? (
                              <motion.span
                                className="absolute top-0 block h-[12px] w-[3px] -translate-x-1/2 origin-bottom"
                                style={{ left: pct(m.h5Btu), background: C.orange }}
                                initial={{ scaleY: 0 }}
                                whileInView={{ scaleY: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, ease: EASE, delay: 0.75 }}
                              />
                            ) : null}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-3.5 text-right tabular-nums" style={cell}>
                        {fmt(m.hspf2)}
                      </td>
                      <td className="px-4 py-3.5 text-right tabular-nums" style={cell}>
                        {fmt(m.seer2)}
                      </td>
                      <td className="whitespace-nowrap px-4 py-3.5 text-right font-semibold tabular-nums" style={cell}>
                        {m.logisVertDollars > 0 ? fmt(m.logisVertDollars, " $") : "—"}
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </motion.div>
        )}
        <p className="mt-3 text-[11px] uppercase sm:hidden" style={{ fontFamily: MONO, letterSpacing: "0.1em", color: C.mute }}>
          Faites glisser le relevé vers la gauche →
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   Notice : choisir le bon calibre (texte de la page, thermomètre-règle)
   ------------------------------------------------------------------ */

export function CalibresNotice({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section aria-labelledby="calibre-notice-titre" style={{ background: C.bg, color: C.navy, fontFamily: DISPLAY }}>
      <div className="mx-auto grid max-w-[1440px] items-center gap-14 px-5 pb-20 sm:px-8 lg:grid-cols-[minmax(0,1fr)_440px] lg:gap-24 lg:px-12 lg:pb-28">
        <div className="pt-14" style={{ borderTop: `1px solid ${C.line}` }}>
          <Eyebrow>Notice</Eyebrow>
          <motion.h2
            id="calibre-notice-titre"
            style={{ fontFamily: DISPLAY, fontSize: "clamp(32px, 4vw, 62px)", fontWeight: 600, letterSpacing: "-0.05em", lineHeight: 1, margin: "16px 0 0", color: C.navy }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: EASE }}
          >
            {title}
          </motion.h2>
          <motion.div
            className="mqs-notice mt-8 max-w-[660px] text-[17.5px] leading-[1.75]"
            style={{ color: C.mute, fontFamily: "var(--font-sans)" }}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: EASE, delay: 0.2 }}
          >
            {children}
          </motion.div>
        </div>
        <ColdRuler />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   Appel à ThermoMatch (mêmes textes que CtaThermoMatch)
   ------------------------------------------------------------------ */

export function CalibresCta({
  title = "Trouvez la bonne thermopompe en 2 minutes",
  text = "Répondez à 13 questions sur votre maison. ThermoMatch compare toutes les marques avec les données certifiées d'Hydro-Québec et vous propose trois machines vraiment adaptées, sans parti pris.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section aria-labelledby="calibres-cta-titre" className="relative overflow-hidden" style={{ background: C.navy, color: C.bg, fontFamily: DISPLAY }}>
      <motion.div
        aria-hidden="true"
        className="mqs-ticks-light h-[10px]"
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        whileInView={{ clipPath: "inset(0 0% 0 0)" }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: EASE }}
      />
      {/* Repère orange qui glisse sur la règle jusqu’à son calibre */}
      <motion.span
        aria-hidden="true"
        className="absolute top-0 block h-[30px] w-[3px]"
        style={{ background: C.orange }}
        initial={{ left: "4%" }}
        whileInView={{ left: "62%" }}
        viewport={{ once: true }}
        transition={{ duration: 2, ease: EASE, delay: 0.4 }}
      />
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:gap-20 lg:px-12 lg:py-24">
        <div>
          <Eyebrow light>ThermoMatch</Eyebrow>
          <motion.h2
            id="calibres-cta-titre"
            style={{ fontFamily: DISPLAY, fontSize: "clamp(32px, 4vw, 62px)", fontWeight: 600, letterSpacing: "-0.05em", lineHeight: 1, margin: "18px 0 0", color: C.bg }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: EASE }}
          >
            {typo(title)}
          </motion.h2>
          <p className="max-w-[640px] text-[16.5px] leading-[1.7]" style={{ color: C.paleMute, margin: "20px 0 0", fontFamily: "var(--font-sans)" }}>
            {typo(text)}
          </p>
        </div>
        <motion.div
          className="flex flex-col gap-3 sm:flex-row lg:flex-col"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: EASE, delay: 0.3 }}
        >
          <Link href="/trouver-ma-thermopompe" className="mqs-btn inline-flex min-h-[52px] items-center justify-center gap-3 px-7 py-4 text-[15px] font-semibold" style={{ background: C.bg, color: C.navy }}>
            Lancer ThermoMatch
            <span aria-hidden="true" className="mqs-arrow">
              →
            </span>
          </Link>
          <Link href="/soumission" className="mqs-btn inline-flex min-h-[52px] items-center justify-center px-7 py-4 text-[15px] font-semibold" style={{ border: `1px solid ${C.paleLine}`, color: C.bg }}>
            Demander une soumission
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   Onglets de classeur : liens (mêmes liens que RelatedLinks)
   ------------------------------------------------------------------ */

export function CalibresLinks({ title, links }: { title: string; links: Array<{ href: string; label: string; hint?: string }> }) {
  if (links.length === 0) return null;
  return (
    <section aria-labelledby="calibres-liens-titre" style={{ background: C.bg, color: C.navy, fontFamily: DISPLAY }}>
      <div className="mx-auto max-w-[1440px] px-5 pb-6 pt-20 sm:px-8 lg:px-12">
        <h2 id="calibres-liens-titre" className="flex items-center gap-3 text-[12px] font-semibold uppercase" style={{ letterSpacing: "0.24em", margin: 0, color: C.navy, fontFamily: DISPLAY }}>
          <span aria-hidden="true" className="inline-block h-[14px] w-[2px]" style={{ background: C.orange }} />
          {title}
        </h2>
        <ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" style={{ listStyle: "none", padding: 0 }}>
          {links.map((l, i) => (
            <motion.li key={l.href} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: EASE, delay: i * 0.08 }}>
              <Link href={l.href} className="mqs-tab mqs-ticks-top relative block px-5 pb-5 pt-7" style={{ background: C.strip, color: C.navy, boxShadow: `0 0 0 1px ${C.line}` }}>
                <span aria-hidden="true" className="mqs-tab-mark absolute top-0 block h-[16px] w-[2px]" style={{ left: 18, background: C.orange }} />
                <span className="flex items-center justify-between gap-4">
                  <span className="text-[16.5px] font-semibold leading-snug" style={{ letterSpacing: "-0.02em" }}>
                    {l.label}
                  </span>
                  <span aria-hidden="true" className="mqs-arrow">
                    →
                  </span>
                </span>
                {l.hint && (
                  <span className="mt-1.5 block text-[12px]" style={{ fontFamily: MONO, color: C.mute }}>
                    {typo(l.hint)}
                  </span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   Questions numérotées (JSON-LD FAQPage identique à FaqBlock)
   ------------------------------------------------------------------ */

export function CalibresFaq({ items, title = "Questions fréquentes" }: { items: FaqItem[]; title?: string }) {
  if (items.length === 0) return null;
  return (
    <section aria-labelledby="calibres-faq-titre" style={{ background: C.bg, color: C.navy, fontFamily: DISPLAY }}>
      <JsonLd data={getFaqPageSchema(items)} />
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 pb-24 pt-16 sm:px-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-20 lg:px-12 lg:pb-32">
        <div>
          <Eyebrow>Questions</Eyebrow>
          <h2 id="calibres-faq-titre" style={{ fontFamily: DISPLAY, fontSize: "clamp(30px, 3.2vw, 46px)", fontWeight: 600, letterSpacing: "-0.045em", lineHeight: 1.02, margin: "16px 0 0", color: C.navy }}>
            {title}
          </h2>
        </div>
        <div style={{ borderTop: `1px solid ${C.navy}` }}>
          {items.map((f, i) => (
            <motion.details
              key={f.question}
              className="mqs-faq group"
              style={{ borderBottom: `1px solid ${C.line}` }}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE, delay: i * 0.08 }}
            >
              <summary className="grid grid-cols-[48px_minmax(0,1fr)_24px] items-baseline gap-3 py-5 sm:grid-cols-[64px_minmax(0,1fr)_24px]">
                <span className="text-[11.5px] tabular-nums" style={{ fontFamily: MONO, color: C.orangeText }}>
                  Q.{String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[18px] font-semibold leading-snug" style={{ letterSpacing: "-0.02em" }}>
                  {typo(f.question)}
                </span>
                <span aria-hidden="true" className="mqs-plus text-center text-[22px] leading-none" style={{ color: C.orange }}>
                  +
                </span>
              </summary>
              <p className="mqs-answer pb-6 text-[15.5px] leading-[1.7] sm:pl-[76px]" style={{ color: C.mute, margin: 0, fontFamily: "var(--font-sans)" }}>
                {typo(f.answer)}
              </p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
