import { NextRequest, NextResponse } from "next/server";
import { generateSpeech } from "@/lib/elevenlabs/tts";

/* ─────────────────────────────────────────────────────────────────────────
   GET /api/phone/audio/[segment]
   Route qui génère à la volée les fichiers audio ElevenLabs pour l'IVR.
   Twilio appelle cette URL et joue le fichier MP3 directement.

   Segments disponibles :
   - welcome       → Message d'accueil principal
   - menu          → Options du menu (1, 2, 3)
   - transfert-ventes → "Je vous transfère aux ventes..."
   - transfert-sav    → "Je vous transfère au service..."
   - no-answer        → "Nous sommes présentement..."
   - voicemail        → Instructions boîte vocale
───────────────────────────────────────────────────────────────────────────*/

// Textes de l'IVR en français québécois naturel
const SCRIPTS: Record<string, string> = {
  welcome: `Bonjour et bienvenue chez Thermopompes À Vendre point c a. Votre référence pour trouver la bonne thermopompe au Québec.`,

  menu: `Pour les ventes et les soumissions, faites le 1. Pour le service après-vente et les réparations, faites le 2. Pour parler à un conseiller, faites le 3. Pour répéter ce menu, faites le 0.`,

  "transfert-ventes": `Parfait, je vous transfère à notre équipe des ventes. Un instant s'il vous plaît.`,

  "transfert-sav": `Je vous transfère au service après-vente. Un instant s'il vous plaît.`,

  "transfert-technique": `Je vous transfère à un conseiller technique. Un instant.`,

  "no-answer": `Nous sommes présentement dans l'impossibilité de prendre votre appel. Laissez votre message après le bip et nous vous rappellerons dans les meilleurs délais. Vous pouvez aussi visiter notre site au thermopompesavendre point c a.`,

  voicemail: `Votre message a bien été enregistré. Merci et bonne journée.`,

  "repeat-menu": `Je répète les options. Pour les ventes, faites le 1. Pour le service, faites le 2. Pour un conseiller, faites le 3.`,
};

// Cache en mémoire pour éviter de régénérer à chaque appel
const audioCache = new Map<string, Buffer>();

export async function GET(
  req: NextRequest,
  { params }: { params: { segment: string } }
) {
  const segment = params.segment;
  const text = SCRIPTS[segment];

  if (!text) {
    return new NextResponse("Segment audio non trouvé", { status: 404 });
  }

  try {
    // Vérifier le cache d'abord
    let audioBuffer = audioCache.get(segment);

    if (!audioBuffer) {
      console.log(`[ElevenLabs] Génération audio: ${segment}`);
      audioBuffer = await generateSpeech(text, {
        stability: 0.5,
        similarityBoost: 0.8,
        style: 0.3,
      });
      audioCache.set(segment, audioBuffer);
    }

    return new NextResponse(audioBuffer, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Length": audioBuffer.length.toString(),
        "Cache-Control": "public, max-age=86400", // Cache 24h
      },
    });
  } catch (err) {
    console.error("[ElevenLabs] Erreur génération audio:", err);
    return new NextResponse("Erreur génération audio", { status: 500 });
  }
}
