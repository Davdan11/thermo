/* Chantier R — verdict RBQ, blocage des offres et levée ; tâche de nuit : désactivée, hors production, fichier
   illisible ou incomplet (rien n'est inventé), nouveaux blocages (alerte unique), levée. Aucun téléchargement. */
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { partnerBlockers } from "../../partenaires/blockers";
import { emptyPartenaires, emptyPartner, readPartenaires } from "../../partenaires/store";
import { AUTO_TASK_RE } from "../../crm/types";
import { downloadRbqSource, runRbqVerification, type RbqSource } from "../rbq/job";
import type { RbqRecord } from "../rbq/types";
import { evaluateLicence, isBlocking, withOverride } from "../rbq/verify";
import { readReseau } from "../store";
import { rbqTasks } from "../tasks";

const NOW = new Date("2026-09-20T07:00:00Z");
const source = { url: "https://exemple.invalid/licences.zip", fetchedAt: NOW.toISOString(), lastModified: null, licences: 3 };
const rec = (number: string, status = "Active"): RbqRecord => ({ number, status, licenceType: "Entrepreneur", category: "", subcategories: ["99.1 Sous-catégorie fictive"], restriction: "", restrictionStart: "", restrictionEnd: "", name: "Entreprise Fictive", municipality: "", region: "", issuedOn: "" });
const found = (...rs: RbqRecord[]) => new Map(rs.map((r) => [r.number, r]));
const inst = { id: "i_install0001", createdAt: "2026-01-10T12:00:00.000Z" };

function withCheck(check: ReturnType<typeof evaluateLicence> | undefined) {
  const d = emptyPartenaires();
  const p = emptyPartner(inst.id);
  p.compliance.rbq.expiresOn = "2027-05-01";
  p.compliance.assurance.expiresOn = "2027-05-01";
  if (check) p.rbqVerification = check;
  d.partners[inst.id] = p;
  return d;
}
const codes = (d: ReturnType<typeof withCheck>, now = NOW) => partnerBlockers(inst, { data: d, now }).map((b) => b.code);

describe("verdict et blocage des offres", () => {
  it("aucune vérification : aucun blocage RBQ inventé", () => {
    expect(codes(withCheck(undefined))).toEqual([]);
  });

  it("absente de la liste des licences actives : bloqué, avec la date du fichier", () => {
    const v = evaluateLicence("0000-0000-09", found(rec("0000000001")), { at: NOW.toISOString(), source, relevant: [] });
    expect(v.outcome).toBe("introuvable");
    expect(v.rawStatus).toBeUndefined();
    const b = partnerBlockers(inst, { data: withCheck(v), now: NOW });
    expect(b.map((x) => x.code)).toEqual(["rbq-registre"]);
    expect(b[0].label).toMatch(/absente de la liste des licences actives \(fichier du 20 septembre 2026\)/);
  });

  it("suspendue ou annulée au fichier : bloqué ; statut inhabituel : pas bloqué", () => {
    for (const [status, blocked] of [["Suspendue", true], ["Annulée", true], ["En examen", false]] as const) {
      const v = evaluateLicence("0000-0000-01", found(rec("0000000001", status)), { at: NOW.toISOString(), source, relevant: [] });
      expect(v.rawStatus).toBe(status);
      expect(isBlocking(v, NOW)).toBe(blocked);
    }
  });

  it("levée : la vérification suivante trouve la licence active, le blocage disparaît", () => {
    const first = evaluateLicence("0000-0000-01", found(), { at: NOW.toISOString(), source, relevant: [] });
    expect(codes(withCheck(first))).toEqual(["rbq-registre"]);
    const later = new Date(NOW.getTime() + 86_400_000);
    const second = evaluateLicence("0000-0000-01", found(rec("0000000001")), { at: later.toISOString(), source, relevant: [], previous: first });
    expect(second.outcome).toBe("active");
    expect(second.blockingSince).toBeUndefined();
    expect(codes(withCheck(second), later)).toEqual([]);
  });

  it("même blocage deux nuits de suite : date de début conservée (tâche stable)", () => {
    const first = evaluateLicence("0000-0000-01", found(), { at: NOW.toISOString(), source, relevant: [] });
    const second = evaluateLicence("0000-0000-01", found(), { at: "2026-09-21T07:00:00.000Z", source, relevant: [], previous: first });
    expect(second.blockingSince).toBe(first.blockingSince);
    const [task] = rbqTasks([{ installerId: inst.id, company: "Fictive", check: second }], NOW);
    expect(task.key).toMatch(AUTO_TASK_RE);
    expect(task.key).toBe(rbqTasks([{ installerId: inst.id, company: "Fictive", check: first }], NOW)[0].key);
  });

  it("levée manuelle : 30 jours, puis le blocage revient ; gardée à la nuit suivante si toujours absente", () => {
    const v = withOverride(evaluateLicence("0000-0000-01", found(), { at: NOW.toISOString(), source, relevant: [] }), "proprio@exemple.ca", "Vérifiée au registre", NOW);
    expect(codes(withCheck(v))).toEqual([]);
    const next = evaluateLicence("0000-0000-01", found(), { at: "2026-09-21T07:00:00.000Z", source, relevant: [], previous: v });
    expect(next.override?.note).toBe("Vérifiée au registre");
    expect(codes(withCheck(next), new Date("2026-10-25T12:00:00Z"))).toEqual(["rbq-registre"]);
  });

  it("numéro non saisi : pas de verdict bloquant (la conformité du volet A s'en charge)", () => {
    const v = evaluateLicence("", found(rec("0000000001")), { at: NOW.toISOString(), source, relevant: [] });
    expect(v.outcome).toBe("numero-manquant");
    expect(isBlocking(v, NOW)).toBe(false);
  });

  it("sous-catégorie exigée absente : signalée, sans bloquer", () => {
    const v = evaluateLicence("0000-0000-01", found(rec("0000000001")), { at: NOW.toISOString(), source, relevant: ["99.1", "99.7"] });
    expect(v.missingSubcategories).toEqual(["99.7"]);
    expect(isBlocking(v, NOW)).toBe(false);
    expect(rbqTasks([{ installerId: inst.id, company: "Fictive", check: v }], NOW).map((t) => t.title)).toEqual(["Fictive : sous-catégorie RBQ 99.7 absente"]);
  });
});

