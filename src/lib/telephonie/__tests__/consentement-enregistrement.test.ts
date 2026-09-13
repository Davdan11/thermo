/* Conformité C2 — appel masqué sortant avec enregistrement activé : le client entend l'avis 6.3 (trousse FICTIVE)
   et doit faire le 1 pour accepter ; l'enregistrement ne commence qu'après ce oui (API Twilio simulée). Sinon, aucun
   enregistrement, l'appel se poursuit. Décision et empreinte de l'avis : notées. */
import { rm } from "node:fs/promises";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { POST } from "@/app/api/phone/masque/[etape]/route";
import { resetSecretCache } from "@/lib/gestion/auth/secret";
import { clientIdFor } from "@/lib/gestion/crm/identity";
import { resetCrmMemo } from "@/lib/gestion/crm/service";
import { xml } from "@/lib/security/twilio";
import { tempDir, twilioRequest } from "@/lib/textos/__tests__/helpers";
import { readConsents } from "@/lib/consentements/store";
import { installerTrousseFictive } from "@/lib/consentements/__tests__/fictif";
import { startMaskedCall } from "../masked-call";
import { updateSettings } from "../settings";
import { readTelephonie } from "../store";
import { CONSENT_NO, CONSENT_PROMPT, CONSENT_YES, RECORDING_NOTICE } from "../twiml";
import { addJournal, CLIENT_PHONE, mockFetch, telEnv } from "./helpers";

const env = process.env;
let dir: string;
const CLIENT_ID = clientIdFor(`p:${CLIENT_PHONE}`);

async function hook(etape: string, callId: string, params: Record<string, string>) {
  const res = await POST(twilioRequest(`/api/phone/masque/${etape}?a=${callId}`, params), { params: Promise.resolve({ etape }) });
  return res.text();
}

const twilio = () => mockFetch({ twilio: (c) => (c.url.endsWith("/Recordings.json") ? Response.json({ sid: `RE${"b".repeat(32)}` }, { status: 201 }) : undefined) });
const recordingStarts = (f: ReturnType<typeof twilio>) => f.calls.filter((c) => c.url.endsWith("/Recordings.json"));

async function callUntilNotice(): Promise<{ id: string; avis: string }> {
  const r = await startMaskedCall({ kind: "client", id: CLIENT_ID }, "proprio@exemple.ca");
  if (!r.ok) throw new Error(r.error);
  const id = r.view.id;
  await hook("proprio", id, { CallStatus: "in-progress" });
  const connect = await hook("connecter", id, { Digits: "1" });
  expect(connect).toContain("<Dial");
  expect(connect).not.toContain("record=");
  return { id, avis: await hook("avis", id, { CallStatus: "in-progress" }) };
}

beforeEach(async () => {
  dir = await tempDir();
  process.env = telEnv(dir, { GESTION_DATA_DIR: dir, TEXTOS_ENVOIS_DEV: "1" });
  resetSecretCache();
  resetCrmMemo();
  await addJournal(dir, "soumission", { firstName: "Julie", lastName: "Tremblay", phone: "514 555-0142", municipality: "Laval" });
  await updateSettings("calls", { record: true }, "proprio@exemple.ca");
});
afterEach(async () => {
  vi.unstubAllGlobals();
  process.env = env;
  resetCrmMemo();
  await rm(dir, { recursive: true, force: true });
});

describe("consentement à l'enregistrement d'un appel sortant (avis 6.3)", () => {
  it("1 = oui : avis entendu, enregistrement démarré après le oui (les deux voix), décision consignée", async () => {
    await installerTrousseFictive();
    const f = twilio();
    const { id, avis } = await callUntilNotice();
    const call = (await readTelephonie()).calls.find((c) => c.id === id)!;
    expect(call.consentMode).toBe(true);
    expect(call.consentNotice?.text).toBe("Ici un conseiller de Entreprise Fictive SENC, avis fictif. D’accord?");
    expect(avis).toContain(`/api/phone/masque/consentement?a=${id}`);
    expect(avis).toContain(xml(CONSENT_PROMPT));
    expect(recordingStarts(f)).toHaveLength(0); // rien avant le oui

    expect(await hook("consentement", id, { Digits: "1" })).toContain(xml(CONSENT_YES));
    const starts = recordingStarts(f);
    expect(starts).toHaveLength(1);
    const form = new URLSearchParams(starts[0].body);
    expect(form.get("RecordingChannels")).toBe("dual");
    expect(form.get("RecordingStatusCallback")).toContain(`/api/phone/masque/enregistrement?a=${id}`);
    const [d] = (await readConsents()).calls;
    expect(d).toMatchObject({ direction: "sortant", decision: "accepte-touche-1", callId: id, noticeSha: call.consentNotice!.sha, trousseVersion: "9.9", phoneTail: "0142" });
    // Une seule réponse retenue.
    await hook("consentement", id, { Digits: "2" });
    expect((await readConsents()).calls).toHaveLength(1);
  });

  it("autre touche ou aucune : l'appel se poursuit SANS enregistrement ; un enregistrement reçu quand même est ignoré", async () => {
    await installerTrousseFictive();
    const f = twilio();
    const { id } = await callUntilNotice();
    expect(await hook("consentement", id, { Digits: "3" })).toContain(xml(CONSENT_NO));
    expect(recordingStarts(f)).toHaveLength(0);
    expect((await readConsents()).calls[0]).toMatchObject({ decision: "refus" });
    await hook("enregistrement", id, { RecordingSid: `RE${"c".repeat(32)}`, RecordingStatus: "completed", RecordingDuration: "30", CallSid: `CA${"0".repeat(32)}` });
    expect((await readTelephonie()).recordings).toHaveLength(0);

    const second = await callUntilNotice();
    expect(await hook("consentement", second.id, {})).toContain(xml(CONSENT_NO));
    expect((await readConsents()).calls.map((c) => c.decision)).toEqual(["refus", "sans-reponse"]);
  });

  it("repli : trousse absente, parcours d'avant (avis actuel, enregistrement du <Dial>)", async () => {
    twilio();
    const r = await startMaskedCall({ kind: "client", id: CLIENT_ID }, "proprio@exemple.ca");
    if (!r.ok) throw new Error(r.error);
    await hook("proprio", r.view.id, { CallStatus: "in-progress" });
    expect(await hook("connecter", r.view.id, { Digits: "1" })).toContain('record="record-from-answer-dual"');
    expect(await hook("avis", r.view.id, { CallStatus: "in-progress" })).toContain(xml(RECORDING_NOTICE));
  });
});
