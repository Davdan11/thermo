/* Réglages du robot Facebook : interrupteur, rythme, approbation ; état de la connexion (nom de la page, validité du jeton), jamais un jeton. */
import type { Metadata } from "next";
import Link from "next/link";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { readPresence } from "@/lib/presence/store";
import { fmtWhen, montrealDate } from "@/lib/presence/time";
import { modeEnvoi } from "@/lib/social/envoi";
import { etatConnexion } from "@/lib/social/facebook";
import { finPeriodeApprobation, lireSocial } from "@/lib/social/store";
import { Card } from "@/components/gestion/kit/Card";
import { Reveal } from "@/components/gestion/Reveal";
import { PresenceTabs } from "@/components/gestion/presence/PresenceTabs";
import { SettingsForm } from "@/components/gestion/presence/SettingsForm";

export const metadata: Metadata = { title: "Réglages de la présence" };
export const dynamic = "force-dynamic";

const CRON_LINE = "*/15 * * * * /bin/bash /var/www/thermopompesavendre.ca/current/scripts/presence-cron.sh >> /var/log/thermo-presence.log 2>&1";

export default async function PresenceReglagesPage() {
  await requireAdmin();
  const [data, presence, conn] = await Promise.all([lireSocial(), readPresence(), etatConnexion()]);
  const mode = modeEnvoi(presence.settings.autoPublish);
  const cronSecret = (process.env.PRESENCE_CRON_SECRET?.trim().length ?? 0) >= 24;
  const fin = finPeriodeApprobation(data.reglages);
  const depart = data.reglages.approbation.depart ? montrealDate(new Date(data.reglages.approbation.depart)) : "";

  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Présence</p>
          <h1 className="k-h1">
            Réglages <em>de publication</em>
          </h1>
          <p className="k-lead">Facebook seulement. Rien ne part tant que « Publication automatique » est éteinte. Pendant les 7 premiers jours de mise en ligne, chaque élément attend votre approbation.</p>
        </div>
      </Reveal>
      <PresenceTabs current="/gestion/presence/reglages" />

      <Card title="Connexion Facebook" sub="Le jeton reste dans shared/.env, sur le serveur. Il n’est jamais affiché ici : la page lit seulement le nom de la page et l’état du jeton auprès de Facebook.">
        <ul className="pr-conn">
          <li className={conn.configuree ? "is-ok" : "is-missing"}>
            <b>Variables META_PAGE_ID et META_PAGE_TOKEN</b>
            <span>{conn.configuree ? "Présentes" : `Manquantes : ${conn.manquantes.join(", ")}`}</span>
          </li>
          {conn.configuree ? (
            <>
              <li className={conn.pageNom && conn.pageConcorde !== false ? "is-ok" : "is-missing"}>
                <b>Page Facebook</b>
                <span>{conn.pageNom ? `${conn.pageNom}${conn.pageConcorde === false ? " (ne correspond pas à META_PAGE_ID)" : ""}` : "Non lue"}</span>
              </li>
              <li className={conn.jetonValide ? "is-ok" : "is-missing"}>
                <b>Jeton de page</b>
                <span>{conn.jetonValide === undefined ? "Non vérifié" : conn.jetonValide ? `Valide${conn.expire === "jamais" ? ", n’expire pas" : conn.expire ? `, expire le ${fmtWhen(conn.expire)}` : ""}` : "Invalide ou expiré"}</span>
              </li>
              {conn.permissionsManquantes ? (
                <li className={conn.permissionsManquantes.length ? "is-missing" : "is-ok"}>
                  <b>Permissions</b>
                  <span>{conn.permissionsManquantes.length ? `Manquantes : ${conn.permissionsManquantes.join(", ")}` : "pages_manage_posts, pages_read_engagement, pages_show_list"}</span>
                </li>
              ) : null}
            </>
          ) : null}
          <li className="is-ok">
            <b>Instagram</b>
            <span>Non utilisé (Facebook seulement)</span>
          </li>
          <li>
            <b>Version de l’API Graph</b>
            <span>{conn.version}</span>
          </li>
          <li className={cronSecret ? "is-ok" : "is-missing"}>
            <b>Passage planifié (toutes les 15 min)</b>
            <span>{cronSecret ? "Secret défini" : "PRESENCE_CRON_SECRET manquant"}</span>
          </li>
          <li className={mode.reel ? "is-ok" : "is-missing"}>
            <b>Mode</b>
            <span>{mode.reel ? "Envoi réel" : "Essai"}</span>
          </li>
        </ul>
        {conn.erreur ? (
          <p className="g-hint pr-bad" style={{ marginTop: 12 }}>
            {conn.erreur}
          </p>
        ) : null}
        {conn.verifieLe ? (
          <p className="g-hint" style={{ marginTop: 8 }}>
            Vérifié {fmtWhen(conn.verifieLe)} (mis en cache 5 minutes). <Link href="/gestion/presence/connecter">Guide de connexion</Link>
          </p>
        ) : null}
      </Card>

      <Card title="Publication">
        <SettingsForm reglages={data.reglages} interrupteur={presence.settings.autoPublish} reel={mode.reel} depart={depart} />
        <p className="g-hint" style={{ marginTop: 12 }}>
          {fin ? `Fin de la période d’approbation : ${fmtWhen(fin)}.` : "La période d’approbation n’a pas commencé (aucune mise en ligne réelle)."}
          {data.reglages.majLe ? ` Réglages modifiés ${fmtWhen(data.reglages.majLe)}${data.reglages.majPar ? ` par ${data.reglages.majPar}` : ""}.` : ""}
        </p>
      </Card>

      <Card title="Passage planifié" sub="Ligne déjà présente dans la crontab du serveur. Elle appelle /api/presence/tick avec le secret de shared/.env : retrait de l’ancienne file, préparation des prochains jours, envoi de ce qui est dû.">
        <pre className="pr-code">{CRON_LINE}</pre>
      </Card>
    </>
  );
}