/* ---------------- Tâche de nuit ---------------- */

const env0 = process.env;
let dir: string;
const installer = (id: string, company: string, rbq: string) => ({
  id,
  company,
  contactName: "Contact Fictif",
  phone: "",
  email: "",
  rbq,
  basePostalCode: "",
  base: null,
  radiusKm: 50,
  extraRegions: [],
  brands: [],
  systemTypes: [],
  active: true,
  maxOpenJobs: null,
  notes: "",
  createdAt: "2026-01-10T12:00:00.000Z",
  updatedAt: "2026-01-10T12:00:00.000Z",
});
const HEADER = "Numero de licence,Statut de la licence,Nom de l'intervenant";
const csvSource = (rows: string[], header = HEADER) => async (): Promise<RbqSource> => ({ chunks: [new TextEncoder().encode([header, ...rows].join("\n"))], url: "https://exemple.invalid/licences.zip", lastModified: null });
const ENV = { RBQ_VERIFICATION_ACTIVE: "1", RBQ_MIN_LICENCES: "1", NODE_ENV: "test" };

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-rbq-job-"));
  process.env = { ...env0, GESTION_DATA_DIR: dir, LEAD_JOURNAL_DIR: path.join(dir, "leads"), NODE_ENV: "test" };
  await writeFile(path.join(dir, "gestion.json"), JSON.stringify({ version: 1, installers: [installer("i_install0001", "Fictive Un", "0000-0000-01"), installer("i_install0002", "Fictive Deux", "0000-0000-02")], jobs: [] }));
});
afterEach(async () => {
  process.env = env0;
  vi.restoreAllMocks();
  await rm(dir, { recursive: true, force: true });
});

