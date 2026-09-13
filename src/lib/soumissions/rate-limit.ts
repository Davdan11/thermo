/* Limites des routes du client (/devis/[jeton]), par adresse IP. Limiteurs propres (voir src/lib/gestion/rate-limit.ts). */
import { createLimiter } from "@/lib/gestion/rate-limit";

export const devisLimiters = {
  /** Affichage de la soumission (GET). */
  view: createLimiter({ limit: 90, windowMs: 10 * 60 * 1000 }),
  /** Consultation notée (POST de la page). */
  beacon: createLimiter({ limit: 60, windowMs: 10 * 60 * 1000 }),
  /** Accepter, Refuser, Question (POST). */
  respond: createLimiter({ limit: 20, windowMs: 10 * 60 * 1000 }),
  /** Photos du chantier (GET). */
  photo: createLimiter({ limit: 400, windowMs: 10 * 60 * 1000 }),
};
