/* ==================================================================
   Chantier R — accueil guidé d'un nouveau partenaire. Pur.

   Cinq étapes, dans l'ordre :
     1. entente signée (volet A) ;
     2. identité légale : nom légal, NEQ, adresse (reseau.json) ;
     3. licence RBQ : numéro et date d'expiration saisis (volet A),
        et pas de blocage au fichier de la RBQ ;
     4. assurance responsabilité valide (volet A) ;
     5. disponibilités : jours de travail, capacité par semaine.
   Chaque étape renvoie vers l'endroit où elle se règle.
   ================================================================== */

import { agreementState } from "../partenaires/agreement";
import { docState, ymdLong } from "../partenaires/compliance";
import type { PartenairesData } from "../partenaires/types";
import type { Installer } from "../types";
import { localYmd } from "../crm/time";
import { isBlocking } from "./rbq/verify";
import { RBQ_OUTCOME_LABELS } from "./rbq/types";
import type { OnboardingRecord } from "./store";

export type StepId = "entente" | "identite" | "rbq" | "assurance" | "disponibilites";
export type StepState = "fait" | "a-faire" | "attente";

export interface OnboardingStep {
  id: StepId;
  label: string;
  state: StepState;
  detail: string;
  href: string;
}

export const NEQ_RE = /^\d{10}$/;
export const WEEKDAYS = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"] as const;

export function onboardingSteps(installer: Pick<Installer, "id" | "createdAt" | "rbq">, ctx: { partners: PartenairesData; record?: OnboardingRecord; now: Date }): OnboardingStep[] {
  const fiche = `/gestion/partenaires/${installer.id}`;
  const accueil = `/gestion/recrutement/accueil/${installer.id}`;
  const rec = ctx.partners.partners[installer.id];
  const steps: OnboardingStep[] = [];

  const a = agreementState(installer, ctx.partners, ctx.now);
  steps.push(
    a.code === "signee"
      ? { id: "entente", label: "Entente signée", state: "fait", detail: `Version ${a.version?.number ?? "?"} signée`, href: `${fiche}#entente` }
      : a.code === "aucune-version"
        ? { id: "entente", label: "Entente", state: "attente", detail: "Aucune entente en vigueur : à publier dans Entente", href: "/gestion/entente" }
        : { id: "entente", label: "Entente", state: "a-faire", detail: a.code === "non-envoyee" ? "À envoyer" : "Envoyée, pas encore signée", href: `${fiche}#entente` },
  );

  const legal = ctx.record?.legal;
  const legalOk = Boolean(legal?.legalName.trim() && legal.address.trim() && NEQ_RE.test(legal.neq));
  steps.push({ id: "identite", label: "Identité légale", state: legalOk ? "fait" : "a-faire", detail: legalOk ? `NEQ ${legal!.neq}` : "Nom légal, NEQ (10 chiffres) et adresse à saisir", href: accueil });

  const rbqDoc = rec?.compliance.rbq;
  const number = rbqDoc?.number || installer.rbq;
  const check = rec?.rbqVerification;
  const hasDates = Boolean(number && rbqDoc?.expiresOn);
  const blocked = isBlocking(check, ctx.now);
  const rbqState: StepState = !hasDates || blocked ? "a-faire" : "fait";
  const rbqDetail = !number
    ? "Numéro de licence à saisir"
    : !rbqDoc?.expiresOn
      ? "Date d’expiration à saisir"
      : blocked
        ? RBQ_OUTCOME_LABELS[check!.outcome]
        : check?.override
          ? `Vérifiée au registre public par le propriétaire (${ymdLong(localYmd(check.override.at))})`
          : check && check.outcome === "active"
            ? `Active selon la RBQ (fichier du ${ymdLong(localYmd(check.source.fetchedAt))})`
            : "Saisie ; vérification au fichier de la RBQ pas encore faite";
  steps.push({ id: "rbq", label: "Licence RBQ", state: rbqState, detail: rbqDetail, href: `${fiche}#conformite` });

  const ins = docState(rec?.compliance.assurance ?? { expiresOn: null }, ctx.now, ctx.partners.settings.alertDays);
  steps.push({
    id: "assurance",
    label: "Assurance responsabilité",
    state: ins === "valide" || ins === "bientot" ? "fait" : "a-faire",
    detail: ins === "manquante" ? "Date d’expiration à saisir" : ins === "expiree" ? "Expirée" : `Valide jusqu’au ${ymdLong(rec!.compliance.assurance.expiresOn!)}`,
    href: `${fiche}#conformite`,
  });

  const av = ctx.record?.availability;
  const avOk = Boolean(av && av.days.length);
  steps.push({
    id: "disponibilites",
    label: "Disponibilités",
    state: avOk ? "fait" : "a-faire",
    detail: avOk ? `${av!.days.map((d) => WEEKDAYS[d]).join(", ")}${av!.weeklyCapacity !== null ? ` · ${av!.weeklyCapacity} par semaine` : ""}` : "Jours de travail et capacité à saisir",
    href: accueil,
  });
  return steps;
}

export function onboardingProgress(steps: OnboardingStep[]): { done: number; total: number } {
  return { done: steps.filter((s) => s.state === "fait").length, total: steps.length };
}
