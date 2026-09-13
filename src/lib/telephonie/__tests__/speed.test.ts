/* Chantier T — réponse en 60 secondes : délai (≤ 60 s), heures silencieuses (le texto attend 8 h), texte (entreprise,
   lien, STOP à la fin), désabonnement respecté, alerte au propriétaire avec lien signé, désactivé par défaut, moment de
   rappel choisi → tâche datée une seule fois. Twilio simulé. */
import { readFile, rm } from "node:fs/promises";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { resetSecretCache } from "@/lib/gestion/auth/secret";
import { resetCrmMemo } from "@/lib/gestion/crm/service";
import { zoned } from "@/lib/gestion/crm/time";
import { createConversation, mutateTextos, readTextos } from "@/lib/textos/store";
import { tempDir } from "@/lib/textos/__tests__/helpers";
import { planSendAt, renderSpeedText, slotOptions, STOP_FOOTER } from "../plan";
import { updateSettings } from "../settings";
import { chooseCallback, onNewLead, rappelView, sendDueLeadTexts } from "../speed";
import { defaultSettings, readTelephonie } from "../store";
import { addJournal, CLIENT_PHONE, mockFetch, OWNER_CELL, telEnv } from "./helpers";

const env = process.env;
let dir: string;
/** Mercredi 16 septembre 2026, 11 h à Montréal. */
const DAY = new Date("2026-09-16T15:00:00Z");
/** Même jour, 23 h 30 à Montréal. */
const NIGHT = new Date("2026-09-17T03:30:00Z");
const S = { delaySeconds: 0, quietStart: 21, quietEnd: 8 };

describe("moment d'envoi", () => {
  it("le jour : maintenant + délai, jamais plus de 60 secondes", () => {
    expect(planSendAt(DAY, S).getTime()).toBe(DAY.getTime());
    expect(planSendAt(DAY, { ...S, delaySeconds: 20 }).getTime() - DAY.getTime()).toBe(20_000);
    expect(planSendAt(DAY, { ...S, delaySeconds: 600 }).getTime() - DAY.getTime()).toBe(60_000);
  });

  it("la nuit : le texto attend 8 h (le lendemain, ou le matin même après minuit)", () => {
    const t = planSendAt(NIGHT, S);
    expect(zoned(t)).toMatchObject({ ymd: "2026-09-17", hour: 8, minute: 0 });
    const early = planSendAt(new Date("2026-09-17T07:10:00Z"), S); // 3 h 10 à Montréal
    expect(zoned(early)).toMatchObject({ ymd: "2026-09-17", hour: 8, minute: 0 });
    expect(zoned(planSendAt(new Date("2026-09-17T12:00:00Z"), S))).toMatchObject({ hour: 8, minute: 0 }); // 8 h pile : part tout de suite
  });

  it("début = fin : jamais de pause", () => {
    expect(planSendAt(NIGHT, { ...S, quietStart: 0, quietEnd: 0 }).getTime()).toBe(NIGHT.getTime());
  });
});

describe("texte du texto", () => {
  const link = "https://thermopompesavendre.ca/rappel/l_Ab3dE5gH7jK.mf1a2b3.Xy9Zw8Vu7Ts6Rq5Po4Nm3L";
  it("remercie, nomme l'entreprise, donne le lien et finit par la mention STOP", () => {
    const t = renderSpeedText(defaultSettings().speed.text, { firstName: "Julie", link });
    expect(t.startsWith("Bonjour Julie, merci pour votre demande!")).toBe(true);
    expect(t).toContain("Thermopompes A Vendre");
    expect(t).toContain(link);
    expect(t.endsWith(STOP_FOOTER)).toBe(true);
    expect(STOP_FOOTER).toBe("Répondez STOP pour ne plus recevoir de textos.");
  });

  it("ajoute l'entreprise et le lien s'ils manquent ; une seule mention STOP", () => {
    const t = renderSpeedText("Merci {prenom}! Répondez STOP pour arrêter.", { firstName: "", link });
    expect(t.startsWith("Thermopompes A Vendre : Merci!")).toBe(true);
    expect(t).toContain(link);
    expect(t.match(/STOP/g)).toHaveLength(1);
    expect(t.endsWith(STOP_FOOTER)).toBe(true);
  });
});

describe("créneaux de rappel", () => {
  it("jours et heures réglés, jamais dans moins de 30 minutes", () => {
    const opts = slotOptions(defaultSettings().speed.slots, DAY, 2);
    expect(opts[0].id).toBe("2026-09-16_apres-midi"); // 11 h : le matin est déjà commencé
    expect(opts.map((o) => o.ymd)).not.toContain("2026-09-19"); // horizon de 2 jours
    expect(slotOptions(defaultSettings().speed.slots, new Date("2026-09-19T15:00:00Z"), 1)).toEqual([]); // samedi et dimanche : aucun créneau par défaut
  });
});

