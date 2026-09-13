/* ==================================================================
   Chantier S — client S3 minimal (PUT, GET, LIST, DELETE) signé en
   SigV4, sans dépendance. Adresse « chemin » : <endpoint>/<bucket>/<clé>
   (Backblaze B2, Wasabi, AWS S3, MinIO).
   Variables : BACKUP_S3_ENDPOINT, BACKUP_S3_BUCKET, BACKUP_S3_KEY_ID,
   BACKUP_S3_SECRET, BACKUP_S3_REGION. Sans elles : inactif.
   Le transport est injectable : les tests n'ouvrent aucune connexion.
   Les messages d'erreur ne contiennent jamais l'en-tête signé ni le secret.
   ================================================================== */

import { createReadStream, createWriteStream, promises as fs } from "node:fs";
import http from "node:http";
import https from "node:https";
import { pipeline } from "node:stream/promises";
import { amzDate, EMPTY_SHA256, signV4, uriEncode } from "./sigv4";

export interface S3Config {
  endpoint: string;
  bucket: string;
  keyId: string;
  secret: string;
  region: string;
}

export const S3_VARS = ["BACKUP_S3_ENDPOINT", "BACKUP_S3_BUCKET", "BACKUP_S3_KEY_ID", "BACKUP_S3_SECRET", "BACKUP_S3_REGION"] as const;

export function s3ConfigFromEnv(env: Record<string, string | undefined> = process.env): { ok: true; config: S3Config } | { ok: false; missing: string[]; error?: string } {
  const missing = S3_VARS.filter((k) => !env[k]?.trim());
  if (missing.length) return { ok: false, missing };
  const endpoint = env.BACKUP_S3_ENDPOINT!.trim().replace(/\/+$/, "");
  let u: URL;
  try {
    u = new URL(endpoint);
  } catch {
    return { ok: false, missing: [], error: "BACKUP_S3_ENDPOINT n’est pas une adresse valide." };
  }
  const local = u.hostname === "127.0.0.1" || u.hostname === "localhost";
  if (u.protocol !== "https:" && !(local && u.protocol === "http:")) return { ok: false, missing: [], error: "BACKUP_S3_ENDPOINT doit commencer par https://." };
  return { ok: true, config: { endpoint: `${u.protocol}//${u.host}`, bucket: env.BACKUP_S3_BUCKET!.trim(), keyId: env.BACKUP_S3_KEY_ID!.trim(), secret: env.BACKUP_S3_SECRET!.trim(), region: env.BACKUP_S3_REGION!.trim() } };
}

/** Hôte seulement (affichable) : « s3.us-east-005.backblazeb2.com ». */
export function endpointHost(env: Record<string, string | undefined> = process.env): string | null {
  try {
    return env.BACKUP_S3_ENDPOINT ? new URL(env.BACKUP_S3_ENDPOINT).host : null;
  } catch {
    return null;
  }
}

export interface HttpRequest {
  method: "GET" | "PUT" | "DELETE";
  url: string;
  headers: Record<string, string>;
  body?: Buffer | { file: string; size: number };
  /** GET : écrire le corps dans ce fichier (réponse 200 seulement). */
  saveTo?: string;
}

export interface HttpResponse {
  status: number;
  body: string;
}

export type Transport = (req: HttpRequest) => Promise<HttpResponse>;

/** Transport réel (node:https). Corps de fichier envoyé en flux, avec Content-Length. */
export const httpsTransport: Transport = (req) =>
  new Promise((resolve, reject) => {
    const u = new URL(req.url);
    const mod = u.protocol === "http:" ? http : https;
    const r = mod.request(u, { method: req.method, headers: req.headers, timeout: 10 * 60 * 1000 }, (res) => {
      const status = res.statusCode ?? 0;
      if (req.saveTo && status === 200) {
        pipeline(res, createWriteStream(req.saveTo, { mode: 0o600 }))
          .then(() => resolve({ status, body: "" }))
          .catch(reject);
        return;
      }
      const chunks: Buffer[] = [];
      res.on("data", (c: Buffer) => chunks.length < 2000 && chunks.push(c));
      res.on("end", () => resolve({ status, body: Buffer.concat(chunks).toString("utf8") }));
      res.on("error", reject);
    });
    r.on("timeout", () => r.destroy(new Error("Délai dépassé (S3).")));
    r.on("error", reject);
    if (!req.body) r.end();
    else if (Buffer.isBuffer(req.body)) r.end(req.body);
    else pipeline(createReadStream(req.body.file), r).catch(reject);
  });

