/* Conformité C1 — AUCUN texte de la trousse contractuelle dans le code (le dépôt est public).
   empreintes-trousse.txt contient seulement des empreintes (SHA-256 tronqué) de chaque suite de 12 mots de la trousse,
   champs entre crochets et adresses web retirés : aucun texte. Le test calcule les mêmes empreintes sur le code (src/, scripts/) et
   échoue si une suite de 12 mots de la trousse s'y retrouve. À régénérer à chaque nouvelle version de la trousse. */
import { createHash } from "node:crypto";
import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

const ROOT = path.resolve(__dirname, "../../../..");
const N = 12;
const EXT = /\.(ts|tsx|mjs|js|cjs|css|md|txt)$/;
const SKIP = new Set(["node_modules", ".next", "data", "public"]);
const OWN = path.resolve(__dirname, "empreintes-trousse.txt");

/** Champs entre crochets et adresses web (références officielles publiques) retirés, comme à la génération. */
const norm = (s: string) =>
  s
    .replace(/\[[^\]\n]{1,80}\]/g, " ")
    .replace(/(https?:\/\/|www\.)\S+/g, " ")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

function files(dir: string, out: string[] = []): string[] {
  for (const name of readdirSync(dir)) {
    if (SKIP.has(name)) continue;
    const p = path.join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) files(p, out);
    else if (EXT.test(name) && s.size < 600_000 && p !== OWN) out.push(p);
  }
  return out;
}

describe("aucun texte de la trousse dans le code", () => {
  it("aucune suite de 12 mots de la trousse dans src/ ni scripts/", () => {
    const prints = new Set(readFileSync(OWN, "utf8").split("\n").filter(Boolean));
    expect(prints.size).toBeGreaterThan(1000);
    const hits: string[] = [];
    for (const f of [...files(path.join(ROOT, "src")), ...files(path.join(ROOT, "scripts"))]) {
      const words = norm(readFileSync(f, "utf8")).split(" ").filter(Boolean);
      for (let i = 0; i + N <= words.length; i++) {
        const h = createHash("sha256").update(words.slice(i, i + N).join(" ")).digest("hex").slice(0, 12);
        if (prints.has(h)) {
          hits.push(path.relative(ROOT, f));
          break;
        }
      }
    }
    expect(hits).toEqual([]);
  }, 120_000);
});
