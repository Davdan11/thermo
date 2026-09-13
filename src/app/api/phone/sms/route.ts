/* ==================================================================
   POST /api/phone/sms — texto reçu au numéro du site (webhook Twilio
   « A message comes in », signé). Conservé dans /gestion/textos,
   compté comme demande (canal « Texto »), avis courriel au propriétaire.
   Réponse TwiML : accusé de réception (premier message, puis au plus
   une fois par 12 h), confirmation d'un mot-clé français, sinon vide.
   ================================================================== */

import { journalLead } from "@/lib/crm/lead-journal";
import { emptyTwiml, twiml, twilioForbidden, verifyTwilioRequest, xml } from "@/lib/security/twilio";
import { parseInbound, receiveTexto } from "@/lib/textos/service";

export async function POST(req: Request) {
  const check = await verifyTwilioRequest(req);
  if (!check.ok) return twilioForbidden(check.reason);

  const input = parseInbound(check.params);
  if (!input) return emptyTwiml();

  try {
    const r = await receiveTexto(input);
    return r.reply ? twiml(`<Message>${xml(r.reply)}</Message>`) : emptyTwiml();
  } catch (e) {
    console.error("[textos] enregistrement impossible :", e);
    // Filet de sécurité : le message reste lisible dans le journal des demandes (pas compté deux fois).
    await journalLead("texto", { event: "texto-non-enregistre", phone: input.from, sid: input.sid, message: input.body.slice(0, 500), media: input.media.length });
    return emptyTwiml();
  }
}
