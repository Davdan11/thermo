/* Chantier T — appel masqué de bout en bout : appel REST (cellulaire du propriétaire, From = numéro du site), webhooks
   signés (chuchotement, touche 1, <Dial callerId>, avis d'enregistrement, statut, fin), note « appel » dans la fiche une
   seule fois ; le cellulaire du propriétaire n'apparaît jamais dans les vues, le TwiML ni les journaux. Twilio simulé. */
import { readFile, rm } from "node:fs/promises";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { POST } from "@/app/api/phone/masque/[etape]/route";
import { resetSecretCache } from "@/lib/gestion/auth/secret";
import { clientIdFor } from "@/lib/gestion/crm/identity";
import { resetCrmMemo } from "@/lib/gestion/crm/service";
import { tempDir, twilioRequest } from "@/lib/textos/__tests__/helpers";
import { callView, getCallView, startMaskedCall } from "../masked-call";
import { readTelephonie } from "../store";
import { hubView } from "../view";
import { addJournal, captureLogs, CLIENT_PHONE, mockFetch, OWNER_DIGITS, telEnv } from "./helpers";

const env = process.env;
let dir: string;
const CLIENT_ID = clientIdFor(`p:${CLIENT_PHONE}`);

async function hook(etape: string, callId: string, params: Record<string, string>, extra = "") {
  const res = await POST(twilioRequest(`/api/phone/masque/${etape}?a=${callId}${extra}`, params), { params: Promise.resolve({ etape }) });
  return { status: res.status, body: await res.text() };
}

beforeEach(async () => {
  dir = await tempDir();
  process.env = telEnv(dir);
  resetSecretCache();
  resetCrmMemo();
  await addJournal(dir, "soumission", { firstName: "Julie", lastName: "Tremblay", phone: "514 555-0142", municipality: "Laval" });
});
afterEach(async () => {
  vi.unstubAllGlobals();
  process.env = env;
  resetCrmMemo();
  await rm(dir, { recursive: true, force: true });
});

describe("lancement", () => {
  it("fait sonner le cellulaire du propriétaire avec le numéro du site ; la vue ne contient aucun numéro", async () => {
    const f = mockFetch();
    const { result: r, text } = await captureLogs(() => startMaskedCall({ kind: "client", id: CLIENT_ID }, "proprio@exemple.ca"));
    expect(r.ok).toBe(true);
    const rest = f.restCalls();
    expect(rest).toHaveLength(1);
    expect(rest[0].get("To")).toBe("+15145550199"); // seul endroit : la requête REST à Twilio
    expect(rest[0].get("From")).toBe("+14389003224");
    expect(rest[0].get("Url")).toMatch(/\/api\/phone\/masque\/proprio\?a=a_/);
    expect(rest[0].getAll("StatusCallbackEvent")).toEqual(["initiated", "ringing", "answered", "completed"]);
    const shown = JSON.stringify(r);
    expect(shown).not.toContain(OWNER_DIGITS.slice(-7));
    expect(shown).not.toContain("5550142");
    expect(text).not.toContain(OWNER_DIGITS.slice(-7));
    // Le magasin ne garde jamais le cellulaire du propriétaire.
    expect(await readFile(path.join(dir, "telephonie.json"), "utf8")).not.toContain(OWNER_DIGITS);
  });

  it("en développement (sans TEXTOS_ENVOIS_DEV), rien n'est composé", async () => {
    process.env.TEXTOS_ENVOIS_DEV = "";
    const f = mockFetch();
    const r = await startMaskedCall({ kind: "client", id: CLIENT_ID }, "proprio@exemple.ca");
    expect(r.ok && r.view.result).toBe("simule");
    expect(f.fn).not.toHaveBeenCalled();
  });

  it("refuse sans cellulaire configuré ou sans numéro de client", async () => {
    mockFetch();
    process.env.TWILIO_FORWARD_CELL = "";
    expect(await startMaskedCall({ kind: "client", id: CLIENT_ID }, "p")).toMatchObject({ ok: false });
    process.env.TWILIO_FORWARD_CELL = "+15145550199";
    expect(await startMaskedCall({ kind: "client", id: "c_000000000000" }, "p")).toEqual({ ok: false, error: "Aucun numéro pour ce client." });
  });
});

