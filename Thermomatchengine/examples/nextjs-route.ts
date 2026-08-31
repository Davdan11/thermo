import fs from "node:fs/promises";
import path from "node:path";
import type { MatchPolicy } from "../src/index.ts";
import { loadThermoCatalog, runThermoMatch, validateMatchInput } from "../src/index.ts";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const input = validateMatchInput(await request.json());
    const catalog = await loadThermoCatalog(path.join(process.cwd(), "data", "catalog-2026.json"));
    const policy = JSON.parse(
      await fs.readFile(path.join(process.cwd(), "config", "match-policy-2026.json"), "utf8"),
    ) as MatchPolicy;
    return Response.json(runThermoMatch(input, catalog, policy));
  } catch (error) {
    const message = error instanceof Error ? error.message : "Demande ThermoMatch invalide.";
    return Response.json({ error: message }, { status: 400 });
  }
}
