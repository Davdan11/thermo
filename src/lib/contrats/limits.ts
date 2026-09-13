/* Conformité C1 — limites de débit des pages à jeton du contrat (en mémoire : un seul processus pm2). */
import { createLimiter } from "@/lib/gestion/rate-limit";

export const contratLimits = {
  /** Page d'approbation de l'installateur et documents (GET), par IP. */
  view: createLimiter({ limit: 60, windowMs: 10 * 60 * 1000 }),
  /** Approbation, signature, réponses (POST), par IP. */
  write: createLimiter({ limit: 20, windowMs: 10 * 60 * 1000 }),
};
