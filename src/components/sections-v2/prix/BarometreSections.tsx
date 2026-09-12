import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";
import { brandLogoPath } from "@/lib/data/brand-logos";
import { getFaqPageSchema } from "@/lib/seo";
import { JsonLd } from "@/components/seo/SeoBlocks";
import type { SeoModel } from "@/lib/seo/programmatic";
import { BARO, DISPLAY, MONO, fr, typo } from "./tokens";
import { Count, Grow, Item, Reveal, Stagger } from "./kit";

/* ==================================================================
   /subventions/logisvert et /subventions/logisvert/[marque] —
   sections sous le héros « Baromètre ».
   Menthe #EAF5EE, forêt #0F3D2B, montants en vert #1A8F4E. Chaque
   tableau devient un instrument : rangées-barres, fourchettes min→max
   sur un axe commun, chiffres mono. Mêmes données que les blocs SEO
   partagés (TrustStrip, ModelTable, FaqBlock, CtaThermoMatch,
   RelatedLinks, Prose), rendues dans la langue de la page.
   ================================================================== */

const { bg: BG, forest: FOREST, green: GREEN, mute: MUTE, line: LINE, panel: PANEL } = BARO;
export const BARO_WRAP = "mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12";

/** Petit baromètre à quatre barres (même glyphe que l'étiquette du héros). */
export function BarsGlyph({ color = GREEN, animate = true }: { color?: string; animate?: boolean }) {
  return (
    <span aria-hidden="true" className="inline-flex shrink-0 items-end gap-[3px]" style={{ height: 13 }}>
      {[6, 10, 8, 13].map((h, k) =>
        animate ? <Grow key={k} axis="y" className="block w-[3px]" style={{ height: h, background: color }} delay={0.1 + k * 0.08} duration={0.6} /> : <span key={k} className="block w-[3px]" style={{ height: h, background: color }} />,
      )}
    </span>
  );
}

export function BaroEyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className="m-0 flex items-end gap-3 text-[11.5px] font-medium uppercase" style={{ fontFamily: MONO, letterSpacing: "0.2em", color: light ? "#7FD3A2" : GREEN }}>
      <BarsGlyph color={light ? "#7FD3A2" : GREEN} />
      {children}
    </p>
  );
}

/** Titre de section : linéale légère, la partie avant « : » en gras (mêmes mots que le titre d'origine). */
export function BaroTitle({ id, title, light = false, size = "clamp(32px, 3.6vw, 56px)", as: Tag = "h2" }: { id?: string; title: string; light?: boolean; size?: string; as?: "h2" | "p" }) {
  const t = typo(title);
  const i = t.indexOf(" :");
  return (
    <Tag id={id} className="m-0" style={{ fontFamily: DISPLAY, fontSize: size, lineHeight: 1, letterSpacing: "-0.045em", fontWeight: 300, color: light ? BG : FOREST, textWrap: "balance" }}>
      {i > 0 ? (
        <>
          <span style={{ fontWeight: 700 }}>{t.slice(0, i)}</span>
          {t.slice(i)}
        </>
      ) : (
        <span style={{ fontWeight: 700 }}>{t}</span>
      )}
    </Tag>
  );
}

/* ------------------------------------------------------------------
   Bande de preuve (mêmes quatre éléments que TrustStrip).
   ------------------------------------------------------------------ */

const TRUST = [
  { label: "Liste LogisVert d'Hydro-Québec", hint: "montants officiels, mise à jour automatique" },
  { label: "Certifications AHRI et ENERGY STAR", hint: "capacités et COP mesurés, jamais estimés sans le dire" },
  { label: "Toutes les marques vendues au Québec", hint: "aucune marque favorisée, aucun avis sponsorisé" },
  { label: "Installateurs licenciés RBQ", hint: "la soumission finale vient d'un entrepreneur licencié" },
];

export function BaroTrust() {
  return (
    <section aria-label="Sources et garanties" style={{ background: FOREST, color: BG }}>
      <Stagger as="ul" className={`${BARO_WRAP} m-0 grid list-none grid-cols-1 gap-x-8 gap-y-5 py-7 sm:grid-cols-2 lg:grid-cols-4`} gap={0.1}>
        {TRUST.map((it, k) => (
          <Item key={it.label} className="flex items-start gap-3.5 text-[13.5px] leading-snug">
            <span aria-hidden="true" className="mt-[3px] text-[10.5px] tabular-nums" style={{ fontFamily: MONO, color: "#7FD3A2" }}>
              {String(k + 1).padStart(2, "0")}
            </span>
            <span className="min-w-0">
              <span className="block font-semibold">{typo(it.label)}</span>
              <span className="mt-0.5 block text-[12.5px]" style={{ color: "rgba(234,245,238,0.72)" }}>
                {typo(it.hint)}
              </span>
            </span>
          </Item>
        ))}
      </Stagger>
    </section>
  );
}

