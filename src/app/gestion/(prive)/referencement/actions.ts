"use server";

/* ==================================================================
   Server Actions de la page Référencement. Chacune : requireAdmin()
   (propriétaire seulement) → validation → écriture → refresh().
   Joignables par un POST direct : la session est vérifiée ici.
   ================================================================== */

import { refresh } from "next/cache";
import { z } from "zod";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { SITE_URL } from "@/lib/seo";
import { searchConsoleOverview } from "@/lib/seo/search-console";
import { readTrackedKeywords, saveTrackedKeywords } from "@/lib/seo/search-console-store";

const keywordsSchema = z.object({ keywords: z.string().max(5_000) });

/** Remplace la liste des mots-clés suivis (une ligne par mot-clé ; vide : liste par défaut). */
export async function saveKeywordsAction(formData: FormData): Promise<void> {
  await requireAdmin();
  const parsed = keywordsSchema.safeParse({ keywords: formData.get("keywords") ?? "" });
  if (!parsed.success) return;
  await saveTrackedKeywords(parsed.data.keywords);
  refresh();
}

/** « Actualiser » : relit la Search Console, sauf si le cache a moins de 10 minutes (quotas). */
export async function refreshSearchConsoleAction(): Promise<void> {
  await requireAdmin();
  await searchConsoleOverview({ siteUrl: SITE_URL, keywords: await readTrackedKeywords(), force: true });
  refresh();
}
