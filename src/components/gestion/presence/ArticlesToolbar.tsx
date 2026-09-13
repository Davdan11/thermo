"use client";

/* Articles : préparer les brouillons à partir des données, nouvelle question de la semaine, nouvel article libre. */
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { FilePlus, MessageSquareQuote, Wand2 } from "lucide-react";
import { createArticleAction, prepareDraftsAction, type ArticleResult } from "@/app/gestion/(prive)/presence/articles/actions";

export function ArticlesToolbar() {
  const [pending, start] = useTransition();
  const [res, setRes] = useState<ArticleResult>();
  const router = useRouter();
  const create = (t: "question" | "libre") =>
    start(async () => {
      const r = await createArticleAction(t);
      setRes(r);
      if (r?.ok && r.id) router.push(`/gestion/presence/articles/${r.id}`);
    });
  return (
    <div style={{ display: "grid", gap: 8, justifyItems: "end" }}>
      <div className="ar-toolbar-top">
        <button type="button" className="k-btn k-btn--primary" disabled={pending} onClick={() => start(async () => setRes(await prepareDraftsAction()))}>
          <Wand2 size={16} aria-hidden /> Préparer les brouillons
        </button>
        <button type="button" className="k-btn" disabled={pending} onClick={() => create("question")}>
          <MessageSquareQuote size={16} aria-hidden /> Question de la semaine
        </button>
        <button type="button" className="k-btn" disabled={pending} onClick={() => create("libre")}>
          <FilePlus size={16} aria-hidden /> Article libre
        </button>
      </div>
      {res ? (
        <p className={`pr-msg ${res.ok ? "is-ok" : "is-bad"}`} role={res.ok ? "status" : "alert"}>
          {res.ok ? res.message : res.error}
        </p>
      ) : null}
    </div>
  );
}
