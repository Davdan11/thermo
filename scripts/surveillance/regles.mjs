/* ==================================================================
   Surveillance du site — règles pures (sans réseau ni disque), pour
   verifier-site.mjs et pour les tests (src/lib/surveillance/__tests__).

   Machine à états des alertes, par vérification :
     OK → ÉCHEC      : alerte « panne » tout de suite (une fois)
     ÉCHEC → ÉCHEC   : rappel toutes les 60 min si le niveau est critique
                       (aucun rappel pour un simple avertissement)
     ÉCHEC → OK      : un message « rétabli »
   Critique = texto + courriel ; avertissement = courriel seulement.

   Fichiers (dossier shared/data sur le VPS) :
     surveillance-etat.json   état courant + résultat détaillé du dernier passage
     surveillance.jsonl       une ligne compacte par passage, 14 jours gardés
   ================================================================== */

export const REPETITION_CRITIQUE_MIN = 60;
export const JOURS_GARDES = 14;
export const SEUIL_REDEMARRAGES = 3;

const TZ = "America/Toronto";

/**
 * @typedef {"critique" | "avertissement"} Niveau
 * @typedef {{ id: string, label: string, groupe: string, niveau: Niveau, ok: boolean | null, detail: string, ms?: number }} Verification
 * @typedef {{ at: string, dureeMs: number, ok: boolean, essai?: boolean, checks: Verification[], infos: Record<string, unknown> }} Resultat
 * @typedef {{ ok: boolean, depuis: string, derniereAlerte: string | null, niveau: Niveau, label: string, detail: string }} EtatVerification
 * @typedef {{ version: 1, maj: string, checks: Record<string, EtatVerification>, pm2Redemarrages: number | null, dernier?: Resultat, demo?: boolean }} Etat
 * @typedef {{ type: "panne" | "rappel" | "retabli", id: string, label: string, groupe?: string, niveau: Niveau, detail: string, depuis: string, dureeMs?: number }} Evenement
 */

/** Passage réussi = aucune vérification critique en échec. */
export function passageOk(checks) {
  return !checks.some((c) => c.ok === false && c.niveau === "critique");
}

/**
 * Compare le passage à l'état précédent. Renvoie le nouvel état et les événements à signaler.
 * @param {Etat | null | undefined} etat
 * @param {Resultat} resultat
 * @param {Date} [maintenant]
 * @returns {{ etat: Etat, evenements: Evenement[] }}
 */
export function evaluer(etat, resultat, maintenant = new Date()) {
  const now = maintenant.getTime();
  const iso = maintenant.toISOString();
  const precedents = etat?.checks ?? {};
  /** @type {Record<string, EtatVerification>} */
  const suivants = {};
  /** @type {Evenement[]} */
  const evenements = [];
  for (const c of resultat.checks) {
    const p = precedents[c.id];
    if (c.ok === null || c.ok === undefined) {
      if (p) suivants[c.id] = p; // non vérifiable ce coup-ci : l'état ne change pas
      continue;
    }
    const base = { id: c.id, label: c.label, groupe: c.groupe, detail: c.detail };
    if (c.ok) {
      if (p && p.ok === false) evenements.push({ ...base, type: "retabli", niveau: p.niveau, depuis: p.depuis, dureeMs: now - Date.parse(p.depuis) });
      suivants[c.id] = { ok: true, depuis: p && p.ok ? p.depuis : iso, derniereAlerte: null, niveau: c.niveau, label: c.label, detail: c.detail };
      continue;
    }
    if (!p || p.ok !== false) {
      evenements.push({ ...base, type: "panne", niveau: c.niveau, depuis: iso });
      suivants[c.id] = { ok: false, depuis: iso, derniereAlerte: iso, niveau: c.niveau, label: c.label, detail: c.detail };
      continue;
    }
    // Toujours en échec.
    let derniereAlerte = p.derniereAlerte;
    if (p.niveau === "avertissement" && c.niveau === "critique") {
      evenements.push({ ...base, type: "panne", niveau: c.niveau, depuis: p.depuis }); // aggravation
      derniereAlerte = iso;
    } else if (c.niveau === "critique" && now - (p.derniereAlerte ? Date.parse(p.derniereAlerte) : 0) >= REPETITION_CRITIQUE_MIN * 60_000) {
      evenements.push({ ...base, type: "rappel", niveau: c.niveau, depuis: p.depuis, dureeMs: now - Date.parse(p.depuis) });
      derniereAlerte = iso;
    }
    suivants[c.id] = { ...p, niveau: c.niveau, label: c.label, detail: c.detail, derniereAlerte };
  }
  const redem = resultat.infos?.pm2Redemarrages;
  return {
    etat: { version: 1, maj: iso, checks: suivants, pm2Redemarrages: typeof redem === "number" ? redem : (etat?.pm2Redemarrages ?? null), dernier: resultat },
    evenements,
  };
}

