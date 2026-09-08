#!/usr/bin/env node
/**
 * build-catalogue.mjs — reconstruit src/lib/data/fixtures/brands/all-auto-datasets.json
 * à partir de la liste officielle LogisVert (Hydro-Québec + ENERGY STAR).
 *
 * Principes
 *  - Une fiche = une unité extérieure, identifiée par son numéro de modèle (clé unique).
 *  - Tous les jumelages certifiés d'une unité sont comptés et résumés (min/max) sur la fiche ;
 *    le détail des jumelages est servi à l'exécution par l'index LogisVert.
 *  - La série vient de la liste officielle quand elle existe ; sinon d'une règle de préfixe
 *    du dictionnaire (marquée « estimée ») ; sinon « Série non identifiée ». Rien n'est inventé.
 *  - Déterministe : même entrée → même sortie. Validé : rien n'est écrit si une règle échoue.
 *  - Conserve d'un build à l'autre : fiche marque, images des modèles et des séries.
 *
 * Usage : node scripts/build-catalogue.mjs [--dry-run] [--report chemin.json]
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const LV_PATH = path.join(ROOT, "src/lib/subsidies/logisvert-official-amounts.json");
const LV_META = path.join(ROOT, "src/lib/subsidies/logisvert-metadata.json");
const OUT_PATH = path.join(ROOT, "src/lib/data/fixtures/brands/all-auto-datasets.json");
const DICT_PATH = path.join(ROOT, "src/lib/data/fixtures/series-dictionary.json");
const META_PATH = path.join(ROOT, "scripts/brand-metadata.json");

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const reportIdx = args.indexOf("--report");
const reportPath = reportIdx >= 0 ? args[reportIdx + 1] : path.join(ROOT, "src/lib/data/fixtures/brands/catalogue-build-report.json");

/* ---------------------------------------------------------------- utilitaires */
const cleanSlug = (s) =>
  String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const normKey = (s) => String(s ?? "").toLowerCase().replace(/[^a-z0-9]/g, "");
const brandSlugOf = (name) => {
  const s = cleanSlug(name);
  return s === "aux" ? "aux-brand" : s === "new" ? "new-brand" : s;
};
const CAP_TIERS = [6000, 9000, 12000, 15000, 18000, 20000, 24000, 30000, 36000, 42000, 48000, 60000];
const standardCapacity = (btu) => (btu ? CAP_TIERS.reduce((a, b) => (Math.abs(b - btu) < Math.abs(a - btu) ? b : a)) : null);
const mode = (values) => {
  const c = new Map();
  for (const v of values) if (v != null) c.set(v, (c.get(v) ?? 0) + 1);
  let best = null, n = 0;
  for (const [v, k] of [...c.entries()].sort((a, b) => b[1] - a[1] || (a[0] > b[0] ? 1 : -1))) if (k > n) { best = v; n = k; }
  return best;
};
const minMax = (values) => {
  const v = values.filter((x) => typeof x === "number" && x > 0);
  return v.length ? [Math.min(...v), Math.max(...v)] : [null, null];
};
const ACRONYM_KEEP = /^(LG|GE|TCL|ACD|ADP|MDV|AUX|C&H|AC|HVAC|MRCOOL|YMGI|AAON|ICP|CH|1HVAC|AIRE|RGF)$/;
const brandDisplayName = (raw) => {
  const s = String(raw).trim();
  if (s !== s.toUpperCase()) return s;
  return s
    .split(/\s+/)
    .map((w) => (w.length <= 3 || ACRONYM_KEEP.test(w) || /\d/.test(w) ? w : w[0] + w.slice(1).toLowerCase()))
    .join(" ");
};
/** Nettoie un numéro de modèle pour l'affichage : majuscules, sans astérisque ni caractère corrompu. */
const displayModelNumber = (raw) => String(raw).replace(/[^\x20-\x7E]/g, "").replace(/\*+/g, "").trim().toUpperCase();

