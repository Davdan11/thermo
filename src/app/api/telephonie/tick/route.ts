/* ==================================================================
   Chantier T — POST /api/telephonie/tick : un passage du robot de la
   téléphonie (textos qui attendaient 8 h, campagnes lancées,
   transcriptions, conservation de l'audio). Appelé toutes les
   5 minutes par scripts/telephonie-cron.sh, sur le port local.

   Protégé par un secret partagé (comparaison en temps constant ;
   refus en production sans secret) :
     Authorization: Bearer <TELEPHONIE_CRON_SECRET>
   (à défaut, AUTOMATISATIONS_CRON_SECRET, déjà dans shared/.env).
   Réponse : un bilan sans aucun renseignement personnel.
   ================================================================== */

import { createHash, timingSafeEqual } from "node:crypto";
import { runTelephonieTick } from "@/lib/telephonie/tick";
import { runRepartition } from "@/lib/gestion/equipe/repartition"; // Chantier V

export const dynamic = "force-dynamic";

const json = (body: unknown, status = 200) => Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
const digest = (s: string) => createHash("sha256").update(s, "utf8").digest();

export function telephonieTickAuth(req: Request, env: Record<string, string | undefined> = process.env): "ok" | "absent" | "refuse" {
  const secret = (env.TELEPHONIE_CRON_SECRET?.trim() || env.AUTOMATISATIONS_CRON_SECRET?.trim()) ?? "";
  if (secret.length < 24) return env.NODE_ENV !== "production" ? "ok" : "absent";
  const header = req.headers.get("authorization") ?? "";
  const given = header.startsWith("Bearer ") ? header.slice(7).trim() : "";
  if (!given) return "refuse";
  return timingSafeEqual(digest(given), digest(secret)) ? "ok" : "refuse";
}

export async function POST(req: Request) {
  const auth = telephonieTickAuth(req);
  if (auth === "absent") return json({ error: "TELEPHONIE_CRON_SECRET (ou AUTOMATISATIONS_CRON_SECRET) absent : passage refusé." }, 503);
  if (auth === "refuse") return json({ error: "Non autorisé." }, 401);
  try {
    const t = await runTelephonieTick();
    // Chantier V : nouvelles demandes réparties aux vendeurs toutes les 5 minutes (le premier qui rappelle signe).
    const v = await runRepartition().catch((e) => (console.error("[équipe] répartition interrompue :", e), null));
    return json({ ok: true, ...t, repartition: v ? { attribuees: v.assigned } : { erreur: true } });
  } catch (e) {
    console.error("[telephonie] passage interrompu :", e);
    return json({ error: "Passage interrompu : voir le journal du serveur." }, 500);
  }
}

export function GET() {
  return json({ error: "Méthode non permise : POST seulement." }, 405);
}
