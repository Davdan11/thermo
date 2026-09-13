/* ==================================================================
   Chantier T — branchements dans les routes existantes (une ligne
   chacune) : après la réponse au visiteur ou à Twilio, sans jamais
   bloquer ni faire échouer la route.
     speedToLeadAfter   /api/leads, /api/thermomatch/courriel,
                        /api/rendez-vous, /api/contact
     recordingAfter     /api/phone/recording, /api/phone/voicemail
     transcribeSoon     /api/phone/masque/enregistrement
   Hors d'une requête (tests, script), le travail est lancé tel quel.
   ================================================================== */

import { after } from "next/server";
import { onNewLead, type NewLeadInput } from "./speed";
import { enqueueRecording, processTranscriptions, type RecordingInput } from "./transcription";

function later(label: string, fn: () => Promise<unknown>): void {
  const run = () => fn().catch((e) => console.error(`[telephonie] ${label} :`, e));
  try {
    after(run);
  } catch {
    void run();
  }
}

export function speedToLeadAfter(input: NewLeadInput): void {
  later("réponse en 60 s", () => onNewLead(input));
}

/** Une transcription tout de suite si possible ; sinon le robot des 5 minutes s'en charge. */
export function transcribeSoon(): void {
  later("transcription", () => processTranscriptions(new Date(), { max: 1 }));
}

export function recordingAfter(input: RecordingInput): void {
  later("enregistrement", async () => {
    const id = await enqueueRecording(input);
    if (id) await processTranscriptions(new Date(), { max: 1 });
  });
}
