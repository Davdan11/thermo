// Intègre des relevés de températures minimales de chauffage dans src/lib/data/min-heating-temps.json.
// Usage (depuis la racine du projet) : node scripts/fiches/fusion-temperatures.cjs [--dry-run] releve1.json [releve2.json …]
// Chaque entrée est vérifiée ; rien d'invalide, de dupliqué ni de contradictoire n'entre dans le fichier.
// Une source officielle remplace une source secondaire déjà présente quand la valeur est la même.
// Règles des relevés : scripts/fiches/REGLES.md ; domaines officiels : src/lib/data/official-sources.ts.
const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const inputs = args.filter((a) => a !== "--dry-run");
if (!inputs.length) {
  console.error("Aucun fichier de relevé fourni.");
  process.exit(1);
}

const J = "src/lib/data/min-heating-temps.json";
const raw = fs.readFileSync(J, "utf8");
const cur = JSON.parse(raw);
if (raw !== JSON.stringify(cur, null, 2) + "\n") throw new Error("Format du JSON différent (2 espaces + saut de ligne final attendus) : ajout à faire à la main.");

// Même normalisation que normalizeModelNumber (min-temp-brochures.ts) : majuscules, sans espaces, tirets, barres
// ni parenthèses, « * » gardé, ce qui suit « + » ignoré.
const normModel = (s) => String(s ?? "").split("+")[0].toUpperCase().replace(/[\s\-\/()]/g, "");
const normBrand = (s) => String(s ?? "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");
const key = (e) => `${normBrand(e.brand)}|${normModel(e.outdoorModel)}`;

// Sources officielles déjà autorisées par le test : un domaine, ou un dossier précis d'un hébergeur partagé (avec « / »).
const testFile = "src/lib/data/official-sources.ts";
const testSrc = fs.readFileSync(testFile, "utf8");
const block = (testSrc.match(/OFFICIAL_HOSTS\s*=\s*\[([\s\S]*?)\]/) || [])[1] || "";
const officialHosts = [...block.matchAll(/"([^"]+)"/g)].map((m) => m[1]);
const hostOk = (url) =>
  officialHosts.some((h) => (h.includes("/") ? (url.hostname + url.pathname).startsWith(h) : url.hostname === h || url.hostname.endsWith(`.${h}`)));

const existing = new Map(cur.map((e) => [key(e), e]));
const incoming = new Map(); // clé → { entry, from }
const rejected = [];
const conflicts = [];
const upgrades = []; // { before, entry, from } : secondaire déjà présent → officiel, même valeur
const newOfficialHosts = new Map();

function check(e) {
  const errs = [];
  if (!e || typeof e !== "object") return ["entrée illisible"];
  if (!(typeof e.outdoorModel === "string" && normModel(e.outdoorModel).length > 3)) errs.push("numéro de modèle trop court");
  if (!(typeof e.brand === "string" && e.brand.trim())) errs.push("marque absente");
  if (!(Number.isInteger(e.minHeatingTempC) && e.minHeatingTempC >= -40 && e.minHeatingTempC <= 0)) errs.push(`température impossible (${e.minHeatingTempC})`);
  if (!(typeof e.quote === "string" && e.quote.trim() && e.quote.length <= 160)) errs.push("citation absente ou de plus de 160 caractères");
  if (!["modele", "serie"].includes(e.confidence)) errs.push("confiance absente (modele|serie)");
  const type = e.sourceType ?? "officiel";
  if (!["officiel", "secondaire"].includes(type)) errs.push(`type de source inconnu (${type})`);
  if (type === "secondaire" && !(typeof e.note === "string" && e.note.trim())) errs.push("source secondaire sans note");
  if (typeof e.sourceFile !== "string" || !e.sourceFile.trim()) errs.push("source absente");
  else if (/^https:\/\//.test(e.sourceFile)) {
    let url = null;
    try {
      url = new URL(e.sourceFile);
    } catch {
      errs.push("adresse de source invalide");
    }
    if (url && type === "officiel" && !hostOk(url)) newOfficialHosts.set(url.hostname, (newOfficialHosts.get(url.hostname) ?? 0) + 1);
  } else if (!/\.pdf$/i.test(e.sourceFile) || !fs.existsSync(path.join(process.cwd(), e.sourceFile))) errs.push("source locale qui n'est pas un PDF présent dans le dépôt");
  return errs;
}

