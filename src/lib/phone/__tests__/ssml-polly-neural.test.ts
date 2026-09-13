import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

/* La voix Polly.Gabrielle-Neural refuse certaines balises SSML : Twilio lève alors
   l'erreur 13520 « Say: Invalid text » et raccroche au nez du client. */
const ROOTS = ["src/app/api/phone", "src/lib/phone"];
const REFUSED = [/\bpitch\s*=/, /<emphasis\b/, /amazon:effect\s+name="whispered"/, /<amazon:auto-breaths\b/];

function files(dir: string): string[] {
  return readdirSync(dir).flatMap((name) => {
    const p = path.join(dir, name);
    if (statSync(p).isDirectory()) return name === "__tests__" ? [] : files(p);
    return /\.tsx?$/.test(name) ? [p] : [];
  });
}

describe("SSML compatible avec les voix Polly Neural", () => {
  it("aucune balise refusée dans le parcours d'appel", () => {
    const offenders = ROOTS.flatMap(files).flatMap((f) => {
      const text = readFileSync(f, "utf8");
      return REFUSED.filter((re) => re.test(text)).map((re) => `${f} : ${re}`);
    });
    expect(offenders).toEqual([]);
  });
});
