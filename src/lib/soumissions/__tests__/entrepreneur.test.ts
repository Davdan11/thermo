/* Entrepreneur qui réalise les travaux : envoi bloqué sans installateur, avec une identité incomplète, une licence RBQ
   ou une assurance expirée (le message dit quoi compléter et où) ; identité copiée dans la soumission à l'envoi
   (instantané), jamais touchée par un changement ultérieur de la fiche. Courriel et texto simulés. */
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const mail = vi.hoisted(() => ({ sendClientEmail: vi.fn(async (..._args: unknown[]) => true) }));
vi.mock("@/lib/crm/email", () => mail);
vi.mock("@/lib/gestion/sms", () => ({ sendSms: vi.fn(async () => "envoye"), smsConfigured: () => false }));

import { mutatePartenaires } from "@/lib/gestion/partenaires/store";
import { contractorChecks, sendBlockers } from "../checklist";
import { loadContractor } from "../contractors";
import { hashOf } from "../hash";
import { createQuote, verifyAcceptance } from "../quote";
import { getClientView, respondToQuote, sendQuoteService, type RespondInput } from "../service";
import { mutateSettings, mutateSoumissions, readSoumissions } from "../store";
import { computeTotals } from "../totals";
import { contractorIdentity, fullSettings, INSTALLER_ID, NO_CONTRACTOR, pick, RATES, readyContent, TODAY } from "./fixtures";
import { seedPartner } from "./partner-fixtures";
// Conformité C1 : trousse fictive et identité de la plateforme, préalables de tout envoi.
import { seedPlateforme } from "@/lib/contrats/__tests__/trousse-fictive";

const env = process.env;
let dir: string;
const BASE = "http://localhost:3001";
const NOW = new Date(`${TODAY}T15:00:00Z`);
const BY = "proprio@exemple.ca";

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-entrepreneur-"));
  process.env = { ...env, GESTION_DATA_DIR: dir, TEXTOS_DATA_DIR: dir, ADMIN_EMAILS: BY, NODE_ENV: "test" };
  delete process.env.PIPEDRIVE_API_TOKEN;
  mail.sendClientEmail.mockClear();
  vi.stubGlobal("fetch", vi.fn(async () => new Response("{}", { status: 500 })));
  await mutateSettings((s) => {
    Object.assign(s, fullSettings());
    return { result: null, changed: true };
  });
  await seedPlateforme(); // Conformité C1
});

afterEach(async () => {
  vi.unstubAllGlobals();
  process.env = env;
  await rm(dir, { recursive: true, force: true });
});

const draft = (contractorId: string | null = INSTALLER_ID, content = readyContent()) =>
  mutateSoumissions((d) => ({ result: createQuote(d, content, BY, NOW, { contractorId }).id, changed: true }));

describe("liste de vérification de l'entrepreneur", () => {
  const s = fullSettings();
  const ids = (p: Parameters<typeof sendBlockers>[4]) => sendBlockers(readyContent(s), s, TODAY, RATES, p);

  it("aucun installateur choisi : bloqué", () => {
    expect(ids(NO_CONTRACTOR).map((b) => b.id)).toEqual(["entrepreneur"]);
    expect(ids({ id: INSTALLER_ID, status: null })[0]).toMatchObject({ id: "entrepreneur", label: expect.stringContaining("introuvable") });
  });

  it("identité incomplète : bloqué, avec les champs à compléter et la fiche où le faire", () => {
    const [b] = ids(pick({ missing: ["raison sociale", "licence RBQ"] }));
    expect(b).toMatchObject({ id: "entrepreneur-identite", href: `/gestion/partenaires/${INSTALLER_ID}#identite` });
    expect(b.hint).toContain("raison sociale, licence RBQ");
  });

  it("licence RBQ ou assurance expirée : bloqué, avec la date et la section « Conformité »", () => {
    const [rbq] = ids(pick({ rbq: { state: "expiree", expiresOn: "2026-08-31" } }));
    expect(rbq).toMatchObject({ id: "entrepreneur-rbq", href: `/gestion/partenaires/${INSTALLER_ID}#conformite` });
    expect(rbq.label).toContain("Licence RBQ");
    expect(rbq.label).toContain("expirée le");
    expect(rbq.hint).toContain("Conformité");
    const [ins] = ids(pick({ assurance: { state: "expiree", expiresOn: "2026-09-01" } }));
    expect(ins).toMatchObject({ id: "entrepreneur-assurance" });
    expect(ins.label).toContain("Assurance responsabilité");
  });

  it("date d'expiration à saisir : avertissement, ou blocage si le réglage des partenaires l'exige", () => {
    expect(ids(pick({ rbq: { state: "manquante", expiresOn: null } }))).toEqual([]);
    const warn = contractorChecks(pick({ rbq: { state: "manquante", expiresOn: null } })).find((i) => i.id === "entrepreneur-rbq");
    expect(warn).toMatchObject({ ok: false, severity: "avertissement" });
    expect(ids(pick({ rbq: { state: "manquante", expiresOn: null }, blockWhenMissing: true })).map((b) => b.id)).toEqual(["entrepreneur-rbq"]);
  });

  it("partenariat terminé : bloqué ; identité transmise par le partenaire non vérifiée : avertissement seulement", () => {
    expect(ids(pick({ ended: true })).map((b) => b.id)).toEqual(["entrepreneur-fin"]);
    expect(ids(pick({ verified: false, source: "partenaire", submittedAt: "2026-09-10T12:00:00.000Z" }))).toEqual([]);
    expect(contractorChecks(pick({ verified: false, source: "partenaire", submittedAt: null })).find((i) => i.id === "entrepreneur-verifie")).toMatchObject({ severity: "avertissement", ok: false });
  });
});

