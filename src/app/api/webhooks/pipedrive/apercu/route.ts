/* ==================================================================
   GET /api/webhooks/pipedrive/apercu?etape=<nom d'étape>|perdue
   Aperçu HTML des courriels d'étape avec des données d'exemple.
   Hors production seulement (ou avec ?cle=PIPEDRIVE_WEBHOOK_PASSWORD).
   ================================================================== */
import { LOST_TEMPLATE, STAGE_TEMPLATES, normalizeStageName, templateForStage } from "@/lib/crm/templates/stage-emails";
import { getWelcomeEmailHTML } from "@/lib/crm/templates/welcome-email";
import { getRdvEmailHTML } from "@/lib/crm/templates/rdv-email";

const SAMPLE = {
  firstName: "Marie",
  projectType: "Murale 1 tête",
  region: "Montérégie",
  sqft: "1 500",
  brand: "Mitsubishi Electric",
  series: "MUZ-FS12NA",
  btu: "12 000",
  subsidy: "1 700",
  installDate: "jeudi 24 septembre 2026",
  installer: "Climatisation Rive-Sud",
  advisorName: "David",
};

export async function GET(request: Request) {
  const url = new URL(request.url);
  const pass = process.env.PIPEDRIVE_WEBHOOK_PASSWORD;
  if (process.env.NODE_ENV === "production" && (!pass || url.searchParams.get("cle") !== pass)) {
    return new Response("Not found", { status: 404 });
  }
  const etape = url.searchParams.get("etape") ?? "";
  let html: string | null = null;
  if (etape === "perdue") html = LOST_TEMPLATE(SAMPLE).html;
  else if (etape === "bienvenue") html = getWelcomeEmailHTML({ firstName: SAMPLE.firstName, hasThermoMatch: true, recommendedBrand: SAMPLE.brand, recommendedBtu: SAMPLE.btu, estimatedSubvention: SAMPLE.subsidy, sqft: SAMPLE.sqft });
  else if (etape === "rdv") html = getRdvEmailHTML({ firstName: SAMPLE.firstName, when: "jeudi 12 septembre, entre 9 h et 12 h", phone: "438 555-0199" });
  else if (etape) html = templateForStage(etape)?.(SAMPLE).html ?? null;

  if (!html) {
    const keys = ["bienvenue", "rdv", ...Object.keys(STAGE_TEMPLATES), "perdue"];
    const list = keys.map((k) => `<li><a href="?etape=${encodeURIComponent(k)}${pass && url.searchParams.get("cle") ? `&cle=${encodeURIComponent(url.searchParams.get("cle")!)}` : ""}">${k}</a></li>`).join("");
    return new Response(`<!doctype html><meta charset="utf-8"><title>Aperçu des courriels</title><body style="font-family:system-ui;padding:24px"><h1>Courriels automatiques</h1><p>Étape demandée : « ${etape ? normalizeStageName(etape) : ""} »</p><ul>${list}</ul>`, { headers: { "Content-Type": "text/html; charset=utf-8" } });
  }
  return new Response(html, { headers: { "Content-Type": "text/html; charset=utf-8", "Cache-Control": "no-store" } });
}
