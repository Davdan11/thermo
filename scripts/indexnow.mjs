/**
 * IndexNow : signale à Bing (et Yandex, Naver, Seznam) les URL du site après un déploiement.
 * La clé est le nom du fichier public/<clé>.txt (protocole IndexNow). Google n'utilise pas
 * IndexNow : pour Google, soumettre sitemap-index.xml dans la Search Console.
 * Usage : node scripts/indexnow.mjs [--all]   (par défaut : pages, guides, marques, classements, villes-quebec ;
 *         --all ajoute toutes les fiches produit)
 */
import fs from "node:fs";
import path from "node:path";

const HOST = "thermopompesavendre.ca";
const SITE = `https://${HOST}`;
const keyFile = fs.readdirSync(path.join(process.cwd(), "public")).find((f) => /^[a-f0-9]{32}\.txt$/.test(f));
if (!keyFile) { console.error("Clé IndexNow introuvable (public/<clé>.txt)"); process.exit(1); }
const key = keyFile.replace(/\.txt$/, "");
const all = process.argv.includes("--all");

async function urlsOf(sitemap) {
  const xml = await (await fetch(`${SITE}/sitemap/${sitemap}.xml`)).text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}
// Sitemaps produits : lus depuis l'index (produits-0, produits-1, …).
const indexXml = await (await fetch(`${SITE}/sitemap-index.xml`)).text();
const productSets = [...indexXml.matchAll(/sitemap\/(produits-\d+)\.xml/g)].map((m) => m[1]);
const sets = ["pages", "guides", "marques", "classements", "villes-quebec", ...(all ? productSets : [])];
const urlList = (await Promise.all(sets.map(urlsOf))).flat();
console.log(`${urlList.length} URL à signaler`);
for (let i = 0; i < urlList.length; i += 10000) {
  const batch = urlList.slice(i, i + 10000);
  const r = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key, keyLocation: `${SITE}/${keyFile}`, urlList: batch }),
  });
  console.log(`IndexNow : HTTP ${r.status} (${batch.length} URL)`);
}