describe("réponse à une nouvelle demande", () => {
  beforeEach(async () => {
    dir = await tempDir();
    process.env = telEnv(dir);
    resetSecretCache();
    resetCrmMemo();
    vi.useFakeTimers({ toFake: ["Date"] });
    vi.setSystemTime(DAY);
  });
  afterEach(async () => {
    vi.useRealTimers();
    vi.unstubAllGlobals();
    process.env = env;
    resetCrmMemo();
    await rm(dir, { recursive: true, force: true });
  });

  const enable = (patch: Partial<ReturnType<typeof defaultSettings>["speed"]> = {}) => updateSettings("speed", { ...defaultSettings().speed, enabled: true, ...patch }, "proprio@exemple.ca");
  const lead = async () => ({ kind: "soumission" as const, journalId: await addJournal(dir, "soumission", { firstName: "Julie", lastName: "Tremblay", phone: "514 555-0142", municipality: "Laval" }, DAY), phone: "514 555-0142", firstName: "Julie", lastName: "Tremblay", city: "Laval" });

  it("désactivée par défaut : rien ne part", async () => {
    const f = mockFetch();
    expect(await onNewLead(await lead())).toBeNull();
    expect(f.fn).not.toHaveBeenCalled();
  });

  it("texto au client dans la minute et alerte au propriétaire avec lien signé", async () => {
    await enable();
    const f = mockFetch();
    const l = await onNewLead(await lead());
    expect(l).not.toBeNull();
    const sms = f.sms();
    expect(sms).toHaveLength(2);
    const owner = sms.find((s) => s.to === OWNER_CELL)!;
    expect(owner.body).toMatch(/^Nouvelle demande : Julie T\., Laval\. Appuie pour l'appeler maintenant : https:\/\/\S+\/appel\/l_[\w-]+\.[0-9a-z]+\.[\w-]{22}$/);
    const client = sms.find((s) => s.to === CLIENT_PHONE)!;
    expect(client.from).toBe("+14389003224");
    expect(client.body).toContain("/rappel/");
    expect(client.body.endsWith("Répondez STOP pour ne plus recevoir de textos.")).toBe(true);
    const saved = (await readTelephonie()).leads[0];
    expect(saved.sms.status).toBe("envoye");
    expect(Date.parse(saved.sms.sentAt!) - Date.parse(saved.createdAt)).toBeLessThanOrEqual(60_000);
    // Rangé dans la conversation texto, comme réponse automatique.
    const conv = (await readTextos()).conversations[CLIENT_PHONE];
    expect(conv.messages).toEqual([expect.objectContaining({ dir: "out", auto: "accuse" })]);
  });

  it("la nuit : l'alerte part, le texto du client attend 8 h", async () => {
    await enable();
    vi.setSystemTime(NIGHT);
    const f = mockFetch();
    await onNewLead(await lead(), NIGHT);
    expect(f.sms().map((s) => s.to)).toEqual([OWNER_CELL]);
    const l = (await readTelephonie()).leads[0];
    expect(l.sms.status).toBe("attente");
    expect(zoned(new Date(l.sms.sendAt))).toMatchObject({ hour: 8, minute: 0 });

    expect((await sendDueLeadTexts(new Date("2026-09-17T11:30:00Z"))).sent).toBe(0); // 7 h 30
    const at8 = new Date("2026-09-17T12:01:00Z");
    vi.setSystemTime(at8);
    expect((await sendDueLeadTexts(at8)).sent).toBe(1);
    expect(f.sms().map((s) => s.to)).toEqual([OWNER_CELL, CLIENT_PHONE]);
    expect((await sendDueLeadTexts(at8)).sent).toBe(0); // jamais deux fois
  });

  it("STOP respecté : un numéro désabonné ne reçoit rien", async () => {
    await enable();
    await mutateTextos((d) => {
      const c = createConversation(CLIENT_PHONE, DAY.toISOString());
      c.optedOut = true;
      d.conversations[CLIENT_PHONE] = c;
      return { result: undefined, changed: true };
    });
    const f = mockFetch();
    await onNewLead(await lead());
    expect(f.sms().filter((s) => s.to === CLIENT_PHONE)).toHaveLength(0);
    expect((await readTelephonie()).leads[0].sms.status).toBe("desabonne");
  });

  it("le client choisit son moment : une tâche datée, une seule fois", async () => {
    await enable();
    const f = mockFetch();
    await onNewLead(await lead());
    const token = /\/rappel\/(\S+?)\s/.exec(f.sms().find((s) => s.to === CLIENT_PHONE)!.body)![1];
    const view = await rappelView(token);
    expect(view.state).toBe("ok");
    if (view.state !== "ok") return;
    const option = view.options[0];
    const r = await chooseCallback(token, option.id);
    expect(r).toMatchObject({ ok: true });
    expect(await chooseCallback(token, view.options[1].id)).toEqual(r); // le premier choix tient
    const crm = JSON.parse(await readFile(path.join(dir, "crm.json"), "utf8"));
    expect(crm.tasks).toHaveLength(1);
    expect(crm.tasks[0].dueAt).toBe(option.startAt);
    expect(crm.tasks[0].title).toMatch(/^Rappeler Julie T\., Laval · moment choisi : /);
    expect(crm.tasks[0].clientId).toMatch(/^c_[0-9a-f]{12}$/);
    expect(await chooseCallback("l_Zz3dE5gH7jK.mf1a2b3.Xy9Zw8Vu7Ts6Rq5Po4Nm3L", option.id)).toMatchObject({ ok: false });
  });
});
