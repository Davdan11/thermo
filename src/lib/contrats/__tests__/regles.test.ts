/* Conformité C1 — règles pures du contrat (critères 8.4 de la trousse), avec une trousse FICTIVE courte :
   avis de jumelage, contrat final (identité, RBQ, portée, prix, jetons), paiement à l'installateur (acompte par carte
   seulement), blocages de l'approbation, étape du client (aucune signature avant l'approbation), preuve vérifiable,
   avenants, base de commission, intérêts, disponibilités, engagements, document du client sans acceptation. */
import { describe, expect, it } from "vitest";
import { emptyPlatformIdentity } from "@/lib/plateforme/identite";
import { emptyTrousse, parseTrousse, type TrousseData } from "@/lib/plateforme/trousse";
import { interestCents, interestDays, interestInfo } from "@/lib/gestion/commissions/interets";
import { computePerformance } from "@/lib/gestion/partenaires/performance";
import { DEFAULT_PARTNER_SETTINGS } from "@/lib/gestion/partenaires/types";
import { hashOf, sha256Hex } from "@/lib/soumissions/hash";
import { divRound } from "@/lib/soumissions/money";
import { acceptVersion, buildDocument, createQuote, freezeForSend, QuoteError } from "@/lib/soumissions/quote";
import type { SoumissionsData } from "@/lib/soumissions/types";
import { contractorIdentity, fullSettings, NOW, RATES, readyContent, TODAY } from "@/lib/soumissions/__tests__/fixtures";
import { renderDoc } from "@/lib/soumissions/__tests__/render-doc";
import { availabilityFor, offerable, periodOf, sortByAvailability } from "../disponibilites";
import { installmentAmounts, normalizePaymentProfile, paymentProblems } from "../paiement";
import { defaultRbqRules, knownSubcategories } from "../rbq";
import {
  applyDateChoice,
  approvalBlockers,
  approvalInputError,
  avenantAmounts,
  avenantProblems,
  canClientSign,
  clientStage,
  commitmentStats,
  contractNetBaseCents,
  executionAllowed,
  renderSigned,
  signatureSnapshot,
  verifyContract,
  type ApprovalContext,
} from "../regles";
import { buildContract, buildNotice, contractChanges, contractTotals, renderContractBody, type ContractInput } from "../rendu";
import type { Avenant, ContractInstaller, Dossier, PaymentProfile, Proposal, SentContract } from "../types";
import { IDENTITE_FICTIVE, TROUSSE_FICTIVE } from "./trousse-fictive";

const T: TrousseData = { ...parseTrousse(TROUSSE_FICTIVE), importedAt: "2026-09-01T12:00:00.000Z", importedBy: "test" };
const INSTALLER: ContractInstaller = { ...contractorIdentity(), rbqSubcategories: ["15.10"] };
const PAY: PaymentProfile = normalizePaymentProfile({
  methods: ["carte", "virement"],
  schedule: [
    { id: "v1", label: "Acompte", when: "signature", percent: 20, methods: ["carte"] },
    { id: "v2", label: "Solde", when: "fin-travaux", percent: 80, methods: ["carte", "virement"] },
  ],
});

function input(over: Partial<ContractInput> = {}): ContractInput {
  const c = readyContent();
  return { quoteNumber: "S-2026-0001", versionId: "v_test0001", v: 1, trousse: T, platform: IDENTITE_FICTIVE, installer: INSTALLER, client: c.client, site: { sameAsBilling: true, address: "", city: "", postalCode: "" }, project: c, selection: ["l_opt"], taxes: RATES, payment: PAY, legalWarranty: null, changes: [], comparedWith: 1, dateStatus: "confirmee", ...over };
}
const renderOf = (doc: ReturnType<typeof buildContract>["doc"]) => renderContractBody({ doc, client: doc.client, site: doc.site, selection: doc.selection, totals: contractTotals(doc, doc.selection, TODAY), signature: null });

