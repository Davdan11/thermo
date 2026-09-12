/* eslint-disable react/no-unescaped-entities */
/* ==================================================================
   Blocs partagés des pages SEO programmatiques (rendu serveur)

   - SeoHero        : héros premium sombre + motif animé propre à la page
   - ModelTable     : tableau de modèles avec données certifiées
   - FaqBlock       : questions/réponses + JSON-LD FAQPage
   - CtaThermoMatch : appel à l'action vers le questionnaire
   - RelatedLinks   : maillage interne
   - JsonLd         : injection de données structurées
   ================================================================== */

import Link from "next/link";
import Image from "next/image";
import { brandLogoPath } from "@/lib/data/brand-logos";
import type { ReactNode } from "react";
import type { BreadcrumbItem } from "@/components/seo/Breadcrumbs";
import { SeoHeroView, type TitleLine } from "@/components/seo/hero/SeoHeroView";
import type { SeoMotif } from "@/components/seo/hero/types";
import { LegalMotif } from "@/components/seo/hero/LegalMotif";
import { StepsMotif } from "@/components/seo/hero/StepsMotif";
import { VersusMotif } from "@/components/seo/hero/VersusMotif";
import { BrandMotif } from "@/components/seo/hero/BrandMotif";
import { PodiumMotif } from "@/components/seo/hero/PodiumMotif";
import { LeadersMotif } from "@/components/seo/hero/LeadersMotif";
import { SubsidyMotif } from "@/components/seo/hero/SubsidyMotif";
import { CityMotif, IsothermsBg } from "@/components/seo/hero/CityMotif";
import { CitiesMotif } from "@/components/seo/hero/CitiesMotif";
import { CapacityMotif } from "@/components/seo/hero/CapacityMotif";
import { GuideMotif } from "@/components/seo/hero/GuideMotif";
import { getFaqPageSchema, jsonLdString } from "@/lib/seo";
import type { SeoModel } from "@/lib/seo/programmatic";

export function JsonLd({ data }: { data: object | object[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdString(data) }} />;
}