/* ---------------- Messages (français du Québec, texte simple) ---------------- */

const heureFmt = new Intl.DateTimeFormat("fr-CA", { timeZone: TZ, hour: "numeric", minute: "2-digit", hour12: false });
/** « 3 h 05 » */
export function heureQc(date) {
  const parts = heureFmt.formatToParts(date);
  const h = parts.find((p) => p.type === "hour")?.value ?? "0";
  const m = parts.find((p) => p.type === "minute")?.value ?? "00";
  return `${Number(h)} h ${m}`;
}

/** « 25 min », « 1 h 05 », « 2 j 3 h » */
export function duree(ms) {
  const min = Math.max(0, Math.round(ms / 60_000));
  if (min < 60) return `${min} min`;
  const h = Math.floor(min / 60);
  if (h < 48) return `${h} h ${String(min % 60).padStart(2, "0")}`;
  return `${Math.floor(h / 24)} j ${h % 24} h`;
}

/** Piste de diagnostic : public en panne mais local correct → nginx / certificat / DNS. */
function piste(resultat) {
  const ko = resultat.checks.filter((c) => c.ok === false);
  const publicKo = ko.some((c) => c.groupe === "public");
  const localChecks = resultat.checks.filter((c) => c.groupe === "local" && c.ok !== null);
  const localKo = localChecks.some((c) => c.ok === false);
  if (publicKo && localChecks.length && !localKo) return "Le serveur Next répond en local : voir nginx, le certificat ou le DNS.";
  if (localKo) return "L'application ne répond pas en local : voir « pm2 logs thermo » sur le VPS.";
  return "";
}

/**
 * Texto (seulement si un événement critique) et courriel pour les événements d'un passage.
 * @param {Evenement[]} evenements
 * @param {Resultat} resultat
 * @param {{ maintenant?: Date, site?: string }} [opts]
 */
export function messagesAlerte(evenements, resultat, opts = {}) {
  if (!evenements.length) return null;
  const maintenant = opts.maintenant ?? new Date();
  const site = opts.site ?? "https://thermopompesavendre.ca";
  const pannes = evenements.filter((e) => e.type === "panne");
  const rappels = evenements.filter((e) => e.type === "rappel");
  const retablis = evenements.filter((e) => e.type === "retabli");
  const liste = (evs, avecDetail) => evs.map((e) => (avecDetail ? `${e.label} (${e.detail})` : e.label)).join(" ; ");
  const plusLongue = (evs) => Math.max(...evs.map((e) => e.dureeMs ?? maintenant.getTime() - Date.parse(e.depuis)));

  // Texto : deux problèmes au plus, puis « et N autres » ; courriel : une ligne par problème.
  const resume = (evs, avecDetail) => (evs.length <= 2 ? liste(evs, avecDetail) : `${liste(evs.slice(0, 1), avecDetail)} et ${evs.length - 1} autres vérifications`);
  const puces = (evs, avecDetail) => evs.map((e) => `  • ${e.label}${avecDetail && e.detail ? ` — ${e.detail}` : ""}`);
  const phrases = [];
  const lignes = [];
  if (pannes.length) {
    const titre = pannes.some((e) => e.niveau === "critique") ? "PANNE" : "Avertissement";
    phrases.push(`${titre} : ${resume(pannes, true)}`);
    lignes.push(`${titre} :`, ...puces(pannes, true));
  }
  if (rappels.length) {
    const depuis = duree(plusLongue(rappels));
    phrases.push(`TOUJOURS EN PANNE depuis ${depuis} : ${resume(rappels, true)}`);
    lignes.push(`Toujours en panne depuis ${depuis} :`, ...puces(rappels, true));
  }
  if (retablis.length) {
    const pendant = duree(plusLongue(retablis));
    phrases.push(`RÉTABLI : ${resume(retablis, false)} (problème de ${pendant})`);
    lignes.push(`Rétabli (problème de ${pendant}) :`, ...puces(retablis, false));
  }
  const aide = pannes.length || rappels.length ? piste(resultat) : "";

  const critique = evenements.some((e) => e.niveau === "critique");
  let sms = null;
  if (critique) {
    sms = `TAV.ca ${heureQc(maintenant)} — ${phrases.join(". ")}.${aide ? ` ${aide}` : ""}`;
    if (sms.length > 320) sms = `${sms.slice(0, 317)}…`;
  }

  const premier = (pannes[0] ?? rappels[0] ?? retablis[0]).label;
  const sujet = pannes.some((e) => e.niveau === "critique") || rappels.length
    ? `[TAV.ca] PANNE : ${premier}${pannes.length + rappels.length > 1 ? " et autres" : ""}`
    : pannes.length
      ? `[TAV.ca] Avertissement : ${premier}`
      : `[TAV.ca] Rétabli : ${premier}`;

  const etatLigne = (c) => `  ${c.ok === true ? "OK      " : c.ok === false ? "ÉCHEC   " : "non vérifié"} ${c.label}${c.detail ? ` — ${c.detail}` : ""}`;
  const texte = [
    `Vérification de ${heureQc(maintenant)} (heure de Montréal).`,
    "",
    ...lignes,
    ...(aide ? ["", aide] : []),
    "",
    "Toutes les vérifications :",
    ...resultat.checks.map(etatLigne),
    "",
    `État du site : ${site}/gestion/statistiques#etat-du-site`,
    "Ce message part au changement d'état seulement (panne, rappel aux 60 minutes si critique, retour à la normale).",
  ].join("\n");
  return { sms, sujet, texte, critique };
}

