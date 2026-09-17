/* ==================================================================
   Magasin du studio de présence : presence.json, dans le dossier des
   données de gestion (shared/data/ sur le VPS, data/ en développement),
   à côté de gestion.json. Même mécanique : relecture sous verrou
   (mémoire + fichier .lock), écriture atomique (temporaire + rename),
   droits 600. Chemin imposable avec PRESENCE_FILE.

   Garde l'interrupteur « Publication automatique » (éteint par défaut),
   le journal et l'ancienne file (retirée). La file Facebook vit dans
   social-facebook.json (src/lib/social/store.ts). Les champs inconnus
   d'un ancien fichier sont conservés tels quels. Aucun jeton ici.
   ================================================================== */

import path from "node:path";
import { gestionDataDir, mutateJson, readJson } from "@/lib/gestion/store";
import type { AncienElement, PresenceData, PresenceLogEntry, PresenceSettings } from "./types";

export const presenceFile = () => process.env.PRESENCE_FILE || path.join(gestionDataDir(), "presence.json");

const LOG_MAX = 400;

const empty = (): PresenceData => ({ version: 1, settings: { autoPublish: false }, posts: [], log: [] });

export function normalizeSettings(raw: Partial<PresenceSettings> | undefined | null): PresenceSettings {
  return {
    ...(raw ?? {}),
    autoPublish: raw?.autoPublish === true,
  } as PresenceSettings;
}

const validPost = (p: unknown): p is AncienElement => !!p && typeof (p as AncienElement).id === "string" && typeof (p as AncienElement).status === "string";

export function normalizePresence(d: Partial<PresenceData> | null | undefined): PresenceData {
  return {
    ...(d ?? {}),
    version: 1,
    settings: normalizeSettings(d?.settings),
    posts: (Array.isArray(d?.posts) ? d.posts : []).filter(validPost),
    log: (Array.isArray(d?.log) ? d.log : []).slice(0, LOG_MAX),
  };
}

export async function readPresence(): Promise<PresenceData> {
  return normalizePresence(await readJson<Partial<PresenceData>>(presenceFile(), empty));
}

export function mutatePresence<T>(fn: (data: PresenceData) => { result: T; changed: boolean } | Promise<{ result: T; changed: boolean }>): Promise<T> {
  return mutateJson<PresenceData, T>(presenceFile(), empty, (d) => normalizePresence(d), fn);
}

export function addLog(data: PresenceData, entry: Omit<PresenceLogEntry, "at"> & { at?: string }): void {
  data.log.unshift({ at: entry.at ?? new Date().toISOString(), level: entry.level, message: entry.message, ...(entry.postId ? { postId: entry.postId } : {}) });
  if (data.log.length > LOG_MAX) data.log.length = LOG_MAX;
}

/** Interrupteur « Publication automatique » : jamais allumé par défaut. */
export async function setAutoPublish(on: boolean, by: string, now = new Date()): Promise<void> {
  await mutatePresence((d) => {
    const changed = d.settings.autoPublish !== on;
    d.settings.autoPublish = on;
    if (changed) {
      d.settings.updatedAt = now.toISOString();
      d.settings.updatedBy = by;
      addLog(d, { at: now.toISOString(), level: "info", message: `Publication automatique ${on ? "allumée" : "éteinte"} par ${by}.` });
    }
    return { result: null, changed };
  });
}