/** Bande de preuve (pattern « Trust & Authority + Conversion » : Hero → Preuve → Solution → CTA). */
export function TrustStrip() {
  const items = [
    { label: "Liste LogisVert d'Hydro-Québec", hint: "montants officiels, mise à jour automatique" },
    { label: "Certifications AHRI et ENERGY STAR", hint: "capacités et COP mesurés, jamais estimés sans le dire" },
    { label: "Toutes les marques vendues au Québec", hint: "aucune marque favorisée, aucun avis sponsorisé" },
    { label: "Installateurs licenciés RBQ", hint: "la soumission finale vient d'un entrepreneur licencié" },
  ];
  return (
    <section aria-label="Sources et garanties" className="border-y border-[#e4ddd5] bg-white">
      <ul className="mx-auto max-w-6xl px-5 sm:px-8 py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {items.map((it) => (
          <li key={it.label} className="flex items-start gap-2.5 text-[13px] leading-snug">
            <svg aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#1b6b3a]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            <span><span className="font-semibold text-[#071d2b]">{it.label}</span><span className="block text-[#536873]">{it.hint}</span></span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------------
   Héros des pages SEO (version premium)
   Coquille sombre commune (HeroShell, passe sous l'en-tête transparent)
   + motif animé propre au sujet de la page : chaque page passe `motif`
   avec les données qu'elle a déjà calculées. Les motifs vivent dans
   src/components/seo/hero/.
   ------------------------------------------------------------------ */

/** Typographie française à l'affichage : apostrophe courbe, espace insécable avant « : ; ? ! ». */
function typo(s: string): string {
  return s
    .replace(/'/g, "’")
    .replace(/ ([:;?!])/g, " $1")
    .replace(/([^\s ])([?!;])(?=\s|$)/g, "$1 $2");
}

/**
 * Lignes du h1. `titleLines` doit reproduire exactement le titre (mêmes mots, c'est du SEO) :
 * sinon on garde le titre d'un bloc. Sans découpage, « Sujet : précision » passe sur deux lignes.
 */
function titleLinesFor(title: string, lines?: string[], serif?: string): TitleLine[] {
  const t = typo(title);
  let parts = [t];
  const colon = t.indexOf(" : ");
  if (lines?.length) {
    const typed = lines.map(typo);
    if (typed.join(" ") === t) parts = typed;
    else if (process.env.NODE_ENV !== "production") console.warn(`[SeoHero] titleLines ne reproduit pas le titre « ${title} »`);
  } else if (colon > 0) {
    parts = [t.slice(0, colon + 2), t.slice(colon + 3)];
  }
  const accent = serif ? typo(serif) : !lines?.length && colon > 0 ? parts[1] : undefined;
  let done = false;
  return parts.map((p) => {
    const k = accent && !done ? p.indexOf(accent) : -1;
    if (k < 0 || !accent) return { before: p };
    done = true;
    return { before: p.slice(0, k), serif: accent, after: p.slice(k + accent.length) };
  });
}

function motifParts(m?: SeoMotif): { visual?: ReactNode; background?: ReactNode; snow: number } {
  if (!m) return { snow: 0 };
  switch (m.kind) {
    case "legal":
      return { visual: <LegalMotif heading={m.heading} note={m.note} items={m.items} />, snow: 0 };
    case "explainer":
      return { visual: <StepsMotif heading={m.heading} steps={m.steps} />, snow: 0 };
    case "compare":
      return { visual: <VersusMotif a={m.a} b={m.b} rows={m.rows} shared={m.shared} />, snow: 0 };
    case "brand":
      return { visual: <BrandMotif brand={m.brand} logo={m.logo} typeLabel={m.typeLabel} photo={m.photo} offered={m.offered} />, snow: 0 };
    case "podium":
      return { visual: <PodiumMotif metricLabel={m.metricLabel} items={m.items} />, snow: 0 };
    case "leaders":
      return { visual: <LeadersMotif rows={m.rows} />, snow: 0 };
    case "subsidy":
      return { visual: <SubsidyMotif label={m.label} amount={m.amount} min={m.min} updated={m.updated} tickerLabel={m.tickerLabel} ticker={m.ticker} />, snow: 0 };
    case "city":
      return {
        visual: <CityMotif city={m.city} designTempC={m.designTempC} janMeanC={m.janMeanC} janMinC={m.janMinC} extremeMinC={m.extremeMinC} extremeMinYear={m.extremeMinYear} source={m.source} />,
        background: <IsothermsBg />,
        snow: 0.35,
      };
    case "cities":
      return { visual: <CitiesMotif cities={m.cities} />, background: <IsothermsBg />, snow: 0.3 };
    case "capacity":
      return { visual: <CapacityMotif btu={m.btu} h5Min={m.h5Min} h5Max={m.h5Max} certified={m.certified} classes={m.classes} areaMin={m.areaMin} areaMax={m.areaMax} />, snow: 0 };
    case "guide":
      return { visual: <GuideMotif variant={m.variant} />, snow: m.variant === "froid" ? 0.4 : 0 };
  }
}

export function SeoHero({
  eyebrow,
  title,
  intro,
  breadcrumbs,
  stats,
  answer,
  image,
  imageAlt = "",
  titleLines,
  serif,
  motif,
}: {
  eyebrow?: string;
  title: string;
  intro: string;
  breadcrumbs: BreadcrumbItem[];
  stats?: Array<{ label: string; value: string }>;
  /** Réponse directe en 40-60 mots, en tête de page : ce qu'un lecteur pressé ou un moteur de réponse doit retenir. */
  answer?: string;
  /** Photo en fond, fondue dans le fond sombre (facultatif). */
  image?: string;
  imageAlt?: string;
  /** Découpage du h1 en lignes (mots identiques au titre). */
  titleLines?: string[];
  /** Partie du titre en italique Instrument Serif. */
  serif?: string;
  /** Visuel animé propre au sujet de la page. */
  motif?: SeoMotif;
}) {
  const { visual, background, snow } = motifParts(motif);
  return (
    <>
      <SeoHeroView
        eyebrow={eyebrow ? typo(eyebrow) : undefined}
        lines={titleLinesFor(title, titleLines, serif)}
        titleLength={title.length}
        intro={typo(intro)}
        answer={answer ? typo(answer) : undefined}
        breadcrumbs={breadcrumbs}
        stats={stats?.map((s) => ({ label: typo(s.label), value: typo(s.value) }))}
        visual={visual}
        background={background}
        snow={snow}
        image={image}
        imageAlt={imageAlt}
      />
      <TrustStrip />
    </>
  );
}

const fmt = (n: number | null | undefined, suffix = "") => (n === null || n === undefined ? "—" : `${n.toLocaleString("fr-CA")}${suffix}`);

export function ModelTable({
  models,
  caption,
  showBrand = true,
  showRank = false,
  metric,
}: {
  models: SeoModel[];
  caption?: string;
  showBrand?: boolean;
  showRank?: boolean;
  metric?: { label: string; value: (m: SeoModel) => string };
}) {
  if (models.length === 0) {
    return <p className="text-[#536873]">Aucun modèle certifié ne correspond pour l'instant.</p>;
  }
  return (
    <div className="overflow-x-auto rounded-xl border border-[#e4ddd5] bg-white">
      <table className="w-full text-sm">
        {caption && <caption className="text-left px-4 py-3 text-[13px] text-[#536873]">{caption}</caption>}
        <thead className="bg-[#f8f5f0] text-[11px] uppercase tracking-wider text-[#536873]">
          <tr>
            {showRank && <th className="px-3 py-3 text-left">#</th>}
            <th className="px-3 py-3 text-left">Modèle</th>
            {showBrand && <th className="px-3 py-3 text-left">Marque</th>}
            <th className="px-3 py-3 text-left">Type</th>
            <th className="px-3 py-3 text-right">Nominal</th>
            <th className="px-3 py-3 text-right">À -15 °C</th>
            <th className="px-3 py-3 text-right">HSPF2</th>
            <th className="px-3 py-3 text-right">SEER2</th>
            <th className="px-3 py-3 text-right">LogisVert</th>
            {metric && <th className="px-3 py-3 text-right">{metric.label}</th>}
          </tr>
        </thead>
        <tbody>
          {models.map((m, i) => (
            <tr key={m.slug} className="border-t border-[#f0ebe4] hover:bg-[#fffaf5]">
              {showRank && <td className="px-3 py-3 font-bold text-[#e54b17]">{i + 1}</td>}
              <td className="px-3 py-3">
                <div className="flex items-center gap-3">
                  <Link href={`/produit/${m.canonicalSlug}`} className="shrink-0 w-14 h-11 bg-[#f4f1ec] rounded-md flex items-center justify-center overflow-hidden" aria-hidden="true" tabIndex={-1}>
                    {m.imageUrl ? (
                      <Image src={m.imageUrl} alt="" width={56} height={44} className="object-contain w-full h-full p-1" />
                    ) : brandLogoPath(m.brandSlug) ? (
                      <Image src={brandLogoPath(m.brandSlug)!} alt="" width={48} height={20} className="object-contain w-auto h-auto max-w-[44px] max-h-[18px] opacity-80" />
                    ) : null}
                  </Link>
                  <div className="min-w-0">
                    <Link href={`/produit/${m.canonicalSlug}`} className="font-semibold text-[#071d2b] hover:text-[#e54b17]">
                      {m.name}
                    </Link>
                    <div className="text-[11px] font-mono text-[#8a989e]">{m.outdoorModel}</div>
                  </div>
                </div>
                {m.alsoSoldAs.length > 0 && (
                  <div className="text-[11px] text-[#8a989e]">Aussi : {m.alsoSoldAs.map((a) => a.brand).join(", ")}</div>
                )}
              </td>
              {showBrand && (
                <td className="px-3 py-3">
                  <Link href={`/marques/${m.brandSlug}`} className="inline-flex items-center gap-2 text-[#071d2b] hover:text-[#e54b17]" title={m.brand}>
                    {brandLogoPath(m.brandSlug) ? (
                      <Image src={brandLogoPath(m.brandSlug)!} alt={m.brand} width={80} height={24} className="object-contain w-auto h-auto max-w-[80px] max-h-[22px]" />
                    ) : (
                      <span>{m.brand}</span>
                    )}
                  </Link>
                </td>
              )}
              <td className="px-3 py-3 text-[#536873]">{m.kind === "murale" ? "Murale" : "Centrale"}{m.coldClimate ? " · grand froid" : ""}</td>
              <td className="px-3 py-3 text-right">{fmt(m.nominalBtu, " BTU")}</td>
              <td className="px-3 py-3 text-right">{m.h5Btu !== null ? fmt(m.h5Btu, " BTU") : <span className="text-[#a0aab0]">n/d</span>}</td>
              <td className="px-3 py-3 text-right">{fmt(m.hspf2)}</td>
              <td className="px-3 py-3 text-right">{fmt(m.seer2)}</td>
              <td className="px-3 py-3 text-right font-semibold text-[#1b6b3a]">{m.logisVertDollars > 0 ? fmt(m.logisVertDollars, " $") : "—"}</td>
              {metric && <td className="px-3 py-3 text-right">{metric.value(m)}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export interface FaqItem {
  question: string;
  answer: string;
}

export function FaqBlock({ items, title = "Questions fréquentes" }: { items: FaqItem[]; title?: string }) {
  if (items.length === 0) return null;
  return (
    <section className="mx-auto max-w-4xl px-5 sm:px-8 py-14">
      <JsonLd data={getFaqPageSchema(items)} />
      <h2 className="text-[26px] font-bold text-[#172126] mb-6">{title}</h2>
      <div className="divide-y divide-[#e4ddd5] rounded-xl border border-[#e4ddd5] bg-white">
        {items.map((f) => (
          <details key={f.question} className="group px-5 py-4">
            <summary className="cursor-pointer list-none font-semibold text-[#071d2b] flex justify-between gap-4">
              {f.question}
              <span className="text-[#e54b17] group-open:rotate-45 transition-transform">+</span>
            </summary>
            <p className="mt-3 text-[15px] leading-relaxed text-[#536873]">{f.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function CtaThermoMatch({
  title = "Trouvez la bonne thermopompe en 2 minutes",
  text = "Répondez à 13 questions sur votre maison. Avec ThermoMatch, Thermopompes À Vendre compare toutes les marques à partir des données certifiées d'Hydro-Québec et vous propose trois machines vraiment adaptées, sans parti pris.",
  compact = false,
}: {
  title?: string;
  text?: string;
  compact?: boolean;
}) {
  return (
    <section className={`mx-auto max-w-6xl px-5 sm:px-8 ${compact ? "py-8" : "py-14"}`}>
      <div className="rounded-2xl bg-[#0C1821] text-white p-8 sm:p-10 flex flex-col md:flex-row md:items-center gap-6">
        <div className="flex-1">
          <h2 className="text-2xl sm:text-3xl font-black tracking-tight">{title}</h2>
          <p className="mt-3 text-white/70 leading-relaxed max-w-2xl">{text}</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/trouver-ma-thermopompe" className="inline-flex min-h-[48px] justify-center items-center bg-[#e54b17] hover:bg-[#d44315] text-white font-bold px-6 py-3.5 rounded-xl transition-colors">
            Lancer ThermoMatch
          </Link>
          <Link href="/soumission" className="inline-flex min-h-[48px] justify-center items-center border border-white/20 hover:bg-white/10 text-white font-semibold px-6 py-3.5 rounded-xl transition-colors">
            Demander une soumission
          </Link>
        </div>
      </div>
    </section>
  );
}

export function RelatedLinks({ title, links }: { title: string; links: Array<{ href: string; label: string; hint?: string }> }) {
  if (links.length === 0) return null;
  return (
    <section className="mx-auto max-w-6xl px-5 sm:px-8 py-10">
      <h2 className="text-[13px] font-bold uppercase tracking-[0.15em] text-[#536873] mb-4">{title}</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="block rounded-lg border border-[#e4ddd5] bg-white px-4 py-3 hover:border-[#e54b17] transition-colors">
              <span className="font-semibold text-[#071d2b]">{l.label}</span>
              {l.hint && <span className="block text-[12px] text-[#8a989e] mt-0.5">{l.hint}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Prose({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-4xl px-5 sm:px-8 py-12 text-[16px] leading-[1.75] text-[#2b3a42] [&_h2]:text-[26px] [&_h2]:font-bold [&_h2]:text-[#172126] [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-[19px] [&_h3]:font-bold [&_h3]:text-[#172126] [&_h3]:mt-7 [&_h3]:mb-2 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_li]:mb-1 [&_a]:text-[#e54b17] [&_a]:underline-offset-2 [&_a:hover]:underline [&_strong]:text-[#071d2b]">{children}</div>;
}
