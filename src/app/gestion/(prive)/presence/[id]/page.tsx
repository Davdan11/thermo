/* Fiche d'une publication : aperçus Facebook, Instagram et story ; décisions ; éditeur ; « D'où viennent les chiffres » ;
   mode essai ; annonce Marketplace / Kijiji prête à copier. */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, TriangleAlert } from "lucide-react";
import { requireAdmin } from "@/lib/gestion/auth/dal";
import { buildAnnonce } from "@/lib/presence/annonce";
import { composeCaption } from "@/lib/presence/captions";
import { publishMode } from "@/lib/presence/config";
import { unknownNumbers } from "@/lib/presence/numbers";
import { SERIES_INFO } from "@/lib/presence/series";
import { signedVisualSet } from "@/lib/presence/signing";
import { readPresence } from "@/lib/presence/store";
import { fmtWhen, montrealDate, montrealTime } from "@/lib/presence/time";
import { POST_ID_RE, STATUS_LABELS, type SourceValue } from "@/lib/presence/types";
import { STATUS_TONE } from "@/lib/presence/view";
import { Card } from "@/components/gestion/kit/Card";
import { Chip } from "@/components/gestion/kit/Chip";
import { Reveal } from "@/components/gestion/Reveal";
import { CaptionEditor } from "@/components/gestion/presence/CaptionEditor";
import { CopyButton } from "@/components/gestion/presence/CopyButton";
import { PostActions } from "@/components/gestion/presence/PostActions";
import { PostPreview } from "@/components/gestion/presence/PostPreview";
import { QuestionEditor } from "@/components/gestion/presence/QuestionEditor";

export const metadata: Metadata = { title: "Publication" };

const show = (v: SourceValue) => (typeof v === "boolean" ? (v ? "Oui" : "Non") : v === null ? "—" : String(v));
const external = (u?: string) => !!u && /^https?:\/\//.test(u);

