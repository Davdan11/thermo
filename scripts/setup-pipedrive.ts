
import dotenv from "dotenv";
import { join } from "path";

// Load environment variables from .env.local
dotenv.config({ path: join(process.cwd(), ".env.local") });

const API_TOKEN = process.env.PIPEDRIVE_API_TOKEN;
const API_BASE = "https://api.pipedrive.com/v1";

if (!API_TOKEN) {
  console.error("❌ ERREUR: PIPEDRIVE_API_TOKEN manquant dans le fichier .env.local");
  console.log("👉 Veuillez créer le fichier .env.local et ajouter: PIPEDRIVE_API_TOKEN=votre_jeton");
  process.exit(1);
}

async function apiCall(endpoint: string, method: string = "GET", body?: any) {
  const url = `${API_BASE}${endpoint}${endpoint.includes('?') ? '&' : '?'}api_token=${API_TOKEN}`;
  const response = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error(`❌ Erreur API Pipedrive (${method} ${endpoint}):`, response.status, errorText);
    throw new Error(`Pipedrive API Error: ${response.status}`);
  }

  return response.json();
}

async function setupCRM() {
  console.log("🚀 Démarrage de la configuration Pipedrive CRM...");

  try {
    // 1. Create Pipeline
    console.log("\n📦 Création du Pipeline...");
    const pipelineRes = await apiCall("/pipelines", "POST", {
      name: "Ventes Thermopompes",
      active: true,
    });
    const pipelineId = pipelineRes.data.id;
    console.log(`✅ Pipeline créé (ID: ${pipelineId})`);

    // 2. Create Stages
    const stages = [
      "Nouveau lead",
      "À contacter",
      "Contacté",
      "Qualifié",
      "RDV à booker",
      "RDV confirmé",
      "Visite effectuée",
      "Soumission envoyée",
      "Follow-up",
    ];

    console.log("\n📍 Création des étapes (Stages)...");
    for (let i = 0; i < stages.length; i++) {
      await apiCall("/stages", "POST", {
        name: stages[i],
        pipeline_id: pipelineId,
        order_nr: i + 1,
      });
      console.log(`  - Étape créée : ${stages[i]}`);
    }

    // 3. Create Deal Custom Fields
    const dealFields = [
      { name: "Source du lead", field_type: "enum", options: ["Meta Ads", "Google Ads", "SEO", "Direct"] },
      { name: "Campagne (UTM)", field_type: "varchar" },
      { name: "Ad Set (UTM)", field_type: "varchar" },
      { name: "Publicité (UTM)", field_type: "varchar" },
      { name: "GCLID", field_type: "varchar" },
      { name: "Région", field_type: "enum", options: ["Montréal", "Laval", "Rive-Nord", "Rive-Sud", "Estrie", "Montérégie", "Laurentides", "Lanaudière", "Autre"] },
      { name: "Type de projet", field_type: "enum", options: ["Murale", "Centrale", "Multizone"] },
      { name: "Superficie", field_type: "varchar" },
      { name: "ThermoMatch ID", field_type: "varchar" },
      { name: "Budget estimé", field_type: "varchar" },
      { name: "Partenaire assigné", field_type: "varchar" },
    ];

    console.log("\n📋 Création des champs personnalisés pour les opportunités (Deals)...");
    const createdFields: Record<string, string> = {};
    
    for (const field of dealFields) {
      const fieldRes = await apiCall("/dealFields", "POST", {
        name: field.name,
        field_type: field.field_type,
        options: field.options ? field.options.map(opt => ({ label: opt })) : undefined,
      });
      const fieldKey = fieldRes.data.key;
      createdFields[field.name] = fieldKey;
      console.log(`  - Champ créé : ${field.name} (Clé: ${fieldKey})`);
    }

    console.log("\n✨ Configuration terminée avec succès !");
    console.log("\n🔑 GARDER CES CLÉS PRÉCIEUSEMENT POUR LE CODE BACKEND :");
    console.log(JSON.stringify({ pipelineId, fields: createdFields }, null, 2));

  } catch (err) {
    console.error("\n❌ Échec de la configuration:", err);
  }
}

setupCRM();
