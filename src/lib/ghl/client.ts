/* ─────────────────────────────────────────────────────────────────────────
   Go High Level — Client API v2
   Toute la logique d'intégration GHL est centralisée ici.

   Variables d'environnement requises (.env.local) :
   GHL_API_KEY        → Clé API privée (Settings → Integrations → API Keys)
   GHL_LOCATION_ID    → ID de ton sous-compte GHL
   GHL_PIPELINE_ID    → ID du pipeline "Thermopompes" (optionnel)
   GHL_STAGE_NEW      → ID du stage "Nouveau lead" (optionnel)
   GHL_STAGE_QUALIFIED→ ID du stage "Qualifié — ThermoMatch" (optionnel)
   GHL_STAGE_SUBMITTED→ ID du stage "Soumission reçue" (optionnel)
   GHL_WEBHOOK_URL    → Webhook GHL pour automations (optionnel mais recommandé)
───────────────────────────────────────────────────────────────────────────*/

const GHL_BASE = "https://services.leadconnectorhq.com";

// ── Types ─────────────────────────────────────────────────────────────────

export interface GHLContactInput {
  // Identité
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;

  // Localisation
  postalCode?: string;
  city?: string;      // Municipalité résolue
  province?: string;

  // Champs personnalisés thermopompe
  customFields?: {
    zone_climatique?: string;     // "6A", "7", etc.
    temp_conception?: string;     // "-25°C"
    type_thermopompe?: string;    // "murale", "centrale", "multizone"
    superficie?: string;          // "1000-1500 pi²"
    chauffage_actuel?: string;    // "Électrique", "Mazout", etc.
    budget_estime?: string;       // "5000-8000"
    urgence?: string;             // "30 jours", "3 mois", "information"
    modele_selectionne?: string;  // "Mitsubishi Zuba 2.0"
    source_page?: string;         // "hero-bar", "thermomatch", "soumission"
    municipalite?: string;        // "Montréal"
    notes_projet?: string;        // Résumé complet du questionnaire
  };

  // Tags additionnels
  extraTags?: string[];

  // Pipeline
  pipelineStage?: "new" | "qualified" | "submitted";
}

export interface GHLContactResult {
  ok: boolean;
  contactId?: string;
  action?: "created" | "updated";
  error?: string;
}

// ── Helpers ───────────────────────────────────────────────────────────────

function getHeaders() {
  const apiKey = process.env.GHL_API_KEY;
  if (!apiKey) throw new Error("GHL_API_KEY non définie");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
    Version: "2021-07-28",
  };
}

function getLocationId(): string {
  const id = process.env.GHL_LOCATION_ID;
  if (!id) throw new Error("GHL_LOCATION_ID non définie");
  return id;
}

/** Génère des tags intelligents à partir des données du lead */
export function buildSmartTags(input: GHLContactInput): string[] {
  const tags: string[] = ["lead-site-web", "thermopompe"];

  const cf = input.customFields ?? {};

  // Source
  if (cf.source_page) tags.push(`source-${cf.source_page}`);

  // Type de thermopompe
  if (cf.type_thermopompe) tags.push(cf.type_thermopompe.toLowerCase().replace(/\s+/g, "-"));

  // Zone climatique — zones froides priorité haute
  if (cf.zone_climatique) {
    tags.push(`zone-${cf.zone_climatique.toLowerCase().replace(/\s+/g, "")}`);
    const zone = cf.zone_climatique.replace(/[^0-9]/g, "");
    if (parseInt(zone) >= 7) tags.push("zone-extreme");
    else if (parseInt(zone) >= 6) tags.push("zone-froide");
  }

  // Température de conception — lead chaud si < -25°C
  if (cf.temp_conception) {
    const temp = parseInt(cf.temp_conception.replace(/[^-0-9]/g, ""));
    if (!isNaN(temp) && temp <= -28) tags.push("priorite-haute-grand-froid");
  }

  // Urgence
  if (cf.urgence) {
    const u = cf.urgence.toLowerCase();
    if (u.includes("30") || u.includes("immédiat") || u.includes("urgent")) tags.push("urgent-30j");
    else if (u.includes("3 mois") || u.includes("3mois")) tags.push("urgence-3mois");
    else if (u.includes("information")) tags.push("exploration");
  }

  // Budget
  if (cf.budget_estime) {
    const b = cf.budget_estime.replace(/[^0-9]/g, "");
    const amount = parseInt(b);
    if (!isNaN(amount) && amount >= 10000) tags.push("budget-eleve");
    else if (!isNaN(amount) && amount >= 6000) tags.push("budget-moyen");
  }

  // Province
  if (input.province) tags.push(`province-${input.province.toLowerCase()}`);

  // Tags extras
  if (input.extraTags) tags.push(...input.extraTags);

  // Dédupliquer
  return [...new Set(tags)];
}

