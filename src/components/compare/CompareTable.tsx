"use client";

import { useState } from "react";
import type { CompareProduct } from "@/lib/data/queries/comparator";
import type { ComparisonHighlights, HighlightResult } from "@/lib/compare/highlights";

/* ------------------------------------------------------------------
   CompareTable — grouped comparison table with subsidy section
   ------------------------------------------------------------------ */

interface CompareTableProps {
  products: CompareProduct[];
  highlights: ComparisonHighlights;
  allTemps: number[];
}

interface RowDef {
  label: string;
  values: (string | null)[];
  highlight?: HighlightResult;
}

interface SectionDef {
  title: string;
  rows: RowDef[];
}

const MISSING = "N/D";

export function CompareTable({ products, highlights, allTemps }: CompareTableProps) {
  const [differencesOnly, setDifferencesOnly] = useState(false);
  const details = products.map((p) => p.detail);
  const colCount = products.length;

  /* ---- Build sections ---- */
  const sections: SectionDef[] = [];

  // --- APERCU ---
  sections.push({
    title: "Apercu",
    rows: [
      row("Marque", details.map((d) => d.brand.name)),
      row("Série", details.map((d) => d.series.name)),
      row("Numéro de modèle", details.map((d) => d.model.modelNumber)),
      row("Type de système", details.map((d) => d.systemTypeLabel)),
      row("Capacité nominale", details.map((d) =>
        d.model.nominalCapacityBtu != null
          ? `${d.model.nominalCapacityBtu.toLocaleString("fr-CA")} BTU/h`
          : null,
      )),
      row("Zones", details.map((d) =>
        d.model.zones != null ? `${d.model.zones}` : null,
      )),
      row("Climat froid", details.map((d) =>
        d.isColdClimate ? "Oui" : "Non",
      )),
    ],
  });

  // --- PERFORMANCE HIVERNALE ---
  const perfRows: RowDef[] = [
    { ...row("Temp. min. annoncée", details.map((d) =>
      d.configuration?.minHeatingTempC != null
        ? `${d.configuration.minHeatingTempC} °C`
        : null,
    )), highlight: highlights.minTemp },
  ];
  for (const temp of allTemps) {
    const values = details.map((d) => {
      if (!d.performanceProfile) return null;
      const dp = d.performanceProfile.dataPoints.find((p) => p.outdoorTempC === temp);
      return dp ? `${dp.heatingCapacityBtu.toLocaleString("fr-CA")} BTU/h` : null;
    });
    const highlightKey = temp === -8 ? "capacityMinus8"
      : temp === -15 ? "capacityMinus15"
      : temp === -25 ? "capacityMinus25"
      : undefined;
    perfRows.push({
      ...row(`Capacité à ${temp} °C`, values),
      highlight: highlightKey ? highlights[highlightKey] : undefined,
    });
  }
  if (perfRows.some((r) => r.values.some((v) => v !== null))) {
    sections.push({ title: "Performance hivernale", rows: perfRows });
  }

  // --- EFFICACITE ---
  const effRows: RowDef[] = [
    { ...row("SEER2", details.map((d) =>
      d.configuration?.seer2 != null ? `${d.configuration.seer2}` : null,
    )), highlight: highlights.seer2 },
    row("EER2", details.map((d) =>
      d.configuration?.eer2 != null ? `${d.configuration.eer2}` : null,
    )),
    { ...row("HSPF2", details.map((d) =>
      d.configuration?.hspf2 != null ? `${d.configuration.hspf2}` : null,
    )), highlight: highlights.hspf2 },
    row("COP", details.map((d) =>
      d.configuration?.cop != null ? `${d.configuration.cop}` : null,
    )),
  ];
  if (effRows.some((r) => r.values.some((v) => v !== null))) {
    sections.push({ title: "Efficacite", rows: effRows });
  }

  // --- CONFORT ---
  const comfortRows: RowDef[] = [
    { ...row("Bruit intérieur (min)", details.map((d) =>
      d.configuration?.noiseIndoorMinDbA != null
        ? `${d.configuration.noiseIndoorMinDbA} dB(A)`
        : null,
    )), highlight: highlights.noiseIndoor },
    row("Bruit intérieur (max)", details.map((d) =>
      d.configuration?.noiseIndoorMaxDbA != null
        ? `${d.configuration.noiseIndoorMaxDbA} dB(A)`
        : null,
    )),
    { ...row("Bruit extérieur", details.map((d) =>
      d.configuration?.noiseOutdoorDbA != null
        ? `${d.configuration.noiseOutdoorDbA} dB(A)`
        : null,
    )), highlight: highlights.noiseOutdoor },
    row("Wi-Fi", details.map((d) =>
      d.configuration?.hasWifi === true ? "Integre"
      : d.configuration?.hasWifi === false ? "Non"
      : null,
    )),
  ];
  if (comfortRows.some((r) => r.values.some((v) => v !== null))) {
    sections.push({ title: "Confort et fonctionnalites", rows: comfortRows });
  }

  // --- INSTALLATION ---
  const installRows: RowDef[] = [
    row("Réfrigérant", details.map((d) => d.outdoorUnit?.refrigerant ?? null)),
    row("Tension", details.map((d) =>
      d.configuration?.voltage != null ? `${d.configuration.voltage} V` : null,
    )),
    row("Phase", details.map((d) =>
      d.configuration?.phase != null ? `${d.configuration.phase} phase` : null,
    )),
    row("Fréquence", details.map((d) =>
      d.configuration?.frequencyHz != null ? `${d.configuration.frequencyHz} Hz` : null,
    )),
  ];
  if (installRows.some((r) => r.values.some((v) => v !== null))) {
    sections.push({ title: "Installation", rows: installRows });
  }

  // --- GARANTIE ---
  const warrantyTypes = ["parts", "compressor", "labor", "replacement"] as const;
  const warrantyLabels: Record<string, string> = {
    parts: "Pieces",
    compressor: "Compresseur",
    labor: "Main-d'oeuvre",
    replacement: "Remplacement",
  };
  const warrantyRows: RowDef[] = warrantyTypes.map((wt) => {
    const highlightKey = wt === "parts" ? "warrantyParts"
      : wt === "compressor" ? "warrantyCompressor"
      : undefined;
    return {
      ...row(`Garantie — ${warrantyLabels[wt]}`, details.map((d) => {
        const w = d.warranties.find((w) => w.type === wt);
        if (!w) return null;
        let val = `${w.durationYears} ans`;
        if (w.requiresRegistration) val += " (enregistrement requis)";
        return val;
      })),
      highlight: highlightKey ? highlights[highlightKey as keyof ComparisonHighlights] : undefined,
    };
  });
  if (warrantyRows.some((r) => r.values.some((v) => v !== null))) {
    sections.push({ title: "Garantie", rows: warrantyRows });
  }

  // --- SUBVENTIONS ---
  const subsidyRows: RowDef[] = [
    row("Subvention LogisVert", products.map((p) =>
      p.subsidy.dollars > 0
        ? `${p.subsidy.dollars.toLocaleString("fr-CA")} $`
        : "Non admissible",
    )),
    row("Certification climat froid", products.map((p) =>
      p.subsidy.isColdClimate ? "Oui" : "Non",
    )),
    row("Capacité utilisée", products.map((p) =>
      p.subsidy.capacityBtu > 0
        ? `${p.subsidy.capacityBtu.toLocaleString("fr-CA")} BTU/h`
        : "N/D",
    )),
  ];
  sections.push({ title: "Subventions et aides financieres", rows: subsidyRows });

  // --- CERTIFICATIONS ---
  const certRows: RowDef[] = [
    row("Certification climat froid", details.map((d) => {
      const cc = d.certifications.find((c) => c.coldClimate);
      return cc ? "Certifie" : d.isColdClimate ? "A vérifier" : "Non applicable";
    })),
  ];
  sections.push({ title: "Certifications", rows: certRows });

  /* ---- Filter for differences only ---- */
  const filteredSections = differencesOnly
    ? sections
        .map((section) => ({
          ...section,
          rows: section.rows.filter((r) => {
            const nonNull = r.values.filter((v) => v !== null);
            if (nonNull.length <= 1) return true;
            return new Set(nonNull).size > 1;
          }),
        }))
        .filter((section) => section.rows.length > 0)
    : sections.map((section) => ({
        ...section,
        rows: section.rows.filter((r) => r.values.some((v) => v !== null)),
      })).filter((section) => section.rows.length > 0);

  return (
    <div>
      {/* Toggle */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <h2 style={{ fontSize: 20, fontWeight: 700, color: "#071d2b", margin: 0 }}>
          Comparaison detaillee
        </h2>
        <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#6B7280", cursor: "pointer" }}>
          <input
            type="checkbox"
            checked={differencesOnly}
            onChange={(e) => setDifferencesOnly(e.target.checked)}
            style={{ width: 16, height: 16 }}
          />
          Differences seulement
        </label>
      </div>

      {/* Table */}
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", fontSize: 13, borderCollapse: "collapse", minWidth: 600 }}>
          <caption style={{ position: "absolute", width: 1, height: 1, overflow: "hidden" }}>
            Comparaison de {products.length} thermopompes
          </caption>
          <thead style={{ position: "absolute", width: 1, height: 1, overflow: "hidden" }}>
            <tr>
              <th scope="col">Caracteristique</th>
              {details.map((d) => (
                <th key={d.model.id} scope="col">{d.model.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredSections.map((section) => (
              <SectionBlock key={section.title} section={section} colCount={colCount} />
            ))}
          </tbody>
        </table>
      </div>

      {differencesOnly && filteredSections.length === 0 && (
        <p style={{ fontSize: 13, color: "#9CA3AF", textAlign: "center", padding: "24px 0" }}>
          Aucune difference detectee avec les données disponibles.
        </p>
      )}
    </div>
  );
}

/* ---- Section block ---- */

function SectionBlock({ section, colCount }: { section: SectionDef; colCount: number }) {
  return (
    <>
      <tr>
        <th
          colSpan={colCount + 1}
          scope="colgroup"
          style={{
            textAlign: "left",
            fontSize: 11,
            fontWeight: 700,
            color: "#9CA3AF",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
            paddingTop: 28,
            paddingBottom: 8,
            borderBottom: "2px solid #e5e7eb",
          }}
        >
          {section.title}
        </th>
      </tr>
      {section.rows.map((r) => (
        <CompareRow key={r.label} row={r} />
      ))}
    </>
  );
}

/* ---- Single row ---- */

function CompareRow({ row: r }: { row: RowDef }) {
  return (
    <tr style={{ borderBottom: "1px solid #f3f4f6" }}>
      <th
        scope="row"
        style={{
          textAlign: "left",
          padding: "10px 16px 10px 0",
          fontSize: 13,
          color: "#6B7280",
          fontWeight: 400,
          whiteSpace: "nowrap",
          verticalAlign: "top",
          width: 180,
          minWidth: 140,
        }}
      >
        {r.label}
      </th>
      {r.values.map((val, i) => {
        const isBest = r.highlight?.bestIndex === i;
        return (
          <td
            key={i}
            style={{
              padding: "10px 8px",
              fontSize: 13,
              verticalAlign: "top",
              color: val === null ? "#D1D5DB" : isBest ? "#071d2b" : "#374151",
              fontWeight: isBest ? 700 : 400,
              fontStyle: val === null ? "italic" : undefined,
              background: isBest ? "#f0fdf4" : undefined,
              borderRadius: isBest ? 4 : undefined,
            }}
          >
            {val ?? MISSING}
            {isBest && (
              <span style={{
                display: "inline-block",
                marginLeft: 6,
                fontSize: 9,
                fontWeight: 700,
                color: "#15803d",
                textTransform: "uppercase",
                letterSpacing: "0.04em",
                verticalAlign: "middle",
              }}>
                Meilleur
              </span>
            )}
          </td>
        );
      })}
    </tr>
  );
}

/* ---- Helper ---- */

function row(label: string, values: (string | null)[]): RowDef {
  return { label, values };
}
