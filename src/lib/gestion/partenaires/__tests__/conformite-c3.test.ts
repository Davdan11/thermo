/* Conformité C3 — blocages des offres (assurance : montant, avenant, expiration ; automobile ; halocarbures), alertes,
   fin du partenariat (préavis de 30 jours, défaut, fin immédiate), rappel du non-contournement, lecture des fiches
   écrites avant (rétrocompatibilité). Aucun envoi réel. */
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const mail = vi.hoisted(() => ({ sendClientEmail: vi.fn(async () => true) }));
vi.mock("@/lib/crm/email", async (orig) => ({ ...(await orig<typeof import("@/lib/crm/email")>()), sendClientEmail: mail.sendClientEmail }));

import { daysBetweenYmd } from "../../crm/time";
import { mutateGestion, readGestion } from "../../store";
import type { Job } from "../../types";
import { agreementHash, canonicalText } from "../agreement";
import { loadBlockers, partnerBlockers } from "../blockers";
import { complianceSnapshot, parseSubcategories } from "../compliance";
import { partnerAutoTasks } from "../crm-tasks";
import { endedOf, nonCircumvention, noticeReceivedOn, terminationDates, terminationPhase } from "../fin";
import { cancelNotice, confirmTermination, giveNotice, settleTerminations } from "../service";
import { emptyPartenaires, emptyPartner, mutatePartenaires, normalizePartenaires, readPartenaires } from "../store";
import type { AgreementVersion, PartenairesData } from "../types";
import { installer, testEnv } from "./fixtures-c3";

const NOW = new Date("2026-09-20T15:00:00Z"); // dimanche 11 h, Montréal
const inst = { id: "i_install0001", createdAt: "2026-01-10T12:00:00.000Z" };

function version(master: boolean): AgreementVersion {
  return {
    id: "a_version0001",
    number: 1,
    title: "Entente",
    preamble: "",
    articles: [{ ...(master ? { number: "2.1" } : {}), title: "Objet", paragraphs: ["Texte de test."] }],
    status: "publiee",
    createdAt: "2026-02-01T12:00:00.000Z",
    createdBy: "p",
    updatedAt: "2026-02-01T12:00:00.000Z",
    updatedBy: "p",
    validatedAt: "2026-02-01T12:00:00.000Z",
    publishedAt: "2026-02-01T12:00:00.000Z",
    graceDays: 14,
    ...(master ? { source: { kind: "trousse" as const, version: "9.9", sha256: null, importedAt: null } } : {}),
  };
}

function data(master: boolean): PartenairesData {
  const d = emptyPartenaires();
  const v = version(master);
  d.agreements.push(v);
  d.signatures.push({ id: "s_sig0000001", installerId: inst.id, requestId: "r_x0000001", versionId: v.id, versionNumber: 1, signedAt: "2026-02-03T12:00:00.000Z", company: "Clim", signerName: "A B", signerTitle: "Président", authorized: true, accepted: true, method: "nom", proof: { ip: "x", userAgent: "x", textSha256: agreementHash(v) }, signedText: canonicalText(v), copies: { partner: "simule", owner: [] } });
  const p = emptyPartner(inst.id);
  p.compliance.rbq.expiresOn = "2027-05-01";
  p.compliance.assurance.expiresOn = "2027-01-31";
  d.partners[inst.id] = p;
  return d;
}

/** Fiche complète selon l'annexe B (fictive) : aucun blocage. */
function compliant(d: PartenairesData): PartenairesData {
  const p = d.partners[inst.id];
  p.compliance.assurance.amount = 2_000_000;
  p.additionalInsured = { confirmed: true, date: "2026-01-15", fileId: "d_avenant0001", fileName: "avenant.pdf" };
  p.compliance.automobile = { number: "AUTO-1", issuer: "Assureur Exemple", expiresOn: "2027-03-01", coverage: "", amount: 2_000_000 };
  p.halocarbons = [{ id: "h_halo000001", holder: "Marc Exemple", number: "HQ-0001", issuedOn: "2025-01-01", expiresOn: null, updatedAt: "2026-01-15T12:00:00.000Z", updatedBy: "p" }];
  return d;
}

const codes = (d: PartenairesData, now = NOW) => partnerBlockers(inst, { data: d, now }).map((b) => b.code);

