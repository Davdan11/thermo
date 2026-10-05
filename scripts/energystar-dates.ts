/* ==================================================================
   Dates ENERGY STAR des appariements de référence (format « Nouveautés »
   du robot Facebook).

   Pour chaque numéro AHRI de référence des fiches publiées, lit dans le
   jeu « ENERGY STAR Certified Heat Pumps » (data.energystar.gov) :
   - date_available_on_market : mise en marché déclarée par le fabricant ;
   - date_certified : date de certification ENERGY STAR de l'appariement.
   Écrit src/lib/data/energystar-dates.json avec la source et la date de
   lecture. Correspondance par numéro AHRI exact seulement ; deux lignes
   contradictoires pour le même numéro : aucune date retenue.

   npx tsx --tsconfig ./tsconfig.json scripts/energystar-dates.ts
   ================================================================== */

import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { registry } from "@/lib/data/registry";
import { getSeoModels } from "@/lib/seo/programmatic";

const DATASET = "https://data.energystar.gov/resource/83eb-xbyy.json";
const PAGE = "https://data.energystar.gov/Active-Specifications/ENERGY-STAR-Certified-Heat-Pumps/83eb-xbyy";
const FIELDS = ["ahri_reference_number", "date_available_on_market", "date_certified"] as const;
const BATCH = 150;
const OUT = join(process.cwd(), "src/lib/data/energystar-dates.json");

type Row = Partial<Record<(typeof FIELDS)[number], string>>;
/** Dates AAAA-MM-JJ ; null si ENERGY STAR ne la publie pas. */
interface Dates {
  marche: string | null;
  certifie: string | null;
}

const day = (v: string | undefined) => (v && /^\d{4}-\d{2}-\d{2}/.test(v) ? v.slice(0, 10) : null);

function referenceAhri(): string[] {
  const out = new Set<string>();
  for (const s of getSeoModels()) if (s.ahri) out.add(s.ahri);
  for (const c of registry.configurations) {
    const a = /-cfg-(\d+)$/.exec(c.id)?.[1];
    if (a) out.add(a);
  }
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
  const entries: Record<string, Dates | null> = {};
  for (let i = 0; i < all.length; i += BATCH) {
    for (const r of await fetchBatch(all.slice(i, i + BATCH))) {
      const ahri = r.ahri_reference_number;
      if (!ahri) continue;
      const d: Dates = { marche: day(r.date_available_on_market), certifie: day(r.date_certified) };
      if (!d.marche && !d.certifie) continue;
      const prev = entries[ahri];
      if (prev === null) continue;
      if (prev && JSON.stringify(prev) !== JSON.stringify(d)) {
        entries[ahri] = null;
        continue;
      }
      entries[ahri] = d;
    }
    process.stdout.write(`\r${Math.min(i + BATCH, all.length)} / ${all.length} numéros AHRI`);
  }
  const kept = Object.entries(entries).filter((e): e is [string, Dates] => e[1] !== null).sort(([a], [b]) => a.localeCompare(b));
  const out = {
    source: "ENERGY STAR Certified Heat Pumps (data.energystar.gov, jeu 83eb-xbyy) : date_available_on_market, date_certified",
    sourceUrl: PAGE,
    fetchedAt: new Date().toISOString(),
    requested: all.length,
    count: kept.length,
    entries: Object.fromEntries(kept),
  };
  writeFileSync(OUT, `${JSON.stringify(out, null, 0)}\n`);
  console.log(`\n${out.count} appariements datés → ${OUT}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
