/* ==================================================================
   Chantier S — archive tar (format ustar + en-têtes PAX pour les noms
   longs ou accentués), sans dépendance. Une fois déchiffrée et
   décompressée, l'archive s'ouvre aussi avec `tar xzf`.

   Dernière entrée : _manifeste-sauvegarde.json (taille et SHA-256 de
   chaque fichier). La restauration vérifie chaque fichier contre le
   manifeste : un fichier manquant, en trop ou modifié est une erreur.

   Exclus : .env* (les secrets sont sauvegardés à part, à la main),
   fichiers de verrou (.lock) et temporaires (.tmp).
   ================================================================== */

import { createHash } from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";

export const MANIFEST_NAME = "_manifeste-sauvegarde.json";

export interface ManifestFile {
  path: string;
  size: number;
  sha256: string;
}

export interface Manifest {
  version: 1;
  createdAt: string;
  files: ManifestFile[];
}

export function defaultExclude(rel: string): boolean {
  const base = rel.split("/").pop() ?? rel;
  return base.startsWith(".env") || base.endsWith(".lock") || base.endsWith(".tmp") || rel === MANIFEST_NAME;
}

/** Fichiers ordinaires sous `root` (chemins relatifs « / »), liens symboliques ignorés, ordre stable. */
export async function listFiles(root: string, exclude: (rel: string) => boolean = defaultExclude): Promise<string[]> {
  const out: string[] = [];
  async function walk(dir: string, rel: string) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    entries.sort((a, b) => (a.name < b.name ? -1 : 1));
    for (const e of entries) {
      const r = rel ? `${rel}/${e.name}` : e.name;
      if (e.isSymbolicLink()) continue;
      if (e.isDirectory()) await walk(path.join(dir, e.name), r);
      else if (e.isFile() && !exclude(r)) out.push(r);
    }
  }
  await walk(root, "");
  return out;
}

/* ---------------- Écriture ---------------- */

const BLOCK = 512;

function octal(buf: Buffer, off: number, len: number, n: number) {
  buf.write(n.toString(8).padStart(len - 1, "0") + "\0", off, len, "ascii");
}

function header(name: string, size: number, mtime: number, type: "0" | "x"): Buffer {
  const h = Buffer.alloc(BLOCK);
  h.write(name, 0, 100, "utf8");
  octal(h, 100, 8, 0o600);
  octal(h, 108, 8, 0);
  octal(h, 116, 8, 0);
  octal(h, 124, 12, size);
  octal(h, 136, 12, Math.floor(mtime));
  h.fill(" ", 148, 156);
  h.write(type, 156, 1, "ascii");
  h.write("ustar\0", 257, 6, "ascii");
  h.write("00", 263, 2, "ascii");
  let sum = 0;
  for (const b of h) sum += b;
  h.write(sum.toString(8).padStart(6, "0") + "\0 ", 148, 8, "ascii");
  return h;
}

const pad = (size: number) => Buffer.alloc((BLOCK - (size % BLOCK)) % BLOCK);

function paxRecord(key: string, value: string): Buffer {
  const body = ` ${key}=${value}\n`;
  let len = Buffer.byteLength(body) + 1;
  while (String(len).length + Buffer.byteLength(body) !== len) len = String(len).length + Buffer.byteLength(body);
  return Buffer.from(`${len}${body}`, "utf8");
}

function* entry(name: string, data: Buffer, mtime: number): Generator<Buffer> {
  // eslint-disable-next-line no-control-regex
  if (Buffer.byteLength(name) > 100 || /[^\x20-\x7e]/.test(name)) {
    const pax = paxRecord("path", name);
    yield header(`PaxHeader/${name.replace(/[^\x20-\x7e]/g, "_").slice(-80)}`, pax.length, mtime, "x");
    yield pax;
    yield pad(pax.length);
  }
  yield header(Buffer.byteLength(name) > 100 || /[^\x20-\x7e]/.test(name) ? name.replace(/[^\x20-\x7e]/g, "_").slice(-99) : name, data.length, mtime, "0");
  yield data;
  yield pad(data.length);
}

/**
 * Flux tar des fichiers de `root`. Chaque fichier est lu en entier (taille
 * de l'en-tête = contenu écrit, même si le site écrit pendant ce temps).
 * Un fichier disparu entre la liste et la lecture est simplement omis.
 */
export async function* tarStream(root: string, files: string[], stats: { files: number; bytes: number } = { files: 0, bytes: 0 }, now = new Date()): AsyncGenerator<Buffer> {
  const manifest: Manifest = { version: 1, createdAt: now.toISOString(), files: [] };
  for (const rel of files) {
    let data: Buffer;
    let mtime: number;
    try {
      data = await fs.readFile(path.join(root, ...rel.split("/")));
      mtime = (await fs.stat(path.join(root, ...rel.split("/")))).mtimeMs / 1000;
    } catch (err) {
      if ((err as NodeJS.ErrnoException).code === "ENOENT") continue;
      throw err;
    }
    manifest.files.push({ path: rel, size: data.length, sha256: createHash("sha256").update(data).digest("hex") });
    stats.files += 1;
    stats.bytes += data.length;
    yield* entry(rel, data, mtime);
  }
  yield* entry(MANIFEST_NAME, Buffer.from(JSON.stringify(manifest, null, 1)), now.getTime() / 1000);
  yield Buffer.alloc(BLOCK * 2);
}

