import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Le balisage BreadcrumbList est émis une seule fois par la page (getBreadcrumbSchema),
  // avec « Accueil » en tête, pour rester identique au fil affiché ici.
  return (
    <div className="py-4 text-[13px] text-[#667680]">
      <ol className="flex items-center gap-2 flex-wrap">
        <li>
          <Link href="/" className="hover:text-[#e54b17] transition-colors">
            Accueil
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-gray-400">/</span>
            {index === items.length - 1 ? (
              <span className="text-[#10212b] font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-[#e54b17] transition-colors">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
