#!/usr/bin/env node
/* ==================================================================
   Robot de blogue : un article SEO par passage, avec sa photo générée.

   1. choisit le prochain sujet de data/blog/sujets.json non publié ;
   2. calcule le contexte factuel (scripts/blog-context.ts) : ce sont les
      seuls chiffres autorisés dans l'article ;
   3. demande l'article à l'API Anthropic (Markdown + frontmatter) ;
   4. valide (frontmatter, longueur, liens, chiffres suspects) et réessaie
      une fois avec les erreurs en retour ;
   5. génère la photo de couverture (OpenAI gpt-image-1 ou Google Imagen)
      à partir d'une description écrite pour l'article, jamais une image du site ;
   6. écrit src/content/guides/<slug>.md, public/images/guides/generes/<slug>.webp
      et data/blog/publies.json.

   Variables : ANTHROPIC_API_KEY (requis), OPENAI_API_KEY ou GEMINI_API_KEY (requis
   pour la photo), BLOG_BOT_MODEL (défaut claude-sonnet-5).
   Usage : node scripts/blog-bot.mjs [--topic <slug>] [--dry-run]
   ================================================================== */
import { execSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import matter from "gray-matter";
import sharp from "sharp";

const ROOT = process.cwd();
const args = process.argv.slice(2);
const DRY = args.includes("--dry-run");
const topicArg = args.includes("--topic") ? args[args.indexOf("--topic") + 1] : null;
const MODEL = process.env.BLOG_BOT_MODEL || "claude-sonnet-5";
const TODAY = new Date().toLocaleDateString("en-CA", { timeZone: "America/Toronto" });

// Secrets locaux (.env.local) si présents ; sur le VPS, shared/.env est déjà chargé par le robot de nuit.
for (const f of [".env.local", ".env"]) {
  const p = join(ROOT, f);
  if (!existsSync(p)) continue;
  for (const line of readFileSync(p, "utf8").split("\n")) {
    const m = /^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/.exec(line);
    if (m && !process.env[m[1]] && m[2]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
}

const GUIDES_DIR = join(ROOT, "src/content/guides");
const IMG_DIR = join(ROOT, "public/images/guides/generes");
const PUBLISHED = join(ROOT, "data/blog/publies.json");
const topics = JSON.parse(readFileSync(join(ROOT, "data/blog/sujets.json"), "utf8"));
const published = existsSync(PUBLISHED) ? JSON.parse(readFileSync(PUBLISHED, "utf8")) : [];
const log = (...a) => console.log(`[${new Date().toISOString().slice(11, 19)}]`, ...a);

// ---- 1. Sujet ----
const topic = topicArg
  ? topics.find((t) => t.slug === topicArg)
  : topics.find((t) => !existsSync(join(GUIDES_DIR, `${t.slug}.md`)) && !published.some((p) => p.slug === t.slug));
if (!topic) { log("Aucun sujet restant dans data/blog/sujets.json : rien à faire."); process.exit(0); }
log(`Sujet : ${topic.slug}`);

// ---- 2. Contexte factuel ----
const brandSlugs = (topic.widget?.startsWith("marques:") ? topic.widget.slice(8) : "");
const ctx = JSON.parse(execSync(`npx tsx scripts/blog-context.ts "${brandSlugs}"`, { cwd: ROOT, encoding: "utf8", maxBuffer: 64 * 1024 * 1024, stdio: ["ignore", "pipe", "inherit"] }));
const existingSlugs = new Set(ctx.guidesExistants.map((g) => g.slug));
const related = (topic.related ?? []).filter((s) => existingSlugs.has(s));

// ---- 3. Article ----
const CATEGORIES = ["choisir", "comparer", "prix", "subventions", "installation", "entretien"];
const system = `Tu es le rédacteur de ThermopompesÀVendre.ca, comparateur indépendant de thermopompes au Québec. Tu écris en français du Québec, au vouvoiement, avec la voix des guides existants du site : sobre, précis, chiffré, sans slogans, sans superlatifs creux, sans emoji, sans tirets cadratins, sans « en conclusion ». Le lecteur est un propriétaire québécois qui va acheter une thermopompe.

RÈGLES ABSOLUES
- Chaque nombre de l'article (COP, HSPF2, BTU, montants, degrés-jours, populations, pourcentages, comptes de machines) doit venir mot pour mot du CONTEXTE FACTUEL fourni, ou être une valeur d'exemple explicitement présentée comme hypothèse. Aucun chiffre de mémoire : ni décibels, ni prix par modèle, ni délais réglementaires, ni montants de programmes autres que LogisVert.
- Jamais de prix pour un modèle précis. Les fourchettes installées du contexte peuvent être citées avec leur type, calibre et gamme.
- Jamais d'affirmation juridique ou réglementaire précise (règlement municipal, article de loi) : dire que ça varie et qu'il faut vérifier.
- Pas de marque inventée, pas de modèle inventé : seuls les modèles présents dans le contexte peuvent être nommés.
- Nommer les sources quand tu cites des données : liste LogisVert d'Hydro-Québec, ENERGY STAR, Environnement et Changement climatique Canada, recensement 2021, prix publiés.
- Structure : introduction de 2 à 4 phrases qui répond à la question, puis 5 à 8 sections H2 (##), parfois H3, listes courtes, une ou deux tables Markdown quand des chiffres du contexte s'y prêtent, conclusion pratique qui renvoie au questionnaire ThermoMatch et à une soumission écrite par un installateur licencié RBQ. 1 100 à 1 500 mots.
- Liens internes en Markdown uniquement vers ces chemins : /trouver-ma-thermopompe, /thermopompes, /marques, /meilleures-thermopompes, /subventions, /comparer, /prix, /thermopompe (villes), /guides/<slug existant>.

FORMAT DE SORTIE : un seul document Markdown commençant par un frontmatter YAML entre --- et ---, puis le corps. Champs du frontmatter :
title (≤ 90 caractères, sans point final), description (140 à 160 caractères), category (une de : ${CATEGORIES.join(", ")}), keywords (liste de 4 à 6), related (liste de slugs pris uniquement parmi les guides existants du contexte), faq (liste de 4 objets q/a, réponses de 40 à 70 mots), imagePrompt (en anglais, 40 à 70 mots : une photographie réaliste liée au sujet, hiver ou maison québécoise selon le cas, lumière naturelle, aucun texte, aucun logo, aucune personne reconnaissable, aucune marque ; décrire scène, cadrage, ambiance). Aucun autre champ.`;

function userPrompt(errors) {
  return `SUJET
Slug : ${topic.slug}
Titre de travail : ${topic.title}
Angle : ${topic.angle}
Catégorie souhaitée : ${topic.category}
Mots-clés cibles : ${topic.keywords.join(", ")}
Guides liés suggérés : ${related.join(", ") || "aucun"}
Date : ${TODAY}
${topic.widget ? `Un bloc de données (${topic.widget}) sera affiché sous l'article par le site : ne le recopie pas, mentionne-le en une phrase.` : ""}

CONTEXTE FACTUEL (seule source de chiffres autorisée)
${JSON.stringify(ctx)}
${errors ? `\nTA VERSION PRÉCÉDENTE A ÉTÉ REFUSÉE POUR CES RAISONS, CORRIGE-LES :\n- ${errors.join("\n- ")}` : ""}
Écris l'article maintenant.`;
}

async function askClaude(errors) {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "content-type": "application/json", "x-api-key": process.env.ANTHROPIC_API_KEY, "anthropic-version": "2023-06-01" },
    body: JSON.stringify({ model: MODEL, max_tokens: 7000, temperature: 0.6, system, messages: [{ role: "user", content: userPrompt(errors) }] }),
  });
  if (!res.ok) throw new Error(`Anthropic ${res.status} : ${(await res.text()).slice(0, 300)}`);
  const data = await res.json();
  const text = data.content?.map((c) => c.text ?? "").join("") ?? "";
  const start = text.indexOf("---");
  return start >= 0 ? text.slice(start) : text;
}