export default async function PresencePostPage({ params }: { params: Promise<{ id: string }> }) {
  await requireAdmin();
  const { id } = await params;
  if (!POST_ID_RE.test(id)) notFound();
  const data = await readPresence();
  const post = data.posts.find((p) => p.id === id);
  if (!post) notFound();

  const info = SERIES_INFO[post.series];
  const urls = await signedVisualSet(post);
  const storyOn = data.settings.series[post.series].story && !!urls.story;
  const facebook = composeCaption(post, "facebook");
  const instagram = composeCaption(post, "instagram");
  const mode = publishMode(data.settings);
  const pub = post.publish;
  const locked = post.status === "publiee" || !!(pub.facebook?.postId || pub.instagram?.mediaId || pub.facebook?.photoIds?.length || pub.instagram?.containerId);
  const unknown = post.series === "question" ? [] : unknownNumbers(post.text, post.source);
  const scheduled = new Date(post.scheduledAt);
  const annonce = buildAnnonce(post);
  const title = post.series === "question" && !post.text ? "Question à écrire" : post.source.subject;

  return (
    <>
      <Reveal className="k-pagehead">
        <div style={{ minWidth: 0 }}>
          <Link href="/gestion/presence" className="pr-back">
            <ArrowLeft size={15} aria-hidden /> Studio
          </Link>
          <p className="k-eyebrow">
            {info.label} · {info.dayLabel.toLowerCase()}
          </p>
          <h1 className="k-h1 pr-title">{title}</h1>
          <p className="k-lead pr-when">
            <span>{fmtWhen(post.scheduledAt)}</span>
            <Chip tone={STATUS_TONE[post.status]} dot>
              {STATUS_LABELS[post.status]}
            </Chip>
            {post.edited ? <Chip tone="cream">Texte modifié à la main</Chip> : null}
          </p>
        </div>
      </Reveal>

      <div className="pr-fiche">
        <div className="pr-fiche__preview">
          <PostPreview images={urls.slides} story={storyOn ? urls.story : null} facebook={facebook} instagram={instagram} when={fmtWhen(post.scheduledAt)} />
          <p className="g-hint pr-center">
            {urls.slides.length} visuels 1080 × 1350{storyOn ? " et une story 1080 × 1920" : ""}, rendus par le site aux couleurs de la marque.
          </p>
          <div className="pr-thumbs" aria-label="Ouvrir les visuels">
            {urls.slides.map((u, i) => (
              <a key={u} href={u} target="_blank" rel="noreferrer" className="k-link">
                Visuel {i + 1}
              </a>
            ))}
            {urls.story ? (
              <a href={urls.story} target="_blank" rel="noreferrer" className="k-link">
                Story
              </a>
            ) : null}
          </div>
        </div>

        <div className="pr-fiche__side">
          <Card title="Décision" sub={mode.real ? "Publication réelle : « Publier maintenant » envoie tout de suite." : "Mode essai : rien ne part vers Meta."}>
            <PostActions id={post.id} status={post.status} date={montrealDate(scheduled)} time={montrealTime(scheduled)} real={mode.real} locked={locked} canRegenerate={post.series !== "question" && post.series !== "chantier"} />
            <dl className="pr-facts">
              {post.approvedBy ? (
                <div>
                  <dt>Approuvée</dt>
                  <dd>
                    {post.approvedBy}
                    {post.approvedAt ? `, ${fmtWhen(post.approvedAt)}` : ""}
                  </dd>
                </div>
              ) : null}
              {post.rejectReason ? (
                <div>
                  <dt>Raison du rejet</dt>
                  <dd>{post.rejectReason}</dd>
                </div>
              ) : null}
              {pub.lastError ? (
                <div>
                  <dt>Dernière erreur</dt>
                  <dd className="pr-bad">{pub.lastError}</dd>
                </div>
              ) : null}
              {pub.nextAttemptAt && post.status === "planifiee" ? (
                <div>
                  <dt>Nouvel essai</dt>
                  <dd>{fmtWhen(pub.nextAttemptAt)}</dd>
                </div>
              ) : null}
              {pub.attempts ? (
                <div>
                  <dt>Essais de publication</dt>
                  <dd>{pub.attempts}</dd>
                </div>
              ) : null}
              {pub.facebook?.postId ? (
                <div>
                  <dt>Facebook</dt>
                  <dd>
                    <a className="k-link" href={`https://www.facebook.com/${pub.facebook.postId}`} target="_blank" rel="noreferrer">
                      Voir la publication <ExternalLink size={12} aria-hidden />
                    </a>
                  </dd>
                </div>
              ) : null}
              {pub.instagram?.mediaId ? (
                <div>
                  <dt>Instagram</dt>
                  <dd>Publiée (identifiant {pub.instagram.mediaId}){pub.instagram.storyMediaId ? ", story publiée" : ""}</dd>
                </div>
              ) : null}
            </dl>
          </Card>

          <Card title="Texte" sub="Le lien suivi (Facebook), « Lien dans la bio » (Instagram) et les mots-clics s’ajoutent seuls, selon le réseau.">
            {post.series === "question" ? (
              <QuestionEditor id={post.id} question={post.question?.question ?? ""} answer={post.question?.answer ?? ""} disabled={locked} />
            ) : (
              <CaptionEditor post={{ id: post.id, series: post.series, text: post.text, hashtags: post.hashtags, link: post.link }} source={{ values: post.source.values, texts: post.source.texts }} disabled={locked} />
            )}
          </Card>

          <Card title="D’où viennent les chiffres" sub={`${post.source.subject} · préparé le ${fmtWhen(post.source.generatedAt)}`}>
            {unknown.length ? (
              <div className="pr-warn" role="alert">
                <TriangleAlert size={16} aria-hidden />
                <p>
                  Le texte enregistré contient {unknown.length === 1 ? "un nombre absent" : "des nombres absents"} de la source : <b>{[...new Set(unknown.map((n) => n.raw))].join(", ")}</b>.
                </p>
              </div>
            ) : null}
            <p className="pr-srcpage">
              Page d’origine :{" "}
              <a className="k-link" href={post.source.page} target="_blank" rel="noreferrer">
                {post.source.pageLabel} <ExternalLink size={12} aria-hidden />
              </a>
            </p>
            {Object.keys(post.source.values).length ? (
              <dl className="pr-src">
                {Object.entries(post.source.values).map(([k, v]) => (
                  <div key={k}>
                    <dt>{post.source.labels[k] ?? k}</dt>
                    <dd>{show(v)}</dd>
                  </div>
                ))}
              </dl>
            ) : (
              <p className="g-hint">Texte saisi à la main : aucune donnée du site n’est reprise.</p>
            )}
            {post.source.derived?.length ? (
              <ul className="pr-datasets">
                {post.source.derived.map((d) => (
                  <li key={d.key}>
                    <b>{post.source.labels[d.key] ?? d.key}</b> : {d.formula}
                  </li>
                ))}
              </ul>
            ) : null}
            <ul className="pr-datasets">
              {post.source.datasets.map((d, i) => (
                <li key={i}>
                  {d.url ? (
                    <a className="k-link" href={d.url} target="_blank" rel="noreferrer">
                      {d.label}
                      {external(d.url) ? <ExternalLink size={12} aria-hidden /> : null}
                    </a>
                  ) : (
                    d.label
                  )}
                </li>
              ))}
            </ul>
          </Card>

          {pub.dryRun ? (
            <Card title="Mode essai : ce qui aurait été envoyé" sub={`${fmtWhen(pub.dryRun.at)} · ${pub.dryRun.reasons.join(" ")}`}>
              <ol className="pr-dry">
                {pub.dryRun.requests.map((r, i) => (
                  <li key={i}>
                    <code>
                      {r.network === "facebook" ? "Facebook" : "Instagram"} · {r.method} {r.path}
                    </code>
                    <span>
                      {Object.entries(r.params)
                        .map(([k, v]) => `${k} = ${v.length > 110 ? `${v.slice(0, 110)}…` : v}`)
                        .join(" · ")}
                    </span>
                  </li>
                ))}
              </ol>
            </Card>
          ) : null}

          {annonce ? (
            <Card title="Annonce Marketplace / Kijiji" sub="Prête à copier. Jamais publiée automatiquement : ces plateformes l’interdisent. Ajoutez les visuels à la main.">
              <div className="pr-annonce">
                <div className="pr-annonce__row">
                  <span className="g-label">Titre</span>
                  <CopyButton text={annonce.title} label="Copier le titre" />
                </div>
                <p className="pr-annonce__title">{annonce.title}</p>
                <div className="pr-annonce__row">
                  <span className="g-label">Description</span>
                  <CopyButton text={annonce.body} label="Copier la description" />
                </div>
                <pre className="pr-annonce__body">{annonce.body}</pre>
                <p className="g-hint">Images : ouvrez « Visuel 1 », « Visuel 2 »… sous l’aperçu, puis enregistrez-les. Le prix reste à votre choix.</p>
              </div>
            </Card>
          ) : null}
        </div>
      </div>
    </>
  );
}
