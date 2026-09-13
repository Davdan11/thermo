/* Entente : gabarit sans texte juridique, texte canonique et empreinte, validation « texte final », état de la
   signature d'un partenaire (délai de grâce, re-signature après une nouvelle version), citation d'une clause. */
import { describe, expect, it } from "vitest";
import { agreementHash, agreementState, canonicalText, citationSentence, finalTextProblems, findClause, placeholderRefs, sha256Text, TEMPLATE_TITLES, templateArticles } from "../agreement";
import { emptyPartenaires } from "../store";
import { PLACEHOLDER, type AgreementVersion, type PartenairesData, type SignedAgreement } from "../types";

const DAY = 86_400_000;
const T0 = new Date("2026-09-01T12:00:00Z");

function version(number: number, over: Partial<AgreementVersion> = {}): AgreementVersion {
  return {
    id: `a_version000${number}`,
    number,
    title: "Entente de partenariat — installateurs",
    preamble: "",
    articles: [
      { title: "Objet", paragraphs: ["Texte de test, article un."] },
      { title: "Photos", paragraphs: ["Premier paragraphe de test.", "Deuxième paragraphe de test."] },
    ],
    status: "publiee",
    createdAt: T0.toISOString(),
    createdBy: "proprio@exemple.ca",
    updatedAt: T0.toISOString(),
    updatedBy: "proprio@exemple.ca",
    validatedAt: T0.toISOString(),
    publishedAt: T0.toISOString(),
    graceDays: 14,
    ...over,
  };
}

function signature(v: AgreementVersion, installerId: string, at: Date): SignedAgreement {
  return {
    id: `s_sig${v.number}${installerId.slice(-6)}`,
    installerId,
    requestId: "r_request0001",
    versionId: v.id,
    versionNumber: v.number,
    signedAt: at.toISOString(),
    company: "Climatisation Exemple",
    signerName: "Julie Exemple",
    signerTitle: "Présidente",
    authorized: true,
    accepted: true,
    method: "nom",
    proof: { ip: "203.0.113.5", userAgent: "test", textSha256: agreementHash(v) },
    signedText: canonicalText(v),
    copies: { partner: "simule", owner: [] },
  };
}

const data = (over: Partial<PartenairesData>): PartenairesData => ({ ...emptyPartenaires(), ...over });

describe("gabarit de l'entente", () => {
  it("11 articles prévus, aucun texte juridique : chaque paragraphe est à rédiger par l'avocat", () => {
    const arts = templateArticles();
    expect(arts.map((a) => a.title)).toEqual([...TEMPLATE_TITLES]);
    expect(TEMPLATE_TITLES).toContain("Commission de 10 % avant taxes");
    expect(arts.every((a) => a.paragraphs.length === 1 && a.paragraphs[0] === PLACEHOLDER)).toBe(true);
  });

  it("la validation « texte final » est refusée tant qu'une marque de l'avocat reste", () => {
    const draft = { title: "Entente", preamble: "", articles: templateArticles() };
    expect(placeholderRefs(draft)).toHaveLength(11);
    expect(finalTextProblems(draft).join(" ")).toMatch(/Texte de l’avocat manquant : 1\.1, 2\.1/);
    const partial = { ...draft, articles: draft.articles.map((a, i) => ({ ...a, paragraphs: i ? a.paragraphs : ["Texte fourni."] })) };
    expect(placeholderRefs(partial)).not.toContain("1.1");
    expect(finalTextProblems(version(1))).toEqual([]);
    // Variante avec apostrophe droite : aussi détectée.
    expect(placeholderRefs({ preamble: "", articles: [{ title: "x", paragraphs: ["[À rédiger par l'avocat]"] }] })).toEqual(["1.1"]);
  });
});