describe("blocages des offres : assurance, avenant, automobile, halocarbures", () => {
  it("entente maître en vigueur : chaque document absent bloque, avec sa raison", () => {
    const d = data(true);
    const b = partnerBlockers(inst, { data: d, now: NOW });
    expect(b.map((x) => x.code)).toEqual(["assurance-montant", "avenant", "automobile", "halocarbures"]);
    expect(b[0].label).toBe("Assurance responsabilité : montant de la couverture à saisir (minimum 2 000 000 $)");
    expect(b[1].label).toBe("Avenant d’assuré additionnel en faveur de la plateforme manquant");
    expect(codes(compliant(data(true)))).toEqual([]);
  });

  it("montant insuffisant : bloqué même avant l'entente maître ; minimum réglable", () => {
    const d = compliant(data(false));
    d.partners[inst.id].compliance.assurance.amount = 1_000_000;
    const b = partnerBlockers(inst, { data: d, now: NOW });
    expect(b.map((x) => x.code)).toEqual(["assurance-montant"]);
    expect(b[0].label).toBe("Assurance responsabilité insuffisante : 1 000 000 $ par sinistre (minimum 2 000 000 $)");
    d.settings.requirements.minLiability = 1_000_000;
    expect(codes(d)).toEqual([]);
  });

  it("avenant coché sans document ; expiration de l'assurance ; automobile expirée ou insuffisante", () => {
    const d = compliant(data(true));
    d.partners[inst.id].additionalInsured = { confirmed: true, date: "2026-01-15" };
    expect(partnerBlockers(inst, { data: d, now: NOW }).find((x) => x.code === "avenant")?.label).toBe("Avenant d’assuré additionnel : document à téléverser");
    const e = compliant(data(true));
    e.partners[inst.id].compliance.assurance.expiresOn = "2026-09-19";
    expect(codes(e)).toEqual(["assurance"]);
    const f = compliant(data(true));
    f.partners[inst.id].compliance.automobile!.expiresOn = "2026-09-01";
    f.partners[inst.id].compliance.automobile!.amount = 500_000;
    const auto = partnerBlockers(inst, { data: f, now: NOW }).find((x) => x.code === "automobile");
    expect(auto?.label).toBe("Assurance automobile expirée le 1 septembre 2026 ; insuffisante : 500 000 $ (minimum 2 000 000 $)");
    f.settings.requirements.requireAuto = false;
    f.partners[inst.id].compliance.automobile = { number: "", issuer: "", expiresOn: null, coverage: "" };
    expect(codes(f)).toEqual([]);
  });

  it("halocarbures : toutes les attestations expirées bloquent ; une seule valide suffit", () => {
    const d = compliant(data(false));
    d.partners[inst.id].halocarbons = [{ id: "h_halo000001", holder: "Marc Exemple", number: "HQ-0001", issuedOn: null, expiresOn: "2026-01-01", updatedAt: "x", updatedBy: "p" }];
    expect(codes(d)).toEqual(["halocarbures"]);
    d.partners[inst.id].halocarbons!.push({ id: "h_halo000002", holder: "Luc Exemple", number: "HQ-0002", issuedOn: null, expiresOn: "2028-01-01", updatedAt: "x", updatedBy: "p" });
    expect(codes(d)).toEqual([]);
  });

  it("sous-catégories RBQ : saisies, ou lues au registre du chantier R (qui prime)", () => {
    expect(parseSubcategories("15.10, 15.9 ; 16 16 x")).toEqual(["15.9", "15.10", "16"]);
    const d = data(true);
    d.partners[inst.id].compliance.rbq.subcategories = ["15.9"];
    expect(complianceSnapshot(d.partners[inst.id], d.settings, NOW).rbq).toMatchObject({ subcategories: ["15.9"], subcategoriesSource: "saisie" });
    d.partners[inst.id].rbqVerification = { checkedAt: NOW.toISOString(), number: "5678-1234-01", outcome: "active", subcategories: ["15.10", "16"], missingSubcategories: [], source: { url: "x", fetchedAt: "x", lastModified: null, licences: 1 } };
    expect(complianceSnapshot(d.partners[inst.id], d.settings, NOW).rbq).toMatchObject({ subcategories: ["15.10", "16"], subcategoriesSource: "registre" });
  });

  it("alertes avant l'expiration, comme aujourd'hui : assurance automobile et attestation environnementale", () => {
    const d = compliant(data(true));
    d.partners[inst.id].compliance.automobile!.expiresOn = "2026-10-05";
    d.partners[inst.id].halocarbons![0].expiresOn = "2026-10-01";
    const titles = partnerAutoTasks({ partners: d, sav: { version: 1, tickets: [], links: [] }, installers: [{ id: inst.id, company: "Clim Exemple", createdAt: inst.createdAt, active: true }] }, NOW).map((t) => t.title);
    expect(titles).toContain("Assurance automobile de Clim Exemple : expire le 5 octobre 2026");
    expect(titles).toContain("Attestation environnementale de Marc Exemple (Clim Exemple) : expire le 1 octobre 2026");
  });
});

