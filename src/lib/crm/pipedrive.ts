/* ==================================================================
   Pipedrive — seul CRM du site.

   Variables d'environnement :
   PIPEDRIVE_API_TOKEN        jeton API (Paramètres → Personnel → API)
   PIPEDRIVE_PIPELINE_ID      pipeline des ventes (défaut : 3)
   PIPEDRIVE_STAGE_RDV_ID     étape « RDV confirmé » (défaut : 19, webhook)

   Sans jeton, `isPipedriveConfigured()` renvoie false et les appelants
   doivent continuer sans CRM : un lead n'est jamais perdu pour autant,
   il reste dans le journal local (voir lead-journal.ts) et l'alerte
   courriel.
   ================================================================== */

const API_BASE = "https://api.pipedrive.com/v1";

function apiToken(): string | undefined {
  return process.env.PIPEDRIVE_API_TOKEN || undefined;
}

export function isPipedriveConfigured(): boolean {
  return !!apiToken();
}

export function pipelineId(): number {
  const n = parseInt(process.env.PIPEDRIVE_PIPELINE_ID ?? "", 10);
  return Number.isFinite(n) && n > 0 ? n : 3; // « 1. VENTES (Acquisition) »
}

export function stageRdvConfirmeId(): number {
  const n = parseInt(process.env.PIPEDRIVE_STAGE_RDV_ID ?? "", 10);
  return Number.isFinite(n) && n > 0 ? n : 19;
}

/** Clés des champs personnalisés de l'affaire (hash Pipedrive). */
export const PIPEDRIVE_FIELDS = {
  SOURCE: "2b1f6469368a060fc7d77e8a5d8555b27c8371b6",
  UTM_CAMPAIGN: "db6ceaa6abae01fa06b9867ac256600ee50d98a0",
  GCLID: "55e5f031a0d7c8171550e1c41a42f5bed6f290cd",
  TYPE_PROJET: "314be84f2d8c0f3b264ec3cff8740f80fef6f60a",
  PANNEAU_ELEC: "98c280f182016121029f48bbfc36fdf1896bdfe5",
  SQFT: "e082564ff7d8c061dc5773b080663b7d217269ae",
  ANNEE_CONSTRUCTION: "a6c68349657131046cedf22931ce4a8adf0ee638",
  REGION: "880eda1c5ddba59c5bc2258f9d898be1762405a4",
  MARQUE_PROPOSEE: "9d5826fa0afb31943d2c5785feeb18c62dbefc8d",
  SERIE_PROPOSEE: "82148c060ac1b8ce0ed21d62983db8bfd6f5205a",
  BTU_TOTAL: "0286d8cf7ac91f4419e53eac95fab315c731901d",
  SUBVENTION_ESTIMEE: "93afb988b7a38ef1d5efecc5b8a00f8a52ca4929",
  RAISON_PERTE: "4d891796aed9181981afcdfa37a15a860930c0f2",
  INSTALLATEUR_ASSIGNE: "b4e8ac4a263246b5cd71df79c80e3cb211eba1a6",
  DATE_INSTALLATION: "b214c179dcc86772aa606bc857c9599d23406183",
  /** Site d'origine de l'affaire (partagé avec bellechasseenergie.com). */
  SITE: "8f8731ca2d5f38191c457538fb31051581a8af58",
} as const;

/* Options des listes déroulantes du compte « Thermopompe A Vendre »
   (relevées par l'API le 2026-09-09). Pipedrive exige l'identifiant
   numérique de l'option : un libellé libre laisse le champ vide. */
export const PIPEDRIVE_OPTIONS = {
  SOURCE: { "Meta Ads": 55, "Google Ads": 56, "SEO": 57, "Direct": 58, "Référence": 59 },
  TYPE_PROJET: { "Murale 1 tête": 60, "Multizone 2+ têtes": 61, "Centrale": 62, "Échangeur d'air": 63 },
  REGION: { "Montréal": 68, "Laval": 69, "Rive-Nord": 70, "Rive-Sud": 71, "Estrie": 72, "Montérégie": 73, "Laurentides": 74, "Lanaudière": 75, "Autre": 76 },
  SITE: { "thermopompesavendre.ca": 252, "bellechasseenergie.com": 253 },
} as const;

/** Ce site, tel qu'il apparaît dans Pipedrive : champ « Site web » et préfixe du titre. */
export const THIS_SITE = { option: PIPEDRIVE_OPTIONS.SITE["thermopompesavendre.ca"], prefix: "[TAV]" } as const;

function fold(s: string): string {
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
}

/** Identifiant d'option par libellé exact (accents et casse ignorés). */
export function optionId(field: keyof typeof PIPEDRIVE_OPTIONS, label: string | undefined): number | undefined {
  if (!label) return undefined;
  const wanted = fold(label);
  for (const [name, id] of Object.entries(PIPEDRIVE_OPTIONS[field])) if (fold(name) === wanted) return id;
  return undefined;
}

/** Type de projet Pipedrive à partir d'une réponse libre du site
   (« murale », « Thermopompe centrale », « multizone », « Échangeur d'air »…). */
