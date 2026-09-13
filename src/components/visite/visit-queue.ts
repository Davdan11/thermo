/* ==================================================================
   Chantier D — file hors ligne de la visite photo (IndexedDB) :
   photos déjà compressées (Blob), par jeton. Survit à un
   rechargement ou à une coupure du réseau ; envoyée dès que le
   réseau revient. Sans IndexedDB (navigation privée stricte) :
   mémoire de l'onglet.
   ================================================================== */

import type { StepId } from "@/lib/visites/types";

export interface QueuedVisitPhoto {
  id: string;
  token: string;
  createdAt: number;
  step: StepId;
  unit: number | null;
  blob: Blob;
}

const DB_NAME = "tav-visite";
const STORE = "photos";
const memory = new Map<string, QueuedVisitPhoto>();
let dbPromise: Promise<IDBDatabase | null> | null = null;

function openDb(): Promise<IDBDatabase | null> {
  if (typeof indexedDB === "undefined") return Promise.resolve(null);
  dbPromise ??= new Promise((resolve) => {
    try {
      const req = indexedDB.open(DB_NAME, 1);
      req.onupgradeneeded = () => {
        const db = req.result;
        if (!db.objectStoreNames.contains(STORE)) db.createObjectStore(STORE, { keyPath: "id" }).createIndex("token", "token");
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

function run<T>(db: IDBDatabase, mode: IDBTransactionMode, fn: (s: IDBObjectStore) => IDBRequest<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    const req = fn(db.transaction(STORE, mode).objectStore(STORE));
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function queuePut(value: QueuedVisitPhoto): Promise<void> {
  const db = await openDb();
  if (!db) return void memory.set(value.id, value);
  try {
    await run(db, "readwrite", (s) => s.put(value));
  } catch {
    memory.set(value.id, value);
  }
}

export async function queueList(token: string): Promise<QueuedVisitPhoto[]> {
  const db = await openDb();
  let stored: QueuedVisitPhoto[] = [];
  if (db) {
    try {
      stored = await run(db, "readonly", (s) => s.index("token").getAll(token));
    } catch {
      stored = [];
    }
  }
  const all = new Map([...stored, ...[...memory.values()].filter((v) => v.token === token)].map((v) => [v.id, v]));
  return [...all.values()].sort((a, b) => a.createdAt - b.createdAt);
}

export async function queueRemove(id: string): Promise<void> {
  memory.delete(id);
  const db = await openDb();
  if (!db) return;
  try {
    await run(db, "readwrite", (s) => s.delete(id));
  } catch {
    /* rien à faire */
  }
}

export function queueId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) return crypto.randomUUID();
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;
}
