/**
 * Va chercher les photos produit officielles sur le site de chaque fabricant.
 *
 * Plusieurs marques du groupe Carrier / ICP (Tempstar, Keeprite, Heil, Arcoaire, Comfortmaker,
 * Payne, WeatherMaker…) publient un index officiel de leurs produits à /query-index.json :
 * une entrée par produit, avec la famille de modèle (`model`), l'adresse de la page et la photo
 * produit (`product-image`). C'est la source la plus sûre : la photo vient du fabricant lui-même
 * et porte le logo de la marque de la fiche.
 *
 * Le script ne prend QUE les familles qui ont des fiches publiées sans photo, télécharge l'image
 * en pleine largeur, l'aplatit sur blanc, la détoure et l'écrit en webp. Chaque photo est
 * inscrite dans public/images/products/_official-sources/<marque>/SOURCES.json avec son adresse,
 * sa date, sa famille et les modèles couverts — rien n'entre sans provenance.
 *
 * Rien n'est rattaché ici : il faut d'abord REGARDER les photos (planche-contact), puis
 * `npx tsx scripts/audit-photos-catalogue.ts --corriger --manifeste`.
 *
 * Usage :
 *   node scripts/fetch-photos-officielles.mjs --index            # (re)télécharge les index
 *   node scripts/fetch-photos-officielles.mjs --marques tempstar,keeprite [--dry-run]
 *   node scripts/fetch-photos-officielles.mjs --regles           # écrit les règles de rattachement
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const RACINE = process.cwd();
const DATA = path.join(RACINE, "src/lib/data/fixtures/brands/all-auto-datasets.json");
const CACHE = path.join(RACINE, ".cache/index-fabricants");
const SORTIE = path.join(RACINE, "public/images/products/official");
const SOURCES = path.join(RACINE, "public/images/products/_official-sources");
const AUJOURDHUI = new Date().toISOString().slice(0, 10);

/**
 * Marque du catalogue → site officiel qui publie l'index AEM.
 * `prefixe` : ce qu'on met devant le nom de fichier de la photo (l'identifiant de la marque).
 */
const SITES = {
  tempstar: { hote: "www.tempstar.com", index: "https://www.tempstar.com/query-index.json?limit=600" },
  keeprite: { hote: "www.keeprite.com", index: "https://www.keeprite.com/query-index.json?limit=600" },
  heil: { hote: "www.heil-hvac.com", index: "https://www.heil-hvac.com/query-index.json?limit=600" },
  arcoaire: { hote: "www.arcoaire.com", index: "https://www.arcoaire.com/query-index.json?limit=600" },
  comfortmaker: { hote: "www.comfortmaker.com", index: "https://www.comfortmaker.com/query-index.json?limit=600" },
  payne: { hote: "www.payne.com", index: "https://www.payne.com/query-index.json?limit=600" },
  weathermaker: { hote: "www.weathermaker.com", index: "https://www.weathermaker.com/query-index.json?limit=600" },
};

/**
 * Marques du groupe Carrier qui n'ont pas d'index AEM : leurs pages produit servent la photo
 * depuis images.carriercms.com, avec la famille dans le nom du fichier
 * (…/legacy-line-heat-pump-37MHRAQ.png). On ne prend que les pages listées ici, relevées sur
 * l'index officiel de la marque, et la famille retenue est celle du nom du fichier image.
 */
const PAGES_CARRIER_CMS = {
  bryant: {
    hote: "www.bryant.com",
    pages: [
      "/en/us/products/ductless-systems/37maha/",
      "/en/us/products/ductless-systems/37mara/",
      "/en/us/products/ductless-systems/37mgha/",
      "/en/us/products/ductless-systems/37mgra/",
      "/en/us/products/ductless-systems/37mhraq/",
      "/en/us/products/ductless-systems/37mpra/",
    ],
  },
  carrier: {
    hote: "www.carrier.com",
    pages: [
      "/residential/en/ca/products/ductless-mini-splits/37mgha/",
      "/residential/en/ca/products/ductless-mini-splits/37maha/",
      "/residential/en/ca/products/ductless-mini-splits/37mara/",
      "/residential/en/ca/products/ductless-mini-splits/37mhraq/",
      "/residential/en/ca/products/ductless-mini-splits/37mpra/",
    ],
  },
};

