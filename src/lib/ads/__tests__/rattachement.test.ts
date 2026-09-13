/* Rattachement à la demande : journal des demandes, puis fiche client du CRM. */
import { mkdtemp, readdir, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { journalLead } from "@/lib/crm/lead-journal";
import { buildBundles } from "@/lib/gestion/crm/model";
import { daysAgo, entry, NOW, quote, src } from "@/lib/gestion/crm/__tests__/fixtures";
import { AD_CONSENT_VERSION } from "../config";
import { saleConversions } from "../sales";
import { adsFromBody, attributionWithAds } from "../server-attribution";
import { FAKE } from "./helpers";

const consent = (choice: "granted" | "denied", at = daysAgo(3)) => ({ choice, at: at.toISOString(), version: AD_CONSENT_VERSION });
const granted = (over: Record<string, unknown> = {}) => ({ consent: consent("granted"), eventId: "11111111-2222-4333-8444-555555555555", gclid: FAKE.gclid, fbc: `fb.1.${daysAgo(3).getTime()}.${FAKE.fbclid}`, clickAt: daysAgo(3).toISOString(), utm: { utm_source: "Google", utm_medium: "cpc" }, ...over });

describe("attribution.ads à la réception", () => {
  it("accord : identifiants, event_id et utm nettoyés ; champs inconnus ignorés", () => {
    const ads = adsFromBody({ attribution: { ads: { ...granted(), email: "jean@exemple.ca" } } }, NOW)!;
    expect(ads).toMatchObject({ consent: consent("granted"), gclid: FAKE.gclid, eventId: "11111111-2222-4333-8444-555555555555", utm: { utm_source: "google", utm_medium: "cpc" }, receivedAt: NOW.toISOString() });
    expect(JSON.stringify(ads)).not.toContain("exemple.ca");
  });

  it("refus : seulement le choix daté et sa version, même si des identifiants sont envoyés", () => {
    const ads = adsFromBody({ attribution: { ads: { ...granted(), consent: consent("denied") } } }, NOW);
    expect(ads).toEqual({ consent: consent("denied"), receivedAt: NOW.toISOString() });
  });

  it("sans choix valide : rien (absent, autre version, date future, identifiant douteux)", () => {
    expect(adsFromBody({ attribution: { landing: "/" } }, NOW)).toBeUndefined();
    expect(adsFromBody({ attribution: { ads: { ...granted(), consent: { ...consent("granted"), version: "2020-01-01" } } } }, NOW)).toBeUndefined();
    expect(adsFromBody({ attribution: { ads: { ...granted(), consent: consent("granted", new Date(NOW.getTime() + 86_400_000)) } } }, NOW)).toBeUndefined();
    expect(adsFromBody({ attribution: { ads: granted({ gclid: "<script>alert(1)</script>" }) } }, NOW)).toBeUndefined();
  });

  it("clic de plus de 90 jours : identifiants retirés, consentement gardé", () => {
    const ads = adsFromBody({ attribution: { ads: granted({ clickAt: daysAgo(91).toISOString() }) } }, NOW)!;
    expect(ads.consent.choice).toBe("granted");
    expect(ads.gclid).toBeUndefined();
    expect(ads.clickAt).toBeUndefined();
  });

  it("l'attribution de la session reste la même (canal, page) ; ads s'y ajoute", () => {
    const a = attributionWithAds({ attribution: { landing: "/soumission", gclid: true, ads: granted() } }, NOW);
    expect(a.channel).toBe("google-ads");
    expect(a.landing).toBe("/soumission");
    expect(a.ads?.gclid).toBe(FAKE.gclid);
    expect(attributionWithAds({ firstName: "Jean" }, NOW)).toEqual({ channel: "non-transmis" });
  });
});

describe("journal puis fiche client", () => {
  const env = process.env;
  let dir: string;
  beforeEach(async () => {
    dir = await mkdtemp(path.join(tmpdir(), "thermo-ads-"));
    process.env = { ...env, LEAD_JOURNAL_DIR: dir };
  });
  afterEach(async () => {
    process.env = env;
    await rm(dir, { recursive: true, force: true });
  });

  it("le journal garde ads à côté du lead (jamais dedans)", async () => {
    await journalLead("soumission", { firstName: "Camille" }, attributionWithAds({ attribution: { landing: "/", ads: granted() } }, NOW));
    const [file] = await readdir(dir);
    const line = JSON.parse((await readFile(path.join(dir, file), "utf8")).trim());
    expect(line.lead).toEqual({ firstName: "Camille" });
    expect(line.attribution.ads).toMatchObject({ gclid: FAKE.gclid, consent: { choice: "granted", version: AD_CONSENT_VERSION } });
  });

  it("la fiche client réunit la demande (clic, consentement) et la soumission acceptée", () => {
    const demand = entry("soumission", daysAgo(3), { firstName: "Camille", phone: "514 555-0199" }, { attribution: { channel: "google-ads", ads: { ...(adsFromBody({ attribution: { ads: granted() } }, daysAgo(3))!) } } });
    const q = quote({ sentAt: daysAgo(2), acceptedAt: daysAgo(1) });
    const bundles = buildBundles(src({ journal: [demand], quotes: [q] }));
    expect(bundles).toHaveLength(1);
    const [sale] = saleConversions(bundles, { percent: 10, now: NOW });
    expect(sale).toMatchObject({ kind: "vente", journalId: demand.id, clientId: bundles[0].id, consent: "granted", channel: "google-ads", click: { type: "gclid", value: FAKE.gclid } });
    expect(sale.google.eligible).toBe(true);
  });
});
