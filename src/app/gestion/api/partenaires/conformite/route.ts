/* POST /gestion/api/partenaires/conformite — document de conformité (PDF ou photo) pour la licence RBQ ou l'assurance.
   Formulaire ordinaire : session vérifiée, origine vérifiée, type et taille contrôlés, retour 303 vers la fiche. */
import { NextResponse, type NextRequest } from "next/server";
import { getAdminSession, unauthorizedJson } from "@/lib/gestion/auth/dal";
import { isSameOrigin } from "@/lib/gestion/origin";
import { MAX_IMAGE_BYTES } from "@/lib/gestion/partenaires/files";
import { attachComplianceFile } from "@/lib/gestion/partenaires/service";
import { HALOCARBON_ID_RE, INSTALLER_ID_RE } from "@/lib/gestion/partenaires/types";
import { audit } from "@/lib/gestion/securite/audit";
import { baseUrlFromHeaders } from "@/lib/gestion/request";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  const session = await getAdminSession();
  if (!session) return unauthorizedJson();
  if (!isSameOrigin(req)) return new NextResponse("Origine inconnue.", { status: 403 });
  const form = await req.formData().catch(() => null);
  const installerId = String(form?.get("installerId") ?? "");
  const kind = String(form?.get("kind") ?? "");
  const file = form?.get("file");
  // Conformité C3 : assurance automobile, avenant d'assuré additionnel, attestation environnementale (halocarbures).
  const halocarbonId = String(form?.get("halocarbonId") ?? "");
  const KINDS = ["rbq", "assurance", "automobile", "avenant", "halocarbure"] as const;
  if (!INSTALLER_ID_RE.test(installerId) || !(KINDS as readonly string[]).includes(kind) || (kind === "halocarbure" && !HALOCARBON_ID_RE.test(halocarbonId))) return new NextResponse("Demande invalide.", { status: 400 });
  const url = new URL(`/gestion/partenaires/${installerId}`, baseUrlFromHeaders(req.headers));
  url.hash = "conformite";
  if (!(file instanceof File) || file.size === 0 || file.size > MAX_IMAGE_BYTES) {
    url.searchParams.set("erreur", "Fichier manquant ou trop lourd (12 Mo au plus).");
    return NextResponse.redirect(url, 303);
  }
  const r = await attachComplianceFile(installerId, kind as (typeof KINDS)[number], Buffer.from(await file.arrayBuffer()), file.name, session.email, new Date(), kind === "halocarbure" ? { halocarbonId } : {});
  // Chantier S : journal d'audit.
  if (r.ok) await audit("partenaire.conformite", { partenaire: installerId, document: kind, fichier: r.fileId }, { qui: session.email });
  url.searchParams.set(r.ok ? "ok" : "erreur", r.ok ? "Document ajouté." : r.error);
  return NextResponse.redirect(url, 303);
}
