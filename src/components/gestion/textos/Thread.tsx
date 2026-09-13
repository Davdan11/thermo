"use client";

/* Fil d'une conversation : séparateurs de jour, bulles (client à gauche, vous à droite), pièces jointes,
   statut d'envoi. Les nouvelles bulles glissent en place ; à l'ouverture, seules les dernières s'animent. */
import { Fragment, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { AlertTriangle, FileText, ImageIcon } from "lucide-react";
import { useReduced } from "@/components/heroes-v2/outils/motion";
import type { ThreadItem } from "@/lib/textos/view";

const EASE = [0.22, 1, 0.36, 1] as const;
const ANIMATED_ON_OPEN = 10;

function MediaTile({ src, image, type }: { src: string; image: boolean; type: string }) {
  const [broken, setBroken] = useState(false);
  return (
    <a href={src} target="_blank" rel="noopener" className="t-media__tile">
      {image && !broken ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt="Photo reçue"
          loading="lazy"
          decoding="async"
          onError={() => setBroken(true)}
          // Erreur survenue avant l'hydratation (onError manqué) : l'image est déjà « complète » sans largeur.
          ref={(el) => {
            if (el?.complete && el.naturalWidth === 0) setBroken(true);
          }}
        />
      ) : (
        <span className="t-media__file">
          {image ? <ImageIcon size={22} aria-hidden /> : <FileText size={22} aria-hidden />}
          {image ? "Photo : ouvrir" : type}
        </span>
      )}
    </a>
  );
}

function Content({ m, conversationId }: { m: ThreadItem; conversationId: string }) {
  return (
    <>
      {m.note ? <span className="t-note">{m.note}</span> : null}
      {m.media.length ? (
        <div className="t-media">
          {m.media.map((x) => (
            <MediaTile key={x.index} src={`/gestion/api/textos/media?c=${conversationId}&m=${m.id}&i=${x.index}`} image={x.image} type={x.type} />
          ))}
        </div>
      ) : null}
      {m.body ? <div className="t-bubble">{m.body}</div> : null}
      <span className="t-meta">
        <time title={m.full}>{m.time}</time>
        {m.statusLabel ? <span className={`t-status t-status--${m.tone}`}>· {m.statusLabel}</span> : null}
      </span>
      {m.error ? (
        <span className="t-err">
          <AlertTriangle size={12} aria-hidden /> {m.error}
        </span>
      ) : null}
    </>
  );
}

export function Thread({ conversationId, items }: { conversationId: string; items: ThreadItem[] }) {
  const reduced = useReduced();
  const scroller = useRef<HTMLDivElement>(null);
  const end = useRef<HTMLDivElement>(null);
  // Nombre de messages à l'ouverture, figé : seules les dernières bulles s'animent, puis chaque nouvelle.
  const [opened] = useState(items.length);
  const first = useRef(true);

  // Toujours au dernier message : à l'ouverture, puis à chaque nouveau message.
  useEffect(() => {
    const box = scroller.current;
    const smooth = !first.current && !reduced;
    if (box && box.scrollHeight > box.clientHeight + 4 && getComputedStyle(box).overflowY !== "visible") {
      box.scrollTo({ top: box.scrollHeight, behavior: smooth ? "smooth" : "auto" });
    } else {
      end.current?.scrollIntoView({ block: "end", behavior: smooth ? "smooth" : "auto" });
    }
    first.current = false;
  }, [items.length, reduced]);

  return (
    <div className="t-scroll" ref={scroller} role="log" aria-label="Messages de la conversation">
      {items.map((m, i) => {
        const sep = i === 0 || items[i - 1].dayKey !== m.dayKey ? <div className="t-day">{m.day}</div> : null;
        const cls = [
          "t-msg",
          `t-msg--${m.dir}`,
          m.dir === "out" && m.note && !m.statusLabel ? "t-msg--auto" : "",
          m.note === "Désabonnement" ? "t-msg--stop" : "",
          m.tone === "bad" ? "t-msg--failed" : "",
        ]
          .filter(Boolean)
          .join(" ");
        const isNew = i >= opened;
        const animate = !reduced && (isNew || i >= opened - ANIMATED_ON_OPEN);
        const delay = isNew ? 0.05 : Math.max(0, i - (opened - ANIMATED_ON_OPEN)) * 0.035;
        return (
          <Fragment key={m.id}>
            {sep}
            {animate ? (
              <motion.div
                className={cls}
                initial={{ opacity: 0, y: 12, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, delay, ease: EASE }}
                style={{ transformOrigin: m.dir === "in" ? "0% 100%" : "100% 100%" }}
              >
                <Content m={m} conversationId={conversationId} />
              </motion.div>
            ) : (
              <div className={cls}>
                <Content m={m} conversationId={conversationId} />
              </div>
            )}
          </Fragment>
        );
      })}
      <div ref={end} className="t-end" aria-hidden />
    </div>
  );
}
