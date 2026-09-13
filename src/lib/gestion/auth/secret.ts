/* ==================================================================
   Clé de signature des sessions.
   ADMIN_SESSION_SECRET si défini (32 caractères au moins) ; sinon une
   clé aléatoire de 32 octets est créée au premier usage dans
   shared/data/gestion-secret.key (droits 600) et relue ensuite : le
   propriétaire n'a jamais à manipuler de secret. Supprimer ce fichier
   déconnecte toutes les sessions.
   ================================================================== */

import { promises as fs } from "node:fs";
import path from "node:path";
import { randomBytes } from "node:crypto";
import { secretFile } from "../store";

let cached: { key: Buffer; source: string } | null = null;

export async function getSessionSecret(): Promise<Buffer> {
  const env = process.env.ADMIN_SESSION_SECRET?.trim();
  if (env && env.length >= 32) return Buffer.from(env, "utf8");
  const file = secretFile();
  if (cached && cached.source === file) return cached.key;
  const key = await readOrCreate(file);
  cached = { key, source: file };
  return key;
}

async function readOrCreate(file: string): Promise<Buffer> {
  try {
    return decode(await fs.readFile(file, "utf8"));
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code !== "ENOENT") throw err;
  }
  await fs.mkdir(path.dirname(file), { recursive: true });
  const value = randomBytes(32).toString("base64url");
  try {
    // « wx » : si un autre processus l'a créé entre-temps, on relit le sien.
    await fs.writeFile(file, value + "\n", { flag: "wx", mode: 0o600 });
    return decode(value);
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "EEXIST") return decode(await fs.readFile(file, "utf8"));
    throw err;
  }
}

function decode(raw: string): Buffer {
  const key = Buffer.from(raw.trim(), "base64url");
  if (key.length < 32) throw new Error("gestion-secret.key invalide (moins de 32 octets) : supprimez-le pour en générer un nouveau.");
  return key;
}

/** Pour les tests : oublie la clé en mémoire. */
export function resetSecretCache(): void {
  cached = null;
}
