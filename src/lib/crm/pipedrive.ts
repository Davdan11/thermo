const API_TOKEN = process.env.PIPEDRIVE_API_TOKEN;
const API_BASE = "https://api.pipedrive.com/v1";

const PIPELINE_ID = 3; // ID for "1. VENTES (Acquisition)"

// Map of our custom fields to their Pipedrive hash keys
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
};

// Values for REGION enum
export const REGIONS_ENUM = {
  "Montréal": "Montréal",
  "Laval": "Laval",
  "Rive-Nord": "Rive-Nord",
  "Rive-Sud": "Rive-Sud",
  "Estrie": "Estrie",
  "Montérégie": "Montérégie",
  "Laurentides": "Laurentides",
  "Lanaudière": "Lanaudière",
  "Autre": "Autre"
};

async function apiCall(endpoint: string, method: string = "GET", body?: any) {
  if (!API_TOKEN) {
    throw new Error("Missing PIPEDRIVE_API_TOKEN");
  }

  const url = `${API_BASE}${endpoint}`;
  
  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      // Jeton en en-tête : jamais dans l'URL (journaux de proxy, historiques).
      "x-api-token": API_TOKEN,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`Pipedrive API Error (${method} ${endpoint}):`, response.status, errorText);
    throw new Error(`Pipedrive API Error: ${response.status}`);
  }

  return response.json();
}

/**
 * Find a person by email or phone. If not found, create them.
 */
export async function findOrCreatePerson(email: string, phone: string, firstName: string, lastName: string) {
  const fullName = `${firstName} ${lastName}`;
  
  // 1. Search by email
  if (email) {
    const searchRes = await apiCall(`/persons/search?term=${encodeURIComponent(email)}&exact_match=true`);
    if (searchRes.data && searchRes.data.items && searchRes.data.items.length > 0) {
      return searchRes.data.items[0].item;
    }
  }

  // 2. Search by phone
  if (phone) {
    const searchRes = await apiCall(`/persons/search?term=${encodeURIComponent(phone)}`);
    if (searchRes.data && searchRes.data.items && searchRes.data.items.length > 0) {
      return searchRes.data.items[0].item;
    }
  }

  // 3. Create if not found
  const createRes = await apiCall("/persons", "POST", {
    name: fullName,
    email: email ? [{ value: email, primary: true }] : [],
    phone: phone ? [{ value: phone, primary: true }] : [],
  });

  return createRes.data;
}

/**
 * Create a new deal attached to a person.
 */
export async function createDeal(params: { title: string; person_id: number; customFields: Record<string, any> }) {
  const payload = {
    title: params.title,
    person_id: params.person_id,
    pipeline_id: PIPELINE_ID,
    // By default, it will be placed in the first stage of the pipeline ("Nouveau lead")
    ...params.customFields
  };

  const createRes = await apiCall("/deals", "POST", payload);
  return createRes.data;
}

/**
 * Create a note attached to a deal.
 */
export async function createNote(dealId: number, content: string) {
  const createRes = await apiCall("/notes", "POST", {
    deal_id: dealId,
    content: content
  });
  return createRes.data;
}

/**
 * Create an activity (Call, Meeting, etc) for a deal
 */
export async function createActivity(deal_id: number, person_id: number, type: 'call' | 'meeting' | 'task', subject: string) {
  const payload = {
    subject,
    type,
    deal_id,
    person_id,
    due_date: new Date().toISOString().split('T')[0], // Due today
  };

  const createRes = await apiCall("/activities", "POST", payload);
  return createRes.data;
}
