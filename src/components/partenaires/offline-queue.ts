/* ==================================================================
   File d'attente hors ligne de la page de chantier (IndexedDB) :
   opérations (en route, liste de contrôle, séries, signature,
   fermeture) et photos compressées (Blob), par jeton. Survit à un
   rechargement ; envoyée dès que le réseau revient. Sans IndexedDB
   (navigation privée stricte) : mémoire de l'onglet.
   ================================================================== */

import type { FieldOp } from "@/lib/gestion/terrain/rules";
import type { PhotoStep } from "@/lib/gestion/terrain/types";

export interface QueuedOp {
  id: string;
  token: string;
  createdAt: number;
  op: FieldOp;
}

export interface QueuedPhoto {
  id: string;
  token: string;
  createdAt: number;
  step: PhotoStep | null;
  ticketId: string | null;
  takenAt: string;
  blob: Blob;
}

type StoreName = "ops" | "photos";
const DB_NAME = "tav-chantier";
const memory: Record<StoreName, Map<string, QueuedOp | QueuedPhoto>> = { ops: new Map(), photos: new Map() };
let dbPromise: Promise<IDBDatabase | null> | null = null;

function openDb(): Promise<IDBDatabase | null> {
  if (typeof indexedDB === "undefined") return Promise.resolve(null);
  dbPromise ??= new Promise((resolve) => {
    try {
      const req = indexedDB.open(DB_NAME, 1);
      req.onupgradeneeded = () => {
        const db = req.result;
        for (const name of ["ops", "photos"] as StoreName[]) if (!db.objectStoreNames.contains(name)) db.createObjectStore(name, { keyPath: "id" }).createIndex("token", "token");
      };
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => resolve(null);
      req.onblocked = () => resolve(null);
    } catch {
      resolve(null);
    }
  });
  return dbPromise;
}

function run<T>(db: IDBDatabase, store: StoreName, mode: IDBTransactionMode, fn: (s: IDBObjectStore) => IDBRequest<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    const tx = db.transaction(store, mode);
    const req = fn(tx.objectStore(store));
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function put(store: "ops", value: QueuedOp): Promise<void>;
export async function put(store: "photos", value: QueuedPhoto): Promise<void>;
export async function put(store: StoreName, value: QueuedOp | QueuedPhoto): Promise<void> {
  const db = await openDb();
  if (!db) {
    memory[store].set(value.id, value);
    return;
  }
  try {
    await run(db, store, "readwrite", (s) => s.put(value));
  } catch {
    memory[store].set(value.id, value);
  }
}

export async function list(store: "ops", token: string): Promise<QueuedOp[]>;
export async function list(store: "photos", token: string): Promise<QueuedPhoto[]>;
export async function list(store: StoreName, token: string): Promise<Array<QueuedOp | QueuedPhoto>> {
  const fromMemory = [...memory[store].values()].filter((v) => v.token === token);
  const db = await openDb();
  let stored: Array<QueuedOp | QueuedPhoto> = [];
  if (db) {
    try {
      stored = await run(db, store, "readonly", (s) => s.index("token").getAll(token));
    } catch {
      stored = [];
    }
  }
  const all = new Map([...stored, ...fromMemory].map((v) => [v.id, v]));
  return [...all.values()].sort((a, b) => a.createdAt - b.createdAt);
}

export async function remove(store: StoreName, id: string): Promise<void> {
  memory[store].delete(id);
  const db = await openDb();
  if (!db) return;
  try {
    await run(db, store, "readwrite", (s) => s.delete(id));
  } catch {
    /* rien à faire */
  }
}

export function newId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;
}
