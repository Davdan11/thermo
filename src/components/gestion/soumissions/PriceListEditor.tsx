"use client";

/* Liste de prix du propriétaire : forfaits d'installation (type de système, capacité), extras, main-d'œuvre,
   rabais prédéfinis. L'outil ne propose AUCUN prix : les extras de départ sont à 0 $ jusqu'à saisie. */
import { useState, useTransition } from "react";
import { Plus, Save, Trash2 } from "lucide-react";
import { savePricesAction } from "@/app/gestion/soumissions/actions";
import { SYSTEM_TYPES, SYSTEM_TYPE_LABELS } from "@/lib/data/types/enums";
import { rid } from "@/lib/soumissions/defaults";
import { money } from "@/lib/soumissions/money";
import { UNIT_LABELS, type CatalogItem, type CatalogRole, type DiscountPreset, type LengthUnit, type LineUnit, type PricePackage } from "@/lib/soumissions/types";
import { Area, Check, Money, Num, Select, StringList, Text } from "./fields";

interface Prices {
  packages: PricePackage[];
  extras: CatalogItem[];
  labour: CatalogItem[];
  discounts: DiscountPreset[];
}

const UNITS = Object.entries(UNIT_LABELS).map(([k, v]) => [k as LineUnit, v.one]) as Array<[LineUnit, string]>;
const ROLES: Array<[Exclude<CatalogRole, null>, string]> = [
  ["ligne-supplementaire", "Ligne supplémentaire (proposée selon la longueur)"],
  ["pompe-drain", "Pompe à condensat (proposée si drain par pompe)"],
  ["support-mural", "Support mural"],
  ["support-sol", "Support au sol"],
  ["circuit", "Circuit électrique dédié"],
  ["retrait", "Retrait de l’ancien appareil"],
];

function ItemEditor({ item, onChange, onRemove, withRole }: { item: CatalogItem; onChange: (x: CatalogItem) => void; onRemove: () => void; withRole: boolean }) {
  return (
    <div className="sq-line" data-optional={item.optional} style={item.unitPriceCents <= 0 ? { borderColor: "rgba(180,35,24,.45)" } : undefined}>
      <div className="sq-line__grid">
        <Text label="Nom" value={item.name} onChange={(v) => onChange({ ...item, name: v })} />
        <Num label="Quantité par défaut" value={item.defaultQuantity} onChange={(v) => onChange({ ...item, defaultQuantity: v ?? 1 })} />
        <Select label="Unité" value={item.unit} options={UNITS} onChange={(v) => onChange({ ...item, unit: (v || "unite") as LineUnit })} />
        <Money label="Prix unitaire" value={item.unitPriceCents} onChange={(v) => onChange({ ...item, unitPriceCents: v })} />
        <div className="sq-line__amt">{item.unitPriceCents ? money(item.unitPriceCents) : <span style={{ color: "var(--g-bad)" }}>à saisir</span>}</div>
        <Area label="Description (visible par le client)" rows={1} value={item.description} onChange={(v) => onChange({ ...item, description: v })} className="sq-line__full" />
      </div>
      <div className="sq-line__opts">
        <Check label="Facultatif par défaut (le client choisit)" checked={item.optional} onChange={(v) => onChange({ ...item, optional: v })} />
        {withRole ? (
          <select className="g-select" value={item.role ?? ""} aria-label="Rôle dans l’outil" style={{ maxWidth: 320, minHeight: 38 }} onChange={(e) => onChange({ ...item, role: (e.target.value || null) as CatalogRole })}>
            <option value="">Aucun rôle particulier</option>
            {ROLES.map(([k, l]) => <option key={k} value={k}>{l}</option>)}
          </select>
        ) : null}
        <span style={{ flex: 1 }} />
        <button type="button" className="sq-icon sq-icon--bad" onClick={onRemove} aria-label={`Retirer ${item.name}`}><Trash2 size={16} aria-hidden /></button>
      </div>
    </div>
  );
}

