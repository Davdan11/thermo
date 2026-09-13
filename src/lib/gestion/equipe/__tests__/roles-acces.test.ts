/* ==================================================================
   Chantier V — portée par rôle sur chaque page et chaque action
   ouverte, avec DEUX vendeurs (A : Alice, B : Bruno), une adjointe et
   le propriétaire. Aucune fuite : rien de Bruno dans ce que A reçoit,
   même par une URL ou un POST devinés. requireAdmin inchangé.
   Aucun envoi réel : services d'envoi remplacés, NODE_ENV=test.
   ================================================================== */
import { mkdtemp, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { NextRequest } from "next/server";

const jar = vi.hoisted(() => ({ value: undefined as string | undefined }));
vi.mock("next/headers", () => ({
  cookies: async () => ({ get: (n: string) => (n === "tav_gestion" && jar.value ? { name: n, value: jar.value } : undefined), set: vi.fn() }),
  headers: async () => new Headers({ host: "localhost:3001", "x-forwarded-for": "198.51.100.7" }),
}));
vi.mock("next/cache", () => ({ refresh: vi.fn(), revalidatePath: vi.fn() }));
const soum = vi.hoisted(() => ({
  sendQuoteService: vi.fn(async () => ({ ok: false as const, error: "simulé" })),
  remindService: vi.fn(async () => ({ ok: false as const, error: "simulé" })),
  reviseService: vi.fn(async () => ({ ok: false as const, error: "simulé" })),
  duplicateService: vi.fn(async () => ({ ok: false as const, error: "simulé" })),
  deleteDraftService: vi.fn(async () => ({ ok: false as const, error: "simulé" })),
  linkDealService: vi.fn(async () => true),
}));
vi.mock("@/lib/soumissions/service", async (orig) => ({ ...(await orig<typeof import("@/lib/soumissions/service")>()), ...soum }));
const pd = vi.hoisted(() => ({ moveDealToStage: vi.fn(), salesStages: vi.fn(async () => ({ ok: false as const, error: "Pipedrive non configuré." })) }));
vi.mock("@/lib/soumissions/pipedrive-sync", async (orig) => ({ ...(await orig<typeof import("@/lib/soumissions/pipedrive-sync")>()), ...pd }));
const tel = vi.hoisted(() => ({ startMaskedCall: vi.fn(async () => ({ ok: false as const, error: "simulé" })) }));
vi.mock("@/lib/telephonie/masked-call", async (orig) => ({ ...(await orig<typeof import("@/lib/telephonie/masked-call")>()), ...tel }));
const tx = vi.hoisted(() => ({ sendReply: vi.fn(async () => ({ ok: false as const, error: "simulé" })), markRead: vi.fn(async () => false), markUnread: vi.fn(async () => true), setArchived: vi.fn(async () => true) }));
vi.mock("@/lib/textos/service", async (orig) => ({ ...(await orig<typeof import("@/lib/textos/service")>()), ...tx }));

import HomePage from "@/app/gestion/(prive)/page";
import TachesPage from "@/app/gestion/(prive)/taches/page";
import ClientsPage from "@/app/gestion/(prive)/clients/page";
import ClientPage from "@/app/gestion/(prive)/clients/[id]/page";
import NewClientPage from "@/app/gestion/(prive)/clients/nouveau/page";
import PipelinePage from "@/app/gestion/(prive)/pipeline/page";
import AgendaPage from "@/app/gestion/(prive)/agenda/page";
import TextosPage from "@/app/gestion/(prive)/textos/page";
import ConversationPage from "@/app/gestion/(prive)/textos/[id]/page";
import ClassementPage from "@/app/gestion/(prive)/classement/page";
import EquipePage from "@/app/gestion/(prive)/equipe/page";
import RelevesPage from "@/app/gestion/(prive)/equipe/releves/page";
import SoumissionsPage from "@/app/gestion/soumissions/page";
import QuotePage from "@/app/gestion/soumissions/[id]/page";
import NouvellePage from "@/app/gestion/soumissions/nouvelle/page";
import ModifierPage from "@/app/gestion/soumissions/[id]/modifier/page";
import ApercuPage from "@/app/gestion/soumissions/[id]/apercu/page";
import PaiementsPage from "@/app/gestion/(prive)/paiements/page";
import AutomatisationsPage from "@/app/gestion/(prive)/automatisations/page";
import PartenairesPage from "@/app/gestion/(prive)/partenaires/page";
import EntentePage from "@/app/gestion/(prive)/entente/page";
import PublicitePage from "@/app/gestion/(prive)/publicite/page";
import PresencePage from "@/app/gestion/(prive)/presence/page";
import SecuritePage from "@/app/gestion/(prive)/securite/page";
import ReglagesPage from "@/app/gestion/(prive)/reglages/page";
import JobsPage from "@/app/gestion/(prive)/jobs/page";
import StatistiquesPage from "@/app/gestion/(prive)/statistiques/page";
import * as crmActions from "@/app/gestion/(prive)/crm-actions";
import * as textosActions from "@/app/gestion/(prive)/textos/actions";
import * as telActions from "@/app/gestion/(prive)/telephonie/actions";
import * as soumActions from "@/app/gestion/soumissions/actions";
import * as teamActions from "@/app/gestion/(prive)/equipe/actions";
import { GET as postalGET } from "@/app/gestion/api/postal/route";
import { getAdminSession, requireAdmin, requireUser } from "../../auth/dal";
import { resetSecretCache } from "../../auth/secret";
import { resetCrmMemo } from "../../crm/service";
import { readCrm } from "../../crm/store";
import { readAudit } from "../../securite/audit";
import { buildHome } from "../../crm/dashboard";
import { aggregateStats, toRecords } from "../../statistiques";
import { buildBundles, computeIndex } from "../../crm/model";
import { conv, daysAgo, entry, hoursAgo, msg, NOW, quote, src } from "../../crm/__tests__/fixtures";
import { MaCarte } from "@/components/gestion/equipe/MaCarte";
import { AssignCard } from "@/components/gestion/equipe/AssignCard";
import { navHrefsFor } from "../roles";
import { restrictIndex, scopeFor } from "../scope";
import { A, ADJ, B, cookieFor, OWNER, seedClients, seedTeam, testEnv, txt, type Seed } from "./helpers";

const env = process.env;
let dir: string;
let s: Seed;
const digest = (e: unknown) => String((e as { digest?: string })?.digest ?? "");
const rejected = async (p: Promise<unknown>) => digest(await p.then(() => null, (e: unknown) => e));
const sp = <T,>(v: T) => Promise.resolve(v);
const as = async (email: string) => {
  jar.value = await cookieFor(email);
};
const REFUSED = "/gestion?acces=refuse";
const NOT_FOUND = "NEXT_HTTP_ERROR_FALLBACK;404";

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-roles-"));
  process.env = testEnv(dir);
  delete process.env.ADMIN_SESSION_SECRET;
  resetSecretCache();
  resetCrmMemo();
  jar.value = undefined;
  vi.clearAllMocks();
  vi.spyOn(console, "log").mockImplementation(() => undefined);
  await seedTeam();
  s = await seedClients(dir);
});
afterEach(async () => {
  process.env = env;
  vi.restoreAllMocks();
  resetSecretCache();
  await rm(dir, { recursive: true, force: true });
});

