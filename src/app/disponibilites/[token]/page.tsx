/* ==================================================================
   Chantier P — /disponibilites/[jeton] : l'installateur publie ses
   moments libres (fenêtres d'arrivée) ; ses clients les choisissent
   dans leur portail. Jeton : lien envoyé depuis /gestion, lien de
   l'offre acceptée ou lien de chantier ; installateur actif seulement.
   Il ne voit que SES moments et, pour un moment réservé, le numéro du
   job et la ville (rien d'autre sur le client).
   GET en lecture seule ; ajout et retrait : POST ./creneaux.
   ================================================================== */
import type { Metadata } from "next";
import { headers } from "next/headers";
import { CalendarPlus, Clock, Link2Off } from "lucide-react";
import { formatDay } from "@/lib/soumissions/dates";
import { ipFromHeaders } from "@/lib/gestion/rate-limit";
import { portalLimits } from "@/lib/gestion/portail/limits";
import { getAvailabilityView } from "@/lib/gestion/portail/service";
import { Arcs, Foot, Mark, Plain } from "@/components/partenaires/PublicBits";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Mes disponibilités" };

const ERRORS: Record<string, string> = {
  creneau: "Ce moment n’a pas été ajouté : vérifiez la date et les heures (fin après le début, au moins 30 minutes, pas déjà publié).",
  reserve: "Ce moment est réservé par un client : il ne peut pas être retiré ici. Appelez-nous.",
  introuvable: "Moment introuvable.",
  formulaire: "Formulaire incomplet.",
};

const dayTitle = (ymd: string) => {
  const s = new Date(`${ymd}T12:00:00Z`).toLocaleDateString("fr-CA", { timeZone: "UTC", weekday: "long", day: "numeric", month: "long" });
  return s.charAt(0).toLocaleUpperCase("fr-CA") + s.slice(1);
};

