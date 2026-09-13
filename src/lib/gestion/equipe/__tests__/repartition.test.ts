/* Chantier V — répartition des demandes (tour de rôle, territoire, charge, manuelle), réattribution avec historique,
   client créé par un vendeur. Données fictives : @exemple.ca, 514 555-01xx. Aucun envoi réel (NODE_ENV=test). */
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("next/headers", () => ({ cookies: async () => ({ get: () => undefined, set: vi.fn() }), headers: async () => new Headers({ host: "localhost:3001" }) }));

import { journalLead } from "@/lib/crm/lead-journal";
import { createManualContact, freshIndex, resetCrmMemo } from "../../crm/service";
import { readCrm } from "../../crm/store";
import { assigneeOf } from "../scope";
import { autoCandidates, claimForCreator, eligibleVendors, inTerritory, openLoads, pickVendor, reassignClient, redistributeFrom, runRepartition } from "../repartition";
import { mutateTeam, readTeam } from "../store";
import type { AssignMode, Member } from "../types";

const at = "2026-09-01T12:00:00.000Z";
function member(id: string, name: string, over: Partial<Member> = {}): Member {
  return { id, email: `${name.toLowerCase().replace(/\s+/g, ".")}@exemple.ca`, name, role: "vendeur", status: "actif", available: true, territory: { cities: [], postal: [] }, commissionPercent: 30, invitedAt: at, invitedBy: "proprio@exemple.ca", activatedAt: at, updatedAt: at, ...over };
}

describe("choix du vendeur (pur)", () => {
  const a = member("u_vendeurA001", "Vendeur A", { activatedAt: "2026-09-01T10:00:00.000Z" });
  const b = member("u_vendeurB001", "Vendeur B", { activatedAt: "2026-09-02T10:00:00.000Z", territory: { cities: ["Laval"], postal: ["J4K"] } });
  const c = member("u_vendeurC001", "Vendeur C", { activatedAt: "2026-09-03T10:00:00.000Z" });
  const order = eligibleVendors([c, b, a]);
  const place = { city: "Montréal", postalCode: "H2X 1Y4" };

  it("seuls les vendeurs actifs et disponibles, dans l'ordre d'arrivée", () => {
    expect(order.map((m) => m.id)).toEqual(["u_vendeurA001", "u_vendeurB001", "u_vendeurC001"]);
    const off = eligibleVendors([a, { ...b, available: false }, { ...c, status: "desactive" }, member("u_adjoint0001", "Adjointe", { role: "adjoint" }), member("u_invite00001", "Invité", { status: "invite" })]);
    expect(off.map((m) => m.id)).toEqual(["u_vendeurA001"]);
  });

  it("tour de rôle : chacun son tour, on repart du début", () => {
    const loads = new Map<string, number>();
    let cursor: string | null = null;
    const got: string[] = [];
    for (let i = 0; i < 5; i++) {
      const p: NonNullable<ReturnType<typeof pickVendor>> = pickVendor("tour", order, place, loads, cursor)!;
      got.push(p.member.id);
      cursor = p.member.id;
      expect(p.how).toBe("tour");
    }
    expect(got).toEqual(["u_vendeurA001", "u_vendeurB001", "u_vendeurC001", "u_vendeurA001", "u_vendeurB001"]);
    // Curseur d'un vendeur retiré : on repart du début.
    expect(pickVendor("tour", order, place, loads, "u_parti000001")!.member.id).toBe("u_vendeurA001");
  });

  it("territoire : ville ou début de code postal ; hors territoire, tour de rôle", () => {
    expect(inTerritory(b, { city: "laval", postalCode: "" })).toBe(true);
    expect(inTerritory(b, { city: "", postalCode: "j4k 1a1" })).toBe(true);
    expect(inTerritory(b, { city: "Montréal", postalCode: "H2X1Y4" })).toBe(false);
    expect(pickVendor("territoire", order, { city: "Laval", postalCode: "" }, new Map(), "u_vendeurB001")).toMatchObject({ member: { id: "u_vendeurB001" }, how: "territoire" });
    expect(pickVendor("territoire", order, place, new Map(), "u_vendeurA001")).toMatchObject({ member: { id: "u_vendeurB001" }, how: "tour" });
  });

  it("charge : le moins de dossiers ouverts, égalité départagée par le tour", () => {
    const loads = new Map([
      ["u_vendeurA001", 4],
      ["u_vendeurB001", 1],
      ["u_vendeurC001", 1],
    ]);
    expect(pickVendor("charge", order, place, loads, null)).toMatchObject({ member: { id: "u_vendeurB001" }, how: "charge" });
    expect(pickVendor("charge", order, place, loads, "u_vendeurB001")!.member.id).toBe("u_vendeurC001");
  });

  it("manuelle ou sans vendeur : personne", () => {
    expect(pickVendor("manuel", order, place, new Map(), null)).toBeNull();
    expect(pickVendor("tour", [], place, new Map(), null)).toBeNull();
  });
});

