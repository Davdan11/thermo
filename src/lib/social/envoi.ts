/* ==================================================================
   Envoi à Facebook et passage planifié (/api/presence/tick, toutes les
   15 minutes).

   Garde-fous :
   - envoi RÉEL seulement si NODE_ENV=production, META_PAGE_ID et
     META_PAGE_TOKEN présents et interrupteur « Publication
     automatique » allumé (réglages du studio) ; sinon mode essai : on
     garde ce qui serait parti, sans aucun appel réseau ;
   - un élément part seulement s'il est approuvé ; pendant les 7 jours
     qui suivent la première mise en ligne (ou tant que l'approbation
     reste obligatoire), un élément en attente ne part jamais ; ensuite,
     il est approuvé d'office à son heure ;
   - aucun doublon : verrou par publication (10 min) pris sous le verrou
     du fichier, identifiants Facebook enregistrés à chaque étape, étape
     qui publie jamais rejouée à l'aveugle (vérification sur Facebook) ;
   - reprise limitée : 4 essais espacés (5, 15, 60 min), puis « échec »
     avec un message lisible en français ; une erreur permanente (jeton,
     permission) passe tout de suite en échec ;
   - un élément en retard de plus de 36 h ne part pas tout seul.
   ================================================================== */

import { randomUUID } from "node:crypto";
import { montrealDate, zonedToUtc } from "@/lib/presence/time";
import { addDays } from "@/lib/presence/time";
import { configFacebook, ErreurFacebook, publierPublication, publierStory, requetesEssai, type EtatEnvoi, type FetchLike } from "./facebook";
import { genererPublication, traceDe } from "./generer";
import { redacteurIa } from "./ia";
import { ajouterJournal, ajouterPublications, approbationRequise, lireSocial, modifierSocial, traces } from "./store";
import type { Genre, PublicationSociale, SocialData } from "./types";

type Env = Record<string, string | undefined>;

export const MAX_TENTATIVES = 4;
export const ATTENTES_MINUTES = [5, 15, 60];
export const VERROU_MS = 10 * 60_000;
export const RETARD_MAX_MS = 36 * 3600_000;
export const PAR_PASSAGE = 3;

export interface ModeEnvoi {
  reel: boolean;
  /** Pourquoi on reste en mode essai (vide si envoi réel). */
  raisons: string[];
}

export function modeEnvoi(interrupteur: boolean, env: Env = process.env): ModeEnvoi {
  const c = configFacebook(env);
  const raisons: string[] = [];
  if (env.NODE_ENV !== "production") raisons.push("Serveur de développement ou de test : aucun envoi réel.");
  if (!interrupteur) raisons.push("Interrupteur « Publication automatique » éteint.");
  const manquantes = [...(c.pageId ? [] : ["META_PAGE_ID"]), ...(c.jeton ? [] : ["META_PAGE_TOKEN"])];
  if (manquantes.length) raisons.push(`Connexion Facebook incomplète : ${manquantes.join(", ")}.`);
  return { reel: raisons.length === 0, raisons };
}

export interface DepsPublier {
  maintenant?: () => Date;
  env?: Env;
  fetch?: FetchLike;
  sleep?: (ms: number) => Promise<void>;
  delais?: number[];
  /** Interrupteur « Publication automatique » ; par défaut lu dans les réglages du studio. */
  interrupteur?: boolean;
  /** Rendu du visuel ; par défaut visuels/rendu.tsx. */
  rendre?: (p: PublicationSociale) => Promise<Buffer>;
}

export type IssueEnvoi =
  | { kind: "essai"; raisons: string[] }
  | { kind: "publiee"; postId: string; lien?: string }
  | { kind: "reessai"; erreur: string; prochainEssai: string }
  | { kind: "echec"; erreur: string }
  | { kind: "ignoree"; raison: string };

async function interrupteurDu(deps: DepsPublier): Promise<boolean> {
  if (typeof deps.interrupteur === "boolean") return deps.interrupteur;
  const { readPresence } = await import("@/lib/presence/store");
  return (await readPresence()).settings.autoPublish === true;
}

