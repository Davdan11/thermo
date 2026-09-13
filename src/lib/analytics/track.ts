/* ==================================================================
   Événements de conversion — un seul point d'entrée côté client.

   - Toujours poussé dans window.dataLayer (Tag Manager, ou lecture locale).
   - Transmis à GA4 via gtag() quand la mesure est configurée
     (NEXT_PUBLIC_GA_ID) ; GA4 respecte le mode de consentement
     (voir src/components/analytics/Analytics.tsx).
   Aucun renseignement personnel ne doit être passé en paramètre.
   Pilote publicitaire : gtag et les conversions (Google Ads, pixel
   Meta) seulement après « Accepter » (src/lib/ads/browser.ts).
   ================================================================== */

import { conversionForEvent, fireConversion, newEventId, takeLastEventId } from "@/lib/ads/browser";
import { readConsentRecord } from "@/lib/ads/consent";

export type EventName =
  | "thermomatch_started"
  | "thermomatch_completed"
  | "thermomatch_shared"
  | "quote_for_model"
  | "lead_submitted"
  | "rdv_booked"
  | "contact_submitted"
  | "partner_submitted"
  | "compare_started"
  | "thermoscan_analyzed"
  | "thermoscan_fiche"
  | "logisvert_alert_requested"
  | "subsidy_checked"
  | "phone_click"
  | "sms_click";

type Params = Record<string, string | number | boolean>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(name: EventName, params: Params = {}): void {
  if (typeof window === "undefined") return;
  try {
    window.dataLayer = window.dataLayer ?? [];
    window.dataLayer.push({ event: name, ...params });
    // Pilote publicitaire : rien n'est remis à gtag avant « Accepter » (sinon la file partirait au chargement de gtag.js).
    if (readConsentRecord()?.choice !== "granted") return;
    if (typeof window.gtag === "function") window.gtag("event", name, params);
    // Conversion Google Ads / pixel Meta ; soumission et rendez-vous reprennent l'event_id joint au formulaire.
    const conversion = conversionForEvent(name);
    if (conversion) fireConversion(conversion, conversion === "soumission" || conversion === "rendez-vous" ? takeLastEventId() : newEventId());
  } catch {
    /* la mesure ne doit jamais casser l'interface */
  }
}
