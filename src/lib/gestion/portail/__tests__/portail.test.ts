/* Chantier P — portail client : accès par jeton (aucune fuite entre clients), réservation concurrente d'un créneau
   (un seul gagnant), délai de changement, planification du job (date, fenêtre, heure lue par l'agenda, heure prévue du
   chantier, avis), anciens liens toujours valides, noindex. Données fictives ; aucun vrai courriel ni texto. */
import { rm } from "node:fs/promises";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const alerts = vi.hoisted(() => ({ calls: [] as unknown[] }));
vi.mock("next/server", async (orig) => ({ ...(await orig<typeof import("next/server")>()), after: (fn: () => unknown) => void fn() }));
vi.mock("@/lib/gestion/automatisations/followup", async (orig) => {
  const real = await orig<typeof import("@/lib/gestion/automatisations/followup")>();
  return { ...real, alertOwner: vi.fn(async (a: unknown) => void alerts.calls.push(a)) };
});

import { POST as projetPOST } from "@/app/projet/[token]/repondre/route";
import { GET as photoGET } from "@/app/projet/[token]/photo/[photoId]/route";
import { POST as suiviPOST } from "@/app/suivi/[token]/repondre/route";
import { metadata as projetMeta } from "@/app/projet/layout";
import { metadata as dispoMeta } from "@/app/disponibilites/layout";
import nextConfig from "../../../../../next.config";
import { jobSlot } from "../../agenda/agenda";
import { newToken } from "../../auth/magic-link";
import { getSuiviView } from "../../automatisations/followup";
import { oneClickUrl, suiviUrl } from "../../automatisations/messages";
import { ensureDossier } from "../../automatisations/store";
import { getServiceView } from "../../sav/service";
import { readGestion } from "../../store";
import { readTerrain } from "../../terrain/store";
import { acceptedQuote, fakeChannels, tempDir, testEnv, writeStores } from "../../commissions/__tests__/fixtures";
import { addSlots, cancelBooking, getAvailabilityView, getPortalView, photoForPortal, portalServiceToken, removeSlot, reserveSlot, savePortalSettings } from "../service";
import { readPortal } from "../store";
import type { Slot } from "../types";
import { BY, INST, INST_B, JOB_A, JOB_B, twoProjects, writeProjects, writeTerrain } from "./helpers";

const NOW = new Date("2026-09-20T15:00:00Z");
const env = process.env;
let dir: string;

async function setup(offerTokens?: { a?: string; b?: string }) {
  await writeProjects(dir, twoProjects(offerTokens));
  const a = await ensureDossier(JOB_A, NOW);
  const b = await ensureDossier(JOB_B, NOW);
  return { tokenA: a.token, tokenB: b.token };
}

async function slot(day = "2026-09-25", start = "08:00", end = "12:00", installer = INST): Promise<Slot> {
  const r = await addSlots(installer, { day, start, end, repeatWeeks: 0 }, BY, NOW);
  if (!r.ok) throw new Error(r.error);
  return (await readPortal()).slots.find((s) => s.installerId === installer && s.day === day && s.start === start)!;
}

const jobOf = async (id: string) => (await readGestion()).jobs.find((j) => j.id === id)!;
const post = (path: string, body: Record<string, string>) =>
  new Request(`http://localhost:3001${path}`, { method: "POST", body: new URLSearchParams(body).toString(), headers: { origin: "http://localhost:3001", host: "localhost:3001", "content-type": "application/x-www-form-urlencoded" } }) as never;

beforeEach(async () => {
  dir = await tempDir();
  process.env = testEnv(dir);
  alerts.calls.length = 0;
  vi.stubGlobal("fetch", vi.fn(async () => { throw new Error("réseau interdit dans les tests"); }));
});
afterEach(async () => {
  process.env = env;
  vi.unstubAllGlobals();
  await rm(dir, { recursive: true, force: true });
});

