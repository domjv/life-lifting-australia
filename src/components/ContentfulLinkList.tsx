"use client";
import { ContentfulLinkListType } from "@/types/contentful";
import ContentfulLink from "./ContentfulLink";
import { motion } from "framer-motion";

interface ContentfulLinkListProps {
  linkList: ContentfulLinkListType;
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
    },
  },
};

export default function ContentfulLinkList({
  linkList,
  className = "",
}: ContentfulLinkListProps) {
  const { heading, listOfLinksCollection } = linkList;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      {heading != " " && (
        <motion.h4
          variants={itemVariants}
          className="font-semibold text-gray-700 dark:text-gray-200 pb-3 pt-3 lg:pt-0"
        >
          {heading}
        </motion.h4>
      )}
      <motion.div className={className} variants={containerVariants}>
        {listOfLinksCollection.items.map((link) => (
          <motion.div
            key={link.name}
            variants={itemVariants}
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ContentfulLink
              key={link.name}
              link={link}
              className="w-full py-2 text-gray-500 rounded-md dark:text-gray-300"
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
