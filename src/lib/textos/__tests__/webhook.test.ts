/* Webhook des textos entrants (POST /api/phone/sms) : signature, enregistrement, idempotence, accusé de réception,
   mots-clés ARRÊT/STOP/DEBUT/AIDE, pièces jointes (MMS), demande au journal, avis courriel limité à un par 10 minutes.
   Aucun envoi réel : le courriel est simulé, Twilio n'est jamais appelé (la réponse est du TwiML). */
import { rm } from "node:fs/promises";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

type Mail = { subject: string; lines: Array<[string, string]>; links?: Array<[string, string]> };
const mail = vi.hoisted(() => ({ sendInternalMessage: vi.fn<(m: Mail) => Promise<boolean>>(async () => true) }));
vi.mock("@/lib/crm/email", () => ({ sendInternalMessage: mail.sendInternalMessage, sendClientEmail: vi.fn(async () => true) }));

import { POST } from "@/app/api/phone/sms/route";
import { DEFAULT_AUTO_REPLY, HELP_REPLY, START_CONFIRMATION, STOP_CONFIRMATION } from "../messages";
import { cancelDigestTimers, flushDigest, markRead, saveSettings, sendReply } from "../service";
import { readTextos } from "../store";
import { inboundParams, journalLines, replyOf, tempDir, testEnv, twilioRequest } from "./helpers";

const env = process.env;
let dir: string;
const FROM = "+15145550142";
const T0 = new Date("2026-09-14T13:00:00Z");

async function receive(params: Record<string, string>) {
  const res = await POST(twilioRequest("/api/phone/sms", params));
  const body = await res.text();
  return { status: res.status, type: res.headers.get("content-type"), xml: body, reply: replyOf(body) };
}
const text = (from: string, body: string, extra?: Record<string, string>) => receive(inboundParams(from, body, extra));
const conv = async (phone = FROM) => (await readTextos()).conversations[phone];

beforeEach(async () => {
  dir = await tempDir();
  process.env = testEnv(dir);
  mail.sendInternalMessage.mockClear();
  vi.useFakeTimers({ toFake: ["Date"] });
  vi.setSystemTime(T0);
});
afterEach(async () => {
  cancelDigestTimers();
  vi.useRealTimers();
  vi.unstubAllGlobals();
  process.env = env;
  await rm(dir, { recursive: true, force: true });
});

describe("signature Twilio", () => {
  it("refuse (403) une signature absente, fausse ou des paramètres modifiés, sans rien enregistrer", async () => {
    const p = inboundParams(FROM, "Bonjour");
    expect((await POST(twilioRequest("/api/phone/sms", p, null))).status).toBe(403);
    expect((await POST(twilioRequest("/api/phone/sms", p, "c2lnbmF0dXJlLWZhdXNzZQ=="))).status).toBe(403);
    const tampered = twilioRequest("/api/phone/sms", p);
    const forged = new Request(tampered.url, { method: "POST", headers: tampered.headers, body: new URLSearchParams({ ...p, Body: "ARRÊT" }).toString() });
    expect((await POST(forged)).status).toBe(403);

    expect(Object.keys((await readTextos()).conversations)).toHaveLength(0);
    expect(await journalLines(path.join(dir, "leads"))).toHaveLength(0);
    expect(mail.sendInternalMessage).not.toHaveBeenCalled();
  });
});

