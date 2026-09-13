/* Versions, immuabilité, instantané accepté et empreinte, expiration, jetons, blocage de l'envoi. */
import { describe, expect, it } from "vitest";
import { distanceContractChecks, sendBlockers } from "../checklist";
import { defaultSettings } from "../defaults";
import { hashOf } from "../hash";
import {
  acceptVersion,
  buildDocument,
  canRespond,
  createQuote,
  draftOf,
  duplicateQuote,
  effectiveStatus,
  freezeForSend,
  QuoteError,
  recordView,
  refuseVersion,
  reviseQuote,
  updateDraft,
  verifyAcceptance,
} from "../quote";
import { findByToken, newToken, TOKEN_RE } from "../tokens";
import { computeTotals } from "../totals";
import type { SoumissionsData } from "../types";
import { fullSettings, line, machine, NOW, RATES, readyContent, TODAY } from "./fixtures";

const empty = (): SoumissionsData => ({ version: 1, counters: {}, quotes: [], photos: [] });

function sent(content = readyContent()) {
  const data = empty();
  const s = fullSettings();
  const q = createQuote(data, content, "proprio@exemple.ca", NOW);
  const v = q.versions[0];
  freezeForSend(q, v, s, [], NOW);
  return { data, s, q, v };
}

const codeOf = (fn: () => unknown) => {
  try {
    fn();
    return null;
  } catch (e) {
    return e instanceof QuoteError ? e.code : String(e);
  }
};

function acceptInput(v: ReturnType<typeof sent>["v"], selection = ["l_opt"]) {
  const doc = buildDocument({ number: "", versions: [v] } as never, v, null, []);
  const total = computeTotals(doc.content, selection, doc.taxes, TODAY).totalCents;
  return { selection, typedName: "  Camille   Exemple ", termsAccepted: true, ip: "203.0.113.7", userAgent: "Vitest/1.0", postedTotalCents: total, postedHash: v.contentHash, now: NOW };
}

describe("numérotation et versions", () => {
  it("numéros séquentiels par année", () => {
    const data = empty();
    const a = createQuote(data, readyContent(), "p", NOW);
    const b = createQuote(data, readyContent(), "p", NOW);
    const c = createQuote(data, readyContent(), "p", new Date("2027-01-05T15:00:00Z"));
    expect([a.number, b.number, c.number]).toEqual(["S-2026-0001", "S-2026-0002", "S-2027-0001"]);
  });

  it("un brouillon se modifie ; une version envoyée, jamais", () => {
    const data = empty();
    const q = createQuote(data, readyContent(), "p", NOW);
    const c2 = readyContent();
    c2.notes = "modifié";
    updateDraft(q, q.versions[0], c2, NOW);
    expect(q.versions[0].content.notes).toBe("modifié");
    freezeForSend(q, q.versions[0], fullSettings(), [], NOW);
    expect(codeOf(() => updateDraft(q, q.versions[0], readyContent(), NOW))).toBe("non-modifiable");
    expect(codeOf(() => freezeForSend(q, q.versions[0], fullSettings(), [], NOW))).toBe("non-modifiable");
  });

  it("révision : v1 reste valable tant que v2 n'est pas envoyée, puis elle est remplacée", () => {
    const { q, v, s } = sent();
    const v2 = reviseQuote(q, 1, "p", NOW, 30);
    expect(v2).toMatchObject({ v: 2, kind: "revision", basedOn: 1, status: "brouillon" });
    expect(v2.token).not.toBe(v.token);
    expect(canRespond(v, TODAY)).toBe(true);
    expect(codeOf(() => reviseQuote(q, 1, "p", NOW, 30))).toBe("brouillon-existant");
    freezeForSend(q, v2, s, [], NOW);
    expect(v.status).toBe("remplacee");
    expect(v.replacedBy).toBe(2);
    expect(codeOf(() => acceptVersion(q, v, acceptInput(v)))).toBe("remplacee");
  });

  it("copie : nouveau numéro, sans photos ni affaire Pipedrive", () => {
    const content = readyContent();
    content.placement.indoor[0].photos = ["p_aaaaaaaa11"];
    const { data, q } = sent(content);
    q.pipedrive.dealId = 12;
    const copy = duplicateQuote(data, q, 1, "p", NOW, 30);
    expect(copy.number).toBe("S-2026-0002");
    expect(copy.versions[0].status).toBe("brouillon");
    expect(copy.versions[0].content.placement.indoor[0].photos).toEqual([]);
    expect(copy.pipedrive.dealId).toBeNull();
    expect(copy.duplicatedFrom).toBe(q.number);
  });
});

