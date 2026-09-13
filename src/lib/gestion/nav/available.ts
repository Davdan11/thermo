/* Refonte R1 — pages optionnelles de la navigation (autres chantiers : Référencement, Articles du blogue) :
   affichées seulement si la page existe. Serveur seulement ; vérifié une fois par processus (une page ne
   disparaît pas sans redéploiement). Le déploiement construit à partir des sources : src/ est présent au
   serveur ; le manifeste de .next sert de repli. */
import { existsSync } from "node:fs";
import path from "node:path";
import { optionalHrefs } from "./sections";

let memo: string[] | null = null;

function exists(href: string): boolean {
  const rest = href.replace(/^\/gestion/, "");
  const root = process.cwd();
  const candidates = [
    path.join(root, "src", "app", "gestion", "(prive)", rest, "page.tsx"),
    path.join(root, "src", "app", "gestion", rest, "page.tsx"),
    path.join(root, ".next", "server", "app", "gestion", "(prive)", rest, "page.js"),
    path.join(root, ".next", "server", "app", "gestion", rest, "page.js"),
  ];
  return candidates.some((p) => existsSync(p));
}

export function availablePages(): string[] {
  if (!memo) memo = optionalHrefs().filter(exists);
  return memo;
}
