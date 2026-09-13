/* ==================================================================
   Chantier S — écriture sûre d'une variable dans shared/.env.

   Production : le fichier .env de la version servie (lien symbolique
   vers shared/.env) est suivi jusqu'à sa cible réelle ; c'est la cible
   qui est remplacée (le lien reste intact). GESTION_ENV_FILE peut
   l'imposer.
   Développement et tests : SEUL le fichier d'essai
   <données>/gestion-env-essai/.env peut être écrit ; tout autre chemin
   (.env.local et ses vraies clés compris) est refusé.

   Chaque écriture : verrou (fichier .lock), copie de sauvegarde
   datée (droits 600, 10 dernières gardées), remplacement propre de la
   ligne (doublons retirés, autres lignes et fins de ligne intactes),
   fichier temporaire puis renommage, droits 600.

   Redémarrage (production seulement) : `pm2 reload thermo --update-env`
   lancé en processus détaché, 2 s plus tard, avec un environnement
   minimal : sans les variables de .env, pour que Next.js relise le
   fichier au démarrage au lieu de garder les anciennes valeurs.
   ================================================================== */

import { spawn } from "node:child_process";
import { promises as fs } from "node:fs";
import path from "node:path";
import { withFileLock } from "@/lib/alerts/logisvert-alerts-store";
import { gestionDataDir } from "../store";

export const envTestDir = () => path.join(gestionDataDir(), "gestion-env-essai");
const KEEP_BACKUPS = 10;
const NAME_RE = /^[A-Z][A-Z0-9_]{0,63}$/;
type Env = Record<string, string | undefined>;

export interface EnvTarget {
  file: string;
  mode: "production" | "essai";
}

export class EnvTargetRefused extends Error {}

function inside(child: string, dir: string): boolean {
  const c = path.resolve(child);
  const d = path.resolve(dir);
  return c.startsWith(d + path.sep);
}

/** Fichier à modifier. Hors production, refuse tout fichier hors du dossier d'essai. */
export async function resolveEnvTarget(env: Env = process.env): Promise<EnvTarget> {
  if (env.NODE_ENV === "production") {
    const f = env.GESTION_ENV_FILE || path.join(process.cwd(), ".env");
    const real = await fs.realpath(f).catch(() => null);
    if (!real) throw new EnvTargetRefused("Fichier .env introuvable sur le serveur.");
    return { file: real, mode: "production" };
  }
  const dir = envTestDir();
  const f = env.GESTION_ENV_FILE ? path.resolve(env.GESTION_ENV_FILE) : path.join(dir, ".env");
  assertTestTarget(f);
  return { file: f, mode: "essai" };
}

/** Garde-fou hors production : jamais un fichier hors du dossier d'essai. */
export function assertTestTarget(file: string): void {
  if (!inside(file, envTestDir()) || /\.env\.local$/.test(file)) {
    throw new EnvTargetRefused("En développement, seul le fichier d’essai (gestion-env-essai/.env) peut être modifié.");
  }
}

/* ---------------- Texte du fichier ---------------- */

const SAFE_BARE = /^[A-Za-z0-9_\-.:/@+,=]*$/;

