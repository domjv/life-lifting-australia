import Image from "next/image";
import { Container } from "@/components/Container";
import { getEventGalleryContent } from "@/lib/contentful";
import { ImageGallery } from "@/components/ImageGallery";

export default async function EventGalleryPage() {
  const page = await getEventGalleryContent();

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
              <h1 className="text-4xl font-bold text-white">{page.heading}</h1>
            </Container>
          </div>
        </div>
      )}

      <Container className="py-12">
        {page.images && page.images.length > 0 ? (
          <ImageGallery images={page.images} />
        ) : (
          <p className="text-center text-gray-500">No images to display</p>
        )}
      </Container>
    </div>
  );
}
