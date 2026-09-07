import { ImageResponse } from "next/og";
import { getProductDetail } from "@/lib/data/queries/product-detail";

export const alt = "Thermopompe Fiche Technique";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const detail = getProductDetail(slug);

  if (!detail) {
    return new ImageResponse(
      (
        <div style={{ fontSize: 64, background: "white", width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
          Modèle introuvable
        </div>
      ),
      { ...size }
    );
  }

  const { model, brand, series } = detail;
  const capacity = model.nominalCapacityBtu ? `${(model.nominalCapacityBtu / 1000).toFixed(0)} 000 BTU` : "";
  const subsidy = detail.logisVertDollars ? `${detail.logisVertDollars} $` : "";

  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(to bottom right, #0C1821, #1a2f42)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          padding: "80px",
          color: "white",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <div style={{ fontSize: 36, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "2px" }}>
            Thermopompe {detail.systemTypeLabel}
          </div>
          <div style={{ fontSize: 80, fontWeight: 900, lineHeight: 1.1, display: "flex" }}>
            {brand.name}
          </div>
          <div style={{ fontSize: 60, fontWeight: 700, color: "#d94b12", display: "flex" }}>
            {series.name} {model.name}
          </div>
        </div>

        <div style={{ display: "flex", gap: "40px", marginTop: "auto" }}>
          {capacity && (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 24, color: "#9ca3af" }}>Capacité</span>
              <span style={{ fontSize: 40, fontWeight: "bold" }}>{capacity}</span>
            </div>
          )}
          {subsidy && (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 24, color: "#9ca3af" }}>Subvention LogisVert</span>
              <span style={{ fontSize: 40, fontWeight: "bold", color: "#22c55e" }}>{subsidy}</span>
            </div>
          )}
          {model.categories.includes("cold-climate") && (
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontSize: 24, color: "#9ca3af" }}>Certification</span>
              <span style={{ fontSize: 40, fontWeight: "bold", color: "#38bdf8" }}>Climat Froid</span>
            </div>
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
