/* Chantier A — rendu d'une réponse de l'assistant : paragraphes, listes, gras, italique, code et liens internes
   (/gestion seulement). Aucun HTML injecté : le texte devient des éléments React. */
import Link from "next/link";

const INLINE = /(\*\*[^*\n]+\*\*|\[[^\]\n]+\]\([^)\s]+\)|`[^`\n]+`|(?<![\w])_[^_\n]+_(?![\w]))/g;
const LINK = /^\[([^\]\n]+)\]\(([^)\s]+)\)$/;
const SAFE = /^\/gestion(?:[/?#][^\s]*)?$/;

function inline(text: string, key: string): React.ReactNode[] {
  return text.split(INLINE).map((part, i) => {
    const k = `${key}-${i}`;
    if (!part) return null;
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) return <strong key={k}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("`") && part.endsWith("`") && part.length > 2) return <code key={k}>{part.slice(1, -1)}</code>;
    if (part.startsWith("_") && part.endsWith("_") && part.length > 2) return <em key={k}>{part.slice(1, -1)}</em>;
    const m = LINK.exec(part);
    if (m) {
      return SAFE.test(m[2]) ? (
        <Link key={k} href={m[2]} className="as-link" prefetch={false}>
          {m[1]}
        </Link>
      ) : (
        <span key={k}>{m[1]}</span>
      );
    }
    return <span key={k}>{part}</span>;
  });
}

const BULLET = /^\s*(?:[-*•])\s+(.*)$/;
const ORDERED = /^\s*\d+[.)]\s+(.*)$/;
const HEADING = /^\s*#{1,4}\s+(.*)$/;

export function Answer({ text }: { text: string }) {
  const lines = text.replace(/\r/g, "").split("\n");
  const blocks: React.ReactNode[] = [];
  let para: string[] = [];
  let list: { ordered: boolean; items: string[] } | null = null;
  const flushPara = () => {
    if (para.length) {
      const k = `p${blocks.length}`;
      blocks.push(
        <p key={k}>
          {para.flatMap((l, i) => (i ? [<br key={`${k}-br${i}`} />, ...inline(l, `${k}-${i}`)] : inline(l, `${k}-${i}`)))}
        </p>,
      );
    }
    para = [];
  };
  const flushList = () => {
    if (list) {
      const k = `l${blocks.length}`;
      const items = list.items.map((it, i) => <li key={`${k}-${i}`}>{inline(it, `${k}-${i}`)}</li>);
      blocks.push(list.ordered ? <ol key={k}>{items}</ol> : <ul key={k}>{items}</ul>);
    }
    list = null;
  };
  for (const line of lines) {
    const b = BULLET.exec(line);
    const o = b ? null : ORDERED.exec(line);
    const h = b || o ? null : HEADING.exec(line);
    if (b || o) {
      flushPara();
      const ordered = Boolean(o);
      if (!list || list.ordered !== ordered) {
        flushList();
        list = { ordered, items: [] };
      }
      list.items.push((b ?? o)![1]);
    } else if (h) {
      flushPara();
      flushList();
      blocks.push(
        <p key={`h${blocks.length}`} className="as-h">
          {inline(h[1], `h${blocks.length}`)}
        </p>,
      );
    } else if (!line.trim()) {
      flushPara();
      flushList();
    } else {
      flushList();
      para.push(line.trim());
    }
  }
  flushPara();
  flushList();
  return <div className="as-md">{blocks}</div>;
}
