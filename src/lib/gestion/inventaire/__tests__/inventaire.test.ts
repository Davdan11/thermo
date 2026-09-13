/* Chantier R — inventaire : réservation (job, soumission acceptée, sans double compte), libération, sortie à la fin du
   chantier (une seule fois), seuil bas et tâche, bons de commande. Données fictives. */
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import type { Quote } from "@/lib/soumissions/types";
import { registry } from "@/lib/data/registry";
import { AUTO_TASK_RE } from "../../crm/types";
import { stockTasks } from "../../reseau/tasks";
import type { Job } from "../../types";
import { applyExits, dossiersFrom, itemStock, stockValue, stockView, suggestedQty } from "../reservations";
import { adjustQuantity, createItem, createOrder, inventoryView, lowStockAlerts, receiveOrder, syncStockExits } from "../service";
import { emptyInventaire, readInventaire } from "../store";
import type { StockItem } from "../types";

const SLUG = "modele-fictif";
const T0 = "2026-09-01T12:00:00.000Z";

function job(id: string, number: number, over: Partial<Job> = {}): Job {
  return {
    id,
    number,
    createdAt: T0,
    updatedAt: T0,
    client: { firstName: "", lastName: "", phone: "", email: "", address: "", city: "", postalCode: "" },
    geo: null,
    region: null,
    regionGuess: null,
    brand: null,
    systemType: null,
    modelSlug: SLUG,
    modelLabel: null,
    capacity: "",
    desiredDate: null,
    desiredWindow: "",
    installerNotes: "",
    internalNotes: "",
    status: "attribue",
    assignedInstallerId: null,
    scheduledFor: null,
    offers: [],
    audit: [],
    ...over,
  };
}
const quote = (id: string, number: string, slug: string | null, acceptedAt: string | null) =>
  ({ id, number, createdAt: T0, versions: [{ acceptance: acceptedAt ? { at: acceptedAt } : null, content: { machine: slug ? { modelSlug: slug } : null, client: { phone: "", email: "" } } }] }) as unknown as Quote;
const item = (over: Partial<StockItem> = {}): StockItem => ({ id: "k_item000001", kind: "exterieur", label: "Unité fictive", modelSlug: SLUG, modelLabel: null, brandId: null, partNumber: "", perJob: 1, quantity: 3, location: "Étagère A", unitCostCents: null, lowThreshold: 1, supplier: "", archived: false, createdAt: "2026-08-01T12:00:00.000Z", createdBy: "p", updatedAt: "2026-08-01T12:00:00.000Z", ...over });

describe("réservations", () => {
  it("un job et une soumission acceptée sans job réservent ; job annulé et soumission non acceptée, non", () => {
    const d = dossiersFrom([job("j_job0000001", 1), job("j_job0000002", 2, { status: "annule" })], [quote("q_quote00001", "Q-0001", SLUG, "2026-09-02T12:00:00.000Z"), quote("q_quote00002", "Q-0002", SLUG, null)]);
    expect(d.map((x) => x.ref)).toEqual(["job:j_job0000001", "quote:q_quote00001"]);
    const data = { ...emptyInventaire(), items: [item()] };
    const s = itemStock(data.items[0], data, d);
    expect(s).toMatchObject({ reserved: 2, available: 1, low: true });
  });

  it("soumission liée au job : comptée une seule fois", () => {
    const d = dossiersFrom([job("j_job0000001", 1, { internalNotes: "Soumission Q-0001 acceptée le 2 septembre" })], [quote("q_quote00001", "Q-0001", SLUG, "2026-09-02T12:00:00.000Z")]);
    expect(d.map((x) => x.ref)).toEqual(["job:j_job0000001"]);
  });

  it("modèle du job absent : celui de la soumission acceptée liée", () => {
    const d = dossiersFrom([job("j_job0000001", 1, { modelSlug: null, internalNotes: "Soumission Q-0001" })], [quote("q_quote00001", "Q-0001", SLUG, T0)]);
    expect(d[0]).toMatchObject({ ref: "job:j_job0000001", modelSlug: SLUG });
  });

  it("réservation libérée à la main : plus comptée", () => {
    const d = dossiersFrom([job("j_job0000001", 1)], [quote("q_quote00001", "Q-0001", SLUG, T0)]);
    const data = { ...emptyInventaire(), items: [item()], releases: [{ ref: "quote:q_quote00001", itemId: "k_item000001", at: T0, by: "p", note: "" }] };
    expect(itemStock(data.items[0], data, d).reserved).toBe(1);
  });

  it("article sans modèle, archivé ou d'un autre modèle : aucune réservation", () => {
    const d = dossiersFrom([job("j_job0000001", 1)], []);
    const base = emptyInventaire();
    expect(itemStock(item({ modelSlug: null }), base, d).reserved).toBe(0);
    expect(itemStock(item({ archived: true }), base, d).reserved).toBe(0);
    expect(itemStock(item({ modelSlug: "autre-modele" }), base, d).reserved).toBe(0);
  });
});

