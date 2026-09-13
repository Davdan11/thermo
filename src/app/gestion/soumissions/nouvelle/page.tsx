import type { Metadata } from "next";
import { requireUser } from "@/lib/gestion/auth/dal";
import { clientPrefill } from "@/lib/gestion/crm/service";
import { scopedIndex } from "@/lib/gestion/equipe/scope"; // Chantier V : pré-remplissage seulement pour SES clients
import { thermoMatchQuotePrefill } from "@/lib/gestion/ventes/service";
import { applyMachinePrefill } from "@/lib/gestion/ventes/thermomatch";
import { lastContractorId, loadContractorOptions } from "@/lib/soumissions/contractors";
import { todayIn } from "@/lib/soumissions/dates";
import { DEFAULT_PRESENCE, emptyContent } from "@/lib/soumissions/defaults";
// Chantier D : installation standard et derniers choix du propriétaire (nouvelle soumission seulement).
import { applyMemory } from "@/lib/soumissions/memory";
import { readMemory } from "@/lib/soumissions/memory-store";
import { newQuoteDefaults } from "@/lib/soumissions/standard";
import { CURRENT_RATES, listTemplates } from "@/lib/soumissions/service";
import { readSettings, readSoumissions } from "@/lib/soumissions/store";
import { QuoteBuilder } from "@/components/gestion/soumissions/QuoteBuilder";
import { ThermoMatchNotice } from "@/components/gestion/ventes/ThermoMatch";

export const metadata: Metadata = { title: "Nouvelle soumission" };
export const dynamic = "force-dynamic";

/* ?client=<id> (fiche client) : les coordonnées du client sont les valeurs initiales du créateur (rendues au serveur),
   et la soumission est reliée à sa fiche. Sans paramètre, « Trouver un client » cherche dans le CRM.
   Volet C : ?thermomatch=<id de la demande>&choix=<1-3> : la machine choisie dans ThermoMatch (marque, modèles extérieur
   et intérieur, jumelage AHRI, capacités, efficacités, montant LogisVert OFFICIEL) est recalculée depuis le catalogue et
   la liste d'Hydro-Québec, puis passée comme valeur initiale ; une donnée absente reste vide. Sans ce paramètre, rien ne
   change.
   Entrepreneur : le dernier choisi dans une soumission, s'il est encore un partenaire actif. */
export default async function NouvellePage({ searchParams }: { searchParams: Promise<{ client?: string; thermomatch?: string; choix?: string }> }) {
  const session = await requireUser(); // Chantier V
  const index = await scopedIndex(session);
  const { client, thermomatch, choix } = await searchParams;
  const tm0 = thermomatch ? await thermoMatchQuotePrefill(thermomatch, choix) : null;
  // Chantier V : une demande ThermoMatch d'un client qui n'est pas celui du vendeur est ignorée.
  const tm = tm0 && (session.role !== "vendeur" || (tm0.clientId && index.byId.has(tm0.clientId))) ? tm0 : null;
  const clientId = client ?? tm?.clientId ?? undefined;
  const [settings, pre, data, contractors, templates, memory] = await Promise.all([
    readSettings(),
    clientId ? clientPrefill(clientId, index) : Promise.resolve(null),
    readSoumissions(),
    loadContractorOptions(),
    listTemplates(),
    readMemory(),
  ]);
  const today = todayIn();
  // Chantier D : installation standard (inclusions, 50 pi, cache-ligne, drain), textes par défaut, puis derniers choix.
  const base = applyMemory(newQuoteDefaults(emptyContent(settings, today), settings, DEFAULT_PRESENCE), memory, today);
  if (pre) base.client = { ...base.client, firstName: pre.firstName, lastName: pre.lastName, email: pre.email, phone: pre.phone, address: pre.address, city: pre.city, postalCode: pre.postalCode };
  const initial = tm?.machine ? applyMachinePrefill(base, tm.machine) : base;
  const last = lastContractorId(data);
  const contractorId = last && contractors.some((s) => s.installerId === last) ? last : null;
  const builder = (
    <QuoteBuilder
      quoteId={null}
      number={null}
      version={1}
      initial={initial}
      internalNotes=""
      settings={settings}
      today={today}
      rates={CURRENT_RATES}
      contractors={contractors}
      contractorId={contractorId}
      clientId={pre?.id ?? null}
      templates={templates}
      memory={memory}
    />
  );
  return tm ? (
    <>
      <ThermoMatchNotice p={tm} />
      {builder}
    </>
  ) : (
    builder
  );
}
