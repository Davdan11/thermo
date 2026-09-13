/* ==================================================================
   Chantier R — tâche de nuit : vérification des licences RBQ.

   Appelée par POST /api/reseau/tick?taches=rbq (cron du VPS, une fois
   par nuit, scripts/reseau-cron.sh). Garde-fous, dans l'ordre :
     1. RBQ_VERIFICATION_ACTIVE doit valoir 1 (désactivée par défaut) ;
     2. hors production, AUCUN téléchargement (les tests injectent une
        source fictive) ;
     3. fichier illisible (colonnes manquantes, vide) ou incomplet
        (moins de RBQ_MIN_LICENCES licences, 1000 par défaut) : rien
        ne change, aucun verdict n'est écrit ;
     4. échec du réseau : rien ne change.
   Sinon : verdict pour chaque partenaire (partenaires.json) et chaque
   candidature nouvelle (reseau.json). Un NOUVEAU blocage : historique
   du partenaire, courriel au propriétaire (ADMIN_EMAILS ; simulé hors
   production), tâche dans « À faire » (reseau/tasks.ts).
   ================================================================== */

import { createReadStream, createWriteStream } from "node:fs";
import { mkdir, open, rm } from "node:fs/promises";
import path from "node:path";
import { Readable, Transform } from "node:stream";
import { pipeline } from "node:stream/promises";
import type { ReadableStream as WebReadableStream } from "node:stream/web";
import { brandedEmail, p, t, ul } from "@/lib/crm/templates/layout";
import { escapeHtml } from "@/lib/security/escape";
import { SITE_URL } from "@/lib/seo";
import { sendOwnerMail, type Mail } from "../../automatisations/send";
import type { ChannelOutcome } from "../../automatisations/types";
import { logPartner, mutatePartenaires, partnerOf, readPartenaires } from "../../partenaires/store";
import { gestionDataDir, readCandidatures, readGestion } from "../../store";
import { mutateReseau, readReseau } from "../store";
import { collectRbq, normalizeLicence, type RbqParseResult } from "./csv";
import type { RbqRun, RbqSourceMeta, RbqVerification } from "./types";
import { evaluateLicence, isBlocking, RBQ_DEFAULT_SOURCE, registryBlockerLabel } from "./verify";
import { isZipMagic, listZipEntries, openZipEntry, pickCsvEntry } from "./zip";

export interface RbqSource {
  chunks: AsyncIterable<Uint8Array> | Iterable<Uint8Array>;
  url: string;
  lastModified: string | null;
  cleanup?: () => Promise<void>;
}
export type RbqSourceLoader = () => Promise<RbqSource>;

export interface RbqJobOptions {
  now?: Date;
  env?: Record<string, string | undefined>;
  /** Source injectée (tests) ; sinon téléchargement, en production seulement. */
  source?: RbqSourceLoader;
  ownerMail?: (mail: Mail, label: string) => Promise<ChannelOutcome>;
  log?: (line: string) => void;
}

const MAX_BYTES = 150 * 1024 * 1024;

export function minLicences(env: Record<string, string | undefined>): number {
  const n = Number(env.RBQ_MIN_LICENCES);
  return Number.isFinite(n) && n >= 1 ? Math.round(n) : 1000;
}

