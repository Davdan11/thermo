/* ==================================================================
   Stockage des rendez-vous : fichier JSON à côté du journal des leads
   (shared/data/rendez-vous.json sur le VPS, data/rendez-vous.json en
   développement). Chemin imposable avec BOOKINGS_FILE.
   ================================================================== */
import { promises as fs } from "node:fs";
import path from "node:path";
import { journalDir } from "@/lib/crm/lead-journal";
import type { BookingRecord } from "./booking";

export function bookingsFile(): string {
  return process.env.BOOKINGS_FILE || path.join(path.dirname(journalDir()), "rendez-vous.json");
}

async function readAll(): Promise<BookingRecord[]> {
  try {
    const raw = await fs.readFile(bookingsFile(), "utf8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return [];
    throw err;
  }
}

async function writeAll(list: BookingRecord[]): Promise<void> {
  const file = bookingsFile();
  await fs.mkdir(path.dirname(file), { recursive: true });
  const tmp = `${file}.${process.pid}.tmp`;
  await fs.writeFile(tmp, JSON.stringify(list, null, 2));
  await fs.rename(tmp, file);
}

export async function listBookings(): Promise<BookingRecord[]> {
  return readAll();
}

export async function appendBooking(booking: BookingRecord): Promise<BookingRecord> {
  const list = await readAll();
  list.push(booking);
  await writeAll(list);
  return booking;
}

/** Met à jour une réservation (lien Meet, identifiant d'affaire) sans casser les autres. */
export async function updateBooking(id: string, patch: Partial<BookingRecord>): Promise<void> {
  const list = await readAll();
  const i = list.findIndex((b) => b.id === id);
  if (i < 0) return;
  list[i] = { ...list[i], ...patch };
  await writeAll(list);
}

// Sérialise les écritures d'un même processus : deux réservations simultanées
// sur la même plage ne peuvent pas passer toutes les deux.
let queue: Promise<unknown> = Promise.resolve();
export function withLock<T>(fn: () => Promise<T>): Promise<T> {
  const run = queue.then(fn, fn);
  queue = run.catch(() => undefined);
  return run;
}
