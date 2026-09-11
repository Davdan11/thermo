/* ==================================================================
   ThermoScan — Analyze API Route
   POST /api/thermoscan/analyze

   Receives a label photo (multipart/form-data), sends it to
   Gemini Vision for OCR + field extraction, then searches the
   ThermoMatch catalog for matching products.

   Security:
   - GEMINI_API_KEY never exposed to browser
   - File validated (type, size) before processing
   - Temporary data cleared after response
   - Photo ré-encodée sans métadonnées (EXIF/GPS) avant envoi à Gemini
   ================================================================== */

import { NextResponse } from "next/server";
import { rateLimit, tooManyRequests } from "@/lib/security/rate-limit";
import fs from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";
import sharp from "sharp";
import type { ScanResult, LabelScanData, CatalogMatch, Confidence } from "@/lib/thermoscan/types";
import {
  normalizeModelNumber,
  modelSimilarity,
  generateOcrVariants,
  searchCatalog,
  estimateManufactureYear,
} from "@/lib/thermoscan/model-normalizer";

/* ------------------------------------------------------------------
   Legacy catalog search (flat format from Excel conversion)
   ------------------------------------------------------------------ */

interface LegacyProduct {
  id: string;
  brand: string;
  series: string;
  outdoorModel: string;
  normalizedModel: string;
  systemType: string;
  coldClimate: boolean;
  refrigerant: string | null;
  firstMarketYear: number | null;
  lastMarketYear: number | null;
  seer2: number | null;
  hspf2: number | null;
  coolingBtuH: number | null;
  heating47FBtuH: number | null;
  heating5FBtuH: number | null;
  cop5F: number | null;
}

function searchLegacyCatalog(
  products: LegacyProduct[],
  normalizedModel: string,
  brand?: string,
  btu?: number
): CatalogMatch[] {
  const results: Array<{ match: CatalogMatch; score: number }> = [];
  const brandLower = brand?.toLowerCase().trim() ?? "";
  const variants = [normalizedModel, ...generateOcrVariants(normalizedModel).map(v => v.variant)];

  for (const p of products) {
    const outdoorNorm = p.normalizedModel || normalizeModelNumber(p.outdoorModel);
    let score = 0;
    const matchedOn: CatalogMatch["matchedOn"] = [];

    let bestModelScore = 0;
    for (const variant of variants) {
      const sim = modelSimilarity(variant, outdoorNorm);
      if (sim > bestModelScore) bestModelScore = sim;
    }

    if      (bestModelScore >= 0.9) { score += 60; matchedOn.push("modelNumber"); }
    else if (bestModelScore >= 0.75){ score += 35; matchedOn.push("modelNumber"); }
    else if (bestModelScore >= 0.5) { score += 15; }
    else continue;

    if (brandLower) {
      const pb = p.brand.toLowerCase();
      if      (pb === brandLower)                               { score += 25; matchedOn.push("brand"); }
      else if (pb.includes(brandLower)||brandLower.includes(pb)){ score += 15; matchedOn.push("brand"); }
      else                                                        { score -= 20; }
    }

    if (btu && p.heating5FBtuH) {
      const tol = p.heating5FBtuH * 0.3;
      if (Math.abs(p.heating5FBtuH - btu) <= tol) { score += 10; matchedOn.push("btu"); }
    }

    if (score > 0) {
      const catMatch: CatalogMatch = {
        source: "legacy-catalog",
        productId: p.id,
        brand: p.brand,
        outdoorModel: p.outdoorModel,
        systemType: p.systemType === "ductless" ? "ductless" : "central",
        coldClimate: p.coldClimate,
        nominalBtu: p.heating5FBtuH ?? p.coolingBtuH ?? undefined,
        hspf2: p.hspf2 ? { min: p.hspf2, max: p.hspf2 } : undefined,
        seer2: p.seer2 ? { min: p.seer2, max: p.seer2 } : undefined,
        heatingCapacity5F: p.heating5FBtuH ? { min: p.heating5FBtuH, max: p.heating5FBtuH } : undefined,
        refrigerant: p.refrigerant ?? undefined,
        matchScore: score,
        matchedOn,
      };
      results.push({ match: catMatch, score });
    }
  }

  return results
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(r => r.match);
}


