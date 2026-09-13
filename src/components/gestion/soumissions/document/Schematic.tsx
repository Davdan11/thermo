/* ==================================================================
   Schéma d'installation (SVG, indicatif, pas à l'échelle) : coupe de
   la maison par niveau, unité extérieure selon son support, unités
   intérieures dans leur pièce et à leur niveau, parcours de chaque
   ligne de réfrigérant (intérieur ou extérieur) avec sa longueur,
   percements et drains. Tracé dessiné au défilement (CSS).
   ================================================================== */
import { floorShort, lengthText } from "@/lib/soumissions/present";
import { choiceText, indoorKind, isPumpDrain, mountingKind, routeOutside } from "@/lib/soumissions/choices";
import type { IndoorPlacement, Placement, SiteInfo } from "@/lib/soumissions/types";

const X0 = 120;
const X1 = 470;
const FLOOR_H = 92;
const BASE_H = 76;
const ROOF_H = 58;

const cut = (s: string, n: number) => (s.length > n ? `${s.slice(0, n - 1)}…` : s);

export function Schematic({ placement, site }: { placement: Placement; site: SiteInfo }) {
  const units = placement.indoor;
  const maxFloor = Math.max(1, ...units.map((u) => u.floor ?? 1));
  const above = Math.min(4, Math.max(1, site.floors ?? 1, maxFloor));
  const basement = site.basement || units.some((u) => u.floor === 0);
  const top = 20 + ROOF_H;
  const ground = top + above * FLOOR_H;
  const height = ground + (basement ? BASE_H : 0) + 64;
  // Choix libre ou ancienne clé : la forme du support est déduite du texte (choices.ts).
  const mounting = mountingKind(placement.outdoor.mounting) || "socle-sol";

  // Niveau → rectangle (y du plafond, y du plancher).
  const level = (f: number) => (f === 0 ? { ceil: ground, floor: ground + BASE_H } : { ceil: ground - (f - 0) * FLOOR_H, floor: ground - (f - 1) * FLOOR_H });

  // Unité extérieure.
  const ou = mounting === "toit" ? { x: 330, y: 20 + ROOF_H * 0.52 - 30 } : mounting === "support-mural" ? { x: X1 + 62, y: ground - FLOOR_H * 0.62 } : mounting === "support-sol" ? { x: X1 + 70, y: ground - 70 } : { x: X1 + 70, y: ground - 50 };
  const OU_W = 92;
  const OU_H = 44;

  // Unités intérieures : réparties par niveau, de la droite (mur de passage) vers la gauche.
  const byFloor = new Map<number, IndoorPlacement[]>();
  for (const u of units) {
    const f = Math.min(above, Math.max(0, u.floor ?? 1));
    byFloor.set(f, [...(byFloor.get(f) ?? []), u]);
  }
  const placed = [...byFloor.entries()].flatMap(([f, list]) =>
    list.map((u, i) => {
      const lv = level(f === 0 && !basement ? 1 : f);
      const slot = (X1 - X0) / (list.length + 1);
      const cx = X1 - slot * (i + 1);
      const t = indoorKind(u.type) || "murale";
      const shape =
        t === "console"
          ? { w: 58, h: 28, y: lv.floor - 34 }
          : t === "cassette" || t === "plafonnier"
            ? { w: 66, h: 12, y: lv.ceil + 4 }
            : t === "gainable" || t === "centrale"
              ? { w: 84, h: 22, y: lv.ceil + 6 }
              : { w: 76, h: 20, y: lv.ceil + 16 };
      return { u, cx, ...shape, lv };
    }),
  );

  const floors = [...(basement ? [0] : []), ...Array.from({ length: above }, (_, i) => i + 1)];
  const outX = mounting === "toit" ? ou.x + OU_W / 2 : ou.x;
  const outY = ou.y + OU_H / 2;
  const summary = `Schéma : unité extérieure (${placement.outdoor.mounting ? choiceText("mounting", placement.outdoor.mounting) : "support à préciser"}${placement.outdoor.location ? `, ${placement.outdoor.location}` : ""}) reliée à ${units.length} unité${units.length > 1 ? "s" : ""} intérieure${units.length > 1 ? "s" : ""}.`;

  return (
    <figure className="dv-schema">
      <svg viewBox={`0 0 720 ${height}`} role="img" aria-label={summary} className="dv-schema__svg">
        <defs>
          <pattern id="dv-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <line x1="0" y1="0" x2="0" y2="8" className="dv-s-hatch" />
          </pattern>
        </defs>

        {/* Sol */}
        <rect x="0" y={ground} width="720" height={height - ground} fill="url(#dv-hatch)" className="dv-s-soil" />
        <line x1="0" x2="720" y1={ground} y2={ground} className="dv-s-ground" />

        {/* Maison : toit, murs, niveaux */}
        <path d={`M${X0 - 14} ${top} L${(X0 + X1) / 2} 20 L${X1 + 14} ${top}`} className="dv-s-roof dv-draw" />
        <rect x={X0} y={top} width={X1 - X0} height={ground - top + (basement ? BASE_H : 0)} className="dv-s-house" />
        {floors.map((f) => {
          const lv = level(f);
          return (
            <g key={f}>
              {f !== 1 || basement ? <line x1={X0} x2={X1} y1={f === 0 ? ground : lv.floor} y2={f === 0 ? ground : lv.floor} className="dv-s-slab" /> : null}
              <text x={X0 - 12} y={(lv.ceil + lv.floor) / 2 + 4} textAnchor="end" className="dv-s-level">{floorShort(f)}</text>
            </g>
          );
        })}

        {/* Lignes de réfrigérant */}
        {placed.map(({ u, cx, w, y, h }) => {
          const uy = y + h / 2;
          const outside = routeOutside(u.lineRoute);
          const railX = outside ? X1 + 18 : X1 - 14;
          const d = mounting === "toit" ? `M${outX} ${ou.y + OU_H} L${outX} ${top + 6} L${railX} ${top + 6} L${railX} ${uy} L${cx + w / 2} ${uy}` : `M${outX} ${outY} L${railX} ${outY} L${railX} ${uy} L${cx + w / 2} ${uy}`;
          const pen = outside ? { x: X1, y: uy } : { x: X1, y: outY };
          const len = u.lineLength !== null ? lengthText(u.lineLength, placement.lengthUnit) : "";
          return (
            <g key={`l-${u.id}`}>
              <path d={d} className="dv-s-line dv-draw" />
              <circle cx={pen.x} cy={pen.y} r="4.5" className="dv-s-pen" />
              {len ? (
                <text x={cx + w / 2 + 10} y={uy - 7} textAnchor="start" className="dv-s-len">{len}</text>
              ) : null}
            </g>
          );
        })}

        {/* Unités intérieures */}
        {placed.map(({ u, cx, w, h, y, lv }) => (
          <g key={`u-${u.id}`} className="dv-s-unit">
            <rect x={cx - w / 2} y={y} width={w} height={h} rx="5" className="dv-s-indoor" />
            <text x={cx} y={y + h / 2 + 4} textAnchor="middle" className="dv-s-unit-n">{cut(u.label || "Unité", 12)}</text>
            <text x={cx} y={Math.min(lv.floor - 8, y + h + 16)} textAnchor="middle" className="dv-s-room">{cut(u.room || choiceText("indoorType", u.type), 18)}</text>
            {u.drain ? (
              <g transform={`translate(${cx - w / 2 - 12} ${y + h})`}>
                <path d="M0 -8 C 3 -3, 5 0, 5 2.5 A5 5 0 0 1 -5 2.5 C -5 0, -3 -3, 0 -8 Z" className={isPumpDrain(u.drain) ? "dv-s-drop dv-s-drop--pump" : "dv-s-drop"} />
              </g>
            ) : null}
          </g>
        ))}

        {/* Unité extérieure et son support */}
        <g className="dv-s-out">
          {mounting === "support-mural" ? <path d={`M${X1} ${ou.y + OU_H + 6} L${ou.x + OU_W - 8} ${ou.y + OU_H + 6} M${X1} ${ou.y + OU_H + 26} L${ou.x + 18} ${ou.y + OU_H + 6}`} className="dv-s-bracket" /> : null}
          {mounting === "support-sol" ? <path d={`M${ou.x + 10} ${ou.y + OU_H} L${ou.x + 10} ${ground} M${ou.x + OU_W - 10} ${ou.y + OU_H} L${ou.x + OU_W - 10} ${ground}`} className="dv-s-bracket" /> : null}
          {mounting === "socle-sol" || !placement.outdoor.mounting ? <rect x={ou.x - 6} y={ground - 6} width={OU_W + 12} height="6" className="dv-s-pad" /> : null}
          <rect x={ou.x} y={ou.y} width={OU_W} height={OU_H} rx="5" className="dv-s-outdoor" />
          <circle cx={ou.x + OU_W - 26} cy={ou.y + OU_H / 2} r="14" className="dv-s-fan" />
          <path d={`M${ou.x + OU_W - 26} ${ou.y + OU_H / 2 - 10} v20 M${ou.x + OU_W - 36} ${ou.y + OU_H / 2} h20`} className="dv-s-fan-x" />
          <text x={ou.x + OU_W / 2} y={Math.min(height - 30, (mounting === "toit" ? ou.y - 10 : ground + 22))} textAnchor="middle" className="dv-s-out-l">{cut(placement.outdoor.location || "Unité extérieure", 26)}</text>
          {placement.outdoor.mounting ? <text x={ou.x + OU_W / 2} y={Math.min(height - 14, mounting === "toit" ? ou.y - 26 + 32 : ground + 38)} textAnchor="middle" className="dv-s-out-m">{cut(choiceText("mounting", placement.outdoor.mounting), 30)}</text> : null}
        </g>
      </svg>
      <figcaption className="dv-schema__legend">
        <span><i className="dv-lg dv-lg--line" aria-hidden /> Ligne de réfrigérant</span>
        <span><i className="dv-lg dv-lg--pen" aria-hidden /> Percement du mur</span>
        <span><i className="dv-lg dv-lg--drop" aria-hidden /> Drain par gravité</span>
        <span><i className="dv-lg dv-lg--pump" aria-hidden /> Pompe à condensat</span>
        <span className="dv-schema__note">Schéma indicatif, pas à l’échelle. Les emplacements exacts sont décrits unité par unité.</span>
      </figcaption>
    </figure>
  );
}
