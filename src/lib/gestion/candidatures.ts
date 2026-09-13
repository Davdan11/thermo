/* ==================================================================
   Candidatures d'installateurs reçues par /partenaires : conservées
   (en plus du courriel interne) pour les ajouter en un clic.
   Les marques et la région sont du texte libre : lues ici comme des
   indices que le propriétaire confirme dans le formulaire.
   ================================================================== */

import { randomBytes } from "node:crypto";
import { getCities } from "@/lib/seo/cities";
import { mutateCandidatures } from "./store";
import { foldText, regionFromLabel, type RegionCode } from "./regions";
import type { Candidature, CandidatureStatus } from "./types";

export interface CandidatureInput {
  company: string;
  rbq: string;
  contact: string;
  phone: string;
  email: string;
  brands?: string;
  region?: string;
  volume?: string;
}

export function newCandidatureId(): string {
  return `c_${randomBytes(8).toString("base64url")}`;
}

export async function storeCandidature(input: CandidatureInput, now = new Date()): Promise<Candidature> {
  const c: Candidature = {
    id: newCandidatureId(),
    receivedAt: now.toISOString(),
    company: input.company,
    rbq: input.rbq,
    contact: input.contact,
    phone: input.phone,
    email: input.email,
    brandsText: input.brands ?? "",
    regionText: input.region ?? "",
    volume: input.volume ?? "",
    status: "nouvelle",
  };
  await mutateCandidatures((data) => {
    data.candidatures.push(c);
    return { result: undefined, changed: true };
  });
  return c;
}

export function setCandidatureStatus(id: string, status: CandidatureStatus, installerId?: string): Promise<boolean> {
  return mutateCandidatures((data) => {
    const c = data.candidatures.find((x) => x.id === id);
    if (!c) return { result: false, changed: false };
    c.status = status;
    if (installerId) c.installerId = installerId;
    return { result: true, changed: true };
  });
}

const fragments = (text: string) =>
  text
    .split(/[,;/&+\n]|\bet\b|\band\b/i)
    .map((f) => foldText(f))
    .filter(Boolean);

/** Marques reconnues dans un texte libre (« Daikin, Fujitsu, Mitsubishi » → daikin, fujitsu, mitsubishi-electric). */
export function brandHints(text: string, brands: Array<{ id: string; name: string }>): string[] {
  const found = new Set<string>();
  for (const f of fragments(text)) {
    for (const b of brands) {
      const name = foldText(b.name);
      const inName = f.length >= 3 && ` ${name} `.includes(` ${f} `);
      const inFragment = ` ${f} `.includes(` ${name} `);
      if (f === name || inName || inFragment) found.add(b.id);
    }
  }
  return [...found];
}

/** Régions reconnues : nom de région, appellation courante (Rive-Sud…) ou ville du site. */
export function regionHints(text: string): RegionCode[] {
  const found = new Set<RegionCode>();
  const cities = getCities();
  for (const f of fragments(text)) {
    const direct = regionFromLabel(f);
    if (direct) {
      found.add(direct);
      continue;
    }
    for (const c of cities) {
      if (` ${f} `.includes(` ${foldText(c.name)} `)) {
        const r = regionFromLabel(c.region);
        if (r) found.add(r);
      }
    }
  }
  return [...found];
}
