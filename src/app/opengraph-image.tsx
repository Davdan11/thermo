import { ImageResponse } from "next/og";

export const alt = "Thermopompe A Vendre.ca — Comparez toutes les thermopompes vendues au Québec";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #0C1821 0%, #1a2f42 100%)",
          color: "white",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ fontSize: 28, letterSpacing: 6, color: "#e54b17", fontWeight: 700 }}>THERMOPOMPES À VENDRE</div>
          <div style={{ fontSize: 72, fontWeight: 900, lineHeight: 1.05, maxWidth: 1000 }}>Trouvez la thermopompe qui convient vraiment à votre maison.</div>
        </div>
        <div style={{ display: "flex", gap: 48, fontSize: 26, color: "#cbd5e1" }}>
          <div style={{ display: "flex" }}>Toutes les marques vendues au Québec</div>
          <div style={{ display: "flex" }}>Données certifiées Hydro-Québec</div>
          <div style={{ display: "flex" }}>Subvention LogisVert incluse</div>
        </div>
      </div>
    ),
    size,
  );
}
