import dotenv from "dotenv";
import { join } from "path";
import * as fs from "fs";

// Load environment variables
dotenv.config({ path: join(process.cwd(), ".env.local") });

const API_TOKEN = process.env.PIPEDRIVE_API_TOKEN;
const API_BASE = "https://api.pipedrive.com/v1";

if (!API_TOKEN) {
  console.error("❌ ERREUR: PIPEDRIVE_API_TOKEN manquant");
  process.exit(1);
}

// 1. Read Catalog to extract unique Brands and Series
function getBrandsAndSeries() {
  try {
    const rawData = fs.readFileSync(join(process.cwd(), "src/lib/data/generated_catalog.json"), "utf-8");
    const catalog = JSON.parse(rawData);
    
    const brands = new Set<string>();
    const series = new Set<string>();
    
    for (const item of catalog) {
      if (item.brand) brands.add(item.brand);
      if (item.series) series.add(item.series);
    }
    
    return {
      brands: Array.from(brands).sort(),
      series: Array.from(series).sort()
    };
  } catch (error) {
    console.warn("⚠️ Impossible de lire le catalogue complet, utilisation de valeurs par défaut.");
    return {
      brands: ["Daikin", "Moovair", "Gree", "Lennox", "Mitsubishi", "Fujitsu", "Autre"],
      series: ["Standard", "Premium", "Autre"]
    };
  }
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

async function setupUltimateCRM() {
  console.log("🚀 Démarrage de la configuration ULTIMATE Pipedrive CRM...");

  try {
    // A. Create Pipelines
    console.log("\n📦 Création des 3 Pipelines...");
    
    // Pipeline 1: VENTES
    const p1Res = await apiCall("/pipelines", "POST", { name: "1. VENTES (Acquisition)", active: true });
    const p1Id = p1Res.data.id;
    
    // Pipeline 2: OPERATIONS
    const p2Res = await apiCall("/pipelines", "POST", { name: "2. INSTALLATION & OPÉRATIONS", active: true });
    const p2Id = p2Res.data.id;
    
    // Pipeline 3: SERVICE
    const p3Res = await apiCall("/pipelines", "POST", { name: "3. SERVICE & MAINTENANCE", active: true });
    const p3Id = p3Res.data.id;

    console.log(`✅ Pipelines créés: Ventes(${p1Id}), Install(${p2Id}), Service(${p3Id})`);

    // B. Create Stages for VENTES
    const p1Stages = ["Nouveau lead", "Tentative de contact #1", "Tentative de contact #2", "Qualifié / En attente RDV", "RDV Confirmé", "Soumission Envoyée", "Négociation / Relance"];
    console.log("\n📍 Création des étapes - VENTES...");
    for (let i = 0; i < p1Stages.length; i++) {
      await apiCall("/stages", "POST", { name: p1Stages[i], pipeline_id: p1Id, order_nr: i + 1 });
    }

    // C. Create Stages for INSTALLATION
    const p2Stages = ["À planifier (Contrat Signé)", "Matériel Commandé", "Date d'installation fixée", "Installation en cours", "Travaux terminés", "Subvention LogisVert (En attente)", "Facture payée"];
    console.log("\n📍 Création des étapes - INSTALLATION...");
    for (let i = 0; i < p2Stages.length; i++) {
      await apiCall("/stages", "POST", { name: p2Stages[i], pipeline_id: p2Id, order_nr: i + 1 });
    }

    // D. Create Stages for SERVICE
    const p3Stages = ["Suivi Qualité (30 jours)", "Rappel Entretien (12 mois)"];
    console.log("\n📍 Création des étapes - SERVICE...");
    for (let i = 0; i < p3Stages.length; i++) {
      await apiCall("/stages", "POST", { name: p3Stages[i], pipeline_id: p3Id, order_nr: i + 1 });
    }

    // E. Get Brands & Series from DB
    const { brands, series } = getBrandsAndSeries();
    console.log(`\n📚 Catalogue lu: ${brands.length} marques et ${series.length} séries trouvées.`);

    // Check Pipedrive API limit: Max options for enum is usually high, but let's take up to 200 just in case.
    const safeSeries = series.slice(0, 150);

    // F. Create Deal Custom Fields
    const dealFields = [
      // Bloc Marketing
      { name: "UL_Source", field_type: "enum", options: ["Meta Ads", "Google Ads", "SEO", "Direct", "Référence"] },
      { name: "UL_Campagne_UTM", field_type: "varchar" },
      { name: "UL_GCLID", field_type: "varchar" },
      
      // Bloc Qualification / Maison
      { name: "UL_Type_Projet", field_type: "enum", options: ["Murale 1 tête", "Multizone 2+ têtes", "Centrale", "Échangeur d'air"] },
      { name: "UL_Panneau_Electrique", field_type: "enum", options: ["100A", "150A", "200A", "Inconnu"] },
      { name: "UL_Superficie", field_type: "varchar" },
      { name: "UL_Annee_Construction", field_type: "varchar" },
      { name: "UL_Region", field_type: "enum", options: ["Montréal", "Laval", "Rive-Nord", "Rive-Sud", "Estrie", "Montérégie", "Laurentides", "Lanaudière", "Autre"] },
      
      // Bloc Vente & Soumission
      { name: "UL_Marque_Proposee", field_type: "enum", options: brands },
      { name: "UL_Serie_Proposee", field_type: "enum", options: safeSeries.length > 0 ? safeSeries : ["Aucune"] },
      { name: "UL_BTU_Total", field_type: "varchar" },
      { name: "UL_Subvention_Estimee", field_type: "varchar" },
      { name: "UL_Raison_Perte", field_type: "enum", options: ["Trop cher", "Concurrent X", "Projet annulé", "Pas de financement"] },

      // Bloc Opérations
      { name: "UL_Installateur_Assigne", field_type: "enum", options: ["Équipe Interne", "Sous-traitant A", "Sous-traitant B", "À déterminer"] },
      { name: "UL_Date_Installation", field_type: "date" },
    ];

    console.log("\n📋 Création des 15 champs personnalisés (Ultimate)...");
    const createdFields: Record<string, string> = {};
    
    for (const field of dealFields) {
      // Pipedrive enum options cannot be empty array, need at least 1 option
      const payloadOptions = (field.options && field.options.length > 0) ? field.options.map(opt => ({ label: String(opt).substring(0, 100) })) : undefined;
      
      try {
        const fieldRes = await apiCall("/dealFields", "POST", {
          name: field.name,
          field_type: field.field_type,
          options: payloadOptions,
        });
        const fieldKey = fieldRes.data.key;
        createdFields[field.name] = fieldKey;
        console.log(`  - Champ créé : ${field.name}`);
      } catch (e: any) {
        console.error(`  - ❌ Échec pour ${field.name}: ${e.message}`);
      }
    }

    console.log("\n✨ Configuration ULTIMATE terminée avec succès !");
    console.log("\n🔑 NOUVELLES CLÉS (À Mettre à jour dans pipedrive.ts) :");
    console.log(JSON.stringify({
      pipelineId_Ventes: p1Id,
      pipelineId_Install: p2Id,
      pipelineId_Service: p3Id,
      fields: createdFields
    }, null, 2));

  } catch (err) {
    console.error("\n❌ Échec de la configuration:", err);
  }
}

setupUltimateCRM();
