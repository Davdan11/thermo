import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/gestion/auth/dal";

/* Les jobs sont listés sur le tableau de bord. */
export default async function JobsIndex() {
  await requireAdmin();
  redirect("/gestion");
}
