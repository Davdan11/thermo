/* ==================================================================
   Chantier T — liens signés et à durée limitée.

     /appel/<jeton>   texto d'alerte au propriétaire : lance l'appel
                      masqué vers le client (validité : callLinkMinutes)
     /rappel/<jeton>  texto au client : il choisit son moment de rappel
                      (validité : linkDays)

   Jeton : <identifiant>.<expiration en base 36>.<signature>
   Signature : HMAC-SHA256 (22 caractères base64url, 132 bits) de
   « usage|identifiant|expiration » avec une sous-clé dérivée de la clé
   des sessions de /gestion. L'usage est signé : un jeton « rappel »
   n'ouvre jamais la page « appel ». Rien de personnel dans le jeton.
   Ouvrir un lien n'agit pas : la page demande un clic (POST), car les
   aperçus de liens et les antivirus visitent les URL.
   ================================================================== */

import { createHmac, timingSafeEqual } from "node:crypto";
import { getSessionSecret } from "@/lib/gestion/auth/secret";
import { SITE_URL } from "@/lib/seo";

export type LinkPurpose = "appel" | "rappel";

export const LINK_TOKEN_RE = /^[a-z]_[A-Za-z0-9_-]{8,16}\.[0-9a-z]{5,10}\.[A-Za-z0-9_-]{22}$/;

/** Sous-clé propre aux liens : la clé des sessions ne sert jamais telle quelle à autre chose. */
export function linkKey(sessionSecret: Buffer): Buffer {
  return createHmac("sha256", sessionSecret).update("chantier-t:liens-signes:v1").digest();
}

const sig = (key: Buffer, purpose: LinkPurpose, id: string, exp: string) => createHmac("sha256", key).update(`${purpose}|${id}|${exp}`).digest("base64url").slice(0, 22);

export function signLink(purpose: LinkPurpose, id: string, expiresAt: Date, key: Buffer): string {
  const exp = Math.floor(expiresAt.getTime() / 1000).toString(36);
  return `${id}.${exp}.${sig(key, purpose, id, exp)}`;
}

export type LinkCheck = { ok: true; id: string; expiresAt: Date } | { ok: false; error: "invalide" | "expire" };

export function verifyLink(token: string, purpose: LinkPurpose, key: Buffer, now = new Date()): LinkCheck {
  if (typeof token !== "string" || !LINK_TOKEN_RE.test(token)) return { ok: false, error: "invalide" };
  const [id, exp, given] = token.split(".");
  const a = Buffer.from(sig(key, purpose, id, exp));
  const b = Buffer.from(given);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return { ok: false, error: "invalide" };
  const expiresAt = new Date(Number.parseInt(exp, 36) * 1000);
  if (!Number.isFinite(expiresAt.getTime())) return { ok: false, error: "invalide" };
  if (expiresAt.getTime() <= now.getTime()) return { ok: false, error: "expire" };
  return { ok: true, id, expiresAt };
}

export async function makeLink(purpose: LinkPurpose, id: string, expiresAt: Date): Promise<string> {
  const token = signLink(purpose, id, expiresAt, linkKey(await getSessionSecret()));
  return `${SITE_URL}/${purpose}/${token}`;
}

export async function checkLink(token: string, purpose: LinkPurpose, now = new Date()): Promise<LinkCheck> {
  return verifyLink(token, purpose, linkKey(await getSessionSecret()), now);
}
