/* ==================================================================
   ThermoScan — Search API Route
   POST /api/thermoscan/search

   Searches the ThermoMatch catalog by model number and/or brand.
   Used for manual entry mode and for re-searching after correction.
   ================================================================== */

import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";
import { normalizeModelNumber, searchCatalog } from "@/lib/thermoscan/model-normalizer";
import type { SearchRequest, SearchResponse, Confidence } from "@/lib/thermoscan/types";

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as SearchRequest;

    if (!body.modelNumber && !body.brand) {
      return NextResponse.json<SearchResponse>(
        { success: false, matches: [], bestMatch: null, confidence: "not-detected", error: "Fournissez au moins un numéro de modèle ou une marque." },
        { status: 400 }
      );
    }

    const normalized = normalizeModelNumber(body.modelNumber ?? "");

    if (normalized.length < 3 && !body.brand) {
      return NextResponse.json<SearchResponse>(
        { success: false, matches: [], bestMatch: null, confidence: "not-detected", error: "Le numéro de modèle est trop court pour effectuer une recherche fiable." },
        { status: 400 }
      );
    }

    // Load catalog (Next.js caches module reads)
    const catalogPath = path.join(process.cwd(), "src", "lib", "thermomatch-engine", "data", "catalog-2026.json");
    const catalogRaw = await fs.readFile(catalogPath, "utf8");
    const catalog = JSON.parse(catalogRaw);
    const products = catalog.products ?? [];

    const matches = searchCatalog(products, normalized, body.brand, body.btu);
    const bestMatch = matches[0] ?? null;

    let confidence: Confidence = "not-detected";
    if (bestMatch) {
      if (bestMatch.matchScore >= 80) confidence = "confirmed";
      else if (bestMatch.matchScore >= 50) confidence = "probable";
      else confidence = "uncertain";
    }

    return NextResponse.json<SearchResponse>({ success: true, matches, bestMatch, confidence });

  } catch (err) {
    const message = err instanceof Error ? err.message : "Erreur interne";
    console.error("[ThermoScan/search]", err);
    return NextResponse.json<SearchResponse>(
      { success: false, matches: [], bestMatch: null, confidence: "not-detected", error: message },
      { status: 500 }
    );
  }
}

/* Also support GET for quick lookups from URL params */
export async function GET(req: Request) {
  const url = new URL(req.url);
  const model = url.searchParams.get("model") ?? "";
  const brand = url.searchParams.get("brand") ?? undefined;

  if (!model) {
    return NextResponse.json<SearchResponse>(
      { success: false, matches: [], bestMatch: null, confidence: "not-detected", error: "Parametre ?model= requis" },
      { status: 400 }
    );
  }

  const normalized = normalizeModelNumber(model);
  const catalogPath = path.join(process.cwd(), "src", "lib", "thermomatch-engine", "data", "catalog-2026.json");
  const catalogRaw = await fs.readFile(catalogPath, "utf8");
  const catalog = JSON.parse(catalogRaw);
  const products = catalog.products ?? [];
  const matches = searchCatalog(products, normalized, brand);
  const bestMatch = matches[0] ?? null;

  let confidence: Confidence = "not-detected";
  if (bestMatch) {
    if (bestMatch.matchScore >= 80) confidence = "confirmed";
    else if (bestMatch.matchScore >= 50) confidence = "probable";
    else confidence = "uncertain";
  }

  return NextResponse.json<SearchResponse>({ success: true, matches, bestMatch, confidence });
}
