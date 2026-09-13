/* /palmares-du-froid/donnees.csv — tableau complet du palmarès (une rangée par municipalité classée). */
import { getPalmares } from "@/lib/blogue/palmares-site";
import { palmaresCsv } from "@/lib/blogue/palmares-csv";
import { SITE_URL } from "@/lib/seo";

export const revalidate = 604800;

export async function GET() {
  return new Response(palmaresCsv(getPalmares(), SITE_URL), {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": 'attachment; filename="palmares-du-froid-2026.csv"',
      "Cache-Control": "public, max-age=86400",
    },
  });
}
