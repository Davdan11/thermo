import { z } from "zod";

const postalCodeRegex = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
const phoneRegex = /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

export const quoteFormSchema = z.object({
  // Step 1: Location & Property
  postalCode: z.string().regex(postalCodeRegex, {
    message: "Le code postal doit être au format A1A 1A1.",
  }),
  city: z.string().optional(),
  propertyType: z.enum(["unifamiliale", "condo", "duplex", "triplex", "multiplex", "mobile", "autre"], {
    message: "Veuillez sélectionner un type de propriété.",
  }),
  otherPropertyDetails: z.string().optional(),

  // Step 2: System Intent
  systemIntent: z.enum(["murale_simple", "murale_multi", "centrale", "remplacement", "inconnu"], {
    message: "Veuillez indiquer le type de système recherché.",
  }),

  // Step 3: Technical Details
  sqft: z.string().optional(),
  isReplacement: z.boolean().default(false),
  currentHeating: z.string().optional(),
  projectType: z.string().optional(),
  fullAddress: z.string().optional(),
  notes: z.string().optional(),
  
  // Mural specific
  indoorUnitsCount: z.string().optional(),
  floorsForUnits: z.union([z.array(z.string()), z.string()]).optional(),
  unitFloors: z.string().optional(),
  
  // Central specific
  floorsCount: z.string().optional(),
  hasDucts: z.string().optional(),
  indoorUnitLocation: z.string().optional(),

  // Step 4: Preferences & Timeline
  brandWish: z.string().optional(),
  priorities: z.array(z.string()).max(2, { message: "Maximum 2 priorités" }).optional(),
  timeline: z.string().min(1, { message: "Veuillez indiquer un échéancier." }),

  // Step 5: Contact
  firstName: z.string().min(2, { message: "Le prénom est requis." }),
  lastName: z.string().optional(),
  email: z.string().email({ message: "L'adresse courriel est invalide." }),
  phone: z.string().regex(phoneRegex, { message: "Le numéro de téléphone est invalide." }),
  preferredContact: z.enum(["email", "phone", "any"]).default("any"),

  // Consents
  consentProcessing: z.boolean().refine(val => val === true, {
    message: "Vous devez accepter les conditions pour soumettre la demande.",
  }),
  consentSharing: z.boolean().refine(val => val === true, {
    message: "Vous devez consentir au partage des informations pour l'évaluation de votre projet.",
  }),
  consentMarketing: z.boolean().optional(),
  
  // Anti-spam honeypot
  honeypot: z.string().optional(),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;
