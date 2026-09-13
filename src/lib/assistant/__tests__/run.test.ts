/* Tests — orchestration (fournisseur factice et fournisseurs scriptés), route et conversion Gemini. */

import { afterEach, describe, expect, it, vi } from "vitest";
import { ASSISTANT_LIMITS } from "../limits";
import { SAFE_FALLBACK, EMPTY_FALLBACK } from "../grounding";
import { runAssistant, type AssistantEvent } from "../run";
import { createMockProvider } from "../providers/mock";
import { toGeminiDeclaration } from "../providers/gemini";
import { emptyUsage, type AssistantProvider, type ProviderRunArgs } from "../providers/types";
import { TOOL_DEFS } from "../tools";

function scripted(script: (args: ProviderRunArgs) => Promise<void>): AssistantProvider {
  return {
    id: "mock",
    async run(args) {
      await script(args);
      return emptyUsage();
    },
  };
}

async function collect(provider: AssistantProvider, question: string) {
  const events: AssistantEvent[] = [];
  const result = await runAssistant({ provider, history: [{ role: "user", content: question }], emit: (e) => events.push(e) });
  return { events, result };
}

describe("runAssistant", () => {
  it("fournisseur factice : réponse fondée sur les outils, fiches citées, fin de flux", async () => {
    const question = "Quelle thermopompe pour un bungalow de 1 200 pi² à Lévis ?";
    const { events, result } = await collect(createMockProvider({ delayMs: 0 }), question);
    const tools = events.filter((e) => e.t === "tool").map((e) => (e as { v: string }).v);
    expect(tools).toEqual(["city_climate", "search_models"]);
    expect(result.replaced).toBe(false);
    expect(result.answer).toContain("/trouver-ma-thermopompe");
    expect(result.cards.length).toBeGreaterThan(0);
    expect(result.cards.length).toBeLessThanOrEqual(3);
    for (const c of result.cards) expect(result.answer).toContain(c.url);
    expect(events[events.length - 1]).toEqual({ t: "done" });
  });

  it("remplace une réponse qui contient un chiffre non vérifié", async () => {
    const { events, result } = await collect(
      scripted(async ({ onText }) => onText("Comptez environ 6 500 $ pour l'installation.")),
      "Combien coûte une thermopompe ?",
    );
    expect(result.replaced).toBe(true);
    expect(events).toContainEqual({ t: "final", v: SAFE_FALLBACK });
    expect(events.some((e) => e.t === "cards")).toBe(false);
  });

  it("garde les chiffres venus d'un outil et affiche la fiche citée", async () => {
    const { events, result } = await collect(
      scripted(async ({ executeTool, onText }) => {
        const r = JSON.parse(await executeTool("search_models", { type: "murale", sort: "froid", limit: 1 }));
        const m = r.models[0];
        onText(`La [${m.name}](${m.url}) donne ${m.btu_at_minus15c.toLocaleString("fr-CA")} BTU/h à -15 °C.`);
      }),
      "Quelle murale chauffe le mieux au froid ?",
    );
    expect(result.replaced).toBe(false);
    expect(events.some((e) => e.t === "final")).toBe(false);
    expect(result.cards).toHaveLength(1);
    expect(events.find((e) => e.t === "cards")).toBeTruthy();
  });

  it("retire les liens vers des pages inconnues", async () => {
    const { result } = await collect(
      scripted(async ({ executeTool, onText }) => {
        await executeTool("glossary", { term: "COP" });
        onText("Voir [ce site](https://exemple.com) et [le glossaire](/glossaire#cop).");
      }),
      "C'est quoi le COP ?",
    );
    expect(result.answer).toBe("Voir ce site et [le glossaire](/glossaire#cop).");
  });

  it("plafonne le nombre d'appels d'outils par réponse", async () => {
    const outputs: string[] = [];
    const { events } = await collect(
      scripted(async ({ executeTool, onText }) => {
        for (let i = 0; i < ASSISTANT_LIMITS.maxToolCalls + 2; i++) outputs.push(await executeTool("glossary", { term: "BTU" }));
        onText("Voyez le [glossaire](/glossaire).");
      }),
      "BTU ?",
    );
    expect(events.filter((e) => e.t === "tool")).toHaveLength(ASSISTANT_LIMITS.maxToolCalls);
    expect(outputs[ASSISTANT_LIMITS.maxToolCalls]).toContain("Limite");
  });

  it("réponse vide : repli prudent ; erreur du fournisseur : message d'indisponibilité", async () => {
    const empty = await collect(scripted(async () => {}), "Allô ?");
    expect(empty.events).toContainEqual({ t: "final", v: EMPTY_FALLBACK });

    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    const failing = await collect(
      scripted(async () => {
        throw Object.assign(new Error("boom"), { status: 529 });
      }),
      "Allô ?",
    );
    expect(failing.events.map((e) => e.t)).toEqual(["error", "done"]);
    spy.mockRestore();
  });

  it("les réponses du fournisseur factice passent toutes la vérification des chiffres", async () => {
    for (const q of ["C’est quoi le HSPF2 ?", "Combien de subvention pour une Daikin murale ?"]) {
      const { result } = await collect(createMockProvider({ delayMs: 0 }), q);
      expect(result.replaced).toBe(false);
      expect(result.answer.length).toBeGreaterThan(40);
    }
  });
});