/* ---------------- Pages ---------------- */

describe("pages ouvertes : chaque vendeur ne voit que les siens", () => {
  const pages = (x: Seed): Array<[string, () => Promise<unknown>]> => [
    ["accueil", () => HomePage({ searchParams: sp({}) })],
    ["à faire", () => TachesPage({ searchParams: sp({}) })],
    ["clients", () => ClientsPage({ searchParams: sp({}) })],
    ["pipeline", () => PipelinePage({ searchParams: sp({}) })],
    ["agenda", () => AgendaPage({ searchParams: sp({ vue: "semaine" }) })],
    ["textos", () => TextosPage({ searchParams: sp({}) })],
    ["soumissions", () => SoumissionsPage({ searchParams: sp({}) })],
    ["classement", () => ClassementPage({ searchParams: sp({ periode: "mois" }) })],
    ["fiche d'Alice", () => ClientPage({ params: sp({ id: x.a }), searchParams: sp({}) })],
    ["conversation d'Alice", () => ConversationPage({ params: sp({ id: x.convA }) })],
    ["soumission d'Alice", () => QuotePage({ params: sp({ id: x.quoteA }), searchParams: sp({}) })],
  ];

  it("vendeur A : rien de Bruno (nom, tâche, conversation, soumission, job), dans aucune page", async () => {
    await as(A.email);
    for (const [name, render] of pages(s)) {
      const out = txt(await render());
      expect(out, name).not.toContain("Bruno");
      expect(out, name).not.toContain(s.convB);
      expect(out, name).not.toContain(s.quoteB);
      expect(out, name).not.toContain(s.numberB);
      expect(out, name).not.toContain("Tâche perso de B");
      expect(out, name).not.toContain("555-0162");
      expect(out, name).not.toContain("bruno@exemple.ca");
    }
    expect(txt(await ClientsPage({ searchParams: sp({}) }))).toContain("Alice");
    expect(txt(await TachesPage({ searchParams: sp({}) }))).toContain("Rappeler Alice");
  });

  it("vendeur B : rien d'Alice ; il voit ses propres données (tâche personnelle comprise)", async () => {
    await as(B.email);
    const b = pages(s).filter(([n]) => !/Alice/.test(n));
    for (const [name, render] of b) {
      const out = txt(await render());
      expect(out, name).not.toContain("Alice");
      expect(out, name).not.toContain(s.convA);
      expect(out, name).not.toContain(s.quoteA);
    }
    const t = txt(await TachesPage({ searchParams: sp({}) }));
    expect(t).toContain("Rappeler Bruno");
    expect(t).toContain("Tâche perso de B");
    expect(txt(await ClientPage({ params: sp({ id: s.b }), searchParams: sp({}) }))).toContain("Bruno");
    expect(txt(await ConversationPage({ params: sp({ id: s.convB }) }))).toContain("Bruno ici");
    expect(txt(await AgendaPage({ searchParams: sp({ vue: "semaine" }) }))).toContain("Bruno");
  });

  it("une URL devinée : 404 (fiche, conversation, soumission, modification, aperçu) ; ?client= ignoré", async () => {
    await as(A.email);
    expect(await rejected(ClientPage({ params: sp({ id: s.b }), searchParams: sp({}) }))).toContain(NOT_FOUND);
    expect(await rejected(ConversationPage({ params: sp({ id: s.convB }) }))).toContain(NOT_FOUND);
    expect(await rejected(QuotePage({ params: sp({ id: s.quoteB }), searchParams: sp({}) }))).toContain(NOT_FOUND);
    expect(await rejected(ModifierPage({ params: sp({ id: s.quoteB }), searchParams: sp({}) }))).toContain(NOT_FOUND);
    expect(await rejected(ApercuPage({ params: sp({ id: s.quoteB }), searchParams: sp({}) }))).toContain(NOT_FOUND);
    const nouvelle = txt(await NouvellePage({ searchParams: sp({ client: s.b }) }));
    expect(nouvelle).not.toContain("Bruno");
    expect(nouvelle).not.toContain("bruno@exemple.ca");
    expect(txt(await NouvellePage({ searchParams: sp({ client: s.a }) }))).toContain("alice@exemple.ca");
    await expect(NewClientPage()).resolves.toBeTruthy();
  });

  it("composants de la fiche : ma carte et « vendeur attribué » ne montrent que la personne connectée", async () => {
    const card = txt(await MaCarte({ session: { userId: A.id, name: A.name } }));
    expect(card).toContain(A.name);
    expect(card).not.toContain(B.name);
    const assign = txt(await AssignCard({ clientId: s.a, session: { role: "vendeur", userId: A.id } }));
    expect(assign).toContain("vous est attribué");
    expect(assign).not.toContain(B.name);
    const ownerView = txt(await AssignCard({ clientId: s.b, session: { role: "proprietaire", userId: "proprietaire" } }));
    expect(ownerView).toContain(B.name);
  });

  it("classement : le vendeur ne voit que SA carte ; le propriétaire voit tout", async () => {
    await as(A.email);
    const mine = txt(await ClassementPage({ searchParams: sp({}) }));
    expect(mine).toContain(A.name);
    expect(mine).not.toContain(B.name);
    await as(OWNER);
    const all = txt(await ClassementPage({ searchParams: sp({}) }));
    expect(all).toContain(A.name);
    expect(all).toContain(B.name);
  });

  it("adjointe et propriétaire : tout (les deux clients)", async () => {
    for (const who of [ADJ.email, OWNER]) {
      await as(who);
      const out = txt(await ClientsPage({ searchParams: sp({}) }));
      expect(out, who).toContain("Alice");
      expect(out, who).toContain("Bruno");
      await expect(ClientPage({ params: sp({ id: s.b }), searchParams: sp({}) })).resolves.toBeTruthy();
      await expect(QuotePage({ params: sp({ id: s.quoteB }), searchParams: sp({}) })).resolves.toBeTruthy();
    }
  });
});

