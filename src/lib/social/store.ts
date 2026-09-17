/* ==================================================================
   File des publications Facebook : social-facebook.json, dans le
   dossier des données de gestion (shared/data/ sur le VPS, data/ en
   développement). Même mécanique que les autres magasins
   (mutateJson : relecture sous verrou, écriture atomique, droits 600).
   Chemin imposable avec SOCIAL_FILE. Aucun jeton n'est écrit ici.

   Statuts : brouillon → en attente d'approbation → approuvée →
   publiée ; refusée à tout moment avant la publication.
   Période d'approbation : pendant les 7 jours qui suivent la première
   publication créée, tout passe par l'approbation du propriétaire ;
   ensuite, les nouvelles publications sont approuvées d'office (il
   peut toujours en arrêter ou en modifier une avant son envoi).
   ================================================================== */

import path from "node:path";
import { gestionDataDir, mutateJson, readJson } from "@/lib/gestion/store";
import { montrealDate } from "@/lib/presence/time";
import { FORMATS, PUBLICATION_ID_RE, STATUTS, type PublicationSociale, type SocialData, type Statut } from "./types";
import type { Trace } from "./selection";

export const socialFile = () => process.env.SOCIAL_FILE || path.join(gestionDataDir(), "social-facebook.json");

export const PERIODE_APPROBATION_JOURS = 7;

const vide = (): SocialData => ({ version: 1, demarreLe: null, publications: [] });

function publicationValide(p: unknown): p is PublicationSociale {
  const x = p as Partial<PublicationSociale> | null;
  return (
    !!x &&
    typeof x.id === "string" &&
    PUBLICATION_ID_RE.test(x.id) &&
    (x.genre === "publication" || x.genre === "story") &&
    typeof x.format === "string" &&
    (FORMATS as readonly string[]).includes(x.format) &&
    typeof x.statut === "string" &&
    (STATUTS as readonly string[]).includes(x.statut) &&
    typeof x.prevueLe === "string" &&
    typeof x.texte === "string" &&
    !!x.faits &&
    Array.isArray(x.historique)
  );
}

export function normaliserSocial(d: Partial<SocialData> | null | undefined): SocialData {
  const publications = (Array.isArray(d?.publications) ? d.publications : []).filter(publicationValide);
  publications.sort((a, b) => a.prevueLe.localeCompare(b.prevueLe) || a.id.localeCompare(b.id));
  return { version: 1, demarreLe: typeof d?.demarreLe === "string" ? d.demarreLe : null, publications };
}

export async function lireSocial(): Promise<SocialData> {
  return normaliserSocial(await readJson<Partial<SocialData>>(socialFile(), vide));
}

export function modifierSocial<T>(fn: (data: SocialData) => { result: T; changed: boolean } | Promise<{ result: T; changed: boolean }>): Promise<T> {
  return mutateJson<SocialData, T>(socialFile(), vide, (d) => normaliserSocial(d), fn);
}

/* ------------------------------------------------------------------
   Règles (pures)
   ------------------------------------------------------------------ */

/** Vrai pendant les 7 jours qui suivent le démarrage (ou avant tout démarrage). */
export function enPeriodeApprobation(demarreLe: string | null, maintenant: Date): boolean {
  if (!demarreLe) return true;
  return maintenant.getTime() - Date.parse(demarreLe) < PERIODE_APPROBATION_JOURS * 86_400_000;
}

/** Statut d'une publication qui vient d'être générée. */
export function statutInitial(demarreLe: string | null, maintenant: Date): Statut {
  return enPeriodeApprobation(demarreLe, maintenant) ? "en_attente" : "approuvee";
}

/** Passages permis d'un statut à l'autre (le robot et le propriétaire passent par ici). */
export const TRANSITIONS: Record<Statut, Statut[]> = {
  brouillon: ["en_attente", "approuvee", "refusee"],
  en_attente: ["approuvee", "refusee", "brouillon"],
  approuvee: ["publiee", "refusee", "en_attente"],
  publiee: [],
  refusee: ["en_attente", "brouillon"],
};

export function peutPasser(de: Statut, vers: Statut): boolean {
  return TRANSITIONS[de].includes(vers);
}

/** Historique réduit pour la sélection (format, sujet, jour). */
export function traces(data: Pick<SocialData, "publications">): Trace[] {
  return data.publications.map((p) => ({ jour: montrealDate(new Date(p.prevueLe)), genre: p.genre, format: p.format, cles: p.faits.cles, statut: p.statut }));
}

/* ------------------------------------------------------------------
   Opérations
   ------------------------------------------------------------------ */

/** Ajoute des publications générées ; le démarrage est noté à la première. Un identifiant déjà présent est ignoré. */
export function ajouterPublications(nouvelles: PublicationSociale[], maintenant = new Date()): Promise<{ ajoutees: string[]; ignorees: string[] }> {
  return modifierSocial((d) => {
    const ids = new Set(d.publications.map((p) => p.id));
    const ajoutees: string[] = [];
    const ignorees: string[] = [];
    for (const p of nouvelles) {
      if (ids.has(p.id) || !publicationValide(p)) {
        ignorees.push(p.id);
        continue;
      }
      d.publications.push(p);
      ids.add(p.id);
      ajoutees.push(p.id);
    }
    if (ajoutees.length && !d.demarreLe) d.demarreLe = maintenant.toISOString();
    return { result: { ajoutees, ignorees }, changed: ajoutees.length > 0 };
  });
}

export type ResultatStatut = { ok: true } | { ok: false; erreur: string };

/** Change le statut d'une publication et l'inscrit à l'historique. */
export function changerStatut(id: string, vers: Statut, par: string, note?: string, maintenant = new Date()): Promise<ResultatStatut> {
  return modifierSocial<ResultatStatut>((d) => {
    const p = d.publications.find((x) => x.id === id);
    if (!p) return { result: { ok: false, erreur: "Publication introuvable." }, changed: false };
    if (!peutPasser(p.statut, vers)) return { result: { ok: false, erreur: `Passage impossible : ${p.statut} → ${vers}.` }, changed: false };
    const le = maintenant.toISOString();
    p.statut = vers;
    p.majLe = le;
    p.historique.push({ le, statut: vers, par, ...(note ? { note } : {}) });
    return { result: { ok: true }, changed: true };
  });
}

/** Texte modifié par le propriétaire (avant l'envoi seulement). Le lien suivi doit rester : sinon la visite n'est plus comptée. */
export function modifierTexte(id: string, texte: string, par: string, maintenant = new Date()): Promise<ResultatStatut> {
  return modifierSocial<ResultatStatut>((d) => {
    const p = d.publications.find((x) => x.id === id);
    if (!p) return { result: { ok: false, erreur: "Publication introuvable." }, changed: false };
    if (p.statut === "publiee") return { result: { ok: false, erreur: "Publication déjà envoyée : elle ne se modifie plus ici." }, changed: false };
    const propre = texte.trim();
    if (!propre) return { result: { ok: false, erreur: "Le texte est vide." }, changed: false };
    if (!propre.includes(p.lien)) return { result: { ok: false, erreur: "Le lien suivi de la publication doit rester dans le texte." }, changed: false };
    const le = maintenant.toISOString();
    p.texte = propre;
    p.modifiee = true;
    p.majLe = le;
    p.historique.push({ le, statut: p.statut, par, note: "Texte modifié" });
    return { result: { ok: true }, changed: true };
  });
}
