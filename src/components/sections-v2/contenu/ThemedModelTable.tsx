/* eslint-disable react/no-unescaped-entities */
/* ==================================================================
   Équivalent thémé de ModelTable (SeoBlocks) : mêmes colonnes, mêmes
   données, mêmes liens. Composant serveur (la colonne « metric » est une
   fonction) ; les lignes apparaissent au défilement en CSS (.cs-row).
   Deux thèmes : « article » (encre + teinte de rubrique) et « frost »
   (marine + bleu givre, journal de station).
   ================================================================== */

import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import { brandLogoPath } from "@/lib/data/brand-logos";
import type { SeoModel } from "@/lib/seo/programmatic";
import "./sections.css";

export type MtTheme = {
  ink: string;
  text: string;
  mute: string;
  faint: string;
  line: string;
  hover: string;
  accent: string;
  green: string;
  thumb: string;
  rankFont: string;
  rankStyle?: CSSProperties;
  headBg?: string;
};

export const MT_FROST: MtTheme = {
  ink: "#0B2540",
  text: "#0B2540",
  mute: "rgba(11,37,64,0.7)",
  faint: "rgba(11,37,64,0.5)",
  line: "rgba(11,37,64,0.12)",
  hover: "rgba(156,195,218,0.16)",
  accent: "#1F5F8B",
  green: "#1B6B3A",
  thumb: "#EEF5F9",
  rankFont: "var(--font-display), var(--font-sans), sans-serif",
  rankStyle: { fontWeight: 600, letterSpacing: "-0.03em" },
  headBg: "rgba(228,239,245,0.6)",
};

export function mtArticle(accent: string): MtTheme {
  return {
    ink: "#111417",
    text: "#23282D",
    mute: "#4A525A",
    faint: "#6B737A",
    line: "rgba(17,20,23,0.12)",
    hover: `color-mix(in srgb, ${accent} 5%, transparent)`,
    accent,
    green: "#1B6B3A",
    thumb: "#F3F4F5",
    rankFont: "var(--font-serif, var(--font-fraunces, Georgia)), Georgia, serif",
    rankStyle: { fontStyle: "italic", fontWeight: 400, fontSize: 22 },
  };
}

const fmt = (n: number | null | undefined, suffix = "") =>
  n === null || n === undefined ? "—" : `${n.toLocaleString("fr-CA")}${suffix}`;

export function ThemedModelTable({
  models,
  caption,
  showBrand = true,
  showRank = false,
  metric,
  theme,
}: {
  models: SeoModel[];
  caption?: string;
  showBrand?: boolean;
  showRank?: boolean;
  metric?: { label: string; value: (m: SeoModel) => string };
  theme: MtTheme;
}) {
  if (models.length === 0) {
    return <p style={{ color: theme.mute }}>Aucun modèle certifié ne correspond pour l'instant.</p>;
  }
  const vars = {
    "--mt-ink": theme.ink,
    "--mt-line": theme.line,
    "--mt-hover": theme.hover,
  } as CSSProperties;
  const right: CSSProperties = { textAlign: "right" };
  return (
    <div
      className="overflow-x-auto"
      style={{
        ...vars,
        color: theme.text,
        borderTop: `2px solid ${theme.ink}`,
        borderBottom: `1px solid ${theme.ink}`,
        fontFamily: "var(--font-sans)",
      }}
    >
      <table className="cs-mt">
        {caption && (
          <caption className="px-3 py-3 text-left text-[13px]" style={{ color: theme.mute }}>
            {caption}
          </caption>
        )}
        <thead style={{ background: theme.headBg }}>
          <tr>
            {showRank && <th style={{ textAlign: "left" }}>#</th>}
            <th style={{ textAlign: "left" }}>Modèle</th>
            {showBrand && <th style={{ textAlign: "left" }}>Marque</th>}
            <th style={{ textAlign: "left" }}>Type</th>
            <th style={right}>Nominal</th>
            <th style={right}>À -15 °C</th>
            <th style={right}>HSPF2</th>
            <th style={right}>SEER2</th>
            <th style={right}>LogisVert</th>
            {metric && <th style={right}>{metric.label}</th>}
          </tr>
        </thead>
        <tbody>
          {models.map((m, i) => (
            <tr key={m.slug} className="cs-row">
              {showRank && (
                <td
                  style={{
                    fontFamily: theme.rankFont,
                    color: theme.accent,
                    fontSize: 20,
                    lineHeight: 1,
                    width: 44,
                    ...theme.rankStyle,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </td>
              )}
              <td>
                <div className="flex items-center gap-3">
                  <Link
                    href={`/produit/${m.canonicalSlug}`}
                    className="flex h-11 w-14 shrink-0 items-center justify-center overflow-hidden"
                    style={{ background: theme.thumb }}
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    {m.imageUrl ? (
                      <Image src={m.imageUrl} alt="" width={56} height={44} className="h-full w-full object-contain p-1" />
                    ) : brandLogoPath(m.brandSlug) ? (
                      <Image
                        src={brandLogoPath(m.brandSlug)!}
                        alt=""
                        width={48}
                        height={20}
                        className="h-auto max-h-[18px] w-auto max-w-[44px] object-contain opacity-80"
                      />
                    ) : null}
                  </Link>
                  <div className="min-w-0">
                    <Link href={`/produit/${m.canonicalSlug}`} className="cs-mt-link">
                      {m.name}
                    </Link>
                    <div className="font-mono text-[11px]" style={{ color: theme.faint }}>
                      {m.outdoorModel}
                    </div>
                  </div>
                </div>
                {m.alsoSoldAs.length > 0 && (
                  <div className="text-[11px]" style={{ color: theme.faint }}>
                    Aussi : {m.alsoSoldAs.map((a) => a.brand).join(", ")}
                  </div>
                )}
              </td>
              {showBrand && (
                <td>
                  <Link
                    href={`/marques/${m.brandSlug}`}
                    className="inline-flex items-center gap-2"
                    style={{ color: theme.ink }}
                    title={m.brand}
                  >
                    {brandLogoPath(m.brandSlug) ? (
                      <Image
                        src={brandLogoPath(m.brandSlug)!}
                        alt={m.brand}
                        width={80}
                        height={24}
                        className="h-auto max-h-[22px] w-auto max-w-[80px] object-contain"
                      />
                    ) : (
                      <span>{m.brand}</span>
                    )}
                  </Link>
                </td>
              )}
              <td style={{ color: theme.mute, whiteSpace: "nowrap" }}>
                {m.kind === "murale" ? "Murale" : "Centrale"}
                {m.coldClimate ? " · grand froid" : ""}
              </td>
              <td style={{ ...right, whiteSpace: "nowrap" }}>{fmt(m.nominalBtu, " BTU")}</td>
              <td style={{ ...right, whiteSpace: "nowrap", fontWeight: 600, color: theme.ink }}>
                {m.h5Btu !== null ? fmt(m.h5Btu, " BTU") : <span style={{ color: theme.faint }}>n/d</span>}
              </td>
              <td style={right}>{fmt(m.hspf2)}</td>
              <td style={right}>{fmt(m.seer2)}</td>
              <td style={{ ...right, whiteSpace: "nowrap", fontWeight: 600, color: theme.green }}>
                {m.logisVertDollars > 0 ? fmt(m.logisVertDollars, " $") : "—"}
              </td>
              {metric && <td style={{ ...right, whiteSpace: "nowrap" }}>{metric.value(m)}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
