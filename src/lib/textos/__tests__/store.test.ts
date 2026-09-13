/* Magasin des conversations (textos.json) : emplacement, écritures sous verrou, lecture, archivage, pièces jointes,
   présentation (numéros masqués dans les listes), comptage en statistiques (canal « Texto »). */
import { readdir, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const mail = vi.hoisted(() => ({ sendInternalMessage: vi.fn(async () => true) }));
vi.mock("@/lib/crm/email", () => ({ sendInternalMessage: mail.sendInternalMessage, sendClientEmail: vi.fn(async () => true) }));

import { buildStats } from "@/lib/gestion/statistiques";
import { readJournalEntries } from "@/lib/gestion/statistiques";
import { DEFAULT_AUTO_REPLY } from "../messages";
import { formatPhone, maskPhone, normalizeFrom } from "../phone";
import { cancelDigestTimers, markRead, markUnread, mediaFor, receiveTexto, setArchived } from "../service";
import { readTextos, textosFile } from "../store";
import { conversationRows, threadView } from "../view";
import { journalLines, tempDir, testEnv } from "./helpers";

const env = process.env;
let dir: string;
const FROM = "+15145550142";
let n = 0;
const input = (body: string, extra: Partial<Parameters<typeof receiveTexto>[0]> = {}) => ({ from: FROM, sid: `SMstore${String(++n).padStart(20, "0")}`, body, media: [], ...extra });

beforeEach(async () => {
  dir = await tempDir();
  process.env = testEnv(dir);
  mail.sendInternalMessage.mockClear();
});
afterEach(async () => {
  cancelDigestTimers();
  process.env = env;
  await rm(dir, { recursive: true, force: true });
});

describe("emplacement et lecture", () => {
  it("TEXTOS_DATA_DIR, sinon le dossier de l'outil de gestion", () => {
    expect(textosFile()).toBe(path.join(dir, "textos.json"));
    process.env = testEnv(dir, { TEXTOS_DATA_DIR: "" });
    expect(textosFile()).toBe(path.join(dir, "textos.json"));
    process.env = testEnv(dir, { TEXTOS_DATA_DIR: "", GESTION_DATA_DIR: path.join(dir, "g") });
    expect(textosFile()).toBe(path.join(dir, "g", "textos.json"));
  });

  it("fichier absent : aucune conversation, accusé de réception activé avec le texte proposé", async () => {
    const d = await readTextos();
    expect(d.conversations).toEqual({});
    expect(d.settings).toEqual({ autoReply: true, autoReplyText: DEFAULT_AUTO_REPLY });
  });

  it("fichier incomplet : valeurs par défaut, rien ne plante", async () => {
    await writeFile(textosFile(), JSON.stringify({ conversations: { [FROM]: { id: "c_abcdefgh123", messages: "x" } }, settings: { autoReply: "non" } }));
    const d = await readTextos();
    expect(d.conversations[FROM]).toMatchObject({ id: "c_abcdefgh123", phone: FROM, messages: [], unread: 0, optedOut: false, notify: { pending: 0 } });
    expect(d.settings.autoReplyText).toBe(DEFAULT_AUTO_REPLY);
  });
});

describe("écritures", () => {
  it("20 textos simultanés du même numéro : une conversation, 20 messages, une seule demande au journal, aucun fichier temporaire", async () => {
    await Promise.all(Array.from({ length: 20 }, (_, i) => receiveTexto(input(`Message ${i}`))));
    const c = (await readTextos()).conversations[FROM];
    expect(c.messages.filter((m) => m.dir === "in")).toHaveLength(20);
    expect(new Set(c.messages.map((m) => m.id)).size).toBe(c.messages.length);
    expect(c.unread).toBe(20);
    expect(await journalLines(path.join(dir, "leads"))).toHaveLength(1);
    expect(mail.sendInternalMessage).toHaveBeenCalledTimes(1);
    const files = await readdir(dir);
    expect(files.filter((f) => f.endsWith(".tmp") || f.endsWith(".lock"))).toEqual([]);
    if (process.platform !== "win32") expect((await stat(textosFile())).mode & 0o777).toBe(0o600);
  });

  it("lu, non lu, archivé ; un nouveau texto sort la conversation des archives", async () => {
    const { conversationId } = await receiveTexto(input("Bonjour"));
    const id = conversationId!;
    await markRead(id);
    expect((await readTextos()).conversations[FROM].unread).toBe(0);
    await markUnread(id);
    expect((await readTextos()).conversations[FROM].unread).toBe(1);
    await setArchived(id, true);
    let d = await readTextos();
    expect(conversationRows(d, { archived: false })).toHaveLength(0);
    expect(conversationRows(d, { archived: true })).toHaveLength(1);
    await receiveTexto(input("Re-bonjour"));
    d = await readTextos();
    expect(d.conversations[FROM].archived).toBe(false);
    expect(await markRead("pas-un-id")).toBe(false);
  });

  it("pièce jointe : seulement celle d'un message reçu de cette conversation", async () => {
    const media = [{ url: "https://api.twilio.com/2010-04-01/Accounts/ACtest/Messages/MM1/Media/ME1", type: "image/jpeg" }];
    const { conversationId } = await receiveTexto(input("", { media }));
    const msgId = (await readTextos()).conversations[FROM].messages[0].id;
    expect(await mediaFor(conversationId!, msgId, 0)).toEqual(media[0]);
    expect(await mediaFor(conversationId!, msgId, 1)).toBeNull();
    expect(await mediaFor("c_autre000000", msgId, 0)).toBeNull();
    expect(await mediaFor(conversationId!, "m_autre0000000", 0)).toBeNull();
  });
});

describe("présentation", () => {
  it("numéros : normalisés, masqués dans les listes, complets dans le fil", async () => {
    expect(normalizeFrom("514-555-0142")).toBe(FROM);
    expect(normalizeFrom("anonymous")).toBeNull();
    expect(formatPhone(FROM)).toBe("514 555-0142");
    expect(maskPhone(FROM)).toBe("514 •••-••42");

    await receiveTexto(input("Bonjour, une soumission?"));
    const d = await readTextos();
    const [row] = conversationRows(d, { archived: false });
    expect(JSON.stringify(row)).not.toContain("555");
    expect(row).toMatchObject({ masked: "514 •••-••42", preview: DEFAULT_AUTO_REPLY.slice(0, 140), previewOut: true, unread: 1 });
    expect(threadView(d.conversations[FROM])).toMatchObject({ phone: "514 555-0142", e164: FROM });
  });
});

describe("statistiques", () => {
  it("le premier texto d'une conversation est une demande du canal « Texto », sans numéro ni message", async () => {
    await receiveTexto(input("Bonjour, prix d'une murale?"));
    await receiveTexto(input("Et l'installation?"));
    await receiveTexto({ ...input("Allo"), from: "+14505550177" });
    const s = buildStats(await readJournalEntries(path.join(dir, "leads")), { period: "30" });
    expect(s.byKind.find((k) => k.id === "texto")).toMatchObject({ label: "Textos", n: 2 });
    expect(s.channels).toContainEqual(expect.objectContaining({ id: "texto", label: "Texto", n: 2 }));
    expect(s.tracking).toMatchObject({ texto: 2, tracked: 0 });
    expect(s.regions).toEqual([]);
    const json = JSON.stringify(s);
    for (const secret of ["555", "murale", "installation"]) expect(json).not.toContain(secret);
  });
});
