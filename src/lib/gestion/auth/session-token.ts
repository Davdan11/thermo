/* ==================================================================
   Jeton de session de l'outil de gestion (sans état, signé HMAC-SHA256) :
     v1.<charge utile base64url>.<signature base64url>
   Charge utile : courriel, émis le, expire le, identifiant aléatoire.
   Aucun accès fichier ici : le proxy importe peekSession() pour sa
   vérification optimiste ; la vraie vérification (signature, adresse
   toujours autorisée) est faite par la couche d'accès (dal.ts).
   ================================================================== */

import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";

export const SESSION_COOKIE = "tav_gestion";
/** Le cookie n'est envoyé que sous /gestion : jamais sur le site public ni sur /job. */
export const SESSION_COOKIE_PATH = "/gestion";
export const SESSION_TTL_SECONDS = 30 * 24 * 60 * 60;

export interface SessionPayload {
  email: string;
  /** Secondes depuis l'époque Unix. */
  iat: number;
  exp: number;
  sid: string;
}

const b64 = (buf: Buffer | string) => Buffer.from(buf).toString("base64url");

function sign(data: string, secret: Buffer | string): string {
  return createHmac("sha256", secret).update(data).digest("base64url");
}

export function createSessionToken(email: string, secret: Buffer | string, now = Date.now()): { token: string; payload: SessionPayload } {
  const iat = Math.floor(now / 1000);
  const payload: SessionPayload = { email, iat, exp: iat + SESSION_TTL_SECONDS, sid: randomBytes(9).toString("base64url") };
  const body = `v1.${b64(JSON.stringify(payload))}`;
  return { token: `${body}.${sign(body, secret)}`, payload };
}

function parse(token: string | undefined | null): { body: string; sig: string; payload: SessionPayload } | null {
  if (!token || token.length > 1024) return null;
  const parts = token.split(".");
  if (parts.length !== 3 || parts[0] !== "v1") return null;
  try {
    const payload = JSON.parse(Buffer.from(parts[1], "base64url").toString("utf8")) as SessionPayload;
    if (typeof payload?.email !== "string" || typeof payload.exp !== "number" || typeof payload.iat !== "number") return null;
    return { body: `${parts[0]}.${parts[1]}`, sig: parts[2], payload };
  } catch {
    return null;
  }
}

/** Vérification complète : signature en temps constant et expiration. */
export function verifySessionToken(token: string | undefined | null, secret: Buffer | string, now = Date.now()): SessionPayload | null {
  const parsed = parse(token);
  if (!parsed) return null;
  const expected = Buffer.from(sign(parsed.body, secret));
  const given = Buffer.from(parsed.sig);
  if (expected.length !== given.length || !timingSafeEqual(expected, given)) return null;
  if (parsed.payload.exp * 1000 <= now) return null;
  return parsed.payload;
}

/** Lecture optimiste SANS vérifier la signature (proxy seulement : redirection rapide vers la connexion). */
export function peekSession(token: string | undefined | null, now = Date.now()): SessionPayload | null {
  const parsed = parse(token);
  if (!parsed || parsed.payload.exp * 1000 <= now) return null;
  return parsed.payload;
}
