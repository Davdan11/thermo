/* Statistiques : périodes, attribution inconnue (avant le suivi), appels, conversion, données minimales. */
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import type { JournalEntry } from "@/lib/crm/lead-journal";
import type { Attribution } from "@/lib/attribution/core";
import { aggregateStats, buildStats, DEMO_JOURNAL_FILE, parsePeriod, readJournalEntries, toRecords } from "../statistiques";

const NOW = new Date("2026-09-12T16:00:00Z"); // midi à Montréal
const daysAgo = (d: number, h = 0) => new Date(NOW.getTime() - d * 86_400_000 - h * 3_600_000).toISOString();
let seq = 0;
function entry(kind: JournalEntry["kind"], at: string, lead: Record<string, unknown>, attribution?: Attribution): JournalEntry {
  seq++;
  return { id: `id-${seq}`, at, kind, lead, ...(attribution ? { attribution } : {}) };
}

function sample(): JournalEntry[] {
  seq = 0;
  const s1 = entry("soumission", daysAgo(1), { firstName: "julie tremblay", email: "julie@exemple.ca", phone: "5145550101", postalCode: "H2X1Y4", municipality: "Montréal" }, { channel: "google-naturel", landing: "/thermopompes/thermopompe-murale", refHost: "google.ca" });
  return [
    s1,
    // Ligne de résultat (même id) : ignorée.
    { id: s1.id, at: daysAgo(1), kind: "soumission", lead: {}, outcome: { pipedrive: "ok", dealId: 4 } },
    entry("soumission", daysAgo(2), { firstName: "Marc", email: "marc@exemple.ca", postalCode: "H7N1A1" }, { channel: "google-ads", landing: "/soumission", gclid: true, utm: { utm_source: "google", utm_campaign: "automne" } }),
    entry("rendez-vous", new Date(Date.parse(daysAgo(1)) + 2 * 3_600_000).toISOString(), { firstName: "Julie", leadJournalId: s1.id, phone: "5145550101" }, { channel: "google-naturel", landing: "/thermopompes/thermopompe-murale" }),
    entry("thermomatch", daysAgo(5), { firstName: "Sophie", email: "sophie@exemple.ca", postalCode: "G1R2B5" }, { channel: "ia", landing: "/trouver-ma-thermopompe", refHost: "chatgpt.com" }),
    entry("contact", daysAgo(3), { firstName: "Luc", email: "luc@exemple.ca", message: "Bonjour, mon numéro est le 514-555-0199" }, { channel: "non-transmis" }),
    // Appel manqué puis message vocal du même numéro : une seule demande.
    entry("appel-manque", daysAgo(4), { phone: "+15145550150" }),
    entry("message-vocal", new Date(Date.parse(daysAgo(4)) + 3 * 60_000).toISOString(), { phone: "+15145550150", transcription: "Rappelez-moi" }),
    entry("appel-enregistre", daysAgo(6), { phone: "+14385550111" }),
    // Désabonnement et relances : pas des demandes.
    entry("relances", daysAgo(2), { event: "desabonnement", email: "x@exemple.ca" }),
    entry("alerte-logisvert", daysAgo(2), { event: "desabonnement", email: "y@exemple.ca" }),
    entry("alerte-logisvert", daysAgo(6), { firstName: "Annie", email: "annie@exemple.ca" }, { channel: "direct", landing: "/subventions/logisvert" }),
    entry("partenaire", daysAgo(10), { company: "Clim Laval inc.", region: "Laval" }, { channel: "autre-site", refHost: "rbq.gouv.qc.ca", landing: "/partenaires" }),
    // Avant le suivi : aucune attribution.
    entry("soumission", daysAgo(20), { firstName: "Éric", postalCode: "J4B1A1" }),
    entry("soumission", daysAgo(45), { firstName: "Chantal", postalCode: "H2X1Y4" }),
    entry("thermoscan", daysAgo(200), { firstName: "Karine", email: "k@exemple.ca" }),
  ];
}

