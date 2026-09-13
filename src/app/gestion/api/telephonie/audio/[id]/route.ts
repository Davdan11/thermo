/* ==================================================================
   Chantier T — GET /gestion/api/telephonie/audio/<r_…> : écoute d'un
   enregistrement dans la fiche client. Session vérifiée ici (couche
   d'accès), audio téléchargé chez Twilio avec les identifiants du
   serveur et renvoyé sans cache. Audio supprimé (conservation) : 410.
   ================================================================== */

import { getAdminSession, unauthorizedJson } from "@/lib/gestion/auth/dal";
import { liveSendsAllowed } from "@/lib/textos/twilio-send";
import { readTelephonie, RECORDING_ID_RE } from "@/lib/telephonie/store";
import { downloadRecording } from "@/lib/telephonie/transcription";

export const dynamic = "force-dynamic";

const text = (body: string, status: number) => new Response(body, { status, headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" } });

export async function GET(_req: Request, { params }: { params: Promise<{ id: string }> }) {
  if (!(await getAdminSession())) return unauthorizedJson();
  const { id } = await params;
  if (!RECORDING_ID_RE.test(id)) return text("Introuvable.", 404);
  const r = (await readTelephonie()).recordings.find((x) => x.id === id);
  if (!r) return text("Introuvable.", 404);
  if (r.audio !== "twilio") return text("Audio supprimé selon la durée de conservation.", 410);
  if (!liveSendsAllowed()) return text("Écoute indisponible en développement.", 503);
  const dl = await downloadRecording(r.recordingSid);
  if (!dl.ok) return text(dl.error, dl.gone ? 410 : 502);
  return new Response(new Uint8Array(dl.audio), { headers: { "Content-Type": dl.mime, "Cache-Control": "private, no-store", "Content-Disposition": "inline" } });
}
