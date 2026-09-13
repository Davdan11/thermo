/* ==================================================================
   Chantier T — POST /api/phone/masque/<étape>?a=<appel> : webhooks
   Twilio de l'appel masqué (signature vérifiée par verifyTwilioRequest ;
   l'identifiant « a » fait partie de l'URL signée).
     proprio          le propriétaire décroche : chuchotement + touche 1
     connecter        touche reçue : <Dial callerId="numéro du site">
     avis             joué au client : avis d'enregistrement
     statut           rappels de statut (jambe=proprio|client)
     fin              fin du <Dial> : résultat et durée
     enregistrement   enregistrement terminé (si activé) : transcription
   Le numéro du client vient du magasin (serveur), jamais de l'URL.
   ================================================================== */

import { applyCallStatus, callRecorded, clientNotice, connectClient, dialEnded, ownerAnswered } from "@/lib/telephonie/masked-call";
import { transcribeSoon } from "@/lib/telephonie/hooks";
import { CALL_ID_RE } from "@/lib/telephonie/store";
import { unavailableTwiml } from "@/lib/telephonie/twiml";
import { twiml, twilioForbidden, verifyTwilioRequest } from "@/lib/security/twilio";

export const dynamic = "force-dynamic";

const noContent = () => new Response(null, { status: 204 });

export async function POST(req: Request, { params }: { params: Promise<{ etape: string }> }) {
  const check = await verifyTwilioRequest(req);
  if (!check.ok) return twilioForbidden(check.reason);

  const { etape } = await params;
  const url = new URL(req.url);
  const id = url.searchParams.get("a") ?? "";
  const valid = CALL_ID_RE.test(id);

  switch (etape) {
    case "proprio":
      return twiml(valid ? await ownerAnswered(id) : unavailableTwiml());
    case "connecter":
      return twiml(valid ? await connectClient(id, (check.params.get("Digits") ?? "").trim()) : unavailableTwiml());
    case "avis":
      return twiml(valid ? await clientNotice(id) : unavailableTwiml());
    case "statut":
      if (valid) await applyCallStatus(id, url.searchParams.get("jambe") === "client" ? "client" : "proprio", check.params).catch((e) => console.error("[telephonie] statut non enregistré :", e));
      return noContent();
    case "fin":
      if (valid) await dialEnded(id, check.params).catch((e) => console.error("[telephonie] fin d’appel non enregistrée :", e));
      return twiml("<Hangup/>");
    case "enregistrement":
      if (valid && (check.params.get("RecordingStatus") ?? "completed") === "completed") {
        await callRecorded(id, check.params).catch((e) => console.error("[telephonie] enregistrement non retenu :", e));
        transcribeSoon();
      }
      return noContent();
    default:
      return new Response("Not Found", { status: 404 });
  }
}
