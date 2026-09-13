/* ==================================================================
   Mesure publicitaire côté navigateur (léger, sans dépendance).

   - noteLandingClicks() : au premier chargement, garde en mémoire les
     identifiants de clic de l'adresse ; écrits seulement si le visiteur
     a accepté (maintenant ou plus tard dans la visite).
   - adsFormPayload() : ce qui part avec un formulaire (attribution.ads).
   - fireConversion() : Google Ads (gtag) et pixel Meta, APRÈS
     consentement seulement et si les balises sont chargées.
   L'event_id d'une soumission est créé avec le corps du formulaire et
   repris par l'événement du pixel : le serveur envoie le même à l'API
   Conversions de Meta, qui ne compte qu'une fois.
   ================================================================== */

import { publicAdsConfig, BROWSER_CONVERSIONS, type BrowserConversion } from "./config";
import { browserStorage, readConsentRecord, type ConsentChoice } from "./consent";
import { clearStoredClicks, clicksFromUrl, persistClicks, readStoredClicks, type PendingClicks } from "./clicks";
import type { AdsFormPayload } from "./types";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

let pending: PendingClicks | null = null;
let lastEventId: string | null = null;

/** Témoins de mesure effacés au refus (meilleur effort : première partie seulement). */
const AD_COOKIES = /^(_gcl_[a-z]+|_fbp|_fbc|_ga|_ga_[A-Za-z0-9]+|_gid|_uetsid|_uetvid)$/;

export function newEventId(): string {
  try {
    if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") return crypto.randomUUID();
  } catch {
    /* repli ci-dessous */
  }
  return `ev-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;
}

function granted(): boolean {
  return readConsentRecord()?.choice === "granted";
}

/** Premier chargement : identifiants de l'adresse gardés en mémoire ; écrits tout de suite si déjà accepté. */
export function noteLandingClicks(now: Date = new Date()): void {
  if (typeof window === "undefined") return;
  pending = clicksFromUrl(window.location.href, now);
  if (granted()) persistClicks(browserStorage(), pending, now);
}

function clearAdCookies(): void {
  try {
    const host = window.location.hostname;
    const domains = ["", host, `.${host.replace(/^www\./, "")}`];
    for (const part of document.cookie.split(";")) {
      const name = part.split("=")[0]?.trim();
      if (!name || !AD_COOKIES.test(name)) continue;
      for (const d of domains) document.cookie = `${name}=; Max-Age=0; path=/${d ? `; domain=${d}` : ""}`;
    }
  } catch {
    /* témoins inaccessibles */
  }
}

/** Choix fait dans le bandeau : accepté → on écrit les identifiants en attente ; refusé → tout est effacé. */
export function onConsentChange(choice: ConsentChoice, now: Date = new Date()): void {
  const storage = browserStorage();
  if (choice === "granted") {
    persistClicks(storage, pending, now);
    return;
  }
  clearStoredClicks(storage);
  lastEventId = null;
  if (typeof window !== "undefined") {
    clearAdCookies();
    try {
      window.fbq?.("consent", "revoke");
    } catch {
      /* pixel absent */
    }
  }
}

function readCookie(name: string): string | undefined {
  try {
    const hit = document.cookie.split(";").map((c) => c.trim()).find((c) => c.startsWith(`${name}=`));
    return hit ? decodeURIComponent(hit.slice(name.length + 1)) : undefined;
  } catch {
    return undefined;
  }
}

/** Joint à un formulaire : rien sans choix ; le refus seul (daté) ; avec accord, identifiants et event_id. */
export function adsFormPayload(now: Date = new Date()): AdsFormPayload | undefined {
  const consent = readConsentRecord();
  if (!consent) return undefined;
  if (consent.choice === "denied") return { consent };
  const eventId = newEventId();
  lastEventId = eventId;
  const out: AdsFormPayload = { consent, eventId };
  const clicks = readStoredClicks(browserStorage(), now);
  if (clicks) {
    for (const k of ["gclid", "gbraid", "wbraid", "fbc", "msclkid"] as const) if (clicks[k]) out[k] = clicks[k];
    out.clickAt = clicks.at;
    if (clicks.utm) out.utm = clicks.utm;
  }
  const fbp = typeof document !== "undefined" ? readCookie("_fbp") : undefined;
  if (fbp && /^fb\.\d\.\d{10,16}\.\d{1,24}$/.test(fbp)) out.fbp = fbp;
  return out;
}

/** event_id du dernier formulaire préparé (soumission, rendez-vous), sinon un nouveau. Consommé une fois. */
export function takeLastEventId(): string {
  const id = lastEventId ?? newEventId();
  lastEventId = null;
  return id;
}

/** Événement de la mesure d'audience (track.ts) → conversion publicitaire, s'il y a lieu. */
export function conversionForEvent(name: string): BrowserConversion | null {
  switch (name) {
    case "lead_submitted":
      return "soumission";
    case "thermomatch_completed":
      return "thermomatch";
    case "rdv_booked":
      return "rendez-vous";
    case "phone_click":
      return "telephone";
    case "sms_click":
      return "texto";
    default:
      return null;
  }
}

/** Envoie la conversion aux balises chargées. Sans consentement : rien, même si une balise traînait. */
export function fireConversion(kind: BrowserConversion, eventId: string): { google: boolean; meta: boolean } {
  const done = { google: false, meta: false };
  if (typeof window === "undefined" || !granted()) return done;
  const cfg = publicAdsConfig();
  try {
    if (typeof window.gtag === "function") {
      if (kind === "soumission") window.gtag("event", "generate_lead", { event_id: eventId });
      const label = cfg.labels[kind];
      if (cfg.adsId && label) {
        window.gtag("event", "conversion", { send_to: `${cfg.adsId}/${label}`, transaction_id: eventId });
        done.google = true;
      }
    }
    if (cfg.metaPixelId && typeof window.fbq === "function") {
      const m = BROWSER_CONVERSIONS[kind].meta;
      window.fbq(m.custom ? "trackCustom" : "track", m.event, {}, { eventID: eventId });
      done.meta = true;
    }
  } catch {
    /* la mesure ne doit jamais casser l'interface */
  }
  return done;
}