describe("toGeminiDeclaration", () => {
  it("convertit le schéma commun au format de Gemini", () => {
    const d = toGeminiDeclaration(TOOL_DEFS.find((t) => t.name === "search_models")!);
    expect(d.parameters.type).toBe("OBJECT");
    expect((d.parameters.properties as Record<string, { type: string; enum?: string[] }>).type).toMatchObject({ type: "STRING", enum: expect.arrayContaining(["murale"]) });
    expect((d.parameters.properties as Record<string, { type: string }>).limit.type).toBe("NUMBER");
  });
});

describe("POST /api/assistant", () => {
  afterEach(() => vi.unstubAllEnvs());

  const post = async (body: unknown, headers: Record<string, string> = {}) => {
    const { POST } = await import("@/app/api/assistant/route");
    return POST(
      new Request("http://localhost/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-forwarded-for": `10.0.0.${Math.floor(Math.random() * 250)}`, ...headers },
        body: JSON.stringify(body),
      }),
    );
  };

  it("sans clé : 503", async () => {
    vi.stubEnv("ANTHROPIC_API_KEY", "");
    vi.stubEnv("GEMINI_API_KEY", "");
    vi.stubEnv("ASSISTANT_PROVIDER", "");
    const res = await post({ messages: [{ role: "user", content: "Bonjour" }] });
    expect(res.status).toBe(503);
  });

  it("refuse une question trop longue et un appel d'un autre site", async () => {
    vi.stubEnv("ASSISTANT_PROVIDER", "mock");
    expect((await post({ messages: [{ role: "user", content: "x".repeat(600) }] })).status).toBe(400);
    expect((await post({ messages: [{ role: "user", content: "Bonjour" }] }, { "sec-fetch-site": "cross-site" })).status).toBe(403);
  });

  it("diffuse une réponse NDJSON qui se termine par « done »", async () => {
    vi.stubEnv("ASSISTANT_PROVIDER", "mock");
    const res = await post({ messages: [{ role: "user", content: "C’est quoi le HSPF2 ?" }] });
    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toContain("application/x-ndjson");
    const lines = (await res.text()).trim().split("\n").map((l) => JSON.parse(l) as AssistantEvent);
    expect(lines.some((e) => e.t === "text")).toBe(true);
    expect(lines[lines.length - 1]).toEqual({ t: "done" });
  });

  it("limite le débit par adresse IP", async () => {
    vi.stubEnv("ASSISTANT_PROVIDER", "mock");
    const headers = { "x-forwarded-for": "203.0.113.9" };
    const statuses: number[] = [];
    for (let i = 0; i < ASSISTANT_LIMITS.perIpPerMinute + 1; i++) {
      statuses.push((await post({ messages: [] }, headers)).status);
    }
    expect(statuses.slice(0, ASSISTANT_LIMITS.perIpPerMinute).every((s) => s === 400)).toBe(true);
    expect(statuses[ASSISTANT_LIMITS.perIpPerMinute]).toBe(429);
  });
});
