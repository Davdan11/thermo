/* Conformité C2 — règle d'or : AUCUN texte de la trousse contractuelle dans le code (dépôt public).
   Le test compare le code (src/, scripts/) à la trousse importée en développement (data/trousse.json, hors dépôt) :
   aucune suite de 8 mots de la trousse ne doit s'y trouver. Sans trousse importée (intégration continue), il est
   sauté ; la vérification permanente porte sur la forme : aucun libellé de case (« ☐ ») ni avis entre guillemets
   de la trousse n'est écrit dans les modules qui la lisent. */
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { normalizeTrousse } from "@/lib/plateforme/trousse";

const ROOT = process.cwd();
const TROUSSE = path.join(ROOT, "data", "trousse.json");
const N = 8;

const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

function files(dir: string): string[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((name) => {
    const p = path.join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) return name === "node_modules" || name === ".next" || name === "data" ? [] : files(p);
    return /\.(tsx?|jsx?|mjs|cjs|md|css)$/.test(name) && st.size < 1_500_000 ? [p] : [];
  });
}

describe("aucun texte de la trousse dans le code", () => {
  it.skipIf(!existsSync(TROUSSE))("aucune suite de 8 mots de la trousse importée dans src/ ou scripts/", () => {
    const t = normalizeTrousse(JSON.parse(readFileSync(TROUSSE, "utf8")));
    // Exclus : section 9 (titres et adresses des lois, publics) et 6.1 (qui cite l'avis d'appel que le site affichait déjà).
    const paragraphs = [...t.preamble, ...t.sections.filter((s) => s.id !== "9" && s.parent !== "9" && s.id !== "6.1").flatMap((s) => [s.title, ...s.paragraphs])];
    const shingles = new Set<string>();
    for (const p of paragraphs) {
      const w = norm(p).split(" ").filter(Boolean);
      for (let i = 0; i + N <= w.length; i++) shingles.add(w.slice(i, i + N).join(" "));
    }
    // Coïncidences : tournures juridiques courantes déjà publiées par le site AVANT la trousse (conditions, garantie légale).
    for (const generic of ["par les lois du quebec et les lois", "les pieces et la main d uvre necessaires"]) shingles.delete(generic);
    const offenders: string[] = [];
    for (const f of [...files(path.join(ROOT, "src")), ...files(path.join(ROOT, "scripts"))]) {
      const w = norm(readFileSync(f, "utf8")).split(" ").filter(Boolean);
      for (let i = 0; i + N <= w.length; i++) {
        if (shingles.has(w.slice(i, i + N).join(" "))) {
          offenders.push(`${path.relative(ROOT, f)} : « ${w.slice(i, i + N).join(" ")} »`);
          break;
        }
      }
    }
    expect(offenders).toEqual([]);
  });

  it("les modules qui lisent la trousse ne contiennent ni libellé de case ni avis entre guillemets", () => {
    const dirs = ["src/lib/consentements", "src/lib/reference", "src/lib/phone", "src/app/api/phone", "src/components/consentements", "src/components/confidentialite"];
    const offenders = dirs.flatMap((d) => files(path.join(ROOT, d))).filter((f) => !f.includes("__tests__")).filter((f) => {
      const text = readFileSync(f, "utf8");
      return /☐\s+\p{L}/u.test(text) || /«\s*(Cet appel|Bonjour, ici)/.test(text);
    });
    expect(offenders).toEqual([]);
  });
});
