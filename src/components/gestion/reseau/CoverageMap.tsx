/* ==================================================================
   Chantier R — carte de la demande et de la couverture. SVG maison,
   composant serveur, sans tuiles ni dépendance.
     - fond : les municipalités du répertoire du dépôt (points réels) ;
     - anneaux : rayon de chaque installateur actif, couleur selon son
       état (disponible, saturé, bloqué) ;
     - cercles : demandes par zone, aire proportionnelle au nombre ;
       les zones sans installateur respirent doucement.
   Projection équirectangulaire corrigée par cos(latitude) : assez
   juste pour un rayon en kilomètres à l'échelle du Québec habité.
   Animations en CSS (reseau.css), coupées par prefers-reduced-motion.
   ================================================================== */

import type { CSSProperties } from "react";
import { zoneAnchor } from "@/lib/gestion/reseau/recrutement";
import type { Bounds, MapInstaller } from "@/lib/gestion/reseau/views";
import { GAP_STATUSES, ZONE_STATUS_LABELS, type Zone } from "@/lib/gestion/reseau/zones";

const W = 1000;
const STATE_LABEL: Record<MapInstaller["state"], string> = { disponible: "disponible", sature: "saturé", bloque: "bloqué" };
const v = (n: number) => Math.round(n * 10) / 10;

export function CoverageMap({ zones, installers, background, bounds, label }: { zones: Zone[]; installers: MapInstaller[]; background: Array<{ lat: number; lon: number }>; bounds: Bounds; label: string }) {
  const kx = Math.cos((((bounds.latMin + bounds.latMax) / 2) * Math.PI) / 180);
  const spanX = (bounds.lonMax - bounds.lonMin) * kx;
  const spanY = bounds.latMax - bounds.latMin;
  const H = Math.round(Math.min(900, Math.max(380, (W * spanY) / spanX)));
  const s = Math.min(W / spanX, H / spanY);
  const ox = (W - spanX * s) / 2;
  const oy = (H - spanY * s) / 2;
  const X = (lon: number) => v(ox + (lon - bounds.lonMin) * kx * s);
  const Y = (lat: number) => v(oy + (bounds.latMax - lat) * s);
  const kmPx = (km: number) => v((km / 111.32) * s);
  const inside = (lat: number, lon: number) => lat >= bounds.latMin && lat <= bounds.latMax && lon >= bounds.lonMin && lon <= bounds.lonMax;
  const dense = background.length > 600 && spanY > 2;

  const placed = zones.filter((z) => z.point && inside(z.point.lat, z.point.lon));
  const maxD = Math.max(1, ...placed.map((z) => z.demands));
  const radius = (n: number) => v(6 + 18 * Math.sqrt(n / maxD));
  const drawOrder = [...placed].sort((a, b) => b.demands - a.demands);
  const labelled = new Set(drawOrder.slice(0, 7).map((z) => z.key));
  const offMap = zones.length - placed.length;

  return (
    <figure className="rs-map">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={label} className="rs-map__svg">
        <defs>
          <radialGradient id="rs-glow" cx="50%" cy="45%" r="75%">
            <stop offset="0%" stopColor="var(--g-paper)" />
            <stop offset="100%" stopColor="var(--g-cream)" />
          </radialGradient>
        </defs>
        <rect width={W} height={H} rx="22" fill="url(#rs-glow)" />
        <g className="rs-map__dots" aria-hidden>
          {background.map((p, i) => (inside(p.lat, p.lon) ? <circle key={i} cx={X(p.lon)} cy={Y(p.lat)} r={dense ? 1.7 : 2.6} /> : null))}
        </g>
        <g className="rs-map__cover">
          {installers.map((i, k) =>
            inside(i.lat, i.lon) ? (
              <g key={i.id} className={`rs-inst is-${i.state}`} style={{ "--d": `${120 + k * 70}ms` } as CSSProperties}>
                <circle className="rs-inst__ring" cx={X(i.lon)} cy={Y(i.lat)} r={kmPx(i.radiusKm)} />
                <rect className="rs-inst__pin" x={X(i.lon) - 5} y={Y(i.lat) - 5} width="10" height="10" rx="2" transform={`rotate(45 ${X(i.lon)} ${Y(i.lat)})`} />
                <title>{`${i.company} · rayon ${i.radiusKm} km · ${STATE_LABEL[i.state]}${i.reason ? ` (${i.reason})` : ""}`}</title>
              </g>
            ) : null,
          )}
        </g>
        <g className="rs-map__zones">
          {drawOrder.map((z, k) => {
            const cx = X(z.point!.lon);
            const cy = Y(z.point!.lat);
            const r = radius(z.demands);
            return (
              <a key={z.key} href={`#${zoneAnchor(z.key)}`} className={`rs-zone is-${z.status}`} style={{ "--d": `${300 + Math.min(k, 24) * 45}ms` } as CSSProperties}>
                {GAP_STATUSES.has(z.status) ? <circle className="rs-zone__pulse" cx={cx} cy={cy} r={r} /> : null}
                <circle className="rs-zone__dot" cx={cx} cy={cy} r={r} />
                <title>{`${z.label}${z.mode === "rta" ? ` · ${z.place}` : ""} · ${z.demands} demande${z.demands > 1 ? "s" : ""} · ${ZONE_STATUS_LABELS[z.status].toLowerCase()}${z.approximate ? " · position approximative" : ""}`}</title>
              </a>
            );
          })}
        </g>
        <g className="rs-map__labels" aria-hidden>
          {drawOrder
            .filter((z) => labelled.has(z.key))
            .map((z) => (
              <text key={z.key} x={X(z.point!.lon) + radius(z.demands) + 6} y={Y(z.point!.lat) + 4}>
                {z.mode === "rta" ? z.label : z.place}
              </text>
            ))}
        </g>
      </svg>
      <figcaption className="rs-legend">
        <span>
          <i className="rs-key rs-key--gap" /> Sans installateur
        </span>
        <span>
          <i className="rs-key rs-key--sat" /> Saturée
        </span>
        <span>
          <i className="rs-key rs-key--ok" /> Couverte
        </span>
        <span>
          <i className="rs-key rs-key--ring" /> Rayon d’un installateur
        </span>
        <span className="rs-legend__note">Aire du cercle : nombre de demandes.{offMap ? ` ${offMap} zone${offMap > 1 ? "s" : ""} hors du cadre (voir la liste).` : ""}</span>
      </figcaption>
    </figure>
  );
}
