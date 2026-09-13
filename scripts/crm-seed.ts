/* ==================================================================
   Données de DÉMONSTRATION du CRM (/gestion) — développement
   seulement, pour vérifier l'affichage (captures d'écran).

   Usage (racine du projet) :
     npx tsx scripts/crm-seed.ts                       écrit les données fictives
     npx tsx scripts/crm-seed.ts --session <fichier>   écrit aussi un cookie de session
     npx tsx scripts/crm-seed.ts --vider               retire les données de démonstration

   Écrit, seulement si absents ou déjà marqués « démonstration » :
     leads/demo-crm.jsonl   demandes fictives (lu seulement hors production)
     soumissions.json       soumissions fictives (seed: true)
     textos.json            conversations fictives (seed: true)
     crm.json               notes, tâches, étapes (seed: true)
   et ajoute des jobs fictifs à gestion.json s'il vient de gestion-seed
   (seed: true). Refuse de tourner si NODE_ENV=production, si le
   dossier ressemble à celui du VPS, ou si un fichier contient des
   données réelles. Numéros 555-01xx : réservés à la fiction.
   ================================================================== */
import { config } from "dotenv";
import { promises as fs } from "node:fs";
import path from "node:path";

config({ path: [".env.local"], quiet: true });

function fail(msg: string): never {
  console.error(`crm-seed : ${msg}`);
  process.exit(1);
}
const arg = (name: string) => {
  const i = process.argv.indexOf(name);
  return i >= 0 ? process.argv[i + 1] : undefined;
};
const exists = (f: string) => fs.access(f).then(() => true, () => false);