/** Normalise une valeur de série de la liste officielle (variantes d'orthographe seulement). */
function normalizeSeriesName(raw, brandName) {
  let s = String(raw ?? "").replace(/[^\x20-\x7EÀ-ſ]/g, " ").trim();
  if (!s) return null;
  const bn = brandName.toLowerCase();
  if (s.toLowerCase().startsWith(bn)) s = s.slice(bn.length).trim();
  s = s
    .replace(/[-_]?\b(series|serie|série|séries)\b/gi, " ")
    .replace(/([A-Za-z0-9])(series|serie)\b/gi, "$1") // « DLseries », « 38Mseries »
    .replace(/\s+/g, " ")
    .replace(/^[-–\s]+|[-–\s]+$/g, "")
    .trim();
  if (!s) return null;
  // Un mot tout en majuscules d'au moins 5 lettres est un nom (OTERRA, FLEXX) ; plus court, c'est un code (DLC, WMA).
  s = s.split(" ").map((w) => (/^[A-Z]{5,}$/.test(w) ? w[0] + w.slice(1).toLowerCase() : w)).join(" ");
  return s;
}
/** Une valeur qui ressemble à un numéro de modèle complet n'est pas une série. */
const looksLikeModelNumber = (key) => key.length >= 7 && /^[a-z]{2,5}\d{2,}[a-z0-9]*$/.test(key);

/* ---------------------------------------------------------------- chargement */
const lv = JSON.parse(fs.readFileSync(LV_PATH, "utf8"));
const lvMeta = fs.existsSync(LV_META) ? JSON.parse(fs.readFileSync(LV_META, "utf8")) : {};
const prev = fs.existsSync(OUT_PATH) ? JSON.parse(fs.readFileSync(OUT_PATH, "utf8")) : {};
const dict = fs.existsSync(DICT_PATH) ? JSON.parse(fs.readFileSync(DICT_PATH, "utf8")) : {};
const brandMeta = fs.existsSync(META_PATH) ? JSON.parse(fs.readFileSync(META_PATH, "utf8")) : {};
const NOW = (lvMeta.updatedAt ?? new Date().toISOString()).slice(0, 10);
const STAMP = `${NOW}T00:00:00Z`;

/* ---------------------------------------------------------------- regroupement */
const byBrand = new Map(); // brandSlug → { name, units: Map<unitKey, records[]> }
let recordsUsed = 0, recordsSkipped = 0;
for (const [ahri, r] of Object.entries(lv)) {
  const brandName = String(r.b ?? "").trim();
  const unitKey = normKey(r.m);
  if (!brandName || !unitKey) { recordsSkipped++; continue; }
  const slug = brandSlugOf(brandName);
  if (!byBrand.has(slug)) byBrand.set(slug, { name: brandName, units: new Map() });
  const b = byBrand.get(slug);
  if (!b.units.has(unitKey)) b.units.set(unitKey, []);
  b.units.get(unitKey).push({ ahri, ...r });
  recordsUsed++;
}

/* ---------------------------------------------------------------- construction */
const report = {
  builtAt: new Date().toISOString(),
  logisvertUpdatedAt: lvMeta.updatedAt ?? null,
  records: { total: Object.keys(lv).length, used: recordsUsed, skipped: recordsSkipped },
  brands: byBrand.size,
  models: 0,
  series: { official: 0, inferred: 0, unidentified: 0 },
  modelsBySeriesSource: { official: 0, inferred: 0, unidentified: 0 },
  seriesConflicts: [],
  imagesCarried: { models: 0, series: 0 },
  previous: { brands: Object.keys(prev).length, models: Object.values(prev).reduce((n, d) => n + (d.models?.length ?? 0), 0) },
  errors: [],
};

