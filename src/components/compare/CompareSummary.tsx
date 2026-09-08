import type { ComparisonHighlights } from "@/lib/compare/highlights";
import type { CompareProduct } from "@/lib/data/queries/comparator";
import type { HighlightResult } from "@/lib/compare/highlights";

/* ------------------------------------------------------------------
   CompareSummary — key differences in visual cards
   ------------------------------------------------------------------ */

interface CompareSummaryProps {
  highlights: ComparisonHighlights;
  products: CompareProduct[];
}

interface SummaryItem {
  label: string;
  result: HighlightResult;
  winnerName: string | null;
  winnerBrand: string | null;
  value: string | null;
  icon: string;
}

const CATEGORY_ICONS: Record<string, string> = {
  seer2: "S",
  hspf2: "H",
  noise: "dB",
  temp: "°C",
  capacity: "BTU",
  subsidy: "$",
};

export function CompareSummary({ highlights, products }: CompareSummaryProps) {
  const items: SummaryItem[] = [];

  const getName = (idx: number | null) =>
    idx !== null ? products[idx].detail.model.name : null;
  const getBrand = (idx: number | null) =>
    idx !== null ? products[idx].detail.brand.name : null;

  // SEER2
  items.push({
    label: "Meilleure efficacite en climatisation",
    result: highlights.seer2,
    winnerName: getName(highlights.seer2.bestIndex),
    winnerBrand: getBrand(highlights.seer2.bestIndex),
    value: highlights.seer2.bestIndex !== null
      ? `SEER2 ${products[highlights.seer2.bestIndex].detail.configuration?.seer2 ?? "N/D"}`
      : null,
    icon: CATEGORY_ICONS.seer2,
  });

  // HSPF2
  items.push({
    label: "Meilleure efficacite en chauffage",
    result: highlights.hspf2,
    winnerName: getName(highlights.hspf2.bestIndex),
    winnerBrand: getBrand(highlights.hspf2.bestIndex),
    value: highlights.hspf2.bestIndex !== null
      ? `HSPF2 ${products[highlights.hspf2.bestIndex].detail.configuration?.hspf2 ?? "N/D"}`
      : null,
    icon: CATEGORY_ICONS.hspf2,
  });

  // Indoor noise
  items.push({
    label: "Le plus silencieux",
    result: highlights.noiseIndoor,
    winnerName: getName(highlights.noiseIndoor.bestIndex),
    winnerBrand: getBrand(highlights.noiseIndoor.bestIndex),
    value: highlights.noiseIndoor.bestIndex !== null
      ? `${products[highlights.noiseIndoor.bestIndex].detail.configuration?.noiseIndoorMinDbA ?? "?"} dB(A)`
      : null,
    icon: CATEGORY_ICONS.noise,
  });

  // Min temp
  items.push({
    label: "Performance par grand froid",
    result: highlights.minTemp,
    winnerName: getName(highlights.minTemp.bestIndex),
    winnerBrand: getBrand(highlights.minTemp.bestIndex),
    value: highlights.minTemp.bestIndex !== null
      ? `Jusqu'a ${products[highlights.minTemp.bestIndex].detail.configuration?.minHeatingTempC ?? "?"} °C`
      : null,
    icon: CATEGORY_ICONS.temp,
  });

  // Best subsidy
  const subsidyAmounts = products.map((p) => p.subsidy.dollars);
  const maxSubsidy = Math.max(...subsidyAmounts);
  const maxSubsidyIndices = subsidyAmounts
    .map((v, i) => (v === maxSubsidy && v > 0 ? i : -1))
    .filter((i) => i >= 0);
  if (maxSubsidyIndices.length === 1) {
    items.push({
      label: "Meilleure subvention LogisVert",
      result: {
        bestIndex: maxSubsidyIndices[0],
        reason: "Montant estime le plus eleve",
        dataCount: subsidyAmounts.filter((v) => v > 0).length,
        totalCount: products.length,
      },
      winnerName: getName(maxSubsidyIndices[0]),
      winnerBrand: getBrand(maxSubsidyIndices[0]),
      value: `${maxSubsidy.toLocaleString("fr-CA")} $`,
      icon: CATEGORY_ICONS.subsidy,
    });
  }

  // Filter to show only items with at least some data
  const relevant = items.filter((item) => item.result.dataCount >= 1);

  if (relevant.length === 0) return null;

  return (
    <section style={{ marginTop: 32 }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, color: "#071d2b", marginBottom: 6 }}>
        Principales differences
      </h2>
      <p style={{ fontSize: 12, color: "#9CA3AF", marginBottom: 16 }}>
        Analyse basee sur les spécifications du fabricant.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12 }}>
        {relevant.map((item) => (
          <div
            key={item.label}
            style={{
              padding: 16,
              background: item.result.bestIndex !== null ? "#f9fafb" : "#fafafa",
              border: "1px solid #e5e7eb",
              borderRadius: 8,
            }}
          >
            {/* Icon circle */}
            <div style={{
              width: 32, height: 32,
              borderRadius: "50%",
              background: item.result.bestIndex !== null ? "#071d2b" : "#e5e7eb",
              color: item.result.bestIndex !== null ? "#fff" : "#9CA3AF",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 10, fontWeight: 700,
              marginBottom: 10,
            }}>
              {item.icon}
            </div>

            <p style={{ margin: 0, fontSize: 11, color: "#9CA3AF", fontWeight: 500 }}>
              {item.label}
            </p>

            {item.result.bestIndex !== null && item.winnerName ? (
              <>
                <p style={{ margin: "4px 0 0", fontSize: 15, fontWeight: 700, color: "#071d2b" }}>
                  {item.winnerBrand} {item.winnerName}
                </p>
                {item.value && (
                  <p style={{ margin: "2px 0 0", fontSize: 12, color: "#15803d", fontWeight: 600 }}>
                    {item.value}
                  </p>
                )}
              </>
            ) : (
              <p style={{ margin: "4px 0 0", fontSize: 12, color: "#9CA3AF" }}>
                {item.result.reason}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
