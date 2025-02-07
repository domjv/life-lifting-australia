import Image from "next/image";
import { Container } from "@/components/Container";
import { ContentfulHeroSectionType } from "@/types/contentful";
import ContentfulLink from "./ContentfulLink";

export const Hero = ({
  heroSection,
}: {
  heroSection: ContentfulHeroSectionType;
}) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image with Blur Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroSection.backgroundImage.url}
          fill
          className="object-cover scale-110 blur-sm"
          alt="Background"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/75 dark:from-gray-950/90 dark:to-gray-900/75 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <Container className="relative z-10 flex min-h-screen items-center">
        <div className="grid lg:grid-cols-2 gap-8 w-full items-center py-12 lg:py-0">
          {/* Left content */}
          <div className="order-2 lg:order-1">
            <div className="max-w-2xl space-y-6 p-6 rounded-2xl bg-white/20 dark:bg-gray-900/20 backdrop-blur-md">
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white">
                {heroSection.headingAndDescription.heading}
              </h1>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200">
                {heroSection.headingAndDescription.subHeading}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <ContentfulLink link={heroSection.buttonsCollection.items[0]} />
                {heroSection.buttonsCollection.items.length > 1 && (
                  <ContentfulLink
                    link={heroSection.buttonsCollection.items[1]}
                  />
                )}
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[600px] group">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 dark:from-blue-400/10 dark:to-purple-400/10" />
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <Image
                  src={heroSection.sideImage.url}
                  fill
                  className="object-cover object-center scale-[1.02] group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                  alt="Hero Illustration"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