function countWords(md) {
  return md.replace(/```[\s\S]*?```/g, " ").replace(/[#*_>`|-]/g, " ").split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
}

function validate(md) {
  const errors = [];
  let parsed;
  try { parsed = matter(md); } catch (e) { return { errors: [`frontmatter illisible : ${e.message}`] }; }
  const d = parsed.data;
  if (!d.title || d.title.length > 95) errors.push("title absent ou > 90 caractères");
  if (!d.description || d.description.length < 120 || d.description.length > 170) errors.push("description absente ou hors 140-160 caractères");
  if (!CATEGORIES.includes(d.category)) errors.push(`category invalide (${d.category})`);
  if (!Array.isArray(d.keywords) || d.keywords.length < 3) errors.push("keywords : liste de 4 à 6 attendue");
  if (!Array.isArray(d.faq) || d.faq.length < 3 || d.faq.some((f) => !f?.q || !f?.a)) errors.push("faq : 4 objets q/a attendus");
  if (!d.imagePrompt || d.imagePrompt.length < 60) errors.push("imagePrompt absent ou trop court");
  const badRelated = (d.related ?? []).filter((s) => !existingSlugs.has(s));
  if (badRelated.length) errors.push(`related inconnus : ${badRelated.join(", ")}`);
  const words = countWords(parsed.content);
  if (words < 950) errors.push(`article trop court (${words} mots, minimum 1 100)`);
  if (words > 1900) errors.push(`article trop long (${words} mots, maximum 1 500)`);
  if ((parsed.content.match(/^## /gm) ?? []).length < 4) errors.push("moins de 5 sections H2");
  if (/—/.test(parsed.content)) errors.push("tirets cadratins interdits");
  const links = [...parsed.content.matchAll(/\]\((\/[^)\s]+)\)/g)].map((m) => m[1]);
  const badLinks = links.filter((l) => !/^\/(trouver-ma-thermopompe|thermopompes|marques|meilleures-thermopompes|subventions|comparer|prix|thermopompe|guides\/[a-z0-9-]+)(\/|$|\?)/.test(l) || (l.startsWith("/guides/") && !existingSlugs.has(l.split("/")[2].replace(/\/$/, ""))));
  if (badLinks.length) errors.push(`liens internes interdits ou inexistants : ${badLinks.join(", ")}`);
  if (/\b\d{1,2} ?dB\b/i.test(parsed.content) && !/dB/.test(JSON.stringify(ctx))) errors.push("décibels cités sans source dans le contexte");
  return { errors, parsed, words };
}

// ---- 5. Photo ----
async function generateImage(prompt, slug) {
  mkdirSync(IMG_DIR, { recursive: true });
  let png;
  if (process.env.OPENAI_API_KEY) {
    const res = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: { "content-type": "application/json", authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
      body: JSON.stringify({ model: "gpt-image-1", prompt: `${prompt} Photorealistic editorial photograph, 16:9, no text, no logos, no watermark.`, size: "1536x1024", quality: "medium", n: 1 }),
    });
    if (!res.ok) throw new Error(`OpenAI images ${res.status} : ${(await res.text()).slice(0, 300)}`);
    const data = await res.json();
    png = Buffer.from(data.data[0].b64_json, "base64");
  } else if (process.env.GEMINI_API_KEY) {
    const res = await fetch("https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict", {
      method: "POST",
      headers: { "content-type": "application/json", "x-goog-api-key": process.env.GEMINI_API_KEY },
      body: JSON.stringify({ instances: [{ prompt: `${prompt} Photorealistic editorial photograph, no text, no logos, no watermark.` }], parameters: { sampleCount: 1, aspectRatio: "16:9" } }),
    });
    if (!res.ok) throw new Error(`Imagen ${res.status} : ${(await res.text()).slice(0, 300)}`);
    const data = await res.json();
    png = Buffer.from(data.predictions[0].bytesBase64Encoded, "base64");
  } else {
    throw new Error("Aucune clé d'images (OPENAI_API_KEY ou GEMINI_API_KEY)");
  }
  const out = join(IMG_DIR, `${slug}.webp`);
  await sharp(png).resize({ width: 1600, height: 900, fit: "cover" }).webp({ quality: 80 }).toFile(out);
  return `/images/guides/generes/${slug}.webp`;
}

// ---- Exécution ----
(async () => {
  if (!process.env.ANTHROPIC_API_KEY) { log("ANTHROPIC_API_KEY absente : arrêt."); process.exit(2); }
  if (!process.env.OPENAI_API_KEY && !process.env.GEMINI_API_KEY) { log("Aucune clé d'images (OPENAI_API_KEY ou GEMINI_API_KEY) : arrêt, pas d'article sans photo générée."); process.exit(2); }

  let md = await askClaude();
  let v = validate(md);
  if (v.errors.length) {
    log(`Première version refusée : ${v.errors.join(" | ")} ; nouvel essai.`);
    md = await askClaude(v.errors);
    v = validate(md);
    if (v.errors.length) { log(`Deuxième version refusée : ${v.errors.join(" | ")}. Abandon.`); process.exit(1); }
  }
  const { parsed, words } = v;
  const d = parsed.data;
  log(`Article accepté : « ${d.title} », ${words} mots.`);

  const cover = DRY ? "/images/guides/guide-hero-bg.jpg" : await generateImage(d.imagePrompt, topic.slug);
  if (!DRY) log(`Photo générée : ${cover}`);

  const front = {
    title: d.title,
    description: d.description,
    author: "L'équipe ThermoMatch",
    publishedAt: TODAY,
    updatedAt: TODAY,
    coverImage: cover,
    category: d.category,
    keywords: d.keywords,
    related: (d.related ?? []).filter((s) => existingSlugs.has(s)),
    ...(topic.widget ? { widget: topic.widget } : {}),
    faq: d.faq.map((f) => ({ q: String(f.q), a: String(f.a) })),
    generatedAt: new Date().toISOString(),
  };
  const out = matter.stringify(parsed.content.trim() + "\n", front);
  if (DRY) { console.log(out.slice(0, 1500)); log("Mode --dry-run : rien n'est écrit."); return; }
  writeFileSync(join(GUIDES_DIR, `${topic.slug}.md`), out);
  published.push({ slug: topic.slug, publishedAt: TODAY, model: MODEL, words });
  mkdirSync(join(ROOT, "data/blog"), { recursive: true });
  writeFileSync(PUBLISHED, JSON.stringify(published, null, 2));
  log(`Écrit : src/content/guides/${topic.slug}.md`);
})().catch((e) => { log(`Erreur : ${e.message}`); process.exit(1); });
