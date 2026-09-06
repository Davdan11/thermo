import { NextResponse } from "next/server";
import { quoteFormSchema } from "@/lib/validation/quote";
import type { QuoteRequest } from "@/lib/quote/types";
import { findOrCreatePerson, createDeal, createActivity, PIPEDRIVE_FIELDS } from "@/lib/crm/pipedrive";
import { getTerritoryFromPostalCode } from "@/lib/crm/territory";
import { sendLeadEmail, sendClientWelcomeEmail } from "@/lib/crm/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // 1. Validation Zod
    const result = quoteFormSchema.safeParse(body);
    
    if (!result.success) {
      return NextResponse.json(
        { 
          error: "Validation failed", 
          details: result.error.flatten().fieldErrors 
        },
        { status: 400 }
      );
    }
    
    const data = result.data;
    
    // 2. Anti-spam (Honeypot)
    if (data.honeypot && data.honeypot.length > 0) {
      // It's a bot, we return 200 to trick it, but we flag it or drop it.
      return NextResponse.json({ 
        success: true, 
        reference: "SPAM-TRAPPED",
        message: "Demande reçue" 
      });
    }
    
    // 3. Generate Reference
    const prefix = "REF";
    const randomChars = Math.random().toString(36).substring(2, 7).toUpperCase();
    const publicReference = `${prefix}-${randomChars}`;
    
    // 4. Create internal representation (Would be saved to DB)
    const quoteRequest: QuoteRequest = {
      id: publicReference,
      status: "submitted",
      createdAt: new Date().toISOString(),
      
      postalCode: data.postalCode.toUpperCase(),
      city: data.city,
      propertyType: data.propertyType,
      otherPropertyDetails: data.otherPropertyDetails,

      systemIntent: data.systemIntent,

      sqft: data.sqft,
      isReplacement: data.isReplacement,
      currentHeating: data.currentHeating,
      
      indoorUnitsCount: data.indoorUnitsCount,
      floorsForUnits: Array.isArray(data.floorsForUnits) ? data.floorsForUnits : data.floorsForUnits ? [data.floorsForUnits] : undefined,
      
      floorsCount: data.floorsCount,
      hasDucts: data.hasDucts,
      indoorUnitLocation: data.indoorUnitLocation,

      brandWish: data.brandWish,
      priorities: data.priorities,
      timeline: data.timeline,

      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phone: data.phone,
      preferredContact: data.preferredContact,

      consentProcessing: data.consentProcessing,
      consentSharing: data.consentSharing,
      consentMarketing: data.consentMarketing ?? false,
    };
    
    // 5. Envoi au CRM (Pipedrive) & Email en Parallèle
    try {
      const territory = getTerritoryFromPostalCode(quoteRequest.postalCode);
      
      // Parse tracking data from the request body
      const trackingData = body.tracking || {};
      const source = trackingData.utm_source || "SEO / Organique";
      const campaign = trackingData.utm_campaign || "";
      const adset = trackingData.utm_medium || "";
      const ad = trackingData.utm_term || trackingData.utm_content || "";
      const gclid = trackingData.gclid || "";
      
      await Promise.all([
        // Processus CRM
        (async () => {
          // 5.1 Trouver ou Créer le Contact
          const person = await findOrCreatePerson(
            quoteRequest.email, 
            quoteRequest.phone, 
            quoteRequest.firstName, 
            quoteRequest.lastName
          );
          
          // Extraire les données du ThermoMatch et ThermoScan depuis le 'draft'
          const draft = body.draft || {};
          const tmResult = draft.thermoMatchResult || {};
          const tsResult = draft.thermoScanResult || {};
          
          let marque = "Aucune";
          let serie = "Aucune";
          let btu = quoteRequest.sqft ? (parseInt(quoteRequest.sqft) * 12).toString() : "0"; // Formule basique
          let subvention = "Inconnue";

          if (tmResult.bestMatch) {
            marque = tmResult.bestMatch.brand || "Aucune";
            serie = tmResult.bestMatch.series || "Aucune";
            btu = tmResult.recommendedBtu?.toString() || btu;
            subvention = tmResult.logisvertDetails?.totalAmount?.toString() || "Inconnue";
          }
          
          if (tsResult.match) {
            // Si c'est un ThermoScan de remplacement
            marque = tsResult.match.brand || marque;
          }

          // 5.2 Créer le Deal (Opportunité)
          const customFields = {
            [PIPEDRIVE_FIELDS.REGION]: territory,
            [PIPEDRIVE_FIELDS.SOURCE]: source,
            [PIPEDRIVE_FIELDS.UTM_CAMPAIGN]: campaign,
            [PIPEDRIVE_FIELDS.GCLID]: gclid,
            [PIPEDRIVE_FIELDS.TYPE_PROJET]: quoteRequest.systemIntent === 'replace' ? 'Remplacement' : 'Nouveau',
            [PIPEDRIVE_FIELDS.SQFT]: quoteRequest.sqft?.toString(),
            [PIPEDRIVE_FIELDS.MARQUE_PROPOSEE]: marque,
            [PIPEDRIVE_FIELDS.SERIE_PROPOSEE]: serie,
            [PIPEDRIVE_FIELDS.BTU_TOTAL]: btu,
            [PIPEDRIVE_FIELDS.SUBVENTION_ESTIMEE]: subvention,
          };
          
          const deal = await createDeal({
            title: `${quoteRequest.firstName} ${quoteRequest.lastName} - Thermopompe`,
            person_id: person.id,
            customFields
          });
          
          // 5.3 Créer l'Activité "Premier Contact"
          await createActivity(deal.id, person.id, 'call', 'Premier appel de qualification');
        })(),
        
        // Envoi Courriel Interne (Alerte Nouveau Lead)
        sendLeadEmail(quoteRequest, territory),
        
        // Envoi Courriel Client (Bienvenue VIP)
        sendClientWelcomeEmail(quoteRequest.email, {
          firstName: quoteRequest.firstName,
          hasThermoMatch: !!tmResult.bestMatch,
          recommendedBrand: marque,
          recommendedBtu: btu,
          estimatedSubvention: subvention,
          sqft: quoteRequest.sqft || "N/D"
        })
      ]);
      
    } catch (crmError) {
      // On ne veut pas bloquer l'utilisateur si Pipedrive plante
      console.error("Erreur lors de l'intégration CRM:", crmError);
    }
    
    // 6. Return success
    return NextResponse.json({ 
      success: true, 
      reference: publicReference,
      message: "Demande soumise avec succès."
    });
    
  } catch (error) {
    console.error("API Soumission Error:", error);
    return NextResponse.json(
      { error: "Une erreur interne est survenue." },
      { status: 500 }
    );
  }
}
