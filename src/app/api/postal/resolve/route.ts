/* ==================================================================
   POST /api/postal/resolve

   Résout un code postal canadien en :
   - Municipalité réelle
   - Province
   - Coordonnées GPS (lat/lon)
   - Zone climatique ASHRAE
   - Température de conception hivernale (°C)

   Sources (gratuites, aucune clé requise) :
   1. Nominatim (OpenStreetMap) — municipalité + coordonnées
   2. Table FSA interne (ASHRAE 2021) — zone climatique et design temp
   3. Fallback FSA → zone Québec
   ================================================================== */

import { NextResponse } from "next/server";
import { resolvePostalCode } from "@/lib/data/geography/postal-zones";
import { climateZoneFromDesignTemp, lookupFsa, resolveViaNominatim, type ClimateZoneCode } from "@/lib/data/geography/fsa-geo";

export interface PostalResolveResult {
  postalCode: string;
  municipality: string;
  province: string;
  lat: number | null;
  lon: number | null;
  climateZone: ClimateZoneCode;
  designTempC: number;
  designTempF: number;
  hdd18: number | null;
  source: "geocoder" | "fsa-table" | "fallback";
  confidence: "high" | "medium" | "low";
}

export type { ClimateZoneCode };

export async function POST(req: Request) {
  let postalCode: string;
  try {
    const body = await req.json();
    postalCode = String(body.postalCode ?? "").trim().toUpperCase();
  } catch {
    return NextResponse.json({ success: false, error: "Corps invalide." }, { status: 400 });
  }

  const cleaned = postalCode.replace(/\s/g, "");
  if (!/^[A-Z]\d[A-Z]\d[A-Z]\d$/.test(cleaned)) {
    return NextResponse.json({ success: false, error: "Code postal invalide. Format : H2X 1Y4." }, { status: 400 });
  }

  const formattedPostal = `${cleaned.slice(0, 3)} ${cleaned.slice(3)}`;
  const fsaLookup = lookupFsa(postalCode);
  // Une seule source de vérité pour la température de design : la table des zones (postal-zones.ts).
  const zone = resolvePostalCode(cleaned);
  const fsaData = fsaLookup ? { ...fsaLookup, designTempC: zone?.designTempC ?? fsaLookup.designTempC } : null;
  const geo = await resolveViaNominatim(formattedPostal);

  let result: PostalResolveResult;

  if (geo && fsaData) {
    result = {
      postalCode: formattedPostal,
      municipality: geo.municipality,
      province: geo.province,
      lat: geo.lat,
      lon: geo.lon,
      climateZone: climateZoneFromDesignTemp(fsaData.designTempC),
      designTempC: fsaData.designTempC,
      designTempF: Math.round(fsaData.designTempC * 9 / 5 + 32),
      hdd18: fsaData.hdd18,
      source: "geocoder",
      confidence: "high",
    };
  } else if (fsaData) {
    result = {
      postalCode: formattedPostal,
      municipality: fsaData.municipality,
      province: fsaData.province,
      lat: fsaData.lat,
      lon: fsaData.lon,
      climateZone: fsaData.climateZone,
      designTempC: fsaData.designTempC,
      designTempF: Math.round(fsaData.designTempC * 9 / 5 + 32),
      hdd18: fsaData.hdd18,
      source: "fsa-table",
      confidence: "medium",
    };
  } else if (geo) {
    const defaultDesignTemp = zone?.designTempC ?? (geo.province === "QC" ? -25 : -20);
    result = {
      postalCode: formattedPostal,
      municipality: geo.municipality,
      province: geo.province,
      lat: geo.lat,
      lon: geo.lon,
      climateZone: climateZoneFromDesignTemp(defaultDesignTemp),
      designTempC: defaultDesignTemp,
      designTempF: Math.round(defaultDesignTemp * 9 / 5 + 32),
      hdd18: null,
      source: "geocoder",
      confidence: "medium",
    };
  } else {
    const isQc = ["G","H","J"].includes(cleaned[0]);
    result = {
      postalCode: formattedPostal,
      municipality: isQc ? "Québec (Province)" : "Canada",
      province: isQc ? "QC" : "CA",
      lat: isQc ? 46.8 : 56.0,
      lon: isQc ? -71.2 : -96.0,
      climateZone: "6A",
      designTempC: -25,
      designTempF: -13,
      hdd18: null,
      source: "fallback",
      confidence: "low",
    };
  }

  console.log(`[PostalResolve] ${formattedPostal} → ${result.municipality} (${result.province}) ${result.designTempC}°C zone=${result.climateZone} src=${result.source}`);
  return NextResponse.json({ success: true, data: result });
}
