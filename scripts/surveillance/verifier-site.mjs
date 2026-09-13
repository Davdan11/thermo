#!/usr/bin/env node
/* ==================================================================
   Surveillance de ThermopompesÀVendre.ca — un passage (cron aux 5 min).

   Vérifie, sans effet de bord :
     • le site public ET le port local (127.0.0.1:3003) : accueil,
       /thermopompes, /trouver-ma-thermopompe, /soumission, une fiche
       produit, /api/relances/etat (JSON) — code 200, texte attendu,
       temps de réponse ; un nouvel essai 15 s plus tard avant d'échouer ;
     • les API de demandes : POST vide sur /api/leads et
       /api/thermomatch/courriel → erreur de validation attendue (400).
       Rien n'est créé, aucun courriel ne part ;
     • pm2 « thermo » en ligne et saut du compteur de redémarrages ;
       espace disque (< 10 % libre) ; certificat SSL (< 14 jours) ;
     • robot de nuit, dernier déploiement, robot des rappels (journaux).

   Alerte au changement d'état seulement (voir regles.mjs) : texto
   Twilio (critique) + courriel (toujours). État et historique dans
   shared/data (surveillance-etat.json, surveillance.jsonl, 14 jours).

   Usage :
     node scripts/surveillance/verifier-site.mjs              passage normal (cron, via verifier-site.sh)
     node scripts/surveillance/verifier-site.mjs --essai      essai à blanc : rien n'est envoyé ; rien n'est écrit
                                                              sauf si --dossier est donné
     options : --site <url>  --local <url> | --sans-local  --dossier <dossier>  --tester-envoi
   ================================================================== */

import { appendFile, mkdir, open, readFile, readdir, readlink, rename, stat, writeFile } from "node:fs/promises";
import { statfsSync } from "node:fs";
import { execFile } from "node:child_process";
import tls from "node:tls";
import path from "node:path";
import {
  analyserDeploiement,
  analyserRelances,
  analyserRobotNuit,
  evaluer,
  garderRecents,
  ligneJournal,
  lirePm2,
  masquerCourriel,
  masquerTelephone,
  messagesAlerte,
  passageOk,
  verifierRedemarrages,
} from "./regles.mjs";

const args = process.argv.slice(2);
const flag = (n) => args.includes(n);
const opt = (n) => {
  const i = args.indexOf(n);
  return i >= 0 && args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : undefined;
};

const env = process.env;
const ESSAI = flag("--essai") || flag("--dry-run");
const ROOT = env.SITE_ROOT || "/var/www/thermopompesavendre.ca";
const SITE = (opt("--site") || env.SURVEILLANCE_SITE || "https://thermopompesavendre.ca").replace(/\/$/, "");
const LOCAL = flag("--sans-local") ? null : (opt("--local") || env.SURVEILLANCE_LOCAL || "http://127.0.0.1:3003").replace(/\/$/, "");
const DOSSIER_EXPLICITE = opt("--dossier");
const DOSSIER = DOSSIER_EXPLICITE || env.SURVEILLANCE_DIR || (env.LEAD_JOURNAL_DIR ? path.dirname(env.LEAD_JOURNAL_DIR) : path.join(ROOT, "shared/data"));
const ECRIRE = !ESSAI || Boolean(DOSSIER_EXPLICITE);
const FICHIER_ETAT = path.join(DOSSIER, "surveillance-etat.json");
const FICHIER_JOURNAL = path.join(DOSSIER, "surveillance.jsonl");
const DELAI_MS = 20_000;
const LENT_MS = 8_000;
const UA = "TAV-surveillance/1.0 (verification automatique)";
const PM2_NOM = env.SURVEILLANCE_PM2_NOM || "thermo";

const stamp = () => new Date().toLocaleString("sv-SE", { timeZone: "America/Toronto" });
const log = (...m) => console.log(`[${stamp()}]`, ...m);

/* ---------------- HTTP ---------------- */

