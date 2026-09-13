"use client";

/* Aperçus dans un cadre de téléphone : publication Facebook (grille de photos, lien cliquable), Instagram
   (carrousel défilable, points, « Lien dans la bio ») et story 9:16. Images réelles : visuels signés du site. */
import { useRef, useState } from "react";
import { Bookmark, Globe, Heart, MessageCircle, MoreHorizontal, Send, Share2, ThumbsUp } from "lucide-react";

type Tab = "instagram" | "facebook" | "story";

const URL_RE = /(https?:\/\/\S+)/g;
const TAG_RE = /(#[\p{L}\p{N}_]+)/gu;

function RichText({ text, linkClass }: { text: string; linkClass: string }) {
  return (
    <>
      {text.split(URL_RE).map((part, i) =>
        URL_RE.test(part) ? (
          <span key={i} className={linkClass}>
            {part.replace(/^https?:\/\//, "").replace(/\?.*$/, "")}…
          </span>
        ) : (
          part.split(TAG_RE).map((p, j) =>
            p.startsWith("#") ? (
              <span key={`${i}-${j}`} className={linkClass}>
                {p}
              </span>
            ) : (
              <span key={`${i}-${j}`}>{p}</span>
            ),
          )
        ),
      )}
    </>
  );
}

function Clamp({ text, lines, linkClass, lead }: { text: string; lines: number; linkClass: string; lead?: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="pr-clamp">
      <p className={open ? undefined : "is-clamped"} style={{ WebkitLineClamp: open ? undefined : lines }}>
        {lead}
        <RichText text={text} linkClass={linkClass} />
      </p>
      {!open ? (
        <button type="button" className="pr-clamp__more" onClick={() => setOpen(true)}>
          {lead ? "plus" : "Voir plus"}
        </button>
      ) : null}
    </div>
  );
}

function Avatar() {
  return (
    <span className="pr-avatar" aria-hidden>
      <i />
    </span>
  );
}

function FacebookMock({ images, caption, when }: { images: string[]; caption: string; when: string }) {
  const more = images.length - 3;
  return (
    <article className="pr-fb" aria-label="Aperçu Facebook">
      <header className="pr-fb__head">
        <Avatar />
        <div>
          <b>ThermopompesÀVendre.ca</b>
          <span>
            {when} · <Globe size={11} aria-label="Public" />
          </span>
        </div>
        <MoreHorizontal size={18} aria-hidden className="pr-muted-ico" />
      </header>
      <div className="pr-fb__text">
        <Clamp text={caption} lines={5} linkClass="pr-fb__link" />
      </div>
      <div className={`pr-fbgrid pr-fbgrid--${Math.min(images.length, 3)}`}>
        {images.slice(0, 3).map((src, i) => (
          <div key={src} className="pr-fbgrid__cell">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt={`Visuel ${i + 1}`} loading="lazy" />
            {i === 2 && more > 0 ? <span className="pr-fbgrid__more">+{more}</span> : null}
          </div>
        ))}
      </div>
      <footer className="pr-fb__bar">
        <span>
          <ThumbsUp size={16} aria-hidden /> J’aime
        </span>
        <span>
          <MessageCircle size={16} aria-hidden /> Commenter
        </span>
        <span>
          <Share2 size={16} aria-hidden /> Partager
        </span>
      </footer>
    </article>
  );
}

function InstagramMock({ images, caption }: { images: string[]; caption: string }) {
  const [index, setIndex] = useState(0);
  const track = useRef<HTMLDivElement>(null);
  const go = (i: number) => {
    const el = track.current;
    if (!el) return;
    const reduce = typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: i * el.clientWidth, behavior: reduce ? "auto" : "smooth" });
  };
  return (
    <article className="pr-ig" aria-label="Aperçu Instagram">
      <header className="pr-ig__head">
        <Avatar />
        <b>thermopompesavendre</b>
        <MoreHorizontal size={18} aria-hidden className="pr-muted-ico" />
      </header>
      <div className="pr-igcar">
        <div
          ref={track}
          className="pr-igcar__track"
          tabIndex={0}
          aria-label="Carrousel : faites défiler"
          onScroll={(e) => {
            const el = e.currentTarget;
            setIndex(Math.round(el.scrollLeft / Math.max(1, el.clientWidth)));
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") go(Math.min(images.length - 1, index + 1));
            if (e.key === "ArrowLeft") go(Math.max(0, index - 1));
          }}
        >
          {images.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={src} src={src} alt={`Diapositive ${i + 1} sur ${images.length}`} loading={i < 2 ? "eager" : "lazy"} />
          ))}
        </div>
        {images.length > 1 ? <span className="pr-igcar__count">{`${index + 1}/${images.length}`}</span> : null}
      </div>
      <div className="pr-ig__bar">
        <span>
          <Heart size={20} aria-hidden />
          <MessageCircle size={20} aria-hidden />
          <Send size={20} aria-hidden />
        </span>
        {images.length > 1 ? (
          <span className="pr-igcar__dots" aria-hidden>
            {images.map((_, i) => (
              <i key={i} className={i === index ? "is-on" : undefined} />
            ))}
          </span>
        ) : (
          <span />
        )}
        <Bookmark size={20} aria-hidden />
      </div>
      <div className="pr-ig__text">
        <Clamp text={caption} lines={3} linkClass="pr-ig__tag" lead={<b>thermopompesavendre </b>} />
      </div>
    </article>
  );
}

function StoryMock({ src }: { src: string }) {
  return (
    <div className="pr-story" aria-label="Aperçu de la story">
      <span className="pr-story__bar" aria-hidden>
        <i />
      </span>
      <span className="pr-story__who">
        <Avatar /> thermopompesavendre
      </span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt="Story 1080 × 1920" />
    </div>
  );
}

export function PostPreview({ images, story, facebook, instagram, when }: { images: string[]; story: string | null; facebook: string; instagram: string; when: string }) {
  const [tab, setTab] = useState<Tab>("instagram");
  const tabs: Array<[Tab, string]> = [
    ["instagram", "Instagram"],
    ["facebook", "Facebook"],
    ...(story ? ([["story", "Story"]] as Array<[Tab, string]>) : []),
  ];
  return (
    <div className="pr-preview">
      <div className="pr-seg" role="tablist" aria-label="Réseau">
        {tabs.map(([t, label]) => (
          <button key={t} type="button" role="tab" aria-selected={tab === t} className={tab === t ? "is-on" : undefined} onClick={() => setTab(t)}>
            {label}
          </button>
        ))}
      </div>
      <div className="pr-phone">
        <div className="pr-phone__screen" key={tab}>
          {tab === "facebook" ? <FacebookMock images={images} caption={facebook} when={when} /> : null}
          {tab === "instagram" ? <InstagramMock images={images} caption={instagram} /> : null}
          {tab === "story" && story ? <StoryMock src={story} /> : null}
        </div>
      </div>
    </div>
  );
}
