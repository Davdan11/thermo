/* ==================================================================
   /gestion/inventaire — Chantier R : articles en stock liés au
   catalogue, réservés automatiquement par les jobs et les soumissions
   acceptées, sortis à la fin du chantier ; alertes de seuil bas et
   bons de commande fournisseurs.
   ================================================================== */
import type { Metadata } from "next";
import { AlertTriangle, Boxes, ClipboardList, PackageMinus, Warehouse } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { inventoryView } from "@/lib/gestion/inventaire/service";
import { suggestedQty } from "@/lib/gestion/inventaire/reservations";
import { ITEM_KIND_LABELS, ORDER_STATUS_LABELS } from "@/lib/gestion/inventaire/types";
import { longDate } from "@/lib/gestion/partenaires/format";
import { money } from "@/lib/soumissions/money";
import { itemCreateAction, orderCreateAction, syncExitsAction } from "../reseau-actions";
import { Card, SectionHeader } from "@/components/gestion/kit/Card";
import { Chip } from "@/components/gestion/kit/Chip";
import { DataTable } from "@/components/gestion/kit/DataTable";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import { KpiTile } from "@/components/gestion/kit/KpiTile";
import { Reveal } from "@/components/gestion/Reveal";
import { ItemForm } from "@/components/gestion/reseau/ItemForm";
import { OrderForm } from "@/components/gestion/reseau/OrderForm";
import { ActionButton } from "@/components/partenaires/admin/AdminTools";
import "@/components/gestion/reseau/reseau.css";

export const metadata: Metadata = { title: "Inventaire" };

