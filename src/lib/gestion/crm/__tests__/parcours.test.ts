/* Refonte R2 — parcours en 12 étapes : correspondance (parcours du contrat C1 compris : jumelage, proposition, prêt à
   signer, signé), étape manuelle, pertes (raison structurée et motif automatique), « qui doit agir » dans tous les cas,
   tâche de délai, rétrocompatibilité de crm.json et de la prévision, portée des vendeurs, portail sans donnée interne. */
import { describe, expect, it } from "vitest";
import { DEFAULT_CONTRATS_SETTINGS, type ContractDoc, type ContractSignature, type Dossier, type Proposal, type SentContract } from "@/lib/contrats/types";
import type { Quote } from "@/lib/soumissions/types";
import { restrictIndex } from "../../equipe/scope";
import { buildForecast } from "../../ventes/prevision";
import { buildBundles, computeIndex } from "../model";
import {
  blockersOf,
  clientProgress,
  delayTask,
  doneIndex,
  JOURNEY_STATES,
  JOURNEY_STEPS,
  LEGACY_OF,
  MOVABLE,
  normalizeParcoursSettings,
  outsideQuietHours,
  DEFAULT_PARCOURS_SETTINGS,
  STEP_OF_LEGACY,
  stepDelay,
  whoActs,
  type JourneyFacts,
  type JourneyFlags,
  type JourneyState,
} from "../parcours";
import { emptyCrm, normalizeCrm } from "../store";
import type { Task } from "../tasks";
import { DEFAULT_CRM_SETTINGS, type CrmData, type SourceData, type Stage } from "../types";
import { daysAgo, entry, hoursAgo, iso, job, NOW, quote, src } from "./fixtures";

const PHONE = "514 555-0142";
const EMAIL = "julie@exemple.ca";
const who = { firstName: "Julie", lastName: "Tremblay", email: EMAIL, phone: PHONE, city: "Laval" };
const jobClient = { firstName: "Julie", lastName: "Tremblay", phone: PHONE, email: EMAIL, city: "Laval" };
const index = (s: SourceData, now = NOW) => computeIndex(buildBundles(s), s, now);
const one = (s: SourceData, now = NOW) => index(s, now).clients[0];
const journey = (s: SourceData, now = NOW) => one(s, now).journey!;
const demand = (at = daysAgo(10)) => entry("soumission", at, { firstName: "Julie", email: EMAIL, phone: PHONE });

/* ---------------- Parcours du contrat (objets minimaux, fictifs) ---------------- */

const INSTALLER = "i_testinst001";
function goAhead(q: Quote, at: Date): Quote {
  q.versions[0].jumelage = { at: iso(at), v: 1, selection: [], totalCents: 0, checkbox: "case", noticeSha256: "x", contentHash: "y", ip: "203.0.113.1", userAgent: "test" };
  return q;
}
function dossier(q: Quote, over: Partial<Dossier> = {}): Dossier {
  return { id: "ct_testdoss01", quoteId: q.id, quoteNumber: q.number, createdAt: q.createdAt, createdBy: "proprio@exemple.ca", consent: null, offer: null, proposals: [], contracts: [], jobId: null, avenants: [], events: [], ...over };
}
function proposal(q: Quote, status: Proposal["status"], at: Date, over: Partial<Proposal> = {}): Proposal {
  return { id: "pr_testprop01", installerId: INSTALLER, company: "Clim Exemple", via: "direct", jobId: null, versionId: q.versions[0].id, v: 1, tokenHashes: [], createdAt: iso(at), createdBy: "proprio@exemple.ca", status, messages: [], approval: null, sends: [], views: { count: 0, firstAt: null, lastAt: null }, ...over };
}
const DOC = { project: { schedule: { mode: "aucune", date: "", windowStart: "", windowEnd: "" } }, installer: { legalName: "Clim Exemple inc.", tradeName: "Clim Exemple" } } as unknown as ContractDoc;
function contract(q: Quote, status: SentContract["status"], approvedAt: Date, over: Partial<SentContract> = {}): SentContract {
  return { id: "sc_testcont01", proposalId: "pr_testprop01", installerId: INSTALLER, versionId: q.versions[0].id, doc: DOC, status, approvedAt: iso(approvedAt), notices: [], signature: null, refusal: null, cancellation: null, copies: null, ...over };
}
const signature = (at: Date) => ({ at: iso(at) }) as unknown as ContractSignature;
const contrats = (dossiers: Dossier[], records: Record<string, { enRoute?: unknown; arrivedAt?: unknown }> = {}): SourceData["contrats"] => ({ contrats: { version: 1, settings: DEFAULT_CONTRATS_SETTINGS, dossiers, rbqRules: null, payments: {}, partnerRbq: {} }, records });