export function typeProjetOptionId(value: string | undefined): number | undefined {
  if (!value) return undefined;
  const v = fold(value);
  if (/multi|2\+|bizone|trizone/.test(v)) return PIPEDRIVE_OPTIONS.TYPE_PROJET["Multizone 2+ têtes"];
  if (/central/.test(v)) return PIPEDRIVE_OPTIONS.TYPE_PROJET["Centrale"];
  if (/echangeur|vrc|hrv|erv/.test(v)) return PIPEDRIVE_OPTIONS.TYPE_PROJET["Échangeur d'air"];
  if (/mural|mini-?split|mono/.test(v)) return PIPEDRIVE_OPTIONS.TYPE_PROJET["Murale 1 tête"];
  return undefined;
}

export const REGIONS_ENUM = {
  "Montréal": "Montréal",
  "Laval": "Laval",
  "Rive-Nord": "Rive-Nord",
  "Rive-Sud": "Rive-Sud",
  "Estrie": "Estrie",
  "Montérégie": "Montérégie",
  "Laurentides": "Laurentides",
  "Lanaudière": "Lanaudière",
  "Autre": "Autre",
} as const;

export interface PipedrivePerson {
  id: number;
  name?: string;
}

export interface PipedriveDeal {
  id: number;
  title?: string;
}

interface ApiEnvelope<T> {
  success?: boolean;
  data: T;
}

interface SearchResult<T> {
  items?: Array<{ item: T }>;
}