describe("pages réservées", () => {
  const owner: Array<[string, () => Promise<unknown>]> = [
    ["paiements", () => PaiementsPage({ searchParams: sp({}) })],
    ["automatisations", () => AutomatisationsPage()],
    ["partenaires", () => PartenairesPage()],
    ["entente", () => EntentePage()],
    ["publicité", () => PublicitePage()],
    ["présence", () => PresencePage({ searchParams: sp({}) })],
    ["sécurité", () => SecuritePage({ searchParams: sp({}) })],
    ["réglages", () => ReglagesPage()],
    ["équipe", () => EquipePage({ searchParams: sp({}) })],
    ["relevés", () => RelevesPage({ searchParams: sp({}) })],
  ];
  const staff: Array<[string, () => Promise<unknown>]> = [
    ["jobs", () => JobsPage({ searchParams: sp({}) })],
    ["statistiques", () => StatistiquesPage({ searchParams: sp({}) })],
  ];

  it("vendeur : refusé partout ailleurs (renvoyé à l'accueil)", async () => {
    await as(A.email);
    for (const [name, render] of [...owner, ...staff]) expect(await rejected(render()), name).toContain(REFUSED);
  });

  it("adjointe : l'argent, la sécurité, les clés, les réglages et l'équipe restent refusés ; jobs et statistiques ouverts", async () => {
    await as(ADJ.email);
    for (const [name, render] of owner) expect(await rejected(render()), name).toContain(REFUSED);
    for (const [name, render] of staff) await expect(render(), name).resolves.toBeTruthy();
  });

  it("propriétaire : requireAdmin inchangé (même valeur, tout est ouvert)", async () => {
    await as(OWNER);
    expect(await requireAdmin()).toEqual({ email: OWNER });
    expect(await getAdminSession()).toEqual({ email: OWNER });
    expect(await requireUser()).toMatchObject({ email: OWNER, role: "proprietaire" });
    for (const [name, render] of [["réglages", () => ReglagesPage()] as const, ["équipe", () => EquipePage({ searchParams: sp({}) })] as const, ["relevés", () => RelevesPage({ searchParams: sp({}) })] as const]) await expect(render(), name).resolves.toBeTruthy();
    expect(navHrefsFor("proprietaire")).toBeNull();
  });

  it("routes /gestion/api : propriétaire seulement (401 pour un vendeur ou une adjointe)", async () => {
    const req = new NextRequest("http://localhost:3001/gestion/api/postal?code=H2X1Y4");
    for (const who of [A.email, ADJ.email]) {
      await as(who);
      expect((await postalGET(req)).status, who).toBe(401);
    }
    await as(OWNER);
    expect((await postalGET(req)).status).toBe(200);
  });

  it("menu selon le rôle : jamais Paiements, Automatisations, Partenaires, Entente, Publicité, Présence, Sécurité, Réglages pour un vendeur", () => {
    const v = navHrefsFor("vendeur")!;
    for (const h of ["/gestion/paiements", "/gestion/automatisations", "/gestion/partenaires", "/gestion/entente", "/gestion/publicite", "/gestion/presence", "/gestion/securite", "/gestion/reglages", "/gestion/equipe", "/gestion/jobs"]) expect(v).not.toContain(h);
    for (const h of ["/gestion", "/gestion/taches", "/gestion/clients", "/gestion/pipeline", "/gestion/soumissions", "/gestion/textos", "/gestion/agenda", "/gestion/classement"]) expect(v).toContain(h);
    const adj = navHrefsFor("adjoint")!;
    expect(adj).toContain("/gestion/jobs");
    expect(adj).not.toContain("/gestion/paiements");
    expect(adj).not.toContain("/gestion/securite");
  });
});

