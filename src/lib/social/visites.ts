/* ==================================================================
   Suivi des publications Facebook, sans traceur tiers.

   - Visites : quand un visiteur arrive sur le site par un lien suivi du
     robot (utm_source=facebook, utm_medium=social, utm_content=<id>),
     le navigateur envoie UNE fois par session un signal anonyme à
     /api/presence/visite (identifiant de la publication seulement :
     ni adresse IP gardée, ni témoin, ni page, ni appareil). Le serveur
     compte par publication et par jour dans social-visites.json.
   - Demandes : le site enregistre déjà l'arrivée (utm) avec chaque
     formulaire envoyé (journal des leads, src/lib/attribution) ; on y
     compte les demandes dont utm_content est l'identifiant.
   ================================================================== */

import path from "node:path";
import { gestionDataDir, mutateJson, readJson } from "@/lib/gestion/store";
import { montrealDate } from "@/lib/presence/time";
import { PUBLICATION_ID_RE } from "./types";

export const visitesFile = () => process.env.SOCIAL_VISITES_FILE || path.join(gestionDataDir(), "social-visites.json");

/** Au plus ce nombre de visites comptées par publication et par jour (signal public : on borne les abus). */
export const PLAFOND_JOUR = 5000;

export interface VisitesData {
  version: 1;
  parPublication: Record<string, { total: number; jours: Record<string, number> }>;
}

const vide = (): VisitesData => ({ version: 1, parPublication: {} });
const normaliser = (d: Partial<VisitesData> | null): VisitesData => ({ version: 1, parPublication: d?.parPublication && typeof d.parPublication === "object" ? d.parPublication : {} });

export async function lireVisites(): Promise<VisitesData> {
  return normaliser(await readJson<Partial<VisitesData>>(visitesFile(), vide));
}

/** Compte une visite ; `existe` vérifie que la publication est bien dans la file. */
export async function compterVisite(id: string, existe: (id: string) => Promise<boolean>, maintenant = new Date()): Promise<boolean> {
  if (!PUBLICATION_ID_RE.test(id) || !(await existe(id))) return false;
  const jour = montrealDate(maintenant);
  return mutateJson<VisitesData, boolean>(visitesFile(), vide, normaliser, (d) => {
    const v = (d.parPublication[id] ??= { total: 0, jours: {} });
    if ((v.jours[jour] ?? 0) >= PLAFOND_JOUR) return { result: false, changed: false };
    v.jours[jour] = (v.jours[jour] ?? 0) + 1;
    v.total += 1;
    return { result: true, changed: true };
  });
}

export interface SuiviPublication {
  visites: number;
  demandes: number;
  /** Demandes par type (soumission, rendez-vous, thermomatch…). */
  parType: Record<string, number>;
}

interface EntreeJournal {
  id: string;
  kind: string;
  outcome?: unknown;
  attribution?: { utm?: { utm_source?: string; utm_content?: string } };
}

/** Visites et demandes par publication. */
export async function suiviParPublication(): Promise<Map<string, SuiviPublication>> {
  const out = new Map<string, SuiviPublication>();
  const get = (id: string) => {
    let s = out.get(id);
    if (!s) out.set(id, (s = { visites: 0, demandes: 0, parType: {} }));
    return s;
  };
  for (const [id, v] of Object.entries((await lireVisites()).parPublication)) get(id).visites = v.total;
  try {
    const { readJournalEntries } = await import("@/lib/gestion/statistiques");
    const vues = new Set<string>();
    for (const e of (await readJournalEntries()) as EntreeJournal[]) {
      if (e.outcome || vues.has(e.id)) continue;
      vues.add(e.id);
      const utm = e.attribution?.utm;
      if (utm?.utm_source !== "facebook" || !utm.utm_content || !PUBLICATION_ID_RE.test(utm.utm_content)) continue;
      const s = get(utm.utm_content);
      s.demandes += 1;
      s.parType[e.kind] = (s.parType[e.kind] ?? 0) + 1;
    }
  } catch (err) {
    console.warn("[social] lecture du journal des demandes impossible :", err instanceof Error ? err.message : err);
  }
  return out;
}
