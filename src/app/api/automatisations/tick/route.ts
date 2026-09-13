/* ==================================================================
   POST /api/automatisations/tick — un passage du moteur
   d'automatisations (factures, relances, rappels, sondages, LogisVert,
   résumé du matin…). Appelé toutes les 15 minutes par la tâche cron
   du VPS (scripts/automatisations-cron.sh), sur le port local.

   Protégé par un secret partagé, comme le webhook Pipedrive (variable
   d'environnement, comparaison en temps constant ; refus en
   production sans la variable) :
     Authorization: Bearer <AUTOMATISATIONS_CRON_SECRET>
   Idempotent : chaque envoi a une clé unique réservée avant l'envoi ;
   un deuxième appel ne renvoie jamais un message déjà parti.
   Réponse : un bilan sans aucun renseignement personnel.
   ================================================================== */

import { createHash, timingSafeEqual } from "node:crypto";
import { runTick } from "@/lib/gestion/automatisations/engine";
import { runPortalTick } from "@/lib/gestion/portail/tick"; // Chantier P

export const dynamic = "force-dynamic";

const json = (body: unknown, status = 200) => Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
const digest = (s: string) => createHash("sha256").update(s, "utf8").digest();

/** « ok », « absent » (production sans secret : refus) ou « refuse ». */
export function tickAuth(req: Request): "ok" | "absent" | "refuse" {
  const secret = process.env.AUTOMATISATIONS_CRON_SECRET?.trim() ?? "";
  if (secret.length < 24) {
    if (process.env.NODE_ENV !== "production") return "ok";
    return "absent";
  }
  const header = req.headers.get("authorization") ?? "";
  const given = header.startsWith("Bearer ") ? header.slice(7).trim() : "";
  if (!given) return "refuse";
  return timingSafeEqual(digest(given), digest(secret)) ? "ok" : "refuse";
}

export async function POST(req: Request) {
  const auth = tickAuth(req);
  if (auth === "absent") return json({ error: "AUTOMATISATIONS_CRON_SECRET absent (24 caractères ou plus) : passage refusé." }, 503);
  if (auth === "refuse") return json({ error: "Non autorisé." }, 401);
  try {
    const r = await runTick({ log: (line) => console.log(`[automatisations] ${line}`) });
    // Chantier P : visites d'entretien annuelles et invitations « choisissez votre date » (portail client).
    const p = await runPortalTick({ log: (line) => console.log(`[portail] ${line}`) }).catch((e) => (console.error("[portail] passage interrompu :", e), null));
    return json({ ok: true, at: r.at, ms: r.ms, fait: r.done, echecs: r.failed, ignores: r.ignored, reportes: r.deferred, enAttente: r.waiting, portail: p ? { visites: p.visits, invitations: p.invites, adhesions: p.attached } : { erreur: true } });
  } catch (e) {
    console.error("[automatisations] passage interrompu :", e);
    return json({ error: "Passage interrompu : voir le journal du serveur." }, 500);
  }
}

export function GET() {
  return json({ error: "Méthode non permise : POST seulement." }, 405);
}
