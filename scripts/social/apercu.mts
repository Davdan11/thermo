/* ==================================================================
   Aperçu du robot Facebook : 6 publications (une par format) et
   2 stories, générées à partir des vraies données du site, dans un
   dossier de sortie. Rien n'est publié, rien n'est écrit dans la file
   de gestion.

   Usage (racine du projet) :
     npx tsx scripts/social/apercu.mts <dossier de sortie> [--date AAAA-MM-JJ] [--sans-ia]

   Pour chaque publication : <id>.png (1080 × 1350, story 1080 × 1920)
   et <id>.txt (légende complète, lien suivi, faits utilisés, mode de
   rédaction). Plus file-apercu.json : la file telle qu'elle serait
   enregistrée. L'IA n'est utilisée que si une clé est déjà présente
   dans l'environnement (ce script ne lit aucun fichier .env) ; sinon
   les textes sont des gabarits.
   ================================================================== */

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { catalogueSocial } from "../../src/lib/social/catalogue";
import { genererPublication, traceDe } from "../../src/lib/social/generer";
import { redacteurIa } from "../../src/lib/social/ia";
import { faitsEnClair, verifierTexte } from "../../src/lib/social/redaction";
import type { Trace } from "../../src/lib/social/selection";
import { FORMAT_LIBELLES, FORMATS, STATUT_LIBELLES, type PublicationSociale, type SocialData } from "../../src/lib/social/types";
import { rendreVisuel } from "../../src/lib/social/visuels/rendu";
import { zonedToUtc } from "../../src/lib/presence/time";
import { montrealDate } from "../../src/lib/social/calendrier";

const args = process.argv.slice(2);
const sortie = args.find((a) => !a.startsWith("--"));
if (!sortie) {
  console.error("Usage : npx tsx scripts/social/apercu.mts <dossier de sortie> [--date AAAA-MM-JJ] [--sans-ia]");
  process.exit(1);
}
const iDate = args.indexOf("--date");
const debut = iDate >= 0 ? args[iDate + 1] : montrealDate(new Date());
if (!/^\d{4}-\d{2}-\d{2}$/.test(debut)) throw new Error(`Date invalide : ${debut}`);

const plusJours = (jour: string, n: number) => new Date(Date.parse(`${jour}T12:00:00Z`) + n * 86_400_000).toISOString().slice(0, 10);

const t0 = Date.now();
const catalogue = catalogueSocial();
console.log(`Catalogue : ${catalogue.modeles.length} modèles présentables, ${catalogue.modeles.filter((m) => m.photo).length} avec photo réelle, ${catalogue.villes.length} villes indexées, ${catalogue.marques.length} marques LogisVert (${Date.now() - t0} ms).`);

const ia = args.includes("--sans-ia") ? null : redacteurIa();
console.log(ia ? `Rédaction : IA (${ia.fournisseur}) sous garde-fou.` : "Rédaction : gabarits (aucune clé IA dans l'environnement).");

await mkdir(sortie, { recursive: true });
const historique: Trace[] = [];
const publications: PublicationSociale[] = [];
const maintenant = new Date();

// Une publication par format, un jour après l'autre (11 h), puis deux stories (9 h), formats choisis par la rotation.
const plan: Array<{ genre: "publication" | "story"; jour: string; heure: string; format?: (typeof FORMATS)[number] }> = [
  ...FORMATS.map((format, i) => ({ genre: "publication" as const, jour: plusJours(debut, 2 * i), heure: "11:00", format })),
  { genre: "story", jour: debut, heure: "09:00" },
  { genre: "story", jour: plusJours(debut, 1), heure: "09:00" },
];

for (const etape of plan) {
  const p = await genererPublication({ genre: etape.genre, prevueLe: zonedToUtc(etape.jour, etape.heure), maintenant, historique, catalogue, demarreLe: null, ia, format: etape.format });
  if (!p) {
    console.warn(`Aucun sujet pour ${etape.genre} ${etape.format ?? "(rotation)"} le ${etape.jour}.`);
    continue;
  }
  historique.push(traceDe(p));
  publications.push(p);

  const t = Date.now();
  const png = await rendreVisuel(p.faits, p.genre);
  await writeFile(path.join(sortie, `${p.id}.png`), png);
  const corps = p.texte.slice(0, p.texte.lastIndexOf("\n\n"));
  const controle = verifierTexte(corps, p.faits);
  const fiche = [
    `Identifiant : ${p.id}`,
    `Genre : ${p.genre === "story" ? "story (1080 × 1920)" : "publication (1080 × 1350)"}`,
    `Format : ${FORMAT_LIBELLES[p.format]}`,
    `Sujet : ${p.faits.sujet}`,
    `Prévue le : ${p.prevueLe}`,
    `Statut : ${STATUT_LIBELLES[p.statut]}`,
    `Rédaction : ${p.redaction.mode}${p.redaction.fournisseur ? ` (${p.redaction.fournisseur})` : ""}${p.redaction.rejets?.length ? ` — IA rejetée : ${p.redaction.rejets.join(" ; ")}` : ""}`,
    `Garde-fou sur le texte final : ${controle.length ? controle.join(" ; ") : "aucun problème"}`,
    `Lien suivi : ${p.lien}`,
    "",
    "----- Légende -----",
    p.texte,
    "",
    "----- Faits fournis (seuls permis) -----",
    ...faitsEnClair(p.faits).map((l) => `- ${l}`),
    "",
  ].join("\n");
  await writeFile(path.join(sortie, `${p.id}.txt`), fiche);
  console.log(`${p.id} : ${p.faits.sujet} — ${png.length} octets, ${Date.now() - t} ms${controle.length ? ` — PROBLÈMES : ${controle.join(" ; ")}` : ""}`);
}

const file: SocialData = { version: 1, demarreLe: publications[0]?.creeLe ?? null, publications };
await writeFile(path.join(sortie, "file-apercu.json"), JSON.stringify(file, null, 1));
console.log(`${publications.length} publications dans ${sortie} (${Date.now() - t0} ms).`);
