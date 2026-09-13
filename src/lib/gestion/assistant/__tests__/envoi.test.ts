/* Chantier A — l'assistant n'envoie JAMAIS rien : aucune fonction d'envoi (textos, SMS, courriels, avis aux
   installateurs) n'est appelée, le seul appel réseau va à l'API d'Anthropic, et un brouillon reste un brouillon. */
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const sent = vi.hoisted(() => ({ calls: [] as string[] }));

function trap(name: string) {
  return async (orig: () => Promise<unknown>) => {
    const m = (await orig()) as Record<string, unknown>;
    return Object.fromEntries(
      Object.entries(m).map(([k, v]) => [
        k,
        typeof v === "function" && /^(send|notify|receive|flush|reply)/i.test(k)
          ? (...args: unknown[]) => {
              sent.calls.push(`${name}.${k}`);
              void args;
              return Promise.resolve(undefined);
            }
          : v,
      ]),
    );
  };
}
vi.mock("@/lib/textos/service", () => trap("textos")(() => import("@/lib/textos/service")));
vi.mock("@/lib/gestion/sms", () => trap("sms")(() => import("@/lib/gestion/sms")));
vi.mock("@/lib/gestion/automatisations/send", () => trap("automatisations")(() => import("@/lib/gestion/automatisations/send")));
vi.mock("@/lib/gestion/notify", () => trap("notify")(() => import("@/lib/gestion/notify")));
vi.mock("@/lib/crm/email", () => trap("email")(() => import("@/lib/crm/email")));
vi.mock("nodemailer", () => {
  const createTransport = () => {
    sent.calls.push("nodemailer.createTransport");
    return { sendMail: async () => sent.calls.push("nodemailer.sendMail") };
  };
  return { default: { createTransport }, createTransport };
});

import { ANTHROPIC_MESSAGES_URL } from "../config";
import { askCrmAssistant, resetAssistantLimits } from "../service";
import { fixtureContext, NOW, PROD, reply, scriptedFetch, text, toolUse } from "./helpers";

const env = process.env;
let dir: string;
const netSpy = vi.fn(async () => new Response("interdit", { status: 599 }));

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-assistant-envoi-"));
  process.env = { ...env, GESTION_DATA_DIR: dir, NODE_ENV: "test" };
  resetAssistantLimits();
  sent.calls.length = 0;
  netSpy.mockClear();
  vi.stubGlobal("fetch", netSpy);
});
afterEach(async () => {
  vi.unstubAllGlobals();
  process.env = env;
  await rm(dir, { recursive: true, force: true });
});

describe("aucun envoi par l'assistant", () => {
  it("relance demandée : un brouillon est préparé, rien n'est envoyé, un seul hôte contacté", async () => {
    const { ctx, idOf } = fixtureContext();
    const julie = idOf("Julie");
    const f = scriptedFetch([
      reply([toolUse("t1", "chercher_client", { requete: "Julie" }), toolUse("t2", "fiche_client", { client_id: julie })]),
      reply([toolUse("t3", "preparer_brouillon", { client_id: julie, canal: "texto", texte: "Bonjour Julie, je fais un suivi de votre soumission. L’équipe ThermopompesÀVendre.ca" }), toolUse("t4", "preparer_brouillon", { client_id: julie, canal: "courriel", objet: "Votre soumission", texte: "Bonjour Julie, …" })]),
      reply([text("Voici deux brouillons pour [Julie T.](/gestion/clients/" + julie + "). Je n’ai rien envoyé.")], "end_turn"),
    ]);
    const r = await askCrmAssistant({ email: "proprio@exemple.ca", question: "Prépare une relance pour Julie" }, { env: PROD, fetchImpl: f.fetch, context: ctx, now: NOW });
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.drafts.map((d) => d.canal)).toEqual(["texto", "courriel"]);
    expect(r.drafts.every((d) => d.clientId === julie && d.hasPhone && d.hasEmail)).toBe(true);
    // Le résultat de l'outil dit au modèle que rien n'est envoyé.
    const toolResults = f.calls[2].body.messages.at(-1)!.content as unknown as Array<{ content: string }>;
    for (const tr of toolResults) expect(JSON.parse(tr.content)).toMatchObject({ envoye: false, enregistre: false });
    // Aucune fonction d'envoi, aucun autre hôte.
    expect(sent.calls).toEqual([]);
    expect(netSpy).not.toHaveBeenCalled();
    expect(f.calls.every((c) => c.url === ANTHROPIC_MESSAGES_URL)).toBe(true);
    // Le brouillon ne contient aucune coordonnée.
    expect(JSON.stringify(r.drafts)).not.toContain("@");
  });

  it("même si le modèle demande un outil d'envoi inventé, rien ne part", async () => {
    const { ctx, idOf } = fixtureContext();
    const f = scriptedFetch([
      reply([toolUse("t1", "envoyer_texto", { client_id: idOf("Julie"), texte: "Bonjour" }), toolUse("t2", "changer_etape", { client_id: idOf("Julie"), etape: "perdue" })]),
      reply([text("Je ne peux pas envoyer de texto.")], "end_turn"),
    ]);
    const r = await askCrmAssistant({ email: "proprio@exemple.ca", question: "Envoie un texto à Julie" }, { env: PROD, fetchImpl: f.fetch, context: ctx, now: NOW });
    expect(r.ok).toBe(true);
    const results = f.calls[1].body.messages.at(-1)!.content as unknown as Array<{ content: string }>;
    expect(results.map((x) => JSON.parse(x.content).erreur)).toEqual(["Outil inconnu.", "Outil inconnu."]);
    expect(sent.calls).toEqual([]);
    expect(netSpy).not.toHaveBeenCalled();
  });

  it("hors production (développement, tests) : aucun appel réseau, même avec une clé", async () => {
    const { ctx } = fixtureContext();
    const r = await askCrmAssistant({ email: "proprio@exemple.ca", question: "Qu’est-ce que je devrais faire aujourd’hui ?" }, { env: { NODE_ENV: "development", ANTHROPIC_API_KEY: "sk-ant-test-fictive-0000" }, context: ctx, now: NOW });
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.mode).toBe("simule");
    expect(netSpy).not.toHaveBeenCalled();
    expect(sent.calls).toEqual([]);
  });
});
