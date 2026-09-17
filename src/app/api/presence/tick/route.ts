/* ==================================================================
   POST /api/presence/tick — passage planifié du studio (toutes les
   15 minutes) : retire l'ancienne file, prépare la file Facebook des
   prochains jours, puis envoie ce qui est dû (au plus 3 éléments), avec
   verrou, reprise limitée et aucun doublon (src/lib/social/envoi.ts).

   Protégé par un secret : PRESENCE_CRON_SECRET (24 caractères ou plus)
   dans shared/.env, lu par scripts/presence-cron.sh :
     Authorization: Bearer <PRESENCE_CRON_SECRET>
   Sans secret en production, tout appel est refusé. En développement,
   l'appel est accepté (aucun envoi réel hors production).

   Envoi réel seulement si NODE_ENV=production, META_PAGE_ID et
   META_PAGE_TOKEN présents et interrupteur « Publication automatique »
   allumé dans /gestion/presence/reglages ; sinon, mode essai.
   ================================================================== */

import { timingSafeEqual } from "node:crypto";
import { passage } from "@/lib/social/envoi";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 280;

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
    const r = await passage();
    return Response.json(
      {
        ok: true,
        mode: r.reel ? "reel" : "essai",
        raisons: r.raisons,
        ancienneFileRetiree: r.retirees,
        preparees: r.creees,
        sansSujet: r.sansSujet,
        dues: r.dues,
        resultats: r.resultats.map(({ id, issue }) => ({
          id,
          issue: issue.kind,
          ...(issue.kind === "echec" || issue.kind === "reessai" ? { erreur: issue.erreur } : {}),
          ...(issue.kind === "ignoree" ? { raison: issue.raison } : {}),
        })),
        enRetard: r.enRetard,
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
