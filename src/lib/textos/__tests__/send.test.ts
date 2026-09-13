/* Réponses depuis /gestion/textos : envoi par l'API REST de Twilio (simulée), échecs, numéros désabonnés bloqués,
   statuts de livraison (POST /api/phone/sms/statut, signé), blocage des textos de l'outil de gestion. */
import { rm } from "node:fs/promises";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("@/lib/crm/email", () => ({ sendInternalMessage: vi.fn(async () => true), sendClientEmail: vi.fn(async () => true) }));

import { POST as statutPOST } from "@/app/api/phone/sms/statut/route";
import { sendSms } from "@/lib/gestion/sms";
import { SITE_URL } from "@/lib/seo";
import { applyStatus, sendReply } from "../service";
import { createConversation, mutateTextos, readTextos } from "../store";
import { tempDir, testEnv, twilioRequest } from "./helpers";

const env = process.env;
let dir: string;
const PHONE = "+15145550142";
const BY = "proprio@exemple.ca";
let fetchMock: ReturnType<typeof vi.fn>;

function twilioReplies(...responses: Array<Response | Error>) {
  fetchMock = vi.fn(async () => {
    const next = responses.length > 1 ? responses.shift()! : responses[0];
    if (next instanceof Error) throw next;
    return next.clone();
  });
  vi.stubGlobal("fetch", fetchMock);
}
const created = (sid = "SMabc0000000000000000000000000001", status = "queued") => new Response(JSON.stringify({ sid, status }), { status: 201 });

async function seed(phone = PHONE, optedOut = false): Promise<string> {
  return mutateTextos((d) => {
    const c = createConversation(phone, new Date().toISOString());
    c.messages.push({ id: "m_recu000000001", sid: "SMrecu00000000000000000000000001", dir: "in", body: "Bonjour", at: c.createdAt });
    c.unread = 1;
    c.optedOut = optedOut;
    d.conversations[phone] = c;
    return { result: c.id, changed: true };
  });
}
const conv = async (phone = PHONE) => (await readTextos()).conversations[phone];

beforeEach(async () => {
  dir = await tempDir();
  process.env = testEnv(dir);
  twilioReplies(created());
});
afterEach(async () => {
  vi.unstubAllGlobals();
  process.env = env;
  await rm(dir, { recursive: true, force: true });
});