describe("expiration", () => {
  it("date de validité dépassée : « expirée », acceptation impossible", () => {
    const { q, v } = sent();
    expect(effectiveStatus(v, v.content.validUntil)).toBe("envoyee");
    const after = new Date(`${v.content.validUntil}T12:00:00Z`);
    after.setUTCDate(after.getUTCDate() + 1);
    const day = after.toISOString().slice(0, 10);
    expect(effectiveStatus(v, day)).toBe("expiree");
    expect(canRespond(v, day)).toBe(false);
    expect(codeOf(() => acceptVersion(q, v, { ...acceptInput(v), now: after }))).toBe("expiree");
    expect(codeOf(() => refuseVersion(v, "", "ip", "ua", after))).toBe("expiree");
  });

  it("une version acceptée reste « acceptée » après sa date de validité", () => {
    const { q, v } = sent();
    acceptVersion(q, v, acceptInput(v));
    expect(effectiveStatus(v, "2030-01-01")).toBe("acceptee");
  });
});

describe("acceptation : instantané figé et empreinte", () => {
  it("consigne l'heure, la version, le total, les options, le nom, l'IP, le navigateur et l'empreinte", () => {
    const { q, v } = sent();
    const before = buildDocument(q, v, null, []);
    const a = acceptVersion(q, v, acceptInput(v));
    expect(a).toMatchObject({ at: NOW.toISOString(), version: 1, versionId: v.id, quoteNumber: "S-2026-0001", typedName: "Camille Exemple", ip: "203.0.113.7", userAgent: "Vitest/1.0", selectedOptionIds: ["l_opt"], termsAccepted: true });
    expect(a.selectedOptions).toEqual([{ id: "l_opt", label: "Support au sol", netCents: 25_000 }]);
    expect(a.snapshotHash).toMatch(/^[0-9a-f]{64}$/);
    expect(a.contentHash).toBe(v.contentHash);
    expect(a.snapshot.document).toEqual(before);
    expect(verifyAcceptance(a)).toBe(true);
    expect(v.status).toBe("acceptee");
  });

  it("l'instantané contient tout le document : chantier, emplacements, date, inclus, exclus, hypothèses, machine, rabais, textes", () => {
    const content = readyContent();
    content.site = { ...content.site, sameAsBilling: false, address: "22 chemin du Chalet", city: "Sutton", postalCode: "J0E 2K0", access: "Entrée par la ruelle" };
    content.discounts = [{ id: "d_q", reason: "Rabais de fin de saison", kind: "pourcentage", value: 5, expiresOn: "2026-09-30" }];
    content.lines[0].discount = { id: "d_l", reason: "Modèle de démonstration", kind: "montant", value: 20_000, expiresOn: null };
    const { q, v } = sent(content);
    const a = acceptVersion(q, v, acceptInput(v, []));
    const d = a.snapshot.document;
    expect(d.content.site).toMatchObject({ address: "22 chemin du Chalet", access: "Entrée par la ruelle" });
    expect(d.content.placement.indoor[0]).toMatchObject({ room: "Salon", wall: "Mur extérieur arrière", lineLength: 15, drain: "gravite" });
    expect(d.content.placement.outdoor).toMatchObject({ location: "Mur arrière", mounting: "support-mural" });
    expect(d.content.schedule).toMatchObject({ mode: "date", date: "2026-10-01", arrival: "Entre 8 h et 9 h" });
    expect(d.content.inclusions.length).toBeGreaterThan(0);
    expect(d.content.exclusions.map((i) => i.label)).toContain("Déneigement");
    expect(d.content.assumptions.length).toBeGreaterThan(0);
    expect(d.content.machine?.pairing?.ahri).toBe("123456789");
    expect(d.company).toMatchObject({ legalName: "Entreprise Exemple inc.", neq: "1234567890", rbq: "1234-5678-90" });
    expect(d.texts.terms).toBe("Texte validé (test).");
    // Totaux avec rabais : ligne (−200 $), puis 5 % sur 3 800 $ (−190 $), taxes sur 3 610 $.
    expect(a.snapshot.totals).toMatchObject({ grossCents: 400_000, lineDiscountsCents: 20_000, quoteDiscountsCents: 19_000, taxableCents: 361_000, tpsCents: 18_050, tvqCents: 36_010, totalCents: 415_060, logisvertCents: 150_000, clientPaysCents: 265_060 });
    expect(a.totalCents).toBe(415_060);
  });

  it("toute altération de l'instantané est détectée par l'empreinte", () => {
    const { q, v } = sent();
    const a = acceptVersion(q, v, acceptInput(v));
    const tampered = JSON.parse(JSON.stringify(a));
    tampered.snapshot.totals.totalCents -= 100;
    expect(verifyAcceptance(tampered)).toBe(false);
    const tampered2 = JSON.parse(JSON.stringify(a));
    tampered2.snapshot.document.content.exclusions = [];
    expect(verifyAcceptance(tampered2)).toBe(false);
  });

  it("réglages modifiés après l'envoi : le document et son empreinte ne bougent pas", () => {
    const { q, v, s } = sent();
    const hash = v.contentHash;
    s.company.legalName = "Autre nom";
    s.texts.terms = "Nouvelles conditions";
    const doc = buildDocument(q, v, s, []);
    expect(doc.company.legalName).toBe("Entreprise Exemple inc.");
    expect(doc.texts.terms).toBe("Texte validé (test).");
    expect(hashOf(doc)).toBe(hash);
  });

  it("refus d'accepter : conditions non cochées, nom incomplet, total ou document changés", () => {
    const { q, v } = sent();
    expect(codeOf(() => acceptVersion(q, v, { ...acceptInput(v), termsAccepted: false }))).toBe("conditions");
    expect(codeOf(() => acceptVersion(q, v, { ...acceptInput(v), typedName: "Camille" }))).toBe("nom");
    expect(codeOf(() => acceptVersion(q, v, { ...acceptInput(v), postedTotalCents: 1 }))).toBe("total-change");
    expect(codeOf(() => acceptVersion(q, v, { ...acceptInput(v), postedHash: "0".repeat(64) }))).toBe("document-change");
    v.content.lines[0].unitPriceCents = 1; // modification directe du fichier après l'envoi
    expect(codeOf(() => acceptVersion(q, v, { ...acceptInput(v), postedTotalCents: null }))).toBe("integrite");
    expect(v.status).toBe("envoyee");
    expect(v.acceptance).toBeNull();
  });

  it("version acceptée : ni refus, ni seconde acceptation ; une modification crée un avenant et l'acceptée reste intacte", () => {
    const { q, v, s } = sent();
    const a = acceptVersion(q, v, acceptInput(v));
    const frozen = JSON.stringify(v);
    expect(codeOf(() => acceptVersion(q, v, acceptInput(v)))).toBe("acceptee");
    expect(codeOf(() => refuseVersion(v, "", "ip", "ua", NOW))).toBe("acceptee");
    expect(codeOf(() => updateDraft(q, v, readyContent(), NOW))).toBe("non-modifiable");
    const av = reviseQuote(q, 1, "p", NOW, 30);
    expect(av.kind).toBe("avenant");
    av.content.lines.push(line("l_new", { label: "Pompe à condensat", unitPriceCents: 30_000 }));
    freezeForSend(q, av, s, [], NOW);
    expect(v.status).toBe("acceptee");
    expect(JSON.stringify(v)).toBe(frozen);
    expect(verifyAcceptance(a)).toBe(true);
    expect(draftOf(q)).toBeUndefined();
  });
});