describe("rétrocompatibilité des fiches", () => {
  it("une fiche écrite avant (sans automobile, avenant, halocarbures, préavis) se lit et ne bloque rien de nouveau", () => {
    const old = { version: 1, agreements: [version(false)], requests: [], signatures: data(false).signatures, files: [], settings: { graceDays: 14 }, partners: { [inst.id]: { installerId: inst.id, compliance: { rbq: { number: "1", issuer: "", expiresOn: "2027-05-01", coverage: "" }, assurance: { number: "2", issuer: "", expiresOn: "2027-01-31", coverage: "" } }, tierOverride: null, ended: null, history: [], citations: [] } } };
    const d = normalizePartenaires(old as unknown as Partial<PartenairesData>);
    const p = d.partners[inst.id];
    expect(p.compliance.automobile).toEqual({ number: "", issuer: "", expiresOn: null, coverage: "" });
    expect(p.halocarbons).toEqual([]);
    expect(p.additionalInsured).toBeNull();
    expect(p.termination).toBeNull();
    expect(d.settings.requirements).toEqual({ minLiability: 2_000_000, minAuto: 2_000_000, requireEndorsement: true, requireAuto: true, requireHalocarbon: true });
    expect(d.settings.sla).toEqual({ ackBusinessDays: 1, visitBusinessDays: 3, urgentAckBusinessHours: 2, urgentVisitHours: 24 });
    expect(codes(d)).toEqual([]);
  });
});