const out = {};
for (const [brandSlug, b] of [...byBrand.entries()].sort((x, y) => x[0].localeCompare(y[0]))) {
  const prevDs = prev[brandSlug];
  const brandDict = dict[brandSlug] ?? { aliases: {}, prefixes: [] };
  const prefixes = [...(brandDict.prefixes ?? [])].sort((a, c) => c.prefix.length - a.prefix.length);
  const sourceId = `src-${brandSlug}-logisvert`;
  const prevModelImages = new Map((prevDs?.models ?? []).filter((m) => m.imageUrl).map((m) => [normKey(m.modelNumber), m.imageUrl]));
  const prevSeriesImages = new Map();
  for (const s of prevDs?.series ?? []) {
    if (!s.imageUrl) continue;
    const n = normalizeSeriesName(s.name, b.name);
    if (n) prevSeriesImages.set(normKey(brandDict.aliases?.[normKey(n)] ?? n), s.imageUrl);
  }

  const brand = prevDs?.brand
    ? { ...prevDs.brand, id: brandSlug, slug: brandSlug, name: brandDisplayName(prevDs.brand.name), updatedAt: STAMP }
    : {
        id: brandSlug, slug: brandSlug, name: brandDisplayName(b.name),
        description: "Catalogue issu de la liste officielle des appareils admissibles à LogisVert (Hydro-Québec).",
        activeInQuebec: false, status: "published", createdAt: STAMP, updatedAt: STAMP,
      };

  const seriesMap = new Map(); // seriesKey → series entity
  const models = [], outdoorUnits = [], indoorUnits = [], configurations = [], performanceProfiles = [], certifications = [], warranties = [];
  const seenIndoor = new Set();
  const seriesNameTypes = new Map(); // display name → Set(systemType) pour détecter les collisions de slug

  // Passe 1 : résoudre série et type pour chaque unité
  const units = [];
  for (const [unitKey, records] of [...b.units.entries()].sort((x, y) => x[0].localeCompare(y[0]))) {
    const modelNumber = mode(records.map((r) => displayModelNumber(r.m)).filter(Boolean));
    const types = new Set(records.map((r) => r.t).filter(Boolean));
    let systemType;
    if (types.has("M") && !types.has("C")) systemType = "wall-single";
    else if (types.has("C") && !types.has("M")) systemType = "central-ducted";
    else if (types.size === 2) systemType = mode(records.map((r) => r.t)) === "C" ? "central-ducted" : "wall-single";
    else systemType = records.some((r) => r.f && String(r.f).length > 1) || records.every((r) => !r.im || String(r.im).length < 3) ? "central-ducted" : "wall-single";

    // Série officielle (valeurs ENERGY STAR de la liste), variantes d'orthographe fusionnées
    const officialKeys = new Map();
    for (const r of records) {
      const n = normalizeSeriesName(r.s, b.name);
      if (!n) continue;
      const k = normKey(n);
      if (!k || k === unitKey || k === normKey(r.im) || looksLikeModelNumber(k)) continue;
      const display = brandDict.aliases?.[k] ?? n;
      const dk = normKey(display);
      if (!officialKeys.has(dk)) officialKeys.set(dk, { display, n: 0 });
      officialKeys.get(dk).n++;
    }
    let seriesDisplay = null, seriesSource = "unidentified";
    if (officialKeys.size > 0) {
      const ranked = [...officialKeys.values()].sort((x, y) => y.n - x.n || x.display.localeCompare(y.display));
      seriesDisplay = ranked[0].display; seriesSource = "official";
      if (ranked.length > 1) report.seriesConflicts.push({ brand: brandSlug, model: modelNumber, values: ranked.map((r) => `${r.display} (${r.n})`) });
    } else {
      const rule = prefixes.find((p) => modelNumber.startsWith(p.prefix.toUpperCase()));
      if (rule) { seriesDisplay = rule.series; seriesSource = "inferred"; if (rule.systemType) systemType = rule.systemType; }
    }
    if (seriesDisplay) {
      if (!seriesNameTypes.has(seriesDisplay)) seriesNameTypes.set(seriesDisplay, new Set());
      seriesNameTypes.get(seriesDisplay).add(systemType);
    }
    units.push({ unitKey, records, modelNumber, systemType, seriesDisplay, seriesSource });
  }

  // Passe 2 : entités
  for (const u of units) {
    const { unitKey, records, modelNumber, systemType, seriesDisplay, seriesSource } = u;
    const modelId = `${brandSlug}-${cleanSlug(modelNumber)}`;

    // Série
    let seriesKey, seriesSlug, seriesName, seriesStatus, seriesConfidence;
    if (seriesDisplay) {
      // Même nom de série sous deux types (ex. Oterra murale et Oterra 115 V console) : la murale garde le slug court.
      const multiType = seriesNameTypes.get(seriesDisplay).size > 1 && systemType !== "wall-single";
      seriesSlug = `${brandSlug}-${cleanSlug(seriesDisplay)}${multiType ? `-${systemType}` : ""}`;
      seriesKey = seriesSlug; seriesName = seriesDisplay;
      seriesStatus = "published"; seriesConfidence = seriesSource === "official" ? "verified" : "estimated";
    } else {
      seriesSlug = `${brandSlug}-serie-non-identifiee${systemType === "wall-single" ? "" : `-${systemType}`}`;
      seriesKey = seriesSlug; seriesName = "Série non identifiée";
      seriesStatus = "needs_review"; seriesConfidence = "placeholder";
    }
    const anyCold = records.some((r) => r.cc === true);
    const isMulti = /multi/i.test(seriesName);
    const categories = [anyCold ? "cold-climate" : "conventional"];
    if (systemType === "central-ducted") categories.push("ducted");
    else categories.push("ductless", isMulti ? "multi-zone" : "single-zone");
    if (!seriesMap.has(seriesKey)) {
      seriesMap.set(seriesKey, {
        id: seriesSlug, slug: seriesSlug, name: seriesName, brandId: brandSlug, systemType, categories: [...categories],
        imageUrl: prevSeriesImages.get(normKey(seriesName)) ?? null,
        status: seriesStatus,
        sources: [{ sourceId: seriesSource === "official" ? sourceId : seriesSource === "inferred" ? `src-${brandSlug}-series-dictionary` : sourceId, fields: ["name"], confidence: seriesConfidence, verifiedAt: seriesSource === "official" ? NOW : null }],
        createdAt: STAMP, updatedAt: STAMP,
      });
      report.series[seriesSource]++;
      if (seriesMap.get(seriesKey).imageUrl) report.imagesCarried.series++;
    } else {
      const s = seriesMap.get(seriesKey);
      if (anyCold && !s.categories.includes("cold-climate")) { s.categories = s.categories.filter((c) => c !== "conventional"); s.categories.unshift("cold-climate"); }
    }
    report.modelsBySeriesSource[seriesSource]++;

    // Capacités et rendements (sur tous les jumelages)
    const nominal = mode(records.map((r) => standardCapacity(r.c || r.hn)).filter(Boolean));
    const [coolMin, coolMax] = minMax(records.map((r) => r.c));
    const [h5Min, h5Max] = minMax(records.map((r) => r.h5));
    const [seerMin, seerMax] = minMax(records.map((r) => r.seer2));
    const [hspfMin, hspfMax] = minMax(records.map((r) => r.hspf2));
    const [copMin, copMax] = minMax(records.map((r) => r.cop5));

    // Jumelage de référence : le mieux documenté, puis le plus performant au froid
    const rep = [...records].sort((x, y) =>
      (y.h5 ? 1 : 0) - (x.h5 ? 1 : 0) || (y.h5 ?? 0) - (x.h5 ?? 0) || (y.h17 ?? 0) - (x.h17 ?? 0) || (y.a ?? 0) - (x.a ?? 0) || x.ahri.localeCompare(y.ahri),
    )[0];

    const imageUrl = prevModelImages.get(unitKey) ?? null;
    if (imageUrl) report.imagesCarried.models++;

    models.push({
      id: modelId, slug: modelId,
      name: seriesDisplay ? `${seriesDisplay} ${modelNumber}` : modelNumber,
      seriesId: seriesSlug, brandId: brandSlug,
      modelNumber, normalizedModelNumber: unitKey,
      isActive2026: true, thermomatchEligible: true,
      nominalCapacityBtu: nominal,
      coolingCapacityMinBtu: coolMin, coolingCapacityMaxBtu: coolMax,
      heatingCapacity5FMinBtu: h5Min, heatingCapacity5FMaxBtu: h5Max,
      seer2Min: seerMin, seer2Max: seerMax, hspf2Min: hspfMin, hspf2Max: hspfMax, cop5FMin: copMin, cop5FMax: copMax,
      certifiedPairings: records.length,
      systemType, categories, status: nominal ? "published" : "needs_review",
      imageUrl,
      sources: [{ sourceId, fields: ["modelNumber", "nominalCapacityBtu", "certifiedPairings", "seer2Min", "seer2Max", "hspf2Min", "hspf2Max", "cop5FMin", "cop5FMax", "heatingCapacity5FMinBtu", "heatingCapacity5FMaxBtu"], confidence: "verified", verifiedAt: NOW }],
      createdAt: STAMP, updatedAt: STAMP, verifiedAt: NOW,
    });
    report.models++;

    outdoorUnits.push({ id: modelId, modelNumber, brandId: brandSlug, refrigerant: null });

    const indoorRaw = rep.im ? displayModelNumber(rep.im) : "";
    const indoorId = indoorRaw ? `${brandSlug}-iu-${cleanSlug(indoorRaw)}` : null;
    if (indoorId && !seenIndoor.has(indoorId)) { seenIndoor.add(indoorId); indoorUnits.push({ id: indoorId, modelNumber: indoorRaw, brandId: brandSlug, type: systemType }); }

    const cfgId = `${modelId}-cfg-${rep.ahri}`;
    configurations.push({
      id: cfgId, slug: cfgId, modelId, outdoorUnitId: modelId, indoorUnitId: indoorId,
      coolingCapacityMinBtu: rep.c || rep.hn || null, coolingCapacityMaxBtu: rep.c || rep.hn || null,
      heatingCapacityMinBtu: rep.hn || null, heatingCapacityMaxBtu: rep.hn || null,
      seer2: rep.seer2 || null, hspf2: rep.hspf2 || null, cop: rep.cop5 || null,
      minHeatingTempC: null,
      sources: [{ sourceId, fields: ["seer2", "hspf2", "cop"], confidence: "verified", verifiedAt: NOW }],
      createdAt: STAMP, updatedAt: STAMP,
    });
    const points = [];
    if (rep.h17) points.push({ outdoorTempC: -8.3, heatingCapacityBtu: rep.h17, cop: null, testStandard: "Capacité de chauffage à 17 °F (-8,3 °C) publiée dans la liste LogisVert", sourceId, confidence: "verified", verifiedAt: NOW });
    if (rep.h5) points.push({ outdoorTempC: -15, heatingCapacityBtu: rep.h5, cop: rep.cop5 || null, testStandard: "Capacité de chauffage à 5 °F (-15 °C) publiée par ENERGY STAR", sourceId, confidence: "verified", verifiedAt: NOW });
    if (points.length) performanceProfiles.push({ configurationId: cfgId, nominalHeatingBtu: rep.hn || null, nominalRatingTempC: 8.3, dataPoints: points });
    certifications.push({
      id: `cert-${cfgId}-ahri`, type: "ahri", configurationId: cfgId, referenceNumber: rep.ahri, coldClimate: rep.cc === true,
      territory: "CA-QC", status: "active", verificationUrl: "https://www.hydroquebec.com/residentiel/mieux-consommer/aides-financieres/logisvert.html",
      sourceId, verifiedAt: NOW,
    });

    const w = brandMeta[brandSlug]?.warranties;
    if (w?.parts) warranties.push({ id: `${modelId}-w-parts`, modelId, type: "parts", durationYears: w.parts, requiresRegistration: true, provider: "manufacturer", confidence: "estimated" });
    if (w?.compressor) warranties.push({ id: `${modelId}-w-comp`, modelId, type: "compressor", durationYears: w.compressor, requiresRegistration: true, provider: "manufacturer", confidence: "estimated" });
  }

  const prevSource = (prevDs?.sources ?? []).find((s) => s.id === sourceId);
  const sources = [
    prevSource
      ? { ...prevSource, consultedAt: NOW }
      : { id: sourceId, type: "government", title: "Liste des appareils admissibles — LogisVert", organization: "Hydro-Québec", url: "https://www.hydroquebec.com/residentiel/mieux-consommer/aides-financieres/logisvert.html", consultedAt: NOW, language: "fr", confidence: "verified" },
  ];
  if (prefixes.length) sources.push({ id: `src-${brandSlug}-series-dictionary`, type: "internal", title: "Dictionnaire des séries (règles de préfixe, non vérifiées)", consultedAt: NOW, language: "fr", confidence: "estimated" });

  out[brandSlug] = {
    brand, series: [...seriesMap.values()], models, outdoorUnits, indoorUnits, configurations, performanceProfiles, certifications, warranties,
    priceObservations: prevDs?.priceObservations ?? [], sources, editorial: prevDs?.editorial ?? [],
  };
}