function s3Error(op: string, res: HttpResponse): Error {
  const code = /<Code>([^<]{1,80})<\/Code>/.exec(res.body)?.[1];
  const msg = /<Message>([^<]{1,200})<\/Message>/.exec(res.body)?.[1];
  return new Error(`S3 ${op} : HTTP ${res.status}${code ? ` ${code}` : ""}${msg ? ` (${msg})` : ""}`);
}

const xmlDecode = (s: string) => s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&amp;/g, "&");

export class S3Client {
  constructor(
    private cfg: S3Config,
    private transport: Transport = httpsTransport,
    private clock: () => Date = () => new Date(),
  ) {}

  private url(key: string, query = ""): string {
    const path = key ? `/${uriEncode(this.cfg.bucket)}/${uriEncode(key, false)}` : `/${uriEncode(this.cfg.bucket)}`;
    return `${this.cfg.endpoint}${path}${query ? `?${query}` : ""}`;
  }

  private sign(method: HttpRequest["method"], url: string, payloadHash: string, extra: Record<string, string> = {}): Record<string, string> {
    const date = amzDate(this.clock());
    const headers: Record<string, string> = { host: new URL(url).host, "x-amz-date": date, "x-amz-content-sha256": payloadHash, ...extra };
    const s = signV4({ method, url, headers, payloadHash, region: this.cfg.region, service: "s3", accessKeyId: this.cfg.keyId, secretAccessKey: this.cfg.secret, amzDate: date });
    return { ...headers, authorization: s.authorization };
  }

  async putFile(key: string, file: string, sha256: string): Promise<void> {
    const { size } = await fs.stat(file);
    const url = this.url(key);
    const headers = this.sign("PUT", url, sha256, { "content-length": String(size), "content-type": "application/octet-stream" });
    const res = await this.transport({ method: "PUT", url, headers, body: { file, size } });
    if (res.status < 200 || res.status >= 300) throw s3Error(`envoi de ${key}`, res);
  }

  async getToFile(key: string, dest: string): Promise<void> {
    const url = this.url(key);
    const res = await this.transport({ method: "GET", url, headers: this.sign("GET", url, EMPTY_SHA256), saveTo: dest });
    if (res.status !== 200) throw s3Error(`lecture de ${key}`, res);
  }

  async delete(key: string): Promise<void> {
    const url = this.url(key);
    const res = await this.transport({ method: "DELETE", url, headers: this.sign("DELETE", url, EMPTY_SHA256) });
    if (res.status !== 204 && res.status !== 200) throw s3Error(`suppression de ${key}`, res);
  }

  /** Toutes les clés sous un préfixe (ListObjectsV2, pages de 1000). */
  async list(prefix: string): Promise<string[]> {
    const keys: string[] = [];
    let token: string | null = null;
    for (let page = 0; page < 50; page++) {
      const q: string[] = ["list-type=2", `prefix=${uriEncode(prefix)}`];
      if (token) q.push(`continuation-token=${uriEncode(token)}`);
      const url = this.url("", q.join("&"));
      const res = await this.transport({ method: "GET", url, headers: this.sign("GET", url, EMPTY_SHA256) });
      if (res.status !== 200) throw s3Error("liste", res);
      for (const m of res.body.matchAll(/<Key>([^<]*)<\/Key>/g)) keys.push(xmlDecode(m[1]));
      const truncated = /<IsTruncated>true<\/IsTruncated>/.test(res.body);
      token = truncated ? xmlDecode(/<NextContinuationToken>([^<]*)<\/NextContinuationToken>/.exec(res.body)?.[1] ?? "") : null;
      if (!token) break;
    }
    return keys;
  }
}
