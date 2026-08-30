"use client";

import type { CompareProduct } from "@/lib/data/queries/comparator";

/* ------------------------------------------------------------------
   CompareChart — Pure CSS bar chart comparisons
   ------------------------------------------------------------------ */

interface CompareChartProps {
  products: CompareProduct[];
}

interface ChartData {
  title: string;
  unit: string;
  /** Higher is better? */
  higherBetter: boolean;
  values: { label: string; value: number | null; brand: string }[];
}

const BAR_COLORS = [
  "#e54b17", // brand accent
  "#1b6b3a", // green
  "#2563eb", // blue
  "#9333ea", // purple
  "#ca8a04", // amber
];

export function CompareChart({ products }: CompareChartProps) {
  const charts: ChartData[] = [];

  // SEER2
  const seer2Values = products.map((p) => ({
    label: p.detail.model.name,
    value: p.detail.configuration?.seer2 ?? null,
    brand: p.detail.brand.name,
  }));
  if (seer2Values.some((v) => v.value !== null)) {
    charts.push({ title: "Efficacite en climatisation", unit: "SEER2", higherBetter: true, values: seer2Values });
  }

  // HSPF2
  const hspf2Values = products.map((p) => ({
    label: p.detail.model.name,
    value: p.detail.configuration?.hspf2 ?? null,
    brand: p.detail.brand.name,
  }));
  if (hspf2Values.some((v) => v.value !== null)) {
    charts.push({ title: "Efficacite en chauffage", unit: "HSPF2", higherBetter: true, values: hspf2Values });
  }

  // Nominal capacity BTU
  const btuValues = products.map((p) => ({
    label: p.detail.model.name,
    value: p.detail.model.nominalCapacityBtu ?? null,
    brand: p.detail.brand.name,
  }));
  if (btuValues.some((v) => v.value !== null)) {
    charts.push({ title: "Capacite nominale", unit: "BTU/h", higherBetter: true, values: btuValues });
  }

  // Indoor noise (lower better)
  const noiseValues = products.map((p) => ({
    label: p.detail.model.name,
    value: p.detail.configuration?.noiseIndoorMinDbA ?? null,
    brand: p.detail.brand.name,
  }));
  if (noiseValues.some((v) => v.value !== null)) {
    charts.push({ title: "Bruit interieur minimal", unit: "dB(A)", higherBetter: false, values: noiseValues });
  }

  // LogisVert subsidy
  const subsidyValues = products.map((p) => ({
    label: p.detail.model.name,
    value: p.subsidy.dollars,
    brand: p.detail.brand.name,
  }));
  if (subsidyValues.some((v) => v.value > 0)) {
    charts.push({ title: "Subvention LogisVert estimee", unit: "$", higherBetter: true, values: subsidyValues });
  }

  if (charts.length === 0) return null;

  return (
    <section style={{ marginTop: 40 }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: "#071d2b", marginBottom: 6 }}>
        Diagramme comparatif
      </h2>
      <p style={{ fontSize: 12, color: "#6B7280", marginBottom: 24 }}>
        Visualisation des specifications cles. Les valeurs sont basees sur les donnees du fabricant.
      </p>

      {/* Legend */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginBottom: 24 }}>
        {products.map((p, i) => (
          <div key={p.detail.model.id} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{
              width: 12, height: 12, borderRadius: 2,
              background: BAR_COLORS[i % BAR_COLORS.length],
            }} />
            <span style={{ fontSize: 12, color: "#374151", fontWeight: 500 }}>
              {p.detail.brand.name} {p.detail.model.name}
            </span>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
        {charts.map((chart) => (
          <BarChart key={chart.title} chart={chart} productCount={products.length} />
        ))}
      </div>
    </section>
  );
}

/* ---- Single bar chart ---- */

function BarChart({ chart, productCount }: { chart: ChartData; productCount: number }) {
  const validValues = chart.values.filter((v) => v.value !== null).map((v) => v.value!);
  if (validValues.length === 0) return null;

  const maxVal = Math.max(...validValues);
  const minVal = Math.min(...validValues);

  // Find best index
  let bestIdx: number | null = null;
  if (validValues.length >= 2) {
    const targetVal = chart.higherBetter ? maxVal : minVal;
    const candidates = chart.values
      .map((v, i) => ({ v: v.value, i }))
      .filter((x) => x.v === targetVal);
    if (candidates.length === 1) {
      bestIdx = candidates[0].i;
    }
  }

  return (
    <div style={{
      background: "#fff",
      border: "1px solid #e5e7eb",
      borderRadius: 8,
      padding: 20,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 16 }}>
        <h3 style={{ fontSize: 13, fontWeight: 600, color: "#071d2b", margin: 0 }}>
          {chart.title}
        </h3>
        <span style={{ fontSize: 11, color: "#9CA3AF", fontWeight: 500 }}>
          {chart.higherBetter ? "Plus haut = mieux" : "Plus bas = mieux"}
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {chart.values.map((item, i) => {
          const pct = item.value !== null && maxVal > 0
            ? (item.value / maxVal) * 100
            : 0;
          const isBest = bestIdx === i;
          const color = BAR_COLORS[i % BAR_COLORS.length];

          return (
            <div key={i}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 3 }}>
                <span style={{
                  fontSize: 11,
                  color: isBest ? "#071d2b" : "#6B7280",
                  fontWeight: isBest ? 600 : 400,
                }}>
                  {item.brand}
                </span>
                <span style={{
                  fontSize: 12,
                  fontWeight: 600,
                  color: isBest ? color : "#374151",
                  fontVariantNumeric: "tabular-nums",
                }}>
                  {item.value !== null
                    ? (chart.unit === "$"
                      ? `${item.value.toLocaleString("fr-CA")} $`
                      : chart.unit === "BTU/h"
                        ? `${item.value.toLocaleString("fr-CA")} ${chart.unit}`
                        : `${item.value} ${chart.unit}`)
                    : "N/D"}
                </span>
              </div>
              <div style={{
                height: 20,
                background: "#f3f4f6",
                borderRadius: 4,
                overflow: "hidden",
                position: "relative",
              }}>
                <div style={{
                  height: "100%",
                  width: `${Math.max(pct, 2)}%`,
                  background: isBest
                    ? `linear-gradient(90deg, ${color}, ${color}dd)`
                    : `${color}66`,
                  borderRadius: 4,
                  transition: "width 0.6s ease-out",
                  position: "relative",
                }}>
                  {isBest && (
                    <div style={{
                      position: "absolute",
                      right: 6,
                      top: "50%",
                      transform: "translateY(-50%)",
                      fontSize: 9,
                      fontWeight: 700,
                      color: "#fff",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}>
                      Meilleur
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
