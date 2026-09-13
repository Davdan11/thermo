/* GET /gestion/api/modeles?q=rxb12&marque=daikin — recherche dans le catalogue (formulaire de job). */
import { NextResponse, type NextRequest } from "next/server";
import { getAdminSession, unauthorizedJson } from "@/lib/gestion/auth/dal";
import { searchModels } from "@/lib/gestion/catalog";
import { limiters } from "@/lib/gestion/rate-limit";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const session = await getAdminSession();
  if (!session) return unauthorizedJson();
  if (!limiters.lookup.hit(`modeles:${session.email}`)) return NextResponse.json({ ok: false, error: "Trop de requêtes." }, { status: 429 });
  const q = (req.nextUrl.searchParams.get("q") ?? "").slice(0, 60);
  const brand = req.nextUrl.searchParams.get("marque") || null;
  return NextResponse.json({ ok: true, data: searchModels(q, brand) }, { headers: { "Cache-Control": "no-store" } });
}
