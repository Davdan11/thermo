/* Meta : hachage normalisé, dédoublonnage par event_id, aucun appel réseau hors production. */
import { createHash } from "node:crypto";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { JournalEntry } from "@/lib/crm/lead-journal";
import { AD_CONSENT_VERSION, META_MAX_AGE_MS } from "../config";
import { buildMetaEvent, normalizeEmailForMeta, normalizePhoneForMeta, sendMetaEvents, sha256Hex } from "../meta-capi";
import { sendMetaLead } from "../meta-lead";
import { metaPurchaseId, pendingMetaPurchases, type SaleConversion } from "../sales";
import { adsFromBody } from "../server-attribution";
import { FAKE, fakeBrowser } from "./helpers";

const KEYS = { META_PIXEL_ID: "100000000000001", META_CAPI_TOKEN: "TEST_token_0000000000000000000000" };
const env = (over: Record<string, string>) => ({ ...KEYS, ...over }) as unknown as NodeJS.ProcessEnv;
const hex = (s: string) => createHash("sha256").update(s).digest("hex");

let fetchSpy: ReturnType<typeof vi.spyOn>;
beforeEach(() => {
  fetchSpy = vi.spyOn(globalThis, "fetch").mockRejectedValue(new Error("aucun réseau dans les tests"));
});
afterEach(() => {
  expect(fetchSpy).not.toHaveBeenCalled(); // jamais le vrai réseau
  fetchSpy.mockRestore();
  vi.unstubAllGlobals();
  vi.unstubAllEnvs();
  vi.resetModules();
});

describe("normalisation et hachage", () => {
  it("courriel : minuscules sans espaces ; téléphone : chiffres, indicatif 1", () => {
    expect(normalizeEmailForMeta("  Camille.Exemple@Exemple.CA ")).toBe("camille.exemple@exemple.ca");
    expect(normalizeEmailForMeta("pas un courriel")).toBeNull();
    expect(normalizePhoneForMeta("(514) 555-0199")).toBe("15145550199");
    expect(normalizePhoneForMeta("+1 514 555 0199")).toBe("15145550199");
    expect(normalizePhoneForMeta("555-0199")).toBeNull();
  });

  it("em et ph hachés (SHA-256 de la valeur normalisée) ; fbc, fbp et navigateur en clair ; valeur en CAD", () => {
    const e = buildMetaEvent({ name: "Purchase", eventId: "vente-q_test", time: new Date("2026-09-13T18:05:00Z"), sourceUrl: "https://thermopompesavendre.ca/devis", userAgent: "Navigateur de test", emails: [" Camille@Exemple.ca", "camille@exemple.ca"], phones: ["514-555-0199"], fbc: `fb.1.1757786700000.${FAKE.fbclid}`, valueCents: 41_250 });
    expect(e.user_data.em).toEqual([hex("camille@exemple.ca")]);
    expect(e.user_data.ph).toEqual([hex("15145550199")]);
    expect(sha256Hex("15145550199")).toBe(hex("15145550199"));
    expect(e.user_data.fbc).toBe(`fb.1.1757786700000.${FAKE.fbclid}`);
    expect(e.user_data.client_user_agent).toBe("Navigateur de test");
    expect(e).toMatchObject({ event_name: "Purchase", event_time: Date.parse("2026-09-13T18:05:00Z") / 1000, event_id: "vente-q_test", action_source: "website", custom_data: { value: 412.5, currency: "CAD" } });
    expect(JSON.stringify(e)).not.toMatch(/exemple\.ca|5550199/);
  });
});

