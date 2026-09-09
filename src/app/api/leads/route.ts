/* ==================================================================
   POST /api/leads — formulaire de soumission (seul point d'entrée actif)

   - validation Zod (src/lib/validation/lead.ts), pot de miel, limite de débit
   - consentement Loi 25 obligatoire, horodaté et consigné dans le CRM
   - toute valeur utilisateur est échappée avant insertion dans la note HTML
   - alerte interne par courriel + courriel de bienvenue au client
   ================================================================== */

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { findOrCreatePerson, createDeal, PIPEDRIVE_FIELDS, createNote } from "@/lib/crm/pipedrive";
import { getTerritoryFromPostalCode } from "@/lib/crm/territory";
import { sendClientWelcomeEmail, sendInternalLeadAlert } from "@/lib/crm/email";
import { leadSchema, CONSENT_VERSION } from "@/lib/validation/lead";
import { escapeHtml } from "@/lib/security/escape";
import { rateLimit, tooManyRequests, clientIp } from "@/lib/security/rate-limit";
import { createHash } from "node:crypto";

export async function POST(req: NextRequest) {
  if (!rateLimit(req, { name: "leads", limit: 5, windowMs: 10 * 60 * 1000 })) return tooManyRequests();

  let json: unknown;
  try {
    json = await req.json();
  } catch {
    return NextResponse.json({ error: "Corps de requête invalide." }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(json);
  if (!parsed.success) {
    const first = parsed.error.issues[0];
    // Le pot de miel rempli ressemble à un succès pour le robot, sans rien créer.
    if (first?.path?.[0] === "website") return NextResponse.json({ success: true });
    return NextResponse.json({ error: first?.message ?? "Données invalides.", field: first?.path?.[0] ?? null }, { status: 400 });
  }
  const lead = parsed.data;

  try {
    const territory = lead.postalCode ? getTerritoryFromPostalCode(lead.postalCode) : "Autre";
    const consentAt = new Date().toISOString();
    // Empreinte non réversible de l'IP : preuve de consentement sans conserver l'adresse en clair.
    const ipHash = createHash("sha256").update(clientIp(req)).digest("hex").slice(0, 16);

    const marque = lead.modeleSelectionne ?? "Aucune sélection";
    const btu = lead.superficie ? String(parseInt(lead.superficie.replace(/\D/g, ""), 10) * 15 || "") : "";

    const person = await findOrCreatePerson(lead.email ?? "", lead.phone ?? "", lead.firstName, lead.lastName ?? "");

    const customFields = {
      [PIPEDRIVE_FIELDS.REGION]: territory,
      [PIPEDRIVE_FIELDS.SOURCE]: lead.source ?? "soumission-page",
      [PIPEDRIVE_FIELDS.TYPE_PROJET]: lead.typeThermopompe ?? "Nouveau",
      [PIPEDRIVE_FIELDS.SQFT]: lead.superficie ?? "",
      [PIPEDRIVE_FIELDS.BTU_TOTAL]: btu,
    };

    const deal = await createDeal({
      title: `${lead.firstName} ${lead.lastName ?? ""} - Thermopompe`.trim(),
      person_id: person.id,
      customFields,
    });

    const row = (label: string, value: unknown) => `<li><b>${label} :</b> ${escapeHtml(value ?? "Non spécifié")}</li>`;
    const noteHtml = `
      <h3>Détails du projet</h3>
      <ul>
        ${row("Ville", `${lead.municipality ?? "Non spécifié"}${lead.postalCode ? ` (${lead.postalCode})` : ""}`)}
        ${row("Chauffage actuel", lead.chauffageActuel)}
        ${row("Type de thermopompe recherchée", lead.typeThermopompe)}
        ${row("Superficie", lead.superficie)}
        ${row("Échéancier", lead.urgence)}
        ${row("Moment préféré pour l'appel", lead.momentContact)}
        ${row("Budget estimé", lead.budgetEstime)}
        ${row("Modèle sélectionné (ThermoMatch)", marque)}
        ${lead.notes ? row("Notes", lead.notes) : ""}
      </ul>
      <h3>Consentement (Loi 25)</h3>
      <ul>
        ${row("Traitement des renseignements", `oui, ${consentAt}, version ${CONSENT_VERSION}`)}
        ${row("Communications marketing", lead.consentMarketing ? "oui" : "non")}
        ${row("Empreinte de session", ipHash)}
      </ul>
    `;
    await createNote(deal.id, noteHtml);

    const [, emailSent] = await Promise.all([
      sendInternalLeadAlert({
        firstName: lead.firstName,
        lastName: lead.lastName,
        email: lead.email,
        phone: lead.phone,
        postalCode: lead.postalCode,
        territory,
        typeThermopompe: lead.typeThermopompe,
        superficie: lead.superficie,
        modele: marque,
        moment: lead.momentContact,
        dealId: deal.id,
      }),
      lead.email
        ? sendClientWelcomeEmail(lead.email, {
            firstName: lead.firstName,
            hasThermoMatch: !!lead.modeleSelectionne,
            recommendedBrand: marque,
            recommendedBtu: btu,
            estimatedSubvention: "voir la fiche",
            sqft: lead.superficie ?? "N/D",
          })
        : Promise.resolve(false),
    ]);

    return NextResponse.json({ success: true, message: "Demande reçue.", emailSent: emailSent === true });
  } catch (err) {
    console.error("[/api/leads] error:", err);
    return NextResponse.json({ error: "Erreur interne. Appelez-nous au 438-900-3224." }, { status: 500 });
  }
}
