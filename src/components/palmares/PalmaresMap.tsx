/* ==================================================================
   Carte des municipalités du palmarès, en SVG fait maison (aucune
   dépendance, aucun fond de carte) : chaque point est placé par sa
   latitude et sa longitude (projection équirectangulaire corrigée par
   le cosinus de la latitude moyenne) et coloré selon ses nuits de
   janvier. Les points s'allument du nord vers le sud (CSS). Chaque
   point mène à sa rangée du tableau. Composant serveur.
   ================================================================== */

import { fmtTemp } from "@/lib/presence/format";
import { palmaresAnchor, type PalmaresRow } from "@/lib/blogue/palmares";

/** Classes de couleur (présentation seulement) : du plus doux au plus froid. */
export const MAP_BINS: Array<{ max: number; color: string; label: string }> = [
  { max: -20, color: "#FFFFFF", label: `${fmtTemp(-20)} ou moins` },
  { max: -18, color: "#CFE6F4", label: `${fmtTemp(-20)} à ${fmtTemp(-18)}` },
  { max: -16, color: "#9ECAE6", label: `${fmtTemp(-18)} à ${fmtTemp(-16)}` },
  { max: -14, color: "#5F9DC4", label: `${fmtTemp(-16)} à ${fmtTemp(-14)}` },
  { max: -12, color: "#3B6E91", label: `${fmtTemp(-14)} à ${fmtTemp(-12)}` },
  { max: Infinity, color: "#2C4A60", label: `plus doux que ${fmtTemp(-12)}` },
];

export const colorFor = (t: number) => (MAP_BINS.find((b) => t <= b.max) ?? MAP_BINS[MAP_BINS.length - 1]).color;

export function PalmaresMap({ rows, width = 720 }: { rows: PalmaresRow[]; width?: number }) {
  const pts = rows.filter((r): r is PalmaresRow & { lat: number; lon: number } => typeof r.lat === "number" && typeof r.lon === "number");
  if (pts.length < 2) return null;
  const lats = pts.map((p) => p.lat);
  const lons = pts.map((p) => p.lon);
  const [latMin, latMax, lonMin, lonMax] = [Math.min(...lats), Math.max(...lats), Math.min(...lons), Math.max(...lons)];
  const k = Math.cos((((latMin + latMax) / 2) * Math.PI) / 180);
  const pad = 14;
  const spanX = (lonMax - lonMin) * k || 1;
  const spanY = latMax - latMin || 1;
  const height = Math.round(((width - pad * 2) * spanY) / spanX + pad * 2);
  const x = (lon: number) => pad + ((lon - lonMin) * k * (width - pad * 2)) / spanX;
  const y = (lat: number) => pad + ((latMax - lat) * (height - pad * 2)) / spanY;
  // Les plus froids dessinés en dernier (au-dessus).
  const ordered = [...pts].sort((a, b) => b.janMinC - a.janMinC);
  const coldest = pts.reduce((a, b) => (b.janMinC < a.janMinC ? b : a));

  return (
    <figure className="pm-map">
      <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label={`Carte de ${pts.length} municipalités du palmarès, colorées selon leurs nuits de janvier`}>
        {ordered.map((p) => (
          <a key={p.code} href={`#${palmaresAnchor(p.code)}`}>
            <circle className="pm-dot" cx={x(p.lon).toFixed(1)} cy={y(p.lat).toFixed(1)} r={3.1} fill={colorFor(p.janMinC)} style={{ ["--d" as string]: Math.round(((latMax - p.lat) / spanY) * 1600) }}>
              <title>{`${p.name} : ${fmtTemp(p.janMinC)} (nuits de janvier)`}</title>
            </circle>
          </a>
        ))}
        <circle className="pm-coldest" cx={x(coldest.lon).toFixed(1)} cy={y(coldest.lat).toFixed(1)} r={9} fill="none" stroke="#FFFFFF" strokeWidth={1.2} aria-hidden="true" />
      </svg>
      <ul className="pm-legend" aria-label="Légende : nuits de janvier">
        {MAP_BINS.map((b) => (
          <li key={b.label}>
            <i style={{ background: b.color }} aria-hidden="true" />
            {b.label}
          </li>
        ))}
      </ul>
      <figcaption>Position de l’hôtel de ville de chaque municipalité classée. Couleur : moyenne des minimums quotidiens de janvier à sa station météo.</figcaption>
    </figure>
  );
}
