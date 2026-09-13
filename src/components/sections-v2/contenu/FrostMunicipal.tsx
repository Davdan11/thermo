"use client";

import { useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import { motion, MotionConfig } from "motion/react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import { typo } from "@/components/content-hero/typo";
import { EASE, VIEW } from "./motion";
import { FR, FrostCrystal, FrostHead, MINUS, frostSwatch } from "./FrostSections";
import "./sections.css";

/* ==================================================================
   Suite « Carte des froids » pour les municipalités et les MRC :
   - FrostTable     : journal de station (voisines, membres d'une MRC) ;
   - FrostPeriods   : barres de givre de la période de construction ;
   - FrostPlace     : bandeau « dans la MRC » avec lien vers son pôle ;
   - FrostSources   : sources et attribution, toujours visibles ;
   - FrostAtlas     : index par région, puis MRC, puis municipalité.
   Mouvement : motion/react, sections révélées une fois à l'entrée dans
   l'écran ; useReduced() (sans écart d'hydratation) coupe les états de
   départ quand l'utilisateur réduit les animations.
   ================================================================== */

const DISPLAY = "var(--font-display), var(--font-sans), sans-serif";

function Shell({ children, tint = "#FFFFFF", id, label }: { children: ReactNode; tint?: string; id?: string; label?: string }) {
  return (
    <MotionConfig reducedMotion="user">
      <section aria-labelledby={id} aria-label={id ? undefined : label} className="frs-root relative overflow-hidden" style={{ background: tint, color: FR.navy, fontFamily: DISPLAY }}>
        <div className="relative mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">{children}</div>
      </section>
    </MotionConfig>
  );
}

/* ---------- Journal de station : tableau comparatif ---------- */

export type TableColumn = { key: string; label: string; align?: "left" | "right" };
export type TableRow = { key: string; href: string | null; name: string; self?: boolean; t: number; tag?: string; cells: Record<string, string> };

export function FrostTable({
  id,
  eyebrow,
  title,
  intro,
  columns,
  rows,
  caption,
  footnote,
  tint,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  columns: TableColumn[];
  rows: TableRow[];
  caption: string;
  footnote?: string;
  tint?: string;
}) {
  const reduce = useReduced();
  if (rows.length === 0) return null;
  const th = "px-3 py-3 text-[10.5px] font-semibold uppercase whitespace-nowrap";
  return (
    <Shell id={id} tint={tint}>
      <FrostHead id={id} eyebrow={eyebrow} title={title} intro={intro} />
      <div className="mt-10 overflow-x-auto" style={{ borderTop: `2px solid ${FR.navy}`, borderBottom: `1px solid ${FR.navy}`, fontFamily: "var(--font-sans)" }}>
        <table className="w-full text-[14px] tabular-nums" style={{ borderCollapse: "collapse", color: FR.navy }}>
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr style={{ borderBottom: `1px solid ${FR.navy}`, letterSpacing: "0.14em" }}>
              <th scope="col" className={`${th} text-left`}>
                Municipalité
              </th>
              {columns.map((c) => (
                <th key={c.key} scope="col" className={`${th} ${c.align === "left" ? "text-left" : "text-right"}`}>
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <motion.tr
                key={r.key}
                className="frs-tr cs-row"
                style={{ borderTop: `1px solid ${FR.line}`, background: r.self ? FR.ice : undefined }}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -4% 0px" }}
                transition={{ duration: 0.7, ease: EASE, delay: Math.min(i, 12) * 0.04 }}
              >
                <th scope="row" className="px-3 py-2.5 text-left font-normal">
                  <span className="flex items-center gap-2.5">
                    <span aria-hidden="true" className="block h-[10px] w-[10px] shrink-0" style={{ background: frostSwatch(r.t), boxShadow: `inset 0 0 0 1px ${FR.line}` }} />
                    {r.href ? (
                      <Link href={r.href} className="font-semibold underline decoration-1 underline-offset-4" style={{ color: FR.navy, textDecorationColor: FR.frost }}>
                        {r.name}
                      </Link>
                    ) : (
                      <span className={r.self ? "font-semibold" : ""}>{r.name}</span>
                    )}
                    {r.tag ? (
                      <span className="whitespace-nowrap text-[11px]" style={{ color: FR.faint }}>
                        {r.tag}
                      </span>
                    ) : null}
                  </span>
                </th>
                {columns.map((c) => (
                  <td key={c.key} className={`whitespace-nowrap px-3 py-2.5 ${c.align === "left" ? "text-left" : "text-right"}`} style={{ color: r.cells[c.key] === "—" ? FR.faint : undefined }}>
                    {MINUS(r.cells[c.key] ?? "—")}
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      {footnote ? (
        <p className="text-[12.5px] leading-[1.65]" style={{ color: FR.mute, margin: "18px 0 0", maxWidth: "80ch", fontFamily: "var(--font-sans)" }}>
          {MINUS(typo(footnote))}
        </p>
      ) : null}
    </Shell>
  );
}

/* ---------- Période de construction : barres de givre ---------- */

export function FrostPeriods({
  id,
  eyebrow,
  title,
  intro,
  bars,
  footnote,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  bars: Array<{ label: string; value: number; display: string; old?: boolean }>;
  footnote?: string;
}) {
  const reduce = useReduced();
  if (bars.length === 0) return null;
  const max = Math.max(1, ...bars.map((b) => b.value));
  return (
    <Shell id={id} tint={`linear-gradient(180deg, #FFFFFF 0%, ${FR.ice} 100%)`}>
      <FrostCrystal size={120} branches={3} className="absolute -right-6 top-8 hidden lg:block" />
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4">
          <FrostHead id={id} eyebrow={eyebrow} title={title} intro={intro} />
        </div>
        <ul className="lg:col-span-8" style={{ margin: 0, padding: 0, listStyle: "none", borderTop: `1px solid ${FR.navy}` }}>
          {bars.map((b, i) => (
            <motion.li
              key={b.label}
              className="grid grid-cols-[110px_minmax(0,1fr)_72px] items-center gap-3 py-3 text-[13.5px] sm:grid-cols-[140px_minmax(0,1fr)_88px]"
              style={{ borderBottom: `1px solid ${FR.line}`, fontFamily: "var(--font-sans)" }}
              initial={reduce ? false : { opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={VIEW}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.05 }}
            >
              <span style={{ color: b.old ? FR.navy : FR.mute, fontWeight: b.old ? 600 : 400 }}>{b.label}</span>
              <span aria-hidden="true" className="relative block h-[8px]">
                <motion.span
                  className="absolute inset-y-0 left-0 block rounded-full"
                  style={{ width: `${(b.value / max) * 100}%`, background: b.old ? FR.navy : FR.frost, transformOrigin: "0% 50%" }}
                  initial={reduce ? false : { scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={VIEW}
                  transition={{ duration: 1.3, ease: EASE, delay: 0.2 + i * 0.06 }}
                />
              </span>
              <span className="text-right tabular-nums font-semibold">{b.display}</span>
            </motion.li>
          ))}
        </ul>
      </div>
      {footnote ? (
        <p className="text-[12.5px] leading-[1.65]" style={{ color: FR.mute, margin: "18px 0 0", maxWidth: "80ch", fontFamily: "var(--font-sans)" }}>
          {MINUS(typo(footnote))}
        </p>
      ) : null}
    </Shell>
  );
}

/* ---------- Dans la MRC : bandeau et lien vers le pôle ---------- */

export function FrostPlace({ eyebrow, title, text, href, linkLabel, facts = [] }: { eyebrow: string; title: string; text: string; href: string | null; linkLabel: string; facts?: Array<{ label: string; value: string }> }) {
  const reduce = useReduced();
  return (
    <MotionConfig reducedMotion="user">
      <section className="frs-root px-5 py-6 sm:px-8 lg:px-12" style={{ background: "#FFFFFF", fontFamily: DISPLAY, color: FR.navy }}>
        <motion.div
          className="relative mx-auto grid max-w-[1440px] gap-6 overflow-hidden px-6 py-8 sm:px-10 lg:grid-cols-12 lg:items-center lg:gap-10"
          style={{ background: `linear-gradient(120deg, ${FR.glacier} 0%, #FFFFFF 80%)`, borderTop: `2px solid ${FR.navy}` }}
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEW}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <div className="lg:col-span-5">
            <p className="text-[11.5px] font-semibold uppercase" style={{ letterSpacing: "0.24em", color: FR.steel, margin: 0 }}>
              {typo(eyebrow)}
            </p>
            <h2 className="uppercase" style={{ fontSize: "clamp(22px, 2.2vw, 32px)", fontWeight: 650, letterSpacing: "-0.03em", lineHeight: 1, margin: "10px 0 0" }}>
              {typo(title)}
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-[15.5px] leading-[1.62]" style={{ color: FR.mute, margin: 0, fontFamily: "var(--font-sans)" }}>
              {MINUS(typo(text))}
            </p>
            {facts.length > 0 ? (
              <dl className="mt-4 flex flex-wrap gap-x-8 gap-y-2" style={{ margin: "16px 0 0" }}>
                {facts.map((f) => (
                  <div key={f.label}>
                    <dt className="text-[10.5px] font-semibold uppercase" style={{ letterSpacing: "0.18em", color: FR.faint }}>
                      {typo(f.label)}
                    </dt>
                    <dd className="tabular-nums text-[18px] font-semibold" style={{ margin: "2px 0 0" }}>
                      {MINUS(f.value)}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : null}
            {href ? (
              <Link href={href} className="group mt-5 inline-flex items-center gap-2 text-[15px] font-semibold underline decoration-1 underline-offset-4" style={{ color: FR.steel }}>
                {typo(linkLabel)}
                <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-500 group-hover:translate-x-1">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            ) : null}
          </div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}

/* ---------- Sources et attribution (CC-BY) ---------- */

export function FrostSources({ items, attribution, date }: { items: Array<{ label: string; url: string }>; attribution: string; date?: string }) {
  const reduce = useReduced();
  return (
    <MotionConfig reducedMotion="user">
      <section aria-labelledby="sources" className="frs-root" style={{ background: "#FFFFFF", color: FR.navy, fontFamily: "var(--font-sans)" }}>
        <div className="mx-auto max-w-[1440px] px-5 pb-16 pt-4 sm:px-8 lg:px-12">
          <motion.div
            style={{ borderTop: `1px solid ${FR.navy}` }}
            className="grid gap-4 pt-6 lg:grid-cols-12 lg:gap-14"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEW}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2 id="sources" className="text-[11.5px] font-semibold uppercase lg:col-span-4" style={{ letterSpacing: "0.24em", color: FR.steel, margin: 0, fontFamily: DISPLAY }}>
              Sources
            </h2>
            <div className="lg:col-span-8">
              <ul className="space-y-1.5 text-[13px] leading-[1.55]" style={{ margin: 0, padding: 0, listStyle: "none", color: FR.mute }}>
                {items.map((s) => (
                  <li key={s.url + s.label}>
                    <a href={s.url} rel="noopener" className="underline decoration-1 underline-offset-2" style={{ color: FR.mute, textDecorationColor: FR.frost }}>
                      {typo(s.label)}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="text-[12.5px] leading-[1.6]" style={{ color: FR.faint, margin: "12px 0 0" }}>
                {typo(attribution)}
                {date ? ` Données compilées le ${date}.` : ""}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}

/* ---------- Index : région, puis MRC, puis municipalité ---------- */

export type AtlasRegion = {
  slug: string;
  name: string;
  pages: number;
  groups: Array<{ key: string; label: string; href: string | null; munis: Array<[string, string]> }>;
  /** Municipalités sans page et sans pôle MRC : nommées ici. */
  others: string[];
};

const fold = (s: string) =>
  s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();

export function FrostAtlas({ regions, total }: { regions: AtlasRegion[]; total: number }) {
  const reduce = useReduced();
  const [q, setQ] = useState("");
  const needle = fold(q.trim());
  const filtered = useMemo(() => {
    if (!needle) return null;
    return regions
      .map((r) => ({
        ...r,
        groups: r.groups
          .map((g) => ({ ...g, munis: fold(g.label).includes(needle) ? g.munis : g.munis.filter(([, n]) => fold(n).includes(needle)) }))
          .filter((g) => g.munis.length > 0 || fold(g.label).includes(needle)),
        others: r.others.filter((n) => fold(n).includes(needle)),
      }))
      .filter((r) => r.groups.length > 0 || r.others.length > 0 || fold(r.name).includes(needle));
  }, [needle, regions]);
  const list = filtered ?? regions;
  const found = filtered ? filtered.reduce((a, r) => a + r.groups.reduce((b, g) => b + g.munis.length, 0), 0) : total;

  return (
    <MotionConfig reducedMotion="user">
      <section aria-labelledby="atlas" className="frs-root" style={{ background: "#FFFFFF", color: FR.navy, fontFamily: DISPLAY }}>
        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <FrostHead
                id="atlas"
                eyebrow="Toutes les municipalités"
                title="Par région, puis par MRC"
                intro="Chaque municipalité qui a assez de données propres (recensement 2021 et station météo à 50 km ou moins) a sa page. Les autres sont nommées sur la page de leur MRC, avec leurs chiffres."
              />
            </div>
            <div className="lg:col-span-5">
              <label htmlFor="atlas-q" className="text-[11px] font-semibold uppercase" style={{ letterSpacing: "0.2em", color: FR.faint }}>
                Trouver une municipalité
              </label>
              <input
                id="atlas-q"
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Ex. Saint-Anselme"
                autoComplete="off"
                className="mt-2 block w-full rounded-[12px] px-4 py-3 text-[16px] outline-none focus-visible:ring-2"
                style={{ border: `1px solid ${FR.navy}`, color: FR.navy, fontFamily: "var(--font-sans)", background: "#FFFFFF" }}
              />
              <p aria-live="polite" className="mt-2 text-[12.5px]" style={{ color: FR.mute, fontFamily: "var(--font-sans)" }}>
                {needle ? `${found} municipalité${found > 1 ? "s" : ""} avec page` : `${total} municipalités avec page`}
              </p>
            </div>
          </div>

          <ul className="mt-10" style={{ margin: "40px 0 0", padding: 0, listStyle: "none", borderTop: `2px solid ${FR.navy}` }}>
            {list.map((r, i) => (
              <motion.li
                key={r.slug}
                id={`region-${r.slug}`}
                style={{ borderBottom: `1px solid ${FR.line}`, scrollMarginTop: 120 }}
                initial={reduce ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={VIEW}
                transition={{ duration: 0.8, ease: EASE, delay: Math.min(i, 8) * 0.04 }}
              >
                <details className="cs-details group" open={needle ? true : undefined}>
                  <summary className="flex cursor-pointer list-none items-center gap-4 py-5 [&::-webkit-details-marker]:hidden">
                    <span className="min-w-0 flex-1">
                      <span className="block uppercase" style={{ fontSize: "clamp(18px, 1.8vw, 24px)", fontWeight: 650, letterSpacing: "-0.02em", lineHeight: 1.05 }}>
                        {r.name}
                      </span>
                      <span className="mt-1 block text-[12.5px]" style={{ color: FR.faint, fontFamily: "var(--font-sans)" }}>
                        {r.pages} municipalités avec page · {r.groups.length} MRC ou territoires
                      </span>
                    </span>
                    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={FR.steel} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="shrink-0 transition-transform duration-500 group-open:rotate-45">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </summary>
                  <div className="pb-8 sm:columns-2 lg:columns-3" style={{ columnGap: 48, columnRule: `1px solid ${FR.line}` }}>
                    {r.groups.map((g) => (
                      <div key={g.key} className="mb-6 break-inside-avoid">
                        <h3 className="text-[12.5px] font-semibold uppercase" style={{ letterSpacing: "0.16em", margin: 0 }}>
                          {g.href ? (
                            <Link href={g.href} className="underline decoration-1 underline-offset-4" style={{ color: FR.steel, textDecorationColor: FR.frost }}>
                              {g.label}
                            </Link>
                          ) : (
                            <span style={{ color: FR.steel }}>{g.label}</span>
                          )}
                        </h3>
                        <p className="text-[14px] leading-[1.9]" style={{ margin: "6px 0 0", fontFamily: "var(--font-sans)", color: FR.mute }}>
                          {g.munis.map(([slug, name], k) => (
                            <span key={slug}>
                              <Link href={`/thermopompe/${slug}`} className="frs-atlas-link" style={{ color: FR.navy }}>
                                {name}
                              </Link>
                              {k < g.munis.length - 1 ? " · " : ""}
                            </span>
                          ))}
                        </p>
                      </div>
                    ))}
                    {r.others.length > 0 ? (
                      <p className="break-inside-avoid text-[12.5px] leading-[1.7]" style={{ margin: 0, color: FR.faint, fontFamily: "var(--font-sans)" }}>
                        Sans page ni pôle MRC (données insuffisantes) : {r.others.join(", ")}.
                      </p>
                    ) : null}
                  </div>
                </details>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </MotionConfig>
  );
}
