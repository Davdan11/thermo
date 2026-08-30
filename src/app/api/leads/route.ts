import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/* ─────────────────────────────────────────────────────────────────────────
   POST /api/leads
   Reçoit les données du formulaire de soumission et les envoie vers:
   1. Le webhook Go High Level (si GHL_WEBHOOK_URL est défini)
   2. L'API GHL REST (si GHL_API_KEY + GHL_LOCATION_ID sont définis)
   ──────────────────────────────────────────────────────────────────────── */

export interface LeadPayload {
  // Identité
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  postalCode: string;

  // Projet
  typeThermopompe: string;   // murale | centrale | multizone | autre
  superficie: string;        // ex: "1000-1500 pi²"
  chauffageActuel: string;   // ex: "Électrique", "Mazout", etc.
  urgence: string;           // "immediate" | "3mois" | "6mois" | "information"

  // Extras
  notes?: string;
  source?: string;           // page d'origine
}

async function sendToGHLWebhook(lead: LeadPayload) {
  const webhookUrl = process.env.GHL_WEBHOOK_URL;
  if (!webhookUrl) return { ok: false, reason: "GHL_WEBHOOK_URL not set" };

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...lead,
      // Tags GHL
      tags: ["lead-site-web", "thermopompe", lead.typeThermopompe].filter(Boolean),
      source: lead.source ?? "thermopompesavendre.ca",
    }),
  });

  return { ok: res.ok, status: res.status };
}

async function sendToGHLAPI(lead: LeadPayload) {
  const apiKey = process.env.GHL_API_KEY;
  const locationId = process.env.GHL_LOCATION_ID;
  if (!apiKey || !locationId) return { ok: false, reason: "GHL_API_KEY or GHL_LOCATION_ID not set" };

  const body = {
    firstName: lead.firstName,
    lastName: lead.lastName,
    email: lead.email,
    phone: lead.phone,
    postalCode: lead.postalCode,
    locationId,
    source: "thermopompesavendre.ca",
    tags: ["lead-site-web", "thermopompe", lead.typeThermopompe].filter(Boolean),
    customField: [
      { key: "type_thermopompe", field_value: lead.typeThermopompe },
      { key: "superficie", field_value: lead.superficie },
      { key: "chauffage_actuel", field_value: lead.chauffageActuel },
      { key: "urgence", field_value: lead.urgence },
      { key: "notes", field_value: lead.notes ?? "" },
    ],
  };

  const res = await fetch("https://rest.gohighlevel.com/v1/contacts/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  });

  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, data };
}

export async function POST(req: NextRequest) {
  try {
    const lead: LeadPayload = await req.json();

    // Validation minimale
    if (!lead.firstName || !lead.email || !lead.phone) {
      return NextResponse.json({ error: "Champs requis manquants." }, { status: 400 });
    }

    // Envoyer aux deux si disponibles
    const [webhookResult, apiResult] = await Promise.allSettled([
      sendToGHLWebhook(lead),
      sendToGHLAPI(lead),
    ]);

    console.log("[leads] webhook:", webhookResult);
    console.log("[leads] api:", apiResult);

    return NextResponse.json({ success: true, message: "Lead envoyé avec succès." });
  } catch (err) {
    console.error("[leads] error:", err);
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
