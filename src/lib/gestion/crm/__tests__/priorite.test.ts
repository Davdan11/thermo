/* Refonte R2 — note de priorité : montant × probabilité × urgence. Probabilité inconnue (« à définir », jamais
   inventée), contrat signé (100 %), blocage, dépassement de délai, ouvertures, saison ; ordre ; tri de la page À faire ;
   portée des vendeurs (notes et pipeline). */
import { describe, expect, it } from "vitest";
import { restrictIndex } from "../../equipe/scope";
import { buildBundles, computeIndex } from "../model";
import { buildPipelineView } from "../pipeline-parcours";
import { comparePriority, inSeasonStart, priorityOf, sortTasksByPriority, topPriorities, type Priority } from "../priorite";
import { emptyCrm } from "../store";
import type { Task } from "../tasks";
import type { SalesSettings } from "../extensions";
import type { SourceData } from "../types";
import { daysAgo, hoursAgo, iso, job, NOW, quote, src } from "./fixtures";

const julie = { firstName: "Julie", lastName: "Tremblay", phone: "514 555-0142", email: "julie@exemple.ca", city: "Laval" };
const alice = { firstName: "Alice", lastName: "Exemple", phone: "514 555-0161", email: "alice@exemple.ca", city: "Laval" };
const bruno = { firstName: "Bruno", lastName: "Exemple", phone: "514 555-0162", email: "bruno@exemple.ca", city: "Longueuil" };
const index = (s: SourceData, now = NOW) => computeIndex(buildBundles(s), s, now);
function withSales(s: SourceData, probs: SalesSettings["stageProbabilities"]): SourceData {
  const crm = emptyCrm();
  crm.salesSettings = { ...crm.salesSettings, stageProbabilities: probs };
  return { ...s, crm };
}
const factor = (p: Priority, id: string) => p.factors.find((f) => f.id === id)?.value ?? 0;

describe("note de priorité", () => {
  it("probabilité inconnue : note « à définir », jamais inventée ; l'urgence reste calculée", () => {
    const i = index(src({ quotes: [quote({ client: julie, sentAt: daysAgo(5), viewedAt: daysAgo(4) })] }));
    const p = priorityOf(i, i.clients[0].b.id)!;
    expect(p).toMatchObject({ state: "ouverte", probability: null, probabilitySource: "a-definir", score: null, label: "À définir" });
    expect(p.amountCents).toBeGreaterThan(0);
    expect(p.urgency).toBeGreaterThan(1);
  });

  it("probabilité réglée : montant en jeu × probabilité × urgence, arrondi au dollar", () => {
    const i = index(withSales(src({ quotes: [quote({ client: julie, sentAt: daysAgo(5), viewedAt: daysAgo(4) })] }), { ouverte: 0.5 }));
    const c = i.clients[0];
    const p = priorityOf(i, c.b.id)!;
    expect(p.probabilitySource).toBe("reglee");
    expect(p.score).toBe(Math.round((c.valueCents! / 100) * 0.5 * p.urgency));
  });

  it("contrat signé : 100 % (comme « Déjà signé » de la prévision) ; payé ou perdu : rien en jeu", () => {
    const i = index(src({ quotes: [quote({ client: julie, sentAt: daysAgo(6), acceptedAt: daysAgo(1) })] }));
    const p = priorityOf(i, i.clients[0].b.id)!;
    expect(p).toMatchObject({ state: "signe", probability: 1, probabilitySource: "signe" });
    expect(p.score).toBe(Math.round((i.clients[0].valueCents! / 100) * p.urgency));
    const lost = index(src({ quotes: [quote({ client: julie, sentAt: daysAgo(6), refusedAt: daysAgo(2) })] }));
    expect(priorityOf(lost, lost.clients[0].b.id)).toMatchObject({ state: "perdu", amountCents: 0, score: 0 });
  });

  it("dépassement de délai : 0,5 au délai atteint, plafonné à 1 (deux fois le délai)", () => {
    const at4 = index(withSales(src({ quotes: [quote({ client: julie, sentAt: daysAgo(5), viewedAt: daysAgo(4) })] }), { ouverte: 0.5 }));
    expect(factor(priorityOf(at4, at4.clients[0].b.id)!, "delai")).toBeCloseTo(0.67, 2); // 96 h sur 72 h
    const at8 = index(withSales(src({ quotes: [quote({ client: julie, sentAt: daysAgo(9), viewedAt: daysAgo(8) })] }), { ouverte: 0.5 }));
    expect(factor(priorityOf(at8, at8.clients[0].b.id)!, "delai")).toBe(1);
    const fresh = index(withSales(src({ quotes: [quote({ client: julie, sentAt: daysAgo(2), viewedAt: hoursAgo(36) })] }), { ouverte: 0.5 }));
    expect(factor(priorityOf(fresh, fresh.clients[0].b.id)!, "delai")).toBeCloseTo(0.25, 2); // 36 h sur 72 h
  });

  it("ouvertures récentes de la soumission (seuil du client chaud) ; aucune si la dernière est trop vieille", () => {
    const q = quote({ client: julie, sentAt: daysAgo(3), viewedAt: hoursAgo(5) });
    q.versions[0].views.count = 3;
    const i = index(src({ quotes: [q] }));
    expect(factor(priorityOf(i, i.clients[0].b.id)!, "ouvertures")).toBe(0.5);
    const old = quote({ client: julie, sentAt: daysAgo(20), viewedAt: daysAgo(15) });
    const j = index(src({ quotes: [old] }));
    expect(factor(priorityOf(j, j.clients[0].b.id)!, "ouvertures")).toBe(0);
  });

  it("saison : les 45 jours qui suivent le début d'une saison (dates du radar)", () => {
    const sales = { coolingStart: "04-01", heatingStart: "09-01" };
    expect(inSeasonStart("2026-09-16", sales)).toBe(true);
    expect(inSeasonStart("2026-04-20", sales)).toBe(true);
    expect(inSeasonStart("2026-07-15", sales)).toBe(false);
    expect(inSeasonStart("2026-01-05", sales)).toBe(false);
  });

  it("blocage : +1 d'urgence (job signé sans preneur)", () => {
    const q = quote({ client: julie, sentAt: daysAgo(8), acceptedAt: daysAgo(6) });
    const jb = job({ client: julie, status: "nouveau", createdAt: iso(daysAgo(5)) });
    const i = index(src({ quotes: [q], jobs: [jb] }));
    const c = i.clients[0];
    expect(c.journey?.blockers).toContain("Job sans preneur");
    const p = priorityOf(i, c.b.id)!;
    expect(factor(p, "blocage")).toBe(1);
    expect(c.journey?.actor).toBe("proprietaire");
  });

  it("ordre : notes connues (plus haute d'abord), puis à définir (par urgence), puis nulles", () => {
    const P = (score: number | null, urgency: number, since = "2026-09-01T00:00:00.000Z") => ({ score, urgency, since }) as Priority;
    const list = [P(0, 3), P(null, 1.2), P(500, 1), P(null, 2.5), P(9000, 1)];
    expect([...list].sort(comparePriority).map((p) => [p.score, p.urgency])).toEqual([
      [9000, 1],
      [500, 1],
      [null, 2.5],
      [null, 1.2],
      [0, 3],
    ]);
  });
});