async function requete(url, { method = "GET", body } = {}) {
  const t0 = performance.now();
  try {
    const res = await fetch(url, {
      method,
      body,
      headers: { "user-agent": UA, ...(body ? { "content-type": "application/json" } : {}) },
      redirect: "manual",
      cache: "no-store",
      signal: AbortSignal.timeout(DELAI_MS),
    });
    const text = await res.text();
    return { status: res.status, text, ms: Math.round(performance.now() - t0), location: res.headers.get("location") };
  } catch (e) {
    const ms = Math.round(performance.now() - t0);
    const code = e?.cause?.code || e?.code;
    const erreur = e?.name === "TimeoutError" ? `délai dépassé (${DELAI_MS / 1000} s)` : `injoignable${code ? ` (${code})` : ""}`;
    return { status: 0, text: "", ms, erreur };
  }
}

const PAGES = [
  { id: "accueil", label: "Accueil", chemin: "/", marque: /<title>[^<]*TAV\.ca/i },
  { id: "catalogue", label: "Catalogue /thermopompes", chemin: "/thermopompes", marque: /<title>[^<]*thermopompe/i },
  { id: "thermomatch", label: "ThermoMatch", chemin: "/trouver-ma-thermopompe", marque: /ThermoMatch/ },
  { id: "soumission", label: "Page /soumission", chemin: "/soumission", marque: /<title>[^<]*soumission/i },
  { id: "produit", label: "Fiche produit", chemin: null, marque: /"@type":"Product"/ },
  { id: "api-etat", label: "API /api/relances/etat", chemin: "/api/relances/etat", json: (j) => typeof j?.disponibles === "boolean" },
];

async function verifierPage(base, groupe, page, chemin) {
  const r = await requete(base + chemin);
  const ou = groupe === "public" ? "site public" : "port local";
  const v = { id: `${groupe}-${page.id}`, label: `${page.label} (${ou})`, groupe, niveau: "critique", ok: false, detail: "", ms: r.ms };
  if (r.erreur) v.detail = r.erreur;
  else if (r.status !== 200) v.detail = `erreur HTTP ${r.status}${r.location ? ` vers ${r.location}` : ""}`;
  else if (page.json) {
    try {
      v.ok = Boolean(page.json(JSON.parse(r.text)));
      v.detail = v.ok ? `200 · ${r.ms} ms` : "réponse JSON inattendue";
    } catch {
      v.detail = "réponse non JSON";
    }
  } else if (!page.marque.test(r.text)) v.detail = "texte attendu absent (page d'erreur ?)";
  else {
    v.ok = true;
    v.detail = `200 · ${r.ms} ms${r.ms > LENT_MS ? " (lent)" : ""}`;
  }
  return { v, texte: r.text };
}

const APIS = [
  { id: "api-leads", label: "API des soumissions (/api/leads)", chemin: "/api/leads", attendu: (s, j) => s === 400 && typeof j?.error === "string" },
  { id: "api-thermomatch", label: "API ThermoMatch (/api/thermomatch/courriel)", chemin: "/api/thermomatch/courriel", attendu: (s, j) => s === 400 && j?.ok === false },
];

/** POST vide : la validation doit répondre 400. Aucun lead, aucun courriel. */
async function verifierApi(api) {
  const r = await requete(SITE + api.chemin, { method: "POST", body: "{}" });
  const v = { id: api.id, label: api.label, groupe: "api", niveau: "critique", ok: false, detail: "", ms: r.ms };
  if (r.erreur) v.detail = r.erreur;
  else if (r.status === 429) {
    v.ok = true;
    v.detail = "limite de débit atteinte (l'API répond)";
  } else {
    let j = null;
    try {
      j = JSON.parse(r.text);
    } catch {
      /* non JSON */
    }
    v.ok = api.attendu(r.status, j);
    v.detail = v.ok ? `validation active (400) · ${r.ms} ms` : `réponse inattendue (HTTP ${r.status})`;
  }
  return v;
}

/* ---------------- Serveur ---------------- */

function pm2Jlist() {
  return new Promise((resolve) => {
    execFile("pm2", ["jlist"], { timeout: 20_000, maxBuffer: 20 * 1024 * 1024, windowsHide: true }, (err, stdout) => {
      if (err && err.code === "ENOENT") resolve({ absent: true });
      else resolve({ sortie: String(stdout ?? "") });
    });
  });
}

function certificat(url) {
  const { hostname } = new URL(url);
  return new Promise((resolve) => {
    const socket = tls.connect({ host: hostname, port: 443, servername: hostname, timeout: 10_000 }, () => {
      const cert = socket.getPeerCertificate();
      socket.end();
      resolve(cert?.valid_to ? { expire: new Date(cert.valid_to) } : { erreur: "certificat illisible" });
    });
    socket.on("timeout", () => {
      socket.destroy();
      resolve({ erreur: "délai dépassé" });
    });
    socket.on("error", (e) => resolve({ erreur: e.code || e.message }));
  });
}

