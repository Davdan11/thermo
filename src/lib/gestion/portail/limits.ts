/* Chantier P — limites de débit des pages à jeton du portail (en mémoire : un seul processus pm2). */
import { createLimiter } from "../rate-limit";

export const portalLimits = {
  /** Portail /projet (GET), par IP. */
  view: createLimiter({ limit: 120, windowMs: 10 * 60 * 1000 }),
  /** Réponses du client (POST : date, adhésion, sondage…), par IP. */
  write: createLimiter({ limit: 30, windowMs: 10 * 60 * 1000 }),
  /** Photos du chantier, par IP. */
  photo: createLimiter({ limit: 600, windowMs: 10 * 60 * 1000 }),
  /** Page « Mes disponibilités » (GET), par IP. */
  availabilityView: createLimiter({ limit: 120, windowMs: 10 * 60 * 1000 }),
  /** Ajout ou retrait de disponibilités (POST), par jeton. */
  availabilityWrite: createLimiter({ limit: 120, windowMs: 60 * 60 * 1000 }),
};
