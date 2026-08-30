import type { Metadata } from "next";

interface GuidePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  return {
    title: slug.replace(/-/g, " "),
  };
}

export default async function GuideDetailPage({ params }: GuidePageProps) {
  const { slug } = await params;

  return (
    <main>
      <h1>Guide : {slug}</h1>
    </main>
  );
}
