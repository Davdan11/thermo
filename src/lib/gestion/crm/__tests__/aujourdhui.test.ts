/* ==================================================================
   Refonte R1 — page « Aujourd'hui » (crm/today.ts) : tri des actions
   (point d'extension priorityOf, puis l'urgence byUrgency inchangée),
   blocages (installateur introuvable, date dépassée, paiement en
   retard), argent du mois, confidentialité (aucun courriel ni numéro,
   rien de l'autre vendeur). Données fictives (@exemple.ca, 555-01xx).
   ================================================================== */
import { describe, expect, it } from "vitest";
import { restrictIndex, scopeFor } from "../../equipe/scope";
import { buildBundles, computeIndex } from "../model";
import { byUrgency, type Task } from "../tasks";
import { buildToday, FINDER_RULES, noPriority, rankActions } from "../today";
import { conv, daysAgo, entry, hoursAgo, job, msg, NOW, quote, src } from "./fixtures";

const task = (key: string, clientId: string | null, dueAt: string, priority?: number): Task => ({
  key,
  rule: "manuelle",
  family: "rappels",
  clientId,
  title: key,
  detail: "",
  dueAt,
  href: "/gestion/taches",
  manual: true,
  snoozed: false,
  ...(priority !== undefined ? { priority } : {}),
});

describe("tri des 5 actions", () => {
  const list = [task("b", "c_1", "2026-09-16T10:00:00Z"), task("a", "c_2", "2026-09-16T09:00:00Z"), task("c", null, "2026-09-16T08:00:00Z", 5)];

  it("sans note de priorité : exactement l'ordre d'urgence actuel (byUrgency)", () => {
    expect(rankActions(list).map((t) => t.key)).toEqual([...list].sort(byUrgency).map((t) => t.key));
    expect(rankActions(list, noPriority).map((t) => t.key)).toEqual(["c", "a", "b"]);
  });

  it("avec priorityOf (R2) : dossiers notés d'abord, du plus payant au moins payant ; sans note, l'urgence", () => {
    const notes: Record<string, number> = { c_1: 10, c_2: 50 };
    expect(rankActions(list, (id) => notes[id] ?? null).map((t) => t.key)).toEqual(["a", "b", "c"]);
    // Même note : l'urgence départage.
    expect(rankActions(list, () => 7).map((t) => t.key)).toEqual(["a", "b", "c"]);
  });

  it("installateur introuvable : client prêt sans installateur, refus de l'installateur, job sans preneur", () => {
    expect([...FINDER_RULES].sort()).toEqual(["contrat-installateur", "contrat-reponse", "job-sans-reponse"]);
  });
});

describe("buildToday", () => {
  const julie = { firstName: "Julie", lastName: "Tremblay", email: "julie.tremblay@exemple.ca", phone: "514 555-0142" };
  const marc = { firstName: "Marc", lastName: "Gagnon", email: "marc@exemple.ca", phone: "450 555-0177" };
  const late = job({ client: { firstName: "Marc", lastName: "Gagnon", phone: marc.phone, email: marc.email, city: "Longueuil" }, status: "planifie", scheduledFor: "2026-09-14", createdAt: daysAgo(6).toISOString() });
  const data = src({
    journal: [entry("soumission", daysAgo(4), { ...julie, municipality: "Laval" }), entry("contact", hoursAgo(3), { ...marc, municipality: "Longueuil" })],
    quotes: [quote({ client: julie, sentAt: daysAgo(3), acceptedAt: daysAgo(1) }), quote({ client: marc, sentAt: daysAgo(2) })],
    textos: [conv("+14505550177", [msg("in", hoursAgo(2), "Bonjour, marc@exemple.ca")], { unread: 1 })],
    jobs: [late],
  });
  const index = computeIndex(buildBundles(data), data, NOW);

  it("propriétaire : actions (5 au plus), date dépassée, argent du mois ; paiement en retard seulement s'il est fourni", () => {
    const v = buildToday(index, NOW);
    expect(v.actions.length).toBeGreaterThan(0);
    expect(v.actions.length).toBeLessThanOrEqual(5);
    expect(v.dueToday).toBeGreaterThanOrEqual(v.actions.length);
    const date = v.alerts.find((a) => a.id === "date");
    expect(date).toMatchObject({ n: 1, href: `/gestion/jobs/${late.id}` });
    expect(v.alerts.find((a) => a.id === "paiement")).toBeUndefined();
    expect(v.money.month).toBe("Septembre");
    expect(v.money.acceptedN).toBe(1);
    expect(v.money.acceptedCents).toBeGreaterThan(0);
    const paid = buildToday(index, NOW, { overdueInvoices: { n: 2, cents: 150_000 } });
    expect(paid.alerts.find((a) => a.id === "paiement")).toMatchObject({ n: 2, cents: 150_000, href: "/gestion/paiements?etat=en-retard" });
    // Un vendeur n'ouvre pas les jobs : le lien mène à l'agenda.
    expect(buildToday(index, NOW, { staff: false }).alerts.find((a) => a.id === "date")?.href).toBe("/gestion/agenda");
  });

  it("priorityOf branché : l'ordre des actions suit la note", () => {
    const marcId = index.clients.find((c) => c.b.firstName === "Marc")!.b.id;
    const v = buildToday(index, NOW, { priorityOf: (id) => (id === marcId ? 1_000 : null) });
    const first = v.actions[0];
    expect(first.clientId).toBe(marcId);
  });

  it("confidentialité : version d'un vendeur sans @ ni numéro, rien de l'autre vendeur", () => {
    const scopedIdx = computeIndex(buildBundles(data), data, NOW);
    for (const c of scopedIdx.clients) {
      const to = c.b.firstName === "Julie" ? "u_vendeurA001" : "u_vendeurB001";
      c.b.record = { id: c.b.id, keys: [], stageLog: [], tags: [], notes: [], createdAt: NOW.toISOString(), updatedAt: NOW.toISOString(), assignedTo: { userId: to, at: NOW.toISOString(), by: "proprio@exemple.ca", how: "manuel" } };
    }
    const scoped = restrictIndex(scopedIdx, scopeFor({ role: "vendeur", userId: "u_vendeurA001", email: "vendeur.a@exemple.ca" }));
    const v = buildToday(scoped, NOW, { staff: false });
    const json = JSON.stringify(v);
    expect(json).not.toContain("@");
    expect(json).not.toMatch(/\d{3}[ .-]?\d{3}[ .-]?\d{4}/);
    expect(json).not.toContain("Marc");
    expect(json).not.toContain("Longueuil");
    expect(v.alerts.find((a) => a.id === "date")).toBeUndefined();
    // Le propriétaire (index complet) voit aussi Marc, sans courriel ni numéro.
    const all = JSON.stringify(buildToday(index, NOW));
    expect(all).not.toContain("@");
    expect(all).not.toMatch(/\d{3}[ .-]?\d{3}[ .-]?\d{4}/);
  });
});
