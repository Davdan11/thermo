/* Chantier D — visite photo à distance : accès par jeton (aucune fuite entre clients), expiration du lien, validation
   des fichiers, suggestions jamais appliquées sans clic, aucun champ inventé si illisible, désactivation sans clé,
   file et nouvelles tentatives, suppression selon la conservation, envoi du lien avec STOP et identification, tâche
   CRM. Aucun vrai texto, courriel ni appel à Gemini : tout est simulé. Données fictives. */
import { mkdtemp, readdir, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import sharp from "sharp";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const mail = vi.hoisted(() => ({ sendClientEmail: vi.fn(async (..._a: unknown[]) => true) }));
vi.mock("@/lib/crm/email", async (orig) => ({ ...(await orig<typeof import("@/lib/crm/email")>()), sendClientEmail: mail.sendClientEmail }));
const sms = vi.hoisted(() => ({ sendSms: vi.fn(async (..._a: unknown[]) => "envoye" as const) }));
vi.mock("@/lib/gestion/sms", async (orig) => ({ ...(await orig<typeof import("@/lib/gestion/sms")>()), sendSms: sms.sendSms }));
const crm = vi.hoisted(() => ({ addTask: vi.fn(async (..._a: unknown[]) => ({ ok: true as const })), clientIdForQuote: vi.fn(async () => "c_0123456789ab") }));
vi.mock("@/lib/gestion/crm/service", () => crm);

import { smsSegments } from "@/lib/textos/segments";
import { createQuote } from "@/lib/soumissions/quote";
import { mutateSoumissions, readSoumissions } from "@/lib/soumissions/store";
import { readyContent } from "@/lib/soumissions/__tests__/fixtures";
import { visitEmail, visitSms } from "../messages";
import { CRM_TASK_TITLE, createVisitRequest, decideSuggestion, getVisitView, photoForVisitToken, purgeExpiredVisits, removeVisitPhoto, resendVisitLink, saveVisitSettings, submitVisit, uploadVisitPhoto, visitsForAdmin } from "../service";
import { readVisites, visitesPhotosDir } from "../store";
import { visitItems } from "../timeline";
import { emptyAnswers, type VisitAnswers } from "../types";
import { MAX_ATTEMPTS, parseSuggestions, processVisionQueue, resetVisionState, type VisionCaller } from "../vision";

const env = process.env;
let dir: string;
const NOW = new Date("2026-09-15T15:00:00Z");
const BASE = "http://test.local";
const DAY = 86_400_000;
let jpeg: Buffer;

const contact = (n: number) => ({ firstName: `Camille${n}`, lastName: "Exemple", phone: `514 555-01${String(10 + n)}`, email: `client${n}@exemple.ca` });
const tokenOf = (link: string) => link.split("/visite/")[1];

async function newVisit(n: number, over: { quoteId?: string | null; channels?: { sms: boolean; email: boolean } } = {}) {
  const r = await createVisitRequest({ quoteId: over.quoteId ?? null, clientId: null, contact: contact(n), rooms: ["Salon"], channels: over.channels ?? { sms: true, email: true } }, "proprio@exemple.ca", BASE, NOW);
  if (!r.ok) throw new Error(r.error);
  return { id: r.id, token: tokenOf(r.link), result: r };
}

const answers = (over: Partial<VisitAnswers> = {}): VisitAnswers => ({ ...emptyAnswers(), propertyType: "Maison unifamiliale", rooms: ["Salon"], ...over });

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-visites-"));
  process.env = { ...env, GESTION_DATA_DIR: dir, TEXTOS_DATA_DIR: dir, ADMIN_EMAILS: "proprio@exemple.ca", NODE_ENV: "test", TEXTOS_ENVOIS_DEV: "", TWILIO_ACCOUNT_SID: "", TWILIO_AUTH_TOKEN: "", TWILIO_PHONE_NUMBER: "", GEMINI_API_KEY: "", VISITES_VISION_DEV: "" };
  vi.clearAllMocks();
  resetVisionState();
  jpeg ??= await sharp({ create: { width: 160, height: 120, channels: 3, background: "#557799", noise: { type: "gaussian", mean: 120, sigma: 30 } } }).jpeg().toBuffer();
});
afterEach(async () => {
  process.env = env;
  vi.unstubAllGlobals();
  await rm(dir, { recursive: true, force: true });
});