async function finDeFichier(fichier, octets = 64 * 1024) {
  const fh = await open(fichier, "r");
  try {
    const { size, mtimeMs } = await fh.stat();
    const debut = Math.max(0, size - octets);
    const buf = Buffer.alloc(size - debut);
    await fh.read(buf, 0, buf.length, debut);
    return { texte: buf.toString("utf8"), mtimeMs };
  } finally {
    await fh.close();
  }
}

async function lireJson(fichier) {
  try {
    return JSON.parse(await readFile(fichier, "utf8"));
  } catch {
    return null;
  }
}

/* ---------------- Envois ---------------- */

const e164 = (n) => {
  const d = String(n ?? "").replace(/\D/g, "");
  return d.length === 10 ? `+1${d}` : d.length === 11 && d.startsWith("1") ? `+${d}` : null;
};
const destTexto = () => env.ALERT_SMS_TO || env.TWILIO_FORWARD_VENTES || "";
const destCourriel = () => env.ALERT_EMAIL_TO || env.NOTIFICATION_EMAIL || "info@thermopompesavendre.ca";

async function envoyerTexto(texte) {
  const { TWILIO_ACCOUNT_SID: sid, TWILIO_AUTH_TOKEN: token, TWILIO_PHONE_NUMBER: from } = env;
  if (!sid || !token || !from) return "non-configure";
  const to = e164(destTexto());
  if (!to) return "sans-destinataire";
  if (to === e164(from)) return "meme-numero (ALERT_SMS_TO requis)";
  try {
    const res = await fetch(`https://api.twilio.com/2010-04-01/Accounts/${sid}/Messages.json`, {
      method: "POST",
      headers: { Authorization: `Basic ${Buffer.from(`${sid}:${token}`).toString("base64")}`, "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ To: to, From: from, Body: texte }).toString(),
      signal: AbortSignal.timeout(15_000),
    });
    if (res.ok) return "envoye";
    const j = await res.json().catch(() => ({}));
    return `echec (HTTP ${res.status}${j?.code ? `, code Twilio ${j.code}` : ""})`;
  } catch (e) {
    return `echec (${e?.name === "TimeoutError" ? "délai" : e?.message ?? "réseau"})`;
  }
}

/** Même transport que le site (src/lib/crm/email.ts) : SMTP (relais Google), sinon Resend. */
async function envoyerCourriel(sujet, texte) {
  const to = destCourriel();
  const adresse = env.SMTP_USER || env.EMAIL_FROM || "info@thermopompesavendre.ca";
  const from = `Surveillance TAV.ca <${adresse}>`;
  const hasAuth = Boolean(env.SMTP_USER && env.SMTP_PASS);
  let erreurSmtp = null;
  if (env.SMTP_HOST || hasAuth) {
    try {
      const nodemailer = (await import("nodemailer")).default;
      const port = Number(env.SMTP_PORT || (hasAuth ? 465 : 587));
      const smtp = nodemailer.createTransport({
        host: env.SMTP_HOST || "smtp.gmail.com",
        port,
        secure: port === 465,
        requireTLS: port !== 465,
        name: env.SMTP_EHLO || "thermopompesavendre.ca",
        auth: hasAuth ? { user: env.SMTP_USER, pass: env.SMTP_PASS } : undefined,
        connectionTimeout: 15_000,
        greetingTimeout: 15_000,
        socketTimeout: 20_000,
      });
      await smtp.sendMail({ from, to, subject: sujet, text: texte });
      return "envoye (smtp)";
    } catch (e) {
      erreurSmtp = e?.message ?? String(e);
    }
  }
  if (env.RESEND_API_KEY) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json" },
        body: JSON.stringify({ from, to: [to], subject: sujet, text: texte }),
        signal: AbortSignal.timeout(15_000),
      });
      if (res.ok) return `envoye (resend${erreurSmtp ? ", SMTP en échec" : ""})`;
      return `echec (resend HTTP ${res.status}${erreurSmtp ? ` ; smtp : ${erreurSmtp}` : ""})`;
    } catch (e) {
      return `echec (resend : ${e?.message ?? "réseau"})`;
    }
  }
  return erreurSmtp ? `echec (smtp : ${erreurSmtp})` : "non-configure";
}