/* ---------------- Actions ---------------- */

describe("actions ouvertes : l'identifiant est revérifié contre la personne connectée", () => {
  it("CRM : A ne peut rien faire sur Bruno ; il agit sur Alice", async () => {
    await as(A.email);
    const before = JSON.stringify((await readCrm()).clients);
    const fd = new FormData();
    fd.set("text", "note");
    fd.set("title", "tâche");
    fd.set("clientId", s.b);
    fd.set("when", "demain");
    expect(await crmActions.setStageAction(s.b, "contacte", "")).toEqual({ ok: false, error: "Client introuvable." });
    expect(await crmActions.addNoteAction(s.b, undefined, fd)).toEqual({ ok: false, error: "Client introuvable." });
    expect(await crmActions.setTagsAction(s.b, ["x"])).toEqual({ ok: false, error: "Client introuvable." });
    expect(await crmActions.dialAction(s.b)).toMatchObject({ ok: false });
    expect(await crmActions.addTaskAction(undefined, fd)).toEqual({ ok: false, error: "Client introuvable." });
    expect(await crmActions.completeTaskAction(s.taskB)).toEqual({ ok: false, error: "Tâche introuvable." });
    expect(await crmActions.snoozeTaskAction(s.taskB, "demain")).toEqual({ ok: false, error: "Tâche introuvable." });
    expect(await crmActions.searchClientsAction("Bruno")).toEqual([]);
    expect((await crmActions.searchClientsAction("Alice")).map((r) => r.id)).toEqual([s.a]);
    const taken = new FormData();
    taken.set("firstName", "Autre");
    taken.set("phone", "514 555-0162");
    expect(await crmActions.createClientAction(undefined, taken)).toMatchObject({ ok: false, error: expect.stringContaining("existe déjà") });
    expect(await rejected(crmActions.mergeClientsAction(s.a, s.b))).toContain(REFUSED);
    expect(await rejected(crmActions.splitClientAction(s.b, ["k:" + "a".repeat(64)]))).toContain(REFUSED);
    expect(await rejected(crmActions.saveCrmSettingsAction(undefined, new FormData()))).toContain(REFUSED);
    resetCrmMemo();
    expect(JSON.stringify((await readCrm()).clients)).toBe(before);

    const mine = new FormData();
    mine.set("text", "Appel à Alice");
    mine.set("kind", "appel");
    expect(await crmActions.addNoteAction(s.a, undefined, mine)).toMatchObject({ ok: true });
    expect(await crmActions.completeTaskAction(s.taskA)).toMatchObject({ ok: true });
  });

  it("textos : A n'écrit ni ne lit la conversation de Bruno", async () => {
    await as(A.email);
    const fd = new FormData();
    fd.set("body", "Bonjour");
    expect(await textosActions.sendTextoAction(s.convB, undefined, fd)).toMatchObject({ ok: false, message: "Conversation introuvable." });
    await textosActions.markReadAction(s.convB);
    await textosActions.markUnreadAction(s.convB);
    await textosActions.archiveAction(s.convB, true);
    expect(tx.sendReply).not.toHaveBeenCalled();
    expect(tx.markRead).not.toHaveBeenCalled();
    expect(tx.markUnread).not.toHaveBeenCalled();
    expect(tx.setArchived).not.toHaveBeenCalled();
    await textosActions.sendTextoAction(s.convA, undefined, fd);
    expect(tx.sendReply).toHaveBeenCalledTimes(1);
    expect(await rejected(textosActions.saveTextosSettingsAction(undefined, new FormData()))).toContain(REFUSED);
  });

  it("appel masqué : ses clients seulement ; le suivi d'un appel lancé par un autre est refusé", async () => {
    await writeFile(path.join(dir, "telephonie.json"), JSON.stringify({ version: 1, calls: [{ id: "a_testcall0001", createdAt: new Date().toISOString(), by: B.email, target: { kind: "client", ref: s.b }, clientId: s.b, phone: "+15145550162", label: "Bruno E., Longueuil", context: "test", record: false, phase: "fini" }] }));
    await as(A.email);
    expect(await telActions.startMaskedCallAction({ kind: "client", id: s.b })).toEqual({ ok: false, error: "Demande invalide." });
    expect(await telActions.startMaskedCallAction({ kind: "conversation", id: s.convB })).toEqual({ ok: false, error: "Demande invalide." });
    expect(await telActions.startMaskedCallAction({ kind: "lead", id: "l_testlead0001" })).toMatchObject({ ok: false });
    expect(tel.startMaskedCall).not.toHaveBeenCalled();
    expect(await telActions.maskedCallStatusAction("a_testcall0001")).toEqual({ ok: false, error: "Appel introuvable." });
    await telActions.startMaskedCallAction({ kind: "client", id: s.a });
    expect(tel.startMaskedCall).toHaveBeenCalledTimes(1);
    expect(await rejected(telActions.saveCallSettingsAction(undefined, new FormData()))).toContain(REFUSED);
  });

  it("soumissions : A ne touche pas à celle de Bruno (envoi, relance, version, copie, brouillon, lien) ; B oui", async () => {
    await as(A.email);
    const fd = new FormData();
    for (const call of [
      () => soumActions.sendQuoteAction(s.quoteB, fd),
      () => soumActions.remindAction(s.quoteB, fd),
      () => soumActions.reviseAction(s.quoteB),
      () => soumActions.duplicateAction(s.quoteB),
      () => soumActions.duplicateForClientAction(s.quoteB),
      () => soumActions.deleteDraftAction(s.quoteB),
    ]) {
      const d = await rejected(call());
      expect(d).toContain("/gestion/soumissions");
      expect(d).not.toContain(s.quoteB);
    }
    for (const fn of Object.values(soum)) expect(fn).not.toHaveBeenCalled();
    expect(await soumActions.saveQuoteAction(s.quoteB, {})).toEqual({ ok: false, error: "Soumission introuvable." });
    expect(await soumActions.pickClientAction(s.b)).toEqual({ ok: false, error: "Client introuvable." });
    expect(await soumActions.searchClientsAction("Bruno")).toEqual([]);
    expect(await rejected(soumActions.linkDealAction(s.quoteB, fd))).toContain(REFUSED);
    expect(await rejected(soumActions.saveSettingsAction({}))).toContain(REFUSED);
    expect(await rejected(soumActions.savePricesAction({}))).toContain(REFUSED);
    expect(await rejected(soumActions.saveTemplateAction({}))).toContain(REFUSED);

    await as(B.email);
    await rejected(soumActions.remindAction(s.quoteB, fd));
    expect(soum.remindService).toHaveBeenCalledTimes(1);
    expect((await soumActions.pickClientAction(s.b)).ok).toBe(true);
  });

  it("équipe, réattribution, relevés : propriétaire seulement", async () => {
    const fd = new FormData();
    for (const who of [A.email, ADJ.email]) {
      await as(who);
      for (const call of [
        () => teamActions.reassignClientAction(s.b, undefined, fd),
        () => teamActions.inviteMemberAction(undefined, fd),
        () => teamActions.setRoleAction(B.id, "adjoint"),
        () => teamActions.setStatusAction(B.id, false),
        () => teamActions.payStatementAction("2026-09", B.id, undefined, fd),
        () => teamActions.saveTeamSettingsAction(undefined, fd),
        () => teamActions.runRepartitionAction(),
      ]) expect(await rejected(call()), who).toContain(REFUSED);
    }
  });

  it("réattribution par le propriétaire : B perd Bruno, A le récupère, avec historique et audit", async () => {
    await as(OWNER);
    const fd = new FormData();
    fd.set("vendeur", A.id);
    fd.set("raison", "test");
    expect(await teamActions.reassignClientAction(s.b, undefined, fd)).toMatchObject({ ok: true });
    resetCrmMemo();
    await as(A.email);
    expect(txt(await ClientsPage({ searchParams: sp({}) }))).toContain("Bruno");
    // Les tâches suivent le vendeur.
    expect(txt(await TachesPage({ searchParams: sp({}) }))).toContain("Rappeler Bruno");
    await as(B.email);
    expect(await rejected(ClientPage({ params: sp({ id: s.b }), searchParams: sp({}) }))).toContain(NOT_FOUND);
    const log = (await readAudit({ jours: 2 })).entries;
    expect(log.find((e) => e.action === "crm.reattribution")).toMatchObject({ qui: OWNER, details: { client: s.b, de: B.id, vers: A.id } });
  });
});

