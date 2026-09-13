/* Conformité C3 — entente maître tirée d'une trousse FICTIVE : articles et numéros de l'avocat, parties, annexes,
   renvois internes ; validation (identité de la plateforme, champs propres) ; envoi bloqué tant qu'il reste des
   crochets, champs de l'installateur remplis à l'envoi, signataire à la signature ; document signé avec annexes ;
   citation avec les nouveaux numéros ; rétrocompatibilité des versions et signatures existantes. Aucun envoi réel. */
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const mail = vi.hoisted(() => ({ sendClientEmail: vi.fn(async () => true) }));
vi.mock("@/lib/crm/email", async (orig) => ({ ...(await orig<typeof import("@/lib/crm/email")>()), sendClientEmail: mail.sendClientEmail }));
const sms = vi.hoisted(() => ({ sendSms: vi.fn(async () => "envoye" as const) }));
vi.mock("@/lib/gestion/sms", async (orig) => ({ ...(await orig<typeof import("@/lib/gestion/sms")>()), sendSms: sms.sendSms }));

import { savePlatformIdentity } from "@/lib/plateforme/identite";
import { parseTrousse, saveTrousse } from "@/lib/plateforme/trousse";
import { mutateGestion } from "../../store";
import { agreementHash, canonicalText, crossRefs, finalTextProblems, listClauses, signatureHash } from "../agreement";
import { renderSignedDocument } from "../document";
import { agreementFromTrousse } from "../entente-trousse";
import { saveIdentity } from "../identity";
import { citationPreview, createDraftFromTrousse, getSigningView, publishVersion, saveCompliance, saveLegalForm, saveVersionFields, sendAgreement, signAgreement, signedDocumentForToken, validateVersion } from "../service";
import { emptyPartenaires, readPartenaires } from "../store";
import type { AgreementVersion, SignedAgreement } from "../types";
import { FICTIVE_TROUSSE, installer, PLATFORM, testEnv } from "./fixtures-c3";

const env = process.env;
let dir: string;
const BY = "proprio@exemple.ca";
const BASE = "http://test.local";
const T0 = new Date("2026-09-14T15:00:00Z");
const T1 = new Date("2026-09-15T15:00:00Z");
const INST = "i_climexe0001";
const tokenOf = (link: string) => link.split("/entente/")[1];

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-c3-entente-"));
  process.env = { ...env, ...testEnv(dir, BY) };
  vi.clearAllMocks();
  await mutateGestion((g) => {
    g.installers.push(installer(INST, "Climatisation Exemple", new Date(T0.getTime() - 86_400_000)));
    return { result: null, changed: true };
  });
});
afterEach(async () => {
  process.env = env;
  await rm(dir, { recursive: true, force: true });
});