describe("tri et portée", () => {
  const s = (): SourceData => {
    const base = src({ quotes: [quote({ client: alice, sentAt: daysAgo(6), acceptedAt: daysAgo(1) }), quote({ client: bruno, sentAt: daysAgo(5), viewedAt: daysAgo(4) })] });
    const bundles = buildBundles(base);
    const crm = emptyCrm();
    for (const b of bundles) {
      const userId = b.firstName === "Alice" ? "u_vendeurA001" : "u_vendeurB001";
      crm.clients[b.id] = { id: b.id, keys: b.keys, stageLog: [], tags: [], notes: [], createdAt: iso(daysAgo(30)), updatedAt: iso(daysAgo(30)), assignedTo: { userId, at: iso(daysAgo(10)), by: "proprio@exemple.ca", how: "manuel" } };
    }
    return { ...base, crm };
  };

  it("À faire : le client chaud (priorité du radar) d'abord, puis la note du client, puis l'échéance", () => {
    const i = index(s());
    const a = i.clients.find((c) => c.b.firstName === "Alice")!;
    const b = i.clients.find((c) => c.b.firstName === "Bruno")!;
    const t = (key: string, clientId: string | null, dueAt: string, priority?: number): Task => ({ key, rule: "manuelle", family: "suivis", clientId, title: key, detail: "", dueAt, href: "/gestion/taches", manual: true, snoozed: false, ...(priority ? { priority } : {}) });
    const sorted = sortTasksByPriority([t("t_general0001", null, "2026-09-16T08:00:00.000Z"), t("t_bruno00001", b.b.id, "2026-09-16T09:00:00.000Z"), t("t_alice00001", a.b.id, "2026-09-16T12:00:00.000Z"), t("t_chaud00001", b.b.id, "2026-09-16T13:00:00.000Z", 10)], i);
    // Bruno : note à définir, urgence > 1 (délai, saison) ; la tâche générale compte « à définir » avec une urgence de 1.
    expect(sorted.map((x) => x.key)).toEqual(["t_chaud00001", "t_alice00001", "t_bruno00001", "t_general0001"]);
  });

  it("un vendeur n'a la note que de ses dossiers ; son pipeline ne contient rien d'un autre vendeur", () => {
    const i = index(s());
    const a = restrictIndex(i, { kind: "vendeur", email: "vendeur.a@exemple.ca", userId: "u_vendeurA001" });
    const aliceId = i.clients.find((c) => c.b.firstName === "Alice")!.b.id;
    const brunoId = i.clients.find((c) => c.b.firstName === "Bruno")!.b.id;
    expect(priorityOf(a, aliceId)).not.toBeNull();
    expect(priorityOf(a, brunoId)).toBeNull();
    expect(topPriorities(a, 5).map((x) => x.client.b.id)).toEqual([aliceId]);
    const v = buildPipelineView(a);
    expect(v.cards.map((c) => c.id)).toEqual([aliceId]);
    const text = JSON.stringify(v);
    for (const leak of ["Bruno", "555", "@", brunoId]) expect(text).not.toContain(leak);
  });

  it("pipeline : 12 étapes + perdu, carte avec progression, temps, qui doit agir, note ; rang de priorité", () => {
    const i = index(s());
    const v = buildPipelineView(i);
    expect(v.states).toHaveLength(13);
    expect(v.total).toBe(12);
    const alice1 = v.cards.find((c) => c.name.startsWith("Alice"))!;
    expect(alice1).toMatchObject({ state: "signe", n: 8, actor: "proprietaire", rank: 0 });
    expect(alice1.scoreLabel).not.toBe("À définir");
    expect(v.cards.find((c) => c.name.startsWith("Bruno"))).toMatchObject({ state: "ouverte", n: 4, actor: "client", score: null, scoreLabel: "À définir" });
    expect(v.states.find((x) => x.state === "va-de-l-avant")).toMatchObject({ movable: false });
    expect(v.states.find((x) => x.state === "signe")).toMatchObject({ movable: true, n: 1 });
  });
});
