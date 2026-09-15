/* ==================================================================
   Capacités de chauffage ENERGY STAR des appariements de référence

   La liste LogisVert d'Hydro-Québec donne la puissance à −8,3 °C (17 °F)
   et une « puissance nominale » ; ENERGY STAR donne la capacité à
   −15 °C (5 °F). Il manquait la capacité de chauffage cotée à 8,3 °C
   (47 °F), la seule base qui permette de dire « la machine garde X %
   de sa capacité par grand froid » (critère climat froid d'ENERGY STAR :
   capacité à 5 °F ÷ capacité cotée à 47 °F).

   Ce script lit, pour chaque numéro AHRI de référence des fiches
   publiées, les capacités publiées par ENERGY STAR (jeu « ENERGY STAR
   Certified Heat Pumps », data.energystar.gov) et les écrit, avec la
   source et la date, dans src/lib/data/energystar-capacites.json.
   Correspondance par numéro AHRI exact seulement : jamais par numéro
   de modèle voisin, jamais de valeur déduite.

   npx tsx --tsconfig ./tsconfig.json scripts/energystar-capacites.ts
   ================================================================== */

import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { registry } from "@/lib/data/registry";
import { getSeoModels } from "@/lib/seo/programmatic";

const DATASET = "https://data.energystar.gov/resource/83eb-xbyy.json";
const PAGE = "https://data.energystar.gov/Active-Specifications/ENERGY-STAR-Certified-Heat-Pumps/83eb-xbyy";
const FIELDS = ["ahri_reference_number", "heating_capacity_at_47_f_btu_h", "heating_capacity_at_17_f_btu_h", "heating_capacity_at_5_f_btu_h", "cooling_capacity_btu_h"];
const BATCH = 150;
const OUT = join(process.cwd(), "src/lib/data/energystar-capacites.json");

type Row = Partial<Record<(typeof FIELDS)[number], string>>;
export interface EnergyStarCapacites {
  /** Capacité de chauffage cotée à 47 °F (8,3 °C), BTU/h. */
  h47: number;
  /** Capacité de chauffage à 17 °F (−8,3 °C), BTU/h. */
  h17: number | null;
  /** Capacité de chauffage à 5 °F (−15 °C), BTU/h. */
  h5: number | null;
  /** Capacité de climatisation, BTU/h. */
  c: number | null;
}

const int = (v: string | undefined) => {
  const n = Math.trunc(Number(v));
  return Number.isFinite(n) && n > 0 ? n : null;
};

/** Numéros AHRI de référence : configuration de chaque fiche publiée et appariement retenu pour les pages. */
function referenceAhri(): string[] {
  const out = new Set<string>();
  for (const cert of registry.certifications) if (cert.type === "ahri" && cert.referenceNumber) out.add(String(cert.referenceNumber));
  for (const c of registry.configurations) {
    const a = /-cfg-(\d+)$/.exec(c.id)?.[1];
    if (a) out.add(a);
  }
  for (const s of getSeoModels()) if (s.ahri) out.add(s.ahri);
  return [...out].filter((a) => /^\d+$/.test(a)).sort();
}

async function fetchBatch(ahri: string[]): Promise<Row[]> {
  const where = `ahri_reference_number in(${ahri.map((a) => `'${a}'`).join(",")})`;
  const url = `${DATASET}?$select=${FIELDS.join(",")}&$where=${encodeURIComponent(where)}&$limit=${ahri.length * 4}`;
  for (let attempt = 1; attempt <= 3; attempt++) {
    const res = await fetch(url);
    if (res.ok) return (await res.json()) as Row[];
    if (attempt === 3) throw new Error(`ENERGY STAR : HTTP ${res.status} pour un lot de ${ahri.length} numéros.`);
    await new Promise((r) => setTimeout(r, 1500 * attempt));
  }
  return [];
}

async function main() {
  const all = referenceAhri();
  const entries: Record<string, EnergyStarCapacites> = {};
  let conflicts = 0;
  for (let i = 0; i < all.length; i += BATCH) {
    const rows = await fetchBatch(all.slice(i, i + BATCH));
    for (const r of rows) {
      const ahri = r.ahri_reference_number;
      const h47 = int(r.heating_capacity_at_47_f_btu_h);
      if (!ahri || !h47) continue;
      const e: EnergyStarCapacites = { h47, h17: int(r.heating_capacity_at_17_f_btu_h), h5: int(r.heating_capacity_at_5_f_btu_h), c: int(r.cooling_capacity_btu_h) };
      const prev = entries[ahri];
      // Deux lignes différentes pour le même numéro AHRI : aucune valeur retenue (on ne choisit pas).
      if (prev && JSON.stringify(prev) !== JSON.stringify(e)) {
        entries[ahri] = { h47: 0, h17: null, h5: null, c: null };
        conflicts++;
        continue;
      }
      entries[ahri] = e;
    }
    process.stdout.write(`\r${Math.min(i + BATCH, all.length)} / ${all.length} numéros AHRI`);
  }
  for (const [a, e] of Object.entries(entries)) if (!e.h47) delete entries[a];
  const sorted = Object.fromEntries(Object.entries(entries).sort(([a], [b]) => a.localeCompare(b)));
  const out = {
    source: "ENERGY STAR Certified Heat Pumps (data.energystar.gov, jeu 83eb-xbyy)",
    sourceUrl: PAGE,
    fetchedAt: new Date().toISOString(),
    requested: all.length,
    count: Object.keys(sorted).length,
    entries: sorted,
  };
  writeFileSync(OUT, `${JSON.stringify(out, null, 0)}\n`);
  console.log(`\n${out.count} appariements avec une capacité cotée à 47 °F (${conflicts} numéros écartés : lignes contradictoires) → ${OUT}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
