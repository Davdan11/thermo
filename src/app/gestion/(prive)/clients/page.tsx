/* Clients : tous ceux qui ont écrit, appelé, reçu une soumission ou un job, réunis par téléphone et courriel.
   Recherche (nom, ville, chiffres du téléphone, courriel, numéro de soumission) et filtre par étape.
   La liste n'affiche ni numéro ni courriel : seulement nom, ville, étape, canal, montant. */
import type { Metadata } from "next";
import Link from "next/link";
import { Search, UserPlus } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { clientsList } from "@/lib/gestion/crm/service";
import { isStage, STAGE_SHORT, STAGES } from "@/lib/gestion/crm/types";
import { Avatar } from "@/components/gestion/kit/Avatar";
import { StageChip } from "@/components/gestion/kit/Chip";
import { DataTable } from "@/components/gestion/kit/DataTable";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import { plural } from "@/components/gestion/kit/format";
import { Money } from "@/components/gestion/kit/Money";
import { Reveal } from "@/components/gestion/Reveal";

export const metadata: Metadata = { title: "Clients" };

export default async function ClientsPage({ searchParams }: { searchParams: Promise<{ q?: string; etape?: string }> }) {
  await requireAdmin();
  const sp = await searchParams;
  const q = (sp.q ?? "").slice(0, 80);
  const etape = isStage(sp.etape) ? sp.etape : undefined;
  const { rows, counts, total } = await clientsList({ q, etape });
  const href = (e?: string) => {
    const p = new URLSearchParams();
    if (q) p.set("q", q);
    if (e) p.set("etape", e);
    const s = p.toString();
    return s ? `/gestion/clients?${s}` : "/gestion/clients";
  };

  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Travail</p>
          <h1 className="k-h1">Clients</h1>
          <p className="k-lead">{plural(total, "client", "clients")}, réunis automatiquement par téléphone et courriel : demandes, appels, textos, soumissions et jobs.</p>
        </div>
        <Link href="/gestion/clients/nouveau" className="k-btn k-btn--primary k-btn--lg">
          <UserPlus size={18} aria-hidden /> Nouveau client
        </Link>
      </Reveal>

      <div className="cr-toolbar">
        <form action="/gestion/clients" className="cr-searchbox" role="search">
          <Search size={18} aria-hidden />
          <input name="q" type="search" defaultValue={q} placeholder="Nom, ville, 4 derniers chiffres, courriel, n° de soumission" aria-label="Rechercher un client" enterKeyHint="search" />
          {etape ? <input type="hidden" name="etape" value={etape} /> : null}
          <button type="submit" className="k-btn k-btn--ink">
            Chercher
          </button>
        </form>
        <nav className="k-tabs" aria-label="Filtrer par étape">
          <Link href={href()} aria-current={!etape ? "page" : undefined}>
            Tous <b>{total}</b>
          </Link>
          {STAGES.map((s) => (
            <Link key={s} href={href(s)} aria-current={etape === s ? "page" : undefined}>
              {STAGE_SHORT[s]} <b>{counts[s]}</b>
            </Link>
          ))}
        </nav>
      </div>

      <DataTable
        label="Clients"
        columns={[
          { key: "who", label: "Client", width: "minmax(0, 2.2fr)" },
          { key: "stage", label: "Étape", width: "150px" },
          { key: "channel", label: "Premier contact", width: "minmax(0, 1.2fr)", hideOnMobile: true },
          { key: "value", label: "Montant", width: "110px", align: "end" },
          { key: "tasks", label: "À faire", width: "90px", align: "end", hideOnMobile: true },
          { key: "last", label: "Activité", width: "110px", align: "end" },
        ]}
        rows={rows.map((r) => ({
          key: r.id,
          href: `/gestion/clients/${r.id}`,
          tone: r.overdue ? "hot" : r.stage === "perdue" ? "muted" : undefined,
          cells: {
            who: (
              <span className="cr-who">
                <Avatar initials={r.initials} seed={r.id} size="sm" />
                <span className="cr-who__text">
                  <span className="cr-who__name">
                    {r.name}
                    {r.reactivated ? <span className="k-chip k-chip--orange" style={{ marginLeft: 8 }}>Réactivé</span> : null}
                  </span>
                  <span className="cr-who__sub">{[r.city, r.sources.join(", ")].filter(Boolean).join(" · ")}</span>
                </span>
              </span>
            ),
            stage: <StageChip stage={r.stage} size="sm" />,
            channel: r.channel ?? <span className="k-table__none">Saisi à la main</span>,
            value: <Money cents={r.valueCents} />,
            tasks: r.tasks ? <span className={`k-chip ${r.overdue ? "k-chip--orange" : ""}`}>{r.tasks}</span> : null,
            last: r.last,
          },
        }))}
        empty={
          <EmptyState
            icon={<Search size={20} />}
            title={q || etape ? "Aucun client ne correspond" : "Aucun client pour l’instant"}
            body={q || etape ? "Essayez un autre nom, les 4 derniers chiffres du téléphone ou un numéro de soumission." : "Chaque demande du site, appel, texto, soumission ou job crée ou complète une fiche ici."}
            action={
              q || etape ? (
                <Link href="/gestion/clients" className="k-btn">
                  Voir tous les clients
                </Link>
              ) : (
                <Link href="/gestion/clients/nouveau" className="k-btn k-btn--primary">
                  <UserPlus size={16} aria-hidden /> Ajouter un client
                </Link>
              )
            }
          />
        }
      />
    </>
  );
}
