/* Chantier V — « Vendeur attribué » dans la fiche client. Le propriétaire réattribue (avec la raison, notée à
   l'historique) ; un adjoint voit qui suit le client ; un vendeur voit que le client lui revient. Composant serveur. */
import "./equipe.css";
import type { UserSession } from "@/lib/gestion/auth/dal";
import type { CrmIndex } from "@/lib/gestion/crm/model";
import { assignmentView } from "@/lib/gestion/equipe/service";
import { Card } from "../kit/Card";
import { Chip } from "../kit/Chip";
import { AssignForm } from "./AssignForm";

const when = (iso: string) => new Date(iso).toLocaleString("fr-CA", { timeZone: "America/Toronto", dateStyle: "medium", timeStyle: "short" });

export async function AssignCard({ clientId, session, index }: { clientId: string; session: Pick<UserSession, "role" | "userId">; index?: CrmIndex }) {
  const v = await assignmentView(clientId, index);
  if (!v) return null;
  if (session.role === "vendeur") {
    return (
      <Card title="Vendeur attribué" sub={v.current ? `Depuis le ${when(v.current.at)}` : undefined}>
        <p className="eq-assign__who">
          <span className="eq-dot eq-dot--on" aria-hidden />
          <strong>Ce client vous est attribué.</strong>
        </p>
        <p className="g-hint" style={{ margin: 0 }}>
          Ses tâches, soumissions et textos sont les vôtres. Le propriétaire peut le confier à quelqu’un d’autre.
        </p>
      </Card>
    );
  }
  return (
    <Card title="Vendeur attribué" sub={v.current ? `${v.current.how} · le ${when(v.current.at)}` : "Personne pour l’instant : seuls le propriétaire et les adjoints le voient."}>
      <p className="eq-assign__who">
        <span className={`eq-dot${v.current ? " eq-dot--on" : ""}`} aria-hidden />
        <strong>{v.current ? v.current.name : "Non attribué"}</strong>
        {v.current && !v.vendors.some((x) => x.id === v.current!.userId) ? <Chip tone="warn">inactif</Chip> : null}
      </p>
      {session.role === "proprietaire" ? <AssignForm clientId={clientId} current={v.current?.userId ?? null} vendors={v.vendors} /> : null}
      {v.history.length ? (
        <ol className="eq-history" aria-label="Historique des attributions">
          {v.history.map((h, i) => (
            <li key={`${h.at}-${i}`}>
              <span>
                {h.from} → <strong>{h.to}</strong> ({h.how})
              </span>
              <small>
                {when(h.at)} · {h.by}
                {h.reason ? ` · « ${h.reason} »` : ""}
              </small>
            </li>
          ))}
        </ol>
      ) : null}
    </Card>
  );
}