describe("consultation", () => {
  it("compte chaque vue ; « envoyée » devient « ouverte » à la première", () => {
    const { v } = sent();
    expect(recordView(v, NOW)).toEqual({ first: true });
    const later = new Date(NOW.getTime() + 60_000);
    expect(recordView(v, later)).toEqual({ first: false });
    expect(v.views).toEqual({ count: 2, firstAt: NOW.toISOString(), lastAt: later.toISOString() });
    expect(v.status).toBe("ouverte");
  });
});

describe("jetons", () => {
  it("256 bits aléatoires, 43 caractères, tous différents, sans lien avec l'identifiant", () => {
    const set = new Set(Array.from({ length: 2000 }, () => newToken()));
    expect(set.size).toBe(2000);
    for (const t of [...set].slice(0, 50)) expect(t).toMatch(TOKEN_RE);
    const { q, v } = sent();
    expect(v.token).not.toContain(q.id.slice(2));
    expect(v.token).not.toContain(q.number);
  });

  it("seul le jeton exact ouvre la version", () => {
    const { data, v, q } = sent();
    expect(findByToken(data, v.token)?.version.id).toBe(v.id);
    const flipped = v.token.slice(0, -1) + (v.token.endsWith("A") ? "B" : "A");
    for (const bad of [flipped, "", "../../etc/passwd", v.id, q.id, q.number, v.token + "x", v.token.slice(1)]) expect(findByToken(data, bad)).toBeNull();
  });
});

