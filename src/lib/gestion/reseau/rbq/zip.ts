/* ==================================================================
   Chantier R — lecteur ZIP minimal (sans dépendance) pour le fichier
   des licences RBQ, distribué en .zip par Données Québec.
   Répertoire central lu à la fin du fichier ; l'entrée CSV est
   décompressée EN FLUX (zlib, méthode « deflate » ou « stored ») :
   le fichier décompressé n'est jamais chargé d'un bloc en mémoire.
   ZIP64 et chiffrement non pris en charge (erreur claire).
   ================================================================== */

import { createReadStream } from "node:fs";
import { open } from "node:fs/promises";
import { Readable } from "node:stream";
import { createInflateRaw } from "node:zlib";

export class ZipError extends Error {}

export interface ZipEntry {
  name: string;
  method: number;
  compressedSize: number;
  size: number;
  /** Début des données compressées dans le fichier. */
  offset: number;
}

const EOCD = 0x06054b50;
const CEN = 0x02014b50;
const LOC = 0x04034b50;

export async function listZipEntries(file: string): Promise<ZipEntry[]> {
  const fh = await open(file, "r");
  try {
    const { size } = await fh.stat();
    if (size < 22) throw new ZipError("Fichier ZIP trop court.");
    const tail = Math.min(size, 65_557);
    const buf = Buffer.alloc(tail);
    await fh.read(buf, 0, tail, size - tail);
    let eocd = -1;
    for (let i = tail - 22; i >= 0; i--) {
      if (buf.readUInt32LE(i) === EOCD) {
        eocd = i;
        break;
      }
    }
    if (eocd < 0) throw new ZipError("Fichier ZIP illisible : fin du répertoire introuvable.");
    const count = buf.readUInt16LE(eocd + 10);
    const cdSize = buf.readUInt32LE(eocd + 12);
    const cdOffset = buf.readUInt32LE(eocd + 16);
    if (count === 0xffff || cdSize === 0xffffffff || cdOffset === 0xffffffff) throw new ZipError("ZIP64 non pris en charge.");
    if (cdOffset + cdSize > size) throw new ZipError("Répertoire ZIP hors du fichier.");
    const cd = Buffer.alloc(cdSize);
    await fh.read(cd, 0, cdSize, cdOffset);
    const out: ZipEntry[] = [];
    let p = 0;
    for (let n = 0; n < count; n++) {
      if (p + 46 > cd.length || cd.readUInt32LE(p) !== CEN) throw new ZipError("Répertoire ZIP abîmé.");
      const flags = cd.readUInt16LE(p + 8);
      const method = cd.readUInt16LE(p + 10);
      const compressedSize = cd.readUInt32LE(p + 20);
      const uncompressed = cd.readUInt32LE(p + 24);
      const nameLen = cd.readUInt16LE(p + 28);
      const extraLen = cd.readUInt16LE(p + 30);
      const commentLen = cd.readUInt16LE(p + 32);
      const local = cd.readUInt32LE(p + 42);
      const name = cd.toString(flags & 0x800 ? "utf8" : "latin1", p + 46, p + 46 + nameLen);
      if (flags & 0x1) throw new ZipError("ZIP chiffré non pris en charge.");
      if (compressedSize === 0xffffffff || uncompressed === 0xffffffff || local === 0xffffffff) throw new ZipError("ZIP64 non pris en charge.");
      const lh = Buffer.alloc(30);
      await fh.read(lh, 0, 30, local);
      if (lh.readUInt32LE(0) !== LOC) throw new ZipError("En-tête local ZIP abîmé.");
      out.push({ name, method, compressedSize, size: uncompressed, offset: local + 30 + lh.readUInt16LE(26) + lh.readUInt16LE(28) });
      p += 46 + nameLen + extraLen + commentLen;
    }
    return out;
  } finally {
    await fh.close();
  }
}

/** Première entrée .csv, sinon le premier fichier. */
export function pickCsvEntry(entries: ZipEntry[]): ZipEntry | null {
  return entries.find((e) => /\.csv$/i.test(e.name)) ?? entries.find((e) => !e.name.endsWith("/")) ?? null;
}

/** Flux des octets décompressés d'une entrée. */
export function openZipEntry(file: string, e: ZipEntry): Readable {
  if (e.method !== 0 && e.method !== 8) throw new ZipError(`Méthode de compression ${e.method} non prise en charge.`);
  if (e.compressedSize === 0) return Readable.from([]);
  const raw = createReadStream(file, { start: e.offset, end: e.offset + e.compressedSize - 1 });
  if (e.method === 0) return raw;
  const inflate = createInflateRaw();
  raw.on("error", (err) => inflate.destroy(err));
  return raw.pipe(inflate);
}

/** Vrai si les premiers octets sont ceux d'une archive ZIP. */
export const isZipMagic = (b: Uint8Array): boolean => b.length >= 4 && b[0] === 0x50 && b[1] === 0x4b && b[2] === 0x03 && b[3] === 0x04;