async function rendreParDefaut(p: PublicationSociale): Promise<Buffer> {
  const { rendreVisuel } = await import("./visuels/rendu");
  return rendreVisuel(p.faits, p.genre, p.variante);
}

const versionDe = (p: PublicationSociale) => `${p.majLe}|${p.texte.length}|${p.statut}`;

/** Vrai si l'élément peut partir maintenant du point de vue de l'approbation. */
export function approuvePourEnvoi(p: PublicationSociale, d: Pick<SocialData, "reglages">, maintenant: Date, declencheur: "passage" | "manuel"): boolean {
  if (p.statut === "approuvee") return true;
  return declencheur === "passage" && p.statut === "en_attente" && !approbationRequise(d.reglages, maintenant);
}

export async function publier(id: string, declencheur: "passage" | "manuel", deps: DepsPublier = {}): Promise<IssueEnvoi> {
  const maintenant = deps.maintenant?.() ?? new Date();
  const env = deps.env ?? process.env;
  const le = maintenant.toISOString();
  const data = await lireSocial();
  const p = data.publications.find((x) => x.id === id);
  if (!p) return { kind: "ignoree", raison: "Publication introuvable." };
  if (p.statut === "publiee" || p.envoi.postId) return { kind: "ignoree", raison: "Déjà publiée." };
  if (!approuvePourEnvoi(p, data, maintenant, declencheur)) return { kind: "ignoree", raison: declencheur === "manuel" ? "Seul un élément approuvé peut partir : approuvez-le d’abord." : "En attente d’approbation : rien ne part avant votre accord." };

  const mode = modeEnvoi(await interrupteurDu(deps), env);
  const config = configFacebook(env);

  /* ---- Mode essai : aucune requête ---- */
  if (!mode.reel) {
    const requetes = requetesEssai(p.genre, p.texte, config);
    await modifierSocial((d) => {
      const x = d.publications.find((y) => y.id === id);
      if (!x) return { result: null, changed: false };
      const version = versionDe(x);
      if (declencheur === "passage" && x.envoi.essai?.version === version) return { result: null, changed: false };
      x.envoi.essai = { le, version, raisons: mode.raisons, requetes };
      ajouterJournal(d, { le, niveau: "essai", publicationId: id, message: `Mode essai (${declencheur === "passage" ? "passage planifié" : "publier maintenant"}) : rien n’est parti. ${mode.raisons.join(" ")}` });
      return { result: null, changed: true };
    });
    return { kind: "essai", raisons: mode.raisons };
  }

  /* ---- Verrou (sous le verrou du fichier : deux passages qui se chevauchent ne l'obtiennent jamais tous les deux) ---- */
  const verrou = randomUUID();
  const refus = await modifierSocial<string | null>((d) => {
    const x = d.publications.find((y) => y.id === id);
    if (!x || x.statut === "publiee" || x.envoi.postId) return { result: "Publication introuvable ou déjà publiée.", changed: false };
    if (!approuvePourEnvoi(x, d, maintenant, declencheur)) return { result: "Plus approuvée : envoi annulé.", changed: false };
    if (x.envoi.verrou && Date.parse(x.envoi.verrou.jusqua) > maintenant.getTime()) return { result: "Un envoi est déjà en cours pour cet élément.", changed: false };
    if (declencheur === "passage" && x.envoi.prochainEssai && Date.parse(x.envoi.prochainEssai) > maintenant.getTime()) return { result: "Nouvel essai prévu plus tard.", changed: false };
    if (x.statut === "en_attente") {
      x.statut = "approuvee";
      x.historique.push({ le, statut: "approuvee", par: "robot", note: "Approuvée d’office : période d’approbation terminée" });
      ajouterJournal(d, { le, niveau: "info", publicationId: id, message: "Approuvée d’office (période d’approbation terminée)." });
    }
    x.envoi.verrou = { id: verrou, jusqua: new Date(maintenant.getTime() + VERROU_MS).toISOString() };
    x.envoi.tentatives += 1;
    return { result: null, changed: true };
  });
  if (refus) return { kind: "ignoree", raison: refus };

  const enregistrer = async (etat: EtatEnvoi) => {
    await modifierSocial((d) => {
      const x = d.publications.find((y) => y.id === id);
      if (!x || x.envoi.verrou?.id !== verrou) return { result: null, changed: false };
      Object.assign(x.envoi, etat);
      if (!etat.aVerifier) delete x.envoi.aVerifier;
      return { result: null, changed: true };
    });
  };

  const courant = (await lireSocial()).publications.find((x) => x.id === id) as PublicationSociale;
  let etat: EtatEnvoi = { photoId: courant.envoi.photoId, postId: courant.envoi.postId, lien: courant.envoi.lien, aVerifier: courant.envoi.aVerifier };
  try {
    const png = await (deps.rendre ?? rendreParDefaut)(courant);
    const entree = { genre: courant.genre, png, legende: courant.texte, marqueur: `utm_content=${id}` };
    const depsEnvoi = { config, enregistrer, fetch: deps.fetch ?? ((u: string, i: RequestInit) => fetch(u, i)), sleep: deps.sleep ?? ((ms: number) => new Promise<void>((r) => setTimeout(r, ms))), delais: deps.delais };
    etat = courant.genre === "story" ? await publierStory(entree, etat, depsEnvoi) : await publierPublication(entree, etat, depsEnvoi);
  } catch (err) {
    const e = err instanceof ErreurFacebook ? err : new ErreurFacebook("Erreur inattendue pendant l’envoi : nouvel essai automatique.", { nature: "passagere" });
    if (!(err instanceof ErreurFacebook)) console.error("[social] envoi :", err instanceof Error ? err.message : err);
    return modifierSocial<IssueEnvoi>((d) => {
      const x = d.publications.find((y) => y.id === id);
      if (!x) return { result: { kind: "echec", erreur: e.message }, changed: false };
      delete x.envoi.verrou;
      x.envoi.derniereErreur = e.message;
      x.envoi.derniereErreurLe = le;
      const final = e.nature === "permanente" || x.envoi.tentatives >= MAX_TENTATIVES;
      if (final) {
        x.statut = "echec";
        delete x.envoi.prochainEssai;
        x.historique.push({ le, statut: "echec", par: "robot", note: e.message });
        ajouterJournal(d, { le, niveau: "erreur", publicationId: id, message: `Échec : ${e.message}` });
        return { result: { kind: "echec", erreur: e.message }, changed: true };
      }
      const attente = ATTENTES_MINUTES[Math.min(x.envoi.tentatives - 1, ATTENTES_MINUTES.length - 1)];
      x.envoi.prochainEssai = new Date(maintenant.getTime() + attente * 60_000).toISOString();
      ajouterJournal(d, { le, niveau: "erreur", publicationId: id, message: `Essai ${x.envoi.tentatives} raté, nouvel essai dans ${attente} min : ${e.message}` });
      return { result: { kind: "reessai", erreur: e.message, prochainEssai: x.envoi.prochainEssai }, changed: true };
    });
  }

  return modifierSocial<IssueEnvoi>((d) => {
    const x = d.publications.find((y) => y.id === id);
    const postId = etat.postId as string;
    if (!x) return { result: { kind: "publiee", postId, lien: etat.lien }, changed: false };
    Object.assign(x.envoi, etat);
    delete x.envoi.verrou;
    delete x.envoi.prochainEssai;
    delete x.envoi.derniereErreur;
    delete x.envoi.aVerifier;
    x.envoi.publieeLe = le;
    x.statut = "publiee";
    x.majLe = le;
    x.historique.push({ le, statut: "publiee", par: declencheur === "passage" ? "robot" : "publier maintenant", note: `Facebook : ${postId}` });
    ajouterJournal(d, { le, niveau: "ok", publicationId: id, message: `${x.genre === "story" ? "Story publiée" : "Publiée"} sur Facebook.` });
    if (!d.reglages.approbation.depart) {
      d.reglages.approbation.depart = le;
      ajouterJournal(d, { le, niveau: "info", message: "Première mise en ligne : les 7 jours d’approbation commencent." });
    }
    return { result: { kind: "publiee", postId, lien: etat.lien }, changed: true };
  });
}