/** Téléchargement du fichier (zip ou csv) dans un fichier temporaire (droits 600), lu ensuite en flux. */
export async function downloadRbqSource(env: Record<string, string | undefined> = process.env): Promise<RbqSource> {
  if (env.NODE_ENV !== "production") throw new Error("Téléchargement refusé hors production.");
  const url = env.RBQ_SOURCE_URL?.trim() || RBQ_DEFAULT_SOURCE;
  if (!/^https:\/\//.test(url)) throw new Error("RBQ_SOURCE_URL doit commencer par https://");
  const res = await fetch(url, { headers: { "User-Agent": "ThermopompesAVendre/1.0 (verification des licences RBQ)" }, signal: AbortSignal.timeout(300_000), redirect: "follow" });
  if (!res.ok || !res.body) throw new Error(`réponse HTTP ${res.status}`);
  const declared = Number(res.headers.get("content-length") ?? 0);
  if (declared > MAX_BYTES) throw new Error("fichier plus gros que prévu");
  const dir = path.join(gestionDataDir(), "reseau-tmp");
  await mkdir(dir, { recursive: true });
  const file = path.join(dir, `rbq-${Date.now()}.bin`);
  const cleanup = () => rm(file, { force: true });
  let bytes = 0;
  const limit = new Transform({
    transform(chunk: Buffer, _enc, cb) {
      bytes += chunk.length;
      cb(bytes > MAX_BYTES ? new Error("fichier plus gros que prévu") : null, chunk);
    },
  });
  try {
    await pipeline(Readable.fromWeb(res.body as unknown as WebReadableStream), limit, createWriteStream(file, { mode: 0o600 }));
    const fh = await open(file, "r");
    const head = Buffer.alloc(4);
    await fh.read(head, 0, 4, 0);
    await fh.close();
    let chunks: AsyncIterable<Uint8Array>;
    if (isZipMagic(head)) {
      const entry = pickCsvEntry(await listZipEntries(file));
      if (!entry) throw new Error("archive sans fichier CSV");
      chunks = openZipEntry(file, entry);
    } else chunks = createReadStream(file);
    return { chunks, url, lastModified: res.headers.get("last-modified"), cleanup };
  } catch (e) {
    await cleanup();
    throw e;
  }
}

/** Courriel au propriétaire : nouveaux blocages seulement (jamais de numéro de téléphone ni de courriel). */
export function rbqAlertMail(list: Array<{ company: string; label: string }>, base = SITE_URL): Mail {
  const subject = list.length > 1 ? `Licences RBQ : ${list.length} partenaires bloqués` : `Licence RBQ : ${list[0]?.company ?? "partenaire"} bloqué`;
  const body =
    p(t("La vérification de cette nuit au fichier des licences actives de la RBQ bloque les offres de jobs pour :")) +
    ul(list.map((x) => `${escapeHtml(x.company)} — ${escapeHtml(x.label)}`)) +
    p(t("Vérifiez au registre public de la RBQ. Si la licence est valide (numéro mal saisi, renouvellement récent), levez le blocage dans la fiche du partenaire. Une tâche est dans À faire."));
  const text = [subject, "", ...list.map((x) => `- ${x.company} : ${x.label}`), "", `${base}/gestion/partenaires`].join("\n");
  return {
    subject,
    html: brandedEmail({ title: subject, preheader: subject, body, cta: { label: "Ouvrir les partenaires", href: `${base}/gestion/partenaires` }, reason: "Vous recevez ce courriel parce que vous êtes administrateur de l’outil de gestion.", optOutText: "Vérification désactivable : RBQ_VERIFICATION_ACTIVE." }),
    text,
  };
}

const errText = (e: unknown) => (e instanceof Error ? e.message : String(e)).slice(0, 200);

export async function runRbqVerification(o: RbqJobOptions = {}): Promise<RbqRun> {
  const env = o.env ?? process.env;
  const now = o.now ?? new Date();
  const at = now.toISOString();
  const log = o.log ?? (() => undefined);
  const record = async (run: RbqRun): Promise<RbqRun> => {
    await mutateReseau((d) => {
      d.rbq.runs.push(run);
      if (d.rbq.runs.length > 30) d.rbq.runs.splice(0, d.rbq.runs.length - 30);
      return { result: undefined, changed: true };
    });
    log(`RBQ : ${run.status} · ${run.detail}`);
    return run;
  };
  const empty = { checked: 0, blocked: 0, lifted: 0 };

  if (env.RBQ_VERIFICATION_ACTIVE !== "1") return record({ at, status: "desactive", detail: "RBQ_VERIFICATION_ACTIVE n’est pas à 1 : aucun téléchargement, aucun verdict.", ...empty });
  if (!o.source && env.NODE_ENV !== "production") return record({ at, status: "hors-production", detail: "Téléchargement refusé hors production : aucun verdict n’est écrit.", ...empty });

  const [g, partners, cands, reseau] = await Promise.all([readGestion(), readPartenaires(), readCandidatures(), readReseau()]);
  const targets = g.installers.filter((i) => !partners.partners[i.id]?.ended).map((i) => ({ id: i.id, company: i.company, number: partners.partners[i.id]?.compliance.rbq.number || i.rbq || "" }));
  const candTargets = cands.candidatures.filter((c) => c.status === "nouvelle").map((c) => ({ id: c.id, number: c.rbq || "" }));
  const wanted = new Set([...targets, ...candTargets].map((x) => normalizeLicence(x.number)).filter(Boolean));
  if (!wanted.size) return record({ at, status: "ok", detail: "Aucun numéro de licence à vérifier : rien n’a été téléchargé.", ...empty });

  let src: RbqSource | null = null;
  let parsed: RbqParseResult | null = null;
  try {
    src = await (o.source ?? (() => downloadRbqSource(env)))();
    parsed = await collectRbq(src.chunks, wanted);
  } catch (e) {
    return record({ at, status: "echec", detail: `Téléchargement ou lecture impossible (${errText(e)}) : rien n’a changé.`, ...empty });
  } finally {
    await src?.cleanup?.().catch(() => undefined);
  }
  if (!parsed.ok) {
    const why = parsed.error === "colonnes-manquantes" ? `colonnes manquantes : ${parsed.missingColumns.join(", ")}` : "fichier vide";
    return record({ at, status: "source-illisible", detail: `Fichier de la RBQ illisible (${why}) : rien n’a changé.`, ...empty });
  }
  const min = minLicences(env);
  if (parsed.licences < min) return record({ at, status: "source-illisible", detail: `Seulement ${parsed.licences} licences lues (${min} au moins attendues) : fichier incomplet, rien n’a changé.`, ...empty });

  const source: RbqVerification["source"] = { url: src!.url, fetchedAt: at, lastModified: src!.lastModified, licences: parsed.licences };
  const meta: RbqSourceMeta = { ...source, rows: parsed.rows, encoding: parsed.encoding, delimiter: parsed.delimiter === "\t" ? "tabulation" : parsed.delimiter };
  const relevant = reseau.settings.relevantSubcategories;
  const found = parsed.found;
  const newly: Array<{ company: string; label: string }> = [];
  let blocked = 0;
  let lifted = 0;

  await mutatePartenaires((d) => {
    for (const x of targets) {
      const rec = partnerOf(d, x.id);
      const prev = rec.rbqVerification ?? null;
      const next = evaluateLicence(x.number, found, { at, source, relevant, previous: prev });
      rec.rbqVerification = next;
      const was = isBlocking(prev, now);
      const is = isBlocking(next, now);
      if (is) blocked++;
      if (is && !was) {
        const label = registryBlockerLabel(next, now) ?? "Licence RBQ à vérifier";
        newly.push({ company: x.company, label });
        logPartner(d, x.id, { at, by: "système", action: "licence RBQ : offres bloquées", detail: label });
      } else if (was && !is) {
        lifted++;
        logPartner(d, x.id, { at, by: "système", action: "licence RBQ : blocage levé", detail: "Active au fichier des licences actives de la RBQ" });
      }
    }
    return { result: undefined, changed: true };
  });

  await mutateReseau((d) => {
    const keep = new Set(candTargets.map((c) => c.id));
    for (const id of Object.keys(d.rbq.candidatures)) if (!keep.has(id)) delete d.rbq.candidatures[id];
    for (const c of candTargets) d.rbq.candidatures[c.id] = evaluateLicence(c.number, found, { at, source, relevant, previous: d.rbq.candidatures[c.id] ?? null });
    return { result: undefined, changed: true };
  });

  let alert: string | undefined;
  if (newly.length) alert = await (o.ownerMail ?? sendOwnerMail)(rbqAlertMail(newly), "licences RBQ").catch(() => "echec" as ChannelOutcome);

  return record({
    at,
    status: "ok",
    detail: `${targets.length} partenaire${targets.length > 1 ? "s" : ""} et ${candTargets.length} candidature${candTargets.length > 1 ? "s" : ""} vérifiés · ${blocked} bloqué${blocked > 1 ? "s" : ""}${lifted ? ` · ${lifted} levé${lifted > 1 ? "s" : ""}` : ""}.`,
    source: meta,
    checked: targets.length + candTargets.length,
    blocked,
    lifted,
    ...(alert ? { alert } : {}),
  });
}
