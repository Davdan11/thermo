/* ==================================================================
   Chantier D — mémoire du créateur, dans soumissions-memoire.json
   (même dossier et même écriture sous verrou que les autres
   fichiers de l'outil). Aucune donnée d'un client : seulement les
   derniers choix du plan (memory.ts).
   ================================================================== */

import path from "node:path";
import { gestionDataDir, mutateJson, readJson } from "@/lib/gestion/store";
import { emptyMemory, normalizeMemory, rememberContent, type QuoteMemory } from "./memory";
import type { QuoteContent } from "./types";

export const memoryFile = () => path.join(gestionDataDir(), "soumissions-memoire.json");

export async function readMemory(): Promise<QuoteMemory> {
  return normalizeMemory(await readJson<unknown>(memoryFile(), () => null));
}

/** Après un enregistrement : chaque champ rempli devient le dernier choix. Jamais bloquant. */
export async function rememberQuote(content: QuoteContent, today: string, now = new Date()): Promise<void> {
  try {
    await mutateJson<QuoteMemory, void>(memoryFile(), emptyMemory, (d) => normalizeMemory(d), (m) => {
      Object.assign(m, rememberContent(m, content, today, now.toISOString()));
      return { result: undefined, changed: true };
    });
  } catch (e) {
    console.error("[soumissions] mémoire du créateur non enregistrée :", e instanceof Error ? e.message : e);
  }
}
