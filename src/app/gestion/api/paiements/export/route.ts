/* GET /gestion/api/paiements/export?annee=2026 — factures de commission en CSV pour la comptabilité
   (point-virgule, virgule décimale, UTF-8 avec BOM : s'ouvre tel quel dans Excel en français).
   Session d'administrateur vérifiée ici (le proxy ne fait qu'une redirection optimiste). */
import { z } from "zod";
import { getAdminSession, unauthorizedJson } from "@/lib/gestion/auth/dal";
import { invoicesCsv } from "@/lib/gestion/commissions/service";

export const dynamic = "force-dynamic";

export async function GET(req: Request) {
  if (!(await getAdminSession())) return unauthorizedJson();
  const raw = new URL(req.url).searchParams.get("annee") ?? "";
  const year = z.string().regex(/^\d{4}$/).safeParse(raw);
  const csv = await invoicesCsv(year.success ? year.data : undefined);
  const name = `commissions-${year.success ? year.data : "toutes"}.csv`;
  return new Response(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${name}"`,
      "Cache-Control": "no-store",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
