"use client";

/* Chantier R — bon de commande fournisseur : fournisseur, lignes (article, quantité, coût saisi), note. */
import { useState } from "react";
import { Plus, X } from "lucide-react";
import type { RaResult } from "@/app/gestion/(prive)/reseau-actions";
import { ActionForm } from "@/components/partenaires/admin/AdminTools";

export interface OrderItemOption {
  id: string;
  label: string;
  suggested: number;
  supplier: string;
}

interface Line {
  key: number;
  itemId: string;
  qty: number;
}

export function OrderForm({ action, items, preset }: { action: (prev: RaResult, fd: FormData) => Promise<RaResult>; items: OrderItemOption[]; preset: string[] }) {
  const byId = new Map(items.map((i) => [i.id, i]));
  const start = preset.filter((id) => byId.has(id));
  const [lines, setLines] = useState<Line[]>(start.length ? start.map((id, k) => ({ key: k, itemId: id, qty: byId.get(id)!.suggested })) : [{ key: 0, itemId: items[0]?.id ?? "", qty: 1 }]);
  const [next, setNext] = useState(lines.length);
  const supplier = start.map((id) => byId.get(id)!.supplier).find(Boolean) ?? "";
  if (!items.length) return <p className="g-hint">Ajoutez d’abord des articles à l’inventaire.</p>;
  return (
    <ActionForm action={action} submit="Créer le bon de commande" pending="Création…">
      <div className="g-row g-row--2">
        <div className="g-field">
          <label className="g-label" htmlFor="bc-sup">
            Fournisseur
          </label>
          <input id="bc-sup" name="supplier" className="g-input" defaultValue={supplier} maxLength={120} required />
        </div>
        <div className="g-field">
          <label className="g-label" htmlFor="bc-note">
            Note <small>(facultative)</small>
          </label>
          <input id="bc-note" name="note" className="g-input" maxLength={500} />
        </div>
      </div>
      <ul className="rs-lines">
        {lines.map((l, i) => (
          <li key={l.key} className="rs-line">
            <select name="itemId" aria-label={`Article, ligne ${i + 1}`} className="g-input" value={l.itemId} onChange={(e) => setLines(lines.map((x) => (x.key === l.key ? { ...x, itemId: e.target.value } : x)))}>
              {items.map((it) => (
                <option key={it.id} value={it.id}>
                  {it.label}
                </option>
              ))}
            </select>
            <input name="qty" type="number" min={1} max={10000} aria-label={`Quantité, ligne ${i + 1}`} className="g-input" value={l.qty} onChange={(e) => setLines(lines.map((x) => (x.key === l.key ? { ...x, qty: Number(e.target.value) || 0 } : x)))} />
            <input name="cost" inputMode="decimal" aria-label={`Coût unitaire, ligne ${i + 1}`} className="g-input" placeholder="Coût (facultatif)" maxLength={20} />
            <button type="button" className="k-btn k-btn--ghost rs-line__x" aria-label={`Retirer la ligne ${i + 1}`} onClick={() => setLines(lines.filter((x) => x.key !== l.key))} disabled={lines.length === 1}>
              <X size={14} aria-hidden />
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="k-btn k-btn--ghost"
        onClick={() => {
          setLines([...lines, { key: next, itemId: items[0].id, qty: 1 }]);
          setNext(next + 1);
        }}
      >
        <Plus size={14} aria-hidden /> Ajouter une ligne
      </button>
    </ActionForm>
  );
}
