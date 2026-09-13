/* ==================================================================
   Chantier S — Sécurité : état de la connexion à deux étapes, sessions
   actives (« Déconnecter partout »), sauvegardes hors serveur, clés,
   et journal d'audit filtrable (famille, période, recherche).
   Aucune valeur secrète n'est lue pour cette page : seulement des
   états (définie, activée, réussie…).
   ================================================================== */
import "@/components/gestion/securite/securite.css";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CloudUpload, History, KeyRound, LaptopMinimal, MessageSquare, ShieldAlert, ShieldCheck, Smartphone, Ticket } from "lucide-react";
import { getSessionState, requireAdmin } from "@/lib/gestion/auth/dal";
import { AUDIT_FAMILIES, auditLabel, readAudit } from "@/lib/gestion/securite/audit";
import { keyStatuses } from "@/lib/gestion/securite/cles";
import { twoFactorStatus } from "@/lib/gestion/securite/deux-etapes";
import { backupConfigState, readBackupStatus } from "@/lib/gestion/securite/sauvegarde/run";
import { listActiveSessions, listTrustedDevices, trustDays } from "@/lib/gestion/securite/sessions";
import { Card } from "@/components/gestion/kit/Card";
import { Chip } from "@/components/gestion/kit/Chip";
import { EmptyState } from "@/components/gestion/kit/EmptyState";
import { cx, plural } from "@/components/gestion/kit/format";
import { Reveal } from "@/components/gestion/Reveal";
import { SubmitButton } from "@/components/gestion/SubmitButton";
import { Recovery } from "@/components/gestion/securite/Recovery";
import { ago, bytes, day, METHOD_LABEL, when } from "@/components/gestion/securite/format";
import { revokeAllAction, revokeSessionAction } from "./actions";

export const metadata: Metadata = { title: "Sécurité" };

const PERIODS: Array<[string, string]> = [
  ["1", "24 heures"],
  ["7", "7 jours"],
  ["30", "30 jours"],
  ["90", "90 jours"],
  ["365", "12 mois"],
];

type SP = { famille?: string; q?: string; jours?: string; partout?: string; active?: string; desactivee?: string };

