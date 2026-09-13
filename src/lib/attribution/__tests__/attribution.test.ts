/* Attribution : classement des canaux et nettoyage (jamais d'adresse complète ni de renseignement personnel). */
import { mkdtemp, readFile, readdir, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { attributionFromBody, CHANNEL_LABELS, classifyChannel, pipedriveSourceLabel, sanitizeHost, sanitizeLandingPath, sanitizePayload, sanitizeUtmValue, type ChannelId } from "../core";
import { PIPEDRIVE_OPTIONS } from "@/lib/crm/pipedrive";
import { journalLead } from "@/lib/crm/lead-journal";

const channelOf = (attribution: unknown) => attributionFromBody({ attribution }).channel;

describe("classement des canaux", () => {
  const cases: Array<[string, unknown, ChannelId]> = [
    ["gclid présent", { landing: "/", gclid: true }, "google-ads"],
    ["utm google / cpc", { utm: { utm_source: "google", utm_medium: "cpc" } }, "google-ads"],
    ["référent google.ca", { refHost: "www.google.ca" }, "google-naturel"],
    ["référent google.com (application Android)", { refHost: "com.google.android.googlequicksearchbox" }, "google-naturel"],
    ["fiche Google (utm gbp)", { refHost: "google.com", utm: { utm_source: "gbp", utm_medium: "organic" } }, "fiche-google"],
    ["maps.google.ca", { refHost: "maps.google.ca" }, "fiche-google"],
    ["l.facebook.com", { refHost: "l.facebook.com" }, "facebook-instagram"],
    ["instagram", { refHost: "instagram.com" }, "facebook-instagram"],
    ["fbclid seul", { fbclid: true }, "facebook-instagram"],
    ["bing", { refHost: "bing.com" }, "bing"],
    ["duckduckgo", { refHost: "duckduckgo.com" }, "autres-moteurs"],
    ["ChatGPT (utm_source=chatgpt.com)", { utm: { utm_source: "chatgpt.com" } }, "ia"],
    ["Gemini n'est pas Google naturel", { refHost: "gemini.google.com" }, "ia"],
    ["perplexity", { refHost: "www.perplexity.ai" }, "ia"],
    ["courriel (utm_medium=email)", { utm: { utm_source: "infolettre-septembre", utm_medium: "email" } }, "courriel"],
    ["webmail", { refHost: "mail.google.com" }, "courriel"],
    ["autre campagne", { utm: { utm_source: "depliant" } }, "campagne"],
    ["autre site", { refHost: "forum.renovation-quebec.ca" }, "autre-site"],
    ["direct", { landing: "/soumission" }, "direct"],
    ["le site lui-même n'est pas un référent", { refHost: "https://thermopompesavendre.ca/thermopompes" }, "direct"],
  ];
  it.each(cases)("%s", (_, input, expected) => {
    expect(channelOf(input)).toBe(expected);
  });

  it("formulaire sans attribution : « non transmis », jamais deviné", () => {
    expect(attributionFromBody({ firstName: "Jean" })).toEqual({ channel: "non-transmis" });
    expect(attributionFromBody({ attribution: "google" })).toEqual({ channel: "non-transmis" });
    expect(attributionFromBody(null)).toEqual({ channel: "non-transmis" });
  });

  it("chaque canal a un libellé français", () => {
    for (const label of Object.values(CHANNEL_LABELS)) expect(label.length).toBeGreaterThan(3);
    expect(CHANNEL_LABELS.inconnu).toBe("Inconnu (avant le suivi)");
    expect(CHANNEL_LABELS.telephone).toBe("Téléphone");
  });
});

describe("nettoyage", () => {
  it("référent : domaine seulement, jamais l'adresse complète ni la recherche", () => {
    const a = attributionFromBody({ attribution: { refHost: "https://www.google.ca/search?q=thermopompe+jean+tremblay+514-555-1234&client=firefox" } });
    expect(a.refHost).toBe("google.ca");
    expect(JSON.stringify(a)).not.toMatch(/search|tremblay|555|client/);
    expect(sanitizeHost("HTTPS://Sub.Example.COM:8443/page?x=1")).toBe("sub.example.com");
    expect(sanitizeHost("pas un domaine")).toBeUndefined();
    expect(sanitizeHost("x".repeat(120) + ".com")).toBeUndefined();
  });

  it("page d'arrivée : sans requête ni fragment, jetons et renseignements masqués", () => {
    expect(sanitizeLandingPath("/soumission?utm_source=google&email=a@b.ca#haut")).toBe("/soumission");
    expect(sanitizeLandingPath("https://thermopompesavendre.ca/thermopompes/thermopompe-murale?x=1")).toBe("/thermopompes/thermopompe-murale");
    expect(sanitizeLandingPath("/job/Xy7_kP2mQ9vLr4tZ8wB1nC6dF3hJ5sA0")).toBe("/job");
    expect(sanitizeLandingPath("/alertes/confirmer/Xy7kP2mQ9vLr4tZ8wB1nC6dF3hJ5sA0e")).toBe("/alertes/confirmer/:jeton");
    expect(sanitizeLandingPath("/profil/jean.tremblay@exemple.ca")).toBe("/profil/:masque");
    expect(sanitizeLandingPath("/rappel/514-555-1234")).toBe("/rappel/:masque");
    expect(sanitizeLandingPath("/produit/fujitsu-aouh12ktap1")).toBe("/produit/fujitsu-aouh12ktap1");
    expect(sanitizeLandingPath("/thermopompe-grand-froid-moins-30-degres-quebec-guide-complet")).toBe("/thermopompe-grand-froid-moins-30-degres-quebec-guide-complet");
    expect(sanitizeLandingPath("//pirate.example/x")).toBeUndefined();
    expect(sanitizeLandingPath("javascript:alert(1)")).toBeUndefined();
    expect(sanitizeLandingPath("/" + "a-b".repeat(100))!.length).toBeLessThanOrEqual(160);
  });

  it("utm : minuscules, 80 caractères, courriels et numéros retirés", () => {
    expect(sanitizeUtmValue("  Automne_2026  ")).toBe("automne_2026");
    expect(sanitizeUtmValue("jean@exemple.ca")).toBeUndefined();
    expect(sanitizeUtmValue("rappel 514 555 1234")).toBeUndefined();
    expect(sanitizeUtmValue("x".repeat(200))).toHaveLength(80);
  });

  it("gclid / fbclid : présence seulement (la valeur n'est jamais gardée), champs inconnus ignorés", () => {
    const p = sanitizePayload({ gclid: "Cj0KCQjw-valeur-secrete", fbclid: true, email: "a@b.ca", firstName: "Jean", phone: "5145551234", utm: { utm_source: "google", utm_evil: "x" } });
    expect(p).toEqual({ fbclid: true, utm: { utm_source: "google" } });
    const a = attributionFromBody({ attribution: { gclid: true, landing: "/" } });
    expect(a).toEqual({ channel: "google-ads", landing: "/", gclid: true });
    expect(JSON.stringify(attributionFromBody({ attribution: { gclid: "Cj0KCQjw-valeur-secrete" } }))).not.toContain("Cj0");
  });

  it("source Pipedrive : seulement des options qui existent déjà", () => {
    const existing = Object.keys(PIPEDRIVE_OPTIONS.SOURCE);
    for (const ch of Object.keys(CHANNEL_LABELS) as ChannelId[]) {
      const label = pipedriveSourceLabel({ channel: ch });
      if (label) expect(existing).toContain(label);
    }
    expect(pipedriveSourceLabel({ channel: "google-ads" })).toBe("Google Ads");
    expect(pipedriveSourceLabel({ channel: "google-naturel" })).toBe("SEO");
    expect(pipedriveSourceLabel({ channel: "facebook-instagram", utm: { utm_medium: "paid" } })).toBe("Meta Ads");
    expect(pipedriveSourceLabel({ channel: "facebook-instagram" })).toBeUndefined();
    expect(pipedriveSourceLabel({ channel: "inconnu" })).toBeUndefined();
  });
});

describe("journal", () => {
  const env = process.env;
  let dir: string;
  beforeEach(async () => {
    dir = await mkdtemp(path.join(tmpdir(), "thermo-attr-"));
    process.env = { ...env, LEAD_JOURNAL_DIR: dir };
  });
  afterEach(async () => {
    process.env = env;
    await rm(dir, { recursive: true, force: true });
  });

  it("l'attribution est écrite à côté du lead, pas dedans", async () => {
    const attribution = attributionFromBody({ attribution: { landing: "/soumission", refHost: "google.ca" } });
    await journalLead("soumission", { firstName: "Julie" }, attribution);
    await journalLead("appel-manque", { phone: "+15145550199" });
    const [file] = await readdir(dir);
    const [first, second] = (await readFile(path.join(dir, file), "utf8")).trim().split("\n").map((l) => JSON.parse(l));
    expect(first.attribution).toEqual({ channel: "google-naturel", landing: "/soumission", refHost: "google.ca" });
    expect(first.lead).toEqual({ firstName: "Julie" });
    expect(second.attribution).toBeUndefined();
  });
});