describe("fin du partenariat", () => {
  const env = process.env;
  let dir: string;
  const BY = "proprio@exemple.ca";
  const A = "i_climaaa0001";
  const B = "i_climbbb0001";
  const MON = new Date("2026-09-14T15:00:00Z"); // lundi 11 h

  beforeEach(async () => {
    dir = await mkdtemp(path.join(tmpdir(), "thermo-c3-fin-"));
    process.env = { ...env, ...testEnv(dir, BY) };
    vi.clearAllMocks();
    await mutateGestion((g) => {
      g.installers.push(installer(A, "Climatisation A", new Date("2026-01-01T12:00:00Z")), installer(B, "Climatisation B", new Date("2026-01-01T12:00:00Z")));
      return { result: null, changed: true };
    });
  });
  afterEach(async () => {
    process.env = env;
    await rm(dir, { recursive: true, force: true });
  });

  it("avis réputé reçu : jour ouvrable avant 17 h, sinon le suivant ; préavis de 30 jours calculé", () => {
    expect(noticeReceivedOn(MON)).toBe("2026-09-14");
    expect(noticeReceivedOn(new Date("2026-09-14T22:00:00Z"))).toBe("2026-09-15"); // 18 h
    expect(noticeReceivedOn(new Date("2026-09-19T15:00:00Z"))).toBe("2026-09-21"); // samedi → lundi
    const t = terminationDates("sans-motif", MON);
    expect(t).toEqual({ receivedOn: "2026-09-14", effectiveOn: "2026-10-14" });
    expect(daysBetweenYmd(t.receivedOn, t.effectiveOn)).toBe(30);
    expect(terminationDates("motif-defaut", MON).effectiveOn).toBe("2026-09-24");
  });

  it("sans motif : offres suspendues pendant le préavis, fin à la date calculée, historique ; annulation possible", async () => {
    const r = await giveNotice(A, { mode: "sans-motif", initiatedBy: "plateforme", reason: "Réorganisation du réseau", notify: true }, BY, "http://test.local", MON);
    expect(r).toEqual({ ok: true, effectiveOn: "2026-10-14", email: "simule" });
    let d = await readPartenaires();
    const rec = d.partners[A];
    expect(rec.termination).toMatchObject({ mode: "sans-motif", initiatedBy: "plateforme", receivedOn: "2026-09-14", effectiveOn: "2026-10-14", notice: { email: "simule" } });
    expect(rec.history.map((h) => h.action)).toContain("préavis de fin (30 jours) : fin le 2026-10-14");
    const inA = { id: A, createdAt: "2026-01-01T12:00:00.000Z" };
    const during = partnerBlockers(inA, { data: d, now: new Date("2026-10-13T15:00:00Z") });
    expect(during.map((b) => b.code)).toContain("preavis");
    expect(during.find((b) => b.code === "preavis")?.label).toBe("Préavis de fin : le partenariat prend fin le 14 octobre 2026 ; nouvelles offres suspendues");
    expect(endedOf(rec, new Date("2026-10-13T15:00:00Z"))).toBeNull();
    const after = new Date("2026-10-14T15:00:00Z");
    expect(partnerBlockers(inA, { data: d, now: after }).map((b) => b.code)).toContain("fin");
    expect((await loadBlockers(after))(inA).map((b) => b.code)).toContain("fin");
    expect(await settleTerminations(after)).toEqual([A]);
    d = await readPartenaires();
    expect(d.partners[A].ended?.at).toBe("2026-10-14T04:00:00.000Z");
    expect((await readGestion()).installers.find((i) => i.id === A)?.active).toBe(false);
    expect(await settleTerminations(after)).toEqual([]);

    await giveNotice(B, { mode: "sans-motif", initiatedBy: "partenaire", reason: "", notify: false }, BY, "http://test.local", MON);
    expect((await cancelNotice(B, "Entente maintenue", BY, MON)).ok).toBe(true);
    d = await readPartenaires();
    expect(terminationPhase(d.partners[B], MON)).toBe("annulee");
    expect(partnerBlockers({ id: B, createdAt: "2026-01-01T12:00:00.000Z" }, { data: d, now: MON }).map((b) => b.code)).not.toContain("preavis");
  });

  it("défaut non corrigé en 10 jours : fin confirmée par le propriétaire (jamais automatique) ; fin immédiate pour motif", async () => {
    await giveNotice(A, { mode: "motif-defaut", initiatedBy: "plateforme", reason: "Photos de fin de chantier manquantes", notify: false }, BY, "http://test.local", MON);
    expect((await confirmTermination(A, BY, new Date("2026-09-20T15:00:00Z"))).ok).toBe(false);
    const late = new Date("2026-09-25T15:00:00Z");
    let d = await readPartenaires();
    expect(terminationPhase(d.partners[A], late)).toBe("a-confirmer");
    expect(endedOf(d.partners[A], late)).toBeNull();
    expect((await confirmTermination(A, BY, late)).ok).toBe(true);
    d = await readPartenaires();
    expect(d.partners[A].ended?.reason).toBe("Photos de fin de chantier manquantes");

    const imm = await giveNotice(B, { mode: "motif-immediat", initiatedBy: "plateforme", reason: "Assurance annulée", notify: false }, BY, "http://test.local", MON);
    expect(imm.ok).toBe(true);
    d = await readPartenaires();
    expect(d.partners[B].ended).toMatchObject({ reason: "Assurance annulée" });
    expect((await giveNotice(B, { mode: "sans-motif", initiatedBy: "plateforme", reason: "x x x", notify: false }, BY, "http://test.local", MON)).ok).toBe(false);
    expect(mail.sendClientEmail).not.toHaveBeenCalled();
  });

  it("non-contournement : rappel en information (24 mois après la plus tardive de l'introduction et de la fin)", async () => {
    const job = (id: string, over: Partial<Job>): Job => ({ id, number: 1, createdAt: "2026-03-01T12:00:00.000Z", updatedAt: "x", client: { firstName: "T", lastName: "C", phone: "", email: "", address: "", city: "", postalCode: "" }, geo: null, region: null, regionGuess: null, brand: null, systemType: null, modelSlug: null, modelLabel: null, capacity: "", desiredDate: null, desiredWindow: "", installerNotes: "", internalNotes: "", status: "termine", assignedInstallerId: A, scheduledFor: null, completedAt: "2026-04-10T16:00:00.000Z", offers: [{ id: `o_${id.slice(2)}`, installerId: A, sentAt: "x", channels: { email: "envoye", sms: "envoye" }, tokenHash: "h", expiresAt: "x", distanceKm: 1, response: "accepte", respondedAt: "2026-03-02T12:00:00.000Z" }], audit: [], ...over });
    const nc = nonCircumvention([job("j_job0000001", {}), job("j_job0000002", { status: "planifie", completedAt: undefined })], A);
    expect(nc).toEqual({ clients: 2, ongoing: 1, until: "2028-04-10" });
    await mutatePartenaires(() => ({ result: null, changed: false }));
  });
});
