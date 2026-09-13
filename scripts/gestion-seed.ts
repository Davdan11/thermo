/* ==================================================================
   Données de DÉMONSTRATION de l'outil de gestion (/gestion) —
   développement seulement, pour vérifier l'affichage.

   Usage (racine du projet) :
     npx tsx scripts/gestion-seed.ts                       crée 8 installateurs, 7 jobs, 2 candidatures
     npx tsx scripts/gestion-seed.ts --session <fichier>   écrit aussi un cookie de session (captures d'écran)
     npx tsx scripts/gestion-seed.ts --jetons <fichier>    écrit les liens /job de deux offres (JSON)
     npx tsx scripts/gestion-seed.ts --lien <fichier>      écrit un lien de connexion à usage unique
     npx tsx scripts/gestion-seed.ts --vider               retire les données de démonstration

   Refuse de tourner si NODE_ENV=production, si le dossier des données
   est celui du VPS (/var/www/…) ou si gestion.json contient déjà des
   données qui ne viennent pas de ce script.
   ================================================================== */
import { config } from "dotenv";
import { promises as fs } from "node:fs";
import { randomBytes } from "node:crypto";

config({ path: [".env.local"], quiet: true });

function fail(msg: string): never {
  console.error(`gestion-seed : ${msg}`);
  process.exit(1);
}

const arg = (name: string) => {
  const i = process.argv.indexOf(name);
  return i >= 0 ? process.argv[i + 1] : undefined;
};

