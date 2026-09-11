/* ==================================================================
   Automatisation Pipedrive → courriel client à chaque étape.

   Reçoit l'affaire « avant / après » d'un webhook, détermine s'il y a
   un courriel à envoyer (changement d'étape, ou affaire perdue), le
   personnalise avec les champs de l'affaire, l'envoie, puis laisse une
   note sur l'affaire. Un journal local évite les doublons (Pipedrive
   peut livrer un webhook plusieurs fois).
   ================================================================== */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { journalDir } from "./lead-journal";
import { PIPEDRIVE_FIELDS, THIS_SITE, createNote, getPerson, getStages, optionLabel } from "./pipedrive";
import { sendClientEmail } from "./email";
import { LOST_TEMPLATE, templateForStage, type DealEmailContext, type RenderedEmail } from "./templates/stage-emails";

/** Sous-ensemble utile de l'objet « deal » des webhooks Pipedrive (v1 : person_id est un objet, v2 : un entier). */
export interface WebhookDeal {
  id: number;
  title?: string | null;
  stage_id?: number | null;
  status?: string | null;
  person_id?: number | { value?: number; name?: string; email?: Array<{ value: string; primary?: boolean }> } | null;
  person_name?: string | null;
  owner_name?: string | null;
  [custom: string]: unknown;
}

export type StageEvent = { kind: "stage"; stageId: number } | { kind: "lost" } | null;

/** Ce qui a changé et mérite un courriel. Pur, testable. */
export function detectEvent(current: WebhookDeal, previous: WebhookDeal | null | undefined): StageEvent {
  if (current.status === "lost" && previous?.status !== "lost") return { kind: "lost" };
  if (current.status === "deleted") return null;
  const stage = current.stage_id ?? null;
  if (stage !== null && stage !== (previous?.stage_id ?? null)) return { kind: "stage", stageId: stage };
  return null;
}

/** L'affaire vient-elle de ce site (champ « Site web » ou préfixe du titre) ? */
export function belongsToThisSite(deal: WebhookDeal): boolean {
  const site = deal[PIPEDRIVE_FIELDS.SITE];
  if (site !== undefined && site !== null && site !== "") return Number(site) === THIS_SITE.option;
  return typeof deal.title === "string" && deal.title.trim().startsWith(THIS_SITE.prefix);
}

function str(v: unknown): string | undefined {
  if (v === undefined || v === null) return undefined;
  const s = String(v).trim();
  return s ? s : undefined;
}

function formatDateFr(iso: string | undefined): string | undefined {
  if (!iso) return undefined;
  const d = new Date(`${iso.slice(0, 10)}T12:00:00-04:00`);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("fr-CA", { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "America/Toronto" });
}

export function contextFromDeal(deal: WebhookDeal, firstName: string): DealEmailContext {
  const subsidyRaw = str(deal[PIPEDRIVE_FIELDS.SUBVENTION_ESTIMEE]);
  const btuRaw = str(deal[PIPEDRIVE_FIELDS.BTU_TOTAL]);
  return {
    firstName,
    projectType: optionLabel("TYPE_PROJET", deal[PIPEDRIVE_FIELDS.TYPE_PROJET] as string | number | undefined),
    region: optionLabel("REGION", deal[PIPEDRIVE_FIELDS.REGION] as string | number | undefined),
    sqft: str(deal[PIPEDRIVE_FIELDS.SQFT]),
    brand: str(deal[PIPEDRIVE_FIELDS.MARQUE_PROPOSEE]),
    series: str(deal[PIPEDRIVE_FIELDS.SERIE_PROPOSEE]),
    btu: btuRaw ? Number(btuRaw).toLocaleString("fr-CA") : undefined,
    subsidy: subsidyRaw ? Number(subsidyRaw).toLocaleString("fr-CA") : undefined,
    installDate: formatDateFr(str(deal[PIPEDRIVE_FIELDS.DATE_INSTALLATION])),
    installer: str(deal[PIPEDRIVE_FIELDS.INSTALLATEUR_ASSIGNE]),
    advisorName: str(deal.owner_name)?.split(" ")[0],
  };
}

