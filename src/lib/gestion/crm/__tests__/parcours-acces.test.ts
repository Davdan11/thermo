/* Refonte R2 — accès aux nouvelles pages et à la nouvelle action : sans session, rien (connexion) ; Réglages des étapes et
   leur action réservés au propriétaire ; « Pourquoi on perd » : un vendeur ne voit que ses dossiers. La raison structurée
   d'une perte est enregistrée dans crm.json. Aucun envoi réel (NODE_ENV=test). */
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const jar = vi.hoisted(() => ({ value: undefined as string | undefined }));
vi.mock("next/headers", () => ({
  cookies: async () => ({ get: (n: string) => (n === "tav_gestion" && jar.value ? { name: n, value: jar.value } : undefined), set: vi.fn() }),
  headers: async () => new Headers({ host: "localhost:3001", "x-forwarded-for": "198.51.100.7" }),
}));
vi.mock("next/cache", () => ({ refresh: vi.fn(), revalidatePath: vi.fn() }));

import PertesPage from "@/app/gestion/(prive)/pertes/page";
import EtapesPage from "@/app/gestion/(prive)/reglages/etapes/page";
import PipelinePage from "@/app/gestion/(prive)/pipeline/page";
import { saveParcoursSettingsAction } from "@/app/gestion/(prive)/parcours-actions";
import { setStageAction } from "@/app/gestion/(prive)/crm-actions";
import { resetSecretCache } from "../../auth/secret";
import { A, B, cookieFor, OWNER, seedClients, seedTeam, testEnv, txt, type Seed } from "../../equipe/__tests__/helpers";
import { resetCrmMemo, setStage } from "../service";
import { readCrm } from "../store";

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

function settingsForm(over: Record<string, string> = {}): FormData {
  const fd = new FormData();
  const base: Record<string, string> = { label_demande: "Nouvelle demande", "delay_va-de-l-avant": "4", "sms_contrat-pret": "on", prob_ouverte: "ouverte", escalateAfterHours: "1", quietStart: "20", quietEnd: "8", ...over };
  for (const [k, v] of Object.entries(base)) fd.set(k, v);
  return fd;
}

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-parcours-"));
  process.env = testEnv(dir);
  delete process.env.ADMIN_SESSION_SECRET;
  resetSecretCache();
  resetCrmMemo();
  jar.value = undefined;
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

describe("sans session", () => {
  it("les pages et l'action renvoient vers la connexion, sans rien écrire", async () => {
    expect(await rejected(PertesPage({ searchParams: sp({}) }))).toContain("/gestion/connexion");
    expect(await rejected(EtapesPage())).toContain("/gestion/connexion");
    expect(await rejected(PipelinePage({ searchParams: sp({}) }))).toContain("/gestion/connexion");
    expect(await rejected(saveParcoursSettingsAction(undefined, settingsForm()))).toContain("/gestion/connexion");
    expect((await readCrm()).parcours).toBeUndefined();
  });
});

describe("vendeur", () => {
  it("réglages des étapes : refusés (page et action)", async () => {
    await as(A.email);
    expect(await rejected(EtapesPage())).toContain(REFUSED);
    expect(await rejected(saveParcoursSettingsAction(undefined, settingsForm()))).toContain(REFUSED);
    expect((await readCrm()).parcours).toBeUndefined();
  });

  it("« Pourquoi on perd » et pipeline : seulement ses dossiers, rien de l'autre vendeur", async () => {
    await setStage(s.b, "perdue", "Trop cher", OWNER, new Date(), { cause: "prix" });
    await setStage(s.a, "perdue", "Projet reporté au printemps", OWNER, new Date(), { cause: "reporte" });
    resetCrmMemo();
    await as(A.email);
    const pa = txt(await PertesPage({ searchParams: sp({ periode: "tout" }) }));
    expect(pa).toContain("Alice");
    expect(pa).toContain("Projet reporté");
    for (const leak of ["Bruno", "Trop cher", s.b, "555-0162"]) expect(pa).not.toContain(leak);
    const pipe = txt(await PipelinePage({ searchParams: sp({ vue: "qui" }) }));
    for (const leak of ["Bruno", s.b, B.name]) expect(pipe).not.toContain(leak);
    await as(OWNER);
    const all = txt(await PertesPage({ searchParams: sp({ periode: "tout" }) }));
    expect(all).toContain("Bruno");
    expect(all).toContain("Prix");
  });
});

describe("propriétaire", () => {
  it("réglages des étapes : page, enregistrement validé", async () => {
    await as(OWNER);
    expect(txt(await EtapesPage())).toContain("Contrat prêt à signer");
    expect(await saveParcoursSettingsAction(undefined, settingsForm({ "delay_va-de-l-avant": "-3" }))).toMatchObject({ ok: false });
    expect((await readCrm()).parcours).toBeUndefined();
    expect(await saveParcoursSettingsAction(undefined, settingsForm())).toEqual({ ok: true, message: "Réglages des étapes enregistrés." });
    const p = (await readCrm()).parcours!;
    expect(p).toMatchObject({ labels: { demande: "Nouvelle demande" }, alertHours: { "va-de-l-avant": 4 }, probability: { ouverte: "ouverte" }, escalateAfterHours: 1, quietStart: 20, quietEnd: 8, updatedBy: OWNER });
    expect(p.sms["contrat-pret"]).toBe(true);
    expect(p.sms.demande).toBe(false);
    expect(await saveParcoursSettingsAction(undefined, settingsForm({ "delay_contrat-pret": "0" }))).toMatchObject({ ok: true });
    expect((await readCrm()).parcours!.alertHours["contrat-pret"]).toBeNull();
  });

  it("marquer perdu avec une raison structurée : gardée dans crm.json (perte et historique) ; raison inconnue refusée", async () => {
    await as(OWNER);
    expect(await setStageAction(s.b, "perdue", "A choisi un concurrent", "concurrent")).toMatchObject({ ok: true });
    const rec = (await readCrm()).clients[s.b];
    expect(rec.lost).toMatchObject({ reason: "A choisi un concurrent", cause: "concurrent" });
    expect(rec.stageLog.at(-1)).toMatchObject({ to: "perdue", cause: "concurrent" });
    expect(await setStageAction(s.b, "perdue", "x", "au-hasard")).toEqual({ ok: false, error: "Demande invalide." });
    expect(await setStageAction(s.a, "contacte", "")).toMatchObject({ ok: true });
    expect((await readCrm()).clients[s.a].stageLog.at(-1)).not.toHaveProperty("cause");
  });
});