describe("accès par jeton", () => {
  it("un jeton n'ouvre que SA demande : photos, page et retrait ; jeton inconnu refusé ; fichiers hors de public/", async () => {
    const a = await newVisit(1);
    const b = await newVisit(2);
    expect(a.token).toMatch(/^[A-Za-z0-9_-]{43}$/);
    expect((await readVisites()).requests.every((r) => r.tokenHash.length === 64 && !JSON.stringify(r).includes(a.token))).toBe(true);
    const up = await uploadVisitPhoto(a.token, { step: "mur-exterieur", unit: null }, jpeg, NOW);
    if (!up.ok) throw new Error(up.error);
    expect(await photoForVisitToken(a.token, up.photo.id, NOW)).not.toBeNull();
    expect(await photoForVisitToken(b.token, up.photo.id, NOW)).toBeNull();
    expect(await photoForVisitToken("x".repeat(43), up.photo.id, NOW)).toBeNull();
    const viewB = await getVisitView(b.token, NOW);
    expect(viewB.state === "ok" && viewB.view.photos).toEqual([]);
    expect(viewB.state === "ok" && viewB.view.firstName).toBe("Camille2");
    expect(await removeVisitPhoto(b.token, up.photo.id, NOW)).toEqual({ ok: false, error: "Photo introuvable." });
    expect((await getVisitView("pas-un-jeton", NOW)).state).toBe("invalide");
    expect(visitesPhotosDir().startsWith(dir)).toBe(true);
    expect(await readdir(visitesPhotosDir())).toEqual([`${up.photo.id}.webp`]);
  });

  it("nouveau lien : l'ancien jeton cesse de fonctionner", async () => {
    const a = await newVisit(1);
    const r = await resendVisitLink(a.id, { sms: false, email: true }, "proprio@exemple.ca", BASE, NOW);
    if (!r.ok) throw new Error(r.error);
    expect((await getVisitView(a.token, NOW)).state).toBe("invalide");
    expect((await getVisitView(tokenOf(r.link), NOW)).state).toBe("ok");
  });
});

describe("expiration du lien", () => {
  it("après la durée de validité : page, photos et envoi refusés", async () => {
    const a = await newVisit(1);
    const later = new Date(NOW.getTime() + 15 * DAY);
    expect((await getVisitView(a.token, new Date(NOW.getTime() + 13 * DAY))).state).toBe("ok");
    expect((await getVisitView(a.token, later)).state).toBe("expiree");
    expect(await uploadVisitPhoto(a.token, { step: "acces", unit: null }, jpeg, later)).toEqual({ ok: false, error: "Ce lien a expiré : demandez-en un nouveau." });
    expect((await submitVisit(a.token, answers(), BASE, later)).ok).toBe(false);
    // Durée réglable.
    await saveVisitSettings({ retentionMonths: 12, linkDays: 3 }, "proprio@exemple.ca", NOW);
    const b = await newVisit(2);
    expect((await getVisitView(b.token, new Date(NOW.getTime() + 4 * DAY))).state).toBe("expiree");
  });
});

describe("validation des fichiers", () => {
  it("type réel, taille, étape, pièce et nombre de photos vérifiés au serveur", async () => {
    const a = await newVisit(1);
    const bad = (e: string) => ({ ok: false, error: e });
    expect(await uploadVisitPhoto(a.token, { step: "acces", unit: null }, Buffer.from("pas une image du tout"), NOW)).toEqual(bad("Format non reconnu : JPEG, PNG ou WebP seulement."));
    expect(await uploadVisitPhoto(a.token, { step: "acces", unit: null }, Buffer.from("%PDF-1.7 faux document"), NOW)).toEqual(bad("Format non reconnu : JPEG, PNG ou WebP seulement."));
    expect(await uploadVisitPhoto(a.token, { step: "acces", unit: null }, Buffer.alloc(0), NOW)).toEqual(bad("Image vide ou trop lourde (12 Mo au plus)."));
    expect(await uploadVisitPhoto(a.token, { step: "acces", unit: null }, Buffer.concat([jpeg, Buffer.alloc(12 * 1024 * 1024)]), NOW)).toEqual(bad("Image vide ou trop lourde (12 Mo au plus)."));
    expect(await uploadVisitPhoto(a.token, { step: "piece", unit: null }, jpeg, NOW)).toEqual(bad("Pièce inconnue."));
    expect(await uploadVisitPhoto(a.token, { step: "piece", unit: 9 }, jpeg, NOW)).toEqual(bad("Pièce inconnue."));
    for (let i = 0; i < 3; i++) expect((await uploadVisitPhoto(a.token, { step: "acces", unit: null }, jpeg, NOW)).ok).toBe(true);
    expect(await uploadVisitPhoto(a.token, { step: "acces", unit: null }, jpeg, NOW)).toEqual(bad("3 photos au plus pour cette étape."));
    // Reprise après une coupure : la même photo (même identifiant du téléphone) n'est pas doublée.
    const one = await uploadVisitPhoto(a.token, { step: "piece", unit: 0, clientId: "abcdef12-3456" }, jpeg, NOW);
    const two = await uploadVisitPhoto(a.token, { step: "piece", unit: 0, clientId: "abcdef12-3456" }, jpeg, NOW);
    expect(one.ok && two.ok && one.photo.id === two.photo.id).toBe(true);
    expect((await readVisites()).requests[0].photos).toHaveLength(4);
  });
});