describe("texte canonique et empreinte", () => {
  it("paragraphes numérotés « article.paragraphe », empreinte SHA-256 du texte exact", () => {
    const v = version(1);
    const text = canonicalText(v);
    expect(text).toContain("Article 2 — Photos\n2.1 Premier paragraphe de test.\n2.2 Deuxième paragraphe de test.");
    expect(agreementHash(v)).toBe(sha256Text(text));
    expect(agreementHash(v)).toMatch(/^[0-9a-f]{64}$/);
  });

  it("un seul caractère change l'empreinte ; les fins de ligne ne la changent pas", () => {
    const v = version(1);
    const changed = version(1, { articles: [{ title: "Objet", paragraphs: ["Texte de test, article un!"] }, v.articles[1]] });
    expect(agreementHash(changed)).not.toBe(agreementHash(v));
    const crlf = version(1, { articles: [{ title: "Objet", paragraphs: ["Texte de test, article un."] }, { title: "Photos", paragraphs: ["Premier paragraphe de test.\r\n", "Deuxième paragraphe de test."] }] });
    expect(agreementHash(crlf)).toBe(agreementHash(v));
  });

  it("citation d'une clause : « Selon l'article 2.2 de l'entente … signée le … »", () => {
    const clause = findClause(version(1), "2.2")!;
    expect(clause.text).toBe("Deuxième paragraphe de test.");
    expect(findClause(version(1), "9.9")).toBeNull();
    const s = citationSentence(clause, "3 septembre 2026", "Merci de corriger.");
    expect(s).toMatch(/^Selon l’article 2\.2 de l’entente de partenariat signée le 3 septembre 2026 \(« Photos »\) : « Deuxième paragraphe de test\. »/);
    expect(s.endsWith("Merci de corriger.")).toBe(true);
  });
});

describe("état de la signature d'un partenaire", () => {
  const before = { id: "i_ancien00001", createdAt: new Date(T0.getTime() - 30 * DAY).toISOString() };
  const after = { id: "i_nouveau0001", createdAt: new Date(T0.getTime() + DAY).toISOString() };

  it("aucune version publiée : rien ne bloque", () => {
    const st = agreementState(before, data({ agreements: [version(1, { status: "validee", publishedAt: undefined })] }), T0);
    expect(st).toMatchObject({ code: "aucune-version", blocking: false });
  });

  it("nouveau partenaire (ajouté après la publication) : bloqué tout de suite, sans délai de grâce", () => {
    const st = agreementState(after, data({ agreements: [version(1)] }), new Date(T0.getTime() + 2 * DAY));
    expect(st).toMatchObject({ code: "non-envoyee", blocking: true, graceUntil: null });
  });

  it("partenaire déjà en place : délai de grâce, puis blocage", () => {
    const d = data({ agreements: [version(1)] });
    const inGrace = agreementState(before, d, new Date(T0.getTime() + 13 * DAY));
    expect(inGrace).toMatchObject({ code: "non-envoyee", blocking: false });
    expect(inGrace.graceUntil).toBe(new Date(T0.getTime() + 14 * DAY).toISOString());
    expect(agreementState(before, d, new Date(T0.getTime() + 15 * DAY)).blocking).toBe(true);
  });

  it("envoyée puis ouverte, puis signée", () => {
    const v = version(1);
    const req = { id: "r_request0001", installerId: after.id, versionId: v.id, tokenHash: "x", previousHashes: [], createdAt: T0.toISOString(), createdBy: "p", sends: [{ at: T0.toISOString(), by: "p", kind: "envoi" as const, email: "simule" as const, sms: "simule" as const }], openCount: 0 };
    expect(agreementState(after, data({ agreements: [v], requests: [req] }), T0).code).toBe("envoyee");
    expect(agreementState(after, data({ agreements: [v], requests: [{ ...req, openedAt: T0.toISOString(), openCount: 1 }] }), T0).code).toBe("ouverte");
    const signed = agreementState(after, data({ agreements: [v], requests: [{ ...req, signatureId: "s_x" }], signatures: [signature(v, after.id, T0)] }), T0);
    expect(signed).toMatchObject({ code: "signee", blocking: false });
  });

  it("nouvelle version publiée : tous doivent re-signer (délai de grâce), l'ancienne signature reste citable", () => {
    const v1 = version(1, { status: "remplacee" });
    const v2Published = new Date(T0.getTime() + 60 * DAY);
    const v2 = version(2, { id: "a_version0002", publishedAt: v2Published.toISOString(), graceDays: 10 });
    const sig = signature(v1, after.id, new Date(T0.getTime() + 2 * DAY));
    const d = data({ agreements: [v1, v2], signatures: [sig] });
    const st = agreementState(after, d, new Date(v2Published.getTime() + 5 * DAY));
    expect(st).toMatchObject({ code: "a-resigner", blocking: false });
    expect(st.lastSignature?.id).toBe(sig.id);
    expect(st.version?.number).toBe(2);
    expect(agreementState(after, d, new Date(v2Published.getTime() + 11 * DAY)).blocking).toBe(true);
  });
});