/** Vrais IDs des champs personnalisés GHL du sous-compte c0NuyKwEa2xJ5p4KLvyw */
const GHL_FIELD_IDS = {
  zone_geographique:           "contact.zone_gographique",    // TEXT
  type_chauffage_actuel:       "contact.type_de_chauffage_actuel", // SINGLE_OPTIONS
  superficie_pi:               "contact.superficie_pi",        // NUMERICAL (ID réel ci-dessous)
  thermomatch_type_systeme:    "contact.thermomatch__type_systme", // SINGLE_OPTIONS
  urgence_du_projet:           "contact.urgence_du_projet",   // SINGLE_OPTIONS
  budget_approximatif:         "contact.budget_approximatif", // SINGLE_OPTIONS
  recommandation_1:            "q1bMz69F9pKYBzbym2zD",        // TEXT (ID réel)
  landing_page:                "tmhgsqC4etmZisrBo9nq",        // TEXT (ID réel)
  notes_vendeur:               "contact.notes_vendeur",       // LARGE_TEXT
  thermomatch_complet:         "contact.thermomatch__complt", // SINGLE_OPTIONS
  score_lead:                  "u2AzfJvTcKrFvoZTyhVl",        // NUMERICAL (ID réel)
  raison_match:                "contact.thermomatch__raison_du_match", // LARGE_TEXT
} as const;

/** Construit le tableau customFields pour l'API GHL v2
 *  en utilisant les IDs réels du sous-compte.
 *  Format : { id: string, value: string }
 */
function buildCustomFields(cf: GHLContactInput["customFields"] = {}): Array<{ id: string; value: string }> {
  const fields: Array<{ id: string; value: string }> = [];

  const add = (id: string, value: string | number | undefined) => {
    if (value !== undefined && value !== "" && value !== null) {
      fields.push({ id, value: String(value) });
    }
  };

  // Zone géographique (ex: "6A - Québec")
  const zone = [cf.zone_climatique, cf.municipalite].filter(Boolean).join(" — ");
  if (zone) add(GHL_FIELD_IDS.zone_geographique, zone);

  // Type de chauffage actuel
  add(GHL_FIELD_IDS.type_chauffage_actuel, cf.chauffage_actuel);

  // Type de système demandé (murale / centrale / multizone)
  add(GHL_FIELD_IDS.thermomatch_type_systeme, cf.type_thermopompe);

  // Urgence du projet
  add(GHL_FIELD_IDS.urgence_du_projet, cf.urgence);

  // Budget approximatif
  add(GHL_FIELD_IDS.budget_approximatif, cf.budget_estime);

  // Modèle recommandé → Recommandation 1
  add(GHL_FIELD_IDS.recommandation_1, cf.modele_selectionne);

  // Landing page / source
  add(GHL_FIELD_IDS.landing_page, cf.source_page);

  // Notes vendeur complètes
  add(GHL_FIELD_IDS.notes_vendeur, cf.notes_projet);

  // ThermoMatch complété
  if (cf.source_page === "thermomatch" || cf.source_page === "soumission-page") {
    add(GHL_FIELD_IDS.thermomatch_complet, "Oui");
  }

  return fields;
}

/** Met à jour les champs personnalisés d'un contact existant (PUT séparé)
 *  Nécessaire car POST /contacts/ n'accepte pas customFields,
 *  mais PUT /contacts/:id oui.
 */
