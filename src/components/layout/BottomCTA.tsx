import Link from "next/link";
import { cn } from "@/lib/utils";
import { Container } from "./Container";
import { buttonVariants } from "@/components/ui/button";

export function BottomCTA() {
  return (
    <section className="border-t border-border py-20 md:py-28">
      <Container width="content" className="text-center">
        <h2
          className="font-semibold"
          style={{
            fontSize: "var(--text-h1)",
            lineHeight: "var(--leading-heading)",
            letterSpacing: "var(--tracking-heading)",
          }}
        >
          Trouvez la thermopompe adaptée à votre maison.
        </h2>
        <p
          className="mt-4 text-muted mx-auto max-w-lg"
          style={{ fontSize: "var(--text-body-lg)" }}
        >
          Répondez à quelques questions et recevez des recommandations
          personnalisées pour votre propriété.
        </p>
        <Link
          href="/trouver-ma-thermopompe"
          className={cn(buttonVariants({ variant: "default", size: "lg" }), "mt-8")}
        >
          Commencer
        </Link>
      </Container>
    </section>
  );
}
