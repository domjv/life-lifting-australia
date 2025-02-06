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
    <>
      <Container className="flex flex-wrap ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              {heroSection.headingAndDescription.heading}
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              {heroSection.headingAndDescription.subHeading}
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <ContentfulLink link={heroSection.buttonsCollection.items[0]} />
              {heroSection.buttonsCollection.items.length > 1 && (
                <ContentfulLink link={heroSection.buttonsCollection.items[1]} />
              )}
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroSection.backgroundImage.url}
              width="1416"
              height="1416"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
            />
          </div>
        </div>
      </Container>
    </>
  );
};
