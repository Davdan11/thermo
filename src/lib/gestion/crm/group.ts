/* ==================================================================
   Rapprochement des points de contact en clients.

   Union-find sur les clés p:+1… et e:… : un point de contact qui porte
   les deux fait le pont (un appel sans courriel et une soumission sans
   téléphone sont réunis par un ThermoMatch qui a les deux).

   Identifiant stable : l'enregistrement crm.json qui partage une clé
   (le plus ancien gagne) ; sinon « c_ » + SHA-256 de la plus ancienne
   clé. Les anciens identifiants restent joignables (aliases).

   Séparations manuelles (numéro partagé par deux personnes) : un point
   de contact visé par une séparation (sélecteur t:<clé du point> ou
   k:<empreinte d'une clé>) ne rejoint que les points de la même
   séparation ; ses autres clés (le numéro partagé) ne rapprochent plus.
   ================================================================== */

import { clientIdFor, hashKey, identityKeys, sortKeys } from "./identity";
import type { CrmClientRecord, CrmData, Touchpoint } from "./types";

class UnionFind {
  private parent = new Map<string, string>();
  has(x: string) {
    return this.parent.has(x);
  }
  find(x: string): string {
    if (!this.parent.has(x)) this.parent.set(x, x);
    let root = x;
    while (this.parent.get(root) !== root) root = this.parent.get(root)!;
    let cur = x;
    while (cur !== root) {
      const next = this.parent.get(cur)!;
      this.parent.set(cur, root);
      cur = next;
    }
    return root;
  }
  union(a: string, b: string) {
    const ra = this.find(a);
    const rb = this.find(b);
    if (ra !== rb) this.parent.set(rb, ra);
  }
}

export const keySelector = (key: string) => `k:${hashKey(key)}`;
export const touchSelector = (touchKey: string) => `t:${touchKey}`;
/** Identifiant du client issu d'une séparation : dérivé de ses sélecteurs, donc stable. */
export const splitId = (selectors: string[]) => `c_${hashKey(`split:${[...selectors].sort().join("|")}`).slice(0, 12)}`;

export interface Group {
  id: string;
  aliases: string[];
  touchpoints: Touchpoint[];
  /** Clés en clair (serveur seulement). */
  rawKeys: string[];
  /** Empreintes des clés. */
  keys: string[];
  records: CrmClientRecord[];
  split: boolean;
  firstAt: string;
}

type Crm = Pick<CrmData, "clients" | "aliases" | "splits" | "merges">;

const byAt = (a: Touchpoint, b: Touchpoint) => a.at.localeCompare(b.at) || a.key.localeCompare(b.key);
const uniq = <T,>(xs: T[]) => [...new Set(xs)];

export function resolveAlias(aliases: Record<string, string>, id: string): string {
  let cur = id;
  for (let i = 0; i < 12 && aliases[cur] && aliases[cur] !== cur; i++) cur = aliases[cur];
  return cur;
}

