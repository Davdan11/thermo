/* ==================================================================
   Côté navigateur : première page vue de la session → sessionStorage.
   Aucun témoin, aucun appel réseau. Les données restent dans l'onglet
   et disparaissent à sa fermeture ; elles ne partent qu'avec un
   formulaire envoyé par le visiteur (readAttribution()).
   ================================================================== */

import { sanitizeHost, sanitizeLandingPath, sanitizeUtmValue, UTM_KEYS, type AttributionPayload, type UtmValues } from "./core";

export const ATTRIBUTION_KEY = "tav-arrivee";
/** Ancienne clé (localStorage, valeur gclid complète) : retirée par minimisation. */
const LEGACY_KEY = "thermomatch_tracking";

/** À appeler une fois au chargement : ne fait rien si la session a déjà son arrivée. */
export function captureFirstVisit(): void {
  try {
    window.localStorage?.removeItem(LEGACY_KEY);
  } catch {
    /* stockage bloqué */
  }
  try {
    if (window.sessionStorage.getItem(ATTRIBUTION_KEY)) return;
    const url = new URL(window.location.href);
    const payload: AttributionPayload = {};
    const landing = sanitizeLandingPath(url.pathname);
    if (landing) payload.landing = landing;
    const refHost = document.referrer ? sanitizeHost(document.referrer) : undefined;
    if (refHost && refHost !== url.hostname.replace(/^www\./, "")) payload.refHost = refHost;
    const utm: UtmValues = {};
    for (const key of UTM_KEYS) {
      const v = sanitizeUtmValue(url.searchParams.get(key));
      if (v) utm[key] = v;
    }
    if (Object.keys(utm).length) payload.utm = utm;
    if (url.searchParams.has("gclid")) payload.gclid = true;
    if (url.searchParams.has("fbclid")) payload.fbclid = true;
    window.sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(payload));
  } catch {
    /* sessionStorage indisponible : le formulaire partira sans attribution (« non transmis ») */
  }
}

/** Arrivée de la session, à joindre au corps d'un formulaire (champ « attribution »). */
export function readAttribution(): AttributionPayload | undefined {
  try {
    const raw = window.sessionStorage.getItem(ATTRIBUTION_KEY);
    return raw ? (JSON.parse(raw) as AttributionPayload) : undefined;
  } catch {
    return undefined;
  }
}