describe("état calculé depuis la fiche du partenaire", () => {
  it("champs manquants de l'identité, licence RBQ de la conformité, dates d'expiration", async () => {
    await seedPartner({ identity: { neq: "", tps: "" }, rbqExpires: "2026-09-01" });
    const c = await loadContractor(INSTALLER_ID, NOW);
    expect(c?.status.missing).toEqual(["NEQ", "TPS"]);
    expect(c?.status.rbq).toEqual({ state: "expiree", expiresOn: "2026-09-01" });
    expect(c?.status.assurance.state).toBe("valide");
    expect(c?.identity.rbq).toBe("1234-5678-90");
    await seedPartner({ identity: null });
    expect((await loadContractor(INSTALLER_ID, NOW))?.status.missing).toEqual(expect.arrayContaining(["raison sociale", "NEQ", "adresse complète", "téléphone", "courriel", "TPS", "TVQ"]));
    expect(await loadContractor("pas-un-id", NOW)).toBeNull();
  });
});

describe("envoi", () => {
  // Conformité C1, parcours B : sans installateur, la soumission part (estimation non contraignante, aucun entrepreneur nommé).
  it("sans installateur choisi : la soumission part au client, avec l'avis de jumelage et sans entrepreneur", async () => {
    const id = await draft(null);
    const r = await sendQuoteService(id, BY, BASE, { sms: false }, NOW);
    expect(r.ok).toBe(true);
    if (r.ok) expect(r.installer).toBeUndefined();
    const v = (await readSoumissions()).quotes[0].versions[0];
    expect(v.status).toBe("envoyee");
    expect(v.frozen?.parcours).toBe("trousse");
    expect(v.frozen?.contractor).toBeUndefined();
    expect(v.frozen?.notice?.checkbox).toContain("jumelage fictif");
    expect(mail.sendClientEmail).toHaveBeenCalledTimes(1);
  });

  it("licence RBQ expirée : bloqué, le message dit quoi compléter et où", async () => {
    await seedPartner({ rbqExpires: "2026-09-01" });
    const r = await sendQuoteService(await draft(), BY, BASE, { sms: false }, NOW);
    expect(r.ok).toBe(false);
    if (!r.ok) {
      expect(r.blockers?.map((b) => b.id)).toEqual(["entrepreneur-rbq"]);
      expect(r.error).toContain("Licence RBQ");
      expect(r.error).toContain("Conformité");
    }
    expect(mail.sendClientEmail).not.toHaveBeenCalled();
  });

  it("assurance expirée ou identité incomplète : bloqué", async () => {
    await seedPartner({ insuranceExpires: "2026-09-11" });
    const a = await sendQuoteService(await draft(), BY, BASE, { sms: false }, NOW);
    expect(!a.ok && a.blockers?.map((b) => b.id)).toEqual(["entrepreneur-assurance"]);
    await seedPartner({ identity: { legalName: "", tvq: "" } });
    const b = await sendQuoteService(await draft(), BY, BASE, { sms: false }, NOW);
    expect(!b.ok && b.blockers?.map((x) => x.id)).toEqual(["entrepreneur-identite"]);
    if (!b.ok) expect(b.error).toContain("raison sociale, TVQ");
    expect(mail.sendClientEmail).not.toHaveBeenCalled();
  });
});

describe("instantané de l'identité de l'entrepreneur", () => {
  it("copiée à l'envoi ; un changement ultérieur de la fiche ne touche ni le document ni son empreinte", async () => {
    await seedPartner();
    const id = await draft();
    const sent = await sendQuoteService(id, BY, BASE, { sms: false }, NOW);
    expect(sent.ok).toBe(true);
    const v = (await readSoumissions()).quotes[0].versions[0];
    expect(v.frozen?.contractor).toEqual(contractorIdentity());
    expect(v.contractorId).toBe(INSTALLER_ID);

    // Conformité C1 : le courriel présente la marque qui prépare la soumission ; l'entrepreneur n'est nommé qu'au contrat final.
    const html = String(mail.sendClientEmail.mock.calls[0][2]);
    expect(html).not.toContain("Installations Exemple inc.");
    expect(html).toContain("préparée par");

    await mutatePartenaires((d) => {
      d.partners[INSTALLER_ID].identity!.legalName = "Nom Changé inc.";
      d.partners[INSTALLER_ID].compliance.rbq.number = "9999-9999-99";
      return { result: null, changed: true };
    });
    const view = await getClientView(v.token, NOW);
    if (view.state !== "ok") throw new Error("vue invalide");
    expect(view.doc.contractor?.legalName).toBe("Installations Exemple inc.");
    expect(view.doc.contractor?.rbq).toBe("1234-5678-90");
    expect(hashOf(view.doc)).toBe(v.contentHash);

    const total = computeTotals(view.doc.content, ["l_opt"], view.doc.taxes, TODAY).totalCents;
    const input: RespondInput = { selection: ["l_opt"], typedName: "Camille Exemple", termsAccepted: true, reason: "", message: "", postedTotalCents: total, postedHash: view.contentHash, ip: "203.0.113.7", userAgent: "Vitest" };
    // Conformité C1 : aucune acceptation directe (le client signe le contrat de l'installateur, après son approbation).
    expect(await respondToQuote(v.token, "accepter", input, BASE, NOW)).toMatchObject({ ok: false, code: "jumelage" });
    expect((await readSoumissions()).quotes[0].versions[0].acceptance).toBeNull();
    void verifyAcceptance;
  });
});
