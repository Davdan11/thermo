/* Accueil : quatre blocs, et aucun renseignement personnel dans l'objet envoyé au navigateur. */
import { describe, expect, it } from "vitest";
import { aggregateStats, toRecords } from "../../statistiques";
import { buildHome } from "../dashboard";
import { buildBundles, computeIndex } from "../model";
import type { SourceData } from "../types";
import { conv, daysAgo, entry, hoursAgo, iso, job, msg, NOW, quote, src } from "./fixtures";

function fixture(): SourceData {
  const julie = { firstName: "Julie", lastName: "Tremblay", email: "julie.tremblay@exemple.ca", phone: "514 555-0142" };
  const marc = { firstName: "Marc", lastName: "Gagnon", email: "marc@exemple.ca", phone: "450 555-0177" };
  const journal = [
    entry("soumission", daysAgo(12), { ...julie, postalCode: "H7N1A1", municipality: "Laval" }, { attribution: { channel: "google-ads", gclid: true } }),
    entry("thermomatch", daysAgo(9), { firstName: "Marc", email: marc.email, phone: marc.phone, postalCode: "J4K1A1" }, { attribution: { channel: "google-naturel", refHost: "google.com" } }),
    entry("appel-manque", hoursAgo(2), { phone: "+14185550199" }),
    entry("message-vocal", hoursAgo(3), { phone: "+14385550111", transcription: "Rappelez-moi au 438 555-0111 ou à paul@exemple.ca" }),
    entry("contact", hoursAgo(1), { firstName: "Sophie", email: "sophie@exemple.ca", phone: "514 555-0188", message: "Mon numéro : 514-555-0188" }),
  ];
  return src({
    journal,
    quotes: [
      quote({ client: julie, sentAt: daysAgo(8), viewedAt: daysAgo(7), acceptedAt: daysAgo(5) }),
      quote({ client: marc, sentAt: daysAgo(6), viewedAt: daysAgo(5), questionAt: hoursAgo(20) }),
    ],
    jobs: [
      job({ client: julie, status: "planifie", scheduledFor: "2026-09-16", assignedInstallerId: "i_testinst001" }),
      job({ client: { firstName: "Luc", lastName: "Roy", phone: "819 555-0123", email: "luc@exemple.ca" }, createdAt: iso(daysAgo(2)) }),
    ],
    installers: { i_testinst001: "Climatisation Exemple" },
    textos: [conv("+15145550166", [msg("in", hoursAgo(4), "Bonjour, je veux une soumission, mon courriel est nina@exemple.ca")], { unread: 1 })],
  });
}

describe("accueil", () => {
  const s = fixture();
  const index = computeIndex(buildBundles(s), s, NOW);
  const stats = aggregateStats(toRecords(s.journal), { period: "30", now: NOW });
  const home = buildHome(index, stats, "30", NOW);

  it("le HomeView sérialisé ne contient ni @ ni suite de 10 chiffres", () => {
    const json = JSON.stringify(home);
    expect(json).not.toContain("@");
    expect(json).not.toMatch(/\d{10}/);
    expect(json).not.toMatch(/\d{3}[ .-]?\d{3}[ .-]?\d{4}/);
  });

  it("À faire aujourd'hui : tuiles par famille, tâches les plus urgentes, installations du jour", () => {
    const n = (f: string) => home.todo.tiles.find((t) => t.family === f)?.n ?? 0;
    expect(n("rappels")).toBeGreaterThanOrEqual(3);
    expect(n("textos")).toBe(1);
    expect(n("ouvertes")).toBeGreaterThanOrEqual(1);
    expect(n("jobs")).toBe(1);
    expect(home.todo.tasks.length).toBeLessThanOrEqual(8);
    const overdueFirst = home.todo.tasks.findIndex((t) => !t.overdue);
    expect(home.todo.tasks.slice(overdueFirst < 0 ? home.todo.tasks.length : overdueFirst).every((t) => !t.overdue)).toBe(true);
    expect(home.todo.installations).toEqual([expect.objectContaining({ number: expect.any(Number), who: "Julie · Laval", installer: "Climatisation Exemple" })]);
    expect(home.todo.tasks.every((t) => typeof t.canCall === "boolean")).toBe(true);
  });

  it("L'argent, les demandes, le pipeline", () => {
    expect(home.money.accepted.n).toBe(1);
    expect(home.money.atStake.ouverte.n).toBe(1);
    expect(home.demand.total).toBe(5);
    expect(home.demand.ring.map((r) => r.id)).toEqual(expect.arrayContaining(["google-ads", "google-naturel", "telephone"]));
    const stage = (id: string) => home.pipeline.stages.find((x) => x.stage === id)!;
    expect(stage("planifiee").n).toBe(1);
    expect(stage("ouverte").n).toBe(1);
    expect(home.pipeline.active).toBeGreaterThanOrEqual(5);
  });
});
