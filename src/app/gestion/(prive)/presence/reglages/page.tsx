/* Réglages du studio : interrupteur général, séries, heures, rotation ; état de la connexion Meta (jamais un jeton). */
import type { Metadata } from "next";
import Link from "next/link";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { metaStatus, publishMode } from "@/lib/presence/config";
import { canEnableAuto, SERIES_INFO } from "@/lib/presence/series";
import { readPresence } from "@/lib/presence/store";
import { fmtWhen } from "@/lib/presence/time";
import { SERIES } from "@/lib/presence/types";
import { Card } from "@/components/gestion/kit/Card";
import { Reveal } from "@/components/gestion/Reveal";
import { PresenceTabs } from "@/components/gestion/presence/PresenceTabs";
import { SettingsForm, type SeriesRow } from "@/components/gestion/presence/SettingsForm";

export const metadata: Metadata = { title: "Réglages de la présence" };

const CRON_LINE = "*/15 * * * * /bin/bash /var/www/thermopompesavendre.ca/current/scripts/presence-cron.sh >> /var/log/thermo-presence.log 2>&1";

export default async function PresenceReglagesPage() {
  await requireAdmin();
  const data = await readPresence();
  const mode = publishMode(data.settings);
  const meta = metaStatus();
  const cronSecret = (process.env.PRESENCE_CRON_SECRET?.trim().length ?? 0) >= 24;
  const ownKey = (process.env.PRESENCE_SIGNING_SECRET?.trim().length ?? 0) >= 32;
  const rows: SeriesRow[] = SERIES.map((id) => ({
    id,
    label: SERIES_INFO[id].label,
    dayLabel: SERIES_INFO[id].dayLabel,
    available: SERIES_INFO[id].available,
    autoAllowed: SERIES_INFO[id].autoAllowed,
    auto: canEnableAuto(id, data.approvals),
  }));

  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Présence</p>
          <h1 className="k-h1">
            Réglages <em>de publication</em>
          </h1>
          <p className="k-lead">Chaque série demande votre approbation par défaut. Elle peut passer en publication automatique une fois que vous en avez approuvé une : c’est la validation du gabarit. La question de la semaine reste toujours manuelle.</p>
        </div>
      </Reveal>
      <PresenceTabs current="/gestion/presence/reglages" />

      <Card title="Connexion Meta" sub="Les jetons restent dans shared/.env, sur le serveur. Ils ne sont jamais affichés ici.">
        <ul className="pr-conn">
          <li className={meta.facebook ? "is-ok" : "is-missing"}>
            <b>Facebook (page)</b>
            <span>{meta.facebook ? "Connecté" : "Manquant"}</span>
          </li>
          <li className={meta.instagram ? "is-ok" : "is-missing"}>
            <b>Instagram (compte professionnel)</b>
            <span>{meta.instagram ? "Connecté" : "Manquant"}</span>
          </li>
          <li>
            <b>Version de l’API Graph</b>
            <span>
              {meta.graphVersion}
              {meta.graphVersionFromEnv ? "" : " (par défaut)"}
            </span>
          </li>
          <li className={cronSecret ? "is-ok" : "is-missing"}>
            <b>Passage planifié (toutes les 15 min)</b>
            <span>{cronSecret ? "Secret défini" : "PRESENCE_CRON_SECRET manquant"}</span>
          </li>
          <li className="is-ok">
            <b>Signature des visuels</b>
            <span>{ownKey ? "Clé PRESENCE_SIGNING_SECRET" : "Clé dérivée du secret des sessions"}</span>
          </li>
          <li className={mode.real ? "is-ok" : "is-missing"}>
            <b>Mode</b>
            <span>{mode.real ? "Publication réelle" : "Essai"}</span>
          </li>
        </ul>
        {meta.missing.length ? (
          <p className="g-hint" style={{ marginTop: 12 }}>
            À ajouter dans shared/.env : {meta.missing.join(", ")}. <Link href="/gestion/presence/connecter">Guide pas à pas</Link>
          </p>
        ) : null}
      </Card>

      <Card title="Publication">
        <SettingsForm settings={data.settings} rows={rows} real={mode.real} />
        {data.settings.updatedAt ? (
          <p className="g-hint" style={{ marginTop: 12 }}>
            Modifié {fmtWhen(data.settings.updatedAt)}
            {data.settings.updatedBy ? ` par ${data.settings.updatedBy}` : ""}.
          </p>
        ) : null}
      </Card>

      <Card title="Passage planifié" sub="Ligne à ajouter une fois dans la crontab du serveur (crontab -e). Elle appelle /api/presence/tick avec le secret de shared/.env.">
        <pre className="pr-code">{CRON_LINE}</pre>
      </Card>
    </>
  );
}
