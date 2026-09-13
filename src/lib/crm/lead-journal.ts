/* ==================================================================
   Journal local des leads — filet de sécurité.

   Chaque demande reçue est écrite ici AVANT tout appel externe, puis
   son résultat (affaire Pipedrive, courriels) est consigné. Si le CRM
   ou le courriel tombe, le lead reste lisible sur le serveur.

   Format : un objet JSON par ligne, un fichier par mois
   (data/leads/2026-09.jsonl). Le dossier est hors dépôt (.gitignore).
   Variable : LEAD_JOURNAL_DIR pour changer l'emplacement.
   ================================================================== */

import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";
import { randomUUID } from "node:crypto";
import type { Attribution } from "@/lib/attribution/core";

export type JournalKind = "soumission" | "appel-manque" | "message-vocal" | "appel-enregistre" | "rendez-vous" | "thermoscan" | "alerte-logisvert" | "thermomatch" | "relances" | "contact" | "partenaire" | "texto";

export interface JournalEntry {
  id: string;
  at: string;
  kind: JournalKind;
  lead: Record<string, unknown>;
  /** Arrivée du visiteur (formulaires du site) : page, domaine référent, utm, canal. Absente des entrées d'avant le suivi. */
  attribution?: Attribution;
  /** Consigné après les appels externes. */
  outcome?: {
    pipedrive: "ok" | "non-configure" | "erreur" | "sans-affaire";
    dealId?: number;
    error?: string;
    alertEmail?: boolean;
    clientEmail?: boolean;
    /** Rendez-vous : état de l'agenda Google et lien Meet obtenu. */
    agenda?: string;
    meetLink?: string | null;
    /** ThermoMatch : relances J+2 et J+7 planifiées (case cochée). */
    relances?: "planifiees" | "desabonne" | "erreur";
  };
}

export function journalDir(): string {
  return process.env.LEAD_JOURNAL_DIR || path.join(process.cwd(), "data", "leads");
}

function fileFor(date: Date): string {
  const ym = date.toISOString().slice(0, 7);
  return path.join(journalDir(), `${ym}.jsonl`);
}

/** Écrit une ligne. Renvoie false si l'écriture échoue ; ne lance jamais. */
async function append(entry: JournalEntry): Promise<boolean> {
  try {
    const dir = journalDir();
    await mkdir(dir, { recursive: true });
    await appendFile(fileFor(new Date(entry.at)), JSON.stringify(entry) + "\n", "utf8");
    return true;
  } catch (e) {
    console.error("[lead-journal] écriture impossible :", e);
    return false;
  }
}

/** Enregistre la réception d'un lead. Renvoie l'entrée créée et si l'écriture a réussi. */
export async function journalLead(kind: JournalKind, lead: Record<string, unknown>, attribution?: Attribution): Promise<{ entry: JournalEntry; written: boolean }> {
  const entry: JournalEntry = { id: randomUUID(), at: new Date().toISOString(), kind, lead, ...(attribution ? { attribution } : {}) };
  const written = await append(entry);
  return { entry, written };
}

/** Ajoute une ligne de résultat liée à l'entrée d'origine (même id). */
export async function journalOutcome(entry: JournalEntry, outcome: NonNullable<JournalEntry["outcome"]>): Promise<boolean> {
  return append({ id: entry.id, at: new Date().toISOString(), kind: entry.kind, lead: {}, outcome });
}
