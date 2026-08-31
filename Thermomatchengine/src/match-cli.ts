import fs from "node:fs/promises";
import { runThermoMatch } from "./engine.ts";
import { loadThermoCatalog } from "./load-catalog.ts";
import { validateMatchInput } from "./validate-input.ts";
import type { MatchPolicy } from "./types.ts";

const catalogPath = process.argv[2] ?? "data/catalog-2026.json";
const requestPath = process.argv[3] ?? "examples/request-2026.json";
const policyPath = process.argv[4] ?? "config/match-policy-2026.json";
const catalog = await loadThermoCatalog(catalogPath);
const request = validateMatchInput(JSON.parse(await fs.readFile(requestPath, "utf8")));
const policy = JSON.parse(await fs.readFile(policyPath, "utf8")) as MatchPolicy;
console.log(JSON.stringify(runThermoMatch(request, catalog, policy), null, 2));
