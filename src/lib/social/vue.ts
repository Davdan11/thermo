/* Vues du studio (tons des statuts, regroupements, compteurs). Fonctions pures. */
import type { ChipTone } from "@/components/gestion/kit/Chip";
import { montrealDate } from "@/lib/presence/time";
import type { Genre, PublicationSociale, Statut } from "./types";

export const STATUT_TON: Record<Statut, ChipTone> = {
  brouillon: "muted",
  en_attente: "warn",
  approuvee: "blue",
  publiee: "ok",
  echec: "bad",
  refusee: "muted",
};

export const GENRE_LIBELLE: Record<Genre, string> = { publication: "Publication", story: "Story" };

export const RETARD_MS = 36 * 3600_000;

/** Élément encore à venir (ou dû) qui n'est pas parti. */
export const aVenir = (p: PublicationSociale) => p.statut === "en_attente" || p.statut === "approuvee" || p.statut === "brouillon";

/** Jour passé depuis plus de 36 h sans envoi : ne partira pas tout seul. */
export const enRetard = (p: PublicationSociale, maintenant: Date) => aVenir(p) && Date.parse(p.prevueLe) < maintenant.getTime() - RETARD_MS;

export function compteurs(publications: PublicationSociale[], maintenant: Date) {
  const mois = montrealDate(maintenant).slice(0, 7);
  return {
    enAttente: publications.filter((p) => p.statut === "en_attente" && !enRetard(p, maintenant)).length,
    approuvees: publications.filter((p) => p.statut === "approuvee" && !enRetard(p, maintenant)).length,
    publieesMois: publications.filter((p) => p.statut === "publiee" && p.envoi.publieeLe && montrealDate(new Date(p.envoi.publieeLe)).slice(0, 7) === mois).length,
    echecs: publications.filter((p) => p.statut === "echec").length,
  };
}
