/* ==================================================================
   File des publications Facebook : social-facebook.json, dans le
   dossier des données de gestion (shared/data/ sur le VPS, data/ en
   développement). Même mécanique que les autres magasins
   (mutateJson : relecture sous verrou, écriture atomique, droits 600).
   Chemin imposable avec SOCIAL_FILE. Aucun jeton n'est écrit ici.

   Statuts : brouillon → en attente d'approbation → approuvée →
   publiée (ou échec d'envoi) ; refusée à tout moment avant l'envoi.
   Période d'approbation : pendant les 7 jours qui suivent la première
   mise en ligne réelle, chaque élément attend l'approbation du
   propriétaire ; ensuite, approbation d'office (il peut toujours en
   arrêter ou en modifier un avant son envoi), sauf si l'approbation
   reste obligatoire dans les réglages.
   ================================================================== */

import path from "node:path";
import { gestionDataDir, mutateJson, readJson } from "@/lib/gestion/store";
import { montrealDate } from "@/lib/presence/time";
import { extraireAccroche } from "./redaction";
import type { Trace } from "./selection";
import { FORMATS, PUBLICATION_ID_RE, STATUTS, type JournalSocial, type PublicationSociale, type ReglagesSociaux, type Rythme, type SocialData, type Statut } from "./types";

export const socialFile = () => process.env.SOCIAL_FILE || path.join(gestionDataDir(), "social-facebook.json");

export const PERIODE_APPROBATION_JOURS = 7;
export const JOURNAL_MAX = 400;
export const HEURE_RE = /^([01]\d|2[0-3]):([0-5]\d)$/;

export function reglagesParDefaut(): ReglagesSociaux {
  return {
    publication: { actif: true, tousLesJours: 2, heure: "10:00" },
    story: { actif: true, tousLesJours: 1, heure: "09:00" },
    joursAvance: 4,
    approbation: { depart: null, toujoursObligatoire: false },
  };
}

const entier = (v: unknown, min: number, max: number, defaut: number) => {
  const n = typeof v === "number" ? v : Number.parseInt(String(v ?? ""), 10);
  return Number.isFinite(n) ? Math.min(max, Math.max(min, Math.round(n))) : defaut;
};

function rythme(raw: Partial<Rythme> | undefined, defaut: Rythme): Rythme {
  return {
    actif: typeof raw?.actif === "boolean" ? raw.actif : defaut.actif,
    tousLesJours: entier(raw?.tousLesJours, 1, 14, defaut.tousLesJours),
    heure: typeof raw?.heure === "string" && HEURE_RE.test(raw.heure) ? raw.heure : defaut.heure,
  };
}

export function normaliserReglages(raw: Partial<ReglagesSociaux> | undefined | null): ReglagesSociaux {
  const d = reglagesParDefaut();
  const depart = raw?.approbation?.depart;
  return {
    publication: rythme(raw?.publication, d.publication),
    story: rythme(raw?.story, d.story),
    joursAvance: entier(raw?.joursAvance, 1, 14, d.joursAvance),
    approbation: {
      depart: typeof depart === "string" && !Number.isNaN(Date.parse(depart)) ? depart : null,
      toujoursObligatoire: raw?.approbation?.toujoursObligatoire === true,
    },
    ...(raw?.majLe ? { majLe: String(raw.majLe) } : {}),
    ...(raw?.majPar ? { majPar: String(raw.majPar) } : {}),
  };
}

const vide = (): SocialData => ({ version: 2, reglages: reglagesParDefaut(), publications: [], journal: [] });

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

export function normaliserSocial(d: (Partial<SocialData> & { version?: number }) | null | undefined): SocialData {
  const publications = (Array.isArray(d?.publications) ? d.publications : []).filter(publicationValide).map((p) => ({
    ...p,
    variante: typeof p.variante === "number" ? p.variante : 0,
    accroche: typeof p.accroche === "string" ? p.accroche : extraireAccroche(p.texte),
    texteVisuel: typeof p.texteVisuel === "string" ? p.texteVisuel : "",
    envoi: p.envoi && typeof p.envoi === "object" ? { ...p.envoi, tentatives: Number(p.envoi.tentatives) || 0 } : { tentatives: 0 },
  }));
  publications.sort((a, b) => a.prevueLe.localeCompare(b.prevueLe) || a.id.localeCompare(b.id));
  return {
    version: 2,
    reglages: normaliserReglages(d?.reglages),
    publications,
    journal: (Array.isArray(d?.journal) ? d.journal : []).slice(0, JOURNAL_MAX),
    ...(typeof d?.ancienneFileRetireeLe === "string" ? { ancienneFileRetireeLe: d.ancienneFileRetireeLe } : {}),
  };
}

export async function lireSocial(): Promise<SocialData> {
  return normaliserSocial(await readJson<Partial<SocialData>>(socialFile(), vide));
}

export function modifierSocial<T>(fn: (data: SocialData) => { result: T; changed: boolean } | Promise<{ result: T; changed: boolean }>): Promise<T> {
  return mutateJson<SocialData, T>(socialFile(), vide, (d) => normaliserSocial(d), fn);
}

export function ajouterJournal(d: SocialData, e: Omit<JournalSocial, "le"> & { le?: string }): void {
  d.journal.unshift({ le: e.le ?? new Date().toISOString(), niveau: e.niveau, message: e.message, ...(e.publicationId ? { publicationId: e.publicationId } : {}) });
  if (d.journal.length > JOURNAL_MAX) d.journal.length = JOURNAL_MAX;
}

/* ------------------------------------------------------------------
   Règles (pures)
   ------------------------------------------------------------------ */

