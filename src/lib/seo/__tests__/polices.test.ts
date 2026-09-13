/* ==================================================================
   Polices : AUCUN changement visuel. Mêmes familles, graisses, styles,
   axes, sous-ensembles, variables et « display » qu'avant (daa9dd4) ;
   seul le préchargement change.

   Mesuré sur le build (next build, balises <link rel="preload"> des 4 445
   pages prérendues ; scratchpad perf/preloads-par-page.cjs) :
     avant : fiches produit 699,2 Ko (12 fichiers) ; accueil, villes,
             marques, prix, guides… 659,6 Ko (11) ; /gestion 132,0 Ko (7)
     après : 102,5 Ko (4 : Geist, Inter Tight, Instrument Serif ×2)
             partout, + JetBrains Mono (39,5 Ko) sur les fiches produit.
   Cause : Turbopack range les @font-face de Fraunces et d'IBM Plex Mono
   dans des feuilles partagées par toutes les pages ; next/font précharge
   alors ces fichiers partout. Ces déclarations sont donc sans préchargement.

   Ce test vérifie, sans build : les options de chaque déclaration, et la
   liste des familles préchargées attendue par type de page d'après le
   graphe d'imports (page, gabarits, page 404).
   ================================================================== */
import { readFileSync, statSync } from "node:fs";
import path from "node:path";
import { describe, expect, it, vi } from "vitest";

type Opts = Record<string, unknown>;
const calls = vi.hoisted(() => [] as Array<{ family: string; options: Record<string, unknown> }>);
vi.mock("next/font/google", () => {
  const make = (family: string) => (options: Record<string, unknown>) => {
    calls.push({ family, options });
    return { className: "police", variable: String(options.variable ?? ""), style: { fontFamily: family } };
  };
  return { Anton: make("Anton"), Fraunces: make("Fraunces"), IBM_Plex_Mono: make("IBM Plex Mono"), Inter: make("Inter"), Outfit: make("Outfit"), Geist: make("Geist"), Inter_Tight: make("Inter Tight"), Instrument_Serif: make("Instrument Serif"), JetBrains_Mono: make("JetBrains Mono"), Roboto: make("Roboto") };
});

const ROOT = path.resolve(__dirname, "../../../..");
const SRC = path.join(ROOT, "src");

