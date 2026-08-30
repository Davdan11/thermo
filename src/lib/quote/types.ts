export type QuoteStatus = "draft" | "submitted" | "validating" | "assigned" | "quoted" | "closed";

export interface QuoteRequest {
  id: string; // Internal reference
  status: QuoteStatus;
  createdAt: string;

  // Step 1: Location & Property
  postalCode: string;
  city?: string;
  propertyType: 
    | "unifamiliale" 
    | "condo" 
    | "duplex" 
    | "triplex" 
    | "multiplex" 
    | "mobile" 
    | "autre";
  otherPropertyDetails?: string;

  // Step 2: System Intent
  systemIntent: 
    | "murale_simple"
    | "murale_multi"
    | "centrale"
    | "remplacement"
    | "inconnu";

  // Step 3: Technical Details (Mixed based on track)
  sqft?: string;
  isReplacement: boolean;
  currentHeating?: string;
  
  // Mural specific
  indoorUnitsCount?: string;
  floorsForUnits?: string[];
  
  // Central specific
  floorsCount?: string;
  hasDucts?: string;
  indoorUnitLocation?: string;

  // Step 4: Preferences & Timeline
  brandWish?: string;
  priorities?: string[];
  timeline: string;

  // Step 5: Contact
  firstName: string;
  lastName?: string;
  email: string;
  phone: string;
  preferredContact: "email" | "phone" | "any";

  // Consents
  consentProcessing: boolean;
  consentSharing: boolean;
  consentMarketing: boolean;

  // Meta
  source?: string; // e.g., "thermomatch", "estimator", "direct"
}
