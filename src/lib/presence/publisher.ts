/* ==================================================================
   Publication d'une publication planifiée, et passage planifié (tick).

   Garde-fous :
   - publication RÉELLE seulement si NODE_ENV=production, jetons Meta
     présents et interrupteur « Publication automatique » activé ;
     sinon mode essai : on enregistre ce qui serait envoyé, sans aucun
     appel réseau ;
   - verrou par publication (10 min) : un seul passage à la fois ;
   - identifiants distants enregistrés à chaque étape : un nouvel essai
     reprend là où le précédent s'est arrêté, jamais de doublon ;
   - nouveaux essais espacés (5, 15, 60 min), puis « échec » avec un
     message lisible en français ; une erreur permanente (jeton,
     permission) passe tout de suite en échec ;
   - le passage planifié ne publie pas une publication en retard de
     plus de 36 h (serveur arrêté, par exemple) : elle attend une
     nouvelle date.
   ================================================================== */

import { randomUUID } from "node:crypto";
import { composeCaption } from "./captions";
import { metaEnv, publishMode } from "./config";
import { dryRunRequests, MetaError, publishFacebook, publishInstagram, type FetchLike, type PublishInput } from "./meta";
import { signedVisualSet } from "./signing";
import { addLog, mutatePresence, readPresence } from "./store";
import type { DryRequest, FacebookState, InstagramState, Network, Post, PresenceData } from "./types";
import { siteUrl } from "./utm";

export const MAX_ATTEMPTS = 4;
/** Délai avant le nouvel essai qui suit l'essai n (minutes). */
export const BACKOFF_MINUTES = [5, 15, 60];
export const LOCK_MS = 10 * 60_000;
export const LATE_LIMIT_MS = 36 * 3600_000;
export const TICK_MAX = 3;

export interface PublishDeps {
  fetch?: FetchLike;
  sleep?: (ms: number) => Promise<void>;
  now?: () => Date;
  env?: Record<string, string | undefined>;
  pollIntervalMs?: number;
  pollMaxMs?: number;
  retryDelays?: number[];
}

export type PublishOutcome =
  | { kind: "essai"; reasons: string[]; requests: DryRequest[] }
  | { kind: "publiee"; facebook?: string; instagram?: string }
  | { kind: "reessai"; error: string; nextAttemptAt: string }
  | { kind: "echec"; error: string }
  | { kind: "ignoree"; reason: string };

const find = (d: PresenceData, id: string) => d.posts.find((p) => p.id === id);

export async function buildPublishInput(post: Post, withStory: boolean, nowMs: number, base = siteUrl()): Promise<PublishInput> {
  const urls = await signedVisualSet(post, { base, nowMs });
  return {
    postId: post.id,
    marker: `utm_content=${post.id}`,
    facebookCaption: composeCaption(post, "facebook", base),
    instagramCaption: composeCaption(post, "instagram", base),
    images: urls.slides,
    storyImage: withStory ? urls.story : null,
  };
}

