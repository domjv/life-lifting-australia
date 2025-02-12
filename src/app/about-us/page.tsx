import Image from "next/image";
import { Container } from "@/components/Container";
import { getAboutUsPageContent } from "@/lib/contentful";
import RichTextRenderer from "@/components/RichTextRenderer";

export default async function AboutUsPage() {
  const page = await getAboutUsPageContent();

  if (!page) {
    return null;
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
              <h1 className="text-4xl font-bold text-white">
                {page.content?.heading}
              </h1>
            </Container>
          </div>
        </div>
      )}

      <Container className="py-12">
        <div className="max-w-4xl mx-auto">
          {page.content && (
            <div>
              {page.content.description && (
                <RichTextRenderer content={page.content.description.json} />
              )}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
