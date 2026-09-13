"use server";

/* ==================================================================
   Server Actions de la page Publicité. Chacune : requireAdmin() →
   validation (zod) → écriture → refresh(). Joignables par un POST
   direct : la session est vérifiée ici.
   ================================================================== */

import { refresh } from "next/cache";
import { z } from "zod";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { syncMetaPurchases } from "@/lib/ads/service";
import { mutatePublicite } from "@/lib/ads/store";

const settingsSchema = z.object({ installationConversion: z.enum(["on"]).optional() });

export async function saveAdsSettingsAction(formData: FormData): Promise<void> {
  const session = await requireAdmin();
  const parsed = settingsSchema.safeParse({ installationConversion: formData.get("installationConversion") ?? undefined });
  if (!parsed.success) return;
  const on = parsed.data.installationConversion === "on";
  await mutatePublicite((d) => {
    d.settings = { installationConversion: on, updatedAt: new Date().toISOString(), updatedBy: session.email };
    return { result: undefined, changed: true };
  });
  refresh();
}

export async function syncMetaAction(): Promise<void> {
  await requireAdmin();
  await syncMetaPurchases(new Date());
  refresh();
}