/** Fin de la période d'approbation (ISO), ou null si elle n'a pas commencé. */
export function finPeriodeApprobation(reglages: ReglagesSociaux): string | null {
  const d = reglages.approbation.depart;
  return d ? new Date(Date.parse(d) + PERIODE_APPROBATION_JOURS * 86_400_000).toISOString() : null;
}

/** Vrai si chaque élément doit être approuvé à la main à ce moment. */
export function approbationRequise(reglages: ReglagesSociaux, maintenant: Date): boolean {
  if (reglages.approbation.toujoursObligatoire) return true;
  const fin = finPeriodeApprobation(reglages);
  return !fin || maintenant.getTime() < Date.parse(fin);
}

/** Statut d'une publication qui vient d'être générée. */
export function statutInitial(reglages: ReglagesSociaux, maintenant: Date): Statut {
  return approbationRequise(reglages, maintenant) ? "en_attente" : "approuvee";
}

/** Passages permis d'un statut à l'autre (le robot et le propriétaire passent par ici). */
export const TRANSITIONS: Record<Statut, Statut[]> = {
  brouillon: ["en_attente", "approuvee", "refusee"],
  en_attente: ["approuvee", "refusee", "brouillon"],
  approuvee: ["publiee", "echec", "refusee", "en_attente"],
  publiee: [],
  echec: ["approuvee", "refusee"],
  refusee: ["en_attente", "brouillon"],
};

export function peutPasser(de: Statut, vers: Statut): boolean {
  return TRANSITIONS[de].includes(vers);
}

/** Quelque chose est peut-être déjà parti vers Facebook : on ne régénère ni ne refuse à l'aveugle. */
export const dejaEnvoyee = (p: Pick<PublicationSociale, "envoi" | "statut">) => p.statut === "publiee" || !!(p.envoi.postId || p.envoi.aVerifier);

/** Historique réduit pour la sélection (format, sujet, jour, mise en page, accroche, visuel). */
export function traces(data: Pick<SocialData, "publications">): Trace[] {
  return data.publications.map((p) => ({ jour: montrealDate(new Date(p.prevueLe)), genre: p.genre, format: p.format, cles: p.faits.cles, statut: p.statut, variante: p.variante, accroche: p.accroche, texteVisuel: p.texteVisuel }));
}

/* ------------------------------------------------------------------
   Opérations
   ------------------------------------------------------------------ */

/**
 * Ajoute des publications générées. Ignorée : un identifiant déjà présent, ou un jour et un genre déjà occupés
 * (deux passages qui se chevauchent ne créent jamais deux publications pour la même case).
 */
export function ajouterPublications(nouvelles: PublicationSociale[]): Promise<{ ajoutees: string[]; ignorees: string[] }> {
  return modifierSocial((d) => {
    const ids = new Set(d.publications.map((p) => p.id));
    const cases = new Set(d.publications.map((p) => `${montrealDate(new Date(p.prevueLe))}|${p.genre}`));
    const ajoutees: string[] = [];
    const ignorees: string[] = [];
    for (const p of nouvelles) {
      const k = `${montrealDate(new Date(p.prevueLe))}|${p.genre}`;
      if (ids.has(p.id) || cases.has(k) || !publicationValide(p)) {
        ignorees.push(p.id);
        continue;
      }
      d.publications.push(p);
      ids.add(p.id);
      cases.add(k);
      ajoutees.push(p.id);
    }
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
    if (vers === "refusee" && p.envoi.aVerifier) return { result: { ok: false, erreur: "Un envoi est peut-être déjà parti : vérifiez la page Facebook avant de refuser." }, changed: false };
    const le = maintenant.toISOString();
    p.statut = vers;
    p.majLe = le;
    if (vers === "approuvee") {
      p.envoi.tentatives = 0;
      delete p.envoi.prochainEssai;
    }
    p.historique.push({ le, statut: vers, par, ...(note ? { note } : {}) });
    ajouterJournal(d, { le, niveau: "info", publicationId: id, message: `${vers === "approuvee" ? "Approuvée" : vers === "refusee" ? "Refusée" : `Statut : ${vers}`} par ${par}${note ? ` (${note})` : ""}.` });
    return { result: { ok: true }, changed: true };
  });
}

export const TEXTE_MAX = 2000;

/** Texte modifié par le propriétaire (avant l'envoi seulement). Le lien suivi doit rester : sinon la visite n'est plus comptée. */
export function modifierTexte(id: string, texte: string, par: string, maintenant = new Date()): Promise<ResultatStatut> {
  return modifierSocial<ResultatStatut>((d) => {
    const p = d.publications.find((x) => x.id === id);
    if (!p) return { result: { ok: false, erreur: "Publication introuvable." }, changed: false };
    if (dejaEnvoyee(p)) return { result: { ok: false, erreur: "Publication déjà envoyée : elle ne se modifie plus ici." }, changed: false };
    const propre = texte.replace(/\r\n/g, "\n").trim();
    if (!propre) return { result: { ok: false, erreur: "Le texte est vide." }, changed: false };
    if (propre.length > TEXTE_MAX) return { result: { ok: false, erreur: `Texte trop long (${TEXTE_MAX} caractères au plus).` }, changed: false };
    if (!propre.includes(p.lien)) return { result: { ok: false, erreur: "Le lien suivi de la publication doit rester dans le texte." }, changed: false };
    const le = maintenant.toISOString();
    p.texte = propre;
    p.accroche = extraireAccroche(propre);
    p.modifiee = true;
    p.majLe = le;
    p.historique.push({ le, statut: p.statut, par, note: "Texte modifié" });
    ajouterJournal(d, { le, niveau: "info", publicationId: id, message: `Texte modifié par ${par}.` });
    return { result: { ok: true }, changed: true };
  });
}
