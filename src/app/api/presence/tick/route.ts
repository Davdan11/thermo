/* ==================================================================
   POST /api/presence/tick — passage planifié du studio de présence :
   publie les publications approuvées dont l'heure est venue (au plus 3
   par passage), avec nouveaux essais espacés.

   Protégé par un secret, comme les robots des relances : le secret vit
   dans shared/.env (PRESENCE_CRON_SECRET, 24 caractères ou plus) et le
   script cron le lit pour appeler la route :
     Authorization: Bearer <PRESENCE_CRON_SECRET>
   Sans secret en production, tout appel est refusé. En développement,
   l'appel est accepté (le mode essai empêche toute publication réelle).

   Crontab du VPS (toutes les 15 minutes) :
     *\/15 * * * * /bin/bash /var/www/thermopompesavendre.ca/current/scripts/presence-cron.sh >> /var/log/thermo-presence.log 2>&1

   Publication réelle seulement si NODE_ENV=production, jetons Meta
   présents et interrupteur « Publication automatique » activé dans
   /gestion/presence/reglages ; sinon, mode essai (aucun appel à Meta).
   ================================================================== */

import { timingSafeEqual } from "node:crypto";
import { tick } from "@/lib/presence/publisher";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const HEADERS = { "Cache-Control": "no-store", "X-Robots-Tag": "noindex, nofollow" };

function authorized(request: Request): boolean {
  const secret = process.env.PRESENCE_CRON_SECRET?.trim();
  if (!secret || secret.length < 24) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("[presence/tick] PRESENCE_CRON_SECRET absent : accès autorisé en développement seulement (mode essai).");
      return true;
    }
    return false;
  }
  const header = request.headers.get("authorization") ?? "";
  if (!header.startsWith("Bearer ")) return false;
  const expected = Buffer.from(secret);
  const given = Buffer.from(header.slice(7).trim());
  return expected.length === given.length && timingSafeEqual(expected, given);
}

export async function POST(request: Request) {
  if (!authorized(request)) return Response.json({ error: "Non autorisé." }, { status: 401, headers: HEADERS });
  try {
    const r = await tick();
    return Response.json(
      {
        ok: true,
        mode: r.real ? "reel" : "essai",
        raisons: r.reasons,
        dues: r.due,
        resultats: r.results.map(({ id, outcome }) => ({
          id,
          issue: outcome.kind,
          ...(outcome.kind === "echec" || outcome.kind === "reessai" ? { erreur: outcome.error } : {}),
          ...(outcome.kind === "ignoree" ? { raison: outcome.reason } : {}),
        })),
        enRetard: r.late,
      },
      { headers: HEADERS },
    );
  } catch (err) {
    console.error("[presence/tick]", err instanceof Error ? err.message : err);
    return Response.json({ ok: false, error: "Passage impossible." }, { status: 500, headers: HEADERS });
  }
}

export function GET() {
  return Response.json({ error: "Méthode non permise : POST avec le secret." }, { status: 405, headers: HEADERS });
}
