import type { Metadata } from "next";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { clientPrefill } from "@/lib/gestion/crm/service";
import { thermoMatchQuotePrefill } from "@/lib/gestion/ventes/service";
import { applyMachinePrefill } from "@/lib/gestion/ventes/thermomatch";
import { lastContractorId, loadContractorOptions } from "@/lib/soumissions/contractors";
import { todayIn } from "@/lib/soumissions/dates";
import { emptyContent } from "@/lib/soumissions/defaults";
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
  await requireAdmin();
  const { client, thermomatch, choix } = await searchParams;
  const tm = thermomatch ? await thermoMatchQuotePrefill(thermomatch, choix) : null;
  const clientId = client ?? tm?.clientId ?? undefined;
  const [settings, pre, data, contractors, templates] = await Promise.all([
    readSettings(),
    clientId ? clientPrefill(clientId) : Promise.resolve(null),
    readSoumissions(),
    loadContractorOptions(),
    listTemplates(),
  ]);
  const today = todayIn();
  const base = emptyContent(settings, today);
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
