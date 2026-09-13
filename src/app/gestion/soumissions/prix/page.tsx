import type { Metadata } from "next";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { readSettings } from "@/lib/soumissions/store";
import { PriceListEditor } from "@/components/gestion/soumissions/PriceListEditor";

export const metadata: Metadata = { title: "Liste de prix" };
export const dynamic = "force-dynamic";

export default async function PrixPage() {
  await requireAdmin();
  const s = await readSettings();
  return <PriceListEditor initial={{ packages: s.packages, extras: s.extras, labour: s.labour, discounts: s.discounts }} lengthUnit={s.defaults.lengthUnit} />;
}
