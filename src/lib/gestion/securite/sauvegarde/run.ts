/* ==================================================================
   Chantier S — une sauvegarde hors serveur, de bout en bout :
     1. archive tar.gz chiffrée (AES-256-GCM) de shared/data ;
     2. vérification complète du fichier produit (déchiffrement,
        manifeste) : une sauvegarde illisible n'est jamais envoyée ;
     3. envoi S3 (quotidienne, + mensuelle au premier passage du mois) ;
     4. rotation : 30 quotidiennes, 12 mensuelles ;
     5. état noté dans sauvegardes-etat.json (page Sécurité) ;
        en cas d'échec : alerte au propriétaire (courriel + texto).
   Inactif (rien n'est fait, aucune alerte) tant qu'aucune variable
   BACKUP_* n'est définie. Configuration partielle = échec + alerte.
   ================================================================== */

import { randomBytes } from "node:crypto";
import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";
import { gestionDataDir } from "../../store";
import { createEncryptedBackup, parseBackupKey, verifyBackup } from "./chiffrement";
import { dailyKey, DEFAULT_PREFIX, monthlyKey, needsMonthly, planRotation } from "./rotation";
import { endpointHost, S3Client, s3ConfigFromEnv, S3_VARS, type Transport } from "./s3";

export interface BackupStatus {
  state: "reussie" | "echec" | "inactive";
  at: string;
  message?: string;
  key?: string;
  monthly?: string | null;
  size?: number;
  files?: number;
  durationMs?: number;
  kept?: { daily: number; monthly: number };
  removed?: number;
  destination?: string | null;
  lastSuccessAt?: string | null;
}

export const backupStatusFile = () => path.join(gestionDataDir(), "sauvegardes-etat.json");

export async function readBackupStatus(): Promise<BackupStatus | null> {
  try {
    return JSON.parse(await fs.readFile(backupStatusFile(), "utf8")) as BackupStatus;
  } catch {
    return null;
  }
}

async function writeStatus(file: string, s: BackupStatus): Promise<void> {
  await fs.mkdir(path.dirname(file), { recursive: true });
  const tmp = `${file}.${process.pid}.${Date.now()}.tmp`;
  await fs.writeFile(tmp, JSON.stringify(s, null, 1), { mode: 0o600 });
  await fs.rename(tmp, file);
}

/** État de la configuration, sans aucune valeur (page Sécurité). */
export function backupConfigState(env: Record<string, string | undefined> = process.env): { configured: boolean; missing: string[]; keyOk: boolean; host: string | null; any: boolean } {
  const all = [...S3_VARS, "BACKUP_ENCRYPTION_KEY"];
  const missing = all.filter((k) => !env[k]?.trim());
  let keyOk = false;
  try {
    parseBackupKey(env.BACKUP_ENCRYPTION_KEY);
    keyOk = true;
  } catch {
    /* absente ou invalide */
  }
  return { configured: missing.length === 0 && keyOk, missing, keyOk, host: endpointHost(env), any: missing.length < all.length };
}

export type Alert = (subject: string, detail: string) => Promise<void>;

export interface RunOptions {
  dataDir?: string;
  env?: Record<string, string | undefined>;
  now?: Date;
  transport?: Transport;
  alert?: Alert;
  workDir?: string;
  prefix?: string;
  statusFile?: string;
  log?: (line: string) => void;
}

export async function runBackup(opts: RunOptions = {}): Promise<BackupStatus> {
  const env = opts.env ?? process.env;
  const now = opts.now ?? new Date();
  const log = opts.log ?? (() => undefined);
  const statusFile = opts.statusFile ?? backupStatusFile();
  const prefix = opts.prefix ?? DEFAULT_PREFIX;
  const previous = await fs.readFile(statusFile, "utf8").then((t) => JSON.parse(t) as BackupStatus, () => null);
  const conf = backupConfigState(env);
  const base = { at: now.toISOString(), destination: conf.host, lastSuccessAt: previous?.lastSuccessAt ?? null };

  if (!conf.any) {
    const s: BackupStatus = { ...base, state: "inactive", message: "Aucune destination de sauvegarde (variables BACKUP_* absentes)." };
    await writeStatus(statusFile, s);
    log(s.message!);
    return s;
  }

  const started = Date.now();
  const work = await fs.mkdtemp(path.join(opts.workDir ?? os.tmpdir(), "thermo-sauvegarde-"));
  try {
    const cfg = s3ConfigFromEnv(env);
    if (!cfg.ok) throw new Error(cfg.error ?? `Configuration incomplète : ${cfg.missing.join(", ")}.`);
    if (!env.BACKUP_ENCRYPTION_KEY?.trim()) throw new Error("BACKUP_ENCRYPTION_KEY absente : aucune sauvegarde n’est envoyée sans chiffrement.");
    const key = parseBackupKey(env.BACKUP_ENCRYPTION_KEY);
    const dataDir = opts.dataDir ?? gestionDataDir();
    const file = path.join(work, `thermo-${randomBytes(4).toString("hex")}.tavsauv`);

    log(`Archive chiffrée de ${dataDir}…`);
    const created = await createEncryptedBackup(dataDir, file, key, { now });
    log(`  ${created.files} fichiers, ${created.bytes} octets → ${created.size} octets chiffrés.`);

    await verifyBackup(file, key, { tmpDir: work });
    log("  Vérification : déchiffrement et manifeste corrects.");

    const client = new S3Client(cfg.config, opts.transport);
    const dKey = dailyKey(prefix, now);
    await client.putFile(dKey, file, created.sha256);
    log(`  Envoyée : ${dKey}`);

    const keys = await client.list(prefix);
    if (!keys.includes(dKey)) keys.push(dKey);
    let mKey: string | null = null;
    if (needsMonthly(keys, prefix, now)) {
      mKey = monthlyKey(prefix, now);
      await client.putFile(mKey, file, created.sha256);
      keys.push(mKey);
      log(`  Mensuelle : ${mKey}`);
    }

    const plan = planRotation(keys, prefix);
    for (const k of plan.remove) {
      await client.delete(k);
      log(`  Rotation : ${k} supprimée.`);
    }

    const s: BackupStatus = {
      ...base,
      state: "reussie",
      key: dKey,
      monthly: mKey,
      size: created.size,
      files: created.files,
      durationMs: Date.now() - started,
      kept: { daily: plan.daily, monthly: plan.monthly },
      removed: plan.remove.length,
      lastSuccessAt: now.toISOString(),
    };
    await writeStatus(statusFile, s);
    return s;
  } catch (e) {
    const message = ((e as Error)?.message ?? String(e)).slice(0, 400);
    const s: BackupStatus = { ...base, state: "echec", message, durationMs: Date.now() - started };
    await writeStatus(statusFile, s).catch(() => undefined);
    log(`ÉCHEC : ${message}`);
    if (opts.alert) {
      await opts
        .alert("Sauvegarde hors serveur en échec", `La sauvegarde de ${now.toLocaleString("fr-CA", { timeZone: "America/Toronto" })} a échoué : ${message}`)
        .catch((err) => log(`Alerte impossible : ${(err as Error)?.message}`));
    }
    return s;
  } finally {
    await fs.rm(work, { recursive: true, force: true });
  }
}
