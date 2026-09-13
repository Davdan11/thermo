/* Branchement dans le moteur d'envoi existant : AUCUNE offre à un partenaire bloqué (entente non signée, licence RBQ
   ou assurance expirée), avec la raison ; la raison est aussi visible dans le classement de la fiche du job. */
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const notify = vi.hoisted(() => ({
  notifyOffer: vi.fn(async () => ({ email: "envoye" as const, sms: "envoye" as const })),
  notifyConfirmed: vi.fn(),
  notifyWithdrawn: vi.fn(),
  notifyOwner: vi.fn(),
  sendMagicLink: vi.fn(),
}));
vi.mock("@/lib/gestion/notify", () => notify);

import { loadJobPage, sendOffers } from "../../service";
import { mutateGestion } from "../../store";
import type { Installer, Job } from "../../types";
import { agreementHash, canonicalText } from "../agreement";
import { emptyPartner, mutatePartenaires } from "../store";
import type { AgreementVersion } from "../types";

const env = process.env;
let dir: string;
const NOW = new Date("2026-09-20T15:00:00Z");
const PUBLISHED = "2026-03-01T12:00:00.000Z";
const GEO = { lat: 45.56, lon: -73.71, city: "Laval", precision: "ville" as const };

const inst = (id: string, company: string): Installer => ({ id, company, contactName: "Contact", phone: "514 555-0150", email: `${id}@exemple.ca`, rbq: "", basePostalCode: "H7N 1A1", base: GEO, radiusKm: 60, extraRegions: [], brands: [], systemTypes: [], active: true, maxOpenJobs: null, notes: "", createdAt: "2026-04-01T12:00:00.000Z", updatedAt: "2026-04-01T12:00:00.000Z" });

const job: Job = {
  id: "j_jobtest0001",
  number: 1,
  createdAt: "2026-09-19T12:00:00.000Z",
  updatedAt: "2026-09-19T12:00:00.000Z",
  client: { firstName: "Test", lastName: "Client", phone: "514 555-0199", email: "client@exemple.ca", address: "1 rue Exemple", city: "Laval", postalCode: "H7N 1A1" },
  geo: GEO,
  region: null,
  regionGuess: null,
  brand: null,
  systemType: null,
  modelSlug: null,
  modelLabel: null,
  capacity: "",
  desiredDate: null,
  desiredWindow: "",
  installerNotes: "",
  internalNotes: "",
  status: "nouveau",
  assignedInstallerId: null,
  scheduledFor: null,
  offers: [],
  audit: [],
};

const v1: AgreementVersion = { id: "a_version0001", number: 1, title: "Entente", preamble: "", articles: [{ title: "Objet", paragraphs: ["Texte de test."] }], status: "publiee", createdAt: PUBLISHED, createdBy: "p", updatedAt: PUBLISHED, updatedBy: "p", validatedAt: PUBLISHED, publishedAt: PUBLISHED, graceDays: 14 };

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-moteur-"));
  process.env = { ...env, GESTION_DATA_DIR: dir, TEXTOS_DATA_DIR: dir, NODE_ENV: "test" };
  vi.clearAllMocks();
  await mutateGestion((g) => {
    g.installers.push(inst("i_signe000001", "Signé et en règle"), inst("i_nonsig00001", "Pas signé"), inst("i_rbqexp00001", "RBQ expirée"));
    g.jobs.push(structuredClone(job));
    return { result: null, changed: true };
  });
  await mutatePartenaires((d) => {
    d.agreements.push(v1);
    for (const id of ["i_signe000001", "i_rbqexp00001"]) {
      d.signatures.push({ id: `s_${id.slice(2)}`, installerId: id, requestId: "r_x0000001", versionId: v1.id, versionNumber: 1, signedAt: "2026-04-02T12:00:00.000Z", company: id, signerName: "A B", signerTitle: "Président", authorized: true, accepted: true, method: "nom", proof: { ip: "x", userAgent: "x", textSha256: agreementHash(v1) }, signedText: canonicalText(v1), copies: { partner: "simule", owner: [] } });
      const p = emptyPartner(id);
      p.compliance.rbq.expiresOn = id === "i_rbqexp00001" ? "2026-09-01" : "2027-06-30";
      p.compliance.assurance.expiresOn = "2027-06-30";
      d.partners[id] = p;
    }
    return { result: null, changed: true };
  });
});
afterEach(async () => {
  process.env = env;
  await rm(dir, { recursive: true, force: true });
});

describe("moteur d'envoi des offres", () => {
  it("n'envoie qu'au partenaire en règle ; les autres sont refusés avec la raison", async () => {
    const r = await sendOffers(job.id, ["i_signe000001", "i_nonsig00001", "i_rbqexp00001"], 48, "proprio@exemple.ca", "http://test.local", NOW);
    expect(r.sent).toBe(1);
    expect(r.errors).toEqual(["Pas signé : Entente (version 1) non signée", "RBQ expirée : Licence RBQ expirée le 1 septembre 2026"]);
    expect(notify.notifyOffer).toHaveBeenCalledTimes(1);
    expect((notify.notifyOffer.mock.calls[0] as unknown as [{ id: string }])[0].id).toBe("i_signe000001");
  });

  it("la fiche du job montre la raison du blocage dans le classement", async () => {
    const page = await loadJobPage(job.id, NOW);
    const all = [...page!.match!.ranked, ...page!.match!.nearMisses];
    expect(page!.match!.ranked.map((c) => c.installer.id)).toEqual(["i_signe000001"]);
    expect(all.find((c) => c.installer.id === "i_nonsig00001")?.failures).toContain("Entente (version 1) non signée");
    expect(all.find((c) => c.installer.id === "i_rbqexp00001")?.failures).toContain("Licence RBQ expirée le 1 septembre 2026");
  });
});