export default async function SecuritePage({ searchParams }: { searchParams: Promise<SP> }) {
  const session = await requireAdmin();
  const state = await getSessionState();
  const currentSid = state.status === "ok" ? state.payload.sid : null;
  const sp = await searchParams;
  const famille = sp.famille && sp.famille in AUDIT_FAMILIES ? sp.famille : "";
  const jours = PERIODS.some(([v]) => v === sp.jours) ? Number(sp.jours) : 30;
  const q = (sp.q ?? "").slice(0, 80);
  const now = Date.now();

  const [tfa, sessions, devices, backup, keys, log, days] = await Promise.all([
    twoFactorStatus(session.email),
    listActiveSessions(now),
    listTrustedDevices(now),
    readBackupStatus(),
    keyStatuses().catch(() => null),
    readAudit({ famille: famille || undefined, q, jours, limit: 150 }),
    trustDays(),
  ]);
  const conf = backupConfigState();
  const lastOk = backup?.lastSuccessAt ?? null;
  const stale = conf.configured && (!lastOk || now - Date.parse(lastOk) > 36 * 3_600_000);
  const keysDefined = keys ? keys.filter((k) => k.defined).length : null;

  return (
    <>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Analyse</p>
          <h1 className="k-h1">
            Sécurité <em>du CRM</em>
          </h1>
          <p className="k-lead">Qui est connecté, comment on se connecte, où sont vos sauvegardes, et tout ce qui a été fait de sensible dans l’outil.</p>
        </div>
      </Reveal>

      {sp.active ? <p className="se-flash se-flash--ok" role="status">Connexion à deux étapes activée. Cet appareil reste connecté.</p> : null}
      {sp.desactivee ? <p className="se-flash se-flash--warn" role="status">Connexion à deux étapes désactivée.</p> : null}
      {sp.partout ? <p className="se-flash se-flash--ok" role="status">Toutes les autres sessions et tous les appareils de confiance sont déconnectés. Vous restez connecté ici.</p> : null}

      <section className={cx("se-band", tfa.enabled ? "is-on" : "is-off")} aria-label="État de la sécurité">
        <svg className="se-arcs" viewBox="0 0 260 260" aria-hidden>
          <circle cx="130" cy="130" r="126" />
          <circle cx="130" cy="130" r="92" />
          <circle cx="130" cy="130" r="58" />
        </svg>
        <div className="se-band__main">
          <span className="se-shield" aria-hidden>
            {tfa.enabled ? <ShieldCheck size={26} /> : <ShieldAlert size={26} />}
          </span>
          <div style={{ minWidth: 0 }}>
            <p className="se-band__title">{tfa.enabled ? "Connexion à deux étapes activée" : tfa.suspended ? "Deuxième étape suspendue par le serveur" : "Ajoutez une deuxième étape"}</p>
            <p className="se-band__sub">
              {tfa.enabled
                ? `Lien par courriel, puis code de l’application. ${plural(tfa.backupRemaining, "code de secours restant", "codes de secours restants")}.`
                : tfa.suspended
                  ? "GESTION_2FA_DESACTIVEE=1 est dans shared/.env : retirez la ligne dès que l’accès est rétabli."
                  : "Aujourd’hui, un simple lien par courriel ouvre l’outil. Avec un code sur votre téléphone, une boîte courriel piratée ne suffit plus."}
            </p>
          </div>
        </div>
        <dl className="se-band__stats">
          <div>
            <dt>Sessions</dt>
            <dd>{sessions.length}</dd>
          </div>
          <div>
            <dt>Appareils sûrs</dt>
            <dd>{devices.length}</dd>
          </div>
          <div>
            <dt>Sauvegarde</dt>
            <dd className="se-band__small">{lastOk ? ago(lastOk, now) : conf.configured ? "jamais" : "à configurer"}</dd>
          </div>
          <div>
            <dt>Journal</dt>
            <dd>{log.total}</dd>
          </div>
        </dl>
        {!tfa.enabled ? (
          <Link href="/gestion/securite/deux-etapes" className="k-btn k-btn--primary se-band__cta">
            Activer maintenant <ArrowRight size={16} aria-hidden />
          </Link>
        ) : null}
      </section>

      <div className="se-grid">
        <Card title="Deuxième étape" sub="Comment l’outil vérifie que c’est vous" action={<Link href="/gestion/securite/deux-etapes" className="k-link">{tfa.enabled ? "Gérer" : "Activer"}</Link>}>
          <ul className="se-kv">
            <li>
              <Smartphone size={17} aria-hidden />
              <span>Application</span>
              <b>{tfa.enabled ? `activée le ${day(tfa.enabledAt)}` : "pas activée"}</b>
            </li>
            <li className={cx(tfa.enabled && tfa.backupRemaining <= 3 && "is-warn")}>
              <Ticket size={17} aria-hidden />
              <span>Codes de secours</span>
              <b>{tfa.enabled ? `${tfa.backupRemaining} sur 10` : "—"}</b>
            </li>
            <li>
              <MessageSquare size={17} aria-hidden />
              <span>Texto de secours</span>
              <b>{tfa.smsAvailable ? `au ${tfa.smsMasked}` : "non configuré"}</b>
            </li>
            <li>
              <LaptopMinimal size={17} aria-hidden />
              <span>Appareils de confiance</span>
              <b>{days ? `${devices.length} · ${days} jours` : "désactivés"}</b>
            </li>
          </ul>
          {!tfa.smsAvailable ? <p className="g-hint">Le texto de secours arrive au cellulaire du propriétaire : ALERT_SMS_TO et Twilio doivent être dans shared/.env (serveur).</p> : null}
        </Card>

        <Card title="Sauvegardes hors serveur" sub="Chiffrées, envoyées chaque nuit vers S3" action={<Link href="/gestion/securite/cles#sauvegardes" className="k-link">Réglages</Link>}>
          <div className="se-backup">
            <span className={cx("se-backup__dot", backup?.state === "reussie" && !stale ? "is-ok" : backup?.state === "echec" || stale ? "is-bad" : "is-off")} aria-hidden>
              <CloudUpload size={18} />
            </span>
            <div style={{ minWidth: 0 }}>
              <p className="se-backup__title">
                {!conf.any ? "Pas encore configurées" : backup?.state === "echec" ? "Dernière sauvegarde en échec" : stale ? "Aucune sauvegarde récente" : backup?.state === "reussie" ? "Sauvegardes à jour" : "En attente du premier passage"}
              </p>
              <p className="se-backup__sub">
                {lastOk ? `Dernière réussie : ${when(lastOk)} (${ago(lastOk, now)})` : "Aucune sauvegarde réussie pour l’instant."}
                {backup?.state === "reussie" && backup.size ? ` · ${bytes(backup.size)}, ${plural(backup.files ?? 0, "fichier", "fichiers")}` : ""}
              </p>
            </div>
          </div>
          {backup?.state === "echec" && backup.message ? <p className="cr-msg is-bad">{backup.message}</p> : null}
          <ul className="se-kv se-kv--tight">
            <li>
              <span>Destination</span>
              <b>{conf.host ?? "aucune"}</b>
            </li>
            <li>
              <span>Clé de chiffrement</span>
              <b>{conf.keyOk ? "définie" : "manquante"}</b>
            </li>
            <li>
              <span>Conservation</span>
              <b>{backup?.kept ? `${backup.kept.daily} quotidiennes, ${backup.kept.monthly} mensuelles` : "30 quotidiennes, 12 mensuelles"}</b>
            </li>
          </ul>
          {conf.any && conf.missing.length ? <p className="g-hint">Il manque : {conf.missing.join(", ")}.</p> : null}
          {!conf.any ? <p className="g-hint">Choisissez une destination (Backblaze B2, Wasabi, AWS S3…) et collez ses clés dans Clés et connexions. La copie de 3 h 30 reste sur le même serveur : elle ne protège pas d’une perte du serveur.</p> : null}
        </Card>

        <Card title="Clés et connexions" sub="Meta, Google Ads, Stripe, Anthropic…" action={<Link href="/gestion/securite/cles" className="k-link">Ouvrir</Link>}>
          <p className="se-big">
            {keysDefined === null ? "—" : keysDefined}
            <small>{keys ? ` / ${keys.length} clés définies` : " : fichier .env illisible"}</small>
          </p>
          <p className="g-hint">Collez vos clés vous-même, sans toucher au serveur. Une valeur enregistrée n’est jamais réaffichée ; un nouveau code est demandé à chaque visite.</p>
          <Link href="/gestion/securite/cles" className="k-btn k-btn--ghost se-cardbtn">
            <KeyRound size={16} aria-hidden /> Gérer les clés
          </Link>
        </Card>
      </div>

      <Card title="Sessions actives" sub={`${plural(sessions.length, "session ouverte", "sessions ouvertes")} depuis 30 jours`} className="se-block">
        {sessions.length ? (
          <ul className="se-list">
            {sessions.map((s, i) => (
              <li key={s.sid} className="se-row" style={{ animationDelay: `${Math.min(i, 8) * 40}ms` }}>
                <span className="se-row__icon" aria-hidden>
                  <LaptopMinimal size={18} />
                </span>
                <div className="se-row__body">
                  <p className="se-row__title">
                    {s.device} {s.sid === currentSid ? <Chip tone="ok" dot>Cet appareil</Chip> : null}
                  </p>
                  <p className="se-row__meta">
                    {s.email} · {s.ip ?? "IP inconnue"} · actif {ago(s.lastSeenAt, now)}
                    {s.mfaMethod ? ` · 2e étape : ${METHOD_LABEL[s.mfaMethod]}` : ""}
                  </p>
                </div>
                <form action={revokeSessionAction}>
                  <input type="hidden" name="sid" value={s.sid} />
                  <SubmitButton className="k-btn k-btn--ghost se-row__btn" pendingLabel="…">
                    {s.sid === currentSid ? "Me déconnecter" : "Fermer"}
                  </SubmitButton>
                </form>
              </li>
            ))}
          </ul>
        ) : (
          <EmptyState compact title="Aucune session enregistrée" body="Les sessions apparaissent ici à la prochaine connexion." />
        )}
        <details className="se-danger">
          <summary>Déconnecter partout…</summary>
          <p>Ferme toutes les sessions (téléphones, ordinateurs) et retire tous les appareils de confiance. Vous restez connecté sur cet appareil. À faire si un appareil est perdu ou si un lien de connexion a pu être vu par quelqu’un d’autre.</p>
          <form action={revokeAllAction}>
            <SubmitButton className="k-btn se-btn-danger" pendingLabel="Déconnexion…">
              Déconnecter toutes les sessions
            </SubmitButton>
          </form>
        </details>
      </Card>

      <Card title="Journal d’audit" sub="Connexions, 2e étape, clés, paiements, étapes, exports" className="se-block" id="journal">
        <form className="se-filter" method="get" action="/gestion/securite#journal">
          <label className="g-field">
            <span className="g-label">Type</span>
            <select name="famille" className="g-select g-input" defaultValue={famille}>
              <option value="">Tout</option>
              {Object.entries(AUDIT_FAMILIES).map(([k, f]) => (
                <option key={k} value={k}>
                  {f.label}
                </option>
              ))}
            </select>
          </label>
          <label className="g-field">
            <span className="g-label">Période</span>
            <select name="jours" className="g-select g-input" defaultValue={String(jours)}>
              {PERIODS.map(([v, l]) => (
                <option key={v} value={v}>
                  {l}
                </option>
              ))}
            </select>
          </label>
          <label className="g-field se-filter__q">
            <span className="g-label">Rechercher</span>
            <input name="q" className="g-input" defaultValue={q} placeholder="adresse, IP, facture…" maxLength={80} />
          </label>
          <button type="submit" className="k-btn k-btn--ink se-filter__go">
            Filtrer
          </button>
        </form>
        {log.entries.length ? (
          <>
            <ol className="se-log">
              {log.entries.map((e, i) => (
                <li key={`${e.at}-${i}`} className={cx("se-log__item", /echec|bloquee/.test(e.action) && "is-bad")} style={{ animationDelay: `${Math.min(i, 12) * 25}ms` }}>
                  <time dateTime={e.at}>{when(e.at)}</time>
                  <div style={{ minWidth: 0 }}>
                    <p className="se-log__title">{auditLabel(e.action)}</p>
                    <p className="se-log__meta">
                      {e.qui ?? "anonyme"}
                      {e.ip ? ` · ${e.ip}` : ""}
                    </p>
                    {e.details ? (
                      <p className="se-log__details">
                        {Object.entries(e.details).map(([k, v]) => (
                          <span key={k}>
                            <b>{k}</b> {String(v)}
                          </span>
                        ))}
                      </p>
                    ) : null}
                  </div>
                </li>
              ))}
            </ol>
            {log.total > log.entries.length ? <p className="g-hint">{log.entries.length} plus récents sur {log.total}. Précisez le filtre pour voir les autres.</p> : null}
          </>
        ) : (
          <EmptyState compact title="Rien pour ce filtre" body="Les actions sensibles apparaissent ici au fil de l’utilisation." icon={<History size={20} />} />
        )}
      </Card>

      <Recovery />
    </>
  );
}
