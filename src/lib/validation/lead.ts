/* ==================================================================
   Schéma de validation du formulaire de soumission (route /api/leads)
   ================================================================== */

import { z } from "zod";

const text = (max: number) => z.string().trim().max(max);
const optionalText = (max: number) => text(max).optional().or(z.literal("")).transform((v) => (v ? v : undefined));

export const CONSENT_VERSION = "2026-09-08";

export const leadSchema = z
  .object({
    firstName: text(80).min(1, "Le prénom est requis."),
    lastName: optionalText(80),
    email: z.string().trim().max(160).email("Courriel invalide.").optional().or(z.literal("")).transform((v) => (v ? v : undefined)),
    phone: z
      .string()
      .trim()
      .max(30)
      .optional()
      .or(z.literal(""))
      .transform((v: string | undefined) => (v ? v : undefined))
      .refine((v: string | undefined) => !v || v.replace(/\D/g, "").length >= 10, "Téléphone invalide."),
    postalCode: z
      .string()
      .trim()
      .max(8)
      .optional()
      .or(z.literal(""))
      .transform((v: string | undefined) => (v ? v.toUpperCase().replace(/\s+/g, "") : undefined))
      .refine((v: string | undefined) => !v || /^[A-Z]\d[A-Z]\d[A-Z]\d$/.test(v), "Code postal invalide."),

    typeThermopompe: optionalText(60),
    superficie: optionalText(40),
    chauffageActuel: optionalText(60),
    urgence: optionalText(60),
    modeleSelectionne: optionalText(120),
    budgetEstime: optionalText(40),
    municipality: optionalText(80),
    province: optionalText(10),
    zoneClimatique: optionalText(80),
    designTempC: optionalText(10),
    momentContact: optionalText(20),
    notes: optionalText(1500),
    /** Appareil actuel lu par ThermoScan (marque, modèle, année, fluide). */
    appareilActuel: optionalText(300),
    source: optionalText(60),

    /** Consentement au traitement des renseignements personnels (obligatoire, Loi 25). */
    consentProcessing: z.literal(true, { message: "Le consentement au traitement de vos renseignements est requis." }),
    /** Consentement aux communications marketing (facultatif). */
    consentMarketing: z.boolean().optional().default(false),

    /** Pot de miel : champ invisible pour les humains, doit rester vide. */
    website: z.string().max(0, "Requête rejetée.").optional().or(z.literal("")),

    /** Réponses brutes du questionnaire (facultatif, non validées champ par champ). */
    draft: z.record(z.string(), z.unknown()).optional(),
  })
  .refine((v) => v.email || v.phone, { message: "Un courriel ou un téléphone est requis.", path: ["email"] });

export type LeadInput = z.infer<typeof leadSchema>;
