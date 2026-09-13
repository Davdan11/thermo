/* Palmarès du froid : export CSV (pure). Virgule comme séparateur, point décimal, BOM pour Excel. */
import type { Palmares } from "./palmares";

const COLUMNS = [
  "rang",
  "ex_aequo",
  "municipalite",
  "code_geographique",
  "region",
  "temperature_conception_c",
  "valeur_generale_de_la_table",
  "nuits_janvier_c",
  "moyenne_janvier_c",
  "jours_sous_moins_20_c",
  "station",
  "id_climatologique",
  "periode_normales",
  "distance_station_km",
  "modeles_chauffent_encore_selon_fabricant",
  "dont_toute_puissance_nominale_a_moins_15_c",
  "page",
] as const;

const cell = (v: string | number | boolean | null | undefined): string => {
  if (v === null || v === undefined) return "";
  const s = typeof v === "boolean" ? (v ? "oui" : "non") : String(v);
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

export function palmaresCsv(p: Palmares, siteUrl: string): string {
  const base = siteUrl.replace(/\/$/, "");
  const lines = [COLUMNS.join(",")];
  for (const r of p.rows) {
    lines.push(
      [
        r.rank,
        r.tied,
        r.name,
        r.code,
        r.region,
        r.designT,
        r.designGeneric,
        r.janMinC,
        r.janMeanC,
        r.daysBelow20,
        r.stationName,
        r.stationId,
        r.period,
        r.stationKm,
        r.modelsHeat,
        r.modelsHeatFull,
        r.href ? `${base}${r.href}` : "",
      ]
        .map(cell)
        .join(","),
    );
  }
  return `﻿${lines.join("\r\n")}\r\n`;
}
