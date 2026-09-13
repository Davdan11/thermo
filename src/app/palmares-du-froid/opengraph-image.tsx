/* Aperçu de partage du Palmarès du froid (1200 × 630), rendu à partir des données du palmarès. */
import { PALMARES_EDITION } from "@/lib/blogue/palmares";
import { getPalmares } from "@/lib/blogue/palmares-site";
import { palmaresImage, PALMARES_VISUAL_SIZES } from "@/lib/blogue/palmares-visual";

export const alt = "Palmarès du froid : les nuits de janvier les plus froides du Québec, par municipalité";
export const size = PALMARES_VISUAL_SIZES.og;
export const contentType = "image/png";
export const revalidate = 604800;

export default async function Image() {
  return palmaresImage(getPalmares(), "og", PALMARES_EDITION);
}
