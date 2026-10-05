/* Fiche d'un élément de la file Facebook : aperçu de l'image, décisions, légende modifiable, envoi, suivi, faits, historique.
   Un identifiant de l'ancienne file (p-…) affiche seulement son état : ces éléments sont retirés et ne partent jamais. */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { readPresence } from "@/lib/presence/store";
import { fmtWhen } from "@/lib/presence/time";
import { modeEnvoi } from "@/lib/social/envoi";
import { faitsEnClair, nombresInconnus } from "@/lib/social/redaction";
import { approbationRequise, dejaEnvoyee, lireSocial } from "@/lib/social/store";
import { FORMAT_LIBELLES, PUBLICATION_ID_RE, STATUT_LIBELLES } from "@/lib/social/types";
import { suiviParPublication } from "@/lib/social/visites";
import { GENRE_LIBELLE, STATUT_TON } from "@/lib/social/vue";
import { Card } from "@/components/gestion/kit/Card";
import { Chip } from "@/components/gestion/kit/Chip";
import { Reveal } from "@/components/gestion/Reveal";
import { CaptionEditor } from "@/components/gestion/presence/CaptionEditor";
import { PostActions } from "@/components/gestion/presence/PostActions";

export const metadata: Metadata = { title: "Publication" };
export const dynamic = "force-dynamic";

const ANCIEN_ID_RE = /^p-\d{8}-[a-z]+(?:-\d{1,3})?$/;

const Retour = () => (
  <Link href="/gestion/presence" className="pr-back">
    <ArrowLeft size={15} aria-hidden /> Studio
  </Link>
);