export async function publishPost(id: string, opts: PublishDeps & { trigger: "tick" | "manuel" }): Promise<PublishOutcome> {
  const now = opts.now?.() ?? new Date();
  const env = opts.env ?? process.env;
  const data = await readPresence();
  const post = find(data, id);
  if (!post) return { kind: "ignoree", reason: "Publication introuvable." };
  if (post.status !== "planifiee") return { kind: "ignoree", reason: "Seule une publication approuvée (planifiée) peut partir." };
  if (!post.text.trim()) return { kind: "ignoree", reason: "Le texte est vide." };

  const mode = publishMode(data.settings, env);
  const menv = metaEnv(env);
  const withStory = data.settings.series[post.series].story && !!post.story;
  const input = await buildPublishInput(post, withStory, now.getTime());

  /* ---- Mode essai : aucune requête ---- */
  if (!mode.real) {
    const requests = dryRunRequests(input, menv, mode.networks);
    await mutatePresence((d) => {
      const p = find(d, id);
      if (!p) return { result: null, changed: false };
      p.publish.dryRun = { at: now.toISOString(), rev: p.rev, reasons: mode.reasons, requests };
      addLog(d, { at: now.toISOString(), level: "essai", postId: id, message: `Mode essai (${opts.trigger === "tick" ? "passage planifié" : "publier maintenant"}) : ${requests.length} requêtes auraient été envoyées. ${mode.reasons.join(" ")}` });
      return { result: null, changed: true };
    });
    return { kind: "essai", reasons: mode.reasons, requests };
  }

  /* ---- Verrou ---- */
  const lockId = randomUUID();
  const claim = await mutatePresence((d) => {
    const p = find(d, id);
    if (!p || p.status !== "planifiee") return { result: "Publication introuvable ou déjà traitée.", changed: false };
    if (p.publish.lockUntil && Date.parse(p.publish.lockUntil) > now.getTime()) return { result: "Une publication est déjà en cours pour cet élément.", changed: false };
    if (opts.trigger === "tick" && p.publish.nextAttemptAt && Date.parse(p.publish.nextAttemptAt) > now.getTime()) return { result: "Nouvel essai prévu plus tard.", changed: false };
    p.publish.lockId = lockId;
    p.publish.lockUntil = new Date(now.getTime() + LOCK_MS).toISOString();
    p.publish.attempts += 1;
    return { result: null, changed: true };
  });
  if (claim) return { kind: "ignoree", reason: claim };

  const save = async (network: Network, state: FacebookState | InstagramState) => {
    await mutatePresence((d) => {
      const p = find(d, id);
      if (!p || p.publish.lockId !== lockId) return { result: null, changed: false };
      if (network === "facebook") p.publish.facebook = state as FacebookState;
      else p.publish.instagram = state as InstagramState;
      return { result: null, changed: true };
    });
  };
  const deps = {
    fetch: opts.fetch ?? ((url: string, init: RequestInit) => fetch(url, init)),
    sleep: opts.sleep ?? ((ms: number) => new Promise<void>((r) => setTimeout(r, ms))),
    env: menv,
    save,
    now: opts.now,
    pollIntervalMs: opts.pollIntervalMs,
    pollMaxMs: opts.pollMaxMs,
    retryDelays: opts.retryDelays,
  };

  let fb: FacebookState = post.publish.facebook ?? {};
  let ig: InstagramState = post.publish.instagram ?? {};
  try {
    if (mode.networks.facebook) fb = await publishFacebook(input, fb, deps);
    if (mode.networks.instagram) ig = await publishInstagram(input, ig, deps);
  } catch (err) {
    const me = err instanceof MetaError ? err : new MetaError("Erreur inattendue pendant la publication : nouvel essai automatique.", { kind: "transient" });
    if (!(err instanceof MetaError)) console.error("[presence] publication :", err instanceof Error ? err.message : err);
    return mutatePresence<PublishOutcome>((d) => {
      const p = find(d, id);
      if (!p) return { result: { kind: "echec" as const, error: me.message }, changed: false };
      const final = me.kind === "permanent" || p.publish.attempts >= MAX_ATTEMPTS;
      p.publish.lastError = me.message;
      p.publish.lastErrorAt = now.toISOString();
      delete p.publish.lockId;
      delete p.publish.lockUntil;
      if (final) {
        p.status = "echec";
        delete p.publish.nextAttemptAt;
        addLog(d, { at: now.toISOString(), level: "erreur", postId: id, message: `Échec : ${me.message}` });
        return { result: { kind: "echec" as const, error: me.message }, changed: true };
      }
      const wait = BACKOFF_MINUTES[Math.min(p.publish.attempts - 1, BACKOFF_MINUTES.length - 1)];
      const next = new Date(now.getTime() + wait * 60_000).toISOString();
      p.publish.nextAttemptAt = next;
      addLog(d, { at: now.toISOString(), level: "erreur", postId: id, message: `Essai ${p.publish.attempts} raté, nouvel essai dans ${wait} min : ${me.message}` });
      return { result: { kind: "reessai" as const, error: me.message, nextAttemptAt: next }, changed: true };
    });
  }

  return mutatePresence((d) => {
    const p = find(d, id);
    if (!p) return { result: { kind: "publiee" as const, facebook: fb.postId, instagram: ig.mediaId }, changed: false };
    p.status = "publiee";
    p.publishedAt = now.toISOString();
    p.publish.facebook = fb;
    p.publish.instagram = ig;
    delete p.publish.lockId;
    delete p.publish.lockUntil;
    delete p.publish.nextAttemptAt;
    delete p.publish.lastError;
    const where = [mode.networks.facebook ? "Facebook" : null, mode.networks.instagram ? "Instagram" : null].filter(Boolean).join(" et ");
    addLog(d, { at: now.toISOString(), level: "ok", postId: id, message: `Publiée sur ${where}.` });
    return { result: { kind: "publiee" as const, facebook: fb.postId, instagram: ig.mediaId }, changed: true };
  });
}

export interface TickReport {
  real: boolean;
  reasons: string[];
  due: number;
  results: Array<{ id: string; outcome: PublishOutcome }>;
  late: string[];
}

/** Passage planifié (toutes les 15 min) : publie ce qui est dû, au plus TICK_MAX publications. */
export async function tick(opts: PublishDeps = {}): Promise<TickReport> {
  const now = opts.now?.() ?? new Date();
  const data = await readPresence();
  const mode = publishMode(data.settings, opts.env ?? process.env);
  const t = now.getTime();
  const late: string[] = [];
  const due = data.posts.filter((p) => {
    if (p.status !== "planifiee" || Date.parse(p.scheduledAt) > t) return false;
    if (t - Date.parse(p.scheduledAt) > LATE_LIMIT_MS) {
      late.push(p.id);
      return false;
    }
    if (p.publish.nextAttemptAt && Date.parse(p.publish.nextAttemptAt) > t) return false;
    if (p.publish.lockUntil && Date.parse(p.publish.lockUntil) > t) return false;
    // Mode essai : une seule simulation par version de la publication.
    if (!mode.real && p.publish.dryRun?.rev === p.rev) return false;
    return true;
  });
  const results: TickReport["results"] = [];
  for (const p of due.slice(0, TICK_MAX)) results.push({ id: p.id, outcome: await publishPost(p.id, { ...opts, trigger: "tick" }) });
  return { real: mode.real, reasons: mode.reasons, due: due.length, results, late };
}
