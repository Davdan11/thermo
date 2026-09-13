/* ==================================================================
   Lecture de la plaque signalétique (numéro de série, modèle) par la
   vision de ThermoScan : même fournisseur (Gemini), même modèle et
   même clé GEMINI_API_KEY que /api/thermoscan/analyze (dont la
   fonction n'est pas exportée : route de ThermoScan non modifiée).
   Seulement si la clé est configurée ; le résultat ne fait que
   PRÉ-REMPLIR les champs, toujours corrigibles à la main.
   La photo envoyée est déjà réencodée sans métadonnées (files.ts).
   ================================================================== */

const MODEL = "gemini-2.5-flash";

export const visionConfigured = (): boolean => Boolean(process.env.GEMINI_API_KEY);

const PROMPT = `You are reading the nameplate (rating label) of a heat pump or air conditioner unit.
Return ONLY valid JSON, no prose: {"brand": string|null, "modelNumber": string|null, "serialNumber": string|null}
- Copy the model and serial numbers EXACTLY, character by character, as printed (look for MODEL, MODÈLE, M/N, SERIAL, SÉRIE, S/N).
- Do not guess. Use null for anything not clearly readable.`;

export interface PlateReading {
  brand: string | null;
  model: string | null;
  serial: string | null;
}

const clean = (v: unknown): string | null => (typeof v === "string" && v.trim() && v.trim().toLowerCase() !== "null" ? v.trim().slice(0, 60) : null);

export async function readPlate(image: Buffer, mime: string): Promise<PlateReading | null> {
  const key = process.env.GEMINI_API_KEY;
  if (!key) return null;
  try {
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "x-goog-api-key": key },
      body: JSON.stringify({
        contents: [{ parts: [{ text: PROMPT }, { inline_data: { mime_type: mime, data: image.toString("base64") } }] }],
        generationConfig: { temperature: 0, responseMimeType: "application/json" },
      }),
      signal: AbortSignal.timeout(25_000),
    });
    if (!res.ok) {
      console.error("[terrain] lecture de plaque refusée :", res.status);
      return null;
    }
    const json = (await res.json()) as { candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }> };
    const text = json.candidates?.[0]?.content?.parts?.map((p) => p.text ?? "").join("") ?? "";
    const m = /\{[\s\S]*\}/.exec(text);
    if (!m) return null;
    const parsed = JSON.parse(m[0]) as Record<string, unknown>;
    return { brand: clean(parsed.brand), model: clean(parsed.modelNumber), serial: clean(parsed.serialNumber) };
  } catch (e) {
    console.error("[terrain] lecture de plaque impossible :", e instanceof Error ? e.message : e);
    return null;
  }
}
