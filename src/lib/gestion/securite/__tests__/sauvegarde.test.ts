/* Chantier S — sauvegardes : chiffrement AES-256-GCM et restauration (intégrité, altération, mauvaise clé),
   signature SigV4 (vecteurs de la documentation AWS), rotation, passage complet avec un S3 simulé
   (aucune connexion réseau). */
import { randomBytes } from "node:crypto";
import { mkdir, mkdtemp, readFile, readdir, rm, stat, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { createEncryptedBackup, decryptBackupFile, parseBackupKey, verifyBackup } from "../sauvegarde/chiffrement";
import { dailyKey, monthlyKey, needsMonthly, planRotation } from "../sauvegarde/rotation";
import { runBackup } from "../sauvegarde/run";
import { S3Client, type HttpRequest, type Transport } from "../sauvegarde/s3";
import { EMPTY_SHA256, sha256Hex, signingKey, signV4 } from "../sauvegarde/sigv4";

let dir: string;
let data: string;
const KEY = randomBytes(32);

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "thermo-sauv-"));
  data = path.join(dir, "data");
  await mkdir(path.join(data, "leads"), { recursive: true });
  await mkdir(path.join(data, "soumissions-photos", "dossier très long avec accents é à ç"), { recursive: true });
  await writeFile(path.join(data, "gestion.json"), JSON.stringify({ version: 1, jobs: [{ id: "j1" }] }));
  await writeFile(path.join(data, "leads", "2026-09.jsonl"), '{"a":1}\n{"b":2}\n');
  await writeFile(path.join(data, "soumissions-photos", "dossier très long avec accents é à ç", `${"n".repeat(120)}.jpg`), randomBytes(70_000));
  await writeFile(path.join(data, "gestion.json.lock"), "");
  await writeFile(path.join(data, ".env"), "NE_PAS_SAUVEGARDER=1\n");
  await writeFile(path.join(data, "vide.txt"), "");
});
afterEach(async () => {
  await rm(dir, { recursive: true, force: true });
});

describe("chiffrement et restauration", () => {
  it("aller-retour complet : contenu identique, .env et verrous exclus", async () => {
    const out = path.join(dir, "a.tavsauv");
    const r = await createEncryptedBackup(data, out, KEY);
    expect(r.files).toBe(4);
    expect((await readFile(out)).subarray(0, 8).toString()).toBe("TAVSAUV1");
    expect(sha256Hex(await readFile(out))).toBe(r.sha256);
    const dest = path.join(dir, "restaure");
    const v = await verifyBackup(out, KEY, { restoreTo: dest });
    expect(v.files).toBe(4);
    expect(await readFile(path.join(dest, "gestion.json"), "utf8")).toBe(await readFile(path.join(data, "gestion.json"), "utf8"));
    const photo = path.join("soumissions-photos", "dossier très long avec accents é à ç", `${"n".repeat(120)}.jpg`);
    expect((await readFile(path.join(dest, photo))).equals(await readFile(path.join(data, photo)))).toBe(true);
    expect(await readdir(dest)).not.toContain(".env");
    expect(await readdir(dest)).not.toContain("gestion.json.lock");
    if (process.platform !== "win32") expect((await stat(out)).mode & 0o777).toBe(0o600);
  });

  it("le fichier chiffré ne contient aucune donnée en clair", async () => {
    const out = path.join(dir, "b.tavsauv");
    await createEncryptedBackup(data, out, KEY);
    const raw = await readFile(out);
    expect(raw.includes(Buffer.from("jobs"))).toBe(false);
    expect(raw.includes(Buffer.from("gestion.json"))).toBe(false);
  });

  it("altération détectée (contenu, en-tête, étiquette) ; mauvaise clé refusée ; rien n'est écrit", async () => {
    const out = path.join(dir, "c.tavsauv");
    await createEncryptedBackup(data, out, KEY);
    const good = await readFile(out);
    for (const pos of [good.length >> 1, 10, good.length - 3]) {
      const bad = Buffer.from(good);
      bad[pos] ^= 0x01;
      const f = path.join(dir, `altere-${pos}.tavsauv`);
      await writeFile(f, bad);
      const dest = path.join(dir, `r-${pos}`);
      await expect(verifyBackup(f, KEY, { restoreTo: dest })).rejects.toThrow(/altérée|mauvaise clé/);
      expect(await readdir(dest)).toEqual([]);
    }
    await expect(verifyBackup(out, randomBytes(32))).rejects.toThrow(/altérée|mauvaise clé/);
    await expect(decryptBackupFile(out, randomBytes(32), path.join(dir, "x.tar.gz"))).rejects.toThrow();
    await expect(readFile(path.join(dir, "x.tar.gz"))).rejects.toThrow();
  });

  it("restauration refusée dans un dossier non vide", async () => {
    const out = path.join(dir, "d.tavsauv");
    await createEncryptedBackup(data, out, KEY);
    await expect(verifyBackup(out, KEY, { restoreTo: data })).rejects.toThrow(/vide/);
  });

  it("clé : 64 hexadécimaux ou base64 de 32 octets", () => {
    const hex = randomBytes(32).toString("hex");
    expect(parseBackupKey(hex).toString("hex")).toBe(hex);
    expect(parseBackupKey(Buffer.from(hex, "hex").toString("base64")).toString("hex")).toBe(hex);
    expect(() => parseBackupKey("trop-court")).toThrow(/BACKUP_ENCRYPTION_KEY/);
    expect(() => parseBackupKey("")).toThrow();
  });
});

