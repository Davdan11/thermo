import fs from "node:fs/promises";
import type { ThermoCatalog } from "./types";

let cachedPath = "";
let cachedCatalog: ThermoCatalog | undefined;

export async function loadThermoCatalog(catalogPath: string): Promise<ThermoCatalog> {
  if (cachedCatalog && cachedPath === catalogPath) return cachedCatalog;
  const parsed = JSON.parse(await fs.readFile(catalogPath, "utf8")) as ThermoCatalog;
  if (parsed.manifest?.schemaVersion !== "thermomatch-catalog-1" || !Array.isArray(parsed.products)) {
    throw new Error("Catalogue ThermoMatch invalide.");
  }
  cachedPath = catalogPath;
  cachedCatalog = parsed;
  return parsed;
}
