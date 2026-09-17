/* ==================================================================
   Opérations du studio sur la file Facebook (serveur). Les Server
   Actions de /gestion/presence vérifient la session (requireAdmin)
   puis appellent ces fonctions. Chaque écriture passe par
   modifierSocial (verrou du fichier).
   ================================================================== */

import { setAutoPublish } from "@/lib/presence/store";
import { publier, planifier, type IssueEnvoi } from "./envoi";
import { genererPublication } from "./generer";
import { ajouterJournal, changerStatut, dejaEnvoyee, HEURE_RE, lireSocial, modifierSocial, modifierTexte, normaliserReglages, traces } from "./store";
import { FORMAT_LIBELLES, type PublicationSociale, type ReglagesSociaux } from "./types";

export type Resultat = { ok: true; message: string } | { ok: false; error: string };
const ok = (message: string): Resultat => ({ ok: true, message });
const fail = (error: string): Resultat => ({ ok: false, error });

export async function preparer(par: string): Promise<Resultat> {
  const { creees, sansSujet } = await planifier();
  if (!creees.length && !sansSujet.length) return ok("La file est déjà prête pour les prochains jours.");
  return ok(`${creees.length} élément${creees.length > 1 ? "s" : ""} préparé${creees.length > 1 ? "s" : ""} par ${par}${sansSujet.length ? `. Aucun sujet neuf pour : ${sansSujet.join(", ")}` : ""}.`);
}

export async function approuver(id: string, par: string): Promise<Resultat> {
  const r = await changerStatut(id, "approuvee", par);
  return r.ok ? ok("Approuvée : elle partira à son heure si l’interrupteur est allumé.") : fail(r.erreur);
}

export async function refuser(id: string, raison: string, par: string): Promise<Resultat> {
  const r = await changerStatut(id, "refusee", par, raison.trim().slice(0, 300) || undefined);
  return r.ok ? ok("Refusée : elle ne partira pas.") : fail(r.erreur);
}

export async function remettre(id: string, par: string): Promise<Resultat> {
  const p = (await lireSocial()).publications.find((x) => x.id === id);
  if (!p) return fail("Publication introuvable.");
  const r = await changerStatut(id, p.statut === "echec" ? "approuvee" : "en_attente", par, p.statut === "echec" ? "Nouvel essai demandé" : "Remise dans la file");
  return r.ok ? ok(p.statut === "echec" ? "Nouvel essai au prochain passage (15 minutes au plus)." : "Remise dans la file, à approuver.") : fail(r.erreur);
}

export async function enregistrerTexte(id: string, texte: string, par: string): Promise<Resultat> {
  const r = await modifierTexte(id, texte, par);
  return r.ok ? ok("Texte enregistré.") : fail(r.erreur);
}

/** Nouveau sujet (même case, même genre ; même format si possible), texte et visuel neufs. Jamais après un envoi. */
export async function regenerer(id: string, par: string, maintenant = new Date()): Promise<Resultat> {
  const data = await lireSocial();
  const p = data.publications.find((x) => x.id === id);
  if (!p) return fail("Publication introuvable.");
  if (dejaEnvoyee(p)) return fail("Déjà envoyée à Facebook : impossible de la régénérer.");
  const { catalogueSocial } = await import("./catalogue");
  const { redacteurIa } = await import("./ia");
  const catalogue = catalogueSocial();
  const historique = traces({ publications: data.publications.filter((x) => x.id !== id) });
  const base = { genre: p.genre, prevueLe: new Date(p.prevueLe), maintenant, historique, catalogue, reglages: data.reglages, ia: redacteurIa(), eviter: new Set(p.faits.cles), id };
  const neuve = (await genererPublication({ ...base, format: p.format })) ?? (await genererPublication(base));
  if (!neuve) return fail("Aucun sujet neuf disponible pour cette case.");
  return modifierSocial<Resultat>((d) => {
    const i = d.publications.findIndex((x) => x.id === id);
    if (i < 0) return { result: fail("Publication introuvable."), changed: false };
    const ancienne = d.publications[i];
    if (dejaEnvoyee(ancienne)) return { result: fail("Déjà envoyée à Facebook : impossible de la régénérer."), changed: false };
    const le = maintenant.toISOString();
    const remplacee: PublicationSociale = { ...neuve, creeLe: ancienne.creeLe, historique: [...ancienne.historique, { le, statut: neuve.statut, par, note: `Régénérée : ${neuve.faits.sujet}` }] };
    d.publications[i] = remplacee;
    ajouterJournal(d, { le, niveau: "info", publicationId: id, message: `Régénérée par ${par} (${FORMAT_LIBELLES[neuve.format]}) : ${neuve.faits.sujet}.` });
    return { result: ok(`Nouveau sujet : ${neuve.faits.sujet}.`), changed: true };
  });
}

