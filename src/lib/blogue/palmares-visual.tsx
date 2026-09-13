/* ==================================================================
   Visuel partageable du Palmarès du froid (ImageResponse, comme le
   studio de présence) : les cinq stations aux nuits de janvier les
   plus froides, avec leurs municipalités. Deux formats : aperçu de
   partage (1200 × 630) et portrait pour Facebook et Instagram
   (1080 × 1350). Police Liberation Sans (public/fonts), lue une fois.
   Chaque nombre imprimé vient du palmarès (normales de la station).
   ================================================================== */

import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { fmtInt, fmtTemp } from "@/lib/presence/format";
import type { Palmares, PalmaresRow } from "./palmares";

type FontDef = { name: string; data: ArrayBuffer; weight: 400 | 700; style: "normal" };
let fontsPromise: Promise<FontDef[]> | null = null;
const ab = (b: Buffer): ArrayBuffer => b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength) as ArrayBuffer;

function loadFonts(): Promise<FontDef[]> {
  if (!fontsPromise) {
    const dir = path.join(process.cwd(), "public", "fonts");
    fontsPromise = Promise.all([readFile(path.join(dir, "LiberationSans-Regular.ttf")), readFile(path.join(dir, "LiberationSans-Bold.ttf"))]).then(([r, b]) => [
      { name: "Liberation", data: ab(r), weight: 400, style: "normal" },
      { name: "Liberation", data: ab(b), weight: 700, style: "normal" },
    ]);
  }
  return fontsPromise;
}

export const PALMARES_VISUAL_SIZES = { og: { width: 1200, height: 630 }, portrait: { width: 1080, height: 1350 } } as const;

/** Les stations les plus froides (une ligne par station, avec ses municipalités). */
export function coldestStations(p: Palmares, n = 5): Array<{ station: string; janMinC: number; names: string[]; region: string }> {
  const out = new Map<string, { station: string; janMinC: number; names: string[]; region: string }>();
  for (const r of p.rows as PalmaresRow[]) {
    const g = out.get(r.stationId);
    if (g) g.names.push(r.name);
    else if (out.size < n) out.set(r.stationId, { station: r.stationName, janMinC: r.janMinC, names: [r.name], region: r.region });
  }
  return [...out.values()];
}

export async function palmaresImage(p: Palmares, format: keyof typeof PALMARES_VISUAL_SIZES, year: number): Promise<ImageResponse> {
  const size = PALMARES_VISUAL_SIZES[format];
  const portrait = format === "portrait";
  const rows = coldestStations(p, portrait ? 5 : 4);
  const period = p.rows[0]?.period ?? "";
  const names = (list: string[]) => (list.length > 3 ? `${list.slice(0, 3).join(", ")} et ${fmtInt(list.length - 3)} autres` : list.join(", "));
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", background: "#0A121B", color: "#EEF3F6", fontFamily: "Liberation", padding: portrait ? "84px 76px" : "56px 64px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ display: "flex", fontSize: portrait ? 26 : 20, letterSpacing: 6, color: "#9ECAE6", fontWeight: 700 }}>{`PALMARÈS DU FROID ${year}`}</div>
          <div style={{ display: "flex", fontSize: portrait ? 22 : 18, color: "#93A4B0" }}>{`${fmtInt(p.totals.municipalities)} municipalités`}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: portrait ? 48 : 26 }}>
          <div style={{ display: "flex", fontSize: portrait ? 66 : 50, fontWeight: 700, lineHeight: 1.05 }}>Les nuits de janvier</div>
          <div style={{ display: "flex", fontSize: portrait ? 66 : 50, fontWeight: 700, lineHeight: 1.05, color: "#9ECAE6" }}>les plus froides du Québec</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: portrait ? 56 : 26, borderTop: "2px solid rgba(238,243,246,0.35)" }}>
          {rows.map((r) => (
            <div key={r.station} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: portrait ? "26px 0" : "12px 0", borderBottom: "1px solid rgba(238,243,246,0.16)" }}>
              <div style={{ display: "flex", flexDirection: "column", maxWidth: portrait ? 640 : 820 }}>
                <div style={{ display: "flex", fontSize: portrait ? 34 : 26, fontWeight: 700 }}>{names(r.names)}</div>
                <div style={{ display: "flex", fontSize: portrait ? 22 : 17, color: "#93A4B0", marginTop: 4 }}>{`${r.region} · station ${r.station}`}</div>
              </div>
              <div style={{ display: "flex", fontSize: portrait ? 60 : 44, fontWeight: 700, color: "#9ECAE6" }}>{fmtTemp(r.janMinC)}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginTop: "auto", fontSize: portrait ? 21 : 16, color: "#93A4B0" }}>
          <div style={{ display: "flex" }}>{`Moyenne des minimums quotidiens de janvier, normales ${period} d’Environnement et Changement climatique Canada.`}</div>
          <div style={{ display: "flex", marginTop: 8, color: "#E54B17", fontWeight: 700, letterSpacing: 2 }}>THERMOPOMPESAVENDRE.CA/PALMARES-DU-FROID</div>
        </div>
      </div>
    ),
    { ...size, fonts: await loadFonts() },
  );
}