describe("accès par jeton", () => {
  it("chaque jeton ne montre que SON projet, sans aucune coordonnée", async () => {
    const { tokenA, tokenB } = await setup();
    await writeTerrain(dir, { [JOB_A]: { installerId: INST, photoId: "f_photoA00001" }, [JOB_B]: { installerId: INST, photoId: "f_photoB00001" } });
    const a = await getPortalView(tokenA, NOW);
    const b = await getPortalView(tokenB, NOW);
    expect(a?.jobNumber).toBe(21);
    expect(b?.jobNumber).toBe(22);
    const sa = JSON.stringify(a);
    for (const leak of ["Dominique", "Bravo", "514 555-0122", "dominique@exemple.ca", "f_photoB00001", "2026-0013", "Longueuil", JOB_B]) expect(sa).not.toContain(leak);
    // Ses propres coordonnées ne sont pas affichées non plus (le lien peut être transféré).
    for (const own of ["514 555-0111", "camille@exemple.ca", "10 rue Fictive", "Alpha"]) expect(sa).not.toContain(own);
    expect(a!.photos.map((p) => p.id)).toEqual(["f_photoA00001"]);
    expect(a!.photos[0].url).toBe(`/projet/${tokenA}/photo/f_photoA00001`);

    expect(await photoForPortal(tokenA, "f_photoB00001")).toBeNull();
    expect((await photoForPortal(tokenA, "f_photoA00001"))?.data.toString()).toBe(`photo-${JOB_A}`);
    const res = await photoGET(new Request(`http://localhost:3001/projet/${tokenA}/photo/f_photoB00001`) as never, { params: Promise.resolve({ token: tokenA, photoId: "f_photoB00001" }) });
    expect(res.status).toBe(404);

    // Jeton inconnu (bonne forme), tronqué ou fantaisiste : rien.
    expect(await getPortalView(newToken(), NOW)).toBeNull();
    expect(await getPortalView(tokenA.slice(0, 30), NOW)).toBeNull();
    expect(await getPortalView("../../gestion.json", NOW)).toBeNull();
  });

  it("un jeton ne peut ni réserver ni annuler le rendez-vous d'un autre client", async () => {
    const { tokenA } = await setup();
    const s = await slot();
    const f = fakeChannels();
    expect(await reserveSlot(tokenA, JOB_B, s.id, { now: NOW, channels: f.ch })).toMatchObject({ ok: false, code: "introuvable" });
    expect(await cancelBooking(tokenA, JOB_B, { now: NOW, channels: f.ch })).toMatchObject({ ok: false, code: "introuvable" });
    const res = await projetPOST(post(`/projet/${tokenA}/repondre`, { action: "reserver", jobId: JOB_B, slotId: s.id }), { params: Promise.resolve({ token: tokenA }) });
    expect(res.status).toBe(303);
    expect(res.headers.get("location")).toContain("e=introuvable");
    expect((await jobOf(JOB_B)).slotId).toBeUndefined();
    expect(f.calls).toHaveLength(0);
  });

  it("disponibilités : l'installateur ne voit et ne retire que ses propres moments", async () => {
    const offerToken = newToken();
    await setup({ a: offerToken });
    const mine = await slot();
    const other = await slot("2026-09-26", "13:00", "16:00", INST_B);
    const view = await getAvailabilityView(offerToken, NOW);
    expect(view?.installerId).toBe(INST);
    expect(view!.days.flatMap((d) => d.slots.map((x) => x.id))).toEqual([mine.id]);
    expect(await removeSlot(INST, other.id, `installateur:${INST}`, NOW)).toMatchObject({ ok: false, code: "introuvable" });
    expect(await getAvailabilityView(newToken(), NOW)).toBeNull();
  });

  it("pages à jeton jamais indexées : balise meta et en-tête X-Robots-Tag", async () => {
    const all = await nextConfig.headers!();
    for (const source of ["/projet/:path*", "/disponibilites/:path*"]) {
      expect(all.find((h) => h.source === source)?.headers).toContainEqual({ key: "X-Robots-Tag", value: "noindex, nofollow" });
    }
    for (const m of [projetMeta, dispoMeta]) expect(m.robots).toMatchObject({ index: false, follow: false });
  });
});

