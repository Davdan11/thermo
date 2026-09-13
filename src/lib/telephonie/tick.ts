/* ==================================================================
   Chantier T — un passage du robot de la téléphonie (toutes les
   5 minutes, scripts/telephonie-cron.sh → POST /api/telephonie/tick) :
     1. textos de réponse qui attendaient la fin de la nuit ;
     2. campagnes LANCÉES par un clic (au plus N textos, heures d'envoi) ;
     3. transcriptions (au plus 2, quota Gemini ménagé) ;
     4. conservation de l'audio (Loi 25) ;
     5. appels masqués sans nouvelles depuis deux heures.
   Bilan sans renseignement personnel.
   ================================================================== */

import { processCampaigns } from "./campaigns";
import { expireStaleCalls } from "./masked-call";
import { sendDueLeadTexts } from "./speed";
import { processTranscriptions, purgeAudio } from "./transcription";

export interface TelephonieTick {
  at: string;
  ms: number;
  reponses: number;
  campagnes: { envoyes: number; exclus: number; echecs: number; note: string | null };
  transcriptions: { faites: number; echecs: number; pause: boolean; note: string | null };
  audiosSupprimes: number;
  appelsExpires: number;
}

export async function runTelephonieTick(now = new Date(), opts: { gapMs?: number; fetchImpl?: typeof fetch } = {}): Promise<TelephonieTick> {
  const t0 = Date.now();
  const speed = await sendDueLeadTexts(now);
  const camp = await processCampaigns(now, { gapMs: opts.gapMs });
  const tr = await processTranscriptions(now, { fetchImpl: opts.fetchImpl });
  const purged = await purgeAudio(now, { fetchImpl: opts.fetchImpl });
  const stale = await expireStaleCalls(now);
  return {
    at: now.toISOString(),
    ms: Date.now() - t0,
    reponses: speed.sent,
    campagnes: { envoyes: camp.sent, exclus: camp.excluded, echecs: camp.failed, note: camp.skipped },
    transcriptions: { faites: tr.done, echecs: tr.failed, pause: tr.paused, note: tr.skipped },
    audiosSupprimes: purged,
    appelsExpires: stale,
  };
}
