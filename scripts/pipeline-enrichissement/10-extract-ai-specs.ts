import fs from "fs";
import path from "path";
import { GoogleGenAI } from "@google/genai";

const MAPPING_PATH = path.join(process.cwd(), "src/lib/data/fixtures/documents/brochures-mapping.json");
const AI_SPECS_PATH = path.join(process.cwd(), "src/lib/data/fixtures/documents/ai-specs.json");
const PUBLIC_DIR = path.join(process.cwd(), "public");

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY,
});

async function main() {
  if (!process.env.GEMINI_API_KEY && !process.env.GOOGLE_API_KEY) {
    console.error("❌ ERREUR: GEMINI_API_KEY n'est pas défini dans l'environnement !");
    process.exit(1);
  }

  console.log("🚀 Démarrage de l'extraction IA des brochures...");

  if (!fs.existsSync(MAPPING_PATH)) {
    console.error("❌ Fichier de mapping introuvable:", MAPPING_PATH);
    process.exit(1);
  }

  const mapping = JSON.parse(fs.readFileSync(MAPPING_PATH, "utf-8"));
  let existingSpecs: Record<string, any> = {};
  if (fs.existsSync(AI_SPECS_PATH)) {
    existingSpecs = JSON.parse(fs.readFileSync(AI_SPECS_PATH, "utf-8"));
  }

  let count = 0;
  let errors = 0;

  const entries = Object.entries(mapping);
  console.log(`📄 ${entries.length} brochures à analyser.`);

  for (const [modelId, relativeUrl] of entries) {
    if (existingSpecs[modelId]) {
      console.log(`⏭️ Ignoré (déjà analysé) : ${modelId}`);
      continue;
    }

    const localPath = path.join(PUBLIC_DIR, relativeUrl as string);
    if (!fs.existsSync(localPath)) {
      console.warn(`⚠️ Fichier introuvable localement : ${localPath}`);
      continue;
    }

    console.log(`🤖 Analyse de ${modelId} via Gemini 1.5 Pro...`);

    try {
      // 1. Upload the PDF to Gemini File API
      const uploadedFile = await ai.files.upload({
        file: localPath,
        mimeType: "application/pdf",
        displayName: `Brochure ${modelId}`
      });

      console.log(`   - Fichier uploadé avec succès. Extraction en cours...`);

      // 2. Query Gemini 1.5 Pro with structured output
      const prompt = `Tu es un expert en CVC (Chauffage, Ventilation, Climatisation). 
Analyse attentivement cette brochure ou fiche technique pour le modèle extérieur "${modelId}".
Extrait les spécifications techniques de l'unité EXTÉRIEURE uniquement.

- noiseMinDb: Le niveau de bruit minimum en décibels (dB(A)). (Nombre)
- noiseMaxDb: Le niveau de bruit maximum en décibels (dB(A)). (Nombre)
- widthMm: La largeur (width) de l'unité extérieure en millimètres. (Si en pouces, multiplie par 25.4) (Nombre)
- heightMm: La hauteur (height) de l'unité extérieure en millimètres. (Si en pouces, multiplie par 25.4) (Nombre)
- depthMm: La profondeur (depth) de l'unité extérieure en millimètres. (Si en pouces, multiplie par 25.4) (Nombre)
- weightKg: Le poids de l'unité extérieure en kilogrammes (kg). (Si en livres/lbs, divise par 2.2046) (Nombre)

Si une information est introuvable, mets null.`;

      const response = await ai.models.generateContent({
        model: "gemini-1.5-pro",
        contents: [
          uploadedFile,
          { text: prompt }
        ],
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: "OBJECT",
            properties: {
              noiseMinDb: { type: "NUMBER", nullable: true },
              noiseMaxDb: { type: "NUMBER", nullable: true },
              widthMm: { type: "NUMBER", nullable: true },
              heightMm: { type: "NUMBER", nullable: true },
              depthMm: { type: "NUMBER", nullable: true },
              weightKg: { type: "NUMBER", nullable: true }
            },
            required: ["noiseMinDb", "noiseMaxDb", "widthMm", "heightMm", "depthMm", "weightKg"]
          },
          temperature: 0.1
        }
      });

      const jsonText = response.text || "{}";
      const specs = JSON.parse(jsonText);

      existingSpecs[modelId] = specs;
      console.log(`   ✅ Specs extraites:`, specs);
      
      // Save progressively in case of crash
      fs.writeFileSync(AI_SPECS_PATH, JSON.stringify(existingSpecs, null, 2));
      count++;
      
      // Optional: Delete the file from Gemini storage to save space
      await ai.files.delete({ name: uploadedFile.name });

    } catch (err: any) {
      console.error(`❌ Erreur IA pour ${modelId}:`, err.message);
      errors++;
    }

    // Small delay to avoid hitting rate limits
    await new Promise(r => setTimeout(r, 2000));
  }

  console.log(`\n✅ Analyse terminée ! ${count} modèles enrichis par l'IA.`);
  if (errors > 0) console.log(`⚠️ ${errors} erreurs rencontrées.`);
}

main().catch(console.error);