/* ------------------------------------------------------------------
   Constants
   ------------------------------------------------------------------ */

const MAX_SIZE_BYTES = parseInt(process.env.THERMOSCAN_MAX_FILE_SIZE_MB ?? "8") * 1024 * 1024;
const ALLOWED_MIME = new Set(["image/jpeg", "image/png", "image/webp", "image/heic", "image/heif"]);
const GEMINI_API_KEY = process.env.GEMINI_API_KEY ?? "";
const GEMINI_MODEL = "gemini-2.5-flash";

/* ------------------------------------------------------------------
   Gemini Vision prompt
   ------------------------------------------------------------------ */

const LABEL_EXTRACTION_PROMPT = `You are reading a heat pump / air conditioner nameplate or technical label.

STEP 1 — Read everything:
Read ALL text visible on this label. Every line, every number, every field label, every value. 
Do not skip anything. The label may be in French, English, or both.

STEP 2 — Fill this JSON using what you read. Return ONLY valid JSON, no markdown, no prose:

{
  "brand": "<manufacturer name — look for company logo or name at bottom/top>",
  "modelNumber": "<model/modele number — look for MODELE, MODEL, M/N, Mod., Model No.>",
  "serialNumber": "<serial — look for SERIE, S/N, Serial No., No. Serie>",
  "unitType": "<indoor|outdoor|combined|unknown>",
  "nominalBtu": <integer BTU/h if shown, or null>,
  "coolingCapacityW": <integer Watts for cooling — PUISSANCE FROID, Cooling Capacity, Cap. Refr.>,
  "heatingCapacityW": <integer Watts for heating — PUISSANCE CHAUD, Heating Capacity, Cap. Chauf.>,
  "powerInputCoolingW": <integer Watts power input cooling — PUISSANCE ABSORBEE FROID, Power Input Cool.>,
  "powerInputHeatingW": <integer Watts power input heating — PUISSANCE ABSORBEE CHAUD, Power Input Heat.>,
  "currentAmpCooling": <number Amps cooling — COURANT FROID, Current Cool., RLA Cool.>,
  "currentAmpHeating": <number Amps heating — COURANT CHAUD, Current Heat.>,
  "currentAmpMax": <number max Amps — COURANT ABS. MAX, MCA, Max Fuse>,
  "voltage": "<voltage string — TENSION, Voltage, e.g. '220-240V~50Hz' or '208/230V 1Ph'>",
  "frequency": "<frequency — FREQUENCE, Hz, e.g. '60 Hz'>",
  "phases": "<phases — e.g. '1Ph' or '3Ph'>",
  "refrigerant": "<refrigerant type — FRIGORIGENE, REFRIGERANT, e.g. 'R410A' or 'R-410A' or 'R-32'>",
  "refrigerantChargeG": <integer grams — look for 'g' after refrigerant type, e.g. R410A/980g -> 980>,
  "dischargePressureMpa": <number MPa — PRESSION DECHARGE, Discharge Pressure>,
  "suctionPressureMpa": <number MPa — PRESSION ASPIRATION, Suction Pressure>,
  "weightKg": "<weights string — POIDS, Weight, e.g. '8.5/35 kg' or '35 kg'>",
  "madeIn": "<country of manufacture — MADE IN, Fabrique en>",
  "rawText": "<paste ALL text you read from the label, line by line>",
  "allFields": {<any other field:value pairs you see on the label that don't fit above>},
  "warnings": ["<only if image is blurry, cut off, or no label visible>"]
}

Critical rules:
- Copy model/serial numbers EXACTLY character-by-character as printed.
- For numbers: extract the numeric value only (e.g. '3224 W' -> 3224, 'R410A/980g' -> refrigerant='R410A', refrigerantChargeG=980).
- If a value is not visible, use null — NEVER guess.
- unitType: 'indoor'=wall/cassette unit, 'outdoor'=compressor outside, 'combined'=all-in-one.
- rawText: transcribe EVERY word and number you can read on the label.`;


/* ------------------------------------------------------------------
   Call Gemini Vision API
   ------------------------------------------------------------------ */

