/* ==================================================================
   Chantier S — chiffrement des sauvegardes (AES-256-GCM).

   Fichier .tavsauv :
     « TAVSAUV1 » (8) | sel (16) | IV (12) | données chiffrées | étiquette (16)
   Données = tar.gz du dossier des données. Clé du fichier dérivée par
   HKDF-SHA256 de BACKUP_ENCRYPTION_KEY (32 octets, 64 caractères hexa
   ou base64) et du sel : chaque sauvegarde a sa propre clé. L'en-tête
   est authentifié (AAD) avec le contenu.

   Déchiffrement : l'étiquette est vérifiée AVANT toute extraction
   (déchiffrement complet dans un fichier temporaire, puis lecture) :
   un fichier altéré ou une mauvaise clé n'écrit jamais rien.
   ================================================================== */

import { createCipheriv, createDecipheriv, createHash, hkdfSync, randomBytes } from "node:crypto";
import { createReadStream, createWriteStream, promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import { createGunzip, createGzip } from "node:zlib";
import { defaultExclude, extractTar, listFiles, tarStream, type ExtractResult } from "./archive";

export const MAGIC = Buffer.from("TAVSAUV1", "ascii");
const SALT = 16;
const IV = 12;
const TAG = 16;
export const HEADER_LEN = MAGIC.length + SALT + IV;

/** 64 caractères hexadécimaux, ou base64 / base64url de 32 octets. */
export function parseBackupKey(raw: string | undefined | null): Buffer {
  const v = (raw ?? "").trim();
  if (/^[0-9a-fA-F]{64}$/.test(v)) return Buffer.from(v, "hex");
  if (/^[A-Za-z0-9+/_-]{43}=?$/.test(v)) {
    const b = Buffer.from(v.replace(/-/g, "+").replace(/_/g, "/"), "base64");
    if (b.length === 32) return b;
  }
  throw new Error("BACKUP_ENCRYPTION_KEY invalide : 32 octets attendus (64 caractères hexadécimaux, ou base64).");
}

export function isValidBackupKey(raw: string): boolean {
  try {
    parseBackupKey(raw);
    return true;
  } catch {
    return false;
  }
}

const derive = (master: Buffer, salt: Buffer) => Buffer.from(hkdfSync("sha256", master, salt, "thermo-sauvegarde-v1", 32));

export interface CreateResult {
  file: string;
  size: number;
  sha256: string;
  files: number;
  bytes: number;
}

/** Crée la sauvegarde chiffrée de `dataDir` dans `outFile` (droits 600). */
export async function createEncryptedBackup(dataDir: string, outFile: string, masterKey: Buffer, opts: { now?: Date; exclude?: (rel: string) => boolean } = {}): Promise<CreateResult> {
  const now = opts.now ?? new Date();
  const outDir = path.resolve(path.dirname(outFile));
  const root = path.resolve(dataDir);
  // Le dossier de travail ne doit jamais être archivé avec les données.
  const inside = outDir === root || outDir.startsWith(root + path.sep);
  const rel = inside ? path.relative(root, outDir).split(path.sep).join("/") : null;
  const exclude = (r: string) => (opts.exclude ?? defaultExclude)(r) || (rel !== null && rel !== "" && (r === rel || r.startsWith(`${rel}/`)));
  const files = await listFiles(root, exclude);
  const stats = { files: 0, bytes: 0 };
  const salt = randomBytes(SALT);
  const iv = randomBytes(IV);
  const head = Buffer.concat([MAGIC, salt, iv]);
  const cipher = createCipheriv("aes-256-gcm", derive(masterKey, salt), iv);
  cipher.setAAD(head);
  const hash = createHash("sha256");
  let size = 0;
  await pipeline(
    Readable.from(tarStream(root, files, stats, now)),
    createGzip({ level: 6 }),
    cipher,
    async function* (src: AsyncIterable<Buffer>) {
      hash.update(head);
      size += head.length;
      yield head;
      for await (const c of src) {
        hash.update(c);
        size += c.length;
        yield c;
      }
      const tag = cipher.getAuthTag();
      hash.update(tag);
      size += tag.length;
      yield tag;
    },
    createWriteStream(outFile, { mode: 0o600 }),
  );
  return { file: outFile, size, sha256: hash.digest("hex"), files: stats.files, bytes: stats.bytes };
}

/** Déchiffre et vérifie l'étiquette. En cas d'échec, `outFile` est supprimé et une erreur claire est levée. */
export async function decryptBackupFile(inFile: string, masterKey: Buffer, outFile: string): Promise<void> {
  const { size } = await fs.stat(inFile);
  if (size < HEADER_LEN + TAG) throw new Error("Fichier trop court : ce n’est pas une sauvegarde.");
  const fh = await fs.open(inFile, "r");
  const head = Buffer.alloc(HEADER_LEN);
  const tag = Buffer.alloc(TAG);
  try {
    await fh.read(head, 0, HEADER_LEN, 0);
    await fh.read(tag, 0, TAG, size - TAG);
  } finally {
    await fh.close();
  }
  if (!head.subarray(0, MAGIC.length).equals(MAGIC)) throw new Error("Ce fichier n’est pas une sauvegarde TAVSAUV1.");
  const salt = head.subarray(MAGIC.length, MAGIC.length + SALT);
  const iv = head.subarray(MAGIC.length + SALT);
  const decipher = createDecipheriv("aes-256-gcm", derive(masterKey, salt), iv);
  decipher.setAAD(head);
  decipher.setAuthTag(tag);
  try {
    const body = size - TAG - HEADER_LEN;
    const src = body > 0 ? createReadStream(inFile, { start: HEADER_LEN, end: size - TAG - 1 }) : Readable.from([]);
    await pipeline(src, decipher, createWriteStream(outFile, { mode: 0o600 }));
  } catch {
    await fs.rm(outFile, { force: true });
    throw new Error("Sauvegarde altérée ou mauvaise clé (BACKUP_ENCRYPTION_KEY) : vérification d’intégrité refusée.");
  }
}

/**
 * Vérifie une sauvegarde de bout en bout (étiquette GCM, puis chaque fichier contre
 * le manifeste). Avec `restoreTo` (dossier absent ou vide), écrit aussi les fichiers.
 */
export async function verifyBackup(inFile: string, masterKey: Buffer, opts: { restoreTo?: string; tmpDir?: string } = {}): Promise<ExtractResult> {
  if (opts.restoreTo) {
    await fs.mkdir(opts.restoreTo, { recursive: true, mode: 0o700 });
    if ((await fs.readdir(opts.restoreTo)).length) throw new Error(`Le dossier de restauration doit être vide : ${opts.restoreTo}`);
  }
  const tmp = path.join(opts.tmpDir ?? os.tmpdir(), `tavsauv-${process.pid}-${randomBytes(6).toString("hex")}.tar.gz`);
  try {
    await decryptBackupFile(inFile, masterKey, tmp);
    return await extractTar(createReadStream(tmp).pipe(createGunzip()), opts.restoreTo);
  } finally {
    await fs.rm(tmp, { force: true });
  }
}
