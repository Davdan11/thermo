/* ==================================================================
   Choix du format, du sujet et de la mise en page : déterministe
   (mêmes données, même historique, même jour → même choix).
   - format : jamais deux fois le même de suite pour un même genre
     (publication, story) ; le moins récemment utilisé d'abord ; la
     saison retire ce qui n'a pas de sens (grand froid l'été) ;
   - sujet : aucune clé (sujet, modèle, série, ville, paire de duel)
     reprise sur 365 jours, publications et stories confondues. Un
     format dont le bassin est épuisé cède sa place à un autre : on ne
     répète jamais ;
   - accroche et texte du visuel : jamais les mêmes sur 365 jours ;
   - mise en page : rotation dans les variantes du format.
   Les publications refusées ne comptent pas.
   ================================================================== */

import { hashSeed } from "@/lib/presence/rotation";
import { joursEntre } from "./calendrier";
import { FORMATS, type FormatId, type Genre, type Statut, type Usage } from "./types";

export const FENETRE_JOURS = 365;
/** Taille du peloton de tête où l'on tire le sujet : de la variété sans sacrifier la qualité. */
export const PELOTON = 12;

/** Ce que la sélection lit de l'historique : une publication passée ou prévue. */
export interface Trace {
  jour: string;
  genre: Genre;
  format: FormatId;
  cles: string[];
  statut: Statut;
  variante?: number;
  accroche?: string;
  texteVisuel?: string;
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

/** Clés utilisées à moins de `fenetre` jours de `jour` (avant ou après). */
export function clesRecentes(historique: Trace[], jour: string, fenetre = FENETRE_JOURS): Set<string> {
  const out = new Set<string>();
  for (const t of historique) {
    if (!compte(t) || Math.abs(joursEntre(t.jour, jour)) >= fenetre) continue;
    for (const k of t.cles) out.add(k);
  }
  return out;
}

/** Accroche ou texte comparés sans casse, sans espaces ni ponctuation. */
export function empreinte(texte: string): string {
  return texte
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "");
}

/** Accroches et textes de visuel déjà pris à moins de `fenetre` jours. */
export function textesRecents(historique: Trace[], jour: string, fenetre = FENETRE_JOURS): { accroches: Set<string>; visuels: Set<string> } {
  const accroches = new Set<string>();
  const visuels = new Set<string>();
  for (const t of historique) {
    if (!compte(t) || Math.abs(joursEntre(t.jour, jour)) >= fenetre) continue;
    if (t.accroche) accroches.add(empreinte(t.accroche));
    if (t.texteVisuel) visuels.add(empreinte(t.texteVisuel));
  }
  return { accroches, visuels };
}

export interface ChoixSujet<T> {
  candidats: T[];
  clesDe: (c: T) => string[];
  historique: Trace[];
  jour: string;
  graine: string;
  fenetre?: number;
  peloton?: number;
}

/**
 * Candidats libres (aucune clé vue sur la fenêtre), dans l'ordre où les essayer : le peloton de tête d'abord,
 * à partir d'un rang tiré de la graine, puis le reste. Vide : le bassin du format est épuisé.
 */
export function candidatsLibres<T>(o: ChoixSujet<T>): T[] {
  const prises = clesRecentes(o.historique, o.jour, o.fenetre ?? FENETRE_JOURS);
  const libres = o.candidats.filter((c) => !o.clesDe(c).some((k) => prises.has(k)));
  if (libres.length === 0) return [];
  const n = Math.min(libres.length, Math.max(1, o.peloton ?? PELOTON));
  const depart = hashSeed(o.graine) % n;
  const tete = libres.slice(0, n);
  return [...tete.slice(depart), ...tete.slice(0, depart), ...libres.slice(n)];
}

/** Premier candidat libre, ou null. */
export function choisirSujet<T>(o: ChoixSujet<T>): T | null {
  return candidatsLibres(o)[0] ?? null;
}

/** Mise en page suivante du format : celle qui suit la dernière utilisée (publications et stories confondues). */
export function varianteSuivante(historique: Trace[], format: FormatId, jour: string, nombre: number): number {
  if (nombre <= 1) return 0;
  const avant = historique.filter((t) => compte(t) && t.format === format && t.jour <= jour && typeof t.variante === "number").sort((a, b) => a.jour.localeCompare(b.jour));
  const derniere = avant[avant.length - 1]?.variante;
  return typeof derniere === "number" ? (derniere + 1) % nombre : 0;
}
