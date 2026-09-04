"use server";

import { getPriceObservations } from "@/lib/pricing/queries";

export async function fetchPriceObservationsAction(params: { modelId?: string; configurationId?: string }) {
  return getPriceObservations(params);
}
