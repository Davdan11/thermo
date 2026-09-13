/* Conformité C3 — règle d'or : le texte de la trousse contractuelle (CONFIDENTIEL) n'est JAMAIS dans le code, les
   tests, les scripts ni la documentation (dépôt public). Vérifié contre la trousse importée en développement
   (data/trousse.json) ou le fichier indiqué par TROUSSE_TXT ; sans trousse locale (CI), la vérification est sautée.
   Le texte n'est jamais affiché : seulement le fichier fautif et la position. */
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const ROOT = process.cwd();
const SCAN = ["src", "scripts", "docs", "design-system"];
const EXT = /\.(ts|tsx|js|mjs|cjs|css|md|mdx|json|txt|html)$/i;
/** Morceaux de 60 caractères : assez longs pour ne pas confondre un nom de loi public ou des noms de champs avec le texte. */
const MIN = 60;
/** Lettres hors des champs entre crochets : une sonde faite surtout de champs (« [NEQ] », « [ADRESSE] ») n'est pas du texte. */
const letters = (s: string) => s.replace(/\[[^\]]*\]?/g, "").replace(/[^\p{L}]/gu, "").length;

function trousseLines(): string[] | null {
  const txt = process.env.TROUSSE_TXT;
  if (txt && existsSync(txt)) return readFileSync(txt, "utf8").split(/\r?\n/);
  const json = path.join(ROOT, "data", "trousse.json");
  if (!existsSync(json)) return null;
  const d = JSON.parse(readFileSync(json, "utf8")) as { preamble?: string[]; sections?: Array<{ title: string; paragraphs: string[] }> };
  return [...(d.preamble ?? []), ...(d.sections ?? []).flatMap((s) => [s.title, ...s.paragraphs])];
}

/** Morceaux (début, milieu, fin) de chaque paragraphe assez long ; les références publiques (liens) sont exclues. */
export function probesOf(lines: string[]): string[] {
  const out = new Set<string>();
  for (const raw of lines) {
    const l = raw.replace(/^#+\s*/, "").replace(/\s+/g, " ").trim();
    if (l.length < MIN || /https?:\/\//.test(l)) continue;
    const mid = Math.max(0, Math.floor(l.length / 2) - MIN / 2);
    for (const s of [l.slice(0, MIN), l.slice(mid, mid + MIN), l.slice(-MIN)]) if (letters(s) >= 35) out.add(s);
  }
  return [...out];
}

function files(dir: string, acc: string[] = []): string[] {
  if (!existsSync(dir)) return acc;
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name.startsWith(".")) continue;
    const p = path.join(dir, name);
    const st = statSync(p);
    if (st.isDirectory()) files(p, acc);
    else if (EXT.test(name) && st.size < 3_000_000) acc.push(p);
  }
  return acc;
}

export function leaks(probes: string[], roots = SCAN.map((d) => path.join(ROOT, d))): Array<{ file: string; at: number }> {
  const out: Array<{ file: string; at: number }> = [];
  for (const root of roots)
    for (const f of files(root)) {
      const content = readFileSync(f, "utf8").replace(/\s+/g, " ");
      for (const p of probes) {
        const at = content.indexOf(p);
        if (at >= 0) {
          out.push({ file: path.relative(ROOT, f), at });
          break;
        }
      }
    }
  return out;
}

describe("aucun texte de la trousse dans le code", () => {
  const lines = trousseLines();

  it("le détecteur trouve bien un paragraphe copié (contrôle du test lui-même)", () => {
    const fake = ["Paragraphe fictif assez long pour servir de sonde au détecteur de fuite."];
    const probes = probesOf(fake);
    expect(probes.length).toBeGreaterThan(0);
    expect(probesOf(["Référence publique https://www.exemple.gouv.qc.ca/une/page/assez/longue/pour/depasser"])).toEqual([]);
    // Ce fichier ne contient pas le paragraphe entier sur une seule ligne sonde : la recherche porte sur src/.
    expect(leaks(probes, [path.join(ROOT, "src", "lib", "plateforme")])).toEqual([]);
  });

  it.skipIf(!lines)("aucun paragraphe de la trousse importée dans src/, scripts/, docs/ ni design-system/", () => {
    const probes = probesOf(lines!);
    expect(probes.length).toBeGreaterThan(100);
    const found = leaks(probes);
    expect(found, `Texte de la trousse trouvé dans : ${found.map((x) => x.file).join(", ")}`).toEqual([]);
  });
});
