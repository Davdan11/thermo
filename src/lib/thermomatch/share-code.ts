/* ==================================================================
   Code de partage des résultats ThermoMatch.

   Les réponses du questionnaire (une douzaine de clés courtes) sont
   sérialisées en base64url dans l'URL /trouver-ma-thermopompe/resultats?r=…
   Le serveur recalcule les recommandations à partir de ces réponses :
   rien n'est stocké, le lien reste valable tant que le catalogue existe.
   Fonctionne côté navigateur et côté serveur.
   ================================================================== */
import type { QuestionnaireAnswers } from "./answers";

const KEYS: Array<keyof QuestionnaireAnswers> = [
  "postalCode", "propertyType", "area", "floors", "currentSystem", "heatPumpType",
  "priority", "budget", "financing", "constructionPeriod", "insulation", "windowShare", "basement",
];
const MAX_CODE_LENGTH = 1200;

function toBase64Url(bytes: Uint8Array): string {
  let bin = "";
  for (const b of bytes) bin += String.fromCharCode(b);
  const b64 = typeof btoa === "function" ? btoa(bin) : Buffer.from(bin, "binary").toString("base64");
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function fromBase64Url(code: string): Uint8Array {
  const b64 = code.replace(/-/g, "+").replace(/_/g, "/") + "=".repeat((4 - (code.length % 4)) % 4);
  const bin = typeof atob === "function" ? atob(b64) : Buffer.from(b64, "base64").toString("binary");
  return Uint8Array.from(bin, (c) => c.charCodeAt(0));
}

/** Ne garde que les clés connues, avec des valeurs courtes (chaîne ou liste de chaînes). */
function sanitize(input: unknown): QuestionnaireAnswers | null {
  if (!input || typeof input !== "object") return null;
  const src = input as Record<string, unknown>;
  const out: Record<string, string | string[]> = {};
  for (const k of KEYS) {
    const v = src[k];
    if (typeof v === "string" && v.length <= 40) out[k] = v;
    else if (Array.isArray(v) && v.length <= 8 && v.every((x) => typeof x === "string" && x.length <= 40)) out[k] = v as string[];
  }
  return Object.keys(out).length ? (out as QuestionnaireAnswers) : null;
}

export function encodeShareCode(answers: QuestionnaireAnswers): string {
  const clean = sanitize(answers) ?? {};
  return toBase64Url(new TextEncoder().encode(JSON.stringify(clean)));
}

export function decodeShareCode(code: string | null | undefined): QuestionnaireAnswers | null {
  if (!code || code.length > MAX_CODE_LENGTH || !/^[A-Za-z0-9_-]+$/.test(code)) return null;
  try {
    return sanitize(JSON.parse(new TextDecoder().decode(fromBase64Url(code))));
  } catch {
    return null;
  }
}

export function shareUrlFor(answers: QuestionnaireAnswers, origin = ""): string {
  return `${origin}/trouver-ma-thermopompe/resultats?r=${encodeShareCode(answers)}`;
}