export async function publierMaintenant(id: string): Promise<Resultat & { issue?: IssueEnvoi }> {
  const p = (await lireSocial()).publications.find((x) => x.id === id);
  if (!p) return fail("Publication introuvable.");
  if (p.statut !== "approuvee") return fail("« Publier maintenant » n’est offert que pour un élément approuvé.");
  const issue = await publier(id, "manuel");
  switch (issue.kind) {
    case "essai":
      return { ok: true, message: `Mode essai : rien n’est parti vers Facebook. ${issue.raisons.join(" ")}`, issue };
    case "publiee":
      return { ok: true, message: "Publiée sur Facebook.", issue };
    case "reessai":
      return { ok: false, error: `${issue.erreur} Nouvel essai automatique prévu.`, issue };
    case "echec":
      return { ok: false, error: issue.erreur, issue };
    case "ignoree":
      return { ok: false, error: issue.raison, issue };
  }
}

export interface EntreeReglages {
  interrupteur: boolean;
  publication: { actif: boolean; tousLesJours: number; heure: string };
  story: { actif: boolean; tousLesJours: number; heure: string };
  joursAvance: number;
  /** AAAA-MM-JJ (minuit à Montréal) ou vide : la date sera celle de la première mise en ligne. */
  depart: string;
  toujoursObligatoire: boolean;
}

export async function enregistrerReglages(e: EntreeReglages, par: string, maintenant = new Date()): Promise<Resultat> {
  if (!HEURE_RE.test(e.publication.heure) || !HEURE_RE.test(e.story.heure)) return fail("Heure invalide (HH:MM).");
  if (e.depart && !/^\d{4}-\d{2}-\d{2}$/.test(e.depart)) return fail("Date de départ invalide.");
  const { zonedToUtc } = await import("@/lib/presence/time");
  await setAutoPublish(e.interrupteur, par, maintenant);
  return modifierSocial<Resultat>((d) => {
    const avant = d.reglages;
    const brut: Partial<ReglagesSociaux> = {
      publication: e.publication,
      story: e.story,
      joursAvance: e.joursAvance,
      approbation: { depart: e.depart ? zonedToUtc(e.depart, "00:00").toISOString() : null, toujoursObligatoire: e.toujoursObligatoire },
      majLe: maintenant.toISOString(),
      majPar: par,
    };
    d.reglages = normaliserReglages(brut);
    const le = maintenant.toISOString();
    const changements = [
      avant.publication.tousLesJours !== d.reglages.publication.tousLesJours || avant.publication.heure !== d.reglages.publication.heure || avant.publication.actif !== d.reglages.publication.actif ? "rythme des publications" : "",
      avant.story.tousLesJours !== d.reglages.story.tousLesJours || avant.story.heure !== d.reglages.story.heure || avant.story.actif !== d.reglages.story.actif ? "rythme des stories" : "",
      avant.approbation.depart !== d.reglages.approbation.depart ? "date de départ de l’approbation" : "",
      avant.approbation.toujoursObligatoire !== d.reglages.approbation.toujoursObligatoire ? "approbation obligatoire" : "",
    ].filter(Boolean);
    ajouterJournal(d, { le, niveau: "info", message: `Réglages enregistrés par ${par}${changements.length ? ` (${changements.join(", ")})` : ""} ; publication automatique ${e.interrupteur ? "allumée" : "éteinte"}.` });
    return { result: ok("Réglages enregistrés. Les éléments déjà dans la file gardent leur heure ; les prochains suivent le nouveau rythme."), changed: true };
  });
}
