/* ==================================================================
   Chantier V — classement des vendeurs : demandes reçues, délai de
   première réponse, soumissions envoyées, taux de signature, ventes.
   Le vendeur ne voit que SA carte ; le propriétaire voit tout, avec la
   part de commission ; un adjoint voit tout sauf l'argent versé aux
   vendeurs (l'argent de l'entreprise).
   ================================================================== */
import "@/components/gestion/equipe/equipe.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Trophy } from "lucide-react";
import { requireUser } from "@/lib/gestion/auth/dal";
import { leaderboardView, parsePeriodKey, PERIOD_KEYS, PERIOD_LABELS } from "@/lib/gestion/equipe/service";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import { dollars } from "@/components/gestion/kit/format";
import { Reveal } from "@/components/gestion/Reveal";
import { minutesLabel, rateLabel } from "@/components/gestion/equipe/MaCarte";

export const metadata: Metadata = { title: "Classement" };

export default async function ClassementPage({ searchParams }: { searchParams: Promise<{ periode?: string }> }) {
  const session = await requireUser();
  const key = parsePeriodKey((await searchParams).periode);
  const all = await leaderboardView(key);
  const vendeur = session.role === "vendeur";
  const cards = vendeur ? all.filter((c) => c.userId === session.userId) : all;
  const top = Math.max(1, ...cards.map((c) => c.salesCents));
  const money = (userId: string) => session.role === "proprietaire" || userId === session.userId;

  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Analyse</p>
          <h1 className="k-h1">{vendeur ? <>Ma <em>carte</em></> : <>Le <em>classement</em></>}</h1>
          <p className="k-lead">{vendeur ? "Vos demandes, votre vitesse de réponse, vos soumissions et vos ventes signées." : "Qui répond vite, qui envoie, qui signe. Les ventes comptent pour le vendeur qui suivait le client au moment de la signature."}</p>
        </div>
      </Reveal>

      <nav className="k-tabs" aria-label="Période" style={{ marginBottom: 16 }}>
        {PERIOD_KEYS.map((p) => (
          <Link key={p} href={`/gestion/classement?periode=${p}`} aria-current={p === key ? "page" : undefined}>
            {PERIOD_LABELS[p]}
          </Link>
        ))}
      </nav>

      {cards.length ? (
        <ol className="eq-board">
          {cards.map((c, i) => (
            <li key={c.userId} className={`eq-rank${!vendeur && i === 0 && c.salesCents > 0 ? " eq-rank--first" : ""}`} style={{ animationDelay: `${i * 50}ms` }}>
              <div className="eq-rank__head">
                {!vendeur ? <span className="eq-rank__n">{i + 1}</span> : <Trophy size={20} aria-hidden />}
                <span className="eq-rank__name">
                  {c.name}
                  {!c.available ? <small style={{ color: "var(--g-muted)", fontWeight: 400 }}> · indisponible</small> : null}
                </span>
                <span className="eq-rank__sales">{dollars(c.salesCents)}</span>
              </div>
              {!vendeur ? (
                <div className="eq-rank__bar" aria-hidden>
                  <span style={{ width: `${Math.round((c.salesCents / top) * 100)}%` }} />
                </div>
              ) : null}
              <dl className="eq-rank__stats">
                <div>
                  <dt>Demandes reçues</dt>
                  <dd>{c.demandes}</dd>
                </div>
                <div>
                  <dt>Première réponse</dt>
                  <dd>
                    {minutesLabel(c.medianMinutes)}
                    {c.demandes ? <small style={{ color: "var(--g-muted)", fontWeight: 400 }}> · {c.answered}/{c.demandes}</small> : null}
                  </dd>
                </div>
                <div>
                  <dt>Soumissions envoyées</dt>
                  <dd>{c.sent}</dd>
                </div>
                <div>
                  <dt>Taux de signature</dt>
                  <dd>
                    {rateLabel(c.signRate)} <small style={{ color: "var(--g-muted)", fontWeight: 400 }}>({c.signed})</small>
                  </dd>
                </div>
                {money(c.userId) ? (
                  <div>
                    <dt>Commission</dt>
                    <dd>{dollars(c.commissionCents)}</dd>
                  </div>
                ) : (
                  <div>
                    <dt>Dossiers ouverts</dt>
                    <dd>{c.open}</dd>
                  </div>
                )}
              </dl>
            </li>
          ))}
        </ol>
      ) : (
        <EmptyState icon={<Trophy size={20} />} title={vendeur ? "Votre carte arrive" : "Aucun vendeur pour l’instant"} body={vendeur ? "Elle se remplit avec vos premières demandes." : "Invitez vos vendeurs dans Équipe : leurs cartes apparaîtront ici."} />
      )}
    </>
  );
}