export default async function PresencePostPage({ params }: { params: Promise<{ id: string }> }) {
  await requireAdmin();
  const { id } = await params;

  if (ANCIEN_ID_RE.test(id)) {
    const ancien = (await readPresence()).posts.find((p) => p.id === id);
    if (!ancien) notFound();
    return (
      <>
        <Reveal className="k-pagehead">
          <div style={{ minWidth: 0 }}>
            <Retour />
            <p className="k-eyebrow">Ancienne file · {ancien.series}</p>
            <h1 className="k-h1 pr-title">{ancien.source?.subject ?? ancien.id}</h1>
          </div>
        </Reveal>
        <Card title="Élément retiré" sub="L’ancienne file du studio est remplacée par le robot Facebook : ses éléments ne partent jamais.">
          <dl className="pr-facts">
            <div>
              <dt>État</dt>
              <dd>{ancien.status === "rejetee" ? "Retiré" : ancien.status === "publiee" ? "Publié avant le remplacement" : "Sera retiré au prochain passage planifié"}</dd>
            </div>
            {ancien.rejectReason ? (
              <div>
                <dt>Note</dt>
                <dd>{ancien.rejectReason}</dd>
              </div>
            ) : null}
          </dl>
        </Card>
      </>
    );
  }

  if (!PUBLICATION_ID_RE.test(id)) notFound();
  const maintenant = new Date();
  const [data, presence, suivi] = await Promise.all([lireSocial(), readPresence(), suiviParPublication()]);
  const p = data.publications.find((x) => x.id === id);
  if (!p) notFound();

  const mode = modeEnvoi(presence.settings.autoPublish);
  const envoyee = dejaEnvoyee(p);
  const corps = p.texte.slice(0, Math.max(0, p.texte.lastIndexOf("\n\n")));
  const inconnus = nombresInconnus(corps, p.faits);
  const s = suivi.get(p.id) ?? { visites: 0, demandes: 0, parType: {} };
  const e = p.envoi;
  const requise = approbationRequise(data.reglages, maintenant);

  return (
    <>
      <Reveal className="k-pagehead">
        <div style={{ minWidth: 0 }}>
          <Retour />
          <p className="k-eyebrow">
            {FORMAT_LIBELLES[p.format]} · {GENRE_LIBELLE[p.genre].toLowerCase()} {p.genre === "story" ? "1080 × 1920" : "1080 × 1350"}
          </p>
          <h1 className="k-h1 pr-title">{p.faits.sujet}</h1>
          <p className="k-lead pr-when">
            <span>{fmtWhen(p.prevueLe)}</span>
            <Chip tone={STATUT_TON[p.statut]} dot>
              {STATUT_LIBELLES[p.statut]}
            </Chip>
            {p.modifiee ? <Chip tone="cream">Légende modifiée à la main</Chip> : null}
            <Chip tone="cream">{p.redaction.mode === "ia" ? "Texte rédigé par l’IA, vérifié" : "Texte gabarit"}</Chip>
          </p>
        </div>
      </Reveal>

      <div className="pr-fiche">
        <div className="pr-fiche__preview">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="pr-apercu" src={`/gestion/api/presence/visuel/${p.id}?v=${encodeURIComponent(p.majLe)}`} alt={`Visuel : ${p.texteVisuel}`} />
          <p className="g-hint pr-center">Image rendue par le site, telle qu’elle partira (mise en page n° {p.variante + 1}).</p>
        </div>

        <div className="pr-fiche__side">
          <Card title="Décision" sub={mode.reel ? "Envoi réel : « Publier maintenant » envoie tout de suite." : `Mode essai : rien ne part vers Facebook. ${mode.raisons.join(" ")}`}>
            <PostActions id={p.id} statut={p.statut} reel={mode.reel} envoyee={envoyee} />
            <dl className="pr-facts">
              {p.statut === "en_attente" && !requise ? (
                <div>
                  <dt>Approbation</dt>
                  <dd>Période d’approbation terminée : approuvé d’office à son heure si vous ne le refusez pas.</dd>
                </div>
              ) : null}
              {e.derniereErreur ? (
                <div>
                  <dt>Dernière erreur</dt>
                  <dd className="pr-bad">
                    {e.derniereErreur}
                    {e.derniereErreurLe ? ` (${fmtWhen(e.derniereErreurLe)})` : ""}
                  </dd>
                </div>
              ) : null}
              {e.prochainEssai && p.statut === "approuvee" ? (
                <div>
                  <dt>Nouvel essai</dt>
                  <dd>{fmtWhen(e.prochainEssai)}</dd>
                </div>
              ) : null}
              {e.tentatives ? (
                <div>
                  <dt>Essais d’envoi</dt>
                  <dd>{e.tentatives}</dd>
                </div>
              ) : null}
              {e.aVerifier ? (
                <div>
                  <dt>À vérifier</dt>
                  <dd className="pr-bad">Réponse de Facebook perdue : le prochain passage vérifie sur la page avant tout nouvel essai.</dd>
                </div>
              ) : null}
              {e.postId ? (
                <div>
                  <dt>Facebook</dt>
                  <dd>
                    {e.lien ? (
                      <a className="k-link" href={e.lien} target="_blank" rel="noreferrer">
                        Voir {p.genre === "story" ? "la story" : "la publication"} <ExternalLink size={12} aria-hidden />
                      </a>
                    ) : null}{" "}
                    (identifiant {e.postId}
                    {e.publieeLe ? `, ${fmtWhen(e.publieeLe)}` : ""})
                  </dd>
                </div>
              ) : null}
              <div>
                <dt>Suivi</dt>
                <dd>
                  {s.visites} visite{s.visites > 1 ? "s" : ""} par le lien suivi, {s.demandes} demande{s.demandes > 1 ? "s" : ""}
                  {s.demandes ? ` (${Object.entries(s.parType).map(([k, n]) => `${k} : ${n}`).join(", ")})` : ""}
                </dd>
              </div>
            </dl>
          </Card>

          <Card title="Légende" sub="Le lien suivi (utm_source=facebook, utm_content = identifiant) doit rester : c’est lui qui compte les visites.">
            <CaptionEditor id={p.id} texte={p.texte} lien={p.lien} inconnus={inconnus} disabled={envoyee} />
          </Card>

          {e.essai ? (
            <Card title="Mode essai : ce qui serait parti" sub={`${fmtWhen(e.essai.le)} · ${e.essai.raisons.join(" ")}`}>
              <ol className="pr-dry">
                {e.essai.requetes.map((r, i) => (
                  <li key={i}>
                    <code>
                      {r.methode} {r.chemin}
                    </code>
                    <span>
                      {Object.entries(r.champs)
                        .map(([k, v]) => `${k} = ${v.length > 110 ? `${v.slice(0, 110)}…` : v}`)
                        .join(" · ")}
                    </span>
                  </li>
                ))}
              </ol>
            </Card>
          ) : null}

          <Card title="D’où viennent les chiffres" sub={`Page du site : ${p.faits.chemin}`}>
            <ul className="pr-datasets">
              {faitsEnClair(p.faits).map((l, i) => (
                <li key={i}>{l}</li>
              ))}
            </ul>
            {p.redaction.rejets?.length ? <p className="g-hint">Texte de l’IA rejeté par le garde-fou : {p.redaction.rejets.join(" ; ")}.</p> : null}
          </Card>

          <Card title="Historique">
            <ol className="pr-log">
              {p.historique
                .slice()
                .reverse()
                .map((h, i) => (
                  <li key={`${h.le}-${i}`}>
                    <span>
                      <time dateTime={h.le}>{fmtWhen(h.le)}</time>
                      {STATUT_LIBELLES[h.statut]} · {h.par}
                      {h.note ? ` · ${h.note}` : ""}
                    </span>
                  </li>
                ))}
            </ol>
          </Card>
        </div>
      </div>
    </>
  );
}