/* ---------------- Journal compact ---------------- */

/** Ligne de surveillance.jsonl pour un passage. */
export function ligneJournal(resultat, evenements, envoi) {
  /** @type {Record<string, unknown>} */
  const ligne = { t: resultat.at, ok: resultat.ok, ko: resultat.checks.filter((c) => c.ok === false).map((c) => c.id) };
  const accueil = resultat.checks.find((c) => c.id === "public-accueil");
  if (accueil?.ms !== undefined) ligne.ms = accueil.ms;
  if (evenements.length) ligne.ev = evenements.map((e) => ({ type: e.type, id: e.id, label: e.label, niveau: e.niveau }));
  if (envoi) ligne.envoi = envoi;
  if (resultat.essai) ligne.essai = true;
  return ligne;
}

/** Lignes des 14 derniers jours (les lignes illisibles sont retirées). */
export function garderRecents(lignes, maintenant = new Date(), jours = JOURS_GARDES) {
  const limite = maintenant.getTime() - jours * 86_400_000;
  return lignes.filter((l) => {
    if (!l.trim()) return false;
    try {
      const t = Date.parse(JSON.parse(l).t);
      return Number.isFinite(t) && t >= limite;
    } catch {
      return false;
    }
  });
}

/* ---------------- Lecture des sorties système ---------------- */

/** `pm2 jlist` (peut commencer par « In-memory PM2 is out-of-date… »). null si illisible. */
export function lirePm2(sortie, nom = "thermo") {
  const debut = sortie.indexOf("[{") >= 0 ? sortie.indexOf("[{") : sortie.indexOf("[]");
  if (debut < 0) return null;
  let liste;
  try {
    liste = JSON.parse(sortie.slice(debut));
  } catch {
    try {
      liste = JSON.parse(sortie.slice(debut, sortie.lastIndexOf("]") + 1));
    } catch {
      return null;
    }
  }
  if (!Array.isArray(liste)) return null;
  const p = liste.find((x) => x && x.name === nom);
  if (!p) return { statut: "absent", redemarrages: null, depuis: null };
  const env = p.pm2_env ?? {};
  return { statut: String(env.status ?? "inconnu"), redemarrages: Number(env.restart_time ?? 0), depuis: env.pm_uptime ? new Date(env.pm_uptime).toISOString() : null };
}

/** Saut du compteur de redémarrages pm2 entre deux passages (un déploiement en ajoute 1). */
export function verifierRedemarrages(avant, apres, seuil = SEUIL_REDEMARRAGES) {
  if (typeof apres !== "number") return { ok: null, detail: "compteur illisible" };
  if (typeof avant !== "number" || apres < avant) return { ok: true, detail: `${apres} au total` };
  const saut = apres - avant;
  if (saut >= seuil) return { ok: false, detail: `${saut} redémarrages depuis la vérification précédente (plantages en boucle ?)` };
  return { ok: true, detail: saut ? `+${saut} (déploiement ou redémarrage), ${apres} au total` : `${apres} au total` };
}

