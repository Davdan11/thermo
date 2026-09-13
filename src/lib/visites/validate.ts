/* Chantier D — validation (zod) de tout ce qui arrive du client (/visite) et de l'outil (/gestion). */
import { z } from "zod";
import { CLIENT_ID_RE } from "@/lib/gestion/crm/types";
import { QUOTE_ID_RE } from "@/lib/soumissions/quote";
import { MAX_UNITS, SUGGESTION_ID_RE, VISIT_ID_RE, type VisitAnswers } from "./types";

const S = (max: number) => z.string().trim().max(max);
const cleanList = (max: number, len: number) => z.array(S(len)).max(max).transform((l) => [...new Set(l.filter(Boolean))]);

export const answersSchema = z.object({
  propertyType: S(80),
  yearBuilt: S(20),
  floors: z.number().int().min(1).max(10).nullable(),
  basement: z.enum(["oui", "non", ""]),
  rooms: z.array(S(80)).max(MAX_UNITS).transform((l) => l.filter(Boolean)),
  heating: cleanList(10, 60),
  access: S(1000),
  constraints: S(1000),
  presence: S(300),
  notes: S(2000),
});

export function parseAnswers(raw: unknown): { ok: true; data: VisitAnswers } | { ok: false; error: string } {
  const r = answersSchema.safeParse(raw);
  return r.success ? { ok: true, data: r.data } : { ok: false, error: "Réponses invalides : rechargez la page et réessayez." };
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const createVisitSchema = z.object({
  quoteId: z.string().regex(QUOTE_ID_RE).nullable(),
  clientId: z.string().regex(CLIENT_ID_RE).nullable(),
  contact: z.object({
    firstName: S(80),
    lastName: S(80),
    phone: S(40),
    email: S(200).refine((e) => !e || EMAIL_RE.test(e), "Courriel du client invalide."),
  }),
  rooms: cleanList(MAX_UNITS, 80),
  channels: z.object({ sms: z.boolean(), email: z.boolean() }),
});

export type CreateVisitInput = z.infer<typeof createVisitSchema>;

export const visitSettingsSchema = z.object({
  retentionMonths: z.number().int().min(1, "Un mois au moins.").max(60, "60 mois au plus."),
  linkDays: z.number().int().min(1, "Un jour au moins.").max(60, "60 jours au plus."),
});

export const decisionSchema = z.object({
  visitId: z.string().regex(VISIT_ID_RE),
  suggestionId: z.string().regex(SUGGESTION_ID_RE),
  decision: z.enum(["appliquee", "ignoree"]),
});

export const visitIdSchema = z.string().regex(VISIT_ID_RE);
