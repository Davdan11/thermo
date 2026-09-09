"use client";

/* ==================================================================
   Mesure d'audience GA4 avec mode de consentement (Loi 25).

   - Ne fait rien tant que NEXT_PUBLIC_GA_ID n'est pas défini.
   - Consentement par défaut refusé : GA4 ne dépose aucun témoin et
     n'envoie que des signaux sans identifiant tant que le visiteur
     n'a pas accepté (bandeau ConsentBanner).
   - Le choix est mémorisé dans localStorage (clé CONSENT_KEY).
   - Les clics sur un lien « tel: » sont comptés comme conversion
     (phone_click) sans toucher aux composants qui les affichent.
   ================================================================== */

import Script from "next/script";
import { useEffect } from "react";
import { track } from "@/lib/analytics/track";

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
export const CONSENT_KEY = "tpv-consent";
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
  useEffect(() => {
    if (!GA_ID) return;
    if (readConsent() === "granted") applyConsent("granted");
    const onClick = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const link = target?.closest?.('a[href^="tel:"]');
      if (link) track("phone_click", { location: window.location.pathname });
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  if (!GA_ID) return null;

  return (
    <>
      <Script id="ga-consent-default" strategy="beforeInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',wait_for_update:500});`}
      </Script>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga-init" strategy="afterInteractive">
        {`gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
      </Script>
    </>
  );
}