/* ------------------------------------------------------------------
   Planification de la file
   ------------------------------------------------------------------ */

/** Jour AAAA-MM-JJ → numéro de jour depuis 1970 (rythme « un jour sur N » stable). */
const numeroDuJour = (jour: string) => Math.round(Date.parse(`${jour}T12:00:00Z`) / 86_400_000);

export interface Case {
  jour: string;
  genre: Genre;
  prevueLe: Date;
}

/** Cases à remplir sur les prochains jours : rythme des réglages, heure pas encore passée, aucune publication existante. */
export function casesLibres(d: Pick<SocialData, "reglages" | "publications">, maintenant: Date): Case[] {
  const aujourdhui = montrealDate(maintenant);
  const prises = new Set(d.publications.map((p) => `${montrealDate(new Date(p.prevueLe))}|${p.genre}`));
  const out: Case[] = [];
  for (let i = 0; i < d.reglages.joursAvance; i++) {
    const jour = addDays(aujourdhui, i);
    for (const genre of ["story", "publication"] as const) {
      const r = d.reglages[genre];
      if (!r.actif || numeroDuJour(jour) % r.tousLesJours !== 0 || prises.has(`${jour}|${genre}`)) continue;
      const prevueLe = zonedToUtc(jour, r.heure);
      if (prevueLe.getTime() <= maintenant.getTime() + 10 * 60_000) continue;
      out.push({ jour, genre, prevueLe });
    }
  }
  return out;
}

