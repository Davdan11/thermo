"use client";

/* Aperçu du rayon sans tuiles de carte : les 55 villes du site placées autour du code postal de base
   (projection simple, distances à vol d'oiseau). Orange : dans le rayon ; bleu : par une région cochée. */
import { useMemo } from "react";
import { distanceKm } from "@/lib/gestion/distance";

export interface CityDTO {
  slug: string;
  name: string;
  region: string | null;
  lat: number;
  lon: number;
}

export function RadiusPreview({ base, radius, regions, cities }: { base: { lat: number; lon: number; city: string } | null; radius: number; regions: string[]; cities: CityDTO[] }) {
  const data = useMemo(() => {
    if (!base) return null;
    const halfH = Math.max(radius * 1.35, 30);
    const halfW = halfH * 1.6;
    const kx = 111.32 * Math.cos((base.lat * Math.PI) / 180);
    const all = cities.map((c) => {
      const km = distanceKm(base, c);
      const x = 50 + (((c.lon - base.lon) * kx) / halfW) * 50;
      const y = 50 - (((c.lat - base.lat) * 110.57) / halfH) * 50;
      const inside = km <= radius;
      const byRegion = !inside && c.region !== null && regions.includes(c.region);
      return { ...c, km, x, y, inside, byRegion };
    });
    const inside = all.filter((c) => c.inside).sort((a, b) => a.km - b.km);
    const byRegion = all.filter((c) => c.byRegion).sort((a, b) => a.km - b.km);
    const onMap = all.filter((c) => c.x > 2 && c.x < 98 && c.y > 3 && c.y < 97);
    return { inside, byRegion, onMap, ringW: (radius / halfW) * 100, ringH: (radius / halfH) * 100 };
  }, [base, radius, regions, cities]);

  if (!base || !data) {
    return <p className="g-empty">Entrez le code postal de base : les villes couvertes s’affichent ici.</p>;
  }
  const labels = new Set(data.inside.filter((c) => c.km > 3).slice(0, 6).map((c) => c.slug));
  return (
    <div className="g-radius">
      <div className="g-radius__map" role="img" aria-label={`Rayon de ${radius} km autour de ${base.city} : ${data.inside.length} villes du site couvertes.`}>
        <span className="g-radius__ring" style={{ width: `${data.ringW}%`, height: `${data.ringH}%` }} />
        {data.onMap.map((c) => (
          <span key={c.slug}>
            <span className={`g-radius__pin ${c.inside ? "g-radius__pin--in" : c.byRegion ? "g-radius__pin--region" : ""}`} style={{ left: `${c.x}%`, top: `${c.y}%` }} />
            {labels.has(c.slug) ? <span className="g-radius__label" style={{ left: `${c.x}%`, top: `${c.y}%` }}>{c.name}</span> : null}
          </span>
        ))}
        <span className="g-radius__base" title={base.city} />
      </div>
      <p className="g-hint" style={{ margin: 0 }}>
        <strong style={{ color: "var(--g-ink)" }}>{data.inside.length}</strong> ville{data.inside.length > 1 ? "s" : ""} du site dans le rayon
        {data.byRegion.length ? <> · <strong style={{ color: "var(--g-blue)" }}>{data.byRegion.length}</strong> de plus par les régions cochées</> : null}
      </p>
      <div className="g-citylist">
        {data.inside.map((c) => (
          <span key={c.slug} className="g-tag">{c.name} · {Math.round(c.km)} km</span>
        ))}
        {data.byRegion.map((c) => (
          <span key={c.slug} className="g-tag" style={{ color: "var(--g-blue)" }}>{c.name} · région</span>
        ))}
      </div>
    </div>
  );
}