async function apiCall<T>(endpoint: string, method: "GET" | "POST" | "PUT" = "GET", body?: unknown): Promise<ApiEnvelope<T>> {
  const token = apiToken();
  if (!token) throw new Error("PIPEDRIVE_API_TOKEN absent");

  const response = await fetch(`${API_BASE}${endpoint}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // Jeton en en-tête : jamais dans l'URL (journaux de proxy, historiques).
      "x-api-token": token,
    },
    body: body === undefined ? undefined : JSON.stringify(body),
    signal: AbortSignal.timeout(10_000),
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    console.error(`[pipedrive] ${method} ${endpoint} → ${response.status}`, errorText.slice(0, 300));
    throw new Error(`Pipedrive ${response.status}`);
  }
  return (await response.json()) as ApiEnvelope<T>;
}

/** Cherche une personne par courriel puis par téléphone ; la crée si absente. */
export async function findOrCreatePerson(email: string, phone: string, firstName: string, lastName: string): Promise<PipedrivePerson> {
  if (email) {
    const res = await apiCall<SearchResult<PipedrivePerson>>(`/persons/search?term=${encodeURIComponent(email)}&exact_match=true&fields=email`);
    const hit = res.data?.items?.[0]?.item;
    if (hit) return hit;
  }
  if (phone) {
    const res = await apiCall<SearchResult<PipedrivePerson>>(`/persons/search?term=${encodeURIComponent(phone)}&fields=phone`);
    const hit = res.data?.items?.[0]?.item;
    if (hit) return hit;
  }
  const created = await apiCall<PipedrivePerson>("/persons", "POST", {
    name: `${firstName} ${lastName}`.trim() || phone || email,
    email: email ? [{ value: email, primary: true }] : [],
    phone: phone ? [{ value: phone, primary: true }] : [],
  });
  return created.data;
}

export type DealCustomFields = Record<string, string | number | undefined>;

/** Crée une affaire dans la première étape du pipeline des ventes. Les champs vides ne sont pas envoyés. */
export async function createDeal(params: { title: string; person_id: number; customFields?: DealCustomFields }): Promise<PipedriveDeal> {
  const fields = Object.fromEntries(Object.entries(params.customFields ?? {}).filter(([, v]) => v !== undefined && v !== ""));
  const res = await apiCall<PipedriveDeal>("/deals", "POST", {
    title: params.title,
    person_id: params.person_id,
    pipeline_id: pipelineId(),
    ...fields,
  });
  return res.data;
}

export async function createNote(dealId: number, content: string): Promise<unknown> {
  const res = await apiCall<unknown>("/notes", "POST", { deal_id: dealId, content });
  return res.data;
}

export async function createActivity(deal_id: number, person_id: number, type: "call" | "meeting" | "task", subject: string): Promise<unknown> {
  const res = await apiCall<unknown>("/activities", "POST", {
    subject,
    type,
    deal_id,
    person_id,
    due_date: new Date().toISOString().split("T")[0],
  });
  return res.data;
}

/** Appel planifié par le client depuis le site : activité « call » datée sur l'affaire, plus une note. Ne lance jamais. */
export async function scheduleCall(dealId: number, slot: { date: string; dueTime: string; subject: string; note: string }): Promise<{ ok: true; activityId: number | null } | { ok: false; reason: "non-configure" | "erreur"; error?: string }> {
  if (!apiToken()) return { ok: false, reason: "non-configure" };
  try {
    const deal = await apiCall<{ person_id?: number | { value: number } | null }>(`/deals/${dealId}`);
    const p = deal.data?.person_id;
    const personId = typeof p === "number" ? p : p?.value;
    const act = await apiCall<{ id: number }>("/activities", "POST", {
      subject: slot.subject,
      type: "call",
      deal_id: dealId,
      ...(personId ? { person_id: personId } : {}),
      due_date: slot.date,
      due_time: slot.dueTime,
      duration: "00:30",
      note: slot.note,
    });
    await createNote(dealId, slot.note).catch(() => undefined);
    return { ok: true, activityId: act.data?.id ?? null };
  } catch (e) {
    return { ok: false, reason: "erreur", error: e instanceof Error ? e.message : String(e) };
  }
}

/* ------------------------------------------------------------------
   Parcours complets
   ------------------------------------------------------------------ */

export interface WebLeadInput {
  firstName: string;
  lastName?: string;
  email?: string;
  phone?: string;
  title: string;
  customFields: DealCustomFields;
  noteHtml: string;
}

export type CaptureResult = { ok: true; dealId: number; personId: number } | { ok: false; reason: "non-configure" | "erreur"; error?: string };

/** Lead issu du formulaire web : personne → affaire → note. Ne lance jamais. */
export async function captureWebLead(input: WebLeadInput): Promise<CaptureResult> {
  if (!isPipedriveConfigured()) return { ok: false, reason: "non-configure" };
  try {
    const person = await findOrCreatePerson(input.email ?? "", input.phone ?? "", input.firstName, input.lastName ?? "");
    const deal = await createDeal({
      title: `${THIS_SITE.prefix} ${input.title}`,
      person_id: person.id,
      customFields: { [PIPEDRIVE_FIELDS.SITE]: THIS_SITE.option, ...input.customFields },
    });
    await createNote(deal.id, input.noteHtml).catch((e) => console.error("[pipedrive] note non créée :", e));
    return { ok: true, dealId: deal.id, personId: person.id };
  } catch (e) {
    console.error("[pipedrive] captureWebLead :", e);
    return { ok: false, reason: "erreur", error: e instanceof Error ? e.message : String(e) };
  }
}

export interface PhoneLeadInput {
  phone: string;
  title: string;
  note: string;
  /** Origine (appel-manque, message-vocal, appel-enregistre) : consignée dans la note. */
  source: string;
}

/** Lead téléphonique (Twilio) : personne par numéro → affaire → note. Ne lance jamais. */
export async function capturePhoneLead(input: PhoneLeadInput): Promise<CaptureResult> {
  if (!isPipedriveConfigured()) return { ok: false, reason: "non-configure" };
  try {
    const person = await findOrCreatePerson("", input.phone, input.phone, "");
    const deal = await createDeal({
      title: `${THIS_SITE.prefix} ${input.title}`,
      person_id: person.id,
      customFields: { [PIPEDRIVE_FIELDS.SITE]: THIS_SITE.option, [PIPEDRIVE_FIELDS.SOURCE]: PIPEDRIVE_OPTIONS.SOURCE["Direct"] },
    });
    await createNote(deal.id, `<pre>${escapeForNote(`Origine : ${input.source}\n${input.note}`)}</pre>`).catch((e) => console.error("[pipedrive] note non créée :", e));
    return { ok: true, dealId: deal.id, personId: person.id };
  } catch (e) {
    console.error("[pipedrive] capturePhoneLead :", e);
    return { ok: false, reason: "erreur", error: e instanceof Error ? e.message : String(e) };
  }
}

function escapeForNote(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

/* ------------------------------------------------------------------
   Lecture (webhooks) : personne, affaire, étapes
   ------------------------------------------------------------------ */
export interface PipedrivePersonDetail {
  id: number;
  name?: string;
  first_name?: string;
  email?: Array<{ value: string; primary?: boolean }>;
}

export async function getPerson(personId: number): Promise<PipedrivePersonDetail | null> {
  try {
    const res = await apiCall<PipedrivePersonDetail>(`/persons/${personId}`);
    return res.data ?? null;
  } catch {
    return null;
  }
}

export interface PipedriveStage {
  id: number;
  name: string;
  pipeline_id: number;
}

let stagesCache: { at: number; stages: PipedriveStage[] } | null = null;

/** Étapes de tous les pipelines, mises en cache dix minutes. */
export async function getStages(): Promise<PipedriveStage[]> {
  if (stagesCache && Date.now() - stagesCache.at < 10 * 60_000) return stagesCache.stages;
  const res = await apiCall<PipedriveStage[]>("/stages");
  stagesCache = { at: Date.now(), stages: res.data ?? [] };
  return stagesCache.stages;
}

/** Libellé d'une option de liste déroulante à partir de son identifiant (tel que reçu dans un webhook). */
export function optionLabel(field: keyof typeof PIPEDRIVE_OPTIONS, id: string | number | undefined | null): string | undefined {
  if (id === undefined || id === null || id === "") return undefined;
  const n = Number(id);
  for (const [name, value] of Object.entries(PIPEDRIVE_OPTIONS[field])) if (value === n) return name;
  return undefined;
}
