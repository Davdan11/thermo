// Intègre des noms commerciaux relevés dans src/lib/data/commercial-names.json (table en place + nouveaux relevés).
// Usage (depuis la racine du projet) : node scripts/fiches/fusion-noms.cjs [--dry-run] releve1.json [releve2.json …]
// Un relevé : tableau d'entrées { brand, outdoorModel (ou modelNumber), commercialName, sourceFile, quote (ou
// commercialNameQuote), confidence?, sourceType?, note?, page? } — voir scripts/fiches/REGLES.md.
// Rien n'est inventé : chaque nom est imprimé dans le document cité ; descriptions, sources non vérifiées et
// contradictions sont écartées. Les noms déjà en place gardent la priorité et leur graphie.
const fs = require("fs");
const path = require("path");

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const inputs = args.filter((a) => a !== "--dry-run");
const OUT = "src/lib/data/commercial-names.json";

const normModel = (s) => String(s ?? "").split("+")[0].toUpperCase().replace(/[^A-Z0-9*]/g, "");
const normBrand = (s) => String(s ?? "").normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]/g, "");
const KEEP_CAPS = new Set(["LGRED"]);
// Noms contredits par un autre document du fabricant : aucun nom (ex. Keeprite C5H0V/C5H3V, « Ion » contre « SoftSound »).
const EXCLUDE = [/^keeprite\|C5H[03]V/];
// Descriptions ou catégories imprimées comme des noms : pas un nom qu'on cherche.
const DENY = [/^s\b/i, /^sd\b/i, /^cold climate$/i, /^high efficiency/i, /^all climate$/i, /^ductless$/i, /^multi[- ]?zone$/i, /^heat pump$/i];
const clean0 = (n) => String(n).replace(/[®™]/g, "").replace(/TM\*?(?=\s|$)/g, "").replace(/\s+-\s+/g, " ").replace(/\s{2,}/g, " ").trim().replace(/^Endeavor Line\s+/i, "");
const cleanQuote = (q) => String(q).replace(/[®™]/g, "").replace(/TM\*?/g, " ").toLowerCase();

// Sources officielles : la liste fermée du dépôt (un dossier précis pour un hébergeur partagé).
const hostsSrc = fs.readFileSync("src/lib/data/official-sources.ts", "utf8");
const HOSTS = [...((hostsSrc.match(/OFFICIAL_HOSTS\s*=\s*\[([\s\S]*?)\]/) || [])[1] || "").matchAll(/"([^"]+)"/g)].map((m) => m[1]);
const officialOk = (u) => {
  try {
    const url = new URL(u);
    return HOSTS.some((h) => (h.includes("/") ? (url.hostname + url.pathname).startsWith(h) : url.hostname === h || url.hostname.endsWith("." + h)));
  } catch {
    return false;
  }
};

// Table en place d'abord : ses noms (déjà vérifiés par le test) gardent la priorité et leur graphie.
const existing = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, "utf8")) : [];
const rows = existing.map((e) => ({ ...e, commercialNameQuote: e.quote, _from: "table en place", _clean: e.commercialName, _existing: true }));
for (const f of inputs) {
  for (const e of JSON.parse(fs.readFileSync(f, "utf8"))) {
    if (e.commercialName) rows.push({ ...e, outdoorModel: e.outdoorModel ?? e.modelNumber, _from: path.basename(f), _clean: clean0(e.commercialName) });
  }
}