describe("version tirée de la trousse (fictive)", () => {
  it("parties, préambule, articles 2.1 à 2.3 avec les numéros de l'avocat, annexes A à E, signatures ; renvois justes", () => {
    const b = agreementFromTrousse({ ...parseTrousse(FICTIVE_TROUSSE), importedAt: null, importedBy: null });
    if (!b.ok) throw new Error(b.error);
    const a = b.value;
    expect(a.title).toBe("Entente fictive de test");
    expect(a.headerNote).toBe("PROJET FICTIF");
    expect(a.headings).toEqual({ parties: "Entre les parties", preamble: "Préambule", signatures: "Signatures" });
    expect(a.parties.map((p) => p.party)).toEqual(["plateforme", null, "partenaire", null]);
    expect(a.preamble).toBe("Premier considérant fictif.\n\nSecond considérant fictif.");
    expect(a.articles.map((x) => [x.number, x.title, x.paragraphs.length])).toEqual([
      ["2.1", "Objet fictif", 2],
      ["2.2", "Avis fictifs", 1],
      ["2.3", "Fin fictive", 2],
    ]);
    expect(a.annexes.map((x) => x.letter)).toEqual(["A", "B", "C", "D", "E"]);
    const [A, B, C, D, E] = a.annexes;
    expect(A.form).toBe(true);
    expect(A.table).toEqual([["Champ", "Valeur"], ["Identifiant", "[ID UNIQUE]"], ["Montant", "[MONTANT] $"]]);
    expect(A.sections).toEqual([{ title: "Formule", paragraphs: ["Commission fictive = [prix fictif]."] }]);
    expect(B.table).toHaveLength(3);
    expect(B.table[0]).toEqual(["Document", "Exigence", "Contrôle"]);
    expect(C.checklist).toEqual(["Premier point fictif du chantier.", "Deuxième point fictif du chantier.", "Troisième point fictif du chantier."]);
    expect(D.table).toHaveLength(3);
    expect(E.table).toHaveLength(2);
    expect(E.paragraphs).toEqual(["Paragraphe fictif final sur les seuils."]);
    expect(a.signatureBlock).toEqual({ platformLabel: "Pour la société fictive", partnerLabel: "Pour le partenaire fictif", notes: ["Note fictive sur la preuve."] });

    const v = { title: a.title, number: 1, preamble: a.preamble, articles: a.articles, parties: a.parties, annexes: a.annexes };
    expect(crossRefs(v).map((r) => `${r.kind}:${r.target}:${r.ok}`)).toEqual(["article:2.3:true", "annexe:C:true", "annexe:B:true"]);
    // Un article retiré : le renvoi qui y menait est signalé et bloque la validation.
    const broken = { ...v, articles: a.articles.filter((x) => x.number !== "2.3") };
    expect(finalTextProblems(broken)).toContain("Renvoi à l’article 2.3 introuvable (article 2.1).");
    // Numéro en double ou manquant : refusé.
    expect(finalTextProblems({ ...v, articles: [...a.articles, { ...a.articles[0] }] }).join(" ")).toMatch(/Numéro d’article en double : 2\.1/);
    expect(finalTextProblems({ ...v, articles: [...a.articles, { title: "Sans numéro", paragraphs: ["x"] }] }).join(" ")).toMatch(/Chaque article doit porter son numéro/);
  });
});