async function main() {
  if (process.env.NODE_ENV === "production") fail("refusé : NODE_ENV=production.");
  const gstore = await import("../src/lib/gestion/store");
  const dir = gstore.gestionDataDir();
  if (dir.startsWith("/var/www") || /[\\/]shared[\\/]/.test(dir)) fail(`refusé : ${dir} ressemble au dossier de production.`);
  const { journalDir } = await import("../src/lib/crm/lead-journal");
  const sstore = await import("../src/lib/soumissions/store");
  const tstore = await import("../src/lib/textos/store");
  const cstore = await import("../src/lib/gestion/crm/store");
  const demoJournal = path.join(journalDir(), "demo-crm.jsonl");

  const soum = await sstore.readSoumissions();
  const textos = await tstore.readTextos();
  const crm = await cstore.readCrm();
  const gestion = await gstore.readGestion();
  const soumIsSeed = !soum.quotes.length || soum.quotes.every((q) => q.seed);
  const textosIsSeed = textos.seed === true || !Object.keys(textos.conversations).length;
  const crmIsSeed = crm.seed === true || (!Object.keys(crm.clients).length && !crm.tasks.length && !crm.manualContacts.length);

  if (process.argv.includes("--vider")) {
    if (soumIsSeed) await fs.rm(sstore.soumissionsFile(), { force: true });
    if (textosIsSeed) await fs.rm(tstore.textosFile(), { force: true });
    if (crmIsSeed) await fs.rm(cstore.crmFile(), { force: true });
    await fs.rm(demoJournal, { force: true });
    if (gestion.seed) {
      await gstore.mutateGestion((d) => {
        const before = d.jobs.length;
        d.jobs = d.jobs.filter((j) => !j.id.startsWith("j_crmdemo"));
        return { result: undefined, changed: d.jobs.length !== before };
      });
    }
    console.log("Données de démonstration du CRM retirées.");
    return;
  }
  if (!soumIsSeed) fail("soumissions.json contient de vraies soumissions : rien n'est écrit.");
  if (!textosIsSeed) fail("textos.json contient de vraies conversations : rien n'est écrit.");
  if (!crmIsSeed) fail("crm.json contient des données réelles : rien n'est écrit.");

  const { defaultSettings, emptyContent } = await import("../src/lib/soumissions/defaults");
  const { acceptVersion, addQuestion, createQuote, freezeForSend, recordView, refuseVersion } = await import("../src/lib/soumissions/quote");
  const { todayIn, addDays } = await import("../src/lib/soumissions/dates");
  const { hashKey } = await import("../src/lib/gestion/crm/identity");
  type Quote = import("../src/lib/soumissions/types").Quote;
  type Content = import("../src/lib/soumissions/types").QuoteContent;
  type Job = import("../src/lib/gestion/types").Job;
  type Conversation = import("../src/lib/textos/types").Conversation;
  type Msg = import("../src/lib/textos/types").TextoMessage;

  const NOW = Date.now();
  const at = (minAgo: number) => new Date(NOW - minAgo * 60_000);
  const h = (n: number) => n * 60;
  const d = (n: number) => n * 1440;
  const today = todayIn(new Date(NOW));
  const OWNER = "demo@exemple.ca";

  /* ---------------- Personnes fictives ---------------- */
  const P = {
    julie: { firstName: "Julie", lastName: "Tremblay", phone: "514 555-0142", email: "julie.tremblay@exemple.ca", city: "Laval", postalCode: "H7N 1A1", address: "112, rue des Érables (démo)" },
    marc: { firstName: "Marc", lastName: "Gagnon", phone: "450 555-0177", email: "marc.gagnon@exemple.ca", city: "Longueuil", postalCode: "J4K 1A1", address: "48, boulevard Démo" },
    sophie: { firstName: "Sophie", lastName: "Côté", phone: "514 555-0188", email: "sophie.cote@exemple.ca", city: "Montréal", postalCode: "H2X 1Y4", address: "3300, avenue Fictive" },
    luc: { firstName: "Luc", lastName: "Roy", phone: "438 555-0123", email: "luc.roy@exemple.ca", city: "Brossard", postalCode: "J4W 2T5", address: "9, rue Exemple" },
    nathalie: { firstName: "Nathalie", lastName: "Bélanger", phone: "450 555-0161", email: "nathalie.belanger@exemple.ca", city: "Boucherville", postalCode: "J4B 1A1", address: "27, rue de la Démo" },
    eric: { firstName: "Éric", lastName: "Lavoie", phone: "514 555-0155", email: "eric.lavoie@exemple.ca", city: "Repentigny", postalCode: "J6A 1A1", address: "501, chemin Fictif" },
    chantal: { firstName: "Chantal", lastName: "Fortin", phone: "450 555-0133", email: "chantal.fortin@exemple.ca", city: "Saint-Jérôme", postalCode: "J7Y 1A1", address: "14, rue Modèle" },
    martin: { firstName: "Martin", lastName: "Pelletier", phone: "514 555-0119", email: "martin.pelletier@exemple.ca", city: "Montréal", postalCode: "H1M 2A1", address: "2020, rue Exemple" },
    genevieve: { firstName: "Geneviève", lastName: "Morin", phone: "450 555-0172", email: "genevieve.morin@exemple.ca", city: "Laval", postalCode: "H7N 1A1", address: "61, place Démo" },
    patrick: { firstName: "Patrick", lastName: "Ouellet", phone: "438 555-0148", email: "patrick.ouellet@exemple.ca", city: "Terrebonne", postalCode: "J6W 0A0", address: "8, montée Fictive" },
    karine: { firstName: "Karine", lastName: "Dubé", phone: "514 555-0137", email: "karine.dube@exemple.ca", city: "Montréal", postalCode: "H2X 1Y4", address: "77, rue Démo" },
  };
  type Person = (typeof P)[keyof typeof P];

  /* ---------------- Journal (demandes) ---------------- */
  let n = 0;
  const lines: string[] = [];
  const CANAUX: Array<Record<string, unknown>> = [
    { channel: "google-naturel", refHost: "google.com", landing: "/thermopompes/thermopompe-murale" },
    { channel: "google-ads", gclid: true, utm: { utm_source: "google", utm_medium: "cpc", utm_campaign: "thermopompe-murale" }, landing: "/soumission" },
    { channel: "fiche-google", refHost: "google.com", utm: { utm_source: "gbp", utm_medium: "organic" }, landing: "/" },
    { channel: "facebook-instagram", refHost: "l.facebook.com", fbclid: true, landing: "/subventions/logisvert" },
    { channel: "ia", refHost: "chatgpt.com", landing: "/trouver-ma-thermopompe" },
    { channel: "direct", landing: "/" },
  ];
  const lead = (kind: string, minAgo: number, body: Record<string, unknown>, channel?: number, dealId?: number) => {
    const id = `demo-crm-${String(++n).padStart(4, "0")}`;
    const t = at(minAgo).toISOString();
    lines.push(JSON.stringify({ id, at: t, demo: true, kind, lead: body, ...(channel !== undefined ? { attribution: CANAUX[channel] } : {}) }));
    if (dealId) lines.push(JSON.stringify({ id, at: new Date(at(minAgo).getTime() + 2000).toISOString(), demo: true, kind, lead: {}, outcome: { pipedrive: "ok", dealId } }));
    return id;
  };
  const form = (p: Person) => ({ firstName: p.firstName, lastName: p.lastName, email: p.email, phone: p.phone, postalCode: p.postalCode.replace(" ", ""), municipality: p.city });

  lead("soumission", d(34), form(P.julie), 1, 91001);
  lead("thermomatch", d(21), { firstName: P.marc.firstName, email: P.marc.email, phone: P.marc.phone, postalCode: P.marc.postalCode.replace(" ", "") }, 0);
  lead("soumission", d(9), form(P.sophie), 0);
  lead("contact", d(8), { ...form(P.luc), subject: "Thermopompe centrale", message: "Bonjour, j’aimerais une soumission pour une centrale." }, 2);
  lead("rendez-vous", d(7), { ...form(P.luc), date: addDays(today, -6), window: "matin", when: "mardi matin" }, 2);
  lead("soumission", d(26), form(P.nathalie), 3);
  lead("appel-enregistre", d(24), { phone: "+1" + P.nathalie.phone.replace(/\D/g, ""), duration: 312 });
  lead("soumission", d(40), form(P.eric), 4);
  lead("soumission", d(75), form(P.chantal), 0, 91002);
  lead("soumission", d(110), form(P.martin), 1);
  lead("thermomatch", d(5), { firstName: P.genevieve.firstName, email: P.genevieve.email, phone: P.genevieve.phone, postalCode: "H7N1A1" }, 4);
  lead("soumission", d(30), form(P.patrick), 5);
  lead("soumission", d(12), form(P.karine), 1);
  // Aujourd'hui et hier : ce qui ne doit pas être manqué.
  lead("soumission", 42, { firstName: "Alexandre", lastName: "Girard", email: "alexandre.girard@exemple.ca", phone: "514 555-0104", postalCode: "H2X1Y4", municipality: "Montréal" }, 1);
  lead("appel-manque", 25, { phone: "+14505550191", dept: "ventes" });
  lead("message-vocal", h(3), { phone: "+14385550166", dept: "ventes", transcription: "Bonjour, c’est pour une thermopompe murale, rappelez-moi s’il vous plaît. (démonstration)" });
  lead("contact", h(26), { firstName: "Stéphane", lastName: "Leblanc", email: "stephane.leblanc@exemple.ca", phone: "450 555-0115", subject: "Question LogisVert", message: "Est-ce que ma thermopompe est admissible ? (démonstration)" }, 2);
  lead("thermoscan", h(30), { firstName: "Mélanie", email: "melanie.caron@exemple.ca", phone: "514 555-0129", postalCode: "H1M2A1" }, 0);
  // Volume des 90 derniers jours (demandes sans suite, pour les sources et la tendance).
  const PRENOMS = ["Isabelle", "François", "Annie", "Sylvain", "Caroline", "Mathieu", "Valérie", "Simon", "Josée", "Benoît", "Émilie", "Guillaume", "Lucie", "Kevin", "Marie-Ève", "David"];
  const VILLES: Array<[string, string]> = [["Laval", "H7N1A1"], ["Montréal", "H2X1Y4"], ["Longueuil", "J4K1A1"], ["Brossard", "J4W2T5"], ["Boucherville", "J4B1A1"], ["Terrebonne", "J6W0A0"], ["Repentigny", "J6A1A1"], ["Saint-Jérôme", "J7Y1A1"]];
  const KINDS = ["soumission", "soumission", "thermomatch", "soumission", "contact", "thermoscan"];
  // Les plus anciennes ont été traitées (appel noté, parfois perdues) : une journée réaliste, pas une pile en retard.
  const LOSSES = ["Projet reporté au printemps", "A choisi un concurrent", "Trop cher pour le budget"];
  const handled: Array<{ email: string; at: Date; lost: string | null }> = [];
  for (let i = 0; i < 44; i++) {
    const [city, postal] = VILLES[(i * 5) % VILLES.length];
    const first = PRENOMS[i % PRENOMS.length];
    const minAgo = d(2 + ((i * 37) % 86)) + h(i % 9);
    const phone = `514 555-01${String(50 + (i % 45)).padStart(2, "0")}`;
    if (i % 7 === 3) {
      const p = `+1${phone.replace(/\D/g, "").slice(0, 7)}${String(i).padStart(3, "0")}`;
      lead("appel-manque", minAgo, { phone: p });
      if (minAgo > d(3)) lead("appel-enregistre", minAgo - 90, { phone: p, duration: 180 + i });
    } else {
      const email = `${first.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")}.demo${i}@exemple.ca`;
      lead(KINDS[i % KINDS.length], minAgo, { firstName: first, email, postalCode: postal, municipality: city }, [0, 0, 1, 2, 3, 4, 5, 1, 0][i % 9]);
      if (minAgo > d(4)) handled.push({ email, at: at(minAgo - h(20)), lost: i % 4 === 0 ? LOSSES[i % 3] : null });
    }
  }

  /* ---------------- Soumissions ---------------- */
  const settings = defaultSettings();
  settings.company = { ...settings.company, legalName: "Entreprise Exemple inc. (fictive)", tradeName: "Exemple Climat", phone: "514 555-0100", email: "bonjour@exemple.ca", city: "Montréal" };
  const data = { version: 1 as const, counters: {} as Record<string, number>, quotes: [] as Quote[], photos: [] };
  const machine = (price: number) => ({
    modelSlug: "",
    brandId: "fujitsu",
    brand: "Fujitsu",
    name: `Série démo ${price > 800_000 ? "24" : "12"} (exemple)`,
    outdoorModel: "DEMO-12",
    systemType: "wall-single",
    systemTypeLabel: "Murale simple zone",
    imageUrl: null,
    refrigerant: "R-32",
    noiseOutdoorDbA: null,
    noiseIndoorMinDbA: null,
    noiseIndoorMaxDbA: null,
    pairing: { ahri: "000000000", indoorDescription: "Exemple", logisVertCents: 150_000, h5Btu: 12_000, h17Btu: 14_000, nominalBtu: 12_000, coolingBtu: 12_000, seer2: 20, hspf2: 10, cop5: 1.9, coldClimate: true },
    offList: false,
    offListIndoor: "",
    catalogWarranties: [],
    showCatalogWarranties: false,
    warrantyText: "Exemple de garantie.",
    explanation: "",
    listDate: null,
  });
  const content = (p: Person, priceCents: number, over: Partial<Content> = {}): Content => {
    const c = emptyContent(settings, today);
    c.client = { firstName: p.firstName, lastName: p.lastName, email: p.email, phone: p.phone, address: p.address, city: p.city, postalCode: p.postalCode };
    c.machine = machine(priceCents);
    c.lines = [{ id: `l_demo${priceCents}`, kind: "forfait", label: "Installation complète (exemple)", description: "", unit: "forfait", quantity: 1, unitPriceCents: priceCents, optional: false, selectedByDefault: false, discount: null, catalogRef: null, unitRef: null }];
    c.logisvert = { mode: "client" };
    return { ...c, ...over };
  };
  const quote = (p: Person, priceCents: number, o: { created: number; sent?: number; viewed?: number; accepted?: number; refused?: number; reason?: string; question?: number; validUntil?: string; mode?: "client"; dealId?: number; schedule?: string }) => {
    const c = content(p, priceCents);
    if (o.validUntil) c.validUntil = o.validUntil;
    if (o.mode) c.logisvert = { mode: o.mode };
    if (o.schedule) c.schedule = { ...c.schedule, mode: "date", date: o.schedule };
    const q = createQuote(data, c, OWNER, at(o.created), { seed: true });
    const v = q.versions[0];
    if (o.sent !== undefined) {
      if (o.validUntil && o.validUntil < todayIn(at(o.sent))) v.content.validUntil = o.validUntil;
      freezeForSend(q, v, settings, [], at(o.sent));
      v.sends.push({ at: at(o.sent).toISOString(), by: OWNER, kind: "envoi", email: "envoye", sms: null });
    }
    if (o.viewed !== undefined) recordView(v, at(o.viewed));
    if (o.question !== undefined) addQuestion(v, "Est-ce que le support au sol est compris dans le prix ? (démonstration)", "203.0.113.1", "démo", at(o.question));
    if (o.accepted !== undefined) acceptVersion(q, v, { selection: [], typedName: `${p.firstName} ${p.lastName}`, termsAccepted: true, ip: "203.0.113.1", userAgent: "démo", now: at(o.accepted) });
    if (o.refused !== undefined) refuseVersion(v, o.reason ?? "", "203.0.113.1", "démo", at(o.refused));
    if (o.dealId) q.pipedrive.dealId = o.dealId;
    return q;
  };
  quote(P.julie, 685_000, { created: d(31), sent: d(31), viewed: d(30), accepted: d(24), dealId: 91001, schedule: today });
  quote(P.marc, 742_000, { created: d(9), sent: d(9), viewed: d(5) });
  quote(P.sophie, 598_000, { created: d(4), sent: d(3) });
  quote(P.luc, 1_290_000, { created: d(5), sent: d(5), viewed: d(4), question: h(3) });
  quote(P.nathalie, 815_000, { created: d(23), sent: d(23), viewed: d(20), validUntil: addDays(today, 2) });
  quote(P.eric, 640_000, { created: d(38), sent: d(38), viewed: d(36), refused: d(30), reason: "Budget trop serré cette année" });
  quote(P.chantal, 910_000, { created: d(72), sent: d(72), viewed: d(71), accepted: d(66), mode: "client", dealId: 91002 });
  quote(P.martin, 1_120_000, { created: d(105), sent: d(105), viewed: d(104), accepted: d(98) });
  quote(P.genevieve, 705_000, { created: d(1), sent: d(1) });
  quote(P.patrick, 760_000, { created: d(27), sent: d(27), viewed: d(26), accepted: d(12) });
  quote(P.karine, 655_000, { created: d(11), sent: d(11), viewed: d(10), accepted: d(6) });

  /* ---------------- Textos ---------------- */
  const store = tstore;
  const conversations: Record<string, Conversation> = {};
  const msg = (dir: "in" | "out", minAgo: number, body: string, extra: Partial<Msg> = {}): Msg => ({ id: store.newMessageId(), dir, body, at: at(minAgo).toISOString(), ...(dir === "in" ? { sid: `SMdemo${Math.random().toString(36).slice(2, 12)}` } : {}), ...extra });
  const conv = (phone: string, messages: Msg[], extra: Partial<Conversation> = {}) => {
    const c: Conversation = { ...store.createConversation(phone, messages[0].at), lastAt: messages[messages.length - 1].at, messages, ...extra };
    conversations[phone] = c;
  };
  conv("+15145550199", [msg("in", 31, "Bonjour ! Avez-vous des disponibilités la semaine prochaine pour une murale ? (démonstration)")], { unread: 1 });
  conv("+14505550177", [msg("in", d(6), "Bonjour, j’ai bien reçu la soumission, je regarde ça ce soir."), msg("out", d(6) - 20, "Parfait Marc, je reste disponible pour vos questions.", { by: OWNER, status: "delivered" })]);
  conv("+15145550142", [msg("in", d(2), "Est-ce que l’installateur arrive le matin ?"), msg("out", d(2) - 12, "Oui, entre 8 h et 9 h. À bientôt !", { by: OWNER, status: "delivered" }), msg("in", h(20), "Merci !")]);
  const textosData = { version: 1 as const, conversations, settings: tstore.defaultSettings(), seed: true as const };

  /* ---------------- CRM ---------------- */
  const crmData = cstore.emptyCrm();
  crmData.seed = true;
  const idOf = (p: Person) => `c_${hashKey(`p:+1${p.phone.replace(/\D/g, "")}`).slice(0, 12)}`;
  const rec = (p: Person, extra: Partial<import("../src/lib/gestion/crm/types").CrmClientRecord>) => {
    const id = idOf(p);
    crmData.clients[id] = { id, keys: [hashKey(`p:+1${p.phone.replace(/\D/g, "")}`), hashKey(`e:${p.email}`)], stageLog: [], tags: [], notes: [], createdAt: at(d(40)).toISOString(), updatedAt: at(d(1)).toISOString(), ...extra };
  };
  rec(P.julie, { tags: ["Référence"], notes: [{ id: "n_demonote01", at: at(d(25)).toISOString(), by: OWNER, text: "Veut l’unité extérieure sur le côté est, loin de la chambre. (démonstration)", kind: "note" }] });
  rec(P.marc, { notes: [{ id: "n_demonote02", at: at(d(8)).toISOString(), by: OWNER, text: "Hésite entre deux modèles ; rappeler après sa réunion de jeudi. (démonstration)", kind: "appel" }] });
  rec(P.sophie, { stageOverride: { stage: "perdue", at: at(d(20)).toISOString(), by: OWNER }, lost: { reason: "A choisi un concurrent", at: at(d(20)).toISOString() }, stageLog: [{ at: at(d(20)).toISOString(), by: OWNER, from: "contacte", to: "perdue", reason: "A choisi un concurrent" }] });
  handled.forEach((x, i) => {
    const id = `c_${hashKey(`e:${x.email}`).slice(0, 12)}`;
    const lostAt = new Date(x.at.getTime() + 86_400_000).toISOString();
    crmData.clients[id] = {
      id,
      keys: [hashKey(`e:${x.email}`)],
      notes: [{ id: `n_demohand${String(i).padStart(3, "0")}`, at: x.at.toISOString(), by: OWNER, text: "Rappelé : a posé ses questions, réfléchit. (démonstration)", kind: "appel" }],
      stageLog: x.lost ? [{ at: lostAt, by: OWNER, from: "contacte", to: "perdue", reason: x.lost }] : [],
      ...(x.lost ? { stageOverride: { stage: "perdue" as const, at: lostAt, by: OWNER }, lost: { reason: x.lost, at: lostAt } } : {}),
      tags: [],
      createdAt: x.at.toISOString(),
      updatedAt: x.at.toISOString(),
    };
  });
  crmData.tasks.push({ id: "t_demotask001", clientId: null, title: "Commander des supports muraux (démonstration)", dueAt: new Date(Math.max(NOW + h(3) * 60_000, NOW)).toISOString(), by: OWNER, createdAt: at(d(1)).toISOString() });
  crmData.tasks.push({ id: "t_demotask002", clientId: idOf(P.nathalie), title: "Confirmer la date avec Nathalie", dueAt: at(-d(1)).toISOString(), by: OWNER, createdAt: at(d(1)).toISOString() });
  crmData.manualContacts.push({ id: "m_democontact1", firstName: "Denis", lastName: "Paquette", phone: "450 555-0108", email: "", city: "Mirabel", createdAt: at(d(3)).toISOString(), createdBy: OWNER });

  /* ---------------- Jobs (ajoutés à gestion.json de démonstration) ---------------- */
  if (gestion.seed) {
    const inst = gestion.installers.filter((i) => i.active);
    await gstore.mutateGestion((g) => {
      g.jobs = g.jobs.filter((j) => !j.id.startsWith("j_crmdemo"));
      let num = g.jobs.reduce((m, j) => Math.max(m, j.number), 0);
      const J = (id: string, p: Person, over: Partial<Job>): Job => ({
        id,
        number: ++num,
        createdAt: at(d(10)).toISOString(),
        updatedAt: at(d(4)).toISOString(),
        client: { firstName: p.firstName, lastName: p.lastName, phone: p.phone, email: p.email, address: p.address, city: p.city, postalCode: p.postalCode },
        geo: null,
        region: "13",
        regionGuess: "13",
        brand: "fujitsu",
        systemType: "wall-single",
        modelSlug: null,
        modelLabel: "Fujitsu murale 12 000 BTU (démo)",
        capacity: "12 000 BTU",
        desiredDate: null,
        desiredWindow: "",
        installerNotes: "",
        internalNotes: "Données de démonstration.",
        status: "nouveau",
        assignedInstallerId: null,
        scheduledFor: null,
        offers: [],
        audit: [{ at: at(d(10)).toISOString(), by: OWNER, action: "job créé" }],
        ...over,
      });
      const offer = (installerId: string, sentMin: number, response: "accepte" | null) => ({ id: `o_crmdemo${installerId.slice(-4)}${sentMin}`, installerId, sentAt: at(sentMin).toISOString(), channels: { email: "envoye" as const, sms: "envoye" as const }, tokenHash: "demo", expiresAt: at(sentMin - h(72)).toISOString(), distanceKm: 18, response, ...(response ? { respondedAt: at(sentMin - 90).toISOString() } : {}) });
      if (inst[0]) g.jobs.push(J("j_crmdemo0001", P.julie, { status: "planifie", assignedInstallerId: inst[0].id, scheduledFor: today, offers: [offer(inst[0].id, d(20), "accepte")], audit: [{ at: at(d(20)).toISOString(), by: OWNER, action: "job créé" }, { at: at(d(3)).toISOString(), by: OWNER, action: "marquer planifié", detail: `prévu le ${today}` }] }));
      if (inst[1]) g.jobs.push(J("j_crmdemo0002", P.patrick, { status: "attribue", assignedInstallerId: inst[1].id, offers: [offer(inst[1].id, d(8), "accepte")], createdAt: at(d(10)).toISOString(), updatedAt: at(d(6)).toISOString() }));
      if (inst[2]) g.jobs.push(J("j_crmdemo0003", P.karine, { status: "offert", offers: [offer(inst[2].id, h(52), null)], createdAt: at(h(53)).toISOString(), updatedAt: at(h(52)).toISOString() }));
      return { result: undefined, changed: true };
    });
  } else console.log("gestion.json n'est pas une démonstration : aucun job ajouté.");

  await fs.mkdir(journalDir(), { recursive: true });
  await fs.writeFile(demoJournal, lines.join("\n") + "\n", "utf8");
  await sstore.mutateSoumissions((s) => {
    s.quotes = data.quotes;
    s.counters = data.counters;
    return { result: undefined, changed: true };
  });
  await fs.mkdir(path.dirname(tstore.textosFile()), { recursive: true });
  await fs.writeFile(tstore.textosFile(), JSON.stringify(textosData, null, 1), { mode: 0o600 });
  await fs.writeFile(cstore.crmFile(), JSON.stringify(crmData, null, 1), { mode: 0o600 });
  console.log(`Démonstration du CRM : ${lines.length} lignes de journal, ${data.quotes.length} soumissions, ${Object.keys(conversations).length} conversations.`);

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
  void exists;
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