/* ---------------- Passage ---------------- */

async function verifierHttp() {
  const cibles = [["public", SITE], ...(LOCAL ? [["local", LOCAL]] : [])];
  const produitParDefaut = env.SURVEILLANCE_PRODUIT || "/produit/fujitsu-aouh12ktap1";
  const essai = async () => {
    const pages = PAGES.filter((p) => p.chemin);
    const premiers = await Promise.all(cibles.flatMap(([groupe, base]) => pages.map((p) => verifierPage(base, groupe, p, p.chemin))));
    // Fiche produit : la première du catalogue public (ou SURVEILLANCE_PRODUIT).
    const catalogue = premiers.find((x) => x.v.id === "public-catalogue")?.texte ?? "";
    const produit = /href="(\/produit\/[a-z0-9-]+)"/.exec(catalogue)?.[1] ?? produitParDefaut;
    const page = PAGES.find((p) => p.id === "produit");
    const fiches = await Promise.all(cibles.map(([groupe, base]) => verifierPage(base, groupe, page, produit)));
    const apis = await Promise.all(APIS.map(verifierApi));
    return [...premiers.map((x) => x.v), ...fiches.map((x) => ({ ...x.v, detail: `${produit} · ${x.v.detail}` })), ...apis];
  };
  const premier = await essai();
  if (premier.every((v) => v.ok)) return premier;
  // Nouvel essai 15 s plus tard : une seconde d'hésitation ne réveille personne.
  await new Promise((r) => setTimeout(r, 15_000));
  const second = await essai();
  return premier.map((v) => {
    if (v.ok) return v;
    const w = second.find((x) => x.id === v.id);
    if (w?.ok) return { ...w, detail: `${w.detail} (au 2e essai)` };
    return w ? { ...w, detail: w.detail === v.detail ? w.detail : `${v.detail}, puis ${w.detail}` } : v;
  });
}

