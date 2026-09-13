/* ==================================================================
   Chantier S — mots de passe à usage unique (RFC 4226 HOTP, RFC 6238
   TOTP), codés avec node:crypto, sans dépendance.
     - Clé partagée en base32 (RFC 4648), 20 octets par défaut.
     - Codes à 6 chiffres, période de 30 s, SHA-1 : réglages de toutes
       les applications d'authentification (Google, Microsoft, 1Password…).
     - Vérification sur une fenêtre de ±1 période, comparaison en temps
       constant, et refus d'un pas déjà utilisé (rejeu).
   ================================================================== */

import { createHmac, randomBytes, timingSafeEqual } from "node:crypto";

export type TotpAlgorithm = "sha1" | "sha256" | "sha512";

export interface TotpOptions {
  digits?: number;
  period?: number;
  algorithm?: TotpAlgorithm;
}

const B32 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";

export function base32Encode(buf: Buffer): string {
  let bits = 0;
  let value = 0;
  let out = "";
  for (const byte of buf) {
    value = (value << 8) | byte;
    bits += 8;
    while (bits >= 5) {
      out += B32[(value >>> (bits - 5)) & 31];
      bits -= 5;
    }
  }
  if (bits > 0) out += B32[(value << (5 - bits)) & 31];
  return out;
}

/** Tolère minuscules, espaces, tirets et remplissage « = ». Lève une erreur sur un caractère invalide. */
export function base32Decode(input: string): Buffer {
  const clean = input.toUpperCase().replace(/[\s=-]/g, "");
  let bits = 0;
  let value = 0;
  const out: number[] = [];
  for (const ch of clean) {
    const i = B32.indexOf(ch);
    if (i < 0) throw new Error("Clé base32 invalide.");
    value = (value << 5) | i;
    bits += 5;
    if (bits >= 8) {
      out.push((value >>> (bits - 8)) & 255);
      bits -= 8;
    }
  }
  return Buffer.from(out);
}

/** Nouvelle clé (20 octets = 160 bits, recommandé par la RFC 4226), en base32. */
export function newTotpSecret(bytes = 20): string {
  return base32Encode(randomBytes(bytes));
}

/** HOTP (RFC 4226) : troncature dynamique du HMAC du compteur. */
export function hotp(key: Buffer, counter: number, digits = 6, algorithm: TotpAlgorithm = "sha1"): string {
  const msg = Buffer.alloc(8);
  msg.writeBigUInt64BE(BigInt(counter));
  const mac = createHmac(algorithm, key).update(msg).digest();
  const offset = mac[mac.length - 1] & 0x0f;
  const bin = ((mac[offset] & 0x7f) << 24) | (mac[offset + 1] << 16) | (mac[offset + 2] << 8) | mac[offset + 3];
  return String(bin % 10 ** digits).padStart(digits, "0");
}

export function totpStep(timeMs: number, period = 30): number {
  return Math.floor(timeMs / 1000 / period);
}

/** Code TOTP pour un instant donné (millisecondes). `key` : octets bruts ou base32. */
export function totp(key: Buffer | string, timeMs = Date.now(), opts: TotpOptions = {}): string {
  const k = typeof key === "string" ? base32Decode(key) : key;
  return hotp(k, totpStep(timeMs, opts.period ?? 30), opts.digits ?? 6, opts.algorithm ?? "sha1");
}

function sameCode(a: string, b: string): boolean {
  const x = Buffer.from(a);
  const y = Buffer.from(b);
  return x.length === y.length && timingSafeEqual(x, y);
}

/**
 * Vérifie un code sur la fenêtre [pas-1, pas+1]. Renvoie le pas accepté (à mémoriser
 * pour refuser le rejeu) ou null. Un pas inférieur ou égal à `lastStep` est refusé.
 * Toutes les positions de la fenêtre sont comparées (pas de sortie hâtive).
 */
export function verifyTotp(key: Buffer | string, code: string, opts: TotpOptions & { timeMs?: number; window?: number; lastStep?: number | null } = {}): number | null {
  const digits = opts.digits ?? 6;
  const clean = String(code ?? "").replace(/\s/g, "");
  if (!new RegExp(`^\\d{${digits}}$`).test(clean)) return null;
  const k = typeof key === "string" ? base32Decode(key) : key;
  const now = totpStep(opts.timeMs ?? Date.now(), opts.period ?? 30);
  const w = opts.window ?? 1;
  let accepted: number | null = null;
  for (let s = now - w; s <= now + w; s++) {
    const match = sameCode(hotp(k, s, digits, opts.algorithm ?? "sha1"), clean);
    if (match && accepted === null && (opts.lastStep == null || s > opts.lastStep)) accepted = s;
  }
  return accepted;
}

/** Lien otpauth:// (format Google Authenticator) : ouvre l'application sur le téléphone. */
export function otpauthUri(o: { secret: string; account: string; issuer: string }): string {
  const label = encodeURIComponent(`${o.issuer}:${o.account}`);
  const q = new URLSearchParams({ secret: o.secret, issuer: o.issuer, algorithm: "SHA1", digits: "6", period: "30" });
  return `otpauth://totp/${label}?${q.toString()}`;
}

/** « JBSW Y3DP EHPK 3PXP » : la clé en groupes de 4, plus facile à recopier. */
export function groupSecret(secret: string): string {
  return secret.replace(/(.{4})/g, "$1 ").trim();
}