export function groupTouchpoints(touchpoints: Touchpoint[], crm: Crm, generic: ReadonlySet<string> = new Set()): Group[] {
  const uf = new UnionFind();
  const splits = crm.splits.map((s) => new Set(s));
  const keysOf = new Map<string, string[]>();
  const regularKeys = new Set<string>();
  const splitKeyOwner = new Map<string, number>();

  const splitOf = (tp: Touchpoint, keys: string[]) => (splits.length ? splits.findIndex((s) => s.has(touchSelector(tp.key)) || keys.some((k) => s.has(keySelector(k)))) : -1);

  for (const tp of touchpoints) {
    if (tp.attachOnly) continue;
    const keys = identityKeys(tp, generic);
    keysOf.set(tp.key, keys);
    const node = `tp:${tp.key}`;
    uf.find(node);
    const s = splitOf(tp, keys);
    if (s >= 0) {
      uf.union(`split:${s}`, node);
      for (const k of keys) if (splits[s].has(keySelector(k)) && !splitKeyOwner.has(k)) splitKeyOwner.set(k, s);
      continue;
    }
    for (const k of keys.length ? keys : [`x:${tp.key}`]) {
      uf.union(`id:${k}`, node);
      regularKeys.add(k);
    }
  }

  // Relances et alertes : seulement vers un client qui existe déjà.
  for (const tp of touchpoints) {
    if (!tp.attachOnly) continue;
    const keys = identityKeys(tp, generic);
    const s = keys.map((k) => splitKeyOwner.get(k)).find((v) => v !== undefined);
    const target = s !== undefined ? `split:${s}` : keys.filter((k) => regularKeys.has(k)).map((k) => `id:${k}`)[0];
    if (!target) continue;
    keysOf.set(tp.key, keys);
    uf.union(target, `tp:${tp.key}`);
  }

  const comps = new Map<string, Touchpoint[]>();
  for (const tp of touchpoints) {
    if (!keysOf.has(tp.key)) continue;
    const root = uf.find(`tp:${tp.key}`);
    const list = comps.get(root);
    if (list) list.push(tp);
    else comps.set(root, [tp]);
  }
  const splitRoots = new Map<string, number>();
  splits.forEach((_, i) => {
    if (uf.has(`split:${i}`)) splitRoots.set(uf.find(`split:${i}`), i);
  });

  const pre = [...comps.entries()]
    .map(([root, list]) => {
      list.sort(byAt);
      const rawKeys = uniq(list.flatMap((t) => keysOf.get(t.key) ?? []));
      const oldest = list.find((t) => !t.attachOnly) ?? list[0];
      const oldKeys = keysOf.get(oldest.key) ?? [];
      const s = splitRoots.get(root);
      const defaultId = s !== undefined ? splitId(crm.splits[s]) : clientIdFor(oldKeys.length ? sortKeys(oldKeys)[0] : `x:${oldest.key}`);
      return { list, rawKeys, keys: rawKeys.map(hashKey), defaultId, split: s !== undefined, firstAt: list[0].at };
    })
    .sort((a, b) => a.firstAt.localeCompare(b.firstAt) || a.defaultId.localeCompare(b.defaultId));

  const splitIds = new Set(crm.splits.map(splitId));
  const records = Object.values(crm.clients).sort((a, b) => a.createdAt.localeCompare(b.createdAt) || a.id.localeCompare(b.id));
  const resolve = (id: string) => resolveAlias(crm.aliases, id);

  const byId = new Map<string, Group>();
  const addTo = (id: string, p: (typeof pre)[number], recs: CrmClientRecord[]) => {
    const g = byId.get(id);
    const aliasIds = [p.defaultId, ...recs.map((r) => r.id)].filter((x) => x !== id);
    if (!g) {
      byId.set(id, { id, aliases: uniq(aliasIds), touchpoints: [...p.list], rawKeys: [...p.rawKeys], keys: [...p.keys], records: [...recs], split: p.split, firstAt: p.firstAt });
      return;
    }
    g.touchpoints = [...g.touchpoints, ...p.list].sort(byAt);
    g.rawKeys = uniq([...g.rawKeys, ...p.rawKeys]);
    g.keys = uniq([...g.keys, ...p.keys]);
    g.records = uniq([...g.records, ...recs]);
    g.aliases = uniq([...g.aliases, ...aliasIds]).filter((x) => x !== id);
    g.split = g.split || p.split;
    if (p.firstAt < g.firstAt) g.firstAt = p.firstAt;
  };

  for (const p of pre) {
    if (p.split) {
      addTo(resolve(p.defaultId), p, records.filter((r) => r.id === p.defaultId));
      continue;
    }
    const keyset = new Set(p.keys);
    const recs = records.filter((r) => !splitIds.has(r.id) && (r.id === p.defaultId || r.keys.some((k) => keyset.has(k))));
    addTo(resolve(recs[0]?.id ?? p.defaultId), p, recs);
  }

  // Fusions manuelles notées : les deux côtés sous le plus ancien.
  for (const [a, b] of crm.merges) {
    const ra = resolve(a);
    const rb = resolve(b);
    const ga = byId.get(ra);
    const gb = byId.get(rb);
    if (!ga || !gb || ga === gb) continue;
    const [win, lose] = ga.firstAt <= gb.firstAt ? [ga, gb] : [gb, ga];
    win.touchpoints = [...win.touchpoints, ...lose.touchpoints].sort(byAt);
    win.rawKeys = uniq([...win.rawKeys, ...lose.rawKeys]);
    win.keys = uniq([...win.keys, ...lose.keys]);
    win.records = uniq([...win.records, ...lose.records]);
    win.aliases = uniq([...win.aliases, lose.id, ...lose.aliases]).filter((x) => x !== win.id);
    byId.delete(lose.id);
  }

  // Tous les anciens identifiants qui mènent ici.
  for (const [from] of Object.entries(crm.aliases)) {
    const g = byId.get(resolve(from));
    if (g && from !== g.id && !g.aliases.includes(from)) g.aliases.push(from);
  }

  return [...byId.values()].sort((a, b) => a.firstAt.localeCompare(b.firstAt) || a.id.localeCompare(b.id));
}
