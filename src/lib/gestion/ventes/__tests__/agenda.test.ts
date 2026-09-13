/* Agenda : 45 installations le même jour à la même heure toutes lisibles (groupées par installateur puis par heure),
   bornes jour / semaine / mois en heure de Montréal (heure d'été et heure normale), filtres, « À céduler ». */
import { describe, expect, it } from "vitest";
import { buildAgenda, fieldStatus, jobSlot, parseAgendaQuery, periodBounds, UNASSIGNED, type AgendaQuery } from "../../agenda/agenda";
import type { Job } from "../../types";
import { job } from "../../crm/__tests__/fixtures";

const installers = { i_testinst001: "Climatisation Alpha", i_testinst002: "Thermo Bêta", i_testinst003: "Froid Gamma" };
const q = (over: Partial<AgendaQuery> = {}): AgendaQuery => ({ view: "jour", date: "2026-09-16", installer: null, region: null, ...over });
const agenda = (jobs: Job[], over: Partial<AgendaQuery> = {}) => buildAgenda({ jobs, installers, clientOfJob: (id) => (id.endsWith("1") ? "c_abcdefabcdef" : null), query: q(over), today: "2026-09-16" });
const at8 = (over: Parameters<typeof job>[0], time = "08:00") => ({ ...job(over), scheduledTime: time }) as Job;
const hours = (b: { startUtc: Date; endUtc: Date }) => (b.endUtc.getTime() - b.startUtc.getTime()) / 3_600_000;

describe("45 installations le même jour à la même heure", () => {
  const jobs = Array.from({ length: 45 }, (_, i) =>
    at8({ status: "planifie", scheduledFor: "2026-09-16", assignedInstallerId: `i_testinst00${(i % 3) + 1}`, region: i % 2 ? "13" : "06", client: { firstName: `Client${i}`, lastName: "Exemple", phone: "514 555-0142", email: "client@exemple.ca", city: "Laval" } }),
  );

  it("toutes visibles : groupées par installateur, puis par heure, avec compteurs", () => {
    const a = agenda(jobs);
    expect(a.total).toBe(45);
    expect(a.groups.map((g) => [g.label, g.n])).toEqual([
      ["Climatisation Alpha", 15],
      ["Froid Gamma", 15],
      ["Thermo Bêta", 15],
    ]);
    for (const g of a.groups) {
      expect(g.slots).toHaveLength(1);
      expect(g.slots[0]).toMatchObject({ time: "08:00", label: "8 h", n: 15 });
    }
    const ids = a.groups.flatMap((g) => g.slots.flatMap((s) => s.items.map((i) => i.id)));
    expect(new Set(ids).size).toBe(45);
    expect(a.groups[0].slots[0].items[0]).toMatchObject({ client: "Client0 E.", city: "Laval", status: "planifie", statusLabel: "Planifié", href: expect.stringMatching(/^\/gestion\/jobs\/j_/) });
  });

  it("semaine et mois : un compteur et une densité par jour, jamais une case qui déborde", () => {
    const w = agenda(jobs, { view: "semaine" });
    expect(w.days).toHaveLength(7);
    const day = w.days.find((d) => d.ymd === "2026-09-16")!;
    expect(day).toMatchObject({ n: 45, isToday: true });
    expect(day.preview).toHaveLength(4);
    expect(day.installers.map((i) => i.n)).toEqual([15, 15, 15]);
    expect(w.maxPerDay).toBe(45);
    const m = agenda(jobs, { view: "mois" });
    expect(m.days.length % 7).toBe(0);
    expect(m.days.find((d) => d.ymd === "2026-09-16")!.n).toBe(45);
    expect(m.days.every((d) => d.preview.length === 0)).toBe(true);
    expect(m.total).toBe(45);
  });

  it("filtres : installateur, région ; facettes croisées", () => {
    const a = agenda(jobs, { installer: "i_testinst002" });
    expect(a.total).toBe(15);
    expect(a.groups).toHaveLength(1);
    const r = agenda(jobs, { region: "13" });
    expect(r.total).toBe(22);
    expect(r.facets.regions).toEqual([
      { code: "06", label: "Montréal", n: 23 },
      { code: "13", label: "Laval", n: 22 },
    ]);
    expect(r.facets.installers.reduce((s, i) => s + i.n, 0)).toBe(22);
  });

  it("aucun numéro ni courriel dans l'objet d'affichage", () => {
    const json = JSON.stringify(agenda(jobs));
    expect(json).not.toContain("@");
    expect(json).not.toMatch(/\d{3}[ .-]?\d{3}[ .-]?\d{4}/);
  });
});