function withRecord(s: SourceData, over: Partial<CrmData["clients"][string]>): SourceData {
  const [b] = buildBundles(s);
  const crm = emptyCrm();
  crm.clients[b.id] = { id: b.id, keys: b.keys, stageLog: [], tags: [], notes: [], createdAt: iso(daysAgo(30)), updatedAt: iso(daysAgo(30)), ...over };
  return { ...s, crm };
}

/* ---------------- Correspondance des 12 étapes ---------------- */

describe("les 12 étapes, calculées à partir des événements", () => {
  it("1 à 4 : demande, contacté, soumission envoyée, ouverte (mêmes événements que l'étape d'origine)", () => {
    expect(journey(src({ journal: [demand()] }))).toMatchObject({ state: "demande", manual: false });
    expect(journey(src({ journal: [demand(), entry("rendez-vous", daysAgo(9), { firstName: "Julie", phone: PHONE })] })).state).toBe("contacte");
    expect(journey(src({ journal: [demand()], quotes: [quote({ client: who, sentAt: daysAgo(5) })] })).state).toBe("soumission-envoyee");
    const j = journey(src({ journal: [demand()], quotes: [quote({ client: who, sentAt: daysAgo(5), viewedAt: daysAgo(4) })] }));
    expect(j).toMatchObject({ state: "ouverte", since: iso(daysAgo(4)) });
  });

  it("5 · va de l'avant (jumelage, case 3.1) : jamais une acceptation ; l'étape d'origine et la prévision gardent « ouverte »", () => {
    const q = goAhead(quote({ client: who, sentAt: daysAgo(5), viewedAt: daysAgo(4) }), hoursAgo(3));
    const s = src({ journal: [demand()], quotes: [q] });
    const c = one(s);
    expect(c.journey).toMatchObject({ state: "va-de-l-avant", since: iso(hoursAgo(3)), actor: "proprietaire", actorWhy: "Trouver l’installateur" });
    expect(c.stage.stage).toBe("ouverte");
    expect(LEGACY_OF["va-de-l-avant"]).toBe("ouverte");
    const f = buildForecast(index(s).clients, { stageProbabilities: { ouverte: 0.5 } });
    expect(f.rows.find((r) => r.stage === "ouverte")).toMatchObject({ n: 1, source: "reglee" });
    expect(f.signed.n).toBe(0);
  });

  it("5 · offre en cours auprès des installateurs : c'est l'installateur qui doit répondre", () => {
    const q = goAhead(quote({ client: who, sentAt: daysAgo(5), viewedAt: daysAgo(4) }), hoursAgo(5));
    const offerJob = job({ id: "j_testoffre01", client: jobClient, status: "offert", createdAt: iso(hoursAgo(4)) });
    const d = dossier(q, { offer: { jobId: offerJob.id, versionId: q.versions[0].id, at: iso(hoursAgo(4)), by: "proprio@exemple.ca", installerIds: [INSTALLER], auto: false } });
    const j = journey(src({ quotes: [q], jobs: [offerJob], contrats: contrats([d]) }));
    expect(j).toMatchObject({ state: "va-de-l-avant", actor: "installateur" });
    expect(j.flags.offerPending).toBe(true);
  });

  it("6 · installateur trouvé : proposition en attente d'approbation", () => {
    const q = goAhead(quote({ client: who, sentAt: daysAgo(5), viewedAt: daysAgo(4) }), daysAgo(2));
    const j = journey(src({ quotes: [q], contrats: contrats([dossier(q, { proposals: [proposal(q, "en-attente", daysAgo(1))] })]) }));
    expect(j).toMatchObject({ state: "installateur-trouve", since: iso(daysAgo(1)), actor: "installateur", actorWhy: "Approuver le contrat" });
  });

  it("6 → 5 : l'installateur refuse, le dossier revient à « va de l'avant » (finalisation), au propriétaire", () => {
    const q = goAhead(quote({ client: who, sentAt: daysAgo(5), viewedAt: daysAgo(4) }), daysAgo(3));
    const refused = proposal(q, "refusee", daysAgo(2), { messages: [{ at: iso(hoursAgo(20)), from: "installateur", kind: "refus", text: "Pas disponible" }] });
    const j = journey(src({ quotes: [q], contrats: contrats([dossier(q, { proposals: [refused] })]) }));
    expect(j).toMatchObject({ state: "va-de-l-avant", since: iso(hoursAgo(20)), actor: "proprietaire" });
    expect(j.flags.finalisation).toBe(true);
  });

  it("7 · contrat prêt à signer : approuvé par l'installateur ; un job du contrat ne compte pas comme signé avant la signature", () => {
    const q = goAhead(quote({ client: who, sentAt: daysAgo(5), viewedAt: daysAgo(4) }), daysAgo(3));
    const jb = job({ id: "j_testcontr01", client: jobClient, status: "attribue", assignedInstallerId: INSTALLER, createdAt: iso(hoursAgo(30)), quoteId: q.id } as never);
    const d = dossier(q, { jobId: jb.id, proposals: [proposal(q, "approuvee", daysAgo(2))], contracts: [contract(q, "a-signer", hoursAgo(30))] });
    const c = one(src({ quotes: [q], jobs: [jb], contrats: contrats([d]) }));
    expect(c.journey).toMatchObject({ state: "contrat-pret", since: iso(hoursAgo(30)), actor: "client", actorWhy: "Signer le contrat" });
    expect(c.stage.stage).toBe("acceptee"); // l'étape d'origine compte le job ; le parcours attend la signature
  });

  it("8 · signé : contrat signé (et son acceptation, recordContractAcceptance) ; le job attribué attend sa date", () => {
    const q = goAhead(quote({ client: who, sentAt: daysAgo(6), viewedAt: daysAgo(5), acceptedAt: hoursAgo(10) }), daysAgo(4));
    const jb = job({ id: "j_testcontr02", client: jobClient, status: "attribue", assignedInstallerId: INSTALLER, createdAt: iso(daysAgo(2)), quoteId: q.id } as never);
    const d = dossier(q, { jobId: jb.id, contracts: [contract(q, "signe", daysAgo(2), { signature: signature(hoursAgo(10)) })] });
    const j = journey(src({ quotes: [q], jobs: [jb], contrats: contrats([d]) }));
    expect(j).toMatchObject({ state: "signe", since: iso(hoursAgo(10)), actor: "installateur", actorWhy: "Réserver la date d’installation" });
    expect(j.flags.noJob).toBe(false);
  });

  it("8 · signé sans job : le propriétaire crée le job ; ancienne acceptation (avant C1) comprise", () => {
    const j = journey(src({ quotes: [quote({ client: who, sentAt: daysAgo(6), acceptedAt: daysAgo(1) })] }));
    expect(j).toMatchObject({ state: "signe", actor: "proprietaire", actorWhy: "Créer le job d’installation" });
  });

  it("9 à 12 : planifié, installé (facture), payé (commission encaissée), suivi (sondage)", () => {
    const planned = job({ client: jobClient, status: "planifie", scheduledFor: "2026-09-22", assignedInstallerId: INSTALLER });
    expect(journey(src({ jobs: [planned] }))).toMatchObject({ state: "planifie", actor: "installateur", scheduledFor: "2026-09-22" });

    const done = job({ client: jobClient, status: "termine", assignedInstallerId: INSTALLER, completedAt: iso(daysAgo(3)) });
    expect(journey(src({ jobs: [done] }))).toMatchObject({ state: "installe", since: iso(daysAgo(3)), actor: "proprietaire" });

    const inv = (status: "emise" | "payee", dueAt: Date, paidAt: Date | null) => ({ jobId: done.id, number: "COM-2026-0001", status, dueAt: iso(dueAt), issuedAt: iso(daysAgo(2)), paidAt: paidAt ? iso(paidAt) : null, totalCents: 120_000 });
    const withInv = (i: ReturnType<typeof inv>, afterSale: Record<string, { surveyAt: string | null; referralAt: string | null }> = {}) => src({ jobs: [done], parcours: { invoices: [i], afterSale, memberships: [] } });
    expect(journey(withInv(inv("emise", daysAgo(-5), null)))).toMatchObject({ state: "installe", actor: "installateur", actorWhy: "Payer la facture de commission" });
    const late = journey(withInv(inv("emise", daysAgo(1), null)));
    expect(late).toMatchObject({ state: "installe", actor: "proprietaire" });
    expect(late.blockers).toContain("Commission en retard");
    expect(journey(withInv(inv("payee", daysAgo(1), hoursAgo(20))))).toMatchObject({ state: "paye", since: iso(hoursAgo(20)), actor: "client" });
    expect(journey(withInv(inv("payee", daysAgo(1), hoursAgo(20)), { [done.id]: { surveyAt: iso(hoursAgo(2)), referralAt: null } }))).toMatchObject({ state: "suivi", since: iso(hoursAgo(2)) });
  });

  it("date d'installation dépassée sans « en route » : bloqué, au propriétaire", () => {
    const planned = job({ client: jobClient, status: "planifie", scheduledFor: "2026-09-14", assignedInstallerId: INSTALLER });
    const j = journey(src({ jobs: [planned] }));
    expect(j.flags.dateMissed).toBe(true);
    expect(j).toMatchObject({ actor: "proprietaire" });
  });

  it("chaque étape a une place : 12 numérotées, « Perdu » à part ; correspondance aller-retour pour les étapes manuelles", () => {
    expect(JOURNEY_STEPS).toHaveLength(12);
    expect(JOURNEY_STATES.at(-1)).toBe("perdu");
    for (const s of MOVABLE) expect(STEP_OF_LEGACY[LEGACY_OF[s]]).toBe(s);
    for (const st of ["nouvelle", "contacte", "soumission-envoyee", "ouverte", "acceptee", "planifiee", "terminee", "perdue"] as Stage[]) expect(LEGACY_OF[STEP_OF_LEGACY[st]]).toBe(st);
  });
});

