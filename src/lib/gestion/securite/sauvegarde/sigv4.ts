/* ==================================================================
   Chantier S — signature AWS Signature Version 4 (en-tête
   Authorization), codée avec node:crypto, sans dépendance.
   Compatible S3 : Backblaze B2, Wasabi, AWS S3, MinIO…
   Vérifiée par les vecteurs de la documentation AWS (tests).
   Aucune valeur secrète n'est renvoyée hors de l'en-tête signé.
   ================================================================== */

import { createHash, createHmac } from "node:crypto";

export const EMPTY_SHA256 = "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";

export const sha256Hex = (data: string | Buffer) => createHash("sha256").update(data).digest("hex");
const hmac = (key: Buffer | string, data: string) => createHmac("sha256", key).update(data, "utf8").digest();

/** Encodage URI de SigV4 : tout sauf A-Z a-z 0-9 - _ . ~ (et « / » si demandé), octets UTF-8 en %XX majuscules. */
export function uriEncode(value: string, encodeSlash = true): string {
  let out = "";
  for (const byte of Buffer.from(value, "utf8")) {
    const c = String.fromCharCode(byte);
    if (/[A-Za-z0-9\-_.~]/.test(c) || (c === "/" && !encodeSlash)) out += c;
    else out += `%${byte.toString(16).toUpperCase().padStart(2, "0")}`;
  }
  return out;
}

/** « 20130524T000000Z » */
export function amzDate(d: Date): string {
  return d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

export function signingKey(secret: string, date: string, region: string, service: string): Buffer {
  return hmac(hmac(hmac(hmac(`AWS4${secret}`, date), region), service), "aws4_request");
}

export interface SignInput {
  method: string;
  /** URL complète ; le chemin est pris tel quel (déjà encodé), la requête est re-canonisée. */
  url: string;
  /** En-têtes À SIGNER (host et x-amz-date compris). */
  headers: Record<string, string>;
  payloadHash: string;
  region: string;
  service: string;
  accessKeyId: string;
  secretAccessKey: string;
  /** Valeur de x-amz-date. */
  amzDate: string;
}

export interface Signed {
  authorization: string;
  signature: string;
  canonicalRequest: string;
  stringToSign: string;
  signedHeaders: string;
}

function canonicalQuery(url: URL): string {
  const pairs: Array<[string, string]> = [];
  // Séparation manuelle : URLSearchParams transforme « + » en espace.
  const raw = url.search.replace(/^\?/, "");
  if (raw) {
    for (const part of raw.split("&")) {
      if (!part) continue;
      const i = part.indexOf("=");
      const k = decodeURIComponent(i < 0 ? part : part.slice(0, i));
      const v = i < 0 ? "" : decodeURIComponent(part.slice(i + 1));
      pairs.push([uriEncode(k), uriEncode(v)]);
    }
  }
  pairs.sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : a[1] < b[1] ? -1 : a[1] > b[1] ? 1 : 0));
  return pairs.map(([k, v]) => `${k}=${v}`).join("&");
}

export function signV4(input: SignInput): Signed {
  const url = new URL(input.url);
  const headers = Object.entries(input.headers)
    .map(([k, v]) => [k.toLowerCase().trim(), String(v).trim().replace(/\s+/g, " ")] as const)
    .sort((a, b) => (a[0] < b[0] ? -1 : 1));
  const signedHeaders = headers.map(([k]) => k).join(";");
  const canonicalRequest = [
    input.method.toUpperCase(),
    url.pathname || "/",
    canonicalQuery(url),
    headers.map(([k, v]) => `${k}:${v}\n`).join(""),
    signedHeaders,
    input.payloadHash,
  ].join("\n");
  const date = input.amzDate.slice(0, 8);
  const scope = `${date}/${input.region}/${input.service}/aws4_request`;
  const stringToSign = ["AWS4-HMAC-SHA256", input.amzDate, scope, sha256Hex(canonicalRequest)].join("\n");
  const signature = createHmac("sha256", signingKey(input.secretAccessKey, date, input.region, input.service)).update(stringToSign, "utf8").digest("hex");
  return {
    authorization: `AWS4-HMAC-SHA256 Credential=${input.accessKeyId}/${scope}, SignedHeaders=${signedHeaders}, Signature=${signature}`,
    signature,
    canonicalRequest,
    stringToSign,
    signedHeaders,
  };
}