const normalized = (e) => ({
  outdoorModel: e.outdoorModel,
  brand: e.brand,
  series: e.series,
  minHeatingTempC: e.minHeatingTempC,
  sourceFile: e.sourceFile,
  ...(e.page != null ? { page: e.page } : {}),
  quote: e.quote,
  confidence: e.confidence,
  sourceType: e.sourceType ?? "officiel",
  ...(e.note ? { note: e.note } : {}),
});

for (const file of inputs) {
  const list = JSON.parse(fs.readFileSync(file, "utf8"));
  if (!Array.isArray(list)) throw new Error(`${file} : un tableau est attendu`);
  for (const e of list) {
    const errs = check(e);
    if (errs.length) {
      rejected.push({ from: path.basename(file), model: `${e?.brand} ${e?.outdoorModel}`, why: errs.join(" ; ") });
      continue;
    }
    const k = key(e);
    const before = existing.get(k);
    if (before) {
      if (before.minHeatingTempC !== e.minHeatingTempC) conflicts.push({ model: `${e.brand} ${e.outdoorModel}`, values: `déjà ${before.minHeatingTempC} °C dans le fichier ; ${e.minHeatingTempC} °C dans ${path.basename(file)}` });
      else if ((before.sourceType ?? "officiel") === "secondaire" && (e.sourceType ?? "officiel") === "officiel" && !upgrades.some((u) => u.before === before)) upgrades.push({ before, entry: e, from: path.basename(file) });
      else rejected.push({ from: path.basename(file), model: `${e.brand} ${e.outdoorModel}`, why: "déjà présent (même valeur)" });
      continue;
    }
    const other = incoming.get(k);
    if (other) {
      if (other.entry.minHeatingTempC !== e.minHeatingTempC) {
        conflicts.push({ model: `${e.brand} ${e.outdoorModel}`, values: `${other.entry.minHeatingTempC} °C (${other.from}) contre ${e.minHeatingTempC} °C (${path.basename(file)})` });
        other.conflict = true;
      } else if (other.entry.sourceType === "secondaire" && (e.sourceType ?? "officiel") === "officiel") incoming.set(k, { entry: e, from: path.basename(file) });
      continue;
    }
    incoming.set(k, { entry: e, from: path.basename(file) });
  }
}

const toAdd = [...incoming.values()].filter((v) => !v.conflict).map(({ entry }) => normalized(entry));

const bySource = toAdd.reduce((m, e) => ((m[e.sourceType] = (m[e.sourceType] ?? 0) + 1), m), {});
console.log(
  `${dryRun ? "[essai] " : ""}à ajouter : ${toAdd.length} (officiel ${bySource.officiel ?? 0}, secondaire ${bySource.secondaire ?? 0}) · mises à niveau secondaire → officiel : ${upgrades.length} · écartées : ${rejected.length} · conflits : ${conflicts.length}`,
);
for (const u of upgrades.slice(0, 20)) console.log(`  mise à niveau [${u.from}] ${u.entry.brand} ${u.entry.outdoorModel} : ${u.before.sourceFile} → ${u.entry.sourceFile}`);
for (const r of rejected.slice(0, 40)) console.log(`  écartée [${r.from}] ${r.model} : ${r.why}`);
if (rejected.length > 40) console.log(`  … et ${rejected.length - 40} autres`);
for (const c of conflicts) console.log(`  CONFLIT ${c.model} : ${c.values}`);
if (newOfficialHosts.size) console.log(`domaines « officiel » hors de la liste du test (à vérifier, puis ajouter à OFFICIAL_HOSTS) : ${[...newOfficialHosts.entries()].map(([h, n]) => `${h} (${n})`).join(", ")}`);

if (!dryRun && (toAdd.length || upgrades.length)) {
  for (const u of upgrades) {
    const i = cur.indexOf(u.before);
    if (i >= 0) cur[i] = normalized(u.entry);
  }
  fs.writeFileSync(J, JSON.stringify(cur.concat(toAdd), null, 2) + "\n");
  console.log(`écrit : ${J} (${cur.length} → ${cur.length + toAdd.length} entrées, ${upgrades.length} mise(s) à niveau)`);
}