/* ---------------- Étape manuelle ---------------- */

describe("étape manuelle (celle qui existait)", () => {
  it("tient jusqu'à ce qu'un fait APRÈS le choix donne une étape plus haute", () => {
    const q = quote({ client: who, sentAt: daysAgo(5) });
    const base = src({ journal: [demand()], quotes: [q] });
    const s = withRecord(base, { stageOverride: { stage: "contacte", at: iso(daysAgo(1)), by: "proprio@exemple.ca" } });
    expect(journey(s)).toMatchObject({ state: "contacte", manual: true, since: iso(daysAgo(1)) });
    goAhead(q, hoursAgo(2));
    expect(journey(s)).toMatchObject({ state: "va-de-l-avant", manual: false });
  });
});

/* ---------------- Pertes ---------------- */

describe("perdu, avec sa raison", () => {
  it("automatique : soumission refusée ; étape atteinte avant la perte", () => {
    const j = journey(src({ journal: [demand()], quotes: [quote({ client: who, sentAt: daysAgo(6), viewedAt: daysAgo(5), refusedAt: daysAgo(4), reason: "Trop cher" })] }));
    expect(j.state).toBe("perdu");
    expect(j.actor).toBeNull();
    expect(j.lost).toMatchObject({ auto: true, motif: "soumission-refusee", cause: null, reached: "ouverte", detail: "Trop cher" });
  });

  it("à la main : raison structurée gardée ; motif « sans réponse » ou « expirée » selon la soumission ; ancienne perte : non précisée", () => {
    const q = quote({ client: who, sentAt: daysAgo(20), viewedAt: daysAgo(19) });
    const s = withRecord(src({ journal: [demand(daysAgo(25))], quotes: [q] }), { stageOverride: { stage: "perdue", at: iso(daysAgo(2)), by: "proprio@exemple.ca" }, lost: { reason: "Moins cher ailleurs", at: iso(daysAgo(2)), cause: "prix" } });
    expect(journey(s).lost).toMatchObject({ auto: false, cause: "prix", motif: "sans-reponse", reached: "ouverte", reason: "Moins cher ailleurs" });

    const old = withRecord(src({ journal: [demand(daysAgo(25))], quotes: [quote({ client: who, sentAt: daysAgo(40), validUntil: "2026-09-01" })] }), { stageOverride: { stage: "perdue", at: iso(daysAgo(2)), by: "proprio@exemple.ca" }, lost: { reason: "Plus de nouvelles", at: iso(daysAgo(2)) } });
    expect(journey(old).lost).toMatchObject({ cause: null, motif: "expiree" });

    const early = withRecord(src({ journal: [demand(daysAgo(25))] }), { stageOverride: { stage: "perdue", at: iso(daysAgo(2)), by: "proprio@exemple.ca" }, lost: { reason: "Faux numéro", at: iso(daysAgo(2)), cause: "autre" } });
    expect(journey(early).lost).toMatchObject({ motif: "avant-soumission", reached: "demande" });
  });

  it("contrat refusé par le client, rien d'autre en cours : perdu (motif automatique) ; une nouvelle demande le réactive", () => {
    const q = goAhead(quote({ client: who, sentAt: daysAgo(6), viewedAt: daysAgo(5) }), daysAgo(4));
    const refused = contract(q, "refuse", daysAgo(3), { refusal: { at: iso(daysAgo(2)), reason: "Trop long", ip: "x", userAgent: "x", kind: "refus" } });
    const s = src({ journal: [demand(daysAgo(8))], quotes: [q], contrats: contrats([dossier(q, { contracts: [refused] })]) });
    expect(journey(s)).toMatchObject({ state: "perdu", lost: { motif: "contrat-refuse", auto: true, reached: "contrat-pret", detail: "Trop long" } });
    const back = { ...s, journal: [...s.journal, demand(hoursAgo(5))] };
    expect(journey(back).state).not.toBe("perdu");
  });
});

