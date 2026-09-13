"use client";

/* ==================================================================
   Mesure d'audience GA4 avec mode de consentement (Loi 25).

   - Ne fait rien tant que NEXT_PUBLIC_GA_ID n'est pas défini.
   - gtag.js (≈ 170 Ko) n'est téléchargé qu'après « Accepter » (bandeau
     ConsentBanner) : avant, rien de Google n'est chargé ; seul un petit
     script pose le consentement par défaut, refusé.
   - Le choix est mémorisé dans localStorage (clé CONSENT_KEY).
   - Les clics sur un lien « tel: » sont comptés comme conversion
     (phone_click) sans toucher aux composants qui les affichent.
   ================================================================== */

import Script from "next/script";
import { useEffect, useState } from "react";
import { track } from "@/lib/analytics/track";

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const CONSENT_KEY = "tpv-consent";
/** Émis à chaque choix : Analytics charge gtag.js dès que le visiteur accepte. */
export const CONSENT_CHANGE_EVENT = "tpv-consent-change";
export type ConsentChoice = "granted" | "denied";

export function readConsent(): ConsentChoice | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

export function applyConsent(choice: ConsentChoice): void {
  try {
    localStorage.setItem(CONSENT_KEY, choice);
  } catch {
    /* stockage indisponible : le choix vaut pour la session */
  }
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
  if (typeof window.gtag === "function") {
    window.gtag("consent", "update", {
      analytics_storage: choice,
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }
}

export function Analytics() {
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    if (!GA_ID) return;
    const sync = () => setGranted(readConsent() === "granted");
    window.addEventListener(CONSENT_CHANGE_EVENT, sync);
    if (readConsent() === "granted") applyConsent("granted");
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const link = target?.closest?.('a[href^="tel:"]');
      if (link) track("phone_click", { location: window.location.pathname });
    };
    document.addEventListener("click", onClick, true);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener(CONSENT_CHANGE_EVENT, sync);
    };
  }, []);

  if (!GA_ID) return null;

  return (
    <>
      <Script id="ga-consent-default" strategy="beforeInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});`}
      </Script>
      {granted && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="lazyOnload" />
          <Script id="ga-init" strategy="lazyOnload">
            {`gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
          </Script>
        </>
      )}
    </>
  );
}