describe("relevé payé (audit) et commission sans LogisVert", () => {
  it("le propriétaire marque payé le relevé de A : figé et noté au journal", async () => {
    await rm(dir, { recursive: true, force: true });
    dir = await mkdtemp(path.join(tmpdir(), "thermo-releve-"));
    process.env = testEnv(dir);
    resetCrmMemo();
    await seedTeam();
    s = await seedClients(dir, { assignedBefore: new Date(Date.now() - 30 * 86_400_000).toISOString() });
    await as(OWNER);
    const month = new Date().toLocaleDateString("en-CA", { timeZone: "America/Toronto" }).slice(0, 7);
    const releves = txt(await RelevesPage({ searchParams: sp({ mois: month }) }));
    expect(releves).toContain(A.name);
    const fd = new FormData();
    fd.set("confirmer", "oui");
    fd.set("reference", "virement test");
    expect(await teamActions.payStatementAction(month, A.id, undefined, fd)).toMatchObject({ ok: true });
    expect(await teamActions.payStatementAction(month, A.id, undefined, fd)).toMatchObject({ ok: false, error: "Ce relevé est déjà payé." });
    expect(await teamActions.payStatementAction(month, B.id, undefined, fd)).toMatchObject({ ok: false });
    const log = (await readAudit({ jours: 2 })).entries;
    expect(log.find((e) => e.action === "vendeurs.releve")).toMatchObject({ qui: OWNER, details: { vendeur: A.id, mois: month } });
  });
});