/* ---------------- Qui doit agir ---------------- */

const NO: JourneyFlags = { offerPending: false, finalisation: false, noJob: false, noInstaller: false, jobOffered: false, invoice: "aucune", dateMissed: false };
const facts = (state: JourneyState, flags: Partial<JourneyFlags> = {}): Pick<JourneyFacts, "state" | "flags"> => ({ state, flags: { ...NO, ...flags } });
/** Tâche due (échéance passée) ; `soon` : échéance à venir. */
const rule = (r: Task["rule"], soon = false) => ({ rule: r, dueAt: iso(soon ? hoursAgo(-24) : hoursAgo(2)) });
function act(state: JourneyState, flags: Partial<JourneyFlags> = {}, tasks: Array<{ rule: Task["rule"]; dueAt: string }> = []) {
  const f = facts(state, flags);
  return whoActs(f, tasks, blockersOf(f, tasks, NOW));
}

describe("qui doit agir : règles explicites", () => {
  it.each([
    ["demande", {}, "proprietaire", "Rappeler le client"],
    ["contacte", {}, "proprietaire", "Préparer et envoyer la soumission"],
    ["soumission-envoyee", {}, "client", "Ouvrir la soumission"],
    ["ouverte", {}, "client", "Répondre à la soumission"],
    ["va-de-l-avant", {}, "proprietaire", "Trouver l’installateur"],
    ["va-de-l-avant", { finalisation: true }, "proprietaire", "Choisir un autre installateur"],
    ["va-de-l-avant", { offerPending: true }, "installateur", "Répondre à l’offre du job"],
    ["installateur-trouve", {}, "installateur", "Approuver le contrat"],
    ["contrat-pret", {}, "client", "Signer le contrat"],
    ["signe", { noJob: true }, "proprietaire", "Créer le job d’installation"],
    ["signe", { noInstaller: true }, "proprietaire", "Offrir le job à un installateur"],
    ["signe", { noInstaller: true, jobOffered: true }, "installateur", "Répondre à l’offre du job"],
    ["signe", {}, "installateur", "Réserver la date d’installation"],
    ["planifie", {}, "installateur", "Faire l’installation"],
    ["installe", { invoice: "aucune" }, "proprietaire", "Facturer la commission (automatique le lendemain, 8 h)"],
    ["installe", { invoice: "a-recevoir" }, "installateur", "Payer la facture de commission"],
    ["paye", { invoice: "payee" }, "client", "Répondre au sondage de satisfaction"],
  ] as Array<[JourneyState, Partial<JourneyFlags>, string, string]>)("%s %j → %s", (state, flags, actor, why) => {
    expect(act(state, flags)).toEqual({ actor, why });
  });

  it("perdu : personne ; suivi : le propriétaire s'il reste une tâche, sinon personne", () => {
    expect(act("perdu").actor).toBeNull();
    expect(act("suivi").actor).toBeNull();
    expect(act("suivi", {}, [rule("manuelle")]).actor).toBe("proprietaire");
  });

  it("le client attend une réponse (texto, question, appel manqué) : propriétaire, à toute étape", () => {
    for (const r of ["texto-non-lu", "question-client", "rappel-appel"] as const) expect(act("contrat-pret", {}, [rule(r)])).toEqual({ actor: "proprietaire", why: "Le client attend une réponse" });
  });

  it("blocages : réponse à traiter, date à régler, job sans preneur, commission en retard, date dépassée → propriétaire", () => {
    expect(act("installateur-trouve", {}, [rule("contrat-reponse")])).toEqual({ actor: "proprietaire", why: "Blocage : Réponse de l’installateur ou du client à traiter" });
    expect(act("signe", {}, [rule("contrat-date")]).actor).toBe("proprietaire");
    expect(act("signe", { noInstaller: true, jobOffered: true }, [rule("job-sans-reponse")]).actor).toBe("proprietaire");
    expect(act("installe", { invoice: "en-retard" })).toEqual({ actor: "proprietaire", why: "Blocage : Commission en retard" });
    expect(act("planifie", { dateMissed: true })).toEqual({ actor: "proprietaire", why: "Blocage : Date d’installation dépassée" });
    expect(blockersOf(facts("perdu"), [rule("contrat-reponse")], NOW)).toEqual([]);
  });

  it("une tâche pas encore due, ou hors de son étape, ne bloque pas", () => {
    expect(act("signe", {}, [rule("job-a-planifier", true)])).toEqual({ actor: "installateur", why: "Réserver la date d’installation" });
    expect(act("contrat-pret", {}, [rule("job-a-planifier")])).toEqual({ actor: "client", why: "Signer le contrat" });
    expect(act("contrat-pret", {}, [rule("contrat-date")]).actor).toBe("client");
  });
});

