/* /gestion/inventaire/commandes/[id] — Chantier R : bon de commande fournisseur (imprimable), commandé, reçu, annulé. */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, Printer } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { readInventaire } from "@/lib/gestion/inventaire/store";
import { ORDER_ID_RE, ORDER_STATUS_LABELS } from "@/lib/gestion/inventaire/types";
import { longDate } from "@/lib/gestion/partenaires/format";
import { money } from "@/lib/soumissions/money";
import { orderReceiveAction, orderStatusAction } from "../../../reseau-actions";
import { Card } from "@/components/gestion/kit/Card";
import { Chip } from "@/components/gestion/kit/Chip";
import { Reveal } from "@/components/gestion/Reveal";
import { ActionButton } from "@/components/partenaires/admin/AdminTools";
import "@/components/gestion/reseau/reseau.css";

export const metadata: Metadata = { title: "Bon de commande" };

export default async function OrderPage({ params }: { params: Promise<{ id: string }> }) {
  await requireAdmin();
  const { id } = await params;
  if (!ORDER_ID_RE.test(id)) notFound();
  const data = await readInventaire();
  const o = data.orders.find((x) => x.id === id);
  if (!o) notFound();
  const items = new Map(data.items.map((i) => [i.id, i]));
  const priced = o.lines.filter((l) => l.unitCostCents !== null);
  const total = priced.reduce((s, l) => s + l.qty * l.unitCostCents!, 0);
  const open = o.status === "brouillon" || o.status === "envoye";

  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <Link href="/gestion/inventaire" className="k-link rs-noprint">
            <ChevronLeft size={14} aria-hidden /> Inventaire
          </Link>
          <p className="k-eyebrow">Bon de commande</p>
          <h1 className="k-h1">
            N° {o.number} <em>{o.supplier}</em>
          </h1>
          <p className="k-lead">
            Créé le {longDate(o.createdAt)}
            {o.sentAt ? ` · commandé le ${longDate(o.sentAt)}` : ""}
            {o.receivedAt ? ` · reçu le ${longDate(o.receivedAt)}` : ""}
          </p>
        </div>
        <div className="g-actions rs-noprint">
          <Chip tone={o.status === "recu" ? "ok" : o.status === "envoye" ? "blue" : o.status === "annule" ? "muted" : "cream"} dot>
            {ORDER_STATUS_LABELS[o.status]}
          </Chip>
        </div>
      </Reveal>

      <Card>
        <div className="rs-order">
          <div className="rs-scroll">
            <table>
              <thead>
                <tr>
                  <th>Article</th>
                  <th>N° du fabricant</th>
                  <th className="is-num">Qté</th>
                  <th className="is-num">Coût unitaire</th>
                  <th className="is-num">Total</th>
                </tr>
              </thead>
              <tbody>
                {o.lines.map((l) => {
                  const it = items.get(l.itemId);
                  return (
                    <tr key={l.itemId}>
                      <td>{it?.label ?? "Article retiré"}</td>
                      <td>{it?.partNumber || "—"}</td>
                      <td className="is-num">{l.qty}</td>
                      <td className="is-num">{l.unitCostCents === null ? "à confirmer" : money(l.unitCostCents)}</td>
                      <td className="is-num">{l.unitCostCents === null ? "—" : money(l.qty * l.unitCostCents)}</td>
                    </tr>
                  );
                })}
              </tbody>
              {priced.length ? (
                <tfoot>
                  <tr>
                    <th colSpan={4}>Total des lignes au coût saisi{priced.length < o.lines.length ? ` (${o.lines.length - priced.length} sans coût)` : ""}</th>
                    <th className="is-num">{money(total)}</th>
                  </tr>
                </tfoot>
              ) : null}
            </table>
          </div>
          {o.note ? <p>Note : {o.note}</p> : null}
          <div className="g-actions rs-noprint">
            <span className="g-hint" style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>
              <Printer size={14} aria-hidden /> Imprimer : Ctrl+P (le menu disparaît à l’impression)
            </span>
            {o.status === "brouillon" ? (
              <ActionButton action={orderStatusAction.bind(null, id, "envoye")} className="k-btn" pending="…">
                Marquer commandé
              </ActionButton>
            ) : null}
            {open ? (
              <ActionButton action={orderReceiveAction.bind(null, id)} className="k-btn k-btn--primary" pending="…" confirm="Marquer reçu : les quantités entrent en stock ?">
                Marquer reçu
              </ActionButton>
            ) : null}
            {open ? (
              <ActionButton action={orderStatusAction.bind(null, id, "annule")} className="k-btn k-btn--ghost" pending="…" confirm="Annuler ce bon de commande ?">
                Annuler
              </ActionButton>
            ) : null}
          </div>
        </div>
      </Card>
    </>
  );
}
