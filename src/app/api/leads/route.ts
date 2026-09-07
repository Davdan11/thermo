import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { findOrCreatePerson, createDeal, PIPEDRIVE_FIELDS, createNote } from "@/lib/crm/pipedrive";
import { getTerritoryFromPostalCode } from "@/lib/crm/territory";
import { sendClientWelcomeEmail } from "@/lib/crm/email";

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

  // Localisation résolue
  municipality?: string;
  province?: string;
  zoneClimatique?: string;
  designTempC?: string;

  // Extras
  notes?: string;
  source?: string;
  draft?: any;
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

    const territory = lead.postalCode ? getTerritoryFromPostalCode(lead.postalCode) : "Autre";

    // Extraire les données du ThermoMatch depuis le 'draft' (s'il est passé)
    const draft = lead.draft || {};
    const tmResult = draft.thermoMatchResult || {};
    
    let marque = lead.modeleSelectionne || "Aucune";
    let serie = "Aucune";
    let btu = lead.superficie ? (parseInt(lead.superficie.replace(/\D/g,'')) * 12).toString() : "0";
    let subvention = "Inconnue";

    if (tmResult.bestMatch) {
      marque = tmResult.bestMatch.brand || marque;
      serie = tmResult.bestMatch.series || "Aucune";
      btu = tmResult.recommendedBtu?.toString() || btu;
      subvention = tmResult.logisvertDetails?.totalAmount?.toString() || "Inconnue";
    }

    // 1. Trouver ou Créer le Contact Pipedrive
    const person = await findOrCreatePerson(
      lead.email, 
      lead.phone, 
      lead.firstName, 
      lead.lastName || ""
    );

    // 2. Créer le Deal
    const customFields = {
      [PIPEDRIVE_FIELDS.REGION]: territory,
      [PIPEDRIVE_FIELDS.SOURCE]: lead.source || "soumission-page",
      [PIPEDRIVE_FIELDS.TYPE_PROJET]: lead.typeThermopompe || "Nouveau",
      [PIPEDRIVE_FIELDS.SQFT]: lead.superficie || "",
      [PIPEDRIVE_FIELDS.BTU_TOTAL]: btu,
      [PIPEDRIVE_FIELDS.SUBVENTION_ESTIMEE]: subvention,
    };
    
    const deal = await createDeal({
      title: `${lead.firstName} ${lead.lastName || ""} - Thermopompe`,
      person_id: person.id,
      customFields
    });

    // 3. Ajouter la note détaillée avec toutes les infos
    const noteHtml = `
      <h3>Détails du projet (ThermoMatch)</h3>
      <ul>
        <li><b>Ville :</b> ${lead.municipality || "Non spécifié"} ${lead.postalCode ? `(${lead.postalCode})` : ""}</li>
        <li><b>Type de bâtiment :</b> ${lead.chauffageActuel || "Non spécifié"}</li>
        <li><b>Type de thermopompe recherchée :</b> ${lead.typeThermopompe || "Non spécifié"}</li>
        <li><b>Superficie :</b> ${lead.superficie || "Non spécifié"}</li>
        <li><b>Urgence / Échéancier :</b> ${lead.urgence || "Non spécifié"}</li>
        <li><b>Budget estimé :</b> ${lead.budgetEstime || "Non spécifié"}</li>
        ${lead.notes ? `<li><b>Notes supplémentaires :</b> ${lead.notes}</li>` : ""}
      </ul>
      <br/>
      <h3>Recommandation de l'algorithme</h3>
      <ul>
        <li><b>Marque recommandée :</b> ${marque}</li>
        <li><b>Série suggérée :</b> ${serie}</li>
        <li><b>BTU Calculé :</b> ${btu} BTU</li>
        <li><b>Subvention (LogisVert) :</b> ${subvention}$</li>
      </ul>
    `;
    
    await createNote(deal.id, noteHtml);

    // 4. Envoyer le Courriel de bienvenue VIP
    if (lead.email) {
      await sendClientWelcomeEmail(lead.email, {
        firstName: lead.firstName,
        hasThermoMatch: !!tmResult.bestMatch,
        recommendedBrand: marque,
        recommendedBtu: btu,
        estimatedSubvention: subvention,
        sqft: lead.superficie || "N/D"
      });
    }

    return NextResponse.json({ success: true, message: "Lead envoyé vers Pipedrive" });

  } catch (err: any) {
    console.error("[/api/leads] error:", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