describe("réception", () => {
  it("premier message : conservé, accusé de réception en TwiML, une demande « texto » au journal, avis au propriétaire", async () => {
    const r = await text(FROM, "Bonjour, une soumission pour une murale 12 000 BTU?", { FromCity: "MONTREAL", FromState: "QC" });
    expect(r.status).toBe(200);
    expect(r.type).toContain("xml");
    expect(r.reply).toBe(DEFAULT_AUTO_REPLY);

    const c = await conv();
    expect(c.id).toMatch(/^c_/);
    expect(c.place).toBe("Montreal, QC");
    expect(c.unread).toBe(1);
    expect(c.messages.map((m) => [m.dir, m.auto ?? null])).toEqual([["in", null], ["out", "accuse"]]);
    expect(c.messages[0]).toMatchObject({ body: "Bonjour, une soumission pour une murale 12 000 BTU?", at: T0.toISOString() });
    expect(c.messages[0].sid).toMatch(/^SM/);

    const leads = await journalLines(path.join(dir, "leads"));
    expect(leads).toHaveLength(1);
    expect(leads[0]).toMatchObject({ kind: "texto", lead: { phone: FROM, conversationId: c.id, media: 0 } });

    expect(mail.sendInternalMessage).toHaveBeenCalledTimes(1);
    const m = mail.sendInternalMessage.mock.calls[0][0];
    expect(m.subject).toBe("Nouveau texto de 514 555-0142");
    expect(m.lines).toContainEqual(["Message", "Bonjour, une soumission pour une murale 12 000 BTU?"]);
    expect(m.links?.[0][1]).toBe(`https://thermopompesavendre.ca/gestion/textos/${c.id}`);
  });

  it("idempotent sur MessageSid : un webhook rejoué n'ajoute rien, ne répond rien, ne renvoie ni demande ni courriel", async () => {
    const p = inboundParams(FROM, "Allo");
    expect((await receive(p)).reply).toBe(DEFAULT_AUTO_REPLY);
    const again = await receive(p);
    expect(again.status).toBe(200);
    expect(again.xml).toContain("<Response/>");
    expect((await conv()).messages).toHaveLength(2);
    expect(await journalLines(path.join(dir, "leads"))).toHaveLength(1);
    expect(mail.sendInternalMessage).toHaveBeenCalledTimes(1);
  });

  it("MMS : pièces jointes conservées (URL et type), message sans texte accepté, URL non https ignorée", async () => {
    const base = "https://api.twilio.com/2010-04-01/Accounts/ACtest/Messages/MM1/Media";
    const r = await text(FROM, "", {
      NumMedia: "3",
      MediaUrl0: `${base}/ME1`,
      MediaContentType0: "image/jpeg",
      MediaUrl1: `${base}/ME2`,
      MediaContentType1: "image/png",
      MediaUrl2: "http://ailleurs.example/x.jpg",
      MediaContentType2: "image/jpeg",
    });
    expect(r.status).toBe(200);
    const msg = (await conv()).messages[0];
    expect(msg.body).toBe("");
    expect(msg.media).toEqual([
      { url: `${base}/ME1`, type: "image/jpeg" },
      { url: `${base}/ME2`, type: "image/png" },
    ]);
    expect((await journalLines(path.join(dir, "leads")))[0]).toMatchObject({ lead: { media: 2 } });
    expect(mail.sendInternalMessage.mock.calls[0][0].lines).toContainEqual(["Message", "(sans texte) [2 pièces jointes]"]);
  });

  it("expéditeur ou MessageSid manquant : <Response/> vide, rien d'enregistré", async () => {
    expect((await receive({ ...inboundParams("", "x") })).xml).toContain("<Response/>");
    expect((await receive({ From: FROM, Body: "x" })).xml).toContain("<Response/>");
    expect(Object.keys((await readTextos()).conversations)).toHaveLength(0);
  });
});

