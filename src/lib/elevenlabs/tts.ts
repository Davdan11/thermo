/* ─────────────────────────────────────────────────────────────────────────
   src/lib/elevenlabs/tts.ts
   Client ElevenLabs — génère des fichiers audio MP3 ultra-réalistes
   pour le système IVR téléphonique de Thermopompes À Vendre.ca
───────────────────────────────────────────────────────────────────────────*/

const ELEVENLABS_BASE = "https://api.elevenlabs.io/v1";

// Voix québécoises disponibles dans ElevenLabs
// → Tu peux en tester d'autres sur elevenlabs.io/voice-library en filtrant "French Canadian"
export const VOICES = {
  // Voix masculine — québécois naturel (recommandé pour menu pro)
  homme_qc: "onwK4e9ZLuTAKqWW03F9", // Daniel — voix neutre professionnelle
  // Voix féminine — chaleureuse
  femme_qc: "EXAVITQu4vr4xnSDxMaL", // Bella — francophone naturelle
} as const;

export type VoiceId = keyof typeof VOICES;

interface TTSOptions {
  voiceId?: string;
  modelId?: string;
  stability?: number;       // 0-1, plus haut = plus stable/monotone
  similarityBoost?: number; // 0-1, plus haut = plus fidèle à la voix
  style?: number;           // 0-1, plus haut = plus expressif
}

/**
 * Génère un fichier audio MP3 à partir d'un texte via ElevenLabs.
 * Retourne un Buffer MP3 prêt à être servi via HTTP.
 */
export async function generateSpeech(
  text: string,
  options: TTSOptions = {}
): Promise<Buffer> {
  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) throw new Error("ELEVENLABS_API_KEY non définie");

  const voiceId = options.voiceId ?? VOICES.homme_qc;
  const modelId = options.modelId ?? "eleven_multilingual_v2";

  const res = await fetch(`${ELEVENLABS_BASE}/text-to-speech/${voiceId}`, {
    method: "POST",
    headers: {
      "xi-api-key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text,
      model_id: modelId,
      voice_settings: {
        stability: options.stability ?? 0.5,
        similarity_boost: options.similarityBoost ?? 0.75,
        style: options.style ?? 0.35,
        use_speaker_boost: true,
      },
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(`ElevenLabs error ${res.status}: ${JSON.stringify(err)}`);
  }

  const arrayBuffer = await res.arrayBuffer();
  return Buffer.from(arrayBuffer);
}

/**
 * Liste les voix disponibles dans le compte ElevenLabs.
 * Filtre par langue française.
 */
export async function listFrenchVoices(): Promise<Array<{ voice_id: string; name: string; labels: Record<string, string> }>> {
  const apiKey = process.env.ELEVENLABS_API_KEY;
  if (!apiKey) throw new Error("ELEVENLABS_API_KEY non définie");

  const res = await fetch(`${ELEVENLABS_BASE}/voices`, {
    headers: { "xi-api-key": apiKey },
  });

  const data = await res.json();
  const voices = data.voices ?? [];

  // Filtrer les voix françaises/québécoises
  return voices.filter((v: any) => {
    const accent = v.labels?.accent?.toLowerCase() ?? "";
    const lang = v.labels?.language?.toLowerCase() ?? "";
    return accent.includes("french") || lang.includes("french") || lang.includes("fr");
  });
}