export default async function InventairePage() {
  await requireAdmin();
  const { data, stock, value } = await inventoryView();
  const live = stock.filter((s) => !s.item.archived);
  const low = live.filter((s) => s.low);
  const pending = live.reduce((n, s) => n + s.pendingExit.length, 0);
  const reserved = live.reduce((n, s) => n + s.reserved, 0);
  const openOrders = data.orders.filter((o) => o.status === "brouillon" || o.status === "envoye");
  const options = live.map((s) => ({ id: s.item.id, label: `${s.item.label}${s.item.location ? ` · ${s.item.location}` : ""}`, suggested: suggestedQty(s), supplier: s.item.supplier }));

  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Opérations</p>
          <h1 className="k-h1">
            Inventaire <em>au fil des jobs</em>
          </h1>
          <p className="k-lead">Une soumission acceptée ou un job de ce modèle réserve le stock ; la fin du chantier le sort. Les coûts sont les vôtres : rien n’est deviné.</p>
        </div>
      </Reveal>

      {pending ? (
        <Reveal className="pa-banner rs-noprint">
          <PackageMinus size={22} aria-hidden />
          <div style={{ display: "grid", gap: 10 }}>
            <div>
              <b>
                {pending} sortie{pending > 1 ? "s" : ""} de stock à enregistrer
              </b>
              <p>Des chantiers sont terminés : leurs unités réservées quittent le stock (aussi fait automatiquement par la tâche planifiée).</p>
            </div>
            <ActionButton action={syncExitsAction} className="k-btn k-btn--ink" pending="Enregistrement…">
              Enregistrer les sorties
            </ActionButton>
          </div>
        </Reveal>
      ) : null}

      <div className="cr-grid3" style={{ marginBottom: 20 }}>
        <KpiTile label="Articles" icon={<Boxes size={16} />} value={live.length} tone="ink" sub={`${live.reduce((n, s) => n + Math.max(0, s.item.quantity), 0)} unités en main`} />
        <KpiTile label="Valeur au coût" icon={<Warehouse size={16} />} value={value.cents ? money(value.cents) : "—"} sub={value.withoutCost ? `${value.withoutCost} article${value.withoutCost > 1 ? "s" : ""} sans coût saisi` : "tous les coûts saisis"} />
        <KpiTile label="Réservées" value={reserved} sub="unités promises à des jobs ou soumissions" />
        <KpiTile label="Sous le seuil" icon={<AlertTriangle size={16} />} value={low.length} tone={low.length ? "orange" : "paper"} sub="à commander" />
      </div>

      {live.length ? (
        <DataTable
          label="Articles en stock"
          columns={[
            { key: "a", label: "Article", width: "2fr" },
            { key: "m", label: "En main", width: "0.7fr", align: "end" },
            { key: "r", label: "Réservé", width: "0.7fr", align: "end" },
            { key: "d", label: "Disponible", width: "0.8fr", align: "end" },
            { key: "l", label: "Emplacement", width: "1fr" },
          ]}
          rows={live.map((s) => ({
            key: s.item.id,
            href: `/gestion/inventaire/${s.item.id}`,
            tone: s.low || s.available < 0 ? "hot" : undefined,
            cells: {
              a: (
                <span>
                  <b>{s.item.label}</b>
                  <br />
                  <small className="g-hint">
                    {ITEM_KIND_LABELS[s.item.kind]}
                    {s.item.modelLabel && s.item.modelLabel !== s.item.label ? ` · ${s.item.modelLabel}` : ""}
                    {s.low ? " · sous le seuil" : ""}
                  </small>
                </span>
              ),
              m: s.item.quantity,
              r: s.reserved || "—",
              d: <b style={{ color: s.available < 0 || s.low ? "var(--g-bad)" : undefined }}>{s.available}</b>,
              l: s.item.location || null,
            },
          }))}
        />
      ) : (
        <EmptyState icon={<Boxes size={20} />} title="Aucun article pour l’instant" body="Ajoutez vos unités extérieures, intérieures et accessoires : liées à un modèle du catalogue, elles se réservent seules." />
      )}

      <section className="rs-section rs-cands">
        <Card title="Ajouter un article" sub="Lié à un modèle du catalogue, il se réserve automatiquement.">
          <ItemForm action={itemCreateAction} withQuantity submit="Ajouter à l’inventaire" />
        </Card>
        <Card title="Bon de commande" sub={low.length ? `${low.length} article${low.length > 1 ? "s" : ""} sous le seuil, déjà en lignes` : "Fournisseur, lignes, coût (facultatif)"}>
          <OrderForm action={orderCreateAction} items={options} preset={low.map((s) => s.item.id)} />
        </Card>
      </section>

      <section className="rs-section">
        <SectionHeader eyebrow="Fournisseurs" title="Bons de" accent="commande" lead={openOrders.length ? `${openOrders.length} en cours` : "Aucun en cours"} />
        {data.orders.length ? (
          <DataTable
            label="Bons de commande"
            columns={[
              { key: "n", label: "N°", width: "0.5fr" },
              { key: "f", label: "Fournisseur", width: "1.6fr" },
              { key: "l", label: "Lignes", width: "0.6fr", align: "end" },
              { key: "s", label: "État", width: "1fr" },
              { key: "d", label: "Créé le", width: "1fr" },
            ]}
            rows={[...data.orders].reverse().map((o) => ({
              key: o.id,
              href: `/gestion/inventaire/commandes/${o.id}`,
              tone: o.status === "annule" || o.status === "recu" ? "muted" : undefined,
              cells: {
                n: <b>{o.number}</b>,
                f: o.supplier,
                l: o.lines.length,
                s: (
                  <Chip tone={o.status === "recu" ? "ok" : o.status === "envoye" ? "blue" : o.status === "annule" ? "muted" : "cream"} dot>
                    {ORDER_STATUS_LABELS[o.status]}
                  </Chip>
                ),
                d: longDate(o.createdAt),
              },
            }))}
          />
        ) : (
          <EmptyState compact icon={<ClipboardList size={20} />} title="Aucun bon de commande" body="Créez-en un ci-dessus ; à la réception, les quantités entrent en stock." />
        )}
      </section>
    </>
  );
}
