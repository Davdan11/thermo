/**
 * Logos officiels des marques, avec provenance.
 * 1) Article Wikipédia de l'entreprise (image principale = logo, licence indiquée par Commons)
 * 2) Sinon, logo de l'en-tête du site officiel de la marque
 * Produit public/images/marques/_candidats/<slug>.png + SOURCES.json ; la revue visuelle décide.
 * Usage : node scripts/fetch-brand-logos.mjs
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const OUT = path.join(process.cwd(), "public/images/marques/_candidats");
fs.mkdirSync(OUT, { recursive: true });
const MANIFEST = path.join(OUT, "SOURCES.json");
const UA = "ThermopompesAVendre/1.0 (+https://thermopompesavendre.ca; comparaison de thermopompes)";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// slug → [titre Wikipédia (en), site officiel]
const BRANDS = {
  amana: ["Amana Corporation", "https://www.amana-hac.com/"],
  "american-standard": ["American Standard (HVAC)", "https://www.americanstandardair.com/"],
  bosch: ["Robert Bosch GmbH", "https://www.bosch-homecomfort.com/us/en/residential/"],
  bryant: ["Bryant Heating & Cooling", "https://www.bryant.com/"],
  carrier: ["Carrier Global", "https://www.carrier.com/residential/en/us/"],
  coleman: [null, "https://www.colemanac.com/en/us/"],
  conforto: [null, "https://www.conforto.ca/"],
  convectair: [null, "https://www.convectair.com/"],
  daikin: ["Daikin", "https://daikincomfort.com/"],
  danby: ["Danby (company)", "https://www.danby.com/"],
  dettson: [null, "https://www.dettson.com/"],
  "direct-air": [null, "https://directairhvac.com/"],
  elios: [null, "https://elioshvac.com/"],
  fujitsu: ["Fujitsu General", "https://www.fujitsugeneral.com/us/"],
  ge: ["General Electric", "https://www.ge.com/"],
  "ge-appliances": ["GE Appliances", "https://www.geappliances.com/"],
  goodman: ["Goodman Global", "https://www.goodmanmfg.com/"],
  gree: ["Gree Electric", "https://www.gree.ca/"],
  haier: ["Haier", "https://www.haier.com/"],
  hisense: ["Hisense", "https://www.hisense-canada.com/"],
  keeprite: [null, "https://www.keeprite.com/"],
  lennox: ["Lennox International", "https://www.lennox.com/"],
  lg: ["LG Electronics", "https://www.lg.com/ca_fr"],
  "maxi-air": [null, "https://maxi-air.com/"],
  midea: ["Midea Group", "https://www.midea.com/ca/"],
  "mitsubishi-electric": ["Mitsubishi Electric", "https://www.mitsubishielectric.ca/"],
  moovair: [null, "https://moovair.com/"],
  napoleon: ["Napoleon (company)", "https://www.napoleonheatingandcooling.com/"],
  ouellet: [null, "https://www.ouellet.com/"],
  panasonic: ["Panasonic", "https://www.panasonic.com/ca/"],
  payne: [null, "https://www.payne.com/en/us/"],
  "quebec-vair": [null, "https://www.quebecvair.com/"], // hero détecté à tort : revue manuelle
  rheem: ["Rheem Manufacturing Company", "https://www.rheem.com/"],
  ruud: ["Ruud (company)", "https://www.ruud.com/"],
  samsung: ["Samsung Electronics", "https://www.samsung.com/ca_fr/"],
  senville: [null, "https://www.senville.ca/"],
  sharp: ["Sharp Corporation", "https://www.sharp.ca/"],
  stelpro: [null, "https://www.stelpro.com/"],
  supreme: [null, "https://supreme-air.com/"],
  tcl: ["TCL Technology", "https://www.tcl.com/ca/fr"],
  tempstar: [null, "https://www.tempstar.com/"],
  tosot: [null, "https://www.tosotdirect.com/"],
  trane: ["Trane Technologies", "https://www.trane.com/residential/en/"],
  york: ["York International", "https://www.york.com/"],
  zephyr: [null, "https://zephyrhvac.ca/"],
};

const manifest = fs.existsSync(MANIFEST) ? JSON.parse(fs.readFileSync(MANIFEST, "utf8")) : {};

async function get(url, type = "text") {
  const r = await fetch(url, { headers: { "User-Agent": UA, Accept: "*/*" }, redirect: "follow", signal: AbortSignal.timeout(20000) });
  if (!r.ok) throw new Error(`HTTP ${r.status}`);
  return type === "text" ? r.text() : Buffer.from(await r.arrayBuffer());
}