/* ---------------------------------------------------------------- validation */
const allIds = new Set();
let totalPairings = 0;
for (const [slug, ds] of Object.entries(out)) {
  const names = new Set();
  const seriesIds = new Set(ds.series.map((s) => s.id));
  for (const m of ds.models) {
    if (allIds.has(m.id)) report.errors.push(`identifiant en double : ${m.id}`);
    allIds.add(m.id);
    const nk = `${m.name}|${m.systemType}`;
    if (names.has(nk)) report.errors.push(`nom en double dans ${slug} : ${m.name}`);
    names.add(nk);
    if (!m.name || m.name.length < 3) report.errors.push(`nom vide : ${m.id}`);
    if (/\*/.test(m.modelNumber) || /[^\x20-\x7E]/.test(m.modelNumber)) report.errors.push(`numéro de modèle sale : ${m.id}`);
    if (m.status === "published" && (m.nominalCapacityBtu == null || m.nominalCapacityBtu < 6000 || m.nominalCapacityBtu > 60000)) report.errors.push(`capacité hors plage : ${m.id} (${m.nominalCapacityBtu})`);
    if (m.status !== "published") report.needsReview = (report.needsReview ?? 0) + 1;
    if (!seriesIds.has(m.seriesId)) report.errors.push(`série absente : ${m.id} → ${m.seriesId}`);
    if (!m.certifiedPairings) report.errors.push(`aucun jumelage : ${m.id}`);
    totalPairings += m.certifiedPairings;
  }
  const cfgModels = new Set(ds.configurations.map((c) => c.modelId));
  for (const m of ds.models) if (!cfgModels.has(m.id)) report.errors.push(`aucune configuration : ${m.id}`);
}
if (totalPairings !== recordsUsed) report.errors.push(`jumelages comptés ${totalPairings} ≠ enregistrements utilisés ${recordsUsed}`);
if (report.previous.models && report.models < 0.95 * report.previous.models) report.errors.push(`chute du nombre de fiches : ${report.models} < 95 % de ${report.previous.models}`);
if (report.previous.brands && report.brands < report.previous.brands - 5) report.errors.push(`chute du nombre de marques : ${report.brands} < ${report.previous.brands}`);
report.pairings = totalPairings;

/* ---------------------------------------------------------------- sortie */
console.log(`Marques ${report.brands} · fiches ${report.models} · jumelages ${totalPairings}`);
console.log(`Séries : officielles ${report.series.official}, estimées ${report.series.inferred}, non identifiées ${report.series.unidentified}`);
console.log(`Fiches par source de série : ${JSON.stringify(report.modelsBySeriesSource)} · conflits ${report.seriesConflicts.length}`);
console.log(`Images conservées : ${report.imagesCarried.models} modèles, ${report.imagesCarried.series} séries`);
if (report.errors.length) {
  console.error(`\n✗ ${report.errors.length} erreur(s) de validation — rien n'est écrit :`);
  for (const e of report.errors.slice(0, 30)) console.error("  - " + e);
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  process.exit(1);
}
if (dryRun) { console.log("(dry-run : aucun fichier écrit)"); fs.writeFileSync(reportPath, JSON.stringify(report, null, 2)); process.exit(0); }
fs.writeFileSync(OUT_PATH, JSON.stringify(out, null, 1));
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
console.log(`✓ ${path.relative(ROOT, OUT_PATH)} écrit · rapport ${path.relative(ROOT, reportPath)}`);
