/* ==================================================================
   Photos du chantier (visite) et logo de l'entreprise.
   Le navigateur réduit déjà l'image ; ici, sharp la réoriente, la
   ramène à 1600 px au plus et la réencode en WebP : les métadonnées
   (dont la position GPS du téléphone) disparaissent. Fichiers dans
   soumissions-photos/ (droits 600), servis seulement :
     - au propriétaire connecté ;
     - au client, par le jeton d'une version qui les contient.
   Une photo n'est jamais supprimée : un document envoyé ou accepté
   peut y renvoyer (son empreinte est dans le document figé).
   ================================================================== */

import { promises as fs } from "node:fs";
import path from "node:path";
import { randomBytes } from "node:crypto";
import { LIMITS } from "./config";
import { sha256Hex } from "./hash";
import { mutateSoumissions, photosDir } from "./store";
import type { PhotoMeta } from "./types";

export const PHOTO_ID_RE = /^p_[A-Za-z0-9_-]{8,16}$/;

function sniff(buf: Buffer): "jpeg" | "png" | "webp" | null {
  if (buf.length < 12) return null;
  if (buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return "jpeg";
  if (buf.subarray(0, 8).equals(Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]))) return "png";
  if (buf.subarray(0, 4).toString("latin1") === "RIFF" && buf.subarray(8, 12).toString("latin1") === "WEBP") return "webp";
  return null;
}

export class PhotoError extends Error {}

async function compress(buf: Buffer, kind: "jpeg" | "png" | "webp", logo: boolean): Promise<{ data: Buffer; mime: PhotoMeta["mime"]; width: number; height: number }> {
  try {
    const sharp = (await import("sharp")).default;
    const size = logo ? 800 : 1600;
    const img = sharp(buf, { failOn: "error" }).rotate().resize({ width: size, height: size, fit: "inside", withoutEnlargement: true });
    const { data, info } = await (logo ? img.webp({ quality: 90, alphaQuality: 100 }) : img.webp({ quality: 76 })).toBuffer({ resolveWithObject: true });
    return { data, mime: "image/webp", width: info.width, height: info.height };
  } catch (e) {
    if (e instanceof Error && /unsupported|corrupt|Input buffer|bad/i.test(e.message)) throw new PhotoError("Image illisible.");
    // Sans sharp : seules les images déjà compressées par le navigateur passent.
    if (kind === "png" || buf.length > 2 * 1024 * 1024) throw new PhotoError("Compression impossible sur ce serveur : envoyez une image JPEG de moins de 2 Mo.");
    return { data: buf, mime: kind === "webp" ? "image/webp" : "image/jpeg", width: 0, height: 0 };
  }
}

export async function savePhoto(input: Buffer, by: string, quoteId: string | null, opts: { logo?: boolean } = {}): Promise<PhotoMeta> {
  if (!input.length || input.length > LIMITS.photoBytes) throw new PhotoError("Image vide ou trop lourde (12 Mo au plus).");
  const kind = sniff(input);
  if (!kind) throw new PhotoError("Format non reconnu : JPEG, PNG ou WebP seulement.");
  const out = await compress(input, kind, Boolean(opts.logo));
  const id = `p_${randomBytes(8).toString("base64url")}`;
  const ext = out.mime === "image/webp" ? "webp" : "jpg";
  await fs.mkdir(photosDir(), { recursive: true });
  await fs.writeFile(path.join(photosDir(), `${id}.${ext}`), out.data, { mode: 0o600 });
  const meta: PhotoMeta = { id, quoteId, mime: out.mime, bytes: out.data.length, width: out.width, height: out.height, sha256: sha256Hex(out.data), createdAt: new Date().toISOString(), createdBy: by };
  await mutateSoumissions((d) => {
    d.photos.push(meta);
    return { result: null, changed: true };
  });
  return meta;
}

export async function readPhotoFile(meta: PhotoMeta): Promise<Buffer | null> {
  const ext = meta.mime === "image/webp" ? "webp" : "jpg";
  try {
    return await fs.readFile(path.join(photosDir(), `${meta.id}.${ext}`));
  } catch {
    return null;
  }
}

export function photoResponse(meta: PhotoMeta, data: Buffer, scope: "private" | "client"): Response {
  return new Response(new Uint8Array(data), {
    status: 200,
    headers: {
      "Content-Type": meta.mime,
      "Content-Length": String(data.length),
      // Contenu immuable (même identifiant, mêmes octets) ; jamais dans un cache partagé.
      "Cache-Control": scope === "private" ? "private, max-age=86400, immutable" : "private, max-age=3600",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "no-referrer",
      "X-Robots-Tag": "noindex, nofollow",
    },
  });
}