describe("regroupement", () => {
  it("heure inconnue : « Heure à confirmer » en dernier ; sans installateur : groupe à la fin", () => {
    const jobs = [
      job({ status: "planifie", scheduledFor: "2026-09-16", assignedInstallerId: "i_testinst001" }),
      at8({ status: "planifie", scheduledFor: "2026-09-16", assignedInstallerId: "i_testinst001" }, "13:30"),
      at8({ status: "planifie", scheduledFor: "2026-09-16", assignedInstallerId: "i_testinst001" }),
      at8({ status: "attribue", scheduledFor: "2026-09-16", assignedInstallerId: null }),
    ];
    const a = agenda(jobs);
    expect(a.groups.map((g) => g.id)).toEqual(["i_testinst001", UNASSIGNED]);
    expect(a.groups[0].slots.map((s) => s.label)).toEqual(["8 h", "13 h 30", "Heure à confirmer"]);
    expect(a.groups[1].label).toBe("Sans installateur");
  });

  it("« À céduler » : jobs ouverts sans date, à part ; annulés et terminés exclus", () => {
    const jobs = [
      job({ status: "nouveau", desiredDate: "2026-09-22" }),
      job({ status: "offert" }),
      job({ status: "attribue", assignedInstallerId: "i_testinst003", desiredWindow: "fin septembre" }),
      job({ status: "annule" }),
      job({ status: "termine" }),
      job({ status: "planifie", scheduledFor: "2026-09-16" }),
    ];
    const a = agenda(jobs);
    expect(a.unscheduled.n).toBe(3);
    expect(a.unscheduled.items.map((i) => i.statusLabel)).toEqual(["Nouveau", "Offert", "Attribué"]);
    expect(a.unscheduled.items[0].wish).toBe("Souhaité le 22 septembre");
    expect(a.unscheduled.items[2].wish).toBe("fin septembre");
    expect(a.total).toBe(1);
  });

  it("états sur le terrain lus s'ils existent (journal du job), sinon l'état du job", () => {
    const base = job({ status: "planifie", scheduledFor: "2026-09-16" });
    expect(fieldStatus(base)).toBe("planifie");
    expect(fieldStatus({ ...base, audit: [{ at: "2026-09-16T12:00:00Z", by: "installateur:i_testinst001", action: "en route" }] })).toBe("en-route");
    expect(fieldStatus({ ...base, audit: [{ at: "2026-09-16T12:00:00Z", by: "x", action: "en route" }, { at: "2026-09-16T12:40:00Z", by: "x", action: "arrivé sur place" }] })).toBe("arrive");
    expect(fieldStatus({ ...base, status: "termine" })).toBe("termine");
    expect(fieldStatus({ ...base, status: "attribue" })).toBe("attribue");
  });

  it("paramètres d'adresse invalides : valeurs par défaut (aujourd'hui, jour, sans filtre)", () => {
    expect(parseAgendaQuery({ vue: "annee", date: "2026-02-30", installateur: "../etc", region: "99" }, "2026-09-16")).toEqual(q());
    expect(parseAgendaQuery({ vue: "mois", date: "2026-12-01", installateur: "aucun", region: "13" }, "2026-09-16")).toEqual({ view: "mois", date: "2026-12-01", installer: UNASSIGNED, region: "13" });
  });
});

describe("bornes en heure de Montréal", () => {
  it("jour : 24 h ; 23 h au passage à l'heure d'été ; 25 h au retour à l'heure normale", () => {
    const d = periodBounds("jour", "2026-09-16");
    expect([d.startUtc.toISOString(), d.endUtc.toISOString()]).toEqual(["2026-09-16T04:00:00.000Z", "2026-09-17T04:00:00.000Z"]);
    expect(hours(periodBounds("jour", "2026-03-08"))).toBe(23);
    expect(hours(periodBounds("jour", "2026-11-01"))).toBe(25);
    expect(periodBounds("jour", "2026-01-15").startUtc.toISOString()).toBe("2026-01-15T05:00:00.000Z");
    expect(periodBounds("jour", "2026-09-16")).toMatchObject({ prev: "2026-09-15", next: "2026-09-17" });
  });

  it("semaine : du lundi au dimanche (167 h ou 169 h aux changements d'heure)", () => {
    expect(periodBounds("semaine", "2026-09-16")).toMatchObject({ from: "2026-09-14", to: "2026-09-20", prev: "2026-09-07", next: "2026-09-21" });
    expect(hours(periodBounds("semaine", "2026-09-16"))).toBe(168);
    const fall = periodBounds("semaine", "2026-11-01");
    expect([fall.from, fall.to]).toEqual(["2026-10-26", "2026-11-01"]);
    expect(hours(fall)).toBe(169);
    expect(hours(periodBounds("semaine", "2026-03-08"))).toBe(167);
  });

  it("mois : du 1er au dernier jour ; grille en semaines complètes ; passage d'année", () => {
    const m = periodBounds("mois", "2026-03-15");
    expect([m.from, m.to]).toEqual(["2026-03-01", "2026-03-31"]);
    expect([m.startUtc.toISOString(), m.endUtc.toISOString()]).toEqual(["2026-03-01T05:00:00.000Z", "2026-04-01T04:00:00.000Z"]);
    expect([m.grid[0], m.grid.at(-1), m.grid.length]).toEqual(["2026-02-23", "2026-04-05", 42]);
    expect(periodBounds("mois", "2026-12-10")).toMatchObject({ from: "2026-12-01", to: "2026-12-31", prev: "2026-11-01", next: "2027-01-01" });
    expect(periodBounds("mois", "2027-01-31")).toMatchObject({ prev: "2026-12-01", next: "2027-02-01", to: "2027-01-31" });
  });

  it("heure prévue (si un champ la donne) lue en heure de Montréal", () => {
    expect(jobSlot({ ...job(), scheduledAt: "2026-11-01T04:30:00.000Z" } as Job)).toEqual({ day: "2026-11-01", time: "00:30" });
    expect(jobSlot({ ...job(), scheduledAt: "2026-03-08T04:59:00.000Z" } as Job)).toEqual({ day: "2026-03-07", time: "23:59" });
    expect(jobSlot({ ...job({ scheduledFor: "2026-09-16" }), scheduledTime: "25:00" } as Job)).toEqual({ day: "2026-09-16", time: null });
  });
});
