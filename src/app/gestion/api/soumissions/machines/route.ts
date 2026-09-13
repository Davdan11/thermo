/* GET /gestion/api/soumissions/machines?q=&type=&cap=&lv=1&cc=1 — Chantier D : « Trouver la machine » du créateur. */
import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";
import { getAdminSession, unauthorizedJson } from "@/lib/gestion/auth/dal";
import { limiters } from "@/lib/gestion/rate-limit";
import { CAPACITY_BANDS, catalogSize, MACHINE_KINDS, searchMachines } from "@/lib/soumissions/machines";

export const dynamic = "force-dynamic";

const schema = z.object({
  q: z.string().max(80).default(""),
  type: z.enum(MACHINE_KINDS as [string, ...string[]]).nullable().default(null),
  cap: z.enum(CAPACITY_BANDS.map((b) => b.id) as [string, ...string[]]).nullable().default(null),
  lv: z.enum(["1", ""]).default(""),
  cc: z.enum(["1", ""]).default(""),
});

export async function GET(req: NextRequest) {
  const session = await getAdminSession();
  if (!session) return unauthorizedJson();
  if (!limiters.lookup.hit(`machines:${session.email}`)) return NextResponse.json({ ok: false, error: "Trop de requêtes." }, { status: 429 });
  const sp = req.nextUrl.searchParams;
  const parsed = schema.safeParse({ q: sp.get("q") ?? "", type: sp.get("type") || null, cap: sp.get("cap") || null, lv: sp.get("lv") ?? "", cc: sp.get("cc") ?? "" });
  if (!parsed.success) return NextResponse.json({ ok: false, error: "Recherche invalide." }, { status: 400 });
  const p = parsed.data;
  const { hits, total } = searchMachines(p.q, { kind: p.type as never, cap: p.cap as never, lv: p.lv === "1", cc: p.cc === "1" });
  return NextResponse.json({ ok: true, data: { hits, total, catalog: catalogSize() } }, { headers: { "Cache-Control": "no-store" } });
}
