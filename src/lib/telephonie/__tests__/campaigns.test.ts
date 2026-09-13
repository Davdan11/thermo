/* Chantier T — campagnes : segment (installés il y a 11 à 13 mois, ville, marque), exclusions (STOP, consentement expiré,
   sans numéro), jamais d'envoi sans le clic « Envoyer » (nombre confirmé), heures d'envoi, identification et STOP dans
   chaque texto, rapport (envoyés, réponses, STOP). Twilio simulé. */
import { rm } from "node:fs/promises";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { ClientComputed } from "@/lib/gestion/crm/model";
import { resetSecretCache } from "@/lib/gestion/auth/secret";
import { resetCrmMemo } from "@/lib/gestion/crm/service";
import type { Conversation } from "@/lib/textos/types";
import { tempDir } from "@/lib/textos/__tests__/helpers";
import { campaignReport, createCampaign, inSendWindow, launchCampaign, previewCampaign, processCampaigns, saveCampaign, segmentRows } from "../campaigns";
import { addMonths } from "../consent";
import { updateSettings } from "../settings";
import { EMPTY_SEGMENT } from "../campaigns";
import { mutateTelephonie, readTelephonie } from "../store";
import { addJournal, CLIENT_PHONE, mockFetch, telEnv } from "./helpers";

const NOW = new Date("2026-09-16T15:00:00Z"); // mercredi, 11 h à Montréal
const monthsAgo = (m: number) => addMonths(NOW.toISOString(), -m).toISOString();

function client(o: { id: string; phone?: string; city?: string; installedMonthsAgo?: number; brand?: string }): ClientComputed {
  const at = o.installedMonthsAgo !== undefined ? monthsAgo(o.installedMonthsAgo) : null;
  const jobs = at ? [{ id: `j_${o.id}`, status: "termine", completedAt: at, audit: [], updatedAt: at, brand: o.brand ?? "Mitsubishi" }] : [];
  return { b: { id: `c_${o.id.padStart(12, "0")}`, aliases: [], phones: o.phone ? [o.phone] : [], firstName: o.id, lastName: "", city: o.city ?? "Laval", jobs, quotes: [], journal: [], textos: [] }, stage: { stage: "terminee" }, tasks: [], valueCents: null } as unknown as ClientComputed;
}

describe("segment", () => {
  const seg = { ...EMPTY_SEGMENT, installedFromMonths: 11, installedToMonths: 13 };

  it("installés il y a 11 à 13 mois, ville et marque (casse et accents ignorés)", () => {
    const list = [client({ id: "a", phone: "+15145550101", installedMonthsAgo: 12 }), client({ id: "b", phone: "+15145550102", installedMonthsAgo: 6 }), client({ id: "c", phone: "+15145550103", installedMonthsAgo: 12, city: "Lévis", brand: "Fujitsu" }), client({ id: "d", phone: "+15145550104" })];
    expect(segmentRows(list, {}, {}, seg, NOW).included.map((r) => r.firstName)).toEqual(["a", "c"]);
    expect(segmentRows(list, {}, {}, { ...seg, cities: ["levis"] }, NOW).included.map((r) => r.firstName)).toEqual(["c"]);
    expect(segmentRows(list, {}, {}, { ...seg, brands: ["MITSUBISHI"] }, NOW).included.map((r) => r.firstName)).toEqual(["a"]);
  });

  it("exclut les désabonnés, les consentements expirés et les clients sans numéro", () => {
    const stop = { phone: "+15145550105", optedOut: true } as Conversation;
    const list = [client({ id: "e", phone: "+15145550105", installedMonthsAgo: 12 }), client({ id: "f", phone: "+15145550106", installedMonthsAgo: 30 }), client({ id: "g", installedMonthsAgo: 12 }), client({ id: "h", phone: "+15145550108", installedMonthsAgo: 12 })];
    const r = segmentRows(list, { "+15145550105": stop }, {}, EMPTY_SEGMENT, NOW);
    expect(r.included.map((x) => x.firstName)).toEqual(["h"]);
    expect(Object.fromEntries(r.excluded.map((x) => [x.firstName, x.reason]))).toEqual({ e: "Désabonné des textos (STOP ou ARRÊT)", f: "Consentement tacite expiré", g: "Aucun numéro" });
  });

  it("heures d'envoi raisonnables", () => {
    const s = { startHour: 10, endHour: 19, days: [1, 2, 3, 4, 5, 6], perTick: 20 };
    expect(inSendWindow(NOW, s)).toBe(true);
    expect(inSendWindow(new Date("2026-09-16T12:00:00Z"), s)).toBe(false); // 8 h
    expect(inSendWindow(new Date("2026-09-20T16:00:00Z"), s)).toBe(false); // dimanche
  });

  it("rapport : envoyés, réponses et STOP après l'envoi", () => {
    const sentAt = NOW.toISOString();
    const c = { recipients: [{ clientId: "c_1", phone: "+15145550101", firstName: "a", status: "envoye", sentAt }, { clientId: "c_2", phone: "+15145550102", firstName: "b", status: "envoye", sentAt }, { clientId: "c_3", phone: "+15145550103", firstName: "c", status: "exclu" }] } as never;
    const later = new Date(NOW.getTime() + 60_000).toISOString();
    const conv = {
      "+15145550101": { messages: [{ dir: "in", at: later, body: "Oui!" }], optedOut: false },
      "+15145550102": { messages: [{ dir: "in", at: later, body: "STOP", keyword: "stop" }], optedOut: true, optChangedAt: later },
    } as unknown as Record<string, Conversation>;
    expect(campaignReport(c, conv)).toMatchObject({ total: 3, sent: 2, excluded: 1, replies: 1, stops: 1 });
  });
});