describe("avis de jumelage (3.1)", () => {
  it("phrases de la trousse remplies, case obligatoire ; consignes écartées", () => {
    const { notice, problems } = buildNotice(T, IDENTITE_FICTIVE);
    expect(problems).toEqual([]);
    expect(notice?.paragraphs).toHaveLength(2);
    expect(notice?.paragraphs[0]).toContain("Plateforme Exemple inc.");
    expect(notice?.paragraphs[1]).toContain("service@exemple.ca");
    expect(notice?.paragraphs.join(" ")).not.toContain("Consigne");
    expect(notice?.checkbox).toContain("Je demande le jumelage fictif");
  });

  it("trousse absente, identité incomplète ou champ entre crochets vide : bloqué, message clair", () => {
    expect(buildNotice(emptyTrousse(), IDENTITE_FICTIVE).problems.join(" ")).toContain("Trousse contractuelle non importée");
    expect(buildNotice(T, emptyPlatformIdentity()).problems.join(" ")).toContain("Identité de l’entreprise incomplète");
    const t2 = { ...parseTrousse(TROUSSE_FICTIVE.replace("écrivez à [COURRIEL].", "écrivez à [COURRIEL] ou [CHAMP INCONNU].")), importedAt: null, importedBy: null };
    expect(buildNotice(t2, IDENTITE_FICTIVE).problems).toContain("Champ entre crochets à remplir : [CHAMP INCONNU]");
  });
});