export default async function DisponibilitesPage({ params, searchParams }: { params: Promise<{ token: string }>; searchParams: Promise<{ r?: string; e?: string; n?: string }> }) {
  const { token } = await params;
  const { r, e, n } = await searchParams;
  if (!portalLimits.availabilityView.hit(ipFromHeaders(await headers()))) return <Plain icon={<Clock size={26} />} title="Trop de visites" text="Réessayez dans quelques minutes." />;
  const v = await getAvailabilityView(token);
  if (!v) return <Plain icon={<Link2Off size={26} />} title="Ce lien n’est pas valide" text="Ouvrez le lien de votre offre acceptée ou celui du dernier courriel « Publiez vos disponibilités »." />;
  const action = `/disponibilites/${encodeURIComponent(token)}/creneaux`;
  const free = v.days.reduce((s, d) => s + d.slots.filter((x) => !x.booked && !x.past).length, 0);
  const booked = v.days.reduce((s, d) => s + d.slots.filter((x) => x.booked).length, 0);

  return (
    <main className="pp pj-avail">
      <header className="pp-cover">
        <Arcs />
        <div className="pp-cover__in">
          <Mark sub="Installateurs" />
          <p className="pp-eyebrow pp-rise">{v.company}</p>
          <h1 className="pp-title pp-rise pp-rise--2">
            Vos disponibilités<em>Vos clients choisissent leur date.</em>
          </h1>
          <div className="pp-meta pp-rise pp-rise--3">
            <span>
              {free} moment{free > 1 ? "s" : ""} libre{free > 1 ? "s" : ""}
            </span>
            <span>
              {booked} réservé{booked > 1 ? "s" : ""}
            </span>
            {v.waiting.length ? (
              <span>
                {v.waiting.length} client{v.waiting.length > 1 ? "s attendent" : " attend"}
              </span>
            ) : null}
          </div>
        </div>
      </header>

      <div className="pp-wrap">
        {r === "ajoute" ? (
          <p className="pp-alert pp-alert--ok pp-rise" role="status" style={{ marginTop: 16 }}>
            {n && Number(n) > 1 ? `${n} moments publiés.` : "Moment publié."} Vos clients le voient déjà dans leur portail.
          </p>
        ) : r === "retire" ? (
          <p className="pp-alert pp-alert--ok pp-rise" role="status" style={{ marginTop: 16 }}>
            Moment retiré.
          </p>
        ) : e ? (
          <p className="pp-alert pp-rise" role="alert" style={{ marginTop: 16 }}>
            {ERRORS[e] ?? "Rien n’a été enregistré. Réessayez."}
          </p>
        ) : null}

        <section className="pp-sheet pp-pad pp-rise" style={{ marginTop: 16 }} aria-labelledby="ajouter">
          <h2 id="ajouter" className="pp-section-title">
            Ajouter <em>un moment</em>
          </h2>
          <p className="pp-lead">Une fenêtre d’arrivée (ex. : 8 h à 12 h). Un moment choisi par un client disparaît pour les autres ; vous et le propriétaire êtes avertis.</p>
          <form method="post" action={action} className="pp-form">
            <input type="hidden" name="action" value="ajouter" />
            <label className="pp-field">
              <span className="pp-label">Date</span>
              <input type="date" name="jour" className="pp-input" min={v.today} required />
            </label>
            <div className="pp-row pp-row--2">
              <label className="pp-field">
                <span className="pp-label">Arrivée à partir de</span>
                <input type="time" name="debut" className="pp-input" defaultValue="08:00" step={900} required />
              </label>
              <label className="pp-field">
                <span className="pp-label">Jusqu’à</span>
                <input type="time" name="fin" className="pp-input" defaultValue="12:00" step={900} required />
              </label>
            </div>
            <label className="pp-field">
              <span className="pp-label">Répéter</span>
              <select name="semaines" className="pp-select" defaultValue="0">
                <option value="0">Une seule fois</option>
                {[1, 2, 3, 4, 6, 8, 12].map((w) => (
                  <option key={w} value={w}>
                    Même jour et mêmes heures, {w} semaine{w > 1 ? "s" : ""} de plus
                  </option>
                ))}
              </select>
            </label>
            <button type="submit" className="pp-btn pp-btn--primary pp-btn--lg pp-btn--block">
              <CalendarPlus size={18} aria-hidden /> Publier ce moment
            </button>
          </form>
        </section>

        <section className="pp-sheet pp-pad pp-rise pp-rise--2" style={{ marginTop: 16 }} aria-labelledby="moments">
          <h2 id="moments" className="pp-section-title">
            Vos <em>moments</em>
          </h2>
          {v.days.length ? (
            v.days.map((d) => (
              <div key={d.day} className="pj-avail__day">
                <h3>{dayTitle(d.day)}</h3>
                <ul>
                  {d.slots.map((x) => (
                    <li key={x.id} className={x.booked ? "is-booked" : x.past ? "is-past" : ""}>
                      <span className="pj-avail__win">{x.window}</span>
                      <span className="pj-avail__state">{x.booked ? `Réservé · job n° ${x.booked.jobNumber}${x.booked.city ? ` · ${x.booked.city}` : ""}` : x.past ? "Passé" : "Libre"}</span>
                      {!x.booked && !x.past ? (
                        <form method="post" action={action}>
                          <input type="hidden" name="action" value="retirer" />
                          <input type="hidden" name="slotId" value={x.id} />
                          <button type="submit" className="pp-btn pp-btn--ghost pp-btn--sm" aria-label={`Retirer le moment du ${formatDay(d.day)}, ${x.window}`}>
                            Retirer
                          </button>
                        </form>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <p className="pp-hint">Aucun moment publié pour l’instant. Ajoutez-en un ci-dessus : vos clients pourront le choisir aussitôt.</p>
          )}
        </section>

        {v.waiting.length ? (
          <section className="pp-sheet pp-pad pp-rise pp-rise--3" style={{ marginTop: 16 }} aria-labelledby="attente">
            <h2 id="attente" className="pp-section-title">
              Clients <em>qui attendent une date</em>
            </h2>
            <ul className="pj-avail__wait">
              {v.waiting.map((w) => (
                <li key={w.jobNumber}>
                  Job n° {w.jobNumber}
                  {w.city ? ` · ${w.city}` : ""} · {w.kind === "entretien" ? "entretien" : "installation"}
                </li>
              ))}
            </ul>
          </section>
        ) : null}
        <Foot />
      </div>
    </main>
  );
}
