/* ==================================================================
   Conformité C1 — Identité de l'entreprise (l'exploitant de
   ThermopompesAVendre.ca) : source des champs entre crochets de la
   trousse (avis de jumelage, contrat, messages). Propriétaire seulement.
   Affiche aussi ce qui manque et l'état de la trousse importée.
   ================================================================== */
import type { Metadata } from "next";
import Link from "next/link";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { platformIssues, readPlatformIdentity, type PlatformIdentity } from "@/lib/plateforme/identite";
import { readTrousse, trousseLoaded } from "@/lib/plateforme/trousse";
import { readinessProblems } from "@/lib/contrats/service";
import { formatDateTime } from "@/lib/soumissions/dates";
import { Card } from "@/components/gestion/kit/Card";
import { Chip } from "@/components/gestion/kit/Chip";
import { Reveal } from "@/components/gestion/Reveal";
import { ActionForm } from "@/components/partenaires/admin/AdminTools";
import { saveIdentityAction } from "../../contrat-actions";

export const metadata: Metadata = { title: "Identité de l’entreprise" };
export const dynamic = "force-dynamic";

function Field({ name, label, value, max = 200, type = "text", hint }: { name: string; label: string; value: string; max?: number; type?: string; hint?: string }) {
  return (
    <div className="g-field">
      <label className="g-label" htmlFor={name}>
        {label} {hint ? <small>({hint})</small> : null}
      </label>
      <input id={name} name={name} type={type} className="g-input" defaultValue={value} maxLength={max} />
    </div>
  );
}

export default async function IdentitePage() {
  await requireAdmin();
  const [id, trousse, problems] = await Promise.all([readPlatformIdentity(), readTrousse(), readinessProblems()]);
  const issues = platformIssues(id);
  const v = (x: PlatformIdentity) => x;
  const i = v(id);
  return (
    <div className="g-main--narrow" style={{ margin: "0 auto" }}>
      <Reveal className="k-pagehead">
        <div>
          <p className="k-eyebrow">Réglages · contrat</p>
          <h1 className="k-h1">Identité de l’entreprise</h1>
          <p className="k-lead">
            L’exploitant de ThermopompesAVendre.ca, intermédiaire administratif au contrat. Ces renseignements remplissent les champs entre crochets de la trousse : tant qu’il en manque, aucun envoi n’est possible. Voir aussi les <Link href="/gestion/reglages/rbq">sous-catégories RBQ exigées</Link>.
          </p>
        </div>
      </Reveal>

      <Card title="Ce qui manque" sub="Tout ce qui bloque l’envoi d’une soumission ou d’un contrat." action={<Chip tone={problems.length ? "bad" : "ok"} dot>{problems.length ? `${problems.length} à régler` : "Prêt"}</Chip>}>
        {problems.length ? (
          <ul style={{ margin: 0, paddingLeft: 18 }}>
            {problems.map((p, k) => (
              <li key={k}>{p}</li>
            ))}
          </ul>
        ) : (
          <p className="g-hint" style={{ margin: 0 }}>Trousse importée, identité complète, aucun champ entre crochets vide dans l’avis de jumelage.</p>
        )}
      </Card>

      <Card title="Trousse contractuelle importée" sub="Texte confidentiel, gardé hors du dépôt (trousse.json)." action={<Chip tone={trousseLoaded(trousse) ? "ok" : "bad"} dot>{trousseLoaded(trousse) ? `Version ${trousse.version || "?"}` : "Non importée"}</Chip>}>
        {trousseLoaded(trousse) ? (
          <dl className="sq-kv">
            <dt>Version</dt>
            <dd>{trousse.version}</dd>
            <dt>Date de la trousse</dt>
            <dd>{trousse.sourceDate ?? "—"}</dd>
            <dt>Empreinte SHA-256</dt>
            <dd style={{ wordBreak: "break-all", fontFamily: "ui-monospace, monospace", fontSize: 12 }}>{trousse.sha256}</dd>
            <dt>Importée</dt>
            <dd>{trousse.importedAt ? `${formatDateTime(trousse.importedAt)}${trousse.importedBy ? ` par ${trousse.importedBy}` : ""}` : "—"}</dd>
            <dt>Sections</dt>
            <dd>{trousse.sections.length}</dd>
          </dl>
        ) : (
          <p className="g-hint" style={{ margin: 0 }}>
            Sur le serveur : <code>npx tsx scripts/importer-trousse.ts &lt;fichier.txt&gt; --par &lt;courriel&gt;</code>
          </p>
        )}
      </Card>

      <Card title="Renseignements" sub={issues.length ? `${issues.length} élément${issues.length > 1 ? "s" : ""} à compléter ou à corriger` : "Complets"}>
        {issues.length ? (
          <p className="g-hint" style={{ marginTop: 0 }}>
            À compléter : {issues.map((x) => `${x.label}${x.problem === "format" ? " (format)" : ""}`).join(" ; ")}.
          </p>
        ) : null}
        <ActionForm action={saveIdentityAction} submit="Enregistrer l’identité" pending="Enregistrement…">
          <div className="g-row g-row--2">
            <Field name="legalName" label="Raison sociale" value={i.legalName} />
            <Field name="legalForm" label="Forme juridique" value={i.legalForm} max={120} hint="ex. société par actions" />
          </div>
          <div className="g-row g-row--2">
            <Field name="tradeName" label="Nom commercial" value={i.tradeName} />
            <Field name="neq" label="NEQ" value={i.neq} max={20} hint="10 chiffres" />
          </div>
          <Field name="address" label="Adresse de l’établissement" value={i.address} max={300} />
          <div className="g-row g-row--2">
            <Field name="tps" label="TPS" value={i.tps} max={30} hint="facultatif : 123456789 RT0001" />
            <Field name="tvq" label="TVQ" value={i.tvq} max={30} hint="facultatif : 1234567890 TQ0001" />
          </div>
          <div className="g-row g-row--2">
            <Field name="phone" label="Téléphone" value={i.phone} max={40} type="tel" />
            <Field name="emailService" label="Courriel du service" value={i.emailService} type="email" />
          </div>
          <div className="g-row g-row--2">
            <Field name="emailLegal" label="Courriel juridique" value={i.emailLegal} type="email" hint="avis, annulations" />
            <Field name="emailPrivacy" label="Courriel de la vie privée" value={i.emailPrivacy} type="email" />
          </div>
          <p className="g-label" style={{ margin: "8px 0 0" }}>Responsable de la protection des renseignements personnels</p>
          <div className="g-row g-row--2">
            <Field name="poName" label="Nom" value={i.privacyOfficer.name} />
            <Field name="poTitle" label="Titre" value={i.privacyOfficer.title} max={120} />
          </div>
          <div className="g-row g-row--2">
            <Field name="poEmail" label="Courriel" value={i.privacyOfficer.email} type="email" />
            <Field name="poPhone" label="Téléphone" value={i.privacyOfficer.phone} max={40} type="tel" hint="facultatif" />
          </div>
          <p className="g-label" style={{ margin: "8px 0 0" }}>Signataire autorisé des ententes</p>
          <div className="g-row g-row--2">
            <Field name="repName" label="Nom" value={i.representative.name} />
            <Field name="repTitle" label="Titre" value={i.representative.title} max={120} />
          </div>
        </ActionForm>
        {i.updatedAt ? (
          <p className="g-hint" style={{ marginBottom: 0 }}>
            Modifiée le {formatDateTime(i.updatedAt)}
            {i.updatedBy ? ` par ${i.updatedBy}` : ""}.
          </p>
        ) : null}
      </Card>
    </div>
  );
}