describe("contrat final au nom de l'installateur", () => {
  it("identité et RBQ visibles, portée et prix, sous-sections 3.2 remplies, 4 confirmations, aucun jeton restant", () => {
    const { doc, problems } = buildContract(input());
    expect(problems).toEqual([]);
    expect(doc.number).toBe("S-2026-0001-C1");
    expect(doc.sections.map((s) => s.title)).toEqual(["Identification", "Paiement", "Annulation"]);
    expect(doc.confirmations).toHaveLength(4);
    expect(doc.confirmations[2]).toContain("Installations Exemple inc. est l’entrepreneur et Plateforme Exemple inc. l’intermédiaire");
    const html = renderOf(doc);
    for (const x of ["Installations Exemple inc.", "1234-5678-90", "sous-catégories 15.10", "NEQ 1234567890", "TPS 123456789 RT0001", "Installation murale complète", "Support au sol", "Intermédiaire fictif : Plateforme Exemple inc.", "Écrire à installations@exemple.ca", "Préparé par ThermopompesAVendre.ca", "Camille Exemple"]) expect(html).toContain(x);
    expect(html).not.toMatch(/\[[A-ZÀ-Ü][A-ZÀ-Ü ’',.-]+\]/);
    expect(html).not.toContain("Consigne du modèle");
  });

  it("bénéficiaire = l'installateur ; tout acompte avant les travaux par carte de crédit seulement", () => {
    const { doc } = buildContract(input());
    expect(doc.payment.beneficiary).toBe("Installations Exemple inc.");
    expect(renderOf(doc)).toContain("Bénéficiaire : Installations Exemple inc.");
    expect(paymentProblems(PAY)).toEqual([]);
    const interac = normalizePaymentProfile({ ...PAY, methods: ["carte", "interac"], schedule: [{ ...PAY.schedule[0], methods: ["interac"] }, PAY.schedule[1]] });
    expect(paymentProblems(interac).join(" ")).toContain("carte de crédit seulement");
    const mixed = normalizePaymentProfile({ ...PAY, schedule: [{ ...PAY.schedule[0], methods: ["carte", "virement"] }, PAY.schedule[1]] });
    expect(paymentProblems(mixed).join(" ")).toContain("carte de crédit seulement");
    expect(paymentProblems(normalizePaymentProfile({ ...PAY, schedule: [PAY.schedule[1]] })).join(" ")).toContain("80 %");
    expect(paymentProblems(null).join(" ")).toContain("à saisir");
    const amounts = installmentAmounts(PAY.schedule, 123_457);
    expect(amounts.reduce((s, a) => s + a.cents, 0)).toBe(123_457);
    expect(amounts[0]).toMatchObject({ beforeWork: true, methods: ["Carte de crédit"] });
  });

  it("bloqué si un champ entre crochets reste vide, si l'identité ou le paiement est incomplet", () => {
    const t2 = { ...parseTrousse(TROUSSE_FICTIVE.replace("selon l’échéancier du test.", "selon l’échéancier du test et [CHAMP INCONNU].")), importedAt: null, importedBy: null };
    expect(buildContract(input({ trousse: t2 })).problems).toContain("Champ entre crochets à remplir : [CHAMP INCONNU]");
    expect(buildContract(input({ installer: { ...INSTALLER, rbqSubcategories: [] } })).problems.join(" ")).toContain("sous-catégories RBQ de l’installateur");
    expect(buildContract(input({ platform: emptyPlatformIdentity() })).problems.join(" ")).toContain("Identité de l’entreprise incomplète");
    expect(buildContract(input({ payment: null })).problems.join(" ")).toContain("échéancier");
  });

  it("différences avec la soumission : nouvelle date et prix, mis en évidence", () => {
    const before = readyContent();
    const after = applyDateChoice({ ...before, lines: before.lines.map((l) => (l.id === "l_forfait" ? { ...l, unitPriceCents: 420_000 } : l)) }, { kind: "autre", mode: "date", date: "2026-10-20", windowStart: "", windowEnd: "", note: "" });
    const changes = contractChanges({ content: before, selection: ["l_opt"] }, { content: after, selection: ["l_opt"] }, RATES, TODAY);
    expect(changes.find((x) => x.kind === "date")).toMatchObject({ before: "le 1er octobre 2026", after: "le 20 octobre 2026" });
    expect(changes.some((x) => x.kind === "prix" && x.label === "Total, taxes comprises")).toBe(true);
    const { doc } = buildContract(input({ project: after, changes, dateStatus: "proposee" }));
    const html = renderOf(doc);
    expect(html).toContain("ctd-when is-new");
    expect(html).toContain("Changements par rapport à la version 1");
    expect(contractChanges({ content: before, selection: ["l_opt"] }, { content: before, selection: ["l_opt"] }, RATES, TODAY)).toEqual([]);
  });
});

describe("approbation de l'installateur", () => {
  const ctx = (over: Partial<ApprovalContext> = {}): ApprovalContext => ({ partnerBlockers: [], compliance: { rbq: "valide", assurance: "valide" }, identity: contractorIdentity(), known: { codes: ["15.10"], fromRegistry: [], fromFiche: ["15.10"] }, rules: defaultRbqRules(), project: readyContent(), payment: PAY, paymentBlock: null, contractProblems: [], ...over });

  it("tout en règle : aucun blocage (les suggestions RBQ restent désactivées)", () => {
    expect(defaultRbqRules().every((r) => !r.active && r.status === "a-confirmer")).toBe(true);
    expect(defaultRbqRules().find((r) => r.work === "refrigeration")?.anyOf).toEqual(["15.10", "15.9"]);
    expect(approvalBlockers(ctx())).toEqual([]);
    expect(approvalBlockers(ctx({ known: { codes: ["16"], fromRegistry: [], fromFiche: ["16"] } }))).toEqual([]);
  });

  it("licence, catégorie ou assurance expirée ou manquante : approbation impossible", () => {
    expect(approvalBlockers(ctx({ partnerBlockers: [{ code: "rbq", label: "Licence RBQ expirée le 31 août 2026" }] }))).toContain("Licence RBQ expirée le 31 août 2026");
    expect(approvalBlockers(ctx({ partnerBlockers: [{ code: "assurance", label: "Assurance responsabilité expirée le 1 septembre 2026" }] }))[0]).toContain("Assurance");
    expect(approvalBlockers(ctx({ partnerBlockers: [{ code: "rbq-registre", label: "Licence RBQ suspendue selon la RBQ" }] }))[0]).toContain("suspendue");
    expect(approvalBlockers(ctx({ compliance: { rbq: "manquante", assurance: "valide" } })).join(" ")).toContain("date d’expiration à saisir");
    const rules = defaultRbqRules().map((r) => (r.work === "refrigeration" ? { ...r, active: true } : r));
    expect(approvalBlockers(ctx({ rules, known: { codes: ["16"], fromRegistry: [], fromFiche: ["16"] } })).join(" ")).toContain("Sous-catégorie RBQ manquante");
    expect(approvalBlockers(ctx({ rules, known: { codes: ["15.9"], fromRegistry: ["15.9"], fromFiche: [] } }))).toEqual([]);
    expect(approvalBlockers(ctx({ known: { codes: [], fromRegistry: [], fromFiche: [] } })).join(" ")).toContain("Sous-catégories RBQ de l’installateur inconnues");
    expect(approvalBlockers(ctx({ identity: contractorIdentity({ legalName: "", neq: "" }) })).join(" ")).toContain("Identité légale de l’installateur incomplète");
    expect(approvalBlockers(ctx({ paymentBlock: "facture COM-2026-0001 en retard" })).join(" ")).toContain("Offres en pause");
  });

  it("sous-catégories connues : registre (licence active seulement) et fiche", () => {
    const v = { outcome: "active", subcategories: ["15.10 Systèmes de réfrigération"] } as unknown as Parameters<typeof knownSubcategories>[0];
    expect(knownSubcategories(v, { codes: ["16"], note: "", updatedAt: "", updatedBy: "" }).codes).toEqual(["15.10", "16"]);
    expect(knownSubcategories({ ...v!, outcome: "introuvable" }, null).codes).toEqual([]);
  });

  it("la date fait partie de l'approbation : confirmer, ou proposer une autre date valide", () => {
    const base = { name: "Alex Exemple", title: "Président", authorized: true };
    expect(approvalInputError({ ...base, dateChoice: null }, TODAY)).toBe("date");
    expect(approvalInputError({ ...base, dateChoice: { kind: "confirme" } }, TODAY)).toBeNull();
    expect(approvalInputError({ ...base, dateChoice: { kind: "autre", mode: "date", date: "2026-09-01", windowStart: "", windowEnd: "", note: "" } }, TODAY)).toBe("date-invalide");
    expect(approvalInputError({ ...base, authorized: false, dateChoice: { kind: "confirme" } }, TODAY)).toBe("autorise");
    expect(approvalInputError({ ...base, name: "Alex", dateChoice: { kind: "confirme" } }, TODAY)).toBe("nom");
  });
});

describe("étape du client : jamais de signature avant l'approbation de l'installateur", () => {
  const prop = (status: Proposal["status"]): Proposal => ({ id: "pr_test00001", installerId: "i_exemple0001", company: "X", via: "direct", jobId: null, versionId: "v1", v: 1, tokenHashes: [], createdAt: "2026-09-12T00:00:00Z", createdBy: "p", status, messages: [], approval: null, sends: [], views: { count: 0, firstAt: null, lastAt: null } });
  const contract = (status: SentContract["status"]) => ({ id: "cs_1", versionId: "v1", status } as SentContract);
  const d = (proposals: Proposal[], contracts: SentContract[] = []) => ({ proposals, contracts }) as Pick<Dossier, "proposals" | "contracts">;

  it("estimation → recherche → confirmation → finalisation → contrat → signé", () => {
    const o = { jumelage: false, offerOpen: false };
    expect(clientStage(undefined, "v1", o)).toBe("estimation");
    expect(clientStage(undefined, "v1", { ...o, jumelage: true })).toBe("recherche");
    expect(clientStage(d([prop("en-attente")]), "v1", o)).toBe("confirmation");
    expect(clientStage(d([]), "v1", { ...o, offerOpen: true })).toBe("confirmation");
    expect(clientStage(d([prop("refusee")]), "v1", { ...o, jumelage: true })).toBe("finalisation");
    expect(clientStage(d([prop("changements")]), "v1", o)).toBe("finalisation");
    expect(clientStage(d([prop("approuvee")], [contract("a-signer")]), "v1", o)).toBe("contrat");
    expect(clientStage(d([prop("approuvee")], [contract("signe")]), "v1", o)).toBe("signe");
    expect(clientStage(d([prop("approuvee")], [contract("annule")]), "v1", o)).toBe("finalisation");
    for (const s of ["estimation", "recherche", "confirmation", "finalisation", "signe", "refuse"] as const) expect(canClientSign(s)).toBe(false);
    expect(canClientSign("contrat")).toBe(true);
  });
});

describe("preuve de signature vérifiable", () => {
  it("empreintes recalculées ; toute modification du contrat ou de l'instantané est détectée", () => {
    const { doc } = buildContract(input());
    const totals = contractTotals(doc, ["l_opt"], TODAY);
    const base0 = { at: "2026-09-12T16:00:00.000Z", typedName: "Camille Exemple", ip: "203.0.113.7", userAgent: "Vitest", confirmations: doc.confirmations, client: { ...doc.client, phone: "514 555-0000" }, site: doc.site, selection: ["l_opt"], totals, approvedSha256: hashOf(doc), trousse: doc.trousse };
    const withRendered = { ...base0, renderedSha256: sha256Hex(renderSigned(doc, base0)) };
    const signature = { ...withRendered, snapshotSha256: hashOf(signatureSnapshot(doc, withRendered)) };
    expect(verifyContract({ doc, signature }, hashOf(doc)).ok).toBe(true);
    expect(renderSigned(doc, base0)).toContain("514 555-0000");
    const tampered = structuredClone(doc);
    tampered.project.lines[0].unitPriceCents += 1;
    expect(verifyContract({ doc: tampered, signature }, hashOf(doc)).ok).toBe(false);
    expect(verifyContract({ doc, signature: { ...signature, typedName: "Autre Nom" } }, hashOf(doc)).ok).toBe(false);
  });
});

describe("avenants et commission", () => {
  const draft = { reason: "Mur de béton", added: "Percement dans le béton", removed: "", lines: [{ label: "Percement béton", amountCents: 20_000 }], scheduleEffect: "aucun" };

  it("prix avant taxes, taxes, nouveau total ; un retrait réduit le total", () => {
    expect(avenantAmounts([{ label: "a", amountCents: 50_000 }, { label: "b", amountCents: -10_000 }], RATES, 100_000)).toEqual({ priceBeforeTaxCents: 40_000, tpsCents: 2_000, tvqCents: 3_990, deltaTotalCents: 45_990, newTotalCents: 145_990 });
    expect(avenantAmounts([{ label: "r", amountCents: -20_000 }], RATES, 100_000)).toMatchObject({ tpsCents: -1_000, tvqCents: -1_995 });
  });

  it("aucun extra sans avenant signé avant l'exécution", () => {
    expect(avenantProblems(null, "attribue", draft).join(" ")).toContain("contrat signé");
    expect(avenantProblems({ status: "signe" }, "termine", draft).join(" ")).toContain("AVANT");
    expect(avenantProblems({ status: "signe" }, "attribue", { ...draft, reason: "", scheduleEffect: "" })).toHaveLength(2);
    expect(avenantProblems({ status: "signe" }, "planifie", draft)).toEqual([]);
    expect(executionAllowed({ status: "a-signer", clientSignature: null })).toBe(false);
    expect(executionAllowed({ status: "signe", clientSignature: { at: "", typedName: "x y", ip: "", userAgent: "", contentSha256: "" } })).toBe(true);
  });

  it("base : prix net final avec les avenants SIGNÉS, sans taxes ni LogisVert ; contrat annulé : rien", () => {
    const { doc } = buildContract(input());
    const totals = contractTotals(doc, ["l_opt"], TODAY);
    expect(totals.taxableCents).toBe(425_000);
    expect(totals.logisvertCents).toBe(150_000);
    const c = { status: "signe", doc, signature: { totals } } as unknown as SentContract;
    const av = (status: Avenant["status"], cents: number, contractNumber = doc.number) => ({ status, content: { contractNumber, priceBeforeTaxCents: cents } }) as Avenant;
    expect(contractNetBaseCents(c, [av("signe", 50_000), av("a-signer", 30_000), av("signe", 10_000, "S-2026-0009-C1"), av("refuse", 5_000)])).toBe(475_000);
    expect(contractNetBaseCents({ ...c, status: "annule" }, [])).toBe(0);
  });

  it("intérêts : 18 % par an, simples, au jour, à compter de l'échéance ; aucun avant, aucun après paiement", () => {
    const inv = { status: "emise" as const, dueAt: "2026-10-10T03:59:59.000Z", totalCents: 51_164 };
    const now = new Date(Date.parse(inv.dueAt) + 12 * 86_400_000 + 3_600_000);
    expect(interestDays(inv, now)).toBe(12);
    expect(interestCents(inv, now)).toBe(divRound(51_164 * 18 * 12, 36_500));
    expect(interestCents(inv, now)).toBe(303);
    expect(interestInfo(inv, now)).toMatchObject({ days: 12, cents: 303, totalWithInterestCents: 51_467 });
    expect(interestCents(inv, new Date(Date.parse(inv.dueAt) - 1000))).toBe(0);
    expect(interestInfo(inv, new Date(Date.parse(inv.dueAt) + 3_600_000))).toBeNull();
    expect(interestCents({ ...inv, status: "payee" }, now)).toBe(0);
  });
});

describe("disponibilités dans la période voulue", () => {
  const slot = (day: string, installerId = "i_a") => ({ id: `s_${day}`, installerId, day, start: "08:00", end: "12:00", createdAt: "", createdBy: "" });
  it("créneau publié : disponible ; agenda plein : complet ; sinon inconnu (jamais deviné)", () => {
    const period = periodOf({ mode: "fenetre", date: "", windowStart: "2026-10-05", windowEnd: "2026-10-09" });
    expect(period).toEqual({ start: "2026-10-05", end: "2026-10-09" });
    expect(periodOf({ mode: "", date: "", windowStart: "", windowEnd: "" })).toBeNull();
    const ctx = { slots: [slot("2026-10-06")], availability: null, jobs: [], today: TODAY };
    expect(availabilityFor("i_a", period, ctx).kind).toBe("disponible");
    expect(availabilityFor("i_b", period, ctx).kind).toBe("inconnue");
    const full = { slots: [], availability: { days: [], weeklyCapacity: 1, note: "" }, jobs: [{ id: "j_1", status: "planifie", assignedInstallerId: "i_c", scheduledFor: "2026-10-07", slotId: undefined }], today: TODAY } as unknown as Parameters<typeof availabilityFor>[2];
    expect(availabilityFor("i_c", period, full).kind).toBe("complet");
    expect(availabilityFor("i_c", period, { ...full, jobs: [] }).kind).toBe("disponible");
    const order = sortByAvailability([{ k: "complet" }, { k: "inconnue" }, { k: "disponible" }] as const, (x) => x.k);
    expect(order.map((x) => x.k)).toEqual(["disponible", "inconnue", "complet"]);
    expect(offerable("complet", period)).toBe(false);
    expect(offerable("inconnue", period)).toBe(true);
    expect(offerable("complet", null)).toBe(true);
  });
});

describe("engagements comptés dans la performance", () => {
  it("désistement après acceptation et date confirmée ratée : comptés comme retards", () => {
    const { doc } = buildContract(input());
    const past = { ...doc, project: { ...doc.project, schedule: { ...doc.project.schedule, mode: "date" as const, date: "2026-09-01" } } };
    const dossiers = [
      { jobId: "j_1", contracts: [{ installerId: "i_a", status: "annule", cancellation: { cause: "desistement" }, doc } as unknown as SentContract] },
      { jobId: "j_2", contracts: [{ installerId: "i_a", status: "signe", doc: past } as unknown as SentContract] },
    ];
    const jobs = [{ id: "j_2", status: "attribue" }];
    expect(commitmentStats("i_a", dossiers, jobs, {}, TODAY)).toEqual({ withdrawals: 1, missedDates: 1 });
    expect(commitmentStats("i_a", dossiers, jobs, { j_2: { enRoute: { at: "x" } } }, TODAY)).toEqual({ withdrawals: 1, missedDates: 0 });
    const perf = computePerformance("i_a", { jobs: [], records: {}, tickets: [], settings: DEFAULT_PARTNER_SETTINGS, now: NOW, commitments: { withdrawals: 1, missedDates: 1 } });
    expect(perf.punctuality).toEqual({ n: 0, of: 2, rate: 0 });
    expect(perf.commitments).toEqual({ withdrawals: 1, missedDates: 1 });
  });
});

describe("document du client avant l'approbation : soumission complète, aucune acceptation", () => {
  it("avis 3.1, « Je veux aller de l'avant », « Signer » verrouillé ; ni acceptation ni commande", () => {
    const data: SoumissionsData = { version: 1, counters: {}, quotes: [], photos: [] };
    const q = createQuote(data, readyContent(), "p", NOW, { contractorId: null });
    const v = q.versions[0];
    const { notice } = buildNotice(T, IDENTITE_FICTIVE);
    freezeForSend(q, v, fullSettings(), [], NOW, null, notice);
    const doc = buildDocument(q, v, null, []);
    expect(doc.parcours).toBe("trousse");
    const html = renderDoc(doc, ["l_opt"]);
    for (const x of ["Estimation détaillée et demande de jumelage", "Je veux aller de l’avant", "Je demande le jumelage fictif", "La signature sera disponible", "Contrat final à signer", "Installation murale complète", "Support au sol", "Choisi à l’étape 2"]) expect(html).toContain(x);
    for (const x of ["Accepter la soumission", "Soumission acceptée", "Travaux réalisés par"]) expect(html).not.toContain(x);
    expect(html).not.toMatch(/(^|[^a-zà-ÿ])commande/i); // « télécommande » (inclusion) n'est pas une commande
    expect(html).not.toMatch(/(^|[^a-zà-ÿ])contrat d’installation/i);
    expect(() => acceptVersion(q, v, { selection: [], typedName: "Camille Exemple", termsAccepted: true, ip: "x", userAgent: "x", now: NOW })).toThrow(QuoteError);
  });
});
