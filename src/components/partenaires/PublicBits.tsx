/* Petits éléments serveur des pages publiques du volet A : couverture à arcs, page simple, pied. */
import { BRAND } from "@/lib/crm/templates/layout";

export function Arcs({ className = "pp-cover__arcs" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 340 340" aria-hidden>
      <circle cx="170" cy="170" r="166" />
      <circle cx="170" cy="170" r="128" />
      <circle cx="170" cy="170" r="90" />
      <circle cx="170" cy="170" r="52" />
    </svg>
  );
}

export function Mark({ sub }: { sub: string }) {
  return (
    <div className="pp-mark">
      <i aria-hidden />
      Thermopompes À Vendre <span>· {sub}</span>
    </div>
  );
}

export function Plain({ icon, title, text }: { icon: React.ReactNode; title: string; text: React.ReactNode }) {
  return (
    <main className="pp pp-plain">
      <div className="pp-plain__box pp-rise">
        <span className="pp-plain__icon" aria-hidden>
          {icon}
        </span>
        <h1 className="pp-section-title">{title}</h1>
        <p className="pp-lead" style={{ marginInline: "auto" }}>{text}</p>
        <p className="pp-foot">
          Une question ? <a href={BRAND.phoneHref}>{BRAND.phone}</a>
        </p>
      </div>
    </main>
  );
}

export function Foot() {
  return (
    <p className="pp-foot">
      Une question ? <a href={BRAND.phoneHref}>{BRAND.phone}</a> · {BRAND.name}
    </p>
  );
}
