/* Chantier A — réponse : liens internes seulement (fiche inventée = pas de lien), montants vérifiés contre les
   données des outils, boucle d'outils (un seul message de résultats, dernier tour sans outil, plafond d'appels). */
import { describe, expect, it, vi } from "vitest";
import type { MessagesRequest } from "../anthropic";
import { amountsIn, cleanLinks, unverifiedAmounts } from "../answer";
import { runToolLoop } from "../run";
import { reply, text, toolUse } from "./helpers";

describe("liens", () => {
  it("garde les chemins de /gestion vers des fiches existantes, retire le reste", () => {
    const exists = (id: string) => id === "c_0123456789ab";
    const out = cleanLinks("[Julie](/gestion/clients/c_0123456789ab), [Faux](/gestion/clients/c_ffffffffffff), [Site](https://exemple.com), [Tâches](/gestion/taches), [JS](javascript:alert(1))", exists);
    expect(out).toBe("[Julie](/gestion/clients/c_0123456789ab), Faux, Site, [Tâches](/gestion/taches), JS");
  });
});

describe("montants", () => {
  it("lit les montants en français (espaces, espaces insécables, décimales)", () => {
    expect(amountsIn("12 450 $, 1 234,5 $ et 99 $")).toEqual([1_245_000, 123_450, 9_900]);
  });

  it("un montant absent des outils est signalé ; sommes et écarts acceptés", () => {
    const sources = [JSON.stringify({ a: "12 450 $", b: "3 000 $" })];
    expect(unverifiedAmounts("Vous avez 12 450 $ en jeu.", sources)).toEqual([]);
    expect(unverifiedAmounts("Au total 15 450 $, soit 9 450 $ d’écart.", sources)).toEqual([]);
    expect(unverifiedAmounts("Comptez environ 6 500 $.", sources)).toEqual([650_000]);
  });
});

describe("boucle d'outils", () => {
  it("résultats dans un seul message, réponse du modèle renvoyée telle quelle, dernier tour sans outil", async () => {
    const bodies: MessagesRequest[] = [];
    const thinking = { type: "thinking", thinking: "", signature: "sig-fictive" };
    const call = vi.fn(async (b: MessagesRequest) => {
      bodies.push(structuredClone(b));
      return bodies.length < 3 ? reply([thinking, toolUse(`a${bodies.length}`, "x", {}), toolUse(`b${bodies.length}`, "y", {})]) : reply([text("Fin.")], "end_turn");
    });
    const execute = vi.fn(async (name: string) => `{"outil":"${name}"}`);
    const usage = vi.fn();
    const r = await runToolLoop({ call, model: "m", system: "s", tools: [{ name: "x", description: "", input_schema: {} }], messages: [{ role: "user", content: "q" }], execute, maxOutputTokens: 100, maxToolRounds: 2, maxToolCalls: 3, fallbacks: false, onUsage: usage });
    expect(bodies.map((b) => b.tool_choice.type)).toEqual(["auto", "auto", "none"]);
    // Deuxième appel : la réponse précédente (réflexion comprise) puis UN message avec les deux résultats.
    const m = bodies[1].messages;
    expect(m[1]).toEqual({ role: "assistant", content: [thinking, toolUse("a1", "x", {}), toolUse("b1", "y", {})] });
    expect((m[2].content as Array<{ type: string }>).map((b) => b.type)).toEqual(["tool_result", "tool_result"]);
    // Plafond : 3 appels exécutés, le 4e renvoyé en erreur sans exécution.
    expect(execute).toHaveBeenCalledTimes(3);
    const last = bodies[2].messages.at(-1)!.content as Array<{ is_error?: boolean }>;
    expect(last.map((x) => Boolean(x.is_error))).toEqual([false, true]);
    expect(r).toMatchObject({ text: "Fin.", stopReason: "end_turn", toolCalls: ["x", "y", "x"] });
    expect(usage).toHaveBeenCalledTimes(3);
    expect(r.usage.inputTokens).toBe(3000);
  });

  it("refus et réponse coupée : la raison d'arrêt est rendue", async () => {
    const r = await runToolLoop({ call: async () => reply([], "refusal"), model: "m", system: "s", tools: [], messages: [{ role: "user", content: "q" }], execute: async () => "", maxOutputTokens: 10, maxToolRounds: 2, maxToolCalls: 2, fallbacks: true });
    expect(r.stopReason).toBe("refusal");
    const outil = vi.fn(async () => "{}");
    await expect(runToolLoop({ call: async () => { throw new Error("réseau"); }, model: "m", system: "s", tools: [], messages: [{ role: "user", content: "q" }], execute: outil, maxOutputTokens: 10, maxToolRounds: 1, maxToolCalls: 1, fallbacks: false })).rejects.toThrow("réseau");
    expect(outil).not.toHaveBeenCalled();
  });
});