export interface DepsPlanifier {
  maintenant?: Date;
  catalogue?: import("./catalogue").CatalogueSocial;
  ia?: import("./ia").RedacteurIa | null;
}

/** Remplit la file (aucune case écrasée). Renvoie les identifiants créés et les cases sans sujet. */
export async function planifier(deps: DepsPlanifier = {}): Promise<{ creees: string[]; sansSujet: string[] }> {
  const maintenant = deps.maintenant ?? new Date();
  const data = await lireSocial();
  const cases = casesLibres(data, maintenant);
  if (!cases.length) return { creees: [], sansSujet: [] };
  const catalogue = deps.catalogue ?? (await import("./catalogue")).catalogueSocial();
  const ia = deps.ia === undefined ? redacteurIa() : deps.ia;
  const historique = traces(data);
  const idsPris = new Set(data.publications.map((p) => p.id));
  const nouvelles: PublicationSociale[] = [];
  const sansSujet: string[] = [];
  for (const c of cases) {
    const p = await genererPublication({ genre: c.genre, prevueLe: c.prevueLe, maintenant, historique, catalogue, reglages: data.reglages, ia, idsPris });
    if (!p) {
      sansSujet.push(`${c.jour} (${c.genre})`);
      continue;
    }
    nouvelles.push(p);
    historique.push(traceDe(p));
    idsPris.add(p.id);
  }
  const { ajoutees } = await ajouterPublications(nouvelles);
  if (ajoutees.length || sansSujet.length) {
    await modifierSocial((d) => {
      if (ajoutees.length) ajouterJournal(d, { le: maintenant.toISOString(), niveau: "info", message: `${ajoutees.length} élément${ajoutees.length > 1 ? "s" : ""} préparé${ajoutees.length > 1 ? "s" : ""} dans la file.` });
      if (sansSujet.length) ajouterJournal(d, { le: maintenant.toISOString(), niveau: "erreur", message: `Aucun sujet neuf pour : ${sansSujet.join(", ")}.` });
      return { result: null, changed: true };
    });
  }
  return { creees: ajoutees, sansSujet };
}

