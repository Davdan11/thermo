/* ==================================================================
   Chantier T — transcription et résumé d'un enregistrement par Gemini
   (audio). Une seule requête par enregistrement : transcription en
   français ET résumé en 3 à 5 lignes (besoin, budget s'il est dit,
   prochaine étape). Quota gratuit partagé avec ThermoScan : l'appelant
   met tout en pause au premier refus de quota (429).
   ================================================================== */

import { GEMINI_MODEL } from "./config";

const PROMPT = `Tu reçois l'enregistrement d'un appel téléphonique (ou d'un message vocal) entre un client et Thermopompes À Vendre, au Québec.
1. Transcris fidèlement, en français, ce qui est dit. N'invente rien : écris [inaudible] pour un passage incompréhensible. Indique les interlocuteurs quand c'est clair (« Client : », « Conseiller : »).
2. Résume l'appel en 3 à 5 lignes courtes : le besoin du client, son budget SEULEMENT s'il est dit, la prochaine étape.
Réponds UNIQUEMENT en JSON valide, sans texte autour :
{"transcription": string, "resume": string[], "besoin": string|null, "budget": string|null, "prochaineEtape": string|null}`;

export type GeminiOutcome =
  | { ok: true; transcript: string; summary: string[]; need: string | null; budget: string | null; nextStep: string | null }
  | { ok: false; quota: boolean; retry: boolean; error: string };

const clean = (v: unknown, max: number): string | null => (typeof v === "string" && v.trim() && v.trim().toLowerCase() !== "null" ? v.trim().slice(0, max) : null);

export function parseGeminiJson(text: string): GeminiOutcome {
  const m = /\{[\s\S]*\}/.exec(text);
  if (!m) return { ok: false, quota: false, retry: true, error: "Réponse illisible." };
  try {
    const o = JSON.parse(m[0]) as Record<string, unknown>;
    const transcript = clean(o.transcription, 20_000);
    if (!transcript) return { ok: false, quota: false, retry: false, error: "Transcription vide." };
    const summary = (Array.isArray(o.resume) ? o.resume : [])
      .map((l) => clean(l, 240))
      .filter((l): l is string => Boolean(l))
      .slice(0, 5);
    return { ok: true, transcript, summary, need: clean(o.besoin, 240), budget: clean(o.budget, 120), nextStep: clean(o.prochaineEtape, 240) };
  } catch {
    return { ok: false, quota: false, retry: true, error: "JSON illisible." };
  }
}

export async function transcribeAudio(audio: Buffer, mime: string, key: string, fetchImpl: typeof fetch = fetch): Promise<GeminiOutcome> {
  let res: Response;
  try {
    res = await fetchImpl(`https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": key },
      body: JSON.stringify({
        contents: [{ parts: [{ text: PROMPT }, { inline_data: { mime_type: mime, data: audio.toString("base64") } }] }],
        generationConfig: { temperature: 0.1, responseMimeType: "application/json" },
      }),
      signal: AbortSignal.timeout(90_000),
    });
  } catch (e) {
    return { ok: false, quota: false, retry: true, error: `Gemini injoignable : ${e instanceof Error ? e.message.slice(0, 120) : "réseau"}` };
  }
  if (!res.ok) {
    const body = (await res.text().catch(() => "")).slice(0, 400);
    const quota = res.status === 429 || /RESOURCE_EXHAUSTED|quota/i.test(body);
    return { ok: false, quota, retry: quota || res.status >= 500, error: quota ? "Quota Gemini dépassé." : `Gemini a refusé (HTTP ${res.status}).` };
  }
  const json = (await res.json().catch(() => ({}))) as { candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }> };
  return parseGeminiJson(json.candidates?.[0]?.content?.parts?.map((p) => p.text ?? "").join("") ?? "");
}
