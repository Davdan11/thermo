/* ==================================================================
   Chantier S — Clés et connexions : le propriétaire colle lui-même ses
   clés (liste blanche), sans toucher au serveur.
   Accès : 2e étape activée ET code donné il y a moins de 10 minutes.
   Jamais de valeur dans la page : « définie » ou « manquante »
   seulement. En développement, seul le fichier d'essai est écrit.
   ================================================================== */
import "@/components/gestion/securite/securite.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Clock, ShieldAlert } from "lucide-react";
import { getSessionState, requireAdmin } from "@/lib/gestion/auth/dal";
import { KEY_GROUPS, keyStatuses, type KeyGroup, type KeyStatus } from "@/lib/gestion/securite/cles";
import { RECENT_MFA_MS, twoFactorStatus } from "@/lib/gestion/securite/deux-etapes";
import { resolveEnvTarget, type EnvTarget } from "@/lib/gestion/securite/env-file";
import { hasRecentStepUp } from "@/lib/gestion/securite/session";
import { Card } from "@/components/gestion/kit/Card";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import { Reveal } from "@/components/gestion/Reveal";
import { KeyRow } from "@/components/gestion/securite/KeyRow";
import { SecondFactorForm } from "@/components/gestion/securite/SecondFactorForm";
import { saveKeyAction, sendStepUpSmsAction, stepUpAction } from "../actions";

export const metadata: Metadata = { title: "Clés et connexions" };

const hm = new Intl.DateTimeFormat("fr-CA", { timeZone: "America/Toronto", hour: "numeric", minute: "2-digit" });

function Head() {
  return (
    <Reveal className="k-pagehead">
      <div>
        <p className="k-eyebrow">
          <Link href="/gestion/securite">Sécurité</Link>
        </p>
        <h1 className="k-h1">
          Clés <em>et connexions</em>
        </h1>
        <p className="k-lead">Collez ici les clés de vos services. Elles sont écrites dans le fichier de configuration du serveur, puis le site redémarre. Une valeur enregistrée n’est jamais réaffichée.</p>
      </div>
    </Reveal>
  );
}

export default async function ClesPage() {
  const session = await requireAdmin();
  const st = await twoFactorStatus(session.email);

  if (!st.enabled) {
    return (
      <div className="se-narrow">
        <Head />
        <EmptyState
          title="Activez d’abord la connexion à deux étapes"
          body="Les clés donnent accès à vos comptes (paiements, publicité, sauvegardes) : cette page exige un code de votre téléphone."
          icon={<ShieldAlert size={20} />}
          action={
            <Link href="/gestion/securite/deux-etapes" className="k-btn k-btn--primary">
              Activer la 2e étape
            </Link>
          }
        />
      </div>
    );
  }

  if (!(await hasRecentStepUp())) {
    return (
      <div className="se-narrow">
        <Head />
        <Card title="Confirmez avec un nouveau code" sub="Un code est demandé à chaque visite. L’accès reste ouvert 10 minutes.">
          <SecondFactorForm verifyAction={stepUpAction} smsAction={st.smsAvailable ? sendStepUpSmsAction : undefined} smsMasked={st.smsAvailable ? st.smsMasked : null} backupLeft={st.backupRemaining} submitLabel="Ouvrir les clés" returnTo="/gestion/securite/cles" />
        </Card>
      </div>
    );
  }

  const state = await getSessionState();
  const until = state.status === "ok" && typeof state.payload.mfa === "number" ? new Date(state.payload.mfa * 1000 + RECENT_MFA_MS) : null;
  let target: EnvTarget | null = null;
  let statuses: KeyStatus[] = [];
  let error: string | null = null;
  try {
    target = await resolveEnvTarget();
    statuses = await keyStatuses({ target });
  } catch (e) {
    error = (e as Error)?.message ?? "Fichier de configuration illisible.";
  }

  return (
    <div className="se-narrow">
      <Head />
      {until ? (
        <p className="se-flash se-flash--info">
          <Clock size={15} aria-hidden /> Accès ouvert jusqu’à {hm.format(until)}. Ensuite, un nouveau code sera demandé.
        </p>
      ) : null}
      {target?.mode === "essai" ? <p className="se-flash se-flash--warn">Mode essai (développement) : les clés vont dans data/gestion-env-essai/.env, jamais dans .env.local. Aucun redémarrage.</p> : null}
      {error ? (
        <p className="se-flash se-flash--warn" role="alert">
          {error}
        </p>
      ) : (
        (Object.keys(KEY_GROUPS) as KeyGroup[]).map((g) => {
          const rows = statuses.filter((s) => s.group === g);
          const set = rows.filter((r) => r.defined).length;
          return (
            <Card key={g} id={g} title={KEY_GROUPS[g].label} sub={`${KEY_GROUPS[g].sub} · ${set}/${rows.length} définies`} className="se-block">
              <div className="se-keys">
                {rows.map((k, i) => (
                  <KeyRow key={k.name} k={k} action={saveKeyAction} index={i} />
                ))}
              </div>
              {g === "sauvegardes" ? <p className="g-hint">Gardez une copie de la clé de chiffrement hors du serveur (gestionnaire de mots de passe) : sans elle, aucune sauvegarde ne peut être relue.</p> : null}
              {g === "anthropic" ? <p className="g-hint">Le bouton « Une question ? » du site est décidé au déploiement : la clé agit pleinement après le prochain déploiement.</p> : null}
            </Card>
          );
        })
      )}
      <p className="g-hint se-foot">Les autres réglages (adresses autorisées, Twilio, courriel, secrets de session) se modifient seulement sur le serveur. Chaque modification est notée au journal d’audit, sans la valeur.</p>
    </div>
  );
}
