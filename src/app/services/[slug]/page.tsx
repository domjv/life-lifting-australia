import Image from "next/image";
import { Container } from "@/components/Container";
import { getServicesPageContent } from "@/lib/contentful";
import Link from "next/link";
import RichTextRenderer from "@/components/RichTextRenderer";

export default async function ServicePage({
  params,
}: {
  params: { slug: string };
}) {
  const page = await getServicesPageContent(params.slug);

  if (!page) {
    return null;
  }

  const demoServices = [
    { title: "Personal Training", slug: "personal-training" },
    { title: "Group Fitness", slug: "group-fitness" },
    { title: "Nutrition Coaching", slug: "nutrition-coaching" },
    { title: "Strength Training", slug: "strength-training" },
  ];

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
                <h2 className="text-3xl font-bold mb-4">
                  {page.contentOfThePage.heading}
                </h2>
                {page.contentOfThePage.description && (
                  <RichTextRenderer
                    content={page.contentOfThePage.description.json}
                  />
                )}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Our Services</h3>
              <div className="space-y-3">
                {demoServices.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="block text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