describe("SigV4 (vecteurs de la documentation AWS)", () => {
  const S3 = { accessKeyId: "AKIAIOSFODNN7EXAMPLE", secretAccessKey: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY", region: "us-east-1", service: "s3", amzDate: "20130524T000000Z" };

  it("clé de signature dérivée (exemple IAM)", () => {
    expect(signingKey("wJalrXUtnFEMI/K7MDENG+bPxRfiCYEXAMPLEKEY", "20120215", "us-east-1", "iam").toString("hex")).toBe("f4780e2d9f65fa895f9c67b32ce1baf0b0d8a43505a000a1a9e090d414db404d");
  });

  it("S3 GET Object (Range)", () => {
    const s = signV4({ ...S3, method: "GET", url: "https://examplebucket.s3.amazonaws.com/test.txt", payloadHash: EMPTY_SHA256, headers: { host: "examplebucket.s3.amazonaws.com", range: "bytes=0-9", "x-amz-content-sha256": EMPTY_SHA256, "x-amz-date": S3.amzDate } });
    expect(s.signature).toBe("f0e8bdb87c964420e857bd35b5d6ed310bd44f0170aba48dd91039c6036bdb41");
    expect(s.authorization).toBe("AWS4-HMAC-SHA256 Credential=AKIAIOSFODNN7EXAMPLE/20130524/us-east-1/s3/aws4_request, SignedHeaders=host;range;x-amz-content-sha256;x-amz-date, Signature=f0e8bdb87c964420e857bd35b5d6ed310bd44f0170aba48dd91039c6036bdb41");
  });

  it("S3 PUT Object (clé avec $, en-tête Date)", () => {
    const body = "Welcome to Amazon S3.";
    const hash = sha256Hex(body);
    expect(hash).toBe("44ce7dd67c959e0d3524ffac1771dfbba87d2b6b4b4e99e42034a8b803f8b072");
    const s = signV4({
      ...S3,
      method: "PUT",
      url: "https://examplebucket.s3.amazonaws.com/test%24file.text",
      payloadHash: hash,
      headers: { host: "examplebucket.s3.amazonaws.com", date: "Fri, 24 May 2013 00:00:00 GMT", "x-amz-date": S3.amzDate, "x-amz-storage-class": "REDUCED_REDUNDANCY", "x-amz-content-sha256": hash },
    });
    expect(s.signature).toBe("98ad721746da40c64f1a55b78f14c238d841ea1380cd77a1b5971af0ece108bd");
  });

  it("S3 GET Bucket lifecycle et liste (paramètres de requête)", () => {
    const h = { host: "examplebucket.s3.amazonaws.com", "x-amz-date": S3.amzDate, "x-amz-content-sha256": EMPTY_SHA256 };
    expect(signV4({ ...S3, method: "GET", url: "https://examplebucket.s3.amazonaws.com/?lifecycle", payloadHash: EMPTY_SHA256, headers: h }).signature).toBe("fea454ca298b7da1c68078a5d1bdbfbbe0d65c699e0f91ac7a200a0136783543");
    expect(signV4({ ...S3, method: "GET", url: "https://examplebucket.s3.amazonaws.com/?max-keys=2&prefix=J", payloadHash: EMPTY_SHA256, headers: h }).signature).toBe("34b48302e7b5fa45bde8084f4b7868a86f0a534bc59db6670ed5711ef69dc6f7");
  });

  it("suite de tests SigV4 : get-vanilla", () => {
    const s = signV4({
      method: "GET",
      url: "https://example.amazonaws.com/",
      payloadHash: EMPTY_SHA256,
      headers: { host: "example.amazonaws.com", "x-amz-date": "20150830T123600Z" },
      region: "us-east-1",
      service: "service",
      accessKeyId: "AKIDEXAMPLE",
      secretAccessKey: "wJalrXUtnFEMI/K7MDENG+bPxRfiCYEXAMPLEKEY",
      amzDate: "20150830T123600Z",
    });
    expect(s.signature).toBe("5fa00fa31553b73ebf1942676e86291e8372ff2a2260956d9b8aae1d763fbf31");
  });
});

describe("rotation", () => {
  const P = "thermo/";
  it("30 quotidiennes, 12 mensuelles ; clés étrangères jamais supprimées", () => {
    const keys: string[] = [];
    for (let i = 0; i < 40; i++) keys.push(dailyKey(P, new Date(Date.UTC(2026, 0, 1) + i * 86_400_000 + 17 * 3_600_000)));
    for (let m = 0; m < 15; m++) keys.push(monthlyKey(P, new Date(Date.UTC(2025, m, 10, 17))));
    keys.push("thermo/a-la-main.tar.gz", "autre/quotidien/thermo-2020-01-01.tavsauv");
    const plan = planRotation(keys, P);
    expect(plan.daily).toBe(30);
    expect(plan.monthly).toBe(12);
    expect(plan.remove).toHaveLength(13);
    expect(plan.remove).toContain("thermo/quotidien/thermo-2026-01-01.tavsauv");
    expect(plan.remove).toContain("thermo/mensuel/thermo-2025-01.tavsauv");
    expect(plan.remove).not.toContain("thermo/quotidien/thermo-2026-02-09.tavsauv");
    expect(plan.remove).not.toContain("thermo/a-la-main.tar.gz");
    expect(plan.remove.some((k) => k.startsWith("autre/"))).toBe(false);
  });

  it("mensuelle : au premier passage du mois (heure de Montréal)", () => {
    const d = new Date("2026-10-01T03:30:00Z"); // 30 sept., 23 h 30 à Montréal
    expect(dailyKey(P, d)).toBe("thermo/quotidien/thermo-2026-09-30.tavsauv");
    expect(needsMonthly(["thermo/mensuel/thermo-2026-09.tavsauv"], P, d)).toBe(false);
    expect(needsMonthly(["thermo/mensuel/thermo-2026-08.tavsauv"], P, d)).toBe(true);
  });
});

/** S3 simulé en mémoire : vérifie la signature présente, sans aucune connexion. */
function fakeS3(opts: { failPut?: number } = {}) {
  const objects = new Map<string, Buffer>();
  const requests: HttpRequest[] = [];
  const transport: Transport = async (req) => {
    requests.push(req);
    expect(req.headers.authorization).toMatch(/^AWS4-HMAC-SHA256 Credential=KEYID0000000001\/\d{8}\/us-east-005\/s3\/aws4_request, SignedHeaders=[a-z0-9;-]+, Signature=[0-9a-f]{64}$/);
    const u = new URL(req.url);
    const key = decodeURIComponent(u.pathname.replace(/^\/compartiment\/?/, ""));
    if (req.method === "PUT") {
      if (opts.failPut) return { status: opts.failPut, body: "<Error><Code>AccessDenied</Code><Message>refusé</Message></Error>" };
      const body = Buffer.isBuffer(req.body) ? req.body : await readFile((req.body as { file: string }).file);
      expect(sha256Hex(body)).toBe(req.headers["x-amz-content-sha256"]);
      objects.set(key, body);
      return { status: 200, body: "" };
    }
    if (req.method === "DELETE") {
      objects.delete(key);
      return { status: 204, body: "" };
    }
    if (u.searchParams.get("list-type") === "2") {
      const prefix = u.searchParams.get("prefix") ?? "";
      const xml = [...objects.keys()].filter((k) => k.startsWith(prefix)).map((k) => `<Contents><Key>${k}</Key></Contents>`).join("");
      return { status: 200, body: `<ListBucketResult><IsTruncated>false</IsTruncated>${xml}</ListBucketResult>` };
    }
    const obj = objects.get(key);
    if (!obj) return { status: 404, body: "<Error><Code>NoSuchKey</Code></Error>" };
    if (req.saveTo) await writeFile(req.saveTo, obj);
    return { status: 200, body: "" };
  };
  return { objects, requests, transport };
}

const S3ENV = {
  BACKUP_S3_ENDPOINT: "https://s3.us-east-005.exemple-stockage.test",
  BACKUP_S3_BUCKET: "compartiment",
  BACKUP_S3_KEY_ID: "KEYID0000000001",
  BACKUP_S3_SECRET: "secret-factice-de-test-0000000000",
  BACKUP_S3_REGION: "us-east-005",
};

describe("passage complet (S3 simulé)", () => {
  it("inactif sans variables : rien n'est fait, aucune alerte", async () => {
    const alert = vi.fn();
    const s = await runBackup({ dataDir: data, env: {}, alert, statusFile: path.join(dir, "etat.json"), workDir: dir });
    expect(s.state).toBe("inactive");
    expect(alert).not.toHaveBeenCalled();
  });

  it("envoie la quotidienne et la mensuelle, fait la rotation, puis la restauration depuis S3 fonctionne", async () => {
    const s3 = fakeS3();
    const keyHex = KEY.toString("hex");
    // 31 anciennes quotidiennes déjà présentes.
    for (let i = 1; i <= 31; i++) s3.objects.set(dailyKey("thermo/", new Date(Date.UTC(2026, 7, i, 16))), Buffer.from("x"));
    const now = new Date("2026-09-13T07:30:00Z");
    const s = await runBackup({ dataDir: data, env: { ...S3ENV, BACKUP_ENCRYPTION_KEY: keyHex }, now, transport: s3.transport, statusFile: path.join(dir, "etat.json"), workDir: dir });
    expect(s).toMatchObject({ state: "reussie", key: "thermo/quotidien/thermo-2026-09-13.tavsauv", monthly: "thermo/mensuel/thermo-2026-09.tavsauv", kept: { daily: 30, monthly: 1 }, removed: 2 });
    expect(JSON.parse(await readFile(path.join(dir, "etat.json"), "utf8")).state).toBe("reussie");
    // Aucun secret dans l'état écrit.
    expect(await readFile(path.join(dir, "etat.json"), "utf8")).not.toContain(S3ENV.BACKUP_S3_SECRET);
    expect(await readFile(path.join(dir, "etat.json"), "utf8")).not.toContain(keyHex);
    // Aucun secret dans les requêtes (ni URL, ni en-têtes) : seulement la signature.
    for (const r of s3.requests) expect(JSON.stringify({ u: r.url, h: r.headers })).not.toContain(S3ENV.BACKUP_S3_SECRET);

    const client = new S3Client({ endpoint: S3ENV.BACKUP_S3_ENDPOINT, bucket: "compartiment", keyId: S3ENV.BACKUP_S3_KEY_ID, secret: S3ENV.BACKUP_S3_SECRET, region: "us-east-005" }, s3.transport);
    const back = path.join(dir, "telechargee.tavsauv");
    await client.getToFile(s.key!, back);
    const v = await verifyBackup(back, KEY, { restoreTo: path.join(dir, "depuis-s3") });
    expect(v.files).toBe(4);
    // Le dossier de travail temporaire est nettoyé.
    expect((await readdir(dir)).some((n) => n.startsWith("thermo-sauvegarde-"))).toBe(false);
  });

  it("échec (S3 refuse) : état « echec » et alerte au propriétaire, sans secret dans le message", async () => {
    const s3 = fakeS3({ failPut: 403 });
    const alert = vi.fn(async () => undefined);
    const s = await runBackup({ dataDir: data, env: { ...S3ENV, BACKUP_ENCRYPTION_KEY: KEY.toString("hex") }, transport: s3.transport, alert, statusFile: path.join(dir, "etat.json"), workDir: dir });
    expect(s.state).toBe("echec");
    expect(s.message).toContain("403");
    expect(alert).toHaveBeenCalledTimes(1);
    expect(JSON.stringify(alert.mock.calls)).not.toContain(S3ENV.BACKUP_S3_SECRET);
  });

  it("configuration partielle ou clé absente : échec et alerte (jamais d'envoi sans chiffrement)", async () => {
    const s3 = fakeS3();
    const alert = vi.fn(async () => undefined);
    const s = await runBackup({ dataDir: data, env: { ...S3ENV }, transport: s3.transport, alert, statusFile: path.join(dir, "etat.json"), workDir: dir });
    expect(s.state).toBe("echec");
    expect(s.message).toContain("BACKUP_ENCRYPTION_KEY");
    expect(s3.requests).toHaveLength(0);
    expect(alert).toHaveBeenCalledTimes(1);
  });
});
