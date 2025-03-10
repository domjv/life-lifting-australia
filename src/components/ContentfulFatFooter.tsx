"use client";
import { ContentfulFatFooterType } from "@/types/contentful";
import ContentfulLinkList from "./ContentfulLinkList";
import ContentfulLink from "./ContentfulLink";
import Link from "next/link";
import { motion } from "framer-motion";

interface ContentfulFatFooterProps {
  footer: ContentfulFatFooterType;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const socialLinkVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 10,
    },
  },
};

export default function ContentfulFatFooter({
  footer,
}: ContentfulFatFooterProps) {
  const {
    servicesSection,
    aboutSection,
    socialMediaSection,
    servicesSection2,
  } = footer;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
        <motion.div className="lg:col-span-2 space-y-6" variants={itemVariants}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Link href="/" className="inline-block">
              <span className="text-2xl font-semibold text-gray-900 dark:text-white">
                Life Lifting Australia
              </span>
            </Link>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="text-gray-600 dark:text-gray-400 max-w-md"
          >
            Lifting Together, Changing Lives.
          </motion.p>
          <motion.div variants={itemVariants} className="mt-12 pt-4">
            <div className="flex flex-wrap gap-4">
              {socialMediaSection.listOfLinksCollection.items.map(
                (link, index) => (
                  <motion.div
                    key={link.name}
                    variants={socialLinkVariants}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="pt-1 ps-2 pe-2 bg-gray-50 dark:bg-gray-900 rounded-full"
                  >
                    <ContentfulLink
                      link={link}
                      className="text-gray-600 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white"
                    />
                  </motion.div>
                )
              )}
            </div>
          </motion.div>
        </motion.div>

        <motion.div variants={itemVariants}>
          <ContentfulLinkList
            linkList={servicesSection}
            className="space-y-3"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <ContentfulLinkList
            linkList={servicesSection2}
            className="space-y-3 lg:pt-9"
          />
        </motion.div>

        <motion.div variants={itemVariants}>
          <ContentfulLinkList linkList={aboutSection} className="space-y-3" />
        </motion.div>
      </div>
    </motion.div>
  );
}
