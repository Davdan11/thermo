import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { captureFullLead, type GHLContactInput } from "@/lib/ghl/client";

/* ─────────────────────────────────────────────────────────────────────────
   POST /api/leads
   Reçoit les données du formulaire de soumission.
   Crée un contact + opportunité dans Go High Level.

   Payload attendu (depuis /soumission/page.tsx) :
   {
     firstName, lastName, email, phone, postalCode,
     typeThermopompe, superficie, chauffageActuel, urgence,
     notes, source,
     // Optionnels enrichis par le code postal résolu :
     municipality, province, zoneClimatique, designTempC,
     modeleSelectionne, budgetEstime,
   }
───────────────────────────────────────────────────────────────────────────*/

export interface LeadPayload {
  // Identité
  firstName: string;
  lastName?: string;
  email: string;
  phone: string;
  postalCode?: string;

  // Projet
  typeThermopompe?: string;
  superficie?: string;
  chauffageActuel?: string;
  urgence?: string;
  modeleSelectionne?: string;
  budgetEstime?: string;

  // Localisation résolue (depuis usePostalResolve)
  municipality?: string;
  province?: string;
  zoneClimatique?: string;
  designTempC?: string;

  // Extras
  notes?: string;
  source?: string;
}

export async function POST(req: NextRequest) {
  try {
    const lead: LeadPayload = await req.json();

    // Validation minimale
    if (!lead.firstName || (!lead.email && !lead.phone)) {
      return NextResponse.json(
        { error: "Prénom et (email ou téléphone) requis." },
        { status: 400 }
      );
    }

    // Construire le résumé des notes pour GHL
    const noteLines: string[] = [
      `Source: ${lead.source ?? "soumission"}`,
      lead.municipality ? `Ville: ${lead.municipality}${lead.province ? `, ${lead.province}` : ""}` : "",
      lead.zoneClimatique ? `Zone climatique: ${lead.zoneClimatique}` : "",
      lead.designTempC ? `Température de conception: ${lead.designTempC}°C` : "",
      lead.typeThermopompe ? `Type: ${lead.typeThermopompe}` : "",
      lead.superficie ? `Superficie: ${lead.superficie}` : "",
      lead.chauffageActuel ? `Chauffage actuel: ${lead.chauffageActuel}` : "",
      lead.urgence ? `Urgence: ${lead.urgence}` : "",
      lead.modeleSelectionne ? `Modèle sélectionné: ${lead.modeleSelectionne}` : "",
      lead.budgetEstime ? `Budget: ${lead.budgetEstime}` : "",
      lead.notes ? `Notes: ${lead.notes}` : "",
    ].filter(Boolean);

    // Construire le payload GHL enrichi
    const ghlInput: GHLContactInput = {
      firstName: lead.firstName,
      lastName: lead.lastName ?? "",
      email: lead.email,
      phone: lead.phone,
      postalCode: lead.postalCode,
      city: lead.municipality,
      province: lead.province,
      customFields: {
        zone_climatique: lead.zoneClimatique,
        temp_conception: lead.designTempC ? `${lead.designTempC}°C` : undefined,
        type_thermopompe: lead.typeThermopompe,
        superficie: lead.superficie,
        chauffage_actuel: lead.chauffageActuel,
        urgence: lead.urgence,
        modele_selectionne: lead.modeleSelectionne,
        budget_estime: lead.budgetEstime,
        source_page: lead.source ?? "soumission",
        municipalite: lead.municipality,
        notes_projet: noteLines.join("\n"),
      },
      pipelineStage: "submitted",
    };

    const result = await captureFullLead(
      ghlInput,
      `Demande soumission — ${lead.firstName} — ${lead.municipality ?? lead.postalCode ?? "QC"}`
    );

    if (!result.ok) {
      console.error("[/api/leads] GHL error:", result.error);
      // On ne bloque pas l'utilisateur — la soumission est quand même acceptée
    }

    console.log("[/api/leads] GHL result:", result);

    return NextResponse.json({
      success: true,
      message: "Demande reçue. Notre équipe vous contacte dans les 24h.",
    });
  } catch (err) {
    console.error("[/api/leads] error:", err);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