/* ---------------- Tâche de délai ---------------- */

describe("alerte de délai : tâche CRM", () => {
  it("« Client prêt depuis 7 h, aucun installateur » : seulement après le délai (6 h par défaut)", () => {
    const q = goAhead(quote({ client: who, sentAt: daysAgo(5), viewedAt: daysAgo(4) }), hoursAgo(7));
    const c = one(src({ journal: [demand()], quotes: [q] }));
    const t = c.tasks.find((x) => x.rule === "delai-etape");
    expect(t).toMatchObject({ title: "Julie : client prêt depuis 7 h, aucun installateur", clientId: c.b.id, dueAt: iso(hoursAgo(1)) });
    expect(t!.key).toBe(`auto:delai-etape:${c.b.id}:va-de-l-avant:${iso(hoursAgo(7))}`);
    const early = goAhead(quote({ client: who, sentAt: daysAgo(5), viewedAt: daysAgo(4) }), hoursAgo(5));
    expect(one(src({ journal: [demand()], quotes: [early] })).tasks.some((x) => x.rule === "delai-etape")).toBe(false);
  });

  it("« Contrat prêt à signer depuis 50 h » ; faite : disparaît (état des tâches), comme les autres tâches automatiques", () => {
    const q = goAhead(quote({ client: who, sentAt: daysAgo(6), viewedAt: daysAgo(5) }), daysAgo(4));
    const s = src({ quotes: [q], contrats: contrats([dossier(q, { contracts: [contract(q, "a-signer", hoursAgo(50))] })]) });
    const t = one(s).tasks.find((x) => x.rule === "delai-etape")!;
    expect(t.title).toBe("Julie : contrat prêt à signer depuis 50 h");
    const crm = emptyCrm();
    crm.taskState[t.key] = { doneAt: iso(hoursAgo(1)) };
    expect(one({ ...s, crm }).tasks.some((x) => x.rule === "delai-etape")).toBe(false);
  });

  it("sans doublon : une tâche existante couvre déjà le retard (ouverte, ou faite pendant l'étape)", () => {
    const q = goAhead(quote({ client: who, sentAt: daysAgo(5), viewedAt: daysAgo(4) }), hoursAgo(7));
    const c = one(src({ journal: [demand()], quotes: [q], contrats: contrats([dossier(q)]) }));
    expect(c.tasks.map((x) => x.rule)).toContain("contrat-installateur");
    expect(c.tasks.some((x) => x.rule === "delai-etape")).toBe(false);
    const b = c.b;
    const f = { state: "va-de-l-avant" as const, since: iso(hoursAgo(7)) };
    expect(delayTask(b, f, DEFAULT_PARCOURS_SETTINGS, DEFAULT_CRM_SETTINGS, NOW, [])).not.toBeNull();
    const done = doneIndex({ [`auto:contrat-installateur:${q.id}:${q.versions[0].id}`]: { doneAt: iso(hoursAgo(2)) } });
    expect(delayTask(b, f, DEFAULT_PARCOURS_SETTINGS, DEFAULT_CRM_SETTINGS, NOW, [], done)).toBeNull();
    const before = doneIndex({ [`auto:contrat-installateur:${q.id}:${q.versions[0].id}`]: { doneAt: iso(hoursAgo(9)) } });
    expect(delayTask(b, f, DEFAULT_PARCOURS_SETTINGS, DEFAULT_CRM_SETTINGS, NOW, [], before)).not.toBeNull();
  });

  it("délais : réglage, aucun (null) ou défaut tiré des réglages existants ; heures silencieuses", () => {
    expect(stepDelay("va-de-l-avant", { alertHours: {} }, DEFAULT_CRM_SETTINGS)).toMatchObject({ hours: 6, source: "defaut" });
    expect(stepDelay("ouverte", { alertHours: {} }, { ...DEFAULT_CRM_SETTINGS, openedFollowDays: 5 })).toMatchObject({ hours: 120 });
    expect(stepDelay("demande", { alertHours: {} }, DEFAULT_CRM_SETTINGS)).toMatchObject({ hours: 2, business: true });
    expect(stepDelay("contrat-pret", { alertHours: { "contrat-pret": 24 } }, DEFAULT_CRM_SETTINGS)).toMatchObject({ hours: 24, source: "reglage" });
    expect(stepDelay("contrat-pret", { alertHours: { "contrat-pret": null } }, DEFAULT_CRM_SETTINGS)).toBeNull();
    expect(stepDelay("contacte", { alertHours: {} }, DEFAULT_CRM_SETTINGS)).toBeNull();
    const q = { quietStart: 20, quietEnd: 8 };
    expect(outsideQuietHours(new Date("2026-09-17T01:30:00Z"), q).toISOString()).toBe("2026-09-17T12:00:00.000Z"); // 21 h 30 → 8 h le lendemain
    expect(outsideQuietHours(new Date("2026-09-17T07:00:00Z"), q).toISOString()).toBe("2026-09-17T12:00:00.000Z"); // 3 h → 8 h
    expect(outsideQuietHours(new Date("2026-09-17T15:00:00Z"), q).toISOString()).toBe("2026-09-17T15:00:00.000Z"); // 11 h : inchangé
    expect(outsideQuietHours(new Date("2026-09-17T01:30:00Z"), { quietStart: 0, quietEnd: 0 }).toISOString()).toBe("2026-09-17T01:30:00.000Z");
  });
});

