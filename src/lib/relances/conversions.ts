/* ==================================================================
   Soumissions et rendez-vous du journal local des leads (data/leads,
   un fichier .jsonl par mois ; shared/data/leads sur le VPS), pour
   arrêter les relances ThermoMatch dès que la personne a fait une
   demande. Seuls les fichiers des mois concernés sont lus.
   ================================================================== */
import { promises as fs } from "node:fs";
import path from "node:path";
import { journalDir } from "@/lib/crm/lead-journal";
import { conversionsFromJournal, type Conversion } from "./core";

export async function loadConversions(since: Date): Promise<Map<string, Conversion[]>> {
  const dir = journalDir();
  let files: string[];
  try {
    files = await fs.readdir(dir);
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === "ENOENT") return new Map();
    throw err;
  }
  const fromMonth = since.toISOString().slice(0, 7);
  const lines: string[] = [];
  for (const f of files.filter((f) => /^\d{4}-\d{2}\.jsonl$/.test(f) && f.slice(0, 7) >= fromMonth).sort()) {
    lines.push(...(await fs.readFile(path.join(dir, f), "utf8")).split("\n"));
  }
  return conversionsFromJournal(lines);
}
