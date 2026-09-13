/* Limites de débit des pages publiques du volet A (par adresse IP ou par jeton), en mémoire : un seul processus pm2. */
import { createLimiter } from "../rate-limit";

export const voletLimits = {
  /** Page de signature et document signé (GET). */
  ententeView: createLimiter({ limit: 60, windowMs: 10 * 60 * 1000 }),
  /** Signature (POST) et signal d'ouverture. */
  ententeWrite: createLimiter({ limit: 20, windowMs: 10 * 60 * 1000 }),
  /** Page de chantier et photos (GET). */
  chantierView: createLimiter({ limit: 600, windowMs: 10 * 60 * 1000 }),
  /** Synchronisation de la file hors ligne (POST), par jeton. */
  chantierSync: createLimiter({ limit: 240, windowMs: 10 * 60 * 1000 }),
  /** Téléversement de photos, par jeton. */
  chantierPhoto: createLimiter({ limit: 160, windowMs: 60 * 60 * 1000 }),
  /** Lecture de plaque (vision), par jeton. */
  plaque: createLimiter({ limit: 12, windowMs: 60 * 60 * 1000 }),
  /** Page « Un problème ? » (GET), par IP. */
  serviceView: createLimiter({ limit: 60, windowMs: 10 * 60 * 1000 }),
  /** Signalement et réponse du client (POST), par IP. */
  serviceWrite: createLimiter({ limit: 10, windowMs: 60 * 60 * 1000 }),
};
