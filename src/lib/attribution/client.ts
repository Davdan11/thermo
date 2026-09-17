/* ==================================================================
   Côté navigateur : première page vue de la session → sessionStorage.
   Aucun témoin. Les données restent dans l'onglet et disparaissent à
   sa fermeture ; elles ne partent qu'avec un formulaire envoyé par le
   visiteur (readAttribution()). Seule exception : une arrivée par un
   lien suivi du robot Facebook envoie au site l'identifiant de la
   publication, rien d'autre (signalerVisiteFacebook).
   ================================================================== */

import { sanitizeHost, sanitizeLandingPath, sanitizeUtmValue, UTM_KEYS, type AttributionPayload, type UtmValues } from "./core";
import { adsFormPayload } from "@/lib/ads/browser";
import type { AdsFormPayload } from "@/lib/ads/types";

export const ATTRIBUTION_KEY = "tav-arrivee";
/** Ancienne clé (localStorage, valeur gclid complète) : retirée par minimisation. */
const LEGACY_KEY = "thermomatch_tracking";

/** Identifiant d'une publication du robot Facebook (src/lib/social/types.ts). */
const PUBLICATION_FACEBOOK_RE = /^fb-\d{8}-[a-z-]+-(?:pub|story)(?:-\d{1,3})?$/;

/**
 * Arrivée par un lien suivi du robot Facebook : un signal anonyme, une fois par session, vers le site lui-même
 * (identifiant de la publication seulement ; aucun témoin, aucun service tiers). Voir src/lib/social/visites.ts.
 */
function signalerVisiteFacebook(utm: UtmValues): void {
  const id = utm.utm_content;
  if (utm.utm_source !== "facebook" || utm.utm_medium !== "social" || !id || !PUBLICATION_FACEBOOK_RE.test(id)) return;
  try {
    const corps = JSON.stringify({ c: id });
    if (!navigator.sendBeacon?.("/api/presence/visite", new Blob([corps], { type: "application/json" }))) {
      void fetch("/api/presence/visite", { method: "POST", body: corps, headers: { "Content-Type": "application/json" }, keepalive: true }).catch(() => undefined);
    }
  } catch {
    /* signal perdu : sans conséquence */
  }
}

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
    signalerVisiteFacebook(utm);
  } catch {
    /* sessionStorage indisponible : le formulaire partira sans attribution (« non transmis ») */
  }
}

/** Arrivée de la session, à joindre au corps d'un formulaire (champ « attribution »).
 *  Pilote publicitaire : `ads` = choix du bandeau (daté, versionné) et, avec accord seulement,
 *  identifiants de clic et event_id (src/lib/ads/browser.ts). Sans choix : absent, comme avant. */
export function readAttribution(): (AttributionPayload & { ads?: AdsFormPayload }) | undefined {
  try {
    const raw = window.sessionStorage.getItem(ATTRIBUTION_KEY);
    if (!raw) return undefined;
    const payload = JSON.parse(raw) as AttributionPayload;
    const ads = adsFormPayload();
    return ads ? { ...payload, ads } : payload;
  } catch {
    return undefined;
  }
}
