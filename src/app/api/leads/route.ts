/* ==================================================================
   POST /api/leads — formulaire de soumission (seul point d'entrée actif)

   Ordre volontaire, pour ne jamais perdre un lead :
   1. validation Zod (src/lib/validation/lead.ts), pot de miel, limite de débit
   2. journal local (data/leads/AAAA-MM.jsonl) — avant tout appel externe
   3. Pipedrive : personne → affaire → note (non bloquant)
   4. alerte interne par courriel + courriel de bienvenue (non bloquants)
   5. succès si au moins une trace existe (journal, affaire ou alerte)

   Consentement Loi 25 obligatoire, horodaté et consigné dans la note.
   Toute valeur utilisateur est échappée avant insertion dans le HTML.
   ================================================================== */

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { captureWebLead, optionId, typeProjetOptionId, PIPEDRIVE_FIELDS } from "@/lib/crm/pipedrive";
import { getTerritoryFromPostalCode } from "@/lib/crm/territory";
import { sendClientWelcomeEmail, sendInternalLeadAlert } from "@/lib/crm/email";
import { journalLead, journalOutcome } from "@/lib/crm/lead-journal";
import { leadSchema, CONSENT_VERSION } from "@/lib/validation/lead";
import { escapeHtml } from "@/lib/security/escape";
import { rateLimit, tooManyRequests, clientIp } from "@/lib/security/rate-limit";
import { createHash } from "node:crypto";

const PHONE_FALLBACK = "438-900-3224";

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

  const territory = lead.postalCode ? getTerritoryFromPostalCode(lead.postalCode) : "Autre";
  const consentAt = new Date().toISOString();
  // Empreinte non réversible de l'IP : preuve de consentement sans conserver l'adresse en clair.
  const ipHash = createHash("sha256").update(clientIp(req)).digest("hex").slice(0, 16);
  const marque = lead.modeleSelectionne ?? "Aucune sélection";
  const btu = lead.superficie ? String(parseInt(lead.superficie.replace(/\D/g, ""), 10) * 15 || "") : "";

  // 2. Journal local d'abord : même si tout le reste tombe, le lead existe.
  const journalable: Record<string, unknown> = { ...lead };
  delete journalable.website; // pot de miel, toujours vide ici
  delete journalable.draft; // réponses brutes non validées : pas de renseignement personnel à conserver
  const { entry, written } = await journalLead("soumission", { ...journalable, territory, consentAt, consentVersion: CONSENT_VERSION, ipHash });

  // 3. Pipedrive, non bloquant.
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
      ${lead.appareilActuel ? row("Appareil actuel (ThermoScan)", lead.appareilActuel) : ""}
      ${row("Page d'origine", lead.source ?? "soumission-page")}
      ${lead.notes ? row("Notes", lead.notes) : ""}
    </ul>
    <h3>Consentement (Loi 25)</h3>
    <ul>
      ${row("Traitement des renseignements", `oui, ${consentAt}, version ${CONSENT_VERSION}`)}
      ${row("Communications marketing", lead.consentMarketing ? "oui" : "non")}
      ${row("Empreinte de session", ipHash)}
      ${row("Référence journal", entry.id)}
    </ul>
  `;

  const crm = await captureWebLead({
    firstName: lead.firstName,
    lastName: lead.lastName,
    email: lead.email,
    phone: lead.phone,
    title: `${lead.firstName} ${lead.lastName ?? ""} - Thermopompe`.trim(),
    customFields: {
      [PIPEDRIVE_FIELDS.REGION]: optionId("REGION", territory),
      // Le canal d'acquisition n'est connu que s'il correspond à une option Pipedrive
      // (SEO, Google Ads…) ; la page d'origine est toujours dans la note.
      [PIPEDRIVE_FIELDS.SOURCE]: optionId("SOURCE", lead.source),
      [PIPEDRIVE_FIELDS.TYPE_PROJET]: typeProjetOptionId(lead.typeThermopompe),
      [PIPEDRIVE_FIELDS.SQFT]: lead.superficie,
      [PIPEDRIVE_FIELDS.BTU_TOTAL]: btu,
    },
    noteHtml,
  });
  const dealId = crm.ok ? crm.dealId : undefined;

  // 4. Courriels, non bloquants.
  const [alertSent, clientSent] = await Promise.all([
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
      dealId,
      crmStatus: crm.ok ? "ok" : crm.reason,
      journalId: entry.id,
    }).catch((e) => {
      console.error("[/api/leads] alerte interne :", e);
      return false;
    }),
    lead.email
      ? sendClientWelcomeEmail(lead.email, {
          firstName: lead.firstName,
          hasThermoMatch: !!lead.modeleSelectionne,
          recommendedBrand: marque,
          recommendedBtu: btu,
          estimatedSubvention: "voir la fiche",
          sqft: lead.superficie ?? "N/D",
        }).catch((e) => {
          console.error("[/api/leads] courriel client :", e);
          return false;
        })
      : Promise.resolve(false),
  ]);

  await journalOutcome(entry, {
    pipedrive: crm.ok ? "ok" : crm.reason,
    dealId,
    error: crm.ok ? undefined : crm.error,
    alertEmail: alertSent === true,
    clientEmail: clientSent === true,
  });

  // 5. Le lead est « reçu » dès qu'une trace existe quelque part.
  const captured = written || crm.ok || alertSent === true;
  if (!captured) {
    console.error("[/api/leads] AUCUNE trace conservée pour", entry.id, { crm, alertSent });
    return NextResponse.json({ error: `Erreur interne. Appelez-nous au ${PHONE_FALLBACK}.` }, { status: 500 });
  }
  if (!crm.ok) console.warn(`[/api/leads] ${entry.id} reçu sans CRM (${crm.reason}) — voir data/leads.`);

  // dealId et journalId permettent au client de réserver ensuite un appel (POST /api/rdv) rattaché au même dossier.
  return NextResponse.json({ success: true, message: "Demande reçue.", emailSent: clientSent === true, dealId, journalId: entry.id });
}