describe("test de confidentialité du HomeView, version d'un vendeur", () => {
  it("le HomeView restreint ne contient ni @ ni numéro, ni rien de l'autre vendeur", () => {
    const julie = { firstName: "Julie", lastName: "Tremblay", email: "julie.tremblay@exemple.ca", phone: "514 555-0142" };
    const marc = { firstName: "Marc", lastName: "Gagnon", email: "marc@exemple.ca", phone: "450 555-0177" };
    const data = src({
      journal: [entry("soumission", daysAgo(4), { ...julie, municipality: "Laval" }), entry("contact", hoursAgo(3), { ...marc, municipality: "Longueuil" })],
      quotes: [quote({ client: julie, sentAt: daysAgo(3) }), quote({ client: marc, sentAt: daysAgo(2) })],
      textos: [conv("+14505550177", [msg("in", hoursAgo(2), "Bonjour, marc@exemple.ca")], { unread: 1 })],
    });
    const index = computeIndex(buildBundles(data), data, NOW);
    for (const c of index.clients) {
      const to = c.b.firstName === "Julie" ? A.id : B.id;
      c.b.record = { id: c.b.id, keys: [], stageLog: [], tags: [], notes: [], createdAt: NOW.toISOString(), updatedAt: NOW.toISOString(), assignedTo: { userId: to, at: NOW.toISOString(), by: OWNER, how: "manuel" } };
    }
    const scoped = restrictIndex(index, scopeFor({ role: "vendeur", userId: A.id, email: A.email }));
    const stats = aggregateStats(toRecords(scoped.src.journal), { period: "30", now: NOW });
    const json = JSON.stringify(buildHome(scoped, stats, "30", NOW));
    expect(json).not.toContain("@");
    expect(json).not.toMatch(/\d{10}/);
    expect(json).not.toMatch(/\d{3}[ .-]?\d{3}[ .-]?\d{4}/);
    expect(json).not.toContain("Marc");
    expect(json).not.toContain("Longueuil");
    expect(scoped.clients.map((c) => c.b.firstName)).toEqual(["Julie"]);
    expect(scoped.src.textos).toEqual([]);
  });
});
