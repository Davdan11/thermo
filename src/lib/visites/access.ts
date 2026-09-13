/* ==================================================================
   Chantier D — accès à /visite/[jeton], sans compte.
   Jeton de 256 bits tiré au hasard (43 caractères base64url), un par
   demande ; seule son empreinte SHA-256 est gardée dans visites.json.
   Le jeton n'ouvre QUE sa demande : ses questions et ses photos.
   Lien à durée limitée (réglable) ; supprimé à la fin de la durée de
   conservation.
   ================================================================== */

import { createHash } from "node:crypto";
import { newToken, TOKEN_RE } from "@/lib/soumissions/tokens";
import type { VisitesData, VisitRequest, VisitStatus } from "./types";

export { newToken, TOKEN_RE };

export const hashVisitToken = (token: string): string => createHash("sha256").update(token).digest("hex");

export type VisitAccess = { ok: true; visit: VisitRequest } | { ok: false; state: "invalide" | "expiree" | "supprimee" };

export function resolveVisit(data: Pick<VisitesData, "requests">, token: string, now: Date): VisitAccess {
  if (typeof token !== "string" || !TOKEN_RE.test(token)) return { ok: false, state: "invalide" };
  const hash = hashVisitToken(token);
  const visit = data.requests.find((r) => r.tokenHash === hash);
  if (!visit) return { ok: false, state: "invalide" };
  if (visit.purgedAt) return { ok: false, state: "supprimee" };
  if (Date.parse(visit.expiresAt) <= now.getTime()) return { ok: false, state: "expiree" };
  return { ok: true, visit };
}

export function visitStatus(v: VisitRequest, now: Date): VisitStatus {
  if (v.purgedAt) return "supprimee";
  if (v.submittedAt) return "recue";
  if (Date.parse(v.expiresAt) <= now.getTime()) return "expiree";
  return v.openedAt ? "ouverte" : "envoyee";
}