async function submittedWithPhotos(n = 1, quoteId: string | null = null) {
  const v = await newVisit(n, { quoteId });
  const ids: Record<string, string> = {};
  for (const step of ["panneau-ouvert", "mur-exterieur", "systeme-actuel", "acces"] as const) {
    const r = await uploadVisitPhoto(v.token, { step, unit: null }, jpeg, NOW);
    if (!r.ok) throw new Error(r.error);
    ids[step] = r.photo.id;
  }
  const s = await submitVisit(v.token, answers(), BASE, NOW);
  if (!s.ok) throw new Error(s.error);
  return { ...v, ids };
}

const CHOICES = { wallMaterial: ["Brique", "Vinyle", "Bois"], outdoorLocation: ["Cour arrière", "Côté de la maison"] };

describe("lecture des photos (Gemini simulé)", () => {
  it("sans clé : photos seules, aucun appel", async () => {
    const call = vi.fn<VisionCaller>(async () => ({ ok: true, text: "{}" }));
    const fetchSpy = vi.fn();
    vi.stubGlobal("fetch", fetchSpy);
    const v = await submittedWithPhotos();
    expect((await readVisites()).requests[0].ai.state).toBe("sans-cle");
    await processVisionQueue(NOW, { call, choices: CHOICES });
    expect(call).not.toHaveBeenCalled();
    expect(fetchSpy).not.toHaveBeenCalled();
    const [dto] = await visitsForAdmin({ quoteId: null, clientIds: [], phones: [], emails: ["client1@exemple.ca"] }, NOW);
    expect(dto.id).toBe(v.id);
    expect(dto.photos).toHaveLength(4);
    expect(dto.suggestions).toEqual([]);
  });

  it("en test ou en développement, jamais d'appel réel à Gemini, même avec une clé", async () => {
    process.env.GEMINI_API_KEY = "cle-fictive";
    const fetchSpy = vi.fn();
    vi.stubGlobal("fetch", fetchSpy);
    await submittedWithPhotos();
    await processVisionQueue(NOW, { choices: CHOICES });
    expect(fetchSpy).not.toHaveBeenCalled();
    expect((await readVisites()).requests[0].ai.state).toBe("desactive");
  });

  it("suggestions validées, avec confiance et photo source ; JAMAIS appliquées à la soumission sans clic", async () => {
    process.env.GEMINI_API_KEY = "cle-fictive";
    const qid = await mutateSoumissions((d) => ({ result: createQuote(d, readyContent(), "proprio@exemple.ca", NOW).id, changed: true }));
    const before = JSON.stringify((await readSoumissions()).quotes[0].versions[0].content);
    const v = await submittedWithPhotos(1, qid);
    const call = vi.fn<VisionCaller>(async () => ({
      ok: true,
      text: JSON.stringify({
        panelAmps: { value: 200, photo: 1, confidence: 0.92 },
        wallMaterial: { value: "brique", photo: 2, confidence: 0.8 },
        outdoorLocation: { value: "Cour arrière", photo: 2, confidence: 0.7 },
        oldSystem: { brand: "Marque Test", model: "ABC-123", photo: 3, confidence: 0.9 },
      }),
    }));
    await processVisionQueue(NOW, { call, choices: CHOICES });
    expect(call).toHaveBeenCalledTimes(1);
    const r = (await readVisites()).requests[0];
    expect(r.ai.state).toBe("fait");
    expect(r.suggestions.map((s) => [s.field, s.value, s.photoId])).toEqual([
      ["panelCapacity", "200 A", v.ids["panneau-ouvert"]],
      ["wallMaterial", "Brique", v.ids["mur-exterieur"]],
      ["outdoorLocation", "Cour arrière", v.ids["mur-exterieur"]],
      ["oldSystem", "Marque Test ABC-123", v.ids["systeme-actuel"]],
    ]);
    expect(r.suggestions.every((s) => !s.decision)).toBe(true);
    // Rien n'a touché la soumission, ni la lecture ni la décision « Appliquer » (qui ne fait que tracer le clic).
    expect(JSON.stringify((await readSoumissions()).quotes[0].versions[0].content)).toBe(before);
    expect((await decideSuggestion(v.id, r.suggestions[0].id, "appliquee", "proprio@exemple.ca", NOW)).ok).toBe(true);
    expect(JSON.stringify((await readSoumissions()).quotes[0].versions[0].content)).toBe(before);
    const after = (await readVisites()).requests[0].suggestions[0];
    expect(after).toMatchObject({ decision: "appliquee", decidedBy: "proprio@exemple.ca" });
  });

  it("aucun champ inventé : illisible, peu sûr, hors des choix, mauvaise photo ou mesure devinée → rien", () => {
    const selected = [
      { n: 1, photo: { id: "w_panneau0001", step: "panneau-ouvert" as const } },
      { n: 2, photo: { id: "w_mur00000001", step: "mur-exterieur" as const } },
      { n: 3, photo: { id: "w_systeme0001", step: "systeme-actuel" as const } },
    ];
    const none = parseSuggestions(JSON.stringify({ panelAmps: { value: null, photo: 1, confidence: 0.9 }, wallMaterial: { value: null, photo: 2, confidence: 0.1 }, outdoorLocation: { value: null, photo: null, confidence: 0 }, oldSystem: { brand: null, model: null, photo: 3, confidence: 0.2 } }), selected, CHOICES);
    expect(none).toEqual([]);
    const tricky = parseSuggestions(
      JSON.stringify({
        panelAmps: { value: 200, photo: 1, confidence: 0.3 },
        wallMaterial: { value: "Marbre de Carrare", photo: 2, confidence: 0.95 },
        outdoorLocation: { value: "Cour arrière", photo: 3, confidence: 0.95 },
        oldSystem: { brand: "Marque", model: "unknown", photo: 3, confidence: 0.95 },
        lineLengthFt: { value: 25, photo: 2, confidence: 0.99 },
        panelDistance: 30,
      }),
      selected,
      CHOICES,
    );
    expect(tricky).toEqual([]);
    expect(parseSuggestions("pas du JSON", selected, CHOICES)).toEqual([]);
    expect(parseSuggestions(JSON.stringify({ panelAmps: { value: 5000, photo: 1, confidence: 0.99 } }), selected, CHOICES)).toEqual([]);
  });

  it("file : Gemini indisponible → nouvelle tentative plus tard, puis abandon ; photos toujours là", async () => {
    process.env.GEMINI_API_KEY = "cle-fictive";
    await submittedWithPhotos();
    const call = vi.fn<VisionCaller>(async () => ({ ok: false, retry: true, error: "Gemini 429" }));
    await processVisionQueue(NOW, { call, choices: CHOICES });
    let r = (await readVisites()).requests[0];
    expect(r.ai).toMatchObject({ state: "attente", attempts: 1, lastError: "Gemini 429" });
    expect(Date.parse(r.ai.nextAt!)).toBe(NOW.getTime() + 2 * 60_000);
    // Pas encore l'heure : rien.
    await processVisionQueue(new Date(NOW.getTime() + 60_000), { call, choices: CHOICES });
    expect(call).toHaveBeenCalledTimes(1);
    let t = NOW.getTime();
    for (let i = 1; i < MAX_ATTEMPTS; i++) {
      t += 24 * 3_600_000;
      await processVisionQueue(new Date(t), { call, choices: CHOICES });
    }
    r = (await readVisites()).requests[0];
    expect(call).toHaveBeenCalledTimes(MAX_ATTEMPTS);
    expect(r.ai.state).toBe("echec");
    expect(r.photos).toHaveLength(4);
  });
});