async function verifierServeur(etatAvant) {
  const checks = [];
  const infos = {};

  const pm2 = await pm2Jlist();
  if (pm2.absent) {
    checks.push({ id: "serveur-pm2", label: `pm2 « ${PM2_NOM} »`, groupe: "serveur", niveau: "critique", ok: null, detail: "pm2 absent ici (poste de travail ?)" });
  } else {
    const p = lirePm2(pm2.sortie, PM2_NOM);
    if (!p) checks.push({ id: "serveur-pm2", label: `pm2 « ${PM2_NOM} »`, groupe: "serveur", niveau: "critique", ok: null, detail: "sortie de pm2 illisible" });
    else {
      infos.pm2Statut = p.statut;
      if (typeof p.redemarrages === "number") infos.pm2Redemarrages = p.redemarrages;
      checks.push({ id: "serveur-pm2", label: `pm2 « ${PM2_NOM} »`, groupe: "serveur", niveau: "critique", ok: p.statut === "online", detail: p.statut === "online" ? `en ligne${p.depuis ? ` depuis le ${new Date(p.depuis).toLocaleString("fr-CA", { timeZone: "America/Toronto", dateStyle: "short", timeStyle: "short" })}` : ""}` : `état « ${p.statut} »` });
      const r = verifierRedemarrages(etatAvant?.pm2Redemarrages, p.redemarrages);
      checks.push({ id: "serveur-redemarrages", label: "Redémarrages pm2", groupe: "serveur", niveau: "avertissement", ok: r.ok, detail: r.detail });
    }
  }

  try {
    let cible = ROOT;
    try {
      await stat(cible);
    } catch {
      cible = process.cwd();
    }
    const s = statfsSync(cible);
    const libre = Math.round((Number(s.bavail) / Number(s.blocks)) * 1000) / 10;
    const go = Math.round((Number(s.bavail) * Number(s.bsize)) / 1e8) / 10;
    infos.disqueLibrePct = libre;
    checks.push({ id: "serveur-disque", label: "Espace disque", groupe: "serveur", niveau: "critique", ok: libre >= 10, detail: `${libre} % libre (${go} Go)` });
  } catch (e) {
    checks.push({ id: "serveur-disque", label: "Espace disque", groupe: "serveur", niveau: "critique", ok: null, detail: `illisible (${e?.code ?? e?.message})` });
  }

  const cert = await certificat(SITE);
  if (cert.expire) {
    const jours = Math.floor((cert.expire.getTime() - Date.now()) / 86_400_000);
    infos.sslExpire = cert.expire.toISOString();
    infos.sslJours = jours;
    checks.push({ id: "serveur-ssl", label: "Certificat SSL", groupe: "serveur", niveau: jours < 3 ? "critique" : "avertissement", ok: jours >= 14, detail: `expire dans ${jours} jours (${cert.expire.toISOString().slice(0, 10)})` });
  } else {
    checks.push({ id: "serveur-ssl", label: "Certificat SSL", groupe: "serveur", niveau: "avertissement", ok: null, detail: `lecture impossible (${cert.erreur})` });
  }

  // Robots et déploiement (journaux du VPS).
  try {
    const { texte, mtimeMs } = await finDeFichier("/var/log/thermo-nightly-bot.log");
    const a = analyserRobotNuit(texte, { mtimeMs });
    checks.push({ id: "robots-nuit", label: "Robot de nuit (LogisVert, blogue)", groupe: "robots", niveau: "avertissement", ok: a ? a.ok : null, detail: a ? a.detail : "aucun passage dans le journal" });
  } catch {
    checks.push({ id: "robots-nuit", label: "Robot de nuit (LogisVert, blogue)", groupe: "robots", niveau: "avertissement", ok: null, detail: "journal absent" });
  }
  try {
    const { texte } = await finDeFichier("/var/log/thermo-relances.log");
    const a = analyserRelances(texte);
    checks.push({ id: "robots-relances", label: "Robot des rappels ThermoMatch", groupe: "robots", niveau: "avertissement", ok: a ? a.ok : null, detail: a ? a.detail : "pas encore de passage" });
  } catch {
    checks.push({ id: "robots-relances", label: "Robot des rappels ThermoMatch", groupe: "robots", niveau: "avertissement", ok: null, detail: "pas encore de passage (journal absent)" });
  }
  try {
    const noms = await readdir(path.join(ROOT, "releases"));
    const versions = await Promise.all(noms.map(async (nom) => ({ nom, mtimeMs: (await stat(path.join(ROOT, "releases", nom))).mtimeMs })));
    const courante = await readlink(path.join(ROOT, "current")).then((l) => path.basename(l), () => null);
    if (courante) infos.version = courante;
    const a = analyserDeploiement({ versions, courante });
    checks.push({ id: "robots-deploiement", label: "Dernier déploiement", groupe: "robots", niveau: "avertissement", ok: a.ok, detail: a.detail });
  } catch {
    checks.push({ id: "robots-deploiement", label: "Dernier déploiement", groupe: "robots", niveau: "avertissement", ok: null, detail: "dossier releases/ absent ici" });
  }

  return { checks, infos };
}

async function ecrireEtat(etat) {
  await mkdir(DOSSIER, { recursive: true });
  const tmp = `${FICHIER_ETAT}.tmp`;
  await writeFile(tmp, JSON.stringify(etat, null, 1) + "\n", "utf8");
  await rename(tmp, FICHIER_ETAT);
}

/** Ajoute la ligne du passage ; une fois par jour (première ligne de plus de 14 jours), réécrit le fichier. */
async function journaliser(ligne) {
  await mkdir(DOSSIER, { recursive: true });
  await appendFile(FICHIER_JOURNAL, JSON.stringify(ligne) + "\n", "utf8");
  const debut = await readFile(FICHIER_JOURNAL, "utf8").catch(() => "");
  const premiere = debut.slice(0, debut.indexOf("\n"));
  let t = NaN;
  try {
    t = Date.parse(JSON.parse(premiere).t);
  } catch {
    /* ligne abîmée : on réécrit */
  }
  if (!Number.isFinite(t) || Date.now() - t > 14.5 * 86_400_000) {
    const gardees = garderRecents(debut.split("\n"));
    const tmp = `${FICHIER_JOURNAL}.tmp`;
    await writeFile(tmp, gardees.join("\n") + (gardees.length ? "\n" : ""), "utf8");
    await rename(tmp, FICHIER_JOURNAL);
  }
}