describe("envoi bloqué tant que tout n'est pas rempli", () => {
  it("identité légale manquante : envoi bloqué, avec la liste des champs", () => {
    const blockers = sendBlockers(readyContent(), defaultSettings(), TODAY, RATES).map((b) => b.id);
    expect(blockers).toEqual(expect.arrayContaining(["legalName", "neq", "rbq", "address", "phone", "email", "tps", "tvq"]));
  });

  it("textes de l'avocat encore à compléter : simple avertissement, l'envoi n'est pas bloqué", () => {
    const s = fullSettings();
    s.texts.terms = "[À COMPLÉTER PAR L’AVOCAT OU LE NOTAIRE]";
    s.texts.cancellation = "";
    const ids = sendBlockers(readyContent(s), s, TODAY, RATES).map((b) => b.id);
    expect(ids).not.toContain("texte-cancellation");
    expect(ids).not.toContain("texte-terms");
  });

  it("champs requis : emplacement de chaque unité, date, inclus, exclus, machine, raison des rabais, LogisVert", () => {
    const s = fullSettings();
    const ids = (mut: (c: ReturnType<typeof readyContent>) => void) => {
      const c = readyContent(s);
      mut(c);
      return sendBlockers(c, s, TODAY, RATES).map((b) => b.id);
    };
    expect(ids((c) => (c.placement.indoor[0].room = ""))).toEqual([expect.stringMatching(/^unite-/)]);
    expect(ids((c) => (c.placement.indoor[0].drain = ""))).toHaveLength(1);
    expect(ids((c) => (c.placement.indoor = []))).toContain("interieur");
    expect(ids((c) => (c.placement.outdoor.mounting = ""))).toEqual(["exterieur"]);
    expect(ids((c) => (c.schedule.mode = ""))).toEqual(["date"]);
    expect(ids((c) => Object.assign(c.schedule, { mode: "fenetre", windowStart: "2026-10-05", windowEnd: "2026-10-01" }))).toEqual(["date"]);
    expect(ids((c) => Object.assign(c.schedule, { mode: "fenetre", windowStart: "2026-10-05", windowEnd: "2026-10-16" }))).toEqual([]);
    expect(ids((c) => (c.inclusions = []))).toEqual(["inclus"]);
    expect(ids((c) => (c.exclusions = []))).toEqual(["exclus"]);
    expect(ids((c) => (c.machine = null))).toEqual(expect.arrayContaining(["machine", "logisvert"]));
    expect(ids((c) => (c.machine = machine({ pairing: null, offList: false })))).toEqual(expect.arrayContaining(["jumelage", "logisvert"]));
    expect(ids((c) => (c.discounts = [{ id: "d_1", reason: " ", kind: "montant", value: 100, expiresOn: null }]))).toEqual(["rabais-raison"]);
    expect(ids((c) => (c.validUntil = "2026-09-11"))).toEqual(["validite"]);
    expect(ids((c) => (c.client.email = "pas-un-courriel"))).toEqual(["client-courriel"]);
  });

  it("soumission et réglages complets : rien ne bloque ; contrat à distance au complet", () => {
    const s = fullSettings();
    expect(sendBlockers(readyContent(s), s, TODAY, RATES)).toEqual([]);
    expect(distanceContractChecks(readyContent(s), s, TODAY, RATES).every((i) => i.ok)).toBe(true);
    expect(distanceContractChecks(readyContent(s), defaultSettings(), TODAY, RATES).filter((i) => !i.ok).map((i) => i.id)).toEqual(["lpc-identite", "lpc-paiement", "lpc-annulation", "lpc-garanties"]);
  });
});
