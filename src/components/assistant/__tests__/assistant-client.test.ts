import { describe, expect, it } from "vitest";
import { createNdjsonParser, type AssistantEvent } from "../client";
import { hideIncompleteMarkup, safeHref } from "../rich-text";
import { isAssistantHiddenOn } from "../routes";

describe("createNdjsonParser", () => {
  it("reconstitue les événements coupés entre deux morceaux et ignore les lignes illisibles", () => {
    const events: AssistantEvent[] = [];
    const p = createNdjsonParser((e) => events.push(e));
    p.push('{"t":"text","v":"Bon');
    p.push('jour"}\n{"t":"to');
    p.push('ol","v":"glossary"}\npas du json\n');
    p.push('{"t":"done"}');
    p.end();
    expect(events).toEqual([{ t: "text", v: "Bonjour" }, { t: "tool", v: "glossary" }, { t: "done" }]);
  });
});

describe("liens et balisage", () => {
  it("seuls les liens internes et le téléphone du site sont cliquables", () => {
    expect(safeHref("/produit/daikin-atmosphera-12k")).toBe("/produit/daikin-atmosphera-12k");
    expect(safeHref("tel:4389003224")).toBe("tel:4389003224");
    expect(safeHref("https://exemple.com")).toBeNull();
    expect(safeHref("//exemple.com")).toBeNull();
    expect(safeHref("javascript:alert(1)")).toBeNull();
  });

  it("pendant le flux, masque un lien pas encore refermé", () => {
    expect(hideIncompleteMarkup("Voyez [ThermoMatch](/trouver-ma")).toBe("Voyez ");
    expect(hideIncompleteMarkup("Voyez **Thermo")).toBe("Voyez Thermo");
    expect(hideIncompleteMarkup("Voyez [ThermoMatch](/trouver-ma-thermopompe).")).toBe("Voyez [ThermoMatch](/trouver-ma-thermopompe).");
  });
});

describe("isAssistantHiddenOn", () => {
  it("cache l'assistant sur ThermoMatch, la soumission et le rendez-vous", () => {
    for (const p of ["/trouver-ma-thermopompe", "/trouver-ma-thermopompe/resultats", "/soumission", "/rendez-vous", "/rendez-vous?x=1"]) {
      expect(isAssistantHiddenOn(p)).toBe(true);
    }
    for (const p of ["/", "/produit/daikin-atmosphera-12k", "/soumissions-archive", "/subventions", null]) {
      expect(isAssistantHiddenOn(p)).toBe(false);
    }
  });
});