describe("webhooks Twilio", () => {
  it("parcours complet : chuchotement, touche 1, numéro du site, avis, fin notée une fois dans la fiche", async () => {
    mockFetch();
    const { result, text: logs } = await captureLogs(async () => {
      const r = await startMaskedCall({ kind: "client", id: CLIENT_ID }, "proprio@exemple.ca");
      if (!r.ok) throw new Error(r.error);
      const id = r.view.id;
      const out: Record<string, string> = {};
      await hook("statut", id, { CallStatus: "ringing" }, "&jambe=proprio");
      out.ringing = (await getCallView(id))!.title;
      out.proprio = (await hook("proprio", id, { CallStatus: "in-progress" })).body;
      out.connect = (await hook("connecter", id, { Digits: "1" })).body;
      await hook("statut", id, { CallStatus: "ringing" }, "&jambe=client");
      out.avis = (await hook("avis", id, { CallStatus: "in-progress" })).body;
      await hook("statut", id, { CallStatus: "in-progress" }, "&jambe=client");
      out.live = (await getCallView(id))!.phase;
      out.fin = (await hook("fin", id, { DialCallStatus: "completed", DialCallDuration: "125" })).body;
      await hook("statut", id, { CallStatus: "completed", CallDuration: "140" }, "&jambe=proprio");
      await hook("fin", id, { DialCallStatus: "completed", DialCallDuration: "125" });
      return { id, out };
    });
    const { id, out } = result;
    expect(out.ringing).toBe("Votre cellulaire sonne");
    expect(out.proprio).toContain("Appel vers Julie T., Laval, nouvelle demande.");
    expect(out.connect).toContain('<Dial callerId="+14389003224"');
    expect(out.connect).toContain(">+15145550142</Number>");
    expect(out.avis).toContain("Votre appel peut être enregistré pour la qualité du service.");
    expect(out.live).toBe("en-cours");
    expect(out.fin).toContain("<Hangup/>");

    const view = (await getCallView(id))!;
    expect(view).toMatchObject({ final: true, result: "repondu", durationSec: 125, title: "Appel terminé · 2 min 05 s" });
    for (const body of Object.values(out)) expect(body).not.toContain(OWNER_DIGITS.slice(-7));
    expect(logs).not.toContain(OWNER_DIGITS.slice(-7));

    const crm = JSON.parse(await readFile(path.join(dir, "crm.json"), "utf8"));
    const notes = Object.values(crm.clients as Record<string, { notes: Array<{ text: string; kind: string }> }>).flatMap((c) => c.notes);
    expect(notes).toHaveLength(1);
    expect(notes[0]).toMatchObject({ kind: "appel", text: "Appel masqué (numéro du site) · répondu · 2 min 05 s" });
  });

  it("sans la touche 1, le client n'est jamais appelé", async () => {
    mockFetch();
    const r = await startMaskedCall({ kind: "client", id: CLIENT_ID }, "p");
    if (!r.ok) throw new Error(r.error);
    const res = await hook("connecter", r.view.id, { Digits: "" });
    expect(res.body).not.toContain("<Dial");
    expect((await getCallView(r.view.id))!.result).toBe("non-confirme");
  });

  it("pas de réponse du client : tentative notée, sans compter comme « contacté »", async () => {
    mockFetch();
    const r = await startMaskedCall({ kind: "client", id: CLIENT_ID }, "p");
    if (!r.ok) throw new Error(r.error);
    await hook("connecter", r.view.id, { Digits: "1" });
    await hook("fin", r.view.id, { DialCallStatus: "no-answer" });
    const crm = JSON.parse(await readFile(path.join(dir, "crm.json"), "utf8"));
    const notes = Object.values(crm.clients as Record<string, { notes: Array<{ text: string; kind: string }> }>).flatMap((c) => c.notes);
    expect(notes).toEqual([expect.objectContaining({ kind: "note", text: "Tentative d’appel masqué (numéro du site) · pas de réponse" })]);
  });

  it("refuse (403) une requête non signée, sans rien changer", async () => {
    mockFetch();
    const r = await startMaskedCall({ kind: "client", id: CLIENT_ID }, "p");
    if (!r.ok) throw new Error(r.error);
    const res = await POST(twilioRequest(`/api/phone/masque/connecter?a=${r.view.id}`, { Digits: "1" }, null), { params: Promise.resolve({ etape: "connecter" }) });
    expect(res.status).toBe(403);
    expect((await readTelephonie()).calls[0].phase).toBe("initie");
  });

  it("le tableau de bord montre au plus les 4 derniers chiffres du cellulaire", async () => {
    mockFetch();
    await startMaskedCall({ kind: "client", id: CLIENT_ID }, "p");
    const v = await hubView();
    expect(v.readiness.cell).toBe("…0199");
    expect(JSON.stringify(v)).not.toContain(OWNER_DIGITS.slice(-7));
    expect(JSON.stringify(v)).not.toContain("5550142");
    expect(callView((await readTelephonie()).calls[0]).label).toBe("Julie T., Laval");
  });
});