describe("accusé de réception", () => {
  it("au premier message seulement, puis de nouveau après 12 h", async () => {
    expect((await text(FROM, "Un")).reply).toBe(DEFAULT_AUTO_REPLY);
    vi.setSystemTime(new Date(T0.getTime() + 3_600_000));
    expect((await text(FROM, "Deux")).reply).toBeNull();
    vi.setSystemTime(new Date(T0.getTime() + 11.9 * 3_600_000));
    expect((await text(FROM, "Trois")).xml).toContain("<Response/>");
    vi.setSystemTime(new Date(T0.getTime() + 12 * 3_600_000 + 60_000));
    expect((await text(FROM, "Quatre")).reply).toBe(DEFAULT_AUTO_REPLY);
    expect((await conv()).messages.filter((m) => m.auto === "accuse")).toHaveLength(2);
  });

  it("pas d'accusé si le propriétaire a écrit au client dans les 12 dernières heures", async () => {
    vi.stubGlobal("fetch", vi.fn(async () => new Response(JSON.stringify({ sid: "SMsortant0000000000000000000001", status: "queued" }), { status: 201 })));
    await text(FROM, "Un");
    vi.setSystemTime(new Date(T0.getTime() + 13 * 3_600_000));
    expect((await sendReply((await conv()).id, "Bonjour, je vous rappelle ce midi.", "proprio@exemple.ca")).ok).toBe(true);
    vi.setSystemTime(new Date(T0.getTime() + 14 * 3_600_000));
    expect((await text(FROM, "Merci")).reply).toBeNull();
  });

  it("désactivé dans les réglages : aucun accusé, même au premier message ; texte modifié respecté", async () => {
    await saveSettings({ autoReply: false, autoReplyText: DEFAULT_AUTO_REPLY }, "proprio@exemple.ca");
    expect((await text(FROM, "Bonjour")).reply).toBeNull();
    await saveSettings({ autoReply: true, autoReplyText: "Merci, on vous répond vite." }, "proprio@exemple.ca");
    expect((await text("+14505550177", "Bonjour")).reply).toBe("Merci, on vous répond vite.");
  });

  it("refuse un accusé activé mais vide", async () => {
    expect(await saveSettings({ autoReply: true, autoReplyText: "   " }, "proprio@exemple.ca")).toMatchObject({ ok: false });
  });
});

describe("mots-clés", () => {
  it("STOP (anglais) : désabonné, aucune réponse (Twilio confirme lui-même), puis plus d'accusé ; START : réabonné sans réponse", async () => {
    await text(FROM, "Bonjour");
    const stop = await text(FROM, "STOP");
    expect(stop.xml).toContain("<Response/>");
    let c = await conv();
    expect(c.optedOut).toBe(true);
    expect(c.messages.at(-1)).toMatchObject({ dir: "in", body: "STOP", keyword: "stop" });

    vi.setSystemTime(new Date(T0.getTime() + 20 * 3_600_000));
    expect((await text(FROM, "Finalement, une question")).reply).toBeNull();

    const start = await text(FROM, "start");
    expect(start.reply).toBeNull();
    c = await conv();
    expect(c.optedOut).toBe(false);
  });

  it.each(["ARRÊT", "Arret", "arrêt !", "DÉSABONNER", "Stop."])("« %s » : désabonné, confirmation en français", async (word) => {
    await text(FROM, "Bonjour");
    const r = await text(FROM, word);
    expect(r.reply).toBe(STOP_CONFIRMATION);
    const c = await conv();
    expect(c.optedOut).toBe(true);
    expect(c.messages.at(-1)).toMatchObject({ dir: "out", auto: "stop" });
  });

  it.each(["STOPALL", "unsubscribe", "Cancel", "END", "quit"])("« %s » : désabonné sans réponse de notre part", async (word) => {
    const r = await text(FROM, word);
    expect(r.xml).toContain("<Response/>");
    expect((await conv()).optedOut).toBe(true);
  });

  it("DEBUT et OUI réabonnent un numéro désabonné (confirmation) ; « Oui » ailleurs est un message normal", async () => {
    await text(FROM, "ARRET");
    expect((await text(FROM, "Début")).reply).toBe(START_CONFIRMATION);
    expect((await conv()).optedOut).toBe(false);
    await text(FROM, "arrêt");
    expect((await text(FROM, "oui")).reply).toBe(START_CONFIRMATION);

    const other = "+14505550177";
    await text(other, "Avez-vous des murales?");
    await text(other, "Oui");
    const c = await conv(other);
    expect(c.optedOut).toBe(false);
    expect(c.messages.at(-1)).toMatchObject({ body: "Oui" });
    expect(c.messages.at(-1)?.keyword).toBeUndefined();
  });

  it("« arrêt de la thermopompe » n'est pas un désabonnement", async () => {
    await text(FROM, "L'arrêt de la thermopompe fait du bruit");
    expect((await conv()).optedOut).toBe(false);
  });

  it("AIDE : réponse d'information ; HELP : rien (Twilio répond) ; Advanced Opt-Out (OptOutType) : rien", async () => {
    expect((await text(FROM, "Aide")).reply).toBe(HELP_REPLY);
    expect((await text(FROM, "HELP")).reply).toBeNull();
    const r = await text("+14505550177", "ARRET", { OptOutType: "STOP" });
    expect(r.reply).toBeNull();
    expect((await conv("+14505550177")).optedOut).toBe(true);
  });

  it("un mot-clé n'est ni une demande au journal ni un avis courriel", async () => {
    await text(FROM, "ARRÊT");
    expect(await journalLines(path.join(dir, "leads"))).toHaveLength(0);
    expect(mail.sendInternalMessage).not.toHaveBeenCalled();
    expect((await conv()).unread).toBe(1);
  });
});

