"use client";

/* Champs du créateur de soumissions (classes de gestion.css) : texte, nombre et montant saisis librement
   (« 1 234,56 »), listes modifiables. Les nombres gardent la saisie en cours tant qu'elle n'est pas complète. */
import { useEffect, useId, useState } from "react";
import { ArrowDown, ArrowUp, Plus, Trash2 } from "lucide-react";
import { rid } from "@/lib/soumissions/defaults";
import { centsToInput, parseMoney } from "@/lib/soumissions/money";
import type { ListItem } from "@/lib/soumissions/types";

export function Field({ label, hint, htmlFor, className = "", children }: { label: string; hint?: string; htmlFor?: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={`g-field ${className}`}>
      <label className="g-label" htmlFor={htmlFor}>
        {label}
        {hint ? <small> {hint}</small> : null}
      </label>
      {children}
    </div>
  );
}

export function Text(p: { label: string; hint?: string; value: string; onChange: (v: string) => void; placeholder?: string; type?: string; autoComplete?: string; inputMode?: "text" | "email" | "tel" | "numeric" | "decimal"; className?: string; maxLength?: number; invalid?: boolean }) {
  const id = useId();
  return (
    <Field label={p.label} hint={p.hint} htmlFor={id} className={p.className}>
      <input id={id} className="g-input" type={p.type ?? "text"} value={p.value} onChange={(e) => p.onChange(e.target.value)} placeholder={p.placeholder} autoComplete={p.autoComplete ?? "off"} inputMode={p.inputMode} maxLength={p.maxLength ?? 300} aria-invalid={p.invalid || undefined} />
    </Field>
  );
}

export function Area(p: { label: string; hint?: string; value: string; onChange: (v: string) => void; rows?: number; placeholder?: string; maxLength?: number; className?: string }) {
  const id = useId();
  return (
    <Field label={p.label} hint={p.hint} htmlFor={id} className={p.className}>
      <textarea id={id} className="g-textarea" rows={p.rows ?? 3} value={p.value} onChange={(e) => p.onChange(e.target.value)} placeholder={p.placeholder} maxLength={p.maxLength ?? 4000} />
    </Field>
  );
}

const parseNum = (s: string, integer: boolean): number | null | typeof NaN => {
  const t = s.replace(/[\s ]/g, "").replace(",", ".");
  if (!t) return null;
  if (!/^-?\d*\.?\d*$/.test(t)) return NaN;
  const n = Number(t);
  if (!Number.isFinite(n)) return NaN;
  return integer ? Math.round(n) : n;
};
const showNum = (n: number | null) => (n === null ? "" : String(n).replace(".", ","));

