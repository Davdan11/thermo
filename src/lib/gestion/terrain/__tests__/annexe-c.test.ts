/* Conformité C3 — liste de contrôle du chantier alignée sur l'annexe C de l'entente en vigueur (points lus dans les
   données FICTIVES), photos, numéros de série et signature toujours obligatoires ; un chantier commencé avec
   l'ancienne liste reste fermable avec elle. Aucun vrai texto ni courriel. */
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import sharp from "sharp";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const mail = vi.hoisted(() => ({ sendClientEmail: vi.fn(async () => true) }));
vi.mock("@/lib/crm/email", async (orig) => ({ ...(await orig<typeof import("@/lib/crm/email")>()), sendClientEmail: mail.sendClientEmail }));
const sms = vi.hoisted(() => ({ sendSms: vi.fn(async () => "envoye" as const) }));
vi.mock("@/lib/gestion/sms", async (orig) => ({ ...(await orig<typeof import("@/lib/gestion/sms")>()), sendSms: sms.sendSms }));

import { hashToken, newToken } from "../../auth/magic-link";
import { mutatePartenaires } from "../../partenaires/store";
import type { AgreementVersion } from "../../partenaires/types";
import { mutateGestion, readGestion } from "../../store";
import type { Installer, Job } from "../../types";
import { checklistSpecOf, LEGACY_SPEC } from "../checklist";
import { getCompletion } from "../completion";
import { applySimpleOp, missingForClose, type FieldOp } from "../rules";
import { annexSpecOf, applyFieldOps, getFieldView, uploadFieldPhoto } from "../service";
import { mutateTerrain, readTerrain, recordOf } from "../store";
import { CHECKLIST, PHOTO_STEPS } from "../types";

const env = process.env;
let dir: string;
const NOW = new Date("2026-09-20T15:00:00Z");
const CTX = { ip: "203.0.113.9", userAgent: "test", baseUrl: "http://test.local" };
const TOKEN_A = newToken();
const TOKEN_B = newToken();
const A = "i_installa001";
const B = "i_installb001";
const POINTS = ["Premier point fictif du chantier.", "Deuxième point fictif du chantier.", "Troisième point fictif du chantier."];

const inst = (id: string): Installer => ({ id, company: `Clim ${id.slice(-4)}`, contactName: "Contact", phone: "514 555-0160", email: `${id}@exemple.ca`, rbq: "", basePostalCode: "H7N 1A1", base: null, radiusKm: 60, extraRegions: [], brands: [], systemTypes: [], active: true, maxOpenJobs: null, notes: "", createdAt: "2026-01-01T12:00:00.000Z", updatedAt: "2026-01-01T12:00:00.000Z" });

function job(id: string, n: number, installerId: string, token: string): Job {
  return {
    id,
    number: n,
    createdAt: "2026-09-10T12:00:00.000Z",
    updatedAt: "2026-09-10T12:00:00.000Z",
    client: { firstName: "Test", lastName: `Client ${n}`, phone: "514 555-0170", email: "client@exemple.ca", address: "1 rue Exemple", city: "Laval", postalCode: "H7N 1A1" },
    geo: null,
    region: null,
    regionGuess: null,
    brand: null,
    systemType: null,
    modelSlug: null,
    modelLabel: "Modèle de test",
    capacity: "12 000 BTU",
    desiredDate: null,
    desiredWindow: "",
    installerNotes: "",
    internalNotes: "",
    status: "planifie",
    assignedInstallerId: installerId,
    scheduledFor: "2026-09-20",
    offers: [{ id: `o_${id.slice(2)}`, installerId, sentAt: "2026-09-10T12:00:00.000Z", channels: { email: "envoye", sms: "envoye" }, tokenHash: hashToken(token), expiresAt: "2026-09-12T12:00:00.000Z", distanceKm: 5, response: "accepte", respondedAt: "2026-09-10T13:00:00.000Z" }],
    audit: [],
  };
}

