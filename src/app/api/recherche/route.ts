/* GET /api/recherche?q=… — suggestions pour le champ de recherche de l'en-tête. */
import { NextResponse } from "next/server";
import { searchSite } from "@/lib/search/site-search";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const q = (url.searchParams.get("q") ?? "").slice(0, 80);
  const hits = searchSite(q, 8);
  return NextResponse.json({ hits }, { headers: { "Cache-Control": "public, max-age=300, s-maxage=3600" } });
}
