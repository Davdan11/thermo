/* Flux CSV de Google Ads : format exact, valeur = commission hors taxes sans LogisVert, exclusions, authentification. */
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import type { JournalEntry } from "@/lib/crm/lead-journal";
import { daysAgo, entry, NOW, quote } from "@/lib/gestion/crm/__tests__/fixtures";
import type { Job } from "@/lib/gestion/types";
import { percentOf } from "@/lib/soumissions/money";
import { AD_CONSENT_VERSION } from "../config";
import { feedAuth } from "../feed-auth";
import { GOOGLE_FEED_HEADERS, googleTime, googleValue, toGoogleCsv } from "../google-feed";
import { firstAcceptance, saleConversions, type ClientLike } from "../sales";
import type { AdsAttribution } from "../types";
import { FAKE } from "./helpers";

const ads = (over: Partial<AdsAttribution> = {}, clickDays = 5): AdsAttribution => ({
  consent: { choice: "granted", at: daysAgo(clickDays).toISOString(), version: AD_CONSENT_VERSION },
  gclid: FAKE.gclid,
  clickAt: daysAgo(clickDays).toISOString(),
  receivedAt: daysAgo(clickDays).toISOString(),
  ...over,
});
const demand = (a: AdsAttribution | undefined, days = 5): JournalEntry => entry("soumission", daysAgo(days), { firstName: "Camille", phone: "514 555-0199", email: "camille@exemple.ca" }, { attribution: { channel: "google-ads", ...(a ? { ads: a } : {}) } });
const client = (journal: JournalEntry[], opts: Parameters<typeof quote>[0] = {}, jobs: Job[] = []): ClientLike => ({ id: "c_000000000001", journal, quotes: [quote({ sentAt: daysAgo(3), acceptedAt: daysAgo(2), ...opts })], jobs, phones: ["+15145550199"], emails: ["camille@exemple.ca"] });

describe("format", () => {
  it("heure de Montréal avec décalage : heure avancée et heure normale", () => {
    expect(googleTime("2026-09-13T18:05:00Z")).toBe("2026-09-13 14:05:00-0400");
    expect(googleTime("2026-12-01T17:00:00.000Z")).toBe("2026-12-01 12:00:00-0500");
  });

  it("valeur : point décimal, deux décimales", () => {
    expect(googleValue(41_250)).toBe("412.50");
    expect(googleValue(5)).toBe("0.05");
    expect(googleValue(100_000)).toBe("1000.00");
    expect(googleValue(-3)).toBe("0.00");
  });

  it("CSV exact : en-têtes, une colonne par identifiant, CRLF, UTF-8 sans BOM, aucun renseignement personnel", () => {
    const gclid = client([demand(ads())]);
    const gbraid = client([demand(ads({ gclid: undefined, gbraid: FAKE.gbraid }))]);
    gbraid.id = "c_000000000002";
    const conversions = saleConversions([gclid, gbraid], { percent: 10, now: NOW });
    const csv = toGoogleCsv(conversions);
    const lines = csv.split("\r\n");
    expect(lines[0]).toBe("Google Click ID,GBRAID,WBRAID,Conversion Name,Conversion Time,Conversion Value,Conversion Currency,Order ID,Ad User Data,Ad Personalization");
    expect(lines[0].split(",")).toEqual([...GOOGLE_FEED_HEADERS]);
    expect(lines).toHaveLength(4); // en-têtes, deux lignes, fin de fichier
    expect(lines[3]).toBe("");
    const byId = (id: string) => lines.find((l) => l.includes(id))!.split(",");
    const rowG = byId(FAKE.gclid);
    const a = firstAcceptance(gclid.quotes[0])!;
    expect(rowG).toEqual([FAKE.gclid, "", "", "Vente signée", googleTime(a.at), googleValue(percentOf(a.snapshot.totals.taxableCents, 10)), "CAD", `${gclid.quotes[0].number}-V`, "Granted", "Granted"]);
    expect(rowG[4]).toMatch(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}[+-]\d{4}$/);
    const rowB = byId(FAKE.gbraid);
    expect(rowB.slice(0, 3)).toEqual(["", FAKE.gbraid, ""]);
    const bytes = Buffer.from(csv, "utf8");
    expect([...bytes.subarray(0, 3)]).not.toEqual([0xef, 0xbb, 0xbf]);
    expect(bytes.includes(Buffer.from([0xc3, 0xa9]))).toBe(true); // « é » de « Vente signée » en UTF-8
    expect(csv).not.toMatch(/Camille|exemple\.ca|555|@/);
  });
});

describe("valeur : commission hors taxes, sans LogisVert", () => {
  it("pourcentage du volet B sur le sous-total après rabais et avant taxes ; LogisVert ignoré", () => {
    const withAid = client([demand(ads())], { mode: "cession" });
    const noAid = client([demand(ads())], { mode: "aucune" });
    const [s1] = saleConversions([withAid], { percent: 10, now: NOW });
    const [s2] = saleConversions([noAid], { percent: 10, now: NOW });
    const totals = firstAcceptance(withAid.quotes[0])!.snapshot.totals;
    expect(totals.logisvertCents).toBeGreaterThan(0);
    expect(s1.valueCents).toBe(percentOf(totals.taxableCents, 10));
    expect(s1.valueCents).toBe(s2.valueCents);
    expect(s1.valueCents).toBeLessThan(percentOf(totals.totalCents, 10)); // jamais sur le total taxes comprises
    const [s3] = saleConversions([withAid], { percent: 12.5, now: NOW });
    expect(s3.valueCents).toBe(percentOf(totals.taxableCents, 12.5));
  });
});