async function callGeminiVision(imageBase64: string, mimeType: string): Promise<{
  brand: string | null;
  modelNumber: string | null;
  serialNumber: string | null;
  unitType: string;
  nominalBtu: number | null;
  coolingCapacityW: number | null;
  heatingCapacityW: number | null;
  powerInputCoolingW: number | null;
  powerInputHeatingW: number | null;
  currentAmp: number | null;       // legacy field, mapped from currentAmpMax
  currentAmpCooling: number | null;
  currentAmpHeating: number | null;
  currentAmpMax: number | null;
  voltage: string | null;
  frequency: string | null;
  phases: string | null;
  refrigerant: string | null;
  refrigerantChargeG: number | null;
  dischargePressureMpa: number | null;
  suctionPressureMpa: number | null;
  weightKg: string | null;
  madeIn: string | null;
  rawText: string;
  allFields: Record<string, unknown> | null;
  warnings: string[];
}> {
  if (!GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY not configured");
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

  const body = {
    contents: [
      {
        parts: [
          {
            inline_data: {
              mime_type: mimeType,
              data: imageBase64,
            },
          },
          {
            text: LABEL_EXTRACTION_PROMPT,
          },
        ],
      },
    ],
    generationConfig: {
      temperature: 0,
      maxOutputTokens: 4096,
      // Sortie JSON garantie par l'API : plus de réponse en prose ou en bloc ``` à décoder.
      responseMimeType: "application/json",
    },
  };

  // Une reprise sur erreur passagère (503 surcharge, 429, délai) : c'est fréquent avec Gemini.
  let resp: Response | null = null;
  let lastErr = "";
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      resp = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        signal: AbortSignal.timeout(30_000),
      });
      if (resp.ok) break;
      lastErr = `Gemini API error ${resp.status}: ${(await resp.text().catch(() => resp!.statusText)).slice(0, 200)}`;
      if (![429, 500, 502, 503, 504].includes(resp.status)) throw new Error(lastErr);
    } catch (err) {
      lastErr = err instanceof Error ? err.message : String(err);
      resp = null;
    }
    if (attempt === 0) await new Promise((r) => setTimeout(r, 1500));
  }
  if (!resp || !resp.ok) throw new Error(lastErr || "Gemini API error");

  // Gemini 2.5-flash may include "thinking" parts before the actual response part.
  // Collect all text parts and join them.
  const data = await resp.json();
  const parts = data?.candidates?.[0]?.content?.parts ?? [];
  const text = parts
    .filter((p: any) => p.text && !p.thought)
    .map((p: any) => p.text)
    .join("") ?? "";

  // Log for debugging (truncated to avoid log spam)
  console.log(`[ThermoScan/Gemini] raw response (first 600 chars): ${text.slice(0, 600)}`);

  // Extract JSON — strip markdown fences first, then find outermost { ... }
  try {
    // Remove ```json ... ``` or ``` ... ``` wrappers (Gemini sometimes adds them)
    const stripped = text.replace(/^```(?:json)?\s*/im, "").replace(/\s*```\s*$/m, "").trim();
    const start = stripped.indexOf("{");
    const end   = stripped.lastIndexOf("}");
    if (start === -1 || end === -1 || end <= start) {
      console.error("[ThermoScan/Gemini] No JSON object found in response:", text.slice(0, 400));
      throw new Error("No JSON object found in Gemini response");
    }
    const jsonStr = stripped.slice(start, end + 1);
    return JSON.parse(jsonStr);
  } catch (parseErr) {
    console.error("[ThermoScan/Gemini] JSON parse error:", parseErr, "raw text:", text.slice(0, 400));
    throw new Error(`Gemini returned unparseable response: ${parseErr instanceof Error ? parseErr.message : String(parseErr)}`);
  }
}

/* ------------------------------------------------------------------
   Build confidence for a field
   ------------------------------------------------------------------ */

function fieldConfidence(value: string | number | null, hasMatch: boolean): "confirmed" | "probable" | "uncertain" | "not-detected" {
  if (value === null || value === undefined || value === "") return "not-detected";
  if (hasMatch) return "confirmed";
  if (typeof value === "string" && value.length > 3) return "probable";
  return "uncertain";
}

/* ------------------------------------------------------------------
   POST handler
   ------------------------------------------------------------------ */