const masterVersion: AgreementVersion = {
  id: "a_version0009",
  number: 3,
  title: "Entente fictive",
  preamble: "",
  articles: [{ number: "2.1", title: "Objet fictif", paragraphs: ["Texte fictif."] }],
  annexes: [{ letter: "C", title: "Liste fictive", table: [], checklist: POINTS, paragraphs: [], sections: [] }],
  status: "publiee",
  createdAt: "2026-09-01T12:00:00.000Z",
  createdBy: "p",
  updatedAt: "2026-09-01T12:00:00.000Z",
  updatedBy: "p",
  validatedAt: "2026-09-01T12:00:00.000Z",
  publishedAt: "2026-09-01T12:00:00.000Z",
  source: { kind: "trousse", version: "9.9", sha256: null, importedAt: null },
};

let jpeg: Buffer;
let signature: string;
let n = 0;
const op = <T extends Omit<FieldOp, "id" | "at">>(o: T, at = new Date(NOW.getTime() - 60_000)) => ({ ...o, id: `op-${++n}-${Math.random().toString(36).slice(2, 10)}`, at: at.toISOString() }) as unknown as FieldOp;

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-c3-annexe-c-"));
  process.env = { ...env, GESTION_DATA_DIR: dir, TEXTOS_DATA_DIR: dir, ADMIN_EMAILS: "proprio@exemple.ca", NODE_ENV: "test", TEXTOS_ENVOIS_DEV: "", TWILIO_ACCOUNT_SID: "", TWILIO_AUTH_TOKEN: "", TWILIO_PHONE_NUMBER: "", GEMINI_API_KEY: "" };
  vi.clearAllMocks();
  jpeg ??= await sharp({ create: { width: 120, height: 90, channels: 3, background: "#335577", noise: { type: "gaussian", mean: 120, sigma: 30 } } }).jpeg().toBuffer();
  signature ??= `data:image/png;base64,${(await sharp({ create: { width: 240, height: 90, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0.5 }, noise: { type: "gaussian", mean: 128, sigma: 40 } } }).png().toBuffer()).toString("base64")}`;
  await mutateGestion((g) => {
    g.installers.push(inst(A), inst(B));
    g.jobs.push(job("j_jobannxa001", 1, A, TOKEN_A), job("j_jobannxb001", 2, B, TOKEN_B));
    return { result: null, changed: true };
  });
});
afterEach(async () => {
  process.env = env;
  await rm(dir, { recursive: true, force: true });
});

async function photosAndSerials(token: string) {
  for (const s of PHOTO_STEPS) expect((await uploadFieldPhoto(token, { step: s.id, clientId: `ph-${s.id}-${token.slice(0, 6)}` }, jpeg, NOW)).ok).toBe(true);
  const out = await applyFieldOps(token, [op({ type: "serials", outdoor: ["ABC-12345"], indoor: ["IDU998877"] }), op({ type: "signature", name: "Test Client", image: signature })], CTX, NOW);
  expect(out.results.every((r) => r.ok)).toBe(true);
}