/** KEY=valeur, ou KEY='valeur' si un caractère pourrait être interprété (shell, dotenv). */
export function formatEnvLine(name: string, value: string): string {
  if (!NAME_RE.test(name)) throw new Error("Nom de variable invalide.");
  if (/['"`$\\\r\n]/.test(value)) throw new Error("Valeur refusée (guillemets, $, \\ ou retour de ligne).");
  return SAFE_BARE.test(value) ? `${name}=${value}` : `${name}='${value}'`;
}

const lineRe = (name: string) => new RegExp(`^\\s*(?:export\\s+)?${name}\\s*=`);

/** Remplace (ou ajoute, ou retire si `value` est null) une variable. Fins de ligne du fichier conservées. */
export function replaceEnvVar(text: string, name: string, value: string | null): { text: string; changed: boolean } {
  if (!NAME_RE.test(name)) throw new Error("Nom de variable invalide.");
  const eol = text.includes("\r\n") ? "\r\n" : "\n";
  const lines = text.length ? text.split(/\r?\n/) : [];
  if (lines.length && lines[lines.length - 1] === "") lines.pop();
  const re = lineRe(name);
  const next: string[] = [];
  let placed = false;
  const line = value === null ? null : formatEnvLine(name, value);
  for (const l of lines) {
    if (re.test(l)) {
      if (!placed && line !== null) next.push(line);
      placed = true;
      continue;
    }
    next.push(l);
  }
  if (!placed && line !== null) next.push(line);
  const out = next.length ? next.join(eol) + eol : "";
  return { text: out, changed: out !== text };
}

/** Valeurs du fichier (serveur seulement : jamais renvoyées au navigateur). */
export function parseEnvText(text: string): Map<string, string> {
  const out = new Map<string, string>();
  for (const l of text.split(/\r?\n/)) {
    const m = /^\s*(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/.exec(l);
    if (!m) continue;
    let v = m[2].trim();
    if ((v.startsWith("'") && v.endsWith("'")) || (v.startsWith('"') && v.endsWith('"'))) v = v.slice(1, -1);
    else v = v.replace(/\s+#.*$/, "");
    out.set(m[1], v);
  }
  return out;
}

export async function readEnvValues(target?: EnvTarget): Promise<Map<string, string>> {
  const t = target ?? (await resolveEnvTarget());
  try {
    return parseEnvText(await fs.readFile(t.file, "utf8"));
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return new Map();
    throw err;
  }
}

/* ---------------- Écriture ---------------- */

const stamp = (d: Date) => d.toISOString().replace(/[-:]/g, "").replace(/\..+/, "");

async function pruneBackups(file: string): Promise<void> {
  const dir = path.dirname(file);
  const base = `${path.basename(file)}.sauvegarde-`;
  const olds = (await fs.readdir(dir)).filter((n) => n.startsWith(base)).sort();
  for (const n of olds.slice(0, Math.max(0, olds.length - KEEP_BACKUPS))) await fs.rm(path.join(dir, n), { force: true });
}

export interface WriteResult {
  changed: boolean;
  backup: string | null;
}

/** Écrit (ou retire) une variable sous verrou, avec copie de sauvegarde et droits 600. */
export async function writeEnvVar(name: string, value: string | null, opts: { target?: EnvTarget; now?: Date } = {}): Promise<WriteResult> {
  const target = opts.target ?? (await resolveEnvTarget());
  if (target.mode !== "production") assertTestTarget(target.file);
  const now = opts.now ?? new Date();
  await fs.mkdir(path.dirname(target.file), { recursive: true, mode: 0o700 });
  return withFileLock(target.file, async () => {
    let text = "";
    try {
      text = await fs.readFile(target.file, "utf8");
    } catch (err) {
      if ((err as NodeJS.ErrnoException).code !== "ENOENT" || target.mode === "production") throw err;
    }
    const next = replaceEnvVar(text, name, value);
    if (!next.changed) return { changed: false, backup: null };
    let backup: string | null = null;
    if (text) {
      backup = `${target.file}.sauvegarde-${stamp(now)}-${process.pid}`;
      await fs.writeFile(backup, text, { mode: 0o600, flag: "wx" });
      await fs.chmod(backup, 0o600);
      await pruneBackups(target.file);
    }
    const tmp = `${target.file}.${process.pid}.${Date.now()}.tmp`;
    await fs.writeFile(tmp, next.text, { mode: 0o600 });
    await fs.chmod(tmp, 0o600);
    await fs.rename(tmp, target.file);
    await fs.chmod(target.file, 0o600);
    return { changed: true, backup };
  });
}

/* ---------------- Redémarrage ---------------- */

export function reloadCommand(env: Env = process.env): { bin: string; args: string[] } {
  const bin = env.PM2_BIN || path.join(path.dirname(process.execPath), "pm2");
  const app = /^[A-Za-z0-9_-]{1,40}$/.test(env.PM2_APP_NAME ?? "") ? env.PM2_APP_NAME! : "thermo";
  return { bin, args: ["reload", app, "--update-env"] };
}

/** Environnement minimal du processus pm2 : aucune variable de .env (Next.js les relit au démarrage). */
export function reloadEnv(env: Env = process.env): Env {
  const keep = ["PATH", "HOME", "USER", "LANG", "TZ", "PM2_HOME", "NODE_ENV", "PORT", "NODE_OPTIONS"];
  const out: Env = {};
  for (const k of keep) if (env[k] !== undefined) out[k] = env[k];
  return out;
}

export type Spawner = typeof spawn;

/** Production : relance du site en processus détaché (le processus courant sera remplacé). Ailleurs : rien. */
export function scheduleReload(spawner: Spawner = spawn, env: Env = process.env): "planifie" | "hors-production" {
  if (env.NODE_ENV !== "production") return "hors-production";
  const { bin, args } = reloadCommand(env);
  const child = spawner("/bin/sh", ["-c", 'sleep 2; exec "$0" "$@"', bin, ...args], { detached: true, stdio: "ignore", env: reloadEnv(env) as NodeJS.ProcessEnv });
  child.unref();
  return "planifie";
}