/* ---------------- Rétrocompatibilité ---------------- */

describe("rétrocompatibilité de crm.json", () => {
  it("un crm.json sans « parcours » ni raison structurée se lit tel quel ; les réglages absents prennent leurs défauts", () => {
    const old = normalizeCrm({ clients: { c_0123456789ab: { id: "c_0123456789ab", keys: [], stageLog: [{ at: "2026-01-01T00:00:00.000Z", by: "x", from: null, to: "perdue", reason: "Trop cher" }], lost: { reason: "Trop cher", at: "2026-01-01T00:00:00.000Z" }, tags: [], notes: [], createdAt: "2026-01-01T00:00:00.000Z", updatedAt: "2026-01-01T00:00:00.000Z" } } } as never);
    expect("parcours" in old).toBe(false);
    expect(old.clients.c_0123456789ab.lost).toEqual({ reason: "Trop cher", at: "2026-01-01T00:00:00.000Z" });
    expect(normalizeCrm({}).parcours).toBeUndefined();
    expect(normalizeCrm({ parcours: { alertHours: { "va-de-l-avant": 4 } } } as never).parcours).toMatchObject({ alertHours: { "va-de-l-avant": 4 }, escalateAfterHours: 1, quietStart: 20, quietEnd: 8 });
  });

  it("réglages abîmés : chaque valeur invalide prend son défaut, rien n'est inventé", () => {
    const s = normalizeParcoursSettings({ labels: { demande: "  Nouvelle ", inconnue: "x", ouverte: 3 }, alertHours: { demande: -2, signe: null, ouverte: "12", "contrat-pret": 24 }, sms: { demande: false, planifie: "oui" }, probability: { ouverte: "signe", demande: "au-hasard" }, escalateAfterHours: 999, quietStart: -1, quietEnd: "x" });
    expect(s.labels).toEqual({ demande: "Nouvelle" });
    expect(s.alertHours).toEqual({ signe: null, "contrat-pret": 24 });
    expect(s.sms).toEqual({ demande: false });
    expect(s.probability).toEqual({ ouverte: "signe" });
    expect(s).toMatchObject({ escalateAfterHours: 72, quietStart: 0, quietEnd: 8 });
  });

  it("la prévision d'origine est inchangée (étapes d'origine) et ne compte jamais l'aide LogisVert", () => {
    const q = goAhead(quote({ client: who, sentAt: daysAgo(5), viewedAt: daysAgo(4), mode: "cession" }), hoursAgo(3));
    const i = index(src({ quotes: [q] }));
    expect(i.clients[0].stage.stage).toBe("ouverte");
    const f = buildForecast(i.clients, { stageProbabilities: { ouverte: 0.4 } });
    expect(f.rows.map((r) => r.stage)).toEqual(["nouvelle", "contacte", "soumission-envoyee", "ouverte"]);
    expect(f.rows.find((r) => r.stage === "ouverte")!.cents).toBe(i.clients[0].valueCents);
  });
});