// Graphie la plus fréquente par marque (« Hi-ULTRA » plutôt que « HI-ULTRA »), à égalité celle qui a des minuscules.
const freq = new Map();
for (const r of rows) {
  const k = `${normBrand(r.brand)}|${r._clean.toLowerCase()}`;
  const m = freq.get(k) ?? new Map();
  m.set(r._clean, (m.get(r._clean) ?? 0) + 1);
  freq.set(k, m);
}
const canon = (r) => [...freq.get(`${normBrand(r.brand)}|${r._clean.toLowerCase()}`).entries()].sort((a, b) => b[1] - a[1] || Number(/[a-z]/.test(b[0])) - Number(/[a-z]/.test(a[0])))[0][0];
const titleCaps = (n) => n.split(" ").map((w) => (/^[A-Z]{4,}$/.test(w) && !KEEP_CAPS.has(w) ? w[0] + w.slice(1).toLowerCase() : w)).join(" ");
const dropSeries = (n) => {
  const m = n.match(/^(.*\S)\s+Series$/i);
  return m && /[a-z]/.test(m[1]) ? m[1] : n;
};
const finalName = (r) => (r._existing ? r.commercialName : dropSeries(titleCaps(canon(r))));
const wordsOk = (name, quote) => name.split(/[\s-]+/).filter((w) => w.length >= 2 && !/^series$/i.test(w)).every((w) => cleanQuote(quote).includes(w.toLowerCase()));

const byKey = new Map();
const rejets = [];
const conflits = [];
let nouveaux = 0;
for (const r of rows) {
  const name = finalName(r);
  const quote = String(r.commercialNameQuote ?? r.quote ?? "");
  const why = !normModel(r.outdoorModel) || normModel(r.outdoorModel).includes("*") ? "numéro vide ou joker"
    : EXCLUDE.some((re) => re.test(normBrand(r.brand) + "|" + normModel(r.outdoorModel))) ? "nom contredit par un autre document"
    : DENY.some((re) => re.test(name)) ? `description plutôt que nom (« ${name} »)`
    : !quote || quote.length > 160 ? "citation absente ou trop longue"
    : !wordsOk(name, quote) ? `citation sans le nom (« ${name} » / « ${quote.slice(0, 80)} »)`
    : !/^https:\/\//.test(r.sourceFile ?? "") ? "source absente"
    : (r.sourceType ?? "officiel") === "officiel" && !officialOk(r.sourceFile) ? "source dite officielle hors de la liste (" + new URL(r.sourceFile).hostname + ")"
    : r.sourceType === "secondaire" && !String(r.note ?? "").trim() ? "source secondaire sans note" : null;
  if (why) {
    rejets.push(`${r._from} ${r.brand} ${r.outdoorModel} : ${why}`);
    continue;
  }
  const key = `${normBrand(r.brand)}|${normModel(r.outdoorModel)}`;
  const entry = {
    brand: r.brand,
    outdoorModel: r.outdoorModel,
    commercialName: name,
    sourceFile: r.sourceFile,
    ...(r.page != null ? { page: r.page } : {}),
    quote,
    ...(r.confidence ? { confidence: r.confidence } : {}),
    sourceType: r.sourceType ?? "officiel",
    ...(r.note ? { note: r.note } : {}),
    ...(r._existing ? { _existing: true } : {}),
  };
  const prev = byKey.get(key);
  if (!prev) {
    byKey.set(key, entry);
    if (!r._existing) nouveaux++;
  } else if (prev === "conflit") continue;
  else if (prev.commercialName !== name) {
    conflits.push(`${r.brand} ${r.outdoorModel} : « ${prev.commercialName} » contre « ${name} »${prev._existing ? " (nom en place gardé)" : ""}`);
    if (!prev._existing) {
      byKey.set(key, "conflit");
      nouveaux--;
    }
  } else if (prev.sourceType === "secondaire" && entry.sourceType === "officiel") byKey.set(key, { ...entry, ...(prev._existing ? { _existing: true } : {}) });
}
const out = [...byKey.values()]
  .filter((e) => e !== "conflit")
  .map(({ _existing, ...e }) => e)
  .sort((a, b) => a.brand.localeCompare(b.brand) || a.outdoorModel.localeCompare(b.outdoorModel));
console.log(`${dryRun ? "[essai] " : ""}table en place : ${existing.length} · nouveaux noms retenus : ${nouveaux} · écartés : ${rejets.length} · conflits : ${conflits.length}`);
rejets.slice(0, 30).forEach((x) => console.log("  écarté " + x));
conflits.forEach((x) => console.log("  CONFLIT " + x));
if (!dryRun) {
  fs.writeFileSync(OUT, JSON.stringify(out, null, 2) + "\n");
  console.log(`écrit : ${OUT} (${existing.length} → ${out.length} entrées)`);
}
