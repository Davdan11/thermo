/* ==================================================================
   Magasin du studio de présence : presence.json, dans le dossier des
   données de gestion (shared/data/ sur le VPS, data/ en développement),
   à côté de gestion.json. Même mécanique : relecture sous verrou
   (mémoire + fichier .lock), écriture atomique (temporaire + rename),
   droits 600. Chemin imposable avec PRESENCE_FILE.
   Aucun jeton n'est jamais écrit ici : les jetons Meta restent dans
   shared/.env.
   ================================================================== */

import path from "node:path";
import { gestionDataDir, mutateJson, readJson } from "@/lib/gestion/store";
import { normalizeSettings } from "./series";
import { POST_ID_RE, SERIES, STATUSES, type PresenceData, type PresenceLogEntry, type Post } from "./types";

export const presenceFile = () => process.env.PRESENCE_FILE || path.join(gestionDataDir(), "presence.json");

const LOG_MAX = 400;

const empty = (): PresenceData => ({ version: 1, settings: normalizeSettings(null), approvals: {}, posts: [], log: [] });

function validPost(p: unknown): p is Post {
  const x = p as Partial<Post> | null;
  return (
    !!x &&
    typeof x.id === "string" &&
    POST_ID_RE.test(x.id) &&
    typeof x.series === "string" &&
    (SERIES as readonly string[]).includes(x.series) &&
    typeof x.status === "string" &&
    (STATUSES as readonly string[]).includes(x.status) &&
    typeof x.date === "string" &&
    typeof x.scheduledAt === "string" &&
    Array.isArray(x.slides)
  );
}

export function normalizePresence(d: Partial<PresenceData> | null | undefined): PresenceData {
  const approvals: PresenceData["approvals"] = {};
  for (const id of SERIES) {
    const a = d?.approvals?.[id];
    if (a && typeof a.at === "string" && typeof a.postId === "string") approvals[id] = { at: a.at, by: String(a.by ?? ""), postId: a.postId };
  }
  const posts = (Array.isArray(d?.posts) ? d.posts : []).filter(validPost).map((p) => ({ ...p, publish: p.publish ?? { attempts: 0 } }));
  posts.sort((a, b) => a.scheduledAt.localeCompare(b.scheduledAt) || a.id.localeCompare(b.id));
  return {
    version: 1,
    settings: normalizeSettings(d?.settings),
    approvals,
    posts,
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
