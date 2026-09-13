/* Chantier D — limites des routes du client (/visite/[jeton]). Limiteurs propres (voir src/lib/gestion/rate-limit.ts). */
import { createLimiter } from "@/lib/gestion/rate-limit";

export const visiteLimiters = {
  /** Page de la visite (GET), par IP. */
  view: createLimiter({ limit: 120, windowMs: 10 * 60 * 1000 }),
  /** Téléversement de photos, par jeton. */
  photo: createLimiter({ limit: 120, windowMs: 60 * 60 * 1000 }),
  /** Photos affichées (GET), par IP. */
  photoView: createLimiter({ limit: 600, windowMs: 10 * 60 * 1000 }),
  /** Envoyer, retirer une photo, ouverture notée (POST), par jeton. */
  write: createLimiter({ limit: 60, windowMs: 10 * 60 * 1000 }),
};