describe("réservation d'un créneau", () => {
  it("deux clients sur le même moment en même temps : un seul gagnant, le moment disparaît pour l'autre", async () => {
    const { tokenA, tokenB } = await setup();
    const s = await slot();
    const f = fakeChannels();
    const [r1, r2] = await Promise.all([reserveSlot(tokenA, JOB_A, s.id, { now: NOW, channels: f.ch }), reserveSlot(tokenB, JOB_B, s.id, { now: NOW, channels: f.ch })]);
    expect([r1.ok, r2.ok].filter(Boolean)).toHaveLength(1);
    expect(r1.ok ? r2 : r1).toMatchObject({ ok: false, code: "pris" });
    expect((await readGestion()).jobs.filter((j) => j.slotId === s.id)).toHaveLength(1);
    const loser = await getPortalView(r1.ok ? tokenB : tokenA, NOW);
    expect(loser!.schedule.days.flatMap((d) => d.slots.map((x) => x.id))).not.toContain(s.id);
    expect(f.count("installerMail")).toBe(1);
  });

  it("planifie le job : date, fenêtre, heure lue par l'agenda, heure prévue du chantier ; installateur et propriétaire avertis", async () => {
    const { tokenA } = await setup();
    await writeTerrain(dir, { [JOB_A]: { installerId: INST, enRoute: { at: "2026-09-20T14:50:00.000Z", etaAt: "2026-09-20T15:30:00.000Z" } } });
    const s = await slot();
    const f = fakeChannels();
    expect(await reserveSlot(tokenA, JOB_A, s.id, { now: NOW, channels: f.ch, baseUrl: "https://exemple.ca" })).toMatchObject({ ok: true, changed: true });
    const job = await jobOf(JOB_A);
    expect(job).toMatchObject({ status: "planifie", scheduledFor: "2026-09-25", scheduledTime: "08:00", scheduledWindow: "8 h à 12 h", slotId: s.id });
    expect(job.audit[job.audit.length - 1]).toMatchObject({ by: "client", action: "date choisie par le client" });
    expect(jobSlot(job)).toEqual({ day: "2026-09-25", time: "08:00" });
    expect((await readTerrain()).records[JOB_A].plannedAt).toBe("2026-09-25T12:00:00.000Z");
    expect([f.count("installerMail"), f.count("installerSms"), f.count("ownerMail"), f.count("ownerSms")]).toEqual([1, 1, 1, 1]);
    expect(f.count("clientMail") + f.count("clientSms")).toBe(0);
    const v = await getPortalView(tokenA, NOW);
    expect(v!.schedule).toMatchObject({ day: "2026-09-25", window: "8 h à 12 h", fromSlot: true, canCancel: true });
    // « En route » avec l'heure estimée, lu dans le dossier de chantier.
    expect(v!.field).toMatchObject({ state: "en-route", etaAt: "2026-09-20T15:30:00.000Z" });
    // Même moment une deuxième fois : aucun nouvel avis.
    expect(await reserveSlot(tokenA, JOB_A, s.id, { now: NOW, channels: f.ch })).toMatchObject({ ok: true, changed: false });
    expect(f.count("installerMail")).toBe(1);
  });

  it("sans soumission acceptée, la date ne se choisit pas en ligne", async () => {
    const p = twoProjects();
    await writeStores(dir, { jobs: p.jobs, installers: p.installers, quotes: [acceptedQuote({ id: "q_testquote01", number: "2026-0012", phone: "514 555-0111", email: "camille@exemple.ca" })] });
    const tokenB = (await ensureDossier(JOB_B, NOW)).token;
    const s = await slot();
    expect(await reserveSlot(tokenB, JOB_B, s.id, { now: NOW, channels: fakeChannels().ch })).toMatchObject({ ok: false, code: "sans-soumission" });
    expect((await getPortalView(tokenB, NOW))!.schedule.canBook).toBe(false);
  });
});

