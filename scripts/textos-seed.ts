/* ==================================================================
   Données de DÉMONSTRATION de la boîte des textos (/gestion/textos) —
   développement seulement, pour vérifier l'affichage.

   Usage (racine du projet) :
     npx tsx scripts/textos-seed.ts                       écrit 6 conversations fictives
     npx tsx scripts/textos-seed.ts --session <fichier>   écrit aussi un cookie de session (captures d'écran)
     npx tsx scripts/textos-seed.ts --vider               retire les données de démonstration

   Refuse de tourner si NODE_ENV=production, si le dossier des textos
   ressemble à celui du VPS (/var/www/…, shared/) ou si textos.json
   contient de vraies conversations. Numéros 555-01xx : réservés à la
   fiction, aucun texto ne peut partir vers eux.
   ================================================================== */
import { config } from "dotenv";
import { promises as fs } from "node:fs";

config({ path: [".env.local"], quiet: true });

function fail(msg: string): never {
  console.error(`textos-seed : ${msg}`);
  process.exit(1);
}

const arg = (name: string) => {
  const i = process.argv.indexOf(name);
  return i >= 0 ? process.argv[i + 1] : undefined;
};

async function main() {
  if (process.env.NODE_ENV === "production") fail("refusé : NODE_ENV=production.");
  const store = await import("../src/lib/textos/store");
  const dir = store.textosDataDir();
  if (dir.startsWith("/var/www") || /[\\/]shared[\\/]/.test(dir)) fail(`refusé : ${dir} ressemble au dossier de production.`);

  const current = await store.readTextos();
  const isSeed = current.seed === true || Object.keys(current.conversations).length === 0;

  if (process.argv.includes("--vider")) {
    if (!isSeed) fail("textos.json contient de vraies conversations : rien n'est supprimé.");
    await fs.rm(store.textosFile(), { force: true });
    console.log("Données de démonstration des textos retirées.");
    return;
  }
  if (!isSeed) fail("textos.json contient de vraies conversations : rien n'est écrit.");

  const { DEFAULT_AUTO_REPLY, STOP_CONFIRMATION } = await import("../src/lib/textos/messages");
  type Conversation = import("../src/lib/textos/types").Conversation;
  type Msg = import("../src/lib/textos/types").TextoMessage;

  const now = Date.now();
  const ago = (min: number) => new Date(now - min * 60_000).toISOString();
  let n = 0;
  const sid = () => `SMdemo${String(++n).padStart(26, "0")}`;
  const inMsg = (min: number, body: string, extra: Partial<Msg> = {}): Msg => ({ id: store.newMessageId(), sid: sid(), dir: "in", body, at: ago(min), ...extra });
  const outMsg = (min: number, body: string, extra: Partial<Msg> = {}): Msg => ({ id: store.newMessageId(), dir: "out", body, at: ago(min), ...extra });
  const auto = (min: number) => outMsg(min, DEFAULT_AUTO_REPLY, { auto: "accuse", status: "auto" });
  const conv = (phone: string, messages: Msg[], extra: Partial<Conversation> = {}): Conversation => ({
    ...store.createConversation(phone, messages[0].at),
    lastAt: messages[messages.length - 1].at,
    messages,
    ...extra,
  });
  const photo = { url: "https://api.twilio.com/2010-04-01/Accounts/ACdemo/Messages/MMdemo/Media/MEdemo", type: "image/jpeg" };
  const owner = "proprio@exemple.ca";

  const list: Conversation[] = [
    conv(
      "+15145550142",
      [
        inMsg(38, "Bonjour, j’aimerais une soumission pour une thermopompe murale 12 000 BTU dans mon condo à Rosemont. Vous installez le samedi?"),
        auto(38),
        inMsg(6, "Voici l’emplacement prévu pour l’unité extérieure, sur le balcon 👇", { media: [photo, { ...photo, url: `${photo.url}2` }] }),
      ],
      { unread: 2, place: "Montréal, QC", lastAutoReplyAt: ago(38), notify: { lastEmailAt: ago(38), pending: 1 } },
    ),
    conv(
      "+14505550177",
      [
        inMsg(200, "Avez-vous encore la Mitsubishi Hyper-Heat 18 000 en stock?"),
        auto(200),
        outMsg(188, "Bonjour ! Oui, il nous en reste deux. Voulez-vous qu’on passe évaluer l’installation cette semaine?", { by: owner, status: "delivered", sid: sid() }),
        inMsg(175, "Parfait, jeudi après-midi ça irait?"),
        outMsg(170, "Jeudi 13 h, c’est noté. Merci !", { by: owner, status: "sent", sid: sid() }),
      ],
      { place: "Laval, QC", lastAutoReplyAt: ago(200), lastManualAt: ago(170) },
    ),
    conv(
      "+14385550119",
      [inMsg(1500, "Combien pour un entretien annuel?"), auto(1500), inMsg(1440, "ARRÊT", { keyword: "stop" }), outMsg(1440, STOP_CONFIRMATION, { auto: "stop", status: "auto" })],
      { optedOut: true, optChangedAt: ago(1440), lastAutoReplyAt: ago(1500) },
    ),
    conv(
      "+18195550163",
      [
        inMsg(4400, "Merci pour l’installation, tout fonctionne parfaitement!"),
        auto(4400),
        outMsg(4380, "Merci à vous ! N’hésitez pas si vous avez des questions.", { by: owner, status: "failed", sid: sid(), errorCode: 30003, error: "Téléphone du destinataire injoignable (éteint ou hors réseau)." }),
      ],
      { place: "Gatineau, QC", lastAutoReplyAt: ago(4400), lastManualAt: ago(4380) },
    ),
    conv("+15145550188", [inMsg(20_000, "Bonjour, est-ce que vous vous occupez des subventions LogisVert?"), auto(20_000)], { unread: 1, lastAutoReplyAt: ago(20_000) }),
    conv("+14185550131", [inMsg(60_000, "Est-ce que vous livrez à Québec?"), auto(60_000), outMsg(59_000, "Oui, partout au Québec.", { by: owner, status: "delivered", sid: sid() })], {
      archived: true,
      place: "Québec, QC",
    }),
  ];

  await store.mutateTextos((d) => {
    d.conversations = Object.fromEntries(list.map((c) => [c.phone, c]));
    d.seed = true;
    return { result: undefined, changed: true };
  });
  console.log(`Démonstration écrite dans ${store.textosFile()} : ${list.length} conversations.`);
  console.log(`Conversation avec photos : /gestion/textos/${list[0].id}`);

  const sessionFile = arg("--session");
  if (sessionFile) {
    const { adminEmails } = await import("../src/lib/gestion/auth/admins");
    const email = adminEmails()[0];
    if (!email) fail("aucune adresse autorisée (ADMIN_EMAILS ou NOTIFICATION_EMAIL dans .env.local).");
    const { getSessionSecret } = await import("../src/lib/gestion/auth/secret");
    const { createSessionToken } = await import("../src/lib/gestion/auth/session-token");
    await fs.writeFile(sessionFile, JSON.stringify({ token: createSessionToken(email, await getSessionSecret()).token, thread: `/gestion/textos/${list[0].id}` }));
    console.log(`Cookie de session écrit dans ${sessionFile}.`);
  }
}

main().catch((e) => fail(e instanceof Error ? e.message : String(e)));
