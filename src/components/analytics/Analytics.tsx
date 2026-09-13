"use client";

/* ==================================================================
   Mesure d'audience GA4 et mesure publicitaire (Google Ads, pixel Meta)
   avec mode de consentement v2 (Loi 25).

   - Ne fait rien tant qu'aucune mesure n'est configurée
     (NEXT_PUBLIC_GA_ID, NEXT_PUBLIC_GOOGLE_ADS_ID, NEXT_PUBLIC_META_PIXEL_ID).
   - Avant « Accepter » : un petit script pose le consentement par défaut,
     REFUSÉ pour ad_storage, ad_user_data, ad_personalization et
     analytics_storage ; rien de Google ni de Meta n'est téléchargé, aucun
     identifiant publicitaire n'est écrit (les identifiants de clic de
     l'adresse restent en mémoire, voir src/lib/ads/browser.ts).
   - Après « Accepter » : les quatre signaux passent à « accordé », puis
     gtag.js et le pixel Meta se chargent en différé (lazyOnload), sans
     peser sur le premier affichage.
   - Le choix (et sa date, sa version) est mémorisé dans localStorage
     (src/lib/ads/consent.ts).
   - Les clics sur un lien « tel: » ou « sms: » sont comptés comme
     conversion (phone_click, sms_click) sans toucher aux composants.
   ================================================================== */

import Script from "next/script";
import { useEffect, useState } from "react";
import { track } from "@/lib/analytics/track";
import { measurementConfigured, publicAdsConfig } from "@/lib/ads/config";
import { CONSENT_KEY as STORED_CONSENT_KEY, consentModeState, readConsentRecord, writeConsentRecord, type ConsentChoice as StoredChoice } from "@/lib/ads/consent";
import { noteLandingClicks, onConsentChange } from "@/lib/ads/browser";

const cfg = publicAdsConfig();
// Identifiants insérés dans du code : seulement s'ils ont la forme attendue.
const GA_OK = /^G-[A-Z0-9]{4,20}$/.test(cfg.gaId) ? cfg.gaId : "";
const ADS_OK = /^AW-\d{5,15}$/.test(cfg.adsId) ? cfg.adsId : "";
const PIXEL_OK = /^\d{5,20}$/.test(cfg.metaPixelId) ? cfg.metaPixelId : "";

export const GA_ID = GA_OK;
/** Une mesure au moins est configurée : bandeau, lien « Témoins » et balises (après accord). */
export const MEASUREMENT_ON = measurementConfigured(cfg);
export const CONSENT_KEY = STORED_CONSENT_KEY;
/** Émis à chaque choix : Analytics charge les balises dès que le visiteur accepte. */
export const CONSENT_CHANGE_EVENT = "tpv-consent-change";
export type ConsentChoice = StoredChoice;

/** Choix valide pour le texte en vigueur (sinon null : le bandeau réapparaît). */
export function readConsent(): ConsentChoice | null {
  return readConsentRecord()?.choice ?? null;
}

function syncGoogleConsent(choice: ConsentChoice): void {
  if (typeof window.gtag === "function") window.gtag("consent", "update", consentModeState(choice));
}

/** Choix fait dans le bandeau : mémorisé (daté, versionné), puis appliqué aux balises et aux identifiants de clic. */
export function applyConsent(choice: ConsentChoice): void {
  writeConsentRecord(choice);
  onConsentChange(choice);
  syncGoogleConsent(choice);
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
}

const GTAG_SRC_ID = GA_OK || ADS_OK;
const DEFAULT_DENIED = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('consent','default',${JSON.stringify({ ...consentModeState(null), wait_for_update: 500 })});`;
const GTAG_INIT = `gtag('js',new Date());${GA_OK ? `gtag('config','${GA_OK}',{anonymize_ip:true});` : ""}${ADS_OK ? `gtag('config','${ADS_OK}');` : ""}`;
const PIXEL_INIT = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('consent','grant');fbq('init','${PIXEL_OK}');fbq('track','PageView');`;

export function Analytics() {
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    if (!MEASUREMENT_ON) return;
    // Identifiants de clic de l'adresse d'arrivée : en mémoire, écrits seulement avec accord.
    noteLandingClicks();
    const sync = () => setGranted(readConsent() === "granted");
    window.addEventListener(CONSENT_CHANGE_EVENT, sync);
    if (readConsent() === "granted") {
      syncGoogleConsent("granted");
      sync();
    }
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const link = target?.closest?.('a[href^="tel:"], a[href^="sms:"]');
      if (!link) return;
      const sms = (link.getAttribute("href") ?? "").startsWith("sms:");
      track(sms ? "sms_click" : "phone_click", { location: window.location.pathname });
    };
    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener(CONSENT_CHANGE_EVENT, sync);
    };
  }, []);

  if (!MEASUREMENT_ON) return null;

  return (
    <>
      <Script id="ga-consent-default" strategy="beforeInteractive">
        {DEFAULT_DENIED}
      </Script>
      {granted && GTAG_SRC_ID ? (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_SRC_ID}`} strategy="lazyOnload" />
          <Script id="ga-init" strategy="lazyOnload">
            {GTAG_INIT}
          </Script>
        </>
      ) : null}
      {granted && PIXEL_OK ? (
        <Script id="meta-pixel" strategy="lazyOnload">
          {PIXEL_INIT}
        </Script>
      ) : null}
    </>
  );
}
