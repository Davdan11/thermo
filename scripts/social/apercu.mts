/* ==================================================================
   Aperçu du robot Facebook : pour chaque format, un sujet réel dans
   chacune de ses mises en page (publication 1080 × 1350), plus une
   story par format (1080 × 1920), dans un dossier de sortie. Rien n'est
   publié, rien n'est écrit dans la file de gestion.

   Usage (racine du projet) :
     npx tsx scripts/social/apercu.mts <dossier de sortie> [--date AAAA-MM-JJ] [--sans-ia]

   Pour chaque visuel : <format>-<genre>-m<mise en page>.png et un .txt
   (légende complète, lien suivi, faits utilisés, mode de rédaction).
   L'IA n'est utilisée que si une clé est déjà dans l'environnement (ce
   script ne lit aucun fichier .env) ; sinon les textes sont des gabarits.
   ================================================================== */

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { catalogueSocial } from "../../src/lib/social/catalogue";
import { montrealDate, saisonDu, usageDe } from "../../src/lib/social/calendrier";
import { redacteurIa } from "../../src/lib/social/ia";
import { composerTexte, faitsEnClair, gabarit, verifierTexte } from "../../src/lib/social/redaction";
import { redigerCorps } from "../../src/lib/social/generer";
import { sujetsDu } from "../../src/lib/social/sujets";
import { FORMAT_LIBELLES, FORMATS, type Faits } from "../../src/lib/social/types";
import { maquette, texteVisuel, variantesDe } from "../../src/lib/social/visuels/maquettes";
import { rendreVisuel } from "../../src/lib/social/visuels/rendu";

const args = process.argv.slice(2);
const sortie = args.find((a) => !a.startsWith("--") && !/^\d{4}-\d{2}-\d{2}$/.test(a));
if (!sortie) {
  console.error("Usage : npx tsx scripts/social/apercu.mts <dossier de sortie> [--date AAAA-MM-JJ] [--sans-ia]");
  process.exit(1);
}
const iDate = args.indexOf("--date");
const jour = iDate >= 0 ? args[iDate + 1] : montrealDate(new Date());
if (!/^\d{4}-\d{2}-\d{2}$/.test(jour)) throw new Error(`Date invalide : ${jour}`);
const usage = usageDe(saisonDu(jour));

const t0 = Date.now();
const catalogue = catalogueSocial();
console.log(`Catalogue : ${catalogue.modeles.length} modèles présentables, ${catalogue.modeles.filter((m) => m.photo).length} avec photo réelle, ${catalogue.villes.length} villes indexées (${Date.now() - t0} ms). Saison : ${usage}.`);
const ia = args.includes("--sans-ia") ? null : redacteurIa();
console.log(ia ? `Rédaction : IA (${ia.fournisseur}) sous garde-fou.` : "Rédaction : gabarits (aucune clé IA dans l'environnement).");
await mkdir(sortie, { recursive: true });

/** Un sujet par angle quand le format en a plusieurs (ville et région, compteur et classement, marque, type et segment). */
function exemples(format: (typeof FORMATS)[number]): Faits[] {
  const tous = sujetsDu(format, catalogue, usage, jour);
  const parAngle = new Map<string, Faits>();
  for (const f of tous) {
    const angle = "angle" in f ? (f.angle as { type: string }).type : "unique";
    if (!parAngle.has(angle)) parAngle.set(angle, f);
  }
  return [...parAngle.values()];
}

for (const format of FORMATS) {
  const liste = exemples(format);
  if (!liste.length) {
    console.log(`${FORMAT_LIBELLES[format]} : aucun sujet en ${usage}.`);
    continue;
  }
  for (const [k, faits] of liste.entries()) {
    for (const [genre, variantes] of [["publication", [...Array(variantesDe(faits)).keys()]], ["story", [0]]] as const) {
      for (const v of variantes) {
        const id = `fb-${jour.replace(/-/g, "")}-${format}-${genre === "story" ? "story" : "pub"}`;
        const nom = `${format}-a${k + 1}-${genre}-m${v + 1}`;
        const t = Date.now();
        const png = await rendreVisuel(faits, genre, v);
        await writeFile(path.join(sortie, `${nom}.png`), png);
        const r = (await redigerCorps(faits, genre, id, ia)) ?? { corps: gabarit(faits), redaction: { mode: "gabarit" as const } };
        const { texte, lien } = composerTexte(r.corps, faits, id);
        const controle = verifierTexte(r.corps, faits);
        await writeFile(
          path.join(sortie, `${nom}.txt`),
          [
            `Format : ${FORMAT_LIBELLES[format]} · ${genre} · mise en page ${v + 1}`,
            `Sujet : ${faits.sujet}`,
            `Texte du visuel : ${texteVisuel(maquette(faits, v))}`,
            `Rédaction : ${r.redaction.mode}${r.redaction.rejets?.length ? ` (IA rejetée : ${r.redaction.rejets.join(" ; ")})` : ""}`,
            `Garde-fou : ${controle.length ? controle.join(" ; ") : "aucun problème"}`,
            `Lien suivi : ${lien}`,
            "",
            "----- Légende -----",
            texte,
            "",
            "----- Faits -----",
            ...faitsEnClair(faits).map((l) => `- ${l}`),
            "",
          ].join("\n"),
        );
        console.log(`${nom} : ${faits.sujet} — ${Date.now() - t} ms${controle.length ? ` — PROBLÈMES : ${controle.join(" ; ")}` : ""}`);
      }
    }
  }
}
console.log(`Terminé en ${Date.now() - t0} ms → ${sortie}`);