describe("de la trousse à la signature", () => {
  it("validation (identité, champs propres), envoi bloqué puis rempli, signature, document avec annexes, citation", async () => {
    await saveTrousse(parseTrousse(FICTIVE_TROUSSE), "test", T0);
    const c = await createDraftFromTrousse(BY, T0);
    if (!c.ok) throw new Error(c.error);
    expect((await createDraftFromTrousse(BY, T0)).ok).toBe(false); // un seul brouillon à la fois

    // Identité de la plateforme incomplète : validation refusée.
    const noId = await validateVersion(c.id, BY, T0);
    expect(!noId.ok && noId.error).toMatch(/Identité de la plateforme incomplète/);
    await savePlatformIdentity(PLATFORM, BY, T0);
    // Champ propre à l'entente encore vide : refusé, avec le champ en clair.
    const noDistrict = await validateVersion(c.id, BY, T0);
    expect(!noDistrict.ok && noDistrict.error).toMatch(/Champs de la plateforme à remplir : \[DISTRICT\]/);
    expect((await saveVersionFields(c.id, { district: "Laval" }, BY, T0)).ok).toBe(true);
    expect((await validateVersion(c.id, BY, T0)).ok).toBe(true);
    expect((await publishVersion(c.id, 14, BY, T0)).ok).toBe(true);

    const v = (await readPartenaires()).agreements[0];
    expect(v.platformFill?.["RAISON SOCIALE DE LA PLATEFORME"]).toBe("Entreprise Exemple inc.");
    const text = canonicalText(v);
    expect(text).toContain("Entreprise Exemple inc., société fictive, au 1, rue Exemple, Laval (Québec) H0H 0H0, NEQ 1234567890, représentée par Alex Exemple, Président.");
    expect(text).toContain("Avis fictif au juridique@exemple.ca, tribunal fictif de Laval.");
    expect(text).toContain("Article 2.3 — Fin fictive\nPréavis fictif de trente jours, selon l’annexe B.");
    expect(text).toContain("Annexe C — Liste fictive\n- Premier point fictif du chantier.");
    expect(v.textSha256).toBe(agreementHash(v));

    // Envoi bloqué : fiche du partenaire incomplète.
    const s1 = await sendAgreement(INST, BY, BASE, T1);
    expect(!s1.ok && s1.error).toMatch(/Identité légale à saisir/);
    await saveIdentity(INST, { legalName: "Climatisation Exemple inc.", tradeName: "", neq: "2234567890", address: "2, rue Test", city: "Laval", postalCode: "H7N 1A1", phone: "514 555-0142", email: "info@clim.exemple.ca", tps: "", tvq: "" }, BY, T1);
    const s2 = await sendAgreement(INST, BY, BASE, T1);
    expect(!s2.ok && s2.error).toMatch(/Champs entre crochets à remplir avant l’envoi : .*\[FORME JURIDIQUE\].*\[NUMÉRO ET SOUS-CATÉGORIES\]/);
    await saveLegalForm(INST, "société par actions", BY, T1);
    await saveCompliance(INST, "rbq", { number: "5678-1234-01", issuer: "", coverage: "", expiresOn: "2027-12-31", subcategories: "15.10, 15.9" }, BY, T1);
    // Identité de la plateforme devenue incomplète : envoi bloqué (même avec une version validée).
    await savePlatformIdentity({ neq: "" }, BY, T1);
    const s3 = await sendAgreement(INST, BY, BASE, T1);
    expect(!s3.ok && s3.error).toMatch(/Identité de la plateforme incomplète/);
    await savePlatformIdentity({ neq: PLATFORM.neq }, BY, T1);

    const sent = await sendAgreement(INST, BY, BASE, T1);
    if (!sent.ok) throw new Error(sent.error);
    const req = (await readPartenaires()).requests[0];
    expect(req.partnerFill).toEqual({
      "RAISON SOCIALE DE L’INSTALLATEUR": "Climatisation Exemple inc.",
      "FORME JURIDIQUE": "société par actions",
      ADRESSE: "2, rue Test, Laval, H7N 1A1",
      NEQ: "2234567890",
      "NUMÉRO ET SOUS-CATÉGORIES": "5678-1234-01 (sous-catégories 15.9, 15.10)",
    });

    const token = tokenOf(sent.link);
    const view = await getSigningView(token);
    if (view.state !== "a-signer") throw new Error(view.state);
    expect(view.resolved.parties[2].text).toBe("Climatisation Exemple inc., société par actions, au 2, rue Test, Laval, H7N 1A1, NEQ 2234567890, licence RBQ 5678-1234-01 (sous-catégories 15.9, 15.10), représentée par [NOM ET TITRE].");
    expect(view.resolved.missing).toMatchObject({ platform: [], partner: [], signing: ["NOM ET TITRE"] });

    const at = new Date(T1.getTime() + 3_600_000);
    const signed = await signAgreement(token, { name: "Julie Exemple", title: "Présidente", authorized: true, accepted: true, method: "nom", textSha256: view.textSha256 }, { ip: "203.0.113.7", userAgent: "test", baseUrl: BASE }, at);
    expect(signed.ok).toBe(true);
    const sig = (await readPartenaires()).signatures[0];
    expect(sig.signedText).toContain("licence RBQ 5678-1234-01 (sous-catégories 15.9, 15.10), représentée par Julie Exemple, Présidente.");
    expect(sig.signedText).toContain("Pour le partenaire fictif : Julie Exemple, Présidente, signature électronique du 2026-09-15 16:00 UTC");
    expect(sig.signedText).toContain("Pour la société fictive : Alex Exemple, Président");
    expect(sig.signedText.slice(0, sig.signedText.indexOf("Premier considérant fictif."))).not.toMatch(/\[/);
    expect(sig.proof.textSha256).toBe(signatureHash(v, sig));
    expect(sig.proof.presentedSha256).toBe(view.textSha256);
    expect(sig.partnerFill).toEqual(req.partnerFill);

    // Document signé : intact, parties, annexes et deux blocs de signature.
    const html = (await signedDocumentForToken(token))!;
    expect(html).not.toContain("ne correspond plus");
    expect(html).toContain("Annexe C");
    expect(html).toContain("Deuxième point fictif du chantier.");
    expect(html).toContain("Règle fictive deux.");
    expect(html).toContain("Pour le partenaire fictif");
    expect(html).toContain("Climatisation Exemple inc., société par actions");

    // Citation : numéros de l'avocat, texte tel que signé.
    const c1 = await citationPreview(INST, "2.1.1", "Merci.");
    expect(c1.ok && c1.sentence).toMatch(/^Selon l’article 2\.1, 1er alinéa de l’entente de partenariat signée le .+ \(« Objet fictif »\) : « Alinéa fictif un, voir l’article 2\.3 et l’annexe C\. »/);
    const c2 = await citationPreview(INST, "2.2.1", "");
    expect(c2.ok && c2.sentence).toMatch(/^Selon l’article 2\.2 de l’entente .* « Avis fictif au juridique@exemple\.ca, tribunal fictif de Laval\. »$/);
    const c3 = await citationPreview(INST, "C.2", "");
    expect(c3.ok && c3.sentence).toMatch(/^Selon l’annexe C, point 2 de l’entente .* « Deuxième point fictif du chantier\. »$/);
    expect(listClauses(v).some((x) => x.articleNumber === "Annexe A")).toBe(false); // gabarit : jamais cité

    expect(mail.sendClientEmail).not.toHaveBeenCalled();
    expect(sms.sendSms).not.toHaveBeenCalled();
  });
});

describe("rétrocompatibilité", () => {
  const legacy: AgreementVersion = {
    id: "a_version0001",
    number: 1,
    title: "Entente de partenariat — installateurs",
    preamble: "Préambule de test.",
    articles: [
      { title: "Objet", paragraphs: ["Texte de test, 1.1."] },
      { title: "Photos", paragraphs: ["Texte de test, 2.1.", "Texte de test, 2.2."] },
    ],
    status: "publiee",
    createdAt: "2026-02-01T12:00:00.000Z",
    createdBy: "p",
    updatedAt: "2026-02-01T12:00:00.000Z",
    updatedBy: "p",
    validatedAt: "2026-02-01T12:00:00.000Z",
    publishedAt: "2026-02-01T12:00:00.000Z",
  };

  it("une version existante produit exactement l'ancien texte canonique (même empreinte)", () => {
    expect(canonicalText(legacy)).toBe("Entente de partenariat — installateurs\nVersion 1\n\nPréambule de test.\n\nArticle 1 — Objet\n1.1 Texte de test, 1.1.\n\nArticle 2 — Photos\n2.1 Texte de test, 2.1.\n2.2 Texte de test, 2.2.\n");
    expect(listClauses(legacy).map((c) => [c.ref, c.label])).toEqual([
      ["1.1", "article 1.1"],
      ["2.1", "article 2.1"],
      ["2.2", "article 2.2"],
    ]);
  });

  it("une signature existante (sans valeurs de l'installateur) reste intacte et lisible dans le document", () => {
    const sig: SignedAgreement = { id: "s_sig0000001", installerId: INST, requestId: "r_x0000001", versionId: legacy.id, versionNumber: 1, signedAt: "2026-02-03T12:00:00.000Z", company: "Clim", signerName: "A B", signerTitle: "Président", authorized: true, accepted: true, method: "nom", proof: { ip: "x", userAgent: "x", textSha256: agreementHash(legacy) }, signedText: canonicalText(legacy), copies: { partner: "simule", owner: [] } };
    expect(signatureHash(legacy, sig)).toBe(sig.proof.textSha256);
    const html = renderSignedDocument({ sig, version: legacy, company: null, signatureDataUrl: null });
    expect(html).not.toContain("ne correspond plus");
    expect(html).toContain("<b>2.2</b>Texte de test, 2.2.");
    expect(emptyPartenaires().settings.requirements.minLiability).toBe(2_000_000);
  });
});
