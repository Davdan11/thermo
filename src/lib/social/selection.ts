/* ==================================================================
   Choix du format et du sujet : déterministe (mêmes données, même
   historique, même jour → même choix) et testable.
   - format : jamais deux fois le même de suite pour un même genre
     (publication, story) ; le format le moins récemment utilisé passe
     en premier ; la saison retire ce qui n'a pas de sens (grand froid
     l'été) ;
   - sujet : pas le même modèle, la même ville, le même compteur ni la
     même marque sur 60 jours (clés partagées entre formats et genres :
     le modèle d'un duel n'est pas repris en vedette le lendemain).
   Les publications refusées ne comptent pas.
   ================================================================== */

import { hashSeed } from "@/lib/presence/rotation";
import { joursEntre } from "./calendrier";
import { FORMATS, type FormatId, type Genre, type Statut, type Usage } from "./types";

export const FENETRE_JOURS = 60;
/** Taille du peloton de tête où l'on tire le sujet : de la variété sans sacrifier la qualité. */
export const PELOTON = 12;

/** Ce qui compte de l'historique : une publication passée ou prévue. */
export interface Trace {
  jour: string;
  genre: Genre;
  format: FormatId;
  cles: string[];
  statut: Statut;
}

/** Formats possibles pour une saison et un genre. Une story se lit en trois secondes : pas de duel (deux colonnes de chiffres). */
export function formatsPossibles(usage: Usage, genre: Genre): FormatId[] {
  return FORMATS.filter((f) => !(usage === "climatisation" && f === "grand-froid") && !(genre === "story" && f === "duel"));
}

const compte = (t: Trace) => t.statut !== "refusee";

/**
 * Formats dans l'ordre où les essayer ce jour-là : jamais le dernier format du même genre en premier
 * (il passe en dernier recours), puis le moins récemment utilisé ; à égalité, l'ordre de FORMATS.
 */
export function ordreDesFormats(historique: Trace[], jour: string, genre: Genre, usage: Usage): FormatId[] {
  const possibles = formatsPossibles(usage, genre);
  const passees = historique.filter((t) => compte(t) && t.genre === genre && t.jour <= jour).sort((a, b) => a.jour.localeCompare(b.jour));
  const dernier = passees[passees.length - 1]?.format ?? null;
  const derniereFois = new Map<FormatId, string>();
  for (const t of passees) derniereFois.set(t.format, t.jour);
  const rang = (f: FormatId) => (derniereFois.has(f) ? joursEntre(derniereFois.get(f)!, jour) : Number.POSITIVE_INFINITY);
  const tries = possibles.slice().sort((a, b) => rang(b) - rang(a) || possibles.indexOf(a) - possibles.indexOf(b));
  return dernier && tries.length > 1 ? [...tries.filter((f) => f !== dernier), dernier] : tries;
}

/** Clés utilisées à moins de `fenetre` jours de `jour` (avant ou après), avec le plus petit écart. */
export function clesRecentes(historique: Trace[], jour: string, fenetre = FENETRE_JOURS): Map<string, number> {
  const out = new Map<string, number>();
  for (const t of historique) {
    if (!compte(t)) continue;
    const ecart = Math.abs(joursEntre(t.jour, jour));
    if (ecart >= fenetre) continue;
    for (const k of t.cles) if (!out.has(k) || ecart < out.get(k)!) out.set(k, ecart);
  }
  return out;
}

export interface ChoixSujet<T> {
  candidats: T[];
  clesDe: (c: T) => string[];
  historique: Trace[];
  jour: string;
  graine: string;
  fenetre?: number;
  peloton?: number;
  /** Faut-il accepter un sujet déjà vu quand tout est pris ? (non pour les modèles et les villes). */
  repliSiToutPris?: boolean;
}

/**
 * Sujet du jour : tiré dans le peloton de tête des candidats libres (graine stable).
 * Tout est pris : le sujet utilisé le moins récemment si `repliSiToutPris`, sinon null.
 */
export function choisirSujet<T>(o: ChoixSujet<T>): T | null {
  if (o.candidats.length === 0) return null;
  const fenetre = o.fenetre ?? FENETRE_JOURS;
  const prises = clesRecentes(o.historique, o.jour, fenetre);
  const libres = o.candidats.filter((c) => !o.clesDe(c).some((k) => prises.has(k)));
  if (libres.length > 0) {
    const tete = libres.slice(0, Math.max(1, o.peloton ?? PELOTON));
    return tete[hashSeed(o.graine) % tete.length];
  }
  if (!o.repliSiToutPris) return null;
  const age = (c: T) => Math.min(...o.clesDe(c).map((k) => prises.get(k) ?? Number.POSITIVE_INFINITY));
  return o.candidats.slice().sort((a, b) => age(b) - age(a))[0] ?? null;
}

/** Les formats dont les sujets peuvent revenir (compteurs, marques, questionnaire) ; jamais un modèle ni une ville. */
export const REPLI_PERMIS: Record<FormatId, boolean> = {
  "thermopompe-semaine": false,
  duel: false,
  "grand-froid": false,
  chiffre: true,
  subventions: true,
  thermomatch: true,
};
