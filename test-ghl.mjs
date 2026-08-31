// Script de test GHL — à exécuter avec: node test-ghl.mjs
// Teste la connexion API et crée un contact de test dans GHL

const API_KEY = "pit-deebd152-53c0-4530-b208-e8c86f57ba7d";
const LOCATION_ID = "c0NuyKwEa2xJ5p4KLvyw";
const BASE = "https://services.leadconnectorhq.com";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${API_KEY}`,
  Version: "2021-07-28",
};

async function testConnection() {
  console.log("=== Test connexion GHL API v2 ===\n");

  // 1. Créer un contact de test
  console.log("1. Création contact test...");
  const body = {
    firstName: "Test",
    lastName: "ThermoMatch",
    email: "test-thermomatch@thermopompesavendre.ca",
    phone: "+15149000000",
    postalCode: "G1R 1A1",
    city: "Québec",
    state: "QC",
    country: "CA",
    locationId: LOCATION_ID,
    source: "thermopompesavendre.ca",
    tags: ["test-api", "lead-site-web", "thermopompe", "zone-froide", "urgent-30j"],
    customField: [
      { key: "zone_climatique", field_value: "6A" },
      { key: "temp_conception", field_value: "-25°C" },
      { key: "type_thermopompe", field_value: "murale" },
      { key: "superficie", field_value: "1000-1500 pi²" },
      { key: "chauffage_actuel", field_value: "Électrique" },
      { key: "urgence", field_value: "30 jours" },
      { key: "modele_selectionne", field_value: "Mitsubishi Zuba 2.0 Cold Climate" },
      { key: "source_page", field_value: "test-script" },
      { key: "municipalite", field_value: "Québec (Haute-Ville)" },
      { key: "notes_projet", field_value: "Contact test créé par le script de validation de l'intégration ThermopompesÀVendre.ca" },
    ],
  };

  const res = await fetch(`${BASE}/contacts/`, {
    method: "POST",
    headers,
    body: JSON.stringify(body),
  });

  const data = await res.json().catch(() => ({}));

  if (res.ok) {
    const contactId = data?.contact?.id ?? data?.id;
    console.log(`   OK — Contact créé/mis à jour`);
    console.log(`   ID: ${contactId}`);
    console.log(`   Action: ${data?.contact ? "updated" : "created"}\n`);

    // 2. Ajouter une note
    if (contactId) {
      console.log("2. Ajout d'une note...");
      const noteRes = await fetch(`${BASE}/contacts/${contactId}/notes`, {
        method: "POST",
        headers,
        body: JSON.stringify({
          body: "Note de test — Projet: Thermopompe murale pour maison de 1200 pi², zone 6A, température de conception -25°C. Budget: 6000-8000$. Urgence: dans les 30 jours.",
          userId: "",
          contactId,
          locationId: LOCATION_ID,
        }),
      });
      console.log(`   ${noteRes.ok ? "OK" : "ERREUR"} — Note ajoutée (${noteRes.status})\n`);
    }

    console.log("=== Résultat ===");
    console.log("La connexion API GHL fonctionne.");
    console.log("Vérifie dans GHL → Contacts → chercher 'Test ThermoMatch'");
    console.log("Tu devrais voir le contact avec les tags et champs personnalisés.");
  } else {
    console.error(`   ERREUR ${res.status}:`, JSON.stringify(data, null, 2));
    console.log("\n=== Diagnostic ===");
    if (res.status === 401) console.log("Clé API invalide ou expirée.");
    if (res.status === 422) console.log("Les champs personnalisés n'existent pas encore dans GHL. Crée-les d'abord.");
    if (res.status === 403) console.log("La clé n'a pas les scopes requis (Contacts Read+Write).");
  }
}

testConnection().catch(console.error);