/* ------------------------------------------------------------------
   Index : toutes les marques, fourchette min → max sur un axe commun.
   ------------------------------------------------------------------ */

export type BaroBrandRow = { slug: string; name: string; models: number; min: number; max: number; cold: number };

function axis(max: number) {
  const step = max > 8000 ? 2000 : max > 3000 ? 1000 : 500;
  return { step, top: Math.max(step, Math.ceil(max / step) * step) };
}

export function BaroBrandTable({ brands, updated }: { brands: BaroBrandRow[]; updated: string | null }) {
  const { step, top } = axis(Math.max(1, ...brands.map((b) => b.max)));
  const ticks = Array.from({ length: top / step + 1 }, (_, k) => k * step);
  const pct = (v: number) => `${(v / top) * 100}%`;
  return (
    <section aria-labelledby="baro-toutes" className="relative pb-20 pt-20 sm:pt-24" style={{ background: BG }}>
      <div className={BARO_WRAP}>
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-5">
          <div className="min-w-0">
            <BaroEyebrow>{brands.length} marques · liste officielle</BaroEyebrow>
            <Reveal className="mt-4" y={20}>
              <BaroTitle as="p" id="baro-toutes" title="Toutes les marques : du minimum au maximum" />
            </Reveal>
          </div>
          {updated && (
            <p className="m-0 text-[11px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.14em", color: MUTE }}>
              Liste du {updated}
            </p>
          )}
        </div>

        <Reveal className="mt-10" y={26}>
          <div className="overflow-x-auto" style={{ borderTop: `1.5px solid ${FOREST}`, borderBottom: `1.5px solid ${FOREST}` }}>
            <table className="w-full min-w-[600px] border-collapse text-[14px]" style={{ fontVariantNumeric: "tabular-nums" }}>
              <thead>
                <tr className="text-[10.5px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: MUTE }}>
                  <th scope="col" className="sticky left-0 z-[1] px-3 pb-3 pt-4 text-left font-medium" style={{ background: BG }}>
                    Marque
                  </th>
                  <th scope="col" className="hidden w-[38%] px-3 pb-3 pt-4 text-left font-medium lg:table-cell">
                    <span className="sr-only">Fourchette des montants</span>
                    <span aria-hidden="true" className="relative block h-3">
                      {ticks.map((t, k) => (
                        <span key={t} className={`absolute top-0 whitespace-nowrap ${k % 2 && ticks.length > 6 ? "hidden xl:inline" : ""}`} style={{ left: pct(t), transform: k === 0 ? "none" : "translateX(-50%)" }}>
                          {t === 0 ? "0" : `${t / 1000} k$`}
                        </span>
                      ))}
                    </span>
                  </th>
                  <th scope="col" className="px-3 pb-3 pt-4 text-right font-medium">
                    Maximum
                  </th>
                  <th scope="col" className="px-3 pb-3 pt-4 text-right font-medium">
                    Minimum
                  </th>
                  <th scope="col" className="px-3 pb-3 pt-4 text-right font-medium">
                    Modèles admissibles
                  </th>
                  <th scope="col" className="px-3 pb-3 pt-4 text-right font-medium">
                    Grand froid
                  </th>
                </tr>
              </thead>
              <tbody>
                {brands.map((b, k) => (
                  <tr key={b.slug} className="ps2-barrow" style={{ borderTop: `1px solid ${LINE}` }}>
                    <th scope="row" className="sticky left-0 z-[1] px-3 py-[9px] text-left font-semibold" style={{ background: BG }}>
                      <Link href={`/subventions/logisvert/${b.slug}`} className="ps2-uline" style={{ color: FOREST, backgroundSize: "0% 1px" }}>
                        {b.name}
                      </Link>
                    </th>
                    <td aria-hidden="true" className="hidden px-3 py-[9px] lg:table-cell">
                      <span className="relative block h-[14px]">
                        {ticks.map((t) => (
                          <span key={t} className="absolute bottom-[-9px] top-[-9px] w-px" style={{ left: pct(t), background: t === 0 ? "rgba(15,61,43,0.3)" : LINE }} />
                        ))}
                        <span className="absolute top-1/2 h-px" style={{ left: 0, width: pct(b.min), background: "rgba(15,61,43,0.25)" }} />
                        <span className="absolute inset-y-[3px]" style={{ left: pct(b.min), width: `calc(${pct(b.max - b.min)} + 2px)` }}>
                          <Grow className="ps2-barfill block h-full rounded-[2px]" style={{ background: GREEN, transition: "background-color .25s" }} delay={Math.min(k, 14) * 0.035} duration={0.9} />
                        </span>
                        <span className="absolute top-1/2 h-[9px] w-[9px] -translate-x-1/2 -translate-y-1/2 rounded-full" style={{ left: pct(b.min), border: `2px solid ${GREEN}`, background: BG }} />
                      </span>
                    </td>
                    <td className="px-3 py-[9px] text-right font-semibold" style={{ fontFamily: MONO, color: GREEN }}>
                      {b.max.toLocaleString("fr-CA")} $
                    </td>
                    <td className="px-3 py-[9px] text-right" style={{ fontFamily: MONO, color: MUTE }}>
                      {b.min.toLocaleString("fr-CA")} $
                    </td>
                    <td className="px-3 py-[9px] text-right" style={{ fontFamily: MONO }}>
                      {b.models}
                    </td>
                    <td className="px-3 py-[9px] text-right" style={{ fontFamily: MONO }}>
                      {b.cold}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
        <p aria-hidden="true" className="m-0 mt-3 hidden items-center gap-5 text-[10.5px] uppercase lg:flex" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: MUTE }}>
          <span className="inline-flex items-center gap-2">
            <span className="inline-block h-[9px] w-[9px] rounded-full" style={{ border: `2px solid ${GREEN}` }} />
            minimum
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="inline-block h-[8px] w-6 rounded-[2px]" style={{ background: GREEN }} />
            jusqu’au maximum
          </span>
        </p>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   Texte : colonne de lecture, titre à gauche.
   ------------------------------------------------------------------ */

export function BaroProse({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="relative py-20 sm:py-24" style={{ background: PANEL }}>
      <div className={`${BARO_WRAP} grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20`}>
        <Reveal y={20} className="min-w-0">
          <BaroEyebrow>Méthode</BaroEyebrow>
          <div className="mt-4">
            <BaroTitle title={title} />
          </div>
        </Reveal>
        <Reveal delay={0.12} className="min-w-0 max-w-[760px] pt-1 text-[17px] leading-[1.75] [&_a]:font-semibold [&_a]:underline [&_a]:decoration-[1.5px] [&_a]:underline-offset-4 [&_a]:transition-colors hover:[&_a]:text-[#1A8F4E] [&_p]:m-0 [&_p+p]:mt-5" style={{ color: "rgba(15,61,43,0.86)" }}>
          {children}
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   Appel à l'action (mêmes textes et liens que CtaThermoMatch).
   ------------------------------------------------------------------ */

export function BaroCta({
  title = "Trouvez la bonne thermopompe en 2 minutes",
  text = "Répondez à 13 questions sur votre maison. ThermoMatch compare toutes les marques avec les données certifiées d'Hydro-Québec et vous propose trois machines vraiment adaptées, sans parti pris.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="relative py-14" style={{ background: BG }}>
      <div className={BARO_WRAP}>
        <Reveal y={28} className="relative overflow-hidden rounded-[14px] px-6 py-10 sm:px-12 sm:py-14" style={{ background: FOREST, color: BG }}>
          {/* Échelle graduée qui se déroule */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 flex h-[46px] items-end gap-[7px] px-6 opacity-50 sm:px-12">
            {Array.from({ length: 90 }, (_, k) => (
              <Grow key={k} axis="y" className="block w-px shrink-0" style={{ height: k % 10 === 0 ? 22 : k % 5 === 0 ? 14 : 8, background: "#7FD3A2" }} delay={0.3 + k * 0.008} duration={0.5} />
            ))}
          </div>
          <div className="relative grid gap-8 pb-6 md:grid-cols-[minmax(0,1fr)_auto] md:items-end md:gap-14">
            <div className="min-w-0">
              <BaroEyebrow light>ThermoMatch</BaroEyebrow>
              <h2 className="m-0 mt-4" style={{ fontFamily: DISPLAY, fontSize: "clamp(30px, 3.4vw, 52px)", lineHeight: 1, letterSpacing: "-0.045em", fontWeight: 700, color: BG, textWrap: "balance" }}>
                {typo(title)}
              </h2>
              <p className="m-0 mt-4 max-w-[680px] text-[16px] leading-[1.65]" style={{ color: "rgba(234,245,238,0.74)" }}>
                {typo(text)}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
              <Link href="/trouver-ma-thermopompe" className="ps2-btn inline-flex min-h-[52px] items-center justify-center gap-3 rounded-[10px] px-6 text-[15px] font-semibold" style={{ background: BG, color: FOREST }}>
                Lancer ThermoMatch
                <span aria-hidden="true" className="ps2-arrow" style={{ color: GREEN }}>
                  →
                </span>
              </Link>
              <Link href="/soumission" className="ps2-btn inline-flex min-h-[52px] items-center justify-center rounded-[10px] px-6 text-[15px] font-semibold hover:bg-white/10" style={{ border: "1.5px solid rgba(234,245,238,0.45)", color: BG }}>
                Demander une soumission
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   Marque : tableau des modèles (mêmes colonnes que ModelTable), le
   montant LogisVert en rangée-barre sur le maximum de la marque.
   ------------------------------------------------------------------ */

const fmt = (n: number | null | undefined, suffix = "") => (n === null || n === undefined ? "—" : `${n.toLocaleString("fr-CA")}${suffix}`);

export function BaroModelSection({ id, title, models, max }: { id: string; title: string; models: SeoModel[]; max: number }) {
  return (
    <section aria-labelledby={id} className="relative pt-20" style={{ background: BG }}>
      <div className={BARO_WRAP}>
        <div className="flex flex-wrap items-end justify-between gap-x-10 gap-y-4">
          <Reveal y={20} className="min-w-0">
            <BaroEyebrow>{models.length} modèles</BaroEyebrow>
            <div className="mt-4">
              <BaroTitle id={id} title={title} />
            </div>
          </Reveal>
          <p aria-hidden="true" className="m-0 flex items-center gap-2 text-[10.5px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: MUTE }}>
            <span className="inline-block h-[8px] w-6 rounded-[2px]" style={{ background: GREEN }} />
            LogisVert, sur {fr(max)}&nbsp;$
          </p>
        </div>
        <Reveal className="mt-8" y={24}>
          <BaroModelTable models={models} max={max} />
        </Reveal>
      </div>
    </section>
  );
}

function BaroModelTable({ models, max }: { models: SeoModel[]; max: number }) {
  if (models.length === 0) {
    return <p style={{ color: MUTE }}>Aucun modèle certifié ne correspond pour l’instant.</p>;
  }
  const th = "px-3 pb-3 pt-4 font-medium";
  return (
    <div className="overflow-x-auto rounded-[4px]" style={{ background: PANEL, borderTop: `1.5px solid ${FOREST}`, borderBottom: `1.5px solid ${FOREST}` }}>
      <table className="w-full min-w-[900px] border-collapse text-[14px]" style={{ fontVariantNumeric: "tabular-nums" }}>
        <thead>
          <tr className="text-[10.5px] uppercase" style={{ fontFamily: MONO, letterSpacing: "0.12em", color: MUTE }}>
            <th scope="col" className={`${th} sticky left-0 z-[1] text-left`} style={{ background: PANEL }}>
              Modèle
            </th>
            <th scope="col" className={`${th} w-[24%] text-left`}>
              LogisVert
            </th>
            <th scope="col" className={`${th} text-left`}>
              Type
            </th>
            <th scope="col" className={`${th} text-right`}>
              Nominal
            </th>
            <th scope="col" className={`${th} text-right`}>
              À -15 °C
            </th>
            <th scope="col" className={`${th} text-right`}>
              HSPF2
            </th>
            <th scope="col" className={`${th} text-right`}>
              SEER2
            </th>
          </tr>
        </thead>
        <tbody>
          {models.map((m, i) => (
            <tr key={m.slug} className="ps2-barrow" style={{ borderTop: `1px solid ${LINE}` }}>
              <td className="sticky left-0 z-[1] px-3 py-3" style={{ background: PANEL }}>
                <div className="flex items-center gap-3">
                  <Link href={`/produit/${m.canonicalSlug}`} className="flex h-11 w-14 shrink-0 items-center justify-center overflow-hidden rounded-[6px] bg-white" style={{ boxShadow: `inset 0 0 0 1px ${LINE}` }} aria-hidden="true" tabIndex={-1}>
                    {m.imageUrl ? (
                      <Image src={m.imageUrl} alt="" width={56} height={44} className="h-full w-full object-contain p-1" />
                    ) : brandLogoPath(m.brandSlug) ? (
                      <Image src={brandLogoPath(m.brandSlug)!} alt="" width={48} height={20} className="h-auto max-h-[18px] w-auto max-w-[44px] object-contain opacity-80" />
                    ) : null}
                  </Link>
                  <div className="min-w-0">
                    <Link href={`/produit/${m.canonicalSlug}`} className="font-semibold transition-colors hover:text-[#1A8F4E]" style={{ color: FOREST }}>
                      {m.name}
                    </Link>
                    <div className="text-[11.5px]" style={{ fontFamily: MONO, color: MUTE }}>
                      {m.outdoorModel}
                    </div>
                  </div>
                </div>
                {m.alsoSoldAs.length > 0 && (
                  <div className="mt-1 text-[11.5px]" style={{ color: MUTE }}>
                    Aussi&nbsp;: {m.alsoSoldAs.map((a) => a.brand).join(", ")}
                  </div>
                )}
              </td>
              <td className="px-3 py-3">
                <span className="flex items-center gap-3">
                  <span className="min-w-[5.2em] whitespace-nowrap font-semibold" style={{ fontFamily: MONO, color: GREEN }}>
                    {m.logisVertDollars > 0 ? fmt(m.logisVertDollars, " $") : "—"}
                  </span>
                  <span aria-hidden="true" className="relative hidden h-[10px] flex-1 sm:block" style={{ background: "rgba(15,61,43,0.07)", borderRadius: 2 }}>
                    {m.logisVertDollars > 0 && (
                      <span className="absolute inset-y-0 left-0" style={{ width: `${Math.max(2, (m.logisVertDollars / Math.max(1, max)) * 100)}%` }}>
                        <Grow className="ps2-barfill block h-full rounded-[2px]" style={{ background: GREEN, transition: "background-color .25s" }} delay={Math.min(i, 12) * 0.04} duration={0.9} />
                      </span>
                    )}
                  </span>
                </span>
              </td>
              <td className="whitespace-nowrap px-3 py-3" style={{ color: MUTE }}>
                {m.kind === "murale" ? "Murale" : "Centrale"}
                {m.coldClimate ? " · grand froid" : ""}
              </td>
              <td className="whitespace-nowrap px-3 py-3 text-right" style={{ fontFamily: MONO }}>
                {fmt(m.nominalBtu, " BTU")}
              </td>
              <td className="whitespace-nowrap px-3 py-3 text-right" style={{ fontFamily: MONO }}>
                {m.h5Btu !== null ? fmt(m.h5Btu, " BTU") : <span style={{ color: "rgba(15,61,43,0.45)" }}>n/d</span>}
              </td>
              <td className="px-3 py-3 text-right" style={{ fontFamily: MONO }}>
                {fmt(m.hspf2)}
              </td>
              <td className="px-3 py-3 text-right" style={{ fontFamily: MONO }}>
                {fmt(m.seer2)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ------------------------------------------------------------------
   Alerte : cadre d'instrument autour du formulaire partagé.
   ------------------------------------------------------------------ */

export function BaroAlertFrame({ brand, max, updated, children }: { brand: string; max: number; updated: string | null; children: ReactNode }) {
  return (
    <section className="relative pt-16" style={{ background: BG }}>
      <div className={BARO_WRAP}>
        <Reveal y={24} className="relative rounded-[30px] p-2 sm:p-3" style={{ background: FOREST }}>
          <div aria-hidden="true" className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 px-3 pb-2.5 pt-1.5 text-[10.5px] uppercase sm:px-4" style={{ fontFamily: MONO, letterSpacing: "0.16em", color: "rgba(234,245,238,0.72)" }}>
            <span className="flex items-end gap-3">
              <BarsGlyph color="#7FD3A2" />
              Veille · {brand} · jusqu’à <Count value={max} duration={1.4} className="font-semibold" style={{ color: "#7FD3A2" }} />&nbsp;$
            </span>
            {updated && <span>Liste du {updated}</span>}
          </div>
          {children}
          {/* Graduations sous le cadran */}
          <div aria-hidden="true" className="flex h-[16px] items-start gap-[6px] overflow-hidden px-4 pt-1.5">
            {Array.from({ length: 160 }, (_, k) => (
              <span key={k} className="block w-px shrink-0" style={{ height: k % 10 === 0 ? 9 : 4, background: "rgba(127,211,162,0.5)" }} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   Autres marques (mêmes liens que RelatedLinks), en rangées-barres.
   ------------------------------------------------------------------ */

export function BaroRelated({ title, links }: { title: string; links: Array<{ href: string; label: string; hint?: string; value: number }> }) {
  if (links.length === 0) return null;
  const top = Math.max(1, ...links.map((l) => l.value));
  return (
    <section className="relative pb-6 pt-20" style={{ background: BG }}>
      <div className={BARO_WRAP}>
        <Reveal y={16}>
          <h2 className="m-0 flex items-end gap-3 text-[13px] font-semibold uppercase" style={{ fontFamily: MONO, letterSpacing: "0.16em", color: FOREST }}>
            <BarsGlyph />
            {typo(title)}
          </h2>
        </Reveal>
        <Stagger as="ul" className="m-0 mt-6 grid list-none grid-cols-1 gap-x-6 p-0 sm:grid-cols-2 lg:grid-cols-3" gap={0.05} style={{ borderTop: `1.5px solid ${FOREST}` }}>
          {links.map((l) => (
            <Item key={l.href} y={10} style={{ borderBottom: `1px solid ${LINE}` }}>
              <Link href={l.href} className="ps2-linkrow group block rounded-[4px] px-3 py-3.5" style={{ color: FOREST }}>
                <span className="flex items-baseline justify-between gap-4">
                  <span className="font-semibold">{typo(l.label)}</span>
                  {l.hint && (
                    <span className="ps2-linkhint shrink-0 text-[12px]" style={{ fontFamily: MONO, color: GREEN }}>
                      {typo(l.hint)}
                    </span>
                  )}
                </span>
                <span aria-hidden="true" className="mt-2.5 block h-[4px] rounded-full" style={{ background: "rgba(15,61,43,0.08)" }}>
                  <span className="ps2-linkbar block h-full rounded-full" style={{ width: `${(l.value / top) * 100}%`, background: GREEN, transition: "background-color .25s" }} />
                </span>
              </Link>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------
   Questions (mêmes données et même JSON-LD FAQPage que FaqBlock).
   ------------------------------------------------------------------ */

export function BaroFaq({ items, title = "Questions fréquentes" }: { items: Array<{ question: string; answer: string }>; title?: string }) {
  if (items.length === 0) return null;
  return (
    <section className="relative pb-24 pt-16" style={{ background: BG }}>
      <JsonLd data={getFaqPageSchema(items)} />
      <div className={`${BARO_WRAP} grid gap-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-20`}>
        <Reveal y={20} className="min-w-0">
          <BaroEyebrow>{items.length} questions</BaroEyebrow>
          <div className="mt-4">
            <BaroTitle title={title} />
          </div>
        </Reveal>
        <Stagger as="div" className="min-w-0" gap={0.1} style={{ borderTop: `1.5px solid ${FOREST}` }}>
          {items.map((f, i) => (
            <Item as="div" key={f.question} style={{ borderBottom: `1px solid ${LINE}` }}>
              <details className="ps2-baro-faq group py-5">
                <summary className="grid grid-cols-[2.6em_minmax(0,1fr)_28px] items-start gap-x-3">
                  <span aria-hidden="true" className="pt-[4px] text-[11.5px] tabular-nums" style={{ fontFamily: MONO, color: GREEN }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[18px] font-semibold leading-[1.35]" style={{ color: FOREST, letterSpacing: "-0.015em" }}>
                    {typo(f.question)}
                  </span>
                  <span aria-hidden="true" className="ps2-plus mt-[2px] flex h-[26px] w-[26px] items-center justify-center rounded-[6px] text-[17px] leading-none text-white" style={{ background: GREEN }}>
                    +
                  </span>
                </summary>
                <p className="ps2-ans m-0 mt-3 pl-[calc(2.6em+12px)] pr-8 text-[15.5px] leading-[1.7]" style={{ color: "rgba(15,61,43,0.82)" }}>
                  {typo(f.answer)}
                </p>
              </details>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
