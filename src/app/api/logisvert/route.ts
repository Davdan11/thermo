import { NextRequest, NextResponse } from "next/server";
import {
  lookupLogisVert,
  lookupByAHRI,
  searchLogisVert,
  getLogisVertByBrand,
} from "@/lib/subsidies/logisvert-official";

/**
 * API Route: /api/logisvert
 * 
 * Query parameters:
 *   ?ahri=212494259          → lookup by AHRI number
 *   ?model=RXM12WVJU         → lookup by outdoor model
 *   ?search=daikin atmosphera → search by brand/model/series
 *   ?brand=Daikin             → get all entries for a brand
 */
export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;

  const ahri = searchParams.get("ahri");
  const model = searchParams.get("model");
  const search = searchParams.get("search") || searchParams.get("q");
  const brand = searchParams.get("brand");
  const limit = parseInt(searchParams.get("limit") || "20");

  try {
    if (ahri) {
      const entry = lookupByAHRI(ahri);
      if (!entry) return NextResponse.json({ error: "AHRI not found" }, { status: 404 });
      return NextResponse.json(entry);
    }

    if (model) {
      const entry = lookupLogisVert(model);
      if (!entry) return NextResponse.json({ error: "Model not found" }, { status: 404 });
      return NextResponse.json(entry);
    }

    if (search) {
      const results = searchLogisVert(search, limit);
      return NextResponse.json({ results, count: results.length });
    }

    if (brand) {
      const results = getLogisVertByBrand(brand).slice(0, limit);
      return NextResponse.json({ results, count: results.length });
    }

    return NextResponse.json({ 
      error: "Provide ?ahri=, ?model=, ?search=, or ?brand= parameter",
      example: "/api/logisvert?search=daikin atmosphera"
    }, { status: 400 });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
