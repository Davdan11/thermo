/* Studio de présence : file Facebook (publications et stories), état de l'envoi, suivi des visites et des demandes, journal. */
import type { Metadata } from "next";
import Link from "next/link";
import { FlaskConical, Radio } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { readPresence } from "@/lib/presence/store";
import { fmtDateLong, fmtHour, fmtWhen, montrealDate, montrealTime } from "@/lib/presence/time";
import { modeEnvoi } from "@/lib/social/envoi";
import { approbationRequise, finPeriodeApprobation, lireSocial } from "@/lib/social/store";
import { FORMAT_LIBELLES, STATUT_LIBELLES, type PublicationSociale } from "@/lib/social/types";
import { suiviParPublication, type SuiviPublication } from "@/lib/social/visites";
import { aVenir, compteurs, enRetard, GENRE_LIBELLE, STATUT_TON } from "@/lib/social/vue";
import { Card, SectionHeader } from "@/components/gestion/kit/Card";
import { Chip } from "@/components/gestion/kit/Chip";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import { cx } from "@/components/gestion/kit/format";
import { Reveal } from "@/components/gestion/Reveal";
import { PrepareButton } from "@/components/gestion/presence/PrepareButton";
import { PresenceTabs } from "@/components/gestion/presence/PresenceTabs";

export const metadata: Metadata = { title: "Présence" };
export const dynamic = "force-dynamic";

function Ligne({ p, maintenant, suivi }: { p: PublicationSociale; maintenant: Date; suivi?: SuiviPublication }) {
  return (
    <li>
      <Link href={`/gestion/presence/${p.id}`} className={`pr-row pr-row--vignette pr-bg--${p.format}`}>
        <span className="pr-row__bar" aria-hidden />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={cx("pr-vignette", p.genre === "story" && "is-story")} src={`/gestion/api/presence/visuel/${p.id}?v=${encodeURIComponent(p.majLe)}`} alt="" loading="lazy" />
        <span className="pr-row__when">
          {/* Date sur une ligne, heure et genre dessous : rien ne se coupe au milieu de l'heure. */}
          <b>{fmtDateLong(montrealDate(new Date(p.prevueLe)))}</b>
          <span>
            {fmtHour(montrealTime(new Date(p.prevueLe)))} · {GENRE_LIBELLE[p.genre]}
          </span>
        </span>
        <span className="pr-row__main">
          <span className="pr-row__series">{FORMAT_LIBELLES[p.format]}</span>
          <span className="pr-row__subject">{p.accroche}</span>
          {suivi && (suivi.visites || suivi.demandes) ? (
            <span className="pr-suivi">
              <span>
                <b>{suivi.visites}</b> visite{suivi.visites > 1 ? "s" : ""}
              </span>
              <span>
                <b>{suivi.demandes}</b> demande{suivi.demandes > 1 ? "s" : ""}
              </span>
            </span>
          ) : null}
        </span>
        <span className="pr-row__end">
          {enRetard(p, maintenant) ? <Chip tone="bad">En retard</Chip> : null}
          {p.envoi.prochainEssai && p.statut === "approuvee" ? <Chip tone="warn">Nouvel essai prévu</Chip> : null}
          <Chip tone={STATUT_TON[p.statut]} dot>
            {STATUT_LIBELLES[p.statut]}
          </Chip>
        </span>
      </Link>
    </li>
  );
}

