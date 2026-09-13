/* Conformité C2 — messages aux clients : un désabonnement commercial (lien en un clic) prend effet tout de suite
   sans bloquer les messages de service ; offres d'entretien, référence et promotions seulement avec un consentement
   (case 5.3, exprès, ou tacite encore en vigueur). Aucun envoi réel : hors production, tout est simulé. */
import { rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { commercialConsent } from "@/lib/consentements/commercial";
import { recordWithdrawal } from "@/lib/consentements/store";
import { makeJob, tempDir, testEnv, writeStores } from "../../commissions/__tests__/fixtures";
import { MESSAGE_CATEGORY, runTick } from "../engine";
import { realChannels, sendClientMail } from "../send";
import { readAutomations, suppressionHash } from "../store";
import { AUTOMATION_IDS } from "../types";

const mail = { subject: "Sujet", html: "<p>x</p>", text: "x" };

describe("désabonnement commercial et messages de service", () => {
  const env = process.env;
  let dir: string;
  beforeEach(async () => {
    dir = await tempDir();
    process.env = testEnv(dir);
    vi.stubGlobal("fetch", vi.fn(async () => { throw new Error("réseau interdit dans les tests"); }));
  });
  afterEach(async () => {
    process.env = env;
    vi.unstubAllGlobals();
    await rm(dir, { recursive: true, force: true });
  });

  it("courriel : désabonné → offres et suivis arrêtés, service (rendez-vous, chantier, garantie) encore envoyé", async () => {
    const suppressed = new Set([suppressionHash("e:camille@exemple.ca")]);
    expect(await sendClientMail("camille@exemple.ca", mail, { suppressed, label: "rappel la veille", category: "operationnel" })).toBe("simule");
    expect(await sendClientMail("camille@exemple.ca", mail, { suppressed, label: "entretien", category: "commercial" })).toBe("desabonne");
    expect(await sendClientMail("camille@exemple.ca", mail, { suppressed, label: "sondage" })).toBe("desabonne");
  });

  it("chaque automatisation a sa nature : service, suivi ou commercial", () => {
    for (const k of ["rappel la veille", "dossier LogisVert", "suivi LogisVert", "garantie"]) expect(MESSAGE_CATEGORY[k]).toBe("operationnel");
    expect(MESSAGE_CATEGORY.sondage).toBe("suivi");
    expect(MESSAGE_CATEGORY.entretien).toBe("commercial");
    expect(MESSAGE_CATEGORY["référence"]).toBe("commercial");
  });

  it("lien en un clic : l'offre d'entretien ne part plus, le rappel de la veille de l'installation part quand même", async () => {
    const client = { firstName: "Camille", lastName: "Exemple", phone: "514 555-0199", email: "camille@exemple.ca", address: "10 rue Fictive", city: "Laval", postalCode: "H7A 1A1" };
    const planned = makeJob({ id: "j_planifie0001", number: 8, status: "planifie", scheduledFor: "2026-09-12", completedAt: undefined, client });
    const done = makeJob({ id: "j_termine00001", number: 9, status: "termine", createdAt: "2025-08-01T15:00:00.000Z", updatedAt: "2025-09-10T18:00:00.000Z", completedAt: "2025-09-10T18:00:00.000Z", client });
    await writeStores(dir, { jobs: [planned, done], quotes: [] });
    const only = new Set(["rappel-veille", "entretien"]);
    await writeFile(path.join(dir, "automatisations.json"), JSON.stringify({ version: 1, startedAt: "2025-01-01T00:00:00.000Z", lastTick: null, settings: { enabled: Object.fromEntries(AUTOMATION_IDS.map((id) => [id, only.has(id)])), referralReward: "" }, log: {} }));
    // Désabonnement en un clic (volet B) et retrait consigné (C2), la veille au soir.
    await writeFile(path.join(dir, "apres-vente.json"), JSON.stringify({ version: 1, dossiers: {}, suppressed: [suppressionHash("e:camille@exemple.ca"), suppressionHash("p:+15145550199")], referrals: {} }));
    await recordWithdrawal({ email: "camille@exemple.ca", phone: "514 555-0199", purposes: ["rappels", "promotions"], method: "lien-un-clic" }, new Date("2026-09-10T02:00:00Z"));
    const tasks: string[] = [];
    await runTick({ now: new Date("2026-09-11T21:00:00Z"), channels: realChannels, baseUrl: "https://exemple.ca", crm: { addTask: async (t) => void tasks.push(t.title), clientIdForJob: async () => null } });
    const log = (await readAutomations()).log;
    expect(log["rappel-veille:j_planifie0001:2026-09-12"]).toMatchObject({ status: "fait", channels: { email: "simule" } });
    expect(log["entretien:j_termine00001:12"].channels).toMatchObject({ email: "desabonne", crm: "fait" });
    expect(tasks.some((t) => t.startsWith("Entretien annuel"))).toBe(true);
  });
});

describe("promotions seulement avec consentement (règles du chantier T + case 5.3)", () => {
  const now = new Date("2026-09-13T12:00:00Z");

  it("sans case 5.3, sans exprès, tacite expiré : rien ; case 5.3 cochée : oui", () => {
    expect(commercialConsent({ form: null, express: null, purchaseAt: "2024-01-01T00:00:00Z", inquiryAt: null }, now)).toMatchObject({ ok: false, reason: "Consentement tacite expiré" });
    expect(commercialConsent({ form: null, express: null, purchaseAt: null, inquiryAt: null }, now).ok).toBe(false);
    expect(commercialConsent({ form: { at: "2026-01-01T00:00:00Z", withdrawnAt: null }, express: null, purchaseAt: null, inquiryAt: null }, now)).toMatchObject({ ok: true, basis: "formulaire", expiresAt: null });
  });

  it("tacite limité dans le temps (achat 2 ans, demande 6 mois), jamais prolongé", () => {
    const r = commercialConsent({ form: null, express: null, purchaseAt: "2025-09-10T18:00:00Z", inquiryAt: null }, now);
    expect(r).toMatchObject({ ok: true, basis: "achat", expiresAt: "2027-09-10T18:00:00.000Z" });
    expect(commercialConsent({ form: null, express: null, purchaseAt: null, inquiryAt: "2026-01-01T00:00:00Z" }, now).ok).toBe(false);
  });

  it("désabonnement en un clic : arrête aussi l'exprès plus ancien et les bases tacites ; un accord exprès noté après le rétablit", () => {
    const form = { at: null, withdrawnAt: "2026-06-01T00:00:00.000Z" };
    expect(commercialConsent({ form, express: null, purchaseAt: "2026-05-01T00:00:00Z", inquiryAt: null }, now)).toMatchObject({ ok: false });
    expect(commercialConsent({ form, express: { at: "2026-01-01T00:00:00.000Z", by: "p", note: "tél." }, purchaseAt: null, inquiryAt: null }, now).ok).toBe(false);
    expect(commercialConsent({ form, express: { at: "2026-07-01T00:00:00.000Z", by: "p", note: "tél." }, purchaseAt: null, inquiryAt: null }, now)).toMatchObject({ ok: true, basis: "expres" });
  });
});