describe("délai de changement", () => {
  it("changer ou annuler en ligne jusqu'au délai (48 h par défaut), ensuite « appelez-nous »", async () => {
    const { tokenA, tokenB } = await setup();
    const s1 = await slot("2026-09-25", "08:00", "12:00");
    const s2 = await slot("2026-09-28", "13:00", "17:00");
    const f = fakeChannels();
    expect((await reserveSlot(tokenA, JOB_A, s1.id, { now: NOW, channels: f.ch })).ok).toBe(true);

    const late = new Date("2026-09-24T00:00:00Z"); // 36 h avant le rendez-vous
    expect(await reserveSlot(tokenA, JOB_A, s2.id, { now: late, channels: f.ch })).toMatchObject({ ok: false, code: "delai" });
    expect(await cancelBooking(tokenA, JOB_A, { now: late, channels: f.ch })).toMatchObject({ ok: false, code: "delai" });
    const lateView = await getPortalView(tokenA, late);
    expect(lateView!.schedule.canCancel).toBe(false);
    expect(lateView!.schedule.blockText).toContain("appelez-nous");

    const early = new Date("2026-09-22T00:00:00Z"); // 3 jours avant : permis
    expect(await reserveSlot(tokenA, JOB_A, s2.id, { now: early, channels: f.ch })).toMatchObject({ ok: true, changed: true });
    expect(await jobOf(JOB_A)).toMatchObject({ scheduledFor: "2026-09-28", scheduledTime: "13:00", slotId: s2.id });
    // L'ancien moment redevient libre pour les autres clients.
    expect((await getPortalView(tokenB, early))!.schedule.days.flatMap((d) => d.slots.map((x) => x.id))).toContain(s1.id);

    expect((await cancelBooking(tokenA, JOB_A, { now: early, channels: f.ch })).ok).toBe(true);
    const job = await jobOf(JOB_A);
    expect(job.status).toBe("attribue");
    expect(job.scheduledFor).toBeNull();
    expect(job.slotId).toBeUndefined();
    expect(job.scheduledTime).toBeUndefined();
    expect((await readTerrain()).records[JOB_A].plannedAt).toBeUndefined();
  });

  it("le délai se règle dans /gestion", async () => {
    const { tokenA } = await setup();
    await savePortalSettings({ changeDeadlineHours: 12 }, BY, NOW);
    const s = await slot();
    const f = fakeChannels();
    expect((await reserveSlot(tokenA, JOB_A, s.id, { now: NOW, channels: f.ch })).ok).toBe(true);
    expect((await cancelBooking(tokenA, JOB_A, { now: new Date("2026-09-24T00:00:00Z"), channels: f.ch })).ok).toBe(true);
  });
});

describe("anciens liens toujours valides", () => {
  it("le jeton /suivi ouvre le portail ; /suivi répond encore ; les messages mènent au portail ; /devis et /service restent accessibles", async () => {
    const { tokenA } = await setup();
    expect(await getSuiviView(tokenA, NOW)).not.toBeNull();
    const v = await getPortalView(tokenA, NOW);
    expect(v).not.toBeNull();

    const old = await suiviPOST(post(`/suivi/${tokenA}/repondre`, { action: "sondage", note: "5" }), { params: Promise.resolve({ token: tokenA }) });
    expect(old.status).toBe(303);
    expect(old.headers.get("location")).toContain(`/suivi/${tokenA}?ok=sondage&note=5`);
    const neu = await projetPOST(post(`/projet/${tokenA}/repondre`, { action: "sondage", note: "4" }), { params: Promise.resolve({ token: tokenA }) });
    expect(neu.status).toBe(303);
    expect(neu.headers.get("location")).toContain(`/projet/${tokenA}?ok=sondage&note=4`);
    expect((await getSuiviView(tokenA, NOW))!.survey?.rating).toBe(4);

    const links = { base: "https://exemple.ca", token: tokenA };
    expect(suiviUrl(links, "sondage", { note: "5" })).toBe(`https://exemple.ca/projet/${tokenA}?q=sondage&note=5`);
    expect(oneClickUrl(links)).toBe(`https://exemple.ca/suivi/${tokenA}/repondre?action=desabonnement`);

    expect(v!.quote).toMatchObject({ number: "2026-0012", href: `/devis/${"t".repeat(43)}` });
    const serviceToken = await portalServiceToken(tokenA, NOW);
    expect((await getServiceView(serviceToken!))?.jobNumber).toBe(21);
  });
});
