/* ==================================================================
   Données de DÉMONSTRATION de /gestion/statistiques et de l'État du
   site — développement seulement, pour vérifier l'affichage.

   Usage (racine du projet) :
     npx tsx scripts/statistiques-seed.ts                      demandes fictives + surveillance fictive
     npx tsx scripts/statistiques-seed.ts --session <fichier>  écrit aussi un cookie de session (captures)
     npx tsx scripts/statistiques-seed.ts --vider              retire les données de démonstration

   Écrit data/leads/demo-statistiques.jsonl (lu seulement hors
   production), data/surveillance-etat.json et data/surveillance.jsonl
   (marqués demo: true, ignorés en production). Refuse de tourner si
   NODE_ENV=production, si le dossier ressemble à celui du VPS, ou si
   un fichier de surveillance réel (sans demo) existe déjà.
   ================================================================== */
import { config } from "dotenv";
import { promises as fs } from "node:fs";
import path from "node:path";

config({ path: [".env.local"], quiet: true });

function fail(msg: string): never {
  console.error(`statistiques-seed : ${msg}`);
  process.exit(1);
}
const arg = (name: string) => {
  const i = process.argv.indexOf(name);
  return i >= 0 ? process.argv[i + 1] : undefined;
};

/* Hasard reproductible (mêmes captures d'une fois à l'autre). */
function rng(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const rand = rng(20260913);
function pick<T>(items: Array<[T, number]>): T {
  const total = items.reduce((t, [, w]) => t + w, 0);
  let r = rand() * total;
  for (const [v, w] of items) if ((r -= w) <= 0) return v;
  return items[items.length - 1][0];
}

const PRENOMS = ["Julie", "Marc", "Sophie", "Martin", "Isabelle", "Patrick", "Nathalie", "Éric", "Chantal", "Stéphane", "Mélanie", "Luc", "Geneviève", "François", "Annie", "Sylvain", "Karine", "Mathieu", "Caroline", "Alexandre"];
const LIEUX: Array<[{ postalCode: string; municipality: string }, number]> = [
  [{ postalCode: "H2X1Y4", municipality: "Montréal" }, 7],
  [{ postalCode: "H1M2A1", municipality: "Montréal" }, 4],
  [{ postalCode: "H7N1A1", municipality: "Laval" }, 5],
  [{ postalCode: "J4B1A1", municipality: "Boucherville" }, 3],
  [{ postalCode: "J4W2T5", municipality: "Brossard" }, 3],
  [{ postalCode: "J4K1A1", municipality: "Longueuil" }, 3],
  [{ postalCode: "J7Y1A1", municipality: "Saint-Jérôme" }, 2],
  [{ postalCode: "J6A1A1", municipality: "Repentigny" }, 2],
  [{ postalCode: "G1R2B5", municipality: "Québec" }, 2],
  [{ postalCode: "J1H1A1", municipality: "Sherbrooke" }, 1],
  [{ postalCode: "J8Y1A1", municipality: "Gatineau" }, 1],
];
const PAGES: Array<[string, number]> = [
  ["/thermopompes/thermopompe-murale", 6],
  ["/", 5],
  ["/trouver-ma-thermopompe", 5],
  ["/subventions/logisvert", 4],
  ["/produit/fujitsu-aouh12ktap1", 3],
  ["/thermopompes/thermopompe-centrale", 3],
  ["/soumission", 2],
  ["/marques/fujitsu", 2],
  ["/produit/moovair-mshea24c2an1", 1],
  ["/thermopompes", 2],
];
type Canal = { refHost?: string; utm?: Record<string, string>; gclid?: true; fbclid?: true; channel: string };
const CANAUX: Array<[() => Canal, number]> = [
  [() => ({ channel: "google-naturel", refHost: pick([["google.com", 3], ["google.ca", 2]]) }), 34],
  [() => ({ channel: "google-ads", gclid: true, utm: { utm_source: "google", utm_medium: "cpc", utm_campaign: pick([["thermopompe-murale", 2], ["logisvert-automne", 1]]) } }), 15],
  [() => ({ channel: "direct" }), 12],
  [() => ({ channel: "fiche-google", refHost: "google.com", utm: { utm_source: "gbp", utm_medium: "organic" } }), 6],
  [() => ({ channel: "facebook-instagram", refHost: "l.facebook.com", fbclid: true }), 8],
  [() => ({ channel: "ia", refHost: "chatgpt.com", utm: { utm_source: "chatgpt.com" } }), 5],
  [() => ({ channel: "bing", refHost: "bing.com" }), 4],
  [() => ({ channel: "autre-site", refHost: pick([["hydroquebec.com", 2], ["reddit.com", 1], ["forum.renovation-quebec.ca", 1]]) }), 6],
  [() => ({ channel: "courriel", utm: { utm_source: "infolettre", utm_medium: "email", utm_campaign: "septembre" } }), 3],
  [() => ({ channel: "non-transmis" }), 2],
];
const KINDS: Array<[string, number]> = [
  ["soumission", 34],
  ["thermomatch", 20],
  ["rendez-vous", 8],
  ["appel", 12],
  ["contact", 8],
  ["thermoscan", 6],
  ["alerte-logisvert", 8],
  ["partenaire", 3],
];

async function main() {
  if (process.env.NODE_ENV === "production") fail("refusé : NODE_ENV=production.");
  const { journalDir } = await import("../src/lib/crm/lead-journal");
  const { DEMO_JOURNAL_FILE } = await import("../src/lib/gestion/statistiques");
  const { surveillanceDir, SURVEILLANCE_STATE_FILE, SURVEILLANCE_LOG_FILE } = await import("../src/lib/gestion/surveillance");
  const leadsDir = journalDir();
  const survDir = surveillanceDir();
  for (const d of [leadsDir, survDir]) if (d.startsWith("/var/www") || /[\\/]shared[\\/]/.test(d)) fail(`refusé : ${d} ressemble au dossier de production.`);

  const demoFile = path.join(leadsDir, DEMO_JOURNAL_FILE);
  const stateFile = path.join(survDir, SURVEILLANCE_STATE_FILE);
  const logFile = path.join(survDir, SURVEILLANCE_LOG_FILE);
  const isDemo = async (f: string) => {
    const t = await fs.readFile(f, "utf8").catch(() => null);
    return t === null ? null : t.includes('"demo":true') || t.includes('"demo": true');
  };

  if (process.argv.includes("--vider")) {
    await fs.rm(demoFile, { force: true });
    for (const f of [stateFile, logFile]) if ((await isDemo(f)) === true) await fs.rm(f, { force: true });
    console.log("Données de démonstration des statistiques retirées.");
    return;
  }
  for (const f of [stateFile, logFile]) if ((await isDemo(f)) === false) fail(`refusé : ${f} contient des données réelles.`);

  /* ---- Demandes ---- */
  const now = Date.now();
  const DAY = 86_400_000;
  const suiviDepuis = now - 26 * DAY; // avant : pas d'attribution (« inconnu »)
  const lines: string[] = [];
  const soumissions: Array<{ id: string; at: number; firstName: string }> = [];
  let n = 0;
  for (let i = 0; i < 190; i++) {
    // Plus de demandes récemment (le site grandit), un peu de creux la fin de semaine.
    const age = Math.floor(Math.pow(rand(), 1.35) * 150 * DAY);
    const at = now - age - Math.floor(rand() * 10 * 3_600_000);
    const dow = new Date(at).getUTCDay();
    if ((dow === 0 || dow === 6) && rand() < 0.4) continue;
    const kind = pick(KINDS);
    const id = `demo-${String(++n).padStart(4, "0")}`;
    const firstName = PRENOMS[Math.floor(rand() * PRENOMS.length)];
    const lieu = pick(LIEUX);
    const tracked = at >= suiviDepuis;
    const canal = tracked ? pick(CANAUX)() : null;
    const landing = canal && canal.channel !== "non-transmis" ? pick(PAGES) : undefined;
    const attribution = canal ? (canal.channel === "non-transmis" ? { channel: "non-transmis" } : { ...canal, ...(landing ? { landing } : {}) }) : undefined;
    const iso = new Date(at).toISOString();
    const base = { id, at: iso, demo: true, ...(attribution ? { attribution } : {}) };
    if (kind === "appel") {
      lines.push(JSON.stringify({ id, at: iso, demo: true, kind: pick([["appel-manque", 2], ["message-vocal", 1], ["appel-enregistre", 1]]), lead: { phone: `+1514555${String(100 + (n % 99)).padStart(4, "0")}` } }));
      continue;
    }
    const lead: Record<string, unknown> =
      kind === "partenaire"
        ? { company: `Climatisation démo ${n}`, region: pick([["Laval", 1], ["Montérégie", 1], ["Laurentides", 1]]) }
        : { firstName, email: `${firstName.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")}.${n}@exemple.ca`, phone: `514 555-${String(100 + (n % 99)).padStart(4, "0")}`, ...lieu };
    if (kind === "rendez-vous" && soumissions.length && rand() < 0.7) {
      const s = soumissions[Math.floor(rand() * soumissions.length)];
      lead.firstName = s.firstName;
      lead.leadJournalId = s.id;
    }
    lines.push(JSON.stringify({ ...base, kind, lead }));
    if (kind === "soumission") soumissions.push({ id, at, firstName });
  }
  lines.push(JSON.stringify({ id: "demo-desabo", at: new Date(now - 3 * DAY).toISOString(), demo: true, kind: "relances", lead: { event: "desabonnement", email: "x@exemple.ca" } }));
  await fs.mkdir(leadsDir, { recursive: true });
  await fs.writeFile(demoFile, lines.join("\n") + "\n", "utf8");

  /* ---- Surveillance : 14 jours aux 5 minutes, deux incidents ---- */
  const FIVE = 5 * 60_000;
  const last = Math.floor(now / FIVE) * FIVE - FIVE;
  const pannes = [
    { debut: last - 2 * DAY - 3 * 3_600_000, fin: last - 2 * DAY - 3 * 3_600_000 + 25 * 60_000, id: "public-accueil", label: "Accueil (site public)" },
    { debut: last - 6 * 3_600_000, fin: last - 6 * 3_600_000 + 10 * 60_000, id: "serveur-pm2", label: "pm2 « thermo »" },
  ];
  const log: string[] = [];
  for (let t = last - 14 * DAY; t <= last; t += FIVE) {
    const p = pannes.find((x) => t >= x.debut && t < x.fin);
    const line: Record<string, unknown> = { t: new Date(t).toISOString(), ok: !p, ko: p ? [p.id] : [], ms: 140 + Math.floor(rand() * 160), demo: true };
    const start = pannes.find((x) => t === x.debut);
    const end = pannes.find((x) => t === x.fin);
    if (start) line.ev = [{ type: "panne", id: start.id, label: start.label, niveau: "critique" }];
    if (end) line.ev = [{ type: "retabli", id: end.id, label: end.label, niveau: "critique" }];
    log.push(JSON.stringify(line));
  }
  log.push(JSON.stringify({ t: new Date(last - 9 * 3_600_000).toISOString(), ok: true, ko: ["robots-nuit"], demo: true, ev: [{ type: "panne", id: "robots-nuit", label: "Robot de nuit (LogisVert, blogue)", niveau: "avertissement" }] }));
  const c = (id: string, label: string, groupe: string, detail: string, ms?: number, niveau = "critique", ok: boolean | null = true) => ({ id, label, groupe, niveau, ok, detail, ...(ms !== undefined ? { ms } : {}) });
  const dernier = {
    at: new Date(last).toISOString(),
    dureeMs: 1840,
    ok: true,
    checks: [
      c("public-accueil", "Accueil (site public)", "public", "200 · 212 ms", 212),
      c("public-catalogue", "Catalogue /thermopompes (site public)", "public", "200 · 264 ms", 264),
      c("public-thermomatch", "ThermoMatch (site public)", "public", "200 · 98 ms", 98),
      c("public-soumission", "Page /soumission (site public)", "public", "200 · 105 ms", 105),
      c("public-produit", "Fiche produit (site public)", "public", "/produit/fujitsu-aouh12ktap1 · 200 · 131 ms", 131),
      c("public-api-etat", "API /api/relances/etat (site public)", "public", "200 · 61 ms", 61),
      c("public-rapidite", "Rapidité du site public", "public", "page la plus lente : Catalogue /thermopompes en 0.3 s", undefined, "avertissement"),
      c("local-accueil", "Accueil (port local)", "local", "200 · 88 ms", 88),
      c("local-catalogue", "Catalogue /thermopompes (port local)", "local", "200 · 120 ms", 120),
      c("local-thermomatch", "ThermoMatch (port local)", "local", "200 · 41 ms", 41),
      c("local-soumission", "Page /soumission (port local)", "local", "200 · 47 ms", 47),
      c("local-produit", "Fiche produit (port local)", "local", "/produit/fujitsu-aouh12ktap1 · 200 · 60 ms", 60),
      c("local-api-etat", "API /api/relances/etat (port local)", "local", "200 · 12 ms", 12),
      c("api-leads", "API des soumissions (/api/leads)", "api", "validation active (400) · 74 ms", 74),
      c("api-thermomatch", "API ThermoMatch (/api/thermomatch/courriel)", "api", "validation active (400) · 69 ms", 69),
      c("serveur-pm2", "pm2 « thermo »", "serveur", "en ligne depuis le 2026-09-12 22 h 10"),
      c("serveur-redemarrages", "Redémarrages pm2", "serveur", "35 au total", undefined, "avertissement"),
      c("serveur-disque", "Espace disque", "serveur", "63.8 % libre (64.1 Go)"),
      c("serveur-ssl", "Certificat SSL", "serveur", "expire dans 87 jours (2026-12-09)", undefined, "avertissement"),
      c("robots-nuit", "Robot de nuit (LogisVert, blogue)", "robots", "passage du 2026-09-12 à 5 h 30 : Blogue : génération en échec", undefined, "avertissement", false),
      c("robots-relances", "Robot des rappels ThermoMatch", "robots", "pas encore de passage (journal absent)", undefined, "avertissement", null),
      c("robots-deploiement", "Dernier déploiement", "robots", "version 20260912-220126 en service", undefined, "avertissement"),
    ],
    infos: { sslExpire: "2026-12-09T13:39:35.000Z", sslJours: 87, disqueLibrePct: 63.8, pm2Statut: "online", pm2Redemarrages: 35, version: "20260912-220126" },
  };
  await fs.mkdir(survDir, { recursive: true });
  await fs.writeFile(stateFile, JSON.stringify({ version: 1, demo: true, maj: dernier.at, checks: {}, pm2Redemarrages: 35, dernier }, null, 1) + "\n", "utf8");
  await fs.writeFile(logFile, log.join("\n") + "\n", "utf8");
  console.log(`Démonstration écrite : ${lines.length} lignes dans ${demoFile}, ${log.length} passages dans ${logFile}.`);

  const sessionFile = arg("--session");
  if (sessionFile) {
    const { adminEmails } = await import("../src/lib/gestion/auth/admins");
    const email = adminEmails()[0];
    if (!email) fail("aucune adresse autorisée (ADMIN_EMAILS ou NOTIFICATION_EMAIL dans .env.local).");
    const { getSessionSecret } = await import("../src/lib/gestion/auth/secret");
    const { createSessionToken } = await import("../src/lib/gestion/auth/session-token");
    await fs.writeFile(sessionFile, createSessionToken(email, await getSessionSecret()).token);
    console.log(`Cookie de session écrit dans ${sessionFile}.`);
  }
}

main().catch((e) => fail(e instanceof Error ? e.message : String(e)));