describe("répartition et réattribution (magasins réels, dossier temporaire)", () => {
  const env = process.env;
  let dir: string;

  beforeEach(async () => {
    dir = await mkdtemp(path.join(tmpdir(), "thermo-repartition-"));
    process.env = { ...env, GESTION_DATA_DIR: dir, LEAD_JOURNAL_DIR: path.join(dir, "leads"), TEXTOS_DATA_DIR: dir, TELEPHONIE_DATA_DIR: dir, RELANCES_FILE: path.join(dir, "relances.json"), ADMIN_EMAILS: "proprio@exemple.ca", NODE_ENV: "test" };
    resetCrmMemo();
    vi.spyOn(console, "log").mockImplementation(() => undefined);
  });
  afterEach(async () => {
    process.env = env;
    vi.restoreAllMocks();
    await rm(dir, { recursive: true, force: true });
  });

  async function team(mode: AssignMode, since: string | null, members: Member[]) {
    await mutateTeam((d) => {
      d.members = members;
      d.settings.mode = mode;
      d.settings.activeSince = since;
      return { result: undefined, changed: true };
    });
  }

  // Une demande à la fois, à quelques millisecondes d'écart : l'ordre d'arrivée est celui du tour de rôle.
  const lead = async (firstName: string, phone: string, city: string, postalCode = "") => {
    const r = await journalLead("soumission", { firstName, lastName: "Exemple", phone, email: `${firstName.toLowerCase()}@exemple.ca`, municipality: city, postalCode }, { channel: "google-ads" } as never);
    await new Promise((ok) => setTimeout(ok, 5));
    return r;
  };

  it("premier passage : la date de départ est posée, rien de l'historique n'est réparti", async () => {
    await lead("Ancien", "514 555-0101", "Laval");
    await team("tour", null, [member("u_vendeurA001", "Vendeur A")]);
    const r = await runRepartition();
    expect(r.assigned).toBe(0);
    expect((await readTeam()).settings.activeSince).toBeTruthy();
    resetCrmMemo();
    expect((await runRepartition()).assigned).toBe(0);
  });

  it("tour de rôle sur les nouvelles demandes ; un deuxième passage ne reprend rien", async () => {
    await team("tour", "2020-01-01T00:00:00.000Z", [member("u_vendeurA001", "Vendeur A", { activatedAt: "2026-01-01T00:00:00.000Z" }), member("u_vendeurB001", "Vendeur B", { activatedAt: "2026-01-02T00:00:00.000Z" })]);
    await lead("Alice", "514 555-0111", "Laval");
    await lead("Bruno", "514 555-0112", "Longueuil");
    await lead("Chloé", "514 555-0113", "Brossard");
    const r = await runRepartition();
    expect(r.assigned).toBe(3);
    resetCrmMemo();
    const index = await freshIndex();
    const who = (name: string) => assigneeOf(index.clients.find((c) => c.b.firstName === name)!);
    expect([who("Alice"), who("Bruno"), who("Chloé")]).toEqual(["u_vendeurA001", "u_vendeurB001", "u_vendeurA001"]);
    expect((await readTeam()).cursor).toBe("u_vendeurA001");
    const rec = index.clients.find((c) => c.b.firstName === "Bruno")!.b.record!;
    expect(rec.assignLog).toEqual([expect.objectContaining({ from: null, to: "u_vendeurB001", how: "tour", by: "repartition-automatique" })]);
    expect((await runRepartition()).assigned).toBe(0);
  });

  it("territoire et charge", async () => {
    await team("territoire", "2020-01-01T00:00:00.000Z", [member("u_vendeurA001", "Vendeur A", { activatedAt: "2026-01-01T00:00:00.000Z" }), member("u_vendeurB001", "Vendeur B", { activatedAt: "2026-01-02T00:00:00.000Z", territory: { cities: ["Laval"], postal: [] } })]);
    await lead("Alice", "514 555-0121", "Laval");
    await runRepartition();
    resetCrmMemo();
    let index = await freshIndex();
    expect(assigneeOf(index.clients.find((c) => c.b.firstName === "Alice")!)).toBe("u_vendeurB001");

    await mutateTeam((d) => ((d.settings.mode = "charge"), { result: undefined, changed: true }));
    await lead("Bruno", "514 555-0122", "Longueuil");
    await runRepartition();
    resetCrmMemo();
    index = await freshIndex();
    // B a déjà un dossier ouvert (Alice) : A, qui n'en a aucun, reçoit Bruno.
    expect(assigneeOf(index.clients.find((c) => c.b.firstName === "Bruno")!)).toBe("u_vendeurA001");
    expect(openLoads(index).get("u_vendeurA001")).toBe(1);
  });

  it("vendeur indisponible ou désactivé : aucune demande ; mode manuel : rien", async () => {
    await team("tour", "2020-01-01T00:00:00.000Z", [member("u_vendeurA001", "Vendeur A", { available: false }), member("u_vendeurB001", "Vendeur B", { status: "desactive" })]);
    await lead("Alice", "514 555-0131", "Laval");
    expect(await runRepartition()).toMatchObject({ assigned: 0, skipped: "aucun vendeur disponible" });
    await team("manuel", "2020-01-01T00:00:00.000Z", [member("u_vendeurA001", "Vendeur A")]);
    expect(await runRepartition()).toMatchObject({ assigned: 0, skipped: "répartition manuelle" });
  });

  it("réattribution manuelle : historique complet ; un client retiré n'est plus réparti d'office", async () => {
    await team("manuel", "2020-01-01T00:00:00.000Z", [member("u_vendeurA001", "Vendeur A"), member("u_vendeurB001", "Vendeur B")]);
    const c = await createManualContact({ firstName: "Denis", lastName: "Exemple", phone: "514 555-0141", email: "denis@exemple.ca", city: "Laval" }, "proprio@exemple.ca");
    expect(c.ok).toBe(true);
    const id = (c as { id: string }).id;
    expect(await reassignClient(id, "u_vendeurA001", "proprio@exemple.ca", "son secteur")).toMatchObject({ ok: true, from: null, to: "u_vendeurA001" });
    expect(await reassignClient(id, "u_vendeurA001", "proprio@exemple.ca")).toMatchObject({ ok: false });
    expect(await reassignClient(id, "u_vendeurB001", "proprio@exemple.ca")).toMatchObject({ ok: true, from: "u_vendeurA001", to: "u_vendeurB001" });
    expect(await reassignClient(id, "u_inconnu0001", "proprio@exemple.ca")).toMatchObject({ ok: false, error: "Choisissez un vendeur actif." });
    expect(await reassignClient(id, null, "proprio@exemple.ca", "retiré")).toMatchObject({ ok: true, to: null });
    const rec = Object.values((await readCrm()).clients)[0];
    expect(rec.assignedTo).toBeUndefined();
    expect(rec.assignLog?.map((e) => [e.from, e.to, e.how])).toEqual([
      [null, "u_vendeurA001", "manuel"],
      ["u_vendeurA001", "u_vendeurB001", "manuel"],
      ["u_vendeurB001", null, "retrait"],
    ]);
    expect(rec.assignLog?.[0].reason).toBe("son secteur");
    resetCrmMemo();
    expect(autoCandidates(await freshIndex(), "2020-01-01T00:00:00.000Z")).toHaveLength(0);
  });

  it("client créé par un vendeur : il lui revient s'il n'est à personne ; redistribution des dossiers ouverts", async () => {
    await team("tour", "2020-01-01T00:00:00.000Z", [member("u_vendeurA001", "Vendeur A"), member("u_vendeurB001", "Vendeur B")]);
    const c = (await createManualContact({ firstName: "Émile", lastName: "Exemple", phone: "514 555-0151", email: "", city: "Laval" }, "vendeur.a@exemple.ca")) as { ok: true; id: string };
    expect(await claimForCreator(c.id, "u_vendeurA001", "vendeur.a@exemple.ca")).toBe(true);
    expect(await claimForCreator(c.id, "u_vendeurB001", "vendeur.b@exemple.ca")).toBe(false);
    resetCrmMemo();
    expect((await freshIndex()).clients.find((x) => x.b.id === c.id)!.b.record!.assignedTo).toMatchObject({ userId: "u_vendeurA001", how: "creation" });
    const r = await redistributeFrom("u_vendeurA001", "proprio@exemple.ca");
    expect(r).toEqual({ moved: 1, left: 0 });
    resetCrmMemo();
    expect(assigneeOf((await freshIndex()).clients.find((x) => x.b.id === c.id)!)).toBe("u_vendeurB001");
  });
});
