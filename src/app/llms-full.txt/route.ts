import { SITE_URL } from "@/lib/seo";
import { getAllGuides } from "@/lib/markdown";
import { RANKINGS } from "@/lib/seo/programmatic";
import { FAQ_ITEMS } from "@/app/faq/faqData";
import { GLOSSARY_TERMS } from "@/lib/glossary";

export const dynamic = "force-static";

/* ==================================================================
   llms-full.txt — version détaillée de llms.txt pour les assistants IA :
   les réponses de la FAQ, le glossaire, les classements et les guides, en texte brut.
   Mêmes sources que les pages : rien n'est écrit ici en double.
   ================================================================== */

export async function GET() {
  const guides = getAllGuides();
  const lines: string[] = [
    "# Thermopompes À Vendre.ca : version détaillée",
    "",
    `> Thermopompes À Vendre compare les thermopompes vendues au Québec à partir de la liste officielle LogisVert d'Hydro-Québec et des certifications ENERGY STAR et AHRI. Carte du site : ${SITE_URL}/llms.txt`,
    "",
    "## Questions fréquentes",
    `Source : ${SITE_URL}/faq`,
    "",
  ];

  for (const group of FAQ_ITEMS) {
    lines.push(`### ${group.category}`, "");
    for (const item of group.questions) lines.push(`Q : ${item.q}`, `R : ${item.a}`, "");
  }

  lines.push("## Glossaire", `Source : ${SITE_URL}/glossaire`, "");
  for (const t of [...GLOSSARY_TERMS].sort((a, b) => a.term.localeCompare(b.term))) lines.push(`- ${t.term} : ${t.definition}`);
  lines.push("");

  lines.push("## Classements", "");
  for (const r of RANKINGS) lines.push(`- ${r.title} : ${SITE_URL}/meilleures-thermopompes/${r.slug}`, `  ${r.description}`);

  lines.push("", "## Guides", "");
  for (const g of guides) {
    lines.push(`### ${g.title}`, `${SITE_URL}/guides/${g.slug}${g.updatedAt ? ` (mis à jour le ${String(g.updatedAt).slice(0, 10)})` : ""}`);
    if (g.description) lines.push(g.description);
    lines.push("");
  }

  lines.push(`Contact : 438-900-3224, ${SITE_URL}/contact`, "");

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
