import Image from "next/image";
import { Container } from "@/components/Container";
import { getIframePageContent, getAllIframePages } from "@/lib/contentful";
import { ResponsiveIframe } from "@/components/ResponsiveIframe";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const pages = await getAllIframePages();
  return pages.map((page) => ({
    slug: page.slug,
  }));
}

export default async function IframePage({
  params,
}: {
  params: { slug: string };
}) {
  const page = await getIframePageContent(params.slug);

  if (!page) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {page.backgroundImage && (
        <div className="relative w-full h-[400px]">
          <Image
            src={page.backgroundImage.url}
            alt={page.backgroundImage.description}
            fill
            className="object-cover"
            style={{ objectPosition: "50% 20%" }}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <Container>
              <h1 className="text-4xl font-bold text-white">{page.heading}</h1>
            </Container>
          </div>
        </div>
      )}

      <Container className="py-12">
        <div className="max-w-4xl mx-auto">
          <ResponsiveIframe src={page.iFrameUrl} title={page.title} />
        </div>
      </Container>
    </div>
  );
}
