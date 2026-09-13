/* ==================================================================
   Liens des soumissions : /devis/<jeton>.
   Jeton de 256 bits tiré au hasard (crypto), 43 caractères base64url,
   un par version : impossible à deviner, sans lien avec le numéro ni
   l'identifiant. Il est conservé dans soumissions.json (droits 600)
   pour que le propriétaire puisse relancer le client ; la recherche
   compare des empreintes SHA-256 en temps constant.
   ================================================================== */
import { createHash, randomBytes, timingSafeEqual } from "node:crypto";
import type { Quote, QuoteVersion, SoumissionsData } from "./types";

export const TOKEN_RE = /^[A-Za-z0-9_-]{43}$/;

export function newToken(): string {
  return randomBytes(32).toString("base64url");
}

const digest = (s: string) => createHash("sha256").update(s).digest();

export function sameToken(a: string, b: string): boolean {
  return timingSafeEqual(digest(a), digest(b));
}

export function findByToken(data: Pick<SoumissionsData, "quotes">, token: string): { quote: Quote; version: QuoteVersion } | null {
  if (typeof token !== "string" || !TOKEN_RE.test(token)) return null;
  let found: { quote: Quote; version: QuoteVersion } | null = null;
  // Parcours complet (pas d'arrêt anticipé) : le temps ne dépend pas de la position du jeton.
  for (const quote of data.quotes) {
    for (const version of quote.versions) {
      if (sameToken(version.token, token) && !found) found = { quote, version };
    }
  }
  return found;
}