describe("liste de contrôle de l'annexe C", () => {
  it("points lus dans l'entente en vigueur ; fermeture bloquée tant qu'un point manque ; photos, séries et signature toujours exigées", async () => {
    await mutatePartenaires((d) => {
      d.agreements.push(structuredClone(masterVersion));
      return { result: null, changed: true };
    });
    const v = await getFieldView(TOKEN_A, NOW);
    if (v.state !== "ok") throw new Error(v.state);
    expect(v.view.checklistSpec).toEqual({ kind: "annexe-c", source: "Entente version 3, annexe C", items: POINTS.map((label, i) => ({ id: `c${i + 1}`, label, naAllowed: false })) });

    await photosAndSerials(TOKEN_A);
    const early = await applyFieldOps(TOKEN_A, [op({ type: "fermer" })], CTX, NOW);
    expect(early.results[0].ok).toBe(false);
    expect(early.results[0].missing?.map((m) => m.label)).toEqual(POINTS.map((p, i) => `Liste de contrôle : point ${i + 1} (${p})`));
    const na = await applyFieldOps(TOKEN_A, [op({ type: "checklist", item: "c1", value: "sans-objet" })], CTX, NOW);
    expect(na.results[0]).toMatchObject({ ok: false, error: `« ${POINTS[0]} » ne peut pas être sans objet.` });
    const legacyItem = await applyFieldOps(TOKEN_A, [op({ type: "checklist", item: "vide", value: "fait" })], CTX, NOW);
    expect(legacyItem.results[0]).toMatchObject({ ok: false, error: "Point de contrôle inconnu." });

    const ok = await applyFieldOps(TOKEN_A, [...["c1", "c2", "c3"].map((item) => op({ type: "checklist", item, value: "fait" })), op({ type: "fermer" })], CTX, NOW);
    expect(ok.results.every((r) => r.ok)).toBe(true);
    expect((await readGestion()).jobs[0].status).toBe("termine");
    const c = await getCompletion("j_jobannxa001");
    expect(c?.missing).toEqual([]);
    expect(Object.keys(c!.checklist).sort()).toEqual(["c1", "c2", "c3"]);
  });

  it("rétrocompatibilité : un chantier commencé avec l'ancienne liste reste fermable avec elle", async () => {
    // Chantier en cours avant la publication : un point de l'ancienne liste déjà coché, aucune liste figée.
    await mutateTerrain((t) => {
      const r = recordOf(t, "j_jobannxb001", B, NOW);
      r.checklist = { vide: { value: "fait", at: NOW.toISOString() } };
      return { result: null, changed: true };
    });
    await mutatePartenaires((d) => {
      d.agreements.push(structuredClone(masterVersion));
      return { result: null, changed: true };
    });
    const v = await getFieldView(TOKEN_B, NOW);
    if (v.state !== "ok") throw new Error(v.state);
    expect(v.view.checklistSpec.kind).toBe("ancienne");
    await photosAndSerials(TOKEN_B);
    const out = await applyFieldOps(TOKEN_B, [...CHECKLIST.map((c) => op({ type: "checklist", item: c.id, value: "fait" })), op({ type: "fermer" })], CTX, NOW);
    expect(out.results.every((r) => r.ok)).toBe(true);
    expect((await readGestion()).jobs[1].status).toBe("termine");
    expect((await readTerrain()).records["j_jobannxb001"].checklistSpec?.kind).toBe("ancienne");
  });

  it("fonctions pures : liste figée, ancienne liste d'un dossier fermé, annexe absente", () => {
    const annex = annexSpecOf({ agreements: [masterVersion] })!;
    expect(annex.items.map((i) => i.id)).toEqual(["c1", "c2", "c3"]);
    expect(annexSpecOf({ agreements: [{ ...masterVersion, annexes: [] }] })).toBeNull();
    const fresh = { checklist: {}, photos: [], serials: { outdoor: [], indoor: [] } };
    expect(checklistSpecOf(fresh, annex)).toBe(annex);
    expect(checklistSpecOf({ ...fresh, closedAt: NOW.toISOString() }, annex)).toBe(LEGACY_SPEC);
    expect(checklistSpecOf(fresh, null)).toBe(LEGACY_SPEC);
    const r = { jobId: "j", installerId: A, tokens: [], checklist: {}, photos: [], serials: { outdoor: [], indoor: [] }, events: [], appliedOps: [], updatedAt: "" };
    expect(applySimpleOp(r, { id: "op-12345678", type: "checklist", item: "c2", value: "fait" }, "x", NOW, annex)).toEqual({ ok: true });
    expect(missingForClose(r, annex).filter((m) => m.code.startsWith("controle:")).map((m) => m.code)).toEqual(["controle:c1", "controle:c3"]);
    expect(missingForClose(r, annex).map((m) => m.code)).toContain("signature");
  });
});