async function updateCustomFields(contactId: string, fields: Array<{ id: string; value: string }>): Promise<void> {
  if (!fields.length) return;
  const res = await fetch(`${GHL_BASE}/contacts/${contactId}`, {
    method: "PUT",
    headers: getHeaders(),
    body: JSON.stringify({ customFields: fields }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    console.error("[GHL] updateCustomFields failed:", res.status, err);
  }
}

// ── Core API functions ────────────────────────────────────────────────────

/**
 * Crée ou met à jour un contact dans GHL.
 * Utilise l'email ou le téléphone pour trouver un contact existant (upsert).
 */
export async function upsertContact(input: GHLContactInput): Promise<GHLContactResult> {
  const locationId = getLocationId();
  const tags = buildSmartTags(input);
  const customFields = buildCustomFields(input.customFields);

  // Étape 1 — POST pour créer/upsert le contact (sans customFields)
  const body: Record<string, unknown> = {
    locationId,
    firstName: input.firstName,
    lastName: input.lastName ?? "",
    email: input.email,
    phone: input.phone,
    postalCode: input.postalCode,
    city: input.city ?? input.customFields?.municipalite,
    state: input.province,
    country: "CA",
    source: "thermopompesavendre.ca",
    tags,
  };

  // Supprimer les champs vides
  Object.keys(body).forEach((k) => {
    if (body[k] === undefined || body[k] === "" || body[k] === null) delete body[k];
  });

  const res = await fetch(`${GHL_BASE}/contacts/`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(body),
  });

  const data = await res.json().catch(() => ({}));

  if (!res.ok) {
    console.error("[GHL] upsertContact failed:", res.status, data);
    return { ok: false, error: data?.message ?? `HTTP ${res.status}` };
  }

  const contactId = data?.contact?.id ?? data?.id;

  // Étape 2 — PUT pour mettre à jour les champs personnalisés
  if (contactId && customFields.length > 0) {
    await updateCustomFields(contactId, customFields).catch(() => {});
  }

  return { ok: true, contactId, action: data?.contact ? "updated" : "created" };
}


/**
 * Ajoute une note à un contact GHL.
 * Utile pour attacher le résumé complet du projet.
 */
export async function addNote(contactId: string, body: string): Promise<boolean> {
  const res = await fetch(`${GHL_BASE}/contacts/${contactId}/notes`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({ body, userId: "" }),
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    console.error("[GHL] addNote failed:", res.status, err);
  }
  return res.ok;
}


/**
 * Crée une opportunité (deal) dans un pipeline GHL.
 * Permet de gérer le suivi commercial dans le CRM.
 */
export async function createOpportunity(
  contactId: string,
  opts: { name: string; stageId?: string; monetaryValue?: number }
): Promise<{ ok: boolean; opportunityId?: string }> {
  const pipelineId = process.env.GHL_PIPELINE_ID;
  const stageId = opts.stageId ?? process.env.GHL_STAGE_NEW;
  const locationId = getLocationId();

  if (!pipelineId || !stageId) {
    console.warn("[GHL] Pipeline/Stage IDs non configurés — opportunité non créée");
    return { ok: false };
  }

  const res = await fetch(`${GHL_BASE}/opportunities/`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({
      pipelineId,
      locationId,
      name: opts.name,
      pipelineStageId: stageId,
      status: "open",
      contactId,
      monetaryValue: opts.monetaryValue ?? 0,
      assignedTo: "",
    }),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    console.error("[GHL] createOpportunity failed:", res.status, data);
    return { ok: false };
  }

  return { ok: true, opportunityId: data?.opportunity?.id ?? data?.id };
}

/**
 * Déplace une opportunité vers un autre stage du pipeline.
 */
export async function moveOpportunityStage(opportunityId: string, stageId: string): Promise<boolean> {
  const res = await fetch(`${GHL_BASE}/opportunities/${opportunityId}`, {
    method: "PUT",
    headers: getHeaders(),
    body: JSON.stringify({ pipelineStageId: stageId }),
  });
  return res.ok;
}

/**
 * Envoie un webhook GHL (pour déclencher des automations).
 * Fonctionne indépendamment de l'API REST.
 */
export async function sendWebhook(payload: Record<string, unknown>): Promise<boolean> {
  const webhookUrl = process.env.GHL_WEBHOOK_URL;
  if (!webhookUrl) return false;

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...payload, timestamp: new Date().toISOString() }),
  });

  if (!res.ok) console.error("[GHL] webhook failed:", res.status);
  return res.ok;
}

/**
 * Fonction principale — crée le contact ET l'opportunité dans le pipeline.
 * C'est ce que toutes les routes API du site appellent.
 */
export async function captureFullLead(
  input: GHLContactInput,
  opportunityName?: string
): Promise<GHLContactResult> {
  const result = await upsertContact(input);
  if (!result.ok || !result.contactId) return result;

  const { contactId } = result;

  // Ajouter une note détaillée
  if (input.customFields?.notes_projet) {
    await addNote(contactId, input.customFields.notes_projet).catch(() => {});
  }

  // Créer l'opportunité dans le pipeline
  const stageId =
    input.pipelineStage === "qualified" ? process.env.GHL_STAGE_QUALIFIED
    : input.pipelineStage === "submitted" ? process.env.GHL_STAGE_SUBMITTED
    : process.env.GHL_STAGE_NEW;

  const budgetMatch = input.customFields?.budget_estime?.match(/\d+/);
  const monetaryValue = budgetMatch ? parseInt(budgetMatch[0]) : 0;

  await createOpportunity(contactId, {
    name: opportunityName ?? `Thermopompe — ${input.firstName ?? "Visiteur"} — ${input.city ?? input.postalCode ?? "QC"}`,
    stageId,
    monetaryValue,
  }).catch(() => {});

  // Déclencher le webhook GHL si configuré
  await sendWebhook({
    event: "lead_captured",
    contact: { firstName: input.firstName, email: input.email, phone: input.phone },
    project: input.customFields,
    tags: buildSmartTags(input),
    source: input.customFields?.source_page,
  }).catch(() => {});

  // Enrôler dans le workflow "New Lead Nurture" automatiquement
  await enrollInWorkflow(contactId, process.env.GHL_WORKFLOW_NEW_LEAD).catch(() => {});

  return result;
}

/**
 * Enrôle un contact dans un workflow GHL.
 * Déclenche automatiquement la séquence de nurturing configurée dans GHL.
 */
export async function enrollInWorkflow(contactId: string, workflowId?: string): Promise<boolean> {
  const wfId = workflowId ?? process.env.GHL_WORKFLOW_NEW_LEAD;
  if (!wfId) {
    console.warn("[GHL] GHL_WORKFLOW_NEW_LEAD non configuré — workflow non déclenché");
    return false;
  }

  const res = await fetch(`${GHL_BASE}/contacts/${contactId}/workflow/${wfId}`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify({ eventStartTime: new Date().toISOString() }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    console.error("[GHL] enrollInWorkflow failed:", res.status, err);
    return false;
  }

  console.log("[GHL] Contact", contactId, "enrôlé dans le workflow", wfId);
  return true;
}
