/* ==================================================================
   Contexte factuel pour le robot de blogue : les seuls chiffres qu'un
   article généré a le droit d'utiliser. Sortie JSON sur stdout.
   Usage : npx tsx scripts/blog-context.ts [slugs de marques séparés par des virgules]
   ================================================================== */
import { getCanonicalModels, getAllBrandStats, getCapacityClasses, getRanking } from "../src/lib/seo/programmatic";
import { getCities } from "../src/lib/seo/cities";
import { getCityData } from "../src/lib/seo/cities-data";
import { PRICE_GRID } from "../src/lib/prices/grille-installee";
import { getAllGuides } from "../src/lib/markdown";
import logisVertMetadata from "../src/lib/subsidies/logisvert-metadata.json";

const med = (a: number[]) => { const s = a.slice().sort((x, y) => x - y); return s.length ? s[Math.floor(s.length / 2)] : null; };
const brandsWanted = (process.argv[2] ?? "").split(",").map((s) => s.trim()).filter(Boolean);

const all = getCanonicalModels();
const cert = all.filter((m) => m.h5Btu !== null);
const cops = cert.map((m) => m.cop5).filter((v): v is number => v !== null);
const hs = all.map((m) => m.hspf2).filter((v): v is number => v !== null);

const ctx = {
  dateListeLogisVert: (logisVertMetadata as { updatedAt?: string }).updatedAt?.slice(0, 10) ?? null,
  catalogue: {
    machinesDistinctes: all.length,
    certifieesMoins15: cert.length,
    climatFroid: all.filter((m) => m.coldClimate).length,
    gardent100PourCentAMoins15: cert.filter((m) => (m.h5Btu ?? 0) >= m.nominalBtu).length,
    gardent90PourCentAMoins15: cert.filter((m) => (m.h5Btu ?? 0) >= 0.9 * m.nominalBtu).length,
    copMoins15: { min: Math.min(...cops), mediane: med(cops), max: Math.max(...cops) },
    hspf2: { min: Math.min(...hs), mediane: med(hs), max: Math.max(...hs), muralesAuDessusDe12: all.filter((m) => m.kind === "murale" && (m.hspf2 ?? 0) >= 12).length },
  },
  logisVertParCalibre: getCapacityClasses().map((c) => {
    const sub = c.models.filter((m) => m.logisVertDollars > 0).map((m) => m.logisVertDollars);
    return { calibre: c.label, machines: c.models.length, subventionnees: sub.length, min: sub.length ? Math.min(...sub) : null, mediane: med(sub), max: sub.length ? Math.max(...sub) : null };
  }),
  classements: {
    grandFroid: getRanking("grand-froid", 5)!.models.map((m) => ({ marque: m.brand, modele: m.name, unite: m.outdoorModel, cop15: m.cop5, capacite15: m.h5Btu, nominal: m.nominalBtu, logisVert: m.logisVertDollars })),
    hspf2: getRanking("efficacite-hspf2", 5)!.models.map((m) => ({ marque: m.brand, modele: m.name, unite: m.outdoorModel, hspf2: m.hspf2, seer2: m.seer2 })),
    centrales: getRanking("centrales", 5)!.models.map((m) => ({ marque: m.brand, modele: m.name, unite: m.outdoorModel, hspf2: m.hspf2, capacite15: m.h5Btu, logisVert: m.logisVertDollars })),
  },
  marques: getAllBrandStats()
    .filter((b) => brandsWanted.length === 0 ? ["mitsubishi-electric", "daikin", "fujitsu", "lg", "samsung", "panasonic", "bosch", "gree", "tosot", "moovair", "carrier", "lennox"].includes(b.slug) : brandsWanted.includes(b.slug))
    .map((b) => ({
      slug: b.slug, nom: b.name, gamme: b.tier, fiches: b.models.length, machinesDistinctes: b.canonicalModels.length, climatFroid: b.coldClimateCount, murales: b.wallCount, centrales: b.centralCount,
      copMoins15Max: b.bestCold ? { valeur: b.bestCold.cop5, modele: `${b.bestCold.name} ${b.bestCold.outdoorModel}` } : null,
      hspf2Max: b.bestEfficiency ? { valeur: b.bestEfficiency.hspf2, modele: b.bestEfficiency.name } : null,
      logisVert: { min: b.minLogisVert, max: b.maxLogisVert },
      vendueAussiSous: b.sharedWith.map((s) => s.brand),
    })),
  villes: getCities().map((c) => { const d = getCityData(c.slug); return { ville: c.name, region: c.region, conceptionC: c.designTempC, degresJours: d?.climate?.hdd18 ?? null, janvierMoyenneC: d?.climate?.janMeanC ?? null, recordFroidC: d?.climate?.extremeMinC ?? null, population2021: d?.census?.population2021 ?? null, logementsAvant1981Pct: d?.census?.builtBefore1981Pct ?? null }; }),
  prixInstalles: PRICE_GRID.filter((c) => c.basis === "publie").map((c) => ({ type: c.kind, calibre: c.btu ?? null, zones: c.zones ?? null, gamme: c.tier, min: c.min, max: c.max, sources: c.sources })),
  hypothesesEconomies: { tarifDParKwh: 0.105, copSaisonnier: { bas: 2.0, moyen: 2.2, haut: 2.6 }, maisonType: "1 500 pi², construite entre 1980 et 2000, coefficient de déperdition 180 W/K" },
  guidesExistants: getAllGuides().map((g) => ({ slug: g.slug, titre: g.title, categorie: g.category })),
};
process.stdout.write(JSON.stringify(ctx));
