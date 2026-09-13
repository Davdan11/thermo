/* Conformité C2 — appel entrant : touche 9 = continuer SANS enregistrement (notre 2 est le service après-vente).
   L'appel continue normalement, sans attribut record ni transcription, et le statut est consigné. Avec l'avis 6.2
   (trousse FICTIVE), le choix d'un service sans le 9 est consigné comme « poursuite ». Aucun appel réel. */
import path from "node:path";
import { rm } from "node:fs/promises";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { POST as routePost } from "@/app/api/phone/ivr/route/route";
import { POST as welcomePost } from "@/app/api/phone/ivr/welcome/route";
import { POST as noAnswerPost } from "@/app/api/phone/ivr/no-answer/route";
import { tempDir, testEnv, twilioRequest } from "@/lib/textos/__tests__/helpers";
import { readConsents } from "@/lib/consentements/store";
import { installerTrousseFictive } from "@/lib/consentements/__tests__/fictif";
import { enqueueRecording } from "@/lib/telephonie/transcription";
import { retryRecording } from "@/lib/telephonie/settings";
import { readTelephonie } from "@/lib/telephonie/store";
import { speakable } from "../avis-enregistrement";

const CALLER = "+15145550142";
const CALL_SID = `CA${"1".repeat(32)}`;
const env = process.env;
let dir: string;

const post = async (handler: (r: Request) => Promise<Response>, pathQ: string, params: Record<string, string>) => (await handler(twilioRequest(pathQ, params))).text();

beforeEach(async () => {
  dir = await tempDir();
  process.env = testEnv(dir, { GESTION_DATA_DIR: dir, LEAD_JOURNAL_DIR: path.join(dir, "leads"), TWILIO_SIP_URI: "sip:poste@exemple.sip.twilio.com", ELEVENLABS_API_KEY: "", PIPEDRIVE_API_TOKEN: "" });
});
afterEach(async () => {
  process.env = env;
  await rm(dir, { recursive: true, force: true });
});

describe("refus d'enregistrement : touche 9", () => {
  it("l'appel continue sans capture (aucun record, aucune transcription) et le statut est consigné", async () => {
    const menu = await post(routePost, "/api/phone/ivr/route", { Digits: "9", From: CALLER, CallSid: CALL_SID });
    expect(menu).toContain("/api/phone/ivr/route?enr=non");
    expect(menu).not.toContain("record=");
    const decisions = (await readConsents()).calls;
    expect(decisions).toHaveLength(1);
    expect(decisions[0]).toMatchObject({ direction: "entrant", decision: "refus-touche", phoneTail: "0142", callSid: CALL_SID });
    expect(JSON.stringify(decisions)).not.toContain("5550142"); // numéro en empreinte seulement

    const dial = await post(routePost, "/api/phone/ivr/route?enr=non", { Digits: "1", From: CALLER, CallSid: CALL_SID });
    expect(dial).toContain("<Dial");
    expect(dial).toContain("etape=bureau&amp;enr=non");
    expect(dial).not.toContain("record=");

    const vm = await post(noAnswerPost, "/api/phone/ivr/no-answer?dept=ventes&etape=cellulaire&enr=non", { DialCallStatus: "no-answer", From: CALLER, CallSid: CALL_SID });
    expect(vm).toContain("<Record");
    expect(vm).not.toContain("transcribe");
    expect(vm).toContain("enr=non");
  });

  it("sans le 9, le parcours reste celui d'avant (enregistrement du <Dial>)", async () => {
    const dial = await post(routePost, "/api/phone/ivr/route", { Digits: "1", From: CALLER, CallSid: CALL_SID });
    expect(dial).toContain('record="record-from-answer"');
  });

  it("avis 6.2 de la trousse (fictive) : raison sociale, touche 9, aucun crochet ; la poursuite est consignée avec la version", async () => {
    await installerTrousseFictive();
    const welcome = await post(welcomePost, "/api/phone/ivr/welcome", { From: CALLER, CallSid: CALL_SID });
    expect(welcome).toContain("Avis fictif de Entreprise Fictive SENC. Pour refuser, faites le 9 ou dites-le.");
    expect(welcome).not.toMatch(/\[[A-Z]/);
    expect(welcome).not.toContain("peut être enregistré pour la qualité du service");
    await post(routePost, "/api/phone/ivr/route", { Digits: "2", From: CALLER, CallSid: CALL_SID });
    const [d] = (await readConsents()).calls;
    expect(d).toMatchObject({ direction: "entrant", decision: "poursuite", trousseVersion: "9.9" });
    expect(d.noticeSha).toMatch(/^[0-9a-f]{16}$/);
  });

  it("message vocal d'un appelant qui a refusé : jamais transcrit, audio soumis à la conservation", async () => {
    const id = await enqueueRecording({ recordingSid: `RE${"a".repeat(32)}`, source: "message-vocal", phone: CALLER, durationSec: 30, noTranscription: true });
    const r = (await readTelephonie()).recordings.find((x) => x.id === id);
    expect(r).toMatchObject({ status: "desactive", noTranscription: true, audio: "twilio" });
    expect(await retryRecording(id!)).toMatchObject({ ok: false });
  });

  it("SSML : le texte de l'avis est échappé (aucune balise injectée) ; le nom du site se prononce avec <sub>", () => {
    expect(speakable("<emphasis>x</emphasis> & y")).toBe("&lt;emphasis&gt;x&lt;/emphasis&gt; &amp; y");
    expect(speakable("Voir ThermopompesAVendre.ca/confidentialite.")).toContain('<sub alias="Thermopompes À Vendre point c a, barre oblique, confidentialité">ThermopompesAVendre.ca/confidentialite</sub>');
  });
});