describe("envoi", () => {
  const env = process.env;
  let dir: string;
  beforeEach(async () => {
    dir = await tempDir();
    process.env = telEnv(dir);
    resetSecretCache();
    resetCrmMemo();
    vi.useFakeTimers({ toFake: ["Date"] });
    vi.setSystemTime(NOW);
    // Demande il y a 2 mois : consentement tacite (6 mois).
    await addJournal(dir, "soumission", { firstName: "Julie", lastName: "Tremblay", phone: "514 555-0142", municipality: "Laval" }, new Date(monthsAgo(2)));
    await updateSettings("campaigns", { startHour: 10, endHour: 19, days: [1, 2, 3, 4, 5, 6], perTick: 20 }, "proprio@exemple.ca");
  });
  afterEach(async () => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
    process.env = env;
    resetCrmMemo();
    await rm(dir, { recursive: true, force: true });
  });

  async function draft() {
    const r = await createCampaign("Entretien", "proprio@exemple.ca", NOW);
    if (!r.ok) throw new Error(r.error);
    await saveCampaign(r.id, { name: "Entretien", message: "Bonjour {prenom}, c'est le temps de l'entretien de votre thermopompe.", segment: EMPTY_SEGMENT }, NOW);
    return r.id;
  }

  it("un brouillon ne part jamais, même au passage du robot", async () => {
    const f = mockFetch();
    const id = await draft();
    expect((await previewCampaign(id, NOW))!.included).toHaveLength(1);
    expect(await processCampaigns(NOW, { gapMs: 0 })).toMatchObject({ sent: 0, skipped: "aucune" });
    // Même « envoi » sans le clic (launchedAt/launchedBy absents) : rien.
    await mutateTelephonie((d) => {
      const c = d.campaigns[0];
      c.status = "envoi";
      c.recipients = [{ clientId: "c_x", phone: CLIENT_PHONE, firstName: "Julie", status: "attente" }];
      return { result: undefined, changed: true };
    });
    expect((await processCampaigns(NOW, { gapMs: 0 })).sent).toBe(0);
    expect(f.fn).not.toHaveBeenCalled();
  });

  it("le clic doit confirmer le nombre affiché ; ensuite le robot envoie, avec l'entreprise et STOP", async () => {
    const f = mockFetch();
    const id = await draft();
    expect(await launchCampaign(id, 2, "proprio@exemple.ca", NOW)).toMatchObject({ ok: false });
    expect(f.fn).not.toHaveBeenCalled();
    expect(await launchCampaign(id, 1, "proprio@exemple.ca", NOW)).toMatchObject({ ok: true });
    expect(f.fn).not.toHaveBeenCalled(); // le clic fige la liste ; le robot envoie

    const t = await processCampaigns(NOW, { gapMs: 0 });
    expect(t.sent).toBe(1);
    const sms = f.sms();
    expect(sms).toHaveLength(1);
    expect(sms[0].to).toBe(CLIENT_PHONE);
    expect(sms[0].body).toBe("Thermopompes A Vendre : Bonjour Julie, c'est le temps de l'entretien de votre thermopompe. Répondez STOP pour ne plus recevoir de textos.");
    expect((await processCampaigns(NOW, { gapMs: 0 })).sent).toBe(0); // jamais deux fois
    expect((await readTelephonie()).campaigns[0].status).toBe("terminee");
  });

  it("hors des heures d'envoi, la campagne attend", async () => {
    const f = mockFetch();
    const id = await draft();
    await launchCampaign(id, 1, "proprio@exemple.ca", NOW);
    expect(await processCampaigns(new Date("2026-09-16T02:00:00Z"), { gapMs: 0 })).toMatchObject({ sent: 0, skipped: "hors-heures" });
    expect(f.fn).not.toHaveBeenCalled();
  });
});