/* ---------------- Portée et portail ---------------- */

describe("portée des vendeurs et portail client", () => {
  it("un vendeur garde le parcours de SES clients ; les délais du chantier (signé et après) lui sont cachés", () => {
    const s = withRecord(src({ quotes: [quote({ client: who, sentAt: daysAgo(6), acceptedAt: daysAgo(3) })] }), { assignedTo: { userId: "u_vendeurA001", at: iso(daysAgo(10)), by: "proprio@exemple.ca", how: "manuel" } });
    const full = index(s);
    expect(full.clients[0].journey?.state).toBe("signe");
    expect(full.tasks.map((t) => t.rule)).toContain("delai-chantier");
    const a = restrictIndex(full, { kind: "vendeur", email: "vendeur.a@exemple.ca", userId: "u_vendeurA001" });
    expect(a.clients[0].journey?.state).toBe("signe");
    expect(a.tasks.map((t) => t.rule)).not.toContain("delai-chantier");
    const b = restrictIndex(full, { kind: "vendeur", email: "vendeur.b@exemple.ca", userId: "u_vendeurB001" });
    expect(b.clients).toHaveLength(0);
  });

  it("portail : « étape n sur 12 », libellés du client, aucune donnée interne", () => {
    const p = clientProgress("contrat-pret")!;
    expect(p).toEqual({ n: 7, total: 12, label: "Contrat prêt à signer", steps: expect.any(Array) });
    expect(Object.keys(p).sort()).toEqual(["label", "n", "steps", "total"]);
    expect(p.steps).toHaveLength(12);
    const all = JSON.stringify(JOURNEY_STEPS.map((s) => clientProgress(s)));
    for (const internal of ["ommission", "Propriétaire", "Payé", "priorit", "$", "Perdu", "@"]) expect(all).not.toContain(internal);
    expect(clientProgress("paye")!.label).toBe("Dossier complété");
    expect(clientProgress("perdu")).toBeNull();
  });
});
