"use client";
import Image from "next/image";
import { ContentfulSectionWithImageType } from "@/types/contentful";
import { Container } from "./Container";
import ContentfulIconHeadingShortText from "./ContentfulIconHeadingShortText";
import { motion } from "framer-motion";

interface ContentfulSectionWithImageProps {
  section: ContentfulSectionWithImageType;
}

export default function ContentfulSectionWithImage({
  section,
}: ContentfulSectionWithImageProps) {
  const {
    title,
    sectionImage,
    headingWithTextCollection,
    iconHeadingShortTextCollection,
    sectionImagePlacement,
  } = section;

  const heading = headingWithTextCollection?.items[0].heading;
  const description = headingWithTextCollection?.items[0].subHeading;

  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className={`flex items-center justify-center w-full lg:w-1/2 group ${
            sectionImagePlacement === "Right" ? "lg:order-2" : ""
          }`}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            className="relative w-full rounded-3xl overflow-hidden"
          >
            <Image
              src={sectionImage.url}
              width={521}
              height={521}
              alt={title}
              className="object-cover object-center w-full h-full"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/10 pointer-events-none"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            sectionImagePlacement === "Right" ? "lg:order-1" : ""
          }`}
        >
          <div>
            {heading && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col w-full mt-4"
              >
                <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                  {heading}
                </h3>

                <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                  {description}
                </p>
              </motion.div>
            )}

            {iconHeadingShortTextCollection?.items && (
              <div className="w-full mt-5 space-y-8">
                {iconHeadingShortTextCollection.items.map((item) => (
                  <ContentfulIconHeadingShortText
                    key={item.sys.id}
                    item={item}
                  />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </Container>
    </>
  );
}
