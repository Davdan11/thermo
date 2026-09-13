/* Chantier S — limites de débit en mémoire (par IP ou par adresse), en plus de la limite persistante
   de la 2e étape (5 échecs en 15 minutes par adresse, dans gestion-securite.json). */
import { createLimiter } from "../rate-limit";

export const securityLimiters = {
  /** Codes de 2e étape essayés (connexion et accès sensibles), par IP. */
  mfaIp: createLimiter({ limit: 30, windowMs: 15 * 60 * 1000 }),
  /** Demandes de code par texto, par IP. */
  smsIp: createLimiter({ limit: 6, windowMs: 60 * 60 * 1000 }),
  /** Modifications de clés, par adresse. */
  keys: createLimiter({ limit: 40, windowMs: 15 * 60 * 1000 }),
};