describe("exclusions (jamais dans le flux)", () => {
  it("sans consentement, sans identifiant, clic de plus de 90 jours, aucune demande", () => {
    const refused = client([demand(ads({ consent: { choice: "denied", at: daysAgo(5).toISOString(), version: AD_CONSENT_VERSION }, gclid: undefined, clickAt: undefined }))]);
    const noAds = client([demand(undefined)]);
    const noId = client([demand(ads({ gclid: undefined, fbc: `fb.1.${daysAgo(5).getTime()}.${FAKE.fbclid}` }))]);
    const old = client([demand(ads({}, 95), 95)], { sentAt: daysAgo(94), acceptedAt: daysAgo(93) });
    const manual = client([]);
    const reasons = [refused, noAds, noId, old, manual].map((c) => saleConversions([c], { percent: 10, now: NOW })[0].google);
    expect(reasons).toEqual([
      { eligible: false, reason: "sans-consentement" },
      { eligible: false, reason: "sans-consentement" },
      { eligible: false, reason: "sans-identifiant" },
      { eligible: false, reason: "clic-trop-ancien" },
      { eligible: false, reason: "sans-demande" },
    ]);
    const csv = toGoogleCsv([refused, noAds, noId, old, manual].flatMap((c) => saleConversions([c], { percent: 10, now: NOW })));
    expect(csv).toBe(`${GOOGLE_FEED_HEADERS.join(",")}\r\n`);
  });

  it("« Installation terminée » : seulement si demandée, valeur de la facture émise", () => {
    const job = { id: "j_test0001", number: 7, status: "termine", completedAt: daysAgo(1).toISOString(), createdAt: daysAgo(2).toISOString(), updatedAt: daysAgo(1).toISOString(), client: { firstName: "Camille", lastName: "Exemple", phone: "514 555-0199", email: "camille@exemple.ca", address: "", city: "Laval", postalCode: "H7A1A1" }, audit: [], offers: [], internalNotes: "" } as unknown as Job;
    const c = client([demand(ads())], {}, [job]);
    expect(saleConversions([c], { percent: 10, now: NOW }).map((x) => x.kind)).toEqual(["vente"]);
    const both = saleConversions([c], { percent: 10, now: NOW, includeInstallation: true, invoices: [{ quoteId: c.quotes[0].id, jobId: job.id, commissionCents: 43_210, status: "emise" }] });
    const inst = both.find((x) => x.kind === "installation")!;
    expect(inst).toMatchObject({ name: "Installation terminée", valueCents: 43_210, orderId: `${c.quotes[0].number}-J7` });
    expect(toGoogleCsv(both)).toContain(",Installation terminée,");
  });
});

describe("authentification HTTP Basic", () => {
  const env = { NODE_ENV: "test", ADS_FEED_USER: "google-flux", ADS_FEED_PASSWORD: "motdepasse-de-test-0001" } as unknown as NodeJS.ProcessEnv;
  const req = (auth?: string) => new Request("https://thermopompesavendre.ca/api/publicite/ventes-google.csv", { headers: auth ? { authorization: auth } : {} });
  const basic = (u: string, p: string) => `Basic ${Buffer.from(`${u}:${p}`).toString("base64")}`;

  it("identifiant et mot de passe exigés ; mauvais → refus", () => {
    expect(feedAuth(req(), env)).toBe("refuse");
    expect(feedAuth(req(basic("google-flux", "mauvais")), env)).toBe("refuse");
    expect(feedAuth(req(basic("autre", env.ADS_FEED_PASSWORD!)), env)).toBe("refuse");
    expect(feedAuth(req("Bearer x"), env)).toBe("refuse");
    expect(feedAuth(req(basic("google-flux", env.ADS_FEED_PASSWORD!)), env)).toBe("ok");
  });

  it("production sans variables (ou mot de passe trop court) : flux fermé", () => {
    expect(feedAuth(req(), { NODE_ENV: "production" } as unknown as NodeJS.ProcessEnv)).toBe("absent");
    expect(feedAuth(req(basic("u", "court")), { NODE_ENV: "production", ADS_FEED_USER: "u", ADS_FEED_PASSWORD: "court" } as unknown as NodeJS.ProcessEnv)).toBe("absent");
  });

  describe("route", () => {
    const saved = process.env;
    let dir: string;
    beforeEach(async () => {
      dir = await mkdtemp(path.join(tmpdir(), "thermo-flux-"));
      process.env = { ...saved, ...env, LEAD_JOURNAL_DIR: path.join(dir, "leads"), GESTION_DATA_DIR: dir, TEXTOS_DATA_DIR: dir, RELANCES_FILE: path.join(dir, "relances.json") };
    });
    afterEach(async () => {
      process.env = saved;
      await rm(dir, { recursive: true, force: true });
    });

    it("401 avec WWW-Authenticate sans identifiants ; 200 en CSV avec ; jamais indexé ni mis en cache", async () => {
      const { GET } = await import("@/app/api/publicite/ventes-google.csv/route");
      const denied = await GET(req());
      expect(denied.status).toBe(401);
      expect(denied.headers.get("www-authenticate")).toMatch(/^Basic realm=/);
      expect(denied.headers.get("x-robots-tag")).toContain("noindex");
      const ok = await GET(req(basic("google-flux", env.ADS_FEED_PASSWORD!)));
      expect(ok.status).toBe(200);
      expect(ok.headers.get("content-type")).toBe("text/csv; charset=utf-8");
      expect(ok.headers.get("x-robots-tag")).toContain("noindex");
      expect(ok.headers.get("cache-control")).toBe("no-store");
      expect(await ok.text()).toBe(`${GOOGLE_FEED_HEADERS.join(",")}\r\n`);
    }, 30_000);
  });
});
