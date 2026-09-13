/* ==================================================================
   Authentification HTTP Basic du flux Google Ads.
   ADS_FEED_USER et ADS_FEED_PASSWORD (shared/.env, choisis par le
   propriétaire, 12 caractères ou plus pour le mot de passe). Même
   méthode que la tâche cron des automatisations : comparaison en temps
   constant (empreintes SHA-256 de même longueur) ; en production, refus
   si les variables manquent. Hors production sans variables : ouvert,
   pour l'essai local.
   ================================================================== */

import { createHash, timingSafeEqual } from "node:crypto";

export const FEED_MIN_PASSWORD = 12;
export type FeedAuth = "ok" | "absent" | "refuse";

const digest = (s: string) => createHash("sha256").update(s, "utf8").digest();

export function feedCredentials(env: NodeJS.ProcessEnv = process.env): { user: string; password: string } | null {
  const user = env.ADS_FEED_USER?.trim() ?? "";
  const password = env.ADS_FEED_PASSWORD ?? "";
  return user && password.length >= FEED_MIN_PASSWORD ? { user, password } : null;
}

export function feedAuth(req: Request, env: NodeJS.ProcessEnv = process.env): FeedAuth {
  const creds = feedCredentials(env);
  if (!creds) return env.NODE_ENV === "production" ? "absent" : "ok";
  const header = req.headers.get("authorization") ?? "";
  const m = /^Basic\s+([A-Za-z0-9+/=]{1,1000})$/i.exec(header.trim());
  if (!m) return "refuse";
  let decoded = "";
  try {
    decoded = Buffer.from(m[1], "base64").toString("utf8");
  } catch {
    return "refuse";
  }
  const i = decoded.indexOf(":");
  if (i < 0) return "refuse";
  const userOk = timingSafeEqual(digest(decoded.slice(0, i)), digest(creds.user));
  const passOk = timingSafeEqual(digest(decoded.slice(i + 1)), digest(creds.password));
  return userOk && passOk ? "ok" : "refuse";
}
