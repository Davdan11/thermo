/* ==================================================================
   Fichiers privés du volet A (signatures, documents de conformité,
   photos de chantier, photos des billets de service) : dans le dossier
   de données (GESTION_DATA_DIR), droits 600, jamais dans public/.
   Les images sont réencodées par sharp (1600 px au plus, WebP) : les
   métadonnées du téléphone, dont la position GPS, disparaissent.
   Aucun chemin n'est construit à partir d'une saisie : identifiant
   validé par expression régulière, extension choisie ici.
   ================================================================== */

import { promises as fs } from "node:fs";
import path from "node:path";
import { createHash, randomBytes } from "node:crypto";

export const sha256Hex = (data: Buffer | string): string => createHash("sha256").update(data).digest("hex");

/** « x_ » + 11 caractères aléatoires. */
export const rid = (prefix: string): string => `${prefix}_${randomBytes(8).toString("base64url")}`;

export type Sniffed = "jpeg" | "png" | "webp" | "pdf";

export function sniff(buf: Buffer): Sniffed | null {
  if (buf.length < 12) return null;
  if (buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return "jpeg";
  if (buf.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return "png";
  if (buf.subarray(0, 4).toString("latin1") === "RIFF" && buf.subarray(8, 12).toString("latin1") === "WEBP") return "webp";
  if (buf.subarray(0, 5).toString("latin1") === "%PDF-") return "pdf";
  return null;
}

export class FileError extends Error {}

export const MAX_IMAGE_BYTES = 12 * 1024 * 1024;
export const MAX_PDF_BYTES = 10 * 1024 * 1024;

export interface ProcessedImage {
  data: Buffer;
  mime: "image/webp" | "image/jpeg" | "image/png";
  ext: "webp" | "jpg" | "png";
  width: number;
  height: number;
}

/** Image d'un téléphone → WebP 1600 px au plus, sans métadonnées. Sans sharp : JPEG/WebP déjà réduits (< 2 Mo) seulement. */
export async function processPhoto(buf: Buffer, max = 1600): Promise<ProcessedImage> {
  if (!buf.length || buf.length > MAX_IMAGE_BYTES) throw new FileError("Image vide ou trop lourde (12 Mo au plus).");
  const kind = sniff(buf);
  if (!kind || kind === "pdf") throw new FileError("Format non reconnu : JPEG, PNG ou WebP seulement.");
  try {
    const sharp = (await import("sharp")).default;
    const { data, info } = await sharp(buf, { failOn: "error" })
      .rotate()
      .resize({ width: max, height: max, fit: "inside", withoutEnlargement: true })
      .webp({ quality: 78 })
      .toBuffer({ resolveWithObject: true });
    return { data, mime: "image/webp", ext: "webp", width: info.width, height: info.height };
  } catch (e) {
    if (e instanceof Error && /unsupported|corrupt|Input buffer|bad/i.test(e.message)) throw new FileError("Image illisible.");
    if (kind === "png" || buf.length > 2 * 1024 * 1024) throw new FileError("Compression impossible sur ce serveur : envoyez une image JPEG de moins de 2 Mo.");
    return { data: buf, mime: kind === "webp" ? "image/webp" : "image/jpeg", ext: kind === "webp" ? "webp" : "jpg", width: 0, height: 0 };
  }
}

/** Signature tracée : PNG seulement (fond transparent conservé), 400 Ko au plus. */
export function parseSignaturePng(dataUrl: string): Buffer {
  const m = /^data:image\/png;base64,([A-Za-z0-9+/=]+)$/.exec(dataUrl);
  if (!m) throw new FileError("Signature illisible.");
  const buf = Buffer.from(m[1], "base64");
  if (buf.length < 100 || buf.length > 400 * 1024 || sniff(buf) !== "png") throw new FileError("Signature illisible.");
  return buf;
}

const SAFE_ID = /^[a-z]_[A-Za-z0-9_-]{8,16}$/;
const SAFE_EXT = new Set(["webp", "jpg", "png", "pdf"]);

function target(dir: string, id: string, ext: string): string {
  if (!SAFE_ID.test(id) || !SAFE_EXT.has(ext)) throw new FileError("Fichier invalide.");
  return path.join(dir, `${id}.${ext}`);
}

export async function writePrivateFile(dir: string, id: string, ext: string, data: Buffer): Promise<void> {
  await fs.mkdir(dir, { recursive: true });
  await fs.writeFile(target(dir, id, ext), data, { mode: 0o600 });
}

export async function readPrivateFile(dir: string, id: string, ext: string): Promise<Buffer | null> {
  try {
    return await fs.readFile(target(dir, id, ext));
  } catch {
    return null;
  }
}

export const MIME_OF: Record<string, string> = { webp: "image/webp", jpg: "image/jpeg", png: "image/png", pdf: "application/pdf" };

/** Réponse d'un fichier privé : jamais dans un cache partagé, jamais indexé, rien d'exécutable. */
export function privateFileResponse(data: Buffer, ext: string, opts: { download?: string; maxAge?: number } = {}): Response {
  const mime = MIME_OF[ext] ?? "application/octet-stream";
  return new Response(new Uint8Array(data), {
    status: 200,
    headers: {
      "Content-Type": mime,
      "Content-Length": String(data.length),
      "Cache-Control": `private, max-age=${opts.maxAge ?? 3600}`,
      "Content-Disposition": opts.download ? `attachment; filename="${opts.download.replace(/[^\w.-]/g, "_")}"` : "inline",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "no-referrer",
      "X-Robots-Tag": "noindex, nofollow",
      "Content-Security-Policy": "default-src 'none'; sandbox",
    },
  });
}
