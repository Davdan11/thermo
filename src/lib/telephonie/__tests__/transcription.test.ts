/* Chantier T — transcription et conservation : désactivée sans clé (rien n'est téléchargé ni envoyé), transcription et
   résumé en français par Gemini (simulé), pause au quota dépassé, suppression de l'audio selon la conservation choisie. */
import { rm } from "node:fs/promises";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { tempDir } from "@/lib/textos/__tests__/helpers";
import { updateSettings } from "../settings";
import { mutateTelephonie, readTelephonie } from "../store";
import { enqueueRecording, processTranscriptions, purgeAudio } from "../transcription";
import { geminiReply, mockFetch, telEnv } from "./helpers";

const env = process.env;
let dir: string;
const NOW = new Date("2026-09-16T15:00:00Z");
const RE = (n: number) => `RE${String(n).padStart(32, "0")}`;
const REPLY = { transcription: "Client : Bonjour, je voudrais une thermopompe murale pour mon salon.", resume: ["Veut une thermopompe murale pour le salon.", "Budget d'environ 4000 $.", "Rappeler jeudi pour une visite."], besoin: "Thermopompe murale", budget: "Environ 4000 $", prochaineEtape: "Visite jeudi" };

beforeEach(async () => {
  dir = await tempDir();
  process.env = telEnv(dir);
});
afterEach(async () => {
  vi.unstubAllGlobals();
  process.env = env;
  await rm(dir, { recursive: true, force: true });
});

describe("sans clé Gemini", () => {
  it("désactivée proprement : rien n'est téléchargé ni envoyé", async () => {
    const f = mockFetch();
    await enqueueRecording({ recordingSid: RE(1), source: "message-vocal", phone: "+15145550142", durationSec: 40 }, NOW);
    expect((await readTelephonie()).recordings[0].status).toBe("desactive");
    expect(await processTranscriptions(NOW)).toMatchObject({ done: 0, skipped: "sans-cle" });
    expect(f.fn).not.toHaveBeenCalled();
  });

  it("refuse un identifiant d'enregistrement douteux (jamais une URL reçue)", async () => {
    expect(await enqueueRecording({ recordingSid: "https://exemple.ca/audio.mp3", source: "appel-entrant", durationSec: 40 }, NOW)).toBeNull();
  });
});

describe("avec une clé (Gemini simulé)", () => {
  beforeEach(() => {
    process.env.GEMINI_API_KEY = "cle-de-test";
  });

  it("télécharge chez Twilio, transcrit et résume en une requête", async () => {
    const f = mockFetch({ gemini: () => geminiReply(REPLY) });
    await enqueueRecording({ recordingSid: RE(2), source: "message-vocal", phone: "+15145550142", durationSec: 40 }, NOW);
    expect(await processTranscriptions(NOW)).toMatchObject({ done: 1, failed: 0 });
    const r = (await readTelephonie()).recordings[0];
    expect(r).toMatchObject({ status: "transcrit", transcript: REPLY.transcription, summary: REPLY.resume, budget: "Environ 4000 $", audio: "twilio" });
    const audio = f.calls.find((c) => c.url.endsWith(`${RE(2)}.mp3`))!;
    expect(audio.headers.authorization).toMatch(/^Basic /);
    const gem = f.calls.find((c) => c.url.includes("generativelanguage"))!;
    expect(gem.headers["x-goog-api-key"]).toBe("cle-de-test");
    expect(JSON.parse(gem.body).contents[0].parts[1].inline_data.mime_type).toBe("audio/mpeg");
  });

  it("quota dépassé : pause, l'enregistrement reprend sa place ; plus aucune requête pendant la pause", async () => {
    const f = mockFetch({ gemini: () => new Response(JSON.stringify({ error: { status: "RESOURCE_EXHAUSTED" } }), { status: 429 }) });
    await enqueueRecording({ recordingSid: RE(3), source: "appel-entrant", phone: "+15145550142", durationSec: 40 }, NOW);
    expect(await processTranscriptions(NOW)).toMatchObject({ paused: true });
    const d = await readTelephonie();
    expect(d.recordings[0]).toMatchObject({ status: "attente", attempts: 0 });
    expect(Date.parse(d.gemini.pausedUntil!)).toBeGreaterThan(NOW.getTime());
    const before = f.fn.mock.calls.length;
    expect(await processTranscriptions(new Date(NOW.getTime() + 60_000))).toMatchObject({ skipped: "quota" });
    expect(f.fn.mock.calls.length).toBe(before);
  });

  it("trop court : pas de transcription", async () => {
    mockFetch();
    await enqueueRecording({ recordingSid: RE(4), source: "appel-entrant", durationSec: 3 }, NOW);
    expect((await readTelephonie()).recordings[0].status).toBe("trop-court");
  });
});

describe("conservation de l'audio (Loi 25)", () => {
  it("par défaut, supprime l'audio chez Twilio après 90 jours, pas avant", async () => {
    const f = mockFetch();
    await enqueueRecording({ recordingSid: RE(5), source: "appel-entrant", durationSec: 40 }, new Date(NOW.getTime() - 91 * 86_400_000));
    await enqueueRecording({ recordingSid: RE(6), source: "appel-entrant", durationSec: 40 }, new Date(NOW.getTime() - 10 * 86_400_000));
    expect(await purgeAudio(NOW)).toBe(1);
    const deletes = f.calls.filter((c) => c.method === "DELETE");
    expect(deletes).toHaveLength(1);
    expect(deletes[0].url).toMatch(new RegExp(`/Recordings/${RE(5)}\\.json$`));
    const rs = (await readTelephonie()).recordings;
    expect(rs.find((r) => r.recordingSid === RE(5))!.audio).toBe("supprime");
    expect(rs.find((r) => r.recordingSid === RE(6))!.audio).toBe("twilio");
    expect(await purgeAudio(NOW)).toBe(0); // une seule fois
  });

  it("« après la transcription » : l'audio part dès que la transcription est faite", async () => {
    process.env.GEMINI_API_KEY = "cle-de-test";
    await updateSettings("transcription", { enabled: true, retention: "apres-transcription", retentionDays: 90 }, "proprio@exemple.ca");
    const f = mockFetch({ gemini: () => geminiReply(REPLY) });
    await enqueueRecording({ recordingSid: RE(7), source: "message-vocal", phone: "+15145550142", durationSec: 40 }, NOW);
    await processTranscriptions(NOW);
    expect(f.calls.filter((c) => c.method === "DELETE").map((c) => c.url)).toEqual([expect.stringMatching(new RegExp(`${RE(7)}\\.json$`))]);
    expect((await readTelephonie()).recordings[0]).toMatchObject({ status: "transcrit", audio: "supprime" });
  });

  it("conservation réglable (7 jours)", async () => {
    mockFetch();
    await updateSettings("transcription", { enabled: true, retention: "jours", retentionDays: 7 }, "proprio@exemple.ca");
    await enqueueRecording({ recordingSid: RE(8), source: "appel-entrant", durationSec: 40 }, new Date(NOW.getTime() - 8 * 86_400_000));
    expect(await purgeAudio(NOW)).toBe(1);
  });

  it("en développement, aucune suppression réelle", async () => {
    process.env.TEXTOS_ENVOIS_DEV = "";
    const f = mockFetch();
    await mutateTelephonie((d) => ({ result: undefined, changed: d.recordings.length === 0 && false }));
    await enqueueRecording({ recordingSid: RE(9), source: "appel-entrant", durationSec: 40 }, new Date(NOW.getTime() - 100 * 86_400_000));
    await purgeAudio(NOW);
    expect(f.fn).not.toHaveBeenCalled();
  });
});