describe("aucun appel réseau hors production", () => {
  const event = buildMetaEvent({ name: "Lead", eventId: "ev-00000001", time: new Date(), sourceUrl: "https://thermopompesavendre.ca/soumission" });

  it("test et développement, même avec les clés : inactif, fetch jamais appelé", async () => {
    const spy = vi.fn();
    for (const NODE_ENV of ["test", "development"]) {
      expect(await sendMetaEvents([event], { env: env({ NODE_ENV }), fetchImpl: spy })).toMatchObject({ status: "inactif" });
    }
    expect(await sendMetaEvents([event], { env: { NODE_ENV: "production" } as unknown as NodeJS.ProcessEnv, fetchImpl: spy })).toMatchObject({ status: "inactif" });
    expect(spy).not.toHaveBeenCalled();
  });

  it("production avec clés : un POST (fetch simulé), jeton dans le corps, code de test facultatif", async () => {
    const spy = vi.fn().mockResolvedValue({ ok: true, status: 200, json: async () => ({ events_received: 1 }) });
    const r = await sendMetaEvents([event], { env: env({ NODE_ENV: "production", META_TEST_EVENT_CODE: "TEST123" }), fetchImpl: spy });
    expect(r.status).toBe("envoye");
    expect(spy).toHaveBeenCalledTimes(1);
    const [url, init] = spy.mock.calls[0];
    expect(url).toBe(`https://graph.facebook.com/v25.0/${KEYS.META_PIXEL_ID}/events`);
    expect(url).not.toContain("access_token");
    const body = JSON.parse(init.body);
    expect(body).toMatchObject({ access_token: KEYS.META_CAPI_TOKEN, test_event_code: "TEST123", data: [{ event_id: "ev-00000001" }] });
  });

  it("Lead d'une soumission : rien hors production (aucune lecture de fichier, aucun réseau)", async () => {
    const entry = { id: "e1", at: new Date().toISOString(), kind: "soumission", lead: { email: "camille@exemple.ca" }, attribution: { channel: "google-ads", ads: { consent: { choice: "granted", at: new Date().toISOString(), version: AD_CONSENT_VERSION }, eventId: "ev-00000001", receivedAt: new Date().toISOString() } } } as JournalEntry;
    const spy = vi.fn();
    expect(await sendMetaLead(entry, { env: env({ NODE_ENV: "test" }), fetchImpl: spy })).toBe("inactif");
    expect(spy).not.toHaveBeenCalled();
  });
});

describe("dédoublonnage par event_id", () => {
  it("le pixel du navigateur et l'API serveur portent le même event_id pour une soumission", async () => {
    vi.stubEnv("NEXT_PUBLIC_META_PIXEL_ID", KEYS.META_PIXEL_ID);
    vi.stubEnv("NEXT_PUBLIC_GOOGLE_ADS_ID", "AW-000000001");
    vi.stubEnv("NEXT_PUBLIC_GOOGLE_ADS_LABEL_SOUMISSION", "TEST_label_soumission");
    const { gtag, fbq } = fakeBrowser(`https://thermopompesavendre.ca/?gclid=${FAKE.gclid}`);
    const consent = await import("../consent");
    const browser = await import("../browser");
    const { track } = await import("@/lib/analytics/track");
    const now = new Date();
    consent.writeConsentRecord("granted", now);
    browser.noteLandingClicks(now);
    const payload = browser.adsFormPayload(now)!; // corps du formulaire
    const server = adsFromBody({ attribution: { ads: payload } }, now)!;
    const capi = buildMetaEvent({ name: "Lead", eventId: server.eventId!, time: now, sourceUrl: "https://thermopompesavendre.ca/soumission" });
    track("lead_submitted", { method: "courriel" }); // après le succès du formulaire
    expect(capi.event_id).toBe(payload.eventId);
    expect(fbq).toHaveBeenCalledWith("track", "Lead", {}, { eventID: payload.eventId });
    expect(gtag).toHaveBeenCalledWith("event", "conversion", { send_to: "AW-000000001/TEST_label_soumission", transaction_id: payload.eventId });
    expect(gtag).toHaveBeenCalledWith("event", "generate_lead", { event_id: payload.eventId });
  });

  it("un achat envoyé avec succès n'est jamais renvoyé ; plus de 7 jours ou sans signal Meta : non plus", () => {
    const now = new Date("2026-09-13T12:00:00Z");
    const sale = (id: string, daysOld: number, eligible = true): SaleConversion =>
      ({ key: `vente:${id}`, kind: "vente", quoteId: id, at: new Date(now.getTime() - daysOld * 86_400_000).toISOString(), consent: "granted", meta: { eligible, emails: [], phones: [] } }) as unknown as SaleConversion;
    const list = [sale("q_a", 1), sale("q_b", 2), sale("q_c", 8), sale("q_d", 1, false)];
    const sent = { [metaPurchaseId(list[0])]: { ok: true }, [metaPurchaseId(list[1])]: { ok: false } };
    expect(pendingMetaPurchases(list, sent, now).map((c) => c.quoteId)).toEqual(["q_b"]);
    expect(META_MAX_AGE_MS).toBe(7 * 86_400_000);
  });
});
