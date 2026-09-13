/* GET /gestion/api/postal?code=H2X1Y4 — position, ville et région devinée d'un code postal (formulaires de l'outil). */
import { NextResponse, type NextRequest } from "next/server";
import { getAdminSession, unauthorizedJson } from "@/lib/gestion/auth/dal";
import { resolvePostal } from "@/lib/gestion/geo";
import { limiters } from "@/lib/gestion/rate-limit";
import { regionName } from "@/lib/gestion/regions";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const session = await getAdminSession();
  if (!session) return unauthorizedJson();
  if (!limiters.lookup.hit(`postal:${session.email}`)) return NextResponse.json({ ok: false, error: "Trop de requêtes." }, { status: 429 });
  const result = await resolvePostal(req.nextUrl.searchParams.get("code") ?? "", { online: true });
  const headers = { "Cache-Control": "no-store" };
  if (!result) return NextResponse.json({ ok: false, error: "Code postal introuvable." }, { status: 404, headers });
  return NextResponse.json({ ok: true, data: { ...result, regionName: result.region ? regionName(result.region) : null } }, { headers });
}