describe("agrégation", () => {
  it("période de 7 jours : totaux par type, appels regroupés, événements exclus", () => {
    const s = buildStats(sample(), { period: "7", now: NOW });
    const n = Object.fromEntries(s.byKind.map((k) => [k.id, k.n]));
    expect(n).toEqual({ soumission: 2, "rendez-vous": 1, thermomatch: 1, appel: 2, contact: 1, thermoscan: 0, "alerte-logisvert": 1, partenaire: 0 });
    expect(s.total).toBe(8);
    expect(s.trend.unit).toBe("jour");
    expect(s.trend.points).toHaveLength(7);
    expect(s.trend.points.reduce((t, p) => t + p.total, 0)).toBe(8);
    expect(s.trend.points.reduce((t, p) => t + p.soumissions, 0)).toBe(2);
  });

  it("canaux : téléphone, non transmis et inconnu (avant le suivi) comptés sans deviner", () => {
    const s30 = buildStats(sample(), { period: "30", now: NOW });
    const ch = Object.fromEntries(s30.channels.map((c) => [c.id, c.n]));
    expect(ch).toMatchObject({ telephone: 2, "non-transmis": 1, inconnu: 1, "google-naturel": 2, "google-ads": 1, ia: 1, direct: 1, "autre-site": 1 });
    expect(s30.channels.find((c) => c.id === "inconnu")?.label).toBe("Inconnu (avant le suivi)");
    expect(s30.tracking).toMatchObject({ unknown: 1, notSent: 1, phone: 2 });
    expect(s30.channels.reduce((t, c) => t + c.share, 0)).toBeCloseTo(1, 5);
  });

  it("périodes 90 jours et « tout », comparaison avec la période précédente", () => {
    const s90 = buildStats(sample(), { period: "90", now: NOW });
    expect(s90.total).toBe(11);
    expect(s90.trend.unit).toBe("semaine");
    const all = buildStats(sample(), { period: "tout", now: NOW });
    expect(all.total).toBe(12);
    expect(all.previousTotal).toBeNull();
    expect(all.trend.unit).toBe("mois");
    const s30 = buildStats(sample(), { period: "30", now: NOW });
    expect(s30.total).toBe(10);
    expect(s30.previousTotal).toBe(1); // la soumission d'il y a 45 jours
    expect(s30.byKind.find((k) => k.id === "soumission")).toMatchObject({ n: 3, prev: 1 });
  });

  it("pages d'arrivée, pages des soumissions, référents, campagnes, rendez-vous après soumission", () => {
    const s = buildStats(sample(), { period: "30", now: NOW });
    expect(s.landings[0]).toEqual({ path: "/thermopompes/thermopompe-murale", n: 2, soumissions: 1 });
    expect(s.soumissionLandings.map((l) => l.path).sort()).toEqual(["/soumission", "/thermopompes/thermopompe-murale"]);
    expect(s.referrers.map((r) => r.host)).toEqual(expect.arrayContaining(["google.ca", "chatgpt.com", "rbq.gouv.qc.ca"]));
    expect(s.campaigns).toEqual([{ label: "google · automne", n: 1 }]);
    expect(s.rdvFollowUp).toEqual({ soumissions: 3, withRdv: 1 });
  });

  it("régions et villes à partir du code postal", () => {
    const s = buildStats(sample(), { period: "30", now: NOW });
    expect(s.regions.find((r) => r.name === "Montréal")?.n).toBeGreaterThanOrEqual(1);
    expect(s.regions.find((r) => r.name === "Laval")?.n).toBe(2); // Marc (H7N) + candidature « Laval »
    expect(s.cities.find((c) => c.name === "Montréal")?.n).toBe(1);
  });

  it("dernières demandes : prénom, ville, type et canal seulement — jamais courriel, téléphone ni message", () => {
    const s = buildStats(sample(), { period: "tout", now: NOW });
    expect(Object.keys(s.recent[0]).sort()).toEqual(["channel", "city", "firstName", "key", "kind", "when"]);
    expect(s.recent[0]).toMatchObject({ kind: "Rendez-vous", firstName: "Julie" });
    expect(s.recent.find((r) => r.kind === "Soumission")?.firstName).toBe("Julie"); // prénom seulement, sans nom
    expect(s.recent.find((r) => r.kind === "Candidature")?.firstName).toBe("—");
    const json = JSON.stringify(s);
    for (const secret of ["@exemple.ca", "5145550101", "555-0199", "Rappelez-moi", "Tremblay", "tremblay", "Clim Laval"]) expect(json).not.toContain(secret);
  });

  it("aucune donnée : vue vide, sans erreur", () => {
    const s = aggregateStats([], { period: "tout", now: NOW });
    expect(s.total).toBe(0);
    expect(s.trend.points).toHaveLength(1);
    expect(s.recent).toEqual([]);
    expect(toRecords([])).toEqual([]);
  });

  it("période par défaut : 30 jours", () => {
    expect(parsePeriod(undefined)).toBe("30");
    expect(parsePeriod("7")).toBe("7");
    expect(parsePeriod(["90"])).toBe("90");
    expect(parsePeriod("365")).toBe("30");
  });
});

describe("lecture du journal", () => {
  let dir: string;
  beforeEach(async () => {
    dir = await mkdtemp(path.join(tmpdir(), "thermo-stats-"));
  });
  afterEach(async () => {
    await rm(dir, { recursive: true, force: true });
  });

  it("fichiers mensuels seulement ; démonstration seulement si demandée ; lignes abîmées ignorées", async () => {
    const line = (id: string) => JSON.stringify({ id, at: "2026-09-10T12:00:00Z", kind: "soumission", lead: { firstName: "A" } });
    await writeFile(path.join(dir, "2026-09.jsonl"), `${line("a")}\n{abîmée\n${JSON.stringify({ id: "a", at: "2026-09-10T12:01:00Z", kind: "soumission", lead: {}, outcome: { pipedrive: "ok" } })}\n`);
    await writeFile(path.join(dir, DEMO_JOURNAL_FILE), `${line("demo")}\n`);
    await writeFile(path.join(dir, "notes.jsonl"), `${line("autre")}\n`);
    expect((await readJournalEntries(dir)).map((e) => e.id)).toEqual(["a"]);
    expect((await readJournalEntries(dir, { includeDemo: true })).map((e) => e.id).sort()).toEqual(["a", "demo"]);
    expect(await readJournalEntries(path.join(dir, "absent"))).toEqual([]);
  });
});