/** Déclarations d'avant (daa9dd4), sans « preload » ni « adjustFontFallback » : doivent rester identiques. */
const AVANT: Record<string, { family: string; options: Opts }> = {
  "src/app/layout.tsx#Geist": { family: "Geist", options: { subsets: ["latin"], variable: "--font-sans", display: "swap" } },
  "src/app/layout.tsx#Inter": { family: "Inter", options: { variable: "--font-inter", subsets: ["latin"], display: "swap" } },
  "src/app/layout.tsx#Outfit": { family: "Outfit", options: { variable: "--font-outfit", subsets: ["latin"], display: "swap" } },
  "src/lib/fonts.ts#Inter_Tight": { family: "Inter Tight", options: { subsets: ["latin"], variable: "--font-display", display: "swap" } },
  "src/lib/fonts.ts#Instrument_Serif": { family: "Instrument Serif", options: { subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif", display: "swap" } },
  "src/app/page.tsx#Inter_Tight": { family: "Inter Tight", options: { subsets: ["latin"], variable: "--font-display", display: "swap" } },
  "src/app/page.tsx#Instrument_Serif": { family: "Instrument Serif", options: { subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif", display: "swap" } },
  "src/components/heroes-v2/produit/fonts-mono.ts#JetBrains_Mono": { family: "JetBrains Mono", options: { subsets: ["latin"], variable: "--font-tech-mono", display: "swap" } },
  "src/components/heroes-v2/produit/fonts-poster.ts#Anton": { family: "Anton", options: { subsets: ["latin"], weight: "400", variable: "--font-poster", display: "swap" } },
  "src/components/heroes-v2/outils/fonts.ts#IBM_Plex_Mono": { family: "IBM Plex Mono", options: { subsets: ["latin"], weight: ["400", "500"], variable: "--font-outils-mono", display: "swap" } },
  "src/components/heroes-v2/outils/fonts-lazy.ts#IBM_Plex_Mono": { family: "IBM Plex Mono", options: { subsets: ["latin"], weight: ["400", "500"], variable: "--font-outils-mono", display: "swap" } },
  "src/components/heroes-v2/prix/fonts.ts#IBM_Plex_Mono": { family: "IBM Plex Mono", options: { subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-plex-mono", display: "swap" } },
  "src/components/heroes-v2/entreprise/fonts.ts#IBM_Plex_Mono": { family: "IBM Plex Mono", options: { subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-xe-mono", display: "swap" } },
  "src/components/heroes-v2/marques/fonts.ts#Fraunces": { family: "Fraunces", options: { subsets: ["latin"], style: ["normal", "italic"], axes: ["opsz", "SOFT"], variable: "--font-palmares", display: "swap" } },
  "src/components/heroes-v2/contenu/fonts.ts#Fraunces": { family: "Fraunces", options: { subsets: ["latin"], style: ["normal", "italic"], axes: ["opsz", "SOFT", "WONK"], variable: "--font-fraunces", display: "swap" } },
  "src/components/avis/fonts.ts#Roboto": { family: "Roboto", options: { subsets: ["latin"], weight: "400", display: "swap" } },
};

/** Préchargement voulu : seules les polices du site (gabarit racine) et celle du premier écran de la fiche produit. */
const PRECHARGE: Record<string, boolean> = {
  "src/app/layout.tsx#Geist": true,
  "src/app/layout.tsx#Inter": false,
  "src/app/layout.tsx#Outfit": false,
  "src/lib/fonts.ts#Inter_Tight": true,
  "src/lib/fonts.ts#Instrument_Serif": true,
  "src/app/page.tsx#Inter_Tight": true,
  "src/app/page.tsx#Instrument_Serif": true,
  "src/components/heroes-v2/produit/fonts-mono.ts#JetBrains_Mono": true,
  "src/components/heroes-v2/produit/fonts-poster.ts#Anton": true,
  "src/components/heroes-v2/outils/fonts.ts#IBM_Plex_Mono": false,
  "src/components/heroes-v2/outils/fonts-lazy.ts#IBM_Plex_Mono": false,
  "src/components/heroes-v2/prix/fonts.ts#IBM_Plex_Mono": false,
  "src/components/heroes-v2/entreprise/fonts.ts#IBM_Plex_Mono": false,
  "src/components/heroes-v2/marques/fonts.ts#Fraunces": false,
  "src/components/heroes-v2/contenu/fonts.ts#Fraunces": false,
  "src/components/avis/fonts.ts#Roboto": false,
};

/** Modules qui ne font que déclarer des polices : importés sous le simulacre de next/font. */
const FONT_MODULES = Object.keys(AVANT).map((k) => k.split("#")[0]).filter((f, i, a) => a.indexOf(f) === i && !/src\/app\/(layout|page)\.tsx$/.test(f));

/** Options littérales d'un appel `Fonction({ … })` dans le code (gabarit et accueil : trop lourds à importer ici). */
function literalCall(file: string, fn: string): Opts {
  const src = readFileSync(path.join(ROOT, file), "utf8");
  const m = new RegExp(`\\b${fn}\\(\\s*(\\{[\\s\\S]*?\\})\\s*\\)`).exec(src);
  if (!m) throw new Error(`${fn}(…) introuvable dans ${file}`);
  return new Function(`return (${m[1]});`)() as Opts;
}

/* Une seule lecture : les modules importés restent en cache, un second import n'appellerait plus next/font. */
let memo: Promise<Map<string, { family: string; options: Opts }>> | null = null;
const declarations = () => (memo ??= readDeclarations());

async function readDeclarations(): Promise<Map<string, { family: string; options: Opts }>> {
  const out = new Map<string, { family: string; options: Opts }>();
  for (const file of FONT_MODULES) {
    const before = calls.length;
    await import(/* @vite-ignore */ path.join(ROOT, file));
    const fns = [...readFileSync(path.join(ROOT, file), "utf8").matchAll(/\b([A-Z][A-Za-z_]+)\(\s*\{/g)].map((m) => m[1]);
    calls.slice(before).forEach((c, i) => out.set(`${file}#${fns[i]}`, c));
  }
  for (const [file, fns] of [["src/app/layout.tsx", ["Geist", "Inter", "Outfit"]], ["src/app/page.tsx", ["Inter_Tight", "Instrument_Serif"]]] as const) {
    for (const fn of fns) out.set(`${file}#${fn}`, { family: AVANT[`${file}#${fn}`].family, options: literalCall(file, fn) });
  }
  return out;
}

describe("polices : familles, graisses et styles inchangés", () => {
  it("chaque déclaration garde exactement ses options d'avant ; seul « preload » change", async () => {
    const d = await declarations();
    expect([...d.keys()].sort()).toEqual(Object.keys(AVANT).sort());
    for (const [k, { family, options }] of d) {
      const { preload, adjustFontFallback, ...rest } = options;
      expect(family, k).toBe(AVANT[k].family);
      expect(rest, k).toEqual(AVANT[k].options);
      expect(adjustFontFallback, `${k} : repli automatique inchangé`).toBeUndefined();
      expect(rest.display, k).toBe("swap");
      expect(preload ?? true, `${k} : préchargement`).toBe(PRECHARGE[k]);
    }
  });

  it("mêmes familles qu'avant, dans tout le site", async () => {
    const d = await declarations();
    expect([...new Set([...d.values()].map((x) => x.family))].sort()).toEqual(["Anton", "Fraunces", "Geist", "IBM Plex Mono", "Instrument Serif", "Inter", "Inter Tight", "JetBrains Mono", "Outfit", "Roboto"]);
  });

  it("une même police déclarée plusieurs fois n'est jamais préchargée d'un côté et pas de l'autre (double téléchargement)", async () => {
    const d = await declarations();
    const byFace = new Map<string, Set<boolean>>();
    for (const [k, { family, options }] of d) {
      const w = JSON.stringify(options.weight ?? null);
      const face = `${family}|${w}|${JSON.stringify(options.style ?? null)}|${JSON.stringify(options.axes ?? null)}`;
      if (!byFace.has(face)) byFace.set(face, new Set());
      byFace.get(face)!.add(PRECHARGE[k]);
    }
    // IBM Plex Mono (trois déclarations, mêmes fichiers) : jamais préchargée, nulle part.
    const plex = [...d.entries()].filter(([, v]) => v.family === "IBM Plex Mono").map(([k]) => PRECHARGE[k]);
    expect(new Set(plex)).toEqual(new Set([false]));
    for (const [face, flags] of byFace) expect(flags.size, face).toBe(1);
  });
});

/* ---------------- Liste attendue par type de page (graphe d'imports) ---------------- */

const EXT = ["", ".ts", ".tsx", ".js", "/index.ts", "/index.tsx"];
function resolve(from: string, spec: string): string | null {
  const base = spec.startsWith("@/") ? path.join(SRC, spec.slice(2)) : spec.startsWith(".") ? path.join(path.dirname(from), spec) : null;
  if (!base) return null;
  for (const e of EXT) {
    try {
      if (statSync(base + e).isFile()) return base + e;
    } catch {
      /* suivant */
    }
  }
  return null;
}

/** Modules atteints depuis les entrées : imports, réexportations et import() dynamiques (pas les « import type »). */
function reach(entries: string[]): Set<string> {
  const seen = new Set<string>();
  const queue = entries.map((e) => path.join(ROOT, e));
  while (queue.length) {
    const f = queue.shift()!;
    if (seen.has(f) || !/\.(tsx?|jsx?)$/.test(f)) continue;
    seen.add(f);
    const src = readFileSync(f, "utf8");
    const specs = [
      ...[...src.matchAll(/(?:^|\n)\s*(?:import|export)\s+(?!type\s)(?:[^;]*?\s+from\s+)?["']([^"']+)["']/g)].map((m) => m[1]),
      ...[...src.matchAll(/import\(\s*["']([^"']+)["']\s*\)/g)].map((m) => m[1]),
    ];
    for (const s of specs) {
      const r = resolve(f, s);
      if (r && !seen.has(r)) queue.push(r);
    }
  }
  return seen;
}

async function preloadedFamilies(entries: string[]): Promise<string[]> {
  const d = await declarations();
  const files = new Set([...reach(entries)].map((f) => path.relative(ROOT, f).split(path.sep).join("/")));
  const fam = new Set<string>();
  for (const [k, { family }] of d) if (files.has(k.split("#")[0]) && PRECHARGE[k]) fam.add(family);
  return [...fam].sort();
}

const RACINE = ["src/app/layout.tsx", "src/app/not-found.tsx"];
const SITE = ["Geist", "Instrument Serif", "Inter Tight"];

describe("préchargement : liste attendue par type de page", () => {
  const cas: Array<[string, string[], string[]]> = [
    ["accueil", ["src/app/page.tsx"], SITE],
    ["fiche produit", ["src/app/produit/[slug]/page.tsx"], [...SITE, "JetBrains Mono"].sort()],
    ["ville", ["src/app/thermopompe/[ville]/page.tsx"], SITE],
    ["marque", ["src/app/marques/[slug]/page.tsx"], SITE],
    ["prix", ["src/app/prix/page.tsx"], SITE],
    ["guide", ["src/app/guides/[slug]/page.tsx"], SITE],
    ["gestion", ["src/app/gestion/layout.tsx", "src/app/gestion/(prive)/layout.tsx", "src/app/gestion/(prive)/page.tsx"], SITE],
    ["référencement (gestion)", ["src/app/gestion/layout.tsx", "src/app/gestion/(prive)/layout.tsx", "src/app/gestion/(prive)/referencement/page.tsx"], SITE],
  ];
  for (const [nom, entries, attendu] of cas) {
    it(nom, async () => {
      expect(await preloadedFamilies([...RACINE, ...entries])).toEqual(attendu);
    });
  }

  it("Fraunces et IBM Plex Mono restent chargées là où elles s'affichent (même déclaration, sans préchargement)", async () => {
    const files = new Set([...reach([...RACINE, "src/app/guides/[slug]/page.tsx"])].map((f) => path.relative(ROOT, f).split(path.sep).join("/")));
    expect(files.has("src/components/heroes-v2/contenu/fonts.ts")).toBe(true);
    const prix = new Set([...reach([...RACINE, "src/app/prix/page.tsx"])].map((f) => path.relative(ROOT, f).split(path.sep).join("/")));
    expect(prix.has("src/components/heroes-v2/prix/fonts.ts")).toBe(true);
  });
});
