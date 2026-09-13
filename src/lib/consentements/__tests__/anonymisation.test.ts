/* Conformité C2 — prospects inactifs depuis plus de 24 mois : anonymisés (demandes, fiche CRM, rappels), sauf les
   dossiers avec contrat, garantie ou litige ; le mode essai ne modifie rien ; journal d'audit à chaque passage.
   Données fictives, dossiers temporaires. */
import { readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { clientIdFor } from "@/lib/gestion/crm/identity";
import { resetCrmMemo } from "@/lib/gestion/crm/service";
import { enqueueThermoMatch, readRelances } from "@/lib/relances/store";
import { makeJob, writeStores } from "@/lib/gestion/commissions/__tests__/fixtures";
import { addJournal, telEnv } from "@/lib/telephonie/__tests__/helpers";
import { tempDir } from "@/lib/textos/__tests__/helpers";
import { runProspectRetention } from "../anonymisation";

const NOW = new Date("2026-09-13T12:00:00Z");
const OLD = new Date("2024-01-10T15:00:00Z");
const env = process.env;
let dir: string;

async function journal(): Promise<Array<{ id: string; kind: string; lead: Record<string, unknown> }>> {
  const d = path.join(dir, "leads");
  const out = [];
  for (const f of await readdir(d)) for (const l of (await readFile(path.join(d, f), "utf8")).split("\n")) if (l.trim()) out.push(JSON.parse(l));
  return out;
}

beforeEach(async () => {
  dir = await tempDir();
  process.env = telEnv(dir, { GESTION_DATA_DIR: dir });
  resetCrmMemo();
  vi.stubGlobal("fetch", vi.fn(async () => { throw new Error("réseau interdit dans les tests"); }));
  // A : prospect inactif (demande de janvier 2024), avec des rappels.
  await addJournal(dir, "soumission", { firstName: "Alice", phone: "514 555-0142", email: "alice@exemple.ca", municipality: "Laval", territory: "Laval" }, OLD);
  await enqueueThermoMatch({ email: "alice@exemple.ca", slugs: ["a"], consent: { at: OLD.toISOString(), page: "/", text: "fictif", version: "x" } }, OLD);
  // B : inactif mais en litige (étiquette dans le CRM).
  await addJournal(dir, "contact", { firstName: "Bruno", phone: "514 555-0150", message: "fictif" }, OLD);
  const bId = clientIdFor("p:+15145550150");
  await writeFile(path.join(dir, "crm.json"), JSON.stringify({ version: 1, clients: { [bId]: { id: bId, keys: [], tags: ["litige"], notes: [], stageLog: [], createdAt: OLD.toISOString(), updatedAt: OLD.toISOString() } } }));
  // C : inactif mais avec un contrat (job).
  await writeStores(dir, { quotes: [], jobs: [makeJob({ id: "j_contrat00001", status: "planifie", completedAt: undefined, createdAt: OLD.toISOString(), updatedAt: OLD.toISOString(), client: { firstName: "Chloé", lastName: "Exemple", phone: "514 555-0160", email: "chloe@exemple.ca", address: "", city: "Laval", postalCode: "" } })] });
  // D : actif (demande d'août 2026).
  await addJournal(dir, "soumission", { firstName: "Denis", phone: "514 555-0170" }, new Date("2026-08-01T15:00:00Z"));
});
afterEach(async () => {
  vi.unstubAllGlobals();
  process.env = env;
  resetCrmMemo();
  await rm(dir, { recursive: true, force: true });
});

describe("anonymisation des prospects inactifs (24 mois)", () => {
  it("mode essai : compte sans rien modifier ; exclusions contrat et litige", async () => {
    const r = await runProspectRetention({ now: NOW, mode: "essai", months: 24 });
    expect(r.prospects).toBe(1);
    expect(r.exclus).toEqual({ contrat: 1, garantie: 0, litige: 1 });
    expect(r.elements.demandes).toBe(1);
    expect(r.elements.rappels).toBe(2);
    expect(JSON.stringify(await journal())).toContain("514 555-0142");
    expect((await readRelances()).messages).toHaveLength(2);
  });

  it("mode réel : demande d'Alice sans rien qui l'identifie (ligne marquée), rappels retirés ; B, C, D intacts ; audit noté", async () => {
    const r = await runProspectRetention({ now: NOW, mode: "reel", months: 24 });
    expect(r.prospects).toBe(1);
    const lines = await journal();
    const alice = lines.find((l) => l.kind === "soumission" && (l.lead.event === "anonymise" || l.lead.firstName === "Alice"))!;
    expect(alice.lead).toEqual({ event: "anonymise", territory: "Laval" });
    expect(JSON.stringify(lines)).not.toContain("alice@exemple.ca");
    expect(JSON.stringify(lines)).toContain("514 555-0150"); // litige gardé
    expect(JSON.stringify(lines)).toContain("514 555-0170"); // actif
    expect((await readRelances()).messages).toHaveLength(0);
    const auditFiles = await readdir(path.join(dir, "gestion-journal"));
    const audit = (await Promise.all(auditFiles.map((f) => readFile(path.join(dir, "gestion-journal", f), "utf8")))).join("");
    expect(audit).toContain("prospects.anonymisation");
    // Deuxième passage : plus rien à faire (déjà anonymisé).
    resetCrmMemo();
    expect((await runProspectRetention({ now: NOW, mode: "reel", months: 24 })).prospects).toBe(0);
  });

  it("moins de 24 mois d'inactivité : rien", async () => {
    expect((await runProspectRetention({ now: new Date("2025-06-01T12:00:00Z"), mode: "essai", months: 24 })).prospects).toBe(0);
  });
});
