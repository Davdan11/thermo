/* Consentement d'abord (Loi 25) : avant « Accepter », ni balise ni identifiant publicitaire stocké. */
import { afterEach, describe, expect, it, vi } from "vitest";
import { createElement, type ReactNode } from "react";
import { renderToString } from "react-dom/server";
import { FAKE, fakeBrowser, MemoryStorage } from "./helpers";

vi.mock("next/script", () => ({
  default: ({ id, src, strategy, children }: { id?: string; src?: string; strategy?: string; children?: ReactNode }) =>
    createElement("script", { id, src, "data-strategy": strategy, ...(children ? { dangerouslySetInnerHTML: { __html: String(children) } } : {}) }),
}));
vi.mock("next/link", () => ({
  default: ({ href, children, ...rest }: { href: string; children: ReactNode }) => createElement("a", { href, ...rest }, children),
}));

const IDS = { NEXT_PUBLIC_GA_ID: "G-TEST0000", NEXT_PUBLIC_GOOGLE_ADS_ID: "AW-000000001", NEXT_PUBLIC_META_PIXEL_ID: "100000000000001", NEXT_PUBLIC_GOOGLE_ADS_LABEL_SOUMISSION: "TEST_label_soumission" };
const LANDING = `https://thermopompesavendre.ca/thermopompes?gclid=${FAKE.gclid}&fbclid=${FAKE.fbclid}&utm_source=google&utm_medium=cpc`;

function setIds() {
  for (const [k, v] of Object.entries(IDS)) vi.stubEnv(k, v);
}

afterEach(() => {
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
  vi.resetModules();
});

describe("rendu serveur : consentement refusé par défaut, aucune balise", () => {
  it("les quatre signaux du mode consentement v2 partent à « denied » ; ni gtag.js ni pixel Meta", async () => {
    setIds();
    const { Analytics } = await import("@/components/analytics/Analytics");
    const html = renderToString(createElement(Analytics));
    for (const key of ["ad_storage", "ad_user_data", "ad_personalization", "analytics_storage"]) expect(html).toContain(`"${key}":"denied"`);
    expect(html).toContain('data-strategy="beforeInteractive"');
    expect(html).not.toContain("googletagmanager.com/gtag/js");
    expect(html).not.toContain("fbevents.js");
    expect(html).not.toContain("fbq(");
  });

  it("sans aucun identifiant configuré : rien du tout (ni script, ni bandeau)", async () => {
    const { Analytics } = await import("@/components/analytics/Analytics");
    const { ConsentBanner } = await import("@/components/analytics/ConsentBanner");
    expect(renderToString(createElement(Analytics))).toBe("");
    expect(renderToString(createElement(ConsentBanner))).toBe("");
  });

  it("Google Ads seul suffit pour afficher le bandeau ; le script vérifie la version du texte", async () => {
    vi.stubEnv("NEXT_PUBLIC_GOOGLE_ADS_ID", IDS.NEXT_PUBLIC_GOOGLE_ADS_ID);
    const { ConsentBanner } = await import("@/components/analytics/ConsentBanner");
    const { AD_CONSENT_VERSION } = await import("../config");
    const html = renderToString(createElement(ConsentBanner));
    expect(html).toContain("Accepter");
    expect(html).toContain("Google et Meta");
    expect(html).toContain(`m.v===&quot;${AD_CONSENT_VERSION}&quot;`.replace(/&quot;/g, '"'));
  });
});

describe("navigateur : rien avant consentement", () => {
  it("identifiants de l'adresse gardés en mémoire seulement ; aucune conversion, aucun envoi à gtag", async () => {
    setIds();
    const { storage, gtag, fbq } = fakeBrowser(LANDING);
    const browser = await import("../browser");
    const { track } = await import("@/lib/analytics/track");
    browser.noteLandingClicks(new Date("2026-09-13T12:00:00Z"));
    expect(storage.size).toBe(0);
    expect(browser.adsFormPayload()).toBeUndefined();
    expect(browser.fireConversion("soumission", "ev-00000001")).toEqual({ google: false, meta: false });
    track("lead_submitted", { method: "courriel" });
    track("phone_click");
    expect(gtag).not.toHaveBeenCalled();
    expect(fbq).not.toHaveBeenCalled();
    expect(storage.size).toBe(0);
  });

  it("« Accepter » écrit les identifiants en attente (90 jours) ; « Refuser » ensuite les efface", async () => {
    setIds();
    const { storage } = fakeBrowser(LANDING);
    const browser = await import("../browser");
    const consent = await import("../consent");
    const { CLICKS_KEY } = await import("../clicks");
    const now = new Date("2026-09-13T12:00:00Z");
    browser.noteLandingClicks(now);
    consent.writeConsentRecord("granted", now);
    browser.onConsentChange("granted", now);
    const saved = JSON.parse(storage.getItem(CLICKS_KEY)!);
    expect(saved.gclid).toBe(FAKE.gclid);
    expect(saved.fbc).toBe(`fb.1.${now.getTime()}.${FAKE.fbclid}`);
    expect(saved.exp).toBe("2026-12-12T12:00:00.000Z");
    const payload = browser.adsFormPayload(now)!;
    expect(payload.consent).toEqual({ choice: "granted", at: now.toISOString(), version: consent.readConsentRecord()!.version });
    expect(payload.gclid).toBe(FAKE.gclid);
    expect(payload.eventId).toMatch(/^[A-Za-z0-9-]{8,64}$/);

    consent.writeConsentRecord("denied", now);
    browser.onConsentChange("denied", now);
    expect(storage.getItem(CLICKS_KEY)).toBeNull();
    const refused = browser.adsFormPayload(now)!;
    expect(refused).toEqual({ consent: { choice: "denied", at: now.toISOString(), version: refused.consent.version } });
  });

  it("un choix sans version, ou d'une autre version du texte, ne vaut plus (le bandeau réapparaît)", async () => {
    const { readConsentRecord, CONSENT_KEY, CONSENT_META_KEY } = await import("../consent");
    const s = new MemoryStorage();
    s.setItem(CONSENT_KEY, "granted");
    expect(readConsentRecord(s)).toBeNull();
    s.setItem(CONSENT_META_KEY, JSON.stringify({ v: "2020-01-01", at: "2026-09-01T00:00:00Z" }));
    expect(readConsentRecord(s)).toBeNull();
  });

  it("mode consentement : les quatre signaux suivent le choix", async () => {
    const { consentModeState } = await import("../consent");
    expect(Object.values(consentModeState("granted"))).toEqual(["granted", "granted", "granted", "granted"]);
    expect(Object.values(consentModeState(null))).toEqual(["denied", "denied", "denied", "denied"]);
    expect(Object.values(consentModeState("denied"))).toEqual(["denied", "denied", "denied", "denied"]);
  });
});