export default async function PresencePage() {
  await requireAdmin();
  const maintenant = new Date();
  const [data, presence, suivi] = await Promise.all([lireSocial(), readPresence(), suiviParPublication()]);
  const mode = modeEnvoi(presence.settings.autoPublish);
  const k = compteurs(data.publications, maintenant);
  const aRegler = data.publications.filter((p) => p.statut === "echec" || enRetard(p, maintenant));
  const file = data.publications.filter((p) => aVenir(p) && !enRetard(p, maintenant));
  const publiees = data.publications
    .filter((p) => p.statut === "publiee")
    .sort((a, b) => (b.envoi.publieeLe ?? "").localeCompare(a.envoi.publieeLe ?? ""))
    .slice(0, 20);
  const totalVisites = publiees.reduce((n, p) => n + (suivi.get(p.id)?.visites ?? 0), 0);
  const totalDemandes = publiees.reduce((n, p) => n + (suivi.get(p.id)?.demandes ?? 0), 0);
  const requise = approbationRequise(data.reglages, maintenant);
  const fin = finPeriodeApprobation(data.reglages);
  const anciens = presence.posts.length;

  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Présence</p>
          <h1 className="k-h1">
            Robot <em>Facebook</em>
          </h1>
          <p className="k-lead">Publications et stories préparées d’avance à partir des données du site, aux couleurs du site. Chaque chiffre a sa source ; rien ne part tant que l’interrupteur est éteint.</p>
        </div>
        <PrepareButton jours={data.reglages.joursAvance} />
      </Reveal>

      <PresenceTabs current="/gestion/presence" />

      <div className={cx("pr-banner", mode.reel ? "is-live" : "is-test")} role="status">
        {mode.reel ? <Radio size={18} aria-hidden /> : <FlaskConical size={18} aria-hidden />}
        <div>
          <b>{mode.reel ? "Envoi réel activé" : "Mode essai"}</b>
          <span>{mode.reel ? "Les éléments approuvés partent à leur heure (passage toutes les 15 minutes)." : `Rien ne part vers Facebook. ${mode.raisons.join(" ")}`}</span>
        </div>
        <Link href="/gestion/presence/reglages" className="k-link">
          Réglages
        </Link>
      </div>

      <p className="g-hint" style={{ margin: 0 }}>
        {data.reglages.approbation.toujoursObligatoire
          ? "Approbation obligatoire pour chaque élément (réglage)."
          : !fin
            ? "Période d’approbation : elle commencera à la première mise en ligne, pour 7 jours. D’ici là, chaque élément attend votre approbation."
            : requise
              ? `Période d’approbation en cours jusqu’au ${fmtWhen(fin)} : chaque élément attend votre approbation.`
              : `Période d’approbation terminée le ${fmtWhen(fin)} : un élément en attente est approuvé d’office à son heure. Refusez ou modifiez-le avant, au besoin.`}
      </p>

      <div className="pr-kpis">
        <div className={cx("pr-kpi", k.enAttente > 0 && requise && "is-hot")}>
          <span>En attente d’approbation</span>
          <b>{k.enAttente}</b>
        </div>
        <div className="pr-kpi">
          <span>Approuvés à venir</span>
          <b>{k.approuvees}</b>
        </div>
        <div className="pr-kpi">
          <span>Publiés ce mois-ci</span>
          <b>{k.publieesMois}</b>
        </div>
        <div className={cx("pr-kpi", k.echecs > 0 && "is-bad")}>
          <span>Échecs</span>
          <b>{k.echecs}</b>
        </div>
      </div>

      {aRegler.length ? (
        <Card tone="cream" title="À régler" sub="Échecs d’envoi, et éléments dont l’heure est passée depuis plus de 36 heures (ils ne partent pas tout seuls) : réessayez, régénérez ou refusez.">
          <ul className="pr-queue">
            {aRegler.map((p) => (
              <Ligne key={p.id} p={p} maintenant={maintenant} />
            ))}
          </ul>
        </Card>
      ) : null}

      <SectionHeader n="01" title="File d’attente" lead={file.length ? "De la plus proche à la plus lointaine. Ouvrez un élément pour voir l’image, modifier la légende et décider." : undefined} />
      {file.length ? (
        <ul className="pr-queue">
          {file.map((p) => (
            <Ligne key={p.id} p={p} maintenant={maintenant} />
          ))}
        </ul>
      ) : (
        <EmptyState title="La file est vide" body={`Le passage planifié la remplit tout seul ; « Préparer les ${data.reglages.joursAvance} prochains jours » le fait tout de suite.`} />
      )}

      <SectionHeader n="02" title="Publiés" lead={publiees.length ? `Visites arrivées par le lien de chaque publication, et demandes envoyées par ces visiteurs : ${totalVisites} visite${totalVisites > 1 ? "s" : ""}, ${totalDemandes} demande${totalDemandes > 1 ? "s" : ""}.` : undefined} />
      {publiees.length ? (
        <ul className="pr-queue">
          {publiees.map((p) => (
            <Ligne key={p.id} p={p} maintenant={maintenant} suivi={suivi.get(p.id) ?? { visites: 0, demandes: 0, parType: {} }} />
          ))}
        </ul>
      ) : (
        <EmptyState compact title="Rien de publié encore" body="Chaque publication apparaîtra ici avec son lien Facebook, ses visites et ses demandes." />
      )}

      <SectionHeader n="03" title="Journal" />
      {data.journal.length ? (
        <ol className="pr-log">
          {data.journal.slice(0, 15).map((l, i) => (
            <li key={`${l.le}-${i}`} className={`is-${l.niveau}`}>
              <span>
                <time dateTime={l.le}>{fmtWhen(l.le)}</time>
                {l.publicationId ? (
                  <Link href={`/gestion/presence/${l.publicationId}`} className="pr-log__lien">
                    {l.message}
                  </Link>
                ) : (
                  l.message
                )}
              </span>
            </li>
          ))}
        </ol>
      ) : (
        <EmptyState compact title="Journal vide" body="Chaque préparation, approbation, essai et envoi y laisse une trace." />
      )}

      {anciens ? (
        <p className="g-hint">
          Ancienne file du studio (séries modèle, froid, LogisVert…) : {anciens} élément{anciens > 1 ? "s" : ""} gardé{anciens > 1 ? "s" : ""} pour l’historique,{" "}
          {presence.posts.filter((p) => p.status !== "publiee" && p.status !== "rejetee").length ? `retiré${anciens > 1 ? "s" : ""} au prochain passage planifié` : `tous retirés${data.ancienneFileRetireeLe ? ` le ${montrealDate(new Date(data.ancienneFileRetireeLe))}` : ""}`} ; ils ne partent jamais.
        </p>
      ) : null}
    </>
  );
}