/* ------------------------------------------------------------------
   Ancienne file du studio (presence.json)
   ------------------------------------------------------------------ */

/**
 * Les éléments de l'ancienne file (séries modèle, froid, LogisVert…) ne doivent jamais partir par surprise :
 * tout ce qui n'est ni publié ni déjà rejeté passe « rejeté », avec la raison et une ligne au journal.
 */
export async function retirerAncienneFile(maintenant = new Date()): Promise<number> {
  const { mutatePresence, addLog } = await import("@/lib/presence/store");
  const le = maintenant.toISOString();
  const n = await mutatePresence((pd) => {
    let k = 0;
    for (const p of pd.posts) {
      if (p.status === "publiee" || p.status === "rejetee") continue;
      p.status = "rejetee";
      p.rejectedAt = le;
      p.rejectedBy = "robot Facebook";
      p.rejectReason = "Retirée : l’ancienne file est remplacée par le nouveau robot Facebook. Rien n’a été envoyé.";
      p.updatedAt = le;
      addLog(pd, { at: le, level: "info", postId: p.id, message: `Retirée de l’ancienne file (${p.id}) : remplacée par le nouveau robot Facebook. Rien n’a été envoyé.` });
      k++;
    }
    return { result: k, changed: k > 0 };
  });
  await modifierSocial((d) => {
    if (d.ancienneFileRetireeLe && n === 0) return { result: null, changed: false };
    d.ancienneFileRetireeLe = d.ancienneFileRetireeLe ?? le;
    if (n) ajouterJournal(d, { le, niveau: "info", message: `Ancienne file du studio : ${n} élément${n > 1 ? "s" : ""} retiré${n > 1 ? "s" : ""} (jamais envoyé${n > 1 ? "s" : ""}).` });
    return { result: null, changed: true };
  });
  return n;
}

/* ------------------------------------------------------------------
   Passage planifié
   ------------------------------------------------------------------ */

export interface RapportPassage {
  reel: boolean;
  raisons: string[];
  retirees: number;
  creees: string[];
  sansSujet: string[];
  dues: number;
  resultats: Array<{ id: string; issue: IssueEnvoi }>;
  enRetard: string[];
}

export async function passage(deps: DepsPublier & { planifier?: DepsPlanifier | false } = {}): Promise<RapportPassage> {
  const maintenant = deps.maintenant?.() ?? new Date();
  const retirees = await retirerAncienneFile(maintenant);
  const plan = deps.planifier === false ? { creees: [], sansSujet: [] } : await planifier({ maintenant, ...(deps.planifier ?? {}) });
  const data = await lireSocial();
  const mode = modeEnvoi(await interrupteurDu(deps), deps.env ?? process.env);
  const t = maintenant.getTime();
  const enRetard: string[] = [];
  const dues = data.publications.filter((p) => {
    if (p.statut !== "approuvee" && p.statut !== "en_attente") return false;
    if (Date.parse(p.prevueLe) > t) return false;
    if (t - Date.parse(p.prevueLe) > RETARD_MAX_MS) {
      enRetard.push(p.id);
      return false;
    }
    if (!approuvePourEnvoi(p, data, maintenant, "passage")) return false;
    if (p.envoi.prochainEssai && Date.parse(p.envoi.prochainEssai) > t) return false;
    if (p.envoi.verrou && Date.parse(p.envoi.verrou.jusqua) > t) return false;
    if (!mode.reel && p.envoi.essai?.version === versionDe(p)) return false;
    return true;
  });
  const resultats: RapportPassage["resultats"] = [];
  for (const p of dues.slice(0, PAR_PASSAGE)) resultats.push({ id: p.id, issue: await publier(p.id, "passage", { ...deps, maintenant: () => maintenant }) });
  return { reel: mode.reel, raisons: mode.raisons, retirees, creees: plan.creees, sansSujet: plan.sansSujet, dues: dues.length, resultats, enRetard };
}
