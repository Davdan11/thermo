/* ==================================================================
   Liens de connexion par courriel : à usage unique, valides 15 minutes.
   Seule l'empreinte SHA-256 du jeton est conservée. Ouvrir le lien
   n'ouvre pas de session (les antivirus de messagerie visitent les
   liens) : la page demande un clic, qui envoie un POST.
   ================================================================== */

import { createHash, randomBytes } from "node:crypto";
import { mutateAuth, readAuth, type AuthData } from "../store";
import { normalizeEmail } from "./admins";
// Chantier V : propriétaire (ADMIN_EMAILS) ou membre actif de l'équipe, revérifié à l'ouverture du lien.
import { canSignIn } from "../equipe/roles";

export const MAGIC_LINK_TTL_MS = 15 * 60 * 1000;
/** Les entrées plus vieilles qu'un jour sont effacées du fichier. */
const KEEP_MS = 24 * 60 * 60 * 1000;

export function hashToken(token: string): string {
  return createHash("sha256").update(token).digest("hex");
}

export function newToken(): string {
  return randomBytes(32).toString("base64url");
}

export const TOKEN_RE = /^[A-Za-z0-9_-]{32,64}$/;

function prune(data: AuthData, now: Date): void {
  data.links = data.links.filter((l) => now.getTime() - Date.parse(l.createdAt) < KEEP_MS);
}

/** Crée un lien pour une adresse autorisée. Renvoie le jeton en clair (à mettre dans le courriel, jamais ailleurs). */
export async function createMagicLink(email: string, now = new Date()): Promise<string> {
  const token = newToken();
  await mutateAuth((data) => {
    prune(data, now);
    data.links.push({
      hash: hashToken(token),
      email: normalizeEmail(email),
      createdAt: now.toISOString(),
      expiresAt: new Date(now.getTime() + MAGIC_LINK_TTL_MS).toISOString(),
    });
    return { result: undefined, changed: true };
  });
  return token;
}

export type MagicLinkState = "valide" | "expire" | "utilise" | "invalide";

/** État d'un lien, en lecture seule (page ouverte par GET). */
export async function peekMagicLink(token: string, now = new Date()): Promise<MagicLinkState> {
  if (!TOKEN_RE.test(token)) return "invalide";
  const rec = (await readAuth()).links.find((l) => l.hash === hashToken(token));
  if (!rec || !(await canSignIn(rec.email))) return "invalide"; // Chantier V
  if (rec.usedAt) return "utilise";
  if (Date.parse(rec.expiresAt) <= now.getTime()) return "expire";
  return "valide";
}

/** Consomme le lien (POST) : une seule fois, avant expiration, adresse toujours autorisée. */
export async function consumeMagicLink(token: string, now = new Date()): Promise<{ email: string } | { error: Exclude<MagicLinkState, "valide"> }> {
  if (!TOKEN_RE.test(token)) return { error: "invalide" };
  const hash = hashToken(token);
  // Chantier V : l'adresse doit toujours pouvoir se connecter (lue avant le verrou, recomparée dessous).
  const pre = (await readAuth()).links.find((l) => l.hash === hash);
  const allowed = pre ? await canSignIn(pre.email) : false;
  return mutateAuth<{ email: string } | { error: Exclude<MagicLinkState, "valide"> }>((data) => {
    const rec = data.links.find((l) => l.hash === hash);
    if (!rec || !allowed || rec.email !== pre?.email) return { result: { error: "invalide" as const }, changed: false };
    if (rec.usedAt) return { result: { error: "utilise" as const }, changed: false };
    if (Date.parse(rec.expiresAt) <= now.getTime()) return { result: { error: "expire" as const }, changed: false };
    rec.usedAt = now.toISOString();
    prune(data, now);
    return { result: { email: rec.email }, changed: true };
  });
}
