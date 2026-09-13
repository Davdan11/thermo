/* Textes envoyés automatiquement et règles de temps des textos. Heures d'ouverture données par le propriétaire. */

/** Accusé de réception proposé (modifiable dans /gestion/textos/reglages). */
export const DEFAULT_AUTO_REPLY =
  // Un seul texto : caractères GSM-7 seulement (pas de « ’ » ni de « À », qui feraient passer en UCS-2 à 70 caractères).
  "Merci pour votre message! L'équipe de Thermopompes A Vendre vous répond en semaine, de 8 h à 18 h. Soumission : thermopompesavendre.ca/soumission";

/** Confirmation d'un désabonnement en français (ARRÊT, DÉSABONNER, « Stop. »). */
export const STOP_CONFIRMATION = "Thermopompes À Vendre : vous ne recevrez plus de textos de notre part. Pour vous réabonner, répondez DEBUT.";

/** Confirmation d'un réabonnement en français (DEBUT, OUI après un désabonnement). */
export const START_CONFIRMATION = "Thermopompes À Vendre : vous recevrez de nouveau nos textos. Pour arrêter, répondez ARRET.";

/** Réponse à AIDE. */
export const HELP_REPLY = "Thermopompes À Vendre : 438-900-3224, du lundi au vendredi, de 8 h à 18 h. Pour ne plus recevoir de textos, répondez ARRET.";

/** Accusé de réception : au premier message, puis au plus une fois par 12 heures. */
export const AUTO_REPLY_WINDOW_MS = 12 * 3_600_000;
/** Avis courriel au propriétaire : au plus un par conversation par 10 minutes. */
export const EMAIL_THROTTLE_MS = 10 * 60_000;

export const AUTO_REPLY_MAX = 480;
export const REPLY_MAX = 1000;
/** Messages gardés par conversation (les plus anciens sont retirés au-delà). */
export const MAX_MESSAGES = 1000;