/* ---------------- Lecture ---------------- */

export function safeRelPath(name: string): string | null {
  if (!name || name.includes("\0") || name.includes("\\") || name.startsWith("/") || /^[A-Za-z]:/.test(name)) return null;
  const parts = name.split("/").filter((p) => p !== "" && p !== ".");
  if (!parts.length || parts.some((p) => p === "..")) return null;
  return parts.join("/");
}

const str = (b: Buffer, off: number, len: number) => {
  const s = b.subarray(off, off + len);
  const z = s.indexOf(0);
  return (z < 0 ? s : s.subarray(0, z)).toString("utf8");
};

function parsePax(data: Buffer): Record<string, string> {
  const out: Record<string, string> = {};
  let i = 0;
  while (i < data.length) {
    const sp = data.indexOf(0x20, i);
    if (sp < 0) break;
    const len = Number.parseInt(data.subarray(i, sp).toString("ascii"), 10);
    if (!len) break;
    const rec = data.subarray(sp + 1, i + len - 1).toString("utf8");
    const eq = rec.indexOf("=");
    if (eq > 0) out[rec.slice(0, eq)] = rec.slice(eq + 1);
    i += len;
  }
  return out;
}

export interface ExtractResult {
  files: number;
  bytes: number;
  manifest: Manifest;
}

/**
 * Lit un flux tar (déjà décompressé), vérifie chaque fichier contre le manifeste
 * et, si `dest` est donné, écrit les fichiers (droits 600). Lève une erreur au
 * moindre écart : chemin dangereux, fichier absent du manifeste, empreinte fausse.
 */
export async function extractTar(source: AsyncIterable<Buffer | string>, dest?: string): Promise<ExtractResult> {
  let buf = Buffer.alloc(0);
  const seen = new Map<string, { size: number; sha256: string }>();
  let manifest: Manifest | null = null;
  let paxPath: string | null = null;
  let current: { name: string; size: number; type: string; chunks: Buffer[]; got: number } | null = null;
  let ended = false;

  const finishEntry = async (name: string, type: string, data: Buffer) => {
    if (type === "x") {
      paxPath = parsePax(data).path ?? null;
      return;
    }
    if (type !== "0" && type !== "\0" && type !== "") return; // dossiers, liens : ignorés
    const rel = safeRelPath(name);
    if (!rel) throw new Error(`Chemin refusé dans l’archive : ${JSON.stringify(name).slice(0, 120)}`);
    if (rel === MANIFEST_NAME) {
      manifest = JSON.parse(data.toString("utf8")) as Manifest;
      return;
    }
    seen.set(rel, { size: data.length, sha256: createHash("sha256").update(data).digest("hex") });
    if (dest) {
      const out = path.join(dest, ...rel.split("/"));
      if (!path.resolve(out).startsWith(path.resolve(dest) + path.sep)) throw new Error(`Chemin refusé : ${rel}`);
      await fs.mkdir(path.dirname(out), { recursive: true, mode: 0o700 });
      await fs.writeFile(out, data, { mode: 0o600, flag: "wx" });
    }
  };

  for await (const chunk of source) {
    buf = Buffer.concat([buf, typeof chunk === "string" ? Buffer.from(chunk) : chunk]);
    for (;;) {
      if (ended) break;
      if (!current) {
        if (buf.length < BLOCK) break;
        const h = buf.subarray(0, BLOCK);
        buf = buf.subarray(BLOCK);
        if (h.every((b) => b === 0)) {
          ended = true;
          break;
        }
        let sum = 0;
        for (let i = 0; i < BLOCK; i++) sum += i >= 148 && i < 156 ? 32 : h[i];
        if (Number.parseInt(str(h, 148, 8).trim(), 8) !== sum) throw new Error("Archive abîmée (somme de contrôle d’un en-tête).");
        const type = String.fromCharCode(h[156]);
        const prefix = str(h, 257, 6).startsWith("ustar") ? str(h, 345, 155) : "";
        let name = prefix ? `${prefix}/${str(h, 0, 100)}` : str(h, 0, 100);
        if (type !== "x" && paxPath) {
          name = paxPath;
          paxPath = null;
        }
        current = { name, size: Number.parseInt(str(h, 124, 12).trim() || "0", 8), type, chunks: [], got: 0 };
      }
      const need = current.size + ((BLOCK - (current.size % BLOCK)) % BLOCK);
      if (buf.length < need) break;
      const data = buf.subarray(0, current.size);
      buf = buf.subarray(need);
      const done = current;
      current = null;
      await finishEntry(done.name, done.type, Buffer.from(data));
    }
  }
  if (current) throw new Error("Archive tronquée.");
  const m = manifest as Manifest | null;
  if (!m || m.version !== 1 || !Array.isArray(m.files)) throw new Error("Manifeste absent : archive incomplète.");
  if (m.files.length !== seen.size) throw new Error(`Manifeste : ${m.files.length} fichiers attendus, ${seen.size} trouvés.`);
  let bytes = 0;
  for (const f of m.files) {
    const got = seen.get(f.path);
    if (!got) throw new Error(`Fichier manquant : ${f.path}`);
    if (got.size !== f.size || got.sha256 !== f.sha256) throw new Error(`Fichier modifié : ${f.path}`);
    bytes += f.size;
  }
  return { files: m.files.length, bytes, manifest: m };
}
