/* ==================================================================
   Fiches à documenter : numéros visibles au Québec sans température
   minimale de chauffage (« Chauffe jusqu'à ») ou sans nom commercial.

   Usage (depuis la racine du projet) :
     npx tsx --tsconfig ./tsconfig.json scripts/fiches/a-documenter.ts <dossier>
         écrit <dossier>/temperatures.json et <dossier>/noms.json : les numéros à
         chercher (jamais cherchés, ou cherchés sans succès il y a plus de 120 jours)
     npx tsx --tsconfig ./tsconfig.json scripts/fiches/a-documenter.ts --marquer <dossier>
         après une recherche et son intégration : note dans deja-cherches.json les
         numéros de ces listes qui restent sans valeur, pour ne pas les rechercher
         chaque semaine

   Règles de recherche et d'intégration : scripts/fiches/REGLES.md.
   ================================================================== */
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { registry } from "@/lib/data/registry";
import { commercialSeriesName, documentedCommercialName, isSeriesCode } from "@/lib/data/product-name";
import { minHeatingTempForModel } from "@/lib/thermomatch/min-temp";

const DEJA = "scripts/fiches/deja-cherches.json";
const RETRY_DAYS = 120;

type Deja = Record<string, { temperature?: string; nom?: string }>;
interface Item {
  brand: string;
  outdoorModel: string;
  series: string | null;
  coldClimate: boolean;
  page: string;
}

const normModel = (s: string) => s.split("+")[0].toUpperCase().replace(/[^A-Z0-9]/g, "");
const cle = (brand: string, model: string) => `${brand}|${normModel(model)}`;
const today = new Date().toISOString().slice(0, 10);
const recent = (date?: string) => Boolean(date) && (Date.now() - Date.parse(date!)) / 86_400_000 < RETRY_DAYS;
const lireDeja = (): Deja => (existsSync(DEJA) ? (JSON.parse(readFileSync(DEJA, "utf8")) as Deja) : {});
function ecrireDeja(d: Deja) {
  const trie = Object.fromEntries(Object.keys(d).sort().map((k) => [k, d[k]]));
  writeFileSync(DEJA, JSON.stringify(trie, null, 2) + "\n");
}

/** Fiches visibles (publiées, marque vendue au Québec) sans température, et sans nom commercial. */
function manques(): { temperatures: Item[]; noms: Item[] } {
  const seriesById = new Map(registry.series.map((s) => [s.id, s]));
  const temperatures: Item[] = [];
  const noms: Item[] = [];
  for (const m of registry.models) {
    const b = registry.brandById.get(m.brandId);
    if (m.status !== "published" || !b?.activeInQuebec) continue;
    const s = seriesById.get(m.seriesId);
    const serie = commercialSeriesName(s?.name, s?.slug);
    const item: Item = {
      brand: b.name,
      outdoorModel: m.modelNumber,
      series: s?.name ?? null,
      coldClimate: m.categories.includes("cold-climate"),
      page: `https://thermopompesavendre.ca/produit/${m.slug}`,
    };
    if (!minHeatingTempForModel(m.id)) temperatures.push(item);
    if ((!serie || isSeriesCode(serie)) && !documentedCommercialName(b.name, m.modelNumber)) noms.push(item);
  }
  const tri = (a: Item, c: Item) => Number(c.coldClimate) - Number(a.coldClimate) || a.brand.localeCompare(c.brand) || a.outdoorModel.localeCompare(c.outdoorModel);
  return { temperatures: temperatures.sort(tri), noms: noms.sort(tri) };
}

const parMarque = (l: Item[]) =>
  Object.entries(l.reduce<Record<string, number>>((acc, i) => ((acc[i.brand] = (acc[i.brand] ?? 0) + 1), acc), {}))
    .sort((a, b) => b[1] - a[1])
    .map(([b, n]) => `${b} ${n}`)
    .join(" · ");

const args = process.argv.slice(2);
if (args[0] === "--marquer") {
  const dir = args[1];
  if (!dir) throw new Error("Dossier des listes manquant : --marquer <dossier>");
  const lire = (f: string): Item[] => (existsSync(path.join(dir, f)) ? (JSON.parse(readFileSync(path.join(dir, f), "utf8")) as Item[]) : []);
  const encore = manques();
  const resteT = new Set(encore.temperatures.map((i) => cle(i.brand, i.outdoorModel)));
  const resteN = new Set(encore.noms.map((i) => cle(i.brand, i.outdoorModel)));
  const deja = lireDeja();
  let t = 0;
  let n = 0;
  for (const i of lire("temperatures.json")) {
    const k = cle(i.brand, i.outdoorModel);
    if (resteT.has(k)) ((deja[k] ??= {}).temperature = today), t++;
  }
  for (const i of lire("noms.json")) {
    const k = cle(i.brand, i.outdoorModel);
    if (resteN.has(k)) ((deja[k] ??= {}).nom = today), n++;
  }
  ecrireDeja(deja);
  console.log(`Marqués comme cherchés sans succès le ${today} : ${t} températures, ${n} noms (nouvel essai dans ${RETRY_DAYS} jours).`);
} else {
  const dir = args[0];
  if (!dir) throw new Error("Usage : a-documenter.ts <dossier> | --marquer <dossier>");
  const deja = lireDeja();
  const { temperatures, noms } = manques();
  const aChercherT = temperatures.filter((i) => !recent(deja[cle(i.brand, i.outdoorModel)]?.temperature));
  const aChercherN = noms.filter((i) => !recent(deja[cle(i.brand, i.outdoorModel)]?.nom));
  mkdirSync(dir, { recursive: true });
  writeFileSync(path.join(dir, "temperatures.json"), JSON.stringify(aChercherT, null, 2) + "\n");
  writeFileSync(path.join(dir, "noms.json"), JSON.stringify(aChercherN, null, 2) + "\n");
  console.log(`Fiches visibles sans température : ${temperatures.length} (à chercher maintenant : ${aChercherT.length})`);
  console.log(`Fiches visibles sans nom commercial : ${noms.length} (à chercher maintenant : ${aChercherN.length})`);
  if (aChercherT.length) console.log(`Températures par marque : ${parMarque(aChercherT)}`);
  if (aChercherN.length) console.log(`Noms par marque : ${parMarque(aChercherN)}`);
  if (!aChercherT.length && !aChercherN.length) console.log("Rien de nouveau à chercher.");
}