describe("sortie à la fin du chantier", () => {
  it("job terminé : une sortie, une seule fois ; la réservation disparaît", () => {
    const d = dossiersFrom([job("j_job0000001", 1, { status: "termine", completedAt: "2026-09-10T15:00:00.000Z" }), job("j_job0000002", 2)], []);
    const data = { ...emptyInventaire(), items: [item({ perJob: 2, quantity: 5 })] };
    expect(itemStock(data.items[0], data, d).pendingExit).toHaveLength(1);
    let n = 0;
    const created = applyExits(data, d, "2026-09-11T03:00:00.000Z", () => `m_move${String(++n).padStart(6, "0")}`);
    expect(created).toHaveLength(1);
    expect(created[0]).toMatchObject({ delta: -2, reason: "sortie-chantier", jobId: "j_job0000001", key: "sortie:job:j_job0000001:k_item000001" });
    expect(data.items[0].quantity).toBe(3);
    expect(itemStock(data.items[0], data, d)).toMatchObject({ reserved: 2, available: 1, pendingExit: [] });
    expect(applyExits(data, d, "2026-09-12T03:00:00.000Z", () => "m_again00001")).toEqual([]);
    expect(data.items[0].quantity).toBe(3);
  });

  it("job terminé AVANT la création de l'article : ni réservation ni sortie", () => {
    const d = dossiersFrom([job("j_job0000001", 1, { status: "termine", completedAt: "2026-07-01T15:00:00.000Z" })], []);
    const data = { ...emptyInventaire(), items: [item()] };
    expect(itemStock(data.items[0], data, d).reserved).toBe(0);
    expect(applyExits(data, d, T0, () => "m_x00000001")).toEqual([]);
  });
});

describe("seuil bas", () => {
  it("disponible au seuil : alerte et tâche « Commander » ; sans seuil : jamais", () => {
    const d = dossiersFrom([job("j_job0000001", 1), job("j_job0000002", 2)], []);
    const data = { ...emptyInventaire(), items: [item({ quantity: 3, lowThreshold: 1 }), item({ id: "k_item000002", lowThreshold: null })] };
    const [a, b] = stockView(data, d);
    expect(a).toMatchObject({ available: 1, low: true });
    expect(b.low).toBe(false);
    expect(suggestedQty(a)).toBe(1);
    const [t] = stockTasks([{ id: a.item.id, label: a.item.label, available: a.available, lowThreshold: 1, quantity: 3, reserved: a.reserved, updatedAt: a.item.updatedAt }]);
    expect(t).toMatchObject({ rule: "inventaire-seuil", title: "Commander : Unité fictive", detail: "1 disponible (3 en main, 2 réservés) · seuil 1" });
    expect(t.key).toMatch(AUTO_TASK_RE);
  });

  it("valeur au coût : seulement les coûts saisis", () => {
    expect(stockValue([item({ unitCostCents: 10_000, quantity: 2 }), item({ unitCostCents: null })])).toEqual({ cents: 20_000, withoutCost: 1 });
  });
});

/* ---------------- Service (fichiers temporaires) ---------------- */

const env0 = process.env;
let dir: string;
beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-inventaire-"));
  process.env = { ...env0, GESTION_DATA_DIR: dir, LEAD_JOURNAL_DIR: path.join(dir, "leads"), NODE_ENV: "test" };
});
afterEach(async () => {
  process.env = env0;
  await rm(dir, { recursive: true, force: true });
});

describe("service", () => {
  const realSlug = () => registry.models[0].slug;
  const input = (slug: string | null) => ({ kind: "exterieur" as const, label: "", modelSlug: slug, partNumber: "", perJob: 1, location: "Entrepôt", unitCostCents: null, lowThreshold: 2, supplier: "Fournisseur Fictif", quantity: 1 });

  it("modèle inconnu du catalogue : refusé, rien n'est écrit", async () => {
    expect(await createItem(input("modele-qui-n-existe-pas"), "p")).toEqual({ ok: false, error: "Modèle introuvable au catalogue." });
    expect((await readInventaire()).items).toEqual([]);
  });

  it("article, entrée, bon de commande reçu une seule fois, alerte levée", async () => {
    const r = await createItem(input(realSlug()), "p");
    expect(r.ok).toBe(true);
    const id = (r as { id: string }).id;
    expect((await lowStockAlerts()).map((a) => a.id)).toEqual([id]);
    expect(await adjustQuantity(id, 1, "entree", "", "p")).toMatchObject({ ok: true });
    const o = await createOrder({ supplier: "Fournisseur Fictif", note: "", lines: [{ itemId: id, qty: 4, unitCostCents: 12_345 }] }, "p");
    expect(o.ok).toBe(true);
    const oid = (o as { id: string }).id;
    expect(await receiveOrder(oid, "p")).toMatchObject({ ok: true });
    expect(await receiveOrder(oid, "p")).toEqual({ ok: false, error: "Ce bon est déjà fermé." });
    const data = await readInventaire();
    expect(data.items[0]).toMatchObject({ quantity: 6, unitCostCents: 12_345 });
    expect(data.movements.filter((m) => m.reason === "reception-bc")).toHaveLength(1);
    expect(await lowStockAlerts()).toEqual([]);
  });

  it("tâche planifiée : sortie pour un job terminé, une seule fois", async () => {
    const slug = realSlug();
    const r = await createItem({ ...input(slug), quantity: 3 }, "p", new Date("2026-08-01T12:00:00Z"));
    const id = (r as { id: string }).id;
    await writeFile(path.join(dir, "gestion.json"), JSON.stringify({ version: 1, installers: [], jobs: [job("j_job0000001", 1, { modelSlug: slug, status: "termine", completedAt: "2026-09-10T15:00:00.000Z" })] }));
    expect(await syncStockExits()).toEqual({ created: 1 });
    expect(await syncStockExits()).toEqual({ created: 0 });
    const v = await inventoryView();
    expect(v.stock.find((s) => s.item.id === id)).toMatchObject({ reserved: 0, available: 2 });
  });
});
