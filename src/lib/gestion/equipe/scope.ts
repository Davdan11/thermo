/* ==================================================================
   Chantier V — portée des données, côté serveur.

   scopeFor(session) : le propriétaire et les adjoints voient tout ; un
   vendeur ne voit que les clients qui lui sont ATTRIBUÉS (champ
   assignedTo de crm.json), et avec eux leurs tâches, soumissions,
   conversations, jobs et demandes.

   restrictIndex(index, scope) construit un index du CRM ne contenant
   que ce que le vendeur peut voir : les pages ouvertes aux vendeurs le
   passent aux fonctions du service (accueil, tâches, clients, fiche,
   pipeline, agenda, recherche). Rien d'un autre vendeur n'y entre :
   pas même un total. Chaque action revérifie avec canSee…() sur
   l'identifiant reçu (une URL devinée ne montre rien).
   ================================================================== */

import type { Quote } from "@/lib/soumissions/types";
import type { UserSession } from "../auth/dal";
import { loadCrmIndex } from "../crm/service";
import type { ClientComputed, CrmIndex } from "../crm/model";
import type { Task, TaskRule } from "../crm/tasks";
import type { Role } from "./types";

export type Scope = { kind: "tout"; email: string; role: Role; userId: string } | { kind: "vendeur"; email: string; userId: string };

export function scopeFor(s: Pick<UserSession, "role" | "userId" | "email">): Scope {
  return s.role === "vendeur" ? { kind: "vendeur", email: s.email, userId: s.userId } : { kind: "tout", email: s.email, role: s.role, userId: s.userId };
}

export const assigneeOf = (c: Pick<ClientComputed, "b">): string | null => c.b.record?.assignedTo?.userId ?? null;

/**
 * Tâches jamais montrées à un vendeur, même sur ses clients : répartition des jobs aux installateurs, partenaires,
 * service après-vente, réseau, inventaire (le travail du propriétaire).
 */
const VENDOR_HIDDEN_RULES: ReadonlySet<TaskRule> = new Set<TaskRule>(["job-sans-reponse", "job-a-planifier", "partenaire-entente", "partenaire-conformite", "sav-billet", "reseau-rbq", "reseau-recrutement", "inventaire-seuil"]);

/** Index du CRM réduit à la portée. Pour le propriétaire et les adjoints : l'index tel quel. */
export function restrictIndex(index: CrmIndex, scope: Scope): CrmIndex {
  if (scope.kind === "tout") return index;
  const mine = index.clients.filter((c) => assigneeOf(c) === scope.userId);
  const ids = new Set(mine.map((c) => c.b.id));
  const ownGeneral = new Set(index.src.crm.tasks.filter((t) => !t.clientId && t.by === scope.email).map((t) => t.id));
  const taskOk = (t: Task) => !VENDOR_HIDDEN_RULES.has(t.rule) && (t.clientId ? ids.has(t.clientId) : t.manual && ownGeneral.has(t.key));

  const clients: ClientComputed[] = mine.map((c) => ({ ...c, tasks: c.tasks.filter(taskOk) }));
  const byId = new Map<string, ClientComputed>();
  for (const c of clients) {
    byId.set(c.b.id, c);
    for (const a of c.b.aliases) if (!byId.has(a)) byId.set(a, c);
  }
  const onlyMine = (m: Map<string, string>) => new Map([...m].filter(([, cid]) => ids.has(cid)));
  const quoteIds = new Set(clients.flatMap((c) => c.b.quotes.map((q) => q.id)));
  const jobIds = new Set(clients.flatMap((c) => c.b.jobs.map((j) => j.id)));
  const convIds = new Set(clients.flatMap((c) => c.b.textos.map((t) => t.id)));
  const journalIds = new Set(clients.flatMap((c) => c.b.journal.map((e) => e.id)));
  const relanceIds = new Set(clients.flatMap((c) => c.b.relances.map((r) => r.id)));
  const manualIds = new Set(clients.flatMap((c) => c.b.manual.map((m) => m.id)));
  const src = index.src;
  const crm = src.crm;
  return {
    clients,
    byId,
    byQuote: onlyMine(index.byQuote),
    byJob: onlyMine(index.byJob),
    byConversation: onlyMine(index.byConversation),
    tasks: index.tasks.filter(taskOk),
    settings: index.settings,
    now: index.now,
    src: {
      journal: src.journal.filter((e) => journalIds.has(e.id)),
      outcomes: new Map([...src.outcomes].filter(([id]) => journalIds.has(id))),
      quotes: src.quotes.filter((q) => quoteIds.has(q.id)),
      jobs: src.jobs.filter((j) => jobIds.has(j.id)),
      installers: src.installers,
      relances: src.relances.filter((r) => relanceIds.has(r.id)),
      textos: src.textos.filter((t) => convIds.has(t.id)),
      crm: {
        ...crm,
        clients: Object.fromEntries(Object.entries(crm.clients).filter(([id]) => byId.has(id))),
        manualContacts: crm.manualContacts.filter((m) => manualIds.has(m.id)),
        tasks: crm.tasks.filter((t) => (t.clientId ? byId.has(t.clientId) : t.by === scope.email)),
        taskState: Object.fromEntries(Object.entries(crm.taskState).filter(([, s]) => !s.clientId || byId.has(s.clientId))),
        complexTasks: [],
        seasonConsents: Object.fromEntries(Object.entries(crm.seasonConsents ?? {}).filter(([id]) => byId.has(id))),
      },
      generic: src.generic,
    },
  };
}

/** Index du rendu en cours, réduit à la portée de la session. */
export async function scopedIndex(session: Pick<UserSession, "role" | "userId" | "email">): Promise<CrmIndex> {
  return restrictIndex(await loadCrmIndex(), scopeFor(session));
}

/* ---------------- Contrôles d'une ressource précise (actions, pages par identifiant) ---------------- */

export function canSeeClient(index: CrmIndex, scope: Scope, clientId: string): boolean {
  const c = index.byId.get(clientId);
  if (!c) return false;
  return scope.kind === "tout" || assigneeOf(c) === scope.userId;
}

/**
 * Soumission visible : celle d'un client attribué au vendeur ; ou, tant qu'elle n'est rattachée à aucun client (brouillon
 * sans coordonnées), celle qu'il a lui-même créée.
 */
export function canSeeQuote(index: CrmIndex, scope: Scope, quote: Pick<Quote, "id" | "createdBy">): boolean {
  if (scope.kind === "tout") return true;
  const cid = index.byQuote.get(quote.id);
  if (cid) return canSeeClient(index, scope, cid);
  return quote.createdBy.toLowerCase() === scope.email.toLowerCase();
}

export function canSeeConversation(index: CrmIndex, scope: Scope, conversationId: string): boolean {
  if (scope.kind === "tout") return true;
  const cid = index.byConversation.get(conversationId);
  return Boolean(cid && canSeeClient(index, scope, cid));
}

/** Tâche (automatique ou manuelle) visible dans la portée. */
export function canSeeTask(index: CrmIndex, scope: Scope, key: string): boolean {
  if (scope.kind === "tout") return true;
  return restrictIndex(index, scope).tasks.some((t) => t.key === key);
}
