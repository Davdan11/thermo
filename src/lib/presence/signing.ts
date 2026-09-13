/* ==================================================================
   Adresses signées des visuels (/api/presence/visuel/…).
   La route est publique (Meta doit télécharger les images) mais une
   image n'est servie que si sa signature HMAC-SHA256 est valide et
   non expirée.
   Clé : PRESENCE_SIGNING_SECRET (32 caractères ou plus) si défini ;
   sinon dérivée du secret des sessions de /gestion
   (ADMIN_SESSION_SECRET ou shared/data/gestion-secret.key) :
   HMAC(secret, "presence-visuels-v1"). Aucun secret à manipuler.
   ================================================================== */

import { createHmac, timingSafeEqual } from "node:crypto";
import { getSessionSecret } from "@/lib/gestion/auth/secret";
import type { Post, VisualFormat } from "./types";

export type VisualSlot = number | "story";

export interface VisualParams {
  id: string;
  slot: VisualSlot;
  format: VisualFormat;
  rev: number;
  /** Expiration, secondes Unix. */
  exp: number;
}

export const VISUAL_TTL_DAYS = 30;
const LABEL = "presence-visuels-v1";

export async function visualKey(env: Record<string, string | undefined> = process.env): Promise<Buffer> {
  const own = env.PRESENCE_SIGNING_SECRET?.trim();
  const base = own && own.length >= 32 ? Buffer.from(own, "utf8") : await getSessionSecret();
  return createHmac("sha256", base).update(LABEL).digest();
}

const payload = (p: VisualParams) => `v1|${p.id}|${p.slot}|${p.format}|${p.rev}|${p.exp}`;

export function signVisual(p: VisualParams, key: Buffer): string {
  return createHmac("sha256", key).update(payload(p)).digest("base64url");
}

export type VerifyResult = "ok" | "invalide" | "expire";

export function verifyVisual(p: VisualParams, sig: string | null | undefined, key: Buffer, nowMs = Date.now()): VerifyResult {
  if (!sig || !/^[A-Za-z0-9_-]{43}$/.test(sig)) return "invalide";
  const expected = Buffer.from(signVisual(p, key));
  const given = Buffer.from(sig);
  if (expected.length !== given.length || !timingSafeEqual(expected, given)) return "invalide";
  return p.exp * 1000 < nowMs ? "expire" : "ok";
}

/** Expiration arrondie au jour : la même image garde la même adresse toute la journée (cache). */
export function expiryFor(nowMs = Date.now(), ttlDays = VISUAL_TTL_DAYS): number {
  const day = 86_400;
  return Math.ceil((nowMs / 1000 + ttlDays * day) / day) * day;
}

export function parseSlot(raw: string): VisualSlot | null {
  if (raw === "story") return "story";
  return /^\d{1,2}$/.test(raw) ? Number(raw) : null;
}

export function visualPath(p: VisualParams, sig: string): string {
  const q = new URLSearchParams({ f: p.format, r: String(p.rev), e: String(p.exp), s: sig });
  return `/api/presence/visuel/${p.id}/${p.slot}?${q.toString()}`;
}

/** Adresse signée d'une diapositive (ou de la story) d'une publication. */
export async function signedVisualPath(post: Pick<Post, "id" | "rev">, slot: VisualSlot, opts: { nowMs?: number; key?: Buffer } = {}): Promise<string> {
  const key = opts.key ?? (await visualKey());
  const p: VisualParams = { id: post.id, slot, format: slot === "story" ? "story" : "carrousel", rev: post.rev, exp: expiryFor(opts.nowMs) };
  return visualPath(p, signVisual(p, key));
}

/** Toutes les adresses d'une publication (diapositives puis story). */
export async function signedVisualSet(post: Pick<Post, "id" | "rev" | "slides" | "story">, opts: { nowMs?: number; base?: string } = {}): Promise<{ slides: string[]; story: string | null }> {
  const key = await visualKey();
  const prefix = opts.base ? opts.base.replace(/\/$/, "") : "";
  const slides = await Promise.all(post.slides.map((_, i) => signedVisualPath(post, i, { nowMs: opts.nowMs, key })));
  const story = post.story ? await signedVisualPath(post, "story", { nowMs: opts.nowMs, key }) : null;
  return { slides: slides.map((s) => prefix + s), story: story ? prefix + story : null };
}
