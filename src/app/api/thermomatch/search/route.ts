import { NextResponse } from "next/server";
import { registry } from "@/lib/data/registry";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.toLowerCase() || "";

  if (!query || query.length < 2) {
    // Return a few defaults if query is empty
    const defaults = registry.configurations.slice(0, 5).map(c => {
      const model = registry.modelById.get(c.modelId);
      const brand = model ? registry.brandById.get(model.brandId) : null;
      return {
        id: c.id,
        label: `${brand?.name ?? ""} ${model?.name ?? ""} (${c.slug})`
      };
    });
    return NextResponse.json(defaults);
  }

  const results = [];
  for (const c of registry.configurations) {
    const model = registry.modelById.get(c.modelId);
    const brand = model ? registry.brandById.get(model.brandId) : null;
    const searchable = `${brand?.name ?? ""} ${model?.name ?? ""} ${c.slug}`.toLowerCase();
    
    if (searchable.includes(query)) {
      results.push({
        id: c.id,
        label: `${brand?.name ?? ""} ${model?.name ?? ""} (${c.slug})`
      });
      if (results.length >= 10) break;
    }
  }

  return NextResponse.json(results);
}