async function fromWikipedia(title) {
  // Fichiers de l'article : on prend celui dont le nom contient « logo » (infobox), jamais l'image principale (souvent un bâtiment).
  const api = "https://en.wikipedia.org/w/api.php?" + new URLSearchParams({ action: "query", titles: title, prop: "images", imlimit: "100", format: "json", redirects: "1" });
  const j = JSON.parse(await get(api));
  const page = Object.values(j.query.pages)[0];
  const files = (page?.images ?? []).map((x) => x.title).filter((t) => /logo/i.test(t) && !/commons-logo|wikimedia|wikipedia|wiktionary|wordmark|icon|old|former|19[0-9]{2}|20[01][0-9]|flag/i.test(t) && !(title === "GE Appliances" && /haier/i.test(t)));
  files.sort((a, b) => (b.endsWith(".svg") ? 1 : 0) - (a.endsWith(".svg") ? 1 : 0) || a.length - b.length);
  if (files.length === 0) return null;
  await sleep(600);
  const info = JSON.parse(await get("https://en.wikipedia.org/w/api.php?" + new URLSearchParams({ action: "query", titles: files[0], prop: "imageinfo", iiprop: "url|extmetadata", iiurlwidth: "800", format: "json" })));
  const ii = Object.values(info.query.pages)[0]?.imageinfo?.[0];
  if (!ii) return null;
  return { url: ii.thumburl ?? ii.url, source: `https://en.wikipedia.org/wiki/${encodeURIComponent(page.title)}`, file: files[0], license: ii.extmetadata?.LicenseShortName?.value ?? null, via: "wikipedia-logo-file" };
}

async function fromSite(site) {
  const html = await get(site);
  const imgs = [...html.matchAll(/<img[^>]+>/gi)].map((m) => m[0]);
  const pick = imgs.find((t) => /logo/i.test(t) && !/footer|partner|badge|award|payment|social|hero|banner/i.test(t)) ?? imgs.find((t) => /header|brand/i.test(t));
  if (!pick) {
    const og = html.match(/property=["']og:image["'][^>]*content=["']([^"']+)/i) ?? html.match(/content=["']([^"']+)["'][^>]*property=["']og:image["']/i);
    if (og) return { url: new URL(og[1], site).href, source: site, via: "og:image" };
    return null;
  }
  const src = pick.match(/\s(?:data-src|src)=["']([^"']+)["']/i)?.[1];
  if (!src || src.startsWith("data:")) return null;
  return { url: new URL(src, site).href, source: site, via: "site-header" };
}

async function save(slug, hit) {
  const buf = await get(hit.url, "buffer");
  let img = sharp(buf, { density: 300 });
  const meta = await img.metadata();
  if (meta.format === "svg" || /\.svg/i.test(hit.url)) img = sharp(buf, { density: 300 });
  await img.ensureAlpha().resize({ width: 800, height: 400, fit: "inside", withoutEnlargement: true }).png().toFile(path.join(OUT, `${slug}.png`));
  manifest[slug] = { ...hit, fetchedAt: new Date().toISOString().slice(0, 10), format: meta.format, width: meta.width, height: meta.height };
}

const EXISTING = new Set(["daikin", "fujitsu", "gree", "lg", "midea", "mitsubishi-electric", "moovair", "samsung", "convectair"]);
for (const [slug, [wiki, site]] of Object.entries(BRANDS)) {
  if (EXISTING.has(slug) && !process.argv.includes("--all")) { console.log(`= ${slug} (logo existant conservé)`); continue; }
  let hit = null;
  try { if (wiki) hit = await fromWikipedia(wiki); } catch (e) { console.log(`  wiki ${slug}: ${e.message}`); }
  await sleep(800);
  if (!hit && site) { try { hit = await fromSite(site); } catch (e) { console.log(`  site ${slug}: ${e.message}`); } }
  if (!hit) { console.log(`✗ ${slug}`); continue; }
  try { await save(slug, hit); console.log(`✓ ${slug} ← ${hit.via} ${hit.url.slice(0, 90)}`); } catch (e) { console.log(`✗ ${slug} (${hit.via}): ${e.message.slice(0, 80)}`); }
  await sleep(800);
}
fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2));