export async function POST(req: Request) {
  const startMs = Date.now();
  // Chaque analyse coûte un appel Gemini : 10 lectures par 10 minutes et par adresse suffisent largement.
  if (!rateLimit(req, { name: "thermoscan", limit: 10, windowMs: 10 * 60 * 1000 })) return tooManyRequests();

  try {
    // ── Parse multipart form ────────────────────────────────────────
    let formData: FormData;
    try {
      formData = await req.formData();
    } catch {
      return NextResponse.json(
        { success: false, error: "Format de requête invalide. Envoyez les images en multipart/form-data." },
        { status: 400 }
      );
    }

    const imageFile = formData.get("image") as File | null;
    if (!imageFile || !(imageFile instanceof File)) {
      return NextResponse.json(
        { success: false, error: "Aucune image reçue. Vérifiez que le champ s'appelle \"image\"." },
        { status: 400 }
      );
    }

    // ── Validate file type ──────────────────────────────────────────
    const mimeType = imageFile.type || "application/octet-stream";
    if (!ALLOWED_MIME.has(mimeType)) {
      return NextResponse.json(
        { success: false, error: `Format d'image non accepté (${mimeType}). Utilisez JPEG, PNG ou WebP.` },
        { status: 415 }
      );
    }

    // ── Validate file size ──────────────────────────────────────────
    const imageBuffer = await imageFile.arrayBuffer();
    if (imageBuffer.byteLength > MAX_SIZE_BYTES) {
      const sizeMB = (imageBuffer.byteLength / (1024 * 1024)).toFixed(1);
      return NextResponse.json(
        { success: false, error: `La photo est trop volumineuse (${sizeMB} MB). Limite : ${MAX_SIZE_BYTES / (1024 * 1024)} MB.` },
        { status: 413 }
      );
    }

    // ── Verify it's actually an image (magic bytes) ─────────────────
    const headerBytes = new Uint8Array(imageBuffer.slice(0, 12));
    const isJpeg = headerBytes[0] === 0xFF && headerBytes[1] === 0xD8;
    const isPng = headerBytes[0] === 0x89 && headerBytes[1] === 0x50;
    const isWebP = headerBytes[8] === 0x57 && headerBytes[9] === 0x45; // WEBP
    if (!isJpeg && !isPng && !isWebP && mimeType !== "image/heic" && mimeType !== "image/heif") {
      return NextResponse.json(
        { success: false, error: "Le fichier ne semble pas être une image valide." },
        { status: 400 }
      );
    }

    // ── Ré-encodage en JPEG sans métadonnées (EXIF, GPS) avant tout envoi externe ──
    // sharp ne conserve pas les métadonnées sauf demande explicite : la photo transmise
    // à Gemini ne contient que les pixels, jamais la position ni l'appareil du client.
    let cleanBuffer: Buffer;
    let cleanMime = "image/jpeg";
    try {
      cleanBuffer = await sharp(Buffer.from(imageBuffer)).rotate().resize({ width: 2000, height: 2000, fit: "inside", withoutEnlargement: true }).jpeg({ quality: 90 }).toBuffer();
    } catch {
      return NextResponse.json({ success: false, error: "Impossible de lire cette photo. Essayez un JPEG ou un PNG." }, { status: 400 });
    }
    const imageBase64 = cleanBuffer.toString("base64");

    // ── Call Gemini Vision ──────────────────────────────────────────
    let geminiResult: Awaited<ReturnType<typeof callGeminiVision>>;
    const geminiErrors: string[] = [];

    try {
      geminiResult = await callGeminiVision(imageBase64, cleanMime);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Erreur inconnue";
      // Graceful degradation: return empty scan with error
      geminiResult = {
        brand: null, modelNumber: null, serialNumber: null,
        unitType: "unknown", nominalBtu: null,
        coolingCapacityW: null, heatingCapacityW: null,
        powerInputCoolingW: null, powerInputHeatingW: null,
        currentAmp: null, currentAmpCooling: null, currentAmpHeating: null, currentAmpMax: null,
        voltage: null, frequency: null, phases: null,
        refrigerant: null, refrigerantChargeG: null,
        dischargePressureMpa: null, suctionPressureMpa: null,
        weightKg: null, madeIn: null,
        rawText: "", allFields: null, warnings: [],
      };

      geminiErrors.push(`Service d'analyse temporairement indisponible : ${msg}`);
    }

    // ── Normalize model number ─────────────────────────────────────
    const rawModel = geminiResult.modelNumber ?? "";
    const normalized = normalizeModelNumber(rawModel);

    // ── Derive BTU from Watts if label shows Watts (French labels: PUISSANCE FROID/CHAUD)
    // 1 W = 3.41214 BTU/h. Use heating capacity as the reference (what matters in Quebec).
    const W_TO_BTU = 3.41214;
    const coolingBtu = geminiResult.nominalBtu
      ?? (geminiResult.coolingCapacityW ? Math.round(geminiResult.coolingCapacityW * W_TO_BTU) : null);
    const heatingBtu = geminiResult.heatingCapacityW
      ? Math.round(geminiResult.heatingCapacityW * W_TO_BTU)
      : coolingBtu; // fallback
    // Use heating BTU for catalog lookup (closest to nominal)
    const nominalBtuForSearch = heatingBtu ?? geminiResult.nominalBtu;

    // ── Search catalog ─────────────────────────────────────────────
    let catalogMatches: CatalogMatch[] = [];
    let bestMatch: CatalogMatch | null = null;

    if (normalized.length >= 3) {
      // 1. Search catalog-2026.json (current recommended models)
      const catalog2026Path = path.join(process.cwd(), "src", "lib", "thermomatch-engine", "data", "catalog-2026.json");
      const catalog2026Raw  = await fs.readFile(catalog2026Path, "utf8");
      const catalog2026     = JSON.parse(catalog2026Raw);
      const products2026    = catalog2026.products ?? [];

      const matches2026 = searchCatalog(
        products2026, normalized,
        geminiResult.brand ?? undefined,
        nominalBtuForSearch ?? undefined
      );

      // 2. Search legacy catalog (ENERGY STAR 2011-2026 from Excel)
      const legacyPath = path.join(process.cwd(), "src", "lib", "thermoscan", "data", "legacy-catalog.json");
      let matchesLegacy: CatalogMatch[] = [];
      try {
        const legacyRaw  = await fs.readFile(legacyPath, "utf8");
        const legacy     = JSON.parse(legacyRaw);
        matchesLegacy = searchLegacyCatalog(
          legacy.products ?? [], normalized,
          geminiResult.brand ?? undefined,
          nominalBtuForSearch ?? undefined
        );
      } catch {
        // Legacy catalog not available — continue with 2026 only
      }

      // 3. Merge: prefer 2026 matches, fill with legacy
      const seen = new Set<string>();
      for (const m of matches2026) { seen.add(m.outdoorModel.toUpperCase()); }
      const newLegacy = matchesLegacy.filter(m => !seen.has(m.outdoorModel.toUpperCase()));
      catalogMatches = [...matches2026, ...newLegacy].slice(0, 5);
      bestMatch = catalogMatches[0] ?? null;
    }
    // ── Look up warranty data for detected brand ──────────────────
    let brandWarranties: any[] = [];
    if (geminiResult.brand) {
      try {
        const warrantiesPath = path.join(process.cwd(), "src", "lib", "thermoscan", "data", "warranties.json");
        const warrantiesRaw  = await fs.readFile(warrantiesPath, "utf8");
        const warrantiesData = JSON.parse(warrantiesRaw);
        const byBrand        = warrantiesData.byBrand as Record<string, any[]>;
        const brandLookup    = geminiResult.brand.toLowerCase().trim();

        // Fuzzy brand matching: normalize then look for substring or alias
        const BRAND_ALIASES: Record<string, string> = {
          "mitsubishi":     "Mitsubishi Electric",
          "mitsubishi electric": "Mitsubishi Electric",
          "lg":             "LG",
          "gree":           "GREE",
          "tosot":          "TOSOT",
          "moovair":        "Moovair",
          "midea":          "Midea",
          "trane":          "Trane",
          "carrier":        "Carrier",
          "senville":       "Senville",
          "daikin":         "Daikin / Goodman / Amana",
          "goodman":        "Daikin / Goodman / Amana",
          "amana":          "Daikin / Goodman / Amana",
          "bosch":          "Bosch",
          "zephyr":         "Zephyr",
          "direct air":     "Direct Air",
        };

        // Try alias map first
        const aliasKey = BRAND_ALIASES[brandLookup];
        if (aliasKey && byBrand[aliasKey]) {
          brandWarranties = byBrand[aliasKey];
        } else {
          // Try substring match against all keys
          for (const [key, entries] of Object.entries(byBrand)) {
            const kl = key.toLowerCase();
            if (kl.includes(brandLookup) || brandLookup.includes(kl)) {
              brandWarranties = entries;
              break;
            }
          }
        }
      } catch {
        // Warranty data not available — non-fatal
      }
    }

    const yearEstimate = estimateManufactureYear(
      geminiResult.serialNumber ?? "",
      geminiResult.brand ?? ""
    );

    // ── Compute overall confidence ─────────────────────────────────
    let confidence: Confidence = "not-detected";
    if (bestMatch) {
      if (bestMatch.matchScore >= 80) confidence = "confirmed";
      else if (bestMatch.matchScore >= 50) confidence = "probable";
      else confidence = "uncertain";
    } else if (normalized.length >= 3) {
      confidence = "uncertain";
    }

    // ── Build user-friendly status message ─────────────────────────
    let statusMessage = "";
    if (geminiErrors.length > 0) {
      statusMessage = "Le service d'analyse est temporairement indisponible. Vous pouvez entrer les informations manuellement.";
    } else if (confidence === "confirmed") {
      statusMessage = `Appareil identifie dans le catalogue — ${bestMatch!.brand} ${bestMatch!.outdoorModel}`;
    } else if (confidence === "probable") {
      statusMessage = "Modele probablement identifie — veuillez verifier le numero";
    } else if (normalized.length >= 3) {
      // Model number read from label but not in ENERGY STAR catalog
      // This is NORMAL for many brands (CELCIA, Asian brands, older units)
      // We still have the specs from the label itself
      const hasLabelSpecs = !!(geminiResult.coolingCapacityW || geminiResult.heatingCapacityW || geminiResult.refrigerant);
      statusMessage = hasLabelSpecs
        ? `${rawModel} — Specs lues directement sur l'etiquette. Verifiez et continuez.`
        : `${rawModel} lu sur l'etiquette. Verifiez le numero et continuez.`;
    } else {
      statusMessage = "Numero de modele non visible sur la photo — verifiez la mise au point ou entrez le modele manuellement";
    }

    // ── Build warnings ─────────────────────────────────────────────
    const warnings: string[] = [...(geminiResult.warnings ?? [])];
    if (!geminiResult.modelNumber) {
      warnings.push("Le numero de modele n'est pas clairement visible sur la photo. Approchez-vous ou entrez le modele manuellement.");
    }
    // Only warn about catalog if we have NO specs from the label either
    if (catalogMatches.length === 0 && normalized.length >= 3) {
      const hasLabelSpecs = !!(geminiResult.coolingCapacityW || geminiResult.heatingCapacityW);
      if (!hasLabelSpecs) {
        warnings.push(`Modele ${rawModel} non repertorie dans notre catalogue. La comparaison d'efficacite (SEER2/HSPF2) sera limitee.`);
      }
    }

    // ── Assemble fields ────────────────────────────────────────────
    const hasConfirmedMatch = !!bestMatch && bestMatch.matchScore >= 80;
    const unitType = (["indoor", "outdoor", "combined"].includes(geminiResult.unitType ?? ""))
      ? geminiResult.unitType as "indoor" | "outdoor" | "combined"
      : "unknown";

    const fields: LabelScanData = {
      brand: {
        value: geminiResult.brand,
        confidence: fieldConfidence(geminiResult.brand, hasConfirmedMatch),
        source: "label",
        raw: geminiResult.brand ?? undefined,
      },
      modelNumber: {
        value: rawModel || null,
        confidence: fieldConfidence(rawModel, hasConfirmedMatch),
        source: "label",
        raw: rawModel || undefined,
        note: hasConfirmedMatch ? undefined : normalized.length >= 3 ? "Vérifiez que le numéro est complet" : undefined,
      },
      serialNumber: {
        value: geminiResult.serialNumber,
        confidence: fieldConfidence(geminiResult.serialNumber, false),
        source: "label",
        raw: geminiResult.serialNumber ?? undefined,
      },
      unitType: {
        value: unitType,
        confidence: unitType !== "unknown" ? "probable" : "not-detected",
        source: "label",
      },
      nominalBtu: {
        value: geminiResult.nominalBtu,
        confidence: geminiResult.nominalBtu ? "probable" : "not-detected",
        source: "label",
        raw: geminiResult.nominalBtu?.toString(),
      },
      voltage: {
        value: geminiResult.voltage,
        confidence: geminiResult.voltage ? "probable" : "not-detected",
        source: "label",
      },
      refrigerant: {
        value: geminiResult.refrigerant,
        confidence: geminiResult.refrigerant ? "probable" : "not-detected",
        source: "label",
        note: geminiResult.refrigerant === "R-22"
          ? "R-22 interdit au Canada depuis 2020 — très coûteux à recharger"
          : undefined,
      },
      manufactureYear: {
        value: yearEstimate.year,
        confidence: yearEstimate.confidence === "estimated" ? "probable" : "not-detected",
        source: yearEstimate.confidence === "estimated" ? "estimated" : "not-detected" as "estimated",
        note: yearEstimate.note,
      },
      unclassifiedLines: [],
    };

    // ── Assemble session result ────────────────────────────────────
    const sessionId = crypto.randomUUID();

    // rawLabelSpecs: everything Gemini read directly from the label
    // This is the source of truth for brands not in ENERGY STAR catalog (CELCIA, etc.)
    const rawLabelSpecs = {
      coolingCapacityW:    geminiResult.coolingCapacityW ?? null,
      heatingCapacityW:    geminiResult.heatingCapacityW ?? null,
      coolingBtuH:         coolingBtu ?? null,
      heatingBtuH:         heatingBtu ?? null,
      powerInputCoolingW:  geminiResult.powerInputCoolingW ?? null,
      powerInputHeatingW:  geminiResult.powerInputHeatingW ?? null,
      currentAmpCooling:   geminiResult.currentAmpCooling ?? null,
      currentAmpHeating:   geminiResult.currentAmpHeating ?? null,
      currentAmpMax:       geminiResult.currentAmpMax ?? geminiResult.currentAmp ?? null,
      voltage:             geminiResult.voltage ?? null,
      frequency:           geminiResult.frequency ?? null,
      phases:              geminiResult.phases ?? null,
      refrigerant:         geminiResult.refrigerant ?? null,
      refrigerantChargeG:  geminiResult.refrigerantChargeG ?? null,
      currentAmp:          geminiResult.currentAmpMax ?? geminiResult.currentAmp ?? null,
      dischargePressureMpa: geminiResult.dischargePressureMpa ?? null,
      suctionPressureMpa:  geminiResult.suctionPressureMpa ?? null,
      weightKg:            geminiResult.weightKg ?? null,
      madeIn:              geminiResult.madeIn ?? null,
      allFields:           geminiResult.allFields ?? null,
    };


    const result: ScanResult = {
      sessionId,
      analyzedAt: new Date().toISOString(),
      ocrRaw: geminiResult.rawText ?? "",
      fields,
      normalizedModelNumber: normalized || null,
      catalogMatches,
      bestMatch,
      confidence,
      statusMessage,
      processingMs: Date.now() - startMs,
      warnings,
      errors: geminiErrors,
      rawLabelSpecs,
      brandWarranties: brandWarranties.length > 0 ? brandWarranties : undefined,
    };


    // Log for admin monitoring (no sensitive data — no serial numbers, no images)
    const hasLabelW = !!(geminiResult.coolingCapacityW || geminiResult.heatingCapacityW);
    console.log(`[ThermoScan] session=${sessionId} brand=${geminiResult.brand ?? "?"} model=${rawModel || "?"} confidence=${confidence} matchScore=${bestMatch?.matchScore ?? 0} labelWatts=${hasLabelW} ms=${result.processingMs}`);

    return NextResponse.json({ success: true, result });


  } catch (err) {
    const message = err instanceof Error ? err.message : "Erreur interne";
    console.error("[ThermoScan] Unhandled error:", err);
    return NextResponse.json(
      { success: false, error: `Une erreur inattendue s'est produite. Réessayez ou entrez le modèle manuellement. (${message})` },
      { status: 500 }
    );
  }
}
