/* ==================================================================
   Dates du robot Facebook, à l'heure de Montréal : saison, usage mis
   en avant, identifiants de publication. Sans dépendance serveur.
   ================================================================== */

import { montrealDate } from "@/lib/presence/time";
import type { FormatId, Genre, Saison, Usage } from "./types";

export { montrealDate };

/** Saison au Québec pour un jour AAAA-MM-JJ : hiver (déc.–fév.), printemps (mars–mai), été (juin–août), automne (sept.–nov.). */
export function saisonDu(jour: string): Saison {
  const m = Number(jour.slice(5, 7));
  if (m === 12 || m <= 2) return "hiver";
  if (m <= 5) return "printemps";
  if (m <= 8) return "ete";
  return "automne";
}

/** L'été met la climatisation en avant ; le reste de l'année, le chauffage. */
export function usageDe(saison: Saison): Usage {
  return saison === "ete" ? "climatisation" : "chauffage";
}

/** Écart en jours entre deux jours AAAA-MM-JJ (b − a). */
export function joursEntre(a: string, b: string): number {
  return Math.round((Date.parse(`${b}T12:00:00Z`) - Date.parse(`${a}T12:00:00Z`)) / 86_400_000);
}

/** fb-20260917-duel-pub, fb-20260917-grand-froid-story. */
export function idPublication(jour: string, format: FormatId, genre: Genre, rang = 1): string {
  const base = `fb-${jour.replace(/-/g, "")}-${format}-${genre === "story" ? "story" : "pub"}`;
  return rang > 1 ? `${base}-${rang}` : base;
}

/** « 17 juillet 2025 » à partir de AAAA-MM-JJ, espaces insécables : la date ne se coupe jamais en fin de ligne. */
export function dateLongue(iso: string): string {
  return new Date(`${iso.slice(0, 10)}T12:00:00Z`).toLocaleDateString("fr-CA", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).replace(/ /g, "\u00a0");
}