const args = process.argv.slice(2);
const dry = args.includes("--dry-run");
const marquesDemandees = (args.find((a) => a.startsWith("--marques="))?.split("=")[1] ?? args[args.indexOf("--marques") + 1] ?? "")
  .split(",")
  .filter(Boolean);
const norm = (s) => String(s).toUpperCase().replace(/[^A-Z0-9]/g, "");

/* ------------------------------------------------------------------ index officiels */
async function telechargerIndex() {
  fs.mkdirSync(CACHE, { recursive: true });
  for (const [marque, site] of Object.entries(SITES)) {
    const r = await fetch(site.index, { headers: { "user-agent": "Mozilla/5.0" } });
    if (!r.ok) { console.log(`${marque} : index HTTP ${r.status}`); continue; }
    const texte = await r.text();
    fs.writeFileSync(path.join(CACHE, `${marque}.json`), texte);
    console.log(`${marque} : index enregistré (${texte.length} octets)`);
  }
}
if (args.includes("--index")) { await telechargerIndex(); if (marquesDemandees.length === 0) process.exit(0); }

/* ------------------------------------------------------------------ ce qui manque */
const donnees = JSON.parse(fs.readFileSync(DATA, "utf8"));
/** Familles sans photo pour une marque : { FAMILLE_TRONQUEE → { modeles, types } } — on garde
 *  les numéros complets pour pouvoir dire dans SOURCES.json ce que la photo couvre. */
function fichesSansPhoto(marque) {
  const jeu = donnees[marque];
  if (!jeu) return [];
  const series = new Map(jeu.series.map((s) => [s.id, s]));
  return jeu.models.filter((m) => m.status === "published" && !(m.imageUrl ?? series.get(m.seriesId)?.imageUrl));
}

/* ------------------------------------------------------------------ téléchargement */
async function traiterMarque(marque) {
  const site = SITES[marque];
  const fichierIndex = path.join(CACHE, `${marque}.json`);
  if (!site || !fs.existsSync(fichierIndex)) { console.log(`${marque} : pas d'index (lancer --index)`); return; }
  const brut = JSON.parse(fs.readFileSync(fichierIndex, "utf8"));
  const produits = (brut.products?.data ?? brut.data ?? []).filter((p) => p.model);

  const manquants = fichesSansPhoto(marque);
  if (manquants.length === 0) { console.log(`${marque} : aucune fiche sans photo`); return; }

  fs.mkdirSync(path.join(SOURCES, marque), { recursive: true });
  const fichierSources = path.join(SOURCES, marque, "SOURCES.json");
  const dejaBrut = fs.existsSync(fichierSources) ? JSON.parse(fs.readFileSync(fichierSources, "utf8")) : [];
  const deja = Array.isArray(dejaBrut) ? dejaBrut : (dejaBrut.sources ?? []);
  const dejaFichiers = new Set(deja.map((e) => e.image_web));

  // Le fabricant sert souvent la MÊME photo produit pour plusieurs familles voisines (Payne
  // utilise une seule image pour 37MAHA, 37MARA et 37MHRAQ). On regroupe donc par adresse
  // d'image : un seul fichier, et toutes les familles qu'il couvre officiellement.
  const parImage = new Map();
  let sautes = 0;
  for (const p of produits) {
    const famille = norm(p.model);
    const couverts = manquants.filter((m) => norm(m.modelNumber).startsWith(famille));
    if (couverts.length === 0) { sautes++; continue; }
    const imageRel = p["product-image"] || p.image;
    if (!imageRel) { console.log(`   ${famille} : pas de photo dans l'index`); continue; }
    const dossierPage = p.path.replace(/\/[^/]*$/, "/");
    const urlImage = `https://${site.hote}${dossierPage}${imageRel.replace(/^\.\//, "").replace(/width=\d+/, "width=2000")}`;
    if (!parImage.has(urlImage)) parImage.set(urlImage, { familles: [], pages: [], titres: [], couverts: new Map() });
    const e = parImage.get(urlImage);
    e.familles.push(famille);
    e.pages.push(`https://${site.hote}${p.path}`);
    e.titres.push(p.navtitle ?? p.title ?? famille);
    for (const m of couverts) e.couverts.set(m.modelNumber, m);
  }

  let pris = 0;
  for (const [urlImage, e] of parImage) {
    const familles = [...new Set(e.familles)].sort();
    const nom = `${marque}-${familles[0].toLowerCase()}-officiel`;
    const nomWeb = `/images/products/official/${nom}.webp`;
    if (dejaFichiers.has(nomWeb)) { console.log(`   ${familles.join("/")} : déjà en réserve`); continue; }
    if (dry) { console.log(`   ${familles.join("/")} (${e.couverts.size} fiches) ← ${urlImage}`); pris++; continue; }
    const r = await fetch(urlImage, { headers: { "user-agent": "Mozilla/5.0" } });
    if (!r.ok) { console.log(`   ${familles.join("/")} : HTTP ${r.status}`); continue; }
    const octets = Buffer.from(await r.arrayBuffer());
    await sharp(octets)
      .flatten({ background: "#ffffff" })
      .trim({ threshold: 5 })
      .resize({ width: 1000, height: 1000, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 88 })
      .toFile(path.join(RACINE, "public", nomWeb));
    deja.push({
      fichier: `${nom}-site.png`,
      image_web: nomWeb,
      url: urlImage,
      page: e.pages[0],
      date: AUJOURDHUI,
      familles,
      modeles: [...e.couverts.keys()].slice(0, 12).join(", "),
      note: `Photo produit « ${e.titres[0]} » de l'index officiel ${site.hote} (query-index.json)${familles.length > 1 ? `, servie par le fabricant pour ${familles.join(", ")}` : ""}. Couvre ${e.couverts.size} fiche(s) publiée(s) sans photo.`,
    });
    pris++;
    console.log(`   ${familles.join("/")} : ${e.couverts.size} fiches ← ${nomWeb}`);
  }
  if (!dry) {
    deja.sort((a, b) => String(a.image_web).localeCompare(String(b.image_web)));
    fs.writeFileSync(fichierSources, JSON.stringify(Array.isArray(dejaBrut) ? deja : { ...dejaBrut, sources: deja }, null, 2) + "\n");
  }
  console.log(`${marque} : ${pris} photos, ${sautes} produits hors catalogue`);
}