/* ---- Journal anti-doublon : data/leads/pipedrive-courriels.json ---- */
interface SentLog {
  [dealId: string]: string[];
}

function logFile(): string {
  return path.join(journalDir(), "pipedrive-courriels.json");
}

async function readLog(): Promise<SentLog> {
  try {
    return JSON.parse(await readFile(logFile(), "utf8")) as SentLog;
  } catch {
    return {};
  }
}

async function markSent(dealId: number, key: string): Promise<void> {
  try {
    const log = await readLog();
    const list = log[String(dealId)] ?? [];
    if (!list.includes(key)) list.push(key);
    log[String(dealId)] = list;
    await mkdir(journalDir(), { recursive: true });
    await writeFile(logFile(), JSON.stringify(log, null, 2), "utf8");
  } catch (e) {
    console.error("[stage-emails] journal non écrit :", e);
  }
}

async function alreadySent(dealId: number, key: string): Promise<boolean> {
  const log = await readLog();
  return (log[String(dealId)] ?? []).includes(key);
}

/* ---- Personne : courriel et prénom, depuis le webhook ou l'API ---- */
async function resolvePerson(deal: WebhookDeal): Promise<{ email: string; firstName: string } | null> {
  let email: string | undefined;
  let name: string | undefined = str(deal.person_name);
  const p = deal.person_id;
  let personId: number | undefined;
  if (p && typeof p === "object") {
    personId = p.value;
    email = p.email?.find((e) => e.primary)?.value ?? p.email?.[0]?.value;
    name = name ?? str(p.name);
  } else if (typeof p === "number") {
    personId = p;
  }
  if (!email && personId) {
    const person = await getPerson(personId);
    email = person?.email?.find((e) => e.primary)?.value ?? person?.email?.[0]?.value;
    name = name ?? str(person?.first_name) ?? str(person?.name);
  }
  if (!email) return null;
  const firstName = (name ?? "").split(" ")[0] || "";
  return { email, firstName };
}

export interface StageEmailResult {
  action: "ignore" | "doublon" | "sans-courriel" | "autre-site" | "sans-gabarit" | "envoye" | "echec";
  key?: string;
  subject?: string;
}

/** Point d'entrée du webhook. Ne lance jamais : renvoie ce qui s'est passé. */
export async function handleDealChange(current: WebhookDeal, previous: WebhookDeal | null | undefined): Promise<StageEmailResult> {
  const event = detectEvent(current, previous);
  if (!event) return { action: "ignore" };
  if (!belongsToThisSite(current)) return { action: "autre-site" };

  let rendered: ((c: DealEmailContext) => RenderedEmail) | null = null;
  let key: string;
  if (event.kind === "lost") {
    rendered = LOST_TEMPLATE;
    key = "perdue";
  } else {
    const stages = await getStages();
    const stage = stages.find((s) => s.id === event.stageId);
    if (!stage) return { action: "sans-gabarit", key: `etape-${event.stageId}` };
    rendered = templateForStage(stage.name);
    key = `etape-${event.stageId}`;
    if (!rendered) return { action: "sans-gabarit", key };
  }

  if (await alreadySent(current.id, key)) return { action: "doublon", key };

  const person = await resolvePerson(current);
  if (!person) return { action: "sans-courriel", key };

  const email = rendered(contextFromDeal(current, person.firstName));
  const ok = await sendClientEmail(person.email, email.subject, email.html);
  if (!ok) return { action: "echec", key, subject: email.subject };

  await markSent(current.id, key);
  createNote(current.id, `Courriel automatique envoyé au client : « ${email.subject} » (${person.email}).`).catch(() => undefined);
  return { action: "envoye", key, subject: email.subject };
}
