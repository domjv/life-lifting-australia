import Image from "next/image";
import { Container } from "@/components/Container";
import {
  getServicesPageContent,
  getLinkListByTitle,
  getAllServicePages,
} from "@/lib/contentful";
import RichTextRenderer from "@/components/RichTextRenderer";
import ContentfulLink from "@/components/ContentfulLink";

export default async function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const [page, servicesList] = await Promise.all([
    getServicesPageContent(params.slug),
    getLinkListByTitle("Common | Fat Footer | Link List | Services"),
  ]);

  if (!page) {
    return null;
  }

  const services = servicesList?.listOfLinksCollection.items || [];

  return (
    <div className="min-h-screen">
      {page.backgroundImage && (
        <div className="relative w-full h-[400px]">
          <Image
            src={page.backgroundImage.url}
            alt={page.backgroundImage.description}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <Container>
              <h1 className="text-4xl font-bold text-white">
                {page.contentOfThePage?.heading}
              </h1>
            </Container>
          </div>
        </div>
      )}

      <Container className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            {page.contentOfThePage && (
              <div>
                {page.contentOfThePage.description && (
                  <RichTextRenderer
                    content={page.contentOfThePage.description.json}
                  />
                )}
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Our Services</h3>
              <div className="space-y-3">
                {services.map((service) => (
                  <ContentfulLink link={service} key={service.name} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export async function generateStaticParams() {
  const pages = await getAllServicePages();
  return pages.map((page) => ({
    slug: page.slug,
  }));
}