const ECHECS_NUIT = /TESTS EN ÉCHEC|Déploiement en échec|Clonage impossible|GitHub injoignable|Push GitHub refusé|régénération en échec|génération en échec|passage en échec/;

/**
 * /var/log/thermo-nightly-bot.log : dernier passage du robot de nuit.
 * @param {string} texte
 * @param {{ mtimeMs?: number, maintenant?: Date }} [opts]
 */
export function analyserRobotNuit(texte, opts = {}) {
  const lignes = texte.split("\n");
  let debut = -1;
  for (let i = lignes.length - 1; i >= 0; i--) {
    if (/Robot de nuit : début/.test(lignes[i])) {
      debut = i;
      break;
    }
  }
  if (debut < 0) return null;
  const bloc = lignes.slice(debut).filter((l) => l.trim());
  const quand = /^\[(\d{4}-\d{2}-\d{2}) (\d{2}):(\d{2})/.exec(bloc[0]);
  const date = quand ? `${quand[1]} à ${Number(quand[2])} h ${quand[3]}` : "date inconnue";
  const echecs = bloc.filter((l) => ECHECS_NUIT.test(l)).map((l) => l.replace(/^\[[^\]]+\]\s*/, "").trim());
  const maintenant = opts.maintenant ?? new Date();
  if (opts.mtimeMs && maintenant.getTime() - opts.mtimeMs > 36 * 3_600_000) {
    return { ok: false, detail: `aucun passage depuis ${duree(maintenant.getTime() - opts.mtimeMs)} (tâche cron arrêtée ?)` };
  }
  if (echecs.length) return { ok: false, detail: `passage du ${date} : ${[...new Set(echecs)].join(" ; ").slice(0, 240)}` };
  const fin = bloc[bloc.length - 1]?.replace(/^\[[^\]]+\]\s*/, "") ?? "";
  return { ok: true, detail: `passage du ${date} : ${fin.slice(0, 120)}` };
}

/** /var/log/thermo-relances.log : code de sortie du dernier passage des rappels. */
export function analyserRelances(texte) {
  const fins = [...texte.matchAll(/^\[(\d{4}-\d{2}-\d{2})[^\]]*\] Rappels : fin \(code (\d+)\)/gm)];
  const erreur = /Rappels : erreur/.test(texte.split("Rappels : début").pop() ?? "");
  if (!fins.length) return erreur ? { ok: false, detail: "erreur au dernier passage" } : null;
  const [, date, code] = fins[fins.length - 1];
  if (code === "0" && !erreur) return { ok: true, detail: `passage du ${date} sans erreur` };
  return { ok: false, detail: `passage du ${date} : ${code === "2" ? "des envois ont échoué" : `erreur (code ${code})`}` };
}

/**
 * Déploiement : la version la plus récente de releases/ doit être celle en service (lien current).
 * @param {{ versions: Array<{ nom: string, mtimeMs: number }>, courante: string | null, maintenant?: Date }} o
 */
export function analyserDeploiement(o) {
  const maintenant = (o.maintenant ?? new Date()).getTime();
  if (!o.courante) return { ok: false, detail: "lien « current » introuvable" };
  const triees = [...o.versions].sort((a, b) => a.nom.localeCompare(b.nom));
  const recente = triees[triees.length - 1];
  if (!recente || recente.nom === o.courante) return { ok: true, detail: `version ${o.courante} en service` };
  if (maintenant - recente.mtimeMs < 30 * 60_000) return { ok: true, detail: `déploiement ${recente.nom} en cours` };
  return { ok: false, detail: `la version ${recente.nom} n'a pas été activée (${o.courante} en service) : déploiement en échec ou retour arrière manuel` };
}

/* ---------------- Masquage pour les journaux et le rapport ---------------- */

export function masquerTelephone(n) {
  const d = String(n ?? "").replace(/\D/g, "");
  return d.length >= 4 ? `***-***-${d.slice(-4)}` : "(aucun)";
}

export function masquerCourriel(e) {
  const m = /^([^@\s]+)@(.+)$/.exec(String(e ?? "").trim());
  return m ? `${m[1][0]}***@${m[2]}` : "(aucun)";
}
