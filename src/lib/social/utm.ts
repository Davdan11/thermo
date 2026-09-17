/* ==================================================================
   Liens suivis des publications Facebook :
     utm_source=facebook & utm_medium=social & utm_campaign=<format>
     & utm_content=<identifiant de la publication>
   utm_content permet de compter les visites de CHAQUE publication
   (étape suivante : lecture des visites arrivées avec ces paramètres).
   L'ancre (#chiffres) reste à la fin. Sans dépendance serveur.
   ================================================================== */

import { siteUrl } from "@/lib/presence/utm";
import type { FormatId } from "./types";

export const UTM_SOURCE = "facebook";
export const UTM_MEDIUM = "social";

export function lienSuivi(chemin: string, format: FormatId, publicationId: string, base = siteUrl()): string {
  const u = new URL(chemin.startsWith("/") ? chemin : `/${chemin}`, `${base}/`);
  u.searchParams.set("utm_source", UTM_SOURCE);
  u.searchParams.set("utm_medium", UTM_MEDIUM);
  u.searchParams.set("utm_campaign", format);
  u.searchParams.set("utm_content", publicationId);
  return u.toString();
}

export interface VisiteFacebook {
  format: string;
  publicationId: string | null;
}

/** Lit les paramètres d'une adresse visitée : null si la visite ne vient pas d'une publication Facebook du robot. */
export function lireUtm(url: string | URL): VisiteFacebook | null {
  let u: URL;
  try {
    u = typeof url === "string" ? new URL(url, siteUrl()) : url;
  } catch {
    return null;
  }
  const p = u.searchParams;
  if (p.get("utm_source") !== UTM_SOURCE || p.get("utm_medium") !== UTM_MEDIUM) return null;
  const format = p.get("utm_campaign");
  if (!format) return null;
  return { format, publicationId: p.get("utm_content") };
}

/** « thermopompesavendre.ca/produit/… » : adresse lisible, pour les visuels (une story n'a pas de lien cliquable). */
export function adresseLisible(chemin: string, base = siteUrl()): string {
  const u = new URL(chemin.startsWith("/") ? chemin : `/${chemin}`, `${base}/`);
  return `${u.host}${u.pathname === "/" ? "" : u.pathname}`;
}