describe("sendReply", () => {
  it("envoie depuis le numéro du site avec les identifiants existants ; message enregistré, conversation lue", async () => {
    const id = await seed();
    const r = await sendReply(id, "  Bonjour ! On passe jeudi.  ", BY);
    expect(r).toEqual({ ok: true, status: "queued" });

    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0] as [string, RequestInit];
    expect(url).toBe("https://api.twilio.com/2010-04-01/Accounts/ACtest/Messages.json");
    expect((init.headers as Record<string, string>).Authorization).toBe(`Basic ${Buffer.from("ACtest:jeton-de-test-twilio").toString("base64")}`);
    const form = new URLSearchParams(String(init.body));
    expect(Object.fromEntries(form)).toEqual({ To: PHONE, From: "+14389003224", Body: "Bonjour ! On passe jeudi." });

    const c = await conv();
    expect(c.unread).toBe(0);
    expect(c.messages.at(-1)).toMatchObject({ dir: "out", body: "Bonjour ! On passe jeudi.", by: BY, sid: "SMabc0000000000000000000000000001", status: "queued" });
  });

  it("refuse un message vide ou une conversation inconnue sans appeler Twilio", async () => {
    const id = await seed();
    expect(await sendReply(id, "   ", BY)).toMatchObject({ ok: false });
    expect(await sendReply("c_inconnue0001", "Bonjour", BY)).toMatchObject({ ok: false, error: "Conversation introuvable." });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("numéro désabonné : envoi bloqué, Twilio jamais appelé, rien d'ajouté au fil", async () => {
    const id = await seed(PHONE, true);
    const r = await sendReply(id, "Bonjour", BY);
    expect(r).toMatchObject({ ok: false, blocked: true });
    expect(fetchMock).not.toHaveBeenCalled();
    expect((await conv()).messages).toHaveLength(1);
  });

  it("refus de Twilio (numéro invalide) : échec enregistré avec l'erreur en clair", async () => {
    twilioReplies(new Response(JSON.stringify({ code: 21211, message: "Invalid 'To' Phone Number", status: 400 }), { status: 400 }));
    const id = await seed();
    const r = await sendReply(id, "Bonjour", BY);
    expect(r).toEqual({ ok: false, error: "Numéro invalide." });
    expect((await conv()).messages.at(-1)).toMatchObject({ status: "echec", errorCode: 21211, error: "Numéro invalide." });
  });

  it("Twilio injoignable (réseau) : échec enregistré, pas d'exception", async () => {
    twilioReplies(new Error("ECONNRESET"));
    const id = await seed();
    const r = await sendReply(id, "Bonjour", BY);
    expect(r.ok).toBe(false);
    expect((await conv()).messages.at(-1)).toMatchObject({ status: "echec" });
  });

  it("erreur 21610 (le client a écrit STOP à Twilio) : conversation marquée désabonnée, envois suivants bloqués", async () => {
    twilioReplies(new Response(JSON.stringify({ code: 21610, message: "Attempt to send to unsubscribed recipient" }), { status: 400 }));
    const id = await seed();
    expect(await sendReply(id, "Bonjour", BY)).toMatchObject({ ok: false, blocked: true });
    expect((await conv()).optedOut).toBe(true);
    expect(await sendReply(id, "Encore", BY)).toMatchObject({ ok: false, blocked: true });
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });

  it("hors production sans TEXTOS_ENVOIS_DEV : envoi simulé, Twilio jamais appelé", async () => {
    process.env = testEnv(dir, { NODE_ENV: "development", TEXTOS_ENVOIS_DEV: "" });
    const id = await seed();
    expect(await sendReply(id, "Bonjour", BY)).toEqual({ ok: true, status: "simule" });
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it("sans identifiants Twilio : échec clair", async () => {
    process.env = testEnv(dir, { TWILIO_ACCOUNT_SID: "" });
    const id = await seed();
    expect(await sendReply(id, "Bonjour", BY)).toMatchObject({ ok: false, error: "Twilio n’est pas configuré sur ce serveur." });
  });
});

describe("statuts de livraison", () => {
  it("en production, StatusCallback signé vers /api/phone/sms/statut ; livré ne recule jamais", async () => {
    process.env = testEnv(dir, { NODE_ENV: "production" });
    const id = await seed();
    await sendReply(id, "Bonjour", BY);
    const form = new URLSearchParams(String((fetchMock.mock.calls[0] as [string, RequestInit])[1].body));
    const msgId = (await conv()).messages.at(-1)!.id;
    expect(form.get("StatusCallback")).toBe(`${SITE_URL}/api/phone/sms/statut?m=${msgId}`);

    const path = `/api/phone/sms/statut?m=${msgId}`;
    const cb = (status: string, extra: Record<string, string> = {}) => ({ MessageSid: "SMabc0000000000000000000000000001", MessageStatus: status, AccountSid: "ACtest", ...extra });

    expect((await statutPOST(twilioRequest(path, cb("delivered"), null))).status).toBe(403);
    expect((await conv()).messages.at(-1)?.status).toBe("queued");

    expect((await statutPOST(twilioRequest(path, cb("sent")))).status).toBe(204);
    expect((await statutPOST(twilioRequest(path, cb("delivered")))).status).toBe(204);
    expect((await statutPOST(twilioRequest(path, cb("sent")))).status).toBe(204);
    expect((await conv()).messages.at(-1)?.status).toBe("delivered");
  });

  it("non livré : code d'erreur traduit ; 21610 marque le numéro désabonné", async () => {
    const id = await seed();
    await sendReply(id, "Bonjour", BY);
    const msgId = (await conv()).messages.at(-1)!.id;
    expect(await applyStatus({ localId: msgId, status: "undelivered", errorCode: 30003 })).toBe(true);
    expect((await conv()).messages.at(-1)).toMatchObject({ status: "undelivered", errorCode: 30003, error: "Téléphone du destinataire injoignable (éteint ou hors réseau)." });
    await applyStatus({ sid: "SMabc0000000000000000000000000001", status: "failed", errorCode: 21610 });
    expect((await conv()).optedOut).toBe(true);
    expect(await applyStatus({ sid: "SMinconnu", status: "delivered" })).toBe(false);
  });
});

describe("textos de l'outil de gestion (offres, soumissions)", () => {
  it("jamais envoyés à un numéro désabonné des textos du site", async () => {
    await seed("+15145550199", true);
    expect(await sendSms("514 555-0199", "Nouvelle offre")).toBe("echec");
    expect(fetchMock).not.toHaveBeenCalled();
    expect(await sendSms("514 555-0142", "Nouvelle offre")).toBe("envoye");
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
