#!/usr/bin/env node
/* Vérifie un guide Markdown avec les mêmes règles que le robot de blogue (frontmatter,
   longueur, sections, tirets cadratins, liens internes). Usage : node scripts/valider-guide.mjs <slug|chemin>… */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";

const ROOT = process.cwd();
const DIR = join(ROOT, "src/content/guides");
const existing = new Set(readdirSync(DIR).filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, "")));
const CATEGORIES = ["choisir", "comparer", "prix", "subventions", "installation", "entretien"];
const countWords = (md) => md.replace(/```[\s\S]*?```/g, " ").replace(/[#*_>`|-]/g, " ").split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;

let failed = 0;
for (const arg of process.argv.slice(2)) {
  const file = existsSync(arg) ? arg : join(DIR, `${arg}.md`);
  const { data: d, content } = matter(readFileSync(file, "utf8"));
  const errors = [];
  if (!d.title || d.title.length > 95) errors.push("title absent ou > 90 caractères");
  if (!d.description || d.description.length < 120 || d.description.length > 170) errors.push(`description hors 140-160 caractères (${d.description?.length ?? 0})`);
  if (!CATEGORIES.includes(d.category)) errors.push(`category invalide (${d.category})`);
  if (!Array.isArray(d.keywords) || d.keywords.length < 3) errors.push("keywords : 4 à 6 attendus");
  if (!Array.isArray(d.faq) || d.faq.length < 3 || d.faq.some((f) => !f?.q || !f?.a)) errors.push("faq : 4 objets q/a attendus");
  if (!d.coverImage || !existsSync(join(ROOT, "public", d.coverImage))) errors.push(`coverImage introuvable (${d.coverImage})`);
  const badRelated = (d.related ?? []).filter((s) => !existing.has(s));
  if (badRelated.length) errors.push(`related inconnus : ${badRelated.join(", ")}`);
  const words = countWords(content);
  if (words < 950) errors.push(`trop court (${words} mots)`);
  if (words > 1900) errors.push(`trop long (${words} mots)`);
  if ((content.match(/^## /gm) ?? []).length < 4) errors.push("moins de 5 sections H2");
  if (/—/.test(content) || /—/.test(JSON.stringify(d))) errors.push("tirets cadratins interdits");
  const links = [...content.matchAll(/\]\((\/[^)\s]+)\)/g)].map((m) => m[1]);
  const bad = links.filter((l) => !/^\/(trouver-ma-thermopompe|thermopompes|marques|meilleures-thermopompes|subventions|comparer|prix|thermopompe|thermoscan|rendez-vous|guides\/[a-z0-9-]+)(\/|$|\?|#)/.test(l) || (l.startsWith("/guides/") && !existing.has(l.split("/")[2].replace(/\/$/, ""))));
  if (bad.length) errors.push(`liens internes interdits ou inexistants : ${bad.join(", ")}`);
  const slug = file.split("/").pop().replace(/\.md$/, "");
  if (errors.length) { failed++; console.log(`✗ ${slug} (${words} mots)\n  - ${errors.join("\n  - ")}`); }
  else console.log(`✓ ${slug} : ${words} mots, ${(content.match(/^## /gm) ?? []).length} sections, ${links.length} liens`);
}
process.exit(failed ? 1 : 0);
