/* Rapprochement : pont par un point de contact qui a les deux clés, fusion et séparation manuelles, identifiants stables. */
import { describe, expect, it } from "vitest";
import { groupTouchpoints, keySelector, splitId } from "../group";
import { clientIdFor, genericKeys, hashKey } from "../identity";
import { buildBundles, computeIndex } from "../model";
import { emptyCrm } from "../store";
import type { CrmData, Touchpoint } from "../types";
import { daysAgo, entry, iso, NOW, quote, src } from "./fixtures";

const tp = (key: string, at: string, over: Partial<Touchpoint> = {}): Touchpoint => ({ key, source: "journal", at, ref: key, ...over });
const ids = (groups: ReturnType<typeof groupTouchpoints>) => groups.map((g) => g.touchpoints.map((t) => t.key).sort());

describe("rapprochement", () => {
  it("un appel sans courriel et une soumission sans téléphone sont reliés par un ThermoMatch qui a les deux", () => {
    const call = tp("j:appel", "2026-09-01T12:00:00Z", { phone: "+15145550142" });
    const quoteTp = tp("q:soum", "2026-09-05T12:00:00Z", { source: "soumission", email: "julie@exemple.ca" });
    const match = tp("j:tm", "2026-09-03T12:00:00Z", { phone: "+15145550142", email: "julie@exemple.ca" });
    expect(ids(groupTouchpoints([call, quoteTp], emptyCrm()))).toHaveLength(2);
    const groups = groupTouchpoints([quoteTp, call, match], emptyCrm());
    expect(ids(groups)).toEqual([["j:appel", "j:tm", "q:soum"]]);
    // Identifiant : la plus ancienne clé (celle de l'appel), quel que soit l'ordre d'entrée.
    expect(groups[0].id).toBe(clientIdFor("p:+15145550142"));
    expect(groupTouchpoints([match, call, quoteTp], emptyCrm())[0].id).toBe(groups[0].id);
  });

  it("le numéro de l'entreprise tapé par deux clients ne les réunit pas", () => {
    const a = tp("j:a", "2026-09-01T12:00:00Z", { phone: "+15145550100", email: "a1@exemple.ca" });
    const b = tp("j:b", "2026-09-02T12:00:00Z", { phone: "+15145550100", email: "b1@exemple.ca" });
    expect(groupTouchpoints([a, b], emptyCrm())).toHaveLength(1);
    expect(groupTouchpoints([a, b], emptyCrm(), genericKeys(["514 555-0100"]))).toHaveLength(2);
  });

  it("relances et alertes s'attachent à un client existant, n'en créent jamais", () => {
    const relance = tp("r:1", "2026-09-04T12:00:00Z", { source: "relance", email: "julie@exemple.ca", attachOnly: true });
    expect(groupTouchpoints([relance], emptyCrm())).toHaveLength(0);
    const form = tp("j:f", "2026-09-01T12:00:00Z", { email: "julie@exemple.ca" });
    const groups = groupTouchpoints([form, relance], emptyCrm());
    expect(ids(groups)).toEqual([["j:f", "r:1"]]);
  });

  it("fusion manuelle : le plus ancien identifiant gagne, l'autre devient un alias", () => {
    const a = tp("j:a", "2026-09-01T12:00:00Z", { phone: "+15145550142" });
    const b = tp("j:b", "2026-09-03T12:00:00Z", { email: "autre@exemple.ca" });
    const idA = clientIdFor("p:+15145550142");
    const idB = clientIdFor("e:autre@exemple.ca");
    const crm: CrmData = emptyCrm();
    crm.clients[idA] = { id: idA, keys: [hashKey("p:+15145550142"), hashKey("e:autre@exemple.ca")], stageLog: [], tags: [], notes: [], createdAt: "2026-09-10T12:00:00Z", updatedAt: "2026-09-10T12:00:00Z" };
    crm.aliases[idB] = idA;
    crm.merges.push([idB, idA]);
    const groups = groupTouchpoints([a, b], crm);
    expect(groups).toHaveLength(1);
    expect(groups[0].id).toBe(idA);
    expect(groups[0].aliases).toContain(idB);
  });

  it("séparation manuelle : un numéro partagé par deux personnes", () => {
    const call = tp("j:appel", "2026-09-01T12:00:00Z", { phone: "+15145550142" });
    const him = tp("q:lui", "2026-09-02T12:00:00Z", { source: "soumission", phone: "+15145550142", email: "marc@exemple.ca" });
    const her = tp("q:elle", "2026-09-03T12:00:00Z", { source: "soumission", phone: "+15145550142", email: "julie@exemple.ca" });
    expect(groupTouchpoints([call, him, her], emptyCrm())).toHaveLength(1);
    const crm = emptyCrm();
    const sel = [keySelector("e:julie@exemple.ca")];
    crm.splits.push(sel);
    const groups = groupTouchpoints([call, him, her], crm);
    expect(ids(groups)).toEqual([["j:appel", "q:lui"], ["q:elle"]]);
    expect(groups[1].id).toBe(splitId(sel));
    expect(groups[1].split).toBe(true);
    // Une nouvelle trace qui ne porte que le numéro partagé reste avec la fiche d'origine.
    const later = tp("j:plus-tard", "2026-09-09T12:00:00Z", { phone: "+15145550142" });
    expect(ids(groupTouchpoints([call, him, her, later], crm))[0]).toContain("j:plus-tard");
  });

  it("identifiant stable même si une trace plus ancienne rejoint le client (enregistrement crm.json)", () => {
    const phoneOnly = tp("j:appel", "2026-09-05T12:00:00Z", { phone: "+15145550142" });
    const before = groupTouchpoints([phoneOnly], emptyCrm())[0].id;
    const older = tp("j:vieux", "2026-08-01T12:00:00Z", { email: "julie@exemple.ca" });
    const bridge = tp("j:pont", "2026-09-06T12:00:00Z", { phone: "+15145550142", email: "julie@exemple.ca" });
    // Sans enregistrement, la plus ancienne clé change l'identifiant…
    expect(groupTouchpoints([phoneOnly, older, bridge], emptyCrm())[0].id).not.toBe(before);
    // …avec un enregistrement (le propriétaire a noté quelque chose), il reste.
    const crm = emptyCrm();
    crm.clients[before] = { id: before, keys: [hashKey("p:+15145550142")], stageLog: [], tags: [], notes: [], createdAt: "2026-09-05T13:00:00Z", updatedAt: "2026-09-05T13:00:00Z" };
    const g = groupTouchpoints([phoneOnly, older, bridge], crm)[0];
    expect(g.id).toBe(before);
    expect(g.aliases).toContain(clientIdFor("e:julie@exemple.ca"));
  });

  it("migration des alias : un ancien identifiant mène au client retenu", () => {
    const journal = [entry("soumission", daysAgo(3), { firstName: "Julie", phone: "514 555-0142" })];
    const crm = emptyCrm();
    const id = clientIdFor("p:+15145550142");
    crm.aliases["c_0123456789ab"] = id;
    const index = computeIndex(buildBundles(src({ journal, crm })), src({ journal, crm }), NOW);
    expect(index.byId.get("c_0123456789ab")?.b.id).toBe(id);
  });

  it("les soumissions, jobs et demandes du même client sont réunis dans une fiche", () => {
    const journal = [entry("soumission", daysAgo(9), { firstName: "Julie", email: "Julie@Exemple.ca", phone: "(514) 555-0142" })];
    const q = quote({ client: { firstName: "Julie", lastName: "Tremblay", email: "julie@exemple.ca", phone: "" }, sentAt: daysAgo(4) });
    const s = src({ journal, quotes: [q] });
    const [b] = buildBundles(s);
    expect(b.journal).toHaveLength(1);
    expect(b.quotes).toHaveLength(1);
    expect(b.firstName).toBe("Julie");
    expect(b.lastName).toBe("Tremblay");
    expect(b.firstAt).toBe(iso(daysAgo(9)));
  });
});