/* ------------------------------------------------------------------ pages Carrier CMS */
async function traiterCarrierCms(marque) {
  const conf = PAGES_CARRIER_CMS[marque];
  if (!conf) return;
  const manquants = fichesSansPhoto(marque);
  fs.mkdirSync(path.join(SOURCES, marque), { recursive: true });
  const fichierSources = path.join(SOURCES, marque, "SOURCES.json");
  const dejaBrut = fs.existsSync(fichierSources) ? JSON.parse(fs.readFileSync(fichierSources, "utf8")) : [];
  const deja = Array.isArray(dejaBrut) ? dejaBrut : (dejaBrut.sources ?? []);
  const dejaFichiers = new Set(deja.map((e) => e.image_web));
  let pris = 0;

  for (const chemin of conf.pages) {
    const urlPage = `https://${conf.hote}${chemin}`;
    const r = await fetch(urlPage, { headers: { "user-agent": "Mozilla/5.0" } });
    if (!r.ok) { console.log(`   ${chemin} : HTTP ${r.status}`); continue; }
    const html = await r.text();
    const titre = (html.match(/<title>([^<]*)<\/title>/)?.[1] ?? "").trim();
    // La photo produit est l'image sans transformation (…/image/upload/v<version>/…/products/…png)
    const brute = [...html.matchAll(/images\.carriercms\.com\/image\/upload\/(v\d+\/[^"']*?products\/[^"']*?\.png)/g)]
      .map((m) => m[1])
      .find((p) => /ductless|heat-pump/i.test(p));
    if (!brute) { console.log(`   ${chemin} : pas de photo produit`); continue; }
    // La famille est écrite à la fin du nom de fichier : …-37MHRAQ.png
    const famille = norm(path.basename(brute, ".png").split("-").pop());
    const couverts = manquants.filter((m) => norm(m.modelNumber).startsWith(famille));
    if (couverts.length === 0) { console.log(`   ${famille} : aucune fiche sans photo`); continue; }
    const urlImage = `https://images.carriercms.com/image/upload/w_1000,q_auto:best,f_png/${brute}`;
    const nom = `${marque}-${famille.toLowerCase()}-officiel`;
    const nomWeb = `/images/products/official/${nom}.webp`;
    if (dejaFichiers.has(nomWeb)) { console.log(`   ${famille} : déjà en réserve`); continue; }
    if (dry) { console.log(`   ${famille} (${couverts.length} fiches) ← ${urlImage}`); pris++; continue; }
    const ri = await fetch(urlImage, { headers: { "user-agent": "Mozilla/5.0" } });
    if (!ri.ok) { console.log(`   ${famille} : image HTTP ${ri.status}`); continue; }
    await sharp(Buffer.from(await ri.arrayBuffer()))
      .flatten({ background: "#ffffff" })
      .trim({ threshold: 5 })
      .resize({ width: 1000, height: 1000, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 88 })
      .toFile(path.join(RACINE, "public", nomWeb));
    deja.push({
      fichier: `${nom}-cdn.png`,
      image_web: nomWeb,
      url: urlImage,
      page: urlPage,
      date: AUJOURDHUI,
      familles: [famille],
      modeles: [...new Set(couverts.map((m) => m.modelNumber))].slice(0, 12).join(", "),
      note: `Photo produit de la page officielle « ${titre} ». La famille vient du nom du fichier servi par le CMS du fabricant.`,
    });
    pris++;
    console.log(`   ${famille} : ${couverts.length} fiches ← ${nomWeb}`);
  }
  if (!dry) {
    deja.sort((a, b) => String(a.image_web).localeCompare(String(b.image_web)));
    fs.writeFileSync(fichierSources, JSON.stringify(Array.isArray(dejaBrut) ? deja : { ...dejaBrut, sources: deja }, null, 2) + "\n");
  }
  console.log(`${marque} : ${pris} photos`);
}

/* ------------------------------------------------------------------ règles de rattachement */
/**
 * Écrit dans scripts/image-rules/<marque>.json une règle par photo enregistrée dans SOURCES.json :
 * la famille vient de la provenance officielle, pas d'une ressemblance de nom. Le rattachement
 * lui-même est fait par scripts/map-official-images.mjs, qui repasse par le manifeste.
 */
function ecrireRegles() {
  const DOSSIER_REGLES = path.join(RACINE, "scripts/image-rules");
  for (const marque of fs.readdirSync(SOURCES)) {
    const fichierSources = path.join(SOURCES, marque, "SOURCES.json");
    if (!fs.existsSync(fichierSources)) continue;
    const brut = JSON.parse(fs.readFileSync(fichierSources, "utf8"));
    const liste = Array.isArray(brut) ? brut : (brut.sources ?? []);
    const fichierRegles = path.join(DOSSIER_REGLES, `${marque}.json`);
    const regles = fs.existsSync(fichierRegles) ? JSON.parse(fs.readFileSync(fichierRegles, "utf8")) : [];
    const dejaSeries = new Set(regles.map((r) => r.series));
    let ajoutees = 0;
    for (const e of liste) {
      const img = e.image_web;
      if (!img || dejaSeries.has(img)) continue;
      if (!Array.isArray(e.familles) || e.familles.length === 0) continue;
      if (!fs.existsSync(path.join(RACINE, "public", img))) continue;
      // Une photo au logo d'une autre marque n'a rien à faire sur les fiches de celle-ci, même
      // si sa provenance a été classée dans ce dossier (weathermaker-37mvra rangé chez Carrier).
      if (!path.basename(img).startsWith(`${marque}-`)) continue;
      regles.push({ brand: marque, pattern: `^(${e.familles.map(norm).sort().join("|")})`, series: img });
      ajoutees++;
    }
    if (ajoutees) {
      regles.sort((a, b) => String(a.pattern).localeCompare(String(b.pattern)));
      fs.mkdirSync(DOSSIER_REGLES, { recursive: true });
      fs.writeFileSync(fichierRegles, JSON.stringify(regles, null, 2) + "\n");
      console.log(`${marque} : ${ajoutees} règles ajoutées (${regles.length} au total)`);
    }
  }
}
if (args.includes("--regles")) { ecrireRegles(); process.exit(0); }

for (const marque of marquesDemandees.length ? marquesDemandees : [...Object.keys(SITES), ...Object.keys(PAGES_CARRIER_CMS)]) {
  console.log(`\n=== ${marque}`);
  if (PAGES_CARRIER_CMS[marque]) await traiterCarrierCms(marque);
  else await traiterMarque(marque);
}
