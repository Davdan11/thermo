/* sav.json et sav-photos/, à côté de gestion.json. Même écriture sous verrou (mutateJson de ../store). */

import path from "node:path";
import { gestionDataDir, mutateJson, readJson } from "../store";
import type { SavData, ServiceTicket } from "./types";

export const savFile = () => path.join(gestionDataDir(), "sav.json");
export const savPhotosDir = () => path.join(gestionDataDir(), "sav-photos");

export const emptySav = (): SavData => ({ version: 1, tickets: [], links: [] });

const arr = <T,>(v: unknown): T[] => (Array.isArray(v) ? (v as T[]) : []);

export function normalizeSav(d: Partial<SavData> | null | undefined): SavData {
  return {
    version: 1,
    tickets: arr<ServiceTicket>(d?.tickets).map((t) => ({ ...t, photos: arr(t.photos), events: arr(t.events), causeNote: t.causeNote ?? "", contactPreference: t.contactPreference ?? "" })),
    links: arr(d?.links),
  };
}

export async function readSav(): Promise<SavData> {
  return normalizeSav(await readJson<Partial<SavData> | null>(savFile(), () => null));
}

export function mutateSav<T>(fn: (data: SavData) => { result: T; changed: boolean } | Promise<{ result: T; changed: boolean }>): Promise<T> {
  return mutateJson<SavData, T>(savFile(), emptySav, normalizeSav, fn);
}
