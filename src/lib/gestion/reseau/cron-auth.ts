/* Chantier R — secret des tâches planifiées du réseau (POST /api/reseau/tick) : comparaison en temps constant,
   refus en production si RESEAU_CRON_SECRET est absent (24 caractères au moins), comme /api/automatisations/tick. */

import { createHash, timingSafeEqual } from "node:crypto";

const digest = (s: string) => createHash("sha256").update(s, "utf8").digest();

/** « ok », « absent » (production sans secret : refus) ou « refuse ». */
export function reseauCronAuth(req: Request, env: Record<string, string | undefined> = process.env): "ok" | "absent" | "refuse" {
  const secret = env.RESEAU_CRON_SECRET?.trim() ?? "";
  if (secret.length < 24) return env.NODE_ENV !== "production" ? "ok" : "absent";
  const header = req.headers.get("authorization") ?? "";
  const given = header.startsWith("Bearer ") ? header.slice(7).trim() : "";
  if (!given) return "refuse";
  return timingSafeEqual(digest(given), digest(secret)) ? "ok" : "refuse";
}