async function testerEnvoi() {
  const texte = `TAV.ca — essai de la surveillance (${stamp()}) : si vous lisez ceci, les alertes arrivent bien.`;
  const [sms, courriel] = await Promise.all([envoyerTexto(texte), envoyerCourriel("[TAV.ca] Essai de la surveillance", texte)]);
  log(`Essai d'envoi — texto à ${masquerTelephone(destTexto())} : ${sms} ; courriel à ${masquerCourriel(destCourriel())} : ${courriel}`);
}

async function main() {
  if (flag("--tester-envoi")) return testerEnvoi();
  const t0 = Date.now();
  // Lu même en essai : on voit quelles alertes partiraient réellement ; seul l'écriture est évitée.
  const etatAvant = await lireJson(FICHIER_ETAT);
  const [http, serveur] = await Promise.all([verifierHttp(), verifierServeur(etatAvant)]);
  const checks = [...http, ...serveur.checks];

  // Lenteur du site public (avertissement) : la page la plus lente au-delà de 8 s.
  const publics = checks.filter((c) => c.groupe === "public" && c.ok && typeof c.ms === "number");
  if (publics.length) {
    const lente = publics.reduce((a, b) => (b.ms > a.ms ? b : a));
    checks.push({ id: "public-rapidite", label: "Rapidité du site public", groupe: "public", niveau: "avertissement", ok: lente.ms <= LENT_MS, detail: `page la plus lente : ${lente.label.replace(" (site public)", "")} en ${(lente.ms / 1000).toFixed(1)} s` });
  }

  const maintenant = new Date();
  const resultat = { at: maintenant.toISOString(), dureeMs: Date.now() - t0, ok: passageOk(checks), ...(ESSAI ? { essai: true } : {}), checks, infos: serveur.infos };
  const { etat, evenements } = evaluer(etatAvant, resultat, maintenant);
  const messages = messagesAlerte(evenements, resultat, { maintenant, site: SITE });

  let envoi;
  if (messages) {
    if (ESSAI) {
      envoi = { sms: messages.sms ? "essai (non envoyé)" : "aucun", courriel: "essai (non envoyé)" };
    } else {
      const [sms, courriel] = await Promise.all([messages.sms ? envoyerTexto(messages.sms) : Promise.resolve("aucun"), envoyerCourriel(messages.sujet, messages.texte)]);
      envoi = { sms, courriel };
    }
  }

  if (ECRIRE) {
    await ecrireEtat(etat);
    await journaliser(ligneJournal(resultat, evenements, envoi));
  }

  const ko = checks.filter((c) => c.ok === false);
  const nv = checks.filter((c) => c.ok === null).length;
  const accueil = checks.find((c) => c.id === "public-accueil");
  log(`${resultat.ok ? "OK" : "PANNE"} — ${checks.length - ko.length - nv}/${checks.length} vérifications réussies${nv ? `, ${nv} non vérifiables ici` : ""}${accueil?.ms !== undefined ? ` · accueil ${accueil.ms} ms` : ""} · ${resultat.dureeMs} ms${ESSAI ? " · ESSAI À BLANC" : ""}`);
  for (const c of ko) log(`  ÉCHEC [${c.niveau}] ${c.label} : ${c.detail}`);
  if (ESSAI || flag("--detail")) {
    for (const c of checks.filter((x) => x.ok !== false)) log(`  ${c.ok === null ? "n/v " : "ok  "} ${c.label} : ${c.detail}`);
  }
  for (const e of evenements) log(`  événement : ${e.type} — ${e.label}`);
  if (messages) {
    log(`  texto → ${masquerTelephone(destTexto())} : ${messages.sms ? (ESSAI ? `(essai) « ${messages.sms} »` : envoi?.sms) : "aucun (pas de problème critique)"}`);
    log(`  courriel → ${masquerCourriel(destCourriel())} : ${ESSAI ? `(essai) « ${messages.sujet} »` : envoi?.courriel}`);
    if (ESSAI) console.log(`\n----- courriel (essai) -----\n${messages.texte}\n----------------------------`);
  }
  if (!ECRIRE) log(`  (essai : état et historique non écrits ; --dossier <dossier> pour les écrire ailleurs)`);
}

main().catch((e) => {
  log("Surveillance : erreur inattendue", e);
  process.exitCode = 1;
});