describe("conservation", () => {
  it("photos, réponses et coordonnées supprimées à la fin de la durée (12 mois par défaut, réglable)", async () => {
    const v = await submittedWithPhotos();
    expect(await readdir(visitesPhotosDir())).toHaveLength(4);
    expect((await purgeExpiredVisits(new Date(NOW.getTime() + 360 * DAY))).purged).toBe(0);
    const res = await purgeExpiredVisits(new Date("2027-09-15T15:00:01Z"));
    expect(res).toEqual({ purged: 1, files: 4 });
    expect(await readdir(visitesPhotosDir())).toEqual([]);
    const r = (await readVisites()).requests[0];
    expect(r).toMatchObject({ photos: [], answers: null, suggestions: [], contact: { firstName: "", lastName: "", phone: "", email: "" } });
    expect(r.purgedAt).toBeTruthy();
    expect((await getVisitView(v.token, NOW)).state).toBe("supprimee");
    // Durée réglée à 3 mois : supprimée dès 3 mois.
    await saveVisitSettings({ retentionMonths: 3, linkDays: 14 }, "proprio@exemple.ca", NOW);
    await submittedWithPhotos(2);
    expect((await purgeExpiredVisits(new Date("2026-12-15T15:00:01Z"))).purged).toBe(1);
  });
});