export function PriceListEditor({ initial, lengthUnit }: { initial: Prices; lengthUnit: LengthUnit }) {
  const [p, setP] = useState<Prices>(initial);
  const [saving, start] = useTransition();
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const up = (fn: (d: Prices) => void) =>
    setP((prev) => {
      const d = structuredClone(prev);
      fn(d);
      return d;
    });
  const unpriced = [...p.extras, ...p.labour].filter((x) => x.unitPriceCents <= 0).length + p.packages.filter((x) => x.priceCents <= 0).length;
  const newItem = (kind: CatalogItem["kind"]): CatalogItem => ({ id: rid(kind === "extra" ? "x" : "w"), kind, name: "", description: "", unit: kind === "extra" ? "unite" : "heure", unitPriceCents: 0, defaultQuantity: 1, optional: false, role: null });

  return (
    <div>
      <div className="g-head">
        <div>
          <p className="g-eyebrow">Créateur de soumissions</p>
          <h1 className="g-h1">Liste de prix</h1>
        </div>
      </div>
      <p className="sq-note">
        Ce sont vos prix : l’outil n’en propose aucun. Les extras de départ sont à 0 $ tant que vous ne les avez pas saisis{unpriced ? ` (${unpriced} élément${unpriced > 1 ? "s" : ""} à compléter, bordés de rouge)` : ""}. Un prix changé ici ne modifie jamais une soumission déjà envoyée.
      </p>

      <section className="sq-step" style={{ marginTop: 14 }}>
        <div className="sq-step__head"><span className="sq-step__n">01</span><div><h2 className="sq-step__title">Forfaits d’installation</h2><p className="sq-step__hint">Par type de système et plage de capacité : le constructeur propose ceux qui conviennent à la machine choisie.</p></div></div>
        <div className="sq-lines">
          {p.packages.map((k) => (
            <div key={k.id} className="sq-line" style={k.priceCents <= 0 ? { borderColor: "rgba(180,35,24,.45)" } : undefined}>
              <div className="g-row g-row--2">
                <Text label="Nom du forfait" value={k.label} onChange={(v) => up((d) => void Object.assign(d.packages.find((x) => x.id === k.id)!, { label: v }))} placeholder="Murale simple zone, installation complète" />
                <Money label="Prix" value={k.priceCents} onChange={(v) => up((d) => void Object.assign(d.packages.find((x) => x.id === k.id)!, { priceCents: v }))} />
              </div>
              <div className="g-row g-row--3">
                <Select label="Type de système" value={k.systemType as never} options={[["tous", "Tous"], ...SYSTEM_TYPES.map((t) => [t, SYSTEM_TYPE_LABELS[t]] as [string, string])] as Array<[never, string]>} onChange={(v) => up((d) => void Object.assign(d.packages.find((x) => x.id === k.id)!, { systemType: v || "tous" }))} />
                <Num label="Capacité de" suffix="BTU/h" integer value={k.capacityMinBtu} onChange={(v) => up((d) => void Object.assign(d.packages.find((x) => x.id === k.id)!, { capacityMinBtu: v }))} />
                <Num label="à" suffix="BTU/h" integer value={k.capacityMaxBtu} onChange={(v) => up((d) => void Object.assign(d.packages.find((x) => x.id === k.id)!, { capacityMaxBtu: v }))} />
              </div>
              <div className="g-row g-row--2">
                <Num label="Longueur de ligne incluse" suffix={lengthUnit} value={k.includedLineLength} onChange={(v) => up((d) => void Object.assign(d.packages.find((x) => x.id === k.id)!, { includedLineLength: v }))} />
                <Area label="Description (visible par le client)" rows={1} value={k.description} onChange={(v) => up((d) => void Object.assign(d.packages.find((x) => x.id === k.id)!, { description: v }))} />
              </div>
              <details className="g-details" style={{ marginTop: 8 }}>
                <summary>Inclusions propres à ce forfait ({k.inclusions.length || "celles des réglages"})</summary>
                <div style={{ marginTop: 8 }}>
                  <StringList values={k.inclusions} onChange={(v) => up((d) => void Object.assign(d.packages.find((x) => x.id === k.id)!, { inclusions: v }))} addLabel="Ajouter une inclusion" />
                </div>
              </details>
              <div className="sq-line__opts">
                <span style={{ flex: 1 }} />
                <button type="button" className="sq-icon sq-icon--bad" onClick={() => up((d) => void (d.packages = d.packages.filter((x) => x.id !== k.id)))} aria-label={`Retirer ${k.label}`}><Trash2 size={16} aria-hidden /></button>
              </div>
            </div>
          ))}
        </div>
        <div className="sq-add">
          <button type="button" className="g-btn g-btn--ghost" onClick={() => up((d) => void d.packages.push({ id: rid("k"), label: "", description: "", systemType: "tous", capacityMinBtu: null, capacityMaxBtu: null, priceCents: 0, includedLineLength: null, inclusions: [] }))}><Plus size={16} aria-hidden /> Ajouter un forfait</button>
        </div>
      </section>

      <section className="sq-step">
        <div className="sq-step__head"><span className="sq-step__n">02</span><div><h2 className="sq-step__title">Extras</h2><p className="sq-step__hint">Le rôle permet au constructeur de proposer l’extra au bon moment (ligne trop longue, pompe, support…).</p></div></div>
        <div className="sq-lines">
          {p.extras.map((x) => <ItemEditor key={x.id} item={x} withRole onChange={(n) => up((d) => void (d.extras = d.extras.map((y) => (y.id === x.id ? n : y))))} onRemove={() => up((d) => void (d.extras = d.extras.filter((y) => y.id !== x.id)))} />)}
        </div>
        <div className="sq-add"><button type="button" className="g-btn g-btn--ghost" onClick={() => up((d) => void d.extras.push(newItem("extra")))}><Plus size={16} aria-hidden /> Ajouter un extra</button></div>
      </section>

      <section className="sq-step">
        <div className="sq-step__head"><span className="sq-step__n">03</span><div><h2 className="sq-step__title">Main-d’œuvre</h2></div></div>
        <div className="sq-lines">
          {p.labour.map((x) => <ItemEditor key={x.id} item={x} withRole={false} onChange={(n) => up((d) => void (d.labour = d.labour.map((y) => (y.id === x.id ? n : y))))} onRemove={() => up((d) => void (d.labour = d.labour.filter((y) => y.id !== x.id)))} />)}
        </div>
        <div className="sq-add"><button type="button" className="g-btn g-btn--ghost" onClick={() => up((d) => void d.labour.push(newItem("main-oeuvre")))}><Plus size={16} aria-hidden /> Ajouter une ligne de main-d’œuvre</button></div>
      </section>

      <section className="sq-step">
        <div className="sq-step__head"><span className="sq-step__n">04</span><div><h2 className="sq-step__title">Rabais prédéfinis</h2><p className="sq-step__hint">Toujours avec une raison, affichée au client.</p></div></div>
        {p.discounts.map((r) => (
          <div key={r.id} className="sq-disc">
            <Text label="Raison" value={r.reason} onChange={(v) => up((d) => void Object.assign(d.discounts.find((x) => x.id === r.id)!, { reason: v }))} invalid={!r.reason.trim()} />
            <Select label="Type" value={r.kind} options={[["pourcentage", "Pourcentage"], ["montant", "Montant"]]} onChange={(v) => up((d) => void Object.assign(d.discounts.find((x) => x.id === r.id)!, { kind: v || "montant", value: 0 }))} />
            {r.kind === "pourcentage" ? <Num label="Valeur" suffix="%" value={r.value} onChange={(v) => up((d) => void Object.assign(d.discounts.find((x) => x.id === r.id)!, { value: Math.min(100, v ?? 0) }))} /> : <Money label="Valeur" value={r.value} onChange={(v) => up((d) => void Object.assign(d.discounts.find((x) => x.id === r.id)!, { value: v }))} />}
            <span />
            <button type="button" className="sq-icon sq-icon--bad" onClick={() => up((d) => void (d.discounts = d.discounts.filter((x) => x.id !== r.id)))} aria-label="Retirer le rabais"><Trash2 size={16} aria-hidden /></button>
          </div>
        ))}
        <div className="sq-add"><button type="button" className="g-btn g-btn--ghost" onClick={() => up((d) => void d.discounts.push({ id: rid("r"), reason: "", kind: "montant", value: 0 }))}><Plus size={16} aria-hidden /> Ajouter un rabais prédéfini</button></div>
      </section>

      <div className="sq-savebar">
        <span className={`sq-savebar__msg ${msg && !msg.ok ? "is-bad" : ""}`} role="status">{msg ? msg.text : unpriced ? `${unpriced} prix à saisir` : "Tous les prix sont saisis"}</span>
        <button type="button" className="g-btn g-btn--primary" disabled={saving} onClick={() => start(async () => { const r = await savePricesAction(p); setMsg(r.ok ? { ok: true, text: r.message ?? "Enregistré." } : { ok: false, text: r.error }); })}>
          <Save size={16} aria-hidden /> {saving ? "Enregistrement…" : "Enregistrer la liste de prix"}
        </button>
      </div>
    </div>
  );
}
