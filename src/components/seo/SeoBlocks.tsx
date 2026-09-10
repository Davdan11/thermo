/* eslint-disable react/no-unescaped-entities */
/* ==================================================================
   Blocs partagés des pages SEO programmatiques (rendu serveur)

   - SeoHero        : en-tête sombre avec fil d'Ariane et accroche
   - ModelTable     : tableau de modèles avec données certifiées
   - FaqBlock       : questions/réponses + JSON-LD FAQPage
   - CtaThermoMatch : appel à l'action vers le questionnaire
   - RelatedLinks   : maillage interne
   - JsonLd         : injection de données structurées
   ================================================================== */

import Link from "next/link";
import { Breadcrumbs, type BreadcrumbItem } from "@/components/seo/Breadcrumbs";
import { getFaqPageSchema } from "@/lib/seo";
import type { SeoModel } from "@/lib/seo/programmatic";

export function JsonLd({ data }: { data: object | object[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
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

export function SeoHero({
  eyebrow,
  title,
  intro,
  breadcrumbs,
  stats,
}: {
  eyebrow?: string;
  title: string;
  intro: string;
  breadcrumbs: BreadcrumbItem[];
  stats?: Array<{ label: string; value: string }>;
}) {
  return (
    <>
    <section className="bg-[#0C1821] text-white pt-28 pb-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="[&_a]:text-white/60 [&_a:hover]:text-white [&_span]:text-white/90 [&_.text-gray-400]:text-white/30">
          <Breadcrumbs items={breadcrumbs} />
        </div>
        {eyebrow && <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#e54b17]">{eyebrow}</p>}
        <h1 className="mt-3 text-[34px] sm:text-[52px] font-black leading-[1.05] tracking-tight max-w-4xl">{title}</h1>
        <p className="mt-5 text-lg text-white/70 max-w-3xl leading-relaxed">{intro}</p>
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
          <Link href="/trouver-ma-thermopompe" className="inline-flex min-h-[48px] items-center justify-center rounded-xl bg-[#e54b17] hover:bg-[#d44315] px-6 font-bold text-[15px] text-white transition-colors">
            Trouver ma thermopompe en 2 min
          </Link>
          <a href="tel:4389003224" className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-white/25 px-5 font-semibold text-[15px] text-white hover:bg-white/10 transition-colors">
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" /></svg>
            438-900-3224
          </a>
          <span className="text-[13px] text-white/60">Gratuit, sans engagement. Un installateur licencié RBQ vous rappelle.</span>
        </div>
        {stats && stats.length > 0 && (
          <dl className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 px-4 py-4">
                <dt className="text-[11px] uppercase tracking-wider text-white/50">{s.label}</dt>
                <dd className="mt-1 text-2xl font-black">{s.value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
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
                <Link href={`/produit/${m.canonicalSlug}`} className="font-semibold text-[#071d2b] hover:text-[#e54b17]">
                  {m.name}
                </Link>
                <div className="text-[11px] font-mono text-[#8a989e]">{m.outdoorModel}</div>
                {m.alsoSoldAs.length > 0 && (
                  <div className="text-[11px] text-[#8a989e]">Aussi : {m.alsoSoldAs.map((a) => a.brand).join(", ")}</div>
                )}
              </td>
              {showBrand && (
                <td className="px-3 py-3">
                  <Link href={`/marques/${m.brandSlug}`} className="text-[#071d2b] hover:text-[#e54b17]">{m.brand}</Link>
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
  text = "Répondez à 13 questions sur votre maison. ThermoMatch compare toutes les marques avec les données certifiées d'Hydro-Québec et vous propose trois machines vraiment adaptées, sans parti pris.",
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