async function main() {
  if (process.env.NODE_ENV === "production") fail("refusé : NODE_ENV=production.");
  const store = await import("../src/lib/gestion/store");
  const dir = store.gestionDataDir();
  if (dir.startsWith("/var/www") || /[\\/]shared[\\/]/.test(dir)) fail(`refusé : ${dir} ressemble au dossier de production.`);

  const current = await store.readGestion();
  const isSeed = current.seed === true || (current.installers.length === 0 && current.jobs.length === 0);

  if (process.argv.includes("--vider")) {
    if (!isSeed) fail("gestion.json contient des données réelles : rien n'est supprimé.");
    await fs.rm(store.gestionFile(), { force: true });
    await store.mutateCandidatures((d) => {
      const before = d.candidatures.length;
      d.candidatures = d.candidatures.filter((c) => !c.id.startsWith("c_demo"));
      return { result: undefined, changed: d.candidatures.length !== before };
    });
    console.log("Données de démonstration retirées.");
    return;
  }
  if (!isSeed) fail("gestion.json contient des données réelles : rien n'est écrit.");

  const { resolvePostalOffline } = await import("../src/lib/gestion/geo");
  const offers = await import("../src/lib/gestion/offers");
  const { hashToken, newToken, createMagicLink } = await import("../src/lib/gestion/auth/magic-link");
  const { registry } = await import("../src/lib/data/registry");
  type T = typeof import("../src/lib/gestion/types");
  type Installer = import("../src/lib/gestion/types").Installer;
  type Job = import("../src/lib/gestion/types").Job;
  void (null as unknown as T);

  const now = new Date();
  const ago = (h: number) => new Date(now.getTime() - h * 3_600_000);
  const day = (d: number) => new Date(now.getTime() + d * 86_400_000).toISOString().slice(0, 10);
  const dayText = (d: number) => new Intl.DateTimeFormat("fr-CA", { day: "numeric", month: "long", timeZone: "UTC" }).format(new Date(`${day(d)}T12:00:00Z`));
  const id = (p: string) => `${p}_${randomBytes(8).toString("base64url")}`;
  const OWNER = "proprietaire@exemple.ca";

  const geo = (postal: string) => {
    const r = resolvePostalOffline(postal);
    if (!r) throw new Error(`code postal inconnu : ${postal}`);
    return r;
  };

  const I = (company: string, contactName: string, postal: string, radiusKm: number, brands: string[], systemTypes: Installer["systemTypes"], extra: Partial<Installer> = {}): Installer => {
    const r = geo(postal);
    return {
      id: id("i"),
      company,
      contactName,
      phone: "514 555-0" + String(Math.floor(100 + Math.random() * 899)),
      email: `${company.normalize("NFD").replace(/[^\w]/g, "").toLowerCase()}@exemple.ca`,
      rbq: `${Math.floor(1000 + Math.random() * 8999)}-${Math.floor(1000 + Math.random() * 8999)}-01`,
      basePostalCode: r.postalCode,
      base: { lat: r.lat, lon: r.lon, city: r.city, precision: r.precision },
      radiusKm,
      extraRegions: [],
      brands,
      systemTypes,
      active: true,
      maxOpenJobs: null,
      notes: "",
      createdAt: ago(24 * 40).toISOString(),
      updatedAt: ago(24 * 3).toISOString(),
      ...extra,
    };
  };

  const installers: Installer[] = [
    I("Climatisation Rive-Nord", "Martin Lefebvre", "H7N 1A1", 60, ["daikin", "mitsubishi-electric", "fujitsu"], ["wall-single", "multi-zone", "central-ducted"], { maxOpenJobs: 4 }),
    I("Thermo Expert Montréal", "Karim Haddad", "H2X 1Y4", 40, ["daikin", "lg", "samsung"], ["wall-single", "multi-zone"]),
    I("Confort Rive-Sud", "Isabelle Roy", "J4K 1A1", 50, ["daikin", "gree", "midea", "moovair"], []),
    I("Clim Laurentides", "Éric Paquette", "J7Y 1A1", 70, ["fujitsu", "mitsubishi-electric", "daikin"], ["wall-single", "central-ducted"]),
    I("Chauffage Québec Pro", "Sylvie Bédard", "G1K 3A1", 60, ["daikin", "fujitsu"], [], { extraRegions: ["12"] }),
    I("Mécanique Estrie", "Patrick Côté", "J1H 1A1", 80, ["daikin"], ["central-ducted"]),
    I("Ventilation Lanaudière", "Mélanie Gauthier", "J5Y 1A1", 45, ["daikin", "lennox", "carrier"], ["central-ducted", "hybrid"], { active: false, notes: "En pause jusqu’en octobre (vacances)." }),
    I("Frigo-Therm Montérégie", "Daniel Morin", "J2S 1A1", 60, ["daikin", "bosch"], ["central-ducted", "hybrid"], { extraRegions: ["06"] }),
  ];
  const byName = (n: string) => installers.find((i) => i.company === n)!;

  const central = registry.models.find((m) => m.brandId === "daikin" && m.systemType === "central-ducted" && m.isActive2026);
  const brandName = (bid: string) => registry.brandById.get(bid)?.name ?? bid;

  let number = 0;
  const J = (first: string, last: string, postal: string, p: Partial<Job>): Job => {
    const r = geo(postal);
    const created = ago(24 * (8 - number));
    const job: Job = {
      id: id("j"),
      number: ++number,
      createdAt: created.toISOString(),
      updatedAt: created.toISOString(),
      client: { firstName: first, lastName: last, phone: `514 555-${String(1000 + number * 111)}`, email: `${first.toLowerCase()}.${last.toLowerCase()}@exemple.ca`.normalize("NFD").replace(/[̀-ͯ]/g, ""), address: `${100 + number * 17} rue des Érables`, city: r.city, postalCode: r.postalCode },
      geo: { lat: r.lat, lon: r.lon, city: r.city, precision: r.precision },
      region: r.region,
      regionGuess: r.region,
      brand: "daikin",
      systemType: "wall-single",
      modelSlug: null,
      modelLabel: null,
      capacity: "",
      desiredDate: null,
      desiredWindow: "",
      installerNotes: "",
      internalNotes: "",
      status: "nouveau",
      assignedInstallerId: null,
      scheduledFor: null,
      offers: [],
      audit: [],
      ...p,
    };
    offers.audit(job, OWNER, "job créé", created);
    return job;
  };

  const tokens: Record<string, string> = {};
  const send = (job: Job, inst: Installer, hoursAgo: number, hours = 48) => {
    const token = newToken();
    const km = job.geo && inst.base ? Math.round(Math.hypot((job.geo.lat - inst.base.lat) * 111, (job.geo.lon - inst.base.lon) * 78)) : null;
    const o = offers.addOffer(job, { offerId: id("o"), installerId: inst.id, tokenHash: hashToken(token), distanceKm: km, hours, by: OWNER, installerLabel: inst.company }, ago(hoursAgo));
    o.channels = { email: "envoye", sms: "non-configure" };
    return { o, token };
  };

  const jobs: Job[] = [];

  // 1. À offrir, après un refus.
  const j1 = J("Marie", "Tremblay", "H4B 1A1", {
    systemType: "central-ducted",
    modelSlug: central?.slug ?? null,
    modelLabel: central ? `${brandName(central.brandId)} ${central.name}` : null,
    capacity: "36 000 BTU",
    desiredDate: day(10),
    installerNotes: "Maison de 1985, conduits existants au sous-sol. Stationnement dans l’entrée.",
    internalNotes: "Référée par un client de Laval.",
  });
  const r1 = send(j1, byName("Thermo Expert Montréal"), 30);
  offers.declineOffer(j1, r1.o.id, "Nous ne faisons pas les centrales ce mois-ci.", ago(20));
  jobs.push(j1);

  // 2. Offert à deux installateurs, en attente.
  const j2 = J("Jean", "Gagnon", "H7A 1A1", { brand: "mitsubishi-electric", systemType: "wall-single", capacity: "12 000 BTU", desiredWindow: "semaine du " + dayText(14), installerNotes: "Unité murale au salon, condenseur sur le balcon arrière (2e étage)." });
  tokens.pending = send(j2, byName("Climatisation Rive-Nord"), 5).token;
  send(j2, byName("Clim Laurentides"), 5);
  jobs.push(j2);

  // 3. Attribué (le premier a accepté, l'autre offre a été retirée).
  const j3 = J("Sophie", "Roy", "J4K 1A1", { brand: "gree", systemType: "multi-zone", capacity: "3 zones, 27 000 BTU", desiredDate: day(6) });
  const a3 = send(j3, byName("Confort Rive-Sud"), 50);
  send(j3, byName("Frigo-Therm Montérégie"), 50);
  offers.acceptOffer(j3, a3.o.id, ago(46));
  tokens.accepted = a3.token;
  jobs.push(j3);

  // 4. Planifié.
  const j4 = J("Luc", "Bouchard", "J4W 1A1", { desiredDate: day(3) });
  const a4 = send(j4, byName("Thermo Expert Montréal"), 90);
  offers.acceptOffer(j4, a4.o.id, ago(80));
  offers.applyStatusAction(j4, "planifier", OWNER, ago(70), { scheduledFor: day(3) });
  jobs.push(j4);

  // 5. Terminé.
  const j5 = J("Nathalie", "Côté", "J7B 1A1", { brand: "fujitsu", desiredDate: day(-5) });
  const a5 = send(j5, byName("Clim Laurentides"), 24 * 12);
  offers.acceptOffer(j5, a5.o.id, ago(24 * 11));
  offers.applyStatusAction(j5, "terminer", OWNER, ago(24 * 4));
  jobs.push(j5);

  // 6. Annulé.
  const j6 = J("Pierre", "Lavoie", "G1K 3A1", { desiredWindow: "avant l’hiver" });
  send(j6, byName("Chauffage Québec Pro"), 24 * 6);
  offers.applyStatusAction(j6, "annuler", OWNER, ago(24 * 5));
  jobs.push(j6);

  // 7. Tout neuf, aucune offre.
  jobs.push(J("Julie", "Morin", "J6W 1A1", { systemType: "central-ducted", capacity: "2,5 tonnes", desiredDate: day(12), installerNotes: "Remplacement d’une fournaise au mazout ; thermopompe centrale avec appoint électrique." }));

  await store.mutateGestion((d) => {
    d.installers = installers;
    d.jobs = jobs;
    d.seed = true;
    return { result: undefined, changed: true };
  });

  await store.mutateCandidatures((d) => {
    d.candidatures = d.candidatures.filter((c) => !c.id.startsWith("c_demo"));
    d.candidatures.push(
      { id: "c_demo" + randomBytes(5).toString("hex"), receivedAt: ago(26).toISOString(), company: "Réfrigération Boréale inc.", rbq: "5678-1234-01", contact: "Julie Gagnon", phone: "450 555-0199", email: "julie@boreale.exemple.ca", brandsText: "Daikin, Mitsubishi et LG", regionText: "Rive-Sud, Montérégie", volume: "50 à 150", status: "nouvelle" },
      { id: "c_demo" + randomBytes(5).toString("hex"), receivedAt: ago(24 * 4).toISOString(), company: "Clim Outaouais", rbq: "8123-4455-01", contact: "Marc-André Lalonde", phone: "819 555-0142", email: "ma@climoutaouais.exemple.ca", brandsText: "Fujitsu / Gree", regionText: "Gatineau", volume: "Moins de 50", status: "nouvelle" },
    );
    return { result: undefined, changed: true };
  });

  console.log(`Démonstration écrite dans ${dir} : ${installers.length} installateurs, ${jobs.length} jobs, 2 candidatures.`);
  console.log(`Job à offrir (après un refus) : /gestion/jobs/${j1.id}`);

  const base = process.env.GESTION_SEED_BASE || "http://localhost:3001";
  const jetons = arg("--jetons");
  if (jetons) await fs.writeFile(jetons, JSON.stringify({ job: `/gestion/jobs/${j1.id}`, installer: `/gestion/installateurs/${byName("Climatisation Rive-Nord").id}`, pending: `${base}/job/${tokens.pending}`, accepted: `${base}/job/${tokens.accepted}` }, null, 2));

  const { adminEmails } = await import("../src/lib/gestion/auth/admins");
  const email = adminEmails()[0];
  const sessionFile = arg("--session");
  if (sessionFile) {
    if (!email) fail("aucune adresse autorisée (ADMIN_EMAILS ou NOTIFICATION_EMAIL dans .env.local).");
    const { getSessionSecret } = await import("../src/lib/gestion/auth/secret");
    const { createSessionToken } = await import("../src/lib/gestion/auth/session-token");
    await fs.writeFile(sessionFile, createSessionToken(email, await getSessionSecret()).token);
    console.log(`Cookie de session écrit dans ${sessionFile}.`);
  }
  const lienFile = arg("--lien");
  if (lienFile) {
    if (!email) fail("aucune adresse autorisée (ADMIN_EMAILS ou NOTIFICATION_EMAIL dans .env.local).");
    await fs.writeFile(lienFile, `${base}/gestion/connexion/verifier?jeton=${await createMagicLink(email)}`);
    console.log(`Lien de connexion écrit dans ${lienFile}.`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