export function Num(p: { label: string; hint?: string; value: number | null; onChange: (v: number | null) => void; suffix?: string; integer?: boolean; className?: string; placeholder?: string }) {
  const id = useId();
  const [draft, setDraft] = useState(showNum(p.value));
  useEffect(() => {
    const cur = parseNum(draft, Boolean(p.integer));
    if (cur !== p.value && !(Number.isNaN(cur) && p.value === null)) setDraft(showNum(p.value));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [p.value]);
  return (
    <Field label={p.label} hint={p.hint} htmlFor={id} className={p.className}>
      <div style={{ position: "relative" }}>
        <input
          id={id}
          className="g-input"
          inputMode={p.integer ? "numeric" : "decimal"}
          value={draft}
          placeholder={p.placeholder}
          style={p.suffix ? { paddingRight: 44 } : undefined}
          onChange={(e) => {
            setDraft(e.target.value);
            const n = parseNum(e.target.value, Boolean(p.integer));
            if (n === null || !Number.isNaN(n)) p.onChange(n === null ? null : Math.max(0, n));
          }}
        />
        {p.suffix ? <span style={{ position: "absolute", right: 12, top: 13, color: "var(--g-faint)", fontSize: 13 }}>{p.suffix}</span> : null}
      </div>
    </Field>
  );
}

export function Money(p: { label: string; hint?: string; value: number; onChange: (cents: number) => void; className?: string }) {
  const id = useId();
  const [draft, setDraft] = useState(p.value ? centsToInput(p.value) : "");
  useEffect(() => {
    if ((parseMoney(draft) ?? 0) !== p.value) setDraft(p.value ? centsToInput(p.value) : "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [p.value]);
  const bad = draft.trim() !== "" && parseMoney(draft) === null;
  return (
    <Field label={p.label} hint={p.hint} htmlFor={id} className={p.className}>
      <div style={{ position: "relative" }}>
        <input
          id={id}
          className="g-input"
          inputMode="decimal"
          value={draft}
          placeholder="0,00"
          aria-invalid={bad || undefined}
          style={{ paddingRight: 30, textAlign: "right" }}
          onChange={(e) => {
            setDraft(e.target.value);
            const c = parseMoney(e.target.value);
            if (e.target.value.trim() === "") p.onChange(0);
            else if (c !== null && c >= 0) p.onChange(c);
          }}
        />
        <span style={{ position: "absolute", right: 12, top: 13, color: "var(--g-faint)", fontSize: 13 }}>$</span>
      </div>
    </Field>
  );
}

export function Select<T extends string>(p: { label: string; hint?: string; value: T | ""; onChange: (v: T | "") => void; options: Array<[T, string]>; placeholder?: string; className?: string }) {
  const id = useId();
  return (
    <Field label={p.label} hint={p.hint} htmlFor={id} className={p.className}>
      <select id={id} className="g-select" value={p.value} onChange={(e) => p.onChange(e.target.value as T | "")}>
        <option value="">{p.placeholder ?? "À préciser"}</option>
        {p.options.map(([v, l]) => (
          <option key={v} value={v}>{l}</option>
        ))}
      </select>
    </Field>
  );
}

export function Seg<T extends string>(p: { label?: string; value: T | ""; onChange: (v: T) => void; options: Array<[T, string]> }) {
  const name = useId();
  return (
    <div className="g-field">
      {p.label ? <span className="g-label">{p.label}</span> : null}
      <div className="sq-seg" role="radiogroup" aria-label={p.label}>
        {p.options.map(([v, l]) => (
          <label key={v}>
            <input type="radio" name={name} value={v} checked={p.value === v} onChange={() => p.onChange(v)} />
            {l}
          </label>
        ))}
      </div>
    </div>
  );
}

export function Check(p: { label: React.ReactNode; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="sq-inline-check">
      <input type="checkbox" checked={p.checked} onChange={(e) => p.onChange(e.target.checked)} />
      <span>{p.label}</span>
    </label>
  );
}

function move<T>(list: T[], i: number, d: -1 | 1): T[] {
  const j = i + d;
  if (j < 0 || j >= list.length) return list;
  const out = [...list];
  [out[i], out[j]] = [out[j], out[i]];
  return out;
}

function RowButtons({ i, n, onMove, onRemove, what }: { i: number; n: number; onMove: (d: -1 | 1) => void; onRemove: () => void; what: string }) {
  return (
    <span className="sq-items__btns">
      <button type="button" className="sq-icon" onClick={() => onMove(-1)} disabled={i === 0} aria-label={`Monter ${what}`}><ArrowUp size={16} aria-hidden /></button>
      <button type="button" className="sq-icon" onClick={() => onMove(1)} disabled={i === n - 1} aria-label={`Descendre ${what}`}><ArrowDown size={16} aria-hidden /></button>
      <button type="button" className="sq-icon sq-icon--bad" onClick={onRemove} aria-label={`Retirer ${what}`}><Trash2 size={16} aria-hidden /></button>
    </span>
  );
}

/** Liste de libellés (modèles des réglages, préparation). */
export function StringList(p: { values: string[]; onChange: (v: string[]) => void; placeholder?: string; addLabel?: string }) {
  return (
    <div>
      <ul className="sq-items">
        {p.values.map((v, i) => (
          <li key={i}>
            <input className="g-input" value={v} placeholder={p.placeholder} maxLength={240} aria-label={`Élément ${i + 1}`} onChange={(e) => p.onChange(p.values.map((x, j) => (j === i ? e.target.value : x)))} />
            <RowButtons i={i} n={p.values.length} what={`l’élément ${i + 1}`} onMove={(d) => p.onChange(move(p.values, i, d))} onRemove={() => p.onChange(p.values.filter((_, j) => j !== i))} />
          </li>
        ))}
      </ul>
      <div className="sq-add">
        <button type="button" className="g-btn g-btn--ghost" onClick={() => p.onChange([...p.values, ""])}><Plus size={16} aria-hidden /> {p.addLabel ?? "Ajouter"}</button>
      </div>
    </div>
  );
}

/** Liste d'éléments du document (inclus, non inclus, hypothèses), avec une précision facultative. */
export function ItemList(p: { items: ListItem[]; onChange: (v: ListItem[]) => void; placeholder?: string; addLabel?: string }) {
  return (
    <div>
      <ul className="sq-items">
        {p.items.map((it, i) => (
          <li key={it.id}>
            <div style={{ display: "grid", gap: 4 }}>
              <input className="g-input" value={it.label} placeholder={p.placeholder} maxLength={240} aria-label={`Élément ${i + 1}`} onChange={(e) => p.onChange(p.items.map((x) => (x.id === it.id ? { ...x, label: e.target.value } : x)))} />
              <input className="g-input" value={it.detail} placeholder="Précision (facultatif)" maxLength={600} aria-label={`Précision de l’élément ${i + 1}`} style={{ minHeight: 38, fontSize: 13.5 }} onChange={(e) => p.onChange(p.items.map((x) => (x.id === it.id ? { ...x, detail: e.target.value } : x)))} />
            </div>
            <RowButtons i={i} n={p.items.length} what={`l’élément ${i + 1}`} onMove={(d) => p.onChange(move(p.items, i, d))} onRemove={() => p.onChange(p.items.filter((x) => x.id !== it.id))} />
          </li>
        ))}
      </ul>
      <div className="sq-add">
        <button type="button" className="g-btn g-btn--ghost" onClick={() => p.onChange([...p.items, { id: rid("i"), label: "", detail: "" }])}><Plus size={16} aria-hidden /> {p.addLabel ?? "Ajouter"}</button>
      </div>
    </div>
  );
}

export { move };
