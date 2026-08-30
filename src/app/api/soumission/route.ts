import { NextResponse } from "next/server";
import { quoteFormSchema } from "@/lib/validation/quote";
import type { QuoteRequest } from "@/lib/quote/types";

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
    
    // TODO: Insert into database (Prisma, etc.)
    // console.log("Saved Quote Request:", quoteRequest);
    
    // 5. Send Email (Mocked)
    // TODO: Integrate Resend / Sendgrid
    
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
