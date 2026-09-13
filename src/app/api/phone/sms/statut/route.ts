/* ==================================================================
   POST /api/phone/sms/statut — statut de livraison d'un texto envoyé
   depuis /gestion/textos (StatusCallback Twilio, signé). Le paramètre
   « m » (identifiant local du message) fait partie de l'URL signée.
   ================================================================== */

import { twilioForbidden, verifyTwilioRequest } from "@/lib/security/twilio";
import { applyStatus } from "@/lib/textos/service";
import { MESSAGE_ID_RE } from "@/lib/textos/store";

export async function POST(req: Request) {
  const check = await verifyTwilioRequest(req);
  if (!check.ok) return twilioForbidden(check.reason);

  const p = check.params;
  const m = new URL(req.url).searchParams.get("m");
  await applyStatus({
    localId: m && MESSAGE_ID_RE.test(m) ? m : null,
    sid: p.get("MessageSid") ?? undefined,
    status: p.get("MessageStatus") ?? p.get("SmsStatus") ?? "",
    errorCode: Number.parseInt(p.get("ErrorCode") ?? "", 10) || undefined,
  }).catch((e) => console.error("[textos] statut non enregistré :", e));
  return new Response(null, { status: 204 });
}