describe("runRbqVerification", () => {
  it("désactivée par défaut : aucun téléchargement, aucun verdict", async () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch");
    const run = await runRbqVerification({ env: { NODE_ENV: "production" }, now: NOW });
    expect(run.status).toBe("desactive");
    expect(fetchSpy).not.toHaveBeenCalled();
    expect(Object.values((await readPartenaires()).partners).some((p) => p.rbqVerification)).toBe(false);
    expect((await readReseau()).rbq.runs.at(-1)?.status).toBe("desactive");
  });

  it("hors production sans source injectée : aucun téléchargement, aucun verdict", async () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch");
    const run = await runRbqVerification({ env: { RBQ_VERIFICATION_ACTIVE: "1", NODE_ENV: "development" }, now: NOW });
    expect(run.status).toBe("hors-production");
    expect(fetchSpy).not.toHaveBeenCalled();
    await expect(downloadRbqSource({ NODE_ENV: "test" })).rejects.toThrow(/hors production/);
    expect(fetchSpy).not.toHaveBeenCalled();
    expect(Object.keys((await readPartenaires()).partners)).toEqual([]);
  });

  it("fichier sans colonne de statut : illisible, rien n'est écrit", async () => {
    const run = await runRbqVerification({ env: ENV, now: NOW, source: csvSource(["0000-0000-01"], "Numero de licence") });
    expect(run.status).toBe("source-illisible");
    expect(run.detail).toMatch(/Statut de la licence/);
    expect(Object.keys((await readPartenaires()).partners)).toEqual([]);
  });

  it("fichier incomplet (moins de licences que le minimum) : rien n'est bloqué", async () => {
    const run = await runRbqVerification({ env: { ...ENV, RBQ_MIN_LICENCES: undefined }, now: NOW, source: csvSource(["0000-0000-01,Active,Fictive"]) });
    expect(run.status).toBe("source-illisible");
    expect(run.detail).toMatch(/1000 au moins/);
    expect(Object.keys((await readPartenaires()).partners)).toEqual([]);
  });

  it("échec de la source : rien ne change", async () => {
    const run = await runRbqVerification({ env: ENV, now: NOW, source: async () => { throw new Error("réseau coupé"); } });
    expect(run.status).toBe("echec");
    expect(Object.keys((await readPartenaires()).partners)).toEqual([]);
  });

  it("verdicts écrits, alerte au propriétaire une seule fois, levée à la nuit où la licence revient", async () => {
    const ownerMail = vi.fn(async () => "simule" as const);
    const run = await runRbqVerification({ env: ENV, now: NOW, ownerMail, source: csvSource(["0000-0000-01,Active,Entreprise Fictive Un", "0000-0000-77,Active,Autre Fictive"]) });
    expect(run).toMatchObject({ status: "ok", checked: 2, blocked: 1, lifted: 0, alert: "simule" });
    expect(ownerMail).toHaveBeenCalledTimes(1);
    const mail = (ownerMail.mock.calls[0] as unknown as [{ subject: string; text: string }])[0];
    expect(mail.subject).toMatch(/Fictive Deux/);
    expect(mail.text).toMatch(/absente de la liste des licences actives/);

    const p = await readPartenaires();
    expect(p.partners.i_install0001.rbqVerification).toMatchObject({ outcome: "active", rawStatus: "Active", registryName: "Entreprise Fictive Un" });
    expect(p.partners.i_install0002.rbqVerification?.outcome).toBe("introuvable");
    expect(partnerBlockers({ id: "i_install0002", createdAt: "2026-01-10T12:00:00.000Z" }, { data: p, now: NOW }).map((b) => b.code)).toContain("rbq-registre");
    expect(p.partners.i_install0002.history.at(-1)?.action).toBe("licence RBQ : offres bloquées");

    // Deuxième nuit, toujours absente : pas de deuxième courriel.
    const night2 = new Date(NOW.getTime() + 86_400_000);
    await runRbqVerification({ env: ENV, now: night2, ownerMail, source: csvSource(["0000-0000-01,Active,Entreprise Fictive Un"]) });
    expect(ownerMail).toHaveBeenCalledTimes(1);

    // Troisième nuit : la licence est dans le fichier, le blocage est levé.
    const night3 = new Date(NOW.getTime() + 2 * 86_400_000);
    const r3 = await runRbqVerification({ env: ENV, now: night3, ownerMail, source: csvSource(["0000-0000-01,Active,Entreprise Fictive Un", "0000-0000-02,Active,Entreprise Fictive Deux"]) });
    expect(r3).toMatchObject({ blocked: 0, lifted: 1 });
    const p3 = await readPartenaires();
    expect(partnerBlockers({ id: "i_install0002", createdAt: "2026-01-10T12:00:00.000Z" }, { data: p3, now: night3 })).toEqual([]);
    expect((await readReseau()).rbq.runs.map((r) => r.status)).toEqual(["ok", "ok", "ok"]);
  });

  it("candidatures nouvelles vérifiées aussi (reseau.json)", async () => {
    await writeFile(path.join(dir, "gestion-candidatures.json"), JSON.stringify({ version: 1, candidatures: [{ id: "c_cand000001", receivedAt: NOW.toISOString(), company: "Candidat Fictif", rbq: "0000-0000-05", contact: "", phone: "", email: "", brandsText: "", regionText: "", volume: "", status: "nouvelle" }] }));
    await runRbqVerification({ env: ENV, now: NOW, ownerMail: vi.fn(async () => "simule" as const), source: csvSource(["0000-0000-05,Suspendue,Candidat Fictif"]) });
    expect((await readReseau()).rbq.candidatures.c_cand000001).toMatchObject({ outcome: "suspendue", rawStatus: "Suspendue" });
  });
});