describe("envoi du lien", () => {
  it("texto et courriel : identification de l'entreprise, lien, STOP ; texto en GSM-7", () => {
    const t = visitSms({ firstName: "Camille", link: "https://thermopompesavendre.ca/visite/abc", linkDays: 14 });
    expect(t).toMatch(/^Thermopompes A Vendre : /);
    expect(t).toContain("https://thermopompesavendre.ca/visite/abc");
    expect(t).toMatch(/Répondez STOP pour ne plus recevoir de textos\.$/);
    expect(smsSegments(t).encoding).toBe("GSM-7");
    const e = visitEmail({ firstName: "Camille", link: "https://thermopompesavendre.ca/visite/abc", linkDays: 14, retentionMonths: 12 });
    expect(e.html).toContain("Thermopompes À Vendre");
    expect(e.html).toContain("STOP");
    expect(e.html).toContain("12 mois");
    expect(e.text).toMatch(/Pour ne plus recevoir nos courriels, répondez STOP\./);
    expect(e.text).toContain("Ne photographiez aucune personne");
  });

  it("hors production, rien ne part (simulé) ; avec TEXTOS_ENVOIS_DEV=1, le texto et le courriel partent avec STOP", async () => {
    const quiet = await newVisit(1);
    expect(quiet.result).toMatchObject({ sms: "non-configure", email: "simule" });
    expect(sms.sendSms).not.toHaveBeenCalled();
    expect(mail.sendClientEmail).not.toHaveBeenCalled();

    Object.assign(process.env, { TEXTOS_ENVOIS_DEV: "1", TWILIO_ACCOUNT_SID: "ACtest", TWILIO_AUTH_TOKEN: "test", TWILIO_PHONE_NUMBER: "+15145550100" });
    const live = await newVisit(2);
    expect(live.result).toMatchObject({ sms: "envoye", email: "envoye" });
    const [to, body] = sms.sendSms.mock.calls[0] as [string, string];
    expect(to).toBe("+15145550112");
    expect(body).toContain("Thermopompes A Vendre");
    expect(body).toContain(`/visite/${live.token}`);
    expect(body).toContain("STOP");
    const [mailTo, , html] = mail.sendClientEmail.mock.calls[0] as [string, string, string];
    expect(mailTo).toBe("client2@exemple.ca");
    expect(html).toContain("STOP");
    expect(html).toContain(`/visite/${live.token}`);
  });

  it("aucun destinataire : refusé", async () => {
    const r = await createVisitRequest({ quoteId: null, clientId: null, contact: { firstName: "A", lastName: "B", phone: "", email: "" }, rooms: [], channels: { sms: true, email: true } }, "proprio@exemple.ca", BASE, NOW);
    expect(r).toEqual({ ok: false, error: "Il faut un cellulaire (texto) ou un courriel pour envoyer le lien." });
  });
});

describe("réception", () => {
  it("« Envoyer » : réponses figées, tâche CRM « Photos reçues : préparer la soumission », chronologie ; répété sans effet", async () => {
    const v = await submittedWithPhotos(1, "q_exemple0001");
    expect(crm.addTask).toHaveBeenCalledTimes(1);
    expect(crm.addTask.mock.calls[0][0]).toMatchObject({ clientId: "c_0123456789ab", title: CRM_TASK_TITLE });
    expect((await submitVisit(v.token, answers({ propertyType: "Condo" }), BASE, NOW)).ok).toBe(true);
    expect(crm.addTask).toHaveBeenCalledTimes(1);
    const r = (await readVisites()).requests[0];
    expect(r.answers?.propertyType).toBe("Maison unifamiliale");
    expect(await uploadVisitPhoto(v.token, { step: "acces", unit: null }, jpeg, NOW)).toEqual({ ok: false, error: "Vos photos sont déjà envoyées. Merci !" });
    const items = visitItems([r], NOW);
    expect(items.map((i) => [i.kind, i.title])).toEqual([
      ["courriel", "Photos demandées au client"],
      ["photos", "Photos reçues"],
    ]);
    expect(items[1].href).toBe("/gestion/soumissions/q_exemple0001/modifier#photos-client");
  });

  it("rien à envoyer : refusé", async () => {
    const v = await newVisit(1);
    expect(await submitVisit(v.token, emptyAnswers(), BASE, NOW)).toEqual({ ok: false, error: "Ajoutez au moins une photo avant d’envoyer." });
  });
});