describe("avis courriel au propriétaire", () => {
  it("au plus un par conversation par 10 minutes ; les messages suivants partent groupés, avec leur nombre", async () => {
    vi.useFakeTimers({ toFake: ["Date", "setTimeout", "clearTimeout"] });
    vi.setSystemTime(T0);
    await text(FROM, "Un");
    await vi.advanceTimersByTimeAsync(2 * 60_000);
    await text(FROM, "Deux");
    await vi.advanceTimersByTimeAsync(2 * 60_000);
    await text(FROM, "Trois");
    expect(mail.sendInternalMessage).toHaveBeenCalledTimes(1);
    expect((await conv()).notify.pending).toBe(2);

    // Autre conversation : son propre avis, pas bloqué par la première.
    await text("+14505550177", "Bonjour");
    expect(mail.sendInternalMessage).toHaveBeenCalledTimes(2);

    await vi.advanceTimersByTimeAsync(6 * 60_000 + 1_000);
    await vi.waitFor(() => expect(mail.sendInternalMessage).toHaveBeenCalledTimes(3));
    const digest = mail.sendInternalMessage.mock.calls[2][0];
    expect(digest.subject).toBe("2 nouveaux textos de 514 555-0142");
    expect(digest.lines).toContainEqual(["Message 1", "Deux"]);
    expect(digest.lines).toContainEqual(["Message 2", "Trois"]);
    expect((await conv()).notify.pending).toBe(0);

    await vi.advanceTimersByTimeAsync(60_000);
    await text(FROM, "Quatre");
    expect(mail.sendInternalMessage).toHaveBeenCalledTimes(3);
  });

  it("conversation lue avant la fin des 10 minutes : pas d'avis groupé", async () => {
    await text(FROM, "Un");
    vi.setSystemTime(new Date(T0.getTime() + 2 * 60_000));
    await text(FROM, "Deux");
    await markRead((await conv()).id);
    expect(await flushDigest(FROM, new Date(T0.getTime() + 11 * 60_000))).toBe(false);
    expect(mail.sendInternalMessage).toHaveBeenCalledTimes(1);
  });

  it("hors production sans TEXTOS_ENVOIS_DEV : aucun courriel ne part", async () => {
    process.env = testEnv(dir, { NODE_ENV: "development", TEXTOS_ENVOIS_DEV: "" });
    await text(FROM, "Bonjour");
    expect(mail.sendInternalMessage).not.toHaveBeenCalled();
    expect((await conv()).messages).toHaveLength(2);
  });
});
