/* Blocages des offres (fonction pure partnerBlockers) : entente, licence RBQ, assurance, fin de partenariat. */
import { describe, expect, it } from "vitest";
import { agreementHash, canonicalText } from "../agreement";
import { partnerBlockers } from "../blockers";
import { docState } from "../compliance";
import { emptyPartenaires, emptyPartner } from "../store";
import type { AgreementVersion, PartenairesData } from "../types";

const NOW = new Date("2026-09-20T15:00:00Z"); // 11 h, heure de Montréal
const inst = { id: "i_install0001", createdAt: "2026-01-10T12:00:00.000Z" };

const v1: AgreementVersion = {
  id: "a_version0001",
  number: 1,
  title: "Entente",
  preamble: "",
  articles: [{ title: "Objet", paragraphs: ["Texte de test."] }],
  status: "publiee",
  createdAt: "2026-02-01T12:00:00.000Z",
  createdBy: "p",
  updatedAt: "2026-02-01T12:00:00.000Z",
  updatedBy: "p",
  validatedAt: "2026-02-01T12:00:00.000Z",
  publishedAt: "2026-02-01T12:00:00.000Z",
  graceDays: 14,
};

function signedData(): PartenairesData {
  const d = emptyPartenaires();
  d.agreements.push(v1);
  d.signatures.push({ id: "s_sig0000001", installerId: inst.id, requestId: "r_x0000001", versionId: v1.id, versionNumber: 1, signedAt: "2026-02-03T12:00:00.000Z", company: "Clim", signerName: "A B", signerTitle: "Président", authorized: true, accepted: true, method: "nom", proof: { ip: "x", userAgent: "x", textSha256: agreementHash(v1) }, signedText: canonicalText(v1), copies: { partner: "simule", owner: [] } });
  const p = emptyPartner(inst.id);
  p.compliance.rbq.expiresOn = "2027-05-01";
  p.compliance.assurance.expiresOn = "2027-01-31";
  d.partners[inst.id] = p;
  return d;
}

describe("partnerBlockers", () => {
  it("entente signée, RBQ et assurance valides : aucune raison de bloquer", () => {
    expect(partnerBlockers(inst, { data: signedData(), now: NOW })).toEqual([]);
  });

  it("licence RBQ expirée (hier) : bloqué, avec la date", () => {
    const d = signedData();
    d.partners[inst.id].compliance.rbq.expiresOn = "2026-09-19";
    const b = partnerBlockers(inst, { data: d, now: NOW });
    expect(b.map((x) => x.code)).toEqual(["rbq"]);
    expect(b[0].label).toMatch(/Licence RBQ expirée le 19 septembre 2026/);
  });

  it("assurance valide jusqu'à aujourd'hui inclus : pas encore bloqué (« expire bientôt »)", () => {
    const d = signedData();
    d.partners[inst.id].compliance.assurance.expiresOn = "2026-09-20";
    expect(partnerBlockers(inst, { data: d, now: NOW })).toEqual([]);
    expect(docState({ expiresOn: "2026-09-20" }, NOW, 30)).toBe("bientot");
    d.partners[inst.id].compliance.assurance.expiresOn = "2026-09-19";
    expect(partnerBlockers(inst, { data: d, now: NOW }).map((x) => x.code)).toEqual(["assurance"]);
  });

  it("date non saisie : averti seulement, sauf si le réglage l'exige", () => {
    const d = signedData();
    d.partners[inst.id].compliance.rbq.expiresOn = null;
    expect(partnerBlockers(inst, { data: d, now: NOW })).toEqual([]);
    d.settings.blockWhenMissing = true;
    expect(partnerBlockers(inst, { data: d, now: NOW }).map((x) => x.code)).toEqual(["rbq"]);
  });

  it("entente en vigueur non signée (après le délai de grâce) : bloqué", () => {
    const d = signedData();
    d.signatures = [];
    const b = partnerBlockers(inst, { data: d, now: NOW });
    expect(b.map((x) => x.code)).toEqual(["entente"]);
    expect(b[0].label).toBe("Entente (version 1) non signée");
  });

  it("fin de partenariat décidée par le propriétaire : bloqué", () => {
    const d = signedData();
    d.partners[inst.id].ended = { at: "2026-09-10T12:00:00.000Z", by: "p", reason: "test" };
    expect(partnerBlockers(inst, { data: d, now: NOW }).map((x) => x.code)).toEqual(["fin"]);
  });
});
