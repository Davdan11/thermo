/* ==================================================================
   GET /api/og?type=produit&slug=…   |   ?type=marque&slug=…   |   ?type=ville&slug=…
   Images Open Graph générées à la demande (1200×630) à partir des
   données réelles. Mises en cache par le CDN via Cache-Control.
   ================================================================== */

import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { getSeoModel, getBrandStats } from "@/lib/seo/programmatic";
import { getCity } from "@/lib/seo/cities";

export const runtime = "nodejs";

const size = { width: 1200, height: 630 };

/* Police embarquée (Liberation Sans, licence SIL OFL) : couvre tous les glyphes
   français, le signe ° et le point médian que la police par défaut ne contient pas. */
let fontsPromise: Promise<Array<{ name: string; data: ArrayBuffer; weight: 400 | 700; style: "normal" }>> | null = null;
function loadFonts() {
  if (!fontsPromise) {
    const dir = path.join(process.cwd(), "public", "fonts");
    fontsPromise = Promise.all([
      readFile(path.join(dir, "LiberationSans-Regular.ttf")),
      readFile(path.join(dir, "LiberationSans-Bold.ttf")),
    ]).then(([regular, bold]) => [
      { name: "Liberation", data: regular.buffer.slice(regular.byteOffset, regular.byteOffset + regular.byteLength) as ArrayBuffer, weight: 400 as const, style: "normal" as const },
      { name: "Liberation", data: bold.buffer.slice(bold.byteOffset, bold.byteOffset + bold.byteLength) as ArrayBuffer, weight: 700 as const, style: "normal" as const },
    ]);
  }
  return fontsPromise;
}

function frame(children: React.ReactNode) {
  return (
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
        fontFamily: "Liberation",
      }}
    >
      {children}
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 24, color: "#94a3b8" }}>
        <div style={{ display: "flex", color: "#e54b17", fontWeight: 700, letterSpacing: 4 }}>THERMOPOMPES À VENDRE</div>
        <div style={{ display: "flex" }}>Données certifiées Hydro-Québec · ENERGY STAR</div>
      </div>
    </div>
  );
}

function stat(label: string, value: string, color = "white") {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <span style={{ fontSize: 22, color: "#94a3b8" }}>{label}</span>
      <span style={{ fontSize: 40, fontWeight: 700, color }}>{value}</span>
    </div>
  );
}

const fmt = (n: number) => n.toLocaleString("fr-CA");

/** Rend l'image en mémoire pour que toute erreur de rendu devienne une réponse 500 lisible plutôt qu'une connexion coupée. */
async function render(node: React.ReactElement, headers: Record<string, string>, fonts: Awaited<ReturnType<typeof loadFonts>>) {
  try {
    const png = await new ImageResponse(node, { ...size, fonts }).arrayBuffer();
    return new Response(png, { headers: { ...headers, "Content-Type": "image/png" } });
  } catch (err) {
    console.error("[api/og] rendu impossible :", err);
    return new Response(`OG render error: ${err instanceof Error ? err.message : String(err)}`, { status: 500 });
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type") ?? "";
  const slug = searchParams.get("slug") ?? "";
  const headers = { "Cache-Control": "public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400" };
  const fonts = await loadFonts();

  if (type === "produit") {
    const m = getSeoModel(slug);
    if (m) {
      return render(
        frame(
          <>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ fontSize: 30, color: "#94a3b8", textTransform: "uppercase", letterSpacing: 3 }}>{`Thermopompe ${m.kind}${m.coldClimate ? " · certifiée grand froid" : ""}`}</div>
              <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>{m.brand}</div>
              <div style={{ fontSize: 52, fontWeight: 700, color: "#e54b17" }}>{m.name}</div>
              <div style={{ fontSize: 26, color: "#cbd5e1", fontFamily: "Liberation" }}>{m.outdoorModel}</div>
            </div>
            <div style={{ display: "flex", gap: 56 }}>
              {m.h5Btu !== null && stat("Chauffage à -15 °C", `${fmt(m.h5Btu)} BTU/h`)}
              {m.hspf2 !== null && stat("HSPF2", fmt(m.hspf2))}
              {m.logisVertDollars > 0 && stat("LogisVert", `${fmt(m.logisVertDollars)} $`, "#22c55e")}
            </div>
          </>,
        ),
        headers,
        fonts,
      );
    }
  }

  if (type === "marque") {
    const b = getBrandStats(slug);
    if (b) {
      return render(
        frame(
          <>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ fontSize: 30, color: "#94a3b8", textTransform: "uppercase", letterSpacing: 3 }}>Thermopompes au Québec</div>
              <div style={{ fontSize: 84, fontWeight: 700, lineHeight: 1.05 }}>{b.name}</div>
            </div>
            <div style={{ display: "flex", gap: 56 }}>
              {stat("Modèles", fmt(b.models.length))}
              {stat("Grand froid", fmt(b.coldClimateCount))}
              {b.avgHspf2 !== null && stat("HSPF2 moyen", fmt(b.avgHspf2))}
              {b.maxLogisVert > 0 && stat("LogisVert jusqu'à", `${fmt(b.maxLogisVert)} $`, "#22c55e")}
            </div>
          </>,
        ),
        headers,
        fonts,
      );
    }
  }

  if (type === "ville") {
    const c = getCity(slug);
    if (c) {
      return render(
        frame(
          <>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ fontSize: 30, color: "#94a3b8", textTransform: "uppercase", letterSpacing: 3 }}>{c.region}</div>
              <div style={{ fontSize: 80, fontWeight: 700, lineHeight: 1.05 }}>{`Thermopompe à ${c.name}`}</div>
              <div style={{ fontSize: 34, color: "#cbd5e1" }}>Prix, subvention LogisVert et modèles grand froid</div>
            </div>
            <div style={{ display: "flex", gap: 56 }}>
              {stat("Température de conception", `${c.designTempC} °C`)}
              {stat("Codes postaux", c.fsa.join(" · "))}
            </div>
          </>,
        ),
        headers,
        fonts,
      );
    }
  }

  return render(
    frame(
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ fontSize: 72, fontWeight: 700, lineHeight: 1.05, maxWidth: 1000 }}>Trouvez la thermopompe qui convient vraiment à votre maison.</div>
      </div>,
    ),
    headers,
    fonts,
  );
}
