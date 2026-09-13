/* ==================================================================
   Images téléversées pour les articles (serveur) : JPEG, PNG ou WebP,
   8 Mo au plus, réduites à 1 800 px de large et converties en WebP
   (sharp, installé avec Next). Rangées hors du dépôt, dans
   blogue-images/ du dossier des données ; servies par
   /blogue/images/<fichier>.webp. Aucune donnée EXIF conservée.
   ================================================================== */

import { randomBytes } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { blogueImagesDir } from "./store";

export const IMAGE_MAX_BYTES = 8 * 1024 * 1024;
export const IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"] as const;
export const IMAGE_FILE_RE = /^[a-f0-9]{24}\.webp$/;

export async function saveUploadedImage(buf: Buffer, type: string): Promise<{ ok: true; path: string } | { ok: false; error: string }> {
  if (!(IMAGE_TYPES as readonly string[]).includes(type)) return { ok: false, error: "Format refusé : JPEG, PNG ou WebP seulement." };
  if (buf.length === 0 || buf.length > IMAGE_MAX_BYTES) return { ok: false, error: "Image vide ou trop lourde (8 Mo au plus)." };
  let out: Buffer;
  try {
    const sharp = (await import("sharp")).default;
    out = await sharp(buf).rotate().resize({ width: 1800, withoutEnlargement: true }).webp({ quality: 82 }).toBuffer();
  } catch {
    return { ok: false, error: "Image illisible." };
  }
  const name = `${randomBytes(12).toString("hex")}.webp`;
  const dir = blogueImagesDir();
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, name), out, { mode: 0o644 });
  return { ok: true, path: `/blogue/images/${name}` };
}

export async function readUploadedImage(name: string): Promise<Buffer | null> {
  if (!IMAGE_FILE_RE.test(name)) return null;
  try {
    return await readFile(path.join(blogueImagesDir(), name));
  } catch {
    return null;
  }
}

/** Chemin d'image permis dans un article : photo du site ou image téléversée. */
export const validImagePath = (p: string) => (/^\/images\/[\w./-]+\.(?:jpe?g|png|webp|avif)$/i.test(p) && !p.includes("..")) || /^\/blogue\/images\/[a-f0-9]{24}\.webp$/.test(p);
