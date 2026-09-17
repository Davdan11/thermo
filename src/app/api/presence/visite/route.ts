/* ==================================================================
   POST /api/presence/visite — visite arrivée par un lien suivi d'une
   publication Facebook du robot. Corps : { "c": "<identifiant>" }.
   Anonyme : seul l'identifiant de la publication est compté (aucune
   adresse IP gardée, aucun témoin). Voir src/lib/social/visites.ts.
   ================================================================== */

import { createLimiter, ipFromHeaders } from "@/lib/gestion/rate-limit";
import { lireSocial } from "@/lib/social/store";
import { PUBLICATION_ID_RE } from "@/lib/social/types";
import { compterVisite } from "@/lib/social/visites";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const limite = createLimiter({ limit: 20, windowMs: 10 * 60 * 1000 });
const HEADERS = { "Cache-Control": "no-store", "X-Robots-Tag": "noindex, nofollow" };

export async function POST(request: Request) {
  // La clé du limiteur reste en mémoire quelques minutes ; elle n'est jamais écrite.
  if (!limite.hit(ipFromHeaders(request.headers))) return new Response(null, { status: 204, headers: HEADERS });
  let id = "";
  try {
    const body = (await request.json()) as { c?: unknown };
    id = typeof body.c === "string" ? body.c.slice(0, 60) : "";
  } catch {
    return new Response(null, { status: 204, headers: HEADERS });
  }
  if (!PUBLICATION_ID_RE.test(id)) return new Response(null, { status: 204, headers: HEADERS });
  try {
    await compterVisite(id, async (x) => (await lireSocial()).publications.some((p) => p.id === x));
  } catch (err) {
    console.warn("[presence/visite]", err instanceof Error ? err.message : err);
  }
  return new Response(null, { status: 204, headers: HEADERS });
}
